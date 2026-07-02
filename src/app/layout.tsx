import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://derhasad.vercel.app"),

  title: {
    default: "Derhasad Basumatary | Full Stack Developer",
    template: "%s | Derhasad Basumatary",
  },

  description:
    "Premium portfolio of Derhasad Basumatary — Full Stack Developer, Software Engineer, UI/UX Enthusiast and Problem Solver.",

  keywords: [
    "Derhasad Basumatary",
    "Portfolio",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
  ],

  authors: [{ name: "Derhasad Basumatary" }],

  creator: "Derhasad Basumatary",

  applicationName: "Derhasad Portfolio",

  category: "technology",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Derhasad Basumatary | Portfolio",
    description:
      "Modern, responsive, premium developer portfolio built with Next.js.",
    url: "https://derhasad.vercel.app",
    siteName: "Derhasad Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Derhasad Basumatary",
    description: "Premium Full Stack Developer Portfolio",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${spaceGrotesk.variable}
          antialiased
          bg-background
          text-foreground
          min-h-screen
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}