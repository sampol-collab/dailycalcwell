"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  ACTIVITY_MULTIPLIERS,
  ActivityLevel,
  calculateTdee,
  feetInchesToCm,
  FormulaSex,
  poundsToKg,
  TdeeResult,
  UnitSystem,
} from "@/lib/calculations/health";
import { parseNumberInput } from "@/lib/validation/inputs";

export function TdeeCalculator() {
  const [unit, setUnit] = useState<UnitSystem>("metric");
  const [sex, setSex] = useState<FormulaSex>("male");
  const [age, setAge] = useState("32");
  const [heightCm, setHeightCm] = useState("178");
  const [weightKg, setWeightKg] = useState("78");
  const [heightFt, setHeightFt] = useState("5");
  const [heightIn, setHeightIn] = useState("10");
  const [weightLb, setWeightLb] = useState("172");
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TdeeResult | null>(() =>
    calculateTdee("male", 78, 178, 32, "moderate")
  );

  const runCalculation = (
    nUnit = unit,
    nSex = sex,
    nAge = age,
    nCm = heightCm,
    nKg = weightKg,
    nFt = heightFt,
    nIn = heightIn,
    nLb = weightLb,
    nAct = activity
  ) => {
    trackEvent("calculator_used", { calculator: "tdee-calculator" });
    const pAge = parseNumberInput(nAge, "Age (years)", {
      min: 15,
      max: 110,
      integer: true,
    });
    if (!pAge.ok) {
      setError(pAge.error);
      setResult(null);
      return;
    }

    let h = 0;
    let w = 0;
    if (nUnit === "metric") {
      const pH = parseNumberInput(nCm, "Height (cm)", { min: 100, max: 250 });
      const pW = parseNumberInput(nKg, "Weight (kg)", { min: 25, max: 350 });
      if (!pH.ok || !pW.ok) {
        setError(!pH.ok ? pH.error : !pW.ok ? pW.error : "Invalid input.");
        setResult(null);
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
      const pIn = parseNumberInput(nIn === "" ? "0" : nIn, "Height (inches)", {
        min: 0,
        max: 11.99,
      });
      const pLb = parseNumberInput(nLb, "Weight (lb)", { min: 55, max: 770 });
      if (!pFt.ok || !pIn.ok || !pLb.ok) {
        setError(
          !pFt.ok ? pFt.error : !pIn.ok ? pIn.error : !pLb.ok ? pLb.error : "Invalid input."
        );
        setResult(null);
        return;
      }
      h = feetInchesToCm(pFt.value, pIn.value);
      w = poundsToKg(pLb.value);
    }

    try {
      const res = calculateTdee(nSex, w, h, pAge.value, nAct);
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", { calculator: "tdee-calculator" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    setSex("male");
    setAge("32");
    setHeightCm("178");
    setWeightKg("78");
    setHeightFt("5");
    setHeightIn("10");
    setWeightLb("172");
    setActivity("moderate");
    runCalculation(unit, "male", "32", "178", "78", "5", "10", "172", "moderate");
  };

  return (
    <CalculatorShell
      title="TDEE Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Estimated TDEE: ${result.tdee.toLocaleString()} kcal/day (${result.activityLabel}; BMR: ${result.bmr} kcal/day).`
          : undefined
      }
      resultSlot={
        result && (
          <div className="space-y-3 tabular-nums">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Estimated Maintenance Calories (TDEE)
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  {result.tdee.toLocaleString("en-US")} kcal / day
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Estimated Resting BMR
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {result.bmr.toLocaleString("en-US")} kcal / day
                </p>
                <p className="text-xs text-slate-600">
                  Activity multiplier: ×{result.multiplier} ({result.activityLabel})
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              All values are statistical estimates and individual metabolism varies.
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
                  runCalculation(u, sex, age, heightCm, weightKg, heightFt, heightIn, weightLb, activity);
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
                  runCalculation(unit, s, age, heightCm, weightKg, heightFt, heightIn, weightLb, activity);
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
          <label htmlFor="tdee-age" className="block text-sm font-semibold text-slate-800">
            Age (years)
          </label>
          <input
            id="tdee-age"
            type="number"
            min="15"
            max="110"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              runCalculation(unit, sex, e.target.value, heightCm, weightKg, heightFt, heightIn, weightLb, activity);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
          />
        </div>
        {unit === "metric" ? (
          <>
            <div>
              <label htmlFor="tdee-cm" className="block text-sm font-semibold text-slate-800">
                Height (cm)
              </label>
              <input
                id="tdee-cm"
                type="number"
                step="any"
                value={heightCm}
                onChange={(e) => {
                  setHeightCm(e.target.value);
                  runCalculation(unit, sex, age, e.target.value, weightKg, heightFt, heightIn, weightLb, activity);
                }}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
              />
            </div>
            <div>
              <label htmlFor="tdee-kg" className="block text-sm font-semibold text-slate-800">
                Weight (kg)
              </label>
              <input
                id="tdee-kg"
                type="number"
                step="any"
                value={weightKg}
                onChange={(e) => {
                  setWeightKg(e.target.value);
                  runCalculation(unit, sex, age, heightCm, e.target.value, heightFt, heightIn, weightLb, activity);
                }}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
              />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="tdee-ft" className="block text-sm font-semibold text-slate-800">
                  Feet
                </label>
                <input
                  id="tdee-ft"
                  type="number"
                  step="1"
                  value={heightFt}
                  onChange={(e) => {
                    setHeightFt(e.target.value);
                    runCalculation(unit, sex, age, heightCm, weightKg, e.target.value, heightIn, weightLb, activity);
                  }}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base tabular-nums"
                />
              </div>
              <div>
                <label htmlFor="tdee-in" className="block text-sm font-semibold text-slate-800">
                  Inches
                </label>
                <input
                  id="tdee-in"
                  type="number"
                  step="any"
                  value={heightIn}
                  onChange={(e) => {
                    setHeightIn(e.target.value);
                    runCalculation(unit, sex, age, heightCm, weightKg, heightFt, e.target.value, weightLb, activity);
                  }}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base tabular-nums"
                />
              </div>
            </div>
            <div>
              <label htmlFor="tdee-lb" className="block text-sm font-semibold text-slate-800">
                Weight (pounds)
              </label>
              <input
                id="tdee-lb"
                type="number"
                step="any"
                value={weightLb}
                onChange={(e) => {
                  setWeightLb(e.target.value);
                  runCalculation(unit, sex, age, heightCm, weightKg, heightFt, heightIn, e.target.value, activity);
                }}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
              />
            </div>
          </>
        )}
      </div>

      <div>
        <label htmlFor="tdee-activity" className="block text-sm font-semibold text-slate-800">
          Weekly Activity Level
        </label>
        <select
          id="tdee-activity"
          value={activity}
          onChange={(e) => {
            const nextAct = e.target.value as ActivityLevel;
            setActivity(nextAct);
            runCalculation(unit, sex, age, heightCm, weightKg, heightFt, heightIn, weightLb, nextAct);
          }}
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900"
        >
          {(Object.keys(ACTIVITY_MULTIPLIERS) as ActivityLevel[]).map((key) => {
            const info = ACTIVITY_MULTIPLIERS[key];
            return (
              <option key={key} value={key}>
                {info.label} (×{info.factor}) — {info.description}
              </option>
            );
          })}
        </select>
      </div>
    </CalculatorShell>
  );
}
