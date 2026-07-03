import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n/types";

export function Projects({ dict }: { dict: Dictionary }) {
  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {dict.projects.heading}
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            {dict.projects.subheading}
          </p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
