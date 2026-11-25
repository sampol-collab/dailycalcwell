import { DisclaimerPageView } from "@/components/pages/PolicyPagesView";
import { getUiDictionary } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

const ui = getUiDictionary("en");

export const metadata = buildPageMetadata({
  title: ui.pages.disclaimer.seoTitle,
  description: ui.pages.disclaimer.seoDescription,
  path: "/disclaimer/",
  locale: "en",
});

export default function DisclaimerPage() {
  return <DisclaimerPageView locale="en" />;
}
