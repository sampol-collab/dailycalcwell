"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { trackEvent } from "@/lib/analytics/ga4";
import {
  compareRatios,
  simplifyRatio,
  solveMissingRatio,
} from "@/lib/calculations/everyday";
import { parseNumberInput } from "@/lib/validation/inputs";

type RatioMode = "simplify" | "solve" | "compare";

export function RatioCalculator() {
  const [mode, setMode] = useState<RatioMode>("simplify");
  const [terms, setTerms] = useState<string[]>(["12", "18", "30"]);
  const [solveA, setSolveA] = useState("4");
  const [solveB, setSolveB] = useState("3");
  const [solveC, setSolveC] = useState("16");
  const [cmpA, setCmpA] = useState("16");
  const [cmpB, setCmpB] = useState("9");
  const [cmpC, setCmpC] = useState("1920");
  const [cmpD, setCmpD] = useState("1080");

  const [error, setError] = useState<string | null>(null);
  const [simplifiedRes, setSimplifiedRes] = useState(() =>
    simplifyRatio([12, 18, 30])
  );
  const [solvedRes, setSolvedRes] = useState<number>(12);
  const [comparedRes, setComparedRes] = useState(() =>
    compareRatios(16, 9, 1920, 1080)
  );

  const runSimplify = (nextTerms = terms) => {
    trackEvent("calculator_used", { calculator: "ratio-calculator" });
    const nums: number[] = [];
    for (let i = 0; i < nextTerms.length; i++) {
      const p = parseNumberInput(nextTerms[i], `Ratio Term ${i + 1}`, {
        allowNegative: false,
        allowZero: false,
      });
      if (!p.ok) {
        setError(p.error);
        return;
      }
      nums.push(p.value);
    }
    try {
      setSimplifiedRes(simplifyRatio(nums));
      setError(null);
      trackEvent("calculation_completed", { calculator: "ratio-calculator" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid ratio values.");
    }
  };

  const runSolve = (aRaw = solveA, bRaw = solveB, cRaw = solveC) => {
    trackEvent("calculator_used", { calculator: "ratio-calculator" });
    const a = parseNumberInput(aRaw, "Value A", { allowNegative: false, allowZero: false });
    const b = parseNumberInput(bRaw, "Value B", { allowNegative: false, allowZero: false });
    const c = parseNumberInput(cRaw, "Value C", { allowNegative: false, allowZero: false });
    for (const check of [a, b, c]) {
      if (!check.ok) {
        setError(check.error);
        return;
      }
    }
    if (!a.ok || !b.ok || !c.ok) return;
    setSolvedRes(solveMissingRatio(a.value, b.value, c.value));
    setError(null);
    trackEvent("calculation_completed", { calculator: "ratio-calculator" });
  };

  const runCompare = (aR = cmpA, bR = cmpB, cR = cmpC, dR = cmpD) => {
    trackEvent("calculator_used", { calculator: "ratio-calculator" });
    const a = parseNumberInput(aR, "Left A");
    const b = parseNumberInput(bR, "Left B", { allowZero: false });
    const c = parseNumberInput(cR, "Right C");
    const d = parseNumberInput(dR, "Right D", { allowZero: false });
    for (const check of [a, b, c, d]) {
      if (!check.ok) {
        setError(check.error);
        return;
      }
    }
    if (!a.ok || !b.ok || !c.ok || !d.ok) return;
    setComparedRes(compareRatios(a.value, b.value, c.value, d.value));
    setError(null);
    trackEvent("calculation_completed", { calculator: "ratio-calculator" });
  };

  const handleReset = () => {
    setTerms(["12", "18", "30"]);
    setSolveA("4");
    setSolveB("3");
    setSolveC("16");
    setCmpA("16");
    setCmpB("9");
    setCmpC("1920");
    setCmpD("1080");
    setError(null);
    setSimplifiedRes(simplifyRatio([12, 18, 30]));
    setSolvedRes(12);
    setComparedRes(compareRatios(16, 9, 1920, 1080));
  };

  const shareText =
    mode === "simplify"
      ? `Simplified Ratio: ${simplifiedRes.formatted}`
      : mode === "solve"
        ? `Proportion ${solveA} : ${solveB} = ${solveC} : ${solvedRes}`
        : `Ratio Comparison (${cmpA}:${cmpB} vs ${cmpC}:${cmpD}): ${comparedRes.comparison.toUpperCase()}`;

  return (
    <CalculatorShell
      title="Ratio Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => {
        if (mode === "simplify") runSimplify();
        else if (mode === "solve") runSolve();
        else runCompare();
      }}
      resultShareText={shareText}
      resultSlot={
        <div className="tabular-nums">
          {mode === "simplify" && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Simplified Ratio
              </p>
              <p className="mt-1 text-3xl font-bold text-slate-900">
                {simplifiedRes.formatted}
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Divided all terms by GCD factor {simplifiedRes.divisor}.
              </p>
            </div>
          )}
          {mode === "solve" && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Missing Ratio Term (X)
              </p>
              <p className="mt-1 text-3xl font-bold text-slate-900">
                X = {solvedRes}
              </p>
              <p className="mt-1 text-sm text-slate-700">
                {solveA} : {solveB} = {solveC} : {solvedRes}
              </p>
            </div>
          )}
          {mode === "compare" && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Comparison Result
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {comparedRes.comparison === "equal"
                  ? `${cmpA}:${cmpB} is equal to ${cmpC}:${cmpD}`
                  : comparedRes.comparison === "greater"
                    ? `${cmpA}:${cmpB} is greater than ${cmpC}:${cmpD}`
                    : `${cmpA}:${cmpB} is smaller than ${cmpC}:${cmpD}`}
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Decimal values: {comparedRes.leftDecimal} vs.{" "}
                {comparedRes.rightDecimal}
              </p>
            </div>
          )}
        </div>
      }
    >
      <div className="flex flex-wrap gap-2">
        {[
          { id: "simplify" as const, label: "Simplify Ratio" },
          { id: "solve" as const, label: "Find Missing Value (A:B = C:X)" },
          { id: "compare" as const, label: "Compare Two Ratios" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setMode(tab.id);
              setError(null);
            }}
            className={`rounded-lg border px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors ${
              mode === tab.id
                ? "border-sky-500 bg-sky-50 text-slate-900 font-semibold"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {mode === "simplify" && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {terms.map((val, idx) => (
              <div key={idx} className="flex items-end gap-2">
                <div className="flex-1">
                  <label
                    htmlFor={`ratio-term-${idx}`}
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Term {idx + 1}
                  </label>
                  <input
                    id={`ratio-term-${idx}`}
                    type="number"
                    min="0.0001"
                    step="any"
                    value={val}
                    onChange={(e) => {
                      const next = [...terms];
                      next[idx] = e.target.value;
                      setTerms(next);
                      runSimplify(next);
                    }}
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 tabular-nums focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
                  />
                </div>
                {terms.length > 2 && (
                  <button
                    type="button"
                    aria-label={`Remove term ${idx + 1}`}
                    onClick={() => {
                      const next = terms.filter((_, i) => i !== idx);
                      setTerms(next);
                      runSimplify(next);
                    }}
                    className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-red-50 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setTerms([...terms, "10"])}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Add Ratio Term</span>
          </button>
        </div>
      )}

      {mode === "solve" && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div>
            <label htmlFor="ratio-a" className="block text-xs font-semibold text-slate-700">
              A
            </label>
            <input
              id="ratio-a"
              type="number"
              step="any"
              value={solveA}
              onChange={(e) => {
                setSolveA(e.target.value);
                runSolve(e.target.value, solveB, solveC);
              }}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base tabular-nums"
            />
          </div>
          <div>
            <label htmlFor="ratio-b" className="block text-xs font-semibold text-slate-700">
              B
            </label>
            <input
              id="ratio-b"
              type="number"
              step="any"
              value={solveB}
              onChange={(e) => {
                setSolveB(e.target.value);
                runSolve(solveA, e.target.value, solveC);
              }}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base tabular-nums"
            />
          </div>
          <div>
            <label htmlFor="ratio-c" className="block text-xs font-semibold text-slate-700">
              C (Find X in A:B = C:X)
            </label>
            <input
              id="ratio-c"
              type="number"
              step="any"
              value={solveC}
              onChange={(e) => {
                setSolveC(e.target.value);
                runSolve(solveA, solveB, e.target.value);
              }}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base tabular-nums"
            />
          </div>
        </div>
      )}

      {mode === "compare" && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { id: "cmp-a", label: "First A", val: cmpA, setter: setCmpA, idx: 0 },
            { id: "cmp-b", label: "First B", val: cmpB, setter: setCmpB, idx: 1 },
            { id: "cmp-c", label: "Second C", val: cmpC, setter: setCmpC, idx: 2 },
            { id: "cmp-d", label: "Second D", val: cmpD, setter: setCmpD, idx: 3 },
          ].map((item) => (
            <div key={item.id}>
              <label htmlFor={item.id} className="block text-xs font-semibold text-slate-700">
                {item.label}
              </label>
              <input
                id={item.id}
                type="number"
                step="any"
                value={item.val}
                onChange={(e) => {
                  const v = e.target.value;
                  item.setter(v);
                  runCompare(
                    item.idx === 0 ? v : cmpA,
                    item.idx === 1 ? v : cmpB,
                    item.idx === 2 ? v : cmpC,
                    item.idx === 3 ? v : cmpD
                  );
                }}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base tabular-nums"
              />
            </div>
          ))}
        </div>
      )}
    </CalculatorShell>
  );
}
