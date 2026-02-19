export type StressCategory = 'koerper' | 'gedanken' | 'verhalten' | 'emotion' | 'arbeit'

export interface StressQuestion {
  id: number
  category: StressCategory
  question: string
  options: { label: string; score: number }[]
}

export interface CategoryInfo {
  key: StressCategory
  label: string
  shortLabel: string
}

export type StressLevel = 'gruen' | 'gelb' | 'rot'

export interface StressResult {
  level: StressLevel
  title: string
  subtitle: string
  description: string
  recommendations: string[]
  coachingHint: string
}

export interface CategoryScores {
  koerper: number
  gedanken: number
  verhalten: number
  emotion: number
  arbeit: number
  total: number
}

export const categories: CategoryInfo[] = [
  { key: 'koerper', label: 'Körperliche Signale', shortLabel: 'Körper' },
  { key: 'gedanken', label: 'Gedankenmuster', shortLabel: 'Gedanken' },
  { key: 'verhalten', label: 'Verhaltensänderungen', shortLabel: 'Verhalten' },
  { key: 'emotion', label: 'Emotionale Balance', shortLabel: 'Emotionen' },
  { key: 'arbeit', label: 'Arbeitsbelastung', shortLabel: 'Arbeit' },
]

// 10 questions (2 per category)
export const questions: StressQuestion[] = [
  // Körperliche Signale
  {
    id: 0,
    category: 'koerper',
    question: 'Wie gut schlafen Sie in den letzten Wochen?',
    options: [
      { label: 'Ich schlafe gut durch und fühle mich ausgeruht.', score: 1 },
      { label: 'Ab und zu wache ich nachts auf, kann aber wieder einschlafen.', score: 2 },
      { label: 'Ich habe regelmäßig Einschlaf- oder Durchschlafprobleme.', score: 3 },
      { label: 'Ich schlafe schlecht, grüble viel und bin morgens erschöpft.', score: 4 },
    ],
  },
  {
    id: 1,
    category: 'koerper',
    question: 'Wie häufig erleben Sie körperliche Stresssymptome (Verspannungen, Kopfschmerzen, Magenprobleme)?',
    options: [
      { label: 'Selten oder nie.', score: 1 },
      { label: 'Gelegentlich, besonders in stressigen Phasen.', score: 2 },
      { label: 'Mehrmals pro Woche.', score: 3 },
      { label: 'Fast täglich, sie beeinträchtigen meinen Alltag.', score: 4 },
    ],
  },

  // Gedankenmuster
  {
    id: 2,
    category: 'gedanken',
    question: 'Wie oft kreisen Ihre Gedanken abends um berufliche Themen?',
    options: [
      { label: 'Ich kann nach der Arbeit gut abschalten.', score: 1 },
      { label: 'Manchmal denke ich noch an einzelne Aufgaben.', score: 2 },
      { label: 'Regelmäßig beschäftigen mich berufliche Sorgen bis in den Abend.', score: 3 },
      { label: 'Mein Kopf kommt kaum zur Ruhe, auch am Wochenende nicht.', score: 4 },
    ],
  },
  {
    id: 3,
    category: 'gedanken',
    question: 'Wie gehen Sie mit Fehlern oder Rückschlägen um?',
    options: [
      { label: 'Ich sehe sie als Lernchance und gehe konstruktiv damit um.', score: 1 },
      { label: 'Sie beschäftigen mich kurz, aber ich kann sie einordnen.', score: 2 },
      { label: 'Ich neige dazu, mir Vorwürfe zu machen und grüble länger darüber.', score: 3 },
      { label: 'Fehler lösen bei mir starke Selbstzweifel und Versagensängste aus.', score: 4 },
    ],
  },

  // Verhaltensänderungen
  {
    id: 4,
    category: 'verhalten',
    question: 'Wie hat sich Ihr Freizeitverhalten in den letzten Monaten verändert?',
    options: [
      { label: 'Ich pflege aktiv Hobbys und soziale Kontakte.', score: 1 },
      { label: 'Ich mache noch einiges, aber weniger als früher.', score: 2 },
      { label: 'Mir fehlt oft die Energie für Aktivitäten außerhalb der Arbeit.', score: 3 },
      { label: 'Ich habe mich stark zurückgezogen und kaum noch Ausgleich.', score: 4 },
    ],
  },
  {
    id: 5,
    category: 'verhalten',
    question: 'Wie gehen Sie mit Ihren Grenzen um, wenn viel von Ihnen erwartet wird?',
    options: [
      { label: 'Ich setze klare Grenzen und kommuniziere sie.', score: 1 },
      { label: 'Ich versuche Grenzen zu setzen, gebe aber oft nach.', score: 2 },
      { label: 'Ich übernehme zu viel und merke es erst, wenn ich erschöpft bin.', score: 3 },
      { label: 'Ich sage grundsätzlich ja und überfordere mich regelmäßig.', score: 4 },
    ],
  },

  // Emotionale Balance
  {
    id: 6,
    category: 'emotion',
    question: 'Wie beschreiben Sie Ihre Grundstimmung im Alltag?',
    options: [
      { label: 'Überwiegend positiv und ausgeglichen.', score: 1 },
      { label: 'Wechselhaft, aber insgesamt in Ordnung.', score: 2 },
      { label: 'Oft gereizt, angespannt oder niedergeschlagen.', score: 3 },
      { label: 'Ich fühle mich emotional leer oder überfordert.', score: 4 },
    ],
  },
  {
    id: 7,
    category: 'emotion',
    question: 'Wie reagieren Sie, wenn unerwartete Probleme auftreten?',
    options: [
      { label: 'Ich bleibe ruhig und suche lösungsorientiert nach Wegen.', score: 1 },
      { label: 'Ich bin kurz gestresst, fange mich aber schnell.', score: 2 },
      { label: 'Ich reagiere zunehmend gereizt und brauche lange zur Regulation.', score: 3 },
      { label: 'Schon Kleinigkeiten bringen mich an meine Grenzen.', score: 4 },
    ],
  },

  // Arbeitsbelastung
  {
    id: 8,
    category: 'arbeit',
    question: 'Wie empfinden Sie Ihre aktuelle Arbeitsbelastung?',
    options: [
      { label: 'Gut bewältigbar, ich habe einen gesunden Rhythmus.', score: 1 },
      { label: 'Phasenweise hoch, aber ich kann es managen.', score: 2 },
      { label: 'Dauerhaft hoch, ich komme selten wirklich hinterher.', score: 3 },
      { label: 'Überwältigend, ich weiß nicht, wo ich anfangen soll.', score: 4 },
    ],
  },
  {
    id: 9,
    category: 'arbeit',
    question: 'Wie viel Kontrolle haben Sie über Ihre Aufgaben und Prioritäten?',
    options: [
      { label: 'Ich gestalte meinen Arbeitstag weitgehend selbst.', score: 1 },
      { label: 'Ich habe Einfluss, werde aber häufig fremdgesteuert.', score: 2 },
      { label: 'Mein Tag wird überwiegend durch andere bestimmt.', score: 3 },
      { label: 'Ich fühle mich wie ein Hamster im Laufrad ohne Einfluss.', score: 4 },
    ],
  },
]

