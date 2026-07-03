export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
    toggleTheme: string;
    toggleLocale: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
  };
  hero: {
    greeting: string;
    role: string;
    intro: string;
    ctaProjects: string;
    ctaContact: string;
    avatarAlt: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    highlight: string;
  };
  skills: {
    heading: string;
    subheading: string;
  };
  projects: {
    heading: string;
    subheading: string;
    liveDemo: string;
    code: string;
    previewAlt: string;
  };
  contact: {
    heading: string;
    subheading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    connectHeading: string;
    validation: {
      nameMin: string;
      nameMax: string;
      emailInvalid: string;
      messageMin: string;
      messageMax: string;
    };
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}
