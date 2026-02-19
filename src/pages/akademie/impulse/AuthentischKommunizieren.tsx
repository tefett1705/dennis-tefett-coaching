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
import { Shield, Heart, Target } from 'lucide-react'

export default function AuthentischKommunizieren() {
  useEffect(() => {
    document.title = 'Authentisch kommunizieren als Führungskraft | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Führung & Wirkung"
      moduleSlug="fuehrung-und-wirkung"
      impulsSlug="authentisch-kommunizieren"
      color="teal"
      impulsTitle="Authentisch kommunizieren als Führungskraft"
      prevImpuls={{
        title: 'Unbewusste Führungsmuster erkennen',
        href: '/akademie/fuehrung-und-wirkung/unbewusste-muster',
      }}
      nextImpuls={{
        title: 'Vom Manager zum Leader',
        href: '/akademie/fuehrung-und-wirkung/manager-zum-leader',
      }}
      relatedCoachingPages={[
        { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
        { label: 'Teamcoaching', href: '/teamcoaching' },
      ]}
    >
      {/* Einführung */}
      <SectionHeader
        tag="Kommunikation"
        title="Die Kraft der Kongruenz"
        text="Authentische Kommunikation entsteht, wenn das, was Sie denken, fühlen und sagen, übereinstimmt. Diese Kongruenz ist die Grundlage für Vertrauen und Glaubwürdigkeit."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          In der Führungskommunikation steht oft die Frage im Raum: Soll ich diplomatisch sein oder
          ehrlich? Die Antwort lautet: beides. Authentische Kommunikation bedeutet nicht, ungefiltert
          alles zu sagen, was man denkt. Sie bedeutet, einen Weg zu finden, der ehrlich und zugleich
          respektvoll ist.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Forschung zur psychologischen Sicherheit zeigt: Teams, in denen offen kommuniziert wird,
          sind innovativer, lernen schneller aus Fehlern und zeigen höhere Zufriedenheit. Doch
          psychologische Sicherheit entsteht nicht durch Harmonie. Sie entsteht durch das Vertrauen,
          dass Ehrlichkeit keine negativen Konsequenzen hat.
        </p>
      </Prose>

      {/* Drei Dimensionen */}
      <SectionHeader
        tag="Das Modell"
        title="Drei Dimensionen authentischer Führungskommunikation"
      />

      <BenefitGrid
        items={[
          {
            icon: Heart,
            title: 'Emotionale Ehrlichkeit',
            text: 'Zeigen Sie sich als Mensch mit Gefühlen. Führungskräfte, die eigene Unsicherheiten oder Betroffenheit angemessen teilen, werden als vertrauenswürdiger und nahbarer erlebt.',
          },
          {
            icon: Target,
            title: 'Inhaltliche Klarheit',
            text: 'Sagen Sie klar, was Sie meinen. Mehrdeutige Botschaften erzeugen Unsicherheit und laden zu Fehlinterpretationen ein. Klarheit ist kein Zeichen von Härte, sondern von Respekt.',
          },
          {
            icon: Shield,
            title: 'Psychologische Sicherheit',
            text: 'Schaffen Sie einen Raum, in dem andere offen sprechen können. Reagieren Sie auf kritisches Feedback mit Neugier statt mit Abwehr. Ihr Verhalten setzt den Standard.',
          },
        ]}
        columns={3}
      />

      {/* Praxisschritte */}
      <SectionHeader
        tag="Praxis"
        title="Authentische Kommunikation entwickeln"
        text="Authentizität ist keine Eigenschaft, die man hat oder nicht hat. Sie ist eine Fähigkeit, die sich Schritt für Schritt entwickeln lässt."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Den inneren Zustand wahrnehmen',
            text: 'Bevor Sie sprechen, halten Sie kurz inne. Was fühlen Sie gerade? Was ist Ihre tatsächliche Haltung zum Thema? Diese Mikroreflexion dauert nur Sekunden, kann aber den Unterschied zwischen einer mechanischen und einer echten Kommunikation ausmachen.',
          },
          {
            title: 'Klarheit vor Höflichkeit',
            text: 'Überprüfen Sie Ihre Botschaften auf versteckte Mehrdeutigkeiten. Formulierungen wie „Das könnte man auch anders sehen" oder „Vielleicht wäre es sinnvoll" verwässern Ihre Aussage. Sagen Sie stattdessen klar, was Sie denken, und begründen Sie Ihre Position.',
          },
          {
            title: 'Aktiv zuhören und nachfragen',
            text: 'Authentische Kommunikation ist keine Einbahnstraße. Hören Sie zu, um zu verstehen, nicht um zu antworten. Stellen Sie offene Fragen und paraphrasieren Sie, was Sie verstanden haben. Das signalisiert Wertschätzung und beugt Missverständnissen vor.',
          },
          {
            title: 'Feedback als Geschenk behandeln',
            text: 'Wenn Mitarbeitende Ihnen kritisches Feedback geben, ist das ein Vertrauensbeweis. Reagieren Sie mit Dankbarkeit und Reflexion, nicht mit Erklärungen oder Rechtfertigungen. Ihre Reaktion bestimmt, ob es beim nächsten Mal wieder Feedback gibt.',
          },
          {
            title: 'Konsistenz zwischen Worten und Handeln',
            text: 'Der wirksamste Kommunikationskanal ist Ihr Verhalten. Wenn Ihre Taten nicht zu Ihren Worten passen, verlieren Ihre Botschaften jede Glaubwürdigkeit. Prüfen Sie regelmäßig, ob Ihre Handlungen Ihre kommunizierten Werte widerspiegeln.',
          },
        ]}
      />

      <QuoteBlock
        text="Das Wichtigste in der Kommunikation ist, zu hören, was nicht gesagt wird."
        author="Peter Drucker"
      />

      {/* Spannungsfeld */}
      <SectionHeader
        tag="Vertiefung"
        title="Das Spannungsfeld zwischen Klarheit und Empathie"
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Viele Führungskräfte erleben Klarheit und Empathie als Gegensätze. Entweder sie sind direkt
          und riskieren, als kalt wahrgenommen zu werden, oder sie sind empathisch und riskieren,
          unklar zu wirken. Doch neurowissenschaftliche Forschung zeigt: Das Gehirn verarbeitet
          empathische und klare Kommunikation nicht als Widerspruch.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Der Schlüssel liegt in der Reihenfolge. Beginnen Sie mit der emotionalen Verbindung,
          zeigen Sie, dass Sie die Perspektive des anderen verstehen. Dann formulieren Sie Ihre
          klare Botschaft. Diese Abfolge aktiviert beim Gegenüber zunächst das Belohnungssystem und
          erhöht die Bereitschaft, auch schwierige Inhalte anzunehmen.
        </p>
      </Prose>

      {/* Kernimpuls */}
      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Authentische Kommunikation erfordert Mut. Den Mut, sich zu zeigen, klar zu sein und
          gleichzeitig offen für die Reaktion des anderen zu bleiben. Sie ist kein Rezept, sondern eine
          Haltung: die Bereitschaft, in jedem Gespräch ganz präsent zu sein und Verantwortung für die
          eigene Wirkung zu übernehmen.
        </p>
      </HighlightBox>

      {/* Reflexionsimpulse */}
      <SectionHeader
        tag="Reflexion"
        title="Reflexionsimpulse"
        text="Beobachten Sie in der kommenden Woche Ihre Kommunikation als Führungskraft und nutzen Sie diese Fragen als Leitfaden."
      />

      <Checklist
        items={[
          'In welchen Situationen sage ich etwas anderes, als ich tatsächlich denke oder fühle? Was hindert mich an Ehrlichkeit?',
          'Wie reagiere ich typischerweise auf kritisches Feedback? Mit Offenheit, Erklärung oder Abwehr?',
          'Gibt es Teammitglieder, mit denen ich ehrlicher kommuniziere als mit anderen? Woran liegt das?',
          'Was würde sich in meinem Team verändern, wenn ich konsequent klarer und gleichzeitig empathischer kommuniziere?',
        ]}
        color="teal"
      />
    </AkademieLayout>
  )
}
