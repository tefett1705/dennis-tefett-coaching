import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, BookOpen, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { submitNewsletter } from '../utils/api'

interface NewsletterFormData {
  gender: string
  firstName: string
  lastName: string
  email: string
  birthYear: string
  zip: string
}

const currentYear = new Date().getFullYear()
const birthYears = Array.from({ length: currentYear - 1939 }, (_, i) => String(currentYear - 16 - i))

export default function Newsletter() {
  const [form, setForm] = useState<NewsletterFormData>({
    gender: '',
    firstName: '',
    lastName: '',
    email: '',
    birthYear: '',
    zip: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const updateField = (field: keyof NewsletterFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (error) setError('')
  }

  const validate = (): string | null => {
    if (!form.gender) return 'Bitte wählen Sie eine Anrede.'
    if (!form.firstName.trim()) return 'Bitte geben Sie Ihren Vornamen ein.'
    if (!form.lastName.trim()) return 'Bitte geben Sie Ihren Nachnamen ein.'
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    if (!form.birthYear) return 'Bitte wählen Sie Ihr Geburtsjahr.'
    if (!form.zip || !/^\d{5}$/.test(form.zip)) return 'Bitte geben Sie eine gültige 5-stellige Postleitzahl ein.'
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    setError('')

    try {
      await submitNewsletter({ ...form, source: 'homepage' })
      setSubmitted(true)
    } catch {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-surface/60 border border-glass-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-teal/40 transition-colors'
  const selectClass =
    'w-full bg-surface/60 border border-glass-border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-teal/40 transition-colors appearance-none cursor-pointer'
  const labelClass = 'text-xs text-text-secondary mb-1.5 block font-medium'

  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          className="glass-card relative overflow-hidden"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Text side */}
            <div className="lg:col-span-2 p-8 md:p-12 lg:p-14">
              <motion.div
                className="flex items-center gap-2 mb-5"
                initial={{ y: 15 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <BookOpen size={18} className="text-teal" />
                <span className="text-xs tracking-[0.2em] uppercase text-teal font-medium">
                  Alle 14 Tage neu
                </span>
              </motion.div>

              <motion.h2
                className="text-2xl md:text-3xl font-serif font-semibold mb-5 leading-snug"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Impulse für Ihre{' '}
                <span className="text-gradient-teal">Persönlichkeits&shy;entwicklung</span>
              </motion.h2>

              <motion.p
                className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base"
                initial={{ y: 15 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Kein Werbematerial. Alle zwei Wochen erhalten Sie ein fundiertes Handout zu Themen der
                Persönlichkeitsentwicklung, basierend auf Neurowissenschaft und Praxiserfahrung. Kompakt,
                direkt anwendbar und exklusiv für Abonnenten.
              </motion.p>

              <motion.div
                className="flex flex-col gap-2.5"
              >
                {[
                  'Wissenschaftlich fundierte Handouts',
                  'Konkrete Übungen & Reflexionsfragen',
                  'Kein Spam, jederzeit abmeldbar',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <CheckCircle size={15} className="text-teal flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Form side */}
            <motion.div
              className="lg:col-span-3 p-8 md:p-12 lg:p-14 lg:border-l border-t lg:border-t-0 border-glass-border bg-white/[0.02] flex items-center"
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                  {/* Row 1: Anrede + Vorname + Nachname */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className={labelClass}>Anrede</label>
                      <select
                        value={form.gender}
                        onChange={(e) => updateField('gender', e.target.value)}
                        className={selectClass}
                      >
                        <option value="" disabled>Bitte wählen</option>
                        <option value="Herr">Herr</option>
                        <option value="Frau">Frau</option>
                        <option value="Divers">Divers</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Vorname</label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => updateField('firstName', e.target.value)}
                        placeholder="Vorname"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Nachname</label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => updateField('lastName', e.target.value)}
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
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="ihre@email.de"
                      required
                      className={inputClass}
                    />
                  </div>

                  {/* Row 3: Geburtsjahr + PLZ */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Geburtsjahr</label>
                      <select
                        value={form.birthYear}
                        onChange={(e) => updateField('birthYear', e.target.value)}
                        className={selectClass}
                      >
                        <option value="" disabled>Jahr wählen</option>
                        {birthYears.map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Postleitzahl</label>
                      <input
                        type="text"
                        value={form.zip}
                        onChange={(e) => updateField('zip', e.target.value.replace(/\D/g, '').slice(0, 5))}
                        placeholder="z.B. 45966"
                        maxLength={5}
                        inputMode="numeric"
                        pattern="\d{5}"
                        className={inputClass}
                      />
                    </div>
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

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-teal text-midnight font-semibold rounded-lg text-sm hover:bg-teal/90 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                    ) : (
                      <>
                        <Mail size={16} />
                        Kostenlos anmelden
                      </>
                    )}
                  </button>

                  {/* DSGVO */}
                  <p className="text-[11px] text-text-secondary/40 text-center leading-relaxed">
                    Mit der Anmeldung stimmen Sie unserer{' '}
                    <Link to="/datenschutz" className="underline underline-offset-2 hover:text-text-secondary/60">
                      Datenschutzerklärung
                    </Link>{' '}
                    zu. Kein Spam. Jederzeit abmeldbar.
                  </p>
                </form>
              ) : (
                <motion.div
                  className="text-center py-6 w-full"
                  initial={{ scale: 0.98 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                  >
                    <CheckCircle size={32} className="text-teal" />
                  </motion.div>
                  <h3 className="text-xl font-serif font-semibold mb-2">Vielen Dank!</h3>
                  <p className="text-text-secondary text-sm">
                    Sie erhalten in Kürze eine Bestätigungs-Mail. Ihr erstes Handout kommt mit dem nächsten Versand.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
