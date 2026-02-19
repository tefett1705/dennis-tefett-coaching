import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Activity,
  HeartPulse,
  BrainCircuit,
  Moon,
  Briefcase,
  RotateCcw,
  Calendar,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Sparkles,
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import {
  questions,
  categories,
  calculateScores,
  getStressResult,
  getCategoryFeedback,
  type CategoryScores,
  type StressResult,
  type StressCategory,
} from '../data/stresslevelData'

const categoryIcons: Record<StressCategory, typeof Activity> = {
  koerper: HeartPulse,
  gedanken: BrainCircuit,
  verhalten: Activity,
  emotion: Moon,
  arbeit: Briefcase,
}

const levelConfig = {
  gruen: {
    icon: CheckCircle,
    color: 'teal',
    bgGlow: 'bg-teal/5',
    borderColor: 'border-teal/30',
    textColor: 'text-teal',
    barColor: 'bg-teal',
    label: 'Grün',
  },
  gelb: {
    icon: AlertTriangle,
    color: 'gold',
    bgGlow: 'bg-gold/5',
    borderColor: 'border-gold/30',
    textColor: 'text-gold',
    barColor: 'bg-gold',
    label: 'Gelb',
  },
  rot: {
    icon: XCircle,
    color: 'red',
    bgGlow: 'bg-red-500/5',
    borderColor: 'border-red-500/30',
    textColor: 'text-red-400',
    barColor: 'bg-red-400',
    label: 'Rot',
  },
}

type Phase = 'intro' | 'quiz' | 'calculating' | 'results'

