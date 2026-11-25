"use client";

import { useState } from "react";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { DatePicker } from "@/components/ui/DatePicker";
import { trackEvent } from "@/lib/analytics/ga4";
import { AgeResult, calculateExactAge } from "@/lib/calculations/everyday";
import { formatISODateUTC, parseISODateUTC } from "@/lib/validation/inputs";

function yearsAgoISO(yearsAgo: number): string {
  const now = new Date();
  return formatISODateUTC(
    new Date(
      Date.UTC(
        now.getUTCFullYear() - yearsAgo,
        now.getUTCMonth(),
        Math.min(now.getUTCDate(), 28)
      )
    )
  );
}

function todayISO(): string {
  const now = new Date();
  return formatISODateUTC(
    new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
  );
}

export function AgeCalculator() {
  const defaultAsOf = todayISO();
  const [dob, setDob] = useState("1995-05-15");
  const [asOf, setAsOf] = useState(defaultAsOf);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AgeResult | null>(() => {
    const d1 = parseISODateUTC("1995-05-15", "Date of birth");
    const d2 = parseISODateUTC(defaultAsOf, "Target date");
    return d1.ok && d2.ok ? calculateExactAge(d1.value, d2.value) : null;
  });

  const runCalculation = (nextDob = dob, nextAsOf = asOf) => {
    trackEvent("calculator_used", { calculator: "age-calculator" });
    const parsedDob = parseISODateUTC(nextDob, "Date of birth");
    if (!parsedDob.ok) {
      setError(parsedDob.error);
      setResult(null);
      return;
    }
    const parsedAsOf = parseISODateUTC(nextAsOf, "Target date");
    if (!parsedAsOf.ok) {
      setError(parsedAsOf.error);
      setResult(null);
      return;
    }
    try {
      const res = calculateExactAge(parsedDob.value, parsedAsOf.value);
      setError(null);
      setResult(res);
      trackEvent("calculation_completed", { calculator: "age-calculator" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid date inputs.");
      setResult(null);
    }
  };

  const handleReset = () => {
    const today = todayISO();
    setDob("1995-05-15");
    setAsOf(today);
    runCalculation("1995-05-15", today);
  };

  const shareText = result
    ? `Exact Age: ${result.years} years, ${result.months} months, ${result.days} days (${result.totalDays.toLocaleString()} days lived; ${result.daysUntilNextBirthday} days until next birthday).`
    : undefined;

  return (
    <CalculatorShell
      title="Age Calculator"
      error={error}
      onReset={handleReset}
      onCalculate={() => runCalculation()}
      resultShareText={shareText}
      resultSlot={
        result && (
          <div className="space-y-4 tabular-nums">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Exact Age
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900">
                {result.years} years, {result.months} months, {result.days} days
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 border-t border-sky-200 pt-3">
              <div>
                <p className="text-xs font-medium text-slate-600">Total Days Lived</p>
                <p className="text-lg font-bold text-slate-900">
                  {result.totalDays.toLocaleString("en-US")} days
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-600">Next Birthday</p>
                <p className="text-lg font-bold text-slate-900">
                  {result.nextBirthdayReadable}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-600">
                  Days Until Next Birthday
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {result.daysUntilNextBirthday} days
                </p>
              </div>
            </div>
          </div>
        )
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="age-dob"
            className="block text-sm font-semibold text-slate-800"
          >
            Date of Birth
          </label>
          <DatePicker
            id="age-dob"
            ariaLabel="Date of Birth"
            value={dob}
            minYear={1900}
            maxYear={new Date().getUTCFullYear()}
            presets={[
              { label: "18 yrs ago", iso: yearsAgoISO(18) },
              { label: "25 yrs ago", iso: yearsAgoISO(25) },
              { label: "30 yrs ago", iso: yearsAgoISO(30) },
              { label: "50 yrs ago", iso: yearsAgoISO(50) },
            ]}
            onChange={(nextDob) => {
              setDob(nextDob);
              runCalculation(nextDob, asOf);
            }}
          />
        </div>
        <div>
          <label
            htmlFor="age-as-of"
            className="block text-sm font-semibold text-slate-800"
          >
            Calculate Age On Date
          </label>
          <DatePicker
            id="age-as-of"
            ariaLabel="Calculate Age On Date"
            value={asOf}
            minYear={1900}
            maxYear={2100}
            onChange={(nextAsOf) => {
              setAsOf(nextAsOf);
              runCalculation(dob, nextAsOf);
            }}
          />
        </div>
      </div>
    </CalculatorShell>
  );
}
