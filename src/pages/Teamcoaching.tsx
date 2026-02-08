import { MessageCircle, Shield, Target, Puzzle, BarChart3, Handshake } from 'lucide-react'
import SubpageLayout from '../components/SubpageLayout'
import SEOHead from '../components/SEOHead'
import {
  SectionHeader,
  BenefitGrid,
  NumberedSteps,
  StatHighlights,
  Checklist,
  QuoteBlock,
  HighlightBox,
  ComparisonTable,
  Prose,
} from '../components/SubpageBlocks'
import heroImg from '../assets/images/Dennis schick.webp'

export default function Teamcoaching() {
  return (
    <SubpageLayout
      heroImage={heroImg}
      category="Team & Organisation"
      title="Teamcoaching: Zusammenarbeit stärken, Teamperformance steigern"
      subtitle="Wie evidenzbasiertes Teamcoaching psychologische Sicherheit schafft, Teamführung verbessert und messbare Ergebnisse in der Teamentwicklung liefert."
      relatedPages={[
        { label: 'Teambuilding Workshop', href: '/teambuildingworkshop' },
        { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
        { label: 'Coaching-Methoden', href: '/coaching-methoden' },
        { label: 'Stressmanagement-Coaching', href: '/stressmanagement-coaching' },
      ]}
    >
      <SEOHead
        title="Teamcoaching: Teamentwicklung & Teamperformance steigern | Dennis Tefett"
        description="Evidenzbasiertes Teamcoaching für bessere Zusammenarbeit, psychologische Sicherheit und messbare Teamperformance. Strukturierte Teamentwicklung und Teamführung mit Dennis Tefett."
        keywords="Teamcoaching, Teamführung, Teamentwicklung, Teamperformance, Teamdynamik, Zusammenarbeit verbessern"
        canonical="https://dennis-tefett.de/teamcoaching/"
      />

      {/* --- Warum Teamcoaching --- */}
      <SectionHeader
        tag="Warum Teamcoaching"
        title="Die Leistung eines Teams wird durch die Qualität der Zusammenarbeit bestimmt"
        text="Teamcoaching ist dann der richtige Ansatz, wenn Ihr Team als Einheit besser werden soll. Es arbeitet mit den Beziehungen, Dynamiken und Strukturen, die Teamperformance ausmachen."
      />

      <Prose>
        <p>
          Im Gegensatz zu Einzelcoaching oder Gruppencoaching begleitet Teamcoaching ein bestehendes Team über einen definierten Zeitraum. Der Fokus liegt nicht auf Einzelpersonen, sondern auf dem System als Ganzem: Wie wird kommuniziert, entschieden und zusammengearbeitet?
        </p>
      </Prose>

      <StatHighlights
        stats={[
          { value: '+40%', label: 'schnellere Entscheidungsfindung im Team' },
          { value: '-35%', label: 'weniger unproduktive Konflikte' },
          { value: '3-6', label: 'Monate für nachhaltige Teamentwicklung' },
          { value: '100%', label: 'angepasst an Ihre Teamdynamik' },
        ]}
      />

      {/* --- Vorteile für Teams --- */}
      <SectionHeader
        tag="Vorteile"
        title="Was Ihr Team durch Teamcoaching gewinnt"
        text="Teamcoaching verfolgt klar definierte Ziele, die sich an dem orientieren, was Teams nachweislich leistungsfähig macht."
      />

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: Shield,
            title: 'Psychologische Sicherheit',
            text: 'Schaffen Sie ein Umfeld, in dem offene Kommunikation, konstruktives Feedback und produktiver Umgang mit Fehlern zur Norm werden.',
          },
          {
            icon: Puzzle,
            title: 'Klare Rollen und Verantwortung',
            text: 'Klären Sie, wer wofür verantwortlich ist, wo Schnittstellen liegen und wie Entscheidungsprozesse ablaufen.',
          },
          {
            icon: MessageCircle,
            title: 'Konstruktive Feedbackkultur',
            text: 'Etablieren Sie Feedback-Routinen, die natürlich in den Arbeitsalltag integriert werden und Entwicklung beschleunigen.',
          },
          {
            icon: Target,
            title: 'Gemeinsame Zielausrichtung',
            text: 'Richten Sie Ihr Team auf gemeinsame Ziele aus und schaffen Sie Verbindlichkeit in der Umsetzung.',
          },
          {
            icon: Handshake,
            title: 'Konfliktkompetenz aufbauen',
            text: 'Lernen Sie als Team, Spannungen früh zu erkennen und konstruktiv zu lösen, statt sie schwelen zu lassen.',
          },
          {
            icon: BarChart3,
            title: 'Messbare Teamperformance',
            text: 'Definieren Sie Erfolgskriterien und messen Sie Fortschritte in Zusammenarbeit, Entscheidungsqualität und Ergebnissen.',
          },
        ]}
      />

      <QuoteBlock
        text="Die Leistung eines Teams wird nicht durch die Summe der Einzelleistungen bestimmt, sondern durch die Qualität der Zusammenarbeit."
      />

      {/* --- Methodik --- */}
      <SectionHeader
        tag="Methodik"
        title="Wie Teamcoaching bei mir abläuft"
        text="Mein Ansatz kombiniert systemische Methoden mit verhaltensorientierten Interventionen und arbeitet mit dem, was im Raum ist."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Teamdiagnose und Auftragsklärung',
            text: 'Gemeinsam mit Teamleitung und Team erfassen wir den Ist-Zustand: Wo liegen die Stärken? Wo entstehen Reibungsverluste? Welche Ziele hat das Teamcoaching?',
          },
          {
            title: 'Vertrauen und Sicherheit schaffen',
            text: 'Psychologische Sicherheit ist das Fundament. Wir schaffen den Rahmen für offene Kommunikation, in dem Fehler als Lernchancen statt als Bedrohung wahrgenommen werden.',
          },
          {
            title: 'Interventionen und Teamarbeit',
            text: 'Mit strukturiertem Teamfeedback, Rollenklärungsübungen, Simulationen und Retrospektiven arbeiten wir an realen Herausforderungen Ihres Arbeitsalltags.',
          },
          {
            title: 'Transfer und Verankerung',
            text: 'Jede Coaching-Einheit endet mit konkreten Vereinbarungen. Regelmässige Check-ins stellen sicher, dass Veränderungen im Alltag verankert werden und nicht verpuffen.',
          },
        ]}
      />

      {/* --- Ergebnisse --- */}
      <SectionHeader
        tag="Ergebnisse"
        title="Vorher und Nachher: Was Teamcoaching bewirkt"
        text="Die Wirkung zeigt sich in messbaren Veränderungen der Teamdynamik und Zusammenarbeit."
      />

      <ComparisonTable
        beforeLabel="Ohne Teamcoaching"
        afterLabel="Mit Teamcoaching"
        rows={[
          {
            aspect: 'Kommunikation',
            before: 'Unausgesprochene Konflikte',
            after: 'Offener, konstruktiver Austausch',
          },
          {
            aspect: 'Entscheidungen',
            before: 'Langwierig und unklar',
            after: 'Schnell und transparent',
          },
          {
            aspect: 'Fehlerkultur',
            before: 'Schuldzuweisungen und Vertuschen',
            after: 'Lernkultur und Offenheit',
          },
          {
            aspect: 'Zusammenarbeit',
            before: 'Silodenken und Einzelkämpfer',
            after: 'Echte Kollaboration und Synergie',
          },
          {
            aspect: 'Fluktuation',
            before: 'Hohe Wechselbereitschaft',
            after: 'Stärkere Bindung und Zugehörigkeit',
          },
        ]}
      />

      {/* --- Team Health Check --- */}
      <SectionHeader
        tag="Team Health Check"
        title="Braucht Ihr Team Coaching? Prüfen Sie diese Signale"
        text="Diese Anzeichen deuten darauf hin, dass Teamcoaching einen wirkungsvollen Hebel bieten kann."
      />

      <Checklist
        color="gold"
        items={[
          'Konflikte werden vermieden oder eskalieren regelmässig',
          'Meetings fühlen sich unproduktiv an und enden ohne klare Ergebnisse',
          'Teammitglieder halten sich mit Meinungen und Ideen zurück',
          'Rollen und Verantwortlichkeiten sind unklar oder überschneiden sich',
          'Es fehlt an gemeinsamer Ausrichtung trotz individueller Kompetenz',
          'Veränderungsprozesse (Reorg, neue Führung) fordern das Team heraus',
          'Die Stimmung im Team hat sich spürbar verschlechtert',
          'Gute Mitarbeitende verlassen das Team oder denken darüber nach',
        ]}
      />

      <HighlightBox title="Formate und Dauer" color="teal">
        <p>
          Teamcoaching kann als kompakter Workshop (1-2 Tage), als begleitender Prozess über 3 bis 6 Monate oder als Kombination gestaltet werden. Die Führungskraft wird immer als Multiplikator einbezogen, damit neue Praktiken im Alltag gelebt und eingefordert werden. Im Erstgespräch empfehle ich das Format, das für Ihre Situation den grössten Hebel bietet.
        </p>
      </HighlightBox>

    </SubpageLayout>
  )
}
