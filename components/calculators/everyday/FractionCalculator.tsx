"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculateFraction,
  FractionOperation,
  FractionResult,
} from "@/lib/calculations/everyday";
import { parseNumberInput } from "@/lib/validation/inputs";

const OPS: { id: FractionOperation; symbol: string; label: string }[] = [
  { id: "add", symbol: "+", label: "Add" },
  { id: "subtract", symbol: "−", label: "Subtract" },
  { id: "multiply", symbol: "×", label: "Multiply" },
  { id: "divide", symbol: "÷", label: "Divide" },
];

export function FractionCalculator() {
  const [n1, setN1] = useState("3");
  const [d1, setD1] = useState("4");
  const [n2, setN2] = useState("5");
  const [d2, setD2] = useState("6");
  const [op, setOp] = useState<FractionOperation>("add");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<FractionResult | null>(() =>
    calculateFraction(3, 4, 5, 6, "add")
  );

  const runCalculation = (
    rn1 = n1,
    rd1 = d1,
    rn2 = n2,
    rd2 = d2,
    nextOp = op
  ) => {
    trackEvent("calculator_used", { calculator: "fraction-calculator" });
    const pN1 = parseNumberInput(rn1, "First Numerator", { integer: true });
    const pD1 = parseNumberInput(rd1, "First Denominator", {
      integer: true,
      allowZero: false,
    });
    const pN2 = parseNumberInput(rn2, "Second Numerator", { integer: true });
    const pD2 = parseNumberInput(rd2, "Second Denominator", {
      integer: true,
      allowZero: false,
    });
    for (const check of [pN1, pD1, pN2, pD2]) {
      if (!check.ok) {
        setError(check.error);
        setResult(null);
        return;
      }
    }
    if (!pN1.ok || !pD1.ok || !pN2.ok || !pD2.ok) return;

    try {
      const res = calculateFraction(
        pN1.value,
        pD1.value,
        pN2.value,
        pD2.value,
        nextOp
      );
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", { calculator: "fraction-calculator" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid fraction input.");
      setResult(null);
    }
  };

  const handleReset = () => {
    setN1("3");
    setD1("4");
    setN2("5");
    setD2("6");
    setOp("add");
    runCalculation("3", "4", "5", "6", "add");
  };

  return (
    <CalculatorShell
      title="Fraction Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Fraction Result: ${result.formattedFraction}${result.formattedMixed ? ` (Mixed: ${result.formattedMixed})` : ""} · Decimal: ${result.decimal}`
          : undefined
      }
      resultSlot={
        result && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 tabular-nums">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Simplified Result
              </p>
              <p className="text-3xl font-bold text-slate-900">
                {result.formattedFraction}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Mixed Number
              </p>
              <p className="text-2xl font-bold text-slate-900">
                {result.formattedMixed ?? "Not applicable"}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Decimal Equivalent
              </p>
              <p className="text-2xl font-bold text-slate-900">
                {result.decimal}
              </p>
            </div>
          </div>
        )
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-11 items-center">
        {/* Fraction 1 */}
        <div className="sm:col-span-4 space-y-2">
          <label
            htmlFor="frac-n1"
            className="block text-xs font-semibold text-slate-700"
          >
            First Numerator
          </label>
          <input
            id="frac-n1"
            type="number"
            step="1"
            value={n1}
            onChange={(e) => {
              setN1(e.target.value);
              runCalculation(e.target.value, d1, n2, d2, op);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-center text-base font-semibold tabular-nums"
          />
          <div className="border-t-2 border-slate-800" aria-hidden="true" />
          <label
            htmlFor="frac-d1"
            className="block text-xs font-semibold text-slate-700"
          >
            First Denominator
          </label>
          <input
            id="frac-d1"
            type="number"
            step="1"
            value={d1}
            onChange={(e) => {
              setD1(e.target.value);
              runCalculation(n1, e.target.value, n2, d2, op);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-center text-base font-semibold tabular-nums"
          />
        </div>

        {/* Operator */}
        <div className="sm:col-span-3 flex flex-wrap sm:flex-col items-center justify-center gap-2">
          <span className="text-xs font-semibold text-slate-600">Operator</span>
          <div className="grid grid-cols-4 sm:grid-cols-2 gap-1.5">
            {OPS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-label={item.label}
                onClick={() => {
                  setOp(item.id);
                  runCalculation(n1, d1, n2, d2, item.id);
                }}
                className={`rounded-lg border px-3.5 py-2 text-base font-bold transition-colors ${
                  op === item.id
                    ? "border-sky-500 bg-sky-50 text-slate-900"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.symbol}
              </button>
            ))}
          </div>
        </div>

        {/* Fraction 2 */}
        <div className="sm:col-span-4 space-y-2">
          <label
            htmlFor="frac-n2"
            className="block text-xs font-semibold text-slate-700"
          >
            Second Numerator
          </label>
          <input
            id="frac-n2"
            type="number"
            step="1"
            value={n2}
            onChange={(e) => {
              setN2(e.target.value);
              runCalculation(n1, d1, e.target.value, d2, op);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-center text-base font-semibold tabular-nums"
          />
          <div className="border-t-2 border-slate-800" aria-hidden="true" />
          <label
            htmlFor="frac-d2"
            className="block text-xs font-semibold text-slate-700"
          >
            Second Denominator
          </label>
          <input
            id="frac-d2"
            type="number"
            step="1"
            value={d2}
            onChange={(e) => {
              setD2(e.target.value);
              runCalculation(n1, d1, n2, e.target.value, op);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-center text-base font-semibold tabular-nums"
          />
        </div>
      </div>
    </CalculatorShell>
  );
}
