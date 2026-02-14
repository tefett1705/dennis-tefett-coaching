import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldCheck, RefreshCw, Banknote, ArrowRight } from 'lucide-react'

export default function GuaranteeBanner() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-teal/[0.03] to-surface" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          className="glass-card border-teal/20 bg-teal/[0.03] p-8 md:p-12 relative overflow-hidden"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-teal/5 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/25 bg-teal/10">
                <ShieldCheck size={16} className="text-teal" />
                <span className="text-xs tracking-[0.2em] uppercase text-teal font-semibold">Mein Versprechen</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-center mb-4"
              initial={{ y: 15 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              100 % Geld-zurück-Garantie
            </motion.h2>

            <motion.p
              className="text-text-secondary text-center max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed"
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Coaching braucht Zeit, um zu wirken. Wenn Sie bis zur nächsten Sitzung
              keinen Fortschritt spüren, zahlen Sie für die letzte Sitzung nichts.
              So einfach ist das. Denn ich bin überzeugt: Exzellentes Coaching liefert Ergebnisse.
            </motion.p>

            {/* How it works */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8"
              initial={{ y: 15 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                {
                  icon: ShieldCheck,
                  title: 'Meilensteine definiert',
                  text: 'Zu Beginn jeder Sitzung legen wir gemeinsam konkrete Ziele fest.',
                },
                {
                  icon: RefreshCw,
                  title: 'Ehrliche Bewertung',
                  text: 'Zu Beginn der Folgesitzung prüfen wir gemeinsam: Hat sich etwas bewegt?',
                },
                {
                  icon: Banknote,
                  title: 'Ihr Wahlrecht',
                  text: 'Kein Fortschritt? Kostenfreie Wiederholung oder volles Geld zurück.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-glass-bg border border-glass-border">
                  <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon size={18} className="text-teal" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA + AGB Link */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-teal text-midnight font-semibold rounded-full text-sm hover:bg-teal/90 transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
              >
                Risikofrei starten
                <ArrowRight size={16} />
              </button>
              <Link
                to="/agb#zufriedenheitsgarantie"
                className="text-sm text-text-secondary hover:text-teal transition-colors underline underline-offset-2"
              >
                Details in § 7 unserer AGB
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
