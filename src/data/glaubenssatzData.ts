export type GlaubenssatzDimension =
  | 'self_worth'
  | 'achievement'
  | 'relationships'
  | 'change'
  | 'control'
  | 'emotions'

export interface GlaubenssatzQuestion {
  id: number
  dimension: GlaubenssatzDimension
  question: string
}

export interface GlaubenssatzDimensionScores {
  self_worth: number
  achievement: number
  relationships: number
  change: number
  control: number
  emotions: number
  total: number
}

export interface GlaubenssatzProfileType {
  id: string
  name: string
  subtitle: string
  description: string
  primaryAreas: string[]
  recommendation: string
}

export interface GlaubenssatzDimensionInfo {
  key: GlaubenssatzDimension
  label: string
  shortLabel: string
}

export const glaubenssatzDimensions: GlaubenssatzDimensionInfo[] = [
  { key: 'self_worth', label: 'Selbstwert', shortLabel: 'Selbst-\nwert' },
  { key: 'achievement', label: 'Leistung & Perfektionismus', shortLabel: 'Leistung' },
  { key: 'relationships', label: 'Beziehungen & Vertrauen', shortLabel: 'Beziehungen' },
  { key: 'change', label: 'Veränderung & Wachstum', shortLabel: 'Veränderung' },
  { key: 'control', label: 'Kontrolle & Sicherheit', shortLabel: 'Kontrolle' },
  { key: 'emotions', label: 'Emotionen & Ausdruck', shortLabel: 'Emotionen' },
]

export const LIKERT_LABELS = ['Gar nicht', 'Wenig', 'Teils/teils', 'Stark', 'Voll und ganz']

// ─── 24 Questions (4 per dimension, Likert 1-5) ─────────────

export const glaubenssatzQuestions: GlaubenssatzQuestion[] = [
  // Selbstwert
  {
    id: 0,
    dimension: 'self_worth',
    question: 'Ich habe oft das Gefühl, nicht gut genug für bestimmte Aufgaben oder Rollen zu sein.',
  },
  {
    id: 1,
    dimension: 'self_worth',
    question: 'Ich glaube, dass andere Menschen grundsätzlich kompetenter sind als ich.',
  },
  {
    id: 2,
    dimension: 'self_worth',
    question: 'Ich muss mich ständig beweisen, um Anerkennung zu verdienen.',
  },
  {
    id: 3,
    dimension: 'self_worth',
    question: 'Meine Meinung ist weniger wert als die anderer.',
  },

  // Leistung & Perfektionismus
  {
    id: 4,
    dimension: 'achievement',
    question: 'Nur wenn ich alles perfekt mache, werde ich von anderen akzeptiert.',
  },
  {
    id: 5,
    dimension: 'achievement',
    question: 'Fehler zu machen ist für mich ein Zeichen von Schwäche.',
  },
  {
    id: 6,
    dimension: 'achievement',
    question: 'Ich muss immer 100% geben, sonst bin ich faul.',
  },
  {
    id: 7,
    dimension: 'achievement',
    question: 'Wahren Erfolg erreicht man nur durch Aufopferung.',
  },

  // Beziehungen & Vertrauen
  {
    id: 8,
    dimension: 'relationships',
    question: 'Wenn ich mich verletzlich zeige, wird das gegen mich verwendet.',
  },
  {
    id: 9,
    dimension: 'relationships',
    question: 'Ich muss die wichtigen Dinge im Leben alleine schaffen.',
  },
  {
    id: 10,
    dimension: 'relationships',
    question: 'Andere Menschen enttäuschen mich am Ende immer.',
  },
  {
    id: 11,
    dimension: 'relationships',
    question: 'Echte Nähe zu anderen bedeutet Abhängigkeit.',
  },

  // Veränderung & Wachstum
  {
    id: 12,
    dimension: 'change',
    question: 'Ich bin halt so, wie ich bin. Grundsätzlich ändern kann ich mich nicht.',
  },
  {
    id: 13,
    dimension: 'change',
    question: 'Es ist zu spät für mich, um etwas wirklich Neues anzufangen.',
  },
  {
    id: 14,
    dimension: 'change',
    question: 'Veränderung bringt mehr Risiken als Chancen.',
  },
  {
    id: 15,
    dimension: 'change',
    question: 'Ich habe schon alles versucht. Nichts funktioniert bei mir.',
  },

  // Kontrolle & Sicherheit
  {
    id: 16,
    dimension: 'control',
    question: 'Ich muss alles unter Kontrolle haben, damit nichts schiefgeht.',
  },
  {
    id: 17,
    dimension: 'control',
    question: 'Wenn ich loslasse, wird alles zusammenbrechen.',
  },
  {
    id: 18,
    dimension: 'control',
    question: 'Sicherheit ist mir wichtiger als Erfüllung oder Abenteuer.',
  },
  {
    id: 19,
    dimension: 'control',
    question: 'Ich kann dem Leben und dem Zufall nicht vertrauen.',
  },

  // Emotionen & Ausdruck
  {
    id: 20,
    dimension: 'emotions',
    question: 'Starke Gefühle zu zeigen ist ein Zeichen von Schwäche.',
  },
  {
    id: 21,
    dimension: 'emotions',
    question: 'Ich sollte meine Emotionen besser unter Kontrolle haben.',
  },
  {
    id: 22,
    dimension: 'emotions',
    question: 'Wenn ich zeige, wie ich mich wirklich fühle, bin ich angreifbar.',
  },
  {
    id: 23,
    dimension: 'emotions',
    question: 'Negative Gefühle muss ich verdrängen oder überwinden.',
  },
]

