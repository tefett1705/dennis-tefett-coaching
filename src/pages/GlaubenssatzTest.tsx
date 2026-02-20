import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Award,
  Users,
  Sprout,
  Lock,
  Flame,
  RotateCcw,
  Calendar,
  Sparkles,
  Target,
  History,
  CheckCircle,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import RadarChart, { generateAngles } from '../components/RadarChart'
import type { RadarAxis } from '../components/RadarChart'
import {
  glaubenssatzQuestions,
  glaubenssatzDimensions,
  LIKERT_LABELS,
  calculateGlaubenssatzScores,
  getGlaubenssatzProfile,
  getGlaubenssatzFeedback,
  saveGlaubenssatzResult,
  getSavedGlaubenssatzResults,
  type GlaubenssatzDimensionScores,
  type GlaubenssatzProfileType,
  type GlaubenssatzDimension,
} from '../data/glaubenssatzData'

const dimensionIcons: Record<GlaubenssatzDimension, typeof Heart> = {
  self_worth: Heart,
  achievement: Award,
  relationships: Users,
  change: Sprout,
  control: Lock,
  emotions: Flame,
}

const dimensionColors: Record<GlaubenssatzDimension, 'teal' | 'gold'> = {
  self_worth: 'teal',
  achievement: 'gold',
  relationships: 'teal',
  change: 'gold',
  control: 'teal',
  emotions: 'gold',
}

const glaubenssatzAngles = generateAngles(6)
const glaubenssatzAxes: RadarAxis[] = glaubenssatzDimensions.map((dim, i) => ({
  key: dim.key,
  label: dim.shortLabel,
  angle: glaubenssatzAngles[i],
}))

function dimensionScoresOnly(s: GlaubenssatzDimensionScores): Record<string, number> {
  return { self_worth: s.self_worth, achievement: s.achievement, relationships: s.relationships, change: s.change, control: s.control, emotions: s.emotions }
}

type Phase = 'intro' | 'quiz' | 'calculating' | 'results' | 'history'

