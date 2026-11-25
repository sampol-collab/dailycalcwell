import Link from "next/link";
import { CookiePreferencesTrigger } from "@/components/privacy/CookiePreferencesTrigger";
import { CalculatorSearch } from "@/components/search/CalculatorSearch";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ContactForm } from "@/components/ui/ContactForm";
import { LAST_EDITORIAL_REVIEW } from "@/lib/constants/calculators";
import {
  getLocalizedCalculatorsByCategory,
  getLocalizedPopularCalculators,
} from "@/lib/i18n/calculators-meta";
import { DEFAULT_LOCALE, Locale, localizePath } from "@/lib/i18n/config";
import { getUiDictionary } from "@/lib/i18n/ui";

interface LocaleProp {
  locale?: Locale;
}

export function AboutPageView({ locale = DEFAULT_LOCALE }: LocaleProp) {
  const ui = getUiDictionary(locale);
  const p = ui.pages.about;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: ui.nav.home, path: localizePath("/", locale) },
          { name: ui.nav.about, path: localizePath("/about/", locale) },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        {p.title}
      </h1>

      <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-700">
        <p>{p.lead}</p>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            {p.globalHeading}
          </h2>
          <p className="mt-2">{p.globalBody}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            {p.transparencyHeading}
          </h2>
          <p className="mt-2">{p.transparencyBody}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            {p.publisherHeading}
          </h2>
          <p className="mt-2">
            {p.operatedBy}{" "}
            <span className="font-medium text-slate-900">
              [Site Owner / Company Legal Name Placeholder]
            </span>
            <br />
            {p.contactEmail}{" "}
            <span className="font-mono text-sm">contact@dailycalcwell.com</span>
            <br />
            {p.location}{" "}
            <span className="font-medium text-slate-900">
              [City, State / Country Placeholder]
            </span>
          </p>
        </section>

        <div className="flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold">
          <Link
            href={localizePath("/editorial-policy/", locale)}
            className="text-sky-700 hover:underline"
          >
            {p.readEditorial}
          </Link>
          <Link
            href={localizePath("/contact/", locale)}
            className="text-sky-700 hover:underline"
          >
            {p.contactUs}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ContactPageView({ locale = DEFAULT_LOCALE }: LocaleProp) {
  const ui = getUiDictionary(locale);
  const p = ui.pages.contact;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: ui.nav.home, path: localizePath("/", locale) },
          { name: ui.nav.contact, path: localizePath("/contact/", locale) },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        {p.title}
      </h1>
      <p className="mt-3 text-base leading-relaxed text-slate-600">
        {p.subtitle}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-sm text-slate-700">
          <h2 className="text-base font-bold text-slate-900">
            {p.detailsHeading}
          </h2>
          <p>
            <span className="block font-semibold text-slate-900">
              {p.publisherLabel}
            </span>
            <span>[Site Owner / Company Name Placeholder]</span>
          </p>
          <p>
            <span className="block font-semibold text-slate-900">
              {p.emailLabel}
            </span>
            <span className="font-mono">contact@dailycalcwell.com</span>
          </p>
          <p>
            <span className="block font-semibold text-slate-900">
              {p.addressLabel}
            </span>
            <span>[Business Mailing Address Placeholder]</span>
          </p>
          <p className="text-xs text-slate-500">{p.noteText}</p>
        </div>

        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export function PrivacyPageView({ locale = DEFAULT_LOCALE }: LocaleProp) {
  const ui = getUiDictionary(locale);
  const p = ui.pages.privacy;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: ui.nav.home, path: localizePath("/", locale) },
          {
            name: ui.footer.privacyPolicy,
            path: localizePath("/privacy-policy/", locale),
          },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        {p.title}
      </h1>
      <p className="mt-2 text-sm text-slate-500">{p.updated}</p>

      <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-700">
        <p>{p.intro}</p>
        {p.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-xl font-bold text-slate-900">
              {section.heading}
            </h2>
            <p className="mt-2">{section.body}</p>
          </section>
        ))}
        <div className="flex flex-wrap gap-4 border-t border-slate-200 pt-5 text-sm font-semibold">
          <Link
            href={localizePath("/cookie-policy/", locale)}
            className="text-sky-700 underline hover:text-sky-900"
          >
            {ui.footer.cookiePolicy}
          </Link>
          <Link
            href={localizePath("/contact/", locale)}
            className="text-sky-700 underline hover:text-sky-900"
          >
            {ui.nav.contact}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function TermsPageView({ locale = DEFAULT_LOCALE }: LocaleProp) {
  const ui = getUiDictionary(locale);
  const p = ui.pages.terms;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: ui.nav.home, path: localizePath("/", locale) },
          { name: ui.footer.terms, path: localizePath("/terms/", locale) },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        {p.title}
      </h1>
      <p className="mt-2 text-sm text-slate-500">{p.updated}</p>

      <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-700">
        {p.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-xl font-bold text-slate-900">
              {section.heading}
            </h2>
            <p className="mt-2">{section.body}</p>
          </section>
        ))}
        <div className="border-t border-slate-200 pt-5 text-sm font-semibold">
          <Link
            href={localizePath("/disclaimer/", locale)}
            className="text-sky-700 underline hover:text-sky-900"
          >
            {ui.footer.disclaimer}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function DisclaimerPageView({ locale = DEFAULT_LOCALE }: LocaleProp) {
  const ui = getUiDictionary(locale);
  const p = ui.pages.disclaimer;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: ui.nav.home, path: localizePath("/", locale) },
          {
            name: ui.footer.disclaimer,
            path: localizePath("/disclaimer/", locale),
          },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        {p.title}
      </h1>
      <p className="mt-2 text-sm text-slate-500">{p.updated}</p>

      <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-700">
        {p.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-xl font-bold text-slate-900">
              {section.heading}
            </h2>
            {section.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="mt-2">
                {para}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

export function EditorialPageView({ locale = DEFAULT_LOCALE }: LocaleProp) {
  const ui = getUiDictionary(locale);
  const p = ui.pages.editorial;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: ui.nav.home, path: localizePath("/", locale) },
          {
            name: ui.footer.editorialPolicy,
            path: localizePath("/editorial-policy/", locale),
          },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        {p.title}
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        {p.bylinePrefix} {LAST_EDITORIAL_REVIEW}
      </p>

      <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-700">
        {p.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-xl font-bold text-slate-900">
              {section.heading}
            </h2>
            <p className="mt-2">{section.body}</p>
          </section>
        ))}
        <div className="border-t border-slate-200 pt-5 text-sm font-semibold">
          <Link
            href={localizePath("/contact/", locale)}
            className="text-sky-700 underline hover:text-sky-900"
          >
            {ui.nav.contact}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function CookiePageView({ locale = DEFAULT_LOCALE }: LocaleProp) {
  const ui = getUiDictionary(locale);
  const p = ui.pages.cookie;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: ui.nav.home, path: localizePath("/", locale) },
          {
            name: ui.footer.cookiePolicy,
            path: localizePath("/cookie-policy/", locale),
          },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        {p.title}
      </h1>
      <p className="mt-2 text-sm text-slate-500">{p.updated}</p>

      <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-700">
        <p>{p.intro}</p>
        {p.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-xl font-bold text-slate-900">
              {section.heading}
            </h2>
            <p className="mt-2">{section.body}</p>
          </section>
        ))}

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <CookiePreferencesTrigger />
          <Link
            href={localizePath("/privacy-policy/", locale)}
            className="text-sm font-semibold text-sky-700 underline hover:text-sky-900"
          >
            {ui.footer.privacyPolicy}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SitemapPageView({ locale = DEFAULT_LOCALE }: LocaleProp) {
  const ui = getUiDictionary(locale);
  const p = ui.pages.sitemap;
  const everyday = getLocalizedCalculatorsByCategory("everyday", locale);
  const health = getLocalizedCalculatorsByCategory("health", locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: ui.nav.home, path: localizePath("/", locale) },
          {
            name: ui.footer.sitemap,
            path: localizePath("/sitemap-page/", locale),
          },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        {p.title}
      </h1>
      <p className="mt-2 text-base text-slate-600">
        {p.subtitlePrefix}{" "}
        <a href="/sitemap.xml" className="text-sky-700 underline font-medium">
          {p.xmlLinkLabel}
        </a>
        .
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            {p.everydayHeading} ({everyday.length})
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {everyday.map((calc) => (
              <li key={calc.slug}>
                <Link
                  href={localizePath(`/${calc.slug}/`, locale)}
                  className="text-sky-700 hover:text-sky-900 hover:underline"
                >
                  {calc.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            {p.healthHeading} ({health.length})
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {health.map((calc) => (
              <li key={calc.slug}>
                <Link
                  href={localizePath(`/${calc.slug}/`, locale)}
                  className="text-sky-700 hover:text-sky-900 hover:underline"
                >
                  {calc.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            {p.infoHeading}
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href={localizePath("/", locale)}
                className="text-sky-700 hover:underline"
              >
                {p.homepageLabel}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath("/everyday/", locale)}
                className="text-sky-700 hover:underline"
              >
                {p.everydayHubLabel}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath("/health/", locale)}
                className="text-sky-700 hover:underline"
              >
                {p.healthHubLabel}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath("/about/", locale)}
                className="text-sky-700 hover:underline"
              >
                {ui.nav.about}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath("/contact/", locale)}
                className="text-sky-700 hover:underline"
              >
                {ui.nav.contact}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath("/privacy-policy/", locale)}
                className="text-sky-700 hover:underline"
              >
                {ui.footer.privacyPolicy}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath("/terms/", locale)}
                className="text-sky-700 hover:underline"
              >
                {ui.footer.terms}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath("/disclaimer/", locale)}
                className="text-sky-700 hover:underline"
              >
                {ui.footer.disclaimer}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath("/editorial-policy/", locale)}
                className="text-sky-700 hover:underline"
              >
                {ui.footer.editorialPolicy}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath("/cookie-policy/", locale)}
                className="text-sky-700 hover:underline"
              >
                {ui.footer.cookiePolicy}
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export function NotFoundView({ locale = DEFAULT_LOCALE }: LocaleProp) {
  const ui = getUiDictionary(locale);
  const p = ui.pages.notFound;
  const popular = getLocalizedPopularCalculators(locale).slice(0, 4);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 text-center">
      <p className="text-sm font-semibold text-sky-700">{p.codeLabel}</p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        {p.title}
      </h1>
      <p className="mt-3 text-base text-slate-600 leading-relaxed">{p.body}</p>

      <div className="mt-8 text-left">
        <CalculatorSearch id="not-found-search" />
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href={localizePath("/", locale)}
          className="rounded-lg bg-[#38BDF8] px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-[#0EA5E9]"
        >
          {p.backHome}
        </Link>
        <Link
          href={localizePath("/everyday/", locale)}
          className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          {p.browseEveryday}
        </Link>
        <Link
          href={localizePath("/health/", locale)}
          className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          {p.browseHealth}
        </Link>
      </div>

      <div className="mt-12 border-t border-slate-200 pt-8 text-left">
        <h2 className="text-base font-bold text-slate-900">
          {ui.home.popularHeading}
        </h2>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {popular.map((calc) => (
            <li key={calc.slug}>
              <Link
                href={localizePath(`/${calc.slug}/`, locale)}
                className="block rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:border-sky-400 hover:text-sky-800"
              >
                {calc.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
