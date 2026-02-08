import { Router, type Request, type Response } from 'express'
import { body, validationResult } from 'express-validator'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import nodemailer from 'nodemailer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.join(__dirname, '..', 'data')
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json')

export const newsletterRouter = Router()

/* ── Validation ── */
const validateNewsletter = [
  body('gender').isIn(['Herr', 'Frau', 'Divers']).withMessage('Ungültige Anrede'),
  body('firstName').trim().notEmpty().withMessage('Vorname ist erforderlich').isLength({ max: 100 }),
  body('lastName').trim().notEmpty().withMessage('Nachname ist erforderlich').isLength({ max: 100 }),
  body('email').isEmail().normalizeEmail().withMessage('Ungültige E-Mail-Adresse'),
  body('birthYear')
    .isInt({ min: 1940, max: new Date().getFullYear() - 10 })
    .withMessage('Ungültiges Geburtsjahr'),
  body('zip').matches(/^\d{5}$/).withMessage('Ungültige Postleitzahl (5 Ziffern)'),
  body('source').optional().isString().isLength({ max: 50 }),
]

/* ── Helper: Load / Save subscribers ── */
interface Subscriber {
  gender: string
  firstName: string
  lastName: string
  email: string
  birthYear: string
  zip: string
  source: string
  subscribedAt: string
}

async function loadSubscribers(): Promise<Subscriber[]> {
  try {
    if (!existsSync(SUBSCRIBERS_FILE)) return []
    const data = await readFile(SUBSCRIBERS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveSubscribers(subscribers: Subscriber[]): Promise<void> {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
  await writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2), 'utf-8')
}

/* ── Helper: Send confirmation email ── */
async function sendConfirmationEmail(subscriber: Subscriber): Promise<void> {
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
    to: subscriber.email,
    subject: 'Willkommen beim Newsletter — Dennis Tefett Coaching',
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #f8f9fa;">
        <div style="background: #061a2d; border-radius: 16px; padding: 40px 32px; color: #ffffff;">
          <h1 style="font-size: 24px; margin: 0 0 20px; color: #2DD4BF; font-weight: 600;">
            Willkommen, ${subscriber.gender === 'Frau' ? 'Frau' : subscriber.gender === 'Herr' ? 'Herr' : ''} ${subscriber.lastName}!
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

  console.log(`[Newsletter] Bestätigungs-E-Mail gesendet an ${subscriber.email}`)
}

/* ── POST /api/newsletter ── */
newsletterRouter.post('/', validateNewsletter, async (req: Request, res: Response) => {
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

    const { gender, firstName, lastName, email, birthYear, zip, source } = req.body

    // Load existing subscribers
    const subscribers = await loadSubscribers()

    // Check for duplicate email
    const existingIndex = subscribers.findIndex(
      (s) => s.email.toLowerCase() === email.toLowerCase()
    )

    const subscriber: Subscriber = {
      gender,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase().trim(),
      birthYear: String(birthYear),
      zip,
      source: source || 'unknown',
      subscribedAt: new Date().toISOString(),
    }

    if (existingIndex >= 0) {
      // Update existing subscriber
      subscribers[existingIndex] = { ...subscribers[existingIndex], ...subscriber }
      console.log(`[Newsletter] Bestehender Abonnent aktualisiert: ${email}`)
    } else {
      // New subscriber
      subscribers.push(subscriber)
      console.log(`[Newsletter] Neuer Abonnent: ${email} (Quelle: ${source || 'unknown'})`)
    }

    await saveSubscribers(subscribers)

    // Send confirmation email (non-blocking)
    sendConfirmationEmail(subscriber).catch((err) => {
      console.error('[Newsletter] E-Mail-Fehler:', err.message)
    })

    res.status(200).json({
      success: true,
      message: 'Anmeldung erfolgreich! Sie erhalten in Kürze eine Bestätigungsmail.',
    })
  } catch (err) {
    console.error('[Newsletter] Fehler:', err)
    res.status(500).json({ success: false, message: 'Ein Fehler ist aufgetreten.' })
  }
})
