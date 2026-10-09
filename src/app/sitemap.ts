import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { detoxPrograms } from "@/content/detox";
import { posts } from "@/content/journal";

const staticRoutes = [
  "",
  "/about",
  "/spaces",
  "/yoga",
  "/yoga/schedule",
  "/yoga/teachers",
  "/yoga/private",
  "/events",
  "/teacher-training",
  "/wellness",
  "/wellness/detox",
  "/wellness/ayurveda",
  "/wellness/theta-healing",
  "/eat-shop/restaurant",
  "/eat-shop/market",
  "/eat-shop/shop",
  "/eat-shop/sunday-market",
  "/journal",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r}`,
      lastModified: now,
      priority: r === "" ? 1 : r.split("/").length === 2 ? 0.8 : 0.6,
    })),
    ...detoxPrograms.map((p) => ({ url: `${site.url}/wellness/detox/${p.slug}`, lastModified: now, priority: 0.6 })),
    ...posts.map((p) => ({ url: `${site.url}/journal/${p.slug}`, lastModified: new Date(p.date), priority: 0.5 })),
  ];
}
