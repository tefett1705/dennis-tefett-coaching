import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import { SectionHeader, Prose, BenefitGrid, NumberedSteps, QuoteBlock, HighlightBox, Checklist } from '../../../components/SubpageBlocks'
import { Zap, GitBranch, RefreshCw, Layers, Target, Repeat } from 'lucide-react'

export default function Neuroplastizitaet() {
  useEffect(() => {
    document.title = 'Neuroplastizität: Warum Veränderung in jedem Alter möglich ist | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Persönlichkeit & Wachstum"
      moduleSlug="persoenlichkeit-wachstum"
      impulsSlug="neuroplastizitaet"
      color="gold"
      impulsTitle="Neuroplastizität: Warum Veränderung in jedem Alter möglich ist"
      prevImpuls={undefined}
      nextImpuls={{ title: 'Werte als Kompass: Ihr persönliches Fundament', href: '/akademie/persoenlichkeit-wachstum/werte-als-kompass' }}
      relatedCoachingPages={[
        { label: 'Persönlichkeitsentwicklung', href: '/persoenlichkeitsentwicklung-erklaert' },
        { label: 'Nachhaltige Verhaltensänderung', href: '/nachhaltige-verhaltensaenderung' },
      ]}
    >
      {/* Einleitung */}
      <SectionHeader
        tag="Neurowissenschaft"
        title="Ihr Gehirn: Ein lebenslang lernfähiges Organ"
        text="Die Neurowissenschaft hat eine der mächtigsten Annahmen der früheren Hirnforschung widerlegt: Dass das erwachsene Gehirn unveränderlich sei. Tatsächlich formt sich Ihr Gehirn jeden Tag neu."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Neuroplastizität bezeichnet die Fähigkeit Ihres Gehirns, seine Struktur und Funktion als Reaktion auf Erfahrungen, Lernen und Übung zu verändern. Jede Handlung, jeder Gedanke und jede emotionale Erfahrung hinterlässt Spuren in Ihren neuronalen Netzwerken. Das bedeutet: Sie sind nicht an alte Denk- und Verhaltensmuster gebunden. Veränderung ist in jedem Alter neurobiologisch möglich.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Für Führungskräfte und Menschen in Veränderungsprozessen ist dieses Wissen befreiend. Es zeigt, dass Sie nicht Opfer Ihrer Vergangenheit sind, sondern aktive Gestalter Ihrer neuronalen Architektur. Gleichzeitig erklärt es, warum Veränderung Geduld und Wiederholung erfordert: Neue neuronale Verbindungen brauchen Zeit und Übung, um sich zu festigen.
        </p>
      </Prose>

      {/* Grundprinzipien */}
      <SectionHeader
        tag="Wissenschaftliche Grundlagen"
        title="Drei Prinzipien der Neuroplastizität"
      />

      <BenefitGrid
        items={[
          {
            icon: Zap,
            title: 'Hebbian Learning',
            text: 'Neurone, die gemeinsam feuern, vernetzen sich stärker. Je häufiger Sie ein bestimmtes Denk- oder Verhaltensmuster wiederholen, desto stärker wird die zugehörige neuronale Verbindung.',
          },
          {
            icon: GitBranch,
            title: 'Use It or Lose It',
            text: 'Neuronale Verbindungen, die Sie nicht mehr nutzen, werden mit der Zeit schwächer und schließlich abgebaut. Dies erklärt, warum alte Gewohnheiten verblassen, wenn Sie sie konsequent durch neue ersetzen.',
          },
          {
            icon: RefreshCw,
            title: 'Erfahrungsabhängige Plastizität',
            text: 'Ihr Gehirn passt sich den Anforderungen an, die Sie ihm stellen. Gezielte, aufmerksame Übung in einem Bereich führt zu messbaren strukturellen Veränderungen in den zuständigen Hirnregionen.',
          },
        ]}
        columns={3}
      />

      {/* Hebbian Learning vertieft */}
      <SectionHeader
        tag="Kernprinzip"
        title="Neurons That Fire Together, Wire Together"
        text="Wie Wiederholung und Aufmerksamkeit gemeinsam das Fundament für dauerhafte Veränderung legen."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Das von Donald Hebb formulierte Prinzip beschreibt, wie Lernen auf neuronaler Ebene funktioniert: Wenn zwei Nervenzellen wiederholt gleichzeitig aktiv sind, verstärkt sich die Verbindung zwischen ihnen. Dieses Prinzip gilt für alle Lernprozesse, ob Sie eine neue Sprache lernen, ein Instrument üben oder einen neuen Führungsstil entwickeln.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Entscheidend ist dabei: Bloße Wiederholung reicht nicht aus. Die Forschung zeigt, dass aufmerksames, bewusstes Üben deutlich wirkungsvoller ist als mechanische Wiederholung. Wenn Sie ein neues Verhalten mit voller Präsenz praktizieren, werden die neuronalen Verbindungen schneller und stabiler aufgebaut.
        </p>
      </Prose>

      <QuoteBlock
        text="Der Geist ist nicht ein Gefäß, das gefüllt, sondern ein Feuer, das entfacht werden will."
        author="Plutarch"
      />

      {/* Growth Mindset */}
      <SectionHeader
        tag="Haltung & Überzeugung"
        title="Growth Mindset: Die Denkweise, die Plastizität fördert"
        text="Wie Ihre Überzeugungen über Veränderbarkeit Ihren tatsächlichen Veränderungserfolg beeinflussen."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Forschung von Carol Dweck zeigt einen bemerkenswerten Zusammenhang: Menschen, die glauben, dass Fähigkeiten durch Übung entwickelbar sind (Growth Mindset), lernen tatsächlich effektiver als Menschen, die Begabung für unveränderlich halten (Fixed Mindset). Ihre Überzeugung über Veränderbarkeit wird damit zur selbsterfüllenden Prophezeiung.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Ein Growth Mindset bedeutet nicht naiven Optimismus. Es bedeutet, Herausforderungen als Lernchancen zu betrachten, Fehler als unvermeidbaren Teil des Wachstumsprozesses zu akzeptieren und Anstrengung als den Weg zur Meisterschaft zu verstehen, nicht als Zeichen mangelnden Talents.
        </p>
      </Prose>

      <BenefitGrid
        items={[
          {
            icon: Layers,
            title: 'Fehler als Daten',
            text: 'In einem Growth Mindset sind Fehler wertvolle Informationen. Jeder Rückschlag zeigt Ihnen genau, wo noch neuronale Verbindungen gestärkt werden müssen.',
          },
          {
            icon: Target,
            title: 'Prozess vor Ergebnis',
            text: 'Fokussieren Sie sich auf den Lernprozess, nicht nur auf das Ergebnis. Die Forschung zeigt, dass prozessorientiertes Denken zu besseren Ergebnissen führt als reine Ergebnisorientierung.',
          },
          {
            icon: Repeat,
            title: 'Noch nicht statt nicht',
            text: 'Ersetzen Sie „Das kann ich nicht" durch „Das kann ich noch nicht." Diese sprachliche Verschiebung aktiviert nachweislich andere neuronale Netzwerke und öffnet den Raum für Wachstum.',
          },
        ]}
        columns={3}
      />

      {/* Praktische Anwendung */}
      <SectionHeader
        tag="Praktische Umsetzung"
        title="Neuroplastizität gezielt nutzen"
        text="Vier Schritte, mit denen Sie die Erkenntnisse der Hirnforschung in Ihren Alltag integrieren."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Das Zielmuster klar definieren',
            text: 'Bestimmen Sie präzise, welches neue Denk- oder Verhaltensmuster Sie etablieren möchten. Je konkreter Ihre Vorstellung, desto gezielter können Sie die entsprechenden neuronalen Netzwerke aktivieren. „Ich möchte gelassener auf Kritik reagieren" ist besser als „Ich möchte mich verändern".',
          },
          {
            title: 'Bewusst und regelmäßig üben',
            text: 'Planen Sie tägliche, kurze Übungssequenzen ein. Die Forschung zeigt: Kurze, häufige Übungseinheiten mit hoher Aufmerksamkeit sind effektiver als lange, seltene Sessions. Schon zehn Minuten bewusster Praxis pro Tag können neuronale Strukturen verändern.',
          },
          {
            title: 'Emotionale Beteiligung aktivieren',
            text: 'Neuroplastizität wird durch Emotionen verstärkt. Wenn Sie sich lebhaft vorstellen, wie es sich anfühlt, das neue Verhalten zu beherrschen, und dabei positive Emotionen erleben, beschleunigt dies den neuronalen Umbau erheblich.',
          },
          {
            title: 'Geduld und Selbstmitgefühl üben',
            text: 'Neuronale Umstrukturierung braucht Zeit. Rückfälle in alte Muster sind normal und kein Zeichen des Scheiterns. Behandeln Sie sich selbst mit der gleichen Geduld, die Sie einem Kind beim Laufenlernen entgegenbringen würden.',
          },
        ]}
      />

      {/* Kernimpuls */}
      <HighlightBox title="Kernimpuls" color="gold">
        <p>
          Ihr Gehirn ist kein fertiges Produkt, sondern ein ständig im Wandel begriffenes Organ. Jeder Moment bewusster Aufmerksamkeit formt Ihre neuronalen Netzwerke. Sie entscheiden durch Ihre täglichen Gedanken, Handlungen und Gewohnheiten, welches Gehirn Sie morgen haben werden. Die Frage ist nicht, ob Veränderung möglich ist, sondern welche Veränderung Sie bewusst gestalten wollen.
        </p>
      </HighlightBox>

      {/* Reflexionsimpulse */}
      <SectionHeader
        tag="Zur Vertiefung"
        title="Reflexionsimpulse"
        text="Nutzen Sie diese Fragen, um Ihr eigenes Veränderungspotenzial zu erkunden."
      />

      <Checklist
        color="gold"
        items={[
          'Welches Denk- oder Verhaltensmuster möchten Sie am dringendsten verändern? Wie genau sieht das gewünschte neue Muster aus?',
          'In welchen Bereichen Ihres Lebens denken Sie eher in einem Fixed Mindset? Was würde sich verändern, wenn Sie dort ein Growth Mindset annehmen würden?',
          'Welche Aktivität üben Sie derzeit regelmäßig und aufmerksam aus? Was könnten Sie in Ihren Alltag integrieren, das Ihr Gehirn gezielt in die gewünschte Richtung formt?',
          'Wie gehen Sie mit Rückschlägen in Veränderungsprozessen um? Was würde sich ändern, wenn Sie Rückschritte als normalen Teil des neuronalen Umbauprozesses betrachten?',
          'Welche Überzeugung über sich selbst halten Sie für unveränderlich? Was wäre, wenn auch diese Überzeugung nur ein neuronales Muster wäre, das sich neu formen lässt?',
        ]}
      />
    </AkademieLayout>
  )
}
