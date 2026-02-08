import {
  Award,
  Brain,
  Clock,
  Compass,
  HeartHandshake,
  Lightbulb,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
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
  ComparisonTable,
  Prose,
} from '../components/SubpageBlocks'
import heroImg from '../assets/images/Dennis schick.webp'

export default function FuehrungskraefteCoaching() {
  return (
    <SubpageLayout
      heroImage={heroImg}
      category="Executive Coaching"
      title="Führungskräfte-Coaching: Nachhaltige Ergebnisse durch psychologische Exzellenz"
      subtitle="Warum klassische Führungstrainings oft scheitern und wie neurowissenschaftlich fundiertes Coaching echte Veränderung bewirkt."
      relatedPages={[
        { label: 'Stressmanagement für Führungskräfte', href: '/stressmanagement-coaching' },
        { label: 'Coaching-Methoden im Überblick', href: '/coaching-methoden' },
        { label: 'Persönlichkeitsentwicklung', href: '/persoenlichkeitsentwicklung-erklaert' },
        { label: 'Teamcoaching & Teamentwicklung', href: '/teamcoaching' },
      ]}
    >
      <SEOHead
        title="Führungskräfte-Coaching: Neurowissenschaftlich fundiert | Dennis Tefett"
        description="Neurowissenschaftlich fundiertes Führungskräfte-Coaching für nachhaltige Ergebnisse. Weniger Arbeitszeit, bessere Teamdynamik, strategische Klarheit. Executive Coaching in Düsseldorf."
        keywords="Führungskräfte-Coaching, Executive Coaching, Leadership Coaching, Leadership Development, Führungskompetenz"
        canonical="https://dennis-tefett.de/fuehrungskraefte-coaching"
      />

      {/* --- Section 1: Why leaders need coaching --- */}
      <SectionHeader
        tag="Warum Coaching"
        title="Was macht Führungskräfte-Coaching wirklich wirksam?"
        text="Klassische Trainings setzen am Wissen an, nicht am Verhalten. Wirksames Executive Coaching verbindet psychologische Diagnostik mit individueller Begleitung und geht tiefer als jedes Seminar."
      />

      <Prose>
        <p>
          Führungskräfte haben meist zahlreiche Seminare besucht und Modelle kennengelernt.
          Trotzdem stehen sie vor denselben Herausforderungen: Entscheidungen unter Druck,
          Konflikte im Team, fehlende strategische Klarheit. Der Unterschied liegt nicht in neuem
          Wissen, sondern im Verständnis der eigenen Wirkung und der bewussten Veränderung
          eingefahrener Verhaltensmuster.
        </p>
      </Prose>

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: Brain,
            title: 'Unbewusste Muster erkennen',
            text: 'Identifizieren Sie die tiefliegenden Verhaltensmuster, die Ihre Führung prägen, und gewinnen Sie die Freiheit, bewusst anders zu handeln.',
          },
          {
            icon: Target,
            title: 'Strategische Klarheit gewinnen',
            text: 'Entscheiden Sie schneller und fundierter, indem Sie zwischen operativem und strategischem Denken souverän wechseln.',
          },
          {
            icon: HeartHandshake,
            title: 'Authentisch kommunizieren',
            text: 'Entwickeln Sie eine Kommunikation, die Vertrauen schafft, Teams motiviert und auch in schwierigen Situationen wirkt.',
          },
          {
            icon: Shield,
            title: 'Innere Souveränität aufbauen',
            text: 'Stärken Sie Ihre emotionale Regulation und bewahren Sie innere Ruhe, auch wenn der Druck steigt.',
          },
          {
            icon: Users,
            title: 'Teamdynamik verbessern',
            text: 'Fördern Sie Eigenverantwortung in Ihrem Team, lösen Sie Konflikte konstruktiv und senken Sie die Fluktuation.',
          },
          {
            icon: Zap,
            title: 'Nachhaltig wirken',
            text: 'Verankern Sie neue Verhaltensweisen so tief, dass sie auch unter Druck stabil bleiben und langfristig tragen.',
          },
        ]}
      />

      {/* --- Section 2: Neuroscience approach --- */}
      <SectionHeader
        tag="Methodik"
        title="Der neurowissenschaftliche Ansatz im Leadership Coaching"
        text="Neuroplastizität gezielt nutzen: gezielte Reflexion, körperbasierte Interventionen und Visualisierungstechniken schaffen neue neuronale Verbindungen für dauerhafte Veränderung."
      />

      <HighlightBox title="Warum Neurowissenschaft im Coaching zählt" color="teal">
        <p>
          Neurowissenschaftlich fundiertes Führungskräfte-Coaching steigert die Transferleistung
          in den Alltag um ein Vielfaches. Statt Wissen zu vermitteln, das im Seminarraum bleibt,
          verändern wir die Muster, die Ihr tägliches Führungsverhalten bestimmen. Das Ergebnis
          ist keine kurzfristige Motivation, sondern eine nachhaltige Transformation.
        </p>
      </HighlightBox>

      <ComparisonTable
        beforeLabel="Klassisches Training"
        afterLabel="Neurowiss. Coaching"
        rows={[
          {
            aspect: 'Ansatz',
            before: 'Wissensvermittlung',
            after: 'Verhaltensveränderung',
          },
          {
            aspect: 'Transfer',
            before: 'Ca. 10 % in den Alltag',
            after: 'Bis zu 70 % nachhaltig',
          },
          {
            aspect: 'Methode',
            before: 'Standardmodelle',
            after: 'Individuelle Diagnostik',
          },
          {
            aspect: 'Dauer der Wirkung',
            before: 'Wochen',
            after: 'Monate bis Jahre',
          },
          {
            aspect: 'Fokus',
            before: 'Theorie & Techniken',
            after: 'Muster & Identität',
          },
        ]}
      />

      {/* --- Section 3: Measurable results --- */}
      <SectionHeader
        tag="Ergebnisse"
        title="Was Führungskräfte-Coaching konkret bewirkt"
        text="Messbarer Nutzen, den meine Klienten regelmäßig berichten."
      />

      <StatHighlights
        stats={[
          { value: '8–12 h', label: 'weniger Wochenarbeitszeit' },
          { value: '↓ 40 %', label: 'Teamfluktuation' },
          { value: '3×', label: 'schnellere Entscheidungen' },
          { value: '92 %', label: 'Klienten-Zufriedenheit' },
        ]}
      />

      <Checklist
        color="teal"
        items={[
          'Klare Prioritäten und bessere Delegation ohne Produktivitätsverlust',
          'Mehr Eigenverantwortung und konstruktive Konfliktlösung im Team',
          'Fundierte strategische Entscheidungen statt reaktivem Tagesgeschäft',
          'Höhere innere Ruhe, bessere Stressregulation und authentische Kommunikation',
          'Spürbare Work-Life-Balance durch bewussteres Zeitmanagement',
        ]}
      />

      <QuoteBlock
        text="Führung beginnt nicht bei der Strategie. Führung beginnt bei der Klarheit über sich selbst."
      />

      {/* --- Section 4: Process steps --- */}
      <SectionHeader
        tag="Prozess"
        title="Vier Phasen zum nachhaltigen Ergebnis"
        text="Mein Führungskräfte-Coaching folgt einem bewährten Vier-Phasen-Modell, das Struktur gibt und gleichzeitig flexibel genug ist, um auf Ihre individuelle Situation einzugehen."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Diagnostik',
            text: 'Durch strukturierte Gespräche, psychologische Diagnostik und eine Analyse Ihrer Führungsumgebung identifizieren wir die zentralen Hebelpunkte. Wo liegen Ihre Stärken? Welche Muster bremsen Sie?',
          },
          {
            title: 'Positionierung',
            text: 'Wir entwickeln ein klares Bild Ihrer gewünschten Führungsidentität. Wer wollen Sie als Führungskraft sein? Diese innere Klarheit trägt alle weiteren Schritte.',
          },
          {
            title: 'Transformation',
            text: 'Mit neurowissenschaftlich fundierten Methoden arbeiten wir an konkreten Verhaltensmustern. Neue Reaktionsweisen werden durch gezielte Übungen in realen Führungssituationen verankert.',
          },
          {
            title: 'Integration',
            text: 'Wir sichern die Nachhaltigkeit: Veränderungen werden überprüft, verfeinert und so stabilisiert, dass sie auch unter Druck tragen. Das Ziel: Sie brauchen keinen Coach mehr.',
          },
        ]}
      />

      <HighlightBox title="Was diesen Prozess besonders macht" color="gold">
        <p>
          Jede Phase baut auf der vorherigen auf. Gleichzeitig ist der Prozess kein starres
          Programm, sondern passt sich Ihrem Tempo, Ihren Prioritäten und den realen
          Anforderungen Ihres Arbeitsalltags an. Die typische Dauer liegt bei 4 bis 6 Monaten
          mit regelmäßigen Sessions.
        </p>
      </HighlightBox>

      {/* --- Section 5: For whom --- */}
      <SectionHeader
        tag="Zielgruppe"
        title="Für wen ist Führungskräfte-Coaching geeignet?"
        text="Executive Coaching richtet sich an Führungskräfte, die bereit sind, ehrlich auf ihre eigenen Muster zu schauen."
      />

      <BenefitGrid
        columns={2}
        items={[
          {
            icon: Compass,
            title: 'Neue Führungsrolle',
            text: 'Sie übernehmen erstmals oder erneut eine Leitungsposition und wollen von Anfang an klar und wirksam führen.',
          },
          {
            icon: Clock,
            title: 'Überlastung & Stagnation',
            text: 'Die Arbeitslast steigt, die Ergebnisse stagnieren. Sie brauchen einen neuen Ansatz statt noch mehr Einsatz.',
          },
          {
            icon: Award,
            title: 'Strategische Neuausrichtung',
            text: 'Ihr Unternehmen verändert sich, und Sie wollen diesen Wandel aktiv gestalten statt nur zu reagieren.',
          },
          {
            icon: TrendingUp,
            title: 'Nächstes Level als Führungskraft',
            text: 'Sie sind erfahren, aber spüren, dass mehr möglich ist. Sie wollen Ihre Wirkung auf ein neues Niveau heben.',
          },
          {
            icon: Lightbulb,
            title: 'Teamkonflikte lösen',
            text: 'Ihr Team funktioniert nicht so, wie es sollte, und klassische Maßnahmen reichen nicht aus.',
          },
          {
            icon: HeartHandshake,
            title: 'Gesundheitswesen & High-Pressure',
            text: 'Führungskräfte unter besonders hohem Druck, die empathische Führung und Belastbarkeit vereinen müssen.',
          },
        ]}
      />

      <QuoteBlock
        text="Die besten Führungskräfte sind nicht diejenigen, die alles wissen. Es sind diejenigen, die bereit sind, sich selbst immer wieder in Frage zu stellen."
      />
    </SubpageLayout>
  )
}
