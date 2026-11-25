import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SitemapPageView } from "@/components/pages/PolicyPagesView";
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
    title: ui.pages.sitemap.seoTitle,
    description: ui.pages.sitemap.seoDescription,
    path: "/sitemap-page/",
    locale: lang,
  });
}

export default async function LocalizedSitemapPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isNonDefaultLocale(lang)) notFound();
  return <SitemapPageView locale={lang} />;
}
