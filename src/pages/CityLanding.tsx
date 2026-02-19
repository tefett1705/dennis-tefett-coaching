import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowRight, Brain, Users, Target, Heart, Shield } from 'lucide-react'
import SEOHead, { serviceSchema } from '../components/SEOHead'
import Footer from '../components/Footer'

interface CityConfig {
  city: string
  region: string
  distance: string
  description: string
  lat: number
  lng: number
}

const cities: Record<string, CityConfig> = {
  essen: {
    city: 'Essen',
    region: 'Ruhrgebiet',
    distance: '20 km von Gladbeck',
    description: 'Als Psychologe und Executive Coach aus Gladbeck betreue ich regelmäßig Führungskräfte und Unternehmer aus Essen. Ob persönlich vor Ort oder per Videocall: Sie erhalten neurowissenschaftlich fundiertes Coaching auf höchstem Niveau.',
    lat: 51.4556,
    lng: 7.0116,
  },
  gelsenkirchen: {
    city: 'Gelsenkirchen',
    region: 'Ruhrgebiet',
    distance: '10 km von Gladbeck',
    description: 'Führungskräfte aus Gelsenkirchen profitieren von der Nähe zu meinem Standort in Gladbeck. Persönliches Coaching vor Ort oder flexibel per Videocall, mit neurowissenschaftlicher Fundierung und psychologischer Tiefe.',
    lat: 51.5177,
    lng: 7.0857,
  },
  bottrop: {
    city: 'Bottrop',
    region: 'Ruhrgebiet',
    distance: '8 km von Gladbeck',
    description: 'Bottrop und Gladbeck sind direkte Nachbarstädte. Für Führungskräfte und Unternehmer aus Bottrop biete ich schnelle Erreichbarkeit und erstklassiges Executive Coaching mit neurowissenschaftlichem Fundament.',
    lat: 51.5247,
    lng: 6.9286,
  },
  oberhausen: {
    city: 'Oberhausen',
    region: 'Ruhrgebiet',
    distance: '15 km von Gladbeck',
    description: 'Unternehmer und Führungskräfte aus Oberhausen finden in Gladbeck einen Coach, der ihre beruflichen Herausforderungen versteht. Psychologisch fundiert, ergebnisorientiert und auf Augenhöhe.',
    lat: 51.4963,
    lng: 6.8631,
  },
  bochum: {
    city: 'Bochum',
    region: 'Ruhrgebiet',
    distance: '25 km von Gladbeck',
    description: 'Auch Führungskräfte aus Bochum arbeiten mit mir zusammen. Per Videocall oder persönlich: mein neurowissenschaftlich fundiertes Coaching-Programm ist auf nachhaltige Ergebnisse ausgerichtet.',
    lat: 51.4818,
    lng: 7.2162,
  },
}

const services = [
  { icon: Brain, title: 'Executive Coaching', desc: 'Führungskompetenz, strategisches Denken und persönliche Wirksamkeit stärken.', href: '/fuehrungskraefte-coaching' },
  { icon: Target, title: 'Karriere-Coaching', desc: 'Berufliche Neuorientierung, klare Ziele und souveräne Entscheidungen.', href: '/karriere-coaching' },
  { icon: Heart, title: 'Life Coaching', desc: 'Klarheit, Lebensziele und bessere Work-Life-Balance.', href: '/life-coaching' },
  { icon: Shield, title: 'Stressmanagement', desc: 'Resilienz aufbauen, Burnout vorbeugen, unter Druck souverän führen.', href: '/stressmanagement-coaching' },
  { icon: Users, title: 'Teamcoaching', desc: 'Zusammenarbeit stärken, psychologische Sicherheit schaffen.', href: '/teamcoaching' },
]

