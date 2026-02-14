import { motion } from 'framer-motion'
import { Check, ArrowRight, Download } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const packages = [
  {
    name: 'Clarity',
    subtitle: 'Diagnostik & Standortbestimmung',
    description: 'Ideal, wenn Sie zunächst Klarheit über Ihre Situation brauchen, bevor Sie große Entscheidungen treffen.',
    features: [
      'Psychologische Ist-Analyse',
      'Neurowissenschaftliches Profiling',
      'Stärken- & Blockaden-Mapping',
      'Strategische Handlungsempfehlung',
      'Dokumentierter Ergebnisbericht',
    ],
    result: 'Ergebnis: Klarheit über Ihren nächsten Schritt',
    accent: 'teal',
    featured: false,
  },
  {
    name: 'Signature',
    subtitle: 'Transformation & Neuausrichtung',
    description: 'Mein Kernprogramm. Für Führungskräfte, die eine messbare, nachhaltige Veränderung wollen.',
    features: [
      'Alles aus Clarity, plus:',
      'Individuelle Intervention-Strategie',
      'Regelmäßige 1:1 Sessions',
      'Zwischen-Diagnostik & Meilensteine',
      'Persönlicher Notfall-Zugang',
      'Zugang zum Client-Portal',
      'Audio-Materialien & Übungen',
    ],
    result: 'Ergebnis: Messbare Veränderung in Führung & Wirkung',
    accent: 'gold',
    featured: true,
  },
  {
    name: 'Partnership',
    subtitle: 'Langfristige Begleitung',
    description: 'Für Entscheider, die einen psychologisch versierten Sparringspartner auf Augenhöhe wollen.',
    features: [
      'Alles aus Signature, plus:',
      'Fortlaufende strategische Begleitung',
      'Priority-Zugang jederzeit',
      'Quartals-Reviews mit Diagnostik',
      'Persönlicher Entwicklungsplan',
      'Vertrauliche Board-Vorbereitung',
    ],
    result: 'Ergebnis: Kontinuierliche Exzellenz auf höchstem Niveau',
    accent: 'teal',
    featured: false,
  },
]

export default function Packages() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="angebot" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          className="text-center mb-14"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">Zusammenarbeit</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4">
            Drei Wege, mit mir zu arbeiten
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Sie zahlen nicht für Stunden. Sie investieren in Ergebnisse.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`glass-card p-7 relative ${
                pkg.featured ? 'lg:-mt-4 lg:mb-0 border-gold/30 bg-gold/[0.04]' : ''
              }`}
              initial={{ y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-7 px-3 py-1 bg-gold text-midnight text-xs font-semibold rounded-full">
                  Empfohlen
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-serif font-semibold ${
                  pkg.accent === 'gold' ? 'text-gradient-gold' : 'text-gradient-teal'
                }`}>
                  {pkg.name}
                </h3>
                <p className="text-sm text-text-secondary mt-1">{pkg.subtitle}</p>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={16} className={`flex-shrink-0 mt-0.5 ${
                      pkg.accent === 'gold' ? 'text-gold' : 'text-teal'
                    }`} />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={`text-sm font-medium mb-6 px-3 py-2 rounded-lg ${
                pkg.accent === 'gold' ? 'bg-gold/10 text-gold' : 'bg-teal/10 text-teal'
              }`}>
                {pkg.result}
              </div>

              <button
                onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  pkg.featured
                    ? 'bg-gold text-midnight hover:bg-gold/90'
                    : 'border border-glass-border text-text-secondary hover:border-teal/30 hover:text-teal'
                }`}
              >
                Erstgespräch vereinbaren
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Download CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="inline-flex items-center gap-3 glass-card px-6 py-3 text-sm text-text-secondary hover:text-teal hover:border-teal/30 transition-all duration-300 cursor-pointer">
            <Download size={16} />
            Angebotsunterlagen herunterladen (PDF)
          </button>
        </motion.div>
      </div>
    </section>
  )
}
