import { useEffect } from 'react'

interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
  keywords?: string
}

export default function SEOHead({ title, description, canonical, keywords }: SEOHeadProps) {
  useEffect(() => {
    document.title = title

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.name = name
        document.head.appendChild(el)
      }
      el.content = content
    }

    const setOG = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('description', description)
    if (keywords) setMeta('keywords', keywords)
    setOG('og:title', title)
    setOG('og:description', description)
    setOG('og:type', 'article')

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonical
    }

    return () => {
      document.title = 'Dennis Tefett | Executive Coaching'
    }
  }, [title, description, canonical, keywords])

  return null
}
