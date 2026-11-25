export const DEFAULT_LOCALE = "en" as const;

export const NON_DEFAULT_LOCALES = ["hi", "es", "fr", "de", "pt"] as const;

export const SUPPORTED_LOCALES = [
  "en",
  "hi",
  "es",
  "fr",
  "de",
  "pt",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];
export type NonDefaultLocale = (typeof NON_DEFAULT_LOCALES)[number];

export interface LocaleConfig {
  code: Locale;
  name: string;
  nativeName: string;
  shortCode: string;
  ogLocale: string;
  intlLocale: string;
  hreflang: string;
}

export const LOCALE_CONFIG: Record<Locale, LocaleConfig> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    shortCode: "EN",
    ogLocale: "en_US",
    intlLocale: "en-US",
    hreflang: "en",
  },
  hi: {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    shortCode: "HI",
    ogLocale: "hi_IN",
    intlLocale: "hi-IN",
    hreflang: "hi",
  },
  es: {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    shortCode: "ES",
    ogLocale: "es_ES",
    intlLocale: "es-ES",
    hreflang: "es",
  },
  fr: {
    code: "fr",
    name: "French",
    nativeName: "Français",
    shortCode: "FR",
    ogLocale: "fr_FR",
    intlLocale: "fr-FR",
    hreflang: "fr",
  },
  de: {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    shortCode: "DE",
    ogLocale: "de_DE",
    intlLocale: "de-DE",
    hreflang: "de",
  },
  pt: {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    shortCode: "PT",
    ogLocale: "pt_BR",
    intlLocale: "pt-BR",
    hreflang: "pt",
  },
};

export function isValidLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function isNonDefaultLocale(value: string): value is NonDefaultLocale {
  return (NON_DEFAULT_LOCALES as readonly string[]).includes(value);
}

export function normalizeBasePath(path: string): string {
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  if (withLeading === "/") return "/";
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

/**
 * Strips any supported non-default locale prefix from a URL pathname,
 * returning the detected locale and the canonical English base path.
 */
export function parseLocaleFromPathname(pathname: string): {
  locale: Locale;
  basePath: string;
} {
  const normalized = normalizeBasePath(pathname || "/");
  for (const loc of NON_DEFAULT_LOCALES) {
    const prefix = `/${loc}/`;
    if (normalized === prefix) {
      return { locale: loc, basePath: "/" };
    }
    if (normalized.startsWith(prefix)) {
      const rest = normalized.slice(prefix.length - 1);
      return { locale: loc, basePath: normalizeBasePath(rest) };
    }
  }
  return { locale: "en", basePath: normalized };
}

/**
 * Builds a trailing-slash path for a given locale and basePath.
 */
export function localizePath(basePath: string, locale: Locale): string {
  const normalized = normalizeBasePath(basePath);
  if (locale === "en") {
    return normalized;
  }
  return normalized === "/" ? `/${locale}/` : `/${locale}${normalized}`;
}
