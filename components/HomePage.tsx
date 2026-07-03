"use client";

import { useLocale } from "@/lib/i18n/context";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";

export function HomePage() {
  const { dict } = useLocale();

  return (
    <main id="main-content">
      <Hero dict={dict} />
      <About dict={dict} />
      <Skills dict={dict} />
      <Projects dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
