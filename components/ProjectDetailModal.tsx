"use client";

import { ExternalLink } from "lucide-react";
import { Dialog } from "@/components/Dialog";
import { ProjectGallery } from "@/components/ProjectGallery";
import { useLocale } from "@/lib/i18n/context";
import type { Project } from "@/types";

interface ProjectDetailModalProps {
  project: Project;
  open: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  open,
  onClose,
}: ProjectDetailModalProps) {
  const { locale, dict } = useLocale();
  const titleId = `project-detail-${project.id}`;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      titleId={titleId}
      closeLabel={dict.projects.closeModal}
    >
      <div className="flex flex-col gap-4">
        <ProjectGallery
          images={project.images}
          alt={`${dict.projects.previewAlt}: ${project.title}`}
          prevLabel={dict.projects.galleryPrev}
          nextLabel={dict.projects.galleryNext}
        />

        <div>
          <h3 id={titleId} className="text-xl font-semibold text-foreground">
            {project.title}
          </h3>
          {(project.role || project.period) && (
            <p className="mt-1 text-sm text-muted-foreground">
              {project.role && (
                <span>
                  {dict.projects.roleLabel}: {project.role[locale]}
                </span>
              )}
              {project.role && project.period && " · "}
              {project.period && (
                <span>
                  {dict.projects.periodLabel}: {project.period}
                </span>
              )}
            </p>
          )}
        </div>

        <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
          {project.fullDescription[locale]}
        </p>

        <div>
          <h4 className="mb-2 text-sm font-semibold text-foreground">
            {dict.projects.techStackLabel}
          </h4>
          <ul className="flex flex-wrap gap-2" aria-label={dict.projects.techStackLabel}>
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            {dict.projects.liveDemo}
          </a>
          {project.links && project.links.length > 0 && (
            <>
              <h4 className="sr-only">{dict.projects.linksHeading}</h4>
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  {link.label[locale]}
                </a>
              ))}
            </>
          )}
        </div>
      </div>
    </Dialog>
  );
}
