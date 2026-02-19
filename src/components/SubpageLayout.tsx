import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

interface SubpageLayoutProps {
  children: React.ReactNode
  category: string
  title: string
  subtitle?: string
  heroImage?: string
  relatedPages?: { label: string; href: string }[]
}

export default function SubpageLayout({ children, category, title, subtitle, heroImage, relatedPages }: SubpageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-surface pb-20 md:pb-0">
      {/* Hero – with optional image */}
      <header className="pt-24 md:pt-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/50 to-surface" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal/3 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
          <div className={`grid grid-cols-1 ${heroImage ? 'lg:grid-cols-5' : ''} gap-8 lg:gap-12 items-center`}>
            {/* Text side */}
            <div className={`text-center lg:text-left ${heroImage ? 'lg:col-span-3' : ''}`}>
              <motion.span
                className="text-xs tracking-[0.25em] uppercase text-teal font-medium inline-block mb-4"
                initial={{ y: 15 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {category}
              </motion.span>
              <motion.h1
                className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-semibold leading-tight"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {title}
              </motion.h1>
              {subtitle && (
                <motion.p
                  className="text-base md:text-lg text-text-secondary mt-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ y: 15 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {subtitle}
                </motion.p>
              )}
              <motion.div
                className="mt-6 h-px bg-gradient-to-r from-teal via-teal/30 to-transparent max-w-xs"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>

            {/* Image side */}
            {heroImage && (
              <motion.div
                className="lg:col-span-2"
                initial={{ x: 30 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <img
                    src={heroImage}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Spacer */}
        <div className="h-12 md:h-16" />
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 pb-20">
        <div>
          {children}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 glass-card p-8 md:p-10 text-center"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3">
            Bereit für den nächsten Schritt?
          </h3>
          <p className="text-text-secondary mb-6 max-w-md mx-auto">
            In einem vertraulichen Erstgespräch klären wir, wo Sie stehen und wie ich Sie unterstützen kann.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/#kontakt"
              className="px-6 py-3 bg-teal text-midnight font-semibold rounded-full text-sm hover:bg-teal/90 transition-all duration-300 inline-flex items-center gap-2 justify-center"
            >
              <Calendar size={16} />
              Erstgespräch vereinbaren
            </Link>
            <Link
              to="/"
              className="px-6 py-3 border border-glass-border text-text-secondary rounded-full text-sm hover:border-teal/30 hover:text-teal transition-all duration-300 inline-flex items-center gap-2 justify-center"
            >
              Alle Leistungen ansehen
            </Link>
          </div>
        </motion.div>

        {/* Related pages */}
        {relatedPages && relatedPages.length > 0 && (
          <div className="mt-12">
            <h4 className="text-sm font-medium text-text-secondary/60 uppercase tracking-wider mb-4">Weiterführende Themen</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedPages.map((page) => (
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
      </main>

      {/* Footer */}
      <footer className="border-t border-glass-border py-8">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-text-secondary/40">
            &copy; {new Date().getFullYear()} Dennis Tefett. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-secondary/40">
            <Link to="/" className="hover:text-text-secondary transition-colors">Startseite</Link>
            <Link to="/datenschutz" className="hover:text-text-secondary transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-text-secondary transition-colors">AGB</Link>
            <Link to="/impressum" className="hover:text-text-secondary transition-colors">Impressum</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
