import type { MetadataRoute } from "next";
import { SITE_LIVE, SITE_URL } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: SITE_LIVE
      ? [
          { userAgent: "*", allow: "/" },
          { userAgent: "Googlebot", allow: "/" },
          { userAgent: "Googlebot-Image", allow: "/" },
        ]
      : { userAgent: "*", disallow: "/" },
    sitemap: SITE_LIVE ? `${SITE_URL}/sitemap.xml` : undefined,
    host: SITE_LIVE ? SITE_URL : undefined,
  };
}
