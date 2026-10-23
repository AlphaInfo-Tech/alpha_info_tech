import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alphainfotech.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/our-model",
    "/fill-by-kural",
    "/founder-message",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
