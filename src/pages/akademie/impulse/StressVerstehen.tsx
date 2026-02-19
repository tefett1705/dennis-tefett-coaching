import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import {
  SectionHeader,
  Prose,
  BenefitGrid,
  NumberedSteps,
  QuoteBlock,
  HighlightBox,
  Checklist,
} from '../../../components/SubpageBlocks'
import { Brain, Zap, Activity } from 'lucide-react'

export default function StressVerstehen() {
  useEffect(() => {
    document.title = 'Stress verstehen: Was im Gehirn passiert | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Innere Stärke & Resilienz"
      moduleSlug="innere-staerke-resilienz"
      impulsSlug="stress-verstehen"
      color="teal"
      impulsTitle="Stress verstehen: Was im Gehirn passiert"
      prevImpuls={undefined}
      nextImpuls={{
        title: 'Ihr persönliches Resilienz-Framework',
        href: '/akademie/innere-staerke-resilienz/resilienz-framework',
      }}
      relatedCoachingPages={[
        { label: 'Stressmanagement-Coaching', href: '/stressmanagement-coaching' },
        { label: 'Selbstwirksamkeit stärken', href: '/selbstwirksamkeit-staerken' },
      ]}
    >
      {/* Einführung */}
      <SectionHeader
        tag="Neurowissenschaft"
        title="Warum Stress kein Feind ist"
        text="Stress ist eine biologische Antwort, die unser Überleben sichert. Problematisch wird er erst, wenn die Stressreaktion chronisch wird und wir die Kontrolle über unsere Reaktion verlieren."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Im Führungsalltag ist Stress allgegenwärtig: enge Deadlines, widersprüchliche Erwartungen,
          Verantwortung für andere. Doch um Stress wirksam zu regulieren, müssen wir zunächst
          verstehen, was in unserem Gehirn geschieht. Denn erst das Verständnis der neuronalen
          Mechanismen ermöglicht es, bewusste Gegenstrategien zu entwickeln.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die moderne Stressforschung zeigt: Nicht der Stressor selbst bestimmt unsere Reaktion,
          sondern unsere Bewertung der Situation. Das ist eine gute Nachricht, denn unsere Bewertung
          können wir beeinflussen. Der Schlüssel liegt im Verständnis der beteiligten Hirnstrukturen.
        </p>
      </Prose>

      {/* Die drei Schlüsselstrukturen */}
      <SectionHeader
        tag="Das Gehirn"
        title="Drei Schlüsselstrukturen der Stressreaktion"
      />

      <BenefitGrid
        items={[
          {
            icon: Zap,
            title: 'Amygdala: Der Alarmmelder',
            text: 'Die Amygdala scannt permanent unsere Umgebung auf potenzielle Bedrohungen. Erkennt sie Gefahr, löst sie in Millisekunden die Stressreaktion aus, noch bevor der bewusste Verstand eingreifen kann.',
          },
          {
            icon: Activity,
            title: 'Cortisol: Der Treibstoff',
            text: 'Das Stresshormon Cortisol mobilisiert Energie und schärft die Aufmerksamkeit. Kurzfristig steigert es die Leistungsfähigkeit. Chronisch erhöht führt es jedoch zu Erschöpfung, Schlafstörungen und beeinträchtigt das Immunsystem.',
          },
          {
            icon: Brain,
            title: 'Präfrontaler Cortex: Die Bremse',
            text: 'Der präfrontale Cortex ist für rationales Denken, Planung und Impulskontrolle zuständig. Unter starkem Stress wird er teilweise deaktiviert. Deshalb treffen wir unter Druck oft Entscheidungen, die wir später bereuen.',
          },
        ]}
        columns={3}
      />

      {/* Die Stressreaktion verstehen */}
      <SectionHeader
        tag="Mechanismen"
        title="Was bei Stress im Körper geschieht"
        text="Die Stressreaktion verläuft in einer vorhersagbaren Kaskade. Wenn Sie diese Kaskade kennen, können Sie an mehreren Stellen regulierend eingreifen."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Wahrnehmung und Bewertung',
            text: 'Alles beginnt mit einem Reiz, der als potenziell bedrohlich bewertet wird. Die Amygdala reagiert dabei auf der Basis vergangener Erfahrungen. Eine kritische E-Mail Ihres Vorgesetzten kann dieselbe neuronale Kaskade auslösen wie eine reale körperliche Bedrohung.',
          },
          {
            title: 'Die Kampf-oder-Flucht-Reaktion',
            text: 'Das sympathische Nervensystem wird aktiviert. Herzfrequenz und Blutdruck steigen, Muskeln spannen sich an, die Atmung wird flacher. Gleichzeitig werden Verdauung und Immunfunktion heruntergefahren. Der Körper bereitet sich auf körperliche Aktion vor.',
          },
          {
            title: 'Die Erstarrungsreaktion',
            text: 'Bei überwältigender Bedrohung kann eine dritte Reaktion eintreten: Freeze. Im Arbeitskontext zeigt sich das als Entscheidungslähmung, Prokrastination oder emotionale Taubheit. Diese Reaktion wird häufig übersehen, ist aber bei chronischem Stress weit verbreitet.',
          },
          {
            title: 'Chronifizierung und Folgen',
            text: 'Wird die Stressreaktion nicht durch Erholung unterbrochen, chronifiziert sie. Das Cortisolniveau bleibt dauerhaft erhöht, der präfrontale Cortex verliert an Leistungsfähigkeit, und die Amygdala wird zunehmend sensibler. Ein Teufelskreis entsteht.',
          },
          {
            title: 'Regulierung und Erholung',
            text: 'Das parasympathische Nervensystem ist der natürliche Gegenspieler der Stressreaktion. Durch bewusste Aktivierung, etwa über tiefe Bauchatmung, Bewegung oder soziale Verbindung, können Sie die Stressreaktion aktiv herunterregulieren.',
          },
        ]}
      />

      <QuoteBlock
        text="Zwischen Reiz und Reaktion liegt ein Raum. In diesem Raum liegt unsere Macht zur Wahl."
        author="Viktor Frankl"
      />

      {/* Stress als Führungskraft */}
      <SectionHeader
        tag="Führungskontext"
        title="Warum Führungskräfte besonders betroffen sind"
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Führungskräfte erleben eine spezifische Form von Stress: den sogenannten Verantwortungsstress.
          Sie tragen nicht nur die Last eigener Aufgaben, sondern fühlen sich für die Ergebnisse und
          das Wohlergehen ihres gesamten Teams verantwortlich. Gleichzeitig befinden sie sich oft in
          einer Sandwich-Position zwischen den Erwartungen von oben und den Bedürfnissen von unten.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Hinzu kommt ein kulturelles Problem: Viele Führungskräfte haben gelernt, Stress als
          Leistungsbeweis zu betrachten. Wer gestresst ist, arbeitet hart. Wer keine Erschöpfung zeigt,
          leistet nicht genug. Diese Überzeugung ist nicht nur falsch, sondern gefährlich. Sie verhindert,
          dass Stress rechtzeitig als Signal erkannt und reguliert wird.
        </p>
      </Prose>

      {/* Kernimpuls */}
      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Stress ist kein Zeichen von Schwäche und Stressfreiheit ist keine realistische Option. Was
          zählt, ist Ihre Fähigkeit, die eigene Stressreaktion zu erkennen, zu verstehen und bewusst
          zu regulieren. Wer die Mechanismen im eigenen Gehirn versteht, gewinnt Handlungsspielraum.
          Das ist der erste Schritt zu nachhaltiger Resilienz.
        </p>
      </HighlightBox>

      {/* Reflexionsimpulse */}
      <SectionHeader
        tag="Reflexion"
        title="Reflexionsimpulse"
        text="Beobachten Sie in den kommenden Tagen Ihre Stressreaktionen und nutzen Sie diese Fragen als Kompass."
      />

      <Checklist
        items={[
          'Wie äußert sich Stress bei mir körperlich? Welche Signale sendet mein Körper, bevor ich den Stress bewusst wahrnehme?',
          'Welche Situationen im Führungsalltag lösen bei mir die stärksten Stressreaktionen aus? Ist es Zeitdruck, Konflikte oder Kontrollverlust?',
          'Neige ich unter Stress eher zu Kampf (Aktionismus, Aggression), Flucht (Vermeidung, Ablenkung) oder Erstarrung (Entscheidungslähmung)?',
          'Welche Bewertungen verstärken meinen Stress? Gibt es wiederkehrende Gedanken wie „Das muss perfekt sein" oder „Ich darf keine Schwäche zeigen"?',
          'Was hilft mir am zuverlässigsten, nach einer Stressphase wieder in einen ruhigen Zustand zu kommen?',
        ]}
        color="teal"
      />
    </AkademieLayout>
  )
}
