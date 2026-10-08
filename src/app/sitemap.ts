import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Generated as a static sitemap.xml, including for the GitHub Pages export.
export const dynamic = "force-static";

// The site is a single page (sections are #anchors, not URLs), so there's one entry.
// lastModified is the build time: every deploy publishes new content. Add new routes
// here, or switch to generateSitemaps once there are thousands of URLs.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Matches the canonical URL Next.js writes for "/" (no trailing slash).
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
