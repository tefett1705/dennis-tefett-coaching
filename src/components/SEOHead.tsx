import { useEffect } from 'react'

interface BreadcrumbItem {
  name: string
  url: string
}

interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
  keywords?: string
  ogType?: string
  schema?: Record<string, unknown> | Record<string, unknown>[]
  breadcrumbs?: BreadcrumbItem[]
}

const BASE_URL = 'https://dennis-tefett.de'

// Helper to create Service schema for coaching pages
export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: [
      { '@type': 'City', 'name': 'Gladbeck' },
      { '@type': 'City', 'name': 'Essen' },
      { '@type': 'City', 'name': 'Gelsenkirchen' },
      { '@type': 'City', 'name': 'Bottrop' },
      { '@type': 'City', 'name': 'Oberhausen' },
      { '@type': 'State', 'name': 'Nordrhein-Westfalen' },
      { '@type': 'Country', 'name': 'Deutschland' },
    ],
  }
}

// Helper to create Article schema for Akademie impulse pages
export function articleSchema(headline: string, description: string, url: string, datePublished?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: `${BASE_URL}${url}`,
    author: { '@id': `${BASE_URL}/#person` },
    publisher: { '@id': `${BASE_URL}/#business` },
    datePublished: datePublished || '2025-01-15',
    dateModified: '2026-02-19',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}${url}` },
  }
}

// Helper to create BreadcrumbList schema
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: BASE_URL },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
      })),
    ],
  }
}

export default function SEOHead({ title, description, canonical, keywords, ogType = 'website', schema, breadcrumbs }: SEOHeadProps) {
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

    // Schema.org JSON-LD
    // Remove previous dynamic schemas
    document.querySelectorAll('script[data-seo-head]').forEach(el => el.remove())

    const schemas: Record<string, unknown>[] = []

    // Add provided schemas
    if (schema) {
      if (Array.isArray(schema)) {
        schemas.push(...schema)
      } else {
        schemas.push(schema)
      }
    }

    // Add breadcrumb schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push(breadcrumbSchema(breadcrumbs))
    }

    // Inject all schemas
    schemas.forEach(s => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo-head', 'true')
      script.textContent = JSON.stringify(s)
      document.head.appendChild(script)
    })

    return () => {
      document.title = 'Executive Coaching für Führungskräfte in Gladbeck | Dennis Tefett'
      document.querySelectorAll('script[data-seo-head]').forEach(el => el.remove())
    }
  }, [title, description, canonical, keywords, ogType, schema, breadcrumbs])

  return null
}
