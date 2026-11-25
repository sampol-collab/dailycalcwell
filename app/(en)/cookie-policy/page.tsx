import { CookiePageView } from "@/components/pages/PolicyPagesView";
import { getUiDictionary } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

const ui = getUiDictionary("en");

export const metadata = buildPageMetadata({
  title: ui.pages.cookie.seoTitle,
  description: ui.pages.cookie.seoDescription,
  path: "/cookie-policy/",
  locale: "en",
});

export default function CookiePolicyPage() {
  return <CookiePageView locale="en" />;
}
