import type { NextConfig } from "next";

// The GitHub Pages workflow sets STATIC_EXPORT=true (.github/workflows/deploy.yml).
// Vercel builds leave it unset, so the contact form's API route keeps running there.
const staticExport = process.env.STATIC_EXPORT === "true";

// GitHub Pages serves a "<user>.github.io" repository at the domain root and any
// other repository at "/<repo>", so only a project repository needs a base path.
const repoName = "jbagaresgaray.github.io";
const basePath =
  staticExport && process.env.NODE_ENV === "production" && !repoName.endsWith(".github.io") ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  // Static HTML export into out/, which the workflow uploads to GitHub Pages.
  output: staticExport ? "export" : undefined,
  basePath,
  assetPrefix: basePath,
  images: {
    // GitHub Pages only serves static files, so Next.js's image optimizer can't run.
    unoptimized: true,
  },
};

export default nextConfig;
