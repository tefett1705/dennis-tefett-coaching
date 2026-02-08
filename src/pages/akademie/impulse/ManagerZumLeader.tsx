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
import { Compass, Lightbulb, Users } from 'lucide-react'

export default function ManagerZumLeader() {
  useEffect(() => {
    document.title = 'Vom Manager zum Leader | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Führung & Wirkung"
      moduleSlug="fuehrung-und-wirkung"
      color="teal"
      impulsTitle="Vom Manager zum Leader"
      prevImpuls={{
        title: 'Authentisch kommunizieren als Führungskraft',
        href: '/akademie/fuehrung-und-wirkung/authentisch-kommunizieren',
      }}
      nextImpuls={undefined}
      relatedCoachingPages={[
        { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
        { label: 'Teamcoaching', href: '/teamcoaching' },
      ]}
    >
      {/* Einführung */}
      <SectionHeader
        tag="Transformation"
        title="Der entscheidende Perspektivwechsel"
        text="Die meisten Führungskräfte werden aufgrund ihrer fachlichen Exzellenz befördert. Doch die Fähigkeiten, die Sie hierher gebracht haben, sind selten die, die Sie weiterbringen."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Management und Leadership sind keine Gegensätze. Beides wird gebraucht. Doch der Übergang
          vom operativen Manager, der Prozesse steuert und Probleme löst, zum strategischen Leader,
          der Orientierung gibt und Menschen inspiriert, ist eine der anspruchsvollsten Transformationen
          in einer Karriere.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Diese Transformation betrifft nicht nur Verhaltensweisen und Methoden. Sie betrifft Ihre
          Identität als Führungskraft. Wer bin ich, wenn ich nicht mehr der beste Experte im Raum
          bin? Woran bemesse ich meinen Wert, wenn mein Beitrag unsichtbarer wird? Diese Fragen
          stehen im Zentrum des Wandels vom Manager zum Leader.
        </p>
      </Prose>

      {/* Unterschiede */}
      <SectionHeader
        tag="Perspektiven"
        title="Was Leader anders machen"
      />

      <BenefitGrid
        items={[
          {
            icon: Compass,
            title: 'Vision statt Kontrolle',
            text: 'Leader geben Richtung vor und vertrauen darauf, dass ihr Team den Weg findet. Sie investieren ihre Energie in das Warum und überlassen das Wie zunehmend anderen.',
          },
          {
            icon: Users,
            title: 'Befähigung statt Anweisung',
            text: 'Leader entwickeln Menschen. Sie schaffen Rahmenbedingungen für Wachstum, delegieren nicht nur Aufgaben, sondern auch Verantwortung, und feiern den Erfolg anderer.',
          },
          {
            icon: Lightbulb,
            title: 'Fragen statt Antworten',
            text: 'Leader stellen die richtigen Fragen, anstatt immer die Antworten zu haben. Sie wissen, dass die besten Lösungen oft von denen kommen, die am nächsten am Problem arbeiten.',
          },
        ]}
        columns={3}
      />

      {/* Transformationsschritte */}
      <SectionHeader
        tag="Der Weg"
        title="Die Transformation gestalten"
        text="Der Wandel vom Manager zum Leader vollzieht sich nicht über Nacht. Er verläuft in erkennbaren Phasen, die Sie bewusst gestalten können."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Die eigene Expertenfalle erkennen',
            text: 'Viele Führungskräfte halten an der Rolle des besten Fachexperten fest, weil sie dort Sicherheit finden. Der erste Schritt ist, diese Falle zu erkennen: Wenn Sie immer selbst die Lösung liefern, nehmen Sie Ihrem Team die Chance zu wachsen, und sich selbst die Zeit für strategisches Denken.',
          },
          {
            title: 'Loslassen lernen',
            text: 'Delegation ist mehr als das Verteilen von Aufgaben. Es bedeutet, Ergebnisse zu akzeptieren, die anders sind als Ihre eigene Lösung. Psychologisch erfordert das die Fähigkeit, mit dem Unbehagen umzugehen, nicht alles unter Kontrolle zu haben.',
          },
          {
            title: 'Strategisches Denken entwickeln',
            text: 'Schaffen Sie sich bewusst Zeiträume für strategische Reflexion. Blocken Sie regelmäßig Zeit im Kalender, in der Sie sich nicht mit dem Tagesgeschäft beschäftigen, sondern mit der größeren Perspektive: Wohin soll sich das Team entwickeln? Welche Trends erfordern heute Entscheidungen?',
          },
          {
            title: 'Beziehungen über Hierarchien hinweg aufbauen',
            text: 'Als Leader wird Ihr Netzwerk zum strategischen Instrument. Investieren Sie in Beziehungen auf allen Ebenen, auch nach oben und seitwärts in der Organisation. Diese Beziehungen verschaffen Ihnen Informationen, Einfluss und Unterstützung.',
          },
          {
            title: 'Eine neue Identität annehmen',
            text: 'Akzeptieren Sie, dass Ihr Wert als Leader nicht mehr in Ihrer fachlichen Leistung liegt, sondern in Ihrer Fähigkeit, andere wirksam zu machen. Dieser Identitätswechsel ist emotional herausfordernd, aber er ist der Kern der Transformation.',
          },
        ]}
      />

      <QuoteBlock
        text="Die Aufgabe der Führung ist es, mehr Führungskräfte hervorzubringen, nicht mehr Geführte."
        author="Ralph Nader"
      />

      {/* Vertiefung: Innere Widerstände */}
      <SectionHeader
        tag="Vertiefung"
        title="Warum die Transformation so schwer fällt"
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Neurowissenschaftlich betrachtet bevorzugt unser Gehirn Gewohnheiten. Das operative
          Problemlösen aktiviert das Belohnungssystem und gibt uns ein Gefühl von Kompetenz und
          Kontrolle. Strategisches Denken hingegen bewegt sich in Unsicherheit und liefert selten
          sofortige Ergebnisse.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Hinzu kommen kulturelle Erwartungen: In vielen Organisationen wird die Führungskraft
          belohnt, die selbst die Ärmel hochkrempelt. Der Leader, der im Hintergrund agiert und
          andere stärkt, bekommt weniger Sichtbarkeit. Sich davon zu lösen, erfordert eine bewusste
          Entscheidung gegen den Strom der organisationalen Belohnungsmechanismen.
        </p>
      </Prose>

      {/* Kernimpuls */}
      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Der Übergang vom Manager zum Leader ist kein linearer Aufstieg, sondern eine Transformation
          Ihrer professionellen Identität. Er erfordert die Bereitschaft, alte Stärken loszulassen,
          um neue zu entwickeln. Ihr größter Beitrag liegt nicht mehr darin, selbst Ergebnisse zu
          liefern, sondern darin, ein Umfeld zu schaffen, in dem andere über sich hinauswachsen können.
        </p>
      </HighlightBox>

      {/* Reflexionsimpulse */}
      <SectionHeader
        tag="Reflexion"
        title="Reflexionsimpulse"
        text="Nehmen Sie sich Zeit für eine ehrliche Standortbestimmung."
      />

      <Checklist
        items={[
          'Wie viel meiner Arbeitszeit verbringe ich mit operativen Aufgaben, und wie viel mit strategischem Denken?',
          'Wann habe ich zuletzt eine Aufgabe delegiert, die ich selbst besser hätte erledigen können? Wie hat sich das angefühlt?',
          'Woraus ziehe ich aktuell meinen Selbstwert als Führungskraft? Aus meiner Fachkompetenz oder aus der Entwicklung meines Teams?',
          'Welche Gewohnheit aus meiner Zeit als Fachexperte hindert mich am meisten daran, strategisch zu führen?',
          'Was müsste ich loslassen, um den nächsten Schritt in meiner Entwicklung als Leader zu gehen?',
        ]}
        color="teal"
      />
    </AkademieLayout>
  )
}
