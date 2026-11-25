import { AboutPageView } from "@/components/pages/PolicyPagesView";
import { getUiDictionary } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

const ui = getUiDictionary("en");

export const metadata = buildPageMetadata({
  title: ui.pages.about.seoTitle,
  description: ui.pages.about.seoDescription,
  path: "/about/",
  locale: "en",
});

export default function AboutPage() {
  return <AboutPageView locale="en" />;
}
