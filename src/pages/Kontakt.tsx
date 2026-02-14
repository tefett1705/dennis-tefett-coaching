import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Clock } from 'lucide-react'
import SubpageLayout from '../components/SubpageLayout'
import { submitContact } from '../utils/api'

const subjects = [
  'Executive Coaching',
  'Life Coaching',
  'Karriere-Coaching',
  'Teamcoaching',
  'Stressmanagement',
  'Workshop / Seminar',
  'Allgemeine Anfrage',
]

const contactMethods = [
  { value: 'email', label: 'E-Mail' },
  { value: 'phone', label: 'Telefon' },
  { value: 'video', label: 'Videocall' },
]

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  preferredContact: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
  preferredContact: 'email',
}

export default function Kontakt() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      await submitContact({
        name: form.name,
        email: form.email,
        message: form.message,
        phone: form.phone || undefined,
        company: form.company || undefined,
        subject: form.subject || undefined,
        preferredContact: form.preferredContact || undefined,
      })
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten.')
    }
  }

  return (
    <SubpageLayout
      category="Kontakt"
      title="Lassen Sie uns sprechen"
      subtitle="Ich freue mich auf Ihre Nachricht. Egal ob Sie ein konkretes Anliegen haben oder einfach erstmal unverbindlich ins Gespräch kommen möchten."
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-6 space-y-5">
              <h3 className="text-lg font-serif font-semibold text-text-primary">Kontaktdaten</h3>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-teal" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">E-Mail</p>
                  <a href="mailto:tefett@refresher-zentrum.de" className="text-sm text-teal hover:text-teal/80 transition-colors">
                    tefett@refresher-zentrum.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-teal" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Adresse</p>
                  <p className="text-sm text-text-secondary">Marie-Curie-Weg 26a<br />45966 Gladbeck</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={16} className="text-teal" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Antwortzeit</p>
                  <p className="text-sm text-text-secondary">In der Regel innerhalb von 24 Stunden</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-serif font-semibold text-text-primary mb-3">Erstgespräch</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Das erste Kennenlerngespräch ist kostenlos und unverbindlich. Wir besprechen Ihre aktuelle Situation, Ihre Ziele und wie ich Sie bestmöglich unterstützen kann.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <motion.div
                className="glass-card p-8 md:p-12 text-center"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-teal" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-text-primary mb-3">
                  Nachricht gesendet!
                </h3>
                <p className="text-text-secondary mb-6 max-w-md mx-auto">
                  Vielen Dank für Ihre Nachricht. Ich melde mich innerhalb von 24 Stunden persönlich bei Ihnen.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-teal/10 border border-teal/30 text-teal rounded-full text-sm font-medium hover:bg-teal/20 transition-all duration-300 cursor-pointer"
                >
                  Weitere Nachricht senden
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
                <h3 className="text-lg font-serif font-semibold text-text-primary mb-2">Kontaktformular</h3>

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                      Name <span className="text-teal">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-glass border border-glass-border rounded-lg text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-all"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                      E-Mail <span className="text-teal">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-glass border border-glass-border rounded-lg text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-all"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                {/* Phone + Company row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">
                      Telefon <span className="text-text-secondary/40 text-xs">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-glass border border-glass-border rounded-lg text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-all"
                      placeholder="+49 ..."
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
                      Unternehmen <span className="text-text-secondary/40 text-xs">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-glass border border-glass-border rounded-lg text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-all"
                      placeholder="Firmenname"
                    />
                  </div>
                </div>

                {/* Subject + Preferred Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-1.5">
                      Betreff
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-glass border border-glass-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Bitte wählen...</option>
                      {subjects.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Bevorzugte Kontaktart
                    </label>
                    <div className="flex items-center gap-3 pt-1">
                      {contactMethods.map(method => (
                        <label key={method.value} className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method.value}
                            checked={form.preferredContact === method.value}
                            onChange={handleChange}
                            className="accent-teal"
                          />
                          <span className="text-sm text-text-secondary">{method.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
                    Ihre Nachricht <span className="text-teal">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-glass border border-glass-border rounded-lg text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-all resize-y"
                    placeholder="Beschreiben Sie Ihr Anliegen, Ihre aktuelle Situation oder stellen Sie Ihre Fragen..."
                  />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <motion.div
                    className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg"
                    initial={{ y: -5 }}
                    animate={{ y: 0 }}
                  >
                    <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                    <p className="text-sm text-red-400">{errorMsg}</p>
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 bg-teal text-midnight font-semibold rounded-lg text-sm hover:bg-teal/90 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Nachricht senden
                    </>
                  )}
                </button>

                <p className="text-xs text-text-secondary/40 text-center">
                  Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                  Mehr dazu in unserer <a href="/datenschutz" className="text-teal/60 hover:text-teal transition-colors">Datenschutzerklärung</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
