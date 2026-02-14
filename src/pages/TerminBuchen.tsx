import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, CheckCircle, AlertCircle, ChevronLeft, ChevronRight, Send, Video, Phone } from 'lucide-react'
import SubpageLayout from '../components/SubpageLayout'

interface TimeSlot {
  id: string
  date: string
  time: string
  duration: number
  status: string
}

interface BookingForm {
  name: string
  email: string
  phone: string
  message: string
  contactType: 'zoom' | 'phone' | ''
}

const API_BASE = import.meta.env.VITE_API_URL || '/api'

const MONTHS_DE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
const DAYS_DE = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

function formatDateDE(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })
}

export default function TerminBuchen() {
  const [slots, setSlots] = useState<TimeSlot[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
  const [form, setForm] = useState<BookingForm>({ name: '', email: '', phone: '', message: '', contactType: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), 1)
  })

  useEffect(() => {
    fetchSlots()
  }, [])

  const fetchSlots = async () => {
    try {
      const res = await fetch(`${API_BASE}/booking?action=slots`)
      const data = await res.json()
      if (data.success) setSlots(data.slots || [])
    } catch {
      console.error('Fehler beim Laden der Termine')
    } finally {
      setLoading(false)
    }
  }

  // Group slots by date
  const slotsByDate = useMemo(() => {
    const map = new Map<string, TimeSlot[]>()
    for (const slot of slots) {
      const existing = map.get(slot.date) || []
      existing.push(slot)
      map.set(slot.date, existing)
    }
    return map
  }, [slots])

  // Calendar days for current month
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)

    // Monday = 0, Sunday = 6
    let startOffset = firstDay.getDay() - 1
    if (startOffset < 0) startOffset = 6

    const days: (number | null)[] = []
    for (let i = 0; i < startOffset; i++) days.push(null)
    for (let d = 1; d <= lastDay.getDate(); d++) days.push(d)
    return days
  }, [currentMonth])

  const hasSlotOnDay = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return slotsByDate.has(dateStr)
  }

  const getSlotsForDay = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return slotsByDate.get(dateStr) || []
  }

  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedSlot) return
    if (!form.contactType) { setErrorMsg('Bitte wählen Sie eine Gesprächsart.'); setStatus('error'); return }
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(`${API_BASE}/booking?action=book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slotId: selectedSlot.id,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message || undefined,
          contactType: form.contactType,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message || 'Buchung fehlgeschlagen')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten.')
    }
  }

  const prevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
    setSelectedDay(null)
  }

  const nextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
    setSelectedDay(null)
  }

  const today = new Date()
  const isPastMonth = currentMonth.getFullYear() < today.getFullYear() ||
    (currentMonth.getFullYear() === today.getFullYear() && currentMonth.getMonth() < today.getMonth())

  return (
    <SubpageLayout
      category="Terminbuchung"
      title="Termin vereinbaren"
      subtitle="Wählen Sie einen verfügbaren Termin und buchen Sie Ihr Coaching-Gespräch direkt online."
    >
      <div className="max-w-4xl mx-auto">
        {status === 'success' ? (
          <motion.div
            className="glass-card p-8 md:p-12 text-center max-w-lg mx-auto"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-teal" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-text-primary mb-3">
              Terminanfrage gesendet!
            </h3>
            <p className="text-text-secondary mb-3">
              Vielen Dank! Ihre Anfrage für den{' '}
              <span className="text-teal font-medium">{selectedSlot && formatDateDE(selectedSlot.date)}</span> um{' '}
              <span className="text-teal font-medium">{selectedSlot?.time} Uhr</span> wurde erfolgreich übermittelt.
            </p>
            <p className="text-text-secondary/70 text-sm mb-6">
              Dennis wird Ihre Anfrage prüfen und Ihnen zeitnah eine Bestätigung per E-Mail senden.
            </p>
            <button
              onClick={() => { setStatus('idle'); setSelectedSlot(null); setSelectedDay(null); setForm({ name: '', email: '', phone: '', message: '', contactType: '' }); fetchSlots() }}
              className="px-6 py-2.5 bg-teal/10 border border-teal/30 text-teal rounded-full text-sm font-medium hover:bg-teal/20 transition-all duration-300 cursor-pointer"
            >
              Weiteren Termin buchen
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-3">
              <div className="glass-card p-5 md:p-6">
                <div className="flex items-center justify-between mb-5">
                  <button
                    onClick={prevMonth}
                    disabled={isPastMonth}
                    className="p-2 rounded-lg hover:bg-glass-border/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ChevronLeft size={20} className="text-text-secondary" />
                  </button>
                  <h3 className="text-lg font-serif font-semibold text-text-primary">
                    {MONTHS_DE[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h3>
                  <button
                    onClick={nextMonth}
                    className="p-2 rounded-lg hover:bg-glass-border/30 transition-colors cursor-pointer"
                  >
                    <ChevronRight size={20} className="text-text-secondary" />
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {DAYS_DE.map(d => (
                    <div key={d} className="text-center text-xs text-text-secondary/50 font-medium py-1">{d}</div>
                  ))}
                </div>

                {/* Days grid */}
                {loading ? (
                  <div className="flex items-center justify-center py-16">
                    <div className="w-8 h-8 border-2 border-teal/30 border-t-teal rounded-full animate-spin" />
                  </div>
                ) : (
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, i) => {
                      if (day === null) return <div key={`empty-${i}`} />
                      const hasSlots = hasSlotOnDay(day)
                      const isSelected = selectedDay === day
                      const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
                      const isPast = new Date(dateStr + 'T23:59:59') < new Date()
                      const isToday = dateStr === `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

                      return (
                        <button
                          key={day}
                          onClick={() => hasSlots && !isPast ? setSelectedDay(isSelected ? null : day) : null}
                          disabled={!hasSlots || isPast}
                          className={`
                            relative aspect-square flex items-center justify-center rounded-lg text-sm transition-all duration-200
                            ${isPast ? 'text-text-secondary/20 cursor-not-allowed' : ''}
                            ${hasSlots && !isPast ? 'cursor-pointer font-medium' : 'cursor-default'}
                            ${isSelected ? 'bg-teal text-midnight ring-2 ring-teal/30' : ''}
                            ${hasSlots && !isSelected && !isPast ? 'text-teal hover:bg-teal/10' : ''}
                            ${!hasSlots && !isPast ? 'text-text-secondary/40' : ''}
                            ${isToday && !isSelected ? 'ring-1 ring-glass-border' : ''}
                          `}
                        >
                          {day}
                          {hasSlots && !isPast && (
                            <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isSelected ? 'bg-midnight' : 'bg-teal'}`} />
                          )}
                        </button>
                      )
                    })}
                  </div>
                )}

                {/* Slots for selected day */}
                <AnimatePresence>
                  {selectedDay !== null && (
                    <motion.div
                      className="mt-5 pt-5 border-t border-glass-border"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <p className="text-sm font-medium text-text-primary mb-3">
                        Verfügbare Zeiten am {formatDateDE(
                          `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`
                        )}:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {getSlotsForDay(selectedDay).map(slot => (
                          <button
                            key={slot.id}
                            onClick={() => setSelectedSlot(selectedSlot?.id === slot.id ? null : slot)}
                            className={`
                              px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer
                              ${selectedSlot?.id === slot.id
                                ? 'bg-teal text-midnight border-teal'
                                : 'bg-glass border-glass-border text-text-primary hover:border-teal/40 hover:bg-teal/5'
                              }
                            `}
                          >
                            <Clock size={14} className="inline mr-1.5 -mt-0.5" />
                            {slot.time} Uhr · {slot.duration} Min
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {slots.length === 0 && !loading && (
                  <div className="text-center py-8">
                    <Calendar size={32} className="text-text-secondary/30 mx-auto mb-3" />
                    <p className="text-text-secondary/60 text-sm">Aktuell sind keine Termine verfügbar.</p>
                    <p className="text-text-secondary/40 text-xs mt-1">Bitte schauen Sie später noch einmal vorbei.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Booking form sidebar */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {selectedSlot ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="glass-card p-5 md:p-6 space-y-4"
                    initial={{ x: 20 }}
                    animate={{ x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <div>
                      <h3 className="text-lg font-serif font-semibold text-text-primary">Termin buchen</h3>
                      <div className="mt-2 p-3 rounded-lg bg-teal/5 border border-teal/20">
                        <p className="text-sm text-teal font-medium">{formatDateDE(selectedSlot.date)}</p>
                        <p className="text-sm text-text-secondary">{selectedSlot.time} Uhr · {selectedSlot.duration} Minuten</p>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="book-name" className="block text-sm font-medium text-text-primary mb-1.5">
                        Name <span className="text-teal">*</span>
                      </label>
                      <input
                        id="book-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full px-3 py-2 bg-glass border border-glass-border rounded-lg text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-all"
                        placeholder="Ihr Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="book-email" className="block text-sm font-medium text-text-primary mb-1.5">
                        E-Mail <span className="text-teal">*</span>
                      </label>
                      <input
                        id="book-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full px-3 py-2 bg-glass border border-glass-border rounded-lg text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-all"
                        placeholder="ihre@email.de"
                      />
                    </div>

                    <div>
                      <label htmlFor="book-phone" className="block text-sm font-medium text-text-primary mb-1.5">
                        Telefon <span className="text-teal">*</span>
                      </label>
                      <input
                        id="book-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className="w-full px-3 py-2 bg-glass border border-glass-border rounded-lg text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-all"
                        placeholder="+49 ..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Gesprächsart <span className="text-teal">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setForm(f => ({ ...f, contactType: 'zoom' }))}
                          className={`flex items-center justify-center gap-2 px-3 py-3 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer ${
                            form.contactType === 'zoom'
                              ? 'bg-teal/15 border-teal text-teal'
                              : 'bg-glass border-glass-border text-text-secondary hover:border-teal/40 hover:bg-teal/5'
                          }`}
                        >
                          <Video size={18} />
                          Zoom
                        </button>
                        <button
                          type="button"
                          onClick={() => setForm(f => ({ ...f, contactType: 'phone' }))}
                          className={`flex items-center justify-center gap-2 px-3 py-3 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer ${
                            form.contactType === 'phone'
                              ? 'bg-teal/15 border-teal text-teal'
                              : 'bg-glass border-glass-border text-text-secondary hover:border-teal/40 hover:bg-teal/5'
                          }`}
                        >
                          <Phone size={18} />
                          Telefon
                        </button>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="book-message" className="block text-sm font-medium text-text-primary mb-1.5">
                        Nachricht <span className="text-text-secondary/40 text-xs">(optional)</span>
                      </label>
                      <textarea
                        id="book-message"
                        rows={3}
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="w-full px-3 py-2 bg-glass border border-glass-border rounded-lg text-text-primary text-sm placeholder:text-text-secondary/40 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-all resize-y"
                        placeholder="Was möchten Sie besprechen?"
                      />
                    </div>

                    {status === 'error' && (
                      <motion.div
                        className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg"
                        initial={{}}
                        animate={{}}
                      >
                        <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                        <p className="text-sm text-red-400">{errorMsg}</p>
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-3 bg-teal text-midnight font-semibold rounded-lg text-sm hover:bg-teal/90 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Termin anfragen
                        </>
                      )}
                    </button>

                    <p className="text-xs text-text-secondary/40 text-center">
                      Ihr Termin wird erst nach Bestätigung durch Dennis Tefett verbindlich.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="placeholder"
                    className="glass-card p-5 md:p-6 text-center"
                    initial={{}}
                    animate={{}}
                    exit={{ opacity: 0 }}
                  >
                    <Calendar size={32} className="text-text-secondary/30 mx-auto mb-3" />
                    <p className="text-text-secondary text-sm">
                      Wählen Sie einen Tag im Kalender und anschließend eine verfügbare Uhrzeit.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </SubpageLayout>
  )
}
