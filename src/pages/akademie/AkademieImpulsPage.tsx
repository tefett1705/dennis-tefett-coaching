import { lazy, Suspense } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getImpulsBySlug, getModuleBySlug } from '../../data/akademieData'

// Lazy-load all impulse pages
const impulsComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  // Modul 1: Führung & Wirkung
  'fuenf-saeulen-fuehrung': lazy(() => import('./impulse/FuenfSaeulenFuehrung')),
  'unbewusste-muster': lazy(() => import('./impulse/UnbewussteMuster')),
  'authentisch-kommunizieren': lazy(() => import('./impulse/AuthentischKommunizieren')),
  'manager-zum-leader': lazy(() => import('./impulse/ManagerZumLeader')),
  // Modul 2: Innere Stärke & Resilienz
  'stress-verstehen': lazy(() => import('./impulse/StressVerstehen')),
  'resilienz-framework': lazy(() => import('./impulse/ResilienzFramework')),
  'emotionale-regulation': lazy(() => import('./impulse/EmotionaleRegulation')),
  'grenzen-setzen': lazy(() => import('./impulse/GrenzenSetzen')),
  // Modul 3: Persönlichkeit & Wachstum
  'neuroplastizitaet': lazy(() => import('./impulse/Neuroplastizitaet')),
  'werte-als-kompass': lazy(() => import('./impulse/WerteAlsKompass')),
  'gewohnheiten-veraendern': lazy(() => import('./impulse/GewohnheitenVeraendern')),
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

  return (
    <Suspense fallback={<ImpulsLoader />}>
      <Component />
    </Suspense>
  )
}
