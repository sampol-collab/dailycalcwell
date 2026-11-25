import type { Metadata } from "next";
import { getSiteUrl, SITE_NAME } from "../constants/calculators";
import { getLocalizedCalculator } from "../i18n/calculators-meta";
import {
  DEFAULT_LOCALE,
  LOCALE_CONFIG,
  Locale,
  SUPPORTED_LOCALES,
  localizePath,
  normalizeBasePath,
} from "../i18n/config";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  keywords?: string[];
  noIndex?: boolean;
}

export function buildLanguageAlternates(
  basePath: string
): Record<string, string> {
  const siteUrl = getSiteUrl();
  const normalizedBase = normalizeBasePath(basePath);
  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    languages[LOCALE_CONFIG[loc].hreflang] = `${siteUrl}${localizePath(
      normalizedBase,
      loc
    )}`;
  }
  languages["x-default"] = `${siteUrl}${localizePath(
    normalizedBase,
    DEFAULT_LOCALE
  )}`;
  return languages;
}

export function buildPageMetadata({
  title,
  description,
  path,
  locale = DEFAULT_LOCALE,
  keywords,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const normalizedBase = normalizeBasePath(path);
  const localizedPath = localizePath(normalizedBase, locale);
  const canonicalUrl = `${siteUrl}${localizedPath}`;
  const ogImageUrl = `${siteUrl}/og-image.png`;
  const localeInfo = LOCALE_CONFIG[locale];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: buildLanguageAlternates(normalizedBase),
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: localeInfo.ogLocale,
      alternateLocale: SUPPORTED_LOCALES.filter((l) => l !== locale).map(
        (l) => LOCALE_CONFIG[l].ogLocale
      ),
      siteName: SITE_NAME,
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} – ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export function buildCalculatorMetadata(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
): Metadata {
  const calc = getLocalizedCalculator(slug, locale);
  return buildPageMetadata({
    title: calc.seoTitle,
    description: calc.seoDescription,
    path: `/${calc.slug}/`,
    locale,
    keywords: calc.keywords,
  });
}
