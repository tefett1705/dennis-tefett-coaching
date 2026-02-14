import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Trash2, Plus, LogIn, LogOut, CheckCircle, XCircle, AlertCircle, Copy, Video, Phone, Mail, Gift } from 'lucide-react'

const adminTabs = [
  { id: 'dashboard', label: 'Dashboard', icon: Gift, href: '/admin' },
  { id: 'termine', label: 'Termine', icon: Calendar, href: '/admin/termine' },
  { id: 'newsletter', label: 'Newsletter', icon: Mail, href: '/admin/newsletter' },
]

interface TimeSlot {
  id: string
  date: string
  time: string
  duration: number
  status: 'available' | 'pending' | 'confirmed' | 'declined'
  booking?: {
    name: string
    email: string
    phone: string
    message?: string
    contactType?: 'zoom' | 'phone'
    bookedAt: string
  }
}

const API_BASE = import.meta.env.VITE_API_URL || '/api'

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  available: { label: 'Verfügbar', color: 'text-teal bg-teal/10 border-teal/20' },
  pending: { label: 'Ausstehend', color: 'text-gold bg-gold/10 border-gold/20' },
  confirmed: { label: 'Bestätigt', color: 'text-green-400 bg-green-400/10 border-green-400/20' },
  declined: { label: 'Abgelehnt', color: 'text-red-400 bg-red-400/10 border-red-400/20' },
}

function formatDateDE(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
}

