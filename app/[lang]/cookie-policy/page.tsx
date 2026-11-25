import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CookiePageView } from "@/components/pages/PolicyPagesView";
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
    title: ui.pages.cookie.seoTitle,
    description: ui.pages.cookie.seoDescription,
    path: "/cookie-policy/",
    locale: lang,
  });
}

export default async function LocalizedCookiePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isNonDefaultLocale(lang)) notFound();
  return <CookiePageView locale={lang} />;
}
