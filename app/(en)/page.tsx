import { HomePageView } from "@/components/pages/HomePageView";
import { getUiDictionary } from "@/lib/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

const ui = getUiDictionary("en");

export const metadata = buildPageMetadata({
  title: ui.home.seoTitle,
  description: ui.home.seoDescription,
  path: "/",
  locale: "en",
  keywords: [
    "online calculators",
    "everyday calculators",
    "health calculators",
    "BMI calculator",
    "percentage calculator",
    "pregnancy due date calculator",
  ],
});

export default function HomePage() {
  return <HomePageView locale="en" />;
}
