import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Brain, BookOpen, Sun, Moon, Home, Compass, Gift, Calendar } from 'lucide-react'
import TextSizeToggle from './TextSizeToggle'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Methode', href: '#methode' },
  { label: 'Ergebnisse', href: '#ergebnisse' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Angebot', href: '#angebot' },
  { label: 'FAQ', href: '#faq' },
]

const wissenCategories = [
  {
    label: 'Coaching-Arten',
    links: [
      { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
      { label: 'Life Coaching', href: '/life-coaching' },
      { label: 'Karriere-Coaching', href: '/karriere-coaching' },
      { label: 'Teamcoaching', href: '/teamcoaching' },
      { label: 'Stressmanagement', href: '/stressmanagement-coaching' },
    ],
  },
  {
    label: 'Methoden & Ansätze',
    links: [
      { label: 'Coaching-Methoden', href: '/coaching-methoden' },
      { label: 'Persönlichkeitsentwicklung', href: '/persoenlichkeitsentwicklung-erklaert' },
      { label: 'Geschäftsplanung', href: '/strategische-geschaftsplanung' },
      { label: 'Teambuilding', href: '/teambuildingworkshop' },
    ],
  },
  {
    label: 'Persönliches Wachstum',
    links: [
      { label: 'Selbstwirksamkeit', href: '/selbstwirksamkeit-staerken' },
      { label: 'Fokus & Klarheit', href: '/fokus-und-klarheit' },
      { label: 'Verhaltensänderung', href: '/nachhaltige-verhaltensaenderung' },
    ],
  },
]

const bottomTabs = [
  { id: 'start', label: 'Start', icon: Home, type: 'scroll' as const, target: '#top' },
  { id: 'methode', label: 'Methode', icon: Compass, type: 'scroll' as const, target: '#methode' },
  { id: 'angebot', label: 'Angebot', icon: Gift, type: 'scroll' as const, target: '#angebot' },
  { id: 'akademie', label: 'Akademie', icon: BookOpen, type: 'link' as const, target: '/akademie' },
  { id: 'termin', label: 'Termin', icon: Calendar, type: 'link' as const, target: '/termin-buchen' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isWissenOpen, setIsWissenOpen] = useState(false)
  const wissenCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('start')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (location.pathname === '/akademie' || location.pathname.startsWith('/akademie/')) {
      setActiveTab('akademie')
    } else if (location.pathname === '/termin-buchen') {
      setActiveTab('termin')
    } else if (location.pathname === '/') {
      if (location.hash === '#methode') setActiveTab('methode')
      else if (location.hash === '#angebot') setActiveTab('angebot')
      else setActiveTab('start')
    } else {
      setActiveTab('')
    }
  }, [location.pathname, location.hash])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleTabClick = (tab: typeof bottomTabs[number]) => {
    setActiveTab(tab.id)
    if (tab.type === 'scroll') {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          if (tab.target === '#top') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          } else {
            document.querySelector(tab.target)?.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        if (tab.target === '#top') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          document.querySelector(tab.target)?.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const handleWissenEnter = () => {
    if (wissenCloseTimer.current) {
      clearTimeout(wissenCloseTimer.current)
      wissenCloseTimer.current = null
    }
    setIsWissenOpen(true)
  }

  const handleWissenLeave = () => {
    wissenCloseTimer.current = setTimeout(() => {
      setIsWissenOpen(false)
    }, 150)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-surface/80 backdrop-blur-xl border-b border-glass-border shadow-lg shadow-surface/50'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 h-16 md:h-18 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-lg md:text-xl font-serif font-semibold tracking-wide text-text-primary group-hover:text-gold transition-colors duration-300">
              Dennis Tefett
            </span>
          </a>

          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-text-secondary hover:text-teal transition-colors duration-300 tracking-wide cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            {/* Wissen Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleWissenEnter}
              onMouseLeave={handleWissenLeave}
            >
              <button
                className="text-sm text-text-secondary hover:text-teal transition-colors duration-300 tracking-wide cursor-pointer flex items-center gap-1"
              >
                Wissen
                <ChevronDown size={14} className={`transition-transform duration-200 ${isWissenOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isWissenOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-3 w-[600px] rounded-2xl border border-glass-border bg-surface-alt/95 backdrop-blur-2xl shadow-2xl shadow-surface/60 p-5"
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', gap: '20px' }}
                    initial={{ y: -8 }}
                    animate={{ y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {wissenCategories.map((cat) => (
                      <div key={cat.label}>
                        <span className="text-xs tracking-[0.15em] uppercase text-text-secondary/50 font-medium block mb-2.5">
                          {cat.label}
                        </span>
                        <div className="space-y-1.5">
                          {cat.links.map((link) => (
                            <Link
                              key={link.href}
                              to={link.href}
                              className="block text-sm text-text-secondary hover:text-teal transition-colors duration-200 py-0.5"
                              onClick={() => setIsWissenOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Akademie highlight */}
                    <div className="mt-3 pt-3 border-t border-glass-border/50" style={{ gridColumn: '1 / -1' }}>
                      <Link
                        to="/akademie"
                        className="flex items-center gap-3 p-3 rounded-xl bg-teal/8 border border-teal/20 hover:bg-teal/15 transition-all duration-200 group"
                        onClick={() => setIsWissenOpen(false)}
                      >
                        <div className="w-9 h-9 rounded-lg bg-teal/15 flex items-center justify-center flex-shrink-0">
                          <BookOpen size={18} className="text-teal" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-teal group-hover:text-teal/90">Wissens-Akademie</span>
                          <span className="text-xs text-text-secondary/50 block">5 Module · 18 Impulse · Kostenfrei</span>
                        </div>
                      </Link>
                    </div>

                    {/* Selbsttest + Persönlichkeitstest highlights */}
                    <div className="pt-3 border-t border-glass-border/50" style={{ gridColumn: '1 / -1' }}>
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          to="/selbsttest"
                          className="flex items-center gap-3 p-3 rounded-xl bg-gold/8 border border-gold/20 hover:bg-gold/15 transition-all duration-200 group"
                          onClick={() => setIsWissenOpen(false)}
                        >
                          <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                            <Brain size={18} className="text-gold" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gold group-hover:text-gold/90">Führungsprofil-Analyse</span>
                            <span className="text-xs text-text-secondary/50 block">Selbsttest · 3 Minuten</span>
                          </div>
                        </Link>
                        <Link
                          to="/persoenlichkeitstest"
                          className="flex items-center gap-3 p-3 rounded-xl bg-teal/8 border border-teal/20 hover:bg-teal/15 transition-all duration-200 group"
                          onClick={() => setIsWissenOpen(false)}
                        >
                          <div className="w-9 h-9 rounded-lg bg-teal/15 flex items-center justify-center flex-shrink-0">
                            <Brain size={18} className="text-teal" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-teal group-hover:text-teal/90">Persönlichkeitstest</span>
                            <span className="text-xs text-text-secondary/50 block">Big Five · 5 Minuten</span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Text Size Toggle */}
                    <div className="pt-3 border-t border-glass-border/50 flex items-center justify-between" style={{ gridColumn: '1 / -1' }}>
                      <span className="text-xs text-text-secondary/40">Textgröße</span>
                      <TextSizeToggle />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-glass-border bg-glass hover:bg-glass-border/30 transition-all duration-300 cursor-pointer"
              aria-label={theme === 'dark' ? 'Hellen Modus aktivieren' : 'Dunklen Modus aktivieren'}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {theme === 'dark' ? (
                  <Sun size={16} className="text-gold" />
                ) : (
                  <Moon size={16} className="text-teal" />
                )}
              </motion.div>
            </button>

            <Link
              to="/akademie"
              className="btn-magnetic px-4 py-2 bg-teal/8 border border-teal/25 text-teal rounded-full text-sm font-medium hover:bg-teal/15 hover:border-teal/40 transition-all duration-300 flex items-center gap-1.5"
            >
              <BookOpen size={12} />
              Akademie
            </Link>
            <Link
              to="/termin-buchen"
              className="btn-magnetic px-5 py-2 bg-teal/10 border border-teal/30 text-teal rounded-full text-sm font-medium hover:bg-teal/20 hover:border-teal/50 transition-all duration-300"
            >
              Termin buchen
            </Link>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Bottom Tab Bar */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="bg-surface/80 backdrop-blur-xl border-t border-glass-border">
          <div className="flex items-center justify-around h-16 px-2">
            {bottomTabs.map((tab) => {
              const isActive = activeTab === tab.id
              const Icon = tab.icon

              if (tab.type === 'link') {
                return (
                  <Link
                    key={tab.id}
                    to={tab.target}
                    onClick={() => setActiveTab(tab.id)}
                    className="flex flex-col items-center justify-center gap-1 flex-1 py-2 relative"
                  >
                    {isActive && (
                      <motion.div
                        className="absolute -top-px left-3 right-3 h-0.5 bg-teal rounded-full"
                        layoutId="bottomTabIndicator"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                    <Icon
                      size={20}
                      className={`transition-colors duration-200 ${
                        isActive ? 'text-teal' : 'text-text-secondary/60'
                      }`}
                    />
                    <span
                      className={`text-[10px] font-medium tracking-wide transition-colors duration-200 ${
                        isActive ? 'text-teal' : 'text-text-secondary/50'
                      }`}
                    >
                      {tab.label}
                    </span>
                  </Link>
                )
              }

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab)}
                  className="flex flex-col items-center justify-center gap-1 flex-1 py-2 cursor-pointer relative"
                >
                  {isActive && (
                    <motion.div
                      className="absolute -top-px left-3 right-3 h-0.5 bg-teal rounded-full"
                      layoutId="bottomTabIndicator"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <Icon
                    size={20}
                    className={`transition-colors duration-200 ${
                      isActive ? 'text-teal' : 'text-text-secondary/60'
                    }`}
                  />
                  <span
                    className={`text-[10px] font-medium tracking-wide transition-colors duration-200 ${
                      isActive ? 'text-teal' : 'text-text-secondary/50'
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </motion.nav>
    </>
  )
}
