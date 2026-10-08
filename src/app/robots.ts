import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Generated as a static robots.txt, including for the GitHub Pages export.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The contact form's endpoint (Vercel only) has nothing worth indexing.
        disallow: "/api/",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
