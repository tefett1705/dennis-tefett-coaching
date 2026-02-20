import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AkademieLayout from '../../../components/AkademieLayout'
import {
  SectionHeader,
  Prose,
  BenefitGrid,
  NumberedSteps,
  QuoteBlock,
  HighlightBox,
  Checklist,
  StatHighlights,
  ComparisonTable,
} from '../../../components/SubpageBlocks'
import { Brain, Zap, Heart, Shield, TrendingUp, Smile, Headphones, Play, Pause, Volume2, ArrowRight } from 'lucide-react'

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    audioRef.current.currentTime = ratio * duration
  }

  return (
    <motion.div
      className="relative rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/[0.06] via-transparent to-gold/[0.03] p-6 md:p-8 mb-12 overflow-hidden"
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/3 rounded-full blur-[60px] pointer-events-none" />

      <audio
        ref={audioRef}
        preload="metadata"
        src="/audio/wie-glaubenssaetze-das-gehirn-physisch-umbauen.m4a"
        onTimeUpdate={() => {
          if (!audioRef.current) return
          setCurrentTime(audioRef.current.currentTime)
          setProgress(duration > 0 ? (audioRef.current.currentTime / duration) * 100 : 0)
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration)
        }}
        onEnded={() => { setPlaying(false); setProgress(0) }}
      />

      <div className="relative z-10">
        {/* Header row */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
            {playing ? (
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Volume2 size={26} />
              </motion.div>
            ) : (
              <Headphones size={26} />
            )}
          </div>
          <div className="flex-1">
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold/70 font-medium">Audio-Impuls</span>
            <p className="text-text-primary font-serif font-semibold text-lg leading-snug mt-0.5">
              Wie Glaubenssätze das Gehirn physisch umbauen
            </p>
            <p className="text-text-secondary text-sm mt-1">Dennis Tefett</p>
          </div>
        </div>

        {/* Player controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="w-12 h-12 rounded-full bg-gold/15 hover:bg-gold/25 flex items-center justify-center text-gold transition-all duration-300 flex-shrink-0 hover:scale-105 active:scale-95"
            aria-label={playing ? 'Pause' : 'Abspielen'}
          >
            {playing ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
          </button>

          <div className="flex-1 flex items-center gap-3">
            <span className="text-xs text-text-secondary tabular-nums w-10 text-right">{formatTime(currentTime)}</span>
            <div
              className="flex-1 h-2 bg-white/[0.08] rounded-full cursor-pointer group relative"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-gradient-to-r from-gold to-gold/60 rounded-full transition-[width] duration-150 relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-gold shadow-lg shadow-gold/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <span className="text-xs text-text-secondary tabular-nums w-10">{duration > 0 ? formatTime(duration) : '--:--'}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* Bridge technique examples table */
const bridgeExamples = [
  {
    old: '„Ich bin nicht gut genug."',
    bridge: '„Es ist möglich, dass ich in manchen Bereichen kompetent bin."',
    target: '„Ich bin genug, so wie ich bin."',
  },
  {
    old: '„Fehler sind Schwäche."',
    bridge: '„Fehler zeigen, dass ich etwas Neues versuche."',
    target: '„Fehler sind mein wichtigstes Lernwerkzeug."',
  },
  {
    old: '„Ich darf keine Hilfe annehmen."',
    bridge: '„Es ist menschlich, Unterstützung zu brauchen."',
    target: '„Hilfe annehmen ist ein Zeichen von Stärke."',
  },
]

export default function GlaubenssaetzeVerstehen() {
  useEffect(() => {
    document.title = 'Glaubenssätze verstehen und verändern | Wissens-Akademie | Dennis Tefett'
  }, [])

  return (
    <AkademieLayout
      moduleTitle="Persönlichkeit & Wachstum"
      moduleSlug="persoenlichkeit-wachstum"
      impulsSlug="glaubenssaetze-verstehen"
      color="gold"
      impulsTitle="Glaubenssätze: Wie innere Überzeugungen Ihr Leben formen"
      prevImpuls={{
        title: 'Imposter-Syndrom: Wenn Erfolg sich falsch anfühlt',
        href: '/akademie/persoenlichkeit-wachstum/imposter-syndrom',
      }}
      nextImpuls={undefined}
      relatedCoachingPages={[
        { label: 'Glaubenssatz-Analyse (Selbsttest)', href: '/glaubenssatz-test' },
        { label: 'Persönlichkeitsentwicklung', href: '/persoenlichkeitsentwicklung-erklaert' },
        { label: 'Nachhaltige Verhaltensänderung', href: '/nachhaltige-verhaltensaenderung' },
      ]}
    >
      {/* Einleitung */}
      <SectionHeader
        tag="Psychologie & Neurowissenschaft"
        title="Die unsichtbare Kraft hinter Ihren Entscheidungen"
        text="Glaubenssätze sind tief verankerte Überzeugungen über sich selbst, andere und die Welt. Sie fühlen sich wie Fakten an, sind aber erlernte Muster, die Ihr Gehirn physisch geformt haben."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Jeder Mensch trägt ein Netzwerk aus Glaubenssätzen in sich, das sich seit der Kindheit aufgebaut hat. Diese Überzeugungen entstehen nicht durch bewusste Entscheidung. Sie werden übernommen: durch Erziehung, prägende Erfahrungen, soziale Normen und Wiederholung. Ein Kind, das wiederholt hört „Streng dich mehr an", kann daraus den Glaubenssatz ableiten: „Ich bin nicht gut genug, so wie ich bin."
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Das Besondere an Glaubenssätzen: Sie wirken wie ein Filter, durch den Sie die Welt wahrnehmen. Wenn Sie unbewusst glauben, nicht gut genug zu sein, werden Sie Bestätigungen für diese Überzeugung sammeln und Gegenbeweise ignorieren. Neurowissenschaftlich gesprochen: Ihr Gehirn hat neuronale Autobahnen gebaut, die bestimmte Interpretationen bevorzugen.
        </p>
      </Prose>

      {/* Key stats */}
      <StatHighlights
        stats={[
          { value: '95%', label: 'der Gedanken wiederholen sich täglich' },
          { value: '70.000', label: 'Gedanken pro Tag im Durchschnitt' },
          { value: '80%', label: 'davon sind negativ oder limitierend' },
          { value: '100%', label: 'veränderbar durch Neuroplastizität' },
        ]}
      />

      <QuoteBlock
        text="Glaubenssätze sind keine Fakten. Sie fühlen sich wie Fakten an, weil Ihr Gehirn sie über Jahre zu neuronaler Realität verdichtet hat."
        author="Dennis Tefett"
      />

      {/* Neurowissenschaft */}
      <SectionHeader
        tag="Neurowissenschaft"
        title="Was im Gehirn passiert: Von Gedanken zu Strukturen"
        text="Wie repetitive Gedankenmuster zu messbaren, physischen Veränderungen in Ihrem Gehirn führen."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die Hirnforschung zeigt: Ein Glaubenssatz ist keine abstrakte Idee. Er entspricht einem konkreten neuronalen Netzwerk, das durch Wiederholung immer effizienter geworden ist. Nach dem Hebb'schen Prinzip („Neurons that fire together, wire together") verstärken sich Verbindungen, die häufig gemeinsam aktiviert werden. Ein Glaubenssatz wie „Fehler sind Schwäche" hat sich durch tausendfache Wiederholung zu einer neuronalen Schnellstraße verdichtet.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Die gute Nachricht: Neuroplastizität bedeutet auch, dass diese Muster veränderbar sind. Wenn Sie beginnen, neue Gedankenmuster bewusst zu üben, bilden sich neue neuronale Verbindungen. Gleichzeitig schwächen die alten Bahnen ab, wenn sie nicht mehr aktiviert werden. Veränderung ist also keine Frage der Willenskraft, sondern ein neurobiologischer Prozess, der Wiederholung und Geduld erfordert.
        </p>
      </Prose>

      {/* Audio-Episode */}
      <SectionHeader
        tag="Audio-Impuls"
        title="Wie Glaubenssätze das Gehirn physisch umbauen"
        text="In dieser vertiefenden Audio-Episode erfahren Sie, welche neuronalen Mechanismen hinter Glaubenssätzen stecken und wie gezielte Veränderungsarbeit das Gehirn messbar umstrukturiert."
      />

      <AudioPlayer />

      {/* Die 6 Wirkungsbereiche */}
      <SectionHeader
        tag="Sechs Kernbereiche"
        title="Wo Glaubenssätze besonders wirken"
        text="Limitierende Überzeugungen zeigen sich in sechs zentralen Lebensbereichen. Oft sind ein bis zwei Bereiche besonders stark betroffen."
      />

      <BenefitGrid
        items={[
          {
            icon: Brain,
            title: 'Selbstwert',
            text: '„Ich bin nicht gut genug." Der häufigste Glaubenssatz. Er untergräbt Selbstvertrauen und führt zu chronischer Selbstabwertung, auch bei objektiv erfolgreichen Menschen.',
          },
          {
            icon: Zap,
            title: 'Leistung & Perfektionismus',
            text: '„Nur Perfektion zählt." Dieser Glaubenssatz treibt zu Überarbeitung und macht Fehler zur existenziellen Bedrohung. Das Ergebnis: Erschöpfung statt Exzellenz.',
          },
          {
            icon: Heart,
            title: 'Beziehungen & Vertrauen',
            text: '„Verletzlichkeit wird ausgenutzt." Wer das glaubt, hält andere auf Distanz und verzichtet auf die Verbundenheit, die Resilienz stärkt.',
          },
          {
            icon: TrendingUp,
            title: 'Veränderung & Wachstum',
            text: '„Ich bin halt so." Ein Fixed Mindset, der Entwicklung verhindert, bevor sie beginnen kann. Die Neurowissenschaft zeigt: Das stimmt nachweislich nicht.',
          },
          {
            icon: Shield,
            title: 'Kontrolle & Sicherheit',
            text: '„Wenn ich loslasse, geht alles schief." Das Bedürfnis nach totaler Kontrolle raubt Spontanität und Lebensfreude, ohne echte Sicherheit zu schaffen.',
          },
          {
            icon: Smile,
            title: 'Emotionen & Ausdruck',
            text: '„Gefühle zeigen ist Schwäche." Wer Emotionen unterdrückt, verliert den Zugang zu wichtigen Informationen, denn Gefühle sind Signale, keine Störungen.',
          },
        ]}
        columns={3}
      />

      {/* CTA: Glaubenssatz-Test */}
      <motion.div
        className="my-12 glass-card p-6 md:p-8 border-gold/20 bg-gradient-to-r from-gold/[0.04] to-transparent relative overflow-hidden"
        initial={{ y: 15 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-5">
          <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
            <Heart size={28} className="text-gold" />
          </div>
          <div className="text-center md:text-left flex-1">
            <h3 className="text-lg font-serif font-semibold mb-1">In welchen Bereichen wirken Ihre Glaubenssätze?</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Der interaktive Glaubenssatz-Test analysiert sechs Kernbereiche in 5 Minuten. 24 Aussagen, sofortige Auswertung, konkrete Empfehlungen.
            </p>
          </div>
          <Link
            to="/glaubenssatz-test"
            className="px-6 py-3 bg-gold text-midnight font-semibold rounded-full text-sm hover:bg-gold/90 transition-all duration-300 inline-flex items-center gap-2 justify-center flex-shrink-0 shadow-lg shadow-gold/15 whitespace-nowrap"
          >
            Zum Selbsttest
            <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>

      {/* Erkennung */}
      <SectionHeader
        tag="Selbsterkenntnis"
        title="Limitierende Glaubenssätze erkennen"
        text="Drei Zugänge, um unbewusste Überzeugungen sichtbar zu machen."
      />

      <NumberedSteps
        steps={[
          {
            title: 'Den inneren Monolog beobachten',
            text: 'Achten Sie in Stresssituationen auf den Satz, der automatisch in Ihrem Kopf auftaucht. Wiederkehrende Formulierungen wie „Ich muss...", „Ich kann nicht...", „Ich darf nicht..." sind zuverlässige Hinweise auf aktive Glaubenssätze.',
          },
          {
            title: 'Körperliche Signale wahrnehmen',
            text: 'Glaubenssätze lösen körperliche Reaktionen aus: Enge in der Brust, Anspannung im Kiefer, flache Atmung. Wenn Ihr Körper auf eine Situation stärker reagiert als die Situation es rechtfertigt, ist oft ein Glaubenssatz im Spiel.',
          },
          {
            title: 'Muster in Beziehungen erkennen',
            text: 'Wiederholen sich bestimmte Konflikte oder Dynamiken in Ihren Beziehungen? Oft projizieren wir unsere Glaubenssätze auf andere. Wer glaubt, nicht genug zu sein, interpretiert neutrale Rückmeldungen als Kritik.',
          },
        ]}
      />

      {/* Veränderungsmethode */}
      <SectionHeader
        tag="Methode"
        title="Die Brücken-Technik: Glaubenssätze transformieren"
        text="Alte Überzeugungen lassen sich nicht einfach löschen. Aber Sie können neue, ehrliche Überzeugungen daneben aufbauen, die nach und nach stärker werden."
      />

      <Prose>
        <p className="text-text-secondary leading-relaxed mb-4">
          Der Schlüssel liegt in der Brücken-Technik: Statt direkt vom limitierenden zum idealen Glaubenssatz zu springen (was das Gehirn als unglaubwürdig ablehnt), formulieren Sie einen Zwischenschritt, der sich ehrlich anfühlt. Die Brücke ist oft wichtiger als der Zielsatz, weil sie den neuronalen Übergang glaubwürdig macht.
        </p>
      </Prose>

      {/* Bridge technique examples as table */}
      <motion.div
        className="my-10 overflow-x-auto rounded-xl border border-glass-border"
        initial={{ y: 15 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-3 bg-glass-bg text-xs uppercase tracking-wider font-medium min-w-[480px]">
          <div className="p-4 text-text-secondary/60">Limitierender Glaubenssatz</div>
          <div className="p-4 text-gold text-center">Brückensatz</div>
          <div className="p-4 text-teal text-center">Neuer Glaubenssatz</div>
        </div>
        {bridgeExamples.map((ex, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-3 border-t border-glass-border min-w-[480px]"
            initial={{}}
            whileInView={{}}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <div className="p-4 text-sm text-text-secondary/60 italic">{ex.old}</div>
            <div className="p-4 text-sm text-gold/80 text-center italic">{ex.bridge}</div>
            <div className="p-4 text-sm text-teal text-center italic">{ex.target}</div>
          </motion.div>
        ))}
      </motion.div>

      <NumberedSteps
        steps={[
          {
            title: 'Erkennen und benennen',
            text: 'Identifizieren Sie den Glaubenssatz wörtlich. Schreiben Sie ihn auf. Allein das bewusste Benennen reduziert seine unbewusste Macht, die Neurowissenschaft nennt das „Affect Labeling".',
          },
          {
            title: 'Hinterfragen mit Struktur',
            text: 'Nutzen Sie vier Fragen: Ist das wahr? Kann ich das mit absoluter Sicherheit wissen? Wie reagiere ich, wenn ich diesen Gedanken glaube? Wer wäre ich ohne diesen Gedanken?',
          },
          {
            title: 'Brückensatz formulieren',
            text: 'Finden Sie einen Satz, der sich ehrlich und etwas freier anfühlt. Nicht perfekt, nicht das Gegenteil, sondern einen glaubwürdigen Zwischenschritt. Testen Sie: Fühlt sich der Satz im Körper leichter an?',
          },
          {
            title: 'Verankern und wiederholen',
            text: 'Sprechen Sie den neuen Satz laut aus. Finden Sie täglich einen Beweis dafür, dass er stimmt. Jede bewusste Wiederholung stärkt die neue neuronale Verbindung und schwächt die alte.',
          },
        ]}
      />

      {/* Vorher/Nachher Vergleich */}
      <SectionHeader
        tag="Perspektivwechsel"
        title="Was sich verändert, wenn Glaubenssätze sich verändern"
      />

      <ComparisonTable
        beforeLabel="Mit limitierendem Glaubenssatz"
        afterLabel="Nach der Transformation"
        rows={[
          { aspect: 'Selbstbild', before: 'Dauerhafter Selbstzweifel', after: 'Realistische Selbsteinschätzung' },
          { aspect: 'Entscheidungen', before: 'Vermeidung und Aufschieben', after: 'Klares, mutiges Handeln' },
          { aspect: 'Beziehungen', before: 'Distanz und Kontrolle', after: 'Offenheit und Vertrauen' },
          { aspect: 'Fehlerkultur', before: 'Scham und Vertuschung', after: 'Lernen und Wachstum' },
          { aspect: 'Energie', before: 'Erschöpfung durch Kompensation', after: 'Nachhaltige Leistungsfähigkeit' },
        ]}
      />

      {/* Kernimpuls */}
      <HighlightBox title="Kernimpuls" color="gold">
        <p>
          Sie müssen nichts in sich zerstören. Sie dürfen etwas erweitern. Glaubenssätze sind keine lebenslangen Urteile, sondern neuronale Muster, die durch bewusste, wiederholte neue Erfahrungen umgebaut werden können. Der erste Schritt ist immer derselbe: Wahrnehmen, ohne zu bewerten. Der Rest ist Übung, Geduld und der Mut, sich selbst neu zu erzählen.
        </p>
      </HighlightBox>

      {/* Reflexionsimpulse */}
      <SectionHeader
        tag="Zur Vertiefung"
        title="Reflexionsimpulse"
        text="Nutzen Sie diese Fragen als Einstieg in Ihre persönliche Glaubenssatz-Arbeit. Für eine tiefere Analyse empfehlen wir den interaktiven Glaubenssatz-Test."
      />

      <Checklist
        color="gold"
        items={[
          'Welcher Satz über Sie selbst taucht in Stressmomenten am häufigsten auf? Können Sie ihn wörtlich benennen?',
          'In welchem der sechs Kernbereiche (Selbstwert, Leistung, Beziehungen, Veränderung, Kontrolle, Emotionen) fühlen Sie sich am stärksten eingeschränkt?',
          'Wer hat Ihnen diesen Glaubenssatz vermittelt, direkt oder indirekt? Welche Funktion hatte er damals?',
          'Was wäre ein ehrlicher Brückensatz, der sich einen Grad freier anfühlt als Ihre aktuelle Überzeugung?',
          'Was würden Sie tun, wenn Sie diesen Glaubenssatz nicht mehr glauben würden? Was hält Sie davon ab, es trotzdem zu versuchen?',
        ]}
      />
    </AkademieLayout>
  )
}
