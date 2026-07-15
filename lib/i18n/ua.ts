import type { Dictionary } from "./types";

const ua: Dictionary = {
  meta: {
    title: "Андрій Скоропад — Frontend / FullStack Developer",
    description:
      "Портфоліо Андрія Скоропада — Frontend (FullStack) розробника, випускника GOIT. Проєкти на React, Next.js, Node.js та Express.",
  },
  nav: {
    about: "Про мене",
    skills: "Навички",
    projects: "Проєкти",
    contact: "Контакти",
    toggleTheme: "Перемкнути тему",
    toggleLocale: "Switch to English",
    openMenu: "Відкрити меню",
    closeMenu: "Закрити меню",
    skipToContent: "Перейти до основного контенту",
  },
  hero: {
    greeting: "Привіт, я Андрій",
    role: "Frontend Developer (FullStack, GOIT graduate)",
    intro:
      "Створюю швидкі, доступні та охайні вебзастосунки — від макету до продакшн-деплою.",
    ctaProjects: "Переглянути проєкти",
    ctaContact: "Зв'язатись",
    avatarAlt: "Аватар Андрія Скоропада",
  },
  about: {
    heading: "Про мене",
    paragraphs: [
      "Мене звати Андрій Скоропад, я Frontend/FullStack розробник. Пройшов інтенсивний курс FullStack Developer у GOIT, де отримав практичні навички розробки сучасних вебзастосунків — від адаптивної верстки до серверної частини на Node.js.",
      "Люблю перетворювати макети на швидкі, доступні та охайно структуровані інтерфейси, а також розбиратися, як усе працює під капотом — від REST API до деплою. Постійно вдосконалююсь, працюючи над командними та соло проєктами.",
    ],
    highlight: "GOIT · FullStack Developer",
  },
  skills: {
    heading: "Навички",
    subheading: "Технології та інструменти, з якими я працюю щодня",
  },
  projects: {
    heading: "Проєкти",
    subheading: "Кілька робіт із мого портфоліо",
    liveDemo: "Live Demo",
    code: "GitHub",
    previewAlt: "Прев'ю проєкту",
    detailsCta: "Деталі",
    closeModal: "Закрити",
    roleLabel: "Роль",
    periodLabel: "Період",
    techStackLabel: "Технології",
    linksHeading: "Посилання",
    galleryPrev: "Попереднє зображення",
    galleryNext: "Наступне зображення",
  },
  contact: {
    heading: "Зв'язатись",
    subheading: "Маєте пропозицію чи запитання? Напишіть мені.",
    nameLabel: "Ім'я",
    namePlaceholder: "Ваше ім'я",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Повідомлення",
    messagePlaceholder: "Розкажіть, чим я можу допомогти...",
    fileLabel: "Вкладення (необов'язково)",
    fileHint: "JPG, PNG, WEBP або PDF, до 5MB",
    fileRemoveLabel: "Видалити файл",
    submit: "Надіслати повідомлення",
    submitting: "Надсилання...",
    success: "Дякую! Ваше повідомлення надіслано, я відповім найближчим часом.",
    error: "Не вдалося надіслати повідомлення. Спробуйте ще раз пізніше.",
    connectHeading: "Або напишіть напряму",
    validation: {
      nameMin: "Ім'я має містити щонайменше 2 символи",
      nameMax: "Ім'я занадто довге",
      emailInvalid: "Введіть коректний email",
      messageMin: "Повідомлення має містити щонайменше 10 символів",
      messageMax: "Повідомлення занадто довге",
      fileTooLarge: "Файл має бути не більше 5MB",
      fileInvalidType: "Дозволені лише файли JPG, PNG, WEBP або PDF",
    },
  },
  footer: {
    rights: "Усі права захищено.",
    builtWith: "Створено на Next.js, TypeScript та Tailwind CSS.",
  },
};

export default ua;
