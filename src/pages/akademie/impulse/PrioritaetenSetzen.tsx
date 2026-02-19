import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import { SectionHeader, Prose, BenefitGrid, NumberedSteps, QuoteBlock, HighlightBox, Checklist } from '../../../components/SubpageBlocks'
import { Target, Ban, BarChart3, Scissors, Brain, Clock } from 'lucide-react'

export default function PrioritaetenSetzen() {
  useEffect(() => {
    document.title = 'Prioritäten setzen: Die Kunst des Weglassens | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Strategische Klarheit"
      moduleSlug="strategische-klarheit"
      impulsSlug="prioritaeten-setzen"
      color="gold"
      impulsTitle="Prioritäten setzen: Die Kunst des Weglassens"
      prevImpuls={{ title: 'Entscheidungsqualität verbessern', href: '/akademie/strategische-klarheit/entscheidungsqualitaet' }}
      nextImpuls={{ title: 'Vision entwickeln und kommunizieren', href: '/akademie/strategische-klarheit/vision-entwickeln' }}
      relatedCoachingPages={[
        { label: 'Fokus & Klarheit', href: '/fokus-und-klarheit' },
        { label: 'Strategische Geschäftsplanung', href: '/strategische-geschaftsplanung' },
      ]}
    >
      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          In einer Welt der unbegrenzten Möglichkeiten ist nicht das Ja-Sagen die entscheidende Führungskompetenz,
          sondern das bewusste Nein. Jede Priorität, die Sie setzen, bedeutet gleichzeitig, etwas anderes
          loszulassen. Dieser Impuls beleuchtet, warum die Fähigkeit des strategischen Weglassens der
          Schlüssel zu nachhaltiger Wirksamkeit ist.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Aufmerksamkeitsökonomie zeigt uns: Unsere kognitive Kapazität ist endlich. Studien der
          Arbeitspsychologie belegen, dass Führungskräfte täglich hunderte Mikro-Entscheidungen treffen.
          Wer nicht bewusst auswählt, wird von der Dringlichkeit gesteuert statt von der Wichtigkeit.
        </p>
      </Prose>

      <SectionHeader
        tag="Grundlagen"
        title="Warum klassische Priorisierung oft scheitert"
        text="Viele Führungskräfte nutzen die Eisenhower-Matrix, doch sie greift in komplexen Führungsrealitäten häufig zu kurz."
      />

      <BenefitGrid
        items={[
          {
            icon: Target,
            title: 'Dringlichkeitsfalle',
            text: 'Unser Gehirn belohnt die Erledigung dringender Aufgaben mit Dopamin, während strategisch wichtige Projekte aufgeschoben werden.',
          },
          {
            icon: Clock,
            title: 'Aufmerksamkeitsökonomie',
            text: 'Jede Minute, die in eine Aufgabe fließt, fehlt einer anderen. Die wahren Kosten einer Entscheidung liegen in den Opportunitätskosten.',
          },
          {
            icon: Brain,
            title: 'Kognitive Überlastung',
            text: 'Bei mehr als fünf gleichzeitigen Prioritäten sinkt die Entscheidungsqualität messbar. Weniger ist neurologisch mehr.',
          },
        ]}
        columns={3}
      />

      <SectionHeader
        tag="Perspektivwechsel"
        title="Das strategische Nein als Führungsinstrument"
        text="Echte Priorisierung beginnt dort, wo Sie bereit sind, vermeintlich Gutes zugunsten des Wesentlichen loszulassen."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Das Pareto-Prinzip besagt, dass etwa 20 Prozent der Aktivitäten 80 Prozent der Ergebnisse erzeugen.
          Für Führungskräfte bedeutet das: Nicht die Menge der Initiativen entscheidet über Erfolg, sondern die
          konsequente Konzentration auf die wenigen Hebel mit der größten Wirkung. Die neurowissenschaftliche
          Forschung bestätigt, dass fokussiertes Arbeiten an wenigen klaren Zielen die Qualität der Ergebnisse
          signifikant steigert.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Ein strategisches Nein erfordert Mut, denn es macht die eigenen Werte sichtbar. Gleichzeitig
          ist es ein Zeichen von Klarheit und Respekt gegenüber dem eigenen Team, das so verstehen kann,
          worauf es wirklich ankommt.
        </p>
      </Prose>

      <QuoteBlock
        text="Strategie bedeutet nicht, mehr zu tun, sondern bewusst zu wählen, was man nicht tut."
        author="Michael Porter"
      />

      <SectionHeader
        tag="Methodik"
        title="Vom Reagieren zum Gestalten: Ein Priorisierungsprozess"
        text="Mit diesen Schritten entwickeln Sie eine Priorisierungspraxis, die über einfache Dringlichkeits-Kategorien hinausgeht."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Strategische Anker definieren',
            text: 'Identifizieren Sie Ihre drei bis fünf übergeordneten strategischen Ziele. Diese dienen als Bewertungsmaßstab für alle nachfolgenden Entscheidungen.',
          },
          {
            title: 'Aktivitäten-Audit durchführen',
            text: 'Erfassen Sie eine Woche lang alle Ihre Aktivitäten und bewerten Sie jede einzelne danach, wie stark sie auf Ihre strategischen Anker einzahlt.',
          },
          {
            title: 'Die Stopp-Liste erstellen',
            text: 'Definieren Sie mindestens drei Aktivitäten, die Sie bewusst beenden oder delegieren werden. Eine Stopp-Liste ist wirkungsvoller als jede To-do-Liste.',
          },
          {
            title: 'Schutzräume für das Wesentliche schaffen',
            text: 'Blockieren Sie feste Zeitfenster für Ihre strategischen Prioritäten. Was keinen festen Platz im Kalender hat, wird vom Tagesgeschäft verdrängt.',
          },
          {
            title: 'Regelmäßige Priorisierungsreflexion',
            text: 'Überprüfen Sie wöchentlich: Habe ich meine Zeit auf die wirklich wichtigen Themen konzentriert? Wo habe ich mich von Dringlichkeit verführen lassen?',
          },
        ]}
      />

      <HighlightBox title="Kernimpuls" color="gold">
        <p>
          Wahre Priorisierung ist kein Ordnungssystem für Ihre Aufgabenliste, sondern ein Akt strategischer
          Klarheit. Sie erfordert den Mut, bewusst loszulassen, was gut erscheint, um Raum für das
          Wesentliche zu schaffen. Die wirksamsten Führungskräfte zeichnen sich nicht durch die Menge
          ihrer Aktivitäten aus, sondern durch die Konsequenz ihrer Fokussierung.
        </p>
      </HighlightBox>

      <SectionHeader
        tag="Vertiefung"
        title="Drei Dimensionen der Priorisierung"
      />

      <BenefitGrid
        items={[
          {
            icon: Scissors,
            title: 'Subtraktives Denken',
            text: 'Fragen Sie nicht, was noch hinzukommen muss, sondern was wegfallen kann. Vereinfachung schafft Klarheit und Energie.',
          },
          {
            icon: Ban,
            title: 'Grenzen als Ressource',
            text: 'Klare Grenzen bei Verfügbarkeit und Zusagen schützen Ihre strategische Handlungsfähigkeit und signalisieren Wertschätzung für das Wesentliche.',
          },
          {
            icon: BarChart3,
            title: 'Wirkungsorientierung',
            text: 'Bewerten Sie Aufgaben nicht nach Aufwand, sondern nach erwarteter Hebelwirkung. Kleine Aktionen können große strategische Wirkung entfalten.',
          },
        ]}
        columns={3}
      />

      <SectionHeader
        tag="Reflexion"
        title="Reflexionsimpulse"
        text="Diese Fragen unterstützen Sie dabei, Ihre persönliche Priorisierungspraxis zu reflektieren und weiterzuentwickeln."
      />

      <Checklist
        items={[
          'Welche meiner aktuellen Aktivitäten zahlen am stärksten auf meine strategischen Ziele ein?',
          'Wo sage ich aus Gewohnheit oder Pflichtgefühl Ja, obwohl ein Nein angemessener wäre?',
          'Welche drei Dinge würde ich sofort stoppen, wenn ich wüsste, dass niemand es mir übel nimmt?',
          'Wie würde sich mein Führungsalltag verändern, wenn ich nur noch die Hälfte meiner aktuellen Projekte verfolgen würde?',
          'Woran erkenne ich, dass ich mich von Dringlichkeit statt von Wichtigkeit leiten lasse?',
        ]}
        color="gold"
      />
    </AkademieLayout>
  )
}
