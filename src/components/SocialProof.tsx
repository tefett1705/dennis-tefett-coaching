import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'Ich kam als Geschäftsführer, der ständig reagiert hat. Nach 3 Monaten hatte ich ein System, das mir erlaubt, strategisch zu führen, ohne ständig auf Abruf zu sein.',
    role: 'Geschäftsführer, IT-Dienstleistung',
    result: 'Arbeitszeit um 12h/Woche reduziert bei höherem Output',
  },
  {
    quote: 'Kein anderer Coach hat mir so klar gezeigt, welche Muster mich blockieren. Wissenschaftlich, nicht esoterisch. Das hat den Unterschied gemacht.',
    role: 'Vorständin, Mittelstand',
    result: 'Beförderung in den Vorstand innerhalb von 8 Monaten',
  },
  {
    quote: 'Die Kombination aus psychologischer Tiefe und unternehmerischem Verständnis ist einzigartig. Dennis versteht den Druck, unter dem wir stehen.',
    role: 'Managing Director, Finanzbranche',
    result: 'Team-Fluktuation von 35% auf 8% gesenkt',
  },
]

const chatBubbles = [
  { text: 'Zum ersten Mal in Jahren fühle ich mich klar.', delay: 0.3 },
  { text: 'Mein Team hat den Unterschied sofort bemerkt.', delay: 0.6 },
  { text: 'Bester Investment in mich selbst.', delay: 0.9 },
]

export default function SocialProof() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="ergebnisse" className="relative py-20 md:py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          className="text-center mb-14"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">Ergebnisse</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4">
            Was meine Klienten erreichen
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="glass-card p-7 flex flex-col relative group"
              initial={{ y: 30 }}
              animate={isVisible ? { y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-teal/5 via-transparent to-gold/5 pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <Quote size={24} className="text-teal/30" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <motion.div
                      key={s}
                      initial={{ scale: 0 }}
                      animate={isVisible ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 + s * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Star size={12} className="text-gold fill-gold" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <p className="text-text-primary leading-relaxed flex-1 mb-5 text-[15px] relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-glass-border pt-4 relative z-10">
                <p className="text-sm text-text-secondary">{t.role}</p>
                <motion.p
                  className="text-sm text-teal font-medium mt-1"
                  initial={{ x: -10 }}
                  animate={isVisible ? { x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
                >
                  {t.result}
                </motion.p>
              </div>

              {/* Animated accent at bottom */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-teal to-gold"
                initial={{ width: 0 }}
                animate={isVisible ? { width: '100%' } : {}}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating chat bubbles with pulse */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {chatBubbles.map((bubble, i) => (
            <motion.div
              key={i}
              className="glass-card px-5 py-3 text-sm text-text-secondary relative"
              initial={{ y: 20, scale: 0.98 }}
              whileInView={{ y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: bubble.delay, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-teal mr-2 align-middle" />
              {bubble.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
