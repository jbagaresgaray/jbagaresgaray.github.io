import type { Metadata, Viewport } from "next";
import { Roboto, Rubik } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// Display face for headings and UI labels, body face for running text (as on Satner).
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik", display: "swap" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-roboto", display: "swap" });

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
  themeColor: "#4458dc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${roboto.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
