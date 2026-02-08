import {
  BookOpen,
  Brain,
  Eye,
  Flame,
  Heart,
  Layers,
  Lightbulb,
  Puzzle,
  Sparkles,
  SunMedium,
  TreePine,
  Users,
} from 'lucide-react'
import SubpageLayout from '../components/SubpageLayout'
import SEOHead from '../components/SEOHead'
import {
  BenefitGrid,
  NumberedSteps,
  Checklist,
  QuoteBlock,
  HighlightBox,
  SectionHeader,
  ComparisonTable,
  Prose,
} from '../components/SubpageBlocks'
import heroImg from '../assets/images/Coaching Bild Klient überlegt.webp'

export default function PersoenlichkeitsentwicklungErklaert() {
  return (
    <SubpageLayout
      heroImage={heroImg}
      category="Persönlichkeitsentwicklung"
      title="Persönlichkeitsentwicklung: Der Schlüssel zu bewusster Veränderung"
      subtitle="Wie Sie durch psychologisch fundierte Methoden Ihre Stärken erkennen und nachhaltig wachsen."
      relatedPages={[
        { label: 'Life Coaching', href: '/life-coaching' },
        { label: 'Selbstwirksamkeit stärken', href: '/selbstwirksamkeit-staerken' },
        { label: 'Nachhaltige Verhaltensänderung', href: '/nachhaltige-verhaltensaenderung' },
        { label: 'Fokus und Klarheit', href: '/fokus-und-klarheit' },
      ]}
    >
      <SEOHead
        title="Persönlichkeitsentwicklung: Coaching für Balance & Erfolg | Dennis Tefett"
        description="Persönlichkeitsentwicklung durch psychologisch fundiertes Coaching. Selbstvertrauen stärken, emotionale Intelligenz entwickeln, persönliches Wachstum fördern. Coaching in Düsseldorf."
        keywords="Persönlichkeitsentwicklung, Selbstentwicklung, persönliches Wachstum, Coaching, Selbstvertrauen, Emotionale Intelligenz"
        canonical="https://dennis-tefett.de/persoenlichkeitsentwicklung-erklaert"
      />

      {/* --- Section 1: What is it --- */}
      <SectionHeader
        tag="Grundlagen"
        title="Was ist Persönlichkeitsentwicklung und was nicht?"
        text="Zwischen Instagram-Zitaten und Selbstoptimierungswahn geht oft verloren, worum es wirklich geht: die bewusste Auseinandersetzung mit den eigenen Mustern, Werten und Verhaltensweisen."
      />

      <Prose>
        <p>
          Echte Persönlichkeitsentwicklung ist kein Sprint und kein Trend. Sie erfordert
          Bereitschaft zur Selbstreflexion, Geduld mit dem eigenen Tempo und den Mut, auch
          unbequeme Wahrheiten zuzulassen. Im Coaching verstehe ich Persönlichkeitsentwicklung
          als systematischen Prozess: fundiert durch psychologische Erkenntnisse, strukturiert
          durch bewährte Methoden und immer orientiert an Ihren konkreten Lebens- und Berufszielen.
        </p>
      </Prose>

      <ComparisonTable
        beforeLabel="Coaching"
        afterLabel="Therapie"
        rows={[
          {
            aspect: 'Zielgruppe',
            before: 'Psychisch gesunde Menschen',
            after: 'Bei psychischen Erkrankungen',
          },
          {
            aspect: 'Fokus',
            before: 'Gegenwart & Zukunft',
            after: 'Vergangenheit & Heilung',
          },
          {
            aspect: 'Ziel',
            before: 'Potenzial entfalten',
            after: 'Leidensdruck reduzieren',
          },
          {
            aspect: 'Ansatz',
            before: 'Entwicklung & Wachstum',
            after: 'Diagnose & Behandlung',
          },
        ]}
      />

      <HighlightBox title="Coaching ist für Sie, wenn..." color="teal">
        <p>
          Sie grundsätzlich stabil sind, aber spüren, dass Sie unter Ihren Möglichkeiten bleiben.
          Wenn Sie mehr Klarheit, mehr Selbstvertrauen oder eine bewusstere Lebensführung
          anstreben, dann ist Persönlichkeitsentwicklung im Coaching genau der richtige Weg.
        </p>
      </HighlightBox>

      {/* --- Section 2: Why it matters --- */}
      <SectionHeader
        tag="Warum es zählt"
        title="Warum Persönlichkeitsentwicklung so viel verändert"
        text="Persönlichkeitsentwicklung wirkt auf alle Lebensbereiche gleichzeitig, weil sie an den Grundmustern ansetzt, die Ihr Denken, Fühlen und Handeln bestimmen."
      />

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: Sparkles,
            title: 'Selbstvertrauen stärken',
            text: 'Erkennen Sie die Glaubenssätze, die Ihr Potenzial begrenzen, und entwickeln Sie neue, tragfähige innere Überzeugungen.',
          },
          {
            icon: Heart,
            title: 'Emotionale Intelligenz entwickeln',
            text: 'Verbessern Sie Ihre Selbstwahrnehmung, Selbstregulation und Empathie für tiefere und wirksamere Beziehungen.',
          },
          {
            icon: Lightbulb,
            title: 'Klarere Entscheidungen treffen',
            text: 'Gewinnen Sie die innere Sicherheit, die Sie brauchen, um auch unter Unsicherheit souverän zu handeln.',
          },
          {
            icon: Flame,
            title: 'Authentischer leben',
            text: 'Finden Sie Ihre eigene Stimme und kommunizieren Sie Ihre Meinung klar, ohne Konflikten auszuweichen.',
          },
          {
            icon: Brain,
            title: 'Stressresistenz aufbauen',
            text: 'Lernen Sie, unter Druck ruhig zu bleiben und Ihre Reaktionen bewusst zu wählen statt automatisch zu reagieren.',
          },
          {
            icon: TreePine,
            title: 'Nachhaltiges Wachstum',
            text: 'Veränderung, die nicht nach dem Seminar verpufft, sondern dauerhaft in Ihrem Alltag verankert ist.',
          },
        ]}
      />

      <QuoteBlock
        text="Persönlichkeitsentwicklung bedeutet nicht, jemand anderes zu werden. Es bedeutet, mehr von dem zu werden, was Sie im Kern bereits sind."
      />

      {/* --- Section 3: Key areas of EQ --- */}
      <SectionHeader
        tag="Kernbereiche"
        title="Emotionale Intelligenz: Die unterschätzte Kernkompetenz"
        text="In Führungspositionen ist emotionale Intelligenz mindestens so wichtig wie fachliche Kompetenz. Die Qualität von Beziehungen, Verhandlungen und Teamführung hängt direkt davon ab."
      />

      <BenefitGrid
        columns={2}
        items={[
          {
            icon: Eye,
            title: 'Selbstwahrnehmung',
            text: 'Erkennen Sie Ihre emotionalen Muster, bevor sie Ihr Verhalten steuern. Bewusstheit ist der erste Schritt zur Veränderung.',
          },
          {
            icon: SunMedium,
            title: 'Selbstregulation',
            text: 'Lernen Sie, unter Druck ruhig zu bleiben und Ihre Reaktionen bewusst zu wählen statt automatisch zu reagieren.',
          },
          {
            icon: Users,
            title: 'Empathie',
            text: 'Verstehen Sie, was andere wirklich bewegt. Nicht durch Raten, sondern durch geschulte Aufmerksamkeit.',
          },
          {
            icon: Puzzle,
            title: 'Soziale Kompetenz',
            text: 'Gestalten Sie Beziehungen aktiv und navigieren Sie auch komplexe soziale Dynamiken souverän.',
          },
        ]}
      />

      {/* --- Section 4: Methods --- */}
      <SectionHeader
        tag="Methodik"
        title="Drei Säulen: Systemisch, visualisierend, achtsam"
        text="Jede Methode, die ich einsetze, hat einen klaren Zweck und ist durch Forschung gestützt. Der richtige Mix entsteht individuell im Coaching-Prozess."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Systemischer Ansatz',
            text: 'Ihre Persönlichkeit entfaltet sich immer im Kontext: beruflich, familiär, gesellschaftlich. Der systemische Ansatz berücksichtigt diese Zusammenhänge und hilft Ihnen, Ihre Rolle in verschiedenen Systemen bewusster zu gestalten.',
          },
          {
            title: 'Visualisierung und innere Bilder',
            text: 'Unser Gehirn denkt in Bildern. Visualisierungstechniken nutzen diese Eigenschaft, um gewünschte Veränderungen mental vorwegzunehmen. Was Sie innerlich erlebt haben, fällt in der Realität deutlich leichter.',
          },
          {
            title: 'Achtsamkeit als Fundament',
            text: 'Achtsamkeit ist die Grundlage jeder bewussten Veränderung. Nur wer den gegenwärtigen Moment klar wahrnimmt, kann bewusste Entscheidungen treffen und aus dem Autopiloten aussteigen.',
          },
        ]}
      />

      <HighlightBox title="Individuelle Methodenauswahl" color="gold">
        <p>
          Nicht jede Methode passt zu jedem Menschen. In der ersten Phase des Coachings finden
          wir gemeinsam heraus, welche Zugänge für Sie am wirksamsten sind. Manche Klienten
          profitieren stark von Visualisierung, andere von strukturierter Reflexion, wieder andere
          von körperorientierten Übungen. Der richtige Mix macht den Unterschied.
        </p>
      </HighlightBox>

      {/* --- Section 5: Benefits checklist & session structure --- */}
      <SectionHeader
        tag="Ihr Nutzen"
        title="Was Sie von Persönlichkeitsentwicklung im Coaching erwarten können"
        text="Konkrete, spürbare Veränderungen, die über den Coaching-Raum hinaus in Ihren Alltag wirken."
      />

      <Checklist
        color="teal"
        items={[
          'Entscheidungen fallen leichter und werden souveräner vertreten',
          'Konflikte werden gelöst statt vermieden oder eskaliert',
          'Die eigene Meinung wird klarer und selbstbewusster kommuniziert',
          'Emotionale Belastungen werden besser reguliert',
          'Beziehungen gewinnen an Tiefe und Qualität',
          'Berufliche und private Ziele rücken in greifbare Nähe',
          'Mehr innere Ruhe und Zufriedenheit im Alltag',
          'Bewussteres Handeln statt Autopilot-Modus',
        ]}
      />

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: BookOpen,
            title: '8 bis 16 Sessions',
            text: 'Individueller Fahrplan, typischerweise über 3 bis 6 Monate mit 60- bis 90-minütigen Einzelsessions.',
          },
          {
            icon: Layers,
            title: 'Klare Struktur pro Session',
            text: 'Reflexion der vergangenen Woche, Arbeit am Kernthema und konkrete Übungen für den Alltag.',
          },
          {
            icon: SunMedium,
            title: 'Flexibles Format',
            text: 'Persönlich in Düsseldorf oder per Video. Entscheidend ist, dass Sie sich wohlfühlen und offen reflektieren können.',
          },
        ]}
      />

      <QuoteBlock
        text="Wachstum geschieht nicht, wenn alles bequem ist. Es geschieht, wenn Sie bereit sind, einen Schritt weiter zu gehen als gestern."
      />
    </SubpageLayout>
  )
}
