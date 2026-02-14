import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Preloader from './components/Preloader'
import Navigation from './components/Navigation'
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
import Footer from './components/Footer'

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
const TerminBuchen = lazy(() => import('./pages/TerminBuchen'))
const TerminVerwaltung = lazy(() => import('./pages/admin/TerminVerwaltung'))

// Akademie pages
const AkademieLanding = lazy(() => import('./pages/akademie/AkademieLanding'))
const AkademieModulePage = lazy(() => import('./pages/akademie/AkademieModulePage'))
const AkademieImpulsPage = lazy(() => import('./pages/akademie/AkademieImpulsPage'))

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
      <Navigation />
      <main>
        <Hero />
        <TrustBento />
        <ProblemWizardTeaser />
        <ProcessTimeline />
        <AnimatedStats />
        <SocialProof />
        <SelbsttestTeaser />
        <PersoenlichkeitstestTeaser />
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
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader isLoading={isLoading} />
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
          <Route path="/termin-buchen" element={<TerminBuchen />} />
          <Route path="/admin/termine" element={<TerminVerwaltung />} />
          {/* Akademie */}
          <Route path="/akademie" element={<AkademieLanding />} />
          <Route path="/akademie/:moduleSlug" element={<AkademieModulePage />} />
          <Route path="/akademie/:moduleSlug/:impulsSlug" element={<AkademieImpulsPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
