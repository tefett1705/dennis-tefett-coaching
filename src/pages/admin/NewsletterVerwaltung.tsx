import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Users, LogIn, LogOut, AlertCircle, Copy, Search, Download, Calendar, Gift } from 'lucide-react'

interface Subscriber {
  gender: string
  firstName: string
  lastName: string
  email: string
  birthYear: string
  zip: string
  source: string
  subscribedAt: string
  status: string
}

const API_BASE = import.meta.env.VITE_API_URL || '/api'

function formatDateDE(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('de-DE', { day: 'numeric', month: 'short', year: 'numeric' })
}

const adminTabs = [
  { id: 'dashboard', label: 'Dashboard', icon: Gift, href: '/admin' },
  { id: 'termine', label: 'Termine', icon: Calendar, href: '/admin/termine' },
  { id: 'newsletter', label: 'Newsletter', icon: Mail, href: '/admin/newsletter' },
]

export default function NewsletterVerwaltung() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [adminToken, setAdminToken] = useState('')
  const [loginError, setLoginError] = useState('')
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [totalCount, setTotalCount] = useState(0)
  const [monthCount, setMonthCount] = useState(0)
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)
  const [exportCopied, setExportCopied] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const saved = sessionStorage.getItem('dt-admin-token')
    if (saved) {
      setAdminToken(saved)
      setIsLoggedIn(true)
    }
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      fetchSubscribers()
      fetchCount()
    }
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

  const fetchSubscribers = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/newsletter?action=list`, {
        headers: { Authorization: `Bearer ${adminToken || sessionStorage.getItem('dt-admin-token')}` },
      })
      const data = await res.json()
      if (data.success) {
        setSubscribers(data.subscribers || [])
      }
    } catch {
      console.error('Fehler beim Laden')
    } finally {
      setLoading(false)
    }
  }

  const fetchCount = async () => {
    try {
      const res = await fetch(`${API_BASE}/newsletter?action=count`, {
        headers: { Authorization: `Bearer ${adminToken || sessionStorage.getItem('dt-admin-token')}` },
      })
      const data = await res.json()
      if (data.success) {
        setTotalCount(data.total || 0)
        setMonthCount(data.thisMonth || 0)
      }
    } catch {
      console.error('Fehler beim Laden der Statistiken')
    }
  }

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => setCopiedEmail(null), 1500)
  }

  const handleExportEmails = () => {
    const allEmails = subscribers.map(s => s.email).join(', ')
    navigator.clipboard.writeText(allEmails)
    setExportCopied(true)
    setTimeout(() => setExportCopied(false), 2000)
  }

  const filteredSubscribers = subscribers.filter(s => {
    if (!searchQuery) return true
    const q = searchQuery.toLowerCase()
    const fullName = `${s.firstName} ${s.lastName}`.toLowerCase()
    return fullName.includes(q) || s.email.toLowerCase().includes(q)
  })

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
            <p className="text-sm text-text-secondary mt-1">Newsletter-Verwaltung</p>
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
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            className="glass-card p-5"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                <Users size={18} className="text-teal" />
              </div>
              <div>
                <p className="text-xs text-text-secondary">Abonnenten gesamt</p>
                <p className="text-2xl font-semibold text-text-primary">{totalCount}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-card p-5"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-gold" />
              </div>
              <div>
                <p className="text-xs text-text-secondary">Diesen Monat</p>
                <p className="text-2xl font-semibold text-text-primary">{monthCount}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search + Export */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Nach Name oder E-Mail suchen..."
              className="w-full pl-9 pr-4 py-2 bg-glass border border-glass-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-all"
            />
          </div>
          <button
            onClick={handleExportEmails}
            disabled={subscribers.length === 0}
            className="px-4 py-2 bg-teal text-midnight font-semibold rounded-lg text-sm hover:bg-teal/90 transition-all cursor-pointer disabled:opacity-40 flex items-center gap-1.5"
          >
            {exportCopied ? (
              <>
                <Copy size={16} />
                Kopiert!
              </>
            ) : (
              <>
                <Download size={16} />
                Alle E-Mails kopieren
              </>
            )}
          </button>
          <span className="text-xs text-text-secondary/40">
            {filteredSubscribers.length} {filteredSubscribers.length === 1 ? 'Ergebnis' : 'Ergebnisse'}
          </span>
        </div>

        {/* Subscriber List */}
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-2 border-teal/30 border-t-teal rounded-full animate-spin" />
          </div>
        ) : filteredSubscribers.length === 0 ? (
          <div className="glass-card p-8 text-center">
            <Mail size={32} className="text-text-secondary/30 mx-auto mb-3" />
            <p className="text-text-secondary/60 text-sm">
              {searchQuery ? 'Keine Abonnenten gefunden.' : 'Noch keine Abonnenten vorhanden.'}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <AnimatePresence>
              {filteredSubscribers.map((sub) => (
                <motion.div
                  key={sub.email}
                  className="glass-card p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                  initial={{ y: 5 }}
                  animate={{ y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  layout
                >
                  {/* Name + Email */}
                  <div className="flex items-center gap-3 min-w-[240px]">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {sub.gender} {sub.firstName} {sub.lastName}
                      </p>
                      <p className="text-xs text-text-secondary flex items-center gap-1">
                        {sub.email}
                        <button
                          onClick={() => handleCopyEmail(sub.email)}
                          className="text-text-secondary/40 hover:text-teal transition-colors cursor-pointer"
                          title="E-Mail kopieren"
                        >
                          <Copy size={11} />
                        </button>
                        {copiedEmail === sub.email && (
                          <span className="text-teal text-[10px] ml-1">Kopiert!</span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 flex-1 text-xs text-text-secondary">
                    {sub.zip && (
                      <span>PLZ: {sub.zip}</span>
                    )}
                    {sub.birthYear && (
                      <span>Geb.: {sub.birthYear}</span>
                    )}
                    {sub.source && sub.source !== 'unknown' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border bg-glass border-glass-border font-medium">
                        {sub.source}
                      </span>
                    )}
                  </div>

                  {/* Date */}
                  <div className="text-xs text-text-secondary/60 sm:ml-auto whitespace-nowrap">
                    {sub.subscribedAt ? formatDateDE(sub.subscribedAt) : '—'}
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
