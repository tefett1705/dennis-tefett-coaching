import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Brain, Type, BookOpen } from 'lucide-react'
import { useTextSize, type TextSize } from '../context/TextSizeContext'

const textSizes: TextSize[] = ['S', 'M', 'L']

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

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isWissenOpen, setIsWissenOpen] = useState(false)
  const [isWissenMobileOpen, setIsWissenMobileOpen] = useState(false)
  const wissenCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { textSize, setTextSize } = useTextSize()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const scrollTo = (href: string) => {
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
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
            ? 'bg-midnight/80 backdrop-blur-xl border-b border-glass-border shadow-lg shadow-midnight/50'
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
                    className="absolute top-full right-0 mt-3 w-[600px] rounded-2xl border border-white/[0.08] bg-[#0a2240]/95 backdrop-blur-2xl shadow-2xl shadow-midnight/60 p-5"
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', gap: '20px' }}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
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
                    <div className="mt-3 pt-3 border-t border-white/[0.06]" style={{ gridColumn: '1 / -1' }}>
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
                    <div className="pt-3 border-t border-white/[0.06]" style={{ gridColumn: '1 / -1' }}>
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
                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between" style={{ gridColumn: '1 / -1' }}>
                      <span className="text-xs text-text-secondary/40">Textgröße</span>
                      <div className="flex items-center gap-1.5">
                        <Type size={13} className="text-text-secondary/50" />
                        <div className="flex items-center bg-white/[0.04] border border-white/[0.08] rounded-full p-0.5 relative">
                          {textSizes.map((label) => (
                            <button
                              key={label}
                              onClick={(e) => { e.stopPropagation(); setTextSize(label) }}
                              className={`relative z-10 px-2.5 py-1 rounded-full cursor-pointer transition-colors duration-200 text-xs font-semibold leading-none ${
                                textSize === label
                                  ? 'text-midnight'
                                  : 'text-text-secondary/60 hover:text-text-secondary'
                              }`}
                            >
                              {label}
                            </button>
                          ))}
                          <motion.div
                            className="absolute top-0.5 bottom-0.5 bg-teal rounded-full pointer-events-none"
                            animate={{
                              left: textSizes.indexOf(textSize) === 0 ? '2px' : textSizes.indexOf(textSize) === 1 ? '33.33%' : '66.66%',
                              width: '33.33%',
                            }}
                            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                            style={{ zIndex: 0 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/akademie"
              className="btn-magnetic px-4 py-2 bg-teal/8 border border-teal/25 text-teal rounded-full text-sm font-medium hover:bg-teal/15 hover:border-teal/40 transition-all duration-300 flex items-center gap-1.5"
            >
              <BookOpen size={12} />
              Akademie
            </Link>
            <button
              onClick={() => scrollTo('#kontakt')}
              className="btn-magnetic px-5 py-2 bg-teal/10 border border-teal/30 text-teal rounded-full text-sm font-medium hover:bg-teal/20 hover:border-teal/50 transition-all duration-300 cursor-pointer"
            >
              Erstgespräch
            </button>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-teal transition-colors cursor-pointer"
            aria-label="Menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-midnight/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 overflow-y-auto py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-2xl font-serif text-text-primary hover:text-teal transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Wissen expandable section */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06, duration: 0.4 }}
            >
              <button
                onClick={() => setIsWissenMobileOpen(!isWissenMobileOpen)}
                className="text-2xl font-serif text-text-primary hover:text-teal transition-colors cursor-pointer flex items-center gap-2"
              >
                Wissen
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${isWissenMobileOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isWissenMobileOpen && (
                  <motion.div
                    className="mt-4 flex flex-col items-center gap-4 px-8"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {wissenCategories.map((cat) => (
                      <div key={cat.label} className="text-center">
                        <span className="text-xs tracking-[0.15em] uppercase text-text-secondary/40 font-medium block mb-2">
                          {cat.label}
                        </span>
                        {cat.links.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            className="block text-base text-text-secondary hover:text-teal transition-colors py-1"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}

                    {/* Selbsttest + Persönlichkeitstest mobile links */}
                    <Link
                      to="/selbsttest"
                      className="mt-2 flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/25 text-gold font-medium text-base"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <Brain size={18} />
                      Führungsprofil-Analyse
                    </Link>
                    <Link
                      to="/persoenlichkeitstest"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal/10 border border-teal/25 text-teal font-medium text-base"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <Brain size={18} />
                      Persönlichkeitstest
                    </Link>

                    {/* Mobile Text Size Toggle */}
                    <div className="mt-3 flex items-center gap-2">
                      <Type size={14} className="text-text-secondary/50" />
                      <div className="flex items-center bg-white/[0.04] border border-white/[0.08] rounded-full p-0.5 relative">
                        {textSizes.map((label) => (
                          <button
                            key={label}
                            onClick={(e) => { e.stopPropagation(); setTextSize(label) }}
                            className={`relative z-10 px-3 py-1.5 rounded-full cursor-pointer transition-colors duration-200 text-sm font-semibold leading-none ${
                              textSize === label
                                ? 'text-midnight'
                                : 'text-text-secondary/60 hover:text-text-secondary'
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                        <motion.div
                          className="absolute top-0.5 bottom-0.5 bg-teal rounded-full pointer-events-none"
                          animate={{
                            left: textSizes.indexOf(textSize) === 0 ? '2px' : textSizes.indexOf(textSize) === 1 ? '33.33%' : '66.66%',
                            width: '33.33%',
                          }}
                          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                          style={{ zIndex: 0 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navLinks.length + 1) * 0.06, duration: 0.4 }}
            >
              <Link
                to="/akademie"
                onClick={() => setIsMobileOpen(false)}
                className="text-xl font-serif text-teal hover:text-teal/80 transition-colors flex items-center gap-2"
              >
                <BookOpen size={16} />
                Wissens-Akademie
              </Link>
            </motion.div>
            <motion.button
              onClick={() => scrollTo('#kontakt')}
              className="mt-2 px-8 py-3 bg-teal text-midnight rounded-full font-semibold text-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navLinks.length + 2) * 0.06, duration: 0.4 }}
            >
              Erstgespräch buchen
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
