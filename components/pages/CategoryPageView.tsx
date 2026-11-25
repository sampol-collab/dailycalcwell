import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { CalculatorCategoryId } from "@/lib/constants/calculators";
import { getLocalizedCalculatorsByCategory } from "@/lib/i18n/calculators-meta";
import { DEFAULT_LOCALE, Locale, localizePath } from "@/lib/i18n/config";
import { getUiDictionary } from "@/lib/i18n/ui";

interface CategoryPageViewProps {
  category: CalculatorCategoryId;
  locale?: Locale;
}

export function CategoryPageView({
  category,
  locale = DEFAULT_LOCALE,
}: CategoryPageViewProps) {
  const ui = getUiDictionary(locale);
  const catUi = ui.categories[category];
  const otherCategoryPath = localizePath(
    category === "everyday" ? "/health/" : "/everyday/",
    locale
  );
  const currentCategoryPath = localizePath(`/${category}/`, locale);
  const calculators = getLocalizedCalculatorsByCategory(category, locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: ui.nav.home, path: localizePath("/", locale) },
          { name: catUi.name, path: currentCategoryPath },
        ]}
      />

      <header className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          {catUi.name}
        </h1>
        <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
          {catUi.intro}
        </p>
      </header>

      {category === "health" && "notice" in catUi && (
        <div
          role="note"
          className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-sm text-slate-800"
        >
          <AlertTriangle
            className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
            aria-hidden="true"
          />
          <p className="leading-relaxed">{catUi.notice}</p>
        </div>
      )}

      <section aria-label={catUi.name} className="mt-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc) => (
            <CalculatorCard key={calc.slug} calculator={calc} locale={locale} />
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-3 text-sm leading-relaxed text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">
          {catUi.sectionHeading}
        </h2>
        <p>{catUi.sectionBody}</p>
        <p>
          {catUi.crossLinkPrefix}{" "}
          <Link
            href={otherCategoryPath}
            className="font-semibold text-sky-700 underline hover:text-sky-900"
          >
            {catUi.crossLinkLabel}
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
