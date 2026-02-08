export type OceanDimension = 'offenheit' | 'gewissenhaftigkeit' | 'extraversion' | 'vertraeglichkeit' | 'stabilitaet'

export interface OceanTestQuestion {
  id: number
  dimension: OceanDimension
  question: string
  options: { label: string; score: number }[]
}

export interface OceanDimensionScores {
  offenheit: number
  gewissenhaftigkeit: number
  extraversion: number
  vertraeglichkeit: number
  stabilitaet: number
  total: number
}

export interface OceanProfileType {
  id: string
  name: string
  subtitle: string
  description: string
  strengths: string[]
  growthAreas: string[]
  coachingFocus: string
}

export interface OceanDimensionInfo {
  key: OceanDimension
  label: string
  shortLabel: string
  description: string
}

export const oceanDimensions: OceanDimensionInfo[] = [
  {
    key: 'offenheit',
    label: 'Offenheit für Erfahrungen',
    shortLabel: 'Offenheit',
    description:
      'Beschreibt Ihre Neugier, Kreativität und Bereitschaft, neue Ideen und unkonventionelle Ansätze zu erkunden. Menschen mit hoher Offenheit suchen aktiv nach neuen Perspektiven und lassen sich von Vielfalt inspirieren.',
  },
  {
    key: 'gewissenhaftigkeit',
    label: 'Gewissenhaftigkeit',
    shortLabel: 'Gewissen-\nhaftigkeit',
    description:
      'Beschreibt Ihre Selbstdisziplin, Zuverlässigkeit und Ihr Organisationstalent. Gewissenhafte Menschen setzen sich Ziele, arbeiten strukturiert und bringen Aufgaben zuverlässig zu Ende.',
  },
  {
    key: 'extraversion',
    label: 'Extraversion',
    shortLabel: 'Extra-\nversion',
    description:
      'Beschreibt, wie stark Sie Energie aus sozialen Kontakten ziehen und wie aktiv Sie auf andere zugehen. Extravertierte Menschen sind gesellig, durchsetzungsfähig und fühlen sich in Gruppen wohl.',
  },
  {
    key: 'vertraeglichkeit',
    label: 'Verträglichkeit',
    shortLabel: 'Verträg-\nlichkeit',
    description:
      'Beschreibt Ihre Kooperationsbereitschaft, Ihr Einfühlungsvermögen und Ihr Vertrauen in andere. Verträgliche Menschen streben nach Harmonie und legen Wert auf ein respektvolles Miteinander.',
  },
  {
    key: 'stabilitaet',
    label: 'Emotionale Stabilität',
    shortLabel: 'Emotionale\nStabilität',
    description:
      'Beschreibt Ihre Fähigkeit, unter Druck gelassen zu bleiben und Emotionen zu regulieren. Emotional stabile Menschen bewältigen Stress souverän und lassen sich von Rückschlägen nicht leicht aus der Bahn werfen.',
  },
]

// ─── 20 Questions (4 per dimension) ──────────────────────────────