export default function StressLevelCheck() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [scores, setScores] = useState<CategoryScores | null>(null)
  const [result, setResult] = useState<StressResult | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleAnswer = (questionIndex: number, score: number) => {
    const newAnswers = { ...answers, [questionIndex]: score }
    setAnswers(newAnswers)

    if (questionIndex < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(questionIndex + 1), 350)
    } else {
      setTimeout(() => {
        setPhase('calculating')
        const calculatedScores = calculateScores(newAnswers)
        const calculatedResult = getStressResult(calculatedScores)
        setTimeout(() => {
          setScores(calculatedScores)
          setResult(calculatedResult)
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
    setResult(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-surface pb-20 md:pb-0">
      <SEOHead
        title="Stress-Level-Check | Wie belastet sind Sie? | Dennis Tefett Coaching"
        description="Finden Sie in 5 Minuten heraus, wie hoch Ihr Stresslevel ist. Kostenloser, psychologisch fundierter Stress-Check mit Ampelsystem und persönlichen Empfehlungen."
        keywords="Stresstest, Stress-Level-Check, Burnout Prävention, Stressbelastung, Coaching, Dennis Tefett"
      />

      <main className="pt-24 md:pt-28 pb-20">
        <AnimatePresence mode="wait">
          {/* INTRO */}
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{}}
              animate={{}}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/50 to-surface" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teal/3 rounded-full blur-[100px]" />

                <div className="relative z-10 max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 text-center py-12 md:py-16">
                  <motion.span
                    className="text-xs tracking-[0.25em] uppercase text-gold font-medium inline-block mb-4"
                    initial={{ y: 15 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Kostenloser Stress-Check
                  </motion.span>
                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-4"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Wie belastet sind Sie wirklich?
                  </motion.h1>
                  <motion.p
                    className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
                    initial={{ y: 15 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    10 Fragen. 5 Minuten. Ehrliche Standortbestimmung mit persönlicher Auswertung
                    und konkreten Handlungsempfehlungen.
                  </motion.p>
                </div>
              </div>

              {/* Category Preview */}
              <div className="max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 mt-8">
                <motion.p
                  className="text-center text-sm text-text-secondary mb-8"
                  initial={{}}
                  animate={{}}
                  transition={{ delay: 0.3 }}
                >
                  Wir analysieren Ihre Belastung in fünf Bereichen:
                </motion.p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                  {categories.map((cat, i) => {
                    const Icon = categoryIcons[cat.key]
                    const isGold = i % 2 === 1
                    return (
                      <motion.div
                        key={cat.key}
                        className="glass-card p-4 text-center"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                      >
                        <div className={`w-10 h-10 rounded-xl ${isGold ? 'bg-gold/10' : 'bg-teal/10'} flex items-center justify-center mx-auto mb-3`}>
                          <Icon size={20} className={isGold ? 'text-gold' : 'text-teal'} />
                        </div>
                        <h3 className="text-xs font-semibold text-text-primary">{cat.label}</h3>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Traffic light preview */}
                <motion.div
                  className="glass-card p-6 md:p-8 mb-10"
                  initial={{ y: 15 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-lg font-serif font-semibold mb-4 text-center">Was Sie erwartet</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: Sparkles, text: 'Ampel-Auswertung: Grün, Gelb oder Rot für Ihr persönliches Stresslevel' },
                      { icon: Activity, text: 'Detailanalyse über fünf Belastungsbereiche' },
                      { icon: CheckCircle, text: 'Persönliche Handlungsempfehlungen zum sofort Umsetzen' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <item.icon size={16} className="text-gold" />
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
                    className="px-8 py-4 bg-gold text-midnight font-semibold rounded-full text-base hover:bg-gold/90 transition-all duration-300 cursor-pointer inline-flex items-center gap-2 shadow-lg shadow-gold/20"
                    aria-label="Stress-Level-Check starten"
                  >
                    Check starten
                    <ArrowRight size={18} />
                  </button>
                  <p className="text-xs text-text-secondary/50 mt-4">
                    Kostenlos und anonym. Keine Anmeldung erforderlich.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* QUIZ */}
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
              <div className="flex items-center gap-1.5 mb-6" role="progressbar" aria-valuenow={currentQuestion + 1} aria-valuemin={1} aria-valuemax={questions.length} aria-label={`Frage ${currentQuestion + 1} von ${questions.length}`}>
                {questions.map((_, i) => (
                  <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-glass-bg">
                    <motion.div
                      className="h-full bg-gradient-to-r from-gold to-teal rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: i <= currentQuestion ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-text-secondary/60">
                  Frage {currentQuestion + 1} von {questions.length}
                </span>
                <span className="text-xs text-text-secondary/40 uppercase tracking-wider">
                  {categories.find((c) => c.key === questions[currentQuestion].category)?.label}
                </span>
              </div>

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
                              ? 'border-gold/40 bg-gold/10 text-gold'
                              : 'border-glass-border hover:border-gold/20 text-text-secondary hover:text-text-primary'
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

                {currentQuestion > 0 && (
                  <button
                    onClick={goBack}
                    className="mt-6 flex items-center gap-2 text-sm text-text-secondary hover:text-gold transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    Vorherige Frage
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* CALCULATING */}
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
                  {[0, 1, 2].map((i) => (
                    <motion.circle
                      key={i}
                      cx={60}
                      cy={60}
                      r={35 + i * 10}
                      fill="none"
                      stroke="#D4A72D"
                      strokeWidth={1.5}
                      initial={{ opacity: 0.6, scale: 0.9 }}
                      animate={{ opacity: [0.6, 0.2, 0.6], scale: [0.9, 1.05, 0.9] }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      style={{ transformOrigin: '60px 60px' }}
                    />
                  ))}
                  <circle cx={60} cy={60} r={4} fill="#D4A72D" />
                </svg>
              </motion.div>

              <motion.h2
                className="text-xl md:text-2xl font-serif font-semibold mb-3"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Ihre Auswertung wird erstellt...
              </motion.h2>
              <motion.p
                className="text-text-secondary text-sm"
                initial={{}}
                animate={{}}
                transition={{ delay: 0.6 }}
              >
                Wir analysieren Ihre Antworten über alle fünf Bereiche.
              </motion.p>
            </motion.div>
          )}

          {/* RESULTS */}
          {phase === 'results' && scores && result && (
            <motion.div
              key="results"
              initial={{}}
              animate={{}}
              transition={{ duration: 0.6 }}
            >
              {(() => {
                const config = levelConfig[result.level]
                const LevelIcon = config.icon

                return (
                  <>
                    {/* Hero result */}
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/50 to-surface" />
                      <div className={`absolute top-1/3 right-1/4 w-96 h-96 ${config.bgGlow} rounded-full blur-[120px]`} />

                      <div className="relative z-10 max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 text-center py-10 md:py-14">
                        <motion.div
                          className="flex justify-center mb-4"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className={`w-16 h-16 rounded-2xl ${config.bgGlow} border ${config.borderColor} flex items-center justify-center`}>
                            <LevelIcon size={28} className={config.textColor} />
                          </div>
                        </motion.div>
                        <motion.span
                          className={`text-xs tracking-[0.25em] uppercase ${config.textColor} font-medium inline-block mb-3`}
                          initial={{ y: 10 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          Ampel: {config.label}
                        </motion.span>
                        <motion.h1
                          className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold leading-tight mb-3"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {result.title}
                        </motion.h1>
                        <motion.p
                          className={`text-base md:text-lg ${config.textColor} font-medium`}
                          initial={{}}
                          animate={{}}
                          transition={{ delay: 0.5 }}
                        >
                          {result.subtitle}
                        </motion.p>
                      </div>
                    </div>

                    <div className="max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
                      {/* Description */}
                      <motion.div
                        className="glass-card p-6 md:p-8 mb-8 text-center"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <p className="text-text-secondary leading-relaxed text-base">
                          {result.description}
                        </p>
                      </motion.div>

                      {/* Overall Score Bar */}
                      <motion.div
                        className={`glass-card p-5 mb-8 ${config.borderColor}`}
                        initial={{ y: 15 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold text-text-primary">Gesamtbelastung</span>
                          <span className={`text-lg font-serif font-bold ${config.textColor}`}>{scores.total}%</span>
                        </div>
                        <div className="h-3 rounded-full bg-glass-bg overflow-hidden relative">
                          {/* Traffic light zones */}
                          <div className="absolute inset-0 flex">
                            <div className="w-[35%] bg-teal/10" />
                            <div className="w-[27%] bg-gold/10" />
                            <div className="w-[38%] bg-red-400/10" />
                          </div>
                          <motion.div
                            className={`h-full rounded-full ${config.barColor} relative z-10`}
                            initial={{ width: 0 }}
                            animate={{ width: `${scores.total}%` }}
                            transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                        <div className="flex justify-between mt-2">
                          <span className="text-[10px] text-teal/60">Niedrig</span>
                          <span className="text-[10px] text-gold/60">Erhöht</span>
                          <span className="text-[10px] text-red-400/60">Hoch</span>
                        </div>
                      </motion.div>

                      {/* Category Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        {categories.map((cat, i) => {
                          const score = scores[cat.key]
                          const feedback = getCategoryFeedback(cat.key, score)
                          const Icon = categoryIcons[cat.key]
                          const barColor =
                            feedback.color === 'teal' ? 'bg-teal'
                            : feedback.color === 'gold' ? 'bg-gold'
                            : 'bg-red-400'
                          const textColor =
                            feedback.color === 'teal' ? 'text-teal'
                            : feedback.color === 'gold' ? 'text-gold'
                            : 'text-red-400'

                          return (
                            <motion.div
                              key={cat.key}
                              className="glass-card p-5"
                              initial={{ y: 20 }}
                              animate={{ y: 0 }}
                              transition={{ delay: 1 + i * 0.12 }}
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <div className={`w-9 h-9 rounded-lg ${
                                  feedback.color === 'gold' ? 'bg-gold/10' : feedback.color === 'teal' ? 'bg-teal/10' : 'bg-red-400/10'
                                } flex items-center justify-center`}>
                                  <Icon size={18} className={textColor} />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-sm font-semibold text-text-primary">{cat.label}</h3>
                                  <span className={`text-xs font-medium ${textColor}`}>{feedback.level}</span>
                                </div>
                                <span className={`text-lg font-serif font-bold ${textColor}`}>{score}%</span>
                              </div>

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

                      {/* Recommendations */}
                      <motion.div
                        className={`glass-card p-6 md:p-8 mb-10 ${config.borderColor}`}
                        initial={{ y: 15 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1.6 }}
                      >
                        <h3 className="text-lg font-serif font-semibold mb-4 flex items-center gap-2">
                          <Sparkles size={18} className={config.textColor} />
                          Ihre persönlichen Empfehlungen
                        </h3>
                        <ul className="space-y-3">
                          {result.recommendations.map((rec, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className={`${config.textColor} mt-0.5 font-bold text-sm`}>{i + 1}.</span>
                              <p className="text-sm text-text-secondary leading-relaxed">{rec}</p>
                            </li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Related content links */}
                      <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
                        initial={{ y: 15 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1.7 }}
                      >
                        <Link
                          to="/stressmanagement-coaching"
                          className="glass-card p-4 flex items-center justify-between group hover:border-teal/30 transition-all duration-300"
                        >
                          <span className="text-sm text-text-primary group-hover:text-teal transition-colors">Stressmanagement-Coaching</span>
                          <ArrowRight size={14} className="text-text-secondary/40 group-hover:text-teal transition-colors" />
                        </Link>
                        <Link
                          to="/akademie/innere-staerke-resilienz/stress-verstehen"
                          className="glass-card p-4 flex items-center justify-between group hover:border-gold/30 transition-all duration-300"
                        >
                          <span className="text-sm text-text-primary group-hover:text-gold transition-colors">Stress verstehen: Was im Gehirn passiert</span>
                          <ArrowRight size={14} className="text-text-secondary/40 group-hover:text-gold transition-colors" />
                        </Link>
                      </motion.div>

                      {/* Coaching hint */}
                      <motion.div
                        className="glass-card p-6 md:p-8 mb-10 border-teal/15"
                        initial={{ y: 15 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1.8 }}
                      >
                        <h3 className="text-lg font-serif font-semibold mb-3">Was kann Coaching für Sie bewirken?</h3>
                        <p className="text-text-secondary leading-relaxed">{result.coachingHint}</p>
                      </motion.div>

                      {/* CTA */}
                      <motion.div
                        className="glass-card p-8 md:p-10 text-center mb-10"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 2 }}
                      >
                        <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3">
                          Lassen Sie uns darüber sprechen
                        </h3>
                        <p className="text-text-secondary mb-6 max-w-md mx-auto">
                          In einem vertraulichen Erstgespräch besprechen wir Ihre Ergebnisse und entwickeln gemeinsam einen Weg zu mehr Balance.
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
                            className="px-6 py-3 border border-glass-border text-text-secondary rounded-full text-sm hover:border-gold/30 hover:text-gold transition-all duration-300 inline-flex items-center gap-2 justify-center cursor-pointer"
                          >
                            <RotateCcw size={16} />
                            Check wiederholen
                          </button>
                        </div>
                      </motion.div>

                      {/* Disclaimer */}
                      <motion.div
                        className="text-center mb-8"
                        initial={{}}
                        animate={{}}
                        transition={{ delay: 2.2 }}
                      >
                        <p className="text-xs text-text-secondary/50 max-w-lg mx-auto">
                          Dieser Check ersetzt keine medizinische oder psychotherapeutische Diagnose.
                          Bei anhaltender starker Belastung wenden Sie sich bitte an eine Fachperson.
                        </p>
                      </motion.div>
                    </div>
                  </>
                )
              })()}
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
