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
import { Users, Eye, MessageCircle, Zap } from 'lucide-react'

export default function Erste100Tage() {
  useEffect(() => {
    document.title = 'Die ersten 100 Tage als Führungskraft | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Führung & Wirkung"
      moduleSlug="fuehrung-und-wirkung"
      impulsSlug="erste-100-tage"
      color="teal"
      impulsTitle="Die ersten 100 Tage als neue Führungskraft"
      prevImpuls={{
        title: 'Vom Manager zum Leader',
        href: '/akademie/fuehrung-und-wirkung/manager-zum-leader',
      }}
      nextImpuls={undefined}
      relatedCoachingPages={[
        { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
        { label: 'Karriere-Coaching', href: '/karriere-coaching' },
        { label: 'Teamcoaching', href: '/teamcoaching' },
      ]}
    >
      <SectionHeader
        tag="Karrierephase"
        title="Das Fenster, das sich nur einmal öffnet"
        text="Die ersten 100 Tage in einer neuen Führungsrolle entscheiden über Ihren langfristigen Erfolg. In dieser Phase formen sich Wahrnehmungen, die Jahre überdauern."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Ob Beförderung, Unternehmenswechsel oder Aufbau einer neuen Abteilung: Die ersten Wochen
          in einer Führungsrolle sind eine der herausforderndsten und gleichzeitig einflussreichsten
          Phasen Ihrer Karriere. Studien zeigen, dass 46% aller neuen Führungskräfte in den ersten
          18 Monaten scheitern. Nicht wegen mangelnder Fachkompetenz, sondern weil die Übergangsphase
          unterschätzt wird.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die neurowissenschaftliche Forschung bestätigt: Unser Gehirn bildet in den ersten
          Begegnungen schnelle, stabile Eindrücke. Der sogenannte Primacy-Effekt bewirkt, dass die
          erste Wahrnehmung als Filter für alle folgenden Informationen dient. Was in den ersten
          Wochen etabliert wird, ob Vertrauen oder Misstrauen, Kompetenz oder Unsicherheit, wird
          zum Default-Modus Ihres Teams.
        </p>
      </Prose>

      <SectionHeader
        tag="Die 4 Phasen"
        title="100 Tage in vier strategischen Phasen"
        text="Nicht alles gleichzeitig. Die richtige Sequenz entscheidet."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Phase 1: Beobachten und Zuhören (Tag 1 bis 30)',
            text: 'Der häufigste Fehler: Sofort Veränderungen durchsetzen. Nutzen Sie den ersten Monat, um zuzuhören, zu verstehen und Vertrauen aufzubauen. Führen Sie Einzelgespräche mit jedem Teammitglied. Fragen Sie: Was läuft gut? Was frustriert? Was brauchen Sie von mir? Ihr Ziel: Die informelle Machtstruktur, die ungeschriebenen Regeln und die wahren Engpässe verstehen.',
          },
          {
            title: 'Phase 2: Diagnose und Positionierung (Tag 15 bis 45)',
            text: 'Parallel zum Zuhören beginnen Sie, Muster zu erkennen. Wo sind die Stärken des Teams? Wo die blinden Flecken? Welche Quick Wins gibt es? Kommunizieren Sie Ihre ersten Beobachtungen transparent. Teilen Sie Ihr Führungsverständnis: Was können Ihre Mitarbeiter von Ihnen erwarten? Was erwarten Sie?',
          },
          {
            title: 'Phase 3: Erste Veränderungen (Tag 30 bis 75)',
            text: 'Jetzt handeln, aber strategisch. Wählen Sie maximal 2 bis 3 Veränderungen, die sichtbaren Nutzen bringen und das Team einbeziehen. Vermeiden Sie die Reorganisationsfalle: Strukturveränderungen sind verlockend, aber selten das, was in den ersten Monaten gebraucht wird. Fokussieren Sie auf Prozesse und Kommunikation.',
          },
          {
            title: 'Phase 4: Konsolidierung (Tag 75 bis 100)',
            text: 'Erste Ergebnisse sichern, Feedback einholen, nachjustieren. Etablieren Sie regelmäßige Feedback-Schleifen mit Ihrem Team und Ihren Vorgesetzten. Definieren Sie die langfristige Vision und den Weg dorthin. Am Tag 100 sollten Sie wissen: Wo stehe ich, wo will ich hin, und hat mein Team den gleichen Kompass?',
          },
        ]}
      />

      <SectionHeader
        tag="Typische Fallen"
        title="Was neue Führungskräfte fast immer falsch machen"
      />

      <BenefitGrid
        items={[
          {
            icon: Zap,
            title: 'Zu schnell handeln',
            text: 'Der Druck, schnell Ergebnisse zu liefern, verführt zu übereilten Entscheidungen. Aber Veränderungen ohne Verständnis der Ausgangslage scheitern fast immer und kosten Vertrauen.',
          },
          {
            icon: Eye,
            title: 'Die alte Rolle mitbringen',
            text: 'Was Sie in der vorherigen Position erfolgreich gemacht hat, ist nicht automatisch das Richtige für die neue Rolle. Besonders der Wechsel vom Fachexperten zur Führungskraft erfordert ein fundamentales Umdenken.',
          },
          {
            icon: Users,
            title: 'Allianzen vernachlässigen',
            text: 'Führung funktioniert nicht im Vakuum. Wer nur nach unten führt, aber die Beziehungen zu Peers und Vorgesetzten vernachlässigt, isoliert sich und verliert politischen Einfluss.',
          },
          {
            icon: MessageCircle,
            title: 'Zu wenig kommunizieren',
            text: 'In der Unsicherheit der ersten Wochen wünschen sich Teams Orientierung. Wenn Sie nicht kommunizieren, füllt das Team die Lücke mit Spekulationen. Kommunizieren Sie mehr als Sie denken, dass nötig ist.',
          },
        ]}
        columns={2}
      />

      <QuoteBlock
        text="Es braucht 20 Jahre, einen Ruf aufzubauen, und 5 Minuten, ihn zu zerstören."
        author="Warren Buffett"
      />

      <SectionHeader
        tag="Psychologische Hebel"
        title="Die drei unsichtbaren Erfolgsfaktoren"
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          <strong className="text-text-primary">1. Psychologische Sicherheit schaffen.</strong> Ihr
          Team muss spüren, dass es sicher ist, Ihnen die Wahrheit zu sagen, auch wenn die
          unbequem ist. Das beginnt bei Ihnen: Zeigen Sie Verletzlichkeit. Geben Sie eigene
          Unsicherheiten zu. "Ich bin neu und lerne noch" ist kein Zeichen von Schwäche, sondern
          von Souveränität.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          <strong className="text-text-primary">2. Die informelle Macht verstehen.</strong> In
          jedem Team gibt es Meinungsführer, die auf keinem Organigramm stehen. Identifizieren Sie
          diese Personen frühzeitig und gewinnen Sie sie. Wenn die informellen Leader hinter Ihnen
          stehen, folgt der Rest.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          <strong className="text-text-primary">3. Erwartungsmanagement nach oben.</strong> Klären
          Sie mit Ihren Vorgesetzten explizit: Was wird in 30, 60, 90 Tagen erwartet? Was sind die
          Erfolgskriterien? Unausgesprochene Erwartungen sind die häufigste Ursache für das Scheitern
          neuer Führungskräfte.
        </p>
      </Prose>

      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Die ersten 100 Tage sind keine Bewährungsprobe, die man irgendwie überstehen muss.
          Sie sind ein strategisches Fenster, das sich nur einmal öffnet. Wer diese Phase
          bewusst gestaltet, statt nur zu reagieren, legt das Fundament für Jahre erfolgreicher
          Führung. Und wer sich dabei professionell begleiten lässt, verkürzt die Lernkurve
          erheblich und vermeidet Fehler, die später teuer werden.
        </p>
      </HighlightBox>

      <SectionHeader
        tag="Reflexion"
        title="Ihre persönliche 100-Tage-Reflexion"
        text="Ob Sie gerade am Anfang stehen oder mitten in der Übergangsphase: Diese Fragen helfen Ihnen, Ihren Kurs zu prüfen."
      />

      <Checklist
        items={[
          'Habe ich mit jedem Teammitglied ein individuelles Gespräch geführt? Kenne ich ihre Stärken, Frustrationen und Erwartungen an mich?',
          'Welche informellen Machtstrukturen habe ich identifiziert? Wer sind die Meinungsführer, die nicht im Organigramm stehen?',
          'Habe ich klar kommuniziert, wofür ich stehe, was mein Team von mir erwarten kann und was ich erwarte?',
          'Sind meine Ziele mit den Erwartungen meiner Vorgesetzten abgeglichen? Gibt es unausgesprochene Erwartungen, die ich klären muss?',
          'Welche 2 bis 3 Veränderungen hätten den größten positiven Impact? Habe ich mein Team in die Lösungsfindung einbezogen?',
        ]}
        color="teal"
      />
    </AkademieLayout>
  )
}
