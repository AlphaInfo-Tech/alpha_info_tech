import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alphainfotech.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/our-model",
    "/voice2fill",
    "/voice2fill/privacy",
    "/voice2fill/terms",
    "/voice2fill/support",
    "/request-access",
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
