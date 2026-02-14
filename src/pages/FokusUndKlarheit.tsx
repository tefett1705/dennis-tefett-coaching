import SubpageLayout from '../components/SubpageLayout'
import SEOHead from '../components/SEOHead'
import {
  BenefitGrid,
  NumberedSteps,
  StatHighlights,
  Checklist,
  QuoteBlock,
  HighlightBox,
  SectionHeader,
  ComparisonTable,
  Prose,
} from '../components/SubpageBlocks'
import {
  Focus,
  BrainCircuit,
  Clock,
  ShieldOff,
  ListChecks,

  EyeOff,
  Gauge,
  Timer,
  Crosshair,
} from 'lucide-react'
import heroImg from '../assets/images/coaching-bild-klient-ueberlegt.webp'

export default function FokusUndKlarheit() {
  return (
    <SubpageLayout
      heroImage={heroImg}
      category="Produktivität & Mindset"
      title="Fokus und Klarheit: Souverän entscheiden, konzentriert handeln"
      subtitle="Wissenschaftlich fundierte Strategien, mit denen Sie als Führungskraft den Überblick behalten, bessere Entscheidungen treffen und konzentrierter arbeiten."
      relatedPages={[
        { label: 'Stressmanagement-Coaching', href: '/stressmanagement-coaching' },
        { label: 'Selbstwirksamkeit stärken', href: '/selbstwirksamkeit-staerken' },
        { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
        { label: 'Nachhaltige Verhaltensänderung', href: '/nachhaltige-verhaltensaenderung' },
      ]}
    >
      <SEOHead
        title="Fokus und Klarheit: Methoden für mehr Konzentration | Dennis Tefett"
        description="Wissenschaftlich fundierte Strategien für mehr Fokus und Klarheit im Führungsalltag. Deep Work, Prioritäten setzen und Entscheidungsfähigkeit stärken für konzentriertes Arbeiten."
        keywords="Fokus, Klarheit, Prioritäten setzen, Entscheidungsfähigkeit, Konzentration, Deep Work"
        canonical="https://dennis-tefett.de/fokus-und-klarheit"
      />

      {/* --- Warum Fokus zählt --- */}
      <SectionHeader
        tag="Warum es zählt"
        title="Warum Fokus die wichtigste Führungskompetenz unserer Zeit ist"
        text="In einer Welt permanenter Erreichbarkeit und endloser Meetings ist Fokus zur knappsten Ressource geworden. Konzentration steigern ist keine Frage der Willenskraft, sondern eine Frage der richtigen Systeme."
      />

      <StatHighlights
        stats={[
          { value: '35.000', label: 'Entscheidungen pro Tag als Führungskraft' },
          { value: '23 Min.', label: 'Refokussierungszeit nach jeder Ablenkung' },
          { value: '90 Min.', label: 'natürlicher Konzentrationszyklus' },
          { value: '2–3 h', label: 'Deep Work reichen für spürbare Ergebnisse' },
        ]}
      />

      <Prose>
        <p>
          Multitasking ist ein Mythos. Unser Gehirn kann zu jedem Zeitpunkt nur eine komplexe Aufgabe verarbeiten. Was wir als Multitasking erleben, ist schnelles Hin-und-Her-Schalten, das kognitive Kosten verursacht und die Fehlerrate drastisch erhöht. Wer seine Konzentration gezielt steuert, arbeitet nicht länger, sondern intelligenter.
        </p>
      </Prose>

      {/* --- Klarheitsblocker --- */}
      <SectionHeader
        tag="Hindernisse erkennen"
        title="Was Ihren Fokus blockiert und wie Sie es ändern"
      />

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: EyeOff,
            title: 'Ständige Unterbrechungen',
            text: 'Push-Benachrichtigungen, spontane Anfragen und offene Bürotüren kosten nicht nur Sekunden; jede Unterbrechung kostet bis zu 23 Minuten Refokussierungszeit.',
          },
          {
            icon: ShieldOff,
            title: 'Fehlende Priorisierung',
            text: 'Ohne klares Priorisierungssystem dominiert das Dringende über das Wichtige. Strategische Aufgaben bleiben dauerhaft auf der Strecke.',
          },
          {
            icon: Gauge,
            title: 'Entscheidungsmüdigkeit',
            text: 'Die Qualität Ihrer Entscheidungen nimmt im Tagesverlauf ab. Erschöpfte Entscheider greifen zu konventionelleren Optionen oder vermeiden Entscheidungen ganz.',
          },
          {
            icon: BrainCircuit,
            title: 'Cognitive Overload',
            text: 'Das Arbeitsgedächtnis verarbeitet nur 4–7 Informationseinheiten gleichzeitig. Offene E-Mails, laufende Projekte und Meetings überschreiten diese Kapazität permanent.',
          },
          {
            icon: Clock,
            title: 'Meeting-Überflutung',
            text: 'Führungskräfte verbringen 50–70 % ihrer Arbeitszeit in Meetings. Ohne bewusste Steuerung bleibt kein Raum für konzentriertes, strategisches Arbeiten.',
          },
          {
            icon: Timer,
            title: 'Fehlende Erholungspausen',
            text: 'Ohne Pausen nach konzentrierten Arbeitsphasen sinkt die kognitive Leistung rapide. Der natürliche 90-Minuten-Rhythmus wird ignoriert.',
          },
        ]}
      />

      {/* --- Methoden für mehr Fokus --- */}
      <SectionHeader
        tag="Bewährte Methoden"
        title="Vier Strategien für mehr Fokus und Klarheit"
        text="Diese Ansätze sind praxiserprobt und lassen sich direkt in Ihren Führungsalltag integrieren."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Time-Blocking für Deep Work',
            text: 'Reservieren Sie feste Zeitfenster für konzentrierte Arbeit im Kalender. Behandeln Sie diese Blöcke mit derselben Priorität wie ein Meeting mit dem Vorstand. Bereits 2–3 Stunden täglich verbessern die strategische Arbeitsqualität spürbar.',
          },
          {
            title: 'Kommunikationsfenster statt permanenter Reaktivität',
            text: 'Bündeln Sie E-Mail- und Nachrichtenbearbeitung in zwei bis drei feste Zeitfenster pro Tag. So gewinnen Sie zusammenhängende Arbeitsblöcke zurück, ohne Erreichbarkeit zu verlieren.',
          },
          {
            title: 'Achtsamkeitstraining für die Aufmerksamkeitssteuerung',
            text: 'Bereits 10 Minuten täglicher Achtsamkeitspraxis stärken nach 8 Wochen messbar den präfrontalen Kortex, zuständig für Fokus, Entscheidungsfindung und emotionale Regulation.',
          },
          {
            title: 'Wöchentliches Review für strategische Klarheit',
            text: 'Nehmen Sie sich wöchentlich 30 Minuten: Was lief gut? Was bleibt liegen und warum? Maximal drei Hauptprioritäten für die kommende Woche definieren. Nicht zehn, nicht fünf, drei.',
          },
        ]}
      />

      <QuoteBlock
        text="Klarheit entsteht nicht durch mehr Information, sondern durch die Fähigkeit, das Wesentliche vom Unwesentlichen zu unterscheiden, und den Mut, sich auf das Wesentliche zu konzentrieren."
      />

      {/* --- Vorteile von Fokus --- */}
      <SectionHeader
        tag="Ihre Vorteile"
        title="Was sich verändert, wenn Sie Fokus und Klarheit zurückgewinnen"
      />

      <ComparisonTable
        beforeLabel="Ohne Fokus-Strategie"
        afterLabel="Mit gezieltem Fokus-Training"
        rows={[
          {
            aspect: 'Entscheidungen',
            before: 'Zögerlich, aufgeschoben, unklar',
            after: 'Schnell, fundiert und souverän',
          },
          {
            aspect: 'Arbeitszeit',
            before: 'Fragmentiert und reaktiv',
            after: 'Strukturiert und wirkungsvoll',
          },
          {
            aspect: 'Strategie',
            before: 'Geht im Tagesgeschäft unter',
            after: 'Bekommt bewusst Raum und Priorität',
          },
          {
            aspect: 'Stresslevel',
            before: 'Dauerhaft erhöht, Überforderung',
            after: 'Reguliert, kontrollierte Belastung',
          },
          {
            aspect: 'Teamwirkung',
            before: 'Hektik überträgt sich aufs Team',
            after: 'Ruhe und Klarheit strahlen aus',
          },
        ]}
      />

      {/* --- Tägliche Gewohnheiten --- */}
      <SectionHeader
        tag="Sofort umsetzbar"
        title="Ihre tägliche Fokus-Checkliste"
        text="Diese Gewohnheiten lassen sich ab morgen umsetzen und entfalten ihre Wirkung schrittweise."
      />

      <HighlightBox title="Morgenroutine für mentale Klarheit" color="teal">
        <Checklist
          items={[
            'Keine Bildschirme in den ersten 30 Minuten; stattdessen Stille, Atem, Klarheit',
            'Tagesintention setzen: Was ist die eine Sache, die diesen Tag erfolgreich macht?',
            '15–30 Min. Bewegung: Spaziergang, Yoga oder kurzes Training',
            'Maximal 3 Hauptaufgaben für den Tag festlegen',
          ]}
          color="teal"
        />
      </HighlightBox>

      <HighlightBox title="Über den Tag verteilt" color="gold">
        <Checklist
          items={[
            'Push-Benachrichtigungen deaktivieren, Fokus schützen',
            '90-Minuten-Rhythmus respektieren: konzentriert arbeiten, dann bewusst pausieren',
            'E-Mails nur in definierten Zeitfenstern bearbeiten',
            'Vor jeder neuen Aufgabe fragen: Ist das gerade das Wichtigste?',
            'Shutdown-Ritual am Abend: offene Aufgaben notieren, morgen planen, bewusst abschalten',
          ]}
          color="gold"
        />
      </HighlightBox>

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: Focus,
            title: 'Klarheit in Sekunden',
            text: 'Drei Fragen für sofortige Klarheit: Was ist jetzt wichtig? Was kann warten? Was kann jemand anderes übernehmen?',
          },
          {
            icon: Crosshair,
            title: 'Fokus ist trainierbar',
            text: 'Fokus ist kein Talent, sondern eine Fähigkeit, die sich wie ein Muskel trainieren lässt. Regelmässigkeit schlägt Intensität.',
          },
          {
            icon: ListChecks,
            title: 'Systeme statt Willenskraft',
            text: 'Mit dem richtigen System wird Fokus zum natürlichen Zustand, statt zum täglichen Kampf gegen Ablenkungen.',
          },
        ]}
      />

      <Prose>
        <p>
          Im Coaching entwickeln wir gemeinsam ein System, das zu Ihrem Arbeitskontext und Ihrer Persönlichkeit passt. Wir experimentieren mit verschiedenen Ansätzen, reflektieren die Ergebnisse und optimieren iterativ. Das Ziel ist nicht, ein allgemeines Produktivitätssystem zu kopieren, sondern Ihre persönliche Arbeitsweise so zu gestalten, dass Fokus und Klarheit zum natürlichen Zustand werden.
        </p>
      </Prose>

      <QuoteBlock
        text="Fokus ist kein Talent, das manche haben und andere nicht. Es ist eine Fähigkeit, die sich trainieren lässt wie ein Muskel. Und wie bei jedem Training gilt: Regelmässigkeit schlägt Intensität."
      />

    </SubpageLayout>
  )
}