export const oceanQuestions: OceanTestQuestion[] = [
  // Offenheit für Erfahrungen
  {
    id: 0,
    dimension: 'offenheit',
    question: 'Wie reagieren Sie, wenn Ihnen eine völlig neue Idee oder ein ungewohnter Ansatz vorgeschlagen wird?',
    options: [
      { label: 'Ich bleibe lieber bei bewährten Methoden und lehne Neues eher ab.', score: 1 },
      { label: 'Ich bin skeptisch, lasse mich aber mit guten Argumenten überzeugen.', score: 2 },
      { label: 'Ich bin neugierig und prüfe neue Ideen gerne auf ihren Wert.', score: 3 },
      { label: 'Ich bin begeistert von neuen Ansätzen und suche aktiv nach innovativen Wegen.', score: 4 },
    ],
  },
  {
    id: 1,
    dimension: 'offenheit',
    question: 'Wie stark nutzen Sie kreative oder unkonventionelle Lösungen in Ihrem Alltag?',
    options: [
      { label: 'Ich bevorzuge klare, erprobte Vorgehensweisen und meide Experimente.', score: 1 },
      { label: 'Gelegentlich probiere ich etwas Neues, kehre aber schnell zum Gewohnten zurück.', score: 2 },
      { label: 'Ich entwickle regelmäßig eigene Ideen und denke gerne um die Ecke.', score: 3 },
      { label: 'Kreativität ist mein Markenzeichen – ich suche ständig nach originellen Lösungen.', score: 4 },
    ],
  },
  {
    id: 2,
    dimension: 'offenheit',
    question: 'Wie ausgeprägt ist Ihr Interesse, sich mit neuen Themen und Wissensgebieten zu beschäftigen?',
    options: [
      { label: 'Ich konzentriere mich auf das, was ich kenne, und habe wenig Bedarf an Neuem.', score: 1 },
      { label: 'Ich lese oder informiere mich gelegentlich zu neuen Themen, wenn es sich ergibt.', score: 2 },
      { label: 'Ich bilde mich regelmäßig weiter und suche gezielt nach neuem Wissen.', score: 3 },
      { label: 'Ich bin leidenschaftlich wissbegierig und tauche ständig in neue Themenfelder ein.', score: 4 },
    ],
  },
  {
    id: 3,
    dimension: 'offenheit',
    question: 'Wie gehen Sie mit Veränderungen in Ihrem beruflichen oder privaten Umfeld um?',
    options: [
      { label: 'Veränderungen verunsichern mich und ich versuche, sie zu vermeiden.', score: 1 },
      { label: 'Ich akzeptiere Veränderungen, brauche aber Zeit, mich darauf einzustellen.', score: 2 },
      { label: 'Ich sehe Veränderungen als Chance und passe mich flexibel an.', score: 3 },
      { label: 'Ich treibe Veränderungen aktiv voran und genieße die Dynamik.', score: 4 },
    ],
  },

  // Gewissenhaftigkeit
  {
    id: 4,
    dimension: 'gewissenhaftigkeit',
    question: 'Wie organisiert und strukturiert gehen Sie an Ihre Aufgaben und Projekte heran?',
    options: [
      { label: 'Ich arbeite eher spontan und ohne festen Plan.', score: 1 },
      { label: 'Ich mache mir grobe Pläne, weiche aber häufig davon ab.', score: 2 },
      { label: 'Ich plane meine Aufgaben systematisch und halte mich an meinen Zeitplan.', score: 3 },
      { label: 'Ich habe ein ausgefeiltes Planungssystem und optimiere meine Abläufe regelmäßig.', score: 4 },
    ],
  },
  {
    id: 5,
    dimension: 'gewissenhaftigkeit',
    question: 'Wie zuverlässig halten Sie Zusagen und Termine ein?',
    options: [
      { label: 'Ich vergesse oder verschiebe Zusagen regelmäßig.', score: 1 },
      { label: 'Ich bemühe mich, halte aber nicht immer alles ein.', score: 2 },
      { label: 'Andere können sich auf mich verlassen – ich halte fast immer Wort.', score: 3 },
      { label: 'Zuverlässigkeit ist einer meiner wichtigsten Werte – ich halte ausnahmslos, was ich verspreche.', score: 4 },
    ],
  },
  {
    id: 6,
    dimension: 'gewissenhaftigkeit',
    question: 'Wie gründlich achten Sie auf Details bei Ihrer Arbeit?',
    options: [
      { label: 'Details sind nicht meine Stärke – ich sehe lieber das große Ganze.', score: 1 },
      { label: 'Ich achte auf die wichtigsten Details, übersehe aber manchmal Feinheiten.', score: 2 },
      { label: 'Ich arbeite sorgfältig und prüfe meine Ergebnisse gründlich.', score: 3 },
      { label: 'Ich bin äußerst akkurat und stelle höchste Qualitätsansprüche an jedes Detail.', score: 4 },
    ],
  },
  {
    id: 7,
    dimension: 'gewissenhaftigkeit',
    question: 'Wie konsequent verfolgen Sie Ihre langfristigen Ziele?',
    options: [
      { label: 'Ich setze mir selten Ziele und lasse mich treiben.', score: 1 },
      { label: 'Ich habe Ziele, verliere sie aber im Alltag schnell aus den Augen.', score: 2 },
      { label: 'Ich verfolge meine Ziele diszipliniert und überprüfe regelmäßig meinen Fortschritt.', score: 3 },
      { label: 'Ich arbeite mit großer Ausdauer und Selbstdisziplin auf meine Ziele hin – Ablenkungen können mich kaum aufhalten.', score: 4 },
    ],
  },

  // Extraversion
  {
    id: 8,
    dimension: 'extraversion',
    question: 'Wie sehr ziehen Sie Energie aus dem Kontakt mit anderen Menschen?',
    options: [
      { label: 'Soziale Interaktionen kosten mich Energie – ich brauche viel Zeit für mich.', score: 1 },
      { label: 'Ich genieße Gesellschaft in kleinen Runden, bin aber schnell erschöpft davon.', score: 2 },
      { label: 'Ich mag den Austausch mit anderen und fühle mich danach oft energiegeladen.', score: 3 },
      { label: 'Ich blühe in Gesellschaft richtig auf und suche aktiv soziale Anlässe.', score: 4 },
    ],
  },
  {
    id: 9,
    dimension: 'extraversion',
    question: 'Wie verhalten Sie sich in Gruppensituationen oder bei Besprechungen?',
    options: [
      { label: 'Ich halte mich im Hintergrund und melde mich nur, wenn ich direkt angesprochen werde.', score: 1 },
      { label: 'Ich höre meistens zu und bringe mich nur bei Themen ein, die mir wichtig sind.', score: 2 },
      { label: 'Ich beteilige mich aktiv an Diskussionen und bringe meine Meinung ein.', score: 3 },
      { label: 'Ich übernehme gerne die Gesprächsführung und treibe Diskussionen aktiv voran.', score: 4 },
    ],
  },
  {
    id: 10,
    dimension: 'extraversion',
    question: 'Wie würden Sie Ihren Kommunikationsstil im beruflichen Umfeld beschreiben?',
    options: [
      { label: 'Ich bin eher zurückhaltend und kommuniziere lieber schriftlich als mündlich.', score: 1 },
      { label: 'Ich kommuniziere sachlich und beschränke mich auf das Nötige.', score: 2 },
      { label: 'Ich kommuniziere offen und gehe auch von mir aus auf Kollegen zu.', score: 3 },
      { label: 'Ich bin für meinen offenen, energiegeladenen Kommunikationsstil bekannt und baue leicht Kontakte auf.', score: 4 },
    ],
  },
  {
    id: 11,
    dimension: 'extraversion',
    question: 'Wie aktiv gestalten Sie Ihre beruflichen und privaten Beziehungen?',
    options: [
      { label: 'Ich warte eher ab und überlasse die Initiative anderen.', score: 1 },
      { label: 'Ich pflege einen kleinen Kreis enger Kontakte, gehe aber selten auf Neue zu.', score: 2 },
      { label: 'Ich baue bewusst Beziehungen auf und pflege mein Netzwerk regelmäßig.', score: 3 },
      { label: 'Ich bin ein natürlicher Netzwerker und knüpfe mühelos neue Verbindungen.', score: 4 },
    ],
  },

  // Verträglichkeit
  {
    id: 12,
    dimension: 'vertraeglichkeit',
    question: 'Wie gehen Sie mit Zusammenarbeit und Teamarbeit um?',
    options: [
      { label: 'Ich arbeite am liebsten allein und empfinde Teamarbeit als anstrengend.', score: 1 },
      { label: 'Ich arbeite im Team mit, setze aber vor allem meine eigenen Vorstellungen durch.', score: 2 },
      { label: 'Ich schätze Teamarbeit und bin bereit, Kompromisse einzugehen.', score: 3 },
      { label: 'Ich bin ein Teamplayer – ich stelle den gemeinsamen Erfolg über persönliche Interessen.', score: 4 },
    ],
  },
  {
    id: 13,
    dimension: 'vertraeglichkeit',
    question: 'Wie gut können Sie sich in die Perspektive und Gefühle anderer hineinversetzen?',
    options: [
      { label: 'Ich finde es schwierig, die Sichtweise anderer nachzuvollziehen.', score: 1 },
      { label: 'Ich versuche es, bin aber oft zu sehr mit meiner eigenen Sicht beschäftigt.', score: 2 },
      { label: 'Ich kann mich gut in andere hineinversetzen und berücksichtige ihre Gefühle.', score: 3 },
      { label: 'Empathie ist eine meiner größten Stärken – ich spüre intuitiv, wie es anderen geht.', score: 4 },
    ],
  },
  {
    id: 14,
    dimension: 'vertraeglichkeit',
    question: 'Wie gehen Sie mit Meinungsverschiedenheiten und Konflikten um?',
    options: [
      { label: 'Ich neige dazu, Konflikte konfrontativ auszutragen und auf meiner Position zu beharren.', score: 1 },
      { label: 'Ich vermeide Konflikte lieber, auch wenn das bedeutet, meine Meinung zurückzuhalten.', score: 2 },
      { label: 'Ich suche nach konstruktiven Lösungen und bin offen für die Sichtweise des anderen.', score: 3 },
      { label: 'Ich schaffe es, Konflikte so zu lösen, dass alle Seiten sich gehört fühlen und die Beziehung gestärkt wird.', score: 4 },
    ],
  },
  {
    id: 15,
    dimension: 'vertraeglichkeit',
    question: 'Wie ausgeprägt ist Ihr Grundvertrauen gegenüber anderen Menschen?',
    options: [
      { label: 'Ich bin sehr misstrauisch und gehe davon aus, dass andere vor allem eigene Interessen verfolgen.', score: 1 },
      { label: 'Ich bin vorsichtig und vertraue erst, wenn es sich bewährt hat.', score: 2 },
      { label: 'Ich gehe grundsätzlich von guten Absichten aus und gebe anderen einen Vertrauensvorschuss.', score: 3 },
      { label: 'Ich begegne allen Menschen mit offenem Herzen und tiefem Vertrauen in ihr Gutes.', score: 4 },
    ],
  },

  // Emotionale Stabilität
  {
    id: 16,
    dimension: 'stabilitaet',
    question: 'Wie gehen Sie mit hohem Druck und stressigen Situationen um?',
    options: [
      { label: 'Ich fühle mich schnell überwältigt und verliere den Überblick.', score: 1 },
      { label: 'Ich spüre den Druck stark, funktioniere aber irgendwie weiter.', score: 2 },
      { label: 'Ich bleibe meist ruhig und finde einen Weg, mit dem Druck umzugehen.', score: 3 },
      { label: 'Unter Druck laufe ich zu Hochform auf – Stress bringt meine besten Leistungen hervor.', score: 4 },
    ],
  },
  {
    id: 17,
    dimension: 'stabilitaet',
    question: 'Wie reagieren Sie emotional auf Misserfolge oder Rückschläge?',
    options: [
      { label: 'Rückschläge treffen mich hart – ich brauche sehr lange, um mich davon zu erholen.', score: 1 },
      { label: 'Ich bin enttäuscht und grüble eine Weile, bevor ich wieder nach vorne schaue.', score: 2 },
      { label: 'Ich verarbeite Rückschläge relativ schnell und ziehe Lehren daraus.', score: 3 },
      { label: 'Ich nehme Rückschläge gelassen – sie sind für mich wertvolle Lernchancen, nicht mehr.', score: 4 },
    ],
  },
  {
    id: 18,
    dimension: 'stabilitaet',
    question: 'Wie stark neigen Sie dazu, sich Sorgen zu machen oder über Probleme zu grübeln?',
    options: [
      { label: 'Ich mache mir ständig Sorgen und kann negative Gedanken kaum abschalten.', score: 1 },
      { label: 'Ich grüble öfter als mir lieb ist, besonders abends oder bei Unsicherheit.', score: 2 },
      { label: 'Ich mache mir manchmal Sorgen, kann aber gut zwischen produktivem Nachdenken und Grübeln unterscheiden.', score: 3 },
      { label: 'Ich bin innerlich ausgeglichen und lasse mich von Sorgen nicht beherrschen.', score: 4 },
    ],
  },
  {
    id: 19,
    dimension: 'stabilitaet',
    question: 'Wie stabil ist Ihre Stimmung im Alltag?',
    options: [
      { label: 'Meine Stimmung schwankt stark – ich erlebe häufig emotionale Höhen und Tiefen.', score: 1 },
      { label: 'Ich habe gelegentlich Stimmungsschwankungen, die mein Umfeld bemerkt.', score: 2 },
      { label: 'Meine Stimmung ist insgesamt stabil, auch wenn es mal herausfordernde Tage gibt.', score: 3 },
      { label: 'Ich bin emotional sehr ausgeglichen – mein Umfeld schätzt meine Beständigkeit.', score: 4 },
    ],
  },
]

