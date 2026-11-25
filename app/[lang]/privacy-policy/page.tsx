import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyPageView } from "@/components/pages/PolicyPagesView";
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
    title: ui.pages.privacy.seoTitle,
    description: ui.pages.privacy.seoDescription,
    path: "/privacy-policy/",
    locale: lang,
  });
}

export default async function LocalizedPrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isNonDefaultLocale(lang)) notFound();
  return <PrivacyPageView locale={lang} />;
}