// ─── Scoring Logic ───────────────────────────────────────────

const dimensionQuestions: Record<GlaubenssatzDimension, number[]> = {
  self_worth: [0, 1, 2, 3],
  achievement: [4, 5, 6, 7],
  relationships: [8, 9, 10, 11],
  change: [12, 13, 14, 15],
  control: [16, 17, 18, 19],
  emotions: [20, 21, 22, 23],
}

export function calculateGlaubenssatzScores(
  answers: Record<number, number>
): GlaubenssatzDimensionScores {
  let total = 0
  const scores: Record<string, number> = {}

  for (const [dim, indices] of Object.entries(dimensionQuestions)) {
    const rawSum = indices.reduce((sum, i) => sum + (answers[i] || 1), 0)
    total += rawSum
    // Normalize: raw 4-20 → 0-100
    scores[dim] = Math.round(((rawSum - 4) / 16) * 100)
  }

  return {
    self_worth: scores.self_worth,
    achievement: scores.achievement,
    relationships: scores.relationships,
    change: scores.change,
    control: scores.control,
    emotions: scores.emotions,
    total,
  }
}

// ─── Profile Types ───────────────────────────────────────────

export const glaubenssatzProfiles: GlaubenssatzProfileType[] = [
  {
    id: 'free',
    name: 'Der Freie Denker',
    subtitle: 'Wenige limitierende Überzeugungen aktiv',
    description:
      'Deine Glaubenssätze halten dich kaum zurück. Du hast bereits einen gesunden Abstand zu inneren Überzeugungen entwickelt und kannst dich relativ frei entfalten. Die wenigen aktiven Muster lassen sich gezielt bearbeiten.',
    primaryAreas: ['Hohe innere Freiheit', 'Geringe Blockaden', 'Starke Selbstreflexion'],
    recommendation:
      'Im Coaching könnten wir gezielt an den verbleibenden Mustern arbeiten und deine Stärken weiter ausbauen.',
  },
  {
    id: 'selective',
    name: 'Der Selektiv Gebundene',
    subtitle: 'Einzelne Bereiche mit aktiven Mustern',
    description:
      'In bestimmten Lebensbereichen wirken limitierende Überzeugungen stärker als in anderen. Dieses Profil ist typisch: Du hast in manchen Bereichen bereits gute Arbeit geleistet, während andere noch Aufmerksamkeit brauchen.',
    primaryAreas: ['Klare Schwerpunkte erkennbar', 'Gezielte Arbeit möglich', 'Gute Ausgangslage'],
    recommendation:
      'Im Coaching würden wir gezielt an den 1 bis 2 aktivsten Bereichen arbeiten, um die größte Wirkung zu erzielen.',
  },
  {
    id: 'broad',
    name: 'Der Breit Beeinflusste',
    subtitle: 'Mehrere Bereiche mit aktiven Glaubenssätzen',
    description:
      'Limitierende Überzeugungen wirken in mehreren Lebensbereichen gleichzeitig. Das ist kein Grund zur Sorge. Es zeigt, dass tiefer liegende Kernüberzeugungen verschiedene Bereiche gleichzeitig beeinflussen. Die Arbeit an einem Kernthema kann mehrere Bereiche gleichzeitig verbessern.',
    primaryAreas: ['Tiefere Kernthemen sichtbar', 'Großes Veränderungspotenzial', 'Systemische Muster'],
    recommendation:
      'Im Coaching würden wir zuerst das zentrale Kernthema identifizieren, das mehrere Bereiche verbindet, und dort ansetzen.',
  },
  {
    id: 'deep',
    name: 'Der Tief Verwurzelte',
    subtitle: 'Starke innere Überzeugungen in vielen Bereichen',
    description:
      'Du trägst tief verankerte Überzeugungen mit dir, die dein Denken und Handeln in vielen Bereichen prägen. Die Tatsache, dass du diesen Test machst, zeigt deine Bereitschaft zur Veränderung. Das ist der wichtigste Schritt. Veränderung ist möglich, Schritt für Schritt.',
    primaryAreas: ['Starke Bereitschaft zur Veränderung', 'Großes Transformationspotenzial', 'Mut zur Ehrlichkeit'],
    recommendation:
      'Im Coaching würden wir behutsam und strukturiert vorgehen. Kleine Schritte, regelmäßige Reflexion, und die Erfahrung, dass Veränderung real ist.',
  },
]

