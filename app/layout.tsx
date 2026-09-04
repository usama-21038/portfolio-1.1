import type { Metadata } from "next";
import { Space_Grotesk, Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import CursorGlow from "@/components/CursorGlow";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Usama Bin Hasan — Full-Stack Developer",
  description:
    "Portfolio of Usama Bin Hasan, a full-stack developer building reliable web products with Next.js, TypeScript, Express and PostgreSQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="font-body bg-paper text-ink antialiased">
        <div
          aria-hidden="true"
          className="noise-overlay pointer-events-none fixed inset-0 z-[60] opacity-[0.025]"
        />
        {children}
        <CursorGlow />
      </body>
    </html>
  );
}
