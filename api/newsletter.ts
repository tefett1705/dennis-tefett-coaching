import type { VercelRequest, VercelResponse } from '@vercel/node'
import { kv } from '@vercel/kv'
import nodemailer from 'nodemailer'

/* ── Types ── */
interface NewsletterSubscriber {
  gender: string
  firstName: string
  lastName: string
  email: string
  birthYear: string
  zip: string
  source: string
  subscribedAt: string
  status: 'active' | 'unsubscribed'
}

/* ── Security helpers ── */
const ALLOWED_ORIGIN = 'https://dennis-tefett.de'

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

function sanitizeHeader(str: string): string {
  return str.replace(/[\r\n\0]/g, '')
}

function setCors(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Vary', 'Origin')
}

/* ── Admin Auth ── */
function checkAdmin(req: VercelRequest): boolean {
  const auth = req.headers.authorization
  if (!auth || !auth.startsWith('Bearer ')) return false
  return auth.slice(7) === process.env.ADMIN_PASSWORD
}

/* ── Validation helpers ── */
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateFields(body: Record<string, unknown>): string | null {
  const { gender, firstName, lastName, email, birthYear, zip } = body
  if (!gender || !['Herr', 'Frau', 'Divers'].includes(String(gender))) return 'Ungültige Anrede'
  if (!firstName || String(firstName).trim().length === 0) return 'Vorname ist erforderlich'
  if (String(firstName).length > 100) return 'Vorname zu lang'
  if (!lastName || String(lastName).trim().length === 0) return 'Nachname ist erforderlich'
  if (String(lastName).length > 100) return 'Nachname zu lang'
  if (!email || !validateEmail(String(email))) return 'Ungültige E-Mail-Adresse'
  const year = Number(birthYear)
  if (!birthYear || isNaN(year) || year < 1940 || year > new Date().getFullYear() - 10) return 'Ungültiges Geburtsjahr'
  if (!zip || !/^\d{5}$/.test(String(zip))) return 'Ungültige Postleitzahl (5 Ziffern)'
  return null
}

/* ── Confirmation email ── */
async function sendConfirmationEmail(subscriber: {
  gender: string
  lastName: string
  email: string
}): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log('[Newsletter] SMTP nicht konfiguriert — E-Mail wird übersprungen')
    return
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '587', 10),
    secure: parseInt(SMTP_PORT || '587', 10) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  await transporter.sendMail({
    from: `"Dennis Tefett Coaching" <${SMTP_USER}>`,
    to: sanitizeHeader(subscriber.email),
    subject: 'Willkommen beim Newsletter — Dennis Tefett Coaching',
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #f8f9fa;">
        <div style="background: #061a2d; border-radius: 16px; padding: 40px 32px; color: #ffffff;">
          <h1 style="font-size: 24px; margin: 0 0 20px; color: #2DD4BF; font-weight: 600;">
            Willkommen, ${subscriber.gender === 'Frau' ? 'Frau' : subscriber.gender === 'Herr' ? 'Herr' : ''} ${escapeHtml(subscriber.lastName)}!
          </h1>
          <p style="font-size: 15px; line-height: 1.7; color: #a0aec0; margin: 0 0 20px;">
            Vielen Dank für Ihre Anmeldung zum Newsletter. Sie erhalten ab sofort alle zwei Wochen
            fundierte Handouts zu Themen der Persönlichkeitsentwicklung — basierend auf
            Neurowissenschaft und Praxiserfahrung.
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #a0aec0; margin: 0 0 24px;">
            Ihr erstes Handout kommt mit dem nächsten regulären Versand.
          </p>
          <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; margin-top: 20px;">
            <p style="font-size: 13px; color: #718096; margin: 0;">
              Mit besten Grüßen,<br/>
              <strong style="color: #2DD4BF;">Dennis Tefett</strong><br/>
              Executive Coach
            </p>
          </div>
        </div>
        <p style="font-size: 11px; color: #a0aec0; text-align: center; margin-top: 20px;">
          Sie können sich jederzeit vom Newsletter abmelden.
        </p>
      </div>
    `,
  })

  console.log('[Newsletter] Bestätigungs-E-Mail gesendet')
}

/* ── Notification to Dennis ── */
async function sendNotificationToAdmin(subscriber: {
  gender: string
  firstName: string
  lastName: string
  email: string
  birthYear: string
  zip: string
  source: string
}): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) return

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '587', 10),
    secure: parseInt(SMTP_PORT || '587', 10) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  await transporter.sendMail({
    from: `"Dennis Tefett Webseite" <${SMTP_USER}>`,
    to: NOTIFY_EMAIL,
    subject: sanitizeHeader(`Neuer Newsletter-Abonnent: ${subscriber.firstName} ${subscriber.lastName}`),
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #061a2d; border-bottom: 2px solid #2DD4BF; padding-bottom: 10px;">
          Neuer Newsletter-Abonnent
        </h2>
        <p><strong>Anrede:</strong> ${escapeHtml(subscriber.gender)}</p>
        <p><strong>Name:</strong> ${escapeHtml(subscriber.firstName)} ${escapeHtml(subscriber.lastName)}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${escapeHtml(subscriber.email)}">${escapeHtml(subscriber.email)}</a></p>
        <p><strong>Geburtsjahr:</strong> ${escapeHtml(subscriber.birthYear)}</p>
        <p><strong>PLZ:</strong> ${escapeHtml(subscriber.zip)}</p>
        <p><strong>Quelle:</strong> ${escapeHtml(subscriber.source)}</p>
        <p style="font-size: 12px; color: #999; margin-top: 20px;">
          Angemeldet am ${new Date().toLocaleString('de-DE')}
        </p>
      </div>
    `,
  })
}

