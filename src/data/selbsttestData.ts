export type Dimension = 'selbstfuehrung' | 'kommunikation' | 'resilienz' | 'strategie'

export interface TestQuestion {
  id: number
  dimension: Dimension
  question: string
  options: { label: string; score: number }[]
}

export interface DimensionScores {
  selbstfuehrung: number
  kommunikation: number
  resilienz: number
  strategie: number
  total: number
}

export interface ProfileType {
  id: string
  name: string
  subtitle: string
  description: string
  strengths: string[]
  growthAreas: string[]
  coachingFocus: string
}

export interface DimensionInfo {
  key: Dimension
  label: string
  shortLabel: string
}

export const dimensions: DimensionInfo[] = [
  { key: 'selbstfuehrung', label: 'Selbstführung', shortLabel: 'Selbst-\nführung' },
  { key: 'kommunikation', label: 'Kommunikation & Wirkung', shortLabel: 'Kommuni-\nkation' },
  { key: 'resilienz', label: 'Resilienz & Stressmanagement', shortLabel: 'Resilienz' },
  { key: 'strategie', label: 'Strategische Klarheit', shortLabel: 'Strategische\nKlarheit' },
]

// ─── 12 Questions (3 per dimension) ───────────────────────────────

export const questions: TestQuestion[] = [
  // Selbstführung
  {
    id: 0,
    dimension: 'selbstfuehrung',
    question: 'Wie gehen Sie mit Ihren eigenen Emotionen in stressigen Führungssituationen um?',
    options: [
      { label: 'Ich reagiere oft impulsiv und bereue es später.', score: 1 },
      { label: 'Ich unterdrücke meine Emotionen, um professionell zu wirken.', score: 2 },
      { label: 'Ich nehme meine Emotionen wahr, brauche aber Zeit, um sie zu regulieren.', score: 3 },
      { label: 'Ich erkenne meine Emotionen früh und nutze sie als Informationsquelle.', score: 4 },
    ],
  },
  {
    id: 1,
    dimension: 'selbstfuehrung',
    question: 'Wie klar sind Ihnen Ihre persönlichen Werte und Prioritäten?',
    options: [
      { label: 'Ich handle meistens nach den Erwartungen anderer.', score: 1 },
      { label: 'Ich kenne meine Werte theoretisch, handle aber oft anders.', score: 2 },
      { label: 'Meine Werte sind mir bewusst und leiten die meisten meiner Entscheidungen.', score: 3 },
      { label: 'Ich habe ein klares Wertesystem, das ich bewusst lebe und regelmäßig reflektiere.', score: 4 },
    ],
  },
  {
    id: 2,
    dimension: 'selbstfuehrung',
    question: 'Wie gut können Sie zwischen dringend und wichtig unterscheiden?',
    options: [
      { label: 'Ich bin ständig im Feuerlösch-Modus.', score: 1 },
      { label: 'Ich weiß, was wichtig wäre, schaffe es aber selten umzusetzen.', score: 2 },
      { label: 'Ich nehme mir regelmäßig Zeit für strategische Aufgaben.', score: 3 },
      { label: 'Ich habe ein System, das mir täglich hilft, das Wesentliche zu priorisieren.', score: 4 },
    ],
  },

  // Kommunikation & Wirkung
  {
    id: 3,
    dimension: 'kommunikation',
    question: 'Wie reagiert Ihr Team, wenn Sie eine schwierige Entscheidung kommunizieren?',
    options: [
      { label: 'Oft entsteht Widerstand oder Verunsicherung.', score: 1 },
      { label: 'Sie akzeptieren es, aber ohne echtes Engagement.', score: 2 },
      { label: 'Sie verstehen meine Gründe und tragen die Entscheidung mit.', score: 3 },
      { label: 'Sie vertrauen meiner Einschätzung und setzen proaktiv um.', score: 4 },
    ],
  },
  {
    id: 4,
    dimension: 'kommunikation',
    question: 'Wie führen Sie schwierige Gespräche (Kritik, Konflikte, Kündigungen)?',
    options: [
      { label: 'Ich schiebe sie auf oder übergehe sie.', score: 1 },
      { label: 'Ich führe sie, finde aber selten den richtigen Ton.', score: 2 },
      { label: 'Ich bereite mich gut vor und führe sie sachlich.', score: 3 },
      { label: 'Ich führe sie klar, empathisch und lösungsorientiert. Sie stärken die Beziehung.', score: 4 },
    ],
  },
  {
    id: 5,
    dimension: 'kommunikation',
    question: 'Wie wird Ihre Führungswirkung von Ihrem Umfeld wahrgenommen?',
    options: [
      { label: 'Ich weiß es nicht genau und hole selten Feedback ein.', score: 1 },
      { label: 'Ich bekomme gemischtes Feedback, mal positiv, mal kritisch.', score: 2 },
      { label: 'Mein Team schätzt meine Führung und gibt mir das zurück.', score: 3 },
      { label: 'Ich werde als authentische, inspirierende Führungspersönlichkeit wahrgenommen.', score: 4 },
    ],
  },

  // Resilienz & Stressmanagement
  {
    id: 6,
    dimension: 'resilienz',
    question: 'Wie erholen Sie sich nach besonders belastenden Phasen?',
    options: [
      { label: 'Ich erhole mich kaum, die nächste Belastung kommt sofort.', score: 1 },
      { label: 'Ich brauche lange, um wieder aufzuladen, oft erst im Urlaub.', score: 2 },
      { label: 'Ich habe einzelne Routinen, die mir helfen (Sport, Natur).', score: 3 },
      { label: 'Ich habe ein bewusstes Regenerationssystem, das ich täglich einsetze.', score: 4 },
    ],
  },
  {
    id: 7,
    dimension: 'resilienz',
    question: 'Wie reagieren Sie auf unerwartete Rückschläge oder Krisen?',
    options: [
      { label: 'Ich gerate in Panik oder friere ein.', score: 1 },
      { label: 'Ich bin angespannt, funktioniere aber weiter.', score: 2 },
      { label: 'Ich bleibe ruhig und erarbeite einen Plan.', score: 3 },
      { label: 'Ich sehe Krisen als Chance, wachse daran und inspiriere mein Team.', score: 4 },
    ],
  },
  {
    id: 8,
    dimension: 'resilienz',
    question: 'Wie gut setzen Sie Grenzen zwischen Beruf und Privatleben?',
    options: [
      { label: 'Grenzen existieren praktisch nicht, ich bin immer erreichbar.', score: 1 },
      { label: 'Ich versuche es, aber die Arbeit gewinnt meist.', score: 2 },
      { label: 'Ich habe feste Zeiten, die ich meistens einhalte.', score: 3 },
      { label: 'Ich habe klare Grenzen und lebe sie konsequent ohne schlechtes Gewissen.', score: 4 },
    ],
  },

  // Strategische Klarheit
  {
    id: 9,
    dimension: 'strategie',
    question: 'Wie klar ist Ihre strategische Vision für die nächsten zwei bis drei Jahre?',
    options: [
      { label: 'Ich habe keine klare Vision. Ich reagiere auf das, was kommt.', score: 1 },
      { label: 'Ich habe vage Vorstellungen, aber keinen konkreten Plan.', score: 2 },
      { label: 'Ich habe eine Vision und arbeite aktiv daran, sie umzusetzen.', score: 3 },
      { label: 'Ich habe eine kristallklare Vision, die mein Team kennt und teilt.', score: 4 },
    ],
  },
  {
    id: 10,
    dimension: 'strategie',
    question: 'Wie treffen Sie weitreichende Entscheidungen?',
    options: [
      { label: 'Ich zögere lange und entscheide dann unter Druck.', score: 1 },
      { label: 'Ich sammle viele Meinungen, bin aber oft unsicher.', score: 2 },
      { label: 'Ich analysiere systematisch und entscheide fundiert.', score: 3 },
      { label: 'Ich kombiniere Analyse, Intuition und Stakeholder-Input zu klaren Entscheidungen.', score: 4 },
    ],
  },
  {
    id: 11,
    dimension: 'strategie',
    question: 'Wie gut gelingt es Ihnen, Ihr Team auf gemeinsame Ziele auszurichten?',
    options: [
      { label: 'Jeder arbeitet eher für sich, echte Ausrichtung fehlt.', score: 1 },
      { label: 'Die Ziele sind bekannt, aber die Umsetzung ist fragmentiert.', score: 2 },
      { label: 'Mein Team kennt die Richtung und arbeitet koordiniert.', score: 3 },
      { label: 'Wir haben ein gemeinsames Zielbild, das jeder verinnerlicht hat und eigenverantwortlich umsetzt.', score: 4 },
    ],
  },
]

