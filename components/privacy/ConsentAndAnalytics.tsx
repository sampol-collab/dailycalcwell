"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { X } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleContext";
import {
  ConsentState,
  readStoredConsent,
  saveStoredConsent,
} from "@/lib/analytics/ga4";

export function ConsentAndAnalytics() {
  const { ui, lPath } = useLocale();
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
  const adsEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
  const adsClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "";

  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsDraft, setAnalyticsDraft] = useState(false);
  const [adsDraft, setAdsDraft] = useState(false);

  useEffect(() => {
    const existing = readStoredConsent();
    setConsent(existing);
    if (existing) {
      setAnalyticsDraft(existing.analytics);
      setAdsDraft(existing.advertising);
    }
    setHydrated(true);

    const openPrefs = () => {
      const latest = readStoredConsent();
      setAnalyticsDraft(Boolean(latest?.analytics));
      setAdsDraft(Boolean(latest?.advertising));
      setShowPreferences(true);
    };
    window.addEventListener("dailycalcwell-open-cookie-preferences", openPrefs);
    return () => {
      window.removeEventListener(
        "dailycalcwell-open-cookie-preferences",
        openPrefs
      );
    };
  }, []);

  const acceptAll = () => {
    const saved = saveStoredConsent(true, true);
    setConsent(saved);
    setShowPreferences(false);
  };

  const rejectNonEssential = () => {
    const saved = saveStoredConsent(false, false);
    setConsent(saved);
    setShowPreferences(false);
  };

  const saveCustom = () => {
    const saved = saveStoredConsent(analyticsDraft, adsDraft);
    setConsent(saved);
    setShowPreferences(false);
  };

  const shouldShowBanner = hydrated && consent === null && !showPreferences;

  return (
    <>
      {gaId && consent?.analytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
              gaId
            )}`}
            strategy="afterInteractive"
          />
          <Script id="dailycalcwell-ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {adsEnabled && adsClient && consent?.advertising && (
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
            adsClient
          )}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}

      {shouldShowBanner && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-sm shadow-lg"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-2xl">
              {ui.consent.bannerText}{" "}
              <Link
                href={lPath("/cookie-policy/")}
                className="font-medium text-sky-700 underline hover:text-sky-900"
              >
                {ui.footer.cookiePolicy}
              </Link>
              .
            </p>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 whitespace-nowrap"
              >
                {ui.consent.preferences}
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 whitespace-nowrap"
              >
                {ui.consent.necessaryOnly}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-lg bg-[#38BDF8] px-3.5 py-2 text-xs font-semibold text-slate-950 hover:bg-[#0EA5E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 whitespace-nowrap"
              >
                {ui.consent.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-prefs-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
        >
          <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="cookie-prefs-title"
                  className="text-lg font-bold text-slate-900"
                >
                  {ui.consent.dialogTitle}
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  {ui.consent.dialogSubtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                aria-label={ui.consent.closeDialog}
                className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-sky-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {ui.consent.necessaryTitle}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {ui.consent.necessaryDesc}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                    {ui.consent.alwaysActive}
                  </span>
                </div>
              </div>

              <label className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 cursor-pointer hover:border-slate-300">
                <div>
                  <span className="block text-sm font-semibold text-slate-900">
                    {ui.consent.analyticsTitle}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-600">
                    {ui.consent.analyticsDesc}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={analyticsDraft}
                  onChange={(e) => setAnalyticsDraft(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
                />
              </label>

              <label className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 cursor-pointer hover:border-slate-300">
                <div>
                  <span className="block text-sm font-semibold text-slate-900">
                    {ui.consent.adsTitle}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-600">
                    {ui.consent.adsDesc}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={adsDraft}
                  onChange={(e) => setAdsDraft(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-sky-600"
              >
                {ui.consent.necessaryOnly}
              </button>
              <button
                type="button"
                onClick={saveCustom}
                className="rounded-lg bg-[#38BDF8] px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-[#0EA5E9] focus-visible:outline-2 focus-visible:outline-sky-600"
              >
                {ui.consent.savePreferences}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
