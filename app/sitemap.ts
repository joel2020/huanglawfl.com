import type { MetadataRoute } from "next";
import { landingPages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.huanglawfl.com";
  const lastModified = new Date();
  const routes = [
    "/",
    "/about",
    "/practice-areas",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
    "/disclaimer",
    ...landingPages.map((page) => `/${page.slug}`),
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/practice-areas" || path === "/about" || path === "/contact" ? 0.9 : path.includes("attorney") || path.includes("lawyer") || path.includes("litigation") ? 0.8 : 0.5,
  }));
}
