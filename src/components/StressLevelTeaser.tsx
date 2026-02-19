import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Activity, ArrowRight, Moon, BrainCircuit, HeartPulse, Briefcase } from 'lucide-react'

const categoryPreviews = [
  { icon: HeartPulse, label: 'Körper', color: 'teal' as const },
  { icon: BrainCircuit, label: 'Gedanken', color: 'gold' as const },
  { icon: Activity, label: 'Verhalten', color: 'teal' as const },
  { icon: Moon, label: 'Emotionen', color: 'gold' as const },
  { icon: Briefcase, label: 'Arbeit', color: 'teal' as const },
]

export default function StressLevelTeaser() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-gold/[0.015] to-surface" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          className="glass-card border-gold/15 bg-gold/[0.02] p-8 md:p-12 relative overflow-hidden"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
                <Activity size={14} className="text-gold" />
                <span className="text-xs tracking-[0.2em] uppercase text-gold font-semibold">Stress-Level-Check</span>
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
              Wie belastet sind Sie wirklich?
            </motion.h2>

            <motion.p
              className="text-text-secondary text-center max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed"
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Finden Sie in 5 Minuten heraus, wo Sie auf der Stressskala stehen.
              Mit Ampelsystem und persönlichen Empfehlungen basierend auf
              psychologischer Stressforschung.
            </motion.p>

            {/* Category cards */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8"
              initial={{ y: 15 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {categoryPreviews.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-glass-bg border border-glass-border"
                  initial={{ y: 10 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                >
                  <div className={`w-9 h-9 rounded-lg ${cat.color === 'gold' ? 'bg-gold/10' : 'bg-teal/10'} flex items-center justify-center`}>
                    <cat.icon size={18} className={cat.color === 'gold' ? 'text-gold' : 'text-teal'} />
                  </div>
                  <span className="text-[11px] text-text-secondary font-medium text-center leading-tight">{cat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Info line */}
            <motion.p
              className="text-center text-sm text-text-secondary/60 mb-6"
              viewport={{ once: true }}
            >
              10 Fragen · 5 Minuten · Ampel-Auswertung
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
                to="/stress-level-check"
                className="px-8 py-3.5 bg-gold text-midnight font-semibold rounded-full text-sm hover:bg-gold/90 transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-gold/15"
              >
                Stresslevel prüfen
                <ArrowRight size={16} />
              </Link>
              <span className="text-xs text-text-secondary/60">
                Kostenlos und anonym. Keine Anmeldung erforderlich.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
