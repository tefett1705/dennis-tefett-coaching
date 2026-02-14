import { Compass, Heart, Brain, Scale, Users, Flame } from 'lucide-react'
import SubpageLayout from '../components/SubpageLayout'
import SEOHead from '../components/SEOHead'
import {
  SectionHeader,
  BenefitGrid,
  NumberedSteps,
  ComparisonTable,
  Checklist,
  QuoteBlock,
  HighlightBox,
  Prose,
} from '../components/SubpageBlocks'
import heroImg from '../assets/images/dennis-schoenen-anzug.webp'

export default function LifeCoaching() {
  return (
    <SubpageLayout
      heroImage={heroImg}
      category="Life Coaching"
      title="Life Coaching: Ihr Weg zu mehr Klarheit und bewusstem Leben"
      subtitle="Für Menschen, die gezielt an Klarheit, Lebenszielen und persönlichem Wachstum arbeiten möchten, mit evidenzbasierten Methoden und praktischen Micro-Tools."
      relatedPages={[
        { label: 'Persönlichkeitsentwicklung erklärt', href: '/persoenlichkeitsentwicklung-erklaert' },
        { label: 'Karriere-Coaching', href: '/karriere-coaching' },
        { label: 'Selbstwirksamkeit stärken', href: '/selbstwirksamkeit-staerken' },
        { label: 'Nachhaltige Verhaltensänderung', href: '/nachhaltige-verhaltensaenderung' },
      ]}
    >
      <SEOHead
        title="Life Coaching: Klarheit, Lebensziele & Work-Life-Balance | Dennis Tefett"
        description="Professionelles Life Coaching für Klarheit, Zielerreichung und bessere Work-Life-Balance. Evidenzbasierte Lebensberatung für nachhaltiges persönliches Wachstum mit Dennis Tefett."
        keywords="Life Coaching, Lebensberatung, Lebensziele, Work-Life-Balance, persönliches Wachstum, Klarheit finden"
        canonical="https://dennis-tefett.de/life-coaching/"
      />

      {/* --- Was ist Life Coaching --- */}
      <SectionHeader
        tag="Was ist Life Coaching"
        title="Klarheit gewinnen, bewusst leben, Potenzial entfalten"
        text="Life Coaching unterstützt Sie dabei, Ihre Lebensziele zu klären und konkrete Veränderungen umzusetzen. Im Zentrum steht nicht die Vergangenheit, sondern die Frage: Wie wollen Sie leben?"
      />

      <Prose>
        <p>
          Professionelles Life Coaching arbeitet nicht mit Motivationssprüchen. Es nutzt evidenzbasierte Methoden aus der positiven Psychologie und Verhaltensforschung, um nachhaltige Veränderung zu ermöglichen. Das Ergebnis: ein klarer Plan mit messbarem Fortschritt, kein Wunschzettel.
        </p>
      </Prose>

      <HighlightBox title="Life Coaching ist für Sie richtig, wenn..." color="teal">
        <p>
          ...Sie grundsätzlich stabil und handlungsfähig sind, aber spüren, dass mehr möglich ist. Life Coaching richtet sich an psychisch gesunde Menschen. Es ersetzt keine Psychotherapie, sondern entfaltet seine Wirkung dort, wo Sie funktionsfähig sind, aber Ihr volles Potenzial noch nicht ausschöpfen.
        </p>
      </HighlightBox>

      {/* --- Lebensbereiche --- */}
      <SectionHeader
        tag="Lebensbereiche"
        title="Woran wir im Life Coaching arbeiten"
        text="Life Coaching deckt die zentralen Bereiche ab, die bewusste Lebensgestaltung ausmachen."
      />

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: Compass,
            title: 'Ziele und Richtung',
            text: 'Gewinnen Sie Klarheit darüber, was Sie wirklich wollen, jenseits von gesellschaftlichen Erwartungen und gewohnten Bahnen.',
          },
          {
            icon: Scale,
            title: 'Work-Life-Balance',
            text: 'Justieren Sie das Verhältnis von Beruf und Privatleben neu, damit beide Bereiche sich gegenseitig stärken statt konkurrieren.',
          },
          {
            icon: Users,
            title: 'Kommunikation und Beziehungen',
            text: 'Erkennen und verändern Sie Muster in der zwischenmenschlichen Kommunikation, beruflich wie privat.',
          },
          {
            icon: Flame,
            title: 'Energie und Stressregulation',
            text: 'Entwickeln Sie einen bewussten Umgang mit Belastung. Nicht weniger tun, sondern klüger mit Ihrer Energie umgehen.',
          },
          {
            icon: Brain,
            title: 'Selbstvertrauen und Selbstwirksamkeit',
            text: 'Stärken Sie das Vertrauen in Ihre eigene Handlungsfähigkeit durch Erfahrung, nicht durch Affirmationen.',
          },
          {
            icon: Heart,
            title: 'Werte und Prioritäten',
            text: 'Nutzen Sie Ihre eigenen Werte als Kompass für Entscheidungen, statt reaktiv auf äussere Anforderungen zu reagieren.',
          },
        ]}
      />

      {/* --- Vorteile --- */}
      <SectionHeader
        tag="Ihre Vorteile"
        title="Was Life Coaching konkret für Sie verändert"
      />

      <Checklist
        items={[
          'Klarere Entscheidungen in beruflichen und persönlichen Fragen',
          'Spürbar mehr Energie durch bewusstere Lebensgestaltung',
          'Bessere Work-Life-Balance ohne schlechtes Gewissen',
          'Stärkeres Selbstvertrauen bei Herausforderungen und Übergängen',
          'Konkrete Fortschritte bei Ihren individuell definierten Lebenszielen',
          'Nachhaltige Veränderung statt kurzfristiger Motivation',
          'Mehr Klarheit über Ihre Werte und was wirklich zählt',
        ]}
        color="teal"
      />

      <QuoteBlock
        text="Veränderung entsteht nicht in der Coaching-Sitzung. Sie entsteht in den Momenten dazwischen, wenn Sie anders handeln als bisher."
      />

      {/* --- Prozess --- */}
      <SectionHeader
        tag="Ablauf"
        title="Der Life-Coaching-Prozess: So arbeiten wir zusammen"
        text="6 bis 10 Sitzungen über 3 bis 5 Monate. Jede Sitzung folgt einem klaren Ablauf und wird durch praktische Micro-Tools zwischen den Terminen ergänzt."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Bestandsaufnahme und Zielklärung',
            text: 'Wo stehen Sie? Was funktioniert, was nicht? Gemeinsam definieren wir Ihre Coaching-Ziele und legen individuelle Erfolgskriterien fest.',
          },
          {
            title: 'Muster erkennen und Ressourcen aktivieren',
            text: 'Wir machen Ihre Stärken, Werte und wiederkehrenden Muster sichtbar. Oft tragen Sie die Antworten bereits in sich, es braucht nur den richtigen Rahmen.',
          },
          {
            title: 'Veränderung umsetzen mit Micro-Tools',
            text: 'Zwischen den Sitzungen arbeiten Sie mit erprobten Werkzeugen wie dem Clarity Canvas, Energy Tracking und wöchentlichen Reviews, die in Minuten anwendbar sind.',
          },
          {
            title: 'Fortschritt messen und verankern',
            text: 'Wir messen Ihre Fortschritte anhand Ihrer individuellen Erfolgskriterien. So wird Veränderung sichtbar und nachhaltig in Ihrem Alltag verankert.',
          },
        ]}
      />

      {/* --- Transformation --- */}
      <SectionHeader
        tag="Transformation"
        title="Was sich durch Life Coaching verändert"
        text="Die Veränderung zeigt sich in konkreten Unterschieden im Alltag."
      />

      <ComparisonTable
        beforeLabel="Ohne Coaching"
        afterLabel="Mit Life Coaching"
        rows={[
          {
            aspect: 'Entscheidungen',
            before: 'Unsicherheit und Aufschieben',
            after: 'Klarheit und bewusstes Handeln',
          },
          {
            aspect: 'Lebensziele',
            before: 'Vage Wünsche ohne Plan',
            after: 'Konkrete Ziele mit Meilensteinen',
          },
          {
            aspect: 'Energie',
            before: 'Erschöpfung und Überarbeitung',
            after: 'Bewusster Umgang mit Ressourcen',
          },
          {
            aspect: 'Selbstvertrauen',
            before: 'Zweifel bei Herausforderungen',
            after: 'Fundiertes Vertrauen in eigene Stärken',
          },
          {
            aspect: 'Work-Life-Balance',
            before: 'Reaktiv und fremdbestimmt',
            after: 'Aktiv gestaltet nach eigenen Werten',
          },
        ]}
      />

      <HighlightBox title="Der erste Schritt ist ein Gespräch" color="gold">
        <p>
          Ob Life Coaching der richtige Ansatz für Ihre Situation ist, klären wir am besten persönlich. Das kostenfreie Erstgespräch ist unverbindlich, vertraulich und ohne Verpflichtung. Spürbare Effekte zeigen sich in der Regel innerhalb der ersten drei bis vier Sitzungen.
        </p>
      </HighlightBox>

    </SubpageLayout>
  )
}
