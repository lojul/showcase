"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { FeaturedProject } from "@/lib/featuredProjects";
import { cn } from "@/lib/utils";

type FeaturedProjectCardProps = {
  project: FeaturedProject;
  index: number;
};

export function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group h-full"
    >
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm",
          "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg"
        )}
      >
        {/* Hero image with overlay */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            priority={index < 3}
          />
          {/* Hover overlay with demo CTA */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 transition-all duration-300 group-hover:bg-slate-900/40 group-hover:opacity-100">
            <Button
              asChild
              size="lg"
              className="translate-y-2 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open live demo: ${project.name}`}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View live demo
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4 md:p-5">
          <h3 className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map(({ label, colorClass }) => (
              <span
                key={label}
                className={cn(
                  "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
                  colorClass
                )}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Button asChild size="sm">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live demo
              </a>
            </Button>
            {project.githubUrl && (
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
