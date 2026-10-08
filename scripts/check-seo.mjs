#!/usr/bin/env node
// Checks the built home page for the SEO tags this site relies on.
//
//   node scripts/check-seo.mjs out                         # a static export folder
//   node scripts/check-seo.mjs https://jbagaresgaray.github.io   # a live site
//
// Exits with status 1 if any check fails, so CI can block a bad deploy.

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const target = process.argv[2] || "out";
const isUrl = /^https?:\/\//.test(target);

async function load(path) {
  if (isUrl) {
    const response = await fetch(new URL(path, target.endsWith("/") ? target : `${target}/`));
    return response.ok ? response.text() : null;
  }
  const file = join(target, path || "index.html");
  return existsSync(file) ? readFileSync(file, "utf8") : null;
}

const results = [];
const check = (name, ok, detail = "") => results.push({ name, ok: Boolean(ok), detail });

const decode = (value) =>
  value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const html = await load("");
if (!html) {
  console.error(`Could not read the home page from ${target}. Build first: STATIC_EXPORT=true npm run build`);
  process.exit(1);
}
const head = html.slice(0, html.indexOf("</head>"));

const meta = (key) => {
  const tag = head.match(new RegExp(`<meta[^>]+(?:name|property)="${key}"[^>]*>`));
  const content = tag?.[0].match(/content="([^"]*)"/);
  return content ? decode(content[1]) : null;
};
const link = (rel) => head.match(new RegExp(`<link[^>]+rel="${rel}"[^>]+href="([^"]+)"`))?.[1] ?? null;

// Basics
const title = decode(head.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
check("<title> present and ≤ 60 characters", title && title.length <= 60, `${title.length}: ${title}`);
const description = meta("description") ?? "";
check("Meta description present and ≤ 155 characters", description && description.length <= 155, `${description.length}`);
const canonical = link("canonical");
check("Canonical URL is absolute https", canonical?.startsWith("https://"), canonical ?? "missing");
check('<html lang="…"> set', /<html[^>]+lang="[a-z-]+"/.test(html));
check("Not blocked by a robots noindex", !/noindex/.test(meta("robots") ?? ""), meta("robots") ?? "no robots meta");
check("Favicon linked", link("icon"), link("icon") ?? "missing");
check("Apple touch icon linked", link("apple-touch-icon"), link("apple-touch-icon") ?? "missing");

// Open Graph and X/Twitter cards
for (const key of ["og:title", "og:description", "og:url", "og:type", "og:site_name"]) {
  check(`${key} present`, meta(key), meta(key) ?? "missing");
}
const ogImage = meta("og:image");
check("og:image is an absolute URL", ogImage?.startsWith("https://"), ogImage ?? "missing");
check("og:image is 1200×630", meta("og:image:width") === "1200" && meta("og:image:height") === "630");
check("og:image:alt present", meta("og:image:alt"));
check("twitter:card is summary_large_image", meta("twitter:card") === "summary_large_image");
check("twitter:image present", meta("twitter:image"), meta("twitter:image") ?? "missing");

// Structured data
const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
let types = [];
try {
  for (const block of blocks) {
    const data = JSON.parse(block);
    for (const node of data["@graph"] ?? [data]) types.push(node["@type"]);
  }
  check("JSON-LD parses", blocks.length > 0, `${blocks.length} block(s)`);
} catch (error) {
  check("JSON-LD parses", false, error.message);
}
for (const type of ["WebSite", "ProfilePage", "Person", "FAQPage"]) {
  check(`JSON-LD includes ${type}`, types.includes(type));
}

// Content that crawlers should see without running JavaScript
check("Exactly one <h1>", (html.match(/<h1[\s>]/g) ?? []).length === 1);
check("Every <img> has alt text", !/<img(?![^>]*\balt=)[^>]*>/.test(html));

// Discovery files
const robots = await load("robots.txt");
check("robots.txt exists and points to the sitemap", robots?.includes("Sitemap:"), robots ? "" : "missing");
const sitemap = await load("sitemap.xml");
check("sitemap.xml lists the exact canonical URL", sitemap && canonical && sitemap.includes(`<loc>${canonical}</loc>`), sitemap ? "" : "missing");

// Report
let failed = 0;
for (const { name, ok, detail } of results) {
  if (!ok) failed++;
  console.log(`${ok ? "✓" : "✗"} ${name}${detail && !ok ? `  (${detail})` : ""}`);
}
console.log(`\n${results.length - failed}/${results.length} checks passed for ${target}`);
process.exit(failed ? 1 : 0);
