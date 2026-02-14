import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Lightbulb, ClipboardCheck, Users, Heart, Shield, ArrowRight, Sparkles } from 'lucide-react'

const dimensionPreviews = [
  { icon: Lightbulb, label: 'Offenheit', color: 'teal' as const },
  { icon: ClipboardCheck, label: 'Gewissenhaftigkeit', color: 'gold' as const },
  { icon: Users, label: 'Extraversion', color: 'teal' as const },
  { icon: Heart, label: 'Verträglichkeit', color: 'gold' as const },
  { icon: Shield, label: 'Emotionale Stabilität', color: 'teal' as const },
]

export default function PersoenlichkeitstestTeaser() {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-teal/[0.015] to-surface" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          className="glass-card border-teal/15 bg-teal/[0.02] p-8 md:p-12 relative overflow-hidden"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/25 bg-teal/10">
                <Sparkles size={14} className="text-teal" />
                <span className="text-xs tracking-[0.2em] uppercase text-teal font-semibold">Neu: Persönlichkeitstest</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-center mb-4"
              initial={{ y: 15 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Persönlichkeitsprofil entdecken
            </motion.h2>

            <motion.p
              className="text-text-secondary text-center max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed"
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Basierend auf dem wissenschaftlichen Big Five Modell, dem weltweit am besten
              erforschten Persönlichkeitsmodell. Entdecken Sie Ihre Stärken und
              Entwicklungsfelder in fünf Kerndimensionen.
            </motion.p>

            {/* Dimension cards */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8"
              initial={{ y: 15 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {dimensionPreviews.map((dim, i) => (
                <motion.div
                  key={dim.label}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-glass-bg border border-glass-border"
                  initial={{ y: 10 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                >
                  <div className={`w-9 h-9 rounded-lg ${dim.color === 'gold' ? 'bg-gold/10' : 'bg-teal/10'} flex items-center justify-center`}>
                    <dim.icon size={18} className={dim.color === 'gold' ? 'text-gold' : 'text-teal'} />
                  </div>
                  <span className="text-[11px] text-text-secondary font-medium text-center leading-tight">{dim.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Info line */}
            <motion.p
              className="text-center text-sm text-text-secondary/60 mb-6"
              initial={{}}
              whileInView={{}}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              20 Fragen · 5 Minuten · Wissenschaftlich fundiert
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link
                to="/persoenlichkeitstest"
                className="px-8 py-3.5 bg-teal text-midnight font-semibold rounded-full text-sm hover:bg-teal/90 transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-teal/15"
              >
                Profil-Analyse starten
                <ArrowRight size={16} />
              </Link>
              <span className="text-xs text-text-secondary/40">
                Mit Newsletter-Anmeldung für Ihre persönliche Auswertung.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
