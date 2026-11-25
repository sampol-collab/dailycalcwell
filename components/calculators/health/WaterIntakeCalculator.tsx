"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  calculateWaterIntake,
  ClimateType,
  poundsToKg,
  UnitSystem,
  WaterIntakeResult,
} from "@/lib/calculations/health";
import { parseNumberInput } from "@/lib/validation/inputs";

export function WaterIntakeCalculator() {
  const [unit, setUnit] = useState<UnitSystem>("metric");
  const [weight, setWeight] = useState("68");
  const [exerciseMins, setExerciseMins] = useState("30");
  const [climate, setClimate] = useState<ClimateType>("temperate");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<WaterIntakeResult | null>(() =>
    calculateWaterIntake(68, 30, "temperate")
  );

  const runCalculation = (
    nUnit = unit,
    nWt = weight,
    nEx = exerciseMins,
    nClim = climate
  ) => {
    trackEvent("calculator_used", { calculator: "water-intake-calculator" });
    const pW = parseNumberInput(
      nWt,
      `Weight (${nUnit === "metric" ? "kg" : "lb"})`,
      { min: nUnit === "metric" ? 20 : 44, max: nUnit === "metric" ? 350 : 770 }
    );
    if (!pW.ok) {
      setError(pW.error);
      setResult(null);
      return;
    }
    const pEx = parseNumberInput(
      nEx === "" ? "0" : nEx,
      "Daily exercise minutes",
      { min: 0, max: 480, integer: true }
    );
    if (!pEx.ok) {
      setError(pEx.error);
      setResult(null);
      return;
    }
    const kg = nUnit === "metric" ? pW.value : poundsToKg(pW.value);
    try {
      const res = calculateWaterIntake(kg, pEx.value, nClim);
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", {
        calculator: "water-intake-calculator",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    const def = unit === "metric" ? "68" : "150";
    setWeight(def);
    setExerciseMins("30");
    setClimate("temperate");
    runCalculation(unit, def, "30", "temperate");
  };

  return (
    <CalculatorShell
      title="Water Intake Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={
        result
          ? `General Daily Hydration Estimate: ${result.litersPerDay} L (${result.fluidOuncesPerDay} US fl oz / ~${result.cups8OzPerDay} cups).`
          : undefined
      }
      resultSlot={
        result && (
          <div className="space-y-3 tabular-nums">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Liters / Day
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  {result.litersPerDay} L
                </p>
                <p className="text-xs text-slate-600">
                  {result.millilitersPerDay.toLocaleString("en-US")} mL
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  US Fluid Ounces
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {result.fluidOuncesPerDay} fl oz
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  8-oz Cups
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  ~{result.cups8OzPerDay} cups
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              General hydration estimate only; needs vary by climate, sweat rate, foods eaten, and medical conditions.
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
                const def = u === "metric" ? "68" : "150";
                setWeight(def);
                runCalculation(u, def, exerciseMins, climate);
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="wat-wt" className="block text-sm font-semibold text-slate-800">
            Weight ({unit === "metric" ? "kg" : "lb"})
          </label>
          <input
            id="wat-wt"
            type="number"
            step="any"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              runCalculation(unit, e.target.value, exerciseMins, climate);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="wat-ex" className="block text-sm font-semibold text-slate-800">
            Daily Exercise (minutes)
          </label>
          <input
            id="wat-ex"
            type="number"
            min="0"
            max="480"
            step="1"
            value={exerciseMins}
            onChange={(e) => {
              setExerciseMins(e.target.value);
              runCalculation(unit, weight, e.target.value, climate);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base tabular-nums"
          />
        </div>
        <div>
          <label htmlFor="wat-clim" className="block text-sm font-semibold text-slate-800">
            Climate Condition
          </label>
          <select
            id="wat-clim"
            value={climate}
            onChange={(e) => {
              const c = e.target.value as ClimateType;
              setClimate(c);
              runCalculation(unit, weight, exerciseMins, c);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
          >
            <option value="temperate">Temperate / Indoor</option>
            <option value="warm">Warm / Humid / Hot Weather</option>
          </select>
        </div>
      </div>
    </CalculatorShell>
  );
}
