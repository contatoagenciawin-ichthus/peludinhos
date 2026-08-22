import type { MetadataRoute } from "next";
import { conditions, locations, SITE_URL } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/dermatologia-veterinaria", "/dra-daniela", "/onde-atendemos", "/para-veterinarios", "/duvidas-frequentes"];
  return [
    ...staticRoutes.map((route) => ({ url: `${SITE_URL}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...locations.map((item) => ({ url: `${SITE_URL}/onde-atendemos/${item.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...conditions.map((item) => ({ url: `${SITE_URL}/condicoes/${item.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
