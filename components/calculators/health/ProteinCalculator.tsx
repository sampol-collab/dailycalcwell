"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculateProteinIntake,
  poundsToKg,
  ProteinGoal,
  ProteinResult,
  UnitSystem,
} from "@/lib/calculations/health";
import { parseNumberInput } from "@/lib/validation/inputs";

const GOALS: { id: ProteinGoal; label: string }[] = [
  { id: "general", label: "General Adult Baseline (0.8–1.0 g/kg)" },
  { id: "active", label: "Active Fitness (1.2–1.5 g/kg)" },
  { id: "endurance", label: "Endurance Training (1.2–1.6 g/kg)" },
  { id: "strength", label: "Strength & Resistance Training (1.6–2.0 g/kg)" },
];

export function ProteinCalculator() {
  const [unit, setUnit] = useState<UnitSystem>("metric");
  const [weight, setWeight] = useState("70");
  const [goal, setGoal] = useState<ProteinGoal>("active");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ProteinResult | null>(() =>
    calculateProteinIntake(70, "active")
  );

  const runCalculation = (nUnit = unit, nWt = weight, nGoal = goal) => {
    trackEvent("calculator_used", { calculator: "protein-calculator" });
    const parsed = parseNumberInput(
      nWt,
      `Weight (${nUnit === "metric" ? "kg" : "lb"})`,
      { min: nUnit === "metric" ? 20 : 44, max: nUnit === "metric" ? 350 : 770 }
    );
    if (!parsed.ok) {
      setError(parsed.error);
      setResult(null);
      return;
    }
    const kg = nUnit === "metric" ? parsed.value : poundsToKg(parsed.value);
    try {
      const res = calculateProteinIntake(kg, nGoal);
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", { calculator: "protein-calculator" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    setWeight(unit === "metric" ? "70" : "154");
    setGoal("active");
    runCalculation(unit, unit === "metric" ? "70" : "154", "active");
  };

  return (
    <CalculatorShell
      title="Protein Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `Estimated Daily Protein Range: ${result.minGramsPerDay}–${result.maxGramsPerDay} g/day (${result.gramsPerKgRange}).`
          : undefined
      }
      resultSlot={
        result && (
          <div className="space-y-2 tabular-nums">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Estimated Daily Protein Range
            </p>
            <p className="text-3xl font-bold text-slate-900">
              {result.minGramsPerDay}–{result.maxGramsPerDay} g / day
            </p>
            <p className="text-sm text-slate-700">
              Midpoint: {result.midpointGramsPerDay} g/day · Range factor:{" "}
              {result.gramsPerKgRange}
            </p>
            <p className="text-xs text-slate-600">
              General reference estimate only; individual requirements vary by age, health status, and clinical guidance.
            </p>
          </div>
        )
      }
    >
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
                const def = u === "metric" ? "70" : "154";
                setWeight(def);
                runCalculation(u, def, goal);
              }}
              className={`rounded-md px-3.5 py-1.5 text-sm font-medium ${
                unit === u
                  ? "bg-white text-slate-900 shadow-xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {u === "metric" ? "Metric (kg)" : "Imperial (lb)"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="prot-wt" className="block text-sm font-semibold text-slate-800">
            Body Weight ({unit === "metric" ? "kg" : "lb"})
          </label>
          <input
            id="prot-wt"
            type="number"
            step="any"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              runCalculation(unit, e.target.value, goal);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="prot-goal" className="block text-sm font-semibold text-slate-800">
            Activity or Fitness Goal
          </label>
          <select
            id="prot-goal"
            value={goal}
            onChange={(e) => {
              const g = e.target.value as ProteinGoal;
              setGoal(g);
              runCalculation(unit, weight, g);
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
