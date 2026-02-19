import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import { SectionHeader, Prose, BenefitGrid, NumberedSteps, QuoteBlock, HighlightBox, Checklist } from '../../../components/SubpageBlocks'
import { Ear, Layers, Heart, Zap, Users, Repeat } from 'lucide-react'

export default function ZuhoerAlsKompetenz() {
  useEffect(() => {
    document.title = 'Zuhören als Führungskompetenz | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Kommunikation & Beziehung"
      moduleSlug="kommunikation-beziehung"
      impulsSlug="zuhoeren-als-kompetenz"
      color="teal"
      impulsTitle="Zuhören als Führungskompetenz"
      prevImpuls={{ title: 'Konflikte als Chance: Konstruktive Konfliktlösung', href: '/akademie/kommunikation-beziehung/konflikte-als-chance' }}
      nextImpuls={{ title: 'Feedback geben und nehmen', href: '/akademie/kommunikation-beziehung/feedback-geben-nehmen' }}
      relatedCoachingPages={[
        { label: 'Teamcoaching', href: '/teamcoaching' },
        { label: 'Teambuilding-Workshop', href: '/teambuildingworkshop' },
      ]}
    >
      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Zuhören wird im Führungskontext häufig unterschätzt. Während Rhetorik, Präsentationskompetenz
          und Überzeugungskraft als zentrale Führungsfähigkeiten gelten, zeigt die Forschung: Die
          wirksamsten Führungskräfte zeichnen sich nicht durch das aus, was sie sagen, sondern durch
          die Qualität ihres Zuhörens.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Neurowissenschaft hat nachgewiesen, dass echtes Zugehörtwerden im Gehirn des Sprechers
          dieselben Belohnungszentren aktiviert wie materielle Gratifikation. Wenn Menschen sich wirklich
          gehört fühlen, steigen Vertrauen, Offenheit und Kooperationsbereitschaft messbar an. Zuhören
          ist damit eines der mächtigsten und zugleich am wenigsten genutzten Führungsinstrumente.
        </p>
      </Prose>

      <SectionHeader
        tag="Grundlagen"
        title="Die vier Ebenen des Zuhörens"
        text="Nicht jedes Zuhören ist gleich. Die Qualität des Zuhörens lässt sich in vier aufeinander aufbauende Ebenen unterscheiden."
      />

      <BenefitGrid
        items={[
          {
            icon: Ear,
            title: 'Herunterladen',
            text: 'Das oberflächlichste Zuhören: Wir hören nur, was unsere bestehenden Annahmen bestätigt. Alles andere wird unbewusst gefiltert.',
          },
          {
            icon: Layers,
            title: 'Faktisches Zuhören',
            text: 'Wir nehmen wahr, was anders ist als erwartet. Aufmerksamkeit für Daten und Fakten, aber noch wenig Verbindung zur Person.',
          },
          {
            icon: Heart,
            title: 'Empathisches Zuhören',
            text: 'Wir hören nicht nur Worte, sondern nehmen Emotionen und Befindlichkeiten wahr. Hier entsteht echte zwischenmenschliche Verbindung.',
          },
          {
            icon: Zap,
            title: 'Generatives Zuhören',
            text: 'Die tiefste Ebene: Wir hören auf das, was entstehen will. In diesem Raum entstehen neue Ideen und Möglichkeiten, die vorher nicht sichtbar waren.',
          },
        ]}
        columns={2}
      />

      <QuoteBlock
        text="Die meisten Menschen hören nicht zu, um zu verstehen, sondern um zu antworten."
        author="Stephen R. Covey"
      />

      <SectionHeader
        tag="Praxis"
        title="Aktives Zuhören in der Führungspraxis"
        text="Aktives Zuhören ist eine erlernbare Fertigkeit, die durch bewusstes Üben zur natürlichen Haltung wird."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Präsenz herstellen',
            text: 'Schaffen Sie bewusst Raum: Telefon weg, Laptop zu, Blickkontakt herstellen. Echte Präsenz ist in der heutigen Arbeitswelt ein seltenes und wertvolles Geschenk.',
          },
          {
            title: 'Den Redeimpuls zügeln',
            text: 'Widerstehen Sie dem Drang, sofort zu antworten, zu bewerten oder Lösungen anzubieten. Lassen Sie Pausen zu. Oft kommt das Wesentliche nach der ersten Pause.',
          },
          {
            title: 'Spiegeln und Paraphrasieren',
            text: 'Geben Sie in eigenen Worten wieder, was Sie verstanden haben. Das zeigt Ihrem Gegenüber, dass Sie wirklich zuhören, und hilft, Missverständnisse frühzeitig zu klären.',
          },
          {
            title: 'Vertiefende Fragen stellen',
            text: 'Stellen Sie offene Fragen, die zum Nachdenken einladen: "Was steckt dahinter?", "Wie fühlt sich das für Sie an?", "Was wäre Ihnen am wichtigsten?"',
          },
          {
            title: 'Das Ungesagte wahrnehmen',
            text: 'Achten Sie auf Körpersprache, Tonfall und Pausen. Oft liegt das Wichtigste zwischen den Zeilen. Benennen Sie behutsam, was Sie wahrnehmen.',
          },
        ]}
      />

      <SectionHeader
        tag="Wirkung"
        title="Was gutes Zuhören bewirkt"
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Echtes Zuhören verändert die Dynamik in Teams grundlegend. Wenn Mitarbeitende die Erfahrung
          machen, dass ihre Perspektive wirklich gehört wird, steigt die psychologische Sicherheit.
          Menschen teilen ehrlicher, denken mutiger und bringen sich engagierter ein. Die
          Forschung von Amy Edmondson zeigt, dass Teams mit hoher psychologischer Sicherheit
          signifikant bessere Ergebnisse erzielen.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Transformatives Zuhören geht noch einen Schritt weiter. Es schafft einen Raum, in dem der
          Sprechende sich selbst besser versteht. Durch aufmerksames, wertfreies Zuhören ermöglichen
          Sie Ihrem Gegenüber, die eigenen Gedanken zu ordnen und zu vertiefen. In solchen Momenten
          wird Zuhören zur Form der Führung.
        </p>
      </Prose>

      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Zuhören ist kein passiver Akt, sondern eine der aktivsten Formen der Führung. Es erfordert
          die Disziplin, eigene Gedanken zurückzustellen, die Offenheit, sich überraschen zu lassen,
          und den Mut, nicht sofort Antworten haben zu müssen. Wer als Führungskraft wirklich zuhört,
          schenkt anderen das, was in der heutigen Arbeitswelt am meisten fehlt: ungeteilte Aufmerksamkeit.
        </p>
      </HighlightBox>

      <BenefitGrid
        items={[
          {
            icon: Users,
            title: 'Psychologische Sicherheit stärken',
            text: 'Teams, deren Führungskraft aktiv zuhört, zeigen höhere Fehleroffenheit und mehr kreative Initiative, weil Vertrauen die Basis bildet.',
          },
          {
            icon: Repeat,
            title: 'Zuhörrituale etablieren',
            text: 'Schaffen Sie feste Formate wie Einzelgespräche ohne Agenda oder stille Runden in Meetings, in denen jede Stimme bewusst gehört wird.',
          },
          {
            icon: Zap,
            title: 'Vom Problemlöser zum Möglichmacher',
            text: 'Statt sofort Lösungen zu bieten, ermöglichen Sie durch Zuhören, dass andere ihre eigenen Lösungen finden. Das stärkt Eigenverantwortung und Kompetenz.',
          },
        ]}
        columns={3}
      />

      <SectionHeader
        tag="Reflexion"
        title="Reflexionsimpulse"
        text="Nutzen Sie diese Fragen, um Ihre eigene Zuhörqualität bewusst zu reflektieren und weiterzuentwickeln."
      />

      <Checklist
        items={[
          'In welchen Situationen fällt es mir besonders schwer, wirklich zuzuhören, und warum?',
          'Wie oft unterbreche ich mein Gegenüber, und was treibt mich dazu?',
          'Wann habe ich zuletzt erlebt, dass mir jemand wirklich zugehört hat, und wie hat es sich angefühlt?',
          'Welche meiner Gewohnheiten hindern mich am meisten daran, auf der Ebene des empathischen Zuhörens präsent zu sein?',
          'Wie könnte ich in meinem nächsten Gespräch bewusst eine Ebene tiefer zuhören als gewöhnlich?',
        ]}
        color="teal"
      />
    </AkademieLayout>
  )
}
