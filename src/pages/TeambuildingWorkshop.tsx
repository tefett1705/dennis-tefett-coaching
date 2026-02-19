import {
  AlertTriangle,
  ArrowUpRight,
  Clock,
  Handshake,
  HeartPulse,
  MessageSquare,
  Milestone,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react'
import SubpageLayout from '../components/SubpageLayout'
import SEOHead, { serviceSchema } from '../components/SEOHead'
import {
  BenefitGrid,
  NumberedSteps,
  StatHighlights,
  Checklist,
  QuoteBlock,
  HighlightBox,
  SectionHeader,
  ComparisonTable,
  Prose,
} from '../components/SubpageBlocks'
import heroImg from '../assets/images/dennis-schoenen-anzug.webp'

export default function TeambuildingWorkshop() {
  return (
    <SubpageLayout
      heroImage={heroImg}
      category="Team & Organisation"
      title="Teambuilding-Workshop: Echten Teamgeist aufbauen"
      subtitle="Wie Sie durch gezielte Interventionen Zusammenarbeit, Kommunikation und Motivation in Ihrem Team nachhaltig verbessern."
      relatedPages={[
        { label: 'Teamcoaching & Teamentwicklung', href: '/teamcoaching' },
        { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
        { label: 'Strategische Geschäftsplanung', href: '/strategische-geschaftsplanung' },
        { label: 'Stressmanagement-Coaching', href: '/stressmanagement-coaching' },
      ]}
    >
      <SEOHead
        title="Teambuilding-Workshop: Teamgeist stärken | Dennis Tefett"
        description="Professionelle Teambuilding-Workshops für nachhaltige Teamentwicklung. Kommunikation verbessern, Teamgeist stärken, Zusammenarbeit optimieren. Workshops in Gladbeck, NRW und bundesweit."
        keywords="Teambuilding Workshop, Teamentwicklung, Teamzusammenhalt, Teamgeist stärken, Gladbeck, NRW"
        canonical="https://dennis-tefett.de/teambuildingworkshop"
        schema={serviceSchema('Teambuilding-Workshop', 'Professionelle Teambuilding-Workshops für nachhaltige Teamentwicklung, bessere Kommunikation und stärkeren Teamgeist.', '/teambuildingworkshop')}
        breadcrumbs={[{ name: 'Teambuilding-Workshop', url: '/teambuildingworkshop' }]}
      />

      {/* --- Section 1: Workshop overview --- */}
      <SectionHeader
        tag="Workshop"
        title="Warum Teambuilding mehr ist als Kletterpark und Kochkurs"
        text="Echter Teamgeist entsteht nicht durch ein Event, sondern durch gezielte Arbeit an den Dynamiken, die ein Team prägen. Meine Workshops setzen dort an, wo es wirklich zählt."
      />

      <Prose>
        <p>
          Ein professioneller Teambuilding-Workshop arbeitet an Kommunikationsmustern, an
          unausgesprochenen Konflikten, an unklaren Rollen und an der Frage, was ein Team
          wirklich zusammenhält. Wenn diese Themen ehrlich bearbeitet werden, entsteht
          Zusammenarbeit, die auch unter Druck funktioniert.
        </p>
      </Prose>

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: AlertTriangle,
            title: 'Unklare Rollen beseitigen',
            text: 'Klare Verantwortlichkeiten statt Doppelarbeit und Reibungsverluste durch implizite Annahmen.',
          },
          {
            icon: Shield,
            title: 'Psychologische Sicherheit schaffen',
            text: 'Ein Umfeld, in dem Fehler erlaubt sind und ehrliches Feedback möglich wird, ohne Angst.',
          },
          {
            icon: MessageSquare,
            title: 'Kommunikation gezielt verbessern',
            text: 'Weg von unproduktiven Meetings und E-Mail-Schlachten hin zu klarer, wirksamer Verständigung.',
          },
          {
            icon: Handshake,
            title: 'Konflikte produktiv nutzen',
            text: 'Teams lernen, Spannungen als Wachstumsimpuls zu begreifen statt sie zu vermeiden.',
          },
          {
            icon: Users,
            title: 'Teamzusammenhalt stärken',
            text: 'Echtes Vertrauen und Verbundenheit, die auch in stressigen Phasen tragen.',
          },
          {
            icon: ArrowUpRight,
            title: 'Führung im Team reflektieren',
            text: 'Führungskräfte erkennen ihre Wirkung im Team und entwickeln ihre Führung gezielt weiter.',
          },
        ]}
      />

      <QuoteBlock
        text="Ein starkes Team entsteht nicht durch Harmonie. Es entsteht durch die Fähigkeit, Konflikte produktiv zu nutzen."
      />

      {/* --- Section 2: Benefits for teams --- */}
      <SectionHeader
        tag="Ihr Nutzen"
        title="Was Ihr Team von einem Workshop mitnimmt"
        text="Konkrete Verbesserungen, die sich im Arbeitsalltag sofort bemerkbar machen."
      />

      <StatHighlights
        stats={[
          { value: '↓ 35 %', label: 'Konflikttage pro Quartal' },
          { value: '↑ 50 %', label: 'Meetingeffizienz' },
          { value: '↓ 25 %', label: 'Teamfluktuation' },
          { value: '3 Monate', label: 'Follow-up inklusive' },
        ]}
      />

      <Checklist
        color="teal"
        items={[
          'Kürzere und produktivere Meetings durch klare Kommunikationsregeln',
          'Eindeutige Rollenverteilung und Verantwortlichkeiten im Team',
          'Konstruktive Feedbackkultur statt Vermeidungsstrategien',
          'Höhere Mitarbeiterzufriedenheit und geringere Fluktuation',
          'Bessere Abstimmung zwischen Abteilungen und Hierarchieebenen',
          'Spürbar mehr Motivation und Eigenverantwortung im gesamten Team',
        ]}
      />

      {/* --- Section 3: Workshop agenda / steps --- */}
      <SectionHeader
        tag="Ablauf"
        title="So läuft ein Teambuilding-Workshop ab"
        text="Individuell konzipiert, interaktiv gestaltet und auf nachhaltige Wirkung ausgerichtet. Kein Standardprogramm, sondern passgenaue Entwicklungsarbeit."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Diagnostik vor dem Workshop',
            text: 'Einzelgespräche mit der Teamleitung und Teammitgliedern, um die Ausgangslage zu verstehen und den Workshop passgenau zu gestalten. Blinde Flecken werden durch die externe Perspektive sichtbar.',
          },
          {
            title: 'Standortbestimmung im Team',
            text: 'Offene Bestandsaufnahme mit strukturierter Moderation: Wo steht das Team? Was funktioniert gut? Was bremst? Ehrliche Reflexion als Basis für Veränderung.',
          },
          {
            title: 'Kernthema interaktiv bearbeiten',
            text: 'Vertiefung des zentralen Entwicklungsthemas durch Gruppenübungen, Rollenspiele, strukturierte Dialoge und Reflexionsrunden. Kein Frontalvortrag, sondern aktives Erleben.',
          },
          {
            title: 'Kommunikation trainieren',
            text: 'Praktische Übungen für besseres Feedback, klarere Absprachen und konstruktivere Konfliktgespräche, direkt anwendbar im Arbeitsalltag.',
          },
          {
            title: 'Vereinbarungen treffen und Follow-up sichern',
            text: 'Konkrete, messbare Vereinbarungen, die das Team selbst formuliert. Nach drei Monaten prüfen wir gemeinsam, ob die Veränderungen nachhaltig wirken.',
          },
        ]}
      />

      {/* --- Section 4: Before/After comparison --- */}
      <SectionHeader
        tag="Ergebnisse"
        title="Vorher vs. nachher: Was sich im Team verändert"
        text="Teams, die den Workshop durchlaufen, berichten von spürbaren Verbesserungen in diesen Bereichen."
      />

      <ComparisonTable
        beforeLabel="Ohne Workshop"
        afterLabel="Nach Workshop"
        rows={[
          {
            aspect: 'Kommunikation',
            before: 'Missverständnisse & Ungesagtes',
            after: 'Klare, offene Verständigung',
          },
          {
            aspect: 'Konflikte',
            before: 'Vermeidung oder Eskalation',
            after: 'Konstruktive Lösungskultur',
          },
          {
            aspect: 'Rollen',
            before: 'Implizite Annahmen',
            after: 'Klare Verantwortlichkeiten',
          },
          {
            aspect: 'Meetings',
            before: 'Lang und unproduktiv',
            after: 'Fokussiert und ergebnisorientiert',
          },
          {
            aspect: 'Feedbackkultur',
            before: 'Oberflächlich oder fehlend',
            after: 'Ehrlich und wertschätzend',
          },
          {
            aspect: 'Motivation',
            before: 'Resignation und Silodenken',
            after: 'Eigenverantwortung & Teamgeist',
          },
        ]}
      />

      {/* --- Section 5: Special focus healthcare --- */}
      <SectionHeader
        tag="Spezialfokus"
        title="Besonderer Fokus: Teams im Gesundheitswesen"
        text="Klinik- und Praxisteams arbeiten unter Bedingungen, die besondere Workshop-Formate erfordern."
      />

      <BenefitGrid
        columns={2}
        items={[
          {
            icon: HeartPulse,
            title: 'Emotionale Belastung berücksichtigen',
            text: 'Sensibler Umgang mit der besonderen psychischen Belastung, die Gesundheitsberufe mit sich bringen.',
          },
          {
            icon: Clock,
            title: 'Kürzere, praxisnahe Formate',
            text: 'Workshops, die sich in den Schichtbetrieb und die eingeschränkte Zeitverfügbarkeit integrieren lassen.',
          },
          {
            icon: Milestone,
            title: 'Hierarchien konstruktiv nutzen',
            text: 'Umgang mit den ausgeprägten hierarchischen Strukturen in Kliniken und Praxen.',
          },
          {
            icon: Sparkles,
            title: 'Patientenversorgung verbessern',
            text: 'Wenn Pflegekräfte, Ärzte und Therapeuten reibungslos zusammenarbeiten, profitieren alle, besonders die Patienten.',
          },
        ]}
      />

      <HighlightBox title="Messbare Ergebnisse nach jedem Workshop" color="gold">
        <p>
          Meine Workshops zielen auf konkrete, überprüfbare Verbesserungen: kürzere Meetingzeiten,
          klarere Verantwortlichkeiten, weniger Konflikttage, höhere Mitarbeiterzufriedenheit.
          Drei Monate nach dem Workshop führen wir ein Follow-up durch, um die Nachhaltigkeit
          der Veränderungen zu sichern.
        </p>
      </HighlightBox>

      <QuoteBlock
        text="Das beste Team ist nicht dasjenige ohne Probleme. Es ist dasjenige, das gelernt hat, seine Probleme gemeinsam zu lösen."
      />
    </SubpageLayout>
  )
}
