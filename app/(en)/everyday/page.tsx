import { CategoryPageView } from "@/components/pages/CategoryPageView";
import { getUiDictionary } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

const ui = getUiDictionary("en");

export const metadata = buildPageMetadata({
  title: ui.categories.everyday.seoTitle,
  description: ui.categories.everyday.seoDescription,
  path: "/everyday/",
  locale: "en",
  keywords: [
    "everyday calculators",
    "percentage calculator",
    "age calculator",
    "date calculator",
    "unit converter",
    "discount calculator",
  ],
});

export default function EverydayCategoryPage() {
  return <CategoryPageView category="everyday" locale="en" />;
}
