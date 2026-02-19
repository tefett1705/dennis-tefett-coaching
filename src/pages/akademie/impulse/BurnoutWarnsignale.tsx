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
import { AlertTriangle, Brain, Activity } from 'lucide-react'

export default function BurnoutWarnsignale() {
  useEffect(() => {
    document.title = 'Burnout erkennen: 7 Warnsignale für Führungskräfte | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Innere Stärke & Resilienz"
      moduleSlug="innere-staerke-resilienz"
      impulsSlug="burnout-warnsignale"
      color="teal"
      impulsTitle="Burnout erkennen: 7 Warnsignale, die Führungskräfte übersehen"
      prevImpuls={{
        title: 'Grenzen setzen ohne schlechtes Gewissen',
        href: '/akademie/innere-staerke-resilienz/grenzen-setzen',
      }}
      nextImpuls={undefined}
      relatedCoachingPages={[
        { label: 'Stressmanagement-Coaching', href: '/stressmanagement-coaching' },
        { label: 'Selbstwirksamkeit stärken', href: '/selbstwirksamkeit-staerken' },
        { label: 'Life Coaching', href: '/life-coaching' },
      ]}
    >
      <SectionHeader
        tag="Prävention"
        title="Burnout kommt nicht über Nacht"
        text="Es ist ein schleichender Prozess, der oft erst erkannt wird, wenn die Leistungsfähigkeit bereits massiv eingeschränkt ist. Die meisten Führungskräfte übersehen die frühen Signale, weil sie gelernt haben, sie als normal zu betrachten."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Weltgesundheitsorganisation (WHO) klassifiziert Burnout als arbeitsbedingte Erschöpfung
          mit drei Dimensionen: emotionale Erschöpfung, zunehmende Distanzierung von der Arbeit und
          reduzierte Leistungsfähigkeit. Führungskräfte sind besonders gefährdet, weil sie häufig
          ein hohes Verantwortungsgefühl, ausgeprägte Leistungsorientierung und begrenzte
          Erholungszeiten kombinieren.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die gute Nachricht: Burnout ist kein Schicksal. Wenn Sie die Warnsignale kennen, können
          Sie rechtzeitig gegensteuern. Die folgenden sieben Anzeichen basieren auf aktueller
          Forschung und meiner Erfahrung aus über 800 Coaching-Stunden mit Führungskräften.
        </p>
      </Prose>

      <SectionHeader
        tag="Die 7 Warnsignale"
        title="Was Ihr Körper und Ihre Psyche Ihnen sagen"
      />

      <NumberedSteps
        steps={[
          {
            title: 'Chronische Müdigkeit trotz ausreichend Schlaf',
            text: 'Sie schlafen 7 bis 8 Stunden und fühlen sich trotzdem nicht erholt. Der Körper produziert chronisch Cortisol, was die Schlafqualität beeinträchtigt, selbst wenn die Schlafdauer stimmt. Das erste Signal, das die meisten ignorieren.',
          },
          {
            title: 'Zynismus gegenüber der Arbeit',
            text: 'Sie waren einmal begeistert von Ihrer Rolle. Jetzt denken Sie: "Ist doch alles egal." Diese emotionale Distanzierung ist ein Schutzmechanismus des Gehirns, ein Versuch, die emotionale Belastung zu reduzieren. Wenn Engagement in Gleichgültigkeit umschlägt, ist das ein ernstes Signal.',
          },
          {
            title: 'Entscheidungslähmung',
            text: 'Sie waren bekannt für schnelle, klare Entscheidungen. Jetzt schieben Sie Entscheidungen auf, grübeln endlos, brauchen für einfache Fragen unverhältnismäßig lang. Der präfrontale Cortex, zuständig für Entscheidungen und Planung, verliert unter chronischem Stress seine Leistungsfähigkeit.',
          },
          {
            title: 'Sozialer Rückzug',
            text: 'Sie meiden Teamevents, essen allein, haben keine Energie für Small Talk. In Meetings sind Sie körperlich anwesend, aber geistig abwesend. Soziale Kontakte, die eigentlich Stress puffern, fühlen sich plötzlich wie zusätzliche Belastung an.',
          },
          {
            title: 'Körperliche Symptome ohne klare Ursache',
            text: 'Kopfschmerzen, Rückenschmerzen, Verdauungsprobleme, erhöhte Infektanfälligkeit. Der Arzt findet nichts. Chronischer Stress manifestiert sich häufig in körperlichen Symptomen, die kein medizinisches Korrelat haben, der Körper drückt aus, was der Verstand ignoriert.',
          },
          {
            title: 'Kontrollverlust über Emotionen',
            text: 'Kleinigkeiten bringen Sie auf die Palme. Sie reagieren unangemessen gereizt auf Ihr Team oder werden in Meetings emotional. Die emotionale Regulation, eine Kernkompetenz für Führungskräfte, erodiert, weil die kognitiven Ressourcen erschöpft sind.',
          },
          {
            title: 'Verlust des Wirksamkeitsgefühls',
            text: 'Sie arbeiten mehr als je zuvor, aber das Gefühl, etwas zu bewegen, fehlt. Sie fühlen sich wie ein Hamster im Rad. Diese "erlernte Hilflosigkeit" ist das gefährlichste Signal: Wenn der Glaube an die eigene Wirksamkeit schwindet, folgt oft der Zusammenbruch.',
          },
        ]}
      />

      <QuoteBlock
        text="Burnout ist nicht das Ergebnis von zu viel Arbeit. Es ist das Ergebnis von zu wenig Kontrolle über die eigene Arbeit."
        author="Christina Maslach, Burnout-Forscherin"
      />

      <SectionHeader
        tag="Neurowissenschaft"
        title="Was im Gehirn bei Burnout passiert"
      />

      <BenefitGrid
        items={[
          {
            icon: Brain,
            title: 'Schrumpfender Präfrontaler Cortex',
            text: 'Studien zeigen: Chronischer Stress reduziert die graue Substanz im präfrontalen Cortex. Entscheidungsfähigkeit, Kreativität und emotionale Regulation nehmen messbar ab.',
          },
          {
            icon: AlertTriangle,
            title: 'Überaktive Amygdala',
            text: 'Die Amygdala wird unter Dauerstress hypersensibel. Neutrale Situationen werden als bedrohlich interpretiert. Das erklärt die erhöhte Reizbarkeit und Angstbereitschaft.',
          },
          {
            icon: Activity,
            title: 'Gestörte HPA-Achse',
            text: 'Die Hypothalamus-Hypophysen-Nebennieren-Achse, das zentrale Stresssystem, gerät aus dem Gleichgewicht. Das Cortisolprofil flacht ab: morgens zu niedrig, abends zu hoch.',
          },
        ]}
        columns={3}
      />

      <SectionHeader
        tag="Prävention"
        title="Was Sie jetzt tun können"
        text="Prävention ist effektiver als Intervention. Wenn Sie sich in mehr als drei Warnsignalen wiedererkennen, handeln Sie jetzt."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Der wichtigste Schritt ist, die Signale ernst zu nehmen, statt sie als Schwäche
          umzudeuten. "Ich muss nur durchhalten" ist der Satz, den fast jede Führungskraft
          sagt, bevor es zu spät ist. Burnout-Prävention bedeutet nicht weniger arbeiten.
          Es bedeutet, die Arbeit anders zu gestalten und die eigene Stressreaktion bewusst
          zu regulieren.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          In meinem Coaching arbeite ich mit Führungskräften an drei Hebeln: der bewussten
          Steuerung der neuronalen Stressreaktion, der Identifikation und Veränderung toxischer
          Arbeitsmuster und der Wiederherstellung des Wirksamkeitsgefühls. Die neurowissenschaftliche
          Forschung zeigt: Auch fortgeschrittene Burnout-Symptome sind reversibel, wenn frühzeitig
          und strukturiert interveniert wird.
        </p>
      </Prose>

      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Burnout ist kein Zeichen von Schwäche. Es ist das Ergebnis eines Nervensystems, das zu
          lange über seiner Belastungsgrenze arbeitet, oft bei Menschen mit besonders hohem
          Verantwortungsgefühl. Die Warnsignale zu kennen ist der erste Schritt. Sie ernst zu
          nehmen ist der entscheidende. Wenn Sie sich in mehreren Signalen wiedererkennen, ist
          professionelle Begleitung der schnellste Weg zurück zu Leistungsfähigkeit und
          Lebensqualität.
        </p>
      </HighlightBox>

      <SectionHeader
        tag="Reflexion"
        title="Ehrliche Selbsteinschätzung"
        text="Beantworten Sie diese Fragen ohne inneren Zensor. Nur Ehrlichkeit führt zu Veränderung."
      />

      <Checklist
        items={[
          'Wie viele der sieben Warnsignale erkenne ich bei mir? Seit wann bestehen diese?',
          'Wann habe ich mich zuletzt nach einem Wochenende wirklich erholt gefühlt?',
          'Habe ich in den letzten 6 Monaten körperliche Symptome entwickelt, die ich nicht erklären kann?',
          'Reagiere ich auf mein Team anders als vor einem Jahr? Ist mehr Gereiztheit oder Distanz entstanden?',
          'Glaube ich noch daran, dass meine Arbeit etwas bewirkt? Oder fühle ich mich zunehmend machtlos?',
        ]}
        color="teal"
      />
    </AkademieLayout>
  )
}
