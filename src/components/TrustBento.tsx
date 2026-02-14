import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, Target, BarChart3, Brain, Award } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useRef, useState, useEffect } from 'react'
import logoImage from '../assets/images/Logo-Bild-Dennis-Tefett.webp'

const trustItems = [
  {
    icon: Shield,
    title: 'Absolute Diskretion',
    description: 'Jedes Gespräch unterliegt meiner psychologischen Schweigepflicht. Ihre Themen bleiben Ihre Themen.',
    span: 'md:col-span-2',
  },
  {
    icon: Brain,
    title: 'Wissenschaftlich fundiert',
    description: 'Methoden aus Neurowissenschaft und klinischer Psychologie. Keine Motivationsfloskeln.',
    span: '',
  },
  {
    icon: Target,
    title: 'Ergebnisorientiert',
    description: 'Sie zahlen nicht für Zeit, sondern für messbare Veränderung.',
    span: '',
  },
  {
    icon: BarChart3,
    title: 'Strukturierter Prozess',
    description: 'Klare Diagnostik, definierte Meilensteine, nachvollziehbare Fortschritte.',
    span: '',
  },
  {
    icon: Award,
    title: 'Breite Expertise',
    description: 'Als Psychologe, Gesundheitsmanager und Unternehmer mit neurowissenschaftlichem Hintergrund kenne ich beide Seiten.',
    span: 'md:col-span-2',
  },
]

export default function TrustBento() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const logoRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: logoRef,
    offset: ['start end', 'end start'],
  })
  const logoY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [40, -40])
  const textY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [30, -20])

  return (
    <section id="vertrauen" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          className="text-center mb-14"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-teal font-medium">Vertrauen & Kompetenz</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4">
            Warum Führungskräfte mit mir arbeiten
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              className={`glass-card p-6 md:p-8 group ${item.span}`}
              initial={{ y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors duration-300">
                <item.icon size={20} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Logo image - full width, parallax on desktop only */}
        <div ref={logoRef} className="mt-8 relative rounded-2xl overflow-hidden">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image with parallax on desktop, static on mobile */}
            <motion.div style={{ y: logoY }} className="relative">
              <img
                src={logoImage}
                alt="Zusammenarbeit und Vertrauen"
                className="w-full h-auto object-contain rounded-2xl"
                fetchPriority="high"
                decoding="async"
              />
            </motion.div>

            {/* Gradient overlays - softer on mobile for better image visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface/70 md:from-surface/80 via-surface/30 md:via-surface/40 to-transparent rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/70 md:from-surface/60 via-transparent to-surface/10 md:to-surface/20 rounded-2xl" />

            {/* Text overlay - positioned below image on mobile, overlaid on desktop */}
            <motion.div
              className="absolute bottom-0 left-0 p-5 sm:p-8 md:p-12 lg:p-16 max-w-lg"
              style={{ y: textY }}
            >
              <motion.span
                className="text-xs tracking-[0.25em] uppercase text-gold font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Zusammenarbeit auf Augenhöhe
              </motion.span>
              <motion.h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mt-3 mb-3 md:mb-4 text-text-primary"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Vertrauen ist die Basis jeder Veränderung
              </motion.h3>
              <motion.p
                className="text-text-secondary leading-relaxed text-sm md:text-base"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Meine Klienten schätzen die Kombination aus wissenschaftlicher Präzision und menschlicher Nähe.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
