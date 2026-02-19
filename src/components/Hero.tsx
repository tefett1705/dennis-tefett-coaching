import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useMagneticButton } from '../hooks/useMagneticButton'
import portraitSuit from '../assets/images/dennis-schoenen-anzug.webp'

export default function Hero() {
  const { ref: btnRef, onMouseMove } = useMagneticButton<HTMLButtonElement>()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.4])

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-alt to-surface" />
      <div className="absolute top-0 right-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="max-w-2xl lg:max-w-[600px] order-last lg:order-first text-center lg:text-left">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.div
              className="h-px bg-gradient-to-r from-teal to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            />
            <span className="text-xs tracking-[0.25em] uppercase text-teal font-medium">
              Psychologische Exzellenz
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold leading-[1.1] tracking-tight mb-6"
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
          >
            Führung beginnt{' '}
            <span className="text-gradient-teal">im Kopf.</span>
            <br />
            Nicht im Kalender.
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 1.35 }}
          >
            Neurowissenschaftlich fundiertes Executive Coaching für
            Führungskräfte, die messbare Ergebnisse wollen, beruflich
            und privat.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <button
              ref={btnRef}
              onMouseMove={onMouseMove}
              onClick={() => scrollToSection('#kontakt')}
              className="btn-magnetic px-8 py-4 bg-teal text-midnight font-semibold rounded-full text-base hover:bg-teal/90 hover:shadow-lg hover:shadow-teal/20 transition-all duration-400 cursor-pointer"
            >
              Vertrauliches Erstgespräch
            </button>
            <button
              onClick={() => scrollToSection('#methode')}
              className="px-8 py-4 border border-glass-border text-text-secondary rounded-full text-base hover:border-teal/30 hover:text-teal transition-all duration-300 cursor-pointer"
            >
              So arbeite ich
            </button>
          </motion.div>

          {/* Credentials */}
          <motion.div
            className="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-wide text-text-secondary/70 justify-center lg:justify-start"
          >
            <span>Psychologe & Gesundheitsmanager</span>
            <span className="text-glass-border">|</span>
            <span>Tätig in den Neurowissenschaften</span>
            <span className="text-glass-border">|</span>
            <span>Unternehmer seit 2017</span>
          </motion.div>
        </div>

        {/* Portrait Image with parallax */}
        <motion.div
          className="relative order-first lg:order-last"
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden rounded-2xl max-w-[280px] mx-auto lg:max-w-[420px] lg:ml-auto lg:mx-0">
            <motion.div className="hidden lg:block" style={{ y: imageY, scale: imageScale }}>
              <img
                src={portraitSuit}
                alt="Dennis Tefett - Executive Coach"
                className="w-full h-auto object-cover aspect-[3/4]"
                decoding="async"
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>
            {/* Mobile image without parallax */}
            <div className="lg:hidden">
              <img
                src={portraitSuit}
                alt="Dennis Tefett - Executive Coach"
                className="w-full h-auto object-cover object-top aspect-[4/5]"
                decoding="async"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/20 to-transparent lg:from-surface/60 lg:via-transparent" />
            <motion.div
              className="absolute inset-0 bg-surface/0 hidden lg:block"
              style={{ opacity: overlayOpacity }}
            />
            {/* Animated corner accents */}
            <motion.div
              className="absolute bottom-4 left-4 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-teal/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            />
            <motion.div
              className="absolute top-4 right-4 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-gold/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 2.1 }}
            />
          </div>
          {/* Floating decorative elements - desktop only */}
          <motion.div
            className="absolute -bottom-4 -left-4 w-28 h-28 border-2 border-teal/10 rounded-2xl hidden lg:block"
            animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 border-2 border-gold/8 rounded-xl hidden lg:block"
            animate={{ y: [0, 6, 0], rotate: [0, -1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary/40 hover:text-teal transition-colors cursor-pointer"
        animate={{ y: [0, 6, 0] }}
        transition={{
          y: { delay: 2.2, duration: 2, repeat: Infinity },
        }}
        onClick={() => scrollToSection('#vertrauen')}
        aria-label="Nach unten scrollen"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  )
}
