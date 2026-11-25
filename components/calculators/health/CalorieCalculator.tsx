"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  ACTIVITY_MULTIPLIERS,
  ActivityLevel,
  calculateDailyCalories,
  CalorieGoal,
  CaloriePlanResult,
  feetInchesToCm,
  FormulaSex,
  poundsToKg,
  UnitSystem,
} from "@/lib/calculations/health";
import { parseNumberInput } from "@/lib/validation/inputs";

const GOALS: { id: CalorieGoal; label: string }[] = [
  { id: "maintain", label: "Maintain Current Weight (0 kcal)" },
  { id: "mild_loss", label: "Mild Weight Loss (−250 kcal/day)" },
  { id: "loss", label: "Moderate Weight Loss (−500 kcal/day)" },
  { id: "mild_gain", label: "Mild Weight Gain (+250 kcal/day)" },
  { id: "gain", label: "Moderate Weight Gain (+500 kcal/day)" },
];

export function CalorieCalculator() {
  const [unit, setUnit] = useState<UnitSystem>("metric");
  const [sex, setSex] = useState<FormulaSex>("female");
  const [age, setAge] = useState("29");
  const [heightCm, setHeightCm] = useState("164");
  const [weightKg, setWeightKg] = useState("65");
  const [heightFt, setHeightFt] = useState("5");
  const [heightIn, setHeightIn] = useState("4");
  const [weightLb, setWeightLb] = useState("143");
  const [activity, setActivity] = useState<ActivityLevel>("light");
  const [goal, setGoal] = useState<CalorieGoal>("maintain");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CaloriePlanResult | null>(() =>
    calculateDailyCalories("female", 65, 164, 29, "light", "maintain")
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
    nAct = activity,
    nGoal = goal
  ) => {
    trackEvent("calculator_used", { calculator: "calorie-calculator" });
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
      const res = calculateDailyCalories(nSex, w, h, pAge.value, nAct, nGoal);
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", { calculator: "calorie-calculator" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    setSex("female");
    setAge("29");
    setHeightCm("164");
    setWeightKg("65");
    setHeightFt("5");
    setHeightIn("4");
    setWeightLb("143");
    setActivity("light");
    setGoal("maintain");
    runCalculation(unit, "female", "29", "164", "65", "5", "4", "143", "light", "maintain");
  };

  return (
    <CalculatorShell
      title="Calorie Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Estimated Daily Calories: ${result.targetCalories.toLocaleString()} kcal/day (Maintenance TDEE: ${result.maintenanceCalories.toLocaleString()} kcal/day).`
          : undefined
      }
      resultSlot={
        result && (
          <div className="space-y-3 tabular-nums">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Estimated Daily Goal Target
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  {result.targetCalories.toLocaleString("en-US")} kcal / day
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Estimated Maintenance (TDEE)
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {result.maintenanceCalories.toLocaleString("en-US")} kcal / day
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {result.minimumSafeNote}
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
                  runCalculation(u, sex, age, heightCm, weightKg, heightFt, heightIn, weightLb, activity, goal);
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
                  runCalculation(unit, s, age, heightCm, weightKg, heightFt, heightIn, weightLb, activity, goal);
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
          <label htmlFor="cal-age" className="block text-sm font-semibold text-slate-800">
            Age (years)
          </label>
          <input
            id="cal-age"
            type="number"
            min="15"
            max="110"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              runCalculation(unit, sex, e.target.value, heightCm, weightKg, heightFt, heightIn, weightLb, activity, goal);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
          />
        </div>
        {unit === "metric" ? (
          <>
            <div>
              <label htmlFor="cal-cm" className="block text-sm font-semibold text-slate-800">
                Height (cm)
              </label>
              <input
                id="cal-cm"
                type="number"
                step="any"
                value={heightCm}
                onChange={(e) => {
                  setHeightCm(e.target.value);
                  runCalculation(unit, sex, age, e.target.value, weightKg, heightFt, heightIn, weightLb, activity, goal);
                }}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
              />
            </div>
            <div>
              <label htmlFor="cal-kg" className="block text-sm font-semibold text-slate-800">
                Weight (kg)
              </label>
              <input
                id="cal-kg"
                type="number"
                step="any"
                value={weightKg}
                onChange={(e) => {
                  setWeightKg(e.target.value);
                  runCalculation(unit, sex, age, heightCm, e.target.value, heightFt, heightIn, weightLb, activity, goal);
                }}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
              />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="cal-ft" className="block text-sm font-semibold text-slate-800">
                  Feet
                </label>
                <input
                  id="cal-ft"
                  type="number"
                  step="1"
                  value={heightFt}
                  onChange={(e) => {
                    setHeightFt(e.target.value);
                    runCalculation(unit, sex, age, heightCm, weightKg, e.target.value, heightIn, weightLb, activity, goal);
                  }}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base tabular-nums"
                />
              </div>
              <div>
                <label htmlFor="cal-in" className="block text-sm font-semibold text-slate-800">
                  Inches
                </label>
                <input
                  id="cal-in"
                  type="number"
                  step="any"
                  value={heightIn}
                  onChange={(e) => {
                    setHeightIn(e.target.value);
                    runCalculation(unit, sex, age, heightCm, weightKg, heightFt, e.target.value, weightLb, activity, goal);
                  }}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base tabular-nums"
                />
              </div>
            </div>
            <div>
              <label htmlFor="cal-lb" className="block text-sm font-semibold text-slate-800">
                Weight (pounds)
              </label>
              <input
                id="cal-lb"
                type="number"
                step="any"
                value={weightLb}
                onChange={(e) => {
                  setWeightLb(e.target.value);
                  runCalculation(unit, sex, age, heightCm, weightKg, heightFt, heightIn, e.target.value, activity, goal);
                }}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
              />
            </div>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cal-act" className="block text-sm font-semibold text-slate-800">
            Activity Level
          </label>
          <select
            id="cal-act"
            value={activity}
            onChange={(e) => {
              const nextAct = e.target.value as ActivityLevel;
              setActivity(nextAct);
              runCalculation(unit, sex, age, heightCm, weightKg, heightFt, heightIn, weightLb, nextAct, goal);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
          >
            {(Object.keys(ACTIVITY_MULTIPLIERS) as ActivityLevel[]).map((k) => (
              <option key={k} value={k}>
                {ACTIVITY_MULTIPLIERS[k].label} (×{ACTIVITY_MULTIPLIERS[k].factor})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cal-goal" className="block text-sm font-semibold text-slate-800">
            Goal
          </label>
          <select
            id="cal-goal"
            value={goal}
            onChange={(e) => {
              const nextGoal = e.target.value as CalorieGoal;
              setGoal(nextGoal);
              runCalculation(unit, sex, age, heightCm, weightKg, heightFt, heightIn, weightLb, activity, nextGoal);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
          >
            {GOALS.map((g) => (
              <option key={g.id} value={g.id}>
                {g.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </CalculatorShell>
  );
}
