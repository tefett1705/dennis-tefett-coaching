import { useEffect } from 'react'

interface JsonLdProps {
  data: Record<string, unknown>
}

// Injects a JSON-LD script tag into <head> for structured data
export default function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [data])

  return null
}
