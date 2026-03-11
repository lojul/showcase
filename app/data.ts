export type Project = {
  name: string
  description: string
  link: string
  image: string
  imageAlt: string
  /** All images for the project gallery (defaults to [image] if omitted) */
  images?: string[]
  tech: string[]
  builtWith: string
  github?: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const SITE_NAME = 'lojul'
export const HERO_TITLE = 'vibe coding since 2025'
export const HERO_BIO =
  'React, Next.js, Tailwind, Node.js, Vercel. Building intuitive web experiences and shipping fast.'

export const SKILLS = [
  'React',
  'Next.js',
  'Tailwind',
  'Node.js',
  'Vercel',
]

export const PROJECTS: Project[] = [
  {
    name: 'Mahjong Score Calculator',
    description: 'Cantonese/Taiwan Mahjong scoring app with AI-powered tile recognition via camera.',
    link: 'https://dist-lake-eta-93.vercel.app',
    image: '/featured/mahjong-scorer/hero.png',
    imageAlt: 'Cantonese Mahjong Score Calculator',
    tech: ['Vercel', 'React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion', 'DeepSeek', 'Capacitor'],
    builtWith: 'Google AI Studio',
    id: 'mahjong-scorer',
  },
  {
    name: 'SiteSnap',
    description: 'Website screenshot crawler with AI-powered summaries and ZIP export.',
    link: 'https://sitesnap-7lyi.onrender.com',
    image: '/featured/sitesnap/page1-part1-sitesnap_7lyi_onrender_com_.png',
    imageAlt: 'SiteSnap website screenshot tool',
    images: [
      '/featured/sitesnap/page1-part1-sitesnap_7lyi_onrender_com_.png',
      '/featured/sitesnap/page1-part2-sitesnap_7lyi_onrender_com_.png',
    ],
    tech: ['Render', 'React', 'Vite', 'Express', 'Puppeteer', 'DeepSeek', 'Docker'],
    builtWith: 'Google AI Studio',
    github: 'https://github.com/lojul/sitesnap',
    id: 'sitesnap',
  },
  {
    name: 'Quick Poll Lightstreamer',
    description: 'Real-time polling app with Lightstreamer for live vote streaming.',
    link: 'https://quick-poll-lightstreamer-production.up.railway.app',
    image: '/featured/quick-poll/page1-part1-quick_poll_lightstreamer_produ.png',
    imageAlt: 'Quick Poll Lightstreamer real-time polling app',
    images: [
      '/featured/quick-poll/page1-part1-quick_poll_lightstreamer_produ.png',
      '/featured/quick-poll/page1-part2-quick_poll_lightstreamer_produ.png',
      '/featured/quick-poll/page1-part3-quick_poll_lightstreamer_produ.png',
      '/featured/quick-poll/page1-part4-quick_poll_lightstreamer_produ.png',
      '/featured/quick-poll/page1-part5-quick_poll_lightstreamer_produ.png',
      '/featured/quick-poll/page1-part6-quick_poll_lightstreamer_produ.png',
      '/featured/quick-poll/page1-part7-quick_poll_lightstreamer_produ.png',
      '/featured/quick-poll/page1-part8-quick_poll_lightstreamer_produ.png',
      '/featured/quick-poll/page1-part9-quick_poll_lightstreamer_produ.png',
    ],
    tech: ['Railway', 'React', 'Next.js', 'Node.js', 'Lightstreamer', 'Postgres', 'Docker'],
    builtWith: 'Claude',
    github: 'https://github.com/lojul/quick-poll-lightstreamer',
    id: 'quick-poll',
  },
  {
    name: 'Applicant Tracking',
    description: 'ATS dashboard for managing candidates, jobs, and statuses (AI-assisted).',
    link: 'https://applicant-tracking-three.vercel.app/',
    image: '/featured/applicant_tracking/page2-part1-applicant_tracking_three_verce.png',
    imageAlt: 'Applicant Tracking System dashboard',
    images: [
      '/featured/applicant_tracking/page2-part1-applicant_tracking_three_verce.png',
      '/featured/applicant_tracking/page3-part1-applicant_tracking_three_verce.png',
    ],
    tech: ['Vercel', 'React', 'Next.js', 'Tailwind', 'shadcn', 'Postgres', 'Supabase'],
    builtWith: 'Claude',
    github: 'https://github.com/lojul/applicant-tracking-three',
    id: 'applicant-tracking',
  },
  {
    name: 'Recruit Website',
    description:
      'Job board listing 30+ positions with filters for senior engineering, UX, DevOps, and ML roles.',
    link: '#',
    image: '/featured/recruitwebsite/page1-part1-recruitwebsite_vercel_app.png',
    imageAlt: 'Recruit website job board',
    images: [
      '/featured/recruitwebsite/page1-part1-recruitwebsite_vercel_app.png',
      '/featured/recruitwebsite/page1-part2-recruitwebsite_vercel_app.png',
      '/featured/recruitwebsite/page1-part5-recruitwebsite_vercel_app.png',
      '/featured/recruitwebsite/page2-part1-recruitwebsite_vercel_app_.png',
      '/featured/recruitwebsite/page2-part3-recruitwebsite_vercel_app_.png',
      '/featured/recruitwebsite/page3-part1-recruitwebsite_vercel_app_empl.png',
      '/featured/recruitwebsite/page3-part3-recruitwebsite_vercel_app_empl.png',
    ],
    tech: [
      'Vercel',
      'React',
      'Next.js',
      'Tailwind',
      'Server Actions',
      'Vercel Functions',
      'Job search UI',
    ],
    builtWith: 'Claude',
    github: 'https://github.com/lojul/recruit-website',
    id: 'recruit-website',
  },
  {
    name: 'Hide and Seek Game',
    description: 'Multiplayer hide-and-seek browser game.',
    link: 'https://remix-shadow-seekers-257320149663.us-west1.run.app',
    image: '/featured/hide-and-seek/page1-part1-remix_shadow_seekers_257320149.png',
    imageAlt: 'Hide and Seek multiplayer game',
    tech: ['Cloud Run', 'Remix', 'Node.js', 'Express', 'WebSockets', 'Canvas'],
    builtWith: 'Google AI Studio',
    github: 'https://github.com/lojul/remix-shadow-seekers',
    id: 'hide-seek',
  },
  {
    name: 'Pokemon Info Page',
    description: 'Pokemon database with search and info pages.',
    link: 'https://poke-palace-of-wonder.vercel.app',
    image: '/featured/pokewonder/page1-part1-pokewonder_com.png',
    imageAlt: 'Pokemon database search and info',
    images: [
      '/featured/pokewonder/page1-part1-pokewonder_com.png',
      '/featured/pokewonder/page1-part2-pokewonder_com.png',
      '/featured/pokewonder/page1-part3-pokewonder_com.png',
      '/featured/pokewonder/page1-part4-pokewonder_com.png',
      '/featured/pokewonder/page1-part5-pokewonder_com.png',
    ],
    tech: ['Vercel', 'React', 'Next.js', 'Tailwind', 'PokeAPI'],
    builtWith: 'Cursor',
    github: 'https://github.com/lojul/poke-palace-of-wonder',
    id: 'pokemon',
  },
  {
    name: 'MiniGames',
    description: 'Collection of browser mini-games.',
    link: 'https://minigame-lilac.vercel.app',
    image: '/featured/minigame/hero-Screenshot 2026-02-27 at 10.16.38 AM.png',
    imageAlt: 'MiniGames collection',
    tech: ['Vercel', 'React', 'Next.js', 'Canvas', 'Phaser.js'],
    builtWith: 'Claude',
    github: 'https://github.com/lojul/minigame-lilac',
    id: 'minigames',
  },
  {
    name: 'Table-Tennis Score',
    description: 'Ping-pong scorekeeper PWA.',
    link: 'https://ping-pong-pad.vercel.app',
    image: '/featured/ping-pong/hero-page1-part1-ping_pong_pad_vercel_app.png',
    imageAlt: 'Table-Tennis scorekeeper',
    tech: ['Vercel', 'PWA'],
    builtWith: 'Cursor',
    github: 'https://github.com/lojul/ping-pong-pad',
    id: 'table-tennis',
  },
]

export const SOCIAL_LINKS: SocialLink[] = []

export const EMAIL = 'hello@lojul.dev'
