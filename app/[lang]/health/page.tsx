import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPageView } from "@/components/pages/CategoryPageView";
import { isNonDefaultLocale } from "@/lib/i18n/config";
import { getUiDictionary } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isNonDefaultLocale(lang)) return {};
  const ui = getUiDictionary(lang);
  return buildPageMetadata({
    title: ui.categories.health.seoTitle,
    description: ui.categories.health.seoDescription,
    path: "/health/",
    locale: lang,
  });
}

export default async function LocalizedHealthPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isNonDefaultLocale(lang)) notFound();
  return <CategoryPageView category="health" locale={lang} />;
}
