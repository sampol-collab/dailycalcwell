"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  BmiResult,
  calculateBmi,
  feetInchesToCm,
  poundsToKg,
  UnitSystem,
} from "@/lib/calculations/health";
import { parseNumberInput } from "@/lib/validation/inputs";

export function BmiCalculator() {
  const [unit, setUnit] = useState<UnitSystem>("metric");
  const [heightCm, setHeightCm] = useState("172");
  const [weightKg, setWeightKg] = useState("70");
  const [heightFt, setHeightFt] = useState("5");
  const [heightIn, setHeightIn] = useState("8");
  const [weightLb, setWeightLb] = useState("154");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<BmiResult | null>(() =>
    calculateBmi(70, 172)
  );

  const runCalculation = (
    nextUnit = unit,
    cmStr = heightCm,
    kgStr = weightKg,
    ftStr = heightFt,
    inStr = heightIn,
    lbStr = weightLb
  ) => {
    trackEvent("calculator_used", { calculator: "bmi-calculator" });
    let hCm = 0;
    let wKg = 0;

    if (nextUnit === "metric") {
      const h = parseNumberInput(cmStr, "Height (cm)", { min: 50, max: 275 });
      if (!h.ok) {
        setError(h.error);
        setResult(null);
        return;
      }
      const w = parseNumberInput(kgStr, "Weight (kg)", { min: 15, max: 400 });
      if (!w.ok) {
        setError(w.error);
        setResult(null);
        return;
      }
      hCm = h.value;
      wKg = w.value;
    } else {
      const ft = parseNumberInput(ftStr, "Height (feet)", {
        min: 1,
        max: 8,
        integer: true,
      });
      if (!ft.ok) {
        setError(ft.error);
        setResult(null);
        return;
      }
      const inc = parseNumberInput(inStr === "" ? "0" : inStr, "Height (inches)", {
        min: 0,
        max: 11.99,
      });
      if (!inc.ok) {
        setError(inc.error);
        setResult(null);
        return;
      }
      const lb = parseNumberInput(lbStr, "Weight (lb)", { min: 30, max: 900 });
      if (!lb.ok) {
        setError(lb.error);
        setResult(null);
        return;
      }
      hCm = feetInchesToCm(ft.value, inc.value);
      wKg = poundsToKg(lb.value);
    }

    try {
      const res = calculateBmi(wKg, hCm);
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", { calculator: "bmi-calculator" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    setHeightCm("172");
    setWeightKg("70");
    setHeightFt("5");
    setHeightIn("8");
    setWeightLb("154");
    runCalculation(unit, "172", "70", "5", "8", "154");
  };

  return (
    <CalculatorShell
      title="BMI Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Estimated Adult BMI: ${result.bmi} (${result.category}). Screening indicator only, not a medical diagnosis.`
          : undefined
      }
      resultSlot={
        result && (
          <div className="space-y-4 tabular-nums">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Adult Body Mass Index
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  {result.bmi} kg/m²
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Standard Adult Category
                </p>
                <p className="text-xl font-bold text-slate-900">
                  {result.category}
                </p>
              </div>
            </div>

            <div className="border-t border-sky-200 pt-3 text-sm text-slate-700 space-y-1.5">
              <p>
                <span className="font-semibold text-slate-900">
                  Reference Healthy BMI Weight Range (18.5–24.9):
                </span>{" "}
                {result.healthyWeightRangeKg.min}–{result.healthyWeightRangeKg.max} kg (
                {result.healthyWeightRangeLb.min}–{result.healthyWeightRangeLb.max} lb)
              </p>
              <p className="text-xs text-slate-600">
                BMI is a general screening measure for adults aged 20+, not a medical diagnosis. Children and teens require pediatric age- and sex-specific BMI percentiles.
              </p>
            </div>
          </div>
        )
      }
    >
      <div>
        <span className="block text-sm font-semibold text-slate-800 mb-1.5">
          Measurement System
        </span>
        <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
          <button
            type="button"
            onClick={() => {
              setUnit("metric");
              runCalculation("metric", heightCm, weightKg, heightFt, heightIn, weightLb);
            }}
            className={`rounded-md px-3.5 py-1.5 text-sm font-medium ${
              unit === "metric"
                ? "bg-white text-slate-900 shadow-xs font-semibold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Metric (cm / kg)
          </button>
          <button
            type="button"
            onClick={() => {
              setUnit("imperial");
              runCalculation("imperial", heightCm, weightKg, heightFt, heightIn, weightLb);
            }}
            className={`rounded-md px-3.5 py-1.5 text-sm font-medium ${
              unit === "imperial"
                ? "bg-white text-slate-900 shadow-xs font-semibold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Imperial (ft, in / lb)
          </button>
        </div>
      </div>

      {unit === "metric" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="bmi-cm"
              className="block text-sm font-semibold text-slate-800"
            >
              Height (cm)
            </label>
            <input
              id="bmi-cm"
              type="number"
              min="50"
              max="275"
              step="any"
              value={heightCm}
              onChange={(e) => {
                setHeightCm(e.target.value);
                runCalculation("metric", e.target.value, weightKg, heightFt, heightIn, weightLb);
              }}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
            />
          </div>
          <div>
            <label
              htmlFor="bmi-kg"
              className="block text-sm font-semibold text-slate-800"
            >
              Weight (kg)
            </label>
            <input
              id="bmi-kg"
              type="number"
              min="15"
              max="400"
              step="any"
              value={weightKg}
              onChange={(e) => {
                setWeightKg(e.target.value);
                runCalculation("metric", heightCm, e.target.value, heightFt, heightIn, weightLb);
              }}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label
              htmlFor="bmi-ft"
              className="block text-sm font-semibold text-slate-800"
            >
              Height (feet)
            </label>
            <input
              id="bmi-ft"
              type="number"
              min="1"
              max="8"
              step="1"
              value={heightFt}
              onChange={(e) => {
                setHeightFt(e.target.value);
                runCalculation("imperial", heightCm, weightKg, e.target.value, heightIn, weightLb);
              }}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
            />
          </div>
          <div>
            <label
              htmlFor="bmi-in"
              className="block text-sm font-semibold text-slate-800"
            >
              Height (inches)
            </label>
            <input
              id="bmi-in"
              type="number"
              min="0"
              max="11.9"
              step="any"
              value={heightIn}
              onChange={(e) => {
                setHeightIn(e.target.value);
                runCalculation("imperial", heightCm, weightKg, heightFt, e.target.value, weightLb);
              }}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
            />
          </div>
          <div>
            <label
              htmlFor="bmi-lb"
              className="block text-sm font-semibold text-slate-800"
            >
              Weight (pounds)
            </label>
            <input
              id="bmi-lb"
              type="number"
              min="30"
              max="900"
              step="any"
              value={weightLb}
              onChange={(e) => {
                setWeightLb(e.target.value);
                runCalculation("imperial", heightCm, weightKg, heightFt, heightIn, e.target.value);
              }}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
            />
          </div>
        </div>
      )}
    </CalculatorShell>
  );
}
