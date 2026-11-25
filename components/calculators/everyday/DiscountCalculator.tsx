"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { useLocale } from "@/components/i18n/LocaleContext";
import { CurrencySelect } from "@/components/ui/CurrencySelect";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculateDiscount,
  CurrencyCode,
  DiscountResult,
  formatCurrencyValue,
} from "@/lib/calculations/everyday";
import {
  DEFAULT_CURRENCY_BY_LOCALE,
  getCurrencyDefaultSample,
} from "@/lib/constants/currencies";
import { LOCALE_CONFIG } from "@/lib/i18n/config";
import { getPriceUi } from "@/lib/i18n/price-ui";
import { parseNumberInput } from "@/lib/validation/inputs";

export function DiscountCalculator() {
  const { locale } = useLocale();
  const intlLocale = LOCALE_CONFIG[locale].intlLocale;
  const priceUi = getPriceUi(locale).discount;

  const initialCurrency = DEFAULT_CURRENCY_BY_LOCALE[locale];
  const initialSample = getCurrencyDefaultSample(initialCurrency).originalPrice;

  const [currency, setCurrency] = useState<CurrencyCode>(initialCurrency);
  const [originalPrice, setOriginalPrice] = useState(initialSample);
  const [discountPercent, setDiscountPercent] = useState("25");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<DiscountResult | null>(() =>
    calculateDiscount(Number(initialSample), 25)
  );

  const runCalculation = (
    nextPrice = originalPrice,
    nextPct = discountPercent
  ) => {
    trackEvent("calculator_used", { calculator: "discount-calculator" });
    const p = parseNumberInput(nextPrice, priceUi.originalPrice, {
      allowNegative: false,
    });
    if (!p.ok) {
      setError(p.error);
      setResult(null);
      return;
    }
    const d = parseNumberInput(nextPct, priceUi.discountPercent, {
      min: 0,
      max: 100,
    });
    if (!d.ok) {
      setError(d.error);
      setResult(null);
      return;
    }
    try {
      const res = calculateDiscount(p.value, d.value);
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", { calculator: "discount-calculator" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    const sample = getCurrencyDefaultSample(currency).originalPrice;
    setOriginalPrice(sample);
    setDiscountPercent("25");
    runCalculation(sample, "25");
  };

  const shareText = result
    ? `${priceUi.finalPrice}: ${formatCurrencyValue(
        result.finalPrice,
        currency,
        intlLocale
      )} (${priceUi.youSave}: ${formatCurrencyValue(
        result.discountAmount,
        currency,
        intlLocale
      )} / ${result.discountPercent}%)`
    : undefined;

  return (
    <CalculatorShell
      title={priceUi.title}
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={shareText}
      resultSlot={
        result && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 tabular-nums">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {priceUi.finalPrice}
              </p>
              <p className="text-3xl font-bold text-slate-900">
                {formatCurrencyValue(result.finalPrice, currency, intlLocale)}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {priceUi.youSave}
              </p>
              <p className="text-2xl font-bold text-emerald-800">
                {formatCurrencyValue(result.discountAmount, currency, intlLocale)}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                {priceUi.savingsNote(result.discountPercent)}
              </p>
            </div>
          </div>
        )
      }
    >
      <CurrencySelect
        id="discount-currency"
        value={currency}
        onChange={setCurrency}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="disc-price"
            className="block text-sm font-semibold text-slate-800"
          >
            {priceUi.originalPrice} ({currency})
          </label>
          <input
            id="disc-price"
            type="number"
            min="0"
            step="any"
            value={originalPrice}
            onChange={(e) => {
              setOriginalPrice(e.target.value);
              runCalculation(e.target.value, discountPercent);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 tabular-nums focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
          />
        </div>
        <div>
          <label
            htmlFor="disc-percent"
            className="block text-sm font-semibold text-slate-800"
          >
            {priceUi.discountPercent}
          </label>
          <input
            id="disc-percent"
            type="number"
            min="0"
            max="100"
            step="any"
            value={discountPercent}
            onChange={(e) => {
              setDiscountPercent(e.target.value);
              runCalculation(originalPrice, e.target.value);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 tabular-nums focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
          />
        </div>
      </div>
    </CalculatorShell>
  );
}
