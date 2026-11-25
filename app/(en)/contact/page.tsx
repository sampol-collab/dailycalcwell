import { ContactPageView } from "@/components/pages/PolicyPagesView";
import { getUiDictionary } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

const ui = getUiDictionary("en");

export const metadata = buildPageMetadata({
  title: ui.pages.contact.seoTitle,
  description: ui.pages.contact.seoDescription,
  path: "/contact/",
  locale: "en",
});

export default function ContactPage() {
  return <ContactPageView locale="en" />;
}