export function getGlaubenssatzProfile(scores: GlaubenssatzDimensionScores): GlaubenssatzProfileType {
  const vals = [
    scores.self_worth,
    scores.achievement,
    scores.relationships,
    scores.change,
    scores.control,
    scores.emotions,
  ]
  const avg = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)

  if (avg <= 25) return glaubenssatzProfiles.find((p) => p.id === 'free')!
  if (avg <= 50) return glaubenssatzProfiles.find((p) => p.id === 'selective')!
  if (avg <= 75) return glaubenssatzProfiles.find((p) => p.id === 'broad')!
  return glaubenssatzProfiles.find((p) => p.id === 'deep')!
}

// ─── Dimension Feedback ──────────────────────────────────────

const dimensionFeedback: Record<
  GlaubenssatzDimension,
  { low: { title: string; text: string }; mid: { title: string; text: string }; high: { title: string; text: string } }
> = {
  self_worth: {
    low: {
      title: 'Stabiles Selbstwertgefühl',
      text: 'Dein Selbstwert ist gut verankert. Du erkennst deinen eigenen Wert an und lässt dich nicht leicht verunsichern. Halte diese innere Stärke aufrecht.',
    },
    mid: {
      title: 'Selbstwert mit Schwankungen',
      text: 'In manchen Situationen zweifelst du an deinem Wert. Achte darauf, in welchen Kontexten das besonders auftritt. Übung: Schreibe abends drei Dinge auf, die du heute gut gemacht hast.',
    },
    high: {
      title: 'Limitierende Selbstwert-Muster aktiv',
      text: 'Hier liegen tief verankerte Überzeugungen, die dich bremsen. Dein innerer Kritiker hat eine laute Stimme. Wichtig: Diese Überzeugungen sind nicht die Wahrheit, sondern Muster, die du verändern kannst.',
    },
  },
  achievement: {
    low: {
      title: 'Gesunder Leistungsanspruch',
      text: 'Du hast ein ausgewogenes Verhältnis zu Leistung. Du kannst Fehler akzeptieren und siehst sie als Lernchance. Diese Haltung ist eine echte Stärke.',
    },
    mid: {
      title: 'Perfektionistische Tendenzen',
      text: 'In einigen Bereichen treibt dich Perfektionismus an, manchmal über gesunde Grenzen hinaus. Frage dich: Was ist "gut genug"? Übung: Erledige eine Aufgabe diese Woche bewusst nur zu 80% und beobachte, was passiert.',
    },
    high: {
      title: 'Starker Perfektionismus',
      text: 'Perfektionismus kontrolliert viele deiner Entscheidungen. Der ständige Druck, fehlerfrei zu sein, kostet enorm viel Energie. Erlaube dir, Fehler als natürlichen Teil des Wachstums zu sehen.',
    },
  },
  relationships: {
    low: {
      title: 'Offenheit in Beziehungen',
      text: 'Du bist in der Lage, dich anderen zu öffnen und Vertrauen aufzubauen. Beziehungen sind für dich eine Quelle der Stärke. Das ist eine wertvolle Grundlage.',
    },
    mid: {
      title: 'Vorsichtige Beziehungsgestaltung',
      text: 'Du bist in Beziehungen eher zurückhaltend und hältst eine gewisse Distanz. Überlege, welche früheren Erfahrungen dieses Muster geformt haben. Übung: Teile einer Vertrauensperson etwas mit, das du normalerweise für dich behältst.',
    },
    high: {
      title: 'Starke Vertrauensbarrieren',
      text: 'Tiefe Beziehungen fallen dir schwer, weil du dich vor Verletzung schützt. Das ist nachvollziehbar, schränkt aber dein Leben erheblich ein. Beginne in kleinen Schritten: Vertraue einer Person etwas Kleines an.',
    },
  },
  change: {
    low: {
      title: 'Offenheit für Wachstum',
      text: 'Du glaubst an deine Fähigkeit, dich zu verändern und zu wachsen. Diese Wachstumsmentalität ist einer der stärksten Prädiktoren für langfristigen Erfolg.',
    },
    mid: {
      title: 'Ambivalenz gegenüber Veränderung',
      text: 'Ein Teil von dir möchte sich verändern, ein anderer Teil hält an der Komfortzone fest. Übung: Starte ein kleines Experiment. Verändere eine Gewohnheit für 7 Tage und dokumentiere, wie es sich anfühlt.',
    },
    high: {
      title: 'Fixed Mindset aktiv',
      text: 'Du hast die Überzeugung verinnerlicht, dass Veränderung kaum möglich ist. Diese Haltung ist selbst ein Glaubenssatz, der sich überprüfen lässt. Frage dich: "Wenn ich die Möglichkeit hätte, mich in einem Bereich zu verändern, welcher wäre das?"',
    },
  },
  control: {
    low: {
      title: 'Gelassener Umgang mit Unsicherheit',
      text: 'Du kannst gut mit Ungewissheit umgehen und vertraust darauf, dass du Herausforderungen meistern wirst. Diese Flexibilität macht dich widerstandsfähig.',
    },
    mid: {
      title: 'Kontrollbedürfnis in bestimmten Bereichen',
      text: 'In manchen Lebensbereichen fällt es dir schwer, die Kontrolle abzugeben. Identifiziere diese Bereiche. Übung: Lass diese Woche bewusst eine Kleinigkeit geschehen, ohne einzugreifen.',
    },
    high: {
      title: 'Starkes Kontrollbedürfnis',
      text: 'Der Wunsch nach Kontrolle dominiert viele deiner Entscheidungen und kostet dich Spontanität und Lebensfreude. Die Wahrheit ist: Absolute Kontrolle ist eine Illusion.',
    },
  },
  emotions: {
    low: {
      title: 'Emotionale Offenheit',
      text: 'Du hast einen gesunden Zugang zu deinen Emotionen und kannst sie ausdrücken. Das ist die Grundlage für emotionale Intelligenz und authentische Beziehungen.',
    },
    mid: {
      title: 'Eingeschränkter emotionaler Ausdruck',
      text: 'In manchen Situationen hältst du deine Gefühle zurück, weil du dich verletzlich fühlst. Übung: Benenne dreimal am Tag ein Gefühl, das du gerade spürst. Nur benennen, nicht bewerten.',
    },
    high: {
      title: 'Emotionale Blockaden',
      text: 'Du hast gelernt, Emotionen als Bedrohung wahrzunehmen. Das schützt dich kurzfristig, trennt dich aber langfristig von dir selbst und anderen. Gefühle sind Informationen, keine Schwäche.',
    },
  },
}

