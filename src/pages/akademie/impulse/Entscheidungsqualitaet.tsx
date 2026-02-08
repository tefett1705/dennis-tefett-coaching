import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import { SectionHeader, Prose, BenefitGrid, NumberedSteps, QuoteBlock, HighlightBox, Checklist } from '../../../components/SubpageBlocks'
import { BrainCog, Eye, Gauge, Lightbulb, ListChecks, Scale } from 'lucide-react'

export default function Entscheidungsqualitaet() {
  useEffect(() => {
    document.title = 'Entscheidungsqualität verbessern | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Strategische Klarheit"
      moduleSlug="strategische-klarheit"
      color="gold"
      impulsTitle="Entscheidungsqualität verbessern"
      prevImpuls={undefined}
      nextImpuls={{ title: 'Prioritäten setzen: Die Kunst des Weglassens', href: '/akademie/strategische-klarheit/prioritaeten-setzen' }}
      relatedCoachingPages={[
        { label: 'Fokus & Klarheit', href: '/fokus-und-klarheit' },
        { label: 'Strategische Geschäftsplanung', href: '/strategische-geschaftsplanung' },
      ]}
    >
      {/* Einleitung */}
      <SectionHeader
        tag="Entscheidungswissenschaft"
        title="Die Kunst der guten Entscheidung"
        text="Als Führungskraft treffen Sie täglich Dutzende von Entscheidungen. Die Qualität dieser Entscheidungen bestimmt nicht nur Ihren eigenen Erfolg, sondern auch den Ihres Teams und Ihrer Organisation."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Entscheidungsforschung zeigt: Gute Entscheidungen sind selten das Ergebnis von Genialität oder Glück. Sie entstehen durch einen bewussten Prozess, der systematische Denkfehler minimiert, relevante Informationen einbezieht und die richtige Balance zwischen analytischem Denken und intuitiver Erfahrung findet.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Gleichzeitig lehrt uns die Forschung Demut: Unser Gehirn arbeitet mit Abkürzungen und Vereinfachungen, die in vielen Alltagssituationen nützlich sind, bei komplexen Entscheidungen jedoch zu systematischen Fehleinschätzungen führen können. Diese Denkfehler zu kennen und zu korrigieren ist der erste Schritt zu besseren Entscheidungen.
        </p>
      </Prose>

      {/* Kognitive Verzerrungen */}
      <SectionHeader
        tag="Denkfallen erkennen"
        title="Die wichtigsten kognitiven Verzerrungen im Führungsalltag"
        text="Drei der häufigsten und folgenreichsten Denkfehler, die Ihre Entscheidungen systematisch beeinflussen."
      />

      <BenefitGrid
        items={[
          {
            icon: Eye,
            title: 'Bestätigungsfehler (Confirmation Bias)',
            text: 'Sie suchen unbewusst nach Informationen, die Ihre bestehende Meinung bestätigen, und blenden Gegenbeweise aus. Das führt dazu, dass Sie an einmal getroffenen Entscheidungen festhalten, auch wenn neue Daten dagegen sprechen.',
          },
          {
            icon: Gauge,
            title: 'Verfügbarkeitsheuristik',
            text: 'Sie überschätzen die Wahrscheinlichkeit von Ereignissen, die Ihnen leicht einfallen. Ein kürzlich gescheitertes Projekt prägt Ihre Risikoeinschätzung stärker als statistisch gerechtfertigt. Dramatische Erfahrungen verzerren Ihre Urteilsfähigkeit.',
          },
          {
            icon: BrainCog,
            title: 'Ankereffekt (Anchoring)',
            text: 'Die erste Information, die Sie zu einem Thema erhalten, beeinflusst alle folgenden Einschätzungen überproportional. Ob Gehaltsverhandlung oder Budgetplanung: Der Anker setzt den Rahmen, in dem Sie denken, oft ohne dass Sie es bemerken.',
          },
        ]}
        columns={3}
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Diese Verzerrungen lassen sich nicht durch Wissen allein ausschalten. Sie sind Teil der Grundarchitektur unseres Denkens. Was Sie jedoch tun können, ist bewusste Gegenmechanismen zu installieren: strukturierte Entscheidungsprozesse, die die Wahrscheinlichkeit systematischer Fehler reduzieren.
        </p>
      </Prose>

      <QuoteBlock
        text="Es ist nicht das, was wir nicht wissen, das uns in Schwierigkeiten bringt. Es ist das, was wir sicher zu wissen glauben, aber was nicht so ist."
        author="Mark Twain (zugeschrieben)"
      />

      {/* Entscheidungsframeworks */}
      <SectionHeader
        tag="Strukturierte Entscheidungsfindung"
        title="Entscheidungsframeworks für den Führungsalltag"
        text="Vier Schritte zu systematisch besseren Entscheidungen."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Das Problem richtig formulieren',
            text: 'Bevor Sie nach Lösungen suchen, investieren Sie Zeit in die Problemdefinition. Fragen Sie: Ist das wirklich das Problem, oder nur ein Symptom? Wie würde eine unbeteiligte Person dieses Problem beschreiben? Welche Annahmen stecken bereits in meiner Problemformulierung?',
          },
          {
            title: 'Aktiv nach Gegenbeweisen suchen',
            text: 'Installieren Sie einen bewussten Gegencheck: Bevor Sie eine Entscheidung treffen, fragen Sie sich gezielt, welche Informationen gegen Ihre bevorzugte Option sprechen. Suchen Sie jemanden, der eine andere Perspektive vertritt, und hören Sie aufmerksam zu.',
          },
          {
            title: 'Die Vormortem-Technik anwenden',
            text: 'Stellen Sie sich vor, es ist ein Jahr vergangen und Ihre Entscheidung hat sich als falsch erwiesen. Was ist schiefgegangen? Diese prospektive Rückschau hilft Ihnen, blinde Flecken und Risiken zu erkennen, die im Vorfeld leicht übersehen werden.',
          },
          {
            title: 'Reversibilität prüfen und handeln',
            text: 'Unterscheiden Sie zwischen reversiblen und irreversiblen Entscheidungen. Bei reversiblen Entscheidungen ist Geschwindigkeit wichtiger als Perfektion. Treffen Sie die Entscheidung schnell, beobachten Sie das Ergebnis und korrigieren Sie bei Bedarf. Nur bei irreversiblen Entscheidungen lohnt sich ein aufwendiger Analyseprozess.',
          },
        ]}
      />

      {/* Intuition vs. Analyse */}
      <SectionHeader
        tag="Zwei Denksysteme"
        title="Intuition und Analyse: Wann welcher Modus hilft"
        text="Die Entscheidungsforschung kennt zwei grundlegend verschiedene Denkmodi. Die Kunst liegt darin, den richtigen Modus für die jeweilige Situation zu wählen."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Forschung von Daniel Kahneman unterscheidet zwischen System 1 (schnell, intuitiv, automatisch) und System 2 (langsam, analytisch, bewusst). Beide Systeme haben ihren Platz in der Entscheidungsfindung, doch sie eignen sich für unterschiedliche Situationen.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Ihre Intuition ist verlässlich, wenn Sie über umfangreiche Erfahrung in einem Bereich verfügen und die Situation regelmäßige, schnelle Rückmeldung bietet. In solchen Kontexten hat Ihr Gehirn Muster gelernt, die schneller und oft besser sind als bewusste Analyse. Bei neuartigen, komplexen Situationen ohne klare Feedbackschleifen ist analytisches Denken hingegen überlegen.
        </p>
      </Prose>

      <BenefitGrid
        items={[
          {
            icon: Lightbulb,
            title: 'Intuition nutzen',
            text: 'In Ihrem Fachgebiet, bei wiederkehrenden Entscheidungen und unter Zeitdruck. Ihre Intuition basiert auf jahrelanger Mustererkennung und ist oft erstaunlich treffsicher, wenn die Bedingungen stimmen.',
          },
          {
            icon: ListChecks,
            title: 'Analyse einsetzen',
            text: 'Bei strategischen Entscheidungen, in unbekanntem Terrain und wenn die Konsequenzen weitreichend sind. Nehmen Sie sich Zeit, Daten zu sammeln, Alternativen zu generieren und Ihre Annahmen zu prüfen.',
          },
          {
            icon: Scale,
            title: 'Beides integrieren',
            text: 'Die besten Entscheidungen entstehen oft, wenn Sie analytisch vorbereiten und dann Ihrer Intuition das letzte Wort geben. Nutzen Sie die Analyse, um blinde Flecken aufzudecken, und die Intuition, um das Gesamtbild zu erfassen.',
          },
        ]}
        columns={3}
      />

      {/* Entscheidungsmüdigkeit */}
      <SectionHeader
        tag="Energie schützen"
        title="Entscheidungsmüdigkeit vorbeugen"
        text="Jede Entscheidung verbraucht mentale Energie. Kluge Führungskräfte schützen ihre Entscheidungsressourcen."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Studien zeigen, dass die Qualität unserer Entscheidungen im Tagesverlauf abnimmt. Nach vielen kleinen Entscheidungen neigen wir entweder zu impulsivem Handeln oder dazu, den Status quo beizubehalten. Dieses Phänomen der Entscheidungsmüdigkeit erklärt, warum abendliche Entscheidungen oft schlechter ausfallen als morgendliche.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Konsequenz für Ihren Führungsalltag: Planen Sie wichtige Entscheidungen für Zeiten hoher mentaler Frische. Automatisieren Sie unwichtige Entscheidungen durch Routinen und Standards. Und gönnen Sie sich zwischen anspruchsvollen Entscheidungen bewusste Erholungspausen, die Ihre mentale Kapazität regenerieren.
        </p>
      </Prose>

      {/* Kernimpuls */}
      <HighlightBox title="Kernimpuls" color="gold">
        <p>
          Die Qualität Ihrer Entscheidungen lässt sich systematisch verbessern, nicht durch perfekte Information, sondern durch einen bewussten Prozess. Erkennen Sie Ihre Denkfehler, nutzen Sie strukturierte Frameworks, und finden Sie die richtige Balance zwischen Intuition und Analyse. Dabei gilt: Eine gute Entscheidung ist nicht die, die zum besten Ergebnis führt, sondern die, die auf dem besten verfügbaren Prozess beruht.
        </p>
      </HighlightBox>

      {/* Reflexionsimpulse */}
      <SectionHeader
        tag="Zur Vertiefung"
        title="Reflexionsimpulse"
        text="Diese Fragen unterstützen Sie dabei, Ihre eigenen Entscheidungsmuster zu reflektieren."
      />

      <Checklist
        color="gold"
        items={[
          'Denken Sie an eine wichtige Entscheidung, die sich als falsch herausgestellt hat. Welche kognitive Verzerrung könnte dabei eine Rolle gespielt haben? Was hätten Sie anders gemacht?',
          'In welchen Bereichen vertrauen Sie stark auf Ihre Intuition? Gibt es Situationen, in denen dieses Vertrauen berechtigt ist, und andere, in denen es Sie in die Irre führen könnte?',
          'Wie gehen Sie mit Unsicherheit bei Entscheidungen um? Neigen Sie dazu, mehr Informationen zu sammeln (Analyseparalyse), oder entscheiden Sie lieber schnell und korrigieren bei Bedarf?',
          'Wann treffen Sie Ihre wichtigsten Entscheidungen im Tagesverlauf? Gibt es Muster, die Sie zugunsten besserer Entscheidungsqualität verändern könnten?',
          'Welche Entscheidung in Ihrem aktuellen beruflichen Kontext würden Sie gerne noch einmal durch die Vormortem-Technik betrachten? Was könnten Sie dabei entdecken?',
        ]}
      />
    </AkademieLayout>
  )
}
