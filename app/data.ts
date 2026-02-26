type Project = {
  name: string
  description: string
  link: string
  image: string
  imageAlt: string
  tech: string[]
  github?: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const SITE_NAME = 'lojul'
export const HERO_TITLE = 'Full-Stack Developer'
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
    name: 'Quick Poll Lightstreamer',
    description: 'Real-time polling app with Lightstreamer for live vote streaming.',
    link: 'https://quick-poll-lightstreamer-production.up.railway.app',
    image: '/featured/placeholder-hero.svg',
    imageAlt: 'Quick Poll Lightstreamer real-time polling app',
    tech: ['Railway', 'React', 'Next.js', 'Node.js', 'Lightstreamer', 'Postgres', 'Docker'],
    github: 'https://github.com/lojul/quick-poll-lightstreamer',
    id: 'quick-poll',
  },
  {
    name: 'Applicant Tracking',
    description: 'ATS dashboard for managing candidates, jobs, and statuses (AI-assisted).',
    link: 'https://applicant-tracking-three.vercel.app/',
    image: '/featured/placeholder-hero.svg',
    imageAlt: 'Applicant Tracking System dashboard',
    tech: ['Vercel', 'React', 'Next.js', 'Tailwind', 'shadcn', 'Postgres', 'Supabase'],
    github: 'https://github.com/lojul/applicant-tracking-three',
    id: 'applicant-tracking',
  },
  {
    name: 'Hide and Seek Game',
    description: 'Multiplayer hide-and-seek browser game.',
    link: 'https://remix-shadow-seekers-257320149663.us-west1.run.app',
    image: '/featured/placeholder-hero.svg',
    imageAlt: 'Hide and Seek multiplayer game',
    tech: ['Cloud Run', 'Remix', 'Node.js', 'Express', 'WebSockets', 'Canvas'],
    github: 'https://github.com/lojul/remix-shadow-seekers',
    id: 'hide-seek',
  },
  {
    name: 'Pokemon Info Page',
    description: 'Pokemon database with search and info pages.',
    link: 'https://poke-palace-of-wonder.vercel.app',
    image: '/featured/placeholder-hero.svg',
    imageAlt: 'Pokemon database search and info',
    tech: ['Vercel', 'React', 'Next.js', 'Tailwind', 'PokeAPI'],
    github: 'https://github.com/lojul/poke-palace-of-wonder',
    id: 'pokemon',
  },
  {
    name: 'MiniGames',
    description: 'Collection of browser mini-games.',
    link: 'https://minigame-lilac.vercel.app',
    image: '/featured/placeholder-hero.svg',
    imageAlt: 'MiniGames collection',
    tech: ['Vercel', 'React', 'Next.js', 'Canvas', 'Phaser.js'],
    github: 'https://github.com/lojul/minigame-lilac',
    id: 'minigames',
  },
  {
    name: 'Table-Tennis Score',
    description: 'Ping-pong scorekeeper PWA.',
    link: 'https://vercel.com/lojuls-projects/ping-pong-pad',
    image: '/featured/placeholder-hero.svg',
    imageAlt: 'Table-Tennis scorekeeper',
    tech: ['Vercel', 'PWA'],
    github: 'https://github.com/lojul/ping-pong-pad',
    id: 'table-tennis',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', link: 'https://github.com/lojul' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/' },
]

export const EMAIL = 'hello@lojul.dev'
