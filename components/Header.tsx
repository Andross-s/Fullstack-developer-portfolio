"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleToggle } from "./LocaleToggle";
import { cn } from "@/lib/utils";

export function Header() {
  const { dict } = useLocale();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#about", label: dict.nav.about },
    { href: "#skills", label: dict.nav.skills },
    { href: "#projects", label: dict.nav.projects },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          Andrii<span className="text-accent">.</span>dev
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleToggle />
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-border transition-[max-height] duration-300 ease-in-out md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <nav
          className="flex flex-col gap-1 bg-background px-4 py-4"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-muted hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-3 px-2">
            <LocaleToggle />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
