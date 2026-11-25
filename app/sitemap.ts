import type { MetadataRoute } from "next";
import { CALCULATORS, getSiteUrl } from "@/lib/constants/calculators";
import { SUPPORTED_LOCALES, localizePath } from "@/lib/i18n/config";
import { buildLanguageAlternates } from "@/lib/seo/metadata";

const STATIC_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/everyday/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/health/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/about/", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact/", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/privacy-policy/", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/terms/", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/disclaimer/", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/editorial-policy/", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/cookie-policy/", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/sitemap-page/", priority: 0.5, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastMod = new Date("2026-11-24T00:00:00.000Z");

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.flatMap((route) => {
    const alternates = { languages: buildLanguageAlternates(route.path) };
    return SUPPORTED_LOCALES.map((locale) => ({
      url: `${siteUrl}${localizePath(route.path, locale)}`,
      lastModified: lastMod,
      changeFrequency: route.changeFrequency,
      priority: locale === "en" ? route.priority : Number((route.priority * 0.9).toFixed(2)),
      alternates,
    }));
  });

  const calculatorEntries: MetadataRoute.Sitemap = CALCULATORS.flatMap((calc) => {
    const basePath = `/${calc.slug}/`;
    const alternates = { languages: buildLanguageAlternates(basePath) };
    const calcLastMod = new Date(`${calc.lastReviewed}T00:00:00.000Z`);

    return SUPPORTED_LOCALES.map((locale) => ({
      url: `${siteUrl}${localizePath(basePath, locale)}`,
      lastModified: calcLastMod,
      changeFrequency: "monthly" as const,
      priority:
        locale === "en"
          ? calc.popular
            ? 0.9
            : 0.8
          : calc.popular
            ? 0.8
            : 0.7,
      alternates,
    }));
  });

  return [...staticEntries, ...calculatorEntries];
}
