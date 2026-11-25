import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DisclaimerPageView } from "@/components/pages/PolicyPagesView";
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
    title: ui.pages.disclaimer.seoTitle,
    description: ui.pages.disclaimer.seoDescription,
    path: "/disclaimer/",
    locale: lang,
  });
}

export default async function LocalizedDisclaimerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isNonDefaultLocale(lang)) notFound();
  return <DisclaimerPageView locale={lang} />;
}
