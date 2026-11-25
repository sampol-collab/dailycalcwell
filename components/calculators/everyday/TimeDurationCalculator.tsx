"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculateTimeDuration,
  TimeDurationResult,
} from "@/lib/calculations/everyday";

export function TimeDurationCalculator() {
  const [startTime, setStartTime] = useState("22:15");
  const [endTime, setEndTime] = useState("06:45");
  const [allowOvernight, setAllowOvernight] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TimeDurationResult | null>(() =>
    calculateTimeDuration("22:15", "06:45", true)
  );

  const runCalculation = (
    nextStart = startTime,
    nextEnd = endTime,
    nextOvernight = allowOvernight
  ) => {
    trackEvent("calculator_used", { calculator: "time-duration-calculator" });
    try {
      const res = calculateTimeDuration(nextStart, nextEnd, nextOvernight);
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", {
        calculator: "time-duration-calculator",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid time inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    setStartTime("22:15");
    setEndTime("06:45");
    setAllowOvernight(true);
    runCalculation("22:15", "06:45", true);
  };

  return (
    <CalculatorShell
      title="Time Duration Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Elapsed Duration: ${result.formatted} (${result.decimalHours} decimal hours)`
          : undefined
      }
      resultSlot={
        result && (
          <div className="space-y-3 tabular-nums">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Elapsed Duration
              </p>
              <p className="text-3xl font-bold text-slate-900">
                {result.formatted}
              </p>
              {result.isOvernight && (
                <p className="mt-1 text-xs font-medium text-sky-900">
                  Overnight interval (crosses midnight into the next day).
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-sky-200 pt-3">
              <div>
                <p className="text-xs font-medium text-slate-600">
                  Decimal Hours
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {result.decimalHours} hrs
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-600">
                  Total Minutes
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {result.totalMinutes} mins
                </p>
              </div>
            </div>
          </div>
        )
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="td-start"
            className="block text-sm font-semibold text-slate-800"
          >
            Start Time
          </label>
          <input
            id="td-start"
            type="time"
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value);
              runCalculation(e.target.value, endTime, allowOvernight);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
          />
        </div>
        <div>
          <label
            htmlFor="td-end"
            className="block text-sm font-semibold text-slate-800"
          >
            End Time
          </label>
          <input
            id="td-end"
            type="time"
            value={endTime}
            onChange={(e) => {
              setEndTime(e.target.value);
              runCalculation(startTime, e.target.value, allowOvernight);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
          />
        </div>
      </div>

      <label className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-700 cursor-pointer">
        <input
          type="checkbox"
          checked={allowOvernight}
          onChange={(e) => {
            setAllowOvernight(e.target.checked);
            runCalculation(startTime, endTime, e.target.checked);
          }}
          className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
        />
        <span>Allow overnight interval (if end time is earlier than start time)</span>
      </label>
    </CalculatorShell>
  );
}
