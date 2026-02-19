import SubpageLayout from '../components/SubpageLayout'
import SEOHead, { articleSchema as createArticleSchema } from '../components/SEOHead'
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
  Trophy,
  Eye,
  MessageCircle,
  HeartPulse,
  TrendingUp,
  Flame,

  Star,

} from 'lucide-react'
import heroImg from '../assets/images/dennis-schick.webp'

export default function SelbstwirksamkeitStaerken() {
  return (
    <SubpageLayout
      heroImage={heroImg}
      category="Persönlichkeitsentwicklung"
      title="Selbstwirksamkeit stärken: Der Schlüssel zu innerem Vertrauen"
      subtitle="Wie Sie das Vertrauen in Ihre eigenen Fähigkeiten systematisch aufbauen und auch unter Druck handlungsfähig bleiben."
      relatedPages={[
        { label: 'Persönlichkeitsentwicklung erklärt', href: '/persoenlichkeitsentwicklung-erklaert' },
        { label: 'Nachhaltige Verhaltensänderung', href: '/nachhaltige-verhaltensaenderung' },
        { label: 'Life Coaching', href: '/life-coaching' },
        { label: 'Fokus und Klarheit', href: '/fokus-und-klarheit' },
      ]}
    >
      <SEOHead
        title="Selbstwirksamkeit stärken: Mehr Vertrauen & innere Stärke | Dennis Tefett"
        description="Selbstwirksamkeit stärken mit evidenzbasierten Methoden. Erfahren Sie, wie Sie Selbstvertrauen und innere Stärke systematisch aufbauen und als Führungskraft souverän handeln."
        keywords="Selbstwirksamkeit, Selbstvertrauen, innere Stärke, Selbstbewusstsein, Selbstwirksamkeit stärken"
        canonical="https://dennis-tefett.de/selbstwirksamkeit-staerken"
        ogType="article"
        schema={createArticleSchema('Selbstwirksamkeit stärken: Mehr Vertrauen & innere Stärke', 'Selbstwirksamkeit stärken mit evidenzbasierten Methoden. Selbstvertrauen und innere Stärke systematisch aufbauen.', '/selbstwirksamkeit-staerken')}
        breadcrumbs={[{ name: 'Selbstwirksamkeit stärken', url: '/selbstwirksamkeit-staerken' }]}
      />

      {/* --- Was ist Selbstwirksamkeit? --- */}
      <SectionHeader
        tag="Grundlagen"
        title="Was ist Selbstwirksamkeit, und warum verändert sie alles?"
        text="Selbstwirksamkeit ist die innere Überzeugung, herausfordernde Situationen aus eigener Kraft meistern zu können. Sie ist ein stärkerer Prädiktor für beruflichen Erfolg als Intelligenz oder Fachwissen."
      />

      <StatHighlights
        stats={[
          { value: '#1', label: 'Prädiktor für beruflichen Erfolg' },
          { value: '4', label: 'wissenschaftlich belegte Quellen' },
          { value: '100 %', label: 'trainierbar, in jedem Alter' },
          { value: '8 Wo.', label: 'bis zu messbaren Veränderungen' },
        ]}
      />

      <HighlightBox title="Der entscheidende Unterschied" color="gold">
        <p>
          Selbstwirksamkeit ist nicht dasselbe wie Selbstvertrauen. Selbstvertrauen ist ein allgemeines Gefühl der eigenen Wertigkeit. Selbstwirksamkeit bezieht sich auf die konkrete Überzeugung, eine bestimmte Aufgabe bewältigen zu können. Man kann hohes Selbstvertrauen, aber niedrige aufgabenspezifische Selbstwirksamkeit haben, und umgekehrt.
        </p>
      </HighlightBox>

      {/* --- Die vier Quellen --- */}
      <SectionHeader
        tag="Wissenschaftliche Basis"
        title="Die vier Quellen der Selbstwirksamkeit nach Bandura"
        text="Wer versteht, woher Selbstwirksamkeit kommt, kann sie gezielt aufbauen. Diese vier Quellen bilden das Fundament."
      />

      <BenefitGrid
        columns={2}
        items={[
          {
            icon: Trophy,
            title: 'Eigene Erfolgserlebnisse',
            text: 'Die stärkste Quelle. Jede gemeisterte Herausforderung speichert Ihr Gehirn als Kompetenzbeweis. Je mehr solcher Erfahrungen Sie sammeln, desto stabiler wird Ihre innere Stärke.',
          },
          {
            icon: Eye,
            title: 'Stellvertretende Erfahrungen',
            text: 'Beobachten Sie, wie jemand Ähnliches meistert, steigt auch Ihr eigenes Zutrauen. Rollenmodelle und Peer-Gruppen sind deshalb enorm wertvoll.',
          },
          {
            icon: MessageCircle,
            title: 'Verbale Ermutigung',
            text: 'Anerkennung und konstruktives Feedback von glaubwürdigen Personen stärken Ihr Selbstbewusstsein, besonders wirksam in Kombination mit eigenen Erfahrungen.',
          },
          {
            icon: HeartPulse,
            title: 'Emotionale & körperliche Zustände',
            text: 'Wie Sie Ihren Körper wahrnehmen, beeinflusst Ihre Zuversicht. Wer körperliche Signale richtig einordnet, interpretiert Anspannung nicht als Schwäche, sondern als Aktivierung.',
          },
        ]}
      />

      {/* --- Anzeichen niedriger Selbstwirksamkeit --- */}
      <SectionHeader
        tag="Selbstcheck"
        title="Woran Sie erkennen, dass Ihre Selbstwirksamkeit gestärkt werden sollte"
      />

      <ComparisonTable
        beforeLabel="Niedrige Selbstwirksamkeit"
        afterLabel="Hohe Selbstwirksamkeit"
        rows={[
          {
            aspect: 'Herausforderungen',
            before: 'Werden vermieden oder aufgeschoben',
            after: 'Werden aktiv angegangen',
          },
          {
            aspect: 'Rückschläge',
            before: 'Führen zu Aufgabe und Selbstzweifel',
            after: 'Werden als Lerngelegenheit genutzt',
          },
          {
            aspect: 'Entscheidungen',
            before: 'Zögerlich, unsicher, delegiert',
            after: 'Klar, zügig, eigenverantwortlich',
          },
          {
            aspect: 'Innerer Dialog',
            before: 'Selbstkritisch und pauschal negativ',
            after: 'Realistisch und lösungsorientiert',
          },
          {
            aspect: 'Unter Druck',
            before: 'Angst und Vermeidung dominieren',
            after: 'Fokus und Handlungsfähigkeit bleiben',
          },
        ]}
      />

      {/* --- Bausteine zum Aufbau --- */}
      <SectionHeader
        tag="Praktische Strategien"
        title="So bauen Sie Ihre Selbstwirksamkeit systematisch auf"
        text="Die folgenden Bausteine basieren auf Banduras Forschung und der Erfahrung aus hunderten Coaching-Stunden."
      />

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: TrendingUp,
            title: 'Erreichbare Zwischenziele setzen',
            text: 'Zerlegen Sie grosse Aufgaben in kleine, machbare Schritte. Jeder abgeschlossene Schritt liefert einen Kompetenzbeweis und stärkt Ihre innere Stärke.',
          },
          {
            icon: Star,
            title: 'Erfolgsjournal führen',
            text: 'Notieren Sie täglich drei Dinge, die Sie gut gemacht haben. Diese Praxis korrigiert den natürlichen Negativitätsbias Ihres Gehirns.',
          },
          {
            icon: Flame,
            title: 'Komfortzone kalkuliert verlassen',
            text: 'Suchen Sie regelmässig Situationen, die leicht über Ihrem Fähigkeitsniveau liegen. Die Bewältigung ist der stärkste Motor für wachsendes Selbstvertrauen.',
          },
          {
            icon: Eye,
            title: 'Relevante Rollenmodelle finden',
            text: 'Identifizieren Sie Menschen, die ähnliche Herausforderungen gemeistert haben. Deren Erfolg signalisiert Ihrem Gehirn: Es ist möglich.',
          },
          {
            icon: MessageCircle,
            title: 'Inneren Dialog bewusst gestalten',
            text: 'Ersetzen Sie pauschal negative Gedanken durch differenzierte Einschätzungen: „Das ist neu für mich, und ich habe Vergleichbares bereits gelernt."',
          },
          {
            icon: HeartPulse,
            title: 'Körper als Ressource nutzen',
            text: 'Aufrechte Haltung, bewusste Atmung und regelmässige Bewegung senden Signale an Ihr Gehirn, die Zuversicht und Handlungsbereitschaft fördern.',
          },
        ]}
      />

      <QuoteBlock
        text="Selbstwirksamkeit wächst nicht über Nacht. Sie entsteht durch die konsequente Ansammlung kleiner Erfahrungen, die alle dieselbe Botschaft senden: Ich kann das."
      />

      {/* --- Der Coaching-Weg --- */}
      <SectionHeader
        tag="Ihr Coaching-Prozess"
        title="Wie Coaching Ihre Selbstwirksamkeit gezielt aufbaut"
        text="Ein erfahrener Coach fungiert als Spiegel, Sparringspartner und Katalysator: Er macht vorhandene Ressourcen sichtbar und Erfolge bewusst."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Bestandsaufnahme & Muster erkennen',
            text: 'Wir analysieren Ihre aktuelle Selbstwirksamkeitserwartung, identifizieren blinde Flecken und machen vorhandene Stärken sichtbar, die Sie selbst übersehen.',
          },
          {
            title: 'Passende Ziele formulieren',
            text: 'Gemeinsam setzen wir realistische Ziele, die genau in der Zone liegen, in der Wachstum entsteht, herausfordernd genug, um Kompetenzbeweise zu erzeugen.',
          },
          {
            title: 'Gezielte Experimente im Alltag',
            text: 'Durch Micro-Experimente und Implementierungsintentionen übertragen Sie neue Verhaltensweisen direkt in Ihren Führungsalltag.',
          },
          {
            title: 'Fortschritt reflektieren & verankern',
            text: 'Jeder Fortschritt wird bewusst reflektiert und als Kompetenzbeweis verankert. So entsteht eine positive Aufwärtsspirale, die weit über den Coaching-Prozess hinauswirkt.',
          },
        ]}
      />

      {/* --- Tägliche Praxis --- */}
      <HighlightBox title="Tägliche Praxis für mehr Selbstwirksamkeit" color="teal">
        <Checklist
          items={[
            'Morgens 2 Min. Reflexion: Was ist die wichtigste Herausforderung des Tages?',
            'Welche Stärke bringe ich dafür mit?',
            'Welche ähnliche Situation habe ich bereits gemeistert?',
            'Abends: Drei Erfolge des Tages notieren, auch kleine',
            'Aufrechte Körperhaltung bewusst einnehmen vor wichtigen Momenten',
          ]}
          color="teal"
        />
      </HighlightBox>

      <Prose>
        <p>
          Führungskräfte, die ihre eigene Selbstwirksamkeit pflegen, profitieren doppelt: Sie führen souveräner und stärken gleichzeitig die Selbstwirksamkeit ihrer Mitarbeitenden. Denn Selbstwirksamkeit ist ansteckend: Eine Führungskraft, die ihrem Team herausfordernde Aufgaben zutraut, erzeugt genau jene Ermutigung, die auch andere wachsen lässt.
        </p>
      </Prose>

      <QuoteBlock
        text="Die stärkste Führungskompetenz ist nicht Fachwissen oder Durchsetzungskraft. Es ist das fundierte Vertrauen in die eigene Fähigkeit, auch dann handlungsfähig zu bleiben, wenn es schwierig wird."
      />

    </SubpageLayout>
  )
}
