import type { VercelRequest, VercelResponse } from '@vercel/node'
import { kv } from '@vercel/kv'
import nodemailer from 'nodemailer'
import crypto from 'crypto'

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
  approvalToken?: string
}

/* ── Helpers ── */
const ALLOWED_ORIGIN = 'https://dennis-tefett.de'

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

function sanitizeHeader(str: string): string {
  return str.replace(/[\r\n\0]/g, '')
}

function setCors(res: import('@vercel/node').VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Vary', 'Origin')
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '587', 10),
    secure: parseInt(SMTP_PORT || '587', 10) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

/* ── Admin Auth ── */
function checkAdmin(req: VercelRequest): boolean {
  const auth = req.headers.authorization
  if (!auth || !auth.startsWith('Bearer ')) return false
  return auth.slice(7) === process.env.ADMIN_PASSWORD
}

/* ── GET /api/booking?action=slots ── */
async function getPublicSlots(): Promise<TimeSlot[]> {
  const keys = await kv.keys('slot:*')
  if (!keys.length) return []
  const slots: TimeSlot[] = []
  for (const key of keys) {
    const slot = await kv.get<TimeSlot>(key)
    if (slot && slot.status === 'available') {
      slots.push({ ...slot, approvalToken: undefined })
    }
  }
  return slots.sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))
}

/* ── GET /api/booking?action=admin-slots ── */
async function getAdminSlots(): Promise<TimeSlot[]> {
  const keys = await kv.keys('slot:*')
  if (!keys.length) return []
  const slots: TimeSlot[] = []
  for (const key of keys) {
    const slot = await kv.get<TimeSlot>(key)
    if (slot) slots.push({ ...slot, approvalToken: undefined })
  }
  return slots.sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))
}

/* ── POST /api/booking?action=create-slot ── */
async function createSlot(body: Record<string, unknown>): Promise<TimeSlot> {
  const { date, time, duration } = body
  if (!date || !time) throw new Error('Datum und Uhrzeit sind erforderlich')
  const dur = Number(duration) || 60
  if (![25, 30, 45, 60, 90, 120].includes(dur)) throw new Error('Ungültige Dauer')

  const id = crypto.randomUUID()
  const slot: TimeSlot = {
    id,
    date: String(date),
    time: String(time),
    duration: dur,
    status: 'available',
  }
  await kv.set(`slot:${id}`, slot)
  return slot
}

/* ── POST /api/booking?action=delete-slot ── */
async function deleteSlot(body: Record<string, unknown>): Promise<void> {
  const { id } = body
  if (!id) throw new Error('Slot-ID erforderlich')
  const slot = await kv.get<TimeSlot>(`slot:${String(id)}`)
  if (!slot) throw new Error('Slot nicht gefunden')
  await kv.del(`slot:${String(id)}`)
}