export function calculateScores(answers: Record<number, number>): CategoryScores {
  const scores: CategoryScores = {
    koerper: 0,
    gedanken: 0,
    verhalten: 0,
    emotion: 0,
    arbeit: 0,
    total: 0,
  }

  const categoryCounts: Record<StressCategory, number> = {
    koerper: 0,
    gedanken: 0,
    verhalten: 0,
    emotion: 0,
    arbeit: 0,
  }

  for (const q of questions) {
    if (answers[q.id] !== undefined) {
      scores[q.category] += answers[q.id]
      categoryCounts[q.category]++
    }
  }

  // Normalize to percentage (max 4 points per question, 2 questions per category)
  for (const cat of categories) {
    const maxPossible = categoryCounts[cat.key] * 4
    scores[cat.key] = maxPossible > 0 ? Math.round((scores[cat.key] / maxPossible) * 100) : 0
  }

  // Total is average of all categories
  const catValues = categories.map((c) => scores[c.key])
  scores.total = Math.round(catValues.reduce((a, b) => a + b, 0) / catValues.length)

  return scores
}

export function getStressLevel(scores: CategoryScores): StressLevel {
  if (scores.total <= 35) return 'gruen'
  if (scores.total <= 62) return 'gelb'
  return 'rot'
}

export function getStressResult(scores: CategoryScores): StressResult {
  const level = getStressLevel(scores)

  if (level === 'gruen') {
    return {
      level: 'gruen',
      title: 'Ihr Stresslevel ist im grünen Bereich',
      subtitle: 'Gute Balance, nachhaltig erhalten',
      description:
        'Sie gehen mit Belastungen überwiegend gesund um. Ihre Stressbewältigungsstrategien funktionieren. Achten Sie darauf, diese Ressourcen langfristig zu pflegen, damit sie auch in anspruchsvollen Phasen tragen.',
      recommendations: [
        'Pflegen Sie Ihre bestehenden Ausgleichsstrategien bewusst weiter.',
        'Nutzen Sie Ihre gute Verfassung, um präventiv Resilienz aufzubauen.',
        'Reflektieren Sie regelmäßig: Was tut mir gut und wie schütze ich diese Gewohnheiten?',
        'Achten Sie auf frühe Warnsignale, wenn sich Belastungsphasen häufen.',
      ],
      coachingHint:
        'Coaching kann Ihnen helfen, Ihre Stärken strategisch zu nutzen und sich auf die nächste Herausforderung vorzubereiten, bevor der Druck steigt.',
    }
  }

  if (level === 'gelb') {
    return {
      level: 'gelb',
      title: 'Ihr Stresslevel zeigt Warnsignale',
      subtitle: 'Zeit für bewusste Gegenmaßnahmen',
      description:
        'Sie befinden sich in einer Phase erhöhter Belastung. Einige Ihrer Stresssymptome zeigen, dass Ihr System an seine Grenzen kommt. Jetzt ist ein guter Zeitpunkt, aktiv gegenzusteuern, bevor sich ein Erschöpfungsmuster verfestigt.',
      recommendations: [
        'Identifizieren Sie Ihren größten Stressor und reduzieren Sie ihn gezielt.',
        'Etablieren Sie mindestens eine tägliche Regenerationsroutine (z.B. 15 Minuten Bewegung).',
        'Kommunizieren Sie Ihre Belastung: Bitten Sie aktiv um Unterstützung oder Entlastung.',
        'Prüfen Sie Ihre Grenzen: Wo sagen Sie Ja, obwohl ein Nein gesünder wäre?',
        'Reduzieren Sie digitalen Konsum am Abend zugunsten von Erholung.',
      ],
      coachingHint:
        'Ein strukturiertes Coaching hilft Ihnen, die Ursachen Ihrer Belastung zu identifizieren und wirksame Strategien zu entwickeln, bevor der Stress chronisch wird.',
    }
  }

  return {
    level: 'rot',
    title: 'Ihr Stresslevel erfordert Aufmerksamkeit',
    subtitle: 'Handlungsbedarf: Unterstützung suchen',
    description:
      'Ihre Antworten deuten auf eine deutliche Überlastung hin. Mehrere Lebensbereiche sind betroffen. Das ist kein Zeichen von Schwäche, sondern ein Signal Ihres Körpers und Geistes, dass Veränderung notwendig ist. Nehmen Sie dieses Signal ernst.',
    recommendations: [
      'Sprechen Sie zeitnah mit einer Vertrauensperson über Ihre Situation.',
      'Priorisieren Sie radikal: Streichen Sie alles, was nicht absolut notwendig ist.',
      'Suchen Sie professionelle Unterstützung (Coach, Therapeut oder Arzt).',
      'Planen Sie kurzfristige Erholungsphasen ein, auch wenn der Kalender voll ist.',
      'Erlauben Sie sich, Hilfe anzunehmen. Das ist Stärke, nicht Schwäche.',
      'Bewegen Sie sich täglich an der frischen Luft, auch nur 10 Minuten.',
    ],
    coachingHint:
      'Ein erfahrener Coach begleitet Sie dabei, schrittweise wieder Kontrolle zu gewinnen. In einem vertraulichen Erstgespräch klären wir gemeinsam, welche Schritte jetzt am wirksamsten sind.',
  }
}

