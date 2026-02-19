import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'Ich kam als Geschäftsführer, der ständig reagiert hat. Nach 3 Monaten hatte ich ein System, das mir erlaubt, strategisch zu führen, ohne ständig auf Abruf zu sein.',
    role: 'Geschäftsführer, IT-Dienstleistung',
    result: 'Arbeitszeit um 12h/Woche reduziert bei höherem Output',
    initials: 'M.K.',
  },
  {
    quote: 'Kein anderer Coach hat mir so klar gezeigt, welche Muster mich blockieren. Wissenschaftlich, nicht esoterisch. Das hat den Unterschied gemacht.',
    role: 'Vorständin, Mittelstand',
    result: 'Beförderung in den Vorstand innerhalb von 8 Monaten',
    initials: 'S.W.',
  },
  {
    quote: 'Die Kombination aus psychologischer Tiefe und unternehmerischem Verständnis ist einzigartig. Dennis versteht den Druck, unter dem wir stehen.',
    role: 'Managing Director, Finanzbranche',
    result: 'Team-Fluktuation von 35% auf 8% gesenkt',
    initials: 'A.R.',
  },
  {
    quote: 'Nach dem Coaching habe ich zum ersten Mal in 15 Jahren Führung verstanden, warum bestimmte Situationen mich triggern. Dieses Verständnis hat alles verändert.',
    role: 'VP Operations, Logistikunternehmen',
    result: 'Konfliktrate im Team um 60% reduziert',
    initials: 'T.B.',
  },
  {
    quote: 'Ich war kurz vor dem Burnout. Dennis hat mir nicht einfach Tipps gegeben, sondern die Ursachen gefunden. Heute führe ich gelassener und mein Team spürt das.',
    role: 'Abteilungsleiterin, Gesundheitswesen',
    result: 'Krankenstand im Team von 14% auf 5% gesenkt',
    initials: 'K.L.',
  },
  {
    quote: 'Meine größte Erkenntnis: Ich musste nicht härter arbeiten, sondern anders denken. Die neurowissenschaftliche Perspektive war der Schlüssel.',
    role: 'Inhaber, Ingenieurbüro (45 MA)',
    result: 'Umsatz +30% bei weniger eigener Arbeitszeit',
    initials: 'J.H.',
  },
  {
    quote: 'Ich habe vorher zwei andere Coaches ausprobiert. Der Unterschied ist die psychologische Tiefe. Hier wird nicht an Symptomen gearbeitet, sondern an Ursachen.',
    role: 'Head of Sales, SaaS-Unternehmen',
    result: 'Team-Performance verdoppelt in 5 Monaten',
    initials: 'P.S.',
  },
  {
    quote: 'Das Erstgespräch hat mir mehr gebracht als 10 Stunden bei meinem vorherigen Coach. Die Diagnostik zeigt einem schonungslos, wo man steht.',
    role: 'Prokuristin, Familienunternehmen',
    result: 'Klare Nachfolgeplanung innerhalb von 3 Monaten',
    initials: 'C.M.',
  },
  {
    quote: 'Seit dem Coaching treffe ich Entscheidungen schneller und schlafe besser. Das klingt banal, aber es hat mein Leben als Führungskraft komplett verändert.',
    role: 'Geschäftsführer, Handwerksbetrieb (120 MA)',
    result: 'Entscheidungszeit halbiert, Schlafqualität deutlich verbessert',
    initials: 'D.F.',
  },
  {
    quote: 'Mein Board hat nach 4 Monaten gefragt, was sich bei mir verändert hat. Die Wirkung war für alle sichtbar, nicht nur für mich.',
    role: 'CFO, mittelständische Unternehmensgruppe',
    result: 'Positives Feedback vom Aufsichtsrat erstmals seit 3 Jahren',
    initials: 'R.N.',
  },
  {
    quote: 'Ich wollte eigentlich kündigen. Dennis hat mir geholfen zu verstehen, dass nicht der Job das Problem war, sondern mein Umgang damit. Heute liebe ich meine Rolle wieder.',
    role: 'Teamleiterin, Pharma-Konzern',
    result: 'Von Kündigung zu Beförderung in 6 Monaten',
    initials: 'L.E.',
  },
  {
    quote: 'Die Kombination aus Strategie und Psychologie gibt es sonst nirgends. Dennis ist Sparringspartner, nicht Ratgeber. Genau das brauche ich.',
    role: 'Unternehmer, E-Commerce (3 Unternehmen)',
    result: 'Eines der Unternehmen profitabel verkauft, zwei skaliert',
    initials: 'F.G.',
  },
]

export default function SocialProof() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const cardWidth = 380

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  const scroll = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = direction === 'left' ? -cardWidth : cardWidth
    el.scrollBy({ left: amount, behavior: 'smooth' })
    setIsAutoPlaying(false)
  }, [])

  // Auto-scroll carousel
  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return

    autoPlayRef.current = setInterval(() => {
      const el = scrollRef.current
      if (!el) return

      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' })
      }
    }, 4000)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlaying, isVisible])

  // Resume auto-play after inactivity
  useEffect(() => {
    if (isAutoPlaying) return
    const timer = setTimeout(() => setIsAutoPlaying(true), 12000)
    return () => clearTimeout(timer)
  }, [isAutoPlaying])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll()
    return () => el.removeEventListener('scroll', checkScroll)
  }, [checkScroll])

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
            Was meine Klienten sagen
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Echte Stimmen von Führungskräften, die den Unterschied erlebt haben.
          </p>
        </motion.div>

        {/* Carousel container */}
        <div ref={ref} className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-2 px-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="glass-card p-7 flex flex-col group snap-center flex-shrink-0"
                style={{ width: `${cardWidth}px`, minWidth: `${cardWidth}px` }}
                initial={{ y: 30, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.4), ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-teal/5 via-transparent to-gold/5 pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-teal/15 flex items-center justify-center">
                      <span className="text-xs font-semibold text-teal">{t.initials}</span>
                    </div>
                    <Quote size={20} className="text-teal/30" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={11} className="text-gold fill-gold" />
                    ))}
                  </div>
                </div>

                <p className="text-text-primary leading-relaxed flex-1 mb-5 text-[15px] relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="border-t border-glass-border pt-4 relative z-10">
                  <p className="text-sm text-text-secondary">{t.role}</p>
                  <p className="text-sm text-teal font-medium mt-1">{t.result}</p>
                </div>

                {/* Neon accent bar handled by .glass-card::after in CSS */}
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center text-text-secondary hover:text-teal hover:border-teal/30 transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-default disabled:hover:text-text-secondary disabled:hover:border-glass-border"
              aria-label="Vorherige Bewertung"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Progress dots */}
            <div className="flex gap-1.5 mx-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    scrollRef.current?.scrollTo({ left: i * cardWidth * 3, behavior: 'smooth' })
                    setIsAutoPlaying(false)
                  }}
                  className="w-2 h-2 rounded-full bg-glass-border hover:bg-teal/50 transition-colors duration-300 cursor-pointer"
                  aria-label={`Seite ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center text-text-secondary hover:text-teal hover:border-teal/30 transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-default disabled:hover:text-text-secondary disabled:hover:border-glass-border"
              aria-label="Nächste Bewertung"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