// ─── Scoring Logic ────────────────────────────────────────────────

const dimensionQuestions: Record<OceanDimension, number[]> = {
  offenheit: [0, 1, 2, 3],
  gewissenhaftigkeit: [4, 5, 6, 7],
  extraversion: [8, 9, 10, 11],
  vertraeglichkeit: [12, 13, 14, 15],
  stabilitaet: [16, 17, 18, 19],
}

export function calculateOceanScores(answers: Record<number, number>): OceanDimensionScores {
  let total = 0
  const scores: Record<string, number> = {}

  for (const [dim, indices] of Object.entries(dimensionQuestions)) {
    const rawSum = indices.reduce((sum, i) => sum + (answers[i] || 1), 0)
    total += rawSum
    // Normalize: raw 4-16 → 0-100
    scores[dim] = Math.round(((rawSum - 4) / 12) * 100)
  }

  return {
    offenheit: scores.offenheit,
    gewissenhaftigkeit: scores.gewissenhaftigkeit,
    extraversion: scores.extraversion,
    vertraeglichkeit: scores.vertraeglichkeit,
    stabilitaet: scores.stabilitaet,
    total,
  }
}

// ─── Profile Types ────────────────────────────────────────────────

export const oceanProfileTypes: OceanProfileType[] = [
  {
    id: 'explorer',
    name: 'Der Kreative Entdecker',
    subtitle: 'Ihr größtes Talent: Neues denken und Horizonte erweitern',
    description:
      'Sie sind offen für neue Erfahrungen, denken kreativ und hinterfragen den Status quo. Ihre Neugier und Ihr Ideenreichtum machen Sie zu einem Innovationsmotor in Ihrem Umfeld. Sie inspirieren andere, über den Tellerrand zu schauen.',
    strengths: ['Kreatives Denken', 'Innovationsbereitschaft', 'Geistige Flexibilität'],
    growthAreas: ['Fokussierung und Priorisierung', 'Umsetzung von Ideen in konkrete Ergebnisse'],
    coachingFocus:
      'Im Coaching würden wir Ihre kreative Energie gezielt kanalisieren und Strukturen entwickeln, damit Ihre besten Ideen auch in die Tat umgesetzt werden.',
  },
  {
    id: 'achiever',
    name: 'Der Strukturierte Macher',
    subtitle: 'Ihr größtes Talent: Ziele erreichen durch Disziplin und Struktur',
    description:
      'Sie zeichnen sich durch hohe Selbstdisziplin, Zuverlässigkeit und exzellente Organisation aus. Wenn Sie sich ein Ziel setzen, erreichen Sie es auch. Ihr Umfeld schätzt Ihre Beständigkeit und Ihre Fähigkeit, Projekte termingerecht abzuschließen.',
    strengths: ['Zuverlässigkeit', 'Selbstdisziplin', 'Strukturierte Arbeitsweise'],
    growthAreas: ['Flexibilität bei unerwarteten Veränderungen', 'Loslassen von Perfektionismus'],
    coachingFocus:
      'Im Coaching würden wir Ihre Stärke in Struktur und Disziplin bewahren und gleichzeitig mehr Raum für Spontaneität und kreative Abweichungen schaffen.',
  },
  {
    id: 'connector',
    name: 'Der Soziale Brückenbauer',
    subtitle: 'Ihr größtes Talent: Menschen verbinden und begeistern',
    description:
      'Sie sind eine natürliche Kontaktperson, die in sozialen Situationen aufblüht. Ihre Energie, Ihr Kommunikationstalent und Ihre Offenheit machen Sie zum Mittelpunkt jedes Netzwerks. Sie bringen Menschen zusammen und schaffen eine positive Dynamik.',
    strengths: ['Kommunikationsstärke', 'Netzwerkfähigkeit', 'Begeisterungsfähigkeit'],
    growthAreas: ['Fokussiertes Alleinsein und Reflexion', 'Tiefe statt Breite in Beziehungen'],
    coachingFocus:
      'Im Coaching würden wir Ihre soziale Stärke nutzen und ergänzend die Fähigkeit zur stillen Reflexion und tieferen Selbstkenntnis entwickeln.',
  },
  {
    id: 'harmonizer',
    name: 'Der Empathische Harmonisierer',
    subtitle: 'Ihr größtes Talent: Verständnis schaffen und Brücken bauen',
    description:
      'Sie besitzen ein außergewöhnliches Einfühlungsvermögen und schaffen es, auch in schwierigen Situationen für ein respektvolles Miteinander zu sorgen. Ihre Fähigkeit, andere Perspektiven einzunehmen, macht Sie zu einem wertvollen Vermittler und Teampartner.',
    strengths: ['Empathie', 'Kooperationsfähigkeit', 'Konfliktlösung'],
    growthAreas: ['Klare Abgrenzung eigener Bedürfnisse', 'Durchsetzungsvermögen bei wichtigen Themen'],
    coachingFocus:
      'Im Coaching würden wir Ihre empathische Stärke bewahren und gleichzeitig Ihre Fähigkeit stärken, eigene Positionen klar und selbstbewusst zu vertreten.',
  },
  {
    id: 'anchor',
    name: 'Der Gelassene Fels',
    subtitle: 'Ihr größtes Talent: Ruhe und Stabilität ausstrahlen',
    description:
      'Sie zeichnen sich durch bemerkenswerte emotionale Ausgeglichenheit aus. Unter Druck bleiben Sie gelassen, Rückschläge bringen Sie nicht aus der Fassung. Diese innere Stärke gibt Ihrem Umfeld Sicherheit und Orientierung in turbulenten Zeiten.',
    strengths: ['Emotionale Ausgeglichenheit', 'Stressresistenz', 'Besonnenheit'],
    growthAreas: ['Emotionale Ausdrucksfähigkeit', 'Zugang zu den eigenen Gefühlen als Ressource'],
    coachingFocus:
      'Im Coaching würden wir Ihre natürliche Gelassenheit als Fundament nutzen und Wege finden, Emotionen bewusster als Informationsquelle und Antriebskraft einzusetzen.',
  },
  {
    id: 'balanced',
    name: 'Die Ausgewogene Persönlichkeit',
    subtitle: 'Ihr größtes Talent: Vielseitigkeit und innere Balance',
    description:
      'Sie zeigen ein ausgewogenes Profil über alle fünf Persönlichkeitsdimensionen hinweg. Diese Vielseitigkeit ist eine seltene Stärke, die es Ihnen erlaubt, sich in unterschiedlichsten Situationen angemessen zu verhalten und gezielt weiterzuentwickeln.',
    strengths: ['Ausgewogenes Profil', 'Situative Anpassungsfähigkeit', 'Vielseitigkeit'],
    growthAreas: ['Vertiefung einer besonderen Stärke', 'Entwicklung eines markanten Profils'],
    coachingFocus:
      'Im Coaching würden wir gemeinsam herausarbeiten, welche Dimension Sie zur persönlichen Spitzenqualität ausbauen möchten, um Ihr Profil noch klarer zu schärfen.',
  },
  {
    id: 'developing',
    name: 'Die Entdeckende Persönlichkeit',
    subtitle: 'Ihr größtes Talent: Bereitschaft zur Selbsterkenntnis',
    description:
      'Dass Sie diesen Test gemacht haben, zeigt Ihre Offenheit für persönliche Entwicklung. Ihr Ergebnis deutet darauf hin, dass Sie in mehreren Bereichen Wachstumspotenzial haben. Das ist kein Schwachpunkt, sondern der ideale Ausgangspunkt für eine gezielte Persönlichkeitsentwicklung.',
    strengths: ['Selbstreflexion', 'Lernbereitschaft', 'Entwicklungspotenzial'],
    growthAreas: ['Alle fünf Dimensionen bieten Wachstumschancen'],
    coachingFocus:
      'Im Coaching würden wir gemeinsam den Bereich identifizieren, der den größten Hebel für Ihre persönliche und berufliche Entwicklung bietet, und dort gezielt ansetzen.',
  },
]

