import type { MetadataRoute } from "next";
import { SITE_LIVE, SITE_URL } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: SITE_LIVE
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: SITE_LIVE ? `${SITE_URL}/sitemap.xml` : undefined,
  };
}
