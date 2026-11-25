import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalculatorBySlug } from "@/components/calculators/CalculatorBySlug";
import { CALCULATORS, getCalculatorBySlug } from "@/lib/constants/calculators";
import { isNonDefaultLocale, NON_DEFAULT_LOCALES } from "@/lib/i18n/config";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of NON_DEFAULT_LOCALES) {
    for (const calc of CALCULATORS) {
      params.push({ lang, slug: calc.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isNonDefaultLocale(lang) || !getCalculatorBySlug(slug)) {
    return {};
  }
  return buildCalculatorMetadata(slug, lang);
}

export default async function LocalizedCalculatorPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isNonDefaultLocale(lang) || !getCalculatorBySlug(slug)) {
    notFound();
  }
  return <CalculatorBySlug slug={slug} locale={lang} />;
}
