import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Mail, Users, LogIn, LogOut, AlertCircle, Clock, CheckCircle, Gift, RefreshCw, Eye, BarChart3, Globe } from 'lucide-react'

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
    contactType?: 'zoom' | 'phone'
    bookedAt: string
  }
}

interface Subscriber {
  gender: string
  firstName: string
  lastName: string
  email: string
  subscribedAt: string
}

interface AnalyticsDay {
  date: string
  visitors: number
  pageViews: number
}

interface AnalyticsData {
  days: AnalyticsDay[]
  totals: {
    visitors: number
    pageViews: number
    topPages: { path: string; views: number }[]
    topReferrers: { source: string; count: number }[]
  }
}

const API_BASE = import.meta.env.VITE_API_URL || '/api'

const adminTabs = [
  { id: 'dashboard', label: 'Dashboard', icon: Gift, href: '/admin' },
  { id: 'termine', label: 'Termine', icon: Calendar, href: '/admin/termine' },
  { id: 'newsletter', label: 'Newsletter', icon: Mail, href: '/admin/newsletter' },
]

function formatDateDE(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'short' })
}

function formatTimeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `vor ${mins} Min`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `vor ${hours} Std`
  const days = Math.floor(hours / 24)
  return `vor ${days} Tag${days > 1 ? 'en' : ''}`
}

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [adminToken, setAdminToken] = useState('')
  const [loginError, setLoginError] = useState('')
  const [slots, setSlots] = useState<TimeSlot[]>([])
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(false)
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null)
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [analyticsRange, setAnalyticsRange] = useState<string>('7')
  const location = useLocation()

  useEffect(() => {
    const saved = sessionStorage.getItem('dt-admin-token')
    if (saved) {
      setAdminToken(saved)
      setIsLoggedIn(true)
    }
  }, [])

  useEffect(() => {
    if (isLoggedIn) fetchAll()
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

  const fetchAnalytics = async (range: string) => {
    const token = adminToken || sessionStorage.getItem('dt-admin-token')
    try {
      const res = await fetch(`${API_BASE}/analytics?action=stats&days=${range}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      if (data.success) setAnalytics(data)
    } catch { /* analytics optional */ }
  }

  const fetchAll = async () => {
    setLoading(true)
    const token = adminToken || sessionStorage.getItem('dt-admin-token')
    try {
      const [slotsRes, subsRes] = await Promise.all([
        fetch(`${API_BASE}/booking?action=admin-slots`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE}/newsletter?action=list`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ])
      const slotsData = await slotsRes.json()
      const subsData = await subsRes.json()
      if (slotsData.success) setSlots(slotsData.slots || [])
      if (subsData.success) setSubscribers(subsData.subscribers || [])
      await fetchAnalytics(analyticsRange)
      setLastRefresh(new Date())
    } catch {
      console.error('Fehler beim Laden')
    } finally {
      setLoading(false)
    }
  }

  const handleRangeChange = (range: string) => {
    setAnalyticsRange(range)
    fetchAnalytics(range)
  }

  // Computed values
  const today = new Date()
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  const futureSlots = slots.filter(s => s.date >= todayStr)
  const availableCount = futureSlots.filter(s => s.status === 'available').length
  const pendingSlots = futureSlots.filter(s => s.status === 'pending')
  const confirmedCount = futureSlots.filter(s => s.status === 'confirmed').length
  const todaySlots = futureSlots.filter(s => s.date === todayStr && (s.status === 'confirmed' || s.status === 'pending'))

  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  yesterday.setHours(0, 0, 0, 0)
  const yesterdayISO = yesterday.toISOString()
  const newBookings = slots.filter(s => s.booking && s.booking.bookedAt >= yesterdayISO)
  const newSubscribers = subscribers.filter(s => s.subscribedAt >= yesterdayISO)
  const recentSubscribers = subscribers.slice(0, 5)

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
            <p className="text-sm text-text-secondary mt-1">Dashboard</p>
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
          <div className="flex items-center gap-3">
            <button
              onClick={fetchAll}
              disabled={loading}
              className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-teal transition-colors cursor-pointer"
              title="Aktualisieren"
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-red-400 transition-colors cursor-pointer"
            >
              <LogOut size={16} />
              Abmelden
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 space-y-6">
        {/* Welcome */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-serif font-semibold text-text-primary">Guten Tag, Dennis</h1>
            <p className="text-sm text-text-secondary mt-0.5">
              {today.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              {lastRefresh && (
                <span className="text-text-secondary/40 ml-2">
                  · Aktualisiert {lastRefresh.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Alert: Pending Bookings */}
        {pendingSlots.length > 0 && (
          <motion.div
            className="glass-card p-4 border-gold/30 bg-gold/5"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertCircle size={16} className="text-gold" />
              </div>
              <div>
                <p className="text-sm font-medium text-gold">{pendingSlots.length} ausstehende Terminanfrage{pendingSlots.length > 1 ? 'n' : ''}</p>
                <div className="mt-2 space-y-1.5">
                  {pendingSlots.map(s => (
                    <p key={s.id} className="text-xs text-text-secondary">
                      <span className="text-text-primary font-medium">{s.booking?.name}</span> — {formatDateDE(s.date)} um {s.time} Uhr
                    </p>
                  ))}
                </div>
                <Link
                  to="/admin/termine"
                  className="inline-flex items-center gap-1 mt-2 text-xs text-gold font-medium hover:text-gold/80 transition-colors"
                >
                  Zur Terminverwaltung →
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Freie Termine', value: availableCount, icon: Calendar, color: 'teal' },
            { label: 'Ausstehend', value: pendingSlots.length, icon: Clock, color: pendingSlots.length > 0 ? 'gold' : 'text-secondary' },
            { label: 'Bestätigt', value: confirmedCount, icon: CheckCircle, color: 'teal' },
            { label: 'Abonnenten', value: subscribers.length, icon: Users, color: 'teal' },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="glass-card p-4"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={14} className={`text-${stat.color}`} />
                  <span className="text-xs text-text-secondary">{stat.label}</span>
                </div>
                <p className={`text-2xl font-semibold text-${stat.color}`}>{stat.value}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Schedule */}
          <motion.div
            className="glass-card p-5"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
                <Calendar size={16} className="text-teal" />
                Heute
              </h2>
              <Link to="/admin/termine" className="text-xs text-teal hover:text-teal/80 transition-colors">
                Alle Termine →
              </Link>
            </div>
            {todaySlots.length === 0 ? (
              <p className="text-sm text-text-secondary/50 py-4 text-center">Keine Termine für heute</p>
            ) : (
              <div className="space-y-2">
                {todaySlots.map(s => (
                  <div key={s.id} className="flex items-center gap-3 p-3 rounded-lg bg-glass border border-glass-border">
                    <div className="text-center min-w-[48px]">
                      <p className="text-sm font-semibold text-teal">{s.time}</p>
                      <p className="text-[10px] text-text-secondary">{s.duration} Min</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary truncate">{s.booking?.name || 'Verfügbar'}</p>
                      {s.booking && (
                        <p className="text-xs text-text-secondary truncate">{s.booking.email}</p>
                      )}
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      s.status === 'confirmed' ? 'text-teal bg-teal/10' : 'text-gold bg-gold/10'
                    }`}>
                      {s.status === 'confirmed' ? 'Bestätigt' : 'Ausstehend'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="glass-card p-5"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
                <Mail size={16} className="text-teal" />
                Neueste Aktivität
              </h2>
            </div>
            <div className="space-y-2.5">
              {/* New bookings */}
              {newBookings.map(s => (
                <div key={s.id} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Calendar size={13} className="text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-primary">
                      <span className="font-medium">{s.booking?.name}</span> hat einen Termin gebucht
                    </p>
                    <p className="text-xs text-text-secondary/50">
                      {formatDateDE(s.date)} um {s.time} · {s.booking?.bookedAt ? formatTimeAgo(s.booking.bookedAt) : ''}
                    </p>
                  </div>
                </div>
              ))}

              {/* New subscribers */}
              {newSubscribers.map(s => (
                <div key={s.email} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={13} className="text-teal" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-primary">
                      <span className="font-medium">{s.firstName} {s.lastName}</span> hat den Newsletter abonniert
                    </p>
                    <p className="text-xs text-text-secondary/50">
                      {s.email} · {formatTimeAgo(s.subscribedAt)}
                    </p>
                  </div>
                </div>
              ))}

              {newBookings.length === 0 && newSubscribers.length === 0 && (
                <p className="text-sm text-text-secondary/50 py-4 text-center">Keine neuen Aktivitäten seit gestern</p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Recent Newsletter Subscribers */}
        {recentSubscribers.length > 0 && (
          <motion.div
            className="glass-card p-5"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
                <Users size={16} className="text-teal" />
                Letzte Newsletter-Anmeldungen
              </h2>
              <Link to="/admin/newsletter" className="text-xs text-teal hover:text-teal/80 transition-colors">
                Alle anzeigen →
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-text-secondary/50 border-b border-glass-border">
                    <th className="text-left pb-2 font-medium">Name</th>
                    <th className="text-left pb-2 font-medium">E-Mail</th>
                    <th className="text-left pb-2 font-medium hidden sm:table-cell">PLZ</th>
                    <th className="text-right pb-2 font-medium">Datum</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSubscribers.map(s => (
                    <tr key={s.email} className="border-b border-glass-border/50 last:border-0">
                      <td className="py-2.5 text-text-primary font-medium">{s.gender} {s.firstName} {s.lastName}</td>
                      <td className="py-2.5 text-text-secondary">{s.email}</td>
                      <td className="py-2.5 text-text-secondary hidden sm:table-cell">{(s as any).zip || '—'}</td>
                      <td className="py-2.5 text-text-secondary/60 text-right whitespace-nowrap">{formatTimeAgo(s.subscribedAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Analytics Section */}
        {analytics && (
          <motion.div
            className="space-y-4"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
                <BarChart3 size={16} className="text-teal" />
                Besucher-Statistiken
              </h2>
              <div className="flex items-center gap-1">
                {[
                  { value: '7', label: '7T' },
                  { value: '14', label: '14T' },
                  { value: '30', label: '30T' },
                  { value: 'all', label: 'Gesamt' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleRangeChange(opt.value)}
                    className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all cursor-pointer ${
                      analyticsRange === opt.value
                        ? 'bg-teal/15 text-teal border border-teal/30'
                        : 'text-text-secondary hover:text-text-primary border border-transparent'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Analytics Stats */}
            <div className="grid grid-cols-3 gap-3">
              {(() => {
                const rangeLabel = analyticsRange === 'all' ? 'Gesamt' : `${analyticsRange} Tage`
                return [
                  { label: 'Heute', value: analytics.days[analytics.days.length - 1]?.visitors || 0, icon: Eye },
                  { label: `${rangeLabel} Besucher`, value: analytics.totals.visitors, icon: Users },
                  { label: `${rangeLabel} Aufrufe`, value: analytics.totals.pageViews, icon: BarChart3 },
                ]
              })().map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="glass-card p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={14} className="text-teal" />
                      <span className="text-xs text-text-secondary">{stat.label}</span>
                    </div>
                    <p className="text-2xl font-semibold text-teal">{stat.value}</p>
                  </div>
                )
              })}
            </div>

            {/* Sparkline Chart */}
            {analytics.days.length > 1 && (() => {
              const values = analytics.days.map(d => d.visitors)
              const max = Math.max(...values, 1)
              const w = 100
              const h = 64
              const padding = 4
              const points = values.map((v, i) =>
                `${padding + (i / (values.length - 1)) * (w - padding * 2)},${h - padding - (v / max) * (h - padding * 2)}`
              ).join(' ')
              const areaPoints = points + ` ${w - padding},${h - padding} ${padding},${h - padding}`
              return (
                <div className="glass-card p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-text-secondary">Besucherverlauf</span>
                    <div className="flex items-center gap-3 text-[10px] text-text-secondary/50">
                      {analytics.days.length > 0 && (
                        <>
                          <span>{new Date(analytics.days[0].date + 'T00:00:00').toLocaleDateString('de-DE', { day: 'numeric', month: 'short' })}</span>
                          <span>—</span>
                          <span>{new Date(analytics.days[analytics.days.length - 1].date + 'T00:00:00').toLocaleDateString('de-DE', { day: 'numeric', month: 'short' })}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: 64 }}>
                    <defs>
                      <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polygon points={areaPoints} fill="url(#sparkGrad)" />
                    <polyline points={points} fill="none" stroke="#2DD4BF" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
                    {values.length <= 14 && values.map((v, i) => (
                      <circle
                        key={i}
                        cx={padding + (i / (values.length - 1)) * (w - padding * 2)}
                        cy={h - padding - (v / max) * (h - padding * 2)}
                        r="2"
                        fill="#2DD4BF"
                      />
                    ))}
                  </svg>
                  {analytics.days.length <= 14 && (
                    <div className="flex justify-between mt-1">
                      {analytics.days.map((d, i) => (
                        <span key={i} className="text-[9px] text-text-secondary/30">
                          {analytics.days.length <= 7
                            ? new Date(d.date + 'T00:00:00').toLocaleDateString('de-DE', { weekday: 'short' })
                            : new Date(d.date + 'T00:00:00').toLocaleDateString('de-DE', { day: 'numeric', month: 'numeric' })
                          }
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })()}

            {/* Top Pages + Referrers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Top Pages */}
              <div className="glass-card p-5">
                <h3 className="text-sm font-semibold text-text-primary flex items-center gap-2 mb-3">
                  <Eye size={14} className="text-teal" />
                  Top-Seiten
                </h3>
                {analytics.totals.topPages.length === 0 ? (
                  <p className="text-sm text-text-secondary/50 py-2 text-center">Noch keine Daten</p>
                ) : (
                  <div className="space-y-2">
                    {analytics.totals.topPages.slice(0, 5).map((page, i) => {
                      const maxViews = analytics.totals.topPages[0]?.views || 1
                      const pct = Math.round((page.views / maxViews) * 100)
                      return (
                        <div key={page.path} className="flex items-center gap-3">
                          <span className="text-xs text-text-secondary/40 w-4 text-right">{i + 1}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm text-text-primary truncate">{page.path === '/' ? 'Startseite' : page.path}</span>
                              <span className="text-xs text-text-secondary ml-2">{page.views}</span>
                            </div>
                            <div className="h-1 bg-glass rounded-full overflow-hidden">
                              <div className="h-full bg-teal/50 rounded-full" style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Top Referrers */}
              <div className="glass-card p-5">
                <h3 className="text-sm font-semibold text-text-primary flex items-center gap-2 mb-3">
                  <Globe size={14} className="text-teal" />
                  Herkunft
                </h3>
                {analytics.totals.topReferrers.length === 0 ? (
                  <p className="text-sm text-text-secondary/50 py-2 text-center">Noch keine Daten</p>
                ) : (
                  <div className="space-y-2">
                    {analytics.totals.topReferrers.slice(0, 5).map((ref, i) => {
                      const maxCount = analytics.totals.topReferrers[0]?.count || 1
                      const pct = Math.round((ref.count / maxCount) * 100)
                      return (
                        <div key={ref.source} className="flex items-center gap-3">
                          <span className="text-xs text-text-secondary/40 w-4 text-right">{i + 1}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm text-text-primary truncate">{ref.source}</span>
                              <span className="text-xs text-text-secondary ml-2">{ref.count}</span>
                            </div>
                            <div className="h-1 bg-glass rounded-full overflow-hidden">
                              <div className="h-full bg-gold/50 rounded-full" style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