export function getGlaubenssatzFeedback(
  dimension: GlaubenssatzDimension,
  score: number
): { level: string; title: string; text: string; color: 'teal' | 'gold' | 'secondary' } {
  if (score <= 33) {
    const fb = dimensionFeedback[dimension].low
    return { level: 'Klare Stärke', title: fb.title, text: fb.text, color: 'teal' }
  } else if (score <= 66) {
    const fb = dimensionFeedback[dimension].mid
    return { level: 'Teilweise aktiv', title: fb.title, text: fb.text, color: 'gold' }
  } else {
    const fb = dimensionFeedback[dimension].high
    return { level: 'Stark aktiv', title: fb.title, text: fb.text, color: 'secondary' }
  }
}

// ─── localStorage helpers ────────────────────────────────────

export const GLAUBENSSATZ_STORAGE_KEY = 'dt_coaching_beliefs_results'

export interface SavedGlaubenssatzResult {
  date: string
  scores: GlaubenssatzDimensionScores
}

export function saveGlaubenssatzResult(scores: GlaubenssatzDimensionScores): void {
  const saved = getSavedGlaubenssatzResults()
  saved.push({ date: new Date().toISOString(), scores })
  try {
    localStorage.setItem(GLAUBENSSATZ_STORAGE_KEY, JSON.stringify(saved))
  } catch {
    // Storage full or unavailable
  }
}

export function getSavedGlaubenssatzResults(): SavedGlaubenssatzResult[] {
  try {
    const raw = localStorage.getItem(GLAUBENSSATZ_STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw)
  } catch {
    return []
  }
}
