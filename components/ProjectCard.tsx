"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/types";
import { useLocale } from "@/lib/i18n/context";

export function ProjectCard({ project }: { project: Project }) {
  const { locale, dict } = useLocale();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/60">
      <div className="relative aspect-[8/5] w-full overflow-hidden bg-surface-muted">
        <Image
          src={project.image}
          alt={`${dict.projects.previewAlt}: ${project.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description[locale]}
        </p>

        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-2 flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            {dict.projects.liveDemo}
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              {dict.projects.code}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
