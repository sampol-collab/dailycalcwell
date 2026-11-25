import { CategoryPageView } from "@/components/pages/CategoryPageView";
import { getUiDictionary } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

const ui = getUiDictionary("en");

export const metadata = buildPageMetadata({
  title: ui.categories.health.seoTitle,
  description: ui.categories.health.seoDescription,
  path: "/health/",
  locale: "en",
  keywords: [
    "health calculators",
    "BMI calculator",
    "BMR calculator",
    "TDEE calculator",
    "calorie calculator",
    "pregnancy due date calculator",
    "ovulation calculator",
  ],
});

export default function HealthCategoryPage() {
  return <CategoryPageView category="health" locale="en" />;
}
