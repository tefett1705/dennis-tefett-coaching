import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import { SectionHeader, Prose, BenefitGrid, NumberedSteps, QuoteBlock, HighlightBox, Checklist } from '../../../components/SubpageBlocks'
import { RotateCcw, MapPin, Fingerprint, Cog, Sparkles, Timer } from 'lucide-react'

export default function GewohnheitenVeraendern() {
  useEffect(() => {
    document.title = 'Gewohnheiten verändern: Was die Wissenschaft sagt | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Persönlichkeit & Wachstum"
      moduleSlug="persoenlichkeit-wachstum"
      color="gold"
      impulsTitle="Gewohnheiten verändern: Was die Wissenschaft sagt"
      prevImpuls={{ title: 'Werte als Kompass: Ihr persönliches Fundament', href: '/akademie/persoenlichkeit-wachstum/werte-als-kompass' }}
      nextImpuls={undefined}
      relatedCoachingPages={[
        { label: 'Persönlichkeitsentwicklung', href: '/persoenlichkeitsentwicklung-erklaert' },
        { label: 'Nachhaltige Verhaltensänderung', href: '/nachhaltige-verhaltensaenderung' },
      ]}
    >
      {/* Einleitung */}
      <SectionHeader
        tag="Verhaltenspsychologie"
        title="Das Rätsel der Gewohnheit: Warum wir tun, was wir tun"
        text="Bis zu 40 Prozent unserer täglichen Handlungen sind keine bewussten Entscheidungen, sondern automatisierte Gewohnheiten. Wer diese Automatismen versteht, gewinnt die Macht, sie zu verändern."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Gewohnheiten sind das Ergebnis einer genialen Effizienzstrategie Ihres Gehirns. Statt jede Handlung neu zu durchdenken, speichert es wiederholt ausgeführte Verhaltenssequenzen als automatische Programme in den Basalganglien. Das spart enorme Mengen an kognitiver Energie, hat aber einen Preis: Einmal etablierte Gewohnheiten laufen weiter, auch wenn sie nicht mehr nützlich sind.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die gute Nachricht: Die Wissenschaft hat inzwischen gut verstanden, wie Gewohnheiten funktionieren und wie sie sich systematisch verändern lassen. Der Schlüssel liegt nicht in Willenskraft oder Disziplin, sondern im Verständnis der Mechanismen, die Gewohnheiten steuern, und in der intelligenten Gestaltung Ihrer Umgebung und Routinen.
        </p>
      </Prose>

      {/* Der Gewohnheitskreislauf */}
      <SectionHeader
        tag="Das Modell"
        title="Der Gewohnheitskreislauf: Auslöser, Routine, Belohnung"
        text="Jede Gewohnheit folgt einem dreistufigen Muster. Wenn Sie dieses Muster erkennen, können Sie gezielt eingreifen."
      />

      <BenefitGrid
        items={[
          {
            icon: MapPin,
            title: 'Der Auslöser (Cue)',
            text: 'Ein bestimmter Reiz aktiviert die Gewohnheitsschleife. Das kann eine Uhrzeit sein, ein Ort, eine Emotion, eine bestimmte Person oder eine vorangehende Handlung. Der Auslöser ist der Startschuss für das automatische Programm.',
          },
          {
            icon: Cog,
            title: 'Die Routine (Behavior)',
            text: 'Das eigentliche Verhalten, das automatisch abläuft. Dies ist der Teil, den die meisten Menschen zu verändern versuchen, ohne die anderen Elemente des Kreislaufs zu berücksichtigen. Deshalb scheitern die meisten Vorsätze.',
          },
          {
            icon: Sparkles,
            title: 'Die Belohnung (Reward)',
            text: 'Das Gefühl oder Ergebnis, das die Gewohnheit aufrechterhält. Ihr Gehirn lernt: Diese Routine führt zu einer angenehmen Konsequenz. Die Belohnung muss nicht offensichtlich sein, oft ist es ein subtiles Gefühl von Erleichterung oder Zugehörigkeit.',
          },
        ]}
        columns={3}
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Der entscheidende Punkt: Eine Gewohnheit zu verändern bedeutet nicht, den gesamten Kreislauf zu eliminieren. Die wirksamste Strategie besteht darin, den Auslöser und die Belohnung beizubehalten, aber die Routine zu ersetzen. Wenn Sie beispielsweise bei Stress (Auslöser) zum Smartphone greifen (Routine), um sich abzulenken (Belohnung), können Sie die Routine durch einen kurzen Spaziergang ersetzen, der dieselbe Ablenkung bietet.
        </p>
      </Prose>

      <QuoteBlock
        text="Motivation bringt Sie in Gang. Gewohnheit bringt Sie ans Ziel."
        author="Jim Ryun"
      />

      {/* Implementation Intentions */}
      <SectionHeader
        tag="Strategie 1"
        title="Implementation Intentions: Der Wenn-Dann-Plan"
        text="Eine der am besten erforschten Strategien zur Gewohnheitsänderung mit beeindruckender Wirksamkeit."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Forschung von Peter Gollwitzer zeigt, dass vage Absichten selten zu Verhaltensänderungen führen. Was hingegen funktioniert, sind sogenannte Implementation Intentions: konkrete Wenn-Dann-Pläne, die ein bestimmtes Verhalten an einen spezifischen Auslöser knüpfen. Statt „Ich möchte regelmäßig meditieren" formulieren Sie: „Wenn ich morgens meinen Kaffee aufsetze, dann meditiere ich fünf Minuten."
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Warum ist das so wirksam? Weil Sie die Entscheidung vorwegnehmen. Im Moment des Auslösers müssen Sie nicht mehr überlegen, ob Sie handeln wollen. Der Plan ist bereits gefasst, und Ihr Gehirn kann das neue Verhalten wie eine Gewohnheit behandeln, noch bevor es tatsächlich eine geworden ist.
        </p>
      </Prose>

      <NumberedSteps
        steps={[
          {
            title: 'Die aktuelle Gewohnheit analysieren',
            text: 'Beobachten Sie das unerwünschte Verhalten über einige Tage. Wann tritt es auf? Was geht ihm voraus? Wie fühlen Sie sich danach? Die genaue Kenntnis der Gewohnheitsschleife ist die Grundlage für jede Veränderung.',
          },
          {
            title: 'Den Wenn-Dann-Plan formulieren',
            text: 'Bestimmen Sie einen konkreten Auslöser und das gewünschte neue Verhalten: „Wenn [Situation/Auslöser], dann [neues Verhalten]." Je spezifischer Zeit, Ort und Handlung, desto höher die Erfolgswahrscheinlichkeit.',
          },
          {
            title: 'Die Umgebung gestalten',
            text: 'Machen Sie es sich leicht, das neue Verhalten auszuführen, und schwer, das alte beizubehalten. Legen Sie die Sportkleidung bereit, entfernen Sie Ablenkungen vom Schreibtisch, platzieren Sie das Buch auf dem Nachttisch.',
          },
          {
            title: 'Klein anfangen und steigern',
            text: 'Beginnen Sie mit einer so kleinen Version des neuen Verhaltens, dass es fast unmöglich ist, sie nicht zu tun. Statt einer Stunde Sport reichen zwei Minuten Dehnung. Die Schwelle muss so niedrig sein, dass auch an schlechten Tagen kein Widerstand entsteht.',
          },
          {
            title: 'Die Kette nicht unterbrechen',
            text: 'Konsistenz ist wichtiger als Intensität. Jeden Tag zwei Minuten zu meditieren baut stärkere neuronale Verbindungen auf als einmal pro Woche dreißig Minuten. Verfolgen Sie Ihre Fortschritte sichtbar, um die Motivation aufrechtzuerhalten.',
          },
        ]}
      />

      {/* Identitätsbasierte Gewohnheiten */}
      <SectionHeader
        tag="Strategie 2"
        title="Identitätsbasierte Gewohnheiten: Werden, nicht nur tun"
        text="Der tiefgreifendste Ansatz zur Gewohnheitsveränderung setzt nicht beim Verhalten an, sondern bei der Identität."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die meisten Veränderungsversuche beginnen beim Ergebnis: „Ich möchte zehn Kilo abnehmen." Der identitätsbasierte Ansatz beginnt bei der Frage: „Wer möchte ich sein?" Statt „Ich möchte gesünder essen" sagen Sie „Ich bin jemand, der seinen Körper gut versorgt." Dieser Unterschied klingt subtil, ist aber psychologisch fundamental.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Wenn Sie eine Gewohnheit als Ausdruck Ihrer Identität betrachten, wird jede kleine Handlung zu einem Beweis für die Person, die Sie sein möchten. Jedes Mal, wenn Sie die Treppe statt des Aufzugs nehmen, stimmen Sie innerlich für Ihre Identität als aktiver Mensch ab. Diese Abstimmungen summieren sich und formen mit der Zeit eine neue Selbstwahrnehmung.
        </p>
      </Prose>

      <BenefitGrid
        items={[
          {
            icon: Fingerprint,
            title: 'Identität definieren',
            text: 'Formulieren Sie, wer Sie sein möchten: „Ich bin eine Führungskraft, die zuhört" oder „Ich bin jemand, der Versprechen hält." Diese Identitätsaussage wird zum Maßstab für Ihre täglichen Entscheidungen.',
          },
          {
            icon: RotateCcw,
            title: 'Kleine Beweise sammeln',
            text: 'Jede Handlung, die mit Ihrer gewünschten Identität übereinstimmt, stärkt den Glauben an sich selbst. Suchen Sie bewusst nach Gelegenheiten, diese Beweise zu sammeln, auch in kleinen Momenten.',
          },
          {
            icon: Timer,
            title: 'Geduld mit dem Prozess',
            text: 'Identitätsveränderung ist der langsamste, aber nachhaltigste Weg. Es dauert Wochen bis Monate, bis sich eine neue Selbstwahrnehmung festigt. Doch wenn sie es tut, wird das neue Verhalten mühelos.',
          },
        ]}
        columns={3}
      />

      {/* Kernimpuls */}
      <HighlightBox title="Kernimpuls" color="gold">
        <p>
          Gewohnheiten zu verändern erfordert kein Heldentum und keine eiserne Disziplin. Es erfordert Verständnis für die Mechanismen, die Ihr Verhalten steuern, und die Bereitschaft, klug und geduldig neue Muster zu etablieren. Der wirksamste Hebel liegt in der Verbindung von konkreten Wenn-Dann-Plänen mit einer klaren Vorstellung davon, wer Sie sein möchten. Beginnen Sie mit einer einzigen kleinen Gewohnheit und lassen Sie sie zur Keimzelle größerer Veränderung werden.
        </p>
      </HighlightBox>

      {/* Reflexionsimpulse */}
      <SectionHeader
        tag="Zur Vertiefung"
        title="Reflexionsimpulse"
        text="Diese Fragen helfen Ihnen, Ihre Gewohnheitsmuster bewusster zu betrachten."
      />

      <Checklist
        color="gold"
        items={[
          'Welche Gewohnheit in Ihrem Führungsalltag dient Ihnen nicht mehr? Was ist der versteckte Gewinn (die Belohnung), der diese Gewohnheit am Leben hält?',
          'Wenn Sie sich vorstellen, wie Sie in einem Jahr als Führungskraft sein möchten: Welche eine Gewohnheit würde den größten Unterschied machen?',
          'Welche Wenn-Dann-Pläne könnten Sie für Ihre wichtigste gewünschte Verhaltensänderung formulieren? Wie können Sie Ihre Umgebung so gestalten, dass das neue Verhalten leichter fällt?',
          'Wie lautet die Identitätsaussage, die Sie verkörpern möchten? Was würde eine Person mit dieser Identität in den typischen Situationen Ihres Alltags tun?',
        ]}
      />
    </AkademieLayout>
  )
}
