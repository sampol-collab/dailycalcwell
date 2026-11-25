# DailyCalcWell Deployment, Search Console, Analytics, AdSense & Maintenance Guide

## 1. Environment Variables
Configure the following variables in Netlify (**Site configuration → Environment variables**) or your local `.env.local` file:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes (Production) | Canonical production URL without trailing slash (e.g. `https://dailycalcwell.com`). |
| `APP_URL` | Optional | Fallback base URL used in server metadata if `NEXT_PUBLIC_SITE_URL` is unset. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`). Loads only after analytics consent. |
| `NEXT_PUBLIC_ADSENSE_ENABLED` | Optional (`false` default) | Keep `"false"` until Google AdSense approves the site. |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Optional | Official AdSense publisher ID (`ca-pub-XXXXXXXXXXXXXXXX`). |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Google Search Console HTML meta verification token. |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional | Bing Webmaster Tools verification token (`msvalidate.01`). |

---

## 2. Netlify Deployment Instructions
1. Push your repository to GitHub (`main` branch).
2. In Netlify, choose **Add new site → Import an existing project** and connect your GitHub repository.
3. Netlify automatically detects `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugin: `@netlify/plugin-nextjs`
   - Node version: `22`
4. Add `NEXT_PUBLIC_SITE_URL` with your custom HTTPS domain.
5. Configure your custom domain and enforce HTTPS (auto-provisioned via Let's Encrypt in Netlify). Redirect non-preferred hostnames (`www` vs apex) in Netlify's Domain Management settings so one canonical hostname serves traffic.
6. Verify direct URL loading and browser refresh on nested routes (e.g., `https://dailycalcwell.com/bmi-calculator/` and `https://dailycalcwell.com/percentage-calculator/`), plus `https://dailycalcwell.com/sitemap.xml` and `https://dailycalcwell.com/robots.txt`.

---

## 3. Google Search Console Setup & Monitoring
1. Open **Google Search Console** and click **Add property** (prefer **Domain** property via DNS TXT record, or **URL prefix** using `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`).
2. Once verified, open **Sitemaps** and submit: `https://dailycalcwell.com/sitemap.xml`.
   - Note: Submitting a sitemap helps Google discover URLs faster, though it does not guarantee indexing of every URL.
3. Use **URL Inspection** on key calculator pages (`/bmi-calculator/`, `/percentage-calculator/`, `/age-calculator/`, `/pregnancy-due-date-calculator/`) to confirm Googlebot sees indexable HTML and valid canonical tags, and click **Request Indexing** after major releases.
4. Monitor **Indexing → Pages** weekly to review indexed vs. non-indexed pages and resolve any crawl anomalies.
5. Monitor **Performance → Search results** for impressions, clicks, average CTR, and search queries from India and the United States.
6. Monitor **Experience → Core Web Vitals** on mobile and desktop to verify LCP, INP, and CLS remain within healthy thresholds.

---

## 4. Bing Webmaster Tools Setup
1. Sign in to **Bing Webmaster Tools**.
2. Verify ownership either by importing your verified Google Search Console property or by setting `NEXT_PUBLIC_BING_SITE_VERIFICATION` in environment variables.
3. Submit `https://dailycalcwell.com/sitemap.xml` under **Sitemaps**.
4. Use **URL Inspection** and **Site Scan** in Bing Webmaster Tools to verify canonicals, headings, and status codes.

---

## 5. Google Analytics 4 Setup
1. Create a GA4 Web Stream in Google Analytics and copy your Measurement ID (`G-XXXXXXXXXX`).
2. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Netlify and redeploy.
3. DailyCalcWell automatically gates GA4 behind user consent (`ConsentAndAnalytics.tsx`) and emits `calculator_used`, `calculation_completed`, and `category_navigation` events without ever attaching personal health values.

---

## 6. Google AdSense Readiness & Activation Steps
Before applying for Google AdSense:
1. Replace all bracketed publisher placeholders in `app/about/page.tsx`, `app/contact/page.tsx`, `app/terms/page.tsx`, `app/privacy-policy/page.tsx`, and `app/editorial-policy/page.tsx` with your real domain email and business information.
2. Keep `NEXT_PUBLIC_ADSENSE_ENABLED="false"` during initial site buildout; review Google AdSense Program Policies before submitting.
3. After approval, Google provides your Publisher ID (`pub-XXXXXXXXXXXXXXXX`).
4. Update `public/ads.txt` with the exact line supplied by Google:
   `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`
5. Set `NEXT_PUBLIC_ADSENSE_CLIENT_ID="ca-pub-XXXXXXXXXXXXXXXX"`, pass real ad slot IDs into `<AdSlot slotId="..." />`, and set `NEXT_PUBLIC_ADSENSE_ENABLED="true"` only after approval.

---

## 7. Backup, Maintenance & Monitoring Checklist
- **GitHub Source Backups**: Keep all changes on protected GitHub branches with pull-request checks.
- **Automated Pre-Deploy Checks**: Run `npm run lint`, `npm test`, `npm run test:seo`, and `npm run build` before every production merge.
- **Netlify Rollbacks**: Use Netlify's **Deploys** tab to immediately publish an earlier verified deploy snapshot if a regression occurs.
- **Dependency & Security Updates**: Run `npm audit` monthly and test minor/patch updates in a deploy preview before promoting to production.
- **Broken Link & SEO Audits**: Re-run `npm run test:seo` and check Google Search Console crawl reports quarterly.
- **Content & Formula Reviews**: Review health guidance (WHO, CDC, ACOG, NIH) and tax/currency notes annually and update `LAST_EDITORIAL_REVIEW` in `lib/constants/calculators.ts` upon verification.
