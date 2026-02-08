import { useEffect } from 'react'
import AkademieLayout from '../../../components/AkademieLayout'
import { SectionHeader, Prose, BenefitGrid, NumberedSteps, QuoteBlock, HighlightBox, Checklist } from '../../../components/SubpageBlocks'
import { Compass, Scale, Gem, Search, ArrowRightLeft, Anchor } from 'lucide-react'

export default function WerteAlsKompass() {
  useEffect(() => {
    document.title = 'Werte als Kompass: Ihr persönliches Fundament | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Persönlichkeit & Wachstum"
      moduleSlug="persoenlichkeit-wachstum"
      color="gold"
      impulsTitle="Werte als Kompass: Ihr persönliches Fundament"
      prevImpuls={{ title: 'Neuroplastizität: Warum Veränderung in jedem Alter möglich ist', href: '/akademie/persoenlichkeit-wachstum/neuroplastizitaet' }}
      nextImpuls={{ title: 'Gewohnheiten verändern: Was die Wissenschaft sagt', href: '/akademie/persoenlichkeit-wachstum/gewohnheiten-veraendern' }}
      relatedCoachingPages={[
        { label: 'Persönlichkeitsentwicklung', href: '/persoenlichkeitsentwicklung-erklaert' },
        { label: 'Nachhaltige Verhaltensänderung', href: '/nachhaltige-verhaltensaenderung' },
      ]}
    >
      {/* Einleitung */}
      <SectionHeader
        tag="Werte & Identität"
        title="Warum Werte mehr als schöne Worte sind"
        text="Werte sind keine abstrakten Ideale, die man an die Bürowand hängt. Sie sind die tiefsten Antriebskräfte Ihres Handelns und bestimmen, was Ihnen ein erfülltes Leben ermöglicht."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          In der psychologischen Forschung gelten persönliche Werte als zentrale Orientierungsgrößen für Entscheidungen, Motivation und Wohlbefinden. Studien zeigen, dass Menschen, die im Einklang mit ihren Kernwerten leben, widerstandsfähiger gegen Stress sind, klarere Entscheidungen treffen und ein tieferes Gefühl von Sinn und Zufriedenheit erleben.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Gleichzeitig sind viele Führungskräfte überrascht, wenn sie feststellen, dass sie ihre eigenen Werte nie bewusst identifiziert haben. Sie handeln aus Gewohnheit, gesellschaftlichen Erwartungen oder der Logik ihrer Organisation, ohne sich zu fragen, ob dieses Handeln tatsächlich mit ihrem inneren Kompass übereinstimmt. Diese Diskrepanz ist eine häufige Quelle von Unzufriedenheit und Erschöpfung.
        </p>
      </Prose>

      {/* Werte identifizieren */}
      <SectionHeader
        tag="Selbsterkenntnis"
        title="Kernwerte identifizieren: Jenseits von Wunschdenken"
        text="Wie Sie Ihre tatsächlichen Werte von übernommenen Überzeugungen unterscheiden."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Es gibt einen wichtigen Unterschied zwischen Werten, die Sie tatsächlich leben, und Werten, von denen Sie glauben, dass Sie sie haben sollten. Ein übernommener Wert fühlt sich oft wie eine Pflicht an. Ein authentischer Wert hingegen erzeugt Energie, selbst wenn das Handeln danach anstrengend ist. Die erste Aufgabe besteht darin, diese beiden Kategorien voneinander zu trennen.
        </p>
      </Prose>

      <BenefitGrid
        items={[
          {
            icon: Search,
            title: 'Rückblick auf Höhepunkte',
            text: 'Denken Sie an Momente in Ihrem Leben, in denen Sie sich besonders lebendig und erfüllt gefühlt haben. Welche Werte waren in diesen Momenten aktiv? Was genau hat diese Erfahrungen so bedeutsam gemacht?',
          },
          {
            icon: Gem,
            title: 'Analyse von Konflikten',
            text: 'Werte zeigen sich besonders deutlich in Konfliktsituationen. Worüber regen Sie sich auf? Was empfinden Sie als zutiefst ungerecht? Starke emotionale Reaktionen weisen oft auf verletzte Kernwerte hin.',
          },
          {
            icon: Compass,
            title: 'Entscheidungsmuster erkennen',
            text: 'Betrachten Sie die wichtigsten Entscheidungen Ihres Lebens. Welcher rote Faden zieht sich hindurch? Welche Werte haben letztlich den Ausschlag gegeben, auch wenn Ihnen das damals nicht bewusst war?',
          },
        ]}
        columns={3}
      />

      <NumberedSteps
        steps={[
          {
            title: 'Die weite Liste erstellen',
            text: 'Notieren Sie alle Werte, die Ihnen spontan wichtig erscheinen. Lassen Sie sich Zeit und gehen Sie über die offensichtlichen hinaus. Oft verstecken sich die wichtigsten Werte hinter den naheliegenden.',
          },
          {
            title: 'Auf den Kern verdichten',
            text: 'Reduzieren Sie Ihre Liste auf fünf bis sieben Kernwerte. Fragen Sie bei jedem Wert: Würde ich dafür einen persönlichen Preis zahlen? Würde ich diesen Wert auch leben, wenn niemand zuschaut? Wenn nein, handelt es sich vermutlich um einen übernommenen Wert.',
          },
          {
            title: 'Eine Hierarchie bilden',
            text: 'Bringen Sie Ihre Kernwerte in eine Rangfolge. Dies ist unbequem, aber notwendig. Denn wenn zwei Werte in Konflikt geraten, müssen Sie wissen, welcher Vorrang hat. Stellen Sie sich Entweder-oder-Szenarien vor, um die Rangfolge zu testen.',
          },
          {
            title: 'Werte in Verhalten übersetzen',
            text: 'Für jeden Kernwert: Welche konkreten Verhaltensweisen zeigen, dass Sie diesen Wert leben? Was tun Sie, wenn Sie nach diesem Wert handeln? Was tun Sie nicht? Die Übersetzung in Verhalten macht Werte greifbar und überprüfbar.',
          },
        ]}
      />

      <QuoteBlock
        text="Wer sein Warum kennt, erträgt fast jedes Wie."
        author="Friedrich Nietzsche"
      />

      {/* Wertekonflikte */}
      <SectionHeader
        tag="Herausforderungen"
        title="Wertekonflikte: Wenn der Kompass in zwei Richtungen zeigt"
        text="Wie Sie mit inneren Wertekolllisionen und äußerem Wertedruck umgehen."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Wertekonflikte gehören zu den anspruchsvollsten inneren Herausforderungen. Sie entstehen, wenn zwei Ihrer Kernwerte in einer konkreten Situation nicht gleichzeitig erfüllt werden können. Zum Beispiel: Ihr Wert Ehrlichkeit gerät in Konflikt mit Ihrem Wert Loyalität, wenn Sie eine unbequeme Wahrheit über einen Kollegen kommunizieren müssten.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Ebenso herausfordernd sind Konflikte zwischen Ihren persönlichen Werten und den Erwartungen Ihres Umfelds oder Ihrer Organisation. Wenn Ihre Organisation Geschwindigkeit über Gründlichkeit stellt, Sie aber Qualität als Kernwert leben, entsteht eine dauerhafte Spannung, die Energie kostet und zu innerem Widerstand führen kann.
        </p>
      </Prose>

      <BenefitGrid
        items={[
          {
            icon: Scale,
            title: 'Bewusst priorisieren',
            text: 'Erkennen Sie den Konflikt an, statt ihn zu verdrängen. Fragen Sie: Welcher Wert hat in dieser spezifischen Situation Vorrang? Es gibt nicht immer eine perfekte Lösung, aber eine bewusste Entscheidung.',
          },
          {
            icon: ArrowRightLeft,
            title: 'Kreative Integration suchen',
            text: 'Manchmal lässt sich ein scheinbarer Wertekonflikt durch einen Perspektivwechsel auflösen. Gibt es einen Weg, beiden Werten gerecht zu werden, auch wenn es kreatives Denken erfordert?',
          },
          {
            icon: Anchor,
            title: 'Langfristig ausrichten',
            text: 'Wenn Ihre Kernwerte dauerhaft mit Ihrem beruflichen Umfeld kollidieren, ist das ein ernstes Signal. Langfristige Werteinkonsistenz führt zu Burnout, Zynismus und dem Verlust der eigenen Identität.',
          },
        ]}
        columns={3}
      />

      {/* Wertebasierte Entscheidungen */}
      <SectionHeader
        tag="Entscheidungsfindung"
        title="Wertebasiert entscheiden: Der Kompass in der Praxis"
        text="Wie Sie Ihre Werte als verlässliches Entscheidungsinstrument nutzen."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Viele Entscheidungen, die uns schwerfallen, werden einfacher, wenn wir sie durch die Linse unserer Werte betrachten. Statt endlos Vor- und Nachteile abzuwägen, fragen Sie: Welche Option ist am stärksten im Einklang mit meinen Kernwerten? Diese Frage schneidet durch die Komplexität und führt zu Entscheidungen, die sich langfristig richtig anfühlen, auch wenn sie kurzfristig unbequem sind.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Wertebasierte Entscheidungen haben einen weiteren Vorteil: Sie erzeugen weniger Bedauern. Denn selbst wenn das Ergebnis nicht optimal ausfällt, können Sie mit der Gewissheit leben, dass Sie im Einklang mit dem gehandelt haben, was Ihnen wirklich wichtig ist.
        </p>
      </Prose>

      {/* Kernimpuls */}
      <HighlightBox title="Kernimpuls" color="gold">
        <p>
          Ihre Werte sind der stabilste Kompass, den Sie besitzen. In einer Welt voller äußerer Erwartungen, wechselnder Trends und konkurrierender Anforderungen bieten sie Ihnen einen inneren Orientierungspunkt. Nehmen Sie sich die Zeit, Ihre Werte bewusst zu identifizieren, zu priorisieren und in konkretes Verhalten zu übersetzen. Dieser Prozess ist eine der lohnendsten Investitionen in Ihre persönliche und berufliche Entwicklung.
        </p>
      </HighlightBox>

      {/* Reflexionsimpulse */}
      <SectionHeader
        tag="Zur Vertiefung"
        title="Reflexionsimpulse"
        text="Diese Fragen unterstützen Sie dabei, Ihren persönlichen Wertekompass zu schärfen."
      />

      <Checklist
        color="gold"
        items={[
          'Wenn Sie nur drei Werte für den Rest Ihres Lebens wählen könnten, welche wären es? Was sagt diese Wahl über Ihre tiefsten Prioritäten aus?',
          'In welchen Bereichen Ihres aktuellen Lebens handeln Sie nicht im Einklang mit Ihren Kernwerten? Was hält Sie davon ab, etwas zu verändern?',
          'Welche Werte haben Sie von Ihren Eltern oder Ihrer Kultur übernommen, ohne sie je bewusst gewählt zu haben? Welche davon möchten Sie behalten, welche loslassen?',
          'Denken Sie an eine schwierige Entscheidung, die vor Ihnen liegt. Wie würde sich Ihre Perspektive verändern, wenn Sie diese Entscheidung ausschließlich anhand Ihrer drei wichtigsten Werte treffen würden?',
          'Welche Ihrer Werte leben Sie in Ihrer Führungsrolle am stärksten? Welche kommen zu kurz? Was bräuchte es, um die Balance zu verändern?',
        ]}
      />
    </AkademieLayout>
  )
}
