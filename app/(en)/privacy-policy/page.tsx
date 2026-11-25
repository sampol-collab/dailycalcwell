import { PrivacyPageView } from "@/components/pages/PolicyPagesView";
import { getUiDictionary } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

const ui = getUiDictionary("en");

export const metadata = buildPageMetadata({
  title: ui.pages.privacy.seoTitle,
  description: ui.pages.privacy.seoDescription,
  path: "/privacy-policy/",
  locale: "en",
});

export default function PrivacyPolicyPage() {
  return <PrivacyPageView locale="en" />;
}