export function getCategoryFeedback(category: StressCategory, score: number): {
  level: string
  color: 'teal' | 'gold' | 'red'
  text: string
} {
  if (score <= 35) {
    const texts: Record<StressCategory, string> = {
      koerper: 'Ihr Körper sendet kaum Warnsignale. Gute Regeneration und gesunde Routinen tragen Sie.',
      gedanken: 'Sie können gut abschalten und gehen konstruktiv mit Herausforderungen um.',
      verhalten: 'Sie pflegen einen gesunden Ausgleich und setzen Grenzen, wo nötig.',
      emotion: 'Sie sind emotional stabil und können auch unter Druck gelassen reagieren.',
      arbeit: 'Ihre Arbeitsbelastung ist bewältigbar und Sie haben Einfluss auf Ihre Prioritäten.',
    }
    return { level: 'Im grünen Bereich', color: 'teal', text: texts[category] }
  }

  if (score <= 62) {
    const texts: Record<StressCategory, string> = {
      koerper: 'Ihr Körper zeigt erste Stresssignale. Achten Sie auf Schlafqualität und Regeneration.',
      gedanken: 'Grübeln und Gedankenkreisen nehmen zu. Bewusste Abschaltstrategien würden helfen.',
      verhalten: 'Ihr Ausgleichsverhalten hat sich verändert. Priorisieren Sie aktive Erholung.',
      emotion: 'Ihre emotionale Balance ist instabil. Regulationsstrategien können helfen.',
      arbeit: 'Die Arbeitsbelastung ist erhöht. Prüfen Sie, wo Sie delegieren oder priorisieren können.',
    }
    return { level: 'Achtung', color: 'gold', text: texts[category] }
  }

  const texts: Record<StressCategory, string> = {
    koerper: 'Deutliche körperliche Stresssymptome. Nehmen Sie diese Signale ernst und suchen Sie ärztlichen Rat.',
    gedanken: 'Starke Grübelneigung und Selbstzweifel. Professionelle Unterstützung kann sehr hilfreich sein.',
    verhalten: 'Starker Rückzug und Überforderung. Suchen Sie aktiv Entlastung und Unterstützung.',
    emotion: 'Emotionale Erschöpfung ist ernst zu nehmen. Professionelle Begleitung wird empfohlen.',
    arbeit: 'Die Arbeitsbelastung ist überwältigend. Dringender Handlungsbedarf bei Priorisierung und Entlastung.',
  }
  return { level: 'Handlungsbedarf', color: 'red', text: texts[category] }
}
