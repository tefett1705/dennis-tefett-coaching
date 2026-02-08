import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import { SectionHeader, Prose, BenefitGrid, NumberedSteps, QuoteBlock, HighlightBox, Checklist } from '../../../components/SubpageBlocks'
import { Compass, Sparkles, Users, Megaphone, Heart, Eye } from 'lucide-react'

export default function VisionEntwickeln() {
  useEffect(() => {
    document.title = 'Vision entwickeln und kommunizieren | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Strategische Klarheit"
      moduleSlug="strategische-klarheit"
      color="gold"
      impulsTitle="Vision entwickeln und kommunizieren"
      prevImpuls={{ title: 'Prioritäten setzen: Die Kunst des Weglassens', href: '/akademie/strategische-klarheit/prioritaeten-setzen' }}
      nextImpuls={undefined}
      relatedCoachingPages={[
        { label: 'Fokus & Klarheit', href: '/fokus-und-klarheit' },
        { label: 'Strategische Geschäftsplanung', href: '/strategische-geschaftsplanung' },
      ]}
    >
      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Eine kraftvolle Vision ist mehr als ein Satz auf einer Unternehmenspräsentation. Sie ist ein
          lebendiges Bild einer erstrebenswerten Zukunft, das Menschen emotional berührt und in Bewegung
          bringt. Die neurowissenschaftliche Forschung zeigt: Unser Gehirn verarbeitet bildhafte, emotional
          aufgeladene Zukunftsvorstellungen grundlegend anders als abstrakte Zielvorgaben.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Führungskräfte, die eine klare Vision artikulieren können, schaffen Orientierung in Zeiten der
          Unsicherheit. Sie geben ihrem Team nicht nur ein Ziel, sondern einen Sinn. Dieser Impuls
          beleuchtet, wie Sie eine authentische Vision entwickeln und so kommunizieren, dass sie
          andere mitreißt.
        </p>
      </Prose>

      <SectionHeader
        tag="Grundlagen"
        title="Warum Vision mehr ist als ein Ziel"
        text="Der Unterschied zwischen einer strategischen Zielvorgabe und einer echten Vision liegt in ihrer emotionalen Resonanz."
      />

      <BenefitGrid
        items={[
          {
            icon: Compass,
            title: 'Orientierung in Komplexität',
            text: 'In dynamischen Umfeldern gibt eine klare Vision dem Team einen inneren Kompass, wenn externe Landkarten versagen.',
          },
          {
            icon: Heart,
            title: 'Emotionale Bindung',
            text: 'Visionen aktivieren das limbische System und erzeugen eine tiefere Verbindung zum Vorhaben als rein rationale Zielvorgaben.',
          },
          {
            icon: Users,
            title: 'Kollektive Energie',
            text: 'Eine geteilte Vision synchronisiert die Anstrengungen vieler Menschen, ohne jeden Schritt einzeln koordinieren zu müssen.',
          },
        ]}
        columns={3}
      />

      <SectionHeader
        tag="Merkmale"
        title="Was eine überzeugende Vision ausmacht"
        text="Nicht jede Zukunftsvorstellung wird zur Vision. Es braucht bestimmte Qualitäten, damit ein Bild der Zukunft seine mobilisierende Kraft entfaltet."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Eine wirksame Vision verbindet persönliche Überzeugung mit kollektivem Nutzen. Sie ist
          konkret genug, um vorstellbar zu sein, und gleichzeitig groß genug, um zu inspirieren.
          Die Forschung zur transformationalen Führung zeigt, dass Visionen besonders dann wirken,
          wenn sie drei Dimensionen ansprechen: den Verstand durch Klarheit, das Herz durch
          Bedeutsamkeit und den Willen durch Erreichbarkeit.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Dabei geht es nicht um Perfektion. Viele Führungskräfte zögern, ihre Vision zu teilen,
          weil sie noch nicht vollständig ausgereift erscheint. Doch eine Vision wächst durch
          Dialog und gemeinsame Reflexion. Das offene Teilen eines noch unfertigen Bildes kann
          mehr Identifikation erzeugen als ein glatt formuliertes Leitbild.
        </p>
      </Prose>

      <QuoteBlock
        text="Wenn du ein Schiff bauen willst, dann trommle nicht Männer zusammen, um Holz zu beschaffen, sondern lehre sie die Sehnsucht nach dem weiten Meer."
        author="Antoine de Saint-Exupéry"
      />

      <SectionHeader
        tag="Methodik"
        title="In fünf Schritten zur eigenen Führungsvision"
        text="Dieser Prozess unterstützt Sie dabei, eine authentische Vision zu entwickeln, die Ihren Werten und Ihrer Rolle entspricht."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Den persönlichen Antrieb erkunden',
            text: 'Fragen Sie sich: Was treibt mich an? Welche Werte sind mir nicht verhandelbar? Die stärksten Visionen wurzeln in persönlicher Überzeugung.',
          },
          {
            title: 'Das wünschenswerte Zukunftsbild gestalten',
            text: 'Stellen Sie sich vor, wie Ihr Bereich in drei bis fünf Jahren idealerweise aussieht. Beschreiben Sie dieses Bild so konkret und sinnlich wie möglich.',
          },
          {
            title: 'Den Nutzen für andere verdeutlichen',
            text: 'Übersetzen Sie Ihre Vision in den Nutzen für das Team, die Kunden und das Umfeld. Eine Vision, die nur Ihnen dient, wird keine Resonanz erzeugen.',
          },
          {
            title: 'Die Geschichte erzählen',
            text: 'Verdichten Sie Ihre Vision zu einer Geschichte mit Anfang, Wendepunkt und Zukunftsbild. Geschichten aktivieren Spiegelneuronen und schaffen emotionale Brücken.',
          },
          {
            title: 'Durch Wiederholung verankern',
            text: 'Eine Vision braucht ständige Präsenz. Integrieren Sie Ihr Zukunftsbild in Entscheidungen, Meetings und Gespräche, bis es Teil der gemeinsamen Sprache wird.',
          },
        ]}
      />

      <HighlightBox title="Kernimpuls" color="gold">
        <p>
          Eine Vision ist kein Dokument, sondern eine lebendige Kraft. Sie entsteht nicht am Schreibtisch,
          sondern im Dialog zwischen Ihren tiefsten Überzeugungen und den Bedürfnissen der Menschen,
          die Sie führen. Die wirksamste Vision ist die, die Sie selbst zutiefst bewegt und die
          Sie mit einer solchen Klarheit kommunizieren, dass andere sie sehen, fühlen und mitgestalten wollen.
        </p>
      </HighlightBox>

      <SectionHeader
        tag="Kommunikation"
        title="Vision wirkungsvoll kommunizieren"
      />

      <BenefitGrid
        items={[
          {
            icon: Megaphone,
            title: 'Storytelling als Führungsinstrument',
            text: 'Nutzen Sie narrative Strukturen statt PowerPoint-Folien. Geschichten bleiben im Gedächtnis und werden weitererzählt.',
          },
          {
            icon: Eye,
            title: 'Sichtbare Konsistenz',
            text: 'Ihre Entscheidungen und Ihr Verhalten müssen Ihre Vision widerspiegeln. Inkonsistenz zerstört Glaubwürdigkeit schneller als jedes Argument.',
          },
          {
            icon: Sparkles,
            title: 'Alignment schaffen',
            text: 'Verbinden Sie individuelle Ziele Ihrer Teammitglieder mit der übergeordneten Vision. Wenn Menschen sich darin wiederfinden, wird aus Pflicht Engagement.',
          },
        ]}
        columns={3}
      />

      <SectionHeader
        tag="Reflexion"
        title="Reflexionsimpulse"
        text="Diese Fragen unterstützen Sie dabei, Ihre eigene Vision zu klären und Ihre Kommunikation zu schärfen."
      />

      <Checklist
        items={[
          'Wenn ich meine Vision in einem einzigen Satz zusammenfassen müsste, wie würde er lauten?',
          'Welche persönliche Erfahrung oder Überzeugung liegt meiner Vision zugrunde?',
          'Würde mein Team meine Vision mit eigenen Worten wiedergeben können?',
          'An welchen konkreten Entscheidungen der letzten Wochen war meine Vision erkennbar?',
          'Wo erlebe ich eine Diskrepanz zwischen meiner Vision und meinem täglichen Führungsverhalten?',
        ]}
        color="gold"
      />
    </AkademieLayout>
  )
}
