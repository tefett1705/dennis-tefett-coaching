import type { VercelRequest, VercelResponse } from '@vercel/node'
import { kv } from '@vercel/kv'
import { createHash } from 'crypto'

/* ── Types ── */
interface DayAnalytics {
  date: string
  visitors: string[]
  pageViews: number
  pages: Record<string, number>
  referrers: Record<string, number>
}

/* ── Helpers ── */
const BOT_PATTERNS = /bot|crawl|spider|lighthouse|pagespeed|headless|puppeteer|playwright|slurp|mediapartners|facebookexternalhit|bingpreview|yandex|baidu|duckduck|semrush|ahrefs|mj12bot/i

function isBot(ua: string): boolean {
  return BOT_PATTERNS.test(ua)
}

function getToday(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function hashVisitor(ip: string, ua: string, date: string): string {
  const salt = process.env.ANALYTICS_SALT || 'dt-analytics-default'
  return createHash('sha256').update(`${salt}:${date}:${ip}:${ua}`).digest('hex').slice(0, 16)
}

function extractReferrerDomain(referrer: string): string {
  if (!referrer) return 'direkt'
  try {
    const url = new URL(referrer)
    const host = url.hostname.replace(/^www\./, '')
    if (host === 'dennis-tefett.de') return 'intern'
    return host
  } catch {
    return 'direkt'
  }
}

function setCors(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', 'https://dennis-tefett.de')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}

/* ── Handler ── */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res)

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  // POST: Track page view
  if (req.method === 'POST') {
    try {
      const ua = req.headers['user-agent'] || ''
      if (isBot(ua)) {
        return res.status(204).end()
      }

      const { path, referrer } = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {})
      if (!path || path.startsWith('/admin')) {
        return res.status(204).end()
      }

      const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim()
        || req.headers['x-real-ip'] as string
        || '0.0.0.0'
      const date = getToday()
      const visitorHash = hashVisitor(ip, ua, date)
      const kvKey = `analytics:${date}`

      const existing = await kv.get<DayAnalytics>(kvKey)
      const day: DayAnalytics = existing || {
        date,
        visitors: [],
        pageViews: 0,
        pages: {},
        referrers: {},
      }

      // Add visitor if new
      if (!day.visitors.includes(visitorHash)) {
        day.visitors.push(visitorHash)
      }

      // Increment page views
      day.pageViews += 1
      day.pages[path] = (day.pages[path] || 0) + 1

      // Track referrer (only for new visitors)
      if (!existing || !existing.visitors.includes(visitorHash)) {
        const refDomain = extractReferrerDomain(referrer || '')
        if (refDomain !== 'intern') {
          day.referrers[refDomain] = (day.referrers[refDomain] || 0) + 1
        }
      }

      // Save with 90-day TTL
      await kv.set(kvKey, day, { ex: 7776000 })

      return res.status(204).end()
    } catch (err) {
      console.error('[Analytics] Track error:', err)
      return res.status(204).end()
    }
  }

  // GET: Admin stats
  if (req.method === 'GET') {
    const action = req.query.action as string
    if (action !== 'stats') {
      return res.status(400).json({ success: false, message: 'Unknown action' })
    }

    // Auth check
    const authHeader = req.headers.authorization
    const adminPassword = process.env.ADMIN_PASSWORD
    if (!authHeader?.startsWith('Bearer ') || authHeader.slice(7) !== adminPassword) {
      return res.status(401).json({ success: false, message: 'Nicht autorisiert' })
    }

    try {
      const daysParam = req.query.days as string
      const results: DayAnalytics[] = []
      const today = new Date()

      if (daysParam === 'all') {
        // Fetch all analytics keys
        const keys = await kv.keys('analytics:*')
        for (const key of keys) {
          const data = await kv.get<DayAnalytics>(key)
          if (data) results.push(data)
        }
        results.sort((a, b) => a.date.localeCompare(b.date))
      } else {
        const days = parseInt(daysParam) || 7
        for (let i = 0; i < days; i++) {
          const d = new Date(today)
          d.setDate(d.getDate() - i)
          const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
          const data = await kv.get<DayAnalytics>(`analytics:${dateStr}`)
          results.push(data || { date: dateStr, visitors: [], pageViews: 0, pages: {}, referrers: {} })
        }
      }

      // Aggregate totals
      const allPages: Record<string, number> = {}
      const allReferrers: Record<string, number> = {}
      let totalVisitors = 0
      let totalPageViews = 0

      for (const day of results) {
        totalVisitors += day.visitors.length
        totalPageViews += day.pageViews
        for (const [page, count] of Object.entries(day.pages)) {
          allPages[page] = (allPages[page] || 0) + count
        }
        for (const [ref, count] of Object.entries(day.referrers)) {
          allReferrers[ref] = (allReferrers[ref] || 0) + count
        }
      }

      const topPages = Object.entries(allPages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([path, views]) => ({ path, views }))

      const topReferrers = Object.entries(allReferrers)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([source, count]) => ({ source, count }))

      // Daily breakdown (oldest first for chart)
      if (daysParam !== 'all') results.reverse()
      const daily = results.map(d => ({
        date: d.date,
        visitors: d.visitors.length,
        pageViews: d.pageViews,
      }))

      return res.status(200).json({
        success: true,
        days: daily,
        totals: {
          visitors: totalVisitors,
          pageViews: totalPageViews,
          topPages,
          topReferrers,
        },
      })
    } catch (err) {
      console.error('[Analytics] Stats error:', err)
      return res.status(500).json({ success: false, message: 'Fehler beim Laden der Statistiken' })
    }
  }

  return res.status(405).json({ success: false, message: 'Method not allowed' })
}
