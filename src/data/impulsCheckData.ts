export interface CheckQuestion {
  question: string
  options: string[]
}

export interface ImpulsCheckConfig {
  title: string
  intro: string
  questions: CheckQuestion[]
  summary: {
    low: string  // score 0-1
    mid: string  // score 2
    high: string // score 3
  }
}

// Simple 3-question reflective checks for each impulse
// Each question has 3 options scored 0, 1, 2 (low awareness → high awareness)
export const impulsChecks: Record<string, ImpulsCheckConfig> = {
  'fuenf-saeulen-fuehrung': {
    title: 'Ihr Führungsprofil-Check',
    intro: 'Wie ausgewogen sind Ihre fünf Führungssäulen aktuell?',
    questions: [
      {
        question: 'Wie bewusst reflektieren Sie regelmäßig Ihren Führungsstil?',
        options: ['Selten oder nie', 'Gelegentlich, wenn es Probleme gibt', 'Regelmäßig und systematisch'],
      },
      {
        question: 'Wie gut gelingt Ihnen die Balance zwischen operativer Arbeit und strategischer Führung?',
        options: ['Ich bin fast nur operativ unterwegs', 'Es gelingt mir phasenweise', 'Ich habe einen guten Rhythmus gefunden'],
      },
      {
        question: 'Wie klar ist Ihr Team über Ihre Führungswerte und Erwartungen informiert?',
        options: ['Eher unklar', 'Teilweise kommuniziert', 'Transparent und regelmäßig besprochen'],
      },
    ],
    summary: {
      low: 'Es gibt erhebliches Potenzial, Ihre Führungswirkung gezielt zu stärken. Ein strukturierter Coaching-Prozess kann hier schnell spürbare Ergebnisse bringen.',
      mid: 'Sie haben ein gutes Fundament, aber einzelne Säulen könnten gestärkt werden. Gezielte Impulse können den Unterschied machen.',
      high: 'Ihre Führungsbasis ist stark. Nutzen Sie dieses Fundament, um Ihre Wirkung auf das nächste Level zu heben.',
    },
  },
  'unbewusste-muster': {
    title: 'Muster-Bewusstheits-Check',
    intro: 'Wie gut kennen Sie Ihre unbewussten Führungsmuster?',
    questions: [
      {
        question: 'Fallen Ihnen wiederkehrende Reaktionsmuster in stressigen Situationen auf?',
        options: ['Nein, darüber denke ich selten nach', 'Manchmal erkenne ich Muster im Nachhinein', 'Ja, ich erkenne sie oft in dem Moment'],
      },
      {
        question: 'Haben Sie schon einmal Feedback zu Ihrem Führungsverhalten aktiv eingeholt?',
        options: ['Nein, bisher nicht', 'Vereinzelt, eher informell', 'Ja, regelmäßig und systematisch'],
      },
      {
        question: 'Wie gehen Sie mit Konfliktsituationen im Team um?',
        options: ['Ich reagiere oft automatisch', 'Ich versuche bewusst zu reagieren, schaffe es aber nicht immer', 'Ich habe einen reflektierten Umgang entwickelt'],
      },
    ],
    summary: {
      low: 'Unbewusste Muster beeinflussen Ihr Führungsverhalten stark. Mehr Bewusstheit kann Ihre Wirksamkeit deutlich steigern.',
      mid: 'Sie beginnen, Ihre Muster zu erkennen. Ein vertiefender Prozess kann Ihnen helfen, diese gezielt zu transformieren.',
      high: 'Sie haben ein gutes Bewusstsein für Ihre Muster. Nutzen Sie diese Reflexionsfähigkeit als Führungsstärke.',
    },
  },
  'authentisch-kommunizieren': {
    title: 'Authentizitäts-Check',
    intro: 'Wie authentisch kommunizieren Sie als Führungskraft?',
    questions: [
      {
        question: 'Wie oft passen Sie Ihre Kommunikation an das an, was andere hören wollen?',
        options: ['Häufig, um Konflikte zu vermeiden', 'Manchmal, je nach Situation', 'Selten, ich kommuniziere klar und ehrlich'],
      },
      {
        question: 'Können Sie in Meetings auch Unsicherheit oder Nicht-Wissen zugeben?',
        options: ['Das fällt mir sehr schwer', 'In vertrautem Kreis ja', 'Ja, das gehört für mich zu guter Führung'],
      },
      {
        question: 'Stimmen Ihr inneres Erleben und Ihre äußere Kommunikation überein?',
        options: ['Oft gibt es eine Diskrepanz', 'Meistens schon', 'Ja, ich achte sehr darauf'],
      },
    ],
    summary: {
      low: 'Authentische Kommunikation ist eine Entwicklungsreise. Kleine Schritte können Ihre Glaubwürdigkeit als Führungskraft deutlich stärken.',
      mid: 'Sie sind auf einem guten Weg. Gezielte Übung kann Ihnen helfen, auch in schwierigen Situationen authentisch zu bleiben.',
      high: 'Ihre Kommunikation ist bereits sehr authentisch. Das ist eine wertvolle Führungsressource.',
    },
  },
  'manager-zum-leader': {
    title: 'Leader-Potenzial-Check',
    intro: 'Wo stehen Sie auf dem Weg vom Manager zum Leader?',
    questions: [
      {
        question: 'Wie viel Ihrer Zeit investieren Sie in die Entwicklung Ihres Teams?',
        options: ['Wenig, operative Aufgaben haben Vorrang', 'Ich nehme mir gelegentlich Zeit dafür', 'Teamentwicklung ist ein fester Teil meiner Woche'],
      },
      {
        question: 'Delegieren Sie Entscheidungen oder treffen Sie die meisten selbst?',
        options: ['Ich entscheide fast alles selbst', 'Ich delegiere zunehmend', 'Mein Team trifft viele Entscheidungen eigenständig'],
      },
      {
        question: 'Haben Sie eine klare Vision für Ihren Bereich, die Ihr Team kennt und teilt?',
        options: ['Nicht wirklich', 'Ich habe eine Vorstellung, aber sie ist nicht kommuniziert', 'Ja, und mein Team trägt sie mit'],
      },
    ],
    summary: {
      low: 'Der Wandel vom Manager zum Leader ist ein Prozess. Coaching kann Ihnen helfen, diesen Schritt gezielt zu gehen.',
      mid: 'Sie sind auf dem Weg. Gezielte Impulse können den Übergang zum strategischen Leadership beschleunigen.',
      high: 'Sie denken und handeln bereits als Leader. Nutzen Sie diese Basis, um Ihre Wirkung weiter auszubauen.',
    },
  },
  'stress-verstehen': {
    title: 'Stress-Bewusstseins-Check',
    intro: 'Wie gut verstehen Sie Ihre persönlichen Stressreaktionen?',
    questions: [
      {
        question: 'Erkennen Sie Ihre persönlichen Frühwarnsignale für Stress?',
        options: ['Nein, Stress überrascht mich oft', 'Manchmal, aber oft zu spät', 'Ja, ich kenne meine Signale gut'],
      },
      {
        question: 'Wissen Sie, welche Situationen bei Ihnen die stärksten Stressreaktionen auslösen?',
        options: ['Nicht genau', 'Einige kenne ich', 'Ja, ich habe ein klares Bild'],
      },
      {
        question: 'Haben Sie bewusste Strategien, um Ihre Stressreaktion zu regulieren?',
        options: ['Nein, ich reagiere meist automatisch', 'Ich habe ein paar Ansätze', 'Ja, mehrere erprobte Strategien'],
      },
    ],
    summary: {
      low: 'Mehr Bewusstsein für Ihre Stressmuster ist der erste Schritt zu besserem Stressmanagement.',
      mid: 'Sie haben ein grundlegendes Verständnis. Vertiefte Arbeit an Ihren Regulationsstrategien lohnt sich.',
      high: 'Ihr Stress-Bewusstsein ist hoch. Nutzen Sie dieses Wissen, um auch andere dabei zu unterstützen.',
    },
  },
  'resilienz-framework': {
    title: 'Resilienz-Status-Check',
    intro: 'Wie resilient sind Sie in Ihrem Führungsalltag?',
    questions: [
      {
        question: 'Wie schnell erholen Sie sich nach einem Rückschlag?',
        options: ['Das dauert oft lange', 'Es geht, aber es kostet Energie', 'Ich kann relativ schnell umschalten'],
      },
      {
        question: 'Haben Sie ein unterstützendes Netzwerk, auf das Sie in schwierigen Zeiten zurückgreifen?',
        options: ['Nicht wirklich', 'Ein kleiner Kreis', 'Ja, ein starkes Netzwerk'],
      },
      {
        question: 'Pflegen Sie regelmäßig Aktivitäten, die Ihre Widerstandskraft stärken?',
        options: ['Kaum, dafür fehlt die Zeit', 'Unregelmäßig', 'Ja, das ist fest eingeplant'],
      },
    ],
    summary: {
      low: 'Ihre Resilienz-Reserven sind niedrig. Investition in Ihre Widerstandskraft ist jetzt besonders wichtig.',
      mid: 'Ihr Resilienz-Fundament ist vorhanden, aber ausbaufähig. Gezielte Strategien können viel bewirken.',
      high: 'Sie haben eine starke Resilienz-Basis. Pflegen Sie diese aktiv, damit sie auch in Krisen trägt.',
    },
  },
  'emotionale-regulation': {
    title: 'Emotions-Regulations-Check',
    intro: 'Wie gut regulieren Sie Ihre Emotionen im Führungsalltag?',
    questions: [
      {
        question: 'Wie oft treffen Sie Entscheidungen, die Sie emotional bereuen?',
        options: ['Regelmäßig', 'Gelegentlich', 'Selten'],
      },
      {
        question: 'Können Sie in hitzigen Situationen einen Moment innehalten, bevor Sie reagieren?',
        options: ['Das gelingt mir selten', 'Manchmal, aber nicht immer', 'Ja, das habe ich trainiert'],
      },
      {
        question: 'Wie gut können Sie die Emotionen anderer wahrnehmen und angemessen darauf reagieren?',
        options: ['Das fällt mir schwer', 'Es gelingt mir zunehmend', 'Das ist eine meiner Stärken'],
      },
    ],
    summary: {
      low: 'Emotionale Regulation ist eine trainierbare Kompetenz. Gezielte Übungen können hier schnell wirken.',
      mid: 'Sie sind auf einem guten Weg. Vertiefte Arbeit an Ihrer emotionalen Intelligenz zahlt sich im Führungsalltag aus.',
      high: 'Ihre emotionale Regulation ist eine Führungsstärke. Das wirkt sich positiv auf Ihr gesamtes Umfeld aus.',
    },
  },
  'grenzen-setzen': {
    title: 'Grenz-Kompetenz-Check',
    intro: 'Wie gut gelingt Ihnen das Setzen von Grenzen?',
    questions: [
      {
        question: 'Wie oft sagen Sie Ja zu Aufgaben, obwohl Sie wissen, dass es zu viel ist?',
        options: ['Sehr häufig', 'Ab und zu', 'Selten, ich achte auf meine Kapazitäten'],
      },
      {
        question: 'Können Sie Grenzen setzen, ohne ein schlechtes Gewissen zu haben?',
        options: ['Nein, das schlechte Gewissen ist stark', 'Teilweise', 'Ja, das habe ich gelernt'],
      },
      {
        question: 'Kommunizieren Sie Ihre Grenzen klar und wertschätzend?',
        options: ['Ich kommuniziere sie kaum', 'Ich versuche es, bin aber oft unklar', 'Ja, klar und respektvoll'],
      },
    ],
    summary: {
      low: 'Grenzen zu setzen ist eine der wichtigsten Führungskompetenzen. Ein Coach kann Ihnen helfen, diesen Muskel zu trainieren.',
      mid: 'Sie erkennen die Bedeutung von Grenzen. Jetzt geht es darum, sie konsequenter und gelassener umzusetzen.',
      high: 'Ihre Grenz-Kompetenz ist gut entwickelt. Das schützt Ihre Energie und macht Sie als Führungskraft glaubwürdig.',
    },
  },
  'neuroplastizitaet': {
    title: 'Veränderungsbereitschafts-Check',
    intro: 'Wie veränderungsbereit sind Sie wirklich?',
    questions: [
      {
        question: 'Wie reagieren Sie, wenn Sie Ihre Komfortzone verlassen müssen?',
        options: ['Mit Widerstand und Unbehagen', 'Ambivalent, aber ich versuche es', 'Ich sehe es als Wachstumschance'],
      },
      {
        question: 'Wie oft probieren Sie bewusst neue Denk- oder Handlungsweisen aus?',
        options: ['Selten', 'Gelegentlich', 'Regelmäßig und bewusst'],
      },
      {
        question: 'Glauben Sie, dass grundlegende Veränderung in Ihrem Alter noch möglich ist?',
        options: ['Ich bin skeptisch', 'Teilweise', 'Absolut, das zeigt die Forschung'],
      },
    ],
    summary: {
      low: 'Veränderung beginnt mit dem Glauben daran. Die Neurowissenschaft zeigt: Ihr Gehirn ist anpassungsfähiger, als Sie denken.',
      mid: 'Ihre Veränderungsbereitschaft ist vorhanden. Gezielte Übungen können Ihre Neuroplastizität optimal nutzen.',
      high: 'Ihre Growth-Mindset ist Ihre größte Ressource. Sie sind bereit für nachhaltige Veränderung.',
    },
  },
  'werte-als-kompass': {
    title: 'Werte-Klarheits-Check',
    intro: 'Wie klar sind Sie sich über Ihre Kernwerte?',
    questions: [
      {
        question: 'Könnten Sie spontan Ihre drei wichtigsten Werte benennen?',
        options: ['Nein, das fällt mir schwer', 'Ich hätte eine ungefähre Idee', 'Ja, die sind mir sehr klar'],
      },
      {
        question: 'Wie oft stimmen Ihre Entscheidungen mit Ihren Werten überein?',
        options: ['Selten, ich handle oft nach äußeren Erwartungen', 'Meistens, aber nicht immer', 'Fast immer, sie leiten meine Entscheidungen'],
      },
      {
        question: 'Haben Sie Ihre Werte schon einmal systematisch reflektiert?',
        options: ['Nein, noch nie', 'Mal informell darüber nachgedacht', 'Ja, in einem strukturierten Prozess'],
      },
    ],
    summary: {
      low: 'Werte-Arbeit kann eine transformative Erfahrung sein. Es lohnt sich, hier Zeit zu investieren.',
      mid: 'Sie haben ein Gespür für Ihre Werte. Ein strukturierter Prozess kann sie zu einem verlässlichen Kompass machen.',
      high: 'Ihre Werte-Klarheit ist Ihr Fundament. Das gibt Ihnen Stabilität in unsicheren Zeiten.',
    },
  },
  'gewohnheiten-veraendern': {
    title: 'Gewohnheits-Muster-Check',
    intro: 'Wie bewusst gestalten Sie Ihre Gewohnheiten?',
    questions: [
      {
        question: 'Haben Sie in den letzten 6 Monaten eine Gewohnheit erfolgreich verändert?',
        options: ['Nein, Veränderung fällt mir schwer', 'Ich habe es versucht, aber nicht durchgehalten', 'Ja, mindestens eine'],
      },
      {
        question: 'Kennen Sie Ihre persönlichen Auslöser für unerwünschte Gewohnheiten?',
        options: ['Nicht wirklich', 'Einige kenne ich', 'Ja, ich habe sie identifiziert'],
      },
      {
        question: 'Nutzen Sie bewusste Strategien (kleine Schritte, Umgebungsdesign), um Gewohnheiten zu ändern?',
        options: ['Nein, ich setze auf Willenskraft', 'Teilweise', 'Ja, ich arbeite systematisch daran'],
      },
    ],
    summary: {
      low: 'Gewohnheitsänderung braucht mehr als Willenskraft. Die richtigen Strategien können den Durchbruch bringen.',
      mid: 'Sie haben bereits Ansätze. Ein strukturierter Veränderungsprozess kann Ihre Erfolgsrate deutlich steigern.',
      high: 'Sie verstehen die Mechanismen der Gewohnheitsänderung gut. Nutzen Sie dieses Wissen für Ihre nächste Entwicklungsstufe.',
    },
  },
  'entscheidungsqualitaet': {
    title: 'Entscheidungs-Qualitäts-Check',
    intro: 'Wie gut ist Ihre Entscheidungsqualität?',
    questions: [
      {
        question: 'Wie oft treffen Sie Entscheidungen, die Sie im Nachhinein bereuen?',
        options: ['Regelmäßig', 'Gelegentlich', 'Selten'],
      },
      {
        question: 'Kennen Sie Ihre typischen Denkfehler (Biases) bei Entscheidungen?',
        options: ['Nein, damit habe ich mich nicht beschäftigt', 'Einige kenne ich theoretisch', 'Ja, und ich habe Gegenmaßnahmen'],
      },
      {
        question: 'Holen Sie bei wichtigen Entscheidungen gezielt andere Perspektiven ein?',
        options: ['Selten', 'Manchmal', 'Systematisch'],
      },
    ],
    summary: {
      low: 'Ihre Entscheidungsqualität hat Potenzial. Schon einfache Techniken können hier viel bewirken.',
      mid: 'Sie entscheiden meist gut. Gezielte Strategien können Ihre Trefferquote bei schwierigen Entscheidungen weiter verbessern.',
      high: 'Ihre Entscheidungskompetenz ist hoch. Das ist ein wesentlicher Erfolgsfaktor in Ihrer Führungsrolle.',
    },
  },
  'prioritaeten-setzen': {
    title: 'Priorisierungs-Check',
    intro: 'Wie gut gelingt Ihnen strategisches Priorisieren?',
    questions: [
      {
        question: 'Wie oft arbeiten Sie an dem, was wirklich wichtig ist, statt nur dringend?',
        options: ['Selten, ich bin im Reaktionsmodus', 'Manchmal schaffe ich den Wechsel', 'Regelmäßig, ich plane bewusst'],
      },
      {
        question: 'Fällt es Ihnen leicht, Nein zu sagen oder Aufgaben nicht zu übernehmen?',
        options: ['Sehr schwer', 'Es wird besser', 'Ja, das gehört zu meinem Stil'],
      },
      {
        question: 'Haben Sie ein System, das Ihnen hilft, Ihre Prioritäten im Blick zu behalten?',
        options: ['Nein, ich arbeite nach Gefühl', 'Ansatzweise', 'Ja, ein erprobtes System'],
      },
    ],
    summary: {
      low: 'Priorisierung ist der Hebel für Führungseffektivität. Ein klares System kann Ihre Wirkung vervielfachen.',
      mid: 'Ihre Grundlagen stimmen. Konsequentere Umsetzung und ein passendes System können den Unterschied machen.',
      high: 'Ihr Priorisierungs-System funktioniert gut. Nutzen Sie es auch, um Ihr Team bei der Priorisierung zu unterstützen.',
    },
  },
  'vision-entwickeln': {
    title: 'Visions-Klarheits-Check',
    intro: 'Wie klar ist Ihre Führungsvision?',
    questions: [
      {
        question: 'Haben Sie eine klare Vorstellung davon, wohin Sie Ihren Bereich in 3 Jahren führen wollen?',
        options: ['Nein, ich plane eher kurzfristig', 'Eine ungefähre Richtung', 'Ja, ein klares Bild'],
      },
      {
        question: 'Kennt Ihr Team Ihre Vision und kann sie in eigenen Worten beschreiben?',
        options: ['Wahrscheinlich nicht', 'Teilweise', 'Ja, wir haben sie gemeinsam erarbeitet'],
      },
      {
        question: 'Leiten Sie Ihre täglichen Entscheidungen aus Ihrer Vision ab?',
        options: ['Selten, der Alltag dominiert', 'Manchmal', 'Regelmäßig, die Vision gibt Orientierung'],
      },
    ],
    summary: {
      low: 'Eine klare Vision ist der wichtigste Führungsanker. Die Entwicklung lohnt sich enorm.',
      mid: 'Sie haben Ansätze einer Vision. Ein strukturierter Prozess kann sie zu einem kraftvollen Führungsinstrument machen.',
      high: 'Ihre Visions-Klarheit ist bemerkenswert. Das gibt Ihnen und Ihrem Team Orientierung und Motivation.',
    },
  },
  'schwierige-gespraeche': {
    title: 'Gesprächskompetenz-Check',
    intro: 'Wie souverän führen Sie schwierige Gespräche?',
    questions: [
      {
        question: 'Wie oft vermeiden oder verschieben Sie schwierige Gespräche?',
        options: ['Häufig, ich hoffe, es löst sich von selbst', 'Manchmal', 'Selten, ich spreche Themen zeitnah an'],
      },
      {
        question: 'Gelingt es Ihnen, in angespannten Gesprächen empathisch und klar zu bleiben?',
        options: ['Das fällt mir sehr schwer', 'Teilweise', 'Ja, das habe ich trainiert'],
      },
      {
        question: 'Bereiten Sie sich auf schwierige Gespräche gezielt vor?',
        options: ['Nein, ich gehe spontan rein', 'Manchmal', 'Ja, immer mit einer klaren Struktur'],
      },
    ],
    summary: {
      low: 'Schwierige Gespräche sind trainierbar. Mit den richtigen Techniken können sie sogar zu Wachstumsmomenten werden.',
      mid: 'Ihre Gesprächskompetenz entwickelt sich. Regelmäßige Übung und Reflexion beschleunigen den Fortschritt.',
      high: 'Sie meistern schwierige Gespräche mit Souveränität. Das ist eine seltene und wertvolle Führungsstärke.',
    },
  },
  'konflikte-als-chance': {
    title: 'Konflikt-Kompetenz-Check',
    intro: 'Wie konstruktiv gehen Sie mit Konflikten um?',
    questions: [
      {
        question: 'Was ist Ihre spontane Reaktion, wenn ein Konflikt entsteht?',
        options: ['Vermeidung oder Ärger', 'Unbehagen, aber ich versuche es anzugehen', 'Neugier: Was können wir daraus lernen?'],
      },
      {
        question: 'Wie oft führen Konflikte in Ihrem Umfeld zu besseren Lösungen?',
        options: ['Selten, sie hinterlassen eher Schäden', 'Manchmal', 'Häufig, wir nutzen sie konstruktiv'],
      },
      {
        question: 'Haben Sie klare Strategien für verschiedene Konflikttypen?',
        options: ['Nein, ich reagiere intuitiv', 'Einige Ansätze', 'Ja, differenzierte Strategien'],
      },
    ],
    summary: {
      low: 'Konflikte bergen enormes Potenzial. Ein anderer Blick auf Konflikte kann Ihre Führungsarbeit transformieren.',
      mid: 'Ihr Konfliktverhältnis entwickelt sich positiv. Vertiefung kann Ihnen helfen, Konflikte als echte Chancen zu nutzen.',
      high: 'Ihre Konfliktkompetenz ist vorbildlich. Sie können Konflikte als Katalysator für Teamentwicklung nutzen.',
    },
  },
  'zuhoeren-als-kompetenz': {
    title: 'Zuhör-Kompetenz-Check',
    intro: 'Wie gut hören Sie wirklich zu?',
    questions: [
      {
        question: 'Wie oft ertappen Sie sich dabei, während des Zuhörens schon Ihre Antwort zu formulieren?',
        options: ['Sehr häufig', 'Gelegentlich', 'Selten, ich höre erst ganz zu'],
      },
      {
        question: 'Stellen Sie in Gesprächen mehr offene Fragen oder geben Sie mehr Ratschläge?',
        options: ['Überwiegend Ratschläge', 'Gemischt', 'Überwiegend Fragen'],
      },
      {
        question: 'Spiegeln Sie in Gesprächen aktiv zurück, was Sie verstanden haben?',
        options: ['Selten oder nie', 'Manchmal', 'Regelmäßig und bewusst'],
      },
    ],
    summary: {
      low: 'Aktives Zuhören ist die unterschätzte Superkraft von Führungskräften. Kleine Veränderungen können große Wirkung haben.',
      mid: 'Ihre Zuhör-Fähigkeit ist im Aufbau. Bewusstes Üben kann Ihre Gesprächsqualität spürbar verbessern.',
      high: 'Echtes Zuhören ist eine Ihrer Stärken. Das baut Vertrauen auf und macht Sie als Führungskraft besonders wirksam.',
    },
  },
  'feedback-geben-nehmen': {
    title: 'Feedback-Kultur-Check',
    intro: 'Wie gut funktioniert Feedback in Ihrem Umfeld?',
    questions: [
      {
        question: 'Wie regelmäßig geben Sie Ihren Mitarbeitenden konstruktives Feedback?',
        options: ['Selten, meist nur im Jahresgespräch', 'Gelegentlich', 'Regelmäßig und zeitnah'],
      },
      {
        question: 'Wie reagieren Sie, wenn Sie selbst kritisches Feedback erhalten?',
        options: ['Abwehrend oder verletzt', 'Ich versuche es anzunehmen, aber es fällt schwer', 'Dankbar, weil es mir bei der Entwicklung hilft'],
      },
      {
        question: 'Gibt es in Ihrem Team eine offene Feedback-Kultur?',
        options: ['Nein, Feedback wird eher vermieden', 'Ansatzweise', 'Ja, Feedback ist Teil unserer Zusammenarbeit'],
      },
    ],
    summary: {
      low: 'Eine Feedback-Kultur aufzubauen ist eine der wirksamsten Führungsinvestitionen. Es beginnt bei Ihnen.',
      mid: 'Die Grundlagen sind gelegt. Konsequentes Vorleben und Einüben kann eine echte Feedback-Kultur entstehen lassen.',
      high: 'Ihre Feedback-Kompetenz ist vorbildlich. Nutzen Sie sie, um auch in Ihrem Team eine Wachstumskultur zu fördern.',
    },
  },
}
