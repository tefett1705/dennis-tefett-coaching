import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Brain, MessageCircle, Shield, Target, RotateCcw, Calendar, CheckCircle, Sparkles } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import RadarChart, { generateAngles } from '../components/RadarChart'
import type { RadarAxis } from '../components/RadarChart'
import {
  questions,
  dimensions,
  calculateScores,
  getProfileType,
  getDimensionFeedback,
  type DimensionScores,
  type ProfileType,
  type Dimension,
} from '../data/selbsttestData'

const dimensionIcons: Record<Dimension, typeof Brain> = {
  selbstfuehrung: Brain,
  kommunikation: MessageCircle,
  resilienz: Shield,
  strategie: Target,
}

const dimensionColors: Record<Dimension, string> = {
  selbstfuehrung: 'teal',
  kommunikation: 'gold',
  resilienz: 'teal',
  strategie: 'gold',
}

const selbsttestAngles = generateAngles(4)
const selbsttestAxes: RadarAxis[] = dimensions.map((dim, i) => ({
  key: dim.key,
  label: dim.shortLabel,
  angle: selbsttestAngles[i],
}))

type Phase = 'intro' | 'quiz' | 'calculating' | 'results'

export default function Selbsttest() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [scores, setScores] = useState<DimensionScores | null>(null)
  const [profile, setProfile] = useState<ProfileType | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleAnswer = (questionIndex: number, score: number) => {
    const newAnswers = { ...answers, [questionIndex]: score }
    setAnswers(newAnswers)

    if (questionIndex < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(questionIndex + 1), 350)
    } else {
      // Last question → calculating phase
      setTimeout(() => {
        setPhase('calculating')
        const calculatedScores = calculateScores(newAnswers)
        const calculatedProfile = getProfileType(calculatedScores)
        // Show calculating animation for 2.5 seconds
        setTimeout(() => {
          setScores(calculatedScores)
          setProfile(calculatedProfile)
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

  return (
    <div className="min-h-screen bg-surface pb-20 md:pb-0">
      <SEOHead
        title="Führungsprofil-Analyse | Kostenloser Selbsttest | Dennis Tefett Coaching"
        description="Entdecken Sie Ihr Führungsprofil in 3 Minuten. Kostenloser, wissenschaftlich fundierter Selbsttest für Führungskräfte mit sofortiger Auswertung."
        canonical="/selbsttest"
      />

      <main className="pt-24 md:pt-28 pb-20">
        <AnimatePresence mode="wait">
          {/* ─── INTRO PHASE ─── */}
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{}}
              animate={{}}
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
                    Kostenloser Selbsttest
                  </motion.span>
                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-4"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Ihr Führungsprofil entdecken
                  </motion.h1>
                  <motion.p
                    className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
                    initial={{ y: 15 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    12 Fragen. 3 Minuten. Sofortige, personalisierte Auswertung.
                    Entdecken Sie Ihre Stärken und Wachstumsfelder als Führungskraft.
                  </motion.p>
                </div>
              </div>

              {/* Dimensions Preview */}
              <div className="max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 mt-8">
                <motion.p
                  className="text-center text-sm text-text-secondary mb-8"
                  initial={{}}
                  animate={{}}
                  transition={{ delay: 0.3 }}
                >
                  Wir analysieren Ihr Profil in vier Schlüsseldimensionen:
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {dimensions.map((dim, i) => {
                    const Icon = dimensionIcons[dim.key]
                    const color = dimensionColors[dim.key]
                    return (
                      <motion.div
                        key={dim.key}
                        className="glass-card p-5 text-center"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      >
                        <div className={`w-12 h-12 rounded-xl ${color === 'gold' ? 'bg-gold/10' : 'bg-teal/10'} flex items-center justify-center mx-auto mb-3`}>
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
                  <h3 className="text-lg font-serif font-semibold mb-4 text-center">Was Sie erwartet</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: Sparkles, text: 'Ihr persönlicher Führungstyp mit detaillierter Beschreibung' },
                      { icon: Target, text: 'Radar-Analyse über alle vier Dimensionen' },
                      { icon: CheckCircle, text: 'Konkrete Stärken und Entwicklungsfelder' },
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
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ─── QUIZ PHASE ─── */}
          {phase === 'quiz' && (
            <motion.div
              key="quiz"
              className="max-w-2xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20"
              initial={{}}
              animate={{}}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Progress bar */}
              <div className="flex items-center gap-1.5 mb-6">
                {questions.map((_, i) => (
                  <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-glass-bg">
                    <motion.div
                      className="h-full bg-gradient-to-r from-teal to-gold rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: i <= currentQuestion ? 1 : i < currentQuestion ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                ))}
              </div>

              {/* Question counter */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-text-secondary/60">
                  Frage {currentQuestion + 1} von {questions.length}
                </span>
                <span className="text-xs text-text-secondary/40 uppercase tracking-wider">
                  {dimensions.find((d) => d.key === questions[currentQuestion].dimension)?.label}
                </span>
              </div>

              {/* Question card */}
              <div className="glass-card p-6 md:p-8 min-h-[400px] flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`q-${currentQuestion}`}
                    initial={{ x: 30 }}
                    animate={{ x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    <h2 className="text-lg md:text-xl font-serif font-semibold mb-8 leading-relaxed">
                      {questions[currentQuestion].question}
                    </h2>

                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((opt, i) => (
                        <motion.button
                          key={i}
                          onClick={() => handleAnswer(currentQuestion, opt.score)}
                          className={`w-full p-4 rounded-xl border text-left text-sm transition-all duration-300 cursor-pointer ${
                            answers[currentQuestion] === opt.score
                              ? 'border-teal/40 bg-teal/10 text-teal'
                              : 'border-glass-border hover:border-teal/20 text-text-secondary hover:text-text-primary'
                          }`}
                          initial={{ y: 10 }}
                          animate={{ y: 0 }}
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

          {/* ─── CALCULATING PHASE ─── */}
          {phase === 'calculating' && (
            <motion.div
              key="calculating"
              className="max-w-lg mx-auto px-8 text-center py-20"
              initial={{}}
              animate={{}}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-32 h-32 mx-auto mb-8 relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
              >
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  {/* Pulsing radar outline */}
                  {[0, 1, 2].map((i) => (
                    <motion.polygon
                      key={i}
                      points="60,15 105,60 60,105 15,60"
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
                  ))}
                  <circle cx={60} cy={60} r={4} fill="#2DD4BF" />
                </svg>
              </motion.div>

              <motion.h2
                className="text-xl md:text-2xl font-serif font-semibold mb-3"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Ihr Profil wird analysiert...
              </motion.h2>
              <motion.p
                className="text-text-secondary text-sm"
                initial={{}}
                animate={{}}
                transition={{ delay: 0.6 }}
              >
                Wir werten Ihre Antworten über alle vier Dimensionen aus.
              </motion.p>
            </motion.div>
          )}

          {/* ─── RESULTS PHASE ─── */}
          {phase === 'results' && scores && profile && (
            <motion.div
              key="results"
              initial={{}}
              animate={{}}
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
                    Ihr Ergebnis
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
                    initial={{}}
                    animate={{}}
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
                  <RadarChart scores={scores as unknown as Record<string, number>} axes={selbsttestAxes} size={320} animated />
                </motion.div>

                {/* Dimension Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {dimensions.map((dim, i) => {
                    const score = scores[dim.key]
                    const feedback = getDimensionFeedback(dim.key, score)
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
                        transition={{ delay: 1 + i * 0.15 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-9 h-9 rounded-lg ${feedback.color === 'gold' ? 'bg-gold/10' : feedback.color === 'teal' ? 'bg-teal/10' : 'bg-glass-bg'} flex items-center justify-center`}>
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
                            transition={{ duration: 1, delay: 1.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
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
                  initial={{ y: 15 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.6 }}
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
                  initial={{ y: 15 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.8 }}
                >
                  <h3 className="text-lg font-serif font-semibold mb-3">Was bedeutet das für Ihr Coaching?</h3>
                  <p className="text-text-secondary leading-relaxed">{profile.coachingFocus}</p>
                </motion.div>

                {/* CTA */}
                <motion.div
                  className="glass-card p-8 md:p-10 text-center mb-10"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 2 }}
                >
                  <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3">
                    Lassen Sie uns Ihr Profil besprechen
                  </h3>
                  <p className="text-text-secondary mb-6 max-w-md mx-auto">
                    In einem vertraulichen Erstgespräch analysieren wir Ihre Ergebnisse und entwickeln eine individuelle Strategie.
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

                {/* 100% Guarantee reference */}
                <motion.div
                  className="text-center mb-8"
                  initial={{}}
                  animate={{}}
                  transition={{ delay: 2.2 }}
                >
                  <p className="text-xs text-text-secondary/50">
                    Übrigens: Jede Coaching-Sitzung ist durch unsere{' '}
                    <Link to="/agb#zufriedenheitsgarantie" className="text-teal hover:text-teal/80 underline underline-offset-2">
                      100 % Geld-zurück-Garantie
                    </Link>
                    {' '}abgesichert. Sie entscheiden zur Folgesitzung.
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
