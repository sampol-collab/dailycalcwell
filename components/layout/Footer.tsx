"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleContext";
import { SITE_NAME } from "@/lib/constants/calculators";
import { getLocalizedCalculator } from "@/lib/i18n/calculators-meta";
import { LOCALE_CONFIG, SUPPORTED_LOCALES, localizePath } from "@/lib/i18n/config";

export function Footer() {
  const { locale, ui, lPath } = useLocale();
  const year = new Date().getFullYear();

  const pctCalc = getLocalizedCalculator("percentage-calculator", locale);
  const bmiCalc = getLocalizedCalculator("bmi-calculator", locale);
  const eddCalc = getLocalizedCalculator("pregnancy-due-date-calculator", locale);

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-700">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href={lPath("/")}
              className="inline-flex items-center gap-2 text-base font-bold text-slate-900 focus-visible:outline-2 focus-visible:outline-sky-600 rounded-sm"
            >
              <img
                src="/logo/dailycalcwell-logo.svg"
                alt="DailyCalcWell logo"
                width={26}
                height={26}
                className="h-6 w-6 rounded-md"
              />
              <span>{SITE_NAME}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {ui.footer.blurb}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {SUPPORTED_LOCALES.map((loc) => {
                const cfg = LOCALE_CONFIG[loc];
                const isCurrent = loc === locale;
                return (
                  <Link
                    key={loc}
                    href={localizePath("/", loc)}
                    hrefLang={cfg.hreflang}
                    className={`rounded border px-2 py-0.5 transition-colors ${
                      isCurrent
                        ? "border-sky-400 bg-sky-50 font-semibold text-sky-900"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    }`}
                  >
                    {cfg.nativeName}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              {ui.footer.categoriesHeading}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href={lPath("/everyday/")}
                  className="hover:text-sky-700 hover:underline"
                >
                  {ui.nav.everyday}
                </Link>
              </li>
              <li>
                <Link
                  href={lPath("/health/")}
                  className="hover:text-sky-700 hover:underline"
                >
                  {ui.nav.health}
                </Link>
              </li>
              <li>
                <Link
                  href={lPath("/percentage-calculator/")}
                  className="hover:text-sky-700 hover:underline"
                >
                  {pctCalc.name}
                </Link>
              </li>
              <li>
                <Link
                  href={lPath("/bmi-calculator/")}
                  className="hover:text-sky-700 hover:underline"
                >
                  {bmiCalc.name}
                </Link>
              </li>
              <li>
                <Link
                  href={lPath("/pregnancy-due-date-calculator/")}
                  className="hover:text-sky-700 hover:underline"
                >
                  {eddCalc.name}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              {ui.footer.companyHeading}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href={lPath("/about/")}
                  className="hover:text-sky-700 hover:underline"
                >
                  {ui.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={lPath("/contact/")}
                  className="hover:text-sky-700 hover:underline"
                >
                  {ui.nav.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={lPath("/editorial-policy/")}
                  className="hover:text-sky-700 hover:underline"
                >
                  {ui.footer.editorialPolicy}
                </Link>
              </li>
              <li>
                <Link
                  href={lPath("/disclaimer/")}
                  className="hover:text-sky-700 hover:underline"
                >
                  {ui.footer.disclaimer}
                </Link>
              </li>
              <li>
                <Link
                  href={lPath("/sitemap-page/")}
                  className="hover:text-sky-700 hover:underline"
                >
                  {ui.footer.sitemap}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              {ui.footer.legalHeading}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href={lPath("/privacy-policy/")}
                  className="hover:text-sky-700 hover:underline"
                >
                  {ui.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  href={lPath("/terms/")}
                  className="hover:text-sky-700 hover:underline"
                >
                  {ui.footer.terms}
                </Link>
              </li>
              <li>
                <Link
                  href={lPath("/cookie-policy/")}
                  className="hover:text-sky-700 hover:underline"
                >
                  {ui.footer.cookiePolicy}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(
                      new CustomEvent("dailycalcwell-open-cookie-preferences")
                    )
                  }
                  className="text-left text-sky-700 font-medium hover:text-sky-900 hover:underline focus-visible:outline-2 focus-visible:outline-sky-600 rounded-sm"
                >
                  {ui.footer.cookiePreferences}
                </button>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  className="hover:text-sky-700 hover:underline"
                >
                  {ui.footer.xmlSitemap}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-600">
          <p>
            &copy; {year} {SITE_NAME}. {ui.footer.copyrightSuffix}
          </p>
          <p>{ui.footer.regionReady}</p>
        </div>
      </div>
    </footer>
  );
}
