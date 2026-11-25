"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculateIdealWeight,
  feetInchesToCm,
  FormulaSex,
  IdealWeightResult,
  kgToPounds,
  UnitSystem,
} from "@/lib/calculations/health";
import { parseNumberInput } from "@/lib/validation/inputs";

export function IdealWeightCalculator() {
  const [unit, setUnit] = useState<UnitSystem>("metric");
  const [sex, setSex] = useState<FormulaSex>("male");
  const [heightCm, setHeightCm] = useState("178");
  const [heightFt, setHeightFt] = useState("5");
  const [heightIn, setHeightIn] = useState("10");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<IdealWeightResult | null>(() =>
    calculateIdealWeight("male", 178)
  );

  const runCalculation = (
    nUnit = unit,
    nSex = sex,
    nCm = heightCm,
    nFt = heightFt,
    nIn = heightIn
  ) => {
    trackEvent("calculator_used", { calculator: "ideal-weight-calculator" });
    let h = 0;
    if (nUnit === "metric") {
      const pH = parseNumberInput(nCm, "Height (cm)", { min: 120, max: 240 });
      if (!pH.ok) {
        setError(pH.error);
        setResult(null);
        return;
      }
      h = pH.value;
    } else {
      const pFt = parseNumberInput(nFt, "Height (feet)", {
        min: 4,
        max: 7,
        integer: true,
      });
      const pIn = parseNumberInput(nIn === "" ? "0" : nIn, "Height (inches)", {
        min: 0,
        max: 11.99,
      });
      if (!pFt.ok || !pIn.ok) {
        setError(!pFt.ok ? pFt.error : !pIn.ok ? pIn.error : "Invalid height.");
        setResult(null);
        return;
      }
      h = feetInchesToCm(pFt.value, pIn.value);
    }

    try {
      const res = calculateIdealWeight(nSex, h);
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", {
        calculator: "ideal-weight-calculator",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    setSex("male");
    setHeightCm("178");
    setHeightFt("5");
    setHeightIn("10");
    runCalculation(unit, "male", "178", "5", "10");
  };

  return (
    <CalculatorShell
      title="Ideal Weight Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Reference Ideal Weight Estimates — Devine: ${result.devineKg} kg, Robinson: ${result.robinsonKg} kg, Healthy BMI Range: ${result.healthyBmiMinKg}–${result.healthyBmiMaxKg} kg.`
          : undefined
      }
      resultSlot={
        result && (
          <div className="space-y-4 tabular-nums">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { name: "Devine (1974)", kg: result.devineKg },
                { name: "Robinson (1983)", kg: result.robinsonKg },
                { name: "Miller (1983)", kg: result.millerKg },
                { name: "Hamwi (1964)", kg: result.hamwiKg },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg border border-sky-200 bg-white p-3"
                >
                  <p className="text-xs font-medium text-slate-600">{item.name}</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    {item.kg} kg
                  </p>
                  <p className="text-xs text-slate-600">
                    {kgToPounds(item.kg)} lb
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-sky-200 pt-3 text-sm text-slate-700 space-y-1">
              <p>
                <span className="font-semibold text-slate-900">
                  Healthy Adult BMI Span (18.5–24.9):
                </span>{" "}
                {result.healthyBmiMinKg}–{result.healthyBmiMaxKg} kg (
                {kgToPounds(result.healthyBmiMinKg)}–
                {kgToPounds(result.healthyBmiMaxKg)} lb)
              </p>
              <p className="text-xs text-slate-600">
                There is no single ideal weight for everyone; healthy weight varies with frame size, muscle mass, and age.
              </p>
            </div>
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
                onClick={() => {
                  setUnit(u);
                  runCalculation(u, sex, heightCm, heightFt, heightIn);
                }}
                className={`rounded-md px-3.5 py-1.5 text-sm font-medium ${
                  unit === u
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {u === "metric" ? "Metric (cm)" : "Imperial (ft / in)"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="block text-sm font-semibold text-slate-800 mb-1.5">
            Formula Sex Constant
          </span>
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
            {(["male", "female"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSex(s);
                  runCalculation(unit, s, heightCm, heightFt, heightIn);
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

      {unit === "metric" ? (
        <div className="max-w-xs">
          <label htmlFor="iw-cm" className="block text-sm font-semibold text-slate-800">
            Height (cm)
          </label>
          <input
            id="iw-cm"
            type="number"
            min="120"
            max="240"
            step="any"
            value={heightCm}
            onChange={(e) => {
              setHeightCm(e.target.value);
              runCalculation(unit, sex, e.target.value, heightFt, heightIn);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 max-w-sm">
          <div>
            <label htmlFor="iw-ft" className="block text-sm font-semibold text-slate-800">
              Height (feet)
            </label>
            <input
              id="iw-ft"
              type="number"
              min="4"
              max="7"
              step="1"
              value={heightFt}
              onChange={(e) => {
                setHeightFt(e.target.value);
                runCalculation(unit, sex, heightCm, e.target.value, heightIn);
              }}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
            />
          </div>
          <div>
            <label htmlFor="iw-in" className="block text-sm font-semibold text-slate-800">
              Height (inches)
            </label>
            <input
              id="iw-in"
              type="number"
              min="0"
              max="11.9"
              step="any"
              value={heightIn}
              onChange={(e) => {
                setHeightIn(e.target.value);
                runCalculation(unit, sex, heightCm, heightFt, e.target.value);
              }}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
            />
          </div>
        </div>
      )}
    </CalculatorShell>
  );
}
