"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { useLocale } from "@/components/i18n/LocaleContext";
import { CurrencySelect } from "@/components/ui/CurrencySelect";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculatePercentage,
  formatCurrencyValue,
  PercentageMode,
  PercentageResult,
} from "@/lib/calculations/everyday";
import { DEFAULT_CURRENCY_BY_LOCALE } from "@/lib/constants/currencies";
import { LOCALE_CONFIG } from "@/lib/i18n/config";
import { getPriceUi } from "@/lib/i18n/price-ui";
import { parseNumberInput } from "@/lib/validation/inputs";

const MODES: { id: PercentageMode; label: string; aLabel: string; bLabel: string }[] = [
  { id: "percentOf", label: "X% of Y", aLabel: "Percentage (%)", bLabel: "Total Value (Y)" },
  { id: "whatPercent", label: "X is what % of Y", aLabel: "Part Value (X)", bLabel: "Whole Value (Y)" },
  { id: "increase", label: "Percentage Increase", aLabel: "Original Value", bLabel: "Increase (%)" },
  { id: "decrease", label: "Percentage Decrease", aLabel: "Original Value", bLabel: "Decrease (%)" },
  { id: "difference", label: "Percentage Difference", aLabel: "Value A", bLabel: "Value B" },
  { id: "change", label: "Percentage Change", aLabel: "Initial Value", bLabel: "New Value" },
];

export function PercentageCalculator() {
  const { locale } = useLocale();
  const intlLocale = LOCALE_CONFIG[locale].intlLocale;
  const pctPriceUi = getPriceUi(locale).percentagePrice;

  const [mode, setMode] = useState<PercentageMode>("percentOf");
  const [valA, setValA] = useState("18");
  const [valB, setValB] = useState("2500");
  const [asCurrency, setAsCurrency] = useState(false);
  const [currency, setCurrency] = useState<string>(
    DEFAULT_CURRENCY_BY_LOCALE[locale]
  );
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PercentageResult | null>(() =>
    calculatePercentage("percentOf", 18, 2500)
  );

  const activeMeta = MODES.find((m) => m.id === mode)!;

  const isMonetaryPrimary =
    asCurrency &&
    (mode === "percentOf" || mode === "increase" || mode === "decrease");
  const isMonetarySecondary =
    asCurrency &&
    (mode === "increase" ||
      mode === "decrease" ||
      mode === "difference" ||
      mode === "change");

  const runCalculation = (
    nextMode: PercentageMode = mode,
    rawA: string = valA,
    rawB: string = valB
  ) => {
    trackEvent("calculator_used", { calculator: "percentage-calculator" });
    const meta = MODES.find((m) => m.id === nextMode)!;
    const parsedA = parseNumberInput(rawA, meta.aLabel);
    if (!parsedA.ok) {
      setError(parsedA.error);
      setResult(null);
      return;
    }
    const parsedB = parseNumberInput(rawB, meta.bLabel);
    if (!parsedB.ok) {
      setError(parsedB.error);
      setResult(null);
      return;
    }
    try {
      const res = calculatePercentage(nextMode, parsedA.value, parsedB.value);
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", { calculator: "percentage-calculator" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    setMode("percentOf");
    setValA("18");
    setValB("2500");
    setAsCurrency(false);
    setError(null);
    setResult(calculatePercentage("percentOf", 18, 2500));
  };

  const displayPrimary = result
    ? isMonetaryPrimary
      ? formatCurrencyValue(result.primaryValue, currency, intlLocale)
      : result.formattedPrimary
    : "";

  const displaySecondary =
    result && result.secondaryValue
      ? isMonetarySecondary
        ? formatCurrencyValue(Number(result.secondaryValue), currency, intlLocale)
        : result.secondaryValue
      : "";

  const shareText = result
    ? `${activeMeta.label}: ${displayPrimary} (${result.formulaUsed})`
    : undefined;

  return (
    <CalculatorShell
      title="Percentage Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={shareText}
      resultSlot={
        result && (
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              {activeMeta.label} Result
            </p>
            <p className="text-3xl font-bold text-slate-900 tabular-nums">
              {displayPrimary}
            </p>
            {result.secondaryLabel && result.secondaryValue && (
              <p className="text-sm text-slate-700 tabular-nums">
                <span className="font-medium">{result.secondaryLabel}:</span>{" "}
                {displaySecondary}
              </p>
            )}
            <p className="pt-1 font-mono text-xs text-slate-600 tabular-nums">
              Formula: {result.formulaUsed}
            </p>
          </div>
        )
      }
    >
      <div>
        <span className="block text-sm font-semibold text-slate-800 mb-2">
          Calculation Type
        </span>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => {
                setMode(m.id);
                runCalculation(m.id, valA, valB);
              }}
              className={`rounded-lg border px-3 py-2 text-xs sm:text-sm font-medium text-left transition-colors focus-visible:outline-2 focus-visible:outline-sky-600 ${
                mode === m.id
                  ? "border-sky-500 bg-sky-50 text-slate-900 font-semibold"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Optional Price / World Currency Output Mode */}
      <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold text-slate-700">
            {pctPriceUi.toggleLabel}
          </span>
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5">
            <button
              type="button"
              onClick={() => setAsCurrency(false)}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                !asCurrency
                  ? "bg-sky-50 text-slate-900 font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {pctPriceUi.plainNumber}
            </button>
            <button
              type="button"
              onClick={() => setAsCurrency(true)}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                asCurrency
                  ? "bg-sky-50 text-slate-900 font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {pctPriceUi.currencyPrice}
            </button>
          </div>
        </div>

        {asCurrency && (
          <CurrencySelect
            id="pct-currency"
            value={currency}
            onChange={setCurrency}
          />
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="pct-input-a"
            className="block text-sm font-semibold text-slate-800"
          >
            {activeMeta.aLabel}
          </label>
          <input
            id="pct-input-a"
            type="number"
            step="any"
            value={valA}
            onChange={(e) => {
              setValA(e.target.value);
              runCalculation(mode, e.target.value, valB);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 tabular-nums focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
          />
        </div>

        <div>
          <label
            htmlFor="pct-input-b"
            className="block text-sm font-semibold text-slate-800"
          >
            {activeMeta.bLabel}
          </label>
          <input
            id="pct-input-b"
            type="number"
            step="any"
            value={valB}
            onChange={(e) => {
              setValB(e.target.value);
              runCalculation(mode, valA, e.target.value);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 tabular-nums focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
          />
        </div>
      </div>
    </CalculatorShell>
  );
}
