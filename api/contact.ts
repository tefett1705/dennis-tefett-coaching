import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

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
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Vary', 'Origin')
}

/* ── Validation helpers ── */
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateFields(body: Record<string, unknown>): string | null {
  const { name, email, message } = body
  if (!name || String(name).trim().length === 0) return 'Name ist erforderlich'
  if (String(name).length > 200) return 'Name zu lang'
  if (!email || !validateEmail(String(email))) return 'Ungültige E-Mail-Adresse'
  if (!message || String(message).trim().length === 0) return 'Nachricht ist erforderlich'
  if (String(message).length > 5000) return 'Nachricht zu lang'
  return null
}

/* ── Send notification email to Dennis ── */
async function sendNotificationEmail(contact: {
  name: string
  email: string
  message: string
  situation?: string
  goal?: string
  selectedPackage?: string
  phone?: string
  company?: string
  subject?: string
  preferredContact?: string
}): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) {
    console.log('[Contact] SMTP nicht konfiguriert — E-Mail wird übersprungen')
    return
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '587', 10),
    secure: parseInt(SMTP_PORT || '587', 10) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const situationInfo = contact.situation ? `<p><strong>Situation:</strong> ${escapeHtml(contact.situation)}</p>` : ''
  const goalInfo = contact.goal ? `<p><strong>Ziel:</strong> ${escapeHtml(contact.goal)}</p>` : ''
  const packageInfo = contact.selectedPackage ? `<p><strong>Paket:</strong> ${escapeHtml(contact.selectedPackage)}</p>` : ''
  const phoneInfo = contact.phone ? `<p><strong>Telefon:</strong> ${escapeHtml(contact.phone)}</p>` : ''
  const companyInfo = contact.company ? `<p><strong>Unternehmen:</strong> ${escapeHtml(contact.company)}</p>` : ''
  const subjectInfo = contact.subject ? `<p><strong>Betreff:</strong> ${escapeHtml(contact.subject)}</p>` : ''
  const contactMethodInfo = contact.preferredContact ? `<p><strong>Bevorzugte Kontaktart:</strong> ${escapeHtml(contact.preferredContact)}</p>` : ''

  await transporter.sendMail({
    from: `"Dennis Tefett Webseite" <${SMTP_USER}>`,
    to: NOTIFY_EMAIL,
    replyTo: sanitizeHeader(contact.email),
    subject: sanitizeHeader(`Neue Kontaktanfrage von ${contact.name}`),
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #061a2d; border-bottom: 2px solid #2DD4BF; padding-bottom: 10px;">
          Neue Kontaktanfrage
        </h2>
        <p><strong>Name:</strong> ${escapeHtml(contact.name)}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></p>
        ${situationInfo}
        ${goalInfo}
        ${packageInfo}
        ${phoneInfo}
        ${companyInfo}
        ${subjectInfo}
        ${contactMethodInfo}
        <div style="background: #f7f7f7; padding: 16px; border-radius: 8px; margin-top: 16px;">
          <p style="margin: 0;"><strong>Nachricht:</strong></p>
          <p style="white-space: pre-wrap; margin: 8px 0 0;">${escapeHtml(contact.message)}</p>
        </div>
        <p style="font-size: 12px; color: #999; margin-top: 20px;">
          Empfangen am ${new Date().toLocaleString('de-DE')}
        </p>
      </div>
    `,
  })

  console.log('[Contact] Benachrichtigungs-E-Mail gesendet')
}

/* ── Send auto-reply to the person who wrote ── */
async function sendAutoReply(contact: { name: string; email: string }): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '587', 10),
    secure: parseInt(SMTP_PORT || '587', 10) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  await transporter.sendMail({
    from: `"Dennis Tefett Coaching" <${SMTP_USER}>`,
    to: sanitizeHeader(contact.email),
    subject: 'Ihre Anfrage wurde erhalten — Dennis Tefett Coaching',
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #f8f9fa;">
        <div style="background: #061a2d; border-radius: 16px; padding: 40px 32px; color: #ffffff;">
          <h1 style="font-size: 24px; margin: 0 0 20px; color: #2DD4BF; font-weight: 600;">
            Vielen Dank für Ihre Anfrage!
          </h1>
          <p style="font-size: 15px; line-height: 1.7; color: #a0aec0; margin: 0 0 20px;">
            Ich habe Ihre Nachricht erhalten und melde mich innerhalb von 24 Stunden persönlich bei Ihnen.
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

/* ── Serverless Handler ── */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res)

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const validationError = validateFields(req.body || {})
    if (validationError) {
      return res.status(400).json({ success: false, message: validationError })
    }

    const { name, email, message, situation, goal, selectedPackage, phone, company, subject, preferredContact } = req.body

    const contact = {
      name: String(name).trim(),
      email: String(email).toLowerCase().trim(),
      message: String(message).trim(),
      situation: situation ? String(situation).trim() : undefined,
      goal: goal ? String(goal).trim() : undefined,
      selectedPackage: selectedPackage ? String(selectedPackage).trim() : undefined,
      phone: phone ? String(phone).trim() : undefined,
      company: company ? String(company).trim() : undefined,
      subject: subject ? String(subject).trim() : undefined,
      preferredContact: preferredContact ? String(preferredContact).trim() : undefined,
    }

    console.log('[Contact] Neue Anfrage eingegangen')

    // Send emails (non-blocking)
    await Promise.allSettled([
      sendNotificationEmail(contact),
      sendAutoReply(contact),
    ])

    return res.status(200).json({
      success: true,
      message: 'Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns zeitnah bei Ihnen.',
    })
  } catch (err) {
    console.error('[Contact] Fehler:', err)
    return res.status(500).json({ success: false, message: 'Ein Fehler ist aufgetreten.' })
  }
}