export function getOceanProfileType(scores: OceanDimensionScores): OceanProfileType {
  const { offenheit, gewissenhaftigkeit, extraversion, vertraeglichkeit, stabilitaet, total } = scores

  // Low total score → developing profile
  if (total <= 30) return oceanProfileTypes.find((p) => p.id === 'developing')!

  // Balanced profile (all within 15 points of each other)
  const vals = [offenheit, gewissenhaftigkeit, extraversion, vertraeglichkeit, stabilitaet]
  const range = Math.max(...vals) - Math.min(...vals)
  if (range <= 15 && total > 30) return oceanProfileTypes.find((p) => p.id === 'balanced')!

  // Dominant dimension
  const max = Math.max(...vals)
  if (offenheit === max) return oceanProfileTypes.find((p) => p.id === 'explorer')!
  if (gewissenhaftigkeit === max) return oceanProfileTypes.find((p) => p.id === 'achiever')!
  if (extraversion === max) return oceanProfileTypes.find((p) => p.id === 'connector')!
  if (vertraeglichkeit === max) return oceanProfileTypes.find((p) => p.id === 'harmonizer')!
  if (stabilitaet === max) return oceanProfileTypes.find((p) => p.id === 'anchor')!

  return oceanProfileTypes.find((p) => p.id === 'balanced')!
}

