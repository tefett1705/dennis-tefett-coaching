import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import { SectionHeader, Prose, BenefitGrid, NumberedSteps, QuoteBlock, HighlightBox, Checklist } from '../../../components/SubpageBlocks'
import { Flame, Scale, Layers, Handshake, TrendingUp, Lightbulb } from 'lucide-react'

export default function KonflikteAlsChance() {
  useEffect(() => {
    document.title = 'Konflikte als Chance: Konstruktive Konfliktlösung | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Kommunikation & Beziehung"
      moduleSlug="kommunikation-beziehung"
      impulsSlug="konflikte-als-chance"
      color="teal"
      impulsTitle="Konflikte als Chance: Konstruktive Konfliktlösung"
      prevImpuls={{ title: 'Schwierige Gespräche souverän führen', href: '/akademie/kommunikation-beziehung/schwierige-gespraeche' }}
      nextImpuls={{ title: 'Zuhören als Führungskompetenz', href: '/akademie/kommunikation-beziehung/zuhoeren-als-kompetenz' }}
      relatedCoachingPages={[
        { label: 'Teamcoaching', href: '/teamcoaching' },
        { label: 'Teambuilding-Workshop', href: '/teambuildingworkshop' },
      ]}
    >
      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Konflikte gelten im beruflichen Kontext häufig als Störung, die es möglichst schnell zu
          beseitigen gilt. Doch die Organisations- und Sozialpsychologie zeigt ein differenzierteres Bild:
          Richtig gehandhabt, sind Konflikte eine der kraftvollsten Quellen für Innovation, Vertiefung
          von Beziehungen und organisationales Lernen.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Entscheidend ist nicht, ob Konflikte auftreten, sondern wie sie gestaltet werden. Führungskräfte,
          die Konfliktkompetenz entwickeln, verwandeln Reibung in Energie und Meinungsverschiedenheiten in
          bessere Lösungen. Dieser Impuls stellt Ihnen Modelle und Strategien vor, mit denen Sie
          Konflikte konstruktiv nutzen können.
        </p>
      </Prose>

      <SectionHeader
        tag="Grundlagen"
        title="Die Eskalationsdynamik verstehen"
        text="Friedrich Glasl beschreibt neun Stufen der Konflikteskalation. Das Verständnis dieser Dynamik ermöglicht frühzeitiges Eingreifen."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Eskalationsstufen nach Glasl zeigen, wie Konflikte sich von sachlichen Meinungsverschiedenheiten
          über Beziehungskonflikte bis hin zu destruktiver Vernichtungsdynamik entwickeln können. In den
          ersten drei Stufen ist noch eine beidseitige Lösung möglich. Auf den mittleren Stufen braucht es
          oft Vermittlung. Die letzten Stufen erfordern externe Intervention.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Für Führungskräfte liegt der Schlüssel im Erkennen: Auf welcher Stufe befindet sich ein Konflikt?
          Die Antwort bestimmt die angemessene Interventionsstrategie. Die meisten Konflikte im
          Führungsalltag lassen sich auf den frühen Stufen bearbeiten, wenn sie rechtzeitig erkannt und
          angesprochen werden.
        </p>
      </Prose>

      <BenefitGrid
        items={[
          {
            icon: Layers,
            title: 'Konfliktarten unterscheiden',
            text: 'Sachkonflikte, Beziehungskonflikte, Wertkonflikte und Strukturkonflikte erfordern jeweils andere Lösungsansätze. Die richtige Diagnose ist der halbe Weg.',
          },
          {
            icon: Flame,
            title: 'Eskalationssignale erkennen',
            text: 'Verhärtete Positionen, abnehmende Empathie und zunehmende Schwarz-Weiß-Denkmuster sind Frühwarnsignale für eskalierende Konflikte.',
          },
          {
            icon: Scale,
            title: 'Balance zwischen Sach- und Beziehungsebene',
            text: 'Viele Konflikte scheitern, weil die Sachebene verhandelt wird, während der eigentliche Konflikt auf der Beziehungsebene liegt.',
          },
        ]}
        columns={3}
      />

      <QuoteBlock
        text="In der Mitte von Schwierigkeiten liegen die Möglichkeiten."
        author="Albert Einstein"
      />

      <SectionHeader
        tag="Strategie"
        title="Der Weg zur konstruktiven Konfliktlösung"
        text="Diese fünf Schritte ermöglichen eine systematische Bearbeitung von Konflikten mit dem Ziel einer beidseitig tragfähigen Lösung."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Den Konflikt anerkennen',
            text: 'Benennen Sie den Konflikt offen und wertfrei. Die Anerkennung, dass ein Konflikt existiert, ist keine Schwäche, sondern der erste Schritt zur Lösung.',
          },
          {
            title: 'Interessen hinter Positionen erkunden',
            text: 'Positionen sind das, was jemand fordert. Interessen sind der Grund dahinter. Fragen Sie nach dem Warum hinter einer Position, um den Verhandlungsspielraum zu erweitern.',
          },
          {
            title: 'Gemeinsame Kriterien definieren',
            text: 'Einigen Sie sich auf objektive Bewertungsmaßstäbe, bevor Sie nach Lösungen suchen. Das reduziert den Einfluss subjektiver Bewertungen.',
          },
          {
            title: 'Optionen entwickeln',
            text: 'Generieren Sie gemeinsam möglichst viele Lösungsoptionen, ohne sie sofort zu bewerten. Kreative Lösungen entstehen, wenn der Bewertungsdruck vorübergehend aufgehoben wird.',
          },
          {
            title: 'Tragfähige Vereinbarung treffen',
            text: 'Wählen Sie die Option, die die Interessen beider Seiten bestmöglich berücksichtigt. Halten Sie die Vereinbarung konkret fest und verabreden Sie einen Überprüfungszeitpunkt.',
          },
        ]}
      />

      <SectionHeader
        tag="Haltung"
        title="Konstruktive Konfrontation als Führungshaltung"
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Konstruktive Konfrontation bedeutet, Konflikte nicht zu scheuen, aber auch nicht eskalieren
          zu lassen. Es ist die Fähigkeit, klar in der Sache und zugewandt im Umgang zu sein. Diese
          Haltung erfordert emotionale Reife: die Bereitschaft, eigene Anteile am Konflikt zu erkennen,
          und die Fähigkeit, Unbehagen auszuhalten, ohne in Vermeidung oder Aggression zu verfallen.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Forschung zur psychologischen Sicherheit zeigt, dass Teams, in denen produktiver Dissens
          möglich ist, bessere Entscheidungen treffen und innovativer arbeiten. Eine Führungskultur, die
          konstruktive Konfrontation fördert, schafft die Voraussetzung für echte Zusammenarbeit.
        </p>
      </Prose>

      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Konflikte sind keine Zeichen des Scheiterns, sondern Ausdruck von Unterschiedlichkeit und
          Engagement. Die Führungsaufgabe besteht nicht darin, Konflikte zu vermeiden, sondern einen
          Raum zu schaffen, in dem sie offen und konstruktiv bearbeitet werden können. Wer Konflikte
          als Lernchance begreift, verwandelt Reibungsenergie in Entwicklungskraft.
        </p>
      </HighlightBox>

      <BenefitGrid
        items={[
          {
            icon: Handshake,
            title: 'Win-Win-Denken kultivieren',
            text: 'Trainieren Sie sich darin, Lösungen zu suchen, die für alle Beteiligten Wert schaffen. Das Nullsummendenken ist ein erlerntes Muster, kein Naturgesetz.',
          },
          {
            icon: TrendingUp,
            title: 'Konflikte als Innovationsquelle',
            text: 'Unterschiedliche Perspektiven erzeugen Reibung, und genau diese Reibung kann kreative Funken schlagen. Homogene Zustimmung führt selten zu Durchbrüchen.',
          },
          {
            icon: Lightbulb,
            title: 'Frühwarnsystem etablieren',
            text: 'Schaffen Sie Formate, in denen Spannungen frühzeitig angesprochen werden können. Regelmäßige Retrospektiven oder offene Gesprächsrunden senken die Eskalationsschwelle.',
          },
        ]}
        columns={3}
      />

      <SectionHeader
        tag="Reflexion"
        title="Reflexionsimpulse"
        text="Nutzen Sie diese Fragen, um Ihre persönliche Konfliktkompetenz und die Konfliktkultur in Ihrem Team zu reflektieren."
      />

      <Checklist
        items={[
          'Welchen Konflikt in meinem Umfeld vermeide ich gerade, und welchen Preis zahle ich dafür?',
          'Welche Art von Konflikten fällt mir leicht, welche bereitet mir besonderes Unbehagen?',
          'Wie fördere ich in meinem Team einen offenen Umgang mit Meinungsverschiedenheiten?',
          'Wann habe ich einen Konflikt erlebt, der letztlich zu einem besseren Ergebnis geführt hat?',
        ]}
        color="teal"
      />
    </AkademieLayout>
  )
}
