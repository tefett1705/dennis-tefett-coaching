import { motion } from 'framer-motion'
import { Check, ArrowRight, Download, Crown, Sparkles } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { generateOfferPDF } from '../utils/generateOfferPDF'

const packages = [
  {
    name: 'Clarity',
    subtitle: 'Diagnostik & Standortbestimmung',
    description: 'Ihr erster Schritt. Fundierte psychologische Analyse, bevor Sie große Entscheidungen treffen. Für Führungskräfte, die Klarheit wollen, nicht Meinungen.',
    price: '2.900',
    priceNote: 'Einmalig',
    duration: '2 intensive Sessions + Ergebnisbericht',
    features: [
      'Psychologische Ist-Analyse (validierte Diagnostik)',
      'Neurowissenschaftliches Führungsprofil',
      'Stärken- und Blockaden-Mapping',
      'Strategische Handlungsempfehlung',
      'Dokumentierter Ergebnisbericht (20+ Seiten)',
    ],
    result: 'Ergebnis: Klarheit über Ihren nächsten Schritt',
    accent: 'teal',
    featured: false,
  },
  {
    name: 'Signature',
    subtitle: 'Transformation & Neuausrichtung',
    description: 'Mein Kernprogramm. 3 Monate intensive Zusammenarbeit für Führungskräfte, die eine messbare, nachhaltige Veränderung wollen. Keine Theorie, sondern Ergebnisse.',
    price: '7.500',
    priceNote: '3 Monate',
    duration: '12 Sessions + laufende Begleitung',
    features: [
      'Alles aus Clarity, plus:',
      'Individuelle Interventionsstrategie',
      'Wöchentliche 1:1 Sessions (60 Min.)',
      'Zwischen-Diagnostik nach 6 Wochen',
      'Persönlicher Notfall-Zugang (24h)',
      'Zugang zum exklusiven Client-Portal',
      'Audio-Materialien und Praxisübungen',
    ],
    result: 'Ergebnis: Messbare Veränderung in Führung & Wirkung',
    accent: 'gold',
    featured: true,
  },
  {
    name: 'Partnership',
    subtitle: 'Langfristige Exzellenz',
    description: 'Für Entscheider, die einen psychologisch versierten Sparringspartner auf Augenhöhe wollen. Kontinuierliche Begleitung auf höchstem Niveau.',
    price: '3.500',
    priceNote: 'pro Monat',
    duration: 'Mindestlaufzeit 6 Monate',
    features: [
      'Alles aus Signature, plus:',
      'Fortlaufende strategische Begleitung',
      'Priority-Zugang zu jeder Zeit',
      'Quartals-Reviews mit erneuter Diagnostik',
      'Persönlicher Entwicklungsplan (fortlaufend)',
      'Vertrauliche Board- und Krisenvorbereitung',
    ],
    result: 'Ergebnis: Kontinuierliche Exzellenz auf höchstem Niveau',
    accent: 'teal',
    featured: false,
  },
]

export default function Packages() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  const handleDownloadPDF = () => {
    generateOfferPDF()
  }

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
            Sie investieren nicht in Stunden. Sie investieren in Ergebnisse, die bleiben.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`glass-card p-7 relative overflow-visible ${
                pkg.featured ? 'lg:-mt-4 lg:mb-0 border-gold/30 bg-gold/[0.04] glass-card-gold' : ''
              }`}
              initial={{ y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-7 px-3 py-1 bg-gold text-midnight text-xs font-semibold rounded-full inline-flex items-center gap-1.5">
                  <Crown size={12} />
                  Meistgebucht
                </div>
              )}

              <div className="mb-5">
                <h3 className={`text-2xl font-serif font-semibold ${
                  pkg.accent === 'gold' ? 'text-gradient-gold' : 'text-gradient-teal'
                }`}>
                  {pkg.name}
                </h3>
                <p className="text-sm text-text-secondary mt-1">{pkg.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-5 pb-5 border-b border-glass-border">
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-serif font-bold ${
                    pkg.accent === 'gold' ? 'text-gold' : 'text-teal'
                  }`}>
                    {pkg.price} €
                  </span>
                  <span className="text-xs text-text-secondary ml-1">{pkg.priceNote}</span>
                </div>
                <p className="text-xs text-text-secondary/60 mt-1">{pkg.duration}</p>
                <p className="text-xs text-text-secondary/40 mt-0.5">zzgl. MwSt.</p>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-5">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={16} className={`flex-shrink-0 mt-0.5 ${
                      pkg.accent === 'gold' ? 'text-gold' : 'text-teal'
                    }`} />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={`text-sm font-medium mb-5 px-3 py-2 rounded-lg ${
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

        {/* ROI argument + Download */}
        <motion.div
          className="mt-12 glass-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center md:text-left">
            <p className="text-text-primary font-medium mb-1">
              Ihre Investition rechnet sich.
            </p>
            <p className="text-sm text-text-secondary">
              Die durchschnittliche Amortisation liegt bei 8 Wochen. Detaillierte Informationen zu allen Paketen finden Sie in unserer Broschüre.
            </p>
          </div>
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-3 px-6 py-3 text-sm text-text-secondary hover:text-teal border border-glass-border hover:border-teal/30 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0 glass-card-no-bar"
          >
            <Download size={16} />
            Angebotsbroschüre (PDF)
          </button>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-text-secondary/50"
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <span className="flex items-center gap-1.5">
            <Sparkles size={12} className="text-teal/40" />
            100 % Geld-zurück-Garantie
          </span>
          <span>Kostenloses Erstgespräch (30 Min.)</span>
          <span>Steuerlich absetzbar als Fortbildung</span>
        </motion.div>
      </div>
    </section>
  )
}
