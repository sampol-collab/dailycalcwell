"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  convertUnits,
  UNIT_DEFINITIONS,
  UnitCategory,
} from "@/lib/calculations/everyday";
import { parseNumberInput } from "@/lib/validation/inputs";

const CATEGORIES: { id: UnitCategory; label: string }[] = [
  { id: "length", label: "Length" },
  { id: "weight", label: "Weight & Mass" },
  { id: "temperature", label: "Temperature" },
  { id: "volume", label: "Volume" },
  { id: "speed", label: "Speed" },
  { id: "area", label: "Area" },
];

const DEFAULT_PAIRS: Record<UnitCategory, [string, string, string]> = {
  length: ["10", "km", "mi"],
  weight: ["70", "kg", "lb"],
  temperature: ["100", "f", "c"],
  volume: ["1", "gal_us", "l"],
  speed: ["100", "kmh", "mph"],
  area: ["1000", "sqft", "sqm"],
};

export function UnitConverter() {
  const [category, setCategory] = useState<UnitCategory>("weight");
  const [valueStr, setValueStr] = useState("70");
  const [fromUnit, setFromUnit] = useState("kg");
  const [toUnit, setToUnit] = useState("lb");
  const [error, setError] = useState<string | null>(null);
  const [converted, setConverted] = useState<number | null>(() =>
    convertUnits("weight", 70, "kg", "lb")
  );

  const units = UNIT_DEFINITIONS[category];
  const fromDef = units.find((u) => u.id === fromUnit);
  const toDef = units.find((u) => u.id === toUnit);

  const runConversion = (
    cat = category,
    rawVal = valueStr,
    f = fromUnit,
    t = toUnit
  ) => {
    trackEvent("calculator_used", { calculator: "unit-converter" });
    const parsed = parseNumberInput(rawVal, "Value", {
      allowNegative: cat === "temperature",
    });
    if (!parsed.ok) {
      setError(parsed.error);
      setConverted(null);
      return;
    }
    try {
      const res = convertUnits(cat, parsed.value, f, t);
      setError(null);
      setConverted(res);
      trackEvent("calculation_completed", { calculator: "unit-converter" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed.");
      setConverted(null);
    }
  };

  const handleCategoryChange = (nextCat: UnitCategory) => {
    const [defVal, defFrom, defTo] = DEFAULT_PAIRS[nextCat];
    setCategory(nextCat);
    setValueStr(defVal);
    setFromUnit(defFrom);
    setToUnit(defTo);
    runConversion(nextCat, defVal, defFrom, defTo);
  };

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    runConversion(category, valueStr, toUnit, fromUnit);
  };

  const handleReset = () => {
    handleCategoryChange("weight");
  };

  return (
    <CalculatorShell
      title="Unit Converter"
      error={error}
      onReset={handleReset}
      onCalculate={() => runConversion()}
      resultShareText={
        converted !== null && fromDef && toDef
          ? `${valueStr} ${fromDef.symbol} = ${converted} ${toDef.symbol}`
          : undefined
      }
      resultSlot={
        converted !== null &&
        fromDef &&
        toDef && (
          <div className="tabular-nums">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Converted Value
            </p>
            <p className="mt-1 text-3xl font-bold text-slate-900">
              {converted} {toDef.symbol}
            </p>
            <p className="mt-1 text-sm text-slate-700">
              {valueStr} {fromDef.label} ({fromDef.symbol}) = {converted}{" "}
              {toDef.label} ({toDef.symbol})
            </p>
          </div>
        )
      }
    >
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => handleCategoryChange(c.id)}
            className={`rounded-lg border px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors ${
              category === c.id
                ? "border-sky-500 bg-sky-50 text-slate-900 font-semibold"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 items-end">
        <div className="sm:col-span-4">
          <label
            htmlFor="uc-value"
            className="block text-sm font-semibold text-slate-800"
          >
            Value
          </label>
          <input
            id="uc-value"
            type="number"
            step="any"
            value={valueStr}
            onChange={(e) => {
              setValueStr(e.target.value);
              runConversion(category, e.target.value, fromUnit, toUnit);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 tabular-nums"
          />
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="uc-from"
            className="block text-sm font-semibold text-slate-800"
          >
            From
          </label>
          <select
            id="uc-from"
            value={fromUnit}
            onChange={(e) => {
              setFromUnit(e.target.value);
              runConversion(category, valueStr, e.target.value, toUnit);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900"
          >
            {units.map((u) => (
              <option key={u.id} value={u.id}>
                {u.label} ({u.symbol})
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2 flex justify-center">
          <button
            type="button"
            onClick={handleSwap}
            aria-label="Swap units"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 w-full sm:w-auto"
          >
            <ArrowLeftRight className="h-4 w-4" aria-hidden="true" />
            <span>Swap</span>
          </button>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="uc-to"
            className="block text-sm font-semibold text-slate-800"
          >
            To
          </label>
          <select
            id="uc-to"
            value={toUnit}
            onChange={(e) => {
              setToUnit(e.target.value);
              runConversion(category, valueStr, fromUnit, e.target.value);
            }}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900"
          >
            {units.map((u) => (
              <option key={u.id} value={u.id}>
                {u.label} ({u.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>
    </CalculatorShell>
  );
}
