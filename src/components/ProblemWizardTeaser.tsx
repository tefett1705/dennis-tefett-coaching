import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Clock, Compass, Lightbulb } from 'lucide-react'
import complexityImage from '../assets/images/Coaching Bild Klient überlegt.webp'

const options = [
  {
    id: 'druck',
    icon: Clock,
    label: 'Permanenter Druck',
    description: 'Sie funktionieren, aber spüren, dass es auf Dauer nicht trägt.',
    recommendation: 'Mein Resilience-Framework hilft Ihnen, unter Druck leistungsfähig zu bleiben, ohne sich aufzureiben.',
    color: 'teal',
  },
  {
    id: 'klarheit',
    icon: Compass,
    label: 'Fehlende Klarheit',
    description: 'Zu viele Optionen, zu wenig innere Richtung. Entscheidungen kosten Kraft.',
    recommendation: 'Mit neurowissenschaftlicher Diagnostik finden wir Ihren inneren Kompass. Nicht als Metapher, sondern als System.',
    color: 'gold',
  },
  {
    id: 'wirkung',
    icon: Lightbulb,
    label: 'Wirkung steigern',
    description: 'Sie leisten viel, aber Ihre Außenwirkung spiegelt es nicht wider.',
    recommendation: 'Executive Presence entsteht nicht durch Tricks, sondern durch psychologische Kongruenz. Das erarbeiten wir.',
    color: 'teal',
  },
]

export default function ProblemWizardTeaser() {
  const [selected, setSelected] = useState<string | null>(null)
  const active = options.find((o) => o.id === selected)
  const imageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.02])
  const textX = useTransform(scrollYProgress, [0, 0.5], [40, 0])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        {/* Image + heading with parallax */}
        <div ref={imageRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div style={{ y: imageY, scale: imageScale }}>
              <img
                src={complexityImage}
                alt="Von Komplexität zu Klarheit"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            {/* Animated gradient that reveals on scroll */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-midnight/60 via-midnight/20 to-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            {/* Teal accent line */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-teal to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: '60%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          <motion.div
            className="text-left"
            style={{ x: textX, opacity: textOpacity }}
          >
            <motion.span
              className="text-xs tracking-[0.25em] uppercase text-gold font-medium inline-block"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ihr Ausgangspunkt
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Was ist gerade Ihre größte Hürde?
            </motion.h2>
            <motion.p
              className="text-text-secondary max-w-lg"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Wählen Sie aus, und ich zeige Ihnen, wie ich konkret ansetze.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
          {options.map((opt, i) => (
            <motion.button
              key={opt.id}
              onClick={() => setSelected(selected === opt.id ? null : opt.id)}
              className={`glass-card p-6 text-left cursor-pointer transition-all duration-400 ${
                selected === opt.id
                  ? opt.color === 'gold'
                    ? 'border-gold/40 bg-gold/8'
                    : 'border-teal/40 bg-teal/8'
                  : ''
              }`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                opt.color === 'gold' ? 'bg-gold/10' : 'bg-teal/10'
              }`}>
                <opt.icon size={20} className={opt.color === 'gold' ? 'text-gold' : 'text-teal'} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{opt.label}</h3>
              <p className="text-text-secondary text-sm">{opt.description}</p>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              className="mt-8 max-w-2xl mx-auto glass-card p-8 text-center"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-text-primary leading-relaxed mb-6">{active.recommendation}</p>
              <button
                onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-teal text-midnight font-semibold rounded-full text-sm hover:bg-teal/90 transition-all duration-300 cursor-pointer"
              >
                Darüber sprechen
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
