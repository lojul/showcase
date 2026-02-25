"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GitHubRepo,
  getLanguageColor,
  getLiveDemoUrl,
  getOgImageForRepo
} from "@/lib/github";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  repo: GitHubRepo;
  index: number;
};

export function ProjectCard({ repo, index }: ProjectCardProps) {
  const languageColor = getLanguageColor(repo.language);
  const liveDemoUrl = getLiveDemoUrl(repo);
  const ogImage = getOgImageForRepo(repo);

  const lastUpdated = new Date(repo.updated_at).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  const description =
    repo.description ??
    "An AI-flavoured, vibe-coded experiment exploring new ways to build with code and creativity.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{
        delay: index * 0.04,
        duration: 0.45,
        ease: [0.21, 0.71, 0.29, 0.99]
      }}
      className="h-full"
    >
      <Card className="group h-full">
        <div className="relative h-40 w-full overflow-hidden border-b border-slate-800/70 bg-slate-900/60">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/25 via-sky-500/10 to-transparent opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-80" />

          <Image
            src={ogImage}
            alt={repo.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        </div>

        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-800/80">
              <span
                className="h-2 w-2 rounded-full shadow-[0_0_10px]"
                style={{ backgroundColor: languageColor }}
              />
              <span className="truncate">
                {repo.language ?? "Full-stack / multi-language"}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Last vibed {lastUpdated}</span>
            </div>
          </div>

          <CardTitle className="flex items-center justify-between gap-2">
            <span className="truncate">{repo.name}</span>
            {repo.stargazers_count > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-0.5 text-[11px] font-medium text-amber-300 ring-1 ring-amber-500/40">
                <span className="text-xs">★</span>
                <span>{repo.stargazers_count}</span>
              </span>
            )}
          </CardTitle>

          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {repo.topics && repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {repo.topics.slice(0, 5).map((topic) => (
                <Badge
                  key={topic}
                  colorHex={topic.toLowerCase().includes("ai") ? "#22d3ee" : undefined}
                  className={cn(
                    "border-slate-700/80 bg-slate-900/80 text-[11px] uppercase tracking-[0.12em]",
                    topic.toLowerCase().includes("ai") && "text-cyan-300"
                  )}
                >
                  {topic}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="rounded-full bg-slate-900/80 px-2 py-1">
                Stars: {repo.stargazers_count}
              </span>
              <span className="rounded-full bg-slate-900/80 px-2 py-1">
                Forks: {repo.forks_count}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {liveDemoUrl && (
                <Button
                  asChild
                  size="sm"
                  className="group/button"
                  aria-label={`Open live demo for ${repo.name}`}
                >
                  <a href={liveDemoUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5 transition-transform group-hover/button:-translate-y-[1px]" />
                    Live demo
                  </a>
                </Button>
              )}
              <Button
                asChild
                variant={liveDemoUrl ? "outline" : "default"}
                size="sm"
                className="group/button"
                aria-label={`Open GitHub repo for ${repo.name}`}
              >
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <Github className="mr-1.5 h-3.5 w-3.5 transition-transform group-hover/button:-translate-y-[1px]" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

