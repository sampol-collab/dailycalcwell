import Link from "next/link";
import { ArrowRight, Calculator, HeartPulse } from "lucide-react";
import { CalculatorSearch } from "@/components/search/CalculatorSearch";
import { JsonLd } from "@/components/seo/JsonLd";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import {
  getLocalizedCalculatorsByCategory,
  getLocalizedPopularCalculators,
  getLocalizedRecentlyAddedCalculators,
} from "@/lib/i18n/calculators-meta";
import { DEFAULT_LOCALE, Locale, localizePath } from "@/lib/i18n/config";
import { getUiDictionary } from "@/lib/i18n/ui";
import { buildFaqSchema } from "@/lib/seo/structured-data";

interface HomePageViewProps {
  locale?: Locale;
}

export function HomePageView({ locale = DEFAULT_LOCALE }: HomePageViewProps) {
  const ui = getUiDictionary(locale);
  const everydayCalcs = getLocalizedCalculatorsByCategory("everyday", locale);
  const healthCalcs = getLocalizedCalculatorsByCategory("health", locale);
  const popularCalcs = getLocalizedPopularCalculators(locale);
  const recentCalcs = getLocalizedRecentlyAddedCalculators(locale);

  const everydayPath = localizePath("/everyday/", locale);
  const healthPath = localizePath("/health/", locale);

  return (
    <div className="bg-white">
      <JsonLd data={buildFaqSchema(ui.home.faqs)} />

      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 text-balance leading-tight">
              {ui.home.heroTitle}
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              {ui.home.heroSubtitle}
            </p>
          </div>

          {/* Prominent Calculator Search Box */}
          <div id="calculator-search" className="mx-auto mt-8 max-w-2xl">
            <CalculatorSearch id="homepage-search" />
          </div>

          {/* Two Primary Category Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Link
              href={everydayPath}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-sky-700">
                    {ui.home.categoryToolsLabel}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 group-hover:text-sky-800">
                    {ui.categories.everyday.name}
                  </h2>
                </div>
                <div className="rounded-xl bg-sky-50 p-2.5 text-sky-700">
                  <Calculator className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {ui.categories.everyday.intro}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 group-hover:text-sky-900">
                <span>{ui.home.browseEveryday}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </div>
            </Link>

            <Link
              href={healthPath}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-sky-700">
                    {ui.home.categoryToolsLabel}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 group-hover:text-sky-800">
                    {ui.categories.health.name}
                  </h2>
                </div>
                <div className="rounded-xl bg-sky-50 p-2.5 text-sky-700">
                  <HeartPulse className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {ui.categories.health.intro}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 group-hover:text-sky-900">
                <span>{ui.home.browseHealth}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 space-y-16">
        {/* Popular Calculators */}
        <section aria-labelledby="popular-heading">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <h2
                id="popular-heading"
                className="text-2xl font-bold tracking-tight text-slate-900"
              >
                {ui.home.popularHeading}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {ui.home.popularSubtitle}
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularCalcs.map((calc) => (
              <CalculatorCard key={calc.slug} calculator={calc} locale={locale} />
            ))}
          </div>
        </section>

        {/* Everyday Calculators Directory */}
        <section aria-labelledby="everyday-heading">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2
                id="everyday-heading"
                className="text-2xl font-bold tracking-tight text-slate-900"
              >
                {ui.home.everydayHeading}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {ui.categories.everyday.intro}
              </p>
            </div>
            <Link
              href={everydayPath}
              className="text-sm font-semibold text-sky-700 hover:underline whitespace-nowrap"
            >
              {ui.home.viewAllEveryday}
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {everydayCalcs.map((calc) => (
              <CalculatorCard key={calc.slug} calculator={calc} locale={locale} />
            ))}
          </div>
        </section>

        {/* Health Calculators Directory */}
        <section aria-labelledby="health-heading">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2
                id="health-heading"
                className="text-2xl font-bold tracking-tight text-slate-900"
              >
                {ui.home.healthHeading}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {ui.categories.health.intro}
              </p>
            </div>
            <Link
              href={healthPath}
              className="text-sm font-semibold text-sky-700 hover:underline whitespace-nowrap"
            >
              {ui.home.viewAllHealth}
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {healthCalcs.map((calc) => (
              <CalculatorCard key={calc.slug} calculator={calc} locale={locale} />
            ))}
          </div>
        </section>

        {/* Recently Added Calculators */}
        <section aria-labelledby="recent-heading">
          <h2
            id="recent-heading"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            {ui.home.recentHeading}
          </h2>
          <p className="mt-1 text-sm text-slate-600">{ui.home.recentSubtitle}</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recentCalcs.map((calc) => (
              <CalculatorCard key={calc.slug} calculator={calc} locale={locale} />
            ))}
          </div>
        </section>

        {/* Educational Introduction */}
        <section
          aria-labelledby="how-to-use-heading"
          className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8"
        >
          <h2
            id="how-to-use-heading"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            {ui.home.howToUseHeading}
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3 text-sm leading-relaxed text-slate-700">
            <div>
              <h3 className="font-bold text-slate-900">{ui.home.step1Title}</h3>
              <p className="mt-1.5">{ui.home.step1Body}</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">{ui.home.step2Title}</h3>
              <p className="mt-1.5">{ui.home.step2Body}</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">{ui.home.step3Title}</h3>
              <p className="mt-1.5">{ui.home.step3Body}</p>
            </div>
          </div>
        </section>

        {/* Homepage FAQs */}
        <section aria-labelledby="home-faq-heading">
          <h2
            id="home-faq-heading"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            {ui.home.faqHeading}
          </h2>
          <div className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {ui.home.faqs.map((faq, idx) => (
              <div key={idx} className="p-5 sm:p-6">
                <h3 className="text-base font-bold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
