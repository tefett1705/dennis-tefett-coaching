import { useEffect, useRef } from 'react'

export default function FloatingOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      time += 0.003

      const cx = w / 2
      const cy = h / 2
      const baseRadius = Math.min(w, h) * 0.28

      // Outer glow
      const outerGlow = ctx.createRadialGradient(cx, cy, baseRadius * 0.5, cx, cy, baseRadius * 2)
      outerGlow.addColorStop(0, 'rgba(45, 212, 191, 0.06)')
      outerGlow.addColorStop(0.5, 'rgba(201, 162, 39, 0.03)')
      outerGlow.addColorStop(1, 'transparent')
      ctx.fillStyle = outerGlow
      ctx.fillRect(0, 0, w, h)

      // Draw layered orbs
      for (let layer = 3; layer >= 0; layer--) {
        const offset = layer * 0.4
        const scale = 1 + layer * 0.15
        const alpha = 0.08 - layer * 0.015

        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(time * (0.3 + layer * 0.1))

        const r = baseRadius * scale
        const points = 120
        ctx.beginPath()

        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2
          const noise = Math.sin(angle * 3 + time * 2 + offset) * r * 0.08 +
                       Math.sin(angle * 5 + time * 1.5 + offset) * r * 0.04 +
                       Math.sin(angle * 7 + time * 0.8 + offset) * r * 0.02
          const px = Math.cos(angle) * (r + noise)
          const py = Math.sin(angle) * (r + noise)
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.closePath()

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, r)
        if (layer % 2 === 0) {
          grad.addColorStop(0, `rgba(45, 212, 191, ${alpha * 2})`)
          grad.addColorStop(0.6, `rgba(45, 212, 191, ${alpha})`)
          grad.addColorStop(1, 'transparent')
        } else {
          grad.addColorStop(0, `rgba(201, 162, 39, ${alpha * 1.5})`)
          grad.addColorStop(0.6, `rgba(201, 162, 39, ${alpha * 0.8})`)
          grad.addColorStop(1, 'transparent')
        }
        ctx.fillStyle = grad
        ctx.fill()
        ctx.restore()
      }

      // Center bright core
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseRadius * 0.4)
      coreGrad.addColorStop(0, 'rgba(244, 247, 251, 0.08)')
      coreGrad.addColorStop(0.5, 'rgba(45, 212, 191, 0.04)')
      coreGrad.addColorStop(1, 'transparent')
      ctx.fillStyle = coreGrad
      ctx.beginPath()
      ctx.arc(cx, cy, baseRadius * 0.4, 0, Math.PI * 2)
      ctx.fill()

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ animation: 'float 12s ease-in-out infinite' }}
    />
  )
}
