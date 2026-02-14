import { motion } from 'framer-motion'

export interface RadarAxis {
  key: string
  label: string
  angle: number
}

interface RadarChartProps {
  scores: Record<string, number>
  axes: RadarAxis[]
  size?: number
  animated?: boolean
}

const GRID_LEVELS = [0.33, 0.66, 1.0]

function getPoint(cx: number, cy: number, radius: number, angle: number, value: number) {
  return {
    x: cx + radius * (value / 100) * Math.cos(angle),
    y: cy + radius * (value / 100) * Math.sin(angle),
  }
}

function getGridPolygon(cx: number, cy: number, radius: number, level: number, axes: RadarAxis[]) {
  return axes
    .map((axis) => {
      const x = cx + radius * level * Math.cos(axis.angle)
      const y = cy + radius * level * Math.sin(axis.angle)
      return `${x},${y}`
    })
    .join(' ')
}

/** Generate evenly-spaced angles starting from top (-π/2) */
export function generateAngles(count: number): number[] {
  return Array.from({ length: count }, (_, i) => -Math.PI / 2 + (2 * Math.PI * i) / count)
}

export default function RadarChart({ scores, axes, size = 300, animated = true }: RadarChartProps) {
  const padding = size * 0.22
  const totalSize = size + padding * 2
  const cx = totalSize / 2
  const cy = totalSize / 2
  const radius = size * 0.32
  const labelOffset = radius + size * 0.14

  // Data polygon points
  const dataPoints = axes.map((axis) => {
    const score = scores[axis.key] ?? 0
    return getPoint(cx, cy, radius, axis.angle, score)
  })
  const dataPolygon = dataPoints.map((p) => `${p.x},${p.y}`).join(' ')

  // Center polygon (for animation start)
  const centerPolygon = axes.map(() => `${cx},${cy}`).join(' ')

  // Build aria-label
  const ariaLabel = `Radar-Diagramm: ${axes.map((a) => `${a.label.replace('\n', '')} ${scores[a.key] ?? 0}%`).join(', ')}`

  return (
    <svg
      viewBox={`0 0 ${totalSize} ${totalSize}`}
      width={totalSize}
      height={totalSize}
      className="w-full max-w-[340px] h-auto"
      role="img"
      aria-label={ariaLabel}
    >
      {/* Grid polygons */}
      {GRID_LEVELS.map((level) => (
        <polygon
          key={level}
          points={getGridPolygon(cx, cy, radius, level, axes)}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={1}
        />
      ))}

      {/* Axis lines */}
      {axes.map((axis) => {
        const end = getPoint(cx, cy, radius, axis.angle, 100)
        return (
          <line
            key={axis.key}
            x1={cx}
            y1={cy}
            x2={end.x}
            y2={end.y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={1}
          />
        )
      })}

      {/* Data polygon */}
      <motion.polygon
        points={animated ? centerPolygon : dataPolygon}
        fill="rgba(45, 212, 191, 0.15)"
        stroke="#2DD4BF"
        strokeWidth={2}
        animate={{ points: dataPolygon }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Data points */}
      {axes.map((axis, i) => {
        const score = scores[axis.key] ?? 0
        const point = dataPoints[i]
        const color = score > 66 ? '#2DD4BF' : score > 33 ? '#C9A227' : 'rgba(255,255,255,0.4)'
        return (
          <motion.circle
            key={axis.key}
            cx={animated ? cx : point.x}
            cy={animated ? cy : point.y}
            r={4}
            fill={color}
            stroke="rgba(6,26,45,0.8)"
            strokeWidth={2}
            animate={{ cx: point.x, cy: point.y }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
        )
      })}

      {/* Labels */}
      {axes.map((axis) => {
        const lx = cx + labelOffset * Math.cos(axis.angle)
        const ly = cy + labelOffset * Math.sin(axis.angle)
        const lines = axis.label.split('\n')

        // Determine text-anchor based on angle
        const normalizedAngle = ((axis.angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
        const textAnchor =
          normalizedAngle > Math.PI * 0.25 && normalizedAngle < Math.PI * 0.75
            ? 'start'
            : normalizedAngle > Math.PI * 1.25 && normalizedAngle < Math.PI * 1.75
              ? 'end'
              : 'middle'

        return (
          <text
            key={axis.key}
            x={lx}
            y={ly}
            textAnchor={textAnchor}
            dominantBaseline="middle"
            className="fill-text-secondary"
            style={{ fontSize: '11px', fontFamily: 'Manrope, sans-serif' }}
          >
            {lines.map((line, i) => (
              <tspan key={i} x={lx} dy={i === 0 ? 0 : 14}>
                {line}
              </tspan>
            ))}
          </text>
        )
      })}

      {/* Score percentages near data points */}
      {axes.map((axis) => {
        const score = scores[axis.key] ?? 0
        const point = getPoint(cx, cy, radius, axis.angle, Math.min(score + 12, 100))
        return (
          <motion.text
            key={`score-${axis.key}`}
            x={point.x}
            y={point.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-teal"
            style={{ fontSize: '10px', fontWeight: 600, fontFamily: 'Manrope, sans-serif' }}
            initial={{}}
            animate={{}}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            {score}%
          </motion.text>
        )
      })}
    </svg>
  )
}
