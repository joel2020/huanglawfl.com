import type { MetadataRoute } from "next";
import { landingPages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://huanglawfl.com";
  const lastModified = new Date();
  const routes = [
    "/",
    "/privacy-policy",
    "/terms-of-use",
    "/disclaimer",
    ...landingPages.map((page) => `/${page.slug}`),
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.includes("attorney") || path.includes("dispute") || path.includes("litigation") ? 0.8 : 0.45,
  }));
}
