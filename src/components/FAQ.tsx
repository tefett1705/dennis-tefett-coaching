import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Für wen ist Ihr Coaching NICHT geeignet?',
    answer: 'Mein Coaching ist nicht für Menschen, die eine schnelle Motivationsspritze suchen. Wenn Sie nach jemandem suchen, der Ihnen sagt, was Sie hören wollen, bin ich der Falsche. Ich arbeite mit Führungskräften, die bereit sind, ehrlich hinzuschauen und strukturiert an sich zu arbeiten.',
  },
  {
    question: 'Wie läuft das vertrauliche Erstgespräch ab?',
    answer: 'Das Erstgespräch ist kostenfrei, vertraulich und dauert etwa 30 Minuten. Wir klären, wo Sie stehen, was Sie erreichen wollen und ob mein Ansatz zu Ihnen passt. Kein Verkaufsgespräch, sondern eine ehrliche Standortbestimmung.',
  },
  {
    question: 'Was unterscheidet Sie von anderen Executive Coaches?',
    answer: 'Ich bin Psychologe und Gesundheitsmanager mit neurowissenschaftlichem Hintergrund, kein Business-Trainer mit Wochenend-Zertifikat. Meine Methoden basieren auf klinischer Psychologie und Neurowissenschaft. Gleichzeitig bin ich seit 2017 selbst Unternehmer. Ich verstehe den Druck und die Einsamkeit in der Führung aus eigener Erfahrung.',
  },
  {
    question: 'Wie schnell sehe ich Ergebnisse?',
    answer: 'Erste Klarheit entsteht oft schon im Erstgespräch. Strukturelle Veränderungen in Ihrem Führungsverhalten, Ihrer Wirkung und Ihren Entscheidungen zeigen sich typischerweise innerhalb der ersten 4–6 Wochen. Nachhaltige Transformation braucht 3–6 Monate.',
  },
  {
    question: 'Warum verkaufen Sie keine Stunden?',
    answer: 'Weil Ergebnisse nicht an Stunden hängen. Manchmal verändert ein einziges präzises Gespräch mehr als zehn Sessions Smalltalk. Meine Pakete sind ergebnisorientiert. Sie bezahlen für die Veränderung, nicht für meine Zeit im Kalender.',
  },
  {
    question: 'Arbeiten Sie auch mit Privatpersonen?',
    answer: 'Ja. Viele Führungskräfte kommen auch mit privaten Themen: Partnerschaft, Sinnfragen, persönliche Krisen. Führung und Persönlichkeit lassen sich nicht trennen. Mein Ansatz integriert beides.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-gradient-to-b from-midnight via-navy/30 to-midnight">
      <div className="max-w-3xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-teal font-medium">Häufige Fragen</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4">
            Klare Antworten
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer group"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm md:text-base font-medium pr-4 group-hover:text-teal transition-colors duration-300">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={18} className="text-text-secondary" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
