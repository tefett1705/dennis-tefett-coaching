import { lazy, Suspense, useMemo } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getImpulsBySlug, getModuleBySlug } from '../../data/akademieData'
import SEOHead from '../../components/SEOHead'
import JsonLd from '../../components/JsonLd'

// Lazy-load all impulse pages
const impulsComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  // Modul 1: Führung & Wirkung
  'fuenf-saeulen-fuehrung': lazy(() => import('./impulse/FuenfSaeulenFuehrung')),
  'unbewusste-muster': lazy(() => import('./impulse/UnbewussteMuster')),
  'authentisch-kommunizieren': lazy(() => import('./impulse/AuthentischKommunizieren')),
  'manager-zum-leader': lazy(() => import('./impulse/ManagerZumLeader')),
  'erste-100-tage': lazy(() => import('./impulse/Erste100Tage')),
  // Modul 2: Innere Stärke & Resilienz
  'stress-verstehen': lazy(() => import('./impulse/StressVerstehen')),
  'resilienz-framework': lazy(() => import('./impulse/ResilienzFramework')),
  'emotionale-regulation': lazy(() => import('./impulse/EmotionaleRegulation')),
  'grenzen-setzen': lazy(() => import('./impulse/GrenzenSetzen')),
  'burnout-warnsignale': lazy(() => import('./impulse/BurnoutWarnsignale')),
  // Modul 3: Persönlichkeit & Wachstum
  'neuroplastizitaet': lazy(() => import('./impulse/Neuroplastizitaet')),
  'werte-als-kompass': lazy(() => import('./impulse/WerteAlsKompass')),
  'gewohnheiten-veraendern': lazy(() => import('./impulse/GewohnheitenVeraendern')),
  'imposter-syndrom': lazy(() => import('./impulse/ImposterSyndrom')),
  // Modul 4: Strategische Klarheit
  'entscheidungsqualitaet': lazy(() => import('./impulse/Entscheidungsqualitaet')),
  'prioritaeten-setzen': lazy(() => import('./impulse/PrioritaetenSetzen')),
  'vision-entwickeln': lazy(() => import('./impulse/VisionEntwickeln')),
  // Modul 5: Kommunikation & Beziehung
  'schwierige-gespraeche': lazy(() => import('./impulse/SchwierigeGespraeche')),
  'konflikte-als-chance': lazy(() => import('./impulse/KonflikteAlsChance')),
  'zuhoeren-als-kompetenz': lazy(() => import('./impulse/ZuhoerAlsKompetenz')),
  'feedback-geben-nehmen': lazy(() => import('./impulse/FeedbackGebenNehmen')),
}

function ImpulsLoader() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-teal/30 border-t-teal rounded-full animate-spin" />
    </div>
  )
}

export default function AkademieImpulsPage() {
  const { moduleSlug, impulsSlug } = useParams<{ moduleSlug: string; impulsSlug: string }>()

  if (!moduleSlug || !impulsSlug) {
    return <Navigate to="/akademie" replace />
  }

  const result = getImpulsBySlug(moduleSlug, impulsSlug)
  const mod = getModuleBySlug(moduleSlug)

  if (!result || !mod) {
    return <Navigate to="/akademie" replace />
  }

  const Component = impulsComponents[impulsSlug]

  if (!Component) {
    return <Navigate to={`/akademie/${moduleSlug}`} replace />
  }

  const pageUrl = `https://dennis-tefett.de/akademie/${moduleSlug}/${impulsSlug}`

  const articleSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: result.impuls.title,
    description: result.impuls.description,
    author: {
      '@type': 'Person',
      name: 'Dennis Tefett',
      url: 'https://dennis-tefett.de',
      jobTitle: 'Executive Coach & Psychologe',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dennis Tefett Coaching',
      url: 'https://dennis-tefett.de',
    },
    mainEntityOfPage: pageUrl,
    isPartOf: {
      '@type': 'WebPage',
      name: `${mod.title} | Wissens-Akademie`,
      url: `https://dennis-tefett.de/akademie/${moduleSlug}`,
    },
    inLanguage: 'de-DE',
    timeRequired: `PT${result.impuls.readingTime.replace(/\D/g, '')}M`,
  }), [result, mod, moduleSlug, impulsSlug, pageUrl])

  const breadcrumbSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://dennis-tefett.de' },
      { '@type': 'ListItem', position: 2, name: 'Wissens-Akademie', item: 'https://dennis-tefett.de/akademie' },
      { '@type': 'ListItem', position: 3, name: mod.title, item: `https://dennis-tefett.de/akademie/${moduleSlug}` },
      { '@type': 'ListItem', position: 4, name: result.impuls.title, item: pageUrl },
    ],
  }), [mod, moduleSlug, result, pageUrl])

  return (
    <>
      <SEOHead
        title={`${result.impuls.title} | ${mod.title} | Dennis Tefett`}
        description={result.impuls.description}
        keywords={`${mod.title}, ${result.impuls.title}, Coaching, Führungskräfte, Dennis Tefett`}
        ogType="article"
      />
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Suspense fallback={<ImpulsLoader />}>
        <Component />
      </Suspense>
    </>
  )
}
