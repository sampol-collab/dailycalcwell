import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { CALCULATORS, CATEGORIES } from "../lib/constants/calculators";
import { CALCULATOR_GUIDES } from "../lib/content";
import { getLocalizedCalculator } from "../lib/i18n/calculators-meta";
import { SUPPORTED_LOCALES } from "../lib/i18n/config";
import { getLocalizedCalculatorGuide } from "../lib/i18n/guides";
import { getUiDictionary } from "../lib/i18n/ui";

const root = process.cwd();

console.log("Running DailyCalcWell Multi-Language SEO & Architecture Audit...");

// 1. Verify exact count of 24 calculators across 2 categories only
assert.equal(CALCULATORS.length, 24, "Expected exactly 24 calculators");
const everydayCount = CALCULATORS.filter((c) => c.category === "everyday").length;
const healthCount = CALCULATORS.filter((c) => c.category === "health").length;
assert.equal(everydayCount, 12, "Expected 12 everyday calculators");
assert.equal(healthCount, 12, "Expected 12 health calculators");

// 2. Verify English route files & base integrity
const seenSlugs = new Set<string>();
for (const calc of CALCULATORS) {
  assert.ok(!seenSlugs.has(calc.slug), `Duplicate slug: ${calc.slug}`);
  seenSlugs.add(calc.slug);

  const pageFile = path.join(root, "app", "(en)", calc.slug, "page.tsx");
  assert.ok(fs.existsSync(pageFile), `Missing (en) page route file: ${pageFile}`);

  const guide = CALCULATOR_GUIDES[calc.slug];
  assert.ok(guide, `Missing guide content for ${calc.slug}`);
  assert.ok(guide.formulas.length >= 1, `Missing formula for ${calc.slug}`);
  assert.ok(guide.faqs.length >= 2, `Missing FAQs for ${calc.slug}`);
  assert.ok(guide.references.length >= 1, `Missing references for ${calc.slug}`);
  if (calc.category === "health") {
    assert.ok(
      guide.medicalDisclaimer,
      `Missing medical disclaimer for health calculator ${calc.slug}`
    );
  }

  for (const rel of calc.relatedSlugs) {
    assert.ok(
      CALCULATORS.some((c) => c.slug === rel),
      `Broken relatedSlug ${rel} in ${calc.slug}`
    );
  }
}

// 3. Verify all 6 supported locales have unique titles/descriptions, complete guides, and UI dictionaries
for (const locale of SUPPORTED_LOCALES) {
  const ui = getUiDictionary(locale);
  assert.ok(ui.home.seoTitle.length >= 20, `Missing home SEO title for ${locale}`);
  assert.ok(
    ui.home.seoDescription.length >= 80,
    `Missing home SEO description for ${locale}`
  );
  assert.ok(ui.home.faqs.length >= 3, `Missing home FAQs for ${locale}`);
  assert.ok(ui.pages.privacy.sections.length >= 4, `Missing privacy sections for ${locale}`);
  assert.ok(ui.pages.terms.sections.length >= 4, `Missing terms sections for ${locale}`);
  assert.ok(ui.pages.disclaimer.sections.length >= 3, `Missing disclaimer sections for ${locale}`);

  const seenLocaleTitles = new Set<string>();
  const seenLocaleDescs = new Set<string>();

  for (const calc of CALCULATORS) {
    const locCalc = getLocalizedCalculator(calc.slug, locale);
    assert.ok(
      locCalc.seoTitle.length >= 18 && locCalc.seoTitle.length <= 90,
      `Title length check failed for ${locale}/${calc.slug}: "${locCalc.seoTitle}"`
    );
    assert.ok(
      locCalc.seoDescription.length >= 70 && locCalc.seoDescription.length <= 200,
      `Description length check failed for ${locale}/${calc.slug}: "${locCalc.seoDescription}"`
    );
    assert.ok(
      !seenLocaleTitles.has(locCalc.seoTitle),
      `Duplicate SEO title in ${locale}: ${locCalc.seoTitle}`
    );
    seenLocaleTitles.add(locCalc.seoTitle);

    assert.ok(
      !seenLocaleDescs.has(locCalc.seoDescription),
      `Duplicate SEO description in ${locale}: ${locCalc.seoDescription}`
    );
    seenLocaleDescs.add(locCalc.seoDescription);

    const locGuide = getLocalizedCalculatorGuide(calc.slug, locale);
    assert.ok(locGuide.intro.length > 20, `Missing localized intro for ${locale}/${calc.slug}`);
    assert.ok(
      locGuide.formulas.length >= 1,
      `Missing localized formula for ${locale}/${calc.slug}`
    );
    assert.ok(
      locGuide.faqs.length >= 2,
      `Missing localized FAQs for ${locale}/${calc.slug}`
    );
    assert.ok(
      locGuide.references.length >= 1,
      `Missing references for ${locale}/${calc.slug}`
    );
    if (calc.category === "health") {
      assert.ok(
        locGuide.medicalDisclaimer && locGuide.medicalDisclaimer.length > 20,
        `Missing localized medicalDisclaimer for ${locale}/${calc.slug}`
      );
    }
  }
}

// 4. Verify required multi-locale App Router files & public assets
const requiredRoutes = [
  "app/(en)/layout.tsx",
  "app/(en)/page.tsx",
  "app/(en)/not-found.tsx",
  "app/(en)/everyday/page.tsx",
  "app/(en)/health/page.tsx",
  "app/(en)/about/page.tsx",
  "app/(en)/contact/page.tsx",
  "app/(en)/privacy-policy/page.tsx",
  "app/(en)/terms/page.tsx",
  "app/(en)/disclaimer/page.tsx",
  "app/(en)/editorial-policy/page.tsx",
  "app/(en)/cookie-policy/page.tsx",
  "app/(en)/sitemap-page/page.tsx",
  "app/[lang]/layout.tsx",
  "app/[lang]/page.tsx",
  "app/[lang]/not-found.tsx",
  "app/[lang]/everyday/page.tsx",
  "app/[lang]/health/page.tsx",
  "app/[lang]/[slug]/page.tsx",
  "app/[lang]/about/page.tsx",
  "app/[lang]/contact/page.tsx",
  "app/[lang]/privacy-policy/page.tsx",
  "app/[lang]/terms/page.tsx",
  "app/[lang]/disclaimer/page.tsx",
  "app/[lang]/editorial-policy/page.tsx",
  "app/[lang]/cookie-policy/page.tsx",
  "app/[lang]/sitemap-page/page.tsx",
  "app/robots.ts",
  "app/sitemap.ts",
  "app/manifest.ts",
  "public/favicon.ico",
  "public/fevicon.svg",
  "public/icon.png",
  "public/apple-icon.png",
  "public/og-image.png",
  "public/logo/dailycalcwell-logo.svg",
  "public/ads.txt",
];

for (const relPath of requiredRoutes) {
  assert.ok(
    fs.existsSync(path.join(root, relPath)),
    `Missing required file: ${relPath}`
  );
}

assert.ok(CATEGORIES.everyday.seoTitle !== CATEGORIES.health.seoTitle);
assert.ok(CATEGORIES.everyday.seoDescription !== CATEGORIES.health.seoDescription);

console.log(
  `Static multi-language SEO audit passed: ${SUPPORTED_LOCALES.length} locales x 24 calculators verified.`
);
