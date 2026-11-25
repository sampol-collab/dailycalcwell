import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePageView } from "@/components/pages/HomePageView";
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
    title: ui.home.seoTitle,
    description: ui.home.seoDescription,
    path: "/",
    locale: lang,
  });
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isNonDefaultLocale(lang)) notFound();
  return <HomePageView locale={lang} />;
}