/* ── POST /api/booking?action=book ── */
async function bookSlot(body: Record<string, unknown>): Promise<void> {
  const { slotId, name, email, phone, message, contactType } = body
  if (!slotId) throw new Error('Slot-ID erforderlich')
  if (!name || String(name).trim().length === 0) throw new Error('Name ist erforderlich')
  if (!email || !validateEmail(String(email))) throw new Error('Ungültige E-Mail-Adresse')
  if (!phone || String(phone).trim().length === 0) throw new Error('Telefonnummer ist erforderlich')

  const slot = await kv.get<TimeSlot>(`slot:${String(slotId)}`)
  if (!slot) throw new Error('Slot nicht gefunden')
  if (slot.status !== 'available') throw new Error('Dieser Termin ist leider nicht mehr verfügbar')

  const validContactType = contactType === 'zoom' || contactType === 'phone' ? contactType : undefined
  const token = crypto.randomUUID()
  const updatedSlot: TimeSlot = {
    ...slot,
    status: 'pending',
    booking: {
      name: String(name).trim(),
      email: String(email).toLowerCase().trim(),
      phone: String(phone).trim(),
      message: message ? String(message).trim() : undefined,
      contactType: validContactType,
      bookedAt: new Date().toISOString(),
    },
    approvalToken: token,
  }
  await kv.set(`slot:${slot.id}`, updatedSlot)

  // Send approval email to Dennis
  const transporter = getTransporter()
  const { NOTIFY_EMAIL, SMTP_USER } = process.env
  if (transporter && NOTIFY_EMAIL && SMTP_USER) {
    const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'https://dennis-tefett.de'

    const approveUrl = `${baseUrl}/api/booking?action=approve&token=${token}&slotId=${slot.id}`
    const declineUrl = `${baseUrl}/api/booking?action=decline&token=${token}&slotId=${slot.id}`

    await transporter.sendMail({
      from: `"Dennis Tefett Webseite" <${SMTP_USER}>`,
      to: NOTIFY_EMAIL,
      subject: sanitizeHeader(`Neue Terminanfrage: ${String(name).trim()} — ${formatDate(slot.date)} um ${slot.time}`),
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #061a2d; border-bottom: 2px solid #2DD4BF; padding-bottom: 10px;">
            Neue Terminanfrage
          </h2>
          <p><strong>Datum:</strong> ${formatDate(slot.date)}</p>
          <p><strong>Uhrzeit:</strong> ${slot.time} Uhr</p>
          <p><strong>Dauer:</strong> ${slot.duration} Minuten</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p><strong>Name:</strong> ${escapeHtml(String(name).trim())}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${escapeHtml(String(email))}">${escapeHtml(String(email))}</a></p>
          <p><strong>Telefon:</strong> ${escapeHtml(String(phone).trim())}</p>
          <p><strong>Gesprächsart:</strong> ${validContactType === 'zoom' ? '📹 Zoom-Videocall' : validContactType === 'phone' ? '📞 Telefonat' : 'Nicht angegeben'}</p>
          ${message ? `<div style="background: #f7f7f7; padding: 12px; border-radius: 8px; margin-top: 12px;"><p style="margin:0;"><strong>Nachricht:</strong></p><p style="white-space:pre-wrap;margin:8px 0 0;">${escapeHtml(String(message).trim())}</p></div>` : ''}
          <div style="margin-top: 24px; display: flex; gap: 12px;">
            <a href="${approveUrl}" style="display: inline-block; padding: 12px 28px; background: #2DD4BF; color: #061a2d; font-weight: 600; border-radius: 8px; text-decoration: none; font-size: 14px;">
              ✓ Termin bestätigen
            </a>
            <a href="${declineUrl}" style="display: inline-block; padding: 12px 28px; background: #e53e3e; color: #fff; font-weight: 600; border-radius: 8px; text-decoration: none; font-size: 14px; margin-left: 12px;">
              ✗ Termin ablehnen
            </a>
          </div>
          <p style="font-size: 12px; color: #999; margin-top: 20px;">
            Empfangen am ${new Date().toLocaleString('de-DE')}
          </p>
        </div>
      `,
    })
  }

  // Send confirmation email to customer
  if (transporter && process.env.SMTP_USER) {
    await transporter.sendMail({
      from: `"Dennis Tefett Coaching" <${process.env.SMTP_USER}>`,
      to: String(email).toLowerCase().trim(),
      subject: `Ihre Terminanfrage — ${formatDate(slot.date)} um ${slot.time}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #f8f9fa;">
          <div style="background: #061a2d; border-radius: 16px; padding: 40px 32px; color: #ffffff;">
            <h1 style="font-size: 24px; margin: 0 0 20px; color: #2DD4BF; font-weight: 600;">
              Terminanfrage erhalten
            </h1>
            <p style="font-size: 15px; line-height: 1.7; color: #a0aec0; margin: 0 0 16px;">
              Vielen Dank für Ihre Terminanfrage, ${escapeHtml(String(name).trim())}!
            </p>
            <div style="background: rgba(255,255,255,0.06); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
              <p style="color: #ffffff; margin: 0; font-size: 15px;">
                <strong>Termin:</strong> ${formatDate(slot.date)}<br/>
                <strong>Uhrzeit:</strong> ${slot.time} Uhr<br/>
                <strong>Dauer:</strong> ${slot.duration} Minuten<br/>
                <strong>Gesprächsart:</strong> ${validContactType === 'zoom' ? 'Zoom-Videocall' : validContactType === 'phone' ? 'Telefonat' : 'Wird noch abgestimmt'}
              </p>
            </div>
            <p style="font-size: 15px; line-height: 1.7; color: #a0aec0; margin: 0 0 20px;">
              Ich werde Ihre Anfrage zeitnah prüfen und Ihnen eine Bestätigung senden.
              ${validContactType === 'zoom' ? 'Den Zoom-Link erhalten Sie mit der Bestätigungsmail.' : ''}
              Sie erhalten eine weitere E-Mail, sobald der Termin bestätigt wurde.
            </p>
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; margin-top: 20px;">
              <p style="font-size: 13px; color: #718096; margin: 0;">
                Mit besten Grüßen,<br/>
                <strong style="color: #2DD4BF;">Dennis Tefett</strong><br/>
                Executive Coach
              </p>
            </div>
          </div>
        </div>
      `,
    })
  }
}

/* ── GET /api/booking?action=approve&token=...&slotId=... ── */
async function approveBooking(token: string, slotId: string, res: VercelResponse): Promise<void> {
  const slot = await kv.get<TimeSlot>(`slot:${slotId}`)
  if (!slot || slot.approvalToken !== token) {
    res.setHeader('Content-Type', 'text/html')
    res.status(400).send(resultPage('Ungültiger Link', 'Dieser Bestätigungslink ist ungültig oder wurde bereits verwendet.', false))
    return
  }

  if (slot.status === 'confirmed') {
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(resultPage('Bereits bestätigt', 'Dieser Termin wurde bereits bestätigt.', true))
    return
  }

  const updatedSlot: TimeSlot = { ...slot, status: 'confirmed', approvalToken: undefined }
  await kv.set(`slot:${slotId}`, updatedSlot)

  // Send confirmation to customer
  const transporter = getTransporter()
  if (transporter && slot.booking && process.env.SMTP_USER) {
    await transporter.sendMail({
      from: `"Dennis Tefett Coaching" <${process.env.SMTP_USER}>`,
      to: slot.booking.email,
      subject: `Termin bestätigt — ${formatDate(slot.date)} um ${slot.time}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #f8f9fa;">
          <div style="background: #061a2d; border-radius: 16px; padding: 40px 32px; color: #ffffff;">
            <h1 style="font-size: 24px; margin: 0 0 20px; color: #2DD4BF; font-weight: 600;">
              Termin bestätigt! ✓
            </h1>
            <p style="font-size: 15px; line-height: 1.7; color: #a0aec0; margin: 0 0 16px;">
              Ihr Coaching-Termin wurde bestätigt, ${slot.booking.name}!
            </p>
            <div style="background: rgba(45,212,191,0.1); border: 1px solid rgba(45,212,191,0.2); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
              <p style="color: #2DD4BF; margin: 0; font-size: 15px; font-weight: 600;">
                ${formatDate(slot.date)}<br/>
                ${slot.time} Uhr · ${slot.duration} Minuten
              </p>
            </div>
            <p style="font-size: 15px; line-height: 1.7; color: #a0aec0; margin: 0 0 20px;">
              Ich freue mich auf unser Gespräch. Sollten Sie den Termin nicht wahrnehmen können, melden Sie sich bitte rechtzeitig.
            </p>
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; margin-top: 20px;">
              <p style="font-size: 13px; color: #718096; margin: 0;">
                Mit besten Grüßen,<br/>
                <strong style="color: #2DD4BF;">Dennis Tefett</strong><br/>
                Executive Coach
              </p>
            </div>
          </div>
        </div>
      `,
    })
  }

  res.setHeader('Content-Type', 'text/html')
  res.status(200).send(resultPage(
    'Termin bestätigt',
    `Der Termin am ${formatDate(slot.date)} um ${slot.time} Uhr mit ${slot.booking?.name || 'dem Kunden'} wurde bestätigt. Eine Bestätigungsmail wurde versendet.`,
    true
  ))
}

/* ── GET /api/booking?action=decline&token=...&slotId=... ── */
async function declineBooking(token: string, slotId: string, res: VercelResponse): Promise<void> {
  const slot = await kv.get<TimeSlot>(`slot:${slotId}`)
  if (!slot || slot.approvalToken !== token) {
    res.setHeader('Content-Type', 'text/html')
    res.status(400).send(resultPage('Ungültiger Link', 'Dieser Link ist ungültig oder wurde bereits verwendet.', false))
    return
  }

  if (slot.status === 'declined') {
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(resultPage('Bereits abgelehnt', 'Dieser Termin wurde bereits abgelehnt.', false))
    return
  }

  // Make slot available again
  const updatedSlot: TimeSlot = {
    ...slot,
    status: 'available',
    booking: undefined,
    approvalToken: undefined,
  }
  await kv.set(`slot:${slotId}`, updatedSlot)

  // Notify customer of decline
  const transporter = getTransporter()
  if (transporter && slot.booking && process.env.SMTP_USER) {
    await transporter.sendMail({
      from: `"Dennis Tefett Coaching" <${process.env.SMTP_USER}>`,
      to: slot.booking.email,
      subject: `Terminanfrage — Alternativtermin nötig`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #f8f9fa;">
          <div style="background: #061a2d; border-radius: 16px; padding: 40px 32px; color: #ffffff;">
            <h1 style="font-size: 24px; margin: 0 0 20px; color: #C9A227; font-weight: 600;">
              Terminänderung
            </h1>
            <p style="font-size: 15px; line-height: 1.7; color: #a0aec0; margin: 0 0 16px;">
              Leider ist der von Ihnen angefragte Termin am ${formatDate(slot.date)} um ${slot.time} Uhr nicht mehr verfügbar, ${slot.booking.name}.
            </p>
            <p style="font-size: 15px; line-height: 1.7; color: #a0aec0; margin: 0 0 20px;">
              Bitte besuchen Sie meine Webseite, um einen alternativen Termin zu buchen. Ich bitte um Ihr Verständnis.
            </p>
            <a href="https://dennis-tefett.de/termin-buchen" style="display: inline-block; padding: 12px 28px; background: #2DD4BF; color: #061a2d; font-weight: 600; border-radius: 8px; text-decoration: none; font-size: 14px;">
              Neuen Termin wählen
            </a>
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; margin-top: 20px;">
              <p style="font-size: 13px; color: #718096; margin: 0;">
                Mit besten Grüßen,<br/>
                <strong style="color: #2DD4BF;">Dennis Tefett</strong><br/>
                Executive Coach
              </p>
            </div>
          </div>
        </div>
      `,
    })
  }

  res.setHeader('Content-Type', 'text/html')
  res.status(200).send(resultPage(
    'Termin abgelehnt',
    `Der Termin am ${formatDate(slot.date)} um ${slot.time} Uhr wurde abgelehnt. ${slot.booking?.name || 'Der Kunde'} wurde per E-Mail informiert. Der Slot ist wieder verfügbar.`,
    false
  ))
}

