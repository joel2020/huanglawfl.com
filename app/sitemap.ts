import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://huanglawfl.com";
  const lastModified = new Date();

  return ["/", "/privacy", "/terms", "/disclaimer"].map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.4,
  }));
}