/* ── GET /api/newsletter?action=list ── */
async function listSubscribers(): Promise<NewsletterSubscriber[]> {
  const keys = await kv.keys('newsletter:*')
  if (!keys.length) return []
  const subscribers: NewsletterSubscriber[] = []
  for (const key of keys) {
    const sub = await kv.get<NewsletterSubscriber>(key)
    if (sub) subscribers.push(sub)
  }
  return subscribers.sort((a, b) => b.subscribedAt.localeCompare(a.subscribedAt))
}

/* ── GET /api/newsletter?action=count ── */
async function countSubscribers(): Promise<number> {
  const keys = await kv.keys('newsletter:*')
  return keys.length
}

/* ── Serverless Handler ── */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res)

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const action = String(req.query.action || '')

  try {
    // GET actions
    if (req.method === 'GET') {
      switch (action) {
        case 'list': {
          if (!checkAdmin(req)) return res.status(401).json({ success: false, message: 'Nicht autorisiert' })
          const subscribers = await listSubscribers()
          return res.status(200).json({ success: true, subscribers })
        }
        case 'count': {
          if (!checkAdmin(req)) return res.status(401).json({ success: false, message: 'Nicht autorisiert' })
          const count = await countSubscribers()
          return res.status(200).json({ success: true, count })
        }
        default:
          return res.status(400).json({ success: false, message: 'Ungültige Aktion' })
      }
    }

    // POST — subscribe
    if (req.method !== 'POST') {
      return res.status(405).json({ success: false, message: 'Method not allowed' })
    }

    const validationError = validateFields(req.body || {})
    if (validationError) {
      return res.status(400).json({ success: false, message: validationError })
    }

    const { gender, firstName, lastName, email, birthYear, zip, source } = req.body

    const subscriber = {
      gender: String(gender),
      firstName: String(firstName).trim(),
      lastName: String(lastName).trim(),
      email: String(email).toLowerCase().trim(),
      birthYear: String(birthYear),
      zip: String(zip),
      source: String(source || 'unknown'),
    }

    // Store subscriber in Vercel KV
    const kvEntry: NewsletterSubscriber = {
      ...subscriber,
      subscribedAt: new Date().toISOString(),
      status: 'active',
    }
    await kv.set(`newsletter:${subscriber.email}`, kvEntry)

    console.log('[Newsletter] Neuer Abonnent gespeichert:', subscriber.email)

    // Send emails (non-blocking, don't fail if email fails)
    await Promise.allSettled([
      sendConfirmationEmail(subscriber),
      sendNotificationToAdmin(subscriber),
    ])

    return res.status(200).json({
      success: true,
      message: 'Anmeldung erfolgreich! Sie erhalten in Kürze eine Bestätigungsmail.',
    })
  } catch (err) {
    console.error('[Newsletter] Fehler:', err)
    return res.status(500).json({ success: false, message: 'Ein Fehler ist aufgetreten.' })
  }
}
