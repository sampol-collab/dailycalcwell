import { TermsPageView } from "@/components/pages/PolicyPagesView";
import { getUiDictionary } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

const ui = getUiDictionary("en");

export const metadata = buildPageMetadata({
  title: ui.pages.terms.seoTitle,
  description: ui.pages.terms.seoDescription,
  path: "/terms/",
  locale: "en",
});

export default function TermsPage() {
  return <TermsPageView locale="en" />;
}
