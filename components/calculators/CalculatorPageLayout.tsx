import { ReactNode } from "react";
import Link from "next/link";
import { AlertTriangle, BookOpen, ExternalLink } from "lucide-react";
import {
  getLocalizedCalculator,
  getLocalizedPopularCalculators,
} from "@/lib/i18n/calculators-meta";
import { DEFAULT_LOCALE, Locale, localizePath } from "@/lib/i18n/config";
import { getLocalizedCalculatorGuide } from "@/lib/i18n/guides";
import { getUiDictionary } from "@/lib/i18n/ui";
import {
  buildFaqSchema,
  buildWebApplicationSchema,
} from "@/lib/seo/structured-data";
import { AdSlot } from "@/components/ads/AdSlot";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CalculatorCard } from "@/components/ui/CalculatorCard";

interface CalculatorPageLayoutProps {
  slug: string;
  locale?: Locale;
  children: ReactNode;
}

export function CalculatorPageLayout({
  slug,
  locale = DEFAULT_LOCALE,
  children,
}: CalculatorPageLayoutProps) {
  const ui = getUiDictionary(locale);
  const calc = getLocalizedCalculator(slug, locale);
  const guide = getLocalizedCalculatorGuide(slug, locale);

  const relatedCalculators = calc.relatedSlugs.map((relSlug) =>
    getLocalizedCalculator(relSlug, locale)
  );
  const popularCalculators = getLocalizedPopularCalculators(locale)
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  const breadcrumbs = [
    { name: ui.nav.home, path: localizePath("/", locale) },
    { name: calc.categoryName, path: calc.categoryPath },
    { name: calc.name, path: localizePath(`/${calc.slug}/`, locale) },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <JsonLd data={buildWebApplicationSchema(calc, locale)} />
      <JsonLd data={buildFaqSchema(guide.faqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <header className="mb-8">
        <p className="text-xs font-medium text-slate-600">
          <Link
            href={calc.categoryPath}
            className="text-sky-700 hover:underline"
          >
            {calc.categoryName}
          </Link>
          <span aria-hidden="true"> · </span>
          <span>{ui.calculatorLayout.editorialTeam}</span>
          <span aria-hidden="true"> · </span>
          <span>
            {ui.calculatorLayout.lastReviewed} {calc.lastReviewed}
          </span>
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
          {calc.name}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
          {guide.intro}
        </p>
      </header>

      <div className="mb-8">{children}</div>

      <AdSlot />

      {guide.medicalDisclaimer && (
        <section
          aria-label="Medical disclaimer"
          className="mb-10 rounded-xl border border-amber-200 bg-amber-50/60 p-5 text-sm text-slate-800"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-bold text-slate-900">
                {ui.calculatorLayout.healthNoticeTitle}
              </h2>
              <p className="mt-1 leading-relaxed text-slate-700">
                {guide.medicalDisclaimer}
              </p>
            </div>
          </div>
        </section>
      )}

      <article className="space-y-10 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-slate-900">
            {ui.calculatorLayout.understandingResult}
          </h2>
          <p className="mt-2.5 leading-relaxed">{guide.resultExplanation}</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
          <h2 className="text-xl font-bold text-slate-900">
            {guide.formulaTitle}
          </h2>
          <ul className="mt-3 space-y-2">
            {guide.formulas.map((formula, idx) => (
              <li
                key={idx}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 font-mono text-xs sm:text-sm text-slate-900 tabular-nums"
              >
                {formula}
              </li>
            ))}
          </ul>
        </section>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <section>
            <h2 className="text-xl font-bold text-slate-900">
              {ui.calculatorLayout.stepByStep}
            </h2>
            <ol className="mt-3 list-decimal space-y-2.5 pl-5 text-sm sm:text-base leading-relaxed">
              {guide.stepByStep.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              {ui.calculatorLayout.howToUse}
            </h2>
            <ol className="mt-3 list-decimal space-y-2.5 pl-5 text-sm sm:text-base leading-relaxed">
              {guide.howToUse.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>
        </div>

        <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-xl font-bold text-slate-900">
            {ui.calculatorLayout.workedExample}: {guide.workedExample.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            {guide.workedExample.scenario}
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700 tabular-nums">
            {guide.workedExample.calculationSteps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
          <p className="mt-3 font-semibold text-slate-900">
            {ui.calculatorLayout.resultLabel}: {guide.workedExample.outcome}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            {ui.calculatorLayout.assumptionsTitle}
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm sm:text-base leading-relaxed">
            {guide.assumptionsAndLimitations.map((limitation, idx) => (
              <li key={idx}>{limitation}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            {ui.calculatorLayout.faqTitle}
          </h2>
          <div className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {guide.faqs.map((faq, idx) => (
              <div key={idx} className="p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 pt-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <BookOpen className="h-4 w-4 text-sky-700" aria-hidden="true" />
            <span>{ui.calculatorLayout.referencesTitle}</span>
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {guide.references.map((ref, idx) => (
              <li key={idx} className="text-slate-600">
                <span className="font-medium text-slate-800">{ref.label}</span>{" "}
                — {ref.source}
                {ref.url && (
                  <>
                    {" "}
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-700 underline hover:text-sky-900"
                    >
                      <span>{ui.calculatorLayout.sourceLabel}</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-500">
            {ui.calculatorLayout.reviewedUnderPrefix}{" "}
            <Link
              href={localizePath("/editorial-policy/", locale)}
              className="text-sky-700 underline hover:text-sky-900"
            >
              {ui.calculatorLayout.editorialPolicyLink}
            </Link>
            . {ui.calculatorLayout.localExecutionNote}
          </p>
        </section>
      </article>

      <section
        aria-label={ui.calculatorLayout.relatedCalculators}
        className="mt-12 border-t border-slate-200 pt-10"
      >
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-bold text-slate-900">
            {ui.calculatorLayout.relatedCalculators}
          </h2>
          <Link
            href={calc.categoryPath}
            className="text-sm font-semibold text-sky-700 hover:underline whitespace-nowrap"
          >
            {ui.calculatorLayout.allPrefix} {calc.categoryName}
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {relatedCalculators.map((rel) => (
            <CalculatorCard key={rel.slug} calculator={rel} locale={locale} />
          ))}
        </div>
      </section>

      <section
        aria-label={ui.calculatorLayout.popularCalculators}
        className="mt-10"
      >
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-bold text-slate-900">
            {ui.calculatorLayout.popularCalculators}
          </h2>
          <Link
            href={localizePath("/", locale)}
            className="text-sm font-semibold text-sky-700 hover:underline whitespace-nowrap"
          >
            {ui.calculatorLayout.backToHome}
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {popularCalculators.map((pop) => (
            <CalculatorCard key={pop.slug} calculator={pop} locale={locale} />
          ))}
        </div>
      </section>
    </div>
  );
}
