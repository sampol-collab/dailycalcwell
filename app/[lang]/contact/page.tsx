import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactPageView } from "@/components/pages/PolicyPagesView";
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
    title: ui.pages.contact.seoTitle,
    description: ui.pages.contact.seoDescription,
    path: "/contact/",
    locale: lang,
  });
}

export default async function LocalizedContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isNonDefaultLocale(lang)) notFound();
  return <ContactPageView locale={lang} />;
}
