import type { VercelRequest, VercelResponse } from '@vercel/node'
import { kv } from '@vercel/kv'
import nodemailer from 'nodemailer'

/* ── Types ── */
interface TimeSlot {
  id: string
  date: string
  time: string
  duration: number
  status: 'available' | 'pending' | 'confirmed' | 'declined'
  booking?: {
    name: string
    email: string
    phone: string
    message?: string
    contactType?: 'zoom' | 'phone'
    bookedAt: string
  }
}

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

/* ── Helpers ── */
function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

function formatDateDE(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

/* ── Data fetching ── */
async function getAllSlots(): Promise<TimeSlot[]> {
  const keys = await kv.keys('slot:*')
  if (!keys.length) return []
  const slots: TimeSlot[] = []
  for (const key of keys) {
    const slot = await kv.get<TimeSlot>(key)
    if (slot) slots.push(slot)
  }
  return slots.sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))
}

async function getAllSubscribers(): Promise<NewsletterSubscriber[]> {
  const keys = await kv.keys('newsletter:*')
  if (!keys.length) return []
  const subs: NewsletterSubscriber[] = []
  for (const key of keys) {
    const sub = await kv.get<NewsletterSubscriber>(key)
    if (sub) subs.push(sub)
  }
  return subs.sort((a, b) => b.subscribedAt.localeCompare(a.subscribedAt))
}

