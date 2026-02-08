import { Router, type Request, type Response } from 'express'
import { body, validationResult } from 'express-validator'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import nodemailer from 'nodemailer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.join(__dirname, '..', 'data')
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json')

export const contactRouter = Router()

/* ── Validation ── */
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name ist erforderlich').isLength({ max: 200 }),
  body('email').isEmail().normalizeEmail().withMessage('Ungültige E-Mail-Adresse'),
  body('message').trim().notEmpty().withMessage('Nachricht ist erforderlich').isLength({ max: 5000 }),
  body('situation').optional().isString().isLength({ max: 1000 }),
  body('goal').optional().isString().isLength({ max: 1000 }),
  body('selectedPackage').optional().isString().isLength({ max: 200 }),
]

/* ── Helper: Load / Save contacts ── */
interface ContactEntry {
  name: string
  email: string
  message: string
  situation?: string
  goal?: string
  selectedPackage?: string
  receivedAt: string
}

async function loadContacts(): Promise<ContactEntry[]> {
  try {
    if (!existsSync(CONTACTS_FILE)) return []
    const data = await readFile(CONTACTS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveContacts(contacts: ContactEntry[]): Promise<void> {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
  await writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf-8')
}

/* ── Helper: Send notification email ── */
async function sendNotificationEmail(contact: ContactEntry): Promise<void> {
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

  const situationInfo = contact.situation ? `<p><strong>Situation:</strong> ${contact.situation}</p>` : ''
  const goalInfo = contact.goal ? `<p><strong>Ziel:</strong> ${contact.goal}</p>` : ''
  const packageInfo = contact.selectedPackage ? `<p><strong>Paket:</strong> ${contact.selectedPackage}</p>` : ''

  await transporter.sendMail({
    from: `"Dennis Tefett Webseite" <${SMTP_USER}>`,
    to: NOTIFY_EMAIL,
    replyTo: contact.email,
    subject: `Neue Kontaktanfrage von ${contact.name}`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #061a2d; border-bottom: 2px solid #2DD4BF; padding-bottom: 10px;">
          Neue Kontaktanfrage
        </h2>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
        ${situationInfo}
        ${goalInfo}
        ${packageInfo}
        <div style="background: #f7f7f7; padding: 16px; border-radius: 8px; margin-top: 16px;">
          <p style="margin: 0;"><strong>Nachricht:</strong></p>
          <p style="white-space: pre-wrap; margin: 8px 0 0;">${contact.message}</p>
        </div>
        <p style="font-size: 12px; color: #999; margin-top: 20px;">
          Empfangen am ${new Date(contact.receivedAt).toLocaleString('de-DE')}
        </p>
      </div>
    `,
  })

  console.log(`[Contact] Benachrichtigungs-E-Mail gesendet für Anfrage von ${contact.name}`)
}

/* ── POST /api/contact ── */
contactRouter.post('/', validateContact, async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: errors.array()[0]?.msg || 'Validierungsfehler',
        errors: errors.array(),
      })
      return
    }

    const { name, email, message, situation, goal, selectedPackage } = req.body

    const contact: ContactEntry = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      message: message.trim(),
      situation: situation?.trim(),
      goal: goal?.trim(),
      selectedPackage: selectedPackage?.trim(),
      receivedAt: new Date().toISOString(),
    }

    // Save to file
    const contacts = await loadContacts()
    contacts.push(contact)
    await saveContacts(contacts)

    console.log(`[Contact] Neue Anfrage von ${contact.name} (${contact.email})`)

    // Send notification email (non-blocking)
    sendNotificationEmail(contact).catch((err) => {
      console.error('[Contact] E-Mail-Fehler:', err.message)
    })

    res.status(200).json({
      success: true,
      message: 'Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns zeitnah bei Ihnen.',
    })
  } catch (err) {
    console.error('[Contact] Fehler:', err)
    res.status(500).json({ success: false, message: 'Ein Fehler ist aufgetreten.' })
  }
})
