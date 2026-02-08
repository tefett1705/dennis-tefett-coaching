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
  Prose,
} from '../components/SubpageBlocks'
import {
  Brain,
  Target,
  Lightbulb,
  Users,
  RefreshCw,
  Layers,
  Compass,
  Sparkles,
  ShieldCheck,
  Puzzle,
} from 'lucide-react'
import heroImg from '../assets/images/Dennis schönen Anzug.webp'

export default function CoachingMethoden() {
  return (
    <SubpageLayout
      heroImage={heroImg}
      category="Methodik & Wissenschaft"
      title="Coaching-Methoden: Wissenschaftlich fundiert, individuell abgestimmt"
      subtitle="Entdecken Sie, welche Coaching-Methoden echte Veränderung bewirken und wie ein integrativer Ansatz Ihnen den grössten Nutzen bringt."
      relatedPages={[
        { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
        { label: 'Teamcoaching & Teamentwicklung', href: '/teamcoaching' },
        { label: 'Nachhaltige Verhaltensänderung', href: '/nachhaltige-verhaltensaenderung' },
        { label: 'Persönlichkeitsentwicklung erklärt', href: '/persoenlichkeitsentwicklung-erklaert' },
      ]}
    >
      <SEOHead
        title="Coaching-Methoden & Tools: Praxisnaher Überblick | Dennis Tefett"
        description="Evidenzbasierter Überblick über die wirksamsten Coaching-Methoden: Systemisches Coaching, lösungsorientiertes Coaching, NLP und neurowissenschaftlich fundierte Techniken im Praxischeck."
        keywords="Coaching-Methoden, systemisches Coaching, lösungsorientiertes Coaching, NLP, Coaching Tools, Coaching Techniken"
        canonical="https://dennis-tefett.de/coaching-methoden"
      />

      {/* --- Warum die Methode zählt --- */}
      <SectionHeader
        tag="Warum es wichtig ist"
        title="Warum die richtige Coaching-Methode entscheidend ist"
        text="Hunderte von Ansätzen konkurrieren um Aufmerksamkeit. Für Führungskräfte ist es schwer zu erkennen, welche Coaching-Methoden wirklich wissenschaftlich fundiert sind. Hier erhalten Sie Transparenz."
      />

      <StatHighlights
        stats={[
          { value: '70 %', label: 'höherer Transfer bei integrativen Methoden' },
          { value: '4+', label: 'evidenzbasierte Ansätze in jeder Sitzung' },
          { value: '93 %', label: 'Klienten-Zufriedenheit mit dem Methodenmix' },
          { value: '6–12', label: 'Sitzungen bis zur nachhaltigen Veränderung' },
        ]}
      />

      <Prose>
        <p>
          Es gibt nicht die eine perfekte Coaching-Methode. Wirksames Coaching kombiniert verschiedene Ansätze, abgestimmt auf Ihre individuelle Situation. Die Kunst liegt in der Auswahl und Anpassung — und genau das macht den Unterschied zwischen einem Standardprogramm und einem echten Entwicklungsprozess.
        </p>
      </Prose>

      {/* --- Methoden im Überblick --- */}
      <SectionHeader
        tag="Methoden-Überblick"
        title="Die bewährtesten Coaching-Methoden auf einen Blick"
        text="Jede Methode hat ihre Stärke. Gemeinsam finden wir heraus, welche Kombination für Ihre Herausforderung den grössten Hebel bietet."
      />

      <BenefitGrid
        columns={2}
        items={[
          {
            icon: RefreshCw,
            title: 'Systemisches Coaching',
            text: 'Betrachtet Sie nicht isoliert, sondern als Teil eines grösseren Systems. Unsichtbare Muster in Team, Organisation und Umfeld werden sichtbar und gezielt beeinflusst.',
          },
          {
            icon: Target,
            title: 'Lösungsorientiertes Coaching',
            text: 'Statt endloser Problemanalyse richten wir den Blick auf vorhandene Ressourcen und das, was bereits funktioniert. Pragmatisch, zeiteffizient und ergebnisorientiert.',
          },
          {
            icon: Brain,
            title: 'Neurowissenschaftliche Techniken',
            text: 'Embodiment, mentales Kontrastieren und achtsamkeitsbasierte Interventionen nutzen die Plastizität Ihres Gehirns, um neue Verhaltensmuster nachhaltig zu verankern.',
          },
          {
            icon: Sparkles,
            title: 'NLP & Kommunikationstechniken',
            text: 'Gezielte Sprachmuster, Reframing und Ankertechniken helfen Ihnen, Denk- und Kommunikationsmuster zu verändern und Ihre Wirkung auf andere bewusst zu gestalten.',
          },
        ]}
      />

      <QuoteBlock
        text="Coaching-Methoden sind Werkzeuge, keine Dogmen. Die Wirksamkeit entsteht aus der Qualität der Beziehung zwischen Coach und Klient und der konsequenten Umsetzung im Alltag."
      />

      {/* --- So wähle ich die passende Methode --- */}
      <SectionHeader
        tag="Individuelle Auswahl"
        title="Wie ich die passende Methode für Sie auswähle"
        text="Kein Klient gleicht dem anderen. Die Methodik richtet sich nach Ihrer Persönlichkeit, Ihrem Kontext und Ihrem Ziel."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Standortbestimmung & Zielklärung',
            text: 'Wo stehen Sie? Was soll sich verändern? In der ersten Sitzung klären wir die Ausgangslage und formulieren ein klares Coaching-Ziel.',
          },
          {
            title: 'Muster erkennen & analysieren',
            text: 'Durch gezielte Fragen, diagnostische Tools und systemische Perspektiven identifizieren wir die Muster, die Sie bremsen oder voranbringen.',
          },
          {
            title: 'Methode auswählen & anpassen',
            text: 'Auf Basis Ihrer Analyse wähle ich die passenden Coaching-Techniken. Oft kombiniere ich mehrere Ansätze innerhalb einer einzigen Sitzung.',
          },
          {
            title: 'Transfer & Ergebnissicherung',
            text: 'Jede Erkenntnis wird durch Implementierungsintentionen, Micro-Experimente und Check-ins in Ihren Alltag übertragen und dauerhaft verankert.',
          },
        ]}
      />

      {/* --- Vorteile des Multi-Method-Ansatzes --- */}
      <SectionHeader
        tag="Ihr Mehrwert"
        title="Warum ein integrativer Methodenansatz mehr bewirkt"
      />

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: Layers,
            title: 'Tiefere Wirkung',
            text: 'Verschiedene Methoden adressieren kognitive, emotionale und körperliche Ebenen gleichzeitig — so entsteht Veränderung auf allen Ebenen.',
          },
          {
            icon: Compass,
            title: 'Flexibilität in der Sitzung',
            text: 'Wenn ein Ansatz in der Sitzung an Grenzen stösst, wechsle ich nahtlos zu einer Methode, die besser greift — ohne Zeitverlust.',
          },
          {
            icon: ShieldCheck,
            title: 'Höhere Nachhaltigkeit',
            text: 'Durch Verankerung auf mehreren Ebenen bleiben Veränderungen auch unter Druck und in Stresssituationen stabil.',
          },
          {
            icon: Users,
            title: 'Individuelle Passung',
            text: 'Kein starres Schema, sondern ein massgeschneiderter Ansatz, der sich an Ihre Persönlichkeit und Ihren Arbeitskontext anpasst.',
          },
          {
            icon: Puzzle,
            title: 'Komplexe Themen lösbar machen',
            text: 'Führungsherausforderungen sind selten eindimensional. Ein Multi-Methoden-Ansatz wird der Komplexität Ihrer realen Situation gerecht.',
          },
          {
            icon: Lightbulb,
            title: 'Schnellere Ergebnisse',
            text: 'Durch die Kombination bewährter Techniken erreichen Klienten spürbare Fortschritte oft bereits nach den ersten zwei bis drei Sitzungen.',
          },
        ]}
      />

      {/* --- Typischer Sitzungsablauf --- */}
      <HighlightBox title="So läuft eine typische Coaching-Sitzung ab (60–90 Min.)" color="teal">
        <Checklist
          items={[
            'Check-in & Zielklärung (10 Min.) — Wo stehen Sie heute? Was soll diese Sitzung bewirken?',
            'Exploration & Musteranalyse (20–30 Min.) — Vertiefung des Kernthemas mit passenden Coaching-Tools',
            'Gezielte Intervention (20–30 Min.) — Arbeit mit der gewählten Methode an konkreten Situationen',
            'Transfer & nächste Schritte (10–15 Min.) — Konkrete Aufgaben und Implementierungsintentionen für den Alltag',
          ]}
          color="teal"
        />
      </HighlightBox>

      <Prose>
        <p>
          Jede Sitzung folgt einem klaren Rahmen, der gleichzeitig flexibel genug ist, um auf aktuelle Themen einzugehen. So entstehen nicht nur Erkenntnisse, sondern konkrete Veränderungen, die Sie unmittelbar in Ihrem Führungsalltag spüren.
        </p>
      </Prose>

      <QuoteBlock
        text="Nachhaltige Veränderung entsteht nicht durch Einsicht allein. Sie braucht Wiederholung, emotionale Beteiligung und einen sicheren Rahmen, in dem neue Erfahrungen gemacht werden können."
      />

    </SubpageLayout>
  )
}
