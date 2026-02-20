import { Users, Shield, TrendingUp, Compass, MessageCircle, type LucideIcon } from 'lucide-react'

export interface AkademieImpuls {
  slug: string
  title: string
  description: string
  readingTime: string
}

export interface AkademieModule {
  slug: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  color: 'teal' | 'gold'
  impulse: AkademieImpuls[]
  relatedCoachingPages: { label: string; href: string }[]
}

export const akademieModules: AkademieModule[] = [
  {
    slug: 'fuehrung-und-wirkung',
    title: 'Führung & Wirkung',
    subtitle: 'Wirksam führen mit Substanz',
    description:
      'Wie Sie als Führungskraft authentisch wirken, Vertrauen aufbauen und Ihr Team nachhaltig bewegen.',
    icon: Users,
    color: 'teal',
    impulse: [
      {
        slug: 'fuenf-saeulen-fuehrung',
        title: 'Die 5 Säulen wirksamer Führung',
        description:
          'Was unterscheidet Führungskräfte, die wirklich bewegen, von denen, die nur verwalten? Ein Blick auf die fünf Kernkompetenzen.',
        readingTime: '8 Min.',
      },
      {
        slug: 'unbewusste-muster',
        title: 'Unbewusste Führungsmuster erkennen',
        description:
          'Viele Führungsentscheidungen entstehen aus Mustern, die wir nie bewusst gewählt haben. So bringen Sie Licht ins Dunkel.',
        readingTime: '7 Min.',
      },
      {
        slug: 'authentisch-kommunizieren',
        title: 'Authentisch kommunizieren als Führungskraft',
        description:
          'Warum „Authentizität" mehr bedeutet als Offenheit und wie Sie als Führungskraft Klarheit schaffen.',
        readingTime: '6 Min.',
      },
      {
        slug: 'manager-zum-leader',
        title: 'Vom Manager zum Leader',
        description:
          'Der Wandel vom operativen Manager zur strategischen Führungspersönlichkeit. Was sich verändern muss.',
        readingTime: '9 Min.',
      },
      {
        slug: 'erste-100-tage',
        title: 'Die ersten 100 Tage als neue Führungskraft',
        description:
          'Das strategische Fenster, das sich nur einmal öffnet. Die vier Phasen erfolgreicher Führungsübernahme und die häufigsten Fehler.',
        readingTime: '10 Min.',
      },
    ],
    relatedCoachingPages: [
      { label: 'Führungskräfte-Coaching', href: '/fuehrungskraefte-coaching' },
      { label: 'Teamcoaching', href: '/teamcoaching' },
    ],
  },
  {
    slug: 'innere-staerke-resilienz',
    title: 'Innere Stärke & Resilienz',
    subtitle: 'Belastbar bleiben unter Druck',
    description:
      'Wissenschaftlich fundierte Strategien für emotionale Regulation, Stressbewältigung und innere Souveränität.',
    icon: Shield,
    color: 'teal',
    impulse: [
      {
        slug: 'stress-verstehen',
        title: 'Stress verstehen: Was im Gehirn passiert',
        description:
          'Die Neurowissenschaft hinter Stressreaktionen und warum Willenskraft allein nicht ausreicht.',
        readingTime: '8 Min.',
      },
      {
        slug: 'resilienz-framework',
        title: 'Ihr persönliches Resilienz-Framework',
        description:
          'Ein strukturierter Ansatz, um Widerstandskraft aufzubauen, die auch in Krisen trägt.',
        readingTime: '10 Min.',
      },
      {
        slug: 'emotionale-regulation',
        title: 'Emotionale Regulation für den Führungsalltag',
        description:
          'Wie Sie unter Druck emotional stabil bleiben, ohne Ihre Gefühle zu unterdrücken.',
        readingTime: '7 Min.',
      },
      {
        slug: 'grenzen-setzen',
        title: 'Grenzen setzen ohne schlechtes Gewissen',
        description:
          'Warum klare Grenzen nicht egoistisch sind und wie Sie sie wertschätzend kommunizieren.',
        readingTime: '6 Min.',
      },
      {
        slug: 'burnout-warnsignale',
        title: 'Burnout erkennen: 7 Warnsignale für Führungskräfte',
        description:
          'Die sieben Warnsignale, die Führungskräfte fast immer übersehen. Was im Gehirn bei Burnout passiert und wie Sie rechtzeitig gegensteuern.',
        readingTime: '10 Min.',
      },
    ],
    relatedCoachingPages: [
      { label: 'Stressmanagement-Coaching', href: '/stressmanagement-coaching' },
      { label: 'Selbstwirksamkeit stärken', href: '/selbstwirksamkeit-staerken' },
      { label: 'Glaubenssatz-Analyse', href: '/glaubenssatz-test' },
    ],
  },
  {
    slug: 'persoenlichkeit-wachstum',
    title: 'Persönlichkeit & Wachstum',
    subtitle: 'Bewusst wachsen als Mensch',
    description:
      'Erkenntnisse aus Psychologie und Neurowissenschaft für bewusste Persönlichkeitsentwicklung.',
    icon: TrendingUp,
    color: 'gold',
    impulse: [
      {
        slug: 'neuroplastizitaet',
        title: 'Neuroplastizität: Warum Veränderung in jedem Alter möglich ist',
        description:
          'Was die Hirnforschung über unsere Veränderungsfähigkeit sagt und wie Sie diese nutzen können.',
        readingTime: '8 Min.',
      },
      {
        slug: 'werte-als-kompass',
        title: 'Werte als Kompass: Ihr persönliches Fundament',
        description:
          'Wie Sie Ihre Kernwerte identifizieren und als verlässliche Entscheidungsgrundlage nutzen.',
        readingTime: '7 Min.',
      },
      {
        slug: 'gewohnheiten-veraendern',
        title: 'Gewohnheiten verändern: Was die Wissenschaft sagt',
        description:
          'Warum Gewohnheitsänderung so schwer fällt und welche Strategien tatsächlich funktionieren.',
        readingTime: '9 Min.',
      },
      {
        slug: 'imposter-syndrom',
        title: 'Imposter-Syndrom: Wenn Erfolg sich falsch anfühlt',
        description:
          '70% aller Führungskräfte erleben das Imposter-Syndrom. Die fünf Typen, die Neurowissenschaft dahinter und der Weg zum authentischen Leader.',
        readingTime: '9 Min.',
      },
    ],
    relatedCoachingPages: [
      { label: 'Persönlichkeitsentwicklung', href: '/persoenlichkeitsentwicklung-erklaert' },
      { label: 'Nachhaltige Verhaltensänderung', href: '/nachhaltige-verhaltensaenderung' },
      { label: 'Glaubenssatz-Analyse', href: '/glaubenssatz-test' },
    ],
  },
  {
    slug: 'strategische-klarheit',
    title: 'Strategische Klarheit',
    subtitle: 'Entscheiden mit Weitblick',
    description:
      'Wie Sie klare Entscheidungen treffen, Prioritäten setzen und Ihre Vision in Ergebnisse verwandeln.',
    icon: Compass,
    color: 'gold',
    impulse: [
      {
        slug: 'entscheidungsqualitaet',
        title: 'Entscheidungsqualität verbessern',
        description:
          'Die psychologischen Fallen bei Entscheidungen und wie Sie systematisch bessere Wahl treffen.',
        readingTime: '8 Min.',
      },
      {
        slug: 'prioritaeten-setzen',
        title: 'Prioritäten setzen: Die Kunst des Weglassens',
        description:
          'Warum weniger oft mehr ist und wie Sie den Mut zum strategischen Nein entwickeln.',
        readingTime: '7 Min.',
      },
      {
        slug: 'vision-entwickeln',
        title: 'Vision entwickeln und kommunizieren',
        description:
          'Wie eine klare Vision entsteht und warum sie der wichtigste Führungsanker ist.',
        readingTime: '8 Min.',
      },
    ],
    relatedCoachingPages: [
      { label: 'Fokus & Klarheit', href: '/fokus-und-klarheit' },
      { label: 'Strategische Geschäftsplanung', href: '/strategische-geschaftsplanung' },
    ],
  },
  {
    slug: 'kommunikation-beziehung',
    title: 'Kommunikation & Beziehung',
    subtitle: 'Verbindung schaffen durch Klarheit',
    description:
      'Wirksame Gesprächsführung, konstruktive Konfliktlösung und die Psychologie menschlicher Beziehungen.',
    icon: MessageCircle,
    color: 'teal',
    impulse: [
      {
        slug: 'schwierige-gespraeche',
        title: 'Schwierige Gespräche souverän führen',
        description:
          'Wie Sie auch in angespannten Situationen klar, empathisch und lösungsorientiert kommunizieren.',
        readingTime: '8 Min.',
      },
      {
        slug: 'konflikte-als-chance',
        title: 'Konflikte als Chance: Konstruktive Konfliktlösung',
        description:
          'Warum Konflikte nicht das Problem sind, sondern der Umgang damit. Ein psychologischer Leitfaden.',
        readingTime: '9 Min.',
      },
      {
        slug: 'zuhoeren-als-kompetenz',
        title: 'Zuhören als Führungskompetenz',
        description:
          'Die unterschätzte Fähigkeit, die Teams transformiert. Aktives Zuhören auf einem neuen Level.',
        readingTime: '6 Min.',
      },
      {
        slug: 'feedback-geben-nehmen',
        title: 'Feedback geben und nehmen',
        description:
          'Wie Feedback zur Wachstumsquelle wird, statt Abwehr auszulösen. Psychologische Grundlagen und Praxis.',
        readingTime: '7 Min.',
      },
    ],
    relatedCoachingPages: [
      { label: 'Teamcoaching', href: '/teamcoaching' },
      { label: 'Teambuilding-Workshop', href: '/teambuildingworkshop' },
    ],
  },
]

export function getModuleBySlug(slug: string): AkademieModule | undefined {
  return akademieModules.find((m) => m.slug === slug)
}

export function getImpulsBySlug(
  moduleSlug: string,
  impulsSlug: string
): { module: AkademieModule; impuls: AkademieImpuls; index: number } | undefined {
  const mod = getModuleBySlug(moduleSlug)
  if (!mod) return undefined
  const index = mod.impulse.findIndex((i) => i.slug === impulsSlug)
  if (index === -1) return undefined
  return { module: mod, impuls: mod.impulse[index], index }
}
