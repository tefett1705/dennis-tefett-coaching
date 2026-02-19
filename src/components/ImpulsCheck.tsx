import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, RotateCcw, Calendar } from 'lucide-react'
import type { ImpulsCheckConfig } from '../data/impulsCheckData'

interface ImpulsCheckProps {
  config: ImpulsCheckConfig
  color: 'teal' | 'gold'
}

export default function ImpulsCheck({ config, color }: ImpulsCheckProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResult, setShowResult] = useState(false)

  const totalQuestions = config.questions.length
  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === totalQuestions

  const totalScore = Object.values(answers).reduce((sum, v) => sum + v, 0)
  const maxScore = totalQuestions * 2
  const scoreRatio = maxScore > 0 ? totalScore / maxScore : 0

  const getSummary = () => {
    if (scoreRatio <= 0.33) return config.summary.low
    if (scoreRatio <= 0.66) return config.summary.mid
    return config.summary.high
  }

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }))
  }

  const handleShowResult = () => {
    setShowResult(true)
  }

  const handleReset = () => {
    setAnswers({})
    setShowResult(false)
  }

  const colorClasses = color === 'teal'
    ? { accent: 'text-teal', bg: 'bg-teal/10', border: 'border-teal/20', barBg: 'bg-teal', btnBg: 'bg-teal', glow: 'shadow-teal/15' }
    : { accent: 'text-gold', bg: 'bg-gold/10', border: 'border-gold/20', barBg: 'bg-gold', btnBg: 'bg-gold', glow: 'shadow-gold/15' }

  return (
    <motion.div
      className={`mt-16 glass-card ${colorClasses.border} p-6 md:p-8`}
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-8 h-8 rounded-lg ${colorClasses.bg} flex items-center justify-center`}>
          <CheckCircle size={16} className={colorClasses.accent} />
        </div>
        <h3 className="text-lg font-serif font-semibold">{config.title}</h3>
      </div>
      <p className="text-sm text-text-secondary mb-6">{config.intro}</p>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div key="questions" exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {/* Questions */}
            <div className="space-y-5">
              {config.questions.map((q, qIndex) => (
                <div key={qIndex}>
                  <p className="text-sm font-medium text-text-primary mb-2.5">
                    {qIndex + 1}. {q.question}
                  </p>
                  <div className="space-y-1.5">
                    {q.options.map((opt, oIndex) => (
                      <button
                        key={oIndex}
                        onClick={() => handleAnswer(qIndex, oIndex)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-all duration-200 cursor-pointer ${
                          answers[qIndex] === oIndex
                            ? `${colorClasses.border} ${colorClasses.bg} ${colorClasses.accent}`
                            : 'border-glass-border hover:border-glass-border/80 text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit button */}
            <motion.div
              className="mt-6 text-center"
              initial={false}
              animate={{ opacity: allAnswered ? 1 : 0.4 }}
            >
              <button
                onClick={handleShowResult}
                disabled={!allAnswered}
                className={`px-6 py-3 ${colorClasses.btnBg} text-midnight font-semibold rounded-full text-sm transition-all duration-300 inline-flex items-center gap-2 shadow-lg ${colorClasses.glow} ${
                  allAnswered ? 'cursor-pointer hover:opacity-90' : 'cursor-not-allowed'
                }`}
              >
                Auswertung anzeigen
                <ArrowRight size={16} />
              </button>
              {!allAnswered && (
                <p className="text-xs text-text-secondary/50 mt-2">
                  Bitte beantworten Sie alle {totalQuestions} Fragen.
                </p>
              )}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Score visualization */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-secondary">Ihre Einschätzung</span>
                <span className={`text-sm font-semibold ${colorClasses.accent}`}>
                  {Math.round(scoreRatio * 100)}%
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-glass-bg overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${colorClasses.barBg}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${scoreRatio * 100}%` }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Summary */}
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              {getSummary()}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <Link
                to="/#kontakt"
                className={`px-5 py-2.5 ${colorClasses.btnBg} text-midnight font-semibold rounded-full text-sm transition-all duration-300 inline-flex items-center gap-2 hover:opacity-90`}
              >
                <Calendar size={14} />
                Thema vertiefen
              </Link>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 border border-glass-border text-text-secondary rounded-full text-sm hover:border-teal/30 hover:text-teal transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw size={14} />
                Erneut ausfüllen
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
