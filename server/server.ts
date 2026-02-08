import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { newsletterRouter } from './routes/newsletter.js'
import { contactRouter } from './routes/contact.js'

const app = express()
const PORT = parseInt(process.env.PORT || '3001', 10)

/* ── Security ── */
app.use(helmet())
app.use(express.json({ limit: '10kb' }))

/* ── CORS ── */
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'http://localhost:4173',
  process.env.CORS_ORIGIN,
].filter(Boolean) as string[]

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
)

/* ── Rate Limiting ── */
const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // max 10 requests per minute per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut.' },
})

app.use('/api/', apiLimiter)

/* ── Routes ── */
app.use('/api/newsletter', newsletterRouter)
app.use('/api/contact', contactRouter)

/* ── Health check ── */
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

/* ── 404 handler ── */
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint nicht gefunden' })
})

/* ── Error handler ── */
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('[Server Error]', err.message)
  res.status(500).json({ success: false, message: 'Interner Serverfehler' })
})

/* ── Start ── */
app.listen(PORT, () => {
  console.log(`\n✅ Dennis Tefett Server läuft auf Port ${PORT}`)
  console.log(`   Health-Check: http://localhost:${PORT}/api/health`)
  console.log(`   CORS erlaubt: ${allowedOrigins.join(', ')}\n`)
})

export default app
