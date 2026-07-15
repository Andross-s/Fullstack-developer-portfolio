import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/lib/theme-context";
import { LocaleProvider } from "@/lib/i18n/context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Andrii Skoropad — Frontend / FullStack Developer",
    template: "%s | Andrii Skoropad",
  },
  description:
    "Frontend/FullStack developer building fast, accessible web apps with React, Next.js and Node.js. Available for new projects — let's bring your idea to life.",
  keywords: [
    "Andrii Skoropad",
    "Frontend Developer",
    "FullStack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "GOIT",
    "Web Development",
    "Hire Frontend Developer",
  ],
  authors: [{ name: "Andrii Skoropad" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Andrii Skoropad — Frontend / FullStack Developer",
    description:
      "I build fast, reliable web apps that help businesses grow. Explore my work in React, Next.js and Node.js.",
    url: siteUrl,
    siteName: "Andrii Skoropad Portfolio",
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrii Skoropad — Frontend / FullStack Developer",
    description:
      "I build fast, reliable web apps that help businesses grow. Explore my work in React, Next.js and Node.js.",
    images: ["/images/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ua"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <InteractiveBackground />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          <LocaleProvider>
            <Header />
            {children}
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