/* ── POST /api/booking?action=admin-login ── */
function adminLogin(body: Record<string, unknown>): boolean {
  const { password } = body
  return String(password) === process.env.ADMIN_PASSWORD
}

/* ── HTML result page for email links ── */
function resultPage(title: string, message: string, success: boolean): string {
  const color = success ? '#2DD4BF' : '#C9A227'
  return `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title>
<style>body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background:#061a2d;color:#fff;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;padding:20px}
.card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:48px;text-align:center;max-width:500px;width:100%}
h1{color:${color};font-size:28px;margin:0 0 16px}p{color:#a0aec0;font-size:16px;line-height:1.7;margin:0 0 24px}
a{display:inline-block;padding:12px 24px;background:${color};color:#061a2d;font-weight:600;border-radius:8px;text-decoration:none;font-size:14px}</style>
</head><body><div class="card"><h1>${success ? '✓' : '!'} ${title}</h1><p>${message}</p><a href="https://dennis-tefett.de">Zur Webseite</a></div></body></html>`
}

/* ── Serverless Handler ── */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res)
  if (req.method === 'OPTIONS') return res.status(200).end()

  const action = String(req.query.action || '')

  try {
    // GET actions
    if (req.method === 'GET') {
      switch (action) {
        case 'slots': {
          const slots = await getPublicSlots()
          return res.status(200).json({ success: true, slots })
        }
        case 'admin-slots': {
          if (!checkAdmin(req)) return res.status(401).json({ success: false, message: 'Nicht autorisiert' })
          const slots = await getAdminSlots()
          return res.status(200).json({ success: true, slots })
        }
        case 'approve': {
          const { token, slotId } = req.query
          if (!token || !slotId) return res.status(400).json({ success: false, message: 'Token und SlotId erforderlich' })
          await approveBooking(String(token), String(slotId), res)
          return
        }
        case 'decline': {
          const { token, slotId } = req.query
          if (!token || !slotId) return res.status(400).json({ success: false, message: 'Token und SlotId erforderlich' })
          await declineBooking(String(token), String(slotId), res)
          return
        }
        default:
          return res.status(400).json({ success: false, message: 'Ungültige Aktion' })
      }
    }

    // POST actions
    if (req.method === 'POST') {
      switch (action) {
        case 'admin-login': {
          const valid = adminLogin(req.body || {})
          if (!valid) return res.status(401).json({ success: false, message: 'Falsches Passwort' })
          return res.status(200).json({ success: true })
        }
        case 'create-slot': {
          if (!checkAdmin(req)) return res.status(401).json({ success: false, message: 'Nicht autorisiert' })
          const slot = await createSlot(req.body || {})
          return res.status(200).json({ success: true, slot })
        }
        case 'delete-slot': {
          if (!checkAdmin(req)) return res.status(401).json({ success: false, message: 'Nicht autorisiert' })
          await deleteSlot(req.body || {})
          return res.status(200).json({ success: true })
        }
        case 'book': {
          await bookSlot(req.body || {})
          return res.status(200).json({ success: true, message: 'Terminanfrage erfolgreich gesendet! Sie erhalten in Kürze eine Bestätigung per E-Mail.' })
        }
        default:
          return res.status(400).json({ success: false, message: 'Ungültige Aktion' })
      }
    }

    return res.status(405).json({ success: false, message: 'Method not allowed' })
  } catch (err) {
    console.error('[Booking] Fehler:', err)
    const message = err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten.'
    return res.status(500).json({ success: false, message })
  }
}
