import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import { SectionHeader, Prose, BenefitGrid, NumberedSteps, QuoteBlock, HighlightBox, Checklist } from '../../../components/SubpageBlocks'
import { Shield, MessageCircle, Thermometer, HeartHandshake, Brain, Anchor } from 'lucide-react'

export default function SchwierigeGespraeche() {
  useEffect(() => {
    document.title = 'Schwierige Gespräche souverän führen | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Kommunikation & Beziehung"
      moduleSlug="kommunikation-beziehung"
      color="teal"
      impulsTitle="Schwierige Gespräche souverän führen"
      prevImpuls={undefined}
      nextImpuls={{ title: 'Konflikte als Chance: Konstruktive Konfliktlösung', href: '/akademie/kommunikation-beziehung/konflikte-als-chance' }}
      relatedCoachingPages={[
        { label: 'Teamcoaching', href: '/teamcoaching' },
        { label: 'Teambuilding-Workshop', href: '/teambuildingworkshop' },
      ]}
    >
      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Ob Leistungsgespräch, Kündigung oder das Ansprechen eines Fehlverhaltens: Schwierige Gespräche
          gehören zum Führungsalltag. Doch gerade hier zeigt sich die Qualität von Führung. Die Fähigkeit,
          auch unangenehme Themen klar und wertschätzend anzusprechen, ist ein Ausdruck von Respekt und
          Verantwortung.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Neurowissenschaftliche Erkenntnisse zeigen, dass unser Gehirn schwierige Gespräche als soziale
          Bedrohung interpretiert. Das limbische System aktiviert dieselben Stressmechanismen wie bei
          physischer Gefahr. Wer diese Dynamik versteht, kann bewusst gegensteuern und eine konstruktive
          Gesprächsatmosphäre schaffen.
        </p>
      </Prose>

      <SectionHeader
        tag="Grundlagen"
        title="Warum wir schwierige Gespräche vermeiden"
        text="Die Vermeidung schwieriger Gespräche hat tiefe neurobiologische Wurzeln, die sich verstehen und überwinden lassen."
      />

      <BenefitGrid
        items={[
          {
            icon: Brain,
            title: 'Die Amygdala-Reaktion',
            text: 'Unser Gehirn bewertet soziale Konfrontation als Bedrohung. Der Fluchtimpuls ist eine natürliche Reaktion, die durch bewusste Steuerung überwunden werden kann.',
          },
          {
            icon: Thermometer,
            title: 'Emotionale Trigger',
            text: 'Bestimmte Themen oder Verhaltensweisen lösen automatisch starke Emotionen aus. Das Erkennen eigener Trigger ist der erste Schritt zur Selbstregulation.',
          },
          {
            icon: Shield,
            title: 'Schutz der Beziehung',
            text: 'Paradoxerweise schaden wir Beziehungen mehr durch Vermeidung als durch offene Ansprache. Ungesagtes erzeugt Distanz und untergräbt Vertrauen.',
          },
        ]}
        columns={3}
      />

      <QuoteBlock
        text="Die Qualität einer Beziehung zeigt sich nicht in der Abwesenheit von Konflikten, sondern in der Art, wie wir mit ihnen umgehen."
        author="John Gottman"
      />

      <SectionHeader
        tag="Vorbereitung"
        title="Das KLARA-Vorbereitungsmodell"
        text="Gute Vorbereitung ist der entscheidende Erfolgsfaktor für schwierige Gespräche. KLARA steht für fünf Vorbereitungsschritte."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Klarheit über das Ziel',
            text: 'Definieren Sie präzise, was Sie mit dem Gespräch erreichen wollen. Unterscheiden Sie zwischen Ihrem Minimalziel, Optimalziel und dem, was Sie auf keinen Fall wollen.',
          },
          {
            title: 'Lage des Gegenübers einschätzen',
            text: 'Versetzen Sie sich in die Perspektive der anderen Person. Welche Bedürfnisse, Ängste und Hoffnungen könnte sie haben? Empathie ist kein Zeichen von Schwäche, sondern strategische Vorbereitung.',
          },
          {
            title: 'Atmosphäre bewusst gestalten',
            text: 'Wählen Sie Zeitpunkt und Ort mit Bedacht. Ein geschützter Rahmen ohne Zeitdruck signalisiert Wertschätzung und schafft die Grundlage für Offenheit.',
          },
          {
            title: 'Reaktionen antizipieren',
            text: 'Spielen Sie mögliche Reaktionen gedanklich durch. Welche emotionalen Reaktionen könnten auftreten? Wie können Sie deeskalierend reagieren, ohne Ihr Ziel aufzugeben?',
          },
          {
            title: 'Abschluss planen',
            text: 'Definieren Sie vorab, wie das Gespräch enden soll. Eine klare Vereinbarung oder ein konkreter nächster Schritt gibt beiden Seiten Orientierung.',
          },
        ]}
      />

      <SectionHeader
        tag="Gesprächsführung"
        title="Gewaltfreie Kommunikation als Haltung"
        text="Die gewaltfreie Kommunikation nach Marshall Rosenberg bietet einen wirksamen Rahmen für schwierige Gespräche."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Das Modell der gewaltfreien Kommunikation unterscheidet vier Schritte: Beobachtung ohne Bewertung,
          Gefühl benennen, Bedürfnis artikulieren und eine konkrete Bitte formulieren. In der Führungspraxis
          bedeutet das: Beschreiben Sie, was Sie wahrnehmen, ohne zu urteilen. Benennen Sie die Wirkung auf
          Sie selbst. Machen Sie Ihr Anliegen transparent und formulieren Sie einen konkreten Wunsch.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Deeskalation gelingt vor allem durch aktives Zuhören und Spiegeln. Wenn Ihr Gegenüber sich
          gehört fühlt, sinkt die Abwehrhaltung. Erst dann ist der Boden bereitet für sachliche
          Lösungsfindung. Widerstehen Sie dem Impuls, sofort Gegenargumente zu liefern. Stattdessen
          würdigen Sie zunächst die Perspektive der anderen Person.
        </p>
      </Prose>

      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Schwierige Gespräche sind keine Störung des Führungsalltags, sondern sein Kern. Jedes ehrlich
          und wertschätzend geführte Gespräch stärkt Vertrauen und Beziehung. Die Souveränität in
          schwierigen Gesprächen wächst nicht durch Techniken allein, sondern durch eine innere Haltung
          des Respekts, der Klarheit und des echten Interesses am Gegenüber.
        </p>
      </HighlightBox>

      <SectionHeader
        tag="Praxis"
        title="Drei Anker für schwierige Momente"
      />

      <BenefitGrid
        items={[
          {
            icon: Anchor,
            title: 'Atempause nutzen',
            text: 'Wenn Emotionen hochkochen, ist eine bewusste Atempause kein Zeichen von Schwäche. Drei tiefe Atemzüge aktivieren den Parasympathikus und bringen Klarheit zurück.',
          },
          {
            icon: MessageCircle,
            title: 'Ich-Botschaften senden',
            text: 'Ersetzen Sie Vorwürfe durch eigene Wahrnehmungen. Statt "Sie machen immer..." sagen Sie "Mir fällt auf, dass..." Dies reduziert Abwehr und öffnet den Dialog.',
          },
          {
            icon: HeartHandshake,
            title: 'Gemeinsame Basis suchen',
            text: 'Selbst im größten Dissens gibt es geteilte Interessen. Benennen Sie diese explizit, um eine Brücke zu schaffen, von der aus Lösungen erarbeitet werden können.',
          },
        ]}
        columns={3}
      />

      <SectionHeader
        tag="Reflexion"
        title="Reflexionsimpulse"
        text="Diese Fragen helfen Ihnen, Ihre persönliche Kompetenz in schwierigen Gesprächen bewusst weiterzuentwickeln."
      />

      <Checklist
        items={[
          'Welches schwierige Gespräch schiebe ich gerade vor mir her, und was hält mich davon ab?',
          'Welche emotionalen Trigger erlebe ich in Konfrontationen besonders intensiv?',
          'Wie reagiere ich typischerweise unter Druck: Angriff, Flucht oder Erstarrung?',
          'Wann habe ich zuletzt ein schwieriges Gespräch gut geführt, und was hat zum Gelingen beigetragen?',
          'Welche eine Gewohnheit würde meine Gesprächskompetenz am meisten stärken?',
        ]}
        color="teal"
      />
    </AkademieLayout>
  )
}
