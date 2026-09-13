// Absolute site URL, used for metadata, the sitemap, and robots.txt.
// Vercel sets VERCEL_PROJECT_PRODUCTION_URL on its own; set NEXT_PUBLIC_SITE_URL
// to override it (for example, when using a custom domain on another host).
const fromEnv =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export const siteUrl = new URL(fromEnv ?? "http://localhost:3000");
