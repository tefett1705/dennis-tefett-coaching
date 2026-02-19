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
import { Eye, Brain, Shield, Users } from 'lucide-react'

export default function ImposterSyndrom() {
  useEffect(() => {
    document.title = 'Imposter-Syndrom bei Führungskräften | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Persönlichkeit & Wachstum"
      moduleSlug="persoenlichkeit-wachstum"
      impulsSlug="imposter-syndrom"
      color="gold"
      impulsTitle="Imposter-Syndrom: Wenn Erfolg sich falsch anfühlt"
      prevImpuls={{
        title: 'Gewohnheiten verändern: Was die Wissenschaft sagt',
        href: '/akademie/persoenlichkeit-wachstum/gewohnheiten-veraendern',
      }}
      nextImpuls={undefined}
      relatedCoachingPages={[
        { label: 'Persönlichkeitsentwicklung', href: '/persoenlichkeitsentwicklung-erklaert' },
        { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
        { label: 'Selbstwirksamkeit stärken', href: '/selbstwirksamkeit-staerken' },
      ]}
    >
      <SectionHeader
        tag="Psychologie"
        title="Das unsichtbare Hindernis an der Spitze"
        text="70% aller Führungskräfte erleben im Laufe ihrer Karriere das Imposter-Syndrom. Nicht die Inkompetenten. Die Leistungsstarken."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Sie haben die Beförderung bekommen, das Team aufgebaut, die Zahlen geliefert. Und trotzdem
          sitzt da dieses leise Gefühl: Bald merken alle, dass ich eigentlich nicht hierher gehöre.
          Dass ich nur Glück hatte. Dass der Erfolg nicht wirklich meiner ist.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Das Imposter-Syndrom (auch: Hochstapler-Syndrom) ist kein Zeichen von Schwäche. Es trifft
          besonders Menschen mit hohem Anspruch an sich selbst, oft in Umbruchphasen: neue Rolle,
          mehr Verantwortung, unbekanntes Terrain. Die Psychologinnen Pauline Clance und Suzanne Imes
          beschrieben dieses Phänomen erstmals 1978 und fanden es besonders bei hochleistenden
          Persönlichkeiten.
        </p>
      </Prose>

      <SectionHeader
        tag="Neurowissenschaft"
        title="Was im Gehirn passiert"
      />

      <BenefitGrid
        items={[
          {
            icon: Brain,
            title: 'Amygdala auf Hochalarm',
            text: 'Die Angst, entlarvt zu werden, aktiviert dieselben Hirnareale wie eine reale Bedrohung. Die Amygdala bleibt in einem permanenten Wachzustand, was zu chronischer Anspannung führt.',
          },
          {
            icon: Eye,
            title: 'Selektive Wahrnehmung',
            text: 'Imposter filtern Informationen: Erfolge werden externalisiert ("Glück, Timing, andere haben geholfen"), Misserfolge internalisiert ("Ich bin nicht gut genug"). Ein verzerrtes Selbstbild entsteht.',
          },
          {
            icon: Shield,
            title: 'Kompensationsstrategien',
            text: 'Overworking, Perfektionismus oder Prokrastination: Alles Versuche, die gefühlte Lücke zwischen dem eigenen Bild und den Erwartungen anderer zu schließen, oft um den Preis der Gesundheit.',
          },
          {
            icon: Users,
            title: 'Soziale Isolation',
            text: 'Aus Angst vor Entlarvung vermeiden Betroffene Verletzlichkeit. Sie teilen ihre Unsicherheiten nicht, was das Gefühl der Isolation verstärkt, gerade in Führungspositionen, wo Offenheit als Risiko erscheint.',
          },
        ]}
        columns={2}
      />

      <SectionHeader
        tag="Erkennen"
        title="Die fünf Imposter-Typen"
        text="Forscherin Valerie Young identifizierte fünf typische Muster. Die meisten Führungskräfte erkennen sich in mindestens einem wieder."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Der Perfektionist',
            text: 'Setzt unmöglich hohe Standards und empfindet jeden Fehler als Beweis der eigenen Unzulänglichkeit. 99% reichen nicht, weil die fehlenden 1% den Hochstapler entlarven könnten.',
          },
          {
            title: 'Der Naturtalent-Gläubige',
            text: 'Glaubt, dass Kompetenz mühelos sein muss. Wenn etwas Anstrengung erfordert, ist das ein Zeichen, dass man es nicht "wirklich" kann. Lernen und Wachstum werden als Schwäche gedeutet.',
          },
          {
            title: 'Der Solist',
            text: 'Hilfe annehmen beweist Inkompetenz. Alles muss allein geschafft werden. In der Führung wird das zum Problem: Delegation fühlt sich wie Eingeständnis an.',
          },
          {
            title: 'Der Experte',
            text: 'Egal wie viel Wissen angehäuft wird, es reicht nie. Vor jedem Meeting wird noch recherchiert, vor jeder Entscheidung noch eine Quelle geprüft. Die Angst: Jemand könnte eine Frage stellen, die ich nicht beantworten kann.',
          },
          {
            title: 'Der Superheld',
            text: 'Kompensiert das Imposter-Gefühl durch extreme Arbeitsleistung. Immer erreichbar, immer produktiv, immer mehr als andere. Der Preis: Burnout und die Unfähigkeit, Grenzen zu setzen.',
          },
        ]}
      />

      <QuoteBlock
        text="Das Imposter-Syndrom ist kein Defizit. Es ist ein Signal, dass Sie sich in einer Zone bewegen, die größer ist als Ihr bisheriges Selbstbild."
        author="Dennis Tefett"
      />

      <SectionHeader
        tag="Lösung"
        title="Vom Imposter zum authentischen Leader"
        text="Das Ziel ist nicht, die Unsicherheit komplett zu beseitigen. Sondern sie zu verstehen, zu integrieren und trotzdem wirksam zu handeln."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die neurowissenschaftliche Forschung zeigt: Das Imposter-Syndrom lässt sich nicht durch
          positives Denken oder Affirmationen lösen. Denn das Gehirn erkennt die Diskrepanz zwischen
          dem, was wir fühlen, und dem, was wir uns einreden sollen. Was funktioniert, ist ein
          dreistufiger Prozess aus Erkennen, Verstehen und Neuverknüpfen.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Im Coaching arbeiten wir an den neuronalen Mustern, die das Imposter-Gefühl aufrechterhalten.
          Wir identifizieren die auslösenden Situationen, die automatischen Gedanken und die
          Kompensationsstrategien. Und wir ersetzen sie durch belastbare innere Überzeugungen,
          die auf realen Erfahrungen basieren, nicht auf Wunschdenken.
        </p>
      </Prose>

      <HighlightBox title="Kernimpuls" color="gold">
        <p>
          Das Imposter-Syndrom betrifft nicht diejenigen, die wirklich inkompetent sind. Es betrifft
          Menschen, die hohe Standards haben und sich in Wachstumszonen bewegen. Der entscheidende
          Schritt ist nicht, das Gefühl loszuwerden, sondern es als Signal zu nutzen: Sie sind dabei,
          über sich hinauszuwachsen. Und genau dafür brauchen Sie eine Begleitung, die den Unterschied
          zwischen realer Gefahr und wachstumsbedingter Unsicherheit kennt.
        </p>
      </HighlightBox>

      <SectionHeader
        tag="Reflexion"
        title="Reflexionsimpulse"
        text="Ehrliche Selbstbeobachtung ist der erste Schritt. Nehmen Sie sich 15 Minuten Zeit."
      />

      <Checklist
        items={[
          'In welchen Situationen fühle ich mich als Hochstapler? Gibt es ein Muster (neue Rollen, Meetings mit Vorgesetzten, öffentliches Sprechen)?',
          'Wie erkläre ich mir meine Erfolge? Welchen Anteil schreibe ich mir selbst zu, welchen äußeren Umständen?',
          'Welchem der fünf Imposter-Typen entspreche ich am ehesten? Wie zeigt sich das konkret in meinem Alltag?',
          'Was wäre, wenn meine Kompetenz nicht perfekt sein muss, um wertvoll zu sein? Was würde sich in meinem Führungsverhalten ändern?',
          'Was würde ich anders machen, wenn ich wüsste, dass niemand mich als Hochstapler entlarvt?',
        ]}
        color="gold"
      />
    </AkademieLayout>
  )
}
