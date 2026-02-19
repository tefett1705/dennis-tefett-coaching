import { motion } from 'framer-motion'
import { type LucideIcon, CheckCircle } from 'lucide-react'

/* ── Benefit Cards Grid ── */
interface BenefitCard {
  icon: LucideIcon
  title: string
  text: string
}

export function BenefitGrid({ items, columns = 3 }: { items: BenefitCard[]; columns?: 2 | 3 }) {
  const colClass = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
  return (
    <div className={`grid grid-cols-1 ${colClass} gap-4 my-10`}>
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          className="glass-card p-6 group"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-3 group-hover:bg-teal/20 transition-colors">
            <item.icon size={20} className="text-teal" />
          </div>
          <h3 className="text-base font-semibold text-text-primary mb-2">{item.title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
        </motion.div>
      ))}
    </div>
  )
}

/* ── Numbered Steps ── */
interface Step {
  title: string
  text: string
}

export function NumberedSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="my-10 space-y-0">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          className="flex gap-5 py-6 border-b border-glass-border last:border-b-0"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-teal/30 flex items-center justify-center">
            <span className="text-lg font-serif font-bold text-teal">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-1">{step.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{step.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* ── Stat Highlights ── */
interface Stat {
  value: string
  label: string
}

export function StatHighlights({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="glass-card p-5 text-center"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <div className="text-2xl md:text-3xl font-serif font-bold text-teal">{stat.value}</div>
          <div className="text-xs text-text-secondary mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

/* ── Checklist ── */
export function Checklist({ items, color = 'teal' }: { items: string[]; color?: 'teal' | 'gold' }) {
  const colorClass = color === 'gold' ? 'text-gold' : 'text-teal'
  return (
    <div className="my-6 space-y-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="flex items-start gap-3"
          initial={{ x: -10 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.06 }}
        >
          <CheckCircle size={18} className={`${colorClass} flex-shrink-0 mt-0.5`} />
          <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
        </motion.div>
      ))}
    </div>
  )
}

/* ── Quote Block ── */
export function QuoteBlock({ text, author }: { text: string; author?: string }) {
  return (
    <motion.div
      className="my-10 relative pl-6 border-l-3 border-teal"
      initial={{ x: -15 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg md:text-xl font-serif italic text-text-primary leading-relaxed">
        &bdquo;{text}&ldquo;
      </p>
      {author && <p className="text-sm text-text-secondary mt-3">— {author}</p>}
    </motion.div>
  )
}

/* ── Highlight Box (enhanced) ── */
export function HighlightBox({ title, children, color = 'teal' }: { title: string; children: React.ReactNode; color?: 'teal' | 'gold' }) {
  const borderColor = color === 'gold' ? 'border-gold/30' : 'border-teal/30'
  const bgColor = color === 'gold' ? 'bg-gold/5' : 'bg-teal/5'
  return (
    <motion.div
      className={`my-10 glass-card p-6 md:p-8 ${borderColor} ${bgColor}`}
      initial={{ y: 15 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-serif font-semibold text-text-primary mb-3">{title}</h3>
      <div className="text-sm text-text-secondary leading-relaxed">{children}</div>
    </motion.div>
  )
}

/* ── Section Header ── */
export function SectionHeader({ tag, title, text }: { tag?: string; title: string; text?: string }) {
  return (
    <motion.div
      className="my-12 first:mt-0"
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {tag && <span className="text-xs tracking-[0.2em] uppercase text-teal font-medium">{tag}</span>}
      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-text-primary mt-2 mb-3">{title}</h2>
      {text && <p className="text-text-secondary leading-relaxed max-w-2xl">{text}</p>}
      <div className="mt-4 h-px bg-gradient-to-r from-teal/30 to-transparent max-w-[200px]" />
    </motion.div>
  )
}

/* ── Comparison Table ── */
interface ComparisonRow {
  aspect: string
  before: string
  after: string
}

export function ComparisonTable({ rows, beforeLabel = 'Vorher', afterLabel = 'Nachher' }: { rows: ComparisonRow[]; beforeLabel?: string; afterLabel?: string }) {
  return (
    <div className="my-10 overflow-x-auto rounded-xl border border-glass-border">
      <div className="grid grid-cols-3 bg-glass-bg text-xs uppercase tracking-wider font-medium min-w-[480px]">
        <div className="p-4 text-text-secondary/60" />
        <div className="p-4 text-text-secondary/60 text-center">{beforeLabel}</div>
        <div className="p-4 text-teal text-center">{afterLabel}</div>
      </div>
      {rows.map((row, i) => (
        <motion.div
          key={row.aspect}
          className="grid grid-cols-3 border-t border-glass-border min-w-[480px]"
          initial={{}}
          whileInView={{}}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.06 }}
        >
          <div className="p-4 text-sm font-medium text-text-primary">{row.aspect}</div>
          <div className="p-4 text-sm text-text-secondary/60 text-center">{row.before}</div>
          <div className="p-4 text-sm text-teal text-center">{row.after}</div>
        </motion.div>
      ))}
    </div>
  )
}

/* ── Text Paragraph (animated) ── */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="prose-content"
      initial={{ y: 10 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}
