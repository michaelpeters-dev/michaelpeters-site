import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Only the homepage is listed. /CS2340 is unlisted and marked noindex on the page itself.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl.toString() }];
}
