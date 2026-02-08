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
import { Compass, MessageCircle, Target, Users, Shield } from 'lucide-react'

export default function FuenfSaeulenFuehrung() {
  useEffect(() => {
    document.title = 'Die 5 Säulen wirksamer Führung | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Führung & Wirkung"
      moduleSlug="fuehrung-und-wirkung"
      color="teal"
      impulsTitle="Die 5 Säulen wirksamer Führung"
      prevImpuls={undefined}
      nextImpuls={{
        title: 'Unbewusste Führungsmuster erkennen',
        href: '/akademie/fuehrung-und-wirkung/unbewusste-muster',
      }}
      relatedCoachingPages={[
        { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
        { label: 'Teamcoaching', href: '/teamcoaching' },
      ]}
    >
      {/* Einführung */}
      <SectionHeader
        tag="Grundlagen"
        title="Warum Führung mehr ist als Management"
        text="Wirksame Führung entsteht nicht durch Position oder Titel. Sie entsteht durch die bewusste Gestaltung von fünf zentralen Kompetenzbereichen, die einander bedingen und verstärken."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Führungsforschung zeigt seit Jahrzehnten ein konsistentes Bild: Führungskräfte, die nachhaltig
          wirksam sind, zeichnen sich nicht durch eine einzelne herausragende Eigenschaft aus. Vielmehr
          gelingt es ihnen, fünf grundlegende Dimensionen in Balance zu halten. Diese fünf Säulen bilden
          das Fundament, auf dem jede Führungsleistung aufbaut.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Jede Säule für sich ist bereits wirkungsvoll. Doch erst ihr Zusammenspiel erzeugt jene
          Führungskraft, die Teams inspiriert, Organisationen transformiert und nachhaltige Ergebnisse
          ermöglicht.
        </p>
      </Prose>

      {/* Die 5 Säulen im Überblick */}
      <SectionHeader
        tag="Das Modell"
        title="Die fünf Säulen im Überblick"
      />

      <BenefitGrid
        items={[
          {
            icon: Compass,
            title: 'Selbstführung',
            text: 'Die Fähigkeit, die eigenen Emotionen, Motive und Verhaltensmuster bewusst zu steuern. Wer sich selbst führen kann, gewinnt die Klarheit, auch andere zu führen.',
          },
          {
            icon: MessageCircle,
            title: 'Kommunikation',
            text: 'Die Kunst, durch Sprache Vertrauen aufzubauen, Orientierung zu geben und psychologische Sicherheit zu schaffen. Wirksame Kommunikation ist kongruent und empathisch.',
          },
          {
            icon: Target,
            title: 'Entscheidungsfähigkeit',
            text: 'Unter Unsicherheit handlungsfähig bleiben, Prioritäten setzen und Verantwortung übernehmen. Gute Entscheidungen entstehen aus der Balance von Analyse und Intuition.',
          },
          {
            icon: Users,
            title: 'Teamentwicklung',
            text: 'Menschen befähigen, zusammenführen und in ihrer Entwicklung unterstützen. Starke Teams entstehen durch klare Rollen, gemeinsame Werte und ein Klima des Vertrauens.',
          },
          {
            icon: Shield,
            title: 'Resilienz',
            text: 'Die innere Widerstandskraft, um mit Rückschlägen, Druck und Veränderung konstruktiv umzugehen. Resiliente Führungskräfte stabilisieren sich selbst und ihr Umfeld.',
          },
        ]}
        columns={3}
      />

      {/* Vertiefung */}
      <SectionHeader
        tag="Vertiefung"
        title="Wie die Säulen zusammenwirken"
        text="Führungskompetenz ist kein statisches Konstrukt. Sie entwickelt sich in einem dynamischen Wechselspiel der fünf Dimensionen."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Selbstführung als Ausgangspunkt',
            text: 'Alles beginnt bei Ihnen selbst. Neurowissenschaftliche Studien zeigen, dass die Fähigkeit zur Selbstregulation die Grundlage für alle weiteren Führungskompetenzen bildet. Ohne Selbstkenntnis fehlt die Basis für authentische Kommunikation und souveräne Entscheidungen.',
          },
          {
            title: 'Kommunikation als Brücke zum Team',
            text: 'Ihre innere Klarheit wird durch Kommunikation nach außen wirksam. Studien zur psychologischen Sicherheit belegen: Teams, deren Führungskräfte klar und wertschätzend kommunizieren, zeigen signifikant höhere Leistung und Innovation.',
          },
          {
            title: 'Entscheidungsfähigkeit in der Komplexität',
            text: 'In einer VUCA-Welt sind schnelle und zugleich fundierte Entscheidungen gefragt. Die kognitive Psychologie zeigt, dass gute Entscheidungen sowohl analytisches Denken als auch emotionale Intelligenz erfordern.',
          },
          {
            title: 'Teamentwicklung als Multiplikator',
            text: 'Ihre Wirkung als Führungskraft vervielfacht sich durch ein starkes Team. Investitionen in Vertrauen, Rollenklarheit und gemeinsame Entwicklung zahlen sich nachhaltig aus.',
          },
          {
            title: 'Resilienz als tragendes Fundament',
            text: 'Alle vier Säulen brauchen ein stabiles Fundament. Resilienz sichert Ihre Handlungsfähigkeit auch unter Druck und ermöglicht es Ihnen, als Stabilitätsanker für Ihr Team zu wirken.',
          },
        ]}
      />

      <QuoteBlock
        text="Führung beginnt mit dem Mut, sich selbst ehrlich in den Spiegel zu schauen."
        author="Peter Drucker"
      />

      {/* Kernimpuls */}
      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Wirksame Führung ist keine Frage des Talents, sondern der bewussten Entwicklung. Die fünf
          Säulen zeigen Ihnen, wo Sie ansetzen können. Beginnen Sie dort, wo Sie die größte Hebelwirkung
          spüren. Oft ist das die Selbstführung, denn sie beeinflusst alle anderen Bereiche.
        </p>
      </HighlightBox>

      {/* Reflexion */}
      <SectionHeader
        tag="Reflexion"
        title="Reflexionsimpulse"
        text="Nehmen Sie sich einen Moment Zeit und beantworten Sie die folgenden Fragen ehrlich für sich selbst."
      />

      <Checklist
        items={[
          'Welche der fünf Säulen ist bei mir am stärksten ausgeprägt? Wo spüre ich die größte Sicherheit?',
          'In welchem Bereich erlebe ich die größten Herausforderungen oder Unsicherheiten?',
          'Wie reagiere ich typischerweise unter Druck? Welche Säule gerät dann zuerst ins Wanken?',
          'Was würde sich in meiner Führungswirkung verändern, wenn ich gezielt an einer Säule arbeite?',
          'Wer in meinem Umfeld könnte mir ehrliches Feedback zu meinen Führungskompetenzen geben?',
        ]}
        color="teal"
      />
    </AkademieLayout>
  )
}