/* ── Build email ── */
function buildSummaryEmail(slots: TimeSlot[], subscribers: NewsletterSubscriber[]): { subject: string; html: string } {
  const today = new Date()
  const todayStr = today.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

  // Calculate yesterday for "since yesterday" comparisons
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  yesterday.setHours(0, 0, 0, 0)
  const yesterdayISO = yesterday.toISOString()

  // Slots analysis
  const todayDateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  const futureSlots = slots.filter(s => s.date >= todayDateStr)
  const availableSlots = futureSlots.filter(s => s.status === 'available')
  const pendingSlots = futureSlots.filter(s => s.status === 'pending')
  const confirmedSlots = futureSlots.filter(s => s.status === 'confirmed')
  const todaySlots = futureSlots.filter(s => s.date === todayDateStr && (s.status === 'confirmed' || s.status === 'pending'))

  // New bookings since yesterday
  const newBookings = slots.filter(s =>
    s.booking && s.booking.bookedAt >= yesterdayISO
  )

  // Newsletter analysis
  const totalSubscribers = subscribers.length
  const newSubscribers = subscribers.filter(s => s.subscribedAt >= yesterdayISO)

  // Build subject
  const alerts: string[] = []
  if (newBookings.length > 0) alerts.push(`${newBookings.length} neue Buchung${newBookings.length > 1 ? 'en' : ''}`)
  if (newSubscribers.length > 0) alerts.push(`${newSubscribers.length} neue Anmeldung${newSubscribers.length > 1 ? 'en' : ''}`)
  if (pendingSlots.length > 0) alerts.push(`${pendingSlots.length} ausstehend`)
  const subject = alerts.length > 0
    ? `Tagesbericht ${today.toLocaleDateString('de-DE')} — ${alerts.join(', ')}`
    : `Tagesbericht ${today.toLocaleDateString('de-DE')} — Alles ruhig`

  // Build HTML
  const html = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 640px; margin: 0 auto; padding: 40px 20px; background: #f8f9fa;">
      <div style="background: #061a2d; border-radius: 16px; padding: 40px 32px; color: #ffffff;">
        <h1 style="font-size: 22px; margin: 0 0 6px; color: #2DD4BF; font-weight: 600;">
          Guten Morgen, Dennis
        </h1>
        <p style="font-size: 14px; color: #718096; margin: 0 0 28px;">${todayStr}</p>

        <!-- Today's Appointments -->
        ${todaySlots.length > 0 ? `
          <div style="background: rgba(45,212,191,0.1); border: 1px solid rgba(45,212,191,0.2); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #2DD4BF; margin: 0 0 12px; font-weight: 600;">
              Heute anstehend
            </h2>
            ${todaySlots.map(s => `
              <div style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
                <p style="margin: 0; font-size: 15px; color: #fff;">
                  <strong>${s.time} Uhr</strong> · ${s.duration} Min
                  ${s.status === 'pending' ? '<span style="color: #C9A227;"> (ausstehend)</span>' : '<span style="color: #2DD4BF;"> (bestätigt)</span>'}
                </p>
                ${s.booking ? `<p style="margin: 2px 0 0; font-size: 13px; color: #a0aec0;">${escapeHtml(s.booking.name)} · ${escapeHtml(s.booking.email)}</p>` : ''}
              </div>
            `).join('')}
          </div>
        ` : `
          <div style="background: rgba(255,255,255,0.04); border-radius: 12px; padding: 14px 16px; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 14px; color: #718096;">Keine Termine für heute.</p>
          </div>
        `}

        <!-- Stats Grid -->
        <table style="width: 100%; border-spacing: 8px; margin-bottom: 20px;">
          <tr>
            <td style="background: rgba(255,255,255,0.04); border-radius: 10px; padding: 14px 16px; text-align: center; width: 33%;">
              <p style="margin: 0; font-size: 28px; font-weight: 700; color: #2DD4BF;">${availableSlots.length}</p>
              <p style="margin: 4px 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #718096;">Freie Termine</p>
            </td>
            <td style="background: rgba(255,255,255,0.04); border-radius: 10px; padding: 14px 16px; text-align: center; width: 33%;">
              <p style="margin: 0; font-size: 28px; font-weight: 700; color: ${pendingSlots.length > 0 ? '#C9A227' : '#a0aec0'};">${pendingSlots.length}</p>
              <p style="margin: 4px 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #718096;">Ausstehend</p>
            </td>
            <td style="background: rgba(255,255,255,0.04); border-radius: 10px; padding: 14px 16px; text-align: center; width: 33%;">
              <p style="margin: 0; font-size: 28px; font-weight: 700; color: #2DD4BF;">${confirmedSlots.length}</p>
              <p style="margin: 4px 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #718096;">Bestätigt</p>
            </td>
          </tr>
        </table>

        <!-- New Bookings -->
        ${newBookings.length > 0 ? `
          <div style="margin-bottom: 20px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #C9A227; margin: 0 0 12px; font-weight: 600;">
              Neue Buchungen (seit gestern)
            </h2>
            ${newBookings.map(s => `
              <div style="background: rgba(201,162,39,0.08); border: 1px solid rgba(201,162,39,0.15); border-radius: 10px; padding: 12px 16px; margin-bottom: 8px;">
                <p style="margin: 0; font-size: 14px; color: #fff;">
                  <strong>${escapeHtml(s.booking!.name)}</strong> · ${formatDateDE(s.date)} um ${s.time} Uhr
                </p>
                <p style="margin: 4px 0 0; font-size: 12px; color: #a0aec0;">
                  ${escapeHtml(s.booking!.email)} · ${escapeHtml(s.booking!.phone)}
                  ${s.booking!.contactType === 'zoom' ? ' · Zoom' : s.booking!.contactType === 'phone' ? ' · Telefon' : ''}
                </p>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Newsletter -->
        <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; margin-top: 8px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #2DD4BF; margin: 0 0 12px; font-weight: 600;">
            Newsletter
          </h2>
          <table style="width: 100%; border-spacing: 8px;">
            <tr>
              <td style="background: rgba(255,255,255,0.04); border-radius: 10px; padding: 14px 16px; text-align: center; width: 50%;">
                <p style="margin: 0; font-size: 28px; font-weight: 700; color: #2DD4BF;">${totalSubscribers}</p>
                <p style="margin: 4px 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #718096;">Abonnenten gesamt</p>
              </td>
              <td style="background: rgba(255,255,255,0.04); border-radius: 10px; padding: 14px 16px; text-align: center; width: 50%;">
                <p style="margin: 0; font-size: 28px; font-weight: 700; color: ${newSubscribers.length > 0 ? '#C9A227' : '#a0aec0'};">${newSubscribers.length > 0 ? '+' : ''}${newSubscribers.length}</p>
                <p style="margin: 4px 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #718096;">Seit gestern</p>
              </td>
            </tr>
          </table>

          ${newSubscribers.length > 0 ? `
            <div style="margin-top: 12px;">
              ${newSubscribers.map(s => `
                <div style="background: rgba(255,255,255,0.04); border-radius: 10px; padding: 10px 16px; margin-bottom: 6px;">
                  <p style="margin: 0; font-size: 14px; color: #fff;">
                    <strong>${escapeHtml(s.gender)} ${escapeHtml(s.firstName)} ${escapeHtml(s.lastName)}</strong>
                  </p>
                  <p style="margin: 2px 0 0; font-size: 12px; color: #a0aec0;">
                    ${escapeHtml(s.email)} · PLZ ${escapeHtml(s.zip)} · Geb. ${escapeHtml(s.birthYear)}
                  </p>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <!-- Footer with Admin Link -->
        <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; margin-top: 20px; text-align: center;">
          <a href="https://dennis-tefett.de/admin" style="display: inline-block; padding: 10px 24px; background: rgba(45,212,191,0.15); border: 1px solid rgba(45,212,191,0.3); color: #2DD4BF; font-weight: 600; border-radius: 8px; text-decoration: none; font-size: 13px;">
            Admin-Dashboard öffnen
          </a>
          <p style="font-size: 11px; color: #4a5568; margin: 12px 0 0;">
            Automatischer Tagesbericht · dennis-tefett.de
          </p>
        </div>
      </div>
    </div>
  `

  return { subject, html }
}

/* ── Handler ── */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Verify this is a cron job call or admin call
  const authHeader = req.headers.authorization
  const cronSecret = process.env.CRON_SECRET
  const isCron = cronSecret && authHeader === `Bearer ${cronSecret}`
  const isAdmin = authHeader?.startsWith('Bearer ') && authHeader.slice(7) === process.env.ADMIN_PASSWORD

  if (!isCron && !isAdmin) {
    return res.status(401).json({ success: false, message: 'Nicht autorisiert' })
  }

  try {
    const [slots, subscribers] = await Promise.all([
      getAllSlots(),
      getAllSubscribers(),
    ])

    const { subject, html } = buildSummaryEmail(slots, subscribers)

    // Send email
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) {
      return res.status(500).json({ success: false, message: 'SMTP nicht konfiguriert' })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT || '587', 10),
      secure: parseInt(SMTP_PORT || '587', 10) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"Dennis Tefett Webseite" <${SMTP_USER}>`,
      to: NOTIFY_EMAIL,
      subject,
      html,
    })

    console.log('[Daily Summary] E-Mail gesendet')
    return res.status(200).json({ success: true, message: 'Tagesbericht gesendet' })
  } catch (err) {
    console.error('[Daily Summary] Fehler:', err)
    return res.status(500).json({ success: false, message: 'Fehler beim Senden' })
  }
}
