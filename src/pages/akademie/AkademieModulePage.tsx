import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpen, Clock } from 'lucide-react'
import TextSizeToggle from '../../components/TextSizeToggle'
import { getModuleBySlug, akademieModules } from '../../data/akademieData'

export default function AkademieModulePage() {
  const { moduleSlug } = useParams<{ moduleSlug: string }>()
  const mod = moduleSlug ? getModuleBySlug(moduleSlug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
    if (mod) {
      document.title = `${mod.title} | Wissens-Akademie | Dennis Tefett`
    }
  }, [mod])

  if (!mod) {
    return <Navigate to="/akademie" replace />
  }

  const moduleIndex = akademieModules.findIndex((m) => m.slug === mod.slug)
  const prevModule = moduleIndex > 0 ? akademieModules[moduleIndex - 1] : undefined
  const nextModule = moduleIndex < akademieModules.length - 1 ? akademieModules[moduleIndex + 1] : undefined

  const colorClasses = mod.color === 'teal'
    ? { accent: 'text-teal', bg: 'bg-teal/10', border: 'border-teal/30', hoverBorder: 'hover:border-teal/30' }
    : { accent: 'text-gold', bg: 'bg-gold/10', border: 'border-gold/30', hoverBorder: 'hover:border-gold/30' }

  return (
    <div className="min-h-screen bg-midnight">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-xl border-b border-glass-border">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="font-serif font-semibold text-text-primary hover:text-gold transition-colors">
              Dennis Tefett
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <TextSizeToggle />
            <Link
              to="/akademie"
              className="flex items-center gap-2 text-text-secondary hover:text-teal transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Zur Akademie</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-24 md:pt-28 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-midnight" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal/3 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center`}>
              <mod.icon size={24} className={colorClasses.accent} />
            </div>
            <span className={`text-xs tracking-[0.25em] uppercase ${colorClasses.accent} font-medium`}>
              Wissensmodul
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {mod.title}
          </motion.h1>

          <motion.p
            className="text-lg text-text-secondary max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {mod.description}
          </motion.p>

          <motion.div
            className={`mt-6 h-px bg-gradient-to-r ${mod.color === 'teal' ? 'from-teal' : 'from-gold'} via-${mod.color}/30 to-transparent max-w-xs`}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </header>

      {/* Impulse List */}
      <section className="max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 pb-16">
        <motion.h2
          className="text-sm font-medium text-text-secondary/60 uppercase tracking-wider mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {mod.impulse.length} Impulse in diesem Modul
        </motion.h2>

        <div className="space-y-4">
          {mod.impulse.map((impuls, i) => (
            <motion.div
              key={impuls.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/akademie/${mod.slug}/${impuls.slug}`}
                className={`glass-card p-6 md:p-8 flex items-start gap-5 group ${colorClasses.hoverBorder} transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-lg ${colorClasses.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <BookOpen size={18} className={colorClasses.accent} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-1.5 group-hover:text-teal transition-colors">
                    {impuls.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">
                    {impuls.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-xs text-text-secondary/50">
                      <Clock size={12} />
                      {impuls.readingTime} Lesezeit
                    </span>
                  </div>
                </div>
                <ArrowRight
                  size={18}
                  className="text-text-secondary/20 group-hover:text-teal group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-2"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Related coaching pages */}
      {mod.relatedCoachingPages.length > 0 && (
        <section className="max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 pb-16">
          <h4 className="text-sm font-medium text-text-secondary/60 uppercase tracking-wider mb-4">
            Vertiefung durch individuelles Coaching
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {mod.relatedCoachingPages.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="glass-card p-4 flex items-center justify-between group hover:border-teal/30 transition-all duration-300"
              >
                <span className="text-sm text-text-primary group-hover:text-teal transition-colors">{page.label}</span>
                <ArrowRight size={14} className="text-text-secondary/40 group-hover:text-teal transition-colors" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Navigate to other modules */}
      <section className="max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevModule ? (
            <Link
              to={`/akademie/${prevModule.slug}`}
              className="glass-card p-5 flex items-center gap-3 group hover:border-teal/30 transition-all duration-300"
            >
              <ArrowLeft size={16} className="text-text-secondary/40 group-hover:text-teal transition-colors flex-shrink-0" />
              <div>
                <span className="text-xs text-text-secondary/50 block">Vorheriges Modul</span>
                <span className="text-sm text-text-primary group-hover:text-teal transition-colors">{prevModule.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextModule ? (
            <Link
              to={`/akademie/${nextModule.slug}`}
              className="glass-card p-5 flex items-center gap-3 justify-end text-right group hover:border-teal/30 transition-all duration-300"
            >
              <div>
                <span className="text-xs text-text-secondary/50 block">Nächstes Modul</span>
                <span className="text-sm text-text-primary group-hover:text-teal transition-colors">{nextModule.title}</span>
              </div>
              <ArrowRight size={16} className="text-text-secondary/40 group-hover:text-teal transition-colors flex-shrink-0" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-glass-border py-8">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
          <p className="text-xs text-text-secondary/30 text-center mb-4">
            Freies Informationsangebot. Kein Fernunterricht i.S.d. FernUSG.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-secondary/40">
              &copy; {new Date().getFullYear()} Dennis Tefett. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4 text-xs text-text-secondary/40">
              <Link to="/" className="hover:text-text-secondary transition-colors">Startseite</Link>
              <Link to="/akademie" className="hover:text-text-secondary transition-colors">Akademie</Link>
              <Link to="/datenschutz" className="hover:text-text-secondary transition-colors">Datenschutz</Link>
              <Link to="/agb" className="hover:text-text-secondary transition-colors">AGB</Link>
              <Link to="/impressum" className="hover:text-text-secondary transition-colors">Impressum</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
