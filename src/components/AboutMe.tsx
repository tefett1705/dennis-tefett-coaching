import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import portraitImage from '../assets/images/dennis-schick.webp'
import familyImage from '../assets/images/dennis-und-familie.webp'

export default function AboutMe() {
  const { ref } = useScrollReveal<HTMLDivElement>()
  const portraitRef = useRef<HTMLDivElement>(null)
  const familyRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: portraitProgress } = useScroll({
    target: portraitRef,
    offset: ['start end', 'end start'],
  })
  const { scrollYProgress: familyProgress } = useScroll({
    target: familyRef,
    offset: ['start end', 'end start'],
  })

  const portraitY = useTransform(portraitProgress, [0, 1], [50, -50])
  const portraitScale = useTransform(portraitProgress, [0, 0.5], [1.1, 1])
  const familyY = useTransform(familyProgress, [0, 1], [40, -40])
  const familyScale = useTransform(familyProgress, [0, 0.5], [1.08, 1])
  const textSlideIn = useTransform(portraitProgress, [0, 0.4], [60, 0])
  const textFade = useTransform(portraitProgress, [0, 0.35], [0, 1])

  return (
    <section id="ueber-mich" className="relative py-20 md:py-28 bg-gradient-to-b from-surface via-surface-alt/30 to-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-teal font-medium">Über mich</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4">
            Der Mensch hinter der Methode
          </h2>
        </motion.div>

        {/* Main portrait + text */}
        <div ref={portraitRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Portrait with parallax */}
          <motion.div
            className="relative"
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <motion.div style={{ y: portraitY, scale: portraitScale }}>
                <img
                  src={portraitImage}
                  alt="Dennis Tefett - Executive Coach"
                  className="w-full h-auto object-cover aspect-[3/4]"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-transparent"
              />
              {/* Animated accent line */}
              <motion.div
                className="absolute bottom-0 right-0 w-1 bg-gradient-to-t from-teal to-transparent"
                initial={{ height: 0 }}
                whileInView={{ height: '40%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            {/* Decorative accents with float animation */}
            <motion.div
              className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-teal/20 rounded-2xl -z-10"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -top-3 -left-3 w-16 h-16 border-2 border-gold/15 rounded-xl -z-10"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Text content with scroll-linked slide-in */}
          <motion.div className="text-center lg:text-left" style={{ x: textSlideIn, opacity: textFade }}>
            <motion.h3
              className="text-2xl md:text-3xl font-serif font-semibold mb-6"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Dennis Tefett
            </motion.h3>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <motion.p
                initial={{ y: 15 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Als Psychologe und Gesundheitsmanager verbinde ich wissenschaftliche Tiefe mit unternehmerischer Praxis. Meine Arbeit in den Neurowissenschaften gibt mir Werkzeuge an die Hand, die über klassisches Coaching hinausgehen.
              </motion.p>
              <motion.p
                initial={{ y: 15 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Seit 2017 bin ich selbst Unternehmer. Ich kenne den Druck, die einsamen Entscheidungen und die Momente, in denen man sich fragt, ob man auf dem richtigen Weg ist. Genau deshalb arbeite ich anders als die meisten Coaches: ergebnisorientiert, direkt und auf Augenhöhe.
              </motion.p>
              <motion.p
                initial={{ y: 15 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Mein Ansatz ist nicht, Ihnen zu sagen, was Sie hören wollen. Sondern Ihnen die psychologische Klarheit zu geben, die Sie brauchen, um die richtigen Entscheidungen zu treffen. Beruflich und privat.
              </motion.p>
            </div>

            {/* Credentials list */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {[
                'Psychologe',
                'Gesundheitsmanager',
                'Tätig in den Neurowissenschaften',
                'Unternehmer seit 2017',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ x: 20 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-teal flex-shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1, type: 'spring' }}
                  />
                  <span className="text-sm text-text-primary">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Personal section with family - side by side */}
        <div ref={familyRef} className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ x: -40 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h3
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-6"
              initial={{ y: 25 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Führung und <span className="text-gradient-gold">Persönlichkeit</span> lassen sich nicht trennen
            </motion.h3>
            <motion.p
              className="text-text-secondary leading-relaxed"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              Viele meiner Klienten kommen mit beruflichen Themen und merken schnell, dass die wirklichen Hebel oft im Privaten liegen. Wer privat im Reinen ist, führt anders. Klarer. Ruhiger. Wirksamer.
            </motion.p>
            <motion.div
              className="mt-6 h-px bg-gradient-to-r from-gold/40 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* Family image - fully visible */}
          <motion.div
            className="relative"
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <motion.div style={{ y: familyY, scale: familyScale }}>
                <img
                  src={familyImage}
                  alt="Dennis Tefett mit Familie"
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
              {/* Very subtle gradient at bottom only */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-surface/30 to-transparent" />
              {/* Animated gold accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            {/* Decorative accents */}
            <motion.div
              className="absolute -bottom-3 -left-3 w-24 h-24 border-2 border-gold/15 rounded-2xl -z-10"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -top-3 -right-3 w-16 h-16 border-2 border-teal/10 rounded-xl -z-10"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
