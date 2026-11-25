"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { DatePicker } from "@/components/ui/DatePicker";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculateDateShift,
  DateShiftResult,
} from "@/lib/calculations/everyday";
import {
  formatISODateUTC,
  parseISODateUTC,
  parseNumberInput,
} from "@/lib/validation/inputs";

function todayISO(): string {
  const now = new Date();
  return formatISODateUTC(
    new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
  );
}

export function DateCalculator() {
  const initialDate = todayISO();
  const [startDate, setStartDate] = useState(initialDate);
  const [operation, setOperation] = useState<"add" | "subtract">("add");
  const [years, setYears] = useState("0");
  const [months, setMonths] = useState("1");
  const [weeks, setWeeks] = useState("0");
  const [days, setDays] = useState("14");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<DateShiftResult | null>(() => {
    const parsed = parseISODateUTC(initialDate, "Start date");
    return parsed.ok
      ? calculateDateShift({
          startDateUTC: parsed.value,
          operation: "add",
          years: 0,
          months: 1,
          weeks: 0,
          days: 14,
        })
      : null;
  });

  const runCalculation = (
    nextDate = startDate,
    nextOp = operation,
    nextY = years,
    nextM = months,
    nextW = weeks,
    nextD = days
  ) => {
    trackEvent("calculator_used", { calculator: "date-calculator" });
    const parsedDate = parseISODateUTC(nextDate, "Start date");
    if (!parsedDate.ok) {
      setError(parsedDate.error);
      setResult(null);
      return;
    }
    const y = parseNumberInput(nextY === "" ? "0" : nextY, "Years", {
      allowNegative: false,
      integer: true,
      max: 200,
    });
    const m = parseNumberInput(nextM === "" ? "0" : nextM, "Months", {
      allowNegative: false,
      integer: true,
      max: 2400,
    });
    const w = parseNumberInput(nextW === "" ? "0" : nextW, "Weeks", {
      allowNegative: false,
      integer: true,
      max: 10000,
    });
    const d = parseNumberInput(nextD === "" ? "0" : nextD, "Days", {
      allowNegative: false,
      integer: true,
      max: 50000,
    });
    for (const check of [y, m, w, d]) {
      if (!check.ok) {
        setError(check.error);
        setResult(null);
        return;
      }
    }
    if (!y.ok || !m.ok || !w.ok || !d.ok) return;

    const res = calculateDateShift({
      startDateUTC: parsedDate.value,
      operation: nextOp,
      years: y.value,
      months: m.value,
      weeks: w.value,
      days: d.value,
    });
    setError(null);
    setResult(res);
    trackEvent("calculation_completed", { calculator: "date-calculator" });
  };

  const handleReset = () => {
    const today = todayISO();
    setStartDate(today);
    setOperation("add");
    setYears("0");
    setMonths("1");
    setWeeks("0");
    setDays("14");
    runCalculation(today, "add", "0", "1", "0", "14");
  };

  return (
    <CalculatorShell
      title="Date Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Resulting Date: ${result.dayOfWeek}, ${result.resultDateReadable} (${result.resultDateISO})`
          : undefined
      }
      resultSlot={
        result && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Resulting Calendar Date
            </p>
            <p className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
              {result.dayOfWeek}, {result.resultDateReadable}
            </p>
            <p className="mt-1 font-mono text-xs text-slate-600 tabular-nums">
              ISO Date: {result.resultDateISO}
            </p>
          </div>
        )
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="date-calc-start"
            className="block text-sm font-semibold text-slate-800"
          >
            Start Date
          </label>
          <DatePicker
            id="date-calc-start"
            ariaLabel="Start Date"
            value={startDate}
            minYear={1900}
            maxYear={2100}
            onChange={(nextDate) => {
              setStartDate(nextDate);
              runCalculation(nextDate, operation, years, months, weeks, days);
            }}
          />
        </div>

        <div>
          <span className="block text-sm font-semibold text-slate-800">
            Operation
          </span>
          <div className="mt-1.5 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setOperation("add");
                runCalculation(startDate, "add", years, months, weeks, days);
              }}
              className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                operation === "add"
                  ? "border-sky-500 bg-sky-50 text-slate-900 font-semibold"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              Add (+)
            </button>
            <button
              type="button"
              onClick={() => {
                setOperation("subtract");
                runCalculation(startDate, "subtract", years, months, weeks, days);
              }}
              className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                operation === "subtract"
                  ? "border-sky-500 bg-sky-50 text-slate-900 font-semibold"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              Subtract (−)
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { id: "dc-years", label: "Years", val: years, set: setYears, idx: 0 },
          { id: "dc-months", label: "Months", val: months, set: setMonths, idx: 1 },
          { id: "dc-weeks", label: "Weeks", val: weeks, set: setWeeks, idx: 2 },
          { id: "dc-days", label: "Days", val: days, set: setDays, idx: 3 },
        ].map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="block text-xs font-semibold text-slate-700"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              type="number"
              min="0"
              step="1"
              value={field.val}
              onChange={(e) => {
                const v = e.target.value;
                field.set(v);
                runCalculation(
                  startDate,
                  operation,
                  field.idx === 0 ? v : years,
                  field.idx === 1 ? v : months,
                  field.idx === 2 ? v : weeks,
                  field.idx === 3 ? v : days
                );
              }}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 tabular-nums focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
            />
          </div>
        ))}
      </div>
    </CalculatorShell>
  );
}
