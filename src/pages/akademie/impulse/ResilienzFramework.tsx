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
import { Heart, Brain, Users, Activity } from 'lucide-react'

export default function ResilienzFramework() {
  useEffect(() => {
    document.title = 'Ihr persönliches Resilienz-Framework | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Innere Stärke & Resilienz"
      moduleSlug="innere-staerke-resilienz"
      color="teal"
      impulsTitle="Ihr persönliches Resilienz-Framework"
      prevImpuls={{
        title: 'Stress verstehen: Was im Gehirn passiert',
        href: '/akademie/innere-staerke-resilienz/stress-verstehen',
      }}
      nextImpuls={{
        title: 'Emotionale Regulation für den Führungsalltag',
        href: '/akademie/innere-staerke-resilienz/emotionale-regulation',
      }}
      relatedCoachingPages={[
        { label: 'Stressmanagement-Coaching', href: '/stressmanagement-coaching' },
        { label: 'Selbstwirksamkeit stärken', href: '/selbstwirksamkeit-staerken' },
      ]}
    >
      {/* Einführung */}
      <SectionHeader
        tag="Resilienz"
        title="Widerstandskraft ist kein Zufall"
        text="Resilienz ist die Fähigkeit, nach Rückschlägen wieder aufzustehen und aus schwierigen Erfahrungen zu wachsen. Sie ist nicht angeboren, sondern kann systematisch aufgebaut werden."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Resilienzforschung hat in den letzten Jahrzehnten einen Paradigmenwechsel vollzogen.
          Früher galt Resilienz als seltene Eigenschaft, die manche Menschen besitzen und andere
          nicht. Heute wissen wir: Resilienz ist ein dynamischer Prozess, der sich aus verschiedenen
          Schutzfaktoren speist. Und diese Schutzfaktoren lassen sich gezielt stärken.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Für Führungskräfte ist Resilienz doppelt bedeutsam. Einerseits brauchen Sie persönliche
          Widerstandskraft, um den Anforderungen Ihrer Rolle standzuhalten. Andererseits wirkt Ihre
          Resilienz als Vorbild und Stabilitätsanker für Ihr gesamtes Team. Ein Framework hilft Ihnen,
          Resilienz nicht dem Zufall zu überlassen, sondern bewusst zu gestalten.
        </p>
      </Prose>

      {/* Die vier Säulen */}
      <SectionHeader
        tag="Das Framework"
        title="Die vier Säulen der Resilienz"
        text="Ein ganzheitliches Resilienz-Framework berücksichtigt vier Dimensionen, die einander stützen und verstärken."
      />

      <BenefitGrid
        items={[
          {
            icon: Activity,
            title: 'Physische Resilienz',
            text: 'Ihr Körper ist das Fundament. Regelmäßige Bewegung, ausreichend Schlaf und gesunde Ernährung bilden die biologische Basis für Stressresistenz. Chronischer Schlafmangel allein kann die kognitive Leistung um bis zu 40 Prozent reduzieren.',
          },
          {
            icon: Heart,
            title: 'Emotionale Resilienz',
            text: 'Die Fähigkeit, eigene Emotionen wahrzunehmen, zu akzeptieren und konstruktiv zu regulieren. Emotionale Resilienz bedeutet nicht, keine schwierigen Gefühle zu haben, sondern sie als Informationsquelle zu nutzen.',
          },
          {
            icon: Brain,
            title: 'Mentale Resilienz',
            text: 'Ihre Denkmuster bestimmen, wie Sie Herausforderungen bewerten. Mentale Resilienz umfasst kognitive Flexibilität, realistischen Optimismus und die Fähigkeit, in Schwierigkeiten auch Chancen zu erkennen.',
          },
          {
            icon: Users,
            title: 'Soziale Resilienz',
            text: 'Kein Mensch ist resilient allein. Tragfähige Beziehungen, ein vertrauensvolles Netzwerk und die Bereitschaft, Hilfe anzunehmen, sind zentrale Schutzfaktoren. Isolation ist einer der stärksten Risikofaktoren für Burnout.',
          },
        ]}
        columns={2}
      />

      {/* Framework aufbauen */}
      <SectionHeader
        tag="Aufbau"
        title="Ihr persönliches Framework entwickeln"
        text="In fünf Schritten bauen Sie ein individuelles Resilienz-Framework auf, das zu Ihrem Leben und Ihrer Führungsrolle passt."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Bestandsaufnahme: Wo stehen Sie?',
            text: 'Bewerten Sie ehrlich Ihre aktuelle Situation in jeder der vier Dimensionen. Wo sind Sie gut aufgestellt? Wo gibt es Defizite? Achten Sie dabei besonders auf Muster: Vernachlässigen Sie unter Druck immer dieselbe Dimension, etwa den Schlaf oder soziale Kontakte?',
          },
          {
            title: 'Energiequellen identifizieren',
            text: 'Erstellen Sie eine Liste von Aktivitäten, Ritualen und Beziehungen, die Ihnen in jeder Dimension Energie geben. Was bringt Ihnen körperlich Kraft? Welche Menschen tun Ihnen gut? Welche Denkweisen stärken Sie? Diese Energiequellen sind Ihre persönlichen Resilienz-Ressourcen.',
          },
          {
            title: 'Tägliche Mikropraktiken etablieren',
            text: 'Resilienz entsteht nicht durch einzelne große Maßnahmen, sondern durch kleine tägliche Gewohnheiten. Zehn Minuten Bewegung am Morgen, eine bewusste Atempause zwischen Meetings, ein kurzer Dankbarkeitsmoment am Abend. Wählen Sie in jeder Dimension eine Mikropraktik und verankern Sie diese in Ihrem Tagesablauf.',
          },
          {
            title: 'Ein Frühwarnsystem einrichten',
            text: 'Definieren Sie persönliche Warnsignale für jede Dimension. Körperliche Anzeichen wie Verspannungen, emotionale Signale wie Reizbarkeit, mentale Hinweise wie Grübeln, soziale Marker wie Rückzugsverhalten. Je früher Sie diese Signale erkennen, desto schneller können Sie gegensteuern.',
          },
          {
            title: 'Regelmäßige Standortbestimmung',
            text: 'Planen Sie alle zwei bis vier Wochen einen kurzen Resilienz-Check ein. Wie geht es Ihnen in jeder Dimension? Halten Sie Ihre Mikropraktiken durch? Brauchen Sie Anpassungen? Dieser regelmäßige Blick auf das Gesamtbild verhindert, dass blinde Flecken entstehen.',
          },
        ]}
      />

      <QuoteBlock
        text="Es ist nicht die stärkste Spezies, die überlebt, auch nicht die intelligenteste, sondern diejenige, die am besten auf Veränderung reagiert."
        author="Charles Darwin"
      />

      {/* Resilienz im Führungskontext */}
      <SectionHeader
        tag="Führungspraxis"
        title="Resilienz als Führungskompetenz"
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Als Führungskraft hat Ihre persönliche Resilienz eine Strahlwirkung. Die Forschung zur
          emotionalen Ansteckung zeigt, dass Ihr Stressniveau direkt auf Ihr Team übertragen wird.
          Wenn Sie unter Druck ruhig und handlungsfähig bleiben, stabilisiert das Ihr gesamtes Umfeld.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Dabei ist es wichtig, Resilienz nicht mit Unverwundbarkeit zu verwechseln. Resiliente
          Führungskräfte zeigen auch Verletzlichkeit. Sie sprechen offen über Herausforderungen und
          modellieren damit, dass es in Ordnung ist, nicht immer alles im Griff zu haben. Gerade
          diese Authentizität stärkt das Vertrauen und die Resilienz des gesamten Teams.
        </p>
      </Prose>

      {/* Kernimpuls */}
      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Resilienz ist kein Zustand, den Sie einmal erreichen und dann bewahren. Sie ist eine
          fortlaufende Praxis, ein bewusstes Investieren in Ihre vier Ressourcendimensionen. Ihr
          persönliches Resilienz-Framework ist kein starres Konzept, sondern ein lebendiges Instrument,
          das sich mit Ihnen und Ihren Herausforderungen weiterentwickelt. Beginnen Sie dort, wo
          der größte Hebel liegt, und bauen Sie Schritt für Schritt auf.
        </p>
      </HighlightBox>

      {/* Reflexionsimpulse */}
      <SectionHeader
        tag="Reflexion"
        title="Reflexionsimpulse"
        text="Nutzen Sie diese Fragen, um den Grundstein für Ihr persönliches Resilienz-Framework zu legen."
      />

      <Checklist
        items={[
          'Welche der vier Resilienz-Dimensionen ist bei mir aktuell am stärksten, und welche vernachlässige ich am meisten?',
          'Was sind meine drei wichtigsten Energiequellen, auf die ich in stressigen Zeiten zurückgreife? Nutze ich sie regelmäßig?',
          'Welche Frühwarnsignale zeigen mir, dass meine Resilienz abnimmt? Erkenne ich sie rechtzeitig?',
          'Welche eine tägliche Mikropraktik könnte den größten Unterschied für meine Widerstandskraft machen?',
          'Wer in meinem Leben stärkt meine soziale Resilienz, und investiere ich genug in diese Beziehungen?',
        ]}
        color="teal"
      />
    </AkademieLayout>
  )
}
