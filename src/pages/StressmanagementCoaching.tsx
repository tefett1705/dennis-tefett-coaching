import { Shield, Brain, Heart, Activity, Clock, Battery, Leaf, Gauge, Wind, Sunrise } from 'lucide-react'
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
  StatHighlights,
  Prose,
} from '../components/SubpageBlocks'
import heroImg from '../assets/images/Coaching Bild Klient überlegt.webp'

export default function StressmanagementCoaching() {
  return (
    <SubpageLayout
      heroImage={heroImg}
      category="Resilienz & Gesundheit"
      title="Stressmanagement-Coaching: Souverän führen unter Druck"
      subtitle="Bauen Sie systematisch Resilienz auf, beugen Sie Burnout vor und entwickeln Sie wirksame Strategien zur Stressbewältigung, die in Ihren Führungsalltag passen."
      relatedPages={[
        { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
        { label: 'Fokus und Klarheit', href: '/fokus-und-klarheit' },
        { label: 'Selbstwirksamkeit stärken', href: '/selbstwirksamkeit-staerken' },
        { label: 'Life Coaching', href: '/life-coaching' },
      ]}
    >
      <SEOHead
        title="Stressmanagement-Coaching: Resilienz & Burnout-Prävention | Dennis Tefett"
        description="Stressmanagement-Coaching für Führungskräfte: Resilienz aufbauen, Burnout vorbeugen und unter Druck souverän führen. Wissenschaftlich fundierte Methoden zur Stressbewältigung mit Dennis Tefett."
        keywords="Stressmanagement, Burnout-Prävention, Resilienz, Stressbewältigung, Stressmanagement Coaching, Führungskräfte Stress"
        canonical="https://dennis-tefett.de/stressmanagement-coaching/"
      />

      {/* --- Stresssignale --- */}
      <SectionHeader
        tag="Stresssignale erkennen"
        title="Erkennen Sie die Warnsignale, bevor es zu spät ist"
        text="Chronischer Stress beeinträchtigt Entscheidungsfähigkeit, Kreativität und Führungsqualität. Diese Signale zeigen, dass Handlungsbedarf besteht."
      />

      <Checklist
        color="gold"
        items={[
          'Schlafprobleme und Schwierigkeiten beim Abschalten nach der Arbeit',
          'Zunehmende Gereiztheit und kürzere Zündschnur im Team',
          'Das Gefühl, trotz voller Tage nichts Wesentliches zu schaffen',
          'Körperliche Symptome wie Verspannungen, Kopfschmerzen oder Erschöpfung',
          'Rückzug von sozialen Kontakten und Hobbies',
          'Wachsende Zynik und emotionale Distanz zur Arbeit',
          'Entscheidungen werden aufgeschoben oder nur noch reaktiv getroffen',
          'Sonntags wächst die Anspannung vor der kommenden Woche',
        ]}
      />

      <Prose>
        <p>
          Wenn Sie sich in mehreren dieser Punkte wiedererkennen, ist das kein Zeichen von Schwäche. Es ist ein Signal, dass Ihre bisherigen Strategien an ihre Grenzen stossen. Stressmanagement-Coaching hilft Ihnen, vom Reagieren ins Gestalten zu kommen.
        </p>
      </Prose>

      {/* --- Vorteile --- */}
      <SectionHeader
        tag="Ihre Vorteile"
        title="Was Stressmanagement-Coaching für Sie verändert"
        text="Nicht Stress vermeiden, sondern intelligent mit Belastung umgehen. Das macht den Unterschied zwischen Überleben und souveränem Führen."
      />

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: Shield,
            title: 'Resilienz aufbauen',
            text: 'Entwickeln Sie die Fähigkeit, flexibel auf Belastung zu reagieren und nach Rückschlägen schneller in Ihre Kraft zurückzufinden.',
          },
          {
            icon: Brain,
            title: 'Klare Entscheidungen unter Druck',
            text: 'Verbessern Sie Ihre Entscheidungsqualität auch in stressigen Situationen durch trainierte Selbstregulation.',
          },
          {
            icon: Battery,
            title: 'Energie nachhaltig managen',
            text: 'Lernen Sie, Ihre Energieressourcen bewusst einzusetzen, statt sie bis zur Erschöpfung aufzubrauchen.',
          },
          {
            icon: Heart,
            title: 'Burnout wirksam vorbeugen',
            text: 'Erkennen Sie Ihre persönlichen Frühwarnsignale und etablieren Sie Routinen, die chronische Erschöpfung verhindern.',
          },
          {
            icon: Clock,
            title: 'Fokuszeit zurückgewinnen',
            text: 'Optimieren Sie Ihre Arbeitsorganisation mit Deep-Work-Strategien und reduzierten Meeting-Zeiten.',
          },
          {
            icon: Leaf,
            title: 'Teamkultur positiv beeinflussen',
            text: 'Wer souverän mit Druck umgeht, schafft ein Arbeitsumfeld, in dem auch andere ihre beste Leistung zeigen.',
          },
        ]}
      />

      <StatHighlights
        stats={[
          { value: '70%', label: 'berichten von besserer Schlafqualität' },
          { value: '8-12h', label: 'pro Woche durch bessere Priorisierung gewonnen' },
          { value: '3x', label: 'schnellere Erholung nach Belastungsphasen' },
          { value: '90%', label: 'empfinden mehr innere Ruhe im Führungsalltag' },
        ]}
      />

      {/* --- Methoden --- */}
      <SectionHeader
        tag="Methoden"
        title="Wissenschaftlich fundierte Methoden für nachhaltige Stressbewältigung"
        text="Mein Ansatz verbindet körperliche, kognitive und verhaltensorientierte Ebenen, denn Stress ist kein rein mentales Phänomen."
      />

      <BenefitGrid
        columns={2}
        items={[
          {
            icon: Wind,
            title: 'Pragmatische Achtsamkeit',
            text: 'Keine Esoterik, sondern evidenzbasierte Techniken, die Stressreaktion regulieren und Konzentration verbessern. In Minuten anwendbar, nicht in Stunden.',
          },
          {
            icon: Activity,
            title: 'Individuelle Stressmuster-Analyse',
            text: 'Wir identifizieren Ihre spezifischen Auslöser, Reaktionen und Bewältigungsstrategien und entwickeln gezielte Alternativen.',
          },
          {
            icon: Gauge,
            title: 'Deep Work und Meeting-Optimierung',
            text: 'Reduzieren Sie fragmentierte Tage und ständige Erreichbarkeit. Schaffen Sie geschützte Zeitfenster für konzentrierte Arbeit.',
          },
          {
            icon: Sunrise,
            title: 'Persönliche Krisentools',
            text: 'Für akute Stressmomente entwickeln wir kurze, wirksame Interventionen, die Sie innerhalb von Minuten in einen handlungsfähigen Zustand bringen.',
          },
        ]}
      />

      <QuoteBlock
        text="Stärke zeigt sich nicht darin, Stress zu ignorieren, sondern darin, ihn bewusst zu regulieren und trotzdem klare Entscheidungen zu treffen."
      />

      {/* --- Vorher/Nachher --- */}
      <SectionHeader
        tag="Transformation"
        title="Vorher und Nachher: Was Stressmanagement-Coaching bewirkt"
        text="Die Veränderung zeigt sich in konkreten, messbaren Unterschieden in Ihrem Führungsalltag."
      />

      <ComparisonTable
        beforeLabel="Ohne Coaching"
        afterLabel="Mit Stressmanagement-Coaching"
        rows={[
          {
            aspect: 'Stressreaktion',
            before: 'Automatisch und unkontrolliert',
            after: 'Bewusst reguliert und steuerbar',
          },
          {
            aspect: 'Schlafqualität',
            before: 'Gedankenkarussell und Unruhe',
            after: 'Erholsamer Schlaf und Abschalten',
          },
          {
            aspect: 'Entscheidungen',
            before: 'Reaktiv und unter Druck',
            after: 'Klar und durchdacht',
          },
          {
            aspect: 'Energielevel',
            before: 'Erschöpft am Tagesende',
            after: 'Bewusst eingeteilt und nachhaltig',
          },
          {
            aspect: 'Teamwirkung',
            before: 'Stress überträgt sich aufs Team',
            after: 'Souveränität schafft Sicherheit',
          },
          {
            aspect: 'Erholung',
            before: 'Wochenenden reichen nicht aus',
            after: 'Schnelle Regeneration nach Belastung',
          },
        ]}
      />

      {/* --- Resilienz aufbauen --- */}
      <SectionHeader
        tag="Resilienz-Aufbau"
        title="In fünf Schritten zu nachhaltiger Resilienz"
        text="Resilienz ist keine Charaktereigenschaft, sondern eine trainierbare Kompetenz. Dieser strukturierte Prozess macht Sie widerstandsfähiger."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Stressmuster verstehen',
            text: 'Wir analysieren Ihre individuellen Auslöser, körperlichen Reaktionen und unbewussten Bewältigungsstrategien. Ohne klares Verständnis der Ausgangslage bleibt jede Massnahme Zufall.',
          },
          {
            title: 'Frühwarnsystem etablieren',
            text: 'Sie entwickeln ein feines Gespür für Ihre persönlichen Frühwarnsignale, damit Sie gegensteuern können, bevor aus temporärer Belastung chronische Erschöpfung wird.',
          },
          {
            title: 'Regulationsstrategien trainieren',
            text: 'Achtsamkeitstechniken, Atemübungen und kognitive Reframing-Methoden werden so trainiert, dass sie unter realer Belastung abrufbar sind, nicht nur in der Theorie.',
          },
          {
            title: 'Arbeitsumfeld gestalten',
            text: 'Wir optimieren Ihre Arbeitsorganisation: Deep-Work-Blöcke, Meeting-Reduktion, digitale Hygiene und bewusste Pausengestaltung für nachhaltige Leistungsfähigkeit.',
          },
          {
            title: 'Langfristig verankern',
            text: 'Neue Routinen werden in Ihren Alltag integriert und durch regelmässige Check-ins stabilisiert. Das Ziel: Sie brauchen keinen Coach mehr, weil Stressmanagement zur Gewohnheit geworden ist.',
          },
        ]}
      />

      <HighlightBox title="Stressmanagement ist Führungskompetenz" color="teal">
        <p>
          Stressmanagement-Coaching ist kein Eingeständnis von Schwäche. Es ist die bewusste Entscheidung, Ihre Leistungsfähigkeit langfristig zu sichern und Ihre Führungsqualität unter Druck zu verbessern. Die erfolgreichsten Führungskräfte sind nicht diejenigen, die keinen Stress haben, sondern diejenigen, die gelernt haben, ihn als Information zu nutzen. Wenn der Druck zunimmt und bisherige Strategien an ihre Grenzen stossen, ist jetzt der richtige Zeitpunkt für ein Gespräch.
        </p>
      </HighlightBox>

    </SubpageLayout>
  )
}
