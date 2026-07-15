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
    role: "Frontend / FullStack Developer",
    intro:
      "I create websites and web applications that load quickly, look flawless on any device, and help your business attract clients.",
    ctaProjects: "View Projects",
    ctaContact: "Discuss the project",
    avatarAlt: "Avatar of Andrii Skoropad",
  },
  about: {
    heading: "About Me",
    paragraphs: [
      "I am a Frontend/Full-Stack developer specializing in building modern web applications—from responsive layouts to server-side logic using Node.js.",
      " My approach is simple: code should be not only functional but also fast, accessible, and maintainable for future product development. I consider every detail—from UX nuances to REST API architecture—to ensure the result aligns with actual business goals, not just the technical specifications.",
      " I am open to collaborating on new projects, whether for one-off tasks or long-term partnerships.",
    ],
    highlight: "Available for freelance projects",
  },
  skills: {
    heading: "Skills",
    subheading:
      "Technologies I use daily to build reliable and scalable products",
  },
  projects: {
    heading: "Projects",
    subheading:
      "Selected works demonstrating an approach to solving real-world problems",
    liveDemo: "Live Demo",
    code: "GitHub",
    previewAlt: "Project preview",
    detailsCta: "Details",
    closeModal: "Close",
    roleLabel: "Role",
    periodLabel: "Period",
    techStackLabel: "Tech stack",
    linksHeading: "Links",
    galleryPrev: "Previous image",
    galleryNext: "Next image",
  },
  contact: {
    heading: "Get in Touch",
    subheading:
      "Do you have a project idea or need a consultation? Share the details — I'll get back to you within 24 hours.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me how I can help...",
    fileLabel: "Attachment (optional)",
    fileHint: "JPG, PNG, WEBP or PDF, up to 5MB",
    fileRemoveLabel: "Remove file",
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
      fileTooLarge: "File must be 5MB or smaller",
      fileInvalidType: "Only JPG, PNG, WEBP, or PDF files are allowed",
    },
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js, TypeScript and Tailwind CSS.",
  },
};

export default en;
