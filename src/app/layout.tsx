import type { Metadata } from "next";
import { Roboto, Rubik } from "next/font/google";
import "./globals.css";

// Display face for headings and UI labels, body face for running text (as on Satner).
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik", display: "swap" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-roboto", display: "swap" });

export const metadata: Metadata = {
  title: "Philip Cesar Garay — UI/UX Designer, Developer & Copywriter",
  description:
    "Freelance UI/UX designer, full-stack developer and copywriter. I help founders launch web and mobile apps that look sharp, work flawlessly and convert.",
  keywords: [
    "Freelance UI/UX Designer",
    "Freelance Full-Stack Developer",
    "Conversion Copywriter",
    "React Native Developer",
    "Mobile App Developer Philippines",
    "Startup MVP Development",
    "Landing Page Design",
    "Next.js Developer",
  ],
  authors: [{ name: "Philip Cesar Garay" }],
  openGraph: {
    title: "Philip Cesar Garay — UI/UX Designer, Developer & Copywriter",
    description:
      "Freelance UI/UX designer, full-stack developer and copywriter. I help founders launch web and mobile apps that look sharp, work flawlessly and convert.",
    url: "https://jbagaresgaray.github.io",
    siteName: "Philip Cesar Garay",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Philip Cesar Garay — UI/UX Designer, Developer & Copywriter",
    description:
      "Freelance UI/UX designer, full-stack developer and copywriter. I help founders launch web and mobile apps that look sharp, work flawlessly and convert.",
    creator: "@Janphil17",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Philip Cesar Garay",
              jobTitle: "Freelance UI/UX Designer, Full-Stack Developer & Copywriter",
              url: "https://jbagaresgaray.github.io/",
              sameAs: [
                "https://github.com/jbagaresgaray",
                "https://www.linkedin.com/in/jbagaresgaray/",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
