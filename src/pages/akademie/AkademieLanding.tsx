import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Brain, Lightbulb, Globe, Sparkles, Heart } from 'lucide-react'
import { akademieModules } from '../../data/akademieData'
import SEOHead from '../../components/SEOHead'

export default function AkademieLanding() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-surface pb-20 md:pb-0">
      <SEOHead
        title="Wissens-Akademie | Impulse für Führung & Persönlichkeit | Dennis Tefett"
        description="Kostenlose Wissens-Akademie mit 5 Modulen und 22 Impulsen zu Führung, Resilienz, Persönlichkeitsentwicklung, Strategie und Kommunikation. Psychologisch fundiert von Dennis Tefett."
        keywords="Wissens-Akademie, Führung, Resilienz, Persönlichkeitsentwicklung, Coaching Wissen, kostenlos, Dennis Tefett"
      />
      {/* Hero */}
      <header className="pt-24 md:pt-28 pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/50 to-surface" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-teal/4 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-gold/3 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/20 bg-teal/5 mb-6"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BookOpen size={14} className="text-teal" />
            <span className="text-xs tracking-[0.2em] uppercase text-teal font-medium">Wissensportal</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Wissens-<span className="text-gradient-teal">Akademie</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 15 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Impulse für Führung, Psychologie und persönliches Wachstum. Wissenschaftlich fundiert. Praxisnah. Kostenfrei zugänglich.
          </motion.p>
        </div>
      </header>

      {/* Module Cards */}
      <section className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {akademieModules.map((mod, i) => (
            <motion.div
              key={mod.slug}
              initial={{ y: 25 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/akademie/${mod.slug}`}
                className={`glass-card p-6 md:p-8 block group hover:border-${mod.color === 'teal' ? 'teal' : 'gold'}/30 transition-all duration-300 h-full`}
              >
                <div className={`w-11 h-11 rounded-lg ${mod.color === 'teal' ? 'bg-teal/10' : 'bg-gold/10'} flex items-center justify-center mb-5`}>
                  <mod.icon size={22} className={mod.color === 'teal' ? 'text-teal' : 'text-gold'} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-teal transition-colors">
                  {mod.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {mod.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className={`text-xs ${mod.color === 'teal' ? 'text-teal/60' : 'text-gold/60'}`}>
                    {mod.impulse.length} Impulse
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-text-secondary/30 group-hover:text-teal group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What is the Akademie? */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-surface via-surface-alt/30 to-surface">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
          <motion.div
            className="text-center mb-14"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.25em] uppercase text-teal font-medium">Über die Akademie</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-4">
              Was ist die Wissens-Akademie?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Lightbulb,
                title: 'Wissenschaftlich fundiert',
                description: 'Alle Impulse basieren auf aktueller Forschung aus Psychologie und Neurowissenschaft. Keine Motivationsfloskeln, sondern fundiertes Wissen.',
              },
              {
                icon: Sparkles,
                title: 'Praxisnah und anwendbar',
                description: 'Jeder Impuls enthält konkrete Reflexionsfragen und Praxistipps, die Sie sofort in Ihrem Führungsalltag einsetzen können.',
              },
              {
                icon: Globe,
                title: 'Kostenfrei zugänglich',
                description: 'Kein Login, keine Registrierung, keine versteckten Kosten. Wissen sollte frei verfügbar sein.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 md:p-8"
                initial={{ y: 25 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interaktive Analysen */}
      <section className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 pb-20 md:pb-28">
        <motion.div
          className="text-center mb-10"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">Interaktiv</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-4">
            Interaktive Selbsttests
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto">
            Kostenlose Analysen mit sofortiger Auswertung. Kein Login, keine Registrierung. Ergebnisse werden lokal auf Ihrem Gerät gespeichert.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Glaubenssatz-Test */}
          <motion.div
            initial={{ y: 25 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to="/glaubenssatz-test"
              className="glass-card p-6 md:p-8 block group hover:border-teal/30 transition-all duration-300 h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal/5 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-teal/10 flex items-center justify-center">
                    <Heart size={22} className="text-teal" />
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full border border-teal/20 bg-teal/5 text-teal font-medium">Neu</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-teal transition-colors">
                  Glaubenssatz-Analyse
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  Erkennen Sie Ihre limitierenden Überzeugungen in sechs Kernbereichen: Selbstwert, Leistung, Beziehungen, Veränderung, Kontrolle und Emotionen.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-teal/60">24 Aussagen · 5 Min.</span>
                  <ArrowRight
                    size={16}
                    className="text-text-secondary/30 group-hover:text-teal group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Führungsprofil-Analyse */}
          <motion.div
            initial={{ y: 25 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/selbsttest"
              className="glass-card p-6 md:p-8 block group hover:border-gold/30 transition-all duration-300 h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Brain size={22} className="text-gold" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-gold transition-colors">
                  Führungsprofil-Analyse
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  Entdecken Sie Ihre Stärken und Wachstumsfelder als Führungskraft in vier Schlüsseldimensionen: Selbstführung, Kommunikation, Resilienz und Strategie.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gold/60">12 Fragen · 3 Min.</span>
                  <ArrowRight
                    size={16}
                    className="text-text-secondary/30 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FernUSG Disclaimer */}
      <footer className="border-t border-glass-border py-8">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
          <p className="text-xs text-text-secondary/30 text-center mb-4">
            Freies Informationsangebot zur eigenständigen Nutzung. Kein Fernunterricht im Sinne des Fernunterrichtsschutzgesetzes (FernUSG). Es findet keine Überwachung des Lernerfolgs statt. Die Nutzung der Inhalte erfolgt eigenverantwortlich.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
        </div>
      </footer>
    </div>
  )
}
