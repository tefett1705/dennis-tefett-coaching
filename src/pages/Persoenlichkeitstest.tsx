import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  ClipboardCheck,
  Users,
  Heart,
  Shield,
  RotateCcw,
  Calendar,
  CheckCircle,
  Sparkles,
  Target,
  Mail,
  AlertCircle,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import TextSizeToggle from '../components/TextSizeToggle'
import RadarChart, { generateAngles } from '../components/RadarChart'
import type { RadarAxis } from '../components/RadarChart'
import { submitNewsletter } from '../utils/api'
import {
  oceanQuestions,
  oceanDimensions,
  calculateOceanScores,
  getOceanProfileType,
  getOceanDimensionFeedback,
  type OceanDimension,
  type OceanDimensionScores,
  type OceanProfileType,
} from '../data/persoenlichkeitstestData'

/* ── Dimension icon mapping ── */
const dimensionIcons: Record<OceanDimension, typeof Lightbulb> = {
  offenheit: Lightbulb,
  gewissenhaftigkeit: ClipboardCheck,
  extraversion: Users,
  vertraeglichkeit: Heart,
  stabilitaet: Shield,
}

const dimensionColors: Record<OceanDimension, 'teal' | 'gold'> = {
  offenheit: 'teal',
  gewissenhaftigkeit: 'gold',
  extraversion: 'teal',
  vertraeglichkeit: 'gold',
  stabilitaet: 'teal',
}

/* ── Radar axes (5 dimensions) ── */
const oceanAngles = generateAngles(5)
const oceanAxes: RadarAxis[] = oceanDimensions.map((dim, i) => ({
  key: dim.key,
  label: dim.shortLabel,
  angle: oceanAngles[i],
}))

/* ── Newsletter Form ── */
interface SignupForm {
  gender: string
  firstName: string
  lastName: string
  email: string
  birthYear: string
  zip: string
}

const currentYear = new Date().getFullYear()
const birthYears = Array.from({ length: currentYear - 1939 }, (_, i) => String(currentYear - 16 - i))

type Phase = 'intro' | 'quiz' | 'signup' | 'calculating' | 'results'

