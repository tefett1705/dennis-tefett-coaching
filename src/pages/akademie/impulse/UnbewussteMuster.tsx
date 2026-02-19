import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import {
  SectionHeader,
  Prose,
  BenefitGrid,
  NumberedSteps,
  QuoteBlock,
  HighlightBox,
  Checklist,
} from '../../../components/SubpageBlocks'
import { Brain, Shield, Zap } from 'lucide-react'

export default function UnbewussteMuster() {
  useEffect(() => {
    document.title = 'Unbewusste Führungsmuster erkennen | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Führung & Wirkung"
      moduleSlug="fuehrung-und-wirkung"
      impulsSlug="unbewusste-muster"
      color="teal"
      impulsTitle="Unbewusste Führungsmuster erkennen"
      prevImpuls={{
        title: 'Die 5 Säulen wirksamer Führung',
        href: '/akademie/fuehrung-und-wirkung/fuenf-saeulen-fuehrung',
      }}
      nextImpuls={{
        title: 'Authentisch kommunizieren als Führungskraft',
        href: '/akademie/fuehrung-und-wirkung/authentisch-kommunizieren',
      }}
      relatedCoachingPages={[
        { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
        { label: 'Teamcoaching', href: '/teamcoaching' },
      ]}
    >
      {/* Einführung */}
      <SectionHeader
        tag="Bewusstsein"
        title="Der Autopilot in Ihrer Führung"
        text="Bis zu 95 Prozent unserer täglichen Entscheidungen und Verhaltensweisen laufen automatisiert ab. Als Führungskraft bedeutet das: Vieles von dem, was Sie tun, geschieht unbewusst."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Unbewusste Muster sind nicht grundsätzlich problematisch. Sie entstehen als effiziente
          Antworten auf wiederkehrende Situationen und entlasten unser Gehirn. Doch im Führungskontext
          können sie zur Falle werden: Wenn automatische Reaktionen nicht mehr zur aktuellen Situation
          passen, entstehen Reibung, Missverständnisse und blinde Flecken.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Neurowissenschaft unterscheidet zwischen dem schnellen, automatischen System 1 und dem
          langsamen, reflektierten System 2 unseres Denkens. Unbewusste Führungsmuster sind
          Routinen des System 1, die oft in frühen Lebensphasen oder prägenden Berufserfahrungen
          entstanden sind.
        </p>
      </Prose>

      {/* Typische Muster */}
      <SectionHeader
        tag="Erkenntnis"
        title="Drei Quellen unbewusster Muster"
      />

      <BenefitGrid
        items={[
          {
            icon: Brain,
            title: 'Frühe Prägungen',
            text: 'Erfahrungen aus Kindheit und Jugend formen grundlegende Überzeugungen über Autorität, Leistung und Zugehörigkeit. Diese wirken als innere Landkarte, nach der wir führen.',
          },
          {
            icon: Shield,
            title: 'Psychologische Abwehrmechanismen',
            text: 'Vermeidung, Projektion oder Rationalisierung schützen uns vor unangenehmen Gefühlen. Im Führungsalltag können sie jedoch dazu führen, dass wir Konflikte umgehen oder Feedback abwehren.',
          },
          {
            icon: Zap,
            title: 'Berufliche Sozialisierung',
            text: 'Erfolgsrezepte aus der Vergangenheit werden zu festen Verhaltensmustern. Was auf einer früheren Karrierestufe funktionierte, kann auf der nächsten zum Hindernis werden.',
          },
        ]}
        columns={3}
      />

      {/* Wie Muster sichtbar werden */}
      <SectionHeader
        tag="Praxis"
        title="Wie unbewusste Muster sichtbar werden"
        text="Der erste Schritt zur Veränderung ist das Erkennen. Diese Schritte helfen Ihnen, Ihre automatischen Reaktionsmuster zu identifizieren."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Körperliche Signale wahrnehmen',
            text: 'Ihr Körper reagiert oft schneller als Ihr Verstand. Anspannung im Nacken, ein flaues Gefühl im Magen oder beschleunigter Herzschlag sind Hinweise auf aktivierte Muster. Lernen Sie, diese somatischen Marker als Informationsquelle zu nutzen.',
          },
          {
            title: 'Wiederkehrende Situationen analysieren',
            text: 'Wenn Sie in bestimmten Situationen immer wieder ähnlich reagieren, obwohl das Ergebnis unbefriedigend ist, deutet das auf ein Muster hin. Fragen Sie sich: Welche Situationen lösen bei mir regelmäßig Stress, Ärger oder Rückzug aus?',
          },
          {
            title: 'Feedback aktiv einholen',
            text: 'Andere Menschen sehen oft, was wir selbst nicht sehen. Regelmäßiges 360-Grad-Feedback oder vertrauensvolle Gespräche mit Kolleginnen und Kollegen können blinde Flecken aufdecken, die uns im Alltag verborgen bleiben.',
          },
          {
            title: 'Innere Glaubenssätze identifizieren',
            text: 'Hinter jedem Verhaltensmuster steht ein Glaubenssatz. Sätze wie „Ich muss alles selbst machen" oder „Fehler darf ich mir nicht erlauben" steuern Ihr Führungsverhalten, ohne dass Sie es bewusst wahrnehmen.',
          },
        ]}
      />

      <QuoteBlock
        text="Wer andere kennt, ist klug. Wer sich selbst kennt, ist erleuchtet."
        author="Laozi"
      />

      {/* Vom Erkennen zum Verändern */}
      <SectionHeader
        tag="Transformation"
        title="Vom Erkennen zum bewussten Handeln"
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Das Erkennen unbewusster Muster ist ein Akt der Selbstführung. Es erfordert die Bereitschaft,
          sich selbst ehrlich zu begegnen, auch dort, wo es unangenehm wird. Neuroplastizität, die
          Fähigkeit unseres Gehirns, sich ein Leben lang umzustrukturieren, macht Veränderung möglich.
          Doch sie braucht bewusste Wiederholung und Geduld.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Der Weg führt nicht vom unbewussten Muster direkt zum neuen Verhalten. Dazwischen liegt eine
          Phase der bewussten Inkompetenz, die sich oft unangenehm anfühlt. Gerade in dieser Phase ist
          es hilfreich, sich professionelle Begleitung zu suchen.
        </p>
      </Prose>

      {/* Kernimpuls */}
      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Ihre unbewussten Muster sind keine Schwäche. Sie sind Überlebensstrategien, die einmal
          sinnvoll waren. Doch als Führungskraft liegt Ihre Verantwortung darin, diese Muster zu
          erkennen und bewusst zu entscheiden, welche Sie beibehalten und welche Sie weiterentwickeln
          wollen. Bewusstheit ist der erste Schritt zur Wahl.
        </p>
      </HighlightBox>

      {/* Reflexionsimpulse */}
      <SectionHeader
        tag="Reflexion"
        title="Reflexionsimpulse"
        text="Widmen Sie sich diesen Fragen in einem ruhigen Moment. Es kann hilfreich sein, Ihre Gedanken schriftlich festzuhalten."
      />

      <Checklist
        items={[
          'In welchen Führungssituationen reagiere ich besonders schnell oder automatisch, ohne vorher nachzudenken?',
          'Welche Konfliktsituationen vermeide ich regelmäßig? Was befürchte ich dabei?',
          'Gibt es einen inneren Glaubenssatz, der mein Führungsverhalten besonders stark prägt?',
          'Wie hat meine berufliche Vergangenheit mein heutiges Führungsverhalten geformt?',
          'Was würde passieren, wenn ich in einer typischen Stresssituation einmal bewusst anders reagiere?',
        ]}
        color="teal"
      />
    </AkademieLayout>
  )
}
