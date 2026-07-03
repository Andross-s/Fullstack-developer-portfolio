import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    title: "Andrii Skoropad — Frontend / FullStack Developer",
    description:
      "Portfolio of Andrii Skoropad — a Frontend (FullStack) developer and GOIT graduate. Projects built with React, Next.js, Node.js and Express.",
  },
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    toggleTheme: "Toggle theme",
    toggleLocale: "Переключити на українську",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to main content",
  },
  hero: {
    greeting: "Hi, I'm Andrii",
    role: "Frontend Developer (FullStack, GOIT graduate)",
    intro:
      "I build fast, accessible, and polished web applications — from design to production deploy.",
    ctaProjects: "View Projects",
    ctaContact: "Get in Touch",
    avatarAlt: "Avatar of Andrii Skoropad",
  },
  about: {
    heading: "About Me",
    paragraphs: [
      "I'm Andrii Skoropad, a Frontend/FullStack developer. I completed an intensive FullStack Developer program at GOIT, gaining hands-on experience building modern web applications — from responsive UI to Node.js back ends.",
      "I enjoy turning designs into fast, accessible, well-structured interfaces, and digging into how things work under the hood — from REST APIs to deployment. I keep sharpening my skills through team and solo projects.",
    ],
    highlight: "GOIT · FullStack Developer",
  },
  skills: {
    heading: "Skills",
    subheading: "Technologies and tools I work with every day",
  },
  projects: {
    heading: "Projects",
    subheading: "A few pieces from my portfolio",
    liveDemo: "Live Demo",
    code: "GitHub",
    previewAlt: "Project preview",
  },
  contact: {
    heading: "Get in Touch",
    subheading: "Have a proposal or a question? Send me a message.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me how I can help...",
    submit: "Send Message",
    submitting: "Sending...",
    success: "Thanks! Your message has been sent, I'll get back to you soon.",
    error: "Couldn't send the message. Please try again later.",
    connectHeading: "Or reach out directly",
    validation: {
      nameMin: "Name must be at least 2 characters",
      nameMax: "Name is too long",
      emailInvalid: "Enter a valid email address",
      messageMin: "Message must be at least 10 characters",
      messageMax: "Message is too long",
    },
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js, TypeScript and Tailwind CSS.",
  },
};

export default en;
