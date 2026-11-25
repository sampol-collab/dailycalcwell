import { getCalculatorGuide } from "@/lib/content";
import { CalculatorGuide } from "@/lib/content/types";
import { Locale, NonDefaultLocale } from "../config";
import { DE_GUIDES } from "./de";
import { ES_GUIDES } from "./es";
import { FR_GUIDES } from "./fr";
import { HI_GUIDES, LocalizedGuideBody } from "./hi";
import { PT_GUIDES } from "./pt";

const GUIDES_BY_LOCALE: Record<
  NonDefaultLocale,
  Record<string, LocalizedGuideBody>
> = {
  hi: HI_GUIDES,
  es: ES_GUIDES,
  fr: FR_GUIDES,
  de: DE_GUIDES,
  pt: PT_GUIDES,
};

export function getLocalizedCalculatorGuide(
  slug: string,
  locale: Locale
): CalculatorGuide {
  const englishGuide = getCalculatorGuide(slug);
  if (locale === "en") {
    return englishGuide;
  }
  const localized = GUIDES_BY_LOCALE[locale][slug];
  if (!localized) {
    throw new Error(`Missing localized guide for ${slug} (${locale})`);
  }
  return {
    ...localized,
    references: englishGuide.references,
  };
}
