import { motion } from 'framer-motion'
import { Search, Crosshair, PenTool, Rocket } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    icon: Search,
    phase: '01',
    title: 'Diagnostik',
    description: 'Psychologische Analyse Ihrer Ausgangslage. Stärken, Muster, blinde Flecken. Wissenschaftlich, nicht intuitiv.',
  },
  {
    icon: Crosshair,
    phase: '02',
    title: 'Positionierung',
    description: 'Wir definieren Ihr Zielbild: Wer wollen Sie als Führungskraft sein? Was soll sich konkret ändern?',
  },
  {
    icon: PenTool,
    phase: '03',
    title: 'Transformation',
    description: 'Gezielte Interventionen aus Neurowissenschaft und Verhaltenspsychologie. Mit messbaren Meilensteinen.',
  },
  {
    icon: Rocket,
    phase: '04',
    title: 'Integration',
    description: 'Die neuen Muster werden belastbar. Sie brauchen mich nicht mehr. Das ist das Ziel.',
  },
]

export default function ProcessTimeline() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="methode" className="relative py-20 md:py-28 bg-gradient-to-b from-midnight via-navy/50 to-midnight">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-teal font-medium">Mein Prozess</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4">
            Vier Phasen zur Veränderung
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Kein Schema F. Aber ein bewährtes System, das sich Ihnen anpasst.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Progress line (desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-glass-border">
            <motion.div
              className="h-full bg-gradient-to-r from-teal to-gold"
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                className="glass-card p-6 md:pt-16 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Phase indicator on line */}
                <div className="hidden md:flex absolute -top-5 left-6 w-10 h-10 rounded-full bg-midnight border-2 border-teal/40 items-center justify-center">
                  <span className="text-xs font-mono text-teal">{step.phase}</span>
                </div>
                <div className="md:hidden flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-teal bg-teal/10 px-2 py-1 rounded">{step.phase}</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                  <step.icon size={20} className="text-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
