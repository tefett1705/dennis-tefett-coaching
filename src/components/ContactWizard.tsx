import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { submitContact } from '../utils/api'

const steps = [
  {
    question: 'Was beschreibt Ihre aktuelle Situation am besten?',
    options: [
      { label: 'Führungskraft unter Druck', value: 'druck' },
      { label: 'Vor einer wichtigen Entscheidung', value: 'entscheidung' },
      { label: 'Neuausrichtung gewünscht', value: 'neuausrichtung' },
      { label: 'Persönliche Weiterentwicklung', value: 'entwicklung' },
    ],
  },
  {
    question: 'Was möchten Sie konkret erreichen?',
    options: [
      { label: 'Klarheit & strategische Orientierung', value: 'klarheit' },
      { label: 'Stärkere Führungswirkung', value: 'wirkung' },
      { label: 'Innere Ruhe & Belastbarkeit', value: 'resilienz' },
      { label: 'Berufliche & private Balance', value: 'balance' },
    ],
  },
  {
    question: 'Welcher Rahmen passt zu Ihnen?',
    options: [
      { label: 'Erst einmal Klarheit schaffen (Clarity)', value: 'clarity' },
      { label: 'Gezielte Transformation (Signature)', value: 'signature' },
      { label: 'Langfristige Begleitung (Partnership)', value: 'partnership' },
      { label: 'Ich bin mir noch unsicher', value: 'unsicher' },
    ],
  },
]

export default function ContactWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const selectAnswer = (stepIndex: number, value: string) => {
    setAnswers({ ...answers, [stepIndex]: value })
    if (stepIndex < steps.length - 1) {
      setTimeout(() => setCurrentStep(stepIndex + 1), 300)
    } else {
      setTimeout(() => setCurrentStep(steps.length), 300)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const situation = steps[0].options.find((o) => o.value === answers[0])?.label
      const goal = steps[1].options.find((o) => o.value === answers[1])?.label
      const selectedPackage = steps[2].options.find((o) => o.value === answers[2])?.label

      await submitContact({
        name,
        email,
        message: message || 'Erstgespräch anfragen',
        situation,
        goal,
        selectedPackage,
      })
      setSubmitted(true)
    } catch {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
    } finally {
      setLoading(false)
    }
  }

  const getRecommendation = () => {
    const pkg = answers[2]
    if (pkg === 'clarity') return 'Meine Empfehlung: Starten Sie mit dem Clarity-Paket für eine fundierte Standortbestimmung.'
    if (pkg === 'signature') return 'Perfekt: Das Signature-Programm ist mein Kernpaket für nachhaltige Transformation.'
    if (pkg === 'partnership') return 'Exzellente Wahl: Eine langfristige Partnership ermöglicht die tiefste Veränderung.'
    return 'Im Erstgespräch finden wir gemeinsam heraus, welcher Rahmen am besten zu Ihnen passt.'
  }

  return (
    <section id="kontakt" className="relative py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">Nächster Schritt</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-text-secondary mt-4">
            Vertraulich, unverbindlich, auf Augenhöhe.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-8 max-w-sm mx-auto">
          {[...steps, { question: 'Kontakt' }].map((_, i) => (
            <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-glass-bg">
              <motion.div
                className="h-full bg-gradient-to-r from-teal to-gold rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: currentStep >= i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
          ))}
        </div>

        <div className="glass-card p-6 md:p-8 min-h-[350px] flex flex-col">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="flex-1 flex flex-col items-center justify-center text-center py-8"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle size={48} className="text-teal mb-6" />
                <h3 className="text-2xl font-serif font-semibold mb-3">Nachricht erhalten</h3>
                <p className="text-text-secondary max-w-md">
                  Vielen Dank für Ihr Vertrauen. Ich melde mich innerhalb von 24 Stunden persönlich bei Ihnen.
                </p>
              </motion.div>
            ) : currentStep < steps.length ? (
              <motion.div
                key={`step-${currentStep}`}
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <h3 className="text-lg md:text-xl font-serif font-semibold mb-6">
                  {steps[currentStep].question}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {steps[currentStep].options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => selectAnswer(currentStep, opt.value)}
                      className={`p-4 rounded-xl border text-left text-sm transition-all duration-300 cursor-pointer ${
                        answers[currentStep] === opt.value
                          ? 'border-teal/40 bg-teal/10 text-teal'
                          : 'border-glass-border hover:border-teal/20 text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="mt-6 flex items-center gap-2 text-sm text-text-secondary hover:text-teal transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    Zurück
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="contact-form"
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                {/* Recommendation */}
                <div className="bg-teal/8 border border-teal/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-teal">{getRecommendation()}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="wizard-name" className="text-xs text-text-secondary uppercase tracking-wider mb-1.5 block">Name</label>
                    <input
                      id="wizard-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-teal/40 transition-colors"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="wizard-email" className="text-xs text-text-secondary uppercase tracking-wider mb-1.5 block">E-Mail</label>
                    <input
                      id="wizard-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-teal/40 transition-colors"
                      placeholder="ihre@email.de"
                    />
                  </div>
                  <div>
                    <label htmlFor="wizard-message" className="text-xs text-text-secondary uppercase tracking-wider mb-1.5 block">Nachricht (optional)</label>
                    <textarea
                      id="wizard-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="w-full bg-glass-bg border border-glass-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-teal/40 transition-colors resize-none"
                      placeholder="Was möchten Sie mir noch mitteilen?"
                    />
                  </div>
                  {/* Error message */}
                  {error && (
                    <motion.div
                      className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2.5"
                      initial={{ y: -5 }}
                      animate={{ y: 0 }}
                    >
                      <AlertCircle size={15} className="flex-shrink-0" />
                      {error}
                    </motion.div>
                  )}

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(steps.length - 1)}
                      className="px-5 py-3 border border-glass-border text-text-secondary rounded-full text-sm hover:border-teal/30 hover:text-teal transition-all duration-300 cursor-pointer"
                    >
                      <ArrowLeft size={14} />
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 btn-magnetic px-6 py-3 bg-teal text-midnight font-semibold rounded-full text-sm flex items-center justify-center gap-2 hover:bg-teal/90 transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                      ) : (
                        <>
                          Erstgespräch anfragen
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <p className="text-xs text-text-secondary/60 mt-4 text-center">
                  Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
