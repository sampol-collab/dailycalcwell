"use client";

import { useLocale } from "@/components/i18n/LocaleContext";

export function CookiePreferencesTrigger() {
  const { ui } = useLocale();

  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new CustomEvent("dailycalcwell-open-cookie-preferences"))
      }
      className="rounded-lg bg-[#38BDF8] px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-[#0EA5E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    >
      {ui.pages.cookie.manageButton}
    </button>
  );
}
