import { Github, Mail, Sparkles } from "lucide-react";

import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { fetchGitHubRepos } from "@/lib/github";

export const revalidate = 3600;

export default async function HomePage() {
  const repos = await fetchGitHubRepos();

  return (
    <main className="gradient-bg scroll-smooth">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-10 sm:px-6 md:px-8 md:pt-16">
        <header className="flex flex-col gap-10 pb-12 pt-4 md:flex-row md:items-center md:justify-between md:gap-16 md:pb-16">
          <div className="space-y-6 md:max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300 shadow-sm shadow-cyan-500/30">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>AI vibe coding showcase</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                Where{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
                  AI instincts
                </span>{" "}
                meet{" "}
                <span className="bg-gradient-to-r from-rose-400 to-amber-300 bg-clip-text text-transparent">
                  vibe-coded builds
                </span>
                .
              </h1>

              <p className="max-w-xl text-balance text-sm text-slate-300 sm:text-base">
                A living portfolio of experiments, tools, and prototypes by{" "}
                <span className="font-semibold text-slate-100">lojul</span> – exploring
                AI-assisted development, playful interfaces, and fast, expressive
                shipping with Next.js and friends.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a
                  href="https://github.com/lojul"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open lojul on GitHub"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub
                </a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a href="#projects">Browse projects</a>
              </Button>
            </div>
          </div>

          <div className="relative mt-4 w-full max-w-md self-stretch md:mt-0 md:self-center">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="glass relative z-10 h-full rounded-3xl border border-slate-800/80 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-500/20">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                  AI build session
                </span>
                <span>lojul / vibe-coding</span>
              </div>

              <div className="space-y-3 text-xs font-mono text-slate-300">
                <p>
                  <span className="text-cyan-300">const</span>{" "}
                  <span className="text-emerald-300">vibe</span> ={" "}
                  <span className="text-amber-200">&quot;ship it&quot;</span>;
                </p>
                <p>
                  <span className="text-cyan-300">const</span>{" "}
                  <span className="text-emerald-300">stack</span> = [
                  <span className="text-sky-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-sky-300">&quot;Tailwind&quot;</span>,{" "}
                  <span className="text-sky-300">&quot;AI&quot;</span>];
                </p>
                <p>
                  <span className="text-cyan-300">const</span>{" "}
                  <span className="text-emerald-300">mode</span> = (
                  <span className="text-sky-300">intuition</span> +
                  <span className="text-sky-300">exploration</span>) &gt;
                  <span className="text-amber-200">perfectionism</span>;
                </p>
                <p className="pt-2 text-slate-400">
                  // scroll to see what happens when you let the AI cook and follow the
                  vibes.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section id="projects" className="space-y-6 pb-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Featured projects
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Pulled live from{" "}
                <a
                  href="https://github.com/lojul"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-dotted underline-offset-4 hover:text-cyan-300"
                >
                  GitHub
                </a>{" "}
                – sorted by stars and recent activity.
              </p>
            </div>

            <p className="text-xs text-slate-500">
              Using GitHub Open Graph images as project previews. You can swap in
              custom screenshots or demo URLs per repo later.
            </p>
          </div>

          {repos.length === 0 ? (
            <div className="mt-6 rounded-xl border border-dashed border-slate-700/70 bg-slate-950/60 p-6 text-sm text-slate-300">
              <p className="font-medium text-slate-100">No projects loaded yet.</p>
              <p className="mt-1 text-slate-400">
                This can happen if GitHub&apos;s unauthenticated rate limit is
                exhausted. Try refreshing in a bit, or configure a GitHub token on the
                server for heavier traffic.
              </p>
            </div>
          ) : (
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo, index) => (
                <ProjectCard key={repo.id} repo={repo} index={index} />
              ))}
            </div>
          )}
        </section>

        <footer className="mt-auto border-t border-slate-800/70 pt-6 text-xs text-slate-400 sm:text-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Built with Next.js, Tailwind, Framer Motion, and live GitHub data. Curated
              by <span className="font-medium text-slate-200">lojul</span>.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/lojul"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-300"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@lojul.dev"
                className="inline-flex items-center gap-1.5 hover:text-cyan-300"
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

