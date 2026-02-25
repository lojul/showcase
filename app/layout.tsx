import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Vibe Coding Showcase – lojul",
  description:
    "A curated portfolio of AI-powered and vibe-coded projects by lojul, built with Next.js, Tailwind CSS, and Framer Motion.",
  metadataBase: new URL("https://ai-vibe-coding-showcase.vercel.app"),
  openGraph: {
    title: "AI Vibe Coding Showcase – lojul",
    description:
      "Explore AI experiments, coding vibes, and creative dev tools built by lojul.",
    url: "https://ai-vibe-coding-showcase.vercel.app",
    siteName: "AI Vibe Coding Showcase",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Vibe Coding Showcase – lojul",
    description:
      "Explore AI experiments, coding vibes, and creative dev tools built by lojul."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}

