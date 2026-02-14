import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, MessageCircle, Shield, Target, ArrowRight } from 'lucide-react'

const dimensionPreviews = [
  { icon: Brain, label: 'Selbstführung', color: 'teal' },
  { icon: MessageCircle, label: 'Kommunikation', color: 'gold' },
  { icon: Shield, label: 'Resilienz', color: 'teal' },
  { icon: Target, label: 'Strategie', color: 'gold' },
]

export default function SelbsttestTeaser() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-gold/[0.02] to-surface" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          className="glass-card border-gold/15 bg-gold/[0.02] p-8 md:p-12 relative overflow-hidden"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/25 bg-gold/10">
                <Brain size={16} className="text-gold" />
                <span className="text-xs tracking-[0.2em] uppercase text-gold font-semibold">Kostenloser Selbsttest</span>
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
              Kennen Sie Ihr Führungsprofil?
            </motion.h2>

            <motion.p
              className="text-text-secondary text-center max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed"
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Entdecken Sie Ihre Stärken und blinden Flecken als Führungskraft.
              Unser neurowissenschaftlich fundierter Selbsttest analysiert Ihr Profil
              in vier Schlüsseldimensionen.
            </motion.p>

            {/* Dimension cards */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
              initial={{ y: 15 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {dimensionPreviews.map((dim, i) => (
                <motion.div
                  key={dim.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-glass-bg border border-glass-border"
                  initial={{ y: 10 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                >
                  <div className={`w-10 h-10 rounded-lg ${dim.color === 'gold' ? 'bg-gold/10' : 'bg-teal/10'} flex items-center justify-center`}>
                    <dim.icon size={20} className={dim.color === 'gold' ? 'text-gold' : 'text-teal'} />
                  </div>
                  <span className="text-xs text-text-secondary font-medium text-center">{dim.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Info line */}
            <motion.p
              className="text-center text-sm text-text-secondary/60 mb-6"
              viewport={{ once: true }}
            >
              12 Fragen · 3 Minuten · Sofortige Auswertung
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
                to="/selbsttest"
                className="px-8 py-3.5 bg-gold text-midnight font-semibold rounded-full text-sm hover:bg-gold/90 transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-gold/15"
              >
                Profil-Analyse starten
                <ArrowRight size={16} />
              </Link>
              <span className="text-xs text-text-secondary/40">
                Kostenlos und anonym. Keine Anmeldung erforderlich.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