// ─── Dimension Feedback ───────────────────────────────────────────

const oceanDimensionFeedback: Record<OceanDimension, { low: string; mid: string; high: string }> = {
  offenheit: {
    low: 'Ihre Offenheit für neue Erfahrungen ist aktuell gering ausgeprägt. Sie bevorzugen Vertrautes und Bewährtes, was Stabilität schafft, aber auch dazu führen kann, dass Sie Chancen und neue Perspektiven übersehen. Ein gezieltes Öffnen für neue Impulse könnte Ihre persönliche und berufliche Entwicklung bereichern.',
    mid: 'Sie verfügen über eine solide Basis an Offenheit. Sie sind durchaus bereit, Neues zu erkunden, ohne dabei Bewährtes leichtfertig aufzugeben. Um Ihr kreatives Potenzial voll auszuschöpfen, könnten Sie sich noch bewusster auf ungewohnte Erfahrungen einlassen.',
    high: 'Ihre Offenheit für Erfahrungen ist eine klare Stärke. Sie sind neugierig, kreativ und bereit, neue Wege zu gehen. Diese Eigenschaft macht Sie zu einem Impulsgeber und Innovator in Ihrem Umfeld.',
  },
  gewissenhaftigkeit: {
    low: 'Ihre Gewissenhaftigkeit bietet das größte Entwicklungspotenzial. Struktur, Planung und Verbindlichkeit fallen Ihnen aktuell schwer, was zu Stress und verpassten Chancen führen kann. Kleine, gezielte Routinen könnten hier eine große Wirkung entfalten.',
    mid: 'Sie verfügen über ein solides Maß an Gewissenhaftigkeit. Sie arbeiten organisiert und zuverlässig, könnten aber Ihre Selbstdisziplin und Detailorientierung noch weiter ausbauen, um Ihre Ziele noch konsequenter zu erreichen.',
    high: 'Hervorragende Gewissenhaftigkeit. Sie sind diszipliniert, strukturiert und absolut zuverlässig. Ihre Fähigkeit, Ziele systematisch zu verfolgen und Aufgaben gründlich zu erledigen, ist eine außergewöhnliche Stärke.',
  },
  extraversion: {
    low: 'Ihre Extraversion ist gering ausgeprägt – Sie sind eher introvertiert und ziehen Energie aus der Stille und dem Alleinsein. Das ist keine Schwäche, aber es kann dazu führen, dass Ihre Ideen und Stärken im sozialen Umfeld weniger sichtbar werden. Gezielte Übungen in Selbstpräsentation könnten hier einen großen Unterschied machen.',
    mid: 'Ihre Extraversion liegt im mittleren Bereich. Sie können sowohl in Gruppen als auch allein gut arbeiten und treten situationsangemessen auf. Um Ihre Wirkung auf andere noch zu stärken, könnten Sie Ihre Initiative im sozialen Kontext bewusster ausbauen.',
    high: 'Ihre Extraversion ist eine klare Stärke. Sie sind gesellig, durchsetzungsfähig und kommunikationsstark. Ihre Fähigkeit, auf Menschen zuzugehen und andere mitzureißen, ist ein wertvolles Kapital.',
  },
  vertraeglichkeit: {
    low: 'Ihre Verträglichkeit ist aktuell gering ausgeprägt. Sie neigen dazu, eher wettbewerbsorientiert und skeptisch aufzutreten, was in Teamkontexten zu Reibungen führen kann. Ein bewussteres Einfühlen in andere Perspektiven könnte Ihre Beziehungen und Zusammenarbeit deutlich verbessern.',
    mid: 'Sie haben eine solide Grundlage an Verträglichkeit. Sie sind kooperativ und können sich in andere hineinversetzen, könnten aber Ihre Empathie und Ihr Vertrauen in andere noch weiter vertiefen, um noch tragfähigere Beziehungen aufzubauen.',
    high: 'Ausgezeichnete Verträglichkeit. Ihr Einfühlungsvermögen, Ihre Kooperationsbereitschaft und Ihr Vertrauen in andere schaffen ein Umfeld, in dem sich Menschen wohlfühlen und ihr Bestes geben können.',
  },
  stabilitaet: {
    low: 'Ihre emotionale Stabilität ist aktuell Ihr größtes Entwicklungsfeld. Sie erleben häufig Stress, Sorgen und Stimmungsschwankungen, die Ihre Leistungsfähigkeit und Ihr Wohlbefinden beeinträchtigen. Gezielte Strategien zur Emotionsregulation und Stressbewältigung könnten hier eine transformative Wirkung haben.',
    mid: 'Ihre emotionale Stabilität liegt im soliden Mittelfeld. Sie kommen mit den meisten Herausforderungen gut zurecht, könnten aber Ihre Resilienz und Gelassenheit noch weiter stärken, um auch in Hochdruckphasen Ihre innere Ruhe zu bewahren.',
    high: 'Beeindruckende emotionale Stabilität. Sie bleiben unter Druck gelassen, lassen sich von Rückschlägen nicht erschüttern und strahlen eine Ruhe aus, die Ihrem Umfeld Sicherheit gibt. Diese Eigenschaft ist ein starkes Fundament für alles Weitere.',
  },
}

export function getOceanDimensionFeedback(
  dimension: OceanDimension,
  score: number
): { level: string; text: string; color: 'teal' | 'gold' | 'secondary' } {
  if (score <= 33) {
    return { level: 'Entwicklungsfeld', text: oceanDimensionFeedback[dimension].low, color: 'secondary' }
  } else if (score <= 66) {
    return { level: 'Solide Basis', text: oceanDimensionFeedback[dimension].mid, color: 'gold' }
  } else {
    return { level: 'Klare Stärke', text: oceanDimensionFeedback[dimension].high, color: 'teal' }
  }
}
