import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import { SectionHeader, Prose, BenefitGrid, NumberedSteps, QuoteBlock, HighlightBox, Checklist } from '../../../components/SubpageBlocks'
import { Brain, Thermometer, Wind, ShieldCheck, HeartPulse, Lightbulb } from 'lucide-react'

export default function EmotionaleRegulation() {
  useEffect(() => {
    document.title = 'Emotionale Regulation für den Führungsalltag | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Innere Stärke & Resilienz"
      moduleSlug="innere-staerke-resilienz"
      color="teal"
      impulsTitle="Emotionale Regulation für den Führungsalltag"
      prevImpuls={{ title: 'Ihr persönliches Resilienz-Framework', href: '/akademie/innere-staerke-resilienz/resilienz-framework' }}
      nextImpuls={{ title: 'Grenzen setzen ohne schlechtes Gewissen', href: '/akademie/innere-staerke-resilienz/grenzen-setzen' }}
      relatedCoachingPages={[
        { label: 'Stressmanagement-Coaching', href: '/stressmanagement-coaching' },
        { label: 'Selbstwirksamkeit stärken', href: '/selbstwirksamkeit-staerken' },
      ]}
    >
      {/* Einleitung */}
      <SectionHeader
        tag="Emotionale Intelligenz"
        title="Warum emotionale Regulation kein Unterdrücken bedeutet"
        text="Führungskräfte stehen täglich vor Situationen, die starke Emotionen auslösen. Entscheidend ist nicht, ob Sie Emotionen empfinden, sondern wie Sie mit ihnen umgehen."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Neurowissenschaft zeigt: Emotionen sind keine Störfaktoren, sondern wertvolle Informationsquellen. Sie signalisieren Ihnen, was Ihnen wichtig ist, wo Grenzen überschritten werden und welche Bedürfnisse gerade unerfüllt sind. Emotionale Regulation bedeutet, diese Signale bewusst wahrzunehmen und konstruktiv zu nutzen, anstatt ihnen ausgeliefert zu sein oder sie zu unterdrücken.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Studien aus der Emotionsforschung belegen, dass Führungskräfte mit hoher emotionaler Regulationsfähigkeit bessere Entscheidungen treffen, konstruktivere Beziehungen pflegen und in Krisensituationen handlungsfähig bleiben. Diese Kompetenz lässt sich gezielt entwickeln.
        </p>
      </Prose>

      {/* Drei Kernkonzepte */}
      <SectionHeader
        tag="Wissenschaftliche Grundlagen"
        title="Drei Schlüsselkonzepte für Ihren Führungsalltag"
      />

      <BenefitGrid
        items={[
          {
            icon: Brain,
            title: 'Kognitive Neubewertung',
            text: 'Die Fähigkeit, eine Situation bewusst anders zu interpretieren. Statt „Der Mitarbeiter greift mich an" denken Sie „Er fühlt sich unter Druck und braucht Unterstützung".',
          },
          {
            icon: Thermometer,
            title: 'Window of Tolerance',
            text: 'Der Bereich, in dem Sie optimal funktionieren. Wenn Sie dieses Fenster verlassen (durch Übererregung oder Untererregung), verringert sich Ihre Handlungsfähigkeit.',
          },
          {
            icon: Wind,
            title: 'Emotionale Agilität',
            text: 'Die Fähigkeit, Emotionen zu bemerken, ohne mit ihnen zu verschmelzen. Sie beobachten Ihre Gefühle wie Wetterereignisse, die kommen und gehen.',
          },
        ]}
        columns={3}
      />

      {/* Kognitive Neubewertung */}
      <SectionHeader
        tag="Strategie 1"
        title="Kognitive Neubewertung: Die Kraft der Perspektive"
        text="Wie Sie belastende Situationen durch einen bewussten Perspektivwechsel entschärfen."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die kognitive Neubewertung (Cognitive Reappraisal) gilt in der Emotionsforschung als eine der wirksamsten Strategien zur Emotionsregulation. Im Gegensatz zur Unterdrückung, die langfristig zu mehr Stress führt, verändert die Neubewertung Ihre emotionale Reaktion an der Wurzel: bei der Interpretation der Situation.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Das Prinzip ist einfach: Zwischen einem Ereignis und Ihrer emotionalen Reaktion steht immer eine Bewertung. Diese Bewertung geschieht oft unbewusst und automatisch. Wenn Sie lernen, diese Bewertung bewusst zu hinterfragen, gewinnen Sie Einfluss auf Ihre emotionale Reaktion.
        </p>
      </Prose>

      <NumberedSteps
        steps={[
          {
            title: 'Innehalten und Wahrnehmen',
            text: 'Bemerken Sie die emotionale Reaktion in Ihrem Körper. Wo spüren Sie Anspannung, Hitze oder Enge? Benennen Sie die Emotion: „Ich bemerke, dass ich gerade Frustration empfinde."',
          },
          {
            title: 'Die automatische Bewertung identifizieren',
            text: 'Fragen Sie sich: Welche Geschichte erzähle ich mir gerade über diese Situation? Welche Annahmen liegen meiner Reaktion zugrunde? Oft zeigen sich dabei Generalisierungen oder Worst-Case-Szenarien.',
          },
          {
            title: 'Alternative Perspektiven erkunden',
            text: 'Suchen Sie bewusst nach mindestens zwei weiteren Interpretationen der Situation. Was würde ein wohlwollender Beobachter sagen? Welche Informationen fehlen Ihnen möglicherweise?',
          },
          {
            title: 'Eine hilfreiche Bewertung wählen',
            text: 'Wählen Sie die Interpretation, die realistisch und gleichzeitig handlungsorientiert ist. Es geht nicht um positives Denken, sondern um eine differenziertere Sicht auf die Realität.',
          },
        ]}
      />

      <QuoteBlock
        text="Zwischen Reiz und Reaktion liegt ein Raum. In diesem Raum liegt unsere Freiheit und unsere Macht, unsere Antwort zu wählen."
        author="Viktor Frankl"
      />

      {/* Window of Tolerance */}
      <SectionHeader
        tag="Strategie 2"
        title="Das Window of Tolerance erweitern"
        text="Verstehen Sie Ihren optimalen Funktionsbereich und lernen Sie, ihn systematisch zu vergrößern."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Das Konzept des Window of Tolerance beschreibt den Bereich der emotionalen Erregung, in dem Sie klar denken, angemessen reagieren und gute Entscheidungen treffen können. Innerhalb dieses Fensters fühlen Sie sich präsent, handlungsfähig und mit Ihren Ressourcen verbunden.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Verlassen Sie dieses Fenster nach oben (Hyperarousal), erleben Sie Anspannung, Gereiztheit oder impulsives Verhalten. Verlassen Sie es nach unten (Hypoarousal), fühlen Sie sich erschöpft, abgeschaltet oder handlungsunfähig. Beide Zustände beeinträchtigen Ihre Führungsqualität erheblich.
        </p>
      </Prose>

      <BenefitGrid
        items={[
          {
            icon: ShieldCheck,
            title: 'Frühwarnsignale erkennen',
            text: 'Lernen Sie Ihre persönlichen Anzeichen kennen, die darauf hinweisen, dass Sie Ihr Toleranzfenster verlassen. Bei manchen ist es ein flacher Atem, bei anderen kreisende Gedanken.',
          },
          {
            icon: HeartPulse,
            title: 'Regulationstechniken anwenden',
            text: 'Bewusstes Atmen, Erdungsübungen oder kurze Bewegungsimpulse helfen Ihnen, in Ihr optimales Funktionsfenster zurückzukehren. Bereits 90 Sekunden bewusstes Atmen verändern Ihre Physiologie.',
          },
          {
            icon: Lightbulb,
            title: 'Das Fenster vergrößern',
            text: 'Durch regelmäßige Praxis, ausreichend Schlaf, Bewegung und bewusste Erholung erweitern Sie langfristig Ihren Toleranzbereich. Je größer Ihr Fenster, desto belastbarer werden Sie.',
          },
        ]}
        columns={3}
      />

      {/* Emotionale Agilität */}
      <SectionHeader
        tag="Strategie 3"
        title="Emotionale Agilität im Führungsalltag"
        text="Flexibel mit Emotionen umgehen, statt von ihnen gesteuert zu werden."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Emotionale Agilität beschreibt die Fähigkeit, mit schwierigen Gedanken und Gefühlen auf eine Weise umzugehen, die nicht starr oder reaktiv ist. Es geht darum, Emotionen als das zu sehen, was sie sind: vorübergehende innere Zustände, die wichtige Informationen liefern, aber nicht Ihre Identität definieren.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Statt „Ich bin wütend" sagen Sie „Ich bemerke gerade Wut in mir". Dieser kleine sprachliche Unterschied schafft die nötige Distanz, um bewusst zu entscheiden, wie Sie handeln möchten, anstatt automatisch zu reagieren.
        </p>
      </Prose>

      <NumberedSteps
        steps={[
          {
            title: 'Hinwenden statt Wegwenden',
            text: 'Nehmen Sie die Emotion bewusst wahr, anstatt sie zu vermeiden. Neugierige Aufmerksamkeit ersetzt den Impuls zur Unterdrückung. Was versucht diese Emotion Ihnen mitzuteilen?',
          },
          {
            title: 'Benennen mit Abstand',
            text: 'Verwenden Sie Formulierungen, die Distanz schaffen: „Ich bemerke den Gedanken, dass..." oder „Da ist gerade ein Gefühl von...". Diese Technik wird in der Psychologie als „Defusion" bezeichnet.',
          },
          {
            title: 'Werteorientiert handeln',
            text: 'Fragen Sie sich: Was ist mir in dieser Situation wirklich wichtig? Welches Verhalten entspricht meinen Führungswerten? Lassen Sie Ihre Werte, nicht Ihre Emotionen, Ihr Handeln bestimmen.',
          },
        ]}
      />

      {/* Kernimpuls */}
      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Emotionale Regulation ist keine Kontrolle über Ihre Gefühle, sondern die bewusste Wahl, wie Sie auf sie antworten. Jede emotional herausfordernde Situation im Führungsalltag ist eine Gelegenheit, diese Kompetenz zu stärken. Beginnen Sie mit dem einfachsten Schritt: Halten Sie inne, bevor Sie reagieren, und geben Sie sich selbst den Raum für eine bewusste Antwort.
        </p>
      </HighlightBox>

      {/* Reflexionsimpulse */}
      <SectionHeader
        tag="Zur Vertiefung"
        title="Reflexionsimpulse"
        text="Nehmen Sie sich Zeit für diese Fragen. Es gibt keine richtigen oder falschen Antworten."
      />

      <Checklist
        color="teal"
        items={[
          'In welchen wiederkehrenden Führungssituationen verlieren Sie am ehesten Ihren emotionalen Gleichgewichtszustand?',
          'Welche automatischen Bewertungsmuster erkennen Sie bei sich? Neigen Sie eher zur Katastrophisierung, zur Personalisierung oder zur Übergeneralisierung?',
          'Wie würde sich Ihr Führungsverhalten verändern, wenn Sie in stressigen Momenten drei Atemzüge Pause einlegen würden?',
          'Welche Ihrer Emotionen betrachten Sie als „unangemessen" für eine Führungskraft? Was würde passieren, wenn Sie diese Bewertung loslassen?',
          'Woran erkennen Sie, dass Sie Ihr Window of Tolerance verlassen haben? Was hilft Ihnen am zuverlässigsten, zurückzukehren?',
        ]}
      />
    </AkademieLayout>
  )
}