export default function GlaubenssatzTest() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [scores, setScores] = useState<GlaubenssatzDimensionScores | null>(null)
  const [profile, setProfile] = useState<GlaubenssatzProfileType | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleAnswer = (questionIndex: number, score: number) => {
    const newAnswers = { ...answers, [questionIndex]: score }
    setAnswers(newAnswers)

    if (questionIndex < glaubenssatzQuestions.length - 1) {
      setTimeout(() => setCurrentQuestion(questionIndex + 1), 350)
    } else if (phase !== 'calculating') {
      setTimeout(() => {
        setPhase('calculating')
        const calculatedScores = calculateGlaubenssatzScores(newAnswers)
        const calculatedProfile = getGlaubenssatzProfile(calculatedScores)
        setTimeout(() => {
          setScores(calculatedScores)
          setProfile(calculatedProfile)
          saveGlaubenssatzResult(calculatedScores)
          setSavedResults(getSavedGlaubenssatzResults())
          setPhase('results')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 2500)
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
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [savedResults, setSavedResults] = useState(() => getSavedGlaubenssatzResults())

  return (
    <div className="min-h-screen bg-surface pb-20 md:pb-0">
      <SEOHead
        title="Kostenloser Glaubenssatz-Test: Limitierende Überzeugungen erkennen | Dennis Tefett"
        description="Erkenne deine limitierenden Glaubenssätze in 6 Kernbereichen: Selbstwert, Leistung, Beziehungen und mehr. Kostenloser interaktiver Test mit sofortiger Auswertung. Jetzt starten."
        canonical="https://dennis-tefett.de/glaubenssatz-test"
        keywords="Glaubenssatz Test, Glaubenssätze erkennen, limitierende Glaubenssätze, Selbsttest Überzeugungen, innere Glaubenssätze, Überzeugungen verändern, kostenloser Selbsttest Coaching"
      />

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
                <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/50 to-surface" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal/3 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/3 rounded-full blur-[100px]" />

                <div className="relative z-10 max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 text-center py-12 md:py-16">
                  <motion.span
                    className="text-xs tracking-[0.25em] uppercase text-gold font-medium inline-block mb-4"
                    initial={{ y: 15 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Glaubenssatz-Analyse
                  </motion.span>
                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-4"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Glaubenssatz-Test: Welche Überzeugungen leiten dich?
                  </motion.h1>
                  <motion.p
                    className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
                    initial={{ y: 15 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    24 Aussagen. 5 Minuten. Sofortige Auswertung mit persönlichem Radar-Profil
                    über sechs Kernbereiche deines Denkens.
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
                  Wir analysieren deine Glaubenssätze in sechs Kernbereichen:
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {glaubenssatzDimensions.map((dim, i) => {
                    const Icon = dimensionIcons[dim.key]
                    const color = dimensionColors[dim.key]
                    return (
                      <motion.div
                        key={dim.key}
                        className="glass-card p-5 text-center"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl ${color === 'gold' ? 'bg-gold/10' : 'bg-teal/10'} flex items-center justify-center mx-auto mb-3`}
                        >
                          <Icon size={22} className={color === 'gold' ? 'text-gold' : 'text-teal'} />
                        </div>
                        <h3 className="text-sm font-semibold text-text-primary">{dim.label}</h3>
                      </motion.div>
                    )
                  })}
                </div>

                {/* What you get */}
                <motion.div
                  className="glass-card p-6 md:p-8 mb-10"
                  initial={{ y: 15 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-lg font-serif font-semibold mb-4 text-center">Was dich erwartet</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: Sparkles, text: 'Dein persönliches Glaubenssatz-Profil mit detaillierter Auswertung' },
                      { icon: Target, text: 'Radar-Analyse über alle sechs Kernbereiche' },
                      { icon: CheckCircle, text: 'Konkrete Übungen und Handlungsempfehlungen' },
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
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <button
                    onClick={startQuiz}
                    className="px-8 py-4 bg-teal text-midnight font-semibold rounded-full text-base hover:bg-teal/90 transition-all duration-300 cursor-pointer inline-flex items-center gap-2 shadow-lg shadow-teal/20"
                  >
                    Analyse starten
                    <ArrowRight size={18} />
                  </button>
                  <p className="text-xs text-text-secondary/50 mt-4">
                    Kostenlos und anonym. Keine Anmeldung erforderlich.
                  </p>

                  {savedResults.length > 0 && (
                    <button
                      onClick={() => setPhase('history')}
                      className="mt-4 text-sm text-text-secondary hover:text-teal transition-colors cursor-pointer inline-flex items-center gap-2"
                    >
                      <History size={14} />
                      Frühere Ergebnisse ansehen ({savedResults.length})
                    </button>
                  )}
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
                {glaubenssatzQuestions.map((_, i) => (
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
                  Frage {currentQuestion + 1} von {glaubenssatzQuestions.length}
                </span>
                <span className="text-xs text-text-secondary/40 uppercase tracking-wider">
                  {glaubenssatzDimensions.find((d) => d.key === glaubenssatzQuestions[currentQuestion].dimension)?.label}
                </span>
              </div>

              {/* Question card */}
              <div className="glass-card p-6 md:p-8 min-h-[360px] flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`q-${currentQuestion}`}
                    initial={{ x: 30 }}
                    animate={{ x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    <h2 className="text-lg md:text-xl font-serif font-semibold mb-4 leading-relaxed">
                      {glaubenssatzQuestions[currentQuestion].question}
                    </h2>

                    <p className="text-xs text-text-secondary/50 mb-6">
                      Wie stark trifft diese Aussage auf dich zu?
                    </p>

                    {/* Likert scale */}
                    <div className="space-y-3">
                      {LIKERT_LABELS.map((label, i) => {
                        const score = i + 1
                        const isSelected = answers[currentQuestion] === score
                        return (
                          <motion.button
                            key={score}
                            onClick={() => handleAnswer(currentQuestion, score)}
                            className={`w-full p-4 rounded-xl border text-left text-sm transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                              isSelected
                                ? 'border-teal/40 bg-teal/10 text-teal'
                                : 'border-glass-border hover:border-teal/20 text-text-secondary hover:text-text-primary'
                            }`}
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span
                              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors ${
                                isSelected
                                  ? 'border-teal bg-teal/20 text-teal'
                                  : 'border-glass-border text-text-secondary/40'
                              }`}
                            >
                              {score}
                            </span>
                            <span>{label}</span>
                          </motion.button>
                        )
                      })}
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
                <svg viewBox="0 0 120 120" className="w-full h-full text-teal">
                  {[0, 1, 2].map((i) => (
                    <motion.polygon
                      key={i}
                      points="60,10 100,35 100,85 60,110 20,85 20,35"
                      fill="none"
                      stroke="currentColor"
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
                  ))}
                  <circle cx={60} cy={60} r={4} fill="currentColor" />
                </svg>
              </motion.div>

              <motion.h2
                className="text-xl md:text-2xl font-serif font-semibold mb-3"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Dein Profil wird analysiert...
              </motion.h2>
              <motion.p
                className="text-text-secondary text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Wir werten deine Antworten über alle sechs Bereiche aus.
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
                <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/50 to-surface" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[120px]" />

                <div className="relative z-10 max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 text-center py-10 md:py-14">
                  <motion.span
                    className="text-xs tracking-[0.25em] uppercase text-gold font-medium inline-block mb-3"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Dein Ergebnis
                  </motion.span>
                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-3 text-gradient-teal"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
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
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-text-secondary leading-relaxed text-base">
                    {profile.description}
                  </p>
                </motion.div>

                {/* Radar Chart */}
                <motion.div
                  className="flex justify-center mb-10"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <RadarChart
                    scores={dimensionScoresOnly(scores)}
                    axes={glaubenssatzAxes}
                    size={340}
                    animated
                  />
                </motion.div>

                <motion.p
                  className="text-center text-xs text-text-secondary/50 mb-8 -mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Hohe Werte = starke limitierende Muster. Niedrige Werte = gesunde Überzeugungen.
                </motion.p>

                {/* Dimension Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {glaubenssatzDimensions.map((dim, i) => {
                    const score = scores[dim.key]
                    const feedback = getGlaubenssatzFeedback(dim.key, score)
                    const Icon = dimensionIcons[dim.key]
                    const barColor =
                      feedback.color === 'teal' ? 'bg-teal'
                      : feedback.color === 'gold' ? 'bg-gold'
                      : 'bg-text-secondary/40'
                    const textColor =
                      feedback.color === 'teal' ? 'text-teal'
                      : feedback.color === 'gold' ? 'text-gold'
                      : 'text-text-secondary'

                    return (
                      <motion.div
                        key={dim.key}
                        className="glass-card p-5"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1 + i * 0.12 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-9 h-9 rounded-lg ${
                              feedback.color === 'gold' ? 'bg-gold/10'
                              : feedback.color === 'teal' ? 'bg-teal/10'
                              : 'bg-glass-bg'
                            } flex items-center justify-center`}
                          >
                            <Icon size={18} className={textColor} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-text-primary">{dim.label}</h3>
                            <span className={`text-xs font-medium ${textColor}`}>{feedback.title}</span>
                          </div>
                          <span className={`text-lg font-serif font-bold ${textColor}`}>{score}%</span>
                        </div>

                        {/* Score bar */}
                        <div className="h-2 rounded-full bg-glass-bg overflow-hidden mb-3">
                          <motion.div
                            className={`h-full rounded-full ${barColor}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${score}%` }}
                            transition={{ duration: 1, delay: 1.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>

                        <p className="text-xs text-text-secondary leading-relaxed">{feedback.text}</p>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Key areas */}
                <motion.div
                  className="glass-card p-5 border-teal/20 bg-teal/[0.03] mb-10"
                  initial={{ y: 15 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.8 }}
                >
                  <h3 className="text-sm font-semibold text-teal mb-3 flex items-center gap-2">
                    <CheckCircle size={16} />
                    Dein Profil auf einen Blick
                  </h3>
                  <ul className="space-y-2">
                    {profile.primaryAreas.map((area) => (
                      <li key={area} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="text-teal mt-1">•</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Coaching recommendation */}
                <motion.div
                  className="glass-card p-6 md:p-8 mb-10 border-teal/15"
                  initial={{ y: 15 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.9 }}
                >
                  <h3 className="text-lg font-serif font-semibold mb-3">Empfehlung</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">{profile.recommendation}</p>

                  {/* Key insight */}
                  <div className="glass-card p-4 bg-gold/[0.04] border-gold/15">
                    <p className="text-sm text-gold/80 font-medium italic">
                      "Glaubenssätze sind keine Fakten. Sie fühlen sich wie Fakten an. Der erste Schritt zur Veränderung ist ehrliche Selbstwahrnehmung."
                    </p>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  className="glass-card p-8 md:p-10 text-center mb-10 glass-card-gold"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 2 }}
                >
                  <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3">
                    Lass uns dein Profil besprechen
                  </h3>
                  <p className="text-text-secondary mb-2 max-w-md mx-auto">
                    In einem vertraulichen Erstgespräch analysieren wir deine Ergebnisse und entwickeln eine individuelle Strategie.
                  </p>
                  <p className="text-xs text-gold/60 mb-6">
                    Kostenlos. 30 Minuten. Vertraulich. Keine Verpflichtung.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      to="/#kontakt"
                      className="px-6 py-3 bg-gold text-midnight font-semibold rounded-full text-sm hover:bg-gold/90 transition-all duration-300 inline-flex items-center gap-2 justify-center shadow-lg shadow-gold/20"
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

                {/* Guarantee */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  <p className="text-xs text-text-secondary/50">
                    Jede Coaching-Sitzung ist durch unsere{' '}
                    <Link to="/agb#zufriedenheitsgarantie" className="text-teal hover:text-teal/80 underline underline-offset-2">
                      100 % Geld-zurück-Garantie
                    </Link>
                    {' '}abgesichert.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ─── HISTORY PHASE ─── */}
          {phase === 'history' && (
            <motion.div
              key="history"
              className="max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold">Deine Entwicklung</h2>
                  <p className="text-sm text-text-secondary mt-1">
                    {savedResults.length} {savedResults.length === 1 ? 'Durchführung' : 'Durchführungen'} gespeichert
                  </p>
                </div>
                <button
                  onClick={() => setPhase('intro')}
                  className="text-sm text-text-secondary hover:text-teal transition-colors cursor-pointer flex items-center gap-2"
                >
                  <ArrowLeft size={14} />
                  Zurück
                </button>
              </div>

              {savedResults.length > 0 && (
                <>
                  {/* Latest result radar */}
                  <motion.div
                    className="glass-card p-6 md:p-8 mb-8"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-lg font-serif font-semibold mb-4 text-center">
                      {savedResults.length > 1 ? 'Aktuellstes Ergebnis' : 'Dein Ergebnis'}
                    </h3>
                    <div className="flex justify-center">
                      <RadarChart
                        scores={dimensionScoresOnly(savedResults[savedResults.length - 1].scores)}
                        axes={glaubenssatzAxes}
                        size={300}
                        animated
                      />
                    </div>
                  </motion.div>

                  {/* Timeline */}
                  <div className="space-y-4">
                    {[...savedResults].reverse().map((result, i) => {
                      const date = new Date(result.date)
                      const dateStr = date.toLocaleDateString('de-DE', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                      const dims = glaubenssatzDimensions.map((d) => ({
                        label: d.label,
                        score: result.scores[d.key],
                      }))
                      const avg = Math.round(dims.reduce((s, d) => s + d.score, 0) / dims.length)

                      return (
                        <motion.div
                          key={`${result.date}-${i}`}
                          className="glass-card p-5"
                          initial={{ y: 15 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-text-secondary/60">{dateStr}</span>
                            <span className="text-sm font-semibold text-teal">Schnitt: {avg}%</span>
                          </div>
                          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                            {dims.map((d) => (
                              <div key={d.label} className="text-center">
                                <div className="text-xs text-text-secondary/50 mb-1 truncate">{d.label.split(' ')[0]}</div>
                                <div className={`text-sm font-bold ${d.score <= 33 ? 'text-teal' : d.score <= 66 ? 'text-gold' : 'text-text-secondary'}`}>
                                  {d.score}%
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </>
              )}

              {/* Start new test */}
              <motion.div
                className="text-center mt-10"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button
                  onClick={startQuiz}
                  className="px-8 py-4 bg-teal text-midnight font-semibold rounded-full text-base hover:bg-teal/90 transition-all duration-300 cursor-pointer inline-flex items-center gap-2 shadow-lg shadow-teal/20"
                >
                  Neue Analyse starten
                  <ArrowRight size={18} />
                </button>
              </motion.div>
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
            <Link to="/" className="hover:text-text-secondary transition-colors">Startseite</Link>
            <Link to="/datenschutz" className="hover:text-text-secondary transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-text-secondary transition-colors">AGB</Link>
            <Link to="/impressum" className="hover:text-text-secondary transition-colors">Impressum</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
