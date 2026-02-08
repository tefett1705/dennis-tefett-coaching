import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCountUp(end: number, duration: number, isInView: boolean) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true
    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return count
}

const stats = [
  { value: 200, suffix: '+', label: 'Coaching-Stunden', description: 'pro Jahr' },
  { value: 95, suffix: '%', label: 'Zielerreichung', description: 'messbar dokumentiert' },
  { value: 8, suffix: '+', label: 'Jahre Erfahrung', description: 'als Unternehmer & Coach' },
  { value: 48, suffix: 'h', label: 'Erste Ergebnisse', description: 'spürbar in Stunden' },
]

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Glowing dot above */}
              <motion.div
                className="w-2 h-2 rounded-full bg-teal mx-auto mb-4"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.12, type: 'spring' }}
              />
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-teal/20 blur-md"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: [0, 1.5, 1] } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              />

              <CountNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
              <p className="text-sm font-semibold text-text-primary mt-2">{stat.label}</p>
              <p className="text-xs text-text-secondary mt-1">{stat.description}</p>

              {/* Separator line (not on last item) */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-glass-border to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountNumber({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const count = useCountUp(value, 2, isInView)

  return (
    <div className="text-4xl md:text-5xl font-serif font-bold text-teal tabular-nums">
      {count}
      <span className="text-gold text-2xl md:text-3xl">{suffix}</span>
    </div>
  )
}
