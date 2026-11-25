"use client";

import { useEffect, useState } from "react";
import { CONSENT_STORAGE_KEY, readStoredConsent } from "@/lib/analytics/ga4";

interface AdSlotProps {
  slotId?: string;
  label?: string;
  format?: "auto" | "horizontal" | "rectangle";
}

/**
 * AdSense-ready placement container.
 * Remains completely disabled (renders nothing) until:
 * 1. NEXT_PUBLIC_ADSENSE_ENABLED === "true"
 * 2. A valid NEXT_PUBLIC_ADSENSE_CLIENT_ID (ca-pub-...) is configured
 * 3. A real slotId is provided and user advertising consent is granted.
 */
export function AdSlot({ slotId, format = "auto" }: AdSlotProps) {
  const enabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "";
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const sync = () => {
      const state = readStoredConsent();
      setConsented(Boolean(state?.advertising));
    };
    sync();
    const onStorage = (e: StorageEvent) => {
      if (e.key === CONSENT_STORAGE_KEY) sync();
    };
    window.addEventListener("dailycalcwell-consent-changed", sync);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("dailycalcwell-consent-changed", sync);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  if (!enabled || !clientId || !slotId || !consented) {
    return null;
  }

  return (
    <aside
      aria-label="Advertisement"
      className="my-8 rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-center"
    >
      <p className="mb-2 text-xs font-medium text-slate-500">Advertisement</p>
      <ins
        className="adsbygoogle block min-h-[90px]"
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