export default function TerminVerwaltung() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [adminToken, setAdminToken] = useState('')
  const [loginError, setLoginError] = useState('')
  const [slots, setSlots] = useState<TimeSlot[]>([])
  const [loading, setLoading] = useState(false)

  // New slot form
  const [newDate, setNewDate] = useState('')
  const [newTime, setNewTime] = useState('10:00')
  const [newDuration, setNewDuration] = useState(60)
  const [bulkWeeks, setBulkWeeks] = useState(1)
  const [creating, setCreating] = useState(false)

  const [repeatMode, setRepeatMode] = useState<'weekly' | 'daily'>('weekly')
  const [filter, setFilter] = useState<'all' | 'available' | 'pending' | 'confirmed'>('all')

  useEffect(() => {
    const saved = sessionStorage.getItem('dt-admin-token')
    if (saved) {
      setAdminToken(saved)
      setIsLoggedIn(true)
    }
  }, [])

  useEffect(() => {
    if (isLoggedIn) fetchSlots()
  }, [isLoggedIn])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')
    try {
      const res = await fetch(`${API_BASE}/booking?action=admin-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (data.success) {
        setAdminToken(password)
        sessionStorage.setItem('dt-admin-token', password)
        setIsLoggedIn(true)
      } else {
        setLoginError('Falsches Passwort')
      }
    } catch {
      setLoginError('Verbindungsfehler')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setAdminToken('')
    setPassword('')
    sessionStorage.removeItem('dt-admin-token')
  }

  const fetchSlots = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/booking?action=admin-slots`, {
        headers: { Authorization: `Bearer ${adminToken || sessionStorage.getItem('dt-admin-token')}` },
      })
      const data = await res.json()
      if (data.success) setSlots(data.slots || [])
    } catch {
      console.error('Fehler beim Laden')
    } finally {
      setLoading(false)
    }
  }

  const handleCreateSlot = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newDate) return
    setCreating(true)
    try {
      const increment = repeatMode === 'daily' ? 1 : 7
      for (let i = 0; i < bulkWeeks; i++) {
        const d = new Date(newDate + 'T00:00:00')
        d.setDate(d.getDate() + i * increment)
        const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
        await fetch(`${API_BASE}/booking?action=create-slot`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
          body: JSON.stringify({ date: dateStr, time: newTime, duration: newDuration }),
        })
      }
      await fetchSlots()
      setNewDate('')
      setBulkWeeks(1)
    } catch {
      console.error('Fehler beim Erstellen')
    } finally {
      setCreating(false)
    }
  }

  const handleDeleteSlot = async (id: string) => {
    try {
      await fetch(`${API_BASE}/booking?action=delete-slot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
        body: JSON.stringify({ id }),
      })
      await fetchSlots()
    } catch {
      console.error('Fehler beim Löschen')
    }
  }

  const handleCopySlot = (slot: TimeSlot) => {
    setNewTime(slot.time)
    setNewDuration(slot.duration)
    setNewDate('')
    setBulkWeeks(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const filteredSlots = filter === 'all' ? slots : slots.filter(s => s.status === filter)

  // Login screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center px-4">
        <motion.div
          className="glass-card p-8 max-w-sm w-full"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-3">
              <LogIn size={24} className="text-teal" />
            </div>
            <h1 className="text-xl font-serif font-semibold text-text-primary">Admin-Bereich</h1>
            <p className="text-sm text-text-secondary mt-1">Terminverwaltung</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="admin-pw" className="block text-sm font-medium text-text-primary mb-1.5">Passwort</label>
              <input
                id="admin-pw"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 bg-glass border border-glass-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-all"
                placeholder="Admin-Passwort"
                required
              />
            </div>
            {loginError && (
              <p className="text-sm text-red-400 flex items-center gap-1.5">
                <AlertCircle size={14} /> {loginError}
              </p>
            )}
            <button
              type="submit"
              className="w-full py-2.5 bg-teal text-midnight font-semibold rounded-lg text-sm hover:bg-teal/90 transition-all cursor-pointer"
            >
              Anmelden
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  const location = useLocation()

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="border-b border-glass-border bg-surface/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {adminTabs.map(tab => {
              const Icon = tab.icon
              const isActive = location.pathname === tab.href
              return (
                <Link
                  key={tab.id}
                  to={tab.href}
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-teal'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </Link>
              )
            })}
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-red-400 transition-colors cursor-pointer"
          >
            <LogOut size={16} />
            Abmelden
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 space-y-6">
        {/* Create Slot Form */}
        <motion.div
          className="glass-card p-5"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
        >
          <h2 className="text-base font-semibold text-text-primary mb-4 flex items-center gap-2">
            <Plus size={18} className="text-teal" />
            Neuen Termin erstellen
          </h2>
          <form onSubmit={handleCreateSlot} className="flex flex-wrap items-end gap-3">
            <div>
              <label className="block text-xs text-text-secondary mb-1">Datum</label>
              <input
                type="date"
                value={newDate}
                onChange={e => setNewDate(e.target.value)}
                required
                className="px-3 py-2 bg-glass border border-glass-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-teal/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs text-text-secondary mb-1">Uhrzeit</label>
              <input
                type="time"
                value={newTime}
                onChange={e => setNewTime(e.target.value)}
                required
                className="px-3 py-2 bg-glass border border-glass-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-teal/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs text-text-secondary mb-1">Dauer</label>
              <select
                value={newDuration}
                onChange={e => setNewDuration(Number(e.target.value))}
                className="px-3 py-2 bg-glass border border-glass-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-teal/50 transition-all appearance-none cursor-pointer"
              >
                <option value={25}>25 Min</option>
                <option value={30}>30 Min</option>
                <option value={45}>45 Min</option>
                <option value={60}>60 Min</option>
                <option value={90}>90 Min</option>
                <option value={120}>120 Min</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-text-secondary mb-1">Modus</label>
              <select
                value={repeatMode}
                onChange={e => setRepeatMode(e.target.value as 'weekly' | 'daily')}
                className="px-3 py-2 bg-glass border border-glass-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-teal/50 transition-all appearance-none cursor-pointer"
              >
                <option value="weekly">Wöchentlich</option>
                <option value="daily">Täglich</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-text-secondary mb-1">Wiederholen</label>
              <select
                value={bulkWeeks}
                onChange={e => setBulkWeeks(Number(e.target.value))}
                className="px-3 py-2 bg-glass border border-glass-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-teal/50 transition-all appearance-none cursor-pointer"
              >
                <option value={1}>Einmalig</option>
                {repeatMode === 'daily' ? (
                  <>
                    <option value={2}>2 Tage</option>
                    <option value={3}>3 Tage</option>
                    <option value={5}>5 Tage</option>
                    <option value={7}>7 Tage</option>
                    <option value={14}>14 Tage</option>
                    <option value={30}>30 Tage</option>
                  </>
                ) : (
                  <>
                    <option value={2}>2 Wochen</option>
                    <option value={4}>4 Wochen</option>
                    <option value={8}>8 Wochen</option>
                    <option value={12}>12 Wochen</option>
                  </>
                )}
              </select>
            </div>
            <button
              type="submit"
              disabled={creating}
              className="px-5 py-2 bg-teal text-midnight font-semibold rounded-lg text-sm hover:bg-teal/90 transition-all cursor-pointer disabled:opacity-60 flex items-center gap-1.5"
            >
              {creating ? (
                <div className="w-4 h-4 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
              ) : (
                <Plus size={16} />
              )}
              Erstellen
            </button>
          </form>
        </motion.div>

        {/* Filter */}
        <div className="flex items-center gap-2">
          {(['all', 'available', 'pending', 'confirmed'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === f
                  ? 'bg-teal text-midnight'
                  : 'bg-glass border border-glass-border text-text-secondary hover:border-teal/30'
              }`}
            >
              {f === 'all' ? 'Alle' : f === 'available' ? 'Verfügbar' : f === 'pending' ? 'Ausstehend' : 'Bestätigt'}
              {f !== 'all' && (
                <span className="ml-1.5 opacity-60">
                  ({slots.filter(s => s.status === f).length})
                </span>
              )}
            </button>
          ))}
          <span className="text-xs text-text-secondary/40 ml-2">{slots.length} Termine gesamt</span>
        </div>

        {/* Slots List */}
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-2 border-teal/30 border-t-teal rounded-full animate-spin" />
          </div>
        ) : filteredSlots.length === 0 ? (
          <div className="glass-card p-8 text-center">
            <Calendar size={32} className="text-text-secondary/30 mx-auto mb-3" />
            <p className="text-text-secondary/60 text-sm">Keine Termine gefunden.</p>
          </div>
        ) : (
          <div className="space-y-2">
            <AnimatePresence>
              {filteredSlots.map((slot) => (
                <motion.div
                  key={slot.id}
                  className="glass-card p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                  initial={{ y: 5 }}
                  animate={{ y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  layout
                >
                  {/* Date + Time */}
                  <div className="flex items-center gap-3 min-w-[200px]">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <Calendar size={18} className="text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">{formatDateDE(slot.date)}</p>
                      <p className="text-xs text-text-secondary flex items-center gap-1">
                        <Clock size={12} /> {slot.time} Uhr · {slot.duration} Min
                      </p>
                    </div>
                  </div>

                  {/* Status */}
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-medium ${STATUS_LABELS[slot.status]?.color || ''}`}>
                    {slot.status === 'confirmed' && <CheckCircle size={12} />}
                    {slot.status === 'pending' && <AlertCircle size={12} />}
                    {slot.status === 'declined' && <XCircle size={12} />}
                    {STATUS_LABELS[slot.status]?.label || slot.status}
                  </span>

                  {/* Booking info */}
                  {slot.booking && (
                    <div className="flex-1 text-xs text-text-secondary">
                      <p className="font-medium text-text-primary">{slot.booking.name}</p>
                      <p className="flex items-center gap-1">
                        {slot.booking.email}
                        <button
                          onClick={() => navigator.clipboard.writeText(slot.booking!.email)}
                          className="text-text-secondary/40 hover:text-teal transition-colors cursor-pointer"
                          title="E-Mail kopieren"
                        >
                          <Copy size={11} />
                        </button>
                      </p>
                      <p>{slot.booking.phone}</p>
                      {slot.booking.contactType && (
                        <p className="flex items-center gap-1 mt-0.5 text-teal">
                          {slot.booking.contactType === 'zoom' ? <><Video size={11} /> Zoom</> : <><Phone size={11} /> Telefon</>}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-2 sm:ml-auto">
                    <button
                      onClick={() => handleCopySlot(slot)}
                      className="p-2 rounded-lg text-text-secondary/50 hover:text-teal hover:bg-teal/10 transition-all cursor-pointer"
                      title="Termin kopieren (Uhrzeit & Dauer übernehmen)"
                    >
                      <Copy size={16} />
                    </button>
                    {slot.status === 'available' && (
                      <button
                        onClick={() => handleDeleteSlot(slot.id)}
                        className="p-2 rounded-lg text-text-secondary/50 hover:text-red-400 hover:bg-red-400/10 transition-all cursor-pointer"
                        title="Slot löschen"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}
