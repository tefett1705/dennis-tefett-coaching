import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ChevronRight, Calendar, BookOpen } from 'lucide-react'
import TextSizeToggle from './TextSizeToggle'

interface AkademieLayoutProps {
  children: React.ReactNode
  moduleTitle: string
  moduleSlug: string
  color: 'teal' | 'gold'
  impulsTitle?: string
  prevImpuls?: { title: string; href: string }
  nextImpuls?: { title: string; href: string }
  relatedCoachingPages?: { label: string; href: string }[]
}

export default function AkademieLayout({
  children,
  moduleTitle,
  moduleSlug,
  color,
  impulsTitle,
  prevImpuls,
  nextImpuls,
  relatedCoachingPages,
}: AkademieLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const colorClasses = color === 'teal'
    ? { accent: 'text-teal', bg: 'bg-teal/10', border: 'border-teal/30', gradient: 'from-teal' }
    : { accent: 'text-gold', bg: 'bg-gold/10', border: 'border-gold/30', gradient: 'from-gold' }

  return (
    <div className="min-h-screen bg-surface">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-glass-border">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 h-16 flex items-center justify-between">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm min-w-0">
            <Link to="/" className="font-serif font-semibold text-text-primary hover:text-gold transition-colors flex-shrink-0">
              Dennis Tefett
            </Link>
            <ChevronRight size={14} className="text-text-secondary/30 flex-shrink-0" />
            <Link to="/akademie" className="text-text-secondary hover:text-teal transition-colors flex-shrink-0">
              Akademie
            </Link>
            {impulsTitle && (
              <>
                <ChevronRight size={14} className="text-text-secondary/30 flex-shrink-0 hidden sm:block" />
                <Link
                  to={`/akademie/${moduleSlug}`}
                  className="text-text-secondary hover:text-teal transition-colors truncate hidden sm:block"
                >
                  {moduleTitle}
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center gap-4">
            <TextSizeToggle />
            <Link
              to={impulsTitle ? `/akademie/${moduleSlug}` : '/akademie'}
              className="flex items-center gap-2 text-text-secondary hover:text-teal transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Zurück</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-24 md:pt-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/50 to-surface" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal/3 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
          <motion.span
            className={`text-xs tracking-[0.25em] uppercase ${colorClasses.accent} font-medium inline-block mb-4`}
            initial={{ y: 15 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {impulsTitle ? moduleTitle : 'Wissensmodul'}
          </motion.span>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-semibold leading-tight"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {impulsTitle || moduleTitle}
          </motion.h1>
          <motion.div
            className={`mt-6 h-px bg-gradient-to-r ${colorClasses.gradient} via-${color}/30 to-transparent max-w-xs`}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>

        <div className="h-12 md:h-16" />
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 pb-20">
        <div>{children}</div>

        {/* Prev / Next navigation */}
        {(prevImpuls || nextImpuls) && (
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevImpuls ? (
              <Link
                to={prevImpuls.href}
                className="glass-card p-5 flex items-center gap-3 group hover:border-teal/30 transition-all duration-300"
              >
                <ArrowLeft size={16} className="text-text-secondary/40 group-hover:text-teal transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs text-text-secondary/50 block">Vorheriger Impuls</span>
                  <span className="text-sm text-text-primary group-hover:text-teal transition-colors truncate block">
                    {prevImpuls.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextImpuls ? (
              <Link
                to={nextImpuls.href}
                className="glass-card p-5 flex items-center gap-3 justify-end text-right group hover:border-teal/30 transition-all duration-300"
              >
                <div className="min-w-0">
                  <span className="text-xs text-text-secondary/50 block">Nächster Impuls</span>
                  <span className="text-sm text-text-primary group-hover:text-teal transition-colors truncate block">
                    {nextImpuls.title}
                  </span>
                </div>
                <ArrowRight size={16} className="text-text-secondary/40 group-hover:text-teal transition-colors flex-shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        )}

        {/* Related coaching pages */}
        {relatedCoachingPages && relatedCoachingPages.length > 0 && (
          <div className="mt-10">
            <h4 className="text-sm font-medium text-text-secondary/60 uppercase tracking-wider mb-4">Vertiefung durch Coaching</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedCoachingPages.map((page) => (
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
          </div>
        )}

        {/* CTA */}
        <motion.div
          className="mt-12 glass-card p-8 md:p-10 text-center"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3">
            Weitere Impulse entdecken
          </h3>
          <p className="text-text-secondary mb-6 max-w-md mx-auto">
            Vertiefen Sie Ihr Wissen mit weiteren Impulsen oder erfahren Sie, wie individuelles Coaching Sie unterstützen kann.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/akademie"
              className="px-6 py-3 bg-teal text-midnight font-semibold rounded-full text-sm hover:bg-teal/90 transition-all duration-300 inline-flex items-center gap-2 justify-center"
            >
              <BookOpen size={16} />
              Zur Akademie-Übersicht
            </Link>
            <Link
              to="/#kontakt"
              className="px-6 py-3 border border-glass-border text-text-secondary rounded-full text-sm hover:border-teal/30 hover:text-teal transition-all duration-300 inline-flex items-center gap-2 justify-center"
            >
              <Calendar size={16} />
              Erstgespräch vereinbaren
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-glass-border py-8">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
          <p className="text-xs text-text-secondary/30 text-center mb-4">
            Freies Informationsangebot zur eigenständigen Nutzung. Kein Fernunterricht im Sinne des FernUSG.
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
