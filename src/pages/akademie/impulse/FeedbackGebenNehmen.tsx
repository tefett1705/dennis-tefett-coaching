import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import { SectionHeader, Prose, BenefitGrid, NumberedSteps, QuoteBlock, HighlightBox, Checklist } from '../../../components/SubpageBlocks'
import { MessageSquare, Brain, Sprout, Shield, ArrowDownUp, Sparkles } from 'lucide-react'

export default function FeedbackGebenNehmen() {
  useEffect(() => {
    document.title = 'Feedback geben und nehmen | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Kommunikation & Beziehung"
      moduleSlug="kommunikation-beziehung"
      color="teal"
      impulsTitle="Feedback geben und nehmen"
      prevImpuls={{ title: 'Zuhören als Führungskompetenz', href: '/akademie/kommunikation-beziehung/zuhoeren-als-kompetenz' }}
      nextImpuls={undefined}
      relatedCoachingPages={[
        { label: 'Teamcoaching', href: '/teamcoaching' },
        { label: 'Teambuilding-Workshop', href: '/teambuildingworkshop' },
      ]}
    >
      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Feedback ist eines der wirksamsten Werkzeuge zur persönlichen und organisationalen Entwicklung.
          Gleichzeitig wird es häufig vermieden, verwässert oder so formuliert, dass es mehr schadet als
          nützt. Die neurowissenschaftliche Forschung zeigt, warum Feedback so herausfordernd ist und
          wie es gelingen kann.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Unser Gehirn bewertet Feedback zunächst als potenzielle Bedrohung des Selbstbildes. Diese
          automatische Abwehrreaktion ist tief in unserer Neurobiologie verankert. Wer Feedback wirkungsvoll
          geben und annehmen will, muss diese Dynamik verstehen und bewusst gestalten. Dieser Impuls
          verbindet neurowissenschaftliche Erkenntnisse mit praktischen Modellen für den Führungsalltag.
        </p>
      </Prose>

      <SectionHeader
        tag="Neurobiologie"
        title="Was im Gehirn passiert, wenn wir Feedback erhalten"
        text="Das Verständnis der neurologischen Reaktionen auf Feedback ist der Schlüssel zu einer wirksamen Feedbackpraxis."
      />

      <BenefitGrid
        items={[
          {
            icon: Brain,
            title: 'Die Bedrohungsreaktion',
            text: 'Der präfrontale Kortex, zuständig für rationales Denken, wird bei als bedrohlich empfundenem Feedback vorübergehend gehemmt. Deshalb fällt sachliche Verarbeitung zunächst schwer.',
          },
          {
            icon: Shield,
            title: 'Der Status-Effekt',
            text: 'Feedback berührt unser Bedürfnis nach sozialem Status und Zugehörigkeit. Kritisches Feedback kann als Statusbedrohung erlebt werden und löst Verteidigungsmechanismen aus.',
          },
          {
            icon: Sprout,
            title: 'Das Growth-Mindset',
            text: 'Menschen mit einer wachstumsorientierten Haltung verarbeiten Feedback nachweislich anders. Sie aktivieren stärker jene Hirnregionen, die für Lernen und Anpassung zuständig sind.',
          },
        ]}
        columns={3}
      />

      <QuoteBlock
        text="Feedback ist das Frühstück der Champions."
        author="Ken Blanchard"
      />

      <SectionHeader
        tag="Methodik"
        title="Das SBI-Modell: Feedback klar und wertschätzend formulieren"
        text="Das Situation-Behavior-Impact-Modell (SBI) bietet eine einfache Struktur für wirksames Feedback."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Situation beschreiben',
            text: 'Benennen Sie den konkreten Kontext, in dem das Verhalten aufgetreten ist. "In der gestrigen Teambesprechung..." ist präziser und weniger bedrohlich als "Sie machen immer...".',
          },
          {
            title: 'Verhalten benennen',
            text: 'Beschreiben Sie das beobachtbare Verhalten, nicht Ihre Interpretation oder Bewertung. Was haben Sie gesehen oder gehört? Bleiben Sie bei Fakten, nicht bei Deutungen.',
          },
          {
            title: 'Wirkung schildern',
            text: 'Erklären Sie die Wirkung des Verhaltens auf Sie, das Team oder das Ergebnis. "Das hat dazu geführt, dass..." Diese Transparenz ermöglicht dem Gegenüber, die Konsequenzen zu verstehen.',
          },
          {
            title: 'Dialog eröffnen',
            text: 'Laden Sie Ihr Gegenüber ein, die eigene Sichtweise zu schildern. Feedback ist kein Monolog, sondern der Beginn eines Gesprächs. Offene Fragen wie "Wie sehen Sie das?" öffnen den Raum.',
          },
        ]}
      />

      <SectionHeader
        tag="Kultur"
        title="Eine wachstumsorientierte Feedbackkultur aufbauen"
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Eine gesunde Feedbackkultur entsteht nicht durch die Einführung eines neuen Tools oder eines
          jährlichen Mitarbeitergesprächs. Sie wächst aus dem täglichen Vorleben der Führungskräfte.
          Wenn Sie als Führungskraft aktiv um Feedback bitten und sichtbar darauf reagieren, senden
          Sie ein machtvolles Signal an Ihr Team: Hier ist es sicher, offen zu sein.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Forschung zeigt, dass die Häufigkeit und Unmittelbarkeit von Feedback entscheidender
          für die Wirksamkeit sind als die Perfektion der Formulierung. Kurze, zeitnahe Rückmeldungen
          im Alltag wirken nachhaltiger als ausführliche Feedbackgespräche einmal im Jahr. Schaffen Sie
          Gelegenheiten für regelmäßigen, niedrigschwelligen Austausch.
        </p>
      </Prose>

      <BenefitGrid
        items={[
          {
            icon: ArrowDownUp,
            title: 'Bidirektionalität etablieren',
            text: 'Bitten Sie aktiv um Feedback von Ihrem Team. Führungskräfte, die sich verletzbar zeigen, schaffen den Raum, in dem auch andere sich öffnen.',
          },
          {
            icon: MessageSquare,
            title: 'Positives Feedback verstärken',
            text: 'Würdigen Sie gelungenes Verhalten ebenso systematisch wie Sie Entwicklungsfelder ansprechen. Das Verhältnis von positivem zu kritischem Feedback sollte deutlich zugunsten des Positiven liegen.',
          },
          {
            icon: Sparkles,
            title: 'Feedforward statt nur Feedback',
            text: 'Richten Sie den Blick nicht nur auf die Vergangenheit, sondern auch auf die Zukunft. Beschreiben Sie, welches Verhalten Sie sich wünschen, statt nur zu benennen, was nicht passt.',
          },
        ]}
        columns={3}
      />

      <SectionHeader
        tag="Empfangen"
        title="Feedback souverän annehmen"
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Feedback zu empfangen ist oft schwieriger als es zu geben. Die automatische Abwehrreaktion
          unseres Gehirns meldet sich sofort: erklären, rechtfertigen, relativieren. Doch genau in
          der Fähigkeit, Feedback zunächst aufzunehmen, ohne sofort zu reagieren, liegt eine
          unterschätzte Stärke.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Ein hilfreicher Ansatz ist die bewusste Trennung von Aufnahme und Verarbeitung. Nehmen
          Sie Feedback zunächst an, bedanken Sie sich und bitten Sie um Bedenkzeit. Die sachliche
          Bewertung gelingt besser, wenn die erste emotionale Reaktion abgeklungen ist. Nicht jedes
          Feedback muss angenommen werden, aber jedes Feedback verdient es, gehört zu werden.
        </p>
      </Prose>

      <HighlightBox title="Kernimpuls" color="teal">
        <p>
          Wirksames Feedback ist ein Akt der Wertschätzung, nicht der Kritik. Wer Feedback gibt,
          investiert Zeit und Aufmerksamkeit in die Entwicklung eines anderen Menschen. Wer Feedback
          annimmt, zeigt die Stärke, sich selbst als lernend zu begreifen. Eine Kultur, in der
          Feedback frei fließt, ist nicht bequem, aber sie ist der Boden, auf dem echtes Wachstum
          entsteht.
        </p>
      </HighlightBox>

      <SectionHeader
        tag="Reflexion"
        title="Reflexionsimpulse"
        text="Diese Fragen unterstützen Sie dabei, Ihre persönliche Feedbackpraxis und die Feedbackkultur in Ihrem Umfeld zu reflektieren."
      />

      <Checklist
        items={[
          'Wann habe ich zuletzt aktiv um Feedback gebeten, und wie habe ich darauf reagiert?',
          'Welche Art von Feedback löst bei mir die stärkste Abwehrreaktion aus, und was schütze ich damit?',
          'Wie zeitnah und konkret ist das Feedback, das ich meinem Team gebe?',
          'Welches Verhältnis von anerkennendem zu kritischem Feedback pflege ich derzeit?',
          'Was müsste sich ändern, damit mein Team mir offener Feedback gibt?',
        ]}
        color="teal"
      />
    </AkademieLayout>
  )
}
