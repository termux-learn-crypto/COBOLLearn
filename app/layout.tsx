import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://cobol-learn.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "COBOLLearn — Beginner to Banking COBOL Course",
    template: "%s | COBOLLearn",
  },
  description:
    "COBOL bilkul zero se seekhein — beginner se mainframe banking-level projects tak, Hinglish me. Lessons, quizzes, projects aur progress tracking.",
  keywords: [
    "COBOL",
    "COBOL tutorial",
    "mainframe",
    "JCL",
    "DB2",
    "banking COBOL",
    "learn COBOL",
  ],
  authors: [{ name: "COBOLLearn" }],
  openGraph: {
    title: "COBOLLearn — Beginner to Banking COBOL Course",
    description:
      "Zero se banking-level COBOL tak — lessons, quizzes, projects aur progress.",
    url: siteUrl,
    siteName: "COBOLLearn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COBOLLearn",
    description: "Learn COBOL from zero to banking projects.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d4ed8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
