"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import type { Project } from "@/types";
import { useLocale } from "@/lib/i18n/context";

const STACK_PREVIEW_LIMIT = 4;

export function ProjectCard({ project }: { project: Project }) {
  const { locale, dict } = useLocale();
  const [detailsOpen, setDetailsOpen] = useState(false);

  const visibleStack = project.stack.slice(0, STACK_PREVIEW_LIMIT);
  const hiddenStackCount = project.stack.length - visibleStack.length;
  const firstLink = project.links?.[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/60">
      <button
        type="button"
        onClick={() => setDetailsOpen(true)}
        className="relative aspect-[8/5] w-full overflow-hidden bg-surface-muted"
      >
        <Image
          src={project.images[0]}
          alt={`${dict.projects.previewAlt}: ${project.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary[locale]}
        </p>

        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {visibleStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </li>
          ))}
          {hiddenStackCount > 0 && (
            <li className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              +{hiddenStackCount}
            </li>
          )}
        </ul>

        <div className="mt-2 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setDetailsOpen(true)}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            {dict.projects.detailsCta}
          </button>
          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {dict.projects.liveDemo}
            </a>
            {firstLink && (
              <a
                href={firstLink.href}
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
      </div>

      <ProjectDetailModal
        project={project}
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
      />
    </article>
  );
}
