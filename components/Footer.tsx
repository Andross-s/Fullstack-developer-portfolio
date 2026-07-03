"use client";

import type { ComponentType, SVGProps } from "react";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { socialLinks } from "@/lib/data";
import type { SocialIcon } from "@/types";
import { useLocale } from "@/lib/i18n/context";

const iconMap: Record<SocialIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  telegram: Send,
  mail: Mail,
};

export function Footer() {
  const { dict } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.icon === "mail" ? undefined : "_blank"}
                rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                title={link.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {year} Andrii Skoropad. {dict.footer.rights}
        </p>
        <p className="text-xs text-muted-foreground/70">
          {dict.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
