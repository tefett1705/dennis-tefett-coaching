import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, ArrowRight, Users, Shield, TrendingUp } from 'lucide-react'

const featuredModules = [
  {
    icon: Users,
    title: 'Führung & Wirkung',
    count: '4 Impulse',
    href: '/akademie/fuehrung-und-wirkung',
  },
  {
    icon: Shield,
    title: 'Innere Stärke & Resilienz',
    count: '4 Impulse',
    href: '/akademie/innere-staerke-resilienz',
  },
  {
    icon: TrendingUp,
    title: 'Persönlichkeit & Wachstum',
    count: '3 Impulse',
    href: '/akademie/persoenlichkeit-wachstum',
  },
]

export default function AkademieTeaser() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-surface via-surface-alt/50 to-surface">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          className="glass-card p-8 md:p-12 relative overflow-hidden"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                <BookOpen size={20} className="text-teal" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold">Wissens-Akademie</h2>
                <p className="text-sm text-text-secondary">Impulse für Führung & persönliches Wachstum</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {featuredModules.map((mod, i) => (
                <motion.div
                  key={mod.title}
                  initial={{ y: 15 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  <Link
                    to={mod.href}
                    className="flex items-start gap-3 p-3 rounded-lg bg-glass-bg hover:bg-teal/5 transition-colors duration-300 group"
                  >
                    <mod.icon size={18} className="text-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium group-hover:text-teal transition-colors">{mod.title}</p>
                      <p className="text-xs text-text-secondary mt-0.5">{mod.count}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/akademie"
                className="px-6 py-3 bg-teal/10 border border-teal/30 text-teal rounded-full text-sm font-medium hover:bg-teal/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                <BookOpen size={16} />
                Akademie entdecken
                <ArrowRight size={14} />
              </Link>
              <p className="text-xs text-text-secondary/50">
                Kostenfrei und ohne Anmeldung zugänglich.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
