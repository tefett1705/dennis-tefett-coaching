import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TextSizeToggle from './TextSizeToggle'

const topicLinks = [
  { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
  { label: 'Life Coaching', href: '/life-coaching' },
  { label: 'Karriere-Coaching', href: '/karriere-coaching' },
  { label: 'Teamcoaching', href: '/teamcoaching' },
  { label: 'Stressmanagement', href: '/stressmanagement-coaching' },
  { label: 'Persönlichkeitsentwicklung', href: '/persoenlichkeitsentwicklung-erklaert' },
  { label: 'Coaching-Methoden', href: '/coaching-methoden' },
  { label: 'Selbstwirksamkeit', href: '/selbstwirksamkeit-staerken' },
  { label: 'Fokus & Klarheit', href: '/fokus-und-klarheit' },
  { label: 'Verhaltensänderung', href: '/nachhaltige-verhaltensaenderung' },
  { label: 'Teambuilding', href: '/teambuildingworkshop' },
  { label: 'Geschäftsplanung', href: '/strategische-geschaftsplanung' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative py-12 md:py-16 border-t border-glass-border">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div>
            <button onClick={scrollToTop} className="cursor-pointer">
              <span className="text-xl font-serif font-semibold text-text-primary">Dennis Tefett</span>
            </button>
            <p className="text-sm text-text-secondary mt-3 leading-relaxed max-w-xs">
              Neurowissenschaftlich fundiertes Executive Coaching. Psychologische Exzellenz für Führungskräfte.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-[0.2em] uppercase text-text-secondary/50 font-medium">Navigation</span>
            {[
              { label: 'Methode', href: '#methode' },
              { label: 'Ergebnisse', href: '#ergebnisse' },
              { label: 'Über mich', href: '#ueber-mich' },
              { label: 'Angebot', href: '#angebot' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Kontakt', href: '#kontakt' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-teal transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/kontakt"
              className="text-sm text-teal font-medium hover:text-teal/80 transition-colors duration-300"
            >
              Kontaktformular
            </Link>
            <Link
              to="/termin-buchen"
              className="text-sm text-teal font-medium hover:text-teal/80 transition-colors duration-300"
            >
              Termin buchen
            </Link>
          </div>

          {/* Topics */}
          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-[0.2em] uppercase text-text-secondary/50 font-medium">Themen</span>
            <Link
              to="/akademie"
              className="text-sm text-teal font-medium hover:text-teal/80 transition-colors duration-300"
            >
              Wissens-Akademie
            </Link>
            <Link
              to="/selbsttest"
              className="text-sm text-gold font-medium hover:text-gold/80 transition-colors duration-300"
            >
              Führungsprofil-Analyse
            </Link>
            <Link
              to="/persoenlichkeitstest"
              className="text-sm text-gold font-medium hover:text-gold/80 transition-colors duration-300"
            >
              Persönlichkeitstest
            </Link>
            {topicLinks.slice(0, 6).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-text-secondary hover:text-teal transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact + More Topics */}
          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-[0.2em] uppercase text-text-secondary/50 font-medium">Kontakt</span>
            <p className="text-sm text-text-secondary">Dennis Tefett</p>
            <p className="text-sm text-text-secondary">Marie-Curie-Weg 26a</p>
            <p className="text-sm text-text-secondary">45966 Gladbeck</p>
            <a href="https://www.dennis-tefett.de" rel="noopener noreferrer" className="text-sm text-teal hover:text-teal/80 transition-colors mt-1">
              www.dennis-tefett.de
            </a>
          </div>
        </div>

        {/* Additional topic links row for SEO */}
        <div className="mt-8 pt-6 border-t border-glass-border">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {[
              { label: 'Führung & Wirkung', href: '/akademie/fuehrung-und-wirkung' },
              { label: 'Innere Stärke & Resilienz', href: '/akademie/innere-staerke-resilienz' },
              { label: 'Persönlichkeit & Wachstum', href: '/akademie/persoenlichkeit-wachstum' },
              { label: 'Strategische Klarheit', href: '/akademie/strategische-klarheit' },
              { label: 'Kommunikation & Beziehung', href: '/akademie/kommunikation-beziehung' },
              ...topicLinks.slice(6),
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs text-text-secondary/40 hover:text-teal transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-8 pt-6 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-text-secondary/40">
            &copy; {new Date().getFullYear()} Dennis Tefett. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-secondary/40">
            <TextSizeToggle />
            <span className="w-px h-3.5 bg-glass-border" />
            <Link to="/datenschutz" className="hover:text-text-secondary transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-text-secondary transition-colors">AGB</Link>
            <Link to="/impressum" className="hover:text-text-secondary transition-colors">Impressum</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
