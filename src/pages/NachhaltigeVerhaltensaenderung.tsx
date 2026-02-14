import SubpageLayout from '../components/SubpageLayout'
import SEOHead from '../components/SEOHead'
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
import {
  Brain,
  RotateCcw,
  Fingerprint,
  Repeat,
  Target,
  TrendingUp,
  ShieldCheck,
  Waypoints,

  HeartHandshake,
} from 'lucide-react'
import heroImg from '../assets/images/dennis-schoenen-anzug.webp'

export default function NachhaltigeVerhaltensaenderung() {
  return (
    <SubpageLayout
      heroImage={heroImg}
      category="Persönlichkeitsentwicklung"
      title="Nachhaltige Verhaltensänderung: Vom Wissen zum Handeln"
      subtitle="Warum gute Vorsätze scheitern, und wie neurowissenschaftlich fundiertes Coaching dauerhafte Veränderung ermöglicht."
      relatedPages={[
        { label: 'Persönlichkeitsentwicklung erklärt', href: '/persoenlichkeitsentwicklung-erklaert' },
        { label: 'Selbstwirksamkeit stärken', href: '/selbstwirksamkeit-staerken' },
        { label: 'Coaching-Methoden', href: '/coaching-methoden' },
        { label: 'Fokus und Klarheit', href: '/fokus-und-klarheit' },
      ]}
    >
      <SEOHead
        title="Nachhaltige Verhaltensänderung: Methoden & Wissenschaft | Dennis Tefett"
        description="Warum gute Vorsätze scheitern und wie neurowissenschaftlich fundiertes Coaching dauerhafte Verhaltensänderung ermöglicht. Gewohnheiten ändern, neue Routinen aufbauen und nachhaltige Veränderung erreichen."
        keywords="Verhaltensänderung, Gewohnheiten ändern, nachhaltige Veränderung, neue Routinen, Verhaltensmuster"
        canonical="https://dennis-tefett.de/nachhaltige-verhaltensaenderung"
      />

      {/* --- Warum Veränderung so schwer fällt --- */}
      <SectionHeader
        tag="Die Wissenschaft dahinter"
        title="Warum Verhaltensänderung so schwer fällt"
        text="Das Scheitern an guten Vorsätzen ist keine Willensschwäche, sondern eine biologische Realität. Ihr Gehirn ist ein Effizienzorgan, das bewährte Muster bevorzugt."
      />

      <StatHighlights
        stats={[
          { value: '95 %', label: 'unseres Verhaltens läuft automatisiert' },
          { value: '66', label: 'Tage bis eine neue Gewohnheit stabil ist' },
          { value: '3–6', label: 'Monate für nachhaltige Veränderung' },
          { value: '300 %', label: 'höhere Umsetzung mit Wenn-Dann-Plänen' },
        ]}
      />

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: Brain,
            title: 'Der Habit Loop',
            text: 'Jede Gewohnheit folgt dem Muster: Auslöser, Routine, Belohnung. Dieser Kreislauf ist tief im Nervensystem verankert. Er lässt sich nicht löschen, aber umschreiben.',
          },
          {
            icon: RotateCcw,
            title: 'Limbisches System siegt',
            text: 'Das emotionale Gehirn ist schneller und stärker als der rationale Verstand. In Stresssituationen gewinnt fast immer das alte Muster; deshalb reicht Wissen allein nicht.',
          },
          {
            icon: Fingerprint,
            title: 'Identität bestimmt Verhalten',
            text: 'Solange die zugrunde liegende Identität unverändert bleibt, arbeiten Sie gegen Ihr eigenes Selbstbild. Nachhaltige Veränderung beginnt mit der Frage: Wer will ich sein?',
          },
        ]}
      />

      <HighlightBox title="Rückfälle sind kein Scheitern" color="gold">
        <p>
          Rückfälle sind ein natürlicher Teil des Veränderungsprozesses. Die Forschung zeigt, dass die meisten Menschen mehrere Anläufe brauchen. Der Unterschied zwischen denen, die erfolgreich sind, und denen, die aufgeben: Erfolgreiche betrachten Rückfälle als Lerngelegenheit, nicht als Beweis ihrer Unfähigkeit.
        </p>
      </HighlightBox>

      {/* --- Vorher / Nachher --- */}
      <SectionHeader
        tag="Der Unterschied"
        title="Verhaltensänderung ohne und mit professionellem Coaching"
      />

      <ComparisonTable
        beforeLabel="Ohne Coaching"
        afterLabel="Mit Coaching-Begleitung"
        rows={[
          {
            aspect: 'Vorsätze',
            before: 'Vage Absichten, schnell vergessen',
            after: 'Konkrete Wenn-Dann-Pläne mit Alltagsanker',
          },
          {
            aspect: 'Rückfälle',
            before: 'Führen zu Aufgabe und Frustration',
            after: 'Werden analysiert und als Lernchance genutzt',
          },
          {
            aspect: 'Motivation',
            before: 'Anfangs hoch, fällt schnell ab',
            after: 'Durch Identitätsarbeit dauerhaft verankert',
          },
          {
            aspect: 'Fortschritt',
            before: 'Unsichtbar und nicht messbar',
            after: 'Dokumentiert, reflektiert und gefeiert',
          },
          {
            aspect: 'Umgebung',
            before: 'Bleibt unverändert und arbeitet dagegen',
            after: 'Wird bewusst gestaltet und unterstützt',
          },
          {
            aspect: 'Nachhaltigkeit',
            before: 'Selten über 3 Wochen hinaus',
            after: 'In Identität und Alltag integriert',
          },
        ]}
      />

      {/* --- Der Coaching-Prozess --- */}
      <SectionHeader
        tag="Ihr Weg zur Veränderung"
        title="Das 4-Phasen-Modell für dauerhafte Verhaltensänderung"
        text="Dieser strukturierte Ansatz verbindet Neurowissenschaft, Verhaltenspsychologie und systemisches Coaching, damit Veränderung nicht nur beginnt, sondern bleibt."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Bewusstheit: Muster erkennen',
            text: 'Wir decken blinde Flecken auf und erfassen den Ist-Zustand ehrlich. Ohne klares Verständnis der Ausgangslage ist jede Veränderung Zufall. Hier identifizieren wir die Gewohnheiten, die Sie bremsen.',
          },
          {
            title: 'Vision: Zielbild konkretisieren',
            text: 'Wer will ich sein? Wie sieht mein Alltag aus, wenn die Veränderung gelungen ist? Wir verankern das Zielbild emotional, denn Veränderung braucht einen inneren Kompass, nicht nur einen Plan.',
          },
          {
            title: 'Umsetzung: Micro-Habits & Experimente',
            text: 'Kleine, risikoarme Verhaltensänderungen im Alltag. Implementierungsintentionen formulieren, Umgebung anpassen, Habit Stacking nutzen. Engmaschige Reflexion und Anpassung in jeder Sitzung.',
          },
          {
            title: 'Integration: Neues Verhalten stabilisieren',
            text: 'Das neue Verhalten wird in Ihre Identität integriert. Rückfallprophylaxe, Selbstcoaching-Kompetenz und langfristige Accountability-Strukturen sichern die Nachhaltigkeit.',
          },
        ]}
      />

      <QuoteBlock
        text="Nachhaltige Veränderung entsteht nicht durch den Kampf gegen alte Gewohnheiten, sondern durch die konsequente Ausrichtung am neuen Selbstbild. Verhalten folgt Identität."
      />

      {/* --- Erfolgsfaktoren --- */}
      <SectionHeader
        tag="Was den Unterschied macht"
        title="Die 6 Erfolgsfaktoren für nachhaltige Veränderung"
      />

      <BenefitGrid
        columns={3}
        items={[
          {
            icon: Repeat,
            title: 'Konsistenz vor Intensität',
            text: 'Lieber jeden Tag 5 Minuten als einmal im Monat 2 Stunden. Jede Wiederholung stärkt den neuronalen Pfad für das neue Verhalten.',
          },
          {
            icon: Target,
            title: 'Wenn-Dann-Pläne',
            text: 'Implementierungsintentionen koppeln neues Verhalten an konkrete Auslöser: „Wenn ich den Computer einschalte, schreibe ich zuerst meine drei Prioritäten auf."',
          },
          {
            icon: Waypoints,
            title: 'Umgebungsdesign',
            text: 'Gestalten Sie Ihre Umgebung so, dass gewünschtes Verhalten leicht und unerwünschtes schwer fällt. Legen Sie das Buch auf den Nachttisch, nicht das Handy.',
          },
          {
            icon: HeartHandshake,
            title: 'Accountability',
            text: 'Allein die Tatsache, dass jemand nach der Umsetzung fragt, erhöht die Erfolgswahrscheinlichkeit drastisch. Coaching schafft diesen verbindlichen Rahmen.',
          },
          {
            icon: TrendingUp,
            title: 'Fortschritt sichtbar machen',
            text: 'Was nicht gemessen wird, gerät in Vergessenheit. Wöchentliche Selbsteinschätzung und dokumentierte Meilensteine halten das Momentum aufrecht.',
          },
          {
            icon: ShieldCheck,
            title: 'Rückfallprophylaxe',
            text: 'Definieren Sie im Voraus, was Sie tun, wenn ein Rückfall passiert. Nicht ob, sondern wenn, denn Rückfälle sind Teil des Prozesses, kein Zeichen von Versagen.',
          },
        ]}
      />

      {/* --- Praktische Werkzeuge --- */}
      <SectionHeader
        tag="Sofort anwendbar"
        title="Werkzeuge für den Alltag"
        text="Diese Techniken nutzen wir im Coaching, und Sie können sie ab sofort selbst anwenden."
      />

      <HighlightBox title="Die Zwei-Minuten-Regel und Habit Stacking" color="teal">
        <Checklist
          items={[
            'Jedes neue Verhalten sollte in weniger als 2 Minuten umsetzbar sein',
            'Koppeln Sie neues Verhalten an bestehende Routinen (Habit Stacking)',
            'Erst wenn es zur Gewohnheit geworden ist, schrittweise erweitern',
            'Belohnungssysteme einbauen: Das Gehirn wiederholt, was sich lohnt',
            'Micro-Experimente wagen: kleine Verhaltensänderungen ausprobieren und reflektieren',
          ]}
          color="teal"
        />
      </HighlightBox>

      <HighlightBox title="Ihre wöchentliche Reflexion" color="gold">
        <Checklist
          items={[
            'Wie gut habe ich mein neues Verhalten diese Woche umgesetzt? (Skala 1–10)',
            'Was hat funktioniert, und was möchte ich nächste Woche anders machen?',
            'Welchen Meilenstein habe ich erreicht? (Auch kleine Erfolge feiern)',
            'Gibt es einen Rückfall? Wenn ja: Was kann ich daraus lernen?',
            'Langfristiger Blick: Wo stand ich vor 4 Wochen, und wo stehe ich heute?',
          ]}
          color="gold"
        />
      </HighlightBox>

      <Prose>
        <p>
          Der Unterschied zwischen Wissen und Handeln ist keine Informationslücke. Es ist eine Umsetzungslücke. Und genau diese Lücke zu schliessen, ist die Kernaufgabe von Coaching. Im Coaching-Prozess dokumentieren wir jeden Fortschritt, auch die kleinen. Denn wenn Sie auf die letzten drei Monate zurückblicken und konkret benennen können, was sich verändert hat, stärkt das Ihre Selbstwirksamkeit und die Motivation weiterzumachen.
        </p>
      </Prose>

      <QuoteBlock
        text="Der Unterschied zwischen Wissen und Handeln ist keine Informationslücke. Es ist eine Umsetzungslücke. Und genau diese Lücke zu schliessen, ist die Kernaufgabe von Coaching."
      />

    </SubpageLayout>
  )
}