export default function Persoenlichkeitstest() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [scores, setScores] = useState<OceanDimensionScores | null>(null)
  const [profile, setProfile] = useState<OceanProfileType | null>(null)

  /* Signup state */
  const [signupForm, setSignupForm] = useState<SignupForm>({
    gender: '',
    firstName: '',
    lastName: '',
    email: '',
    birthYear: '',
    zip: '',
  })
  const [signupLoading, setSignupLoading] = useState(false)
  const [signupError, setSignupError] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  /* ── Quiz Logic ── */
  const handleAnswer = (questionIndex: number, score: number) => {
    const newAnswers = { ...answers, [questionIndex]: score }
    setAnswers(newAnswers)

    if (questionIndex < oceanQuestions.length - 1) {
      setTimeout(() => setCurrentQuestion(questionIndex + 1), 350)
    } else {
      // Last question → signup phase
      setTimeout(() => {
        setPhase('signup')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 400)
    }
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const startQuiz = () => {
    setPhase('quiz')
    setCurrentQuestion(0)
    setAnswers({})
  }

  const resetQuiz = () => {
    setPhase('intro')
    setCurrentQuestion(0)
    setAnswers({})
    setScores(null)
    setProfile(null)
    setSignupForm({ gender: '', firstName: '', lastName: '', email: '', birthYear: '', zip: '' })
    setSignupError('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /* ── Signup Logic ── */
  const updateSignupField = (field: keyof SignupForm, value: string) => {
    setSignupForm((prev) => ({ ...prev, [field]: value }))
    if (signupError) setSignupError('')
  }

  const validateSignup = (): string | null => {
    if (!signupForm.gender) return 'Bitte wählen Sie eine Anrede.'
    if (!signupForm.firstName.trim()) return 'Bitte geben Sie Ihren Vornamen ein.'
    if (!signupForm.lastName.trim()) return 'Bitte geben Sie Ihren Nachnamen ein.'
    if (!signupForm.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupForm.email))
      return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    if (!signupForm.birthYear) return 'Bitte wählen Sie Ihr Geburtsjahr.'
    if (!signupForm.zip || !/^\d{5}$/.test(signupForm.zip))
      return 'Bitte geben Sie eine gültige 5-stellige Postleitzahl ein.'
    return null
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationError = validateSignup()
    if (validationError) {
      setSignupError(validationError)
      return
    }

    setSignupLoading(true)
    setSignupError('')

    try {
      await submitNewsletter({ ...signupForm, source: 'persoenlichkeitstest' })
      // Success → calculating → results
      setPhase('calculating')
      const calculatedScores = calculateOceanScores(answers)
      const calculatedProfile = getOceanProfileType(calculatedScores)
      setTimeout(() => {
        setScores(calculatedScores)
        setProfile(calculatedProfile)
        setPhase('results')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 2500)
    } catch {
      setSignupError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
    } finally {
      setSignupLoading(false)
    }
  }

  /* ── Shared Styles ── */
  const inputClass =
    'w-full bg-midnight/60 border border-glass-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-teal/40 transition-colors'
  const selectClass =
    'w-full bg-midnight/60 border border-glass-border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-teal/40 transition-colors appearance-none cursor-pointer'
  const labelClass = 'text-xs text-text-secondary mb-1.5 block font-medium'

  return (
    <div className="min-h-screen bg-midnight">
      <SEOHead
        title="Persönlichkeitstest | Big Five Analyse | Dennis Tefett Coaching"
        description="Entdecken Sie Ihr Persönlichkeitsprofil basierend auf dem wissenschaftlichen Big Five (OCEAN) Modell. 20 Fragen, 5 Dimensionen, individuelle Auswertung."
        canonical="/persoenlichkeitstest"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-xl border-b border-glass-border">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-lg font-serif font-semibold text-text-primary group-hover:text-gold transition-colors duration-300">
              Dennis Tefett
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <TextSizeToggle />
            <Link
              to="/"
              className="flex items-center gap-2 text-text-secondary hover:text-teal transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              Zurück zur Hauptseite
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 md:pt-28 pb-20">
        <AnimatePresence mode="wait">
          {/* ─── INTRO PHASE ─── */}
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-midnight" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal/3 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/3 rounded-full blur-[100px]" />

                <div className="relative z-10 max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 text-center py-12 md:py-16">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/25 bg-teal/10 mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Sparkles size={14} className="text-teal" />
                    <span className="text-xs tracking-[0.2em] uppercase text-teal font-semibold">
                      Big Five Persönlichkeitstest
                    </span>
                  </motion.div>

                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Entdecken Sie Ihr{' '}
                    <span className="text-gradient-teal">Persönlichkeitsprofil</span>
                  </motion.h1>
                  <motion.p
                    className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    20 Fragen. 5 Dimensionen. Wissenschaftlich fundiert nach dem OCEAN-Modell.
                    Erhalten Sie Ihr individuelles Persönlichkeitsprofil mit konkreten Impulsen.
                  </motion.p>
                </div>
              </div>

              {/* Dimensions Preview */}
              <div className="max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 mt-8">
                <motion.p
                  className="text-center text-sm text-text-secondary mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Wir analysieren Ihr Profil in fünf wissenschaftlichen Dimensionen:
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
                  {oceanDimensions.map((dim, i) => {
                    const Icon = dimensionIcons[dim.key]
                    const color = dimensionColors[dim.key]
                    return (
                      <motion.div
                        key={dim.key}
                        className="glass-card p-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                      >
                        <div
                          className={`w-11 h-11 rounded-xl ${color === 'gold' ? 'bg-gold/10' : 'bg-teal/10'} flex items-center justify-center mx-auto mb-2.5`}
                        >
                          <Icon size={20} className={color === 'gold' ? 'text-gold' : 'text-teal'} />
                        </div>
                        <h3 className="text-xs font-semibold text-text-primary leading-snug">{dim.label}</h3>
                      </motion.div>
                    )
                  })}
                </div>

                {/* What you get */}
                <motion.div
                  className="glass-card p-6 md:p-8 mb-10"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-lg font-serif font-semibold mb-4 text-center">Was Sie erwartet</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: Sparkles, text: 'Ihr Persönlichkeitstyp mit individueller Beschreibung' },
                      { icon: Target, text: 'Pentagon-Analyse über alle fünf Dimensionen' },
                      { icon: CheckCircle, text: 'Konkrete Stärken und Wachstumsfelder' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <item.icon size={16} className="text-teal" />
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Start CTA */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <button
                    onClick={startQuiz}
                    className="px-8 py-4 bg-teal text-midnight font-semibold rounded-full text-base hover:bg-teal/90 transition-all duration-300 cursor-pointer inline-flex items-center gap-2 shadow-lg shadow-teal/20"
                  >
                    Profil-Analyse starten
                    <ArrowRight size={18} />
                  </button>
                  <p className="text-xs text-text-secondary/50 mt-4">
                    20 Fragen · ca. 5 Minuten · Wissenschaftlich fundiert
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ─── QUIZ PHASE ─── */}
          {phase === 'quiz' && (
            <motion.div
              key="quiz"
              className="max-w-2xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Progress bar */}
              <div className="flex items-center gap-1 mb-6">
                {oceanQuestions.map((_, i) => (
                  <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-glass-bg">
                    <motion.div
                      className="h-full bg-gradient-to-r from-teal to-gold rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: i <= currentQuestion ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                ))}
              </div>

              {/* Question counter */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-text-secondary/60">
                  Frage {currentQuestion + 1} von {oceanQuestions.length}
                </span>
                <span className="text-xs text-text-secondary/40 uppercase tracking-wider">
                  {oceanDimensions.find((d) => d.key === oceanQuestions[currentQuestion].dimension)?.label}
                </span>
              </div>

              {/* Question card */}
              <div className="glass-card p-6 md:p-8 min-h-[420px] flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`q-${currentQuestion}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    <h2 className="text-lg md:text-xl font-serif font-semibold mb-8 leading-relaxed">
                      {oceanQuestions[currentQuestion].question}
                    </h2>

                    <div className="space-y-3">
                      {oceanQuestions[currentQuestion].options.map((opt, i) => (
                        <motion.button
                          key={i}
                          onClick={() => handleAnswer(currentQuestion, opt.score)}
                          className={`w-full p-4 rounded-xl border text-left text-sm transition-all duration-300 cursor-pointer ${
                            answers[currentQuestion] === opt.score
                              ? 'border-teal/40 bg-teal/10 text-teal'
                              : 'border-glass-border hover:border-teal/20 text-text-secondary hover:text-text-primary'
                          }`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.06 }}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {opt.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Back button */}
                {currentQuestion > 0 && (
                  <button
                    onClick={goBack}
                    className="mt-6 flex items-center gap-2 text-sm text-text-secondary hover:text-teal transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    Vorherige Frage
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* ─── SIGNUP PHASE (Newsletter Gate) ─── */}
          {phase === 'signup' && (
            <motion.div
              key="signup"
              className="max-w-lg mx-auto px-8 sm:px-12 md:px-16 lg:px-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-teal" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-3">
                  Ihre Analyse wird vorbereitet
                </h2>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                  Melden Sie sich für unseren Newsletter an und erhalten Sie
                  Ihr persönliches Persönlichkeitsprofil — inklusive individueller
                  Auswertung und konkreter Entwicklungsimpulse.
                </p>
              </motion.div>

              <motion.div
                className="glass-card p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <form onSubmit={handleSignup} className="space-y-4">
                  {/* Row 1: Anrede + Vorname + Nachname */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className={labelClass}>Anrede</label>
                      <select
                        value={signupForm.gender}
                        onChange={(e) => updateSignupField('gender', e.target.value)}
                        className={selectClass}
                      >
                        <option value="" disabled>
                          Bitte wählen
                        </option>
                        <option value="Herr">Herr</option>
                        <option value="Frau">Frau</option>
                        <option value="Divers">Divers</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Vorname</label>
                      <input
                        type="text"
                        value={signupForm.firstName}
                        onChange={(e) => updateSignupField('firstName', e.target.value)}
                        placeholder="Vorname"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Nachname</label>
                      <input
                        type="text"
                        value={signupForm.lastName}
                        onChange={(e) => updateSignupField('lastName', e.target.value)}
                        placeholder="Nachname"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 2: E-Mail */}
                  <div>
                    <label className={labelClass}>E-Mail-Adresse</label>
                    <input
                      type="email"
                      value={signupForm.email}
                      onChange={(e) => updateSignupField('email', e.target.value)}
                      placeholder="ihre@email.de"
                      className={inputClass}
                    />
                  </div>

                  {/* Row 3: Geburtsjahr + PLZ */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Geburtsjahr</label>
                      <select
                        value={signupForm.birthYear}
                        onChange={(e) => updateSignupField('birthYear', e.target.value)}
                        className={selectClass}
                      >
                        <option value="" disabled>
                          Jahr wählen
                        </option>
                        {birthYears.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Postleitzahl</label>
                      <input
                        type="text"
                        value={signupForm.zip}
                        onChange={(e) =>
                          updateSignupField('zip', e.target.value.replace(/\D/g, '').slice(0, 5))
                        }
                        placeholder="z.B. 45966"
                        maxLength={5}
                        inputMode="numeric"
                        pattern="\d{5}"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Error */}
                  {signupError && (
                    <motion.div
                      className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2.5"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle size={15} className="flex-shrink-0" />
                      {signupError}
                    </motion.div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={signupLoading}
                    className="w-full py-3.5 bg-teal text-midnight font-semibold rounded-lg text-sm hover:bg-teal/90 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {signupLoading ? (
                      <div className="w-5 h-5 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                    ) : (
                      <>
                        <Mail size={16} />
                        Ergebnis anzeigen
                      </>
                    )}
                  </button>

                  {/* DSGVO */}
                  <p className="text-[11px] text-text-secondary/40 text-center leading-relaxed">
                    Mit der Anmeldung stimmen Sie unserer{' '}
                    <Link
                      to="/datenschutz"
                      className="underline underline-offset-2 hover:text-text-secondary/60"
                    >
                      Datenschutzerklärung
                    </Link>{' '}
                    zu. Kein Spam. Jederzeit abmeldbar.
                  </p>
                </form>
              </motion.div>

              {/* Benefits */}
              <motion.div
                className="mt-6 flex flex-col gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  'Alle 14 Tage fundierte Handouts',
                  'Konkrete Übungen & Reflexionsfragen',
                  'Kein Spam, jederzeit abmeldbar',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-text-secondary/60">
                    <CheckCircle size={13} className="text-teal/60 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* ─── CALCULATING PHASE ─── */}
          {phase === 'calculating' && (
            <motion.div
              key="calculating"
              className="max-w-lg mx-auto px-8 text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-32 h-32 mx-auto mb-8 relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
              >
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  {/* Pulsing pentagon outlines */}
                  {[0, 1, 2].map((i) => {
                    const r = 45
                    const cx = 60
                    const cy = 60
                    const points = Array.from({ length: 5 }, (_, j) => {
                      const angle = -Math.PI / 2 + (2 * Math.PI * j) / 5
                      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
                    }).join(' ')

                    return (
                      <motion.polygon
                        key={i}
                        points={points}
                        fill="none"
                        stroke="#2DD4BF"
                        strokeWidth={1.5}
                        initial={{ opacity: 0.6, scale: 0.8 }}
                        animate={{ opacity: [0.6, 0.2, 0.6], scale: [0.8, 1.1, 0.8] }}
                        transition={{
                          duration: 2,
                          delay: i * 0.4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        style={{ transformOrigin: '60px 60px' }}
                      />
                    )
                  })}
                  <circle cx={60} cy={60} r={4} fill="#2DD4BF" />
                </svg>
              </motion.div>

              <motion.h2
                className="text-xl md:text-2xl font-serif font-semibold mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Ihr Persönlichkeitsprofil wird erstellt...
              </motion.h2>
              <motion.p
                className="text-text-secondary text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Wir werten Ihre Antworten über alle fünf Dimensionen aus.
              </motion.p>
            </motion.div>
          )}

          {/* ─── RESULTS PHASE ─── */}
          {phase === 'results' && scores && profile && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Hero result */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-midnight" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[120px]" />

                <div className="relative z-10 max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 text-center py-10 md:py-14">
                  <motion.span
                    className="text-xs tracking-[0.25em] uppercase text-gold font-medium inline-block mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Ihr Persönlichkeitsprofil
                  </motion.span>
                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-3 text-gradient-teal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {profile.name}
                  </motion.h1>
                  <motion.p
                    className="text-base md:text-lg text-gold font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {profile.subtitle}
                  </motion.p>
                </div>
              </div>

              <div className="max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
                {/* Profile description */}
                <motion.div
                  className="glass-card p-6 md:p-8 mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-text-secondary leading-relaxed text-base">{profile.description}</p>
                </motion.div>

                {/* Radar Chart (Pentagon) */}
                <motion.div
                  className="flex justify-center mb-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <RadarChart scores={scores as unknown as Record<string, number>} axes={oceanAxes} size={340} animated />
                </motion.div>

                {/* Dimension Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {oceanDimensions.map((dim, i) => {
                    const score = scores[dim.key]
                    const feedback = getOceanDimensionFeedback(dim.key, score)
                    const Icon = dimensionIcons[dim.key]
                    const barColor =
                      feedback.color === 'teal'
                        ? 'bg-teal'
                        : feedback.color === 'gold'
                          ? 'bg-gold'
                          : 'bg-text-secondary/40'
                    const textColor =
                      feedback.color === 'teal'
                        ? 'text-teal'
                        : feedback.color === 'gold'
                          ? 'text-gold'
                          : 'text-text-secondary'

                    return (
                      <motion.div
                        key={dim.key}
                        className="glass-card p-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + i * 0.15 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-9 h-9 rounded-lg ${feedback.color === 'gold' ? 'bg-gold/10' : feedback.color === 'teal' ? 'bg-teal/10' : 'bg-glass-bg'} flex items-center justify-center`}
                          >
                            <Icon size={18} className={textColor} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-text-primary">{dim.label}</h3>
                            <span className={`text-xs font-medium ${textColor}`}>{feedback.level}</span>
                          </div>
                          <span className={`text-lg font-serif font-bold ${textColor}`}>{score}%</span>
                        </div>

                        {/* Score bar */}
                        <div className="h-2 rounded-full bg-glass-bg overflow-hidden mb-3">
                          <motion.div
                            className={`h-full rounded-full ${barColor}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${score}%` }}
                            transition={{
                              duration: 1,
                              delay: 1.2 + i * 0.15,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        </div>

                        <p className="text-xs text-text-secondary leading-relaxed">{feedback.text}</p>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Strengths & Growth Areas */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                >
                  <div className="glass-card p-5 border-teal/20 bg-teal/[0.03]">
                    <h3 className="text-sm font-semibold text-teal mb-3 flex items-center gap-2">
                      <CheckCircle size={16} />
                      Ihre Stärken
                    </h3>
                    <ul className="space-y-2">
                      {profile.strengths.map((s) => (
                        <li key={s} className="text-sm text-text-secondary flex items-start gap-2">
                          <span className="text-teal mt-1">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass-card p-5 border-gold/20 bg-gold/[0.03]">
                    <h3 className="text-sm font-semibold text-gold mb-3 flex items-center gap-2">
                      <Target size={16} />
                      Wachstumsfelder
                    </h3>
                    <ul className="space-y-2">
                      {profile.growthAreas.map((g) => (
                        <li key={g} className="text-sm text-text-secondary flex items-start gap-2">
                          <span className="text-gold mt-1">•</span>
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Coaching Focus */}
                <motion.div
                  className="glass-card p-6 md:p-8 mb-10 border-teal/15"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                >
                  <h3 className="text-lg font-serif font-semibold mb-3">
                    Was bedeutet das für Ihr Coaching?
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{profile.coachingFocus}</p>
                </motion.div>

                {/* CTA */}
                <motion.div
                  className="glass-card p-8 md:p-10 text-center mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                >
                  <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3">
                    Lassen Sie uns Ihr Profil besprechen
                  </h3>
                  <p className="text-text-secondary mb-6 max-w-md mx-auto">
                    In einem vertraulichen Erstgespräch analysieren wir Ihre Ergebnisse und entwickeln
                    eine individuelle Strategie für Ihre persönliche Weiterentwicklung.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      to="/#kontakt"
                      className="px-6 py-3 bg-teal text-midnight font-semibold rounded-full text-sm hover:bg-teal/90 transition-all duration-300 inline-flex items-center gap-2 justify-center"
                    >
                      <Calendar size={16} />
                      Erstgespräch vereinbaren
                    </Link>
                    <button
                      onClick={resetQuiz}
                      className="px-6 py-3 border border-glass-border text-text-secondary rounded-full text-sm hover:border-teal/30 hover:text-teal transition-all duration-300 inline-flex items-center gap-2 justify-center cursor-pointer"
                    >
                      <RotateCcw size={16} />
                      Test wiederholen
                    </button>
                  </div>
                </motion.div>

                {/* 100% Guarantee */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.4 }}
                >
                  <p className="text-xs text-text-secondary/50">
                    Übrigens: Jede Coaching-Sitzung ist durch unsere{' '}
                    <Link
                      to="/agb#zufriedenheitsgarantie"
                      className="text-teal hover:text-teal/80 underline underline-offset-2"
                    >
                      100 % Geld-zurück-Garantie
                    </Link>{' '}
                    abgesichert. Sie entscheiden zur Folgesitzung.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-glass-border py-8">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary/40">
            &copy; {new Date().getFullYear()} Dennis Tefett. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-secondary/40">
            <Link to="/" className="hover:text-text-secondary transition-colors">
              Startseite
            </Link>
            <Link to="/datenschutz" className="hover:text-text-secondary transition-colors">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-text-secondary transition-colors">
              AGB
            </Link>
            <Link to="/impressum" className="hover:text-text-secondary transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
