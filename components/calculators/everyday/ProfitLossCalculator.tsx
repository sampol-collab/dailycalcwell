"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { useLocale } from "@/components/i18n/LocaleContext";
import { CurrencySelect } from "@/components/ui/CurrencySelect";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculateProfitLoss,
  CurrencyCode,
  formatCurrencyValue,
  ProfitLossResult,
} from "@/lib/calculations/everyday";
import {
  DEFAULT_CURRENCY_BY_LOCALE,
  getCurrencyDefaultSample,
} from "@/lib/constants/currencies";
import { LOCALE_CONFIG } from "@/lib/i18n/config";
import { getPriceUi } from "@/lib/i18n/price-ui";
import { parseNumberInput } from "@/lib/validation/inputs";

export function ProfitLossCalculator() {
  const { locale } = useLocale();
  const intlLocale = LOCALE_CONFIG[locale].intlLocale;
  const priceUi = getPriceUi(locale).profitLoss;

  const initialCurrency = DEFAULT_CURRENCY_BY_LOCALE[locale];
  const initialSamples = getCurrencyDefaultSample(initialCurrency);

  const [currency, setCurrency] = useState<CurrencyCode>(initialCurrency);
  const [costPrice, setCostPrice] = useState(initialSamples.costPrice);
  const [sellingPrice, setSellingPrice] = useState(initialSamples.sellingPrice);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ProfitLossResult | null>(() =>
    calculateProfitLoss(
      Number(initialSamples.costPrice),
      Number(initialSamples.sellingPrice)
    )
  );

  const runCalculation = (nextCost = costPrice, nextSell = sellingPrice) => {
    trackEvent("calculator_used", { calculator: "profit-loss-calculator" });
    const c = parseNumberInput(nextCost, priceUi.costPrice, {
      allowNegative: false,
      allowZero: false,
    });
    if (!c.ok) {
      setError(c.error);
      setResult(null);
      return;
    }
    const s = parseNumberInput(nextSell, priceUi.sellingPrice, {
      allowNegative: false,
    });
    if (!s.ok) {
      setError(s.error);
      setResult(null);
      return;
    }
    try {
      const res = calculateProfitLoss(c.value, s.value);
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", {
        calculator: "profit-loss-calculator",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    const samples = getCurrencyDefaultSample(currency);
    setCostPrice(samples.costPrice);
    setSellingPrice(samples.sellingPrice);
    runCalculation(samples.costPrice, samples.sellingPrice);
  };

  const shareText = result
    ? `${
        result.status === "profit"
          ? priceUi.netProfit
          : result.status === "loss"
            ? priceUi.netLoss
            : priceUi.breakeven
      }: ${formatCurrencyValue(result.amount, currency, intlLocale)} (${
        result.percentageOnCost
      }% · ${result.profitMarginPercent}%)`
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
          <div className="space-y-4 tabular-nums">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {result.status === "profit"
                  ? priceUi.netProfit
                  : result.status === "loss"
                    ? priceUi.netLoss
                    : priceUi.breakeven}
              </p>
              <p
                className={`text-3xl font-bold ${
                  result.status === "profit"
                    ? "text-emerald-800"
                    : result.status === "loss"
                      ? "text-red-800"
                      : "text-slate-900"
                }`}
              >
                {result.status === "profit"
                  ? priceUi.profitPrefix
                  : result.status === "loss"
                    ? priceUi.lossPrefix
                    : ""}
                {formatCurrencyValue(result.amount, currency, intlLocale)}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 border-t border-sky-200 pt-3">
              <div>
                <p className="text-xs font-medium text-slate-600">
                  {result.status === "loss"
                    ? priceUi.lossPercent
                    : priceUi.profitPercent}
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {result.percentageOnCost}%
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-600">
                  {priceUi.profitMargin}
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {result.profitMarginPercent}%
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-600">
                  {priceUi.markupPercent}
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {result.markupPercent}%
                </p>
              </div>
            </div>
          </div>
        )
      }
    >
      <CurrencySelect
        id="profit-loss-currency"
        value={currency}
        onChange={setCurrency}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="pl-cost"
            className="block text-sm font-semibold text-slate-800"
          >
            {priceUi.costPrice} ({currency})
          </label>
          <input
            id="pl-cost"
            type="number"
            min="0.01"
            step="any"
            value={costPrice}
            onChange={(e) => {
              setCostPrice(e.target.value);
              runCalculation(e.target.value, sellingPrice);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 tabular-nums focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
          />
        </div>
        <div>
          <label
            htmlFor="pl-sell"
            className="block text-sm font-semibold text-slate-800"
          >
            {priceUi.sellingPrice} ({currency})
          </label>
          <input
            id="pl-sell"
            type="number"
            min="0"
            step="any"
            value={sellingPrice}
            onChange={(e) => {
              setSellingPrice(e.target.value);
              runCalculation(costPrice, e.target.value);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 tabular-nums focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
          />
        </div>
      </div>
    </CalculatorShell>
  );
}
