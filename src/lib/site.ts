// Site-wide facts used by metadata, robots.txt, sitemap.xml and JSON-LD.
// The canonical address is the GitHub Pages site; the Vercel deployment (which serves the
// contact API) points its canonical tags here too, so search engines index one copy.

export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://jbagaresgaray.github.io").replace(/\/$/, ""),
  name: "Philip Cesar Garay",
  title: "Philip Cesar Garay — Frontend, Mobile & Full-Stack Developer",
  description:
    "Freelance frontend, mobile and full-stack developer with 12+ years' experience. React, React Native, Flutter, Angular and Node.js apps for startups.",
  jobTitle: "Freelance Frontend, Mobile & Full-Stack Developer",
  locale: "en_US",
  email: "dev.philipcesar@gmail.com",
  twitter: "@Janphil17",
  location: { city: "Manila", country: "PH" },
  sameAs: ["https://github.com/jbagaresgaray", "https://www.linkedin.com/in/jbagaresgaray/"],
  keywords: [
    "freelance full-stack developer",
    "frontend developer",
    "mobile app developer",
    "React Native developer",
    "Flutter developer",
    "Angular developer",
    "Next.js developer",
    "Node.js developer",
    "Ionic developer",
    "hire a mobile app developer in the Philippines",
  ],
} as const;
