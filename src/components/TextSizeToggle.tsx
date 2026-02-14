import { useTextSize, type TextSize } from '../context/TextSizeContext'
import { Type } from 'lucide-react'

const cycle: TextSize[] = ['M', 'L', 'S']

export default function TextSizeToggle() {
  const { textSize, setTextSize } = useTextSize()

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    const currentIndex = cycle.indexOf(textSize)
    const nextIndex = (currentIndex + 1) % cycle.length
    setTextSize(cycle[nextIndex])
  }

  return (
    <button
      onClick={handleClick}
      className="relative p-2 rounded-full border border-glass-border bg-glass hover:bg-glass-border/30 transition-all duration-300 cursor-pointer"
      aria-label={`Textgröße: ${textSize === 'S' ? 'Klein' : textSize === 'M' ? 'Mittel' : 'Groß'}`}
    >
      <Type size={14} className="text-text-secondary" />
      <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-teal text-midnight text-[8px] font-bold flex items-center justify-center leading-none">
        {textSize}
      </span>
    </button>
  )
}
