import jsPDF from 'jspdf'

const COLORS = {
  midnight: [6, 26, 45] as [number, number, number],
  navy: [7, 31, 61] as [number, number, number],
  teal: [45, 212, 191] as [number, number, number],
  gold: [201, 162, 39] as [number, number, number],
  white: [244, 247, 251] as [number, number, number],
  muted: [199, 210, 222] as [number, number, number],
  darkMuted: [100, 120, 140] as [number, number, number],
}

function drawRoundedRect(
  doc: jsPDF,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
  style: 'S' | 'F' | 'FD' = 'F'
) {
  doc.roundedRect(x, y, w, h, r, r, style)
}

function addNeonBar(doc: jsPDF, x: number, y: number, w: number, color: [number, number, number]) {
  doc.setFillColor(...color)
  doc.rect(x, y, w, 1.5, 'F')
}

export function generateOfferPDF() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pageW = 210
  const pageH = 297
  const margin = 20
  const contentW = pageW - margin * 2

  // ─── PAGE 1: COVER ───────────────────────────────────────
  // Dark background
  doc.setFillColor(...COLORS.midnight)
  doc.rect(0, 0, pageW, pageH, 'F')

  // Subtle gradient overlay (navy area)
  doc.setFillColor(...COLORS.navy)
  doc.rect(0, 0, pageW, 120, 'F')

  // Teal accent bar at top
  doc.setFillColor(...COLORS.teal)
  doc.rect(0, 0, pageW, 3, 'F')

  // Name / Brand
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.setTextColor(...COLORS.teal)
  doc.text('DENNIS TEFETT', margin, 35)
  doc.setFontSize(9)
  doc.setTextColor(...COLORS.muted)
  doc.text('Neurowissenschaftlich fundiertes Executive Coaching', margin, 42)

  // Main headline
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(36)
  doc.setTextColor(...COLORS.white)
  doc.text('Angebots\u00ADbrosch\u00FCre', margin, 75, { maxWidth: contentW })

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(13)
  doc.setTextColor(...COLORS.muted)
  doc.text('Executive Coaching f\u00FCr F\u00FChrungskr\u00E4fte,', margin, 95)
  doc.text('die messbare Ver\u00E4nderung wollen.', margin, 102)

  // Decorative line
  doc.setDrawColor(...COLORS.teal)
  doc.setLineWidth(0.5)
  doc.line(margin, 115, margin + 40, 115)

  // Philosophy section
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  doc.setTextColor(...COLORS.white)
  doc.text('Meine \u00DCberzeugung', margin, 145)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(...COLORS.muted)
  const philosophy = [
    'Exzellentes Coaching basiert auf Wissenschaft, nicht auf Intuition.',
    'Es liefert messbare Ergebnisse, nicht motivierende Worte.',
    'Und es macht Sie unabh\u00E4ngig, nicht abh\u00E4ngig.',
    '',
    'Als Psychologe und Gesundheitsmanager mit neurowissen-',
    'schaftlichem Hintergrund verbinde ich klinische Pr\u00E4zision',
    'mit unternehmerischem Verst\u00E4ndnis.',
  ]
  philosophy.forEach((line, i) => {
    doc.text(line, margin, 155 + i * 6)
  })

  // Key stats
  const statsY = 205
  doc.setFillColor(255, 255, 255, 0.06)
  drawRoundedRect(doc, margin, statsY, contentW, 35, 3, 'F')
  doc.setDrawColor(255, 255, 255)
  doc.setLineWidth(0.1)
  drawRoundedRect(doc, margin, statsY, contentW, 35, 3, 'S')

  addNeonBar(doc, margin, statsY + 35 - 1.5, contentW, COLORS.teal)

  const stats = [
    { value: '820+', label: 'Coaching-Stunden/Jahr' },
    { value: '95%', label: 'Zielerreichung' },
    { value: '8+', label: 'Jahre Erfahrung' },
  ]
  stats.forEach((stat, i) => {
    const x = margin + 10 + i * (contentW / 3)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(18)
    doc.setTextColor(...COLORS.teal)
    doc.text(stat.value, x, statsY + 16)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...COLORS.muted)
    doc.text(stat.label, x, statsY + 23)
  })

  // Footer
  doc.setFontSize(8)
  doc.setTextColor(...COLORS.darkMuted)
  doc.text('www.dennis-tefett.de', margin, pageH - 15)
  doc.text('Vertraulich', pageW - margin - doc.getTextWidth('Vertraulich'), pageH - 15)

  // ─── PAGE 2: PACKAGES ────────────────────────────────────
  doc.addPage()
  doc.setFillColor(...COLORS.midnight)
  doc.rect(0, 0, pageW, pageH, 'F')

  // Teal accent bar at top
  doc.setFillColor(...COLORS.teal)
  doc.rect(0, 0, pageW, 2, 'F')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(...COLORS.gold)
  doc.text('ZUSAMMENARBEIT', margin, 25)

  doc.setFontSize(22)
  doc.setTextColor(...COLORS.white)
  doc.text('Drei Wege, mit mir zu arbeiten', margin, 36)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(...COLORS.muted)
  doc.text('Sie investieren nicht in Stunden. Sie investieren in Ergebnisse, die bleiben.', margin, 45)

  // Package cards
  const pkgData = [
    {
      name: 'Clarity',
      subtitle: 'Diagnostik & Standortbestimmung',
      price: '2.900 \u20AC',
      note: 'Einmalig \u00B7 2 Sessions + Bericht',
      color: COLORS.teal,
      features: [
        'Psychologische Ist-Analyse (validierte Diagnostik)',
        'Neurowissenschaftliches F\u00FChrungsprofil',
        'St\u00E4rken- und Blockaden-Mapping',
        'Strategische Handlungsempfehlung',
        'Dokumentierter Ergebnisbericht (20+ Seiten)',
      ],
      result: 'Klarheit \u00FCber Ihren n\u00E4chsten Schritt',
    },
    {
      name: 'Signature',
      subtitle: 'Transformation & Neuausrichtung',
      price: '7.500 \u20AC',
      note: '3 Monate \u00B7 12 Sessions + Begleitung',
      color: COLORS.gold,
      features: [
        'Alles aus Clarity, plus:',
        'Individuelle Interventionsstrategie',
        'W\u00F6chentliche 1:1 Sessions (60 Min.)',
        'Zwischen-Diagnostik nach 6 Wochen',
        'Pers\u00F6nlicher Notfall-Zugang (24h)',
        'Zugang zum exklusiven Client-Portal',
        'Audio-Materialien und Praxis\u00FCbungen',
      ],
      result: 'Messbare Ver\u00E4nderung in F\u00FChrung & Wirkung',
      featured: true,
    },
    {
      name: 'Partnership',
      subtitle: 'Langfristige Exzellenz',
      price: '3.500 \u20AC / Monat',
      note: 'Mindestlaufzeit 6 Monate',
      color: COLORS.teal,
      features: [
        'Alles aus Signature, plus:',
        'Fortlaufende strategische Begleitung',
        'Priority-Zugang zu jeder Zeit',
        'Quartals-Reviews mit erneuter Diagnostik',
        'Pers\u00F6nlicher Entwicklungsplan (fortlaufend)',
        'Vertrauliche Board- und Krisenvorbereitung',
      ],
      result: 'Kontinuierliche Exzellenz auf h\u00F6chstem Niveau',
    },
  ]

  let pkgY = 55

  pkgData.forEach((pkg) => {
    const cardH = pkg.features.length * 6 + 48
    // Card background
    doc.setFillColor(255, 255, 255)
    doc.setGState(doc.GState({ opacity: 0.06 }))
    drawRoundedRect(doc, margin, pkgY, contentW, cardH, 3, 'F')
    doc.setGState(doc.GState({ opacity: 1 }))

    // Border
    doc.setDrawColor(255, 255, 255)
    doc.setLineWidth(0.15)
    doc.setGState(doc.GState({ opacity: 0.12 }))
    drawRoundedRect(doc, margin, pkgY, contentW, cardH, 3, 'S')
    doc.setGState(doc.GState({ opacity: 1 }))

    // Neon bar at bottom
    addNeonBar(doc, margin, pkgY + cardH - 1.5, contentW, pkg.color)

    // Featured badge
    if (pkg.featured) {
      doc.setFillColor(...COLORS.gold)
      drawRoundedRect(doc, margin + 8, pkgY - 3, 28, 6, 2, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(6)
      doc.setTextColor(...COLORS.midnight)
      doc.text('MEISTGEBUCHT', margin + 10, pkgY + 1)
    }

    // Package name + price
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(16)
    doc.setTextColor(...pkg.color)
    doc.text(pkg.name, margin + 8, pkgY + 12)

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(16)
    doc.text(pkg.price, pageW - margin - 8 - doc.getTextWidth(pkg.price), pkgY + 12)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...COLORS.muted)
    doc.text(pkg.subtitle, margin + 8, pkgY + 19)
    doc.text(pkg.note, pageW - margin - 8 - doc.getTextWidth(pkg.note), pkgY + 19)

    // Divider
    doc.setDrawColor(...COLORS.darkMuted)
    doc.setLineWidth(0.1)
    doc.line(margin + 8, pkgY + 23, pageW - margin - 8, pkgY + 23)

    // Features
    doc.setFontSize(8.5)
    pkg.features.forEach((feature, fi) => {
      const fy = pkgY + 30 + fi * 6
      doc.setTextColor(...pkg.color)
      doc.text('\u2713', margin + 10, fy)
      doc.setTextColor(...COLORS.muted)
      doc.text(feature, margin + 17, fy)
    })

    // Result
    const resultY = pkgY + 30 + pkg.features.length * 6 + 4
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8)
    doc.setTextColor(...pkg.color)
    doc.text(`\u2192 ${pkg.result}`, margin + 10, resultY)

    pkgY += cardH + 8
  })

  // Footer
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(...COLORS.darkMuted)
  doc.text('Alle Preise zzgl. MwSt. \u00B7 Steuerlich absetzbar als Fortbildung', margin, pageH - 20)
  doc.text('www.dennis-tefett.de', margin, pageH - 15)
  doc.text('Seite 2', pageW - margin - doc.getTextWidth('Seite 2'), pageH - 15)

  // ─── PAGE 3: GUARANTEE + PROCESS ─────────────────────────
  doc.addPage()
  doc.setFillColor(...COLORS.midnight)
  doc.rect(0, 0, pageW, pageH, 'F')
  doc.setFillColor(...COLORS.teal)
  doc.rect(0, 0, pageW, 2, 'F')

  // Guarantee section
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(...COLORS.teal)
  doc.text('MEIN VERSPRECHEN', margin, 25)

  doc.setFontSize(22)
  doc.setTextColor(...COLORS.white)
  doc.text('100 % Geld-zur\u00FCck-Garantie', margin, 36)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(...COLORS.muted)
  const guarantee = doc.splitTextToSize(
    'Coaching braucht Zeit, um zu wirken. Wenn Sie bis zur n\u00E4chsten Sitzung keinen Fortschritt sp\u00FCren, zahlen Sie f\u00FCr die letzte Sitzung nichts. So einfach ist das. Denn ich bin \u00FCberzeugt: Exzellentes Coaching liefert Ergebnisse.',
    contentW
  )
  doc.text(guarantee, margin, 46)

  // Guarantee steps
  const steps = [
    { title: 'Meilensteine definiert', text: 'Zu Beginn jeder Sitzung legen wir gemeinsam konkrete Ziele fest.' },
    { title: 'Ehrliche Bewertung', text: 'Zu Beginn der Folgesitzung pr\u00FCfen wir: Hat sich etwas bewegt?' },
    { title: 'Ihr Wahlrecht', text: 'Kein Fortschritt? Kostenfreie Wiederholung oder volles Geld zur\u00FCck.' },
  ]

  let stepY = 72
  steps.forEach((step, i) => {
    doc.setFillColor(255, 255, 255)
    doc.setGState(doc.GState({ opacity: 0.06 }))
    drawRoundedRect(doc, margin, stepY, contentW, 20, 2, 'F')
    doc.setGState(doc.GState({ opacity: 1 }))
    addNeonBar(doc, margin, stepY + 18.5, contentW, COLORS.teal)

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.setTextColor(...COLORS.teal)
    doc.text(`${i + 1}.`, margin + 6, stepY + 9)

    doc.setTextColor(...COLORS.white)
    doc.text(step.title, margin + 14, stepY + 9)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.5)
    doc.setTextColor(...COLORS.muted)
    doc.text(step.text, margin + 14, stepY + 15)

    stepY += 24
  })

  // Process section
  stepY += 10
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(...COLORS.gold)
  doc.text('MEIN PROZESS', margin, stepY)

  doc.setFontSize(22)
  doc.setTextColor(...COLORS.white)
  doc.text('Vier Phasen zur Ver\u00E4nderung', margin, stepY + 12)

  const phases = [
    { phase: '01', title: 'Diagnostik', text: 'Psychologische Analyse Ihrer Ausgangslage. St\u00E4rken, Muster, blinde Flecken.' },
    { phase: '02', title: 'Positionierung', text: 'Wer wollen Sie als F\u00FChrungskraft sein? Was soll sich konkret \u00E4ndern?' },
    { phase: '03', title: 'Transformation', text: 'Gezielte Interventionen aus Neurowissenschaft und Verhaltenspsychologie.' },
    { phase: '04', title: 'Integration', text: 'Die neuen Muster werden belastbar. Sie brauchen mich nicht mehr.' },
  ]

  let phaseY = stepY + 20
  phases.forEach((phase) => {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.setTextColor(...COLORS.gold)
    doc.text(phase.phase, margin, phaseY + 5)
    doc.setTextColor(...COLORS.white)
    doc.text(phase.title, margin + 12, phaseY + 5)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8.5)
    doc.setTextColor(...COLORS.muted)
    doc.text(phase.text, margin + 12, phaseY + 11)
    // Subtle separator
    doc.setDrawColor(255, 255, 255)
    doc.setLineWidth(0.05)
    doc.setGState(doc.GState({ opacity: 0.1 }))
    doc.line(margin, phaseY + 16, pageW - margin, phaseY + 16)
    doc.setGState(doc.GState({ opacity: 1 }))
    phaseY += 20
  })

  // CTA section
  phaseY += 5
  doc.setFillColor(...COLORS.teal)
  doc.setGState(doc.GState({ opacity: 0.08 }))
  drawRoundedRect(doc, margin, phaseY, contentW, 30, 3, 'F')
  doc.setGState(doc.GState({ opacity: 1 }))
  doc.setDrawColor(...COLORS.teal)
  doc.setLineWidth(0.3)
  doc.setGState(doc.GState({ opacity: 0.3 }))
  drawRoundedRect(doc, margin, phaseY, contentW, 30, 3, 'S')
  doc.setGState(doc.GState({ opacity: 1 }))
  addNeonBar(doc, margin, phaseY + 28.5, contentW, COLORS.teal)

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  doc.setTextColor(...COLORS.white)
  doc.text('Bereit f\u00FCr den n\u00E4chsten Schritt?', margin + 8, phaseY + 12)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...COLORS.muted)
  doc.text('Kostenloses Erstgespr\u00E4ch (30 Min.) \u00B7 Vertraulich \u00B7 Unverbindlich', margin + 8, phaseY + 19)

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.setTextColor(...COLORS.teal)
  doc.text('www.dennis-tefett.de/termin', margin + 8, phaseY + 26)

  // Footer
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(...COLORS.darkMuted)
  doc.text('Dennis Tefett \u00B7 Psychologe & Gesundheitsmanager \u00B7 Gladbeck', margin, pageH - 15)
  doc.text('Seite 3', pageW - margin - doc.getTextWidth('Seite 3'), pageH - 15)

  // Save
  doc.save('Dennis-Tefett-Coaching-Angebot.pdf')
}
