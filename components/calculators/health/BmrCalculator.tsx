"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculateBmrMifflinStJeor,
  feetInchesToCm,
  FormulaSex,
  poundsToKg,
  UnitSystem,
} from "@/lib/calculations/health";
import { parseNumberInput } from "@/lib/validation/inputs";

export function BmrCalculator() {
  const [unit, setUnit] = useState<UnitSystem>("metric");
  const [sex, setSex] = useState<FormulaSex>("female");
  const [age, setAge] = useState("30");
  const [heightCm, setHeightCm] = useState("165");
  const [weightKg, setWeightKg] = useState("62");
  const [heightFt, setHeightFt] = useState("5");
  const [heightIn, setHeightIn] = useState("5");
  const [weightLb, setWeightLb] = useState("137");
  const [error, setError] = useState<string | null>(null);
  const [bmr, setBmr] = useState<number | null>(() =>
    calculateBmrMifflinStJeor("female", 62, 165, 30)
  );

  const runCalculation = (
    nUnit = unit,
    nSex = sex,
    nAge = age,
    nCm = heightCm,
    nKg = weightKg,
    nFt = heightFt,
    nIn = heightIn,
    nLb = weightLb
  ) => {
    trackEvent("calculator_used", { calculator: "bmr-calculator" });
    const pAge = parseNumberInput(nAge, "Age (years)", {
      min: 15,
      max: 110,
      integer: true,
    });
    if (!pAge.ok) {
      setError(pAge.error);
      setBmr(null);
      return;
    }

    let h = 0;
    let w = 0;
    if (nUnit === "metric") {
      const pH = parseNumberInput(nCm, "Height (cm)", { min: 100, max: 250 });
      if (!pH.ok) {
        setError(pH.error);
        setBmr(null);
        return;
      }
      const pW = parseNumberInput(nKg, "Weight (kg)", { min: 25, max: 350 });
      if (!pW.ok) {
        setError(pW.error);
        setBmr(null);
        return;
      }
      h = pH.value;
      w = pW.value;
    } else {
      const pFt = parseNumberInput(nFt, "Height (feet)", {
        min: 3,
        max: 8,
        integer: true,
      });
      if (!pFt.ok) {
        setError(pFt.error);
        setBmr(null);
        return;
      }
      const pIn = parseNumberInput(nIn === "" ? "0" : nIn, "Height (inches)", {
        min: 0,
        max: 11.99,
      });
      if (!pIn.ok) {
        setError(pIn.error);
        setBmr(null);
        return;
      }
      const pLb = parseNumberInput(nLb, "Weight (lb)", { min: 55, max: 770 });
      if (!pLb.ok) {
        setError(pLb.error);
        setBmr(null);
        return;
      }
      h = feetInchesToCm(pFt.value, pIn.value);
      w = poundsToKg(pLb.value);
    }

    try {
      const val = calculateBmrMifflinStJeor(nSex, w, h, pAge.value);
      setError(null);
      setBmr(val);
      trackEvent("calculation_completed", { calculator: "bmr-calculator" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid inputs.");
      setBmr(null);
    }
  };

  const handleReset = () => {
    setSex("female");
    setAge("30");
    setHeightCm("165");
    setWeightKg("62");
    setHeightFt("5");
    setHeightIn("5");
    setWeightLb("137");
    runCalculation(unit, "female", "30", "165", "62", "5", "5", "137");
  };

  return (
    <CalculatorShell
      title="BMR Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        bmr !== null
          ? `Estimated BMR (Mifflin-St Jeor): ${bmr.toLocaleString()} kcal/day (resting estimate only).`
          : undefined
      }
      resultSlot={
        bmr !== null && (
          <div className="tabular-nums">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Estimated Basal Metabolic Rate (Mifflin-St Jeor)
            </p>
            <p className="mt-1 text-3xl font-bold text-slate-900">
              {bmr.toLocaleString("en-US")} kcal / day
            </p>
            <p className="mt-1.5 text-xs text-slate-600">
              Estimated resting energy expenditure only. Daily life and exercise burn additional calories beyond BMR.
            </p>
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
                  runCalculation(u, sex, age, heightCm, weightKg, heightFt, heightIn, weightLb);
                }}
                className={`rounded-md px-3.5 py-1.5 text-sm font-medium ${
                  unit === u
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {u === "metric" ? "Metric (cm / kg)" : "Imperial (ft, in / lb)"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="block text-sm font-semibold text-slate-800 mb-1.5">
            Formula Sex Constant
          </span>
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
            {(["female", "male"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSex(s);
                  runCalculation(unit, s, age, heightCm, weightKg, heightFt, heightIn, weightLb);
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label
            htmlFor="bmr-age"
            className="block text-sm font-semibold text-slate-800"
          >
            Age (15–110 years)
          </label>
          <input
            id="bmr-age"
            type="number"
            min="15"
            max="110"
            step="1"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              runCalculation(unit, sex, e.target.value, heightCm, weightKg, heightFt, heightIn, weightLb);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
          />
        </div>

        {unit === "metric" ? (
          <>
            <div>
              <label
                htmlFor="bmr-cm"
                className="block text-sm font-semibold text-slate-800"
              >
                Height (cm)
              </label>
              <input
                id="bmr-cm"
                type="number"
                step="any"
                value={heightCm}
                onChange={(e) => {
                  setHeightCm(e.target.value);
                  runCalculation(unit, sex, age, e.target.value, weightKg, heightFt, heightIn, weightLb);
                }}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
              />
            </div>
            <div>
              <label
                htmlFor="bmr-kg"
                className="block text-sm font-semibold text-slate-800"
              >
                Weight (kg)
              </label>
              <input
                id="bmr-kg"
                type="number"
                step="any"
                value={weightKg}
                onChange={(e) => {
                  setWeightKg(e.target.value);
                  runCalculation(unit, sex, age, heightCm, e.target.value, heightFt, heightIn, weightLb);
                }}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
              />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label
                  htmlFor="bmr-ft"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Feet
                </label>
                <input
                  id="bmr-ft"
                  type="number"
                  step="1"
                  value={heightFt}
                  onChange={(e) => {
                    setHeightFt(e.target.value);
                    runCalculation(unit, sex, age, heightCm, weightKg, e.target.value, heightIn, weightLb);
                  }}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base tabular-nums"
                />
              </div>
              <div>
                <label
                  htmlFor="bmr-in"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Inches
                </label>
                <input
                  id="bmr-in"
                  type="number"
                  step="any"
                  value={heightIn}
                  onChange={(e) => {
                    setHeightIn(e.target.value);
                    runCalculation(unit, sex, age, heightCm, weightKg, heightFt, e.target.value, weightLb);
                  }}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base tabular-nums"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="bmr-lb"
                className="block text-sm font-semibold text-slate-800"
              >
                Weight (pounds)
              </label>
              <input
                id="bmr-lb"
                type="number"
                step="any"
                value={weightLb}
                onChange={(e) => {
                  setWeightLb(e.target.value);
                  runCalculation(unit, sex, age, heightCm, weightKg, heightFt, heightIn, e.target.value);
                }}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
              />
            </div>
          </>
        )}
      </div>
    </CalculatorShell>
  );
}