// ─── Scoring Logic ────────────────────────────────────────────────

const dimensionQuestions: Record<Dimension, number[]> = {
  selbstfuehrung: [0, 1, 2],
  kommunikation: [3, 4, 5],
  resilienz: [6, 7, 8],
  strategie: [9, 10, 11],
}

export function calculateScores(answers: Record<number, number>): DimensionScores {
  let total = 0
  const scores: Record<string, number> = {}

  for (const [dim, indices] of Object.entries(dimensionQuestions)) {
    const rawSum = indices.reduce((sum, i) => sum + (answers[i] || 1), 0)
    total += rawSum
    // Normalize: raw 3-12 → 0-100
    scores[dim] = Math.round(((rawSum - 3) / 9) * 100)
  }

  return {
    selbstfuehrung: scores.selbstfuehrung,
    kommunikation: scores.kommunikation,
    resilienz: scores.resilienz,
    strategie: scores.strategie,
    total,
  }
}

// ─── Profile Types ────────────────────────────────────────────────

export const profileTypes: ProfileType[] = [
  {
    id: 'strategist',
    name: 'Der Strategische Visionär',
    subtitle: 'Ihr größtes Talent: Die Zukunft gestalten',
    description:
      'Sie denken in Systemen und sehen Zusammenhänge, die anderen verborgen bleiben. Ihre strategische Klarheit ist Ihre größte Führungsstärke. Sie geben Richtung, wo andere Orientierung suchen.',
    strengths: ['Langfristiges Denken', 'Entscheidungskompetenz', 'Zielorientierung'],
    growthAreas: ['Emotionale Nähe zum Team', 'Geduld im operativen Alltag'],
    coachingFocus:
      'Im Coaching würden wir Ihre strategische Stärke mit emotionaler Resonanz verbinden, damit Ihre Vision nicht nur klar, sondern auch mitreißend wird.',
  },
  {
    id: 'communicator',
    name: 'Die Empathische Führungskraft',
    subtitle: 'Ihr größtes Talent: Menschen bewegen',
    description:
      'Sie führen durch Beziehung und Vertrauen. Ihr Team folgt Ihnen, weil es sich verstanden fühlt. Diese Fähigkeit ist selten und in der heutigen Arbeitswelt enorm wertvoll.',
    strengths: ['Kommunikative Stärke', 'Vertrauensaufbau', 'Konfliktlösung'],
    growthAreas: ['Strategische Schärfe', 'Abgrenzung und Selbstfürsorge'],
    coachingFocus:
      'Im Coaching würden wir Ihre kommunikative Stärke nutzen und gleichzeitig strategische Klarheit und gesunde Grenzen entwickeln.',
  },
  {
    id: 'resilient',
    name: 'Der Belastbare Anker',
    subtitle: 'Ihr größtes Talent: Stabilität unter Druck',
    description:
      'Wenn andere die Nerven verlieren, bleiben Sie ruhig. Ihre innere Stabilität gibt Ihrem Umfeld Sicherheit und Orientierung, besonders in turbulenten Zeiten.',
    strengths: ['Stressresistenz', 'Emotionale Regulation', 'Krisenmanagement'],
    growthAreas: ['Proaktive Gestaltung', 'Sichtbarkeit der eigenen Leistung'],
    coachingFocus:
      'Im Coaching würden wir Ihre natürliche Resilienz in proaktive Gestaltungskraft umwandeln, damit Sie nicht nur reagieren, sondern vorangehen.',
  },
  {
    id: 'selfleader',
    name: 'Der Reflektierte Leader',
    subtitle: 'Ihr größtes Talent: Sich selbst führen',
    description:
      'Sie kennen sich selbst besser als die meisten Führungskräfte. Dieses Selbstbewusstsein ist das Fundament für authentische, wertebasierte Führung auf höchstem Niveau.',
    strengths: ['Selbstreflexion', 'Werteklare Führung', 'Authentizität'],
    growthAreas: ['Außen- und Teamwirkung', 'Strategische Durchsetzung'],
    coachingFocus:
      'Im Coaching würden wir Ihre innere Klarheit in sichtbare Führungswirkung übersetzen, damit Ihr Team und Ihr Umfeld davon profitieren.',
  },
  {
    id: 'allrounder',
    name: 'Die Vielseitige Führungspersönlichkeit',
    subtitle: 'Ihr größtes Talent: Balance auf allen Ebenen',
    description:
      'Sie zeigen in allen Bereichen solide Stärken. Das ist eine seltene Qualität, die Ihnen erlaubt, sich gezielt in einem Bereich zur Spitzenklasse zu entwickeln.',
    strengths: ['Ausgewogenes Profil', 'Vielseitigkeit', 'Anpassungsfähigkeit'],
    growthAreas: ['Vertiefung in einem Schwerpunkt', 'Einzigartiger Führungsstil'],
    coachingFocus:
      'Im Coaching würden wir herausarbeiten, in welchem Bereich Sie Ihr einzigartiges Führungsprofil noch schärfen können: vom Generalisten zum Spezialisten.',
  },
  {
    id: 'developing',
    name: 'Die Wachsende Führungskraft',
    subtitle: 'Ihr größtes Talent: Bereitschaft zur Veränderung',
    description:
      'Die Tatsache, dass Sie diesen Test gemacht haben, zeigt Ihre Bereitschaft zur Entwicklung. Das ist der wichtigste erste Schritt auf dem Weg zu exzellenter Führung.',
    strengths: ['Lernbereitschaft', 'Offenheit', 'Entwicklungspotenzial'],
    growthAreas: ['Alle vier Dimensionen bieten Wachstumspotenzial'],
    coachingFocus:
      'Im Coaching würden wir gemeinsam Ihren wichtigsten Hebelpunkt identifizieren und dort gezielt ansetzen: für schnelle, sichtbare Veränderung.',
  },
]

