import type { GitHubRepo } from "./github";
import { getLiveDemoUrl, getOgImageForRepo } from "./github";

export type ProjectOverride = {
  /**
   * Image URL for this project.
   * - For local screenshots, place the file in `public/projects` and use
   *   a path like `/projects/my-repo.png`.
   * - For hosted images (e.g. Cloudinary), use the full https URL.
   */
  image?: string;
  /**
   * Preferred live demo URL for this project. If omitted, we fall back to
   * the repo homepage or a guessed Vercel/Netlify URL.
   */
  demoUrl?: string;
};

/**
 * Map repo names to custom screenshots and demo URLs.
 *
 * - Key should match the GitHub repo name, e.g. "cursor-showcase".
 * - Only set values for repos where you have a real screenshot.
 *
 * Example:
 *
 *   "cursor-showcase": {
 *     image: "/projects/cursor-showcase.png",
 *     demoUrl: "https://cursor-showcase.vercel.app"
 *   }
 */
export const projectOverrides: Record<string, ProjectOverride> = {
  // "my-repo-name": {
  //   image: "/projects/my-repo-name.png",
  //   demoUrl: "https://my-repo-name.vercel.app"
  // }
};

function getOverride(repo: GitHubRepo): ProjectOverride | undefined {
  return projectOverrides[repo.name] ?? projectOverrides[repo.full_name];
}

export function getProjectImageForRepo(repo: GitHubRepo): string {
  const override = getOverride(repo);
  if (override?.image) {
    return override.image;
  }
  return getOgImageForRepo(repo);
}

export function getProjectDemoUrl(repo: GitHubRepo): string | null {
  const override = getOverride(repo);
  if (override?.demoUrl) {
    return override.demoUrl;
  }
  return getLiveDemoUrl(repo);
}

