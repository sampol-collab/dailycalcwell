import { EditorialPageView } from "@/components/pages/PolicyPagesView";
import { getUiDictionary } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

const ui = getUiDictionary("en");

export const metadata = buildPageMetadata({
  title: ui.pages.editorial.seoTitle,
  description: ui.pages.editorial.seoDescription,
  path: "/editorial-policy/",
  locale: "en",
});

export default function EditorialPolicyPage() {
  return <EditorialPageView locale="en" />;
}
