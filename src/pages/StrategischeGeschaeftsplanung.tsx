import {
  BarChart3,
  Compass,
  Eye,
  Filter,
  Flag,
  Lightbulb,
  Map,
  Milestone,
  RefreshCw,
  Search,
  Target,
  TrendingUp,
} from 'lucide-react'
import SubpageLayout from '../components/SubpageLayout'
import SEOHead, { serviceSchema } from '../components/SEOHead'
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
import heroImg from '../assets/images/dennis-schick.webp'

export default function StrategischeGeschaeftsplanung() {
  return (
    <SubpageLayout
      heroImage={heroImg}
      category="Business & Strategie"
      title="Strategische Geschäftsplanung: Klarheit für nachhaltige Unternehmensentwicklung"
      subtitle="Warum strukturierte Planung der Schlüssel zu besseren Entscheidungen und nachhaltigem Erfolg ist."
      relatedPages={[
        { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
        { label: 'Karriere-Coaching', href: '/karriere-coaching' },
        { label: 'Fokus und Klarheit', href: '/fokus-und-klarheit' },
        { label: 'Teamcoaching & Teamentwicklung', href: '/teamcoaching' },
      ]}
    >
      <SEOHead
        title="Strategische Geschäftsplanung: Leitfaden für Unternehmen | Dennis Tefett"
        description="Strategische Geschäftsplanung für nachhaltige Unternehmensentwicklung. Klarheit schaffen, bessere Entscheidungen treffen. Business-Coaching in Gladbeck und deutschlandweit."
        keywords="Strategische Geschäftsplanung, Unternehmensstrategie, Geschäftsentwicklung, Businessplan, Gladbeck, NRW"
        canonical="https://dennis-tefett.de/strategische-geschaftsplanung"
        schema={serviceSchema('Strategische Geschäftsplanung', 'Coaching für strategische Geschäftsplanung und nachhaltige Unternehmensentwicklung. Klarheit schaffen und bessere Entscheidungen treffen.', '/strategische-geschaftsplanung')}
        breadcrumbs={[{ name: 'Strategische Geschäftsplanung', url: '/strategische-geschaftsplanung' }]}
      />

      {/* --- Section 1: Why strategy matters --- */}
      <SectionHeader
        tag="Warum Strategie"
        title="Strategische vs. klassische Geschäftsplanung"
        text="Ein klassischer Businessplan fragt: Was wollen wir tun? Strategische Geschäftsplanung fragt: Warum tun wir es, und wie bleiben wir relevant?"
      />

      <Prose>
        <p>
          Klassische Planung ist oft ein einmaliger Akt, ein Dokument, das in der Schublade
          verstaubt. Strategische Geschäftsplanung ist ein fortlaufender Denkprozess: ein
          Rahmen, der Ihnen hilft, in einer komplexen und sich verändernden Welt die richtigen
          Entscheidungen zu treffen. Sie zwingt dazu, eigene Annahmen zu hinterfragen, den Markt
          realistisch einzuschätzen und Stärken ehrlich zu bewerten.
        </p>
      </Prose>

      <ComparisonTable
        beforeLabel="Klassische Planung"
        afterLabel="Strategische Planung"
        rows={[
          {
            aspect: 'Charakter',
            before: 'Einmaliges Dokument',
            after: 'Fortlaufender Prozess',
          },
          {
            aspect: 'Frage',
            before: 'Was und wie viel?',
            after: 'Warum und wohin?',
          },
          {
            aspect: 'Horizont',
            before: 'Nächstes Geschäftsjahr',
            after: '3 bis 5 Jahre voraus',
          },
          {
            aspect: 'Entscheidungen',
            before: 'Reaktiv, aus dem Bauch',
            after: 'Fundiert, am Zielbild orientiert',
          },
          {
            aspect: 'Annahmen',
            before: 'Selten hinterfragt',
            after: 'Systematisch geprüft',
          },
        ]}
      />

      <QuoteBlock
        text="Strategie bedeutet nicht, alles zu planen. Strategie bedeutet, zu wissen, was man nicht tut."
      />

      {/* --- Section 2: Benefits --- */}
      <SectionHeader
        tag="Ihr Nutzen"
        title="Warum strategische Planung den Unterschied macht"
        text="Die langfristig erfolgreichen Unternehmen zeichnen sich durch strategische Klarheit aus: die Fähigkeit, Chancen zu erkennen, Prioritäten zu setzen und Ressourcen dort einzusetzen, wo sie die größte Wirkung entfalten."
      />

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: Target,
            title: 'Bessere Entscheidungsqualität',
            text: 'Jede Entscheidung kann an einem klaren Referenzrahmen gemessen werden statt unter Zeitdruck aus dem Bauch getroffen zu werden.',
          },
          {
            icon: Compass,
            title: 'Alignment im Unternehmen',
            text: 'Wenn alle verstehen, wohin die Reise geht und warum, entstehen Handlungsfähigkeit und Zusammenhalt auf allen Ebenen.',
          },
          {
            icon: Filter,
            title: 'Fokus statt Verzettelung',
            text: 'Strategische Klarheit hilft, die richtigen Projekte zu verfolgen und die falschen konsequent loszulassen.',
          },
          {
            icon: Eye,
            title: 'Risiken frühzeitig erkennen',
            text: 'Systematische Analyse macht blinde Flecken sichtbar, bevor sie zu teuren Fehlern werden.',
          },
          {
            icon: TrendingUp,
            title: 'Nachhaltig wachsen',
            text: 'Wachstum, das auf einer durchdachten Strategie basiert, ist stabiler als Wachstum durch Zufall oder Opportunismus.',
          },
          {
            icon: Lightbulb,
            title: 'Innovationsfähigkeit sichern',
            text: 'Ein klares Zielbild gibt den Rahmen vor, in dem kreative Lösungen und neue Geschäftsmodelle entstehen können.',
          },
        ]}
      />

      <HighlightBox title="Klarheit schlägt Perfektion" color="teal">
        <p>
          Die beste Strategie ist nicht die perfekteste, sondern die klarste. Wenn alle im
          Unternehmen verstehen, wohin die Reise geht und warum, entstehen Alignment und
          Handlungsfähigkeit, auch ohne dass jedes Detail ausformuliert ist.
        </p>
      </HighlightBox>

      {/* --- Section 3: Planning process steps --- */}
      <SectionHeader
        tag="Prozess"
        title="Die fünf Schritte strategischer Geschäftsplanung"
        text="Strategische Planung folgt einer klaren Logik. Diese Schritte bilden den Rahmen, den ich in der Zusammenarbeit mit meinen Klienten verwende."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Standortanalyse',
            text: 'Ehrliche Bewertung Ihrer aktuellen Marktposition, Ressourcen, Stärken und Schwachstellen. Ein externer Coach bringt die nötige Objektivität und Distanz.',
          },
          {
            title: 'Zielbild entwickeln',
            text: 'Wo wollen Sie in drei bis fünf Jahren stehen? Welchen Wert wollen Sie für Ihre Kunden schaffen? Das Zielbild ist die innere Überzeugung, die alle strategischen Entscheidungen leitet.',
          },
          {
            title: 'Strategische Optionen bewerten',
            text: 'Identifikation und Bewertung realistischer Wege: Welche Märkte, Geschäftsmodelle und Partnerschaften kommen in Frage? Welche Risiken sind damit verbunden?',
          },
          {
            title: 'Entscheiden und priorisieren',
            text: 'Strategie wird konkret, wenn Sie sich festlegen, nicht nur dafür, was Sie tun, sondern auch dagegen, was Sie nicht tun. Priorisierung ist die wertvollste Kompetenz in der Planung.',
          },
          {
            title: 'Umsetzen und überprüfen',
            text: 'Strategische Entscheidungen werden in konkrete Maßnahmen übersetzt, Meilensteine definiert und ein Rhythmus für regelmäßige Überprüfung etabliert.',
          },
        ]}
      />

      {/* --- Section 4: Key components & common mistakes --- */}
      <SectionHeader
        tag="Kernelemente"
        title="Typische Fehler und wie Sie sie vermeiden"
        text="In der Arbeit mit Unternehmern und Führungskräften sehe ich immer wieder dieselben Fallstricke. Sie zu kennen, ist der erste Schritt, um sie zu vermeiden."
      />

      <Checklist
        color="gold"
        items={[
          'Planung ohne Umsetzungsfokus: Jede Überlegung muss beantworten, was jetzt konkret zu tun ist',
          'Zu viele Prioritäten: Wenn alles Priorität hat, hat nichts Priorität',
          'Isolation der Planung: Die besten Pläne entstehen im Dialog mit Team, Kunden und externer Perspektive',
          'Angst vor Festlegung: Alle Optionen offenhalten klingt klug, führt aber zu Lähmung',
          'Vernachlässigung der Kultur: Jede Strategie wird durch Menschen umgesetzt, Kultur muss passen',
        ]}
      />

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: Search,
            title: 'Marktanalyse & Positionierung',
            text: 'Verstehen, wo Ihr Unternehmen im Wettbewerbsfeld steht und welche Nischen echtes Potenzial bieten.',
          },
          {
            icon: Flag,
            title: 'Klare Unternehmensvision',
            text: 'Ein Zielbild, das inspiriert und gleichzeitig als konkreter Handlungsrahmen für alle Beteiligten dient.',
          },
          {
            icon: Map,
            title: 'Ressourcenplanung',
            text: 'Kapital, Personal und Zeit dort einsetzen, wo sie den größten strategischen Hebel bieten.',
          },
          {
            icon: BarChart3,
            title: 'Messbare Meilensteine',
            text: 'Konkrete Zielmarken, an denen Sie den Fortschritt Ihrer Strategie regelmäßig überprüfen können.',
          },
          {
            icon: Milestone,
            title: 'Szenarioplanung',
            text: 'Verschiedene Zukunftsszenarien durchdenken und vorbereitet sein, statt nur auf Veränderungen zu reagieren.',
          },
          {
            icon: RefreshCw,
            title: 'Lernende Organisation',
            text: 'Eine Strategie, die sich kontinuierlich an neue Erkenntnisse und Marktbedingungen anpasst.',
          },
        ]}
      />

      {/* --- Section 5: Results & coaching role --- */}
      <SectionHeader
        tag="Ergebnisse"
        title="Coaching als strategischer Katalysator"
        text="Die größten Hindernisse in der strategischen Planung sind selten kognitiver Natur. Es sind emotionale Blockaden: Angst vor dem Scheitern, Schwierigkeit loszulassen, Unsicherheit über die Richtung."
      />

      <StatHighlights
        stats={[
          { value: '2×', label: 'schnellere Strategieentwicklung' },
          { value: '↑ 60 %', label: 'Umsetzungsrate der Maßnahmen' },
          { value: '3–5 J.', label: 'strategischer Planungshorizont' },
          { value: '100 %', label: 'individuelle Begleitung' },
        ]}
      />

      <HighlightBox title="Die Rolle des Coaches in der Geschäftsplanung" color="gold">
        <p>
          Ein Coach ist kein Unternehmensberater. Ich schreibe keinen Businessplan und liefere
          keine Marktanalysen. Was ich biete, ist ein strukturierter Denkprozess, der Ihre
          eigene strategische Klarheit stärkt. Durch gezielte Fragen, psychologische Perspektiven
          und die nötige Distanz zum Tagesgeschäft entstehen Einsichten, die im Alleingang
          nicht möglich wären.
        </p>
      </HighlightBox>

      <QuoteBlock
        text="Die besten strategischen Entscheidungen treffen Menschen, die wissen, wer sie sind und was sie wollen. Alles andere ist Taktik."
      />
    </SubpageLayout>
  )
}
