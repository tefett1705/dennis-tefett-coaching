import { useEffect } from 'react'

interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
  keywords?: string
  ogType?: string
}

const BASE_URL = 'https://dennis-tefett.de'

export default function SEOHead({ title, description, canonical, keywords, ogType = 'website' }: SEOHeadProps) {
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
    setOG('og:type', ogType)
    setOG('og:site_name', 'Dennis Tefett Coaching')
    setOG('og:locale', 'de_DE')

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    // Canonical + OG URL
    const canonicalUrl = canonical || `${BASE_URL}${window.location.pathname}`
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonicalUrl
    setOG('og:url', canonicalUrl)

    return () => {
      document.title = 'Executive Coaching für Führungskräfte in Gladbeck | Dennis Tefett'
    }
  }, [title, description, canonical, keywords, ogType])

  return null
}
