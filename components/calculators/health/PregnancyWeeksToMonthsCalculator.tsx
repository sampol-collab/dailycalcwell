"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  convertPregnancyWeeksToMonths,
  PregnancyWeeksMonthsResult,
} from "@/lib/calculations/health";
import { parseNumberInput } from "@/lib/validation/inputs";

export function PregnancyWeeksToMonthsCalculator() {
  const [weeks, setWeeks] = useState("24");
  const [days, setDays] = useState("3");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PregnancyWeeksMonthsResult | null>(() =>
    convertPregnancyWeeksToMonths(24, 3)
  );

  const runCalculation = (wStr = weeks, dStr = days) => {
    trackEvent("calculator_used", { calculator: "pregnancy-weeks-to-months" });
    const pW = parseNumberInput(wStr, "Pregnancy weeks", {
      min: 0,
      max: 42,
      integer: true,
    });
    if (!pW.ok) {
      setError(pW.error);
      setResult(null);
      return;
    }
    const pD = parseNumberInput(dStr === "" ? "0" : dStr, "Additional days", {
      min: 0,
      max: 6,
      integer: true,
    });
    if (!pD.ok) {
      setError(pD.error);
      setResult(null);
      return;
    }
    try {
      const res = convertPregnancyWeeksToMonths(pW.value, pD.value);
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", {
        calculator: "pregnancy-weeks-to-months",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    setWeeks("24");
    setDays("3");
    runCalculation("24", "3");
  };

  return (
    <CalculatorShell
      title="Pregnancy Weeks to Months Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `${weeks} weeks ${days || 0} days is approximately Month ${result.approximateMonth} (${result.trimesterLabel}).`
          : undefined
      }
      resultSlot={
        result && (
          <div className="space-y-3 tabular-nums">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Approximate Month
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  Month {result.approximateMonth}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Trimester
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {result.trimesterLabel}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Progress (40-Week Term)
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {result.progressPercent}%
                </p>
                <p className="text-xs text-slate-600">{result.totalDays} days total</p>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              Months are approximate (~4.33 weeks/month). Clinical prenatal care always tracks gestational age in weeks and days.
            </p>
          </div>
        )
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="pwm-weeks" className="block text-sm font-semibold text-slate-800">
            Completed Pregnancy Weeks (0–42)
          </label>
          <input
            id="pwm-weeks"
            type="number"
            min="0"
            max="42"
            step="1"
            value={weeks}
            onChange={(e) => {
              setWeeks(e.target.value);
              runCalculation(e.target.value, days);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="pwm-days" className="block text-sm font-semibold text-slate-800">
            Additional Days (0–6)
          </label>
          <input
            id="pwm-days"
            type="number"
            min="0"
            max="6"
            step="1"
            value={days}
            onChange={(e) => {
              setDays(e.target.value);
              runCalculation(weeks, e.target.value);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
          />
        </div>
      </div>
    </CalculatorShell>
  );
}
