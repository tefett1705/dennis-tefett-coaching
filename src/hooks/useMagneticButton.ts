import { useRef, useCallback } from 'react'

export function useMagneticButton<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--x', `${x}%`)
    el.style.setProperty('--y', `${y}%`)
  }, [])

  return { ref, onMouseMove: handleMouseMove }
}
