"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { DatePicker } from "@/components/ui/DatePicker";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculatePregnancyDueDate,
  PregnancyEstimateResult,
} from "@/lib/calculations/health";
import {
  formatISODateUTC,
  parseISODateUTC,
  parseNumberInput,
} from "@/lib/validation/inputs";

function todayUTC(): Date {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

function defaultLmpISO(): string {
  const d = new Date(todayUTC().getTime() - 70 * 86_400_000);
  return formatISODateUTC(d);
}

export function PregnancyDueDateCalculator() {
  const initialLmp = defaultLmpISO();
  const [lmpDate, setLmpDate] = useState(initialLmp);
  const [cycleLength, setCycleLength] = useState("28");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PregnancyEstimateResult | null>(() => {
    const parsed = parseISODateUTC(initialLmp, "Last menstrual period");
    return parsed.ok
      ? calculatePregnancyDueDate(parsed.value, todayUTC(), 28)
      : null;
  });

  const runCalculation = (nextLmp = lmpDate, nextCycle = cycleLength) => {
    trackEvent("calculator_used", {
      calculator: "pregnancy-due-date-calculator",
    });
    const parsedLmp = parseISODateUTC(nextLmp, "Last menstrual period date");
    if (!parsedLmp.ok) {
      setError(parsedLmp.error);
      setResult(null);
      return;
    }
    const parsedCycle = parseNumberInput(nextCycle, "Average cycle length (days)", {
      min: 21,
      max: 35,
      integer: true,
    });
    if (!parsedCycle.ok) {
      setError(parsedCycle.error);
      setResult(null);
      return;
    }
    try {
      const res = calculatePregnancyDueDate(
        parsedLmp.value,
        todayUTC(),
        parsedCycle.value
      );
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", {
        calculator: "pregnancy-due-date-calculator",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    const def = defaultLmpISO();
    setLmpDate(def);
    setCycleLength("28");
    runCalculation(def, "28");
  };

  return (
    <CalculatorShell
      title="Pregnancy Due Date Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Estimated Due Date: ${result.dueDateReadable} (Estimated gestational age: ${result.gestationalWeeks}w ${result.gestationalDays}d). Estimate only.`
          : undefined
      }
      resultSlot={
        result && (
          <div className="space-y-4 tabular-nums">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Estimated Due Date
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {result.dueDateReadable}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Estimated Gestational Age
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {result.gestationalWeeks} weeks, {result.gestationalDays} days
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Estimated Trimester
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {result.trimesterLabel}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              Based on the standard 280-day (40-week) assumption adjusted for cycle length. Actual delivery dates vary and ultrasound dating by a clinician may be more accurate.
            </p>
          </div>
        )
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="pdd-lmp" className="block text-sm font-semibold text-slate-800">
            First Day of Last Menstrual Period (LMP)
          </label>
          <DatePicker
            id="pdd-lmp"
            ariaLabel="First Day of Last Menstrual Period"
            value={lmpDate}
            minYear={todayUTC().getUTCFullYear() - 2}
            maxYear={todayUTC().getUTCFullYear() + 1}
            onChange={(nextLmp) => {
              setLmpDate(nextLmp);
              runCalculation(nextLmp, cycleLength);
            }}
          />
        </div>
        <div>
          <label htmlFor="pdd-cycle" className="block text-sm font-semibold text-slate-800">
            Average Menstrual Cycle Length (21–35 days)
          </label>
          <input
            id="pdd-cycle"
            type="number"
            min="21"
            max="35"
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
