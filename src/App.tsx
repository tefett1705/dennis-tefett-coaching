import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Preloader from './components/Preloader'
import Navigation from './components/Navigation'
import ErrorBoundary from './components/ErrorBoundary'
import Hero from './components/Hero'
import TrustBento from './components/TrustBento'
import ProblemWizardTeaser from './components/ProblemWizardTeaser'
import ProcessTimeline from './components/ProcessTimeline'
import AboutMe from './components/AboutMe'
import AnimatedStats from './components/AnimatedStats'
import SocialProof from './components/SocialProof'
import AudioGuide from './components/AudioGuide'
import Packages from './components/Packages'
import FAQ from './components/FAQ'
import ContactWizard from './components/ContactWizard'
import AkademieTeaser from './components/AkademieTeaser'
import Newsletter from './components/Newsletter'
import GuaranteeBanner from './components/GuaranteeBanner'
import SelbsttestTeaser from './components/SelbsttestTeaser'
import PersoenlichkeitstestTeaser from './components/PersoenlichkeitstestTeaser'
import StressLevelTeaser from './components/StressLevelTeaser'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'

// Lazy-loaded subpages
const FuehrungskraefteCoaching = lazy(() => import('./pages/FuehrungskraefteCoaching'))
const PersoenlichkeitsentwicklungErklaert = lazy(() => import('./pages/PersoenlichkeitsentwicklungErklaert'))
const TeambuildingWorkshop = lazy(() => import('./pages/TeambuildingWorkshop'))
const StrategischeGeschaeftsplanung = lazy(() => import('./pages/StrategischeGeschaeftsplanung'))
const KarriereCoaching = lazy(() => import('./pages/KarriereCoaching'))
const LifeCoaching = lazy(() => import('./pages/LifeCoaching'))
const Teamcoaching = lazy(() => import('./pages/Teamcoaching'))
const StressmanagementCoaching = lazy(() => import('./pages/StressmanagementCoaching'))
const CoachingMethoden = lazy(() => import('./pages/CoachingMethoden'))
const SelbstwirksamkeitStaerken = lazy(() => import('./pages/SelbstwirksamkeitStaerken'))
const FokusUndKlarheit = lazy(() => import('./pages/FokusUndKlarheit'))
const NachhaltigeVerhaltensaenderung = lazy(() => import('./pages/NachhaltigeVerhaltensaenderung'))
const Datenschutz = lazy(() => import('./pages/Datenschutz'))
const AGB = lazy(() => import('./pages/AGB'))
const Impressum = lazy(() => import('./pages/Impressum'))
const Selbsttest = lazy(() => import('./pages/Selbsttest'))
const Persoenlichkeitstest = lazy(() => import('./pages/Persoenlichkeitstest'))
const Kontakt = lazy(() => import('./pages/Kontakt'))
const StressLevelCheck = lazy(() => import('./pages/StressLevelCheck'))
const TerminBuchen = lazy(() => import('./pages/TerminBuchen'))
const TerminVerwaltung = lazy(() => import('./pages/admin/TerminVerwaltung'))
const NewsletterVerwaltung = lazy(() => import('./pages/admin/NewsletterVerwaltung'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))

// Akademie pages
const AkademieLanding = lazy(() => import('./pages/akademie/AkademieLanding'))
const AkademieModulePage = lazy(() => import('./pages/akademie/AkademieModulePage'))
const AkademieImpulsPage = lazy(() => import('./pages/akademie/AkademieImpulsPage'))

// City landing pages
const CityLanding = lazy(() => import('./pages/CityLanding'))

// 404
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-teal/30 border-t-teal rounded-full animate-spin" />
    </div>
  )
}

function HomePage() {
  return (
    <div>
      <SEOHead
        title="Executive Coaching für Führungskräfte in Gladbeck | Dennis Tefett"
        description="Neurowissenschaftlich fundiertes Executive Coaching für Führungskräfte. Psychologe & Gesundheitsmanager Dennis Tefett bietet messbare Ergebnisse in Führung, Resilienz und Persönlichkeitsentwicklung."
        keywords="Executive Coaching, Führungskräfte Coaching, Neurowissenschaft, Persönlichkeitsentwicklung, Gladbeck, Dennis Tefett"
      />
      <main>
        <Hero />
        <TrustBento />
        <ProblemWizardTeaser />
        <ProcessTimeline />
        <AnimatedStats />
        <SocialProof />
        <SelbsttestTeaser />
        <PersoenlichkeitstestTeaser />
        <StressLevelTeaser />
        <AboutMe />
        <Newsletter />
        <AudioGuide />
        <Packages />
        <GuaranteeBanner />
        <AkademieTeaser />
        <FAQ />
        <ContactWizard />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('dt-preloaded')
  })
  const location = useLocation()

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem('dt-preloaded', '1')
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  // Analytics tracking
  useEffect(() => {
    if (location.pathname.startsWith('/admin')) return
    try {
      const data = JSON.stringify({ path: location.pathname, referrer: document.referrer })
      navigator.sendBeacon('/api/analytics', data)
    } catch { /* ignore */ }
  }, [location.pathname])

  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isAdmin && <Navigation />}
      <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fuehrungskraefte-coaching" element={<FuehrungskraefteCoaching />} />
          <Route path="/persoenlichkeitsentwicklung-erklaert" element={<PersoenlichkeitsentwicklungErklaert />} />
          <Route path="/teambuildingworkshop" element={<TeambuildingWorkshop />} />
          <Route path="/strategische-geschaftsplanung" element={<StrategischeGeschaeftsplanung />} />
          <Route path="/karriere-coaching" element={<KarriereCoaching />} />
          <Route path="/life-coaching" element={<LifeCoaching />} />
          <Route path="/teamcoaching" element={<Teamcoaching />} />
          <Route path="/stressmanagement-coaching" element={<StressmanagementCoaching />} />
          <Route path="/coaching-methoden" element={<CoachingMethoden />} />
          <Route path="/selbstwirksamkeit-staerken" element={<SelbstwirksamkeitStaerken />} />
          <Route path="/fokus-und-klarheit" element={<FokusUndKlarheit />} />
          <Route path="/nachhaltige-verhaltensaenderung" element={<NachhaltigeVerhaltensaenderung />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/selbsttest" element={<Selbsttest />} />
          <Route path="/persoenlichkeitstest" element={<Persoenlichkeitstest />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/stress-level-check" element={<StressLevelCheck />} />
          <Route path="/termin-buchen" element={<TerminBuchen />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/termine" element={<TerminVerwaltung />} />
          <Route path="/admin/newsletter" element={<NewsletterVerwaltung />} />
          {/* Standortseiten */}
          <Route path="/coaching-essen" element={<CityLanding slug="essen" />} />
          <Route path="/coaching-gelsenkirchen" element={<CityLanding slug="gelsenkirchen" />} />
          <Route path="/coaching-bottrop" element={<CityLanding slug="bottrop" />} />
          <Route path="/coaching-oberhausen" element={<CityLanding slug="oberhausen" />} />
          <Route path="/coaching-bochum" element={<CityLanding slug="bochum" />} />
          {/* Akademie */}
          <Route path="/akademie" element={<AkademieLanding />} />
          <Route path="/akademie/:moduleSlug" element={<AkademieModulePage />} />
          <Route path="/akademie/:moduleSlug/:impulsSlug" element={<AkademieImpulsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App
