"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { DatePicker } from "@/components/ui/DatePicker";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculateDaysBetween,
  DaysBetweenResult,
} from "@/lib/calculations/everyday";
import { parseISODateUTC } from "@/lib/validation/inputs";

export function DaysBetweenDatesCalculator() {
  const [startDate, setStartDate] = useState("2026-01-01");
  const [endDate, setEndDate] = useState("2026-12-31");
  const [includeEndDate, setIncludeEndDate] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<DaysBetweenResult | null>(() => {
    const s = parseISODateUTC("2026-01-01", "Start date");
    const e = parseISODateUTC("2026-12-31", "End date");
    return s.ok && e.ok ? calculateDaysBetween(s.value, e.value, false) : null;
  });

  const runCalculation = (
    nextStart = startDate,
    nextEnd = endDate,
    nextInc = includeEndDate
  ) => {
    trackEvent("calculator_used", {
      calculator: "days-between-dates-calculator",
    });
    const s = parseISODateUTC(nextStart, "Start date");
    if (!s.ok) {
      setError(s.error);
      setResult(null);
      return;
    }
    const e = parseISODateUTC(nextEnd, "End date");
    if (!e.ok) {
      setError(e.error);
      setResult(null);
      return;
    }
    const res = calculateDaysBetween(s.value, e.value, nextInc);
    setError(null);
    setResult(res);
    trackEvent("calculation_completed", {
      calculator: "days-between-dates-calculator",
    });
  };

  const handleReset = () => {
    setStartDate("2026-01-01");
    setEndDate("2026-12-31");
    setIncludeEndDate(false);
    runCalculation("2026-01-01", "2026-12-31", false);
  };

  return (
    <CalculatorShell
      title="Days Between Dates Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Difference: ${result.totalDays} days (${result.weeks} weeks, ${result.remainingDays} days).`
          : undefined
      }
      resultSlot={
        result && (
          <div className="space-y-3 tabular-nums">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Total Calendar Span
              </p>
              <p className="text-3xl font-bold text-slate-900">
                {result.totalDays.toLocaleString("en-US")} days
              </p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {result.weeks} weeks and {result.remainingDays} days
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-sky-200 pt-3 text-sm">
              <div>
                <span className="text-slate-600">Approx. Months: </span>
                <span className="font-semibold text-slate-900">
                  {result.approximateMonths}
                </span>
              </div>
              <div>
                <span className="text-slate-600">Approx. Years: </span>
                <span className="font-semibold text-slate-900">
                  {result.approximateYears}
                </span>
              </div>
            </div>
            {result.reversedOrder && (
              <p className="text-xs text-slate-600">
                Note: End date is earlier than start date; absolute duration is shown.
              </p>
            )}
          </div>
        )
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="dbd-start"
            className="block text-sm font-semibold text-slate-800"
          >
            Start Date
          </label>
          <DatePicker
            id="dbd-start"
            ariaLabel="Start Date"
            value={startDate}
            minYear={1900}
            maxYear={2100}
            onChange={(nextStart) => {
              setStartDate(nextStart);
              runCalculation(nextStart, endDate, includeEndDate);
            }}
          />
        </div>
        <div>
          <label
            htmlFor="dbd-end"
            className="block text-sm font-semibold text-slate-800"
          >
            End Date
          </label>
          <DatePicker
            id="dbd-end"
            ariaLabel="End Date"
            value={endDate}
            minYear={1900}
            maxYear={2100}
            onChange={(nextEnd) => {
              setEndDate(nextEnd);
              runCalculation(startDate, nextEnd, includeEndDate);
            }}
          />
        </div>
      </div>

      <label className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-700 cursor-pointer">
        <input
          type="checkbox"
          checked={includeEndDate}
          onChange={(e) => {
            setIncludeEndDate(e.target.checked);
            runCalculation(startDate, endDate, e.target.checked);
          }}
          className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
        />
        <span>Include end date (+1 day)</span>
      </label>
    </CalculatorShell>
  );
}
