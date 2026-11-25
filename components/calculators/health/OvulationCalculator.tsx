"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { DatePicker } from "@/components/ui/DatePicker";
import { trackEvent } from "@/lib/analytics/ga4";
import { calculateOvulation, OvulationResult } from "@/lib/calculations/health";
import {
  formatISODateUTC,
  parseISODateUTC,
  parseNumberInput,
} from "@/lib/validation/inputs";

function defaultPeriodISO(): string {
  const now = new Date();
  const today = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  return formatISODateUTC(new Date(today.getTime() - 10 * 86_400_000));
}

export function OvulationCalculator() {
  const initialPeriod = defaultPeriodISO();
  const [lmpDate, setLmpDate] = useState(initialPeriod);
  const [cycleLength, setCycleLength] = useState("28");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<OvulationResult | null>(() => {
    const p = parseISODateUTC(initialPeriod, "Last period date");
    return p.ok ? calculateOvulation(p.value, 28) : null;
  });

  const runCalculation = (nextLmp = lmpDate, nextCycle = cycleLength) => {
    trackEvent("calculator_used", { calculator: "ovulation-calculator" });
    const pDate = parseISODateUTC(nextLmp, "Last menstrual period date");
    if (!pDate.ok) {
      setError(pDate.error);
      setResult(null);
      return;
    }
    const pCycle = parseNumberInput(nextCycle, "Average cycle length (days)", {
      min: 21,
      max: 45,
      integer: true,
    });
    if (!pCycle.ok) {
      setError(pCycle.error);
      setResult(null);
      return;
    }
    try {
      const res = calculateOvulation(pDate.value, pCycle.value);
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", {
        calculator: "ovulation-calculator",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    const def = defaultPeriodISO();
    setLmpDate(def);
    setCycleLength("28");
    runCalculation(def, "28");
  };

  return (
    <CalculatorShell
      title="Ovulation Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Estimated Ovulation: ${result.estimatedOvulationReadable} · Estimated Fertile Window: ${result.fertileWindowStartReadable} – ${result.fertileWindowEndReadable} · Estimated Next Period: ${result.nextPeriodReadable}. Not reliable for contraception.`
          : undefined
      }
      resultSlot={
        result && (
          <div className="space-y-4 tabular-nums">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Estimated Ovulation Date
                </p>
                <p className="text-xl font-bold text-slate-900">
                  {result.estimatedOvulationReadable}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Estimated Fertile Window
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {result.fertileWindowStartReadable} –{" "}
                  {result.fertileWindowEndReadable}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Estimated Next Period
                </p>
                <p className="text-xl font-bold text-slate-900">
                  {result.nextPeriodReadable}
                </p>
              </div>
            </div>
            <p className="text-xs font-medium text-amber-900">
              Important: Calendar-based ovulation estimates are NOT reliable contraception and should never be used to prevent pregnancy. Cycle timing varies naturally.
            </p>
          </div>
        )
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ovu-lmp" className="block text-sm font-semibold text-slate-800">
            First Day of Last Menstrual Period
          </label>
          <DatePicker
            id="ovu-lmp"
            ariaLabel="First Day of Last Menstrual Period"
            value={lmpDate}
            minYear={new Date().getUTCFullYear() - 2}
            maxYear={new Date().getUTCFullYear() + 1}
            onChange={(nextLmp) => {
              setLmpDate(nextLmp);
              runCalculation(nextLmp, cycleLength);
            }}
          />
        </div>
        <div>
          <label htmlFor="ovu-cycle" className="block text-sm font-semibold text-slate-800">
            Average Cycle Length (21–45 days)
          </label>
          <input
            id="ovu-cycle"
            type="number"
            min="21"
            max="45"
            step="1"
            value={cycleLength}
            onChange={(e) => {
              setCycleLength(e.target.value);
              runCalculation(lmpDate, e.target.value);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
          />
        </div>
      </div>
    </CalculatorShell>
  );
}
