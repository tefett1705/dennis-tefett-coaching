import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type TextSize = 'S' | 'M' | 'L'

interface TextSizeContextType {
  textSize: TextSize
  setTextSize: (size: TextSize) => void
}

const TextSizeContext = createContext<TextSizeContextType>({
  textSize: 'M',
  setTextSize: () => {},
})

export function useTextSize() {
  return useContext(TextSizeContext)
}

const STORAGE_KEY = 'dt-text-size'

export function TextSizeProvider({ children }: { children: ReactNode }) {
  const [textSize, setTextSize] = useState<TextSize>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as TextSize | null
      if (saved && ['S', 'M', 'L'].includes(saved)) return saved
    }
    return 'M'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, textSize)

    const root = document.documentElement
    root.classList.remove('text-size-s', 'text-size-m', 'text-size-l')

    switch (textSize) {
      case 'S':
        root.classList.add('text-size-s')
        break
      case 'M':
        root.classList.add('text-size-m')
        break
      case 'L':
        root.classList.add('text-size-l')
        break
    }
  }, [textSize])

  return (
    <TextSizeContext.Provider value={{ textSize, setTextSize }}>
      {children}
    </TextSizeContext.Provider>
  )
}
