"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { DatePicker } from "@/components/ui/DatePicker";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculatePregnancyDueDate,
  calculatePregnancyFromDueDate,
  PregnancyEstimateResult,
} from "@/lib/calculations/health";
import { formatISODateUTC, parseISODateUTC } from "@/lib/validation/inputs";

function todayUTC(): Date {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

function defaultLmpISO(): string {
  return formatISODateUTC(new Date(todayUTC().getTime() - 100 * 86_400_000));
}

function defaultDueISO(): string {
  return formatISODateUTC(new Date(todayUTC().getTime() + 180 * 86_400_000));
}

export function PregnancyCalculator() {
  const [method, setMethod] = useState<"lmp" | "dueDate">("lmp");
  const [lmpDate, setLmpDate] = useState(defaultLmpISO);
  const [dueDate, setDueDate] = useState(defaultDueISO);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PregnancyEstimateResult | null>(() => {
    const p = parseISODateUTC(defaultLmpISO(), "Last menstrual period");
    return p.ok ? calculatePregnancyDueDate(p.value, todayUTC(), 28) : null;
  });

  const runCalculation = (
    nextMethod = method,
    nextLmp = lmpDate,
    nextDue = dueDate
  ) => {
    trackEvent("calculator_used", { calculator: "pregnancy-calculator" });
    try {
      if (nextMethod === "lmp") {
        const p = parseISODateUTC(nextLmp, "Last menstrual period date");
        if (!p.ok) {
          setError(p.error);
          setResult(null);
          return;
        }
        setResult(calculatePregnancyDueDate(p.value, todayUTC(), 28));
      } else {
        const p = parseISODateUTC(nextDue, "Estimated due date");
        if (!p.ok) {
          setError(p.error);
          setResult(null);
          return;
        }
        setResult(calculatePregnancyFromDueDate(p.value, todayUTC()));
      }
      setError(null);
      trackEvent("calculation_completed", { calculator: "pregnancy-calculator" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid date input.");
      setResult(null);
    }
  };

  const handleReset = () => {
    const defLmp = defaultLmpISO();
    const defDue = defaultDueISO();
    setLmpDate(defLmp);
    setDueDate(defDue);
    runCalculation(method, defLmp, defDue);
  };

  return (
    <CalculatorShell
      title="Pregnancy Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Estimated Gestational Age: ${result.gestationalWeeks}w ${result.gestationalDays}d (${result.progressPercent}% progress, Estimated Due Date: ${result.dueDateReadable}).`
          : undefined
      }
      resultSlot={
        result && (
          <div className="space-y-4 tabular-nums">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Estimated Gestational Age
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {result.gestationalWeeks}w {result.gestationalDays}d
                </p>
                <p className="text-xs text-slate-600">{result.trimesterLabel}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Estimated Pregnancy Progress
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {result.progressPercent}%
                </p>
                <div
                  className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden"
                  aria-hidden="true"
                >
                  <div
                    className="h-full bg-[#38BDF8]"
                    style={{ width: `${Math.min(100, result.progressPercent)}%` }}
                  />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Estimated Due Date
                </p>
                <p className="text-xl font-bold text-slate-900">
                  {result.dueDateReadable}
                </p>
                <p className="text-xs text-slate-600">
                  ~{result.daysRemaining} days remaining
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              All values above are estimates based on a 280-day gestational model. Clinical ultrasound dating from your doctor or midwife is more precise.
            </p>
          </div>
        )
      }
    >
      <div>
        <span className="block text-sm font-semibold text-slate-800 mb-1.5">
          Calculation Method
        </span>
        <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
          <button
            type="button"
            onClick={() => {
              setMethod("lmp");
              runCalculation("lmp", lmpDate, dueDate);
            }}
            className={`rounded-md px-3.5 py-1.5 text-sm font-medium ${
              method === "lmp"
                ? "bg-white text-slate-900 shadow-xs font-semibold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Last Menstrual Period (LMP)
          </button>
          <button
            type="button"
            onClick={() => {
              setMethod("dueDate");
              runCalculation("dueDate", lmpDate, dueDate);
            }}
            className={`rounded-md px-3.5 py-1.5 text-sm font-medium ${
              method === "dueDate"
                ? "bg-white text-slate-900 shadow-xs font-semibold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Estimated Due Date
          </button>
        </div>
      </div>

      {method === "lmp" ? (
        <div className="max-w-xs">
          <label htmlFor="preg-lmp" className="block text-sm font-semibold text-slate-800">
            First Day of Last Menstrual Period
          </label>
          <DatePicker
            id="preg-lmp"
            ariaLabel="First Day of Last Menstrual Period"
            value={lmpDate}
            minYear={todayUTC().getUTCFullYear() - 2}
            maxYear={todayUTC().getUTCFullYear() + 1}
            onChange={(nextLmp) => {
              setLmpDate(nextLmp);
              runCalculation("lmp", nextLmp, dueDate);
            }}
          />
        </div>
      ) : (
        <div className="max-w-xs">
          <label htmlFor="preg-due" className="block text-sm font-semibold text-slate-800">
            Estimated Due Date
          </label>
          <DatePicker
            id="preg-due"
            ariaLabel="Estimated Due Date"
            value={dueDate}
            minYear={todayUTC().getUTCFullYear() - 1}
            maxYear={todayUTC().getUTCFullYear() + 2}
            onChange={(nextDue) => {
              setDueDate(nextDue);
              runCalculation("dueDate", lmpDate, nextDue);
            }}
          />
        </div>
      )}
    </CalculatorShell>
  );
}
