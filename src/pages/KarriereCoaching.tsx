import { Compass, Target, TrendingUp, Lightbulb, UserCheck, Briefcase, ArrowUpRight, Heart, Shield, Zap } from 'lucide-react'
import SubpageLayout from '../components/SubpageLayout'
import SEOHead, { serviceSchema } from '../components/SEOHead'
import {
  SectionHeader,
  BenefitGrid,
  NumberedSteps,
  StatHighlights,
  Checklist,
  QuoteBlock,
  HighlightBox,
  Prose,
} from '../components/SubpageBlocks'
import heroImg from '../assets/images/coaching-bild-klient-ueberlegt.webp'

export default function KarriereCoaching() {
  return (
    <SubpageLayout
      heroImage={heroImg}
      category="Karriere & Beruf"
      title="Karriere-Coaching: Klarheit finden und berufliche Ziele erreichen"
      subtitle="Entwickeln Sie eine klare berufliche Richtung, treffen Sie souveräne Entscheidungen und gestalten Sie Ihre Karriereentwicklung aktiv."
      relatedPages={[
        { label: 'Life Coaching', href: '/life-coaching' },
        { label: 'Persönlichkeitsentwicklung erklärt', href: '/persoenlichkeitsentwicklung-erklaert' },
        { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
        { label: 'Fokus und Klarheit', href: '/fokus-und-klarheit' },
      ]}
    >
      <SEOHead
        title="Karriere-Coaching: Berufliche Neuorientierung & Karriereentwicklung | Dennis Tefett"
        description="Professionelles Karriere-Coaching für berufliche Neuorientierung, klare Karriereziele und souveräne Entscheidungen. Strukturierter Prozess für nachhaltigen beruflichen Erfolg in Gladbeck und NRW."
        keywords="Karriere-Coaching, berufliche Neuorientierung, Karriereentwicklung, beruflicher Erfolg, Karriereberatung, Gladbeck, NRW"
        canonical="https://dennis-tefett.de/karriere-coaching"
        schema={serviceSchema('Karriere-Coaching', 'Professionelles Karriere-Coaching für berufliche Neuorientierung, klare Karriereziele und souveräne Entscheidungen.', '/karriere-coaching')}
        breadcrumbs={[{ name: 'Karriere-Coaching', url: '/karriere-coaching' }]}
      />

      {/* --- Warum Karriere-Coaching --- */}
      <SectionHeader
        tag="Warum Karriere-Coaching"
        title="Was bringt Ihnen Karriere-Coaching wirklich?"
        text="Karriere-Coaching ist kein unverbindliches Gespräch, sondern ein strukturierter Prozess, der Ihnen hilft, berufliche Entscheidungen mit Klarheit und Überzeugung zu treffen."
      />

      <Prose>
        <p>
          Der Unterschied zu klassischer Karriereberatung: Statt Tipps von aussen erhalten Sie den Rahmen, Ihre eigenen Antworten freizulegen. Karriere-Coaching setzt bei Ihren Werten, Stärken und Zielen an und macht daraus eine Strategie, die zu Ihrem Leben passt.
        </p>
      </Prose>

      <StatHighlights
        stats={[
          { value: '87%', label: 'berichten von mehr Klarheit nach 4 Sitzungen' },
          { value: '6-10', label: 'Sitzungen für nachhaltige Veränderung' },
          { value: '3-6', label: 'Monate strukturierter Begleitung' },
          { value: '100%', label: 'individuell auf Ihre Situation zugeschnitten' },
        ]}
      />

      {/* --- Was Sie gewinnen --- */}
      <SectionHeader
        tag="Ihre Vorteile"
        title="Was Sie durch Karriere-Coaching gewinnen"
        text="Karriereentwicklung wird planbar, wenn Sie Ihre Stärken kennen und berufliche Ziele klar definiert haben."
      />

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: Compass,
            title: 'Berufliche Klarheit',
            text: 'Erkennen Sie, welche berufliche Richtung wirklich zu Ihren Werten und Stärken passt, statt auf äussere Erwartungen zu reagieren.',
          },
          {
            icon: Target,
            title: 'Konkrete Karriereziele',
            text: 'Definieren Sie messbare Meilensteine und eine realistische Strategie, die Sie Schritt für Schritt umsetzen können.',
          },
          {
            icon: TrendingUp,
            title: 'Souveräne Entscheidungen',
            text: 'Treffen Sie berufliche Entscheidungen mit innerer Sicherheit, ob Jobwechsel, Aufstieg oder Neuorientierung.',
          },
          {
            icon: Lightbulb,
            title: 'Stärken gezielt einsetzen',
            text: 'Identifizieren Sie Ihre Kernkompetenzen und lernen Sie, diese strategisch für Ihren beruflichen Erfolg zu nutzen.',
          },
          {
            icon: ArrowUpRight,
            title: 'Sichtbarkeit erhöhen',
            text: 'Positionieren Sie sich intern und extern so, dass Ihre Leistung wahrgenommen wird und Chancen entstehen.',
          },
          {
            icon: Heart,
            title: 'Beruf und Leben in Einklang',
            text: 'Finden Sie eine berufliche Ausrichtung, die nicht nur Erfolg, sondern auch Erfüllung und Balance ermöglicht.',
          },
        ]}
      />

      {/* --- Der Prozess --- */}
      <SectionHeader
        tag="Ihr Weg"
        title="Der Karriere-Coaching-Prozess: Vier Phasen zur Klarheit"
        text="Ein bewährter Rahmen, der Orientierung gibt und Ergebnisse sichert, dabei flexibel genug für Ihre individuelle Ausgangslage."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Standortbestimmung',
            text: 'Wir analysieren Ihre aktuelle berufliche Situation ehrlich und umfassend. Was funktioniert? Welche Muster wiederholen sich? Diese Phase legt das Fundament für alles Weitere.',
          },
          {
            title: 'Stärken und Werte identifizieren',
            text: 'Mit gezielten Methoden arbeiten wir Ihre Kernstärken, Werte und Motivatoren heraus. Was gibt Ihnen Energie? Unter welchen Bedingungen leisten Sie Ihre beste Arbeit?',
          },
          {
            title: 'Zielbild und Strategie entwickeln',
            text: 'Auf Basis Ihrer Erkenntnisse entsteht ein klares berufliches Zielbild mit realistischer Strategie, definierten Meilensteinen und konkreten nächsten Schritten.',
          },
          {
            title: 'Umsetzung und Begleitung',
            text: 'Ich begleite Sie bei der konkreten Umsetzung, ob Bewerbungsprozess, Gehaltsverhandlung, interne Positionierung oder der Aufbau neuer Kompetenzen.',
          },
        ]}
      />

      <QuoteBlock
        text="Die meisten Menschen scheitern nicht an fehlenden Optionen, sondern an fehlender Klarheit darüber, was sie wirklich wollen."
      />

      {/* --- Für wen --- */}
      <SectionHeader
        tag="Ist das richtig für Sie?"
        title="Karriere-Coaching ist sinnvoll, wenn Sie sich hier wiedererkennen"
      />

      <Checklist
        items={[
          'Sie spüren, dass Ihr aktueller beruflicher Weg nicht mehr zu Ihnen passt',
          'Berufliche Stagnation trotz hoher Kompetenz frustriert Sie zunehmend',
          'Sie stehen vor einem Positionswechsel oder einer neuen Führungsrolle',
          'Nach einer Pause (Elternzeit, Sabbatical) wollen Sie den Wiedereinstieg strategisch angehen',
          'Sonntags wächst das Unbehagen vor der kommenden Arbeitswoche',
          'Sie wünschen sich eine berufliche Neuorientierung, aber die Richtung fehlt',
          'Sie sind Fach- oder Führungskraft und wollen Karriereentscheidungen nicht dem Zufall überlassen',
        ]}
      />

      {/* --- Erfolgsfaktoren --- */}
      <SectionHeader
        tag="Erfolgsfaktoren"
        title="Was Karriere-Coaching erfolgreich macht"
      />

      <BenefitGrid
        columns={2}
        items={[
          {
            icon: UserCheck,
            title: 'Ihre Bereitschaft zählt',
            text: 'Der wichtigste Erfolgsfaktor sind Sie. Ehrlich auf Ihre Situation blicken, Gewohnheiten hinterfragen und aktiv an Veränderung arbeiten.',
          },
          {
            icon: Shield,
            title: 'Vertraulicher Rahmen',
            text: 'Im geschützten Coaching-Raum können Sie offen über Zweifel, Wünsche und blinde Flecken sprechen, ohne Konsequenzen befürchten zu müssen.',
          },
          {
            icon: Briefcase,
            title: 'Praxis statt Theorie',
            text: 'Zwischen den Sitzungen arbeiten Sie an konkreten Aufgaben. Das Coaching wirkt weit über die einzelnen Termine hinaus in Ihren Berufsalltag.',
          },
          {
            icon: Zap,
            title: 'Wissenschaftlich fundiert',
            text: 'Evidenzbasierte Methoden aus der Verhaltensforschung und positiven Psychologie sorgen für nachhaltige Ergebnisse, nicht nur kurzfristige Motivation.',
          },
        ]}
      />

      <HighlightBox title="Der richtige Zeitpunkt ist jetzt" color="teal">
        <p>
          Wenn Sie das Gefühl haben, dass Ihre berufliche Situation nicht mehr zu Ihnen passt oder der nächste Karriereschritt ansteht, aber die Richtung unklar ist, dann ist jetzt der richtige Zeitpunkt. Im kostenfreien Erstgespräch klären wir gemeinsam, wie Karriere-Coaching Sie bei Ihrer beruflichen Neuorientierung und Karriereentwicklung unterstützen kann.
        </p>
      </HighlightBox>

    </SubpageLayout>
  )
}
