"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculateTimeArithmetic,
  TimeArithmeticResult,
} from "@/lib/calculations/everyday";
import { parseNumberInput } from "@/lib/validation/inputs";

export function TimeCalculator() {
  const [h1, setH1] = useState("4");
  const [m1, setM1] = useState("45");
  const [h2, setH2] = useState("3");
  const [m2, setM2] = useState("35");
  const [op, setOp] = useState<"add" | "subtract">("add");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TimeArithmeticResult | null>(() =>
    calculateTimeArithmetic(4, 45, 3, 35, "add")
  );

  const runCalculation = (
    rh1 = h1,
    rm1 = m1,
    rh2 = h2,
    rm2 = m2,
    nextOp = op
  ) => {
    trackEvent("calculator_used", { calculator: "time-calculator" });
    const ph1 = parseNumberInput(rh1 === "" ? "0" : rh1, "First Hours", {
      allowNegative: false,
      integer: true,
    });
    const pm1 = parseNumberInput(rm1 === "" ? "0" : rm1, "First Minutes", {
      allowNegative: false,
      integer: true,
    });
    const ph2 = parseNumberInput(rh2 === "" ? "0" : rh2, "Second Hours", {
      allowNegative: false,
      integer: true,
    });
    const pm2 = parseNumberInput(rm2 === "" ? "0" : rm2, "Second Minutes", {
      allowNegative: false,
      integer: true,
    });
    for (const check of [ph1, pm1, ph2, pm2]) {
      if (!check.ok) {
        setError(check.error);
        setResult(null);
        return;
      }
    }
    if (!ph1.ok || !pm1.ok || !ph2.ok || !pm2.ok) return;

    const res = calculateTimeArithmetic(
      ph1.value,
      pm1.value,
      ph2.value,
      pm2.value,
      nextOp
    );
    setError(null);
    setResult(res);
    trackEvent("calculation_completed", { calculator: "time-calculator" });
  };

  const handleReset = () => {
    setH1("4");
    setM1("45");
    setH2("3");
    setM2("35");
    setOp("add");
    runCalculation("4", "45", "3", "35", "add");
  };

  return (
    <CalculatorShell
      title="Time Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Time Total: ${result.formatted} (${result.totalMinutes} minutes)`
          : undefined
      }
      resultSlot={
        result && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 tabular-nums">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Resulting Time
              </p>
              <p className="text-3xl font-bold text-slate-900">
                {result.formatted}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Total Minutes
              </p>
              <p className="text-xl font-bold text-slate-900">
                {result.totalMinutes} mins
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Days Equivalent
              </p>
              <p className="text-xl font-bold text-slate-900">
                {result.daysEquivalent} days
              </p>
            </div>
          </div>
        )
      }
    >
      <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
        <button
          type="button"
          onClick={() => {
            setOp("add");
            runCalculation(h1, m1, h2, m2, "add");
          }}
          className={`rounded-md px-4 py-1.5 text-sm font-medium ${
            op === "add"
              ? "bg-white text-slate-900 shadow-xs font-semibold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Add (+)
        </button>
        <button
          type="button"
          onClick={() => {
            setOp("subtract");
            runCalculation(h1, m1, h2, m2, "subtract");
          }}
          className={`rounded-md px-4 py-1.5 text-sm font-medium ${
            op === "subtract"
              ? "bg-white text-slate-900 shadow-xs font-semibold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Subtract (−)
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div>
          <label htmlFor="tc-h1" className="block text-xs font-semibold text-slate-700">
            Time 1 Hours
          </label>
          <input
            id="tc-h1"
            type="number"
            min="0"
            step="1"
            value={h1}
            onChange={(e) => {
              setH1(e.target.value);
              runCalculation(e.target.value, m1, h2, m2, op);
            }}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="tc-m1" className="block text-xs font-semibold text-slate-700">
            Time 1 Minutes
          </label>
          <input
            id="tc-m1"
            type="number"
            min="0"
            step="1"
            value={m1}
            onChange={(e) => {
              setM1(e.target.value);
              runCalculation(h1, e.target.value, h2, m2, op);
            }}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="tc-h2" className="block text-xs font-semibold text-slate-700">
            Time 2 Hours
          </label>
          <input
            id="tc-h2"
            type="number"
            min="0"
            step="1"
            value={h2}
            onChange={(e) => {
              setH2(e.target.value);
              runCalculation(h1, m1, e.target.value, m2, op);
            }}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="tc-m2" className="block text-xs font-semibold text-slate-700">
            Time 2 Minutes
          </label>
          <input
            id="tc-m2"
            type="number"
            min="0"
            step="1"
            value={m2}
            onChange={(e) => {
              setM2(e.target.value);
              runCalculation(h1, m1, h2, e.target.value, op);
            }}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base tabular-nums"
          />
        </div>
      </div>
    </CalculatorShell>
  );
}
