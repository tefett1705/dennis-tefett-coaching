import { motion } from 'framer-motion'
import { TrendingUp, Users, Brain, Zap, Target, Heart } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const outcomes = [
  {
    icon: TrendingUp,
    title: 'Strategische Klarheit',
    before: 'Ständig im Reaktionsmodus, Entscheidungen aus dem Bauch',
    after: 'Klare Prioritäten, strategisch fundierte Entscheidungen mit System',
    color: 'teal',
  },
  {
    icon: Users,
    title: 'Wirksame Führung',
    before: 'Team braucht ständige Anleitung, hohe Fluktuation',
    after: 'Eigenverantwortliches Team, messbar reduzierte Fluktuation',
    color: 'teal',
  },
  {
    icon: Brain,
    title: 'Mentale Stärke',
    before: 'Chronischer Stress, Schlafprobleme, innere Unruhe',
    after: 'Emotionale Regulation, Resilienz unter Druck, innere Ruhe',
    color: 'gold',
  },
  {
    icon: Zap,
    title: 'Höhere Produktivität',
    before: '60+ Stunden pro Woche, ständig erreichbar',
    after: 'Fokussierte 45 Stunden mit deutlich höherem Output',
    color: 'teal',
  },
  {
    icon: Target,
    title: 'Karrieredurchbruch',
    before: 'Festgefahren, nächster Schritt unklar',
    after: 'Beförderung, Positionswechsel oder erfolgreiche Neuorientierung',
    color: 'gold',
  },
  {
    icon: Heart,
    title: 'Lebensqualität',
    before: 'Beruf dominiert alles, Beziehungen leiden',
    after: 'Bewusste Balance, erfüllte Beziehungen neben Karriere',
    color: 'teal',
  },
]

export default function AnimatedStats() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-surface via-surface-alt/30 to-surface overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          className="text-center mb-14"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-teal font-medium">Transformation</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4">
            Was exzellentes Coaching bewirkt
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Kein Wunschdenken. Dokumentierte Veränderungen, die meine Klienten in 3 bis 6 Monaten erreichen.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card p-6 group"
              initial={{ y: 30 }}
              animate={isVisible ? { y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  item.color === 'gold'
                    ? 'bg-gold/10 group-hover:bg-gold/20'
                    : 'bg-teal/10 group-hover:bg-teal/20'
                }`}>
                  <item.icon size={20} className={item.color === 'gold' ? 'text-gold' : 'text-teal'} />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>

              {/* Before → After */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-red-400/70 bg-red-400/10 px-2 py-0.5 rounded mt-0.5 flex-shrink-0">
                    Vorher
                  </span>
                  <p className="text-sm text-text-secondary/70 leading-relaxed">{item.before}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded mt-0.5 flex-shrink-0 ${
                    item.color === 'gold'
                      ? 'text-gold bg-gold/10'
                      : 'text-teal bg-teal/10'
                  }`}>
                    Nachher
                  </span>
                  <p className="text-sm text-text-primary leading-relaxed font-medium">{item.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
