import type { ComponentType, SVGProps } from "react";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { socialLinks } from "@/lib/data";
import type { SocialIcon } from "@/types";
import type { Dictionary } from "@/lib/i18n/types";

const iconMap: Record<SocialIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  telegram: Send,
  mail: Mail,
};

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="scroll-mt-20 bg-surface-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {dict.contact.heading}
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            {dict.contact.subheading}
          </p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <ContactForm />
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="flex h-full flex-col justify-center gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {dict.contact.connectHeading}
              </h3>
              <ul className="flex flex-col gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.icon === "mail" ? undefined : "_blank"}
                        rel={
                          link.icon === "mail"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