export function getProfileType(scores: DimensionScores): ProfileType {
  const { selbstfuehrung, kommunikation, resilienz, strategie, total } = scores

  // Low total score → developing profile
  if (total <= 24) return profileTypes.find((p) => p.id === 'developing')!

  // Balanced profile (all within 15 points of each other)
  const vals = [selbstfuehrung, kommunikation, resilienz, strategie]
  const range = Math.max(...vals) - Math.min(...vals)
  if (range <= 15 && total > 24) return profileTypes.find((p) => p.id === 'allrounder')!

  // Dominant dimension
  const max = Math.max(...vals)
  if (strategie === max) return profileTypes.find((p) => p.id === 'strategist')!
  if (kommunikation === max) return profileTypes.find((p) => p.id === 'communicator')!
  if (resilienz === max) return profileTypes.find((p) => p.id === 'resilient')!
  if (selbstfuehrung === max) return profileTypes.find((p) => p.id === 'selfleader')!

  return profileTypes.find((p) => p.id === 'allrounder')!
}

// ─── Dimension Feedback ───────────────────────────────────────────

const dimensionFeedback: Record<Dimension, { low: string; mid: string; high: string }> = {
  selbstfuehrung: {
    low: 'Ihre Selbstführung hat das größte Entwicklungspotenzial. Sie reagieren oft auf äußere Impulse, statt aus innerer Klarheit heraus zu handeln. Eine bewusste Auseinandersetzung mit Ihren Werten und Emotionen könnte Ihre gesamte Führung transformieren.',
    mid: 'Sie verfügen über ein gutes Fundament in der Selbstführung. Sie kennen Ihre Stärken, könnten aber Ihre emotionale Selbstregulation und Werteklarheit noch vertiefen, um konsistenter zu führen.',
    high: 'Exzellente Selbstführung. Sie kennen sich selbst gut, handeln wertebasiert und regulieren Ihre Emotionen souverän. Diese innere Klarheit ist das Fundament Ihrer Führungsstärke.',
  },
  kommunikation: {
    low: 'Ihre Kommunikation und Außenwirkung bieten den größten Hebel für Veränderung. Schwierige Gespräche, klare Botschaften und echte Präsenz können erlernt werden, mit messbarem Effekt auf Ihr gesamtes Umfeld.',
    mid: 'Ihre Kommunikation ist solide, aber es gibt Potenzial für mehr Wirkung. Besonders in schwierigen Gesprächen und bei der authentischen Vermittlung Ihrer Botschaften können Sie noch wachsen.',
    high: 'Herausragende Kommunikationsstärke. Sie führen durch Worte und Präsenz, schaffen Vertrauen und bewegen Menschen. Ihr Team weiß, woran es bei Ihnen ist.',
  },
  resilienz: {
    low: 'Ihre Resilienz ist aktuell Ihr größtes Entwicklungsfeld. Der permanente Druck zehrt an Ihren Ressourcen. Gezielte Regenerationsstrategien und gesunde Grenzen könnten Ihre Leistungsfähigkeit nachhaltig sichern.',
    mid: 'Ihre Resilienz ist im guten Bereich, aber noch ausbaufähig. Sie haben einzelne Strategien, könnten aber ein systematisches Regenerationssystem aufbauen, das Sie auch in Hochphasen trägt.',
    high: 'Beeindruckende Resilienz. Sie haben gelernt, unter Druck nicht nur zu bestehen, sondern zu wachsen. Ihre Gelassenheit gibt Ihrem Umfeld Stabilität und Orientierung.',
  },
  strategie: {
    low: 'Strategische Klarheit ist aktuell Ihr größtes Wachstumsfeld. Ohne klare Vision fehlt Ihrem Handeln die Richtung. Ein systematischer Ansatz zur Zielfindung und Entscheidungsfindung könnte hier viel bewegen.',
    mid: 'Sie haben eine strategische Grundorientierung, könnten aber Ihre Vision schärfen und Ihr Team stärker auf gemeinsame Ziele ausrichten. Systematische Entscheidungsprozesse würden Ihnen Sicherheit geben.',
    high: 'Ausgezeichnete strategische Klarheit. Sie wissen, wohin die Reise geht, treffen fundierte Entscheidungen und richten Ihr Team konsequent auf die gemeinsame Vision aus.',
  },
}

export function getDimensionFeedback(
  dimension: Dimension,
  score: number
): { level: string; text: string; color: 'teal' | 'gold' | 'secondary' } {
  if (score <= 33) {
    return { level: 'Entwicklungsfeld', text: dimensionFeedback[dimension].low, color: 'secondary' }
  } else if (score <= 66) {
    return { level: 'Solide Basis', text: dimensionFeedback[dimension].mid, color: 'gold' }
  } else {
    return { level: 'Klare Stärke', text: dimensionFeedback[dimension].high, color: 'teal' }
  }
}
