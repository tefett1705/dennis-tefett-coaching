import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface AudioSnippet {
  title: string
  subtitle: string
  duration: string
}

const snippets: AudioSnippet[] = [
  {
    title: 'So klingt Klarheit.',
    subtitle: 'Wie ich psychologische Diagnostik im Coaching einsetze',
    duration: '0:42',
  },
  {
    title: 'Was ich unter Premium verstehe.',
    subtitle: 'Ergebnisorientiert statt stundenbasiert',
    duration: '0:38',
  },
  {
    title: 'Warum mein Prozess funktioniert.',
    subtitle: 'Neurowissenschaft meets Führungsrealität',
    duration: '0:51',
  },
]

function AudioCard({ snippet, index }: { snippet: AudioSnippet; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null)

  const togglePlay = () => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
      setProgress(0)
      // Simulate audio playback (replace with real audio later)
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            if (intervalRef.current) clearInterval(intervalRef.current)
            setIsPlaying(false)
            return 0
          }
          return p + 2
        })
      }, 200)
    }
  }

  return (
    <motion.div
      className="glass-card p-6 flex items-center gap-5 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Play button with progress ring */}
      <button
        onClick={togglePlay}
        className="relative flex-shrink-0 w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors duration-300 cursor-pointer"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        <svg className="absolute inset-0 w-14 h-14 -rotate-90" viewBox="0 0 56 56">
          <circle
            cx="28" cy="28" r="25"
            fill="none"
            stroke="rgba(45, 212, 191, 0.15)"
            strokeWidth="2"
          />
          <circle
            cx="28" cy="28" r="25"
            fill="none"
            stroke="#2DD4BF"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 25}`}
            strokeDashoffset={`${2 * Math.PI * 25 * (1 - progress / 100)}`}
            strokeLinecap="round"
            className="transition-all duration-200"
          />
        </svg>
        {isPlaying ? (
          <Pause size={18} className="text-teal relative z-10" />
        ) : (
          <Play size={18} className="text-teal relative z-10 ml-0.5" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <h3 className="font-serif text-lg font-semibold">{snippet.title}</h3>
        <p className="text-text-secondary text-sm mt-0.5 truncate">{snippet.subtitle}</p>
      </div>

      <span className="text-text-secondary/50 text-xs font-mono flex-shrink-0">{snippet.duration}</span>
    </motion.div>
  )
}

export default function AudioGuide() {
  const { ref } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-midnight via-navy/30 to-midnight">
      <div className="max-w-3xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-teal font-medium">Audio-Guide</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4">
            Hören Sie rein
          </h2>
          <p className="text-text-secondary mt-4">
            Drei kurze Einblicke in meine Arbeitsweise. Echte Stimme, kein Skript.
          </p>
        </motion.div>

        <div className="space-y-4">
          {snippets.map((snippet, i) => (
            <AudioCard key={i} snippet={snippet} index={i} />
          ))}
        </div>

        <motion.p
          className="text-center text-text-secondary/50 text-xs mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Audio-Snippets werden mit Ihrem Logo und Ihrer Stimme ersetzt
        </motion.p>
      </div>
    </section>
  )
}
