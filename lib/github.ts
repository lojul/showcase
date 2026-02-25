const GITHUB_USER = "lojul";
const REPOS_ENDPOINT = `https://api.github.com/users/${GITHUB_USER}/repos`;

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  updated_at: string;
};

const fetcher = async (url: string): Promise<GitHubRepo[]> => {
  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json"
    }
  });

  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`);
  }

  const data = (await res.json()) as GitHubRepo[];

  return data
    .filter((repo) => !repo.name.startsWith("lojul.github.io"))
    .sort((a, b) => {
      const aStars = a.stargazers_count ?? 0;
      const bStars = b.stargazers_count ?? 0;
      if (aStars === bStars) {
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      }
      return bStars - aStars;
    });
};

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(REPOS_ENDPOINT, {
      headers: {
        Accept: "application/vnd.github+json"
      },
      // Cache on the server for an hour; great for Vercel edge cache.
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      console.error("Failed to fetch GitHub repos", res.status, await res.text());
      return [];
    }

    return fetcher(REPOS_ENDPOINT);
  } catch (error) {
    console.error("Error fetching GitHub repos", error);
    return [];
  }
}

export function getLanguageColor(language: string | null | undefined): string {
  if (!language) return "#6b7280";
  const map: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#facc15",
    Python: "#3776AB",
    Rust: "#dea584",
    Go: "#00ADD8",
    "C++": "#00599C",
    "C#": "#178600",
    Java: "#b07219",
    Shell: "#89e051",
    HTML: "#e34c26",
    CSS: "#264de4"
  };
  return map[language] ?? "#6b7280";
}

export function getOgImageForRepo(repo: GitHubRepo): string {
  return `https://opengraph.githubassets.com/ai-vibe-showcase/${repo.full_name}`;
}

export function getLiveDemoUrl(repo: GitHubRepo): string | null {
  if (repo.homepage && repo.homepage.trim().length > 0) {
    return repo.homepage;
  }

  const normalized = repo.name.toLowerCase();
  const guesses = [
    `https://lojul-${normalized}.vercel.app`,
    `https://${normalized}.vercel.app`,
    `https://${normalized}.netlify.app`
  ];

  return guesses[0] ?? null;
}