export default function CityLanding({ slug }: { slug: string }) {
  const config = cities[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!config) return null

  const pageUrl = `/coaching-${slug}`

  return (
    <div className="min-h-screen bg-surface pb-20 md:pb-0">
      <SEOHead
        title={`Coaching in ${config.city} | Executive Coach & Psychologe | Dennis Tefett`}
        description={`Neurowissenschaftlich fundiertes Coaching für Führungskräfte in ${config.city}. Executive Coaching, Karriere-Coaching, Life Coaching und Stressmanagement. Psychologe Dennis Tefett, ${config.distance}.`}
        keywords={`Coaching ${config.city}, Executive Coaching ${config.city}, Führungskräfte Coaching ${config.city}, Business Coaching ${config.city}, Life Coaching ${config.city}, Coach ${config.region}`}
        canonical={`https://dennis-tefett.de${pageUrl}`}
        schema={[
          serviceSchema(
            `Executive Coaching in ${config.city}`,
            `Neurowissenschaftlich fundiertes Coaching für Führungskräfte in ${config.city}. Persönlichkeitsentwicklung, Stressmanagement und Karriere-Coaching.`,
            pageUrl
          ),
          {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Dennis Tefett Executive Coaching',
            description: `Coaching für Führungskräfte in ${config.city} und Umgebung`,
            url: `https://dennis-tefett.de${pageUrl}`,
            telephone: '+49-2043-9459054',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Marie-Curie-Weg 26a',
              addressLocality: 'Gladbeck',
              postalCode: '45966',
              addressRegion: 'Nordrhein-Westfalen',
              addressCountry: 'DE',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 51.5769,
              longitude: 6.9868,
            },
            areaServed: {
              '@type': 'City',
              name: config.city,
              geo: { '@type': 'GeoCoordinates', latitude: config.lat, longitude: config.lng },
            },
          },
        ]}
        breadcrumbs={[{ name: `Coaching in ${config.city}`, url: pageUrl }]}
      />

      {/* Hero */}
      <header className="pt-24 md:pt-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/50 to-surface" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal/3 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/25 bg-teal/10 mb-6"
            initial={{ y: 15 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MapPin size={16} className="text-teal" />
            <span className="text-xs tracking-[0.2em] uppercase text-teal font-semibold">{config.distance}</span>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-semibold leading-tight"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Coaching in {config.city}: Neurowissenschaftlich fundiert
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-text-secondary mt-4 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 15 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {config.description}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ y: 15 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/#kontakt"
              className="px-6 py-3 bg-teal text-midnight font-semibold rounded-full text-sm hover:bg-teal/90 transition-all duration-300 inline-flex items-center gap-2 justify-center"
            >
              <Calendar size={16} />
              Kostenloses Erstgespräch
            </Link>
            <Link
              to="/fuehrungskraefte-coaching"
              className="px-6 py-3 border border-glass-border text-text-secondary rounded-full text-sm hover:border-teal/30 hover:text-teal transition-all duration-300 inline-flex items-center gap-2 justify-center"
            >
              Mehr zu Executive Coaching
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            className="mt-6 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent max-w-md mx-auto"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>

        <div className="h-12 md:h-16" />
      </header>

      {/* Services */}
      <main className="max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 pb-20">
        <motion.div
          className="text-center mb-10"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            Coaching-Angebote für {config.city}
          </h2>
          <p className="text-text-secondary mt-3 max-w-lg mx-auto">
            Alle Leistungen sind persönlich vor Ort in Gladbeck oder per Videocall verfügbar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ y: 25 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={svc.href} className="glass-card p-6 block group hover:border-teal/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <svc.icon size={20} className="text-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-teal transition-colors">{svc.title}</h3>
                <p className="text-sm text-text-secondary">{svc.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Warum Dennis Tefett */}
        <motion.div
          className="mt-16 glass-card p-8 md:p-10"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-center">
            Warum Führungskräfte aus {config.city} mit mir arbeiten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Psychologe, nicht nur Coach', text: 'Als Psychologe unterliege ich der gesetzlichen Schweigepflicht. Das ist besonders für Führungskräfte und Personen des öffentlichen Lebens entscheidend.' },
              { title: 'Neurowissenschaftliche Fundierung', text: 'Meine Arbeit in den Neurowissenschaften gibt mir Werkzeuge, die über klassisches Coaching hinausgehen. Messbare Ergebnisse statt Motivationssprüche.' },
              { title: 'Unternehmer seit 2017', text: 'Ich kenne den Druck, die einsamen Entscheidungen und die Momente, in denen man sich fragt, ob man auf dem richtigen Weg ist.' },
              { title: `Flexibel erreichbar aus ${config.city}`, text: `Von ${config.city} aus erreichen Sie meinen Standort in Gladbeck in wenigen Minuten. Alternativ biete ich alle Coaching-Formate auch per Videocall an.` },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-teal flex-shrink-0 mt-2" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 glass-card p-8 md:p-10 text-center"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3">
            Bereit für den nächsten Schritt?
          </h3>
          <p className="text-text-secondary mb-6 max-w-md mx-auto">
            In einem vertraulichen Erstgespräch klären wir, wo Sie stehen und wie ich Sie unterstützen kann.
          </p>
          <Link
            to="/#kontakt"
            className="px-6 py-3 bg-teal text-midnight font-semibold rounded-full text-sm hover:bg-teal/90 transition-all duration-300 inline-flex items-center gap-2 justify-center"
          >
            <Calendar size={16} />
            Erstgespräch vereinbaren
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
