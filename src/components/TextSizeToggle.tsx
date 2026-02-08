
import { motion } from 'framer-motion'
import { useTextSize, type TextSize } from '../context/TextSizeContext'
import { Type } from 'lucide-react'

const sizes: TextSize[] = ['S', 'M', 'L']
const sizeClasses: Record<TextSize, string> = {
  S: 'text-[10px]',
  M: 'text-xs',
  L: 'text-sm',
}

export default function TextSizeToggle() {
  const { textSize, setTextSize } = useTextSize()

  return (
    <div className="flex items-center gap-1.5">
      <Type size={13} className="text-text-secondary/50 flex-shrink-0" />
      <div className="flex items-center bg-glass-bg border border-glass-border rounded-full p-0.5 relative">
        {sizes.map((label) => (
          <button
            key={label}
            onClick={(e) => {
              e.stopPropagation()
              setTextSize(label)
            }}
            className={`relative z-10 px-2.5 py-1 rounded-full cursor-pointer transition-colors duration-200 ${sizeClasses[label]} font-semibold leading-none ${
              textSize === label
                ? 'text-midnight'
                : 'text-text-secondary/60 hover:text-text-secondary'
            }`}
            aria-label={`Textgröße ${label === 'S' ? 'Klein' : label === 'M' ? 'Mittel' : 'Groß'}`}
          >
            {label}
          </button>
        ))}
        {/* Animated background pill */}
        <motion.div
          className="absolute top-0.5 bottom-0.5 bg-teal rounded-full pointer-events-none"
          animate={{
            left: sizes.indexOf(textSize) === 0 ? '2px' : sizes.indexOf(textSize) === 1 ? '33.33%' : '66.66%',
            width: '33.33%',
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          style={{ zIndex: 0 }}
        />
      </div>
    </div>
  )
}
