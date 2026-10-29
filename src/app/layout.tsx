import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// Coral's faces (src/app/tokens.css): General Sans throughout, loaded from Fontshare in the
// head below (it is not on Google Fonts), and Geist Mono for figures in a column.
const geistMono = Geist_Mono({ subsets: ["latin"], weight: "400", variable: "--font-geist-mono", display: "swap" });

// Share images, the favicon and the Apple touch icon come from the file conventions in
// this folder (opengraph-image.png, twitter-image.png, icon.svg, apple-icon.png).
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.name, url: `${site.url}/` }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
    firstName: "Philip Cesar",
    lastName: "Garay",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: site.twitter,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  // Coral's paper (--color-paper).
  themeColor: "oklch(97% 0.006 55)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
