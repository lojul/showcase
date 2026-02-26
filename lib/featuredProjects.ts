/**
 * Featured / Recent Work projects shown at the top of the portfolio.
 * Hero images: add files to public/featured/{slug}-hero.png (or .jpg) for each project.
 */

export type TechBadge = {
  label: string;
  /** Tailwind color class for pill (e.g. bg-blue-100 text-blue-800) */
  colorClass: string;
};

export type FeaturedProject = {
  id: string;
  name: string;
  description: string;
  demoUrl: string;
  /** Path to hero screenshot under public/ (e.g. /featured/quick-poll-hero.png) */
  image: string;
  imageAlt: string;
  tech: TechBadge[];
  /** Optional GitHub repo URL */
  githubUrl?: string;
};

/** Color-coded tech pill classes */
const techColors: Record<string, string> = {
  "React": "bg-sky-100 text-sky-800 border-sky-200",
  "Next.js": "bg-slate-100 text-slate-800 border-slate-200",
  "Remix": "bg-sky-100 text-sky-800 border-sky-200",
  "Tailwind": "bg-cyan-100 text-cyan-800 border-cyan-200",
  "shadcn": "bg-slate-100 text-slate-700 border-slate-200",
  "Node.js": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Express": "bg-gray-100 text-gray-800 border-gray-200",
  "Vercel": "bg-black/90 text-white border-black",
  "Railway": "bg-amber-100 text-amber-900 border-amber-200",
  "Google Cloud Run": "bg-blue-100 text-blue-800 border-blue-200",
  "Postgres": "bg-blue-100 text-blue-800 border-blue-200",
  "Vercel Postgres": "bg-blue-100 text-blue-800 border-blue-200",
  "Supabase": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Firebase Auth": "bg-amber-100 text-amber-800 border-amber-200",
  "Docker": "bg-blue-100 text-blue-800 border-blue-200",
  "WebSockets": "bg-violet-100 text-violet-800 border-violet-200",
  "Lightstreamer": "bg-rose-100 text-rose-800 border-rose-200",
  "Server Actions": "bg-slate-100 text-slate-700 border-slate-200",
  "PokeAPI": "bg-amber-100 text-amber-800 border-amber-200",
  "ISR": "bg-slate-100 text-slate-700 border-slate-200",
  "Canvas": "bg-slate-100 text-slate-700 border-slate-200",
  "Phaser.js": "bg-green-100 text-green-800 border-green-200",
  "PWA": "bg-indigo-100 text-indigo-800 border-indigo-200",
  "Java": "bg-orange-100 text-orange-800 border-orange-200",
};

function tech(label: string): TechBadge {
  return {
    label,
    colorClass: techColors[label] ?? "bg-slate-100 text-slate-700 border-slate-200",
  };
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "quick-poll-lightstreamer",
    name: "Quick Poll Lightstreamer",
    description: "Real-time polling app with Lightstreamer for live vote streaming.",
    demoUrl: "https://quick-poll-lightstreamer-production.up.railway.app",
    image: "/featured/placeholder-hero.svg",
    imageAlt: "Quick Poll Lightstreamer real-time polling app screenshot",
    tech: [
      tech("React"),
      tech("Next.js"),
      tech("Node.js"),
      tech("Lightstreamer"),
      tech("Java"),
      tech("Docker"),
      tech("WebSockets"),
      tech("Railway"),
    ],
    githubUrl: "https://github.com/lojul/quick-poll-lightstreamer",
  },
  {
    id: "applicant-tracking",
    name: "Applicant Tracking",
    description: "Internal ATS dashboard for managing candidates, jobs, and statuses (AI-assisted).",
    demoUrl: "https://applicant-tracking-three.vercel.app/",
    image: "/featured/placeholder-hero.svg",
    imageAlt: "Applicant Tracking System dashboard screenshot",
    tech: [
      tech("React"),
      tech("Next.js"),
      tech("Tailwind"),
      tech("shadcn"),
      tech("Vercel Postgres"),
      tech("Supabase"),
      tech("Server Actions"),
      tech("Vercel"),
    ],
    githubUrl: "https://github.com/lojul/applicant-tracking-three",
  },
  {
    id: "hide-and-seek-game",
    name: "Hide and Seek Game",
    description: "Multiplayer hide-and-seek browser game.",
    demoUrl: "https://remix-shadow-seekers-257320149663.us-west1.run.app",
    image: "/featured/placeholder-hero.svg",
    imageAlt: "Hide and Seek multiplayer game screenshot",
    tech: [
      tech("Remix"),
      tech("React"),
      tech("Node.js"),
      tech("Express"),
      tech("WebSockets"),
      tech("Canvas"),
      tech("Google Cloud Run"),
    ],
    githubUrl: "https://github.com/lojul/remix-shadow-seekers",
  },
  {
    id: "pokemon-info-page",
    name: "Pokemon Info Page",
    description: "Pokemon database with search and info pages.",
    demoUrl: "https://poke-palace-of-wonder.vercel.app",
    image: "/featured/placeholder-hero.svg",
    imageAlt: "Pokemon database search and info page screenshot",
    tech: [
      tech("React"),
      tech("Next.js"),
      tech("Tailwind"),
      tech("PokeAPI"),
      tech("ISR"),
      tech("Vercel"),
    ],
    githubUrl: "https://github.com/lojul/poke-palace-of-wonder",
  },
  {
    id: "minigames",
    name: "MiniGames",
    description: "Collection of browser mini-games.",
    demoUrl: "https://minigame-lilac.vercel.app",
    image: "/featured/placeholder-hero.svg",
    imageAlt: "MiniGames collection screenshot",
    tech: [
      tech("React"),
      tech("Next.js"),
      tech("Canvas"),
      tech("Phaser.js"),
      tech("Vercel"),
    ],
    githubUrl: "https://github.com/lojul/minigame-lilac",
  },
  {
    id: "table-tennis-score",
    name: "Table-Tennis Score",
    description: "Ping-pong scorekeeper PWA.",
    demoUrl: "https://vercel.com/lojuls-projects/ping-pong-pad",
    image: "/featured/placeholder-hero.svg",
    imageAlt: "Table-Tennis scorekeeper app screenshot",
    tech: [tech("React"), tech("PWA"), tech("Vercel")],
    githubUrl: "https://github.com/lojul/ping-pong-pad",
  },
];
