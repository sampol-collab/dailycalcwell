import { LOCALE_CONFIG, Locale } from "@/lib/i18n/config";

export const WORLD_CURRENCY_CODES = [
  "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
  "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
  "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
  "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
  "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD",
  "GNF", "GTQ", "GYD", "HKD", "HNL", "HTG", "HUF", "IDR", "ILS", "INR",
  "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF",
  "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL",
  "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR",
  "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR",
  "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR",
  "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD",
  "SHP", "SLE", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB",
  "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX",
  "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XCG",
  "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWG",
] as const;

export type WorldCurrencyCode = (typeof WORLD_CURRENCY_CODES)[number];

export const POPULAR_CURRENCY_CODES: readonly WorldCurrencyCode[] = [
  "USD",
  "EUR",
  "INR",
  "GBP",
  "BRL",
  "JPY",
  "CAD",
  "AUD",
  "CHF",
  "MXN",
  "AED",
  "SAR",
];

export const QUICK_PICK_CURRENCIES: readonly WorldCurrencyCode[] = [
  "USD",
  "EUR",
  "INR",
  "GBP",
  "BRL",
  "JPY",
];

export const DEFAULT_CURRENCY_BY_LOCALE: Record<Locale, WorldCurrencyCode> = {
  en: "USD",
  hi: "INR",
  es: "EUR",
  fr: "EUR",
  de: "EUR",
  pt: "BRL",
};

export interface CurrencyOption {
  code: string;
  name: string;
  symbol: string;
  popular: boolean;
}

const HIGH_UNIT_CURRENCIES = new Set([
  "JPY",
  "KRW",
  "IDR",
  "VND",
  "CLP",
  "COP",
  "HUF",
  "ISK",
  "KHR",
  "LAK",
  "MMK",
  "MNT",
  "PYG",
  "RWF",
  "TZS",
  "UGX",
  "UZS",
  "XAF",
  "XOF",
]);

const MID_UNIT_CURRENCIES = new Set([
  "INR",
  "PKR",
  "BDT",
  "LKR",
  "NPR",
  "PHP",
  "THB",
  "TWD",
  "MXN",
  "ARS",
  "ZAR",
  "NGN",
  "KES",
  "EGP",
  "TRY",
  "RUB",
  "UAH",
  "CZK",
  "HKD",
]);

export function getCurrencyDefaultSample(currency: string): {
  originalPrice: string;
  costPrice: string;
  sellingPrice: string;
  baseValue: string;
} {
  if (HIGH_UNIT_CURRENCIES.has(currency)) {
    return {
      originalPrice: "12000",
      costPrice: "8000",
      sellingPrice: "10000",
      baseValue: "10000",
    };
  }
  if (MID_UNIT_CURRENCIES.has(currency)) {
    return {
      originalPrice: "2500",
      costPrice: "800",
      sellingPrice: "1000",
      baseValue: "2500",
    };
  }
  return {
    originalPrice: "120",
    costPrice: "80",
    sellingPrice: "100",
    baseValue: "250",
  };
}

export function extractCurrencySymbol(
  currency: string,
  intlLocale = "en-US"
): string {
  try {
    const parts = new Intl.NumberFormat(
      currency === "INR" ? "en-IN" : intlLocale,
      {
        style: "currency",
        currency,
        currencyDisplay: "narrowSymbol",
      }
    ).formatToParts(0);
    return parts.find((p) => p.type === "currency")?.value || currency;
  } catch {
    return currency;
  }
}

export function getWorldCurrencyOptions(locale: Locale = "en"): CurrencyOption[] {
  const intlLocale = LOCALE_CONFIG[locale].intlLocale;
  let displayNames: Intl.DisplayNames | null = null;
  try {
    displayNames = new Intl.DisplayNames([intlLocale], { type: "currency" });
  } catch {
    displayNames = null;
  }

  const popularSet = new Set<string>(POPULAR_CURRENCY_CODES);
  const byCode = new Map<string, CurrencyOption>();

  for (const code of WORLD_CURRENCY_CODES) {
    const name = displayNames?.of(code) || code;
    const symbol = extractCurrencySymbol(code, intlLocale);
    byCode.set(code, {
      code,
      name,
      symbol,
      popular: popularSet.has(code),
    });
  }

  const popularList = POPULAR_CURRENCY_CODES.map((c) => byCode.get(c)!).filter(
    Boolean
  );
  const restList = WORLD_CURRENCY_CODES.filter((c) => !popularSet.has(c))
    .map((c) => byCode.get(c)!)
    .sort((a, b) => a.code.localeCompare(b.code));

  return [...popularList, ...restList];
}
