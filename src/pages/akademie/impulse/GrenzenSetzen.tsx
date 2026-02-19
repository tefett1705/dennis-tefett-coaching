import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import { SectionHeader, Prose, BenefitGrid, NumberedSteps, QuoteBlock, HighlightBox, Checklist } from '../../../components/SubpageBlocks'
import { Shield, MessageCircle, Heart, AlertTriangle, Compass, UserCheck } from 'lucide-react'

export default function GrenzenSetzen() {
  useEffect(() => {
    document.title = 'Grenzen setzen ohne schlechtes Gewissen | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Innere Stärke & Resilienz"
      moduleSlug="innere-staerke-resilienz"
      impulsSlug="grenzen-setzen"
      color="teal"
      impulsTitle="Grenzen setzen ohne schlechtes Gewissen"
      prevImpuls={{ title: 'Emotionale Regulation für den Führungsalltag', href: '/akademie/innere-staerke-resilienz/emotionale-regulation' }}
      nextImpuls={undefined}
      relatedCoachingPages={[
        { label: 'Stressmanagement-Coaching', href: '/stressmanagement-coaching' },
        { label: 'Selbstwirksamkeit stärken', href: '/selbstwirksamkeit-staerken' },
      ]}
    >
      {/* Einleitung */}
      <SectionHeader
        tag="Selbstfürsorge & Führung"
        title="Grenzen als Fundament wirksamer Führung"
        text="Wer keine Grenzen setzen kann, riskiert nicht nur die eigene Gesundheit, sondern auch die Qualität der eigenen Führung. Klare Grenzen sind kein Zeichen von Schwäche, sondern von Professionalität."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Viele Führungskräfte tragen die Überzeugung in sich, dass sie immer verfügbar sein müssen, dass ein Nein Beziehungen gefährdet und dass ihre eigenen Bedürfnisse hinter denen des Teams zurückstehen sollten. Die Psychologie zeigt jedoch: Chronische Grenzüberschreitung führt zu Erschöpfung, Ressentiments und letztlich zu einem Verlust der Führungswirksamkeit.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Grenzen zu setzen ist eine Kompetenz, die Sie systematisch entwickeln können. Es beginnt mit dem Verständnis Ihrer eigenen Bedürfnisse und der Erkenntnis, dass gesunde Grenzen nicht nur Ihnen, sondern auch Ihrem Umfeld zugutekommen.
        </p>
      </Prose>

      {/* Warum Grenzen schwerfallen */}
      <SectionHeader
        tag="Psychologische Hintergründe"
        title="Warum Grenzen setzen so schwerfällt"
        text="Drei psychologische Mechanismen, die das Grenzensetzten erschweren."
      />

      <BenefitGrid
        items={[
          {
            icon: Heart,
            title: 'Harmoniebedürfnis',
            text: 'Das tief verankerte Bedürfnis nach Zugehörigkeit und Anerkennung lässt uns Konflikte vermeiden. Ein Nein fühlt sich bedrohlich an, weil es die Beziehung zu gefährden scheint.',
          },
          {
            icon: AlertTriangle,
            title: 'Schuldgefühle',
            text: 'Viele Führungskräfte haben gelernt, dass die eigenen Bedürfnisse weniger wichtig sind als die anderer. Grenzen setzen löst dann automatisch Schuldgefühle aus, die sich wie ein moralisches Versagen anfühlen.',
          },
          {
            icon: Compass,
            title: 'Verantwortungsübernahme',
            text: 'Das Verantwortungsgefühl für andere wird zur Falle, wenn Sie nicht zwischen Ihrer Verantwortung und der Eigenverantwortung anderer unterscheiden. Sie übernehmen Aufgaben, die nicht Ihre sind.',
          },
        ]}
        columns={3}
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Diese Muster sind keine Charakterschwäche. Sie entstehen aus Lebenserfahrungen und sozialer Prägung. Doch als Führungskraft brauchen Sie die Fähigkeit, diese automatischen Reaktionen zu erkennen und bewusst andere Entscheidungen zu treffen. Denn jedes Ja zu einer Sache ist gleichzeitig ein Nein zu einer anderen.
        </p>
      </Prose>

      <QuoteBlock
        text="Ein Nein zu anderen ist ein Ja zu sich selbst. Und nur wer bei sich selbst angekommen ist, kann andere wirksam führen."
      />

      {/* Psychologische Grundbedürfnisse */}
      <SectionHeader
        tag="Bedürfnisse verstehen"
        title="Ihre Grundbedürfnisse als Kompass"
        text="Grenzen werden dann notwendig, wenn grundlegende psychologische Bedürfnisse dauerhaft nicht erfüllt werden."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Selbstbestimmungstheorie nach Deci und Ryan identifiziert drei psychologische Grundbedürfnisse: Autonomie (das Erleben von Wahlfreiheit), Kompetenzerleben (das Gefühl, wirksam zu sein) und soziale Eingebundenheit (das Erleben von Zugehörigkeit und Wertschätzung). Wenn eines dieser Bedürfnisse chronisch unerfüllt bleibt, entsteht innerer Stress.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Ihre Grenzen zeigen Ihnen, wo Bedürfnisse verletzt werden. Wenn Sie beispielsweise ständig Aufgaben übernehmen, die andere delegieren sollten, wird Ihr Autonomiebedürfnis verletzt. Wenn Ihre Expertise systematisch übergangen wird, leidet Ihr Kompetenzerleben. Diese Signale ernst zu nehmen ist der erste Schritt zu gesunden Grenzen.
        </p>
      </Prose>

      {/* Assertive Kommunikation */}
      <SectionHeader
        tag="Kommunikationsstrategien"
        title="Assertiv kommunizieren: Klar und wertschätzend"
        text="Fünf Schritte zu einer Grenzkommunikation, die Beziehungen stärkt statt gefährdet."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Die eigene Grenze wahrnehmen',
            text: 'Bevor Sie kommunizieren können, müssen Sie spüren: Wo genau liegt meine Grenze? Achten Sie auf körperliche Signale wie Anspannung, Unruhe oder das Gefühl von Enge. Diese Empfindungen sind Ihre inneren Grenzwächter.',
          },
          {
            title: 'Situation beschreiben statt bewerten',
            text: 'Beginnen Sie mit einer neutralen Beschreibung der Situation: „Mir fällt auf, dass ich in den letzten drei Wochen regelmäßig nach 20 Uhr noch Anfragen beantworte." Vermeiden Sie Vorwürfe oder Verallgemeinerungen.',
          },
          {
            title: 'Eigene Bedürfnisse benennen',
            text: 'Formulieren Sie klar, was Sie brauchen: „Ich brauche abends Erholungszeit, um am nächsten Tag gute Entscheidungen treffen zu können." Bedürfnisse sind universell verständlich und schwer angreifbar.',
          },
          {
            title: 'Konkrete Grenze formulieren',
            text: 'Sagen Sie deutlich, was Sie sich wünschen: „Ab 19 Uhr bin ich nur noch für dringende Notfälle erreichbar." Eine klare Grenze gibt Orientierung und beseitigt Interpretationsspielraum.',
          },
          {
            title: 'Bereitschaft zur Lösung signalisieren',
            text: 'Zeigen Sie, dass Sie an einer gemeinsamen Lösung interessiert sind: „Lassen Sie uns besprechen, wie wir die Erreichbarkeit so gestalten können, dass beides funktioniert." Das Nein wird zum Ausgangspunkt für ein besseres Miteinander.',
          },
        ]}
      />

      {/* Umgang mit Schuldgefühlen */}
      <SectionHeader
        tag="Innere Arbeit"
        title="Schuldgefühle verstehen und transformieren"
        text="Wie Sie den inneren Kritiker beruhigen und zu einem gesunden Umgang mit Schuld finden."
      />

      <BenefitGrid
        items={[
          {
            icon: Shield,
            title: 'Schuld von Verantwortung trennen',
            text: 'Schuldgefühle sind oft ein Relikt alter Muster und kein zuverlässiger moralischer Kompass. Prüfen Sie: Verletze ich tatsächlich jemandes Rechte, oder schütze ich meine eigenen?',
          },
          {
            icon: MessageCircle,
            title: 'Den inneren Dialog verändern',
            text: 'Ersetzen Sie „Ich darf nicht Nein sagen" durch „Ich erlaube mir, auf meine Bedürfnisse zu achten." Sprechen Sie mit sich selbst, wie Sie mit einem guten Freund sprechen würden.',
          },
          {
            icon: UserCheck,
            title: 'Kurzfristiges Unbehagen akzeptieren',
            text: 'Grenzen setzen fühlt sich anfangs unangenehm an. Dieses Unbehagen ist normal und wird mit der Übung geringer. Langfristig gewinnen Sie Respekt, Energie und Authentizität.',
          },
        ]}
        columns={3}
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Denken Sie daran: Wenn Sie dauerhaft über Ihre Grenzen gehen, leiden nicht nur Sie. Auch Ihr Team bemerkt, wenn Sie erschöpft, gereizt oder nicht mehr voll präsent sind. Grenzen zu setzen ist daher auch ein Akt der Fürsorge für die Menschen, die Sie führen.
        </p>
      </Prose>

      {/* Kernimpuls */}
      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Grenzen setzen ist kein egoistischer Akt, sondern eine Voraussetzung für nachhaltige Führung. Jede Grenze, die Sie klar und wertschätzend kommunizieren, stärkt Ihre Authentizität und schafft ein Modell, das auch Ihrem Team erlaubt, für sich selbst zu sorgen. Beginnen Sie mit einer kleinen Grenze in einem sicheren Kontext und erweitern Sie von dort.
        </p>
      </HighlightBox>

      {/* Reflexionsimpulse */}
      <SectionHeader
        tag="Zur Vertiefung"
        title="Reflexionsimpulse"
        text="Diese Fragen laden Sie ein, Ihrem eigenen Grenzmuster mit Neugier zu begegnen."
      />

      <Checklist
        color="teal"
        items={[
          'In welchen Situationen sagen Sie regelmäßig Ja, obwohl Sie eigentlich Nein meinen? Was befürchten Sie, wenn Sie Nein sagen würden?',
          'Welches Ihrer psychologischen Grundbedürfnisse (Autonomie, Kompetenz, Zugehörigkeit) wird derzeit am stärksten verletzt?',
          'Wie hat Ihr Umfeld in Ihrer Kindheit und Jugend auf Grenzsetzung reagiert? Welche Überzeugungen haben Sie daraus mitgenommen?',
          'Denken Sie an eine Person, die gesunde Grenzen vorlebt. Was genau bewundern Sie an ihrem Verhalten? Was davon könnten Sie übernehmen?',
        ]}
      />
    </AkademieLayout>
  )
}
