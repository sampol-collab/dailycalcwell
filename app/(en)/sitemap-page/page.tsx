import { SitemapPageView } from "@/components/pages/PolicyPagesView";
import { getUiDictionary } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

const ui = getUiDictionary("en");

export const metadata = buildPageMetadata({
  title: ui.pages.sitemap.seoTitle,
  description: ui.pages.sitemap.seoDescription,
  path: "/sitemap-page/",
  locale: "en",
});

export default function HtmlSitemapPage() {
  return <SitemapPageView locale="en" />;
}
