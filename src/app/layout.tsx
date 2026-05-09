import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rooftop.io"),
  title: {
    default: "Rooftop — Built for teams that ship",
    template: "%s · Rooftop",
  },
  description:
    "Rooftop is the modern operating layer for SaaS teams — connect your tools, automate your workflows, and ship faster.",
  openGraph: {
    title: "Rooftop — Built for teams that ship",
    description:
      "The modern operating layer for SaaS teams. Connect your tools, automate workflows, and ship faster.",
    url: "https://rooftop.io",
    siteName: "Rooftop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooftop — Built for teams that ship",
    description:
      "The modern operating layer for SaaS teams. Connect your tools, automate workflows, and ship faster.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
