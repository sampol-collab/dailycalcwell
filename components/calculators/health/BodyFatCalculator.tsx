"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  BodyFatResult,
  calculateBodyFatNavy,
  FormulaSex,
  kgToPounds,
  poundsToKg,
  UnitSystem,
} from "@/lib/calculations/health";
import { parseNumberInput } from "@/lib/validation/inputs";

export function BodyFatCalculator() {
  const [unit, setUnit] = useState<UnitSystem>("metric");
  const [sex, setSex] = useState<FormulaSex>("male");
  const [height, setHeight] = useState("178");
  const [neck, setNeck] = useState("38");
  const [waist, setWaist] = useState("86");
  const [hip, setHip] = useState("96");
  const [weight, setWeight] = useState("76");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<BodyFatResult | null>(() =>
    calculateBodyFatNavy("male", 178, 38, 86, undefined, 76)
  );

  const toCm = (val: number, currentUnit: UnitSystem) =>
    currentUnit === "metric" ? val : val * 2.54;

  const runCalculation = (
    nUnit = unit,
    nSex = sex,
    nH = height,
    nN = neck,
    nW = waist,
    nHip = hip,
    nWt = weight
  ) => {
    trackEvent("calculator_used", { calculator: "body-fat-calculator" });
    const unitLabel = nUnit === "metric" ? "cm" : "in";
    const pH = parseNumberInput(nH, `Height (${unitLabel})`, {
      allowNegative: false,
      allowZero: false,
    });
    const pN = parseNumberInput(nN, `Neck (${unitLabel})`, {
      allowNegative: false,
      allowZero: false,
    });
    const pW = parseNumberInput(nW, `Waist (${unitLabel})`, {
      allowNegative: false,
      allowZero: false,
    });
    for (const check of [pH, pN, pW]) {
      if (!check.ok) {
        setError(check.error);
        setResult(null);
        return;
      }
    }
    if (!pH.ok || !pN.ok || !pW.ok) return;

    let hipCm: number | undefined;
    if (nSex === "female") {
      const pHip = parseNumberInput(nHip, `Hip (${unitLabel})`, {
        allowNegative: false,
        allowZero: false,
      });
      if (!pHip.ok) {
        setError(pHip.error);
        setResult(null);
        return;
      }
      hipCm = toCm(pHip.value, nUnit);
    }

    let weightKg: number | undefined;
    if (nWt.trim() !== "") {
      const pWt = parseNumberInput(
        nWt,
        `Weight (${nUnit === "metric" ? "kg" : "lb"})`,
        { allowNegative: false, allowZero: false }
      );
      if (!pWt.ok) {
        setError(pWt.error);
        setResult(null);
        return;
      }
      weightKg = nUnit === "metric" ? pWt.value : poundsToKg(pWt.value);
    }

    try {
      const res = calculateBodyFatNavy(
        nSex,
        toCm(pH.value, nUnit),
        toCm(pN.value, nUnit),
        toCm(pW.value, nUnit),
        hipCm,
        weightKg
      );
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", { calculator: "body-fat-calculator" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid measurements.");
      setResult(null);
    }
  };

  const switchUnit = (nextUnit: UnitSystem) => {
    setUnit(nextUnit);
    if (nextUnit === "imperial") {
      setHeight("70");
      setNeck("15");
      setWaist("34");
      setHip("38");
      setWeight("168");
      runCalculation("imperial", sex, "70", "15", "34", "38", "168");
    } else {
      setHeight("178");
      setNeck("38");
      setWaist("86");
      setHip("96");
      setWeight("76");
      runCalculation("metric", sex, "178", "38", "86", "96", "76");
    }
  };

  const handleReset = () => {
    switchUnit(unit);
  };

  return (
    <CalculatorShell
      title="Body Fat Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Estimated Body Fat (U.S. Navy Method): ${result.bodyFatPercent}%.`
          : undefined
      }
      resultSlot={
        result && (
          <div className="space-y-3 tabular-nums">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Estimated Body Fat (U.S. Navy Formula)
              </p>
              <p className="text-3xl font-bold text-slate-900">
                {result.bodyFatPercent}%
              </p>
            </div>
            {result.fatMassKg > 0 && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 border-t border-sky-200 pt-3 text-sm">
                <div>
                  <span className="text-slate-600">Estimated Fat Mass: </span>
                  <span className="font-bold text-slate-900">
                    {result.fatMassKg} kg ({kgToPounds(result.fatMassKg)} lb)
                  </span>
                </div>
                <div>
                  <span className="text-slate-600">Estimated Lean Mass: </span>
                  <span className="font-bold text-slate-900">
                    {result.leanMassKg} kg ({kgToPounds(result.leanMassKg)} lb)
                  </span>
                </div>
              </div>
            )}
            <p className="text-xs text-slate-600">{result.referenceRangeNote}</p>
          </div>
        )
      }
    >
      <div className="flex flex-wrap gap-6">
        <div>
          <span className="block text-sm font-semibold text-slate-800 mb-1.5">
            Units
          </span>
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
            {(["metric", "imperial"] as const).map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => switchUnit(u)}
                className={`rounded-md px-3.5 py-1.5 text-sm font-medium ${
                  unit === u
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {u === "metric" ? "Metric (cm / kg)" : "Imperial (in / lb)"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="block text-sm font-semibold text-slate-800 mb-1.5">
            Formula Sex
          </span>
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
            {(["male", "female"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSex(s);
                  runCalculation(unit, s, height, neck, waist, hip, weight);
                }}
                className={`rounded-md px-3.5 py-1.5 text-sm font-medium capitalize ${
                  sex === s
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="bf-h" className="block text-xs font-semibold text-slate-700">
            Height ({unit === "metric" ? "cm" : "in"})
          </label>
          <input
            id="bf-h"
            type="number"
            step="any"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
              runCalculation(unit, sex, e.target.value, neck, waist, hip, weight);
            }}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="bf-n" className="block text-xs font-semibold text-slate-700">
            Neck ({unit === "metric" ? "cm" : "in"})
          </label>
          <input
            id="bf-n"
            type="number"
            step="any"
            value={neck}
            onChange={(e) => {
              setNeck(e.target.value);
              runCalculation(unit, sex, height, e.target.value, waist, hip, weight);
            }}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="bf-w" className="block text-xs font-semibold text-slate-700">
            Waist ({unit === "metric" ? "cm" : "in"})
          </label>
          <input
            id="bf-w"
            type="number"
            step="any"
            value={waist}
            onChange={(e) => {
              setWaist(e.target.value);
              runCalculation(unit, sex, height, neck, e.target.value, hip, weight);
            }}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base tabular-nums"
          />
        </div>

        {sex === "female" && (
          <div>
            <label htmlFor="bf-hip" className="block text-xs font-semibold text-slate-700">
              Hip ({unit === "metric" ? "cm" : "in"})
            </label>
            <input
              id="bf-hip"
              type="number"
              step="any"
              value={hip}
              onChange={(e) => {
                setHip(e.target.value);
                runCalculation(unit, sex, height, neck, waist, e.target.value, weight);
              }}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base tabular-nums"
            />
          </div>
        )}

        <div>
          <label htmlFor="bf-wt" className="block text-xs font-semibold text-slate-700">
            Weight Optional ({unit === "metric" ? "kg" : "lb"})
          </label>
          <input
            id="bf-wt"
            type="number"
            step="any"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              runCalculation(unit, sex, height, neck, waist, hip, e.target.value);
            }}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base tabular-nums"
          />
        </div>
      </div>
    </CalculatorShell>
  );
}
