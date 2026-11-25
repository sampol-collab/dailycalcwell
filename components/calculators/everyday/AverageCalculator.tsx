"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  AverageResult,
  calculateArithmeticAverage,
  calculateWeightedAverage,
  WeightedAverageResult,
} from "@/lib/calculations/everyday";
import { parseNumberInput } from "@/lib/validation/inputs";

export function AverageCalculator() {
  const [mode, setMode] = useState<"standard" | "weighted">("standard");
  const [numbers, setNumbers] = useState<string[]>(["84", "91", "78", "87"]);
  const [weightedRows, setWeightedRows] = useState<
    { value: string; weight: string }[]
  >([
    { value: "82", weight: "30" },
    { value: "76", weight: "30" },
    { value: "90", weight: "40" },
  ]);

  const [error, setError] = useState<string | null>(null);
  const [stdResult, setStdResult] = useState<AverageResult | null>(() =>
    calculateArithmeticAverage([84, 91, 78, 87])
  );
  const [weightedResult, setWeightedResult] =
    useState<WeightedAverageResult | null>(() =>
      calculateWeightedAverage([
        { value: 82, weight: 30 },
        { value: 76, weight: 30 },
        { value: 90, weight: 40 },
      ])
    );

  const runStandard = (list: string[] = numbers) => {
    trackEvent("calculator_used", { calculator: "average-calculator" });
    const parsed: number[] = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].trim() === "") continue;
      const outcome = parseNumberInput(list[i], `Value #${i + 1}`);
      if (!outcome.ok) {
        setError(outcome.error);
        setStdResult(null);
        return;
      }
      parsed.push(outcome.value);
    }
    try {
      const res = calculateArithmeticAverage(parsed);
      setError(null);
      setStdResult(res);
      trackEvent("calculation_completed", { calculator: "average-calculator" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to calculate average.");
      setStdResult(null);
    }
  };

  const runWeighted = (rows = weightedRows) => {
    trackEvent("calculator_used", { calculator: "average-calculator" });
    const items: { value: number; weight: number }[] = [];
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].value.trim() === "" && rows[i].weight.trim() === "") continue;
      const v = parseNumberInput(rows[i].value, `Row ${i + 1} Value`);
      if (!v.ok) {
        setError(v.error);
        setWeightedResult(null);
        return;
      }
      const w = parseNumberInput(rows[i].weight, `Row ${i + 1} Weight`, {
        allowNegative: false,
      });
      if (!w.ok) {
        setError(w.error);
        setWeightedResult(null);
        return;
      }
      items.push({ value: v.value, weight: w.value });
    }
    try {
      const res = calculateWeightedAverage(items);
      setError(null);
      setWeightedResult(res);
      trackEvent("calculation_completed", { calculator: "average-calculator" });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to calculate weighted average."
      );
      setWeightedResult(null);
    }
  };

  const handleReset = () => {
    setNumbers(["84", "91", "78", "87"]);
    setWeightedRows([
      { value: "82", weight: "30" },
      { value: "76", weight: "30" },
      { value: "90", weight: "40" },
    ]);
    setError(null);
    setStdResult(calculateArithmeticAverage([84, 91, 78, 87]));
    setWeightedResult(
      calculateWeightedAverage([
        { value: 82, weight: 30 },
        { value: 76, weight: 30 },
        { value: 90, weight: 40 },
      ])
    );
  };

  const shareText =
    mode === "standard" && stdResult
      ? `Arithmetic Mean: ${stdResult.mean} (Count: ${stdResult.count}, Sum: ${stdResult.sum}, Median: ${stdResult.median})`
      : mode === "weighted" && weightedResult
        ? `Weighted Average: ${weightedResult.weightedMean} (Total Weight: ${weightedResult.totalWeight})`
        : undefined;

  return (
    <CalculatorShell
      title="Average Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => (mode === "standard" ? runStandard() : runWeighted())}
      resultShareText={shareText}
      resultSlot={
        mode === "standard" && stdResult ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 tabular-nums">
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold text-slate-600">Arithmetic Mean</p>
              <p className="text-3xl font-bold text-slate-900">{stdResult.mean}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">Median</p>
              <p className="text-xl font-bold text-slate-900">{stdResult.median}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">Sum ({stdResult.count} items)</p>
              <p className="text-xl font-bold text-slate-900">{stdResult.sum}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">Minimum</p>
              <p className="text-base font-semibold text-slate-800">{stdResult.min}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">Maximum</p>
              <p className="text-base font-semibold text-slate-800">{stdResult.max}</p>
            </div>
          </div>
        ) : mode === "weighted" && weightedResult ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 tabular-nums">
            <div>
              <p className="text-xs font-semibold text-slate-600">Weighted Average</p>
              <p className="text-3xl font-bold text-slate-900">
                {weightedResult.weightedMean}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">Weighted Sum</p>
              <p className="text-xl font-bold text-slate-900">
                {weightedResult.weightedSum}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">Total Weight</p>
              <p className="text-xl font-bold text-slate-900">
                {weightedResult.totalWeight}
              </p>
            </div>
          </div>
        ) : null
      }
    >
      <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
        <button
          type="button"
          onClick={() => {
            setMode("standard");
            runStandard(numbers);
          }}
          className={`rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors ${
            mode === "standard"
              ? "bg-white text-slate-900 shadow-xs font-semibold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Arithmetic Mean
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("weighted");
            runWeighted(weightedRows);
          }}
          className={`rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors ${
            mode === "weighted"
              ? "bg-white text-slate-900 shadow-xs font-semibold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Weighted Average
        </button>
      </div>

      {mode === "standard" ? (
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {numbers.map((val, idx) => (
              <div key={idx} className="flex items-end gap-2">
                <div className="flex-1">
                  <label
                    htmlFor={`avg-num-${idx}`}
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Number {idx + 1}
                  </label>
                  <input
                    id={`avg-num-${idx}`}
                    type="number"
                    step="any"
                    value={val}
                    onChange={(e) => {
                      const next = [...numbers];
                      next[idx] = e.target.value;
                      setNumbers(next);
                      runStandard(next);
                    }}
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 tabular-nums focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
                  />
                </div>
                {numbers.length > 2 && (
                  <button
                    type="button"
                    aria-label={`Remove number ${idx + 1}`}
                    onClick={() => {
                      const next = numbers.filter((_, i) => i !== idx);
                      setNumbers(next);
                      runStandard(next);
                    }}
                    className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-red-50 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-sky-600"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setNumbers([...numbers, ""])}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-sky-600"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Add Number Field</span>
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {weightedRows.map((row, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-2 items-end">
              <div className="col-span-5">
                <label
                  htmlFor={`w-val-${idx}`}
                  className="block text-xs font-semibold text-slate-700"
                >
                  Value {idx + 1}
                </label>
                <input
                  id={`w-val-${idx}`}
                  type="number"
                  step="any"
                  value={row.value}
                  onChange={(e) => {
                    const next = weightedRows.map((r, i) =>
                      i === idx ? { ...r, value: e.target.value } : r
                    );
                    setWeightedRows(next);
                    runWeighted(next);
                  }}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 tabular-nums focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
                />
              </div>
              <div className="col-span-5">
                <label
                  htmlFor={`w-wt-${idx}`}
                  className="block text-xs font-semibold text-slate-700"
                >
                  Weight {idx + 1}
                </label>
                <input
                  id={`w-wt-${idx}`}
                  type="number"
                  step="any"
                  min="0"
                  value={row.weight}
                  onChange={(e) => {
                    const next = weightedRows.map((r, i) =>
                      i === idx ? { ...r, weight: e.target.value } : r
                    );
                    setWeightedRows(next);
                    runWeighted(next);
                  }}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 tabular-nums focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
                />
              </div>
              <div className="col-span-2 flex justify-end">
                {weightedRows.length > 2 && (
                  <button
                    type="button"
                    aria-label={`Remove weighted row ${idx + 1}`}
                    onClick={() => {
                      const next = weightedRows.filter((_, i) => i !== idx);
                      setWeightedRows(next);
                      runWeighted(next);
                    }}
                    className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-red-50 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-sky-600"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setWeightedRows([...weightedRows, { value: "", weight: "" }])
            }
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-sky-600"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Add Weighted Row</span>
          </button>
        </div>
      )}
    </CalculatorShell>
  );
}
