"use client";

export interface ConsentState {
  necessary: true;
  analytics: boolean;
  advertising: boolean;
  updatedAt: string;
}

export const CONSENT_STORAGE_KEY = "dailycalcwell_consent_v1";

export function readStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      advertising: Boolean(parsed.advertising),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
}

export function saveStoredConsent(
  analytics: boolean,
  advertising: boolean
): ConsentState {
  const state: ConsentState = {
    necessary: true,
    analytics,
    advertising,
    updatedAt: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
      window.dispatchEvent(
        new CustomEvent("dailycalcwell-consent-changed", { detail: state })
      );
    } catch {
      // Storage may be unavailable in strict private browsing modes
    }
  }
  return state;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Privacy-first GA4 event tracker.
 * Strictly avoids sending personal or health input values as event parameters.
 */
export function trackEvent(
  eventName:
    | "calculator_used"
    | "calculation_completed"
    | "category_navigation"
    | "outbound_click",
  params: Record<string, string | number | boolean>
): void {
  if (typeof window === "undefined") return;
  const consent = readStoredConsent();
  if (!consent?.analytics) return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}
