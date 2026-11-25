import assert from "node:assert/strict";
import test from "node:test";
import {
  calculateArithmeticAverage,
  calculateDateShift,
  calculateDaysBetween,
  calculateDiscount,
  calculateExactAge,
  calculateFraction,
  calculatePercentage,
  calculateProfitLoss,
  calculateTimeArithmetic,
  calculateTimeDuration,
  calculateWeightedAverage,
  compareRatios,
  convertUnits,
  formatCurrencyValue,
  simplifyRatio,
  solveMissingRatio,
} from "../lib/calculations/everyday";
import { WORLD_CURRENCY_CODES } from "../lib/constants/currencies";
import {
  calculateBmi,
  calculateBmrMifflinStJeor,
  calculateBodyFatNavy,
  calculateDailyCalories,
  calculateIdealWeight,
  calculateOvulation,
  calculatePregnancyDueDate,
  calculatePregnancyFromDueDate,
  calculateProteinIntake,
  calculateTdee,
  calculateWaterIntake,
  convertPregnancyWeeksToMonths,
  feetInchesToCm,
  poundsToKg,
} from "../lib/calculations/health";
import { isLeapYear, parseISODateUTC } from "../lib/validation/inputs";

test("Percentage calculator handles all 6 modes and zero edge cases", () => {
  assert.equal(calculatePercentage("percentOf", 18, 2500).primaryValue, 450);
  assert.equal(calculatePercentage("whatPercent", 25, 200).primaryValue, 12.5);
  assert.equal(calculatePercentage("increase", 100, 20).primaryValue, 120);
  assert.equal(calculatePercentage("decrease", 120, 20).primaryValue, 96);
  assert.equal(calculatePercentage("difference", 100, 150).primaryValue, 40);
  assert.equal(calculatePercentage("change", 200, 150).primaryValue, -25);
  assert.throws(() => calculatePercentage("whatPercent", 10, 0));
  assert.throws(() => calculatePercentage("change", 0, 50));
});

test("Average calculator computes arithmetic mean, median, and weighted average", () => {
  const std = calculateArithmeticAverage([10, 20, 30, 40]);
  assert.equal(std.mean, 25);
  assert.equal(std.median, 25);
  assert.equal(std.sum, 100);
  assert.equal(std.count, 4);

  const weighted = calculateWeightedAverage([
    { value: 82, weight: 30 },
    { value: 76, weight: 30 },
    { value: 90, weight: 40 },
  ]);
  assert.equal(weighted.weightedMean, 83.4);
  assert.throws(() => calculateWeightedAverage([{ value: 10, weight: 0 }]));
});

test("Age calculator handles leap years, Feb 29, and future DOB error", () => {
  assert.equal(isLeapYear(2000), true);
  assert.equal(isLeapYear(1900), false);
  assert.equal(isLeapYear(2024), true);

  const dob = parseISODateUTC("2000-02-29");
  const asOf = parseISODateUTC("2026-11-24");
  assert.equal(dob.ok && asOf.ok, true);
  if (dob.ok && asOf.ok) {
    const res = calculateExactAge(dob.value, asOf.value);
    assert.equal(res.years, 26);
    assert.equal(res.months, 8);
    assert.equal(res.days, 26);
    // 2027 is not a leap year -> clamps next birthday to Feb 28
    assert.equal(res.nextBirthdayISO, "2027-02-28");
  }

  const future = parseISODateUTC("2030-01-01");
  if (future.ok && asOf.ok) {
    assert.throws(() => calculateExactAge(future.value, asOf.value));
  }
});

test("Date calculator clamps month-end dates and respects leap years", () => {
  const jan31 = parseISODateUTC("2024-01-31");
  assert.equal(jan31.ok, true);
  if (jan31.ok) {
    const res = calculateDateShift({
      startDateUTC: jan31.value,
      operation: "add",
      years: 0,
      months: 1,
      weeks: 0,
      days: 10,
    });
    assert.equal(res.resultDateISO, "2024-03-10");
  }
});

test("Days between dates handles inclusive and exclusive end dates", () => {
  const s = parseISODateUTC("2026-03-02");
  const e = parseISODateUTC("2026-03-06");
  if (s.ok && e.ok) {
    assert.equal(calculateDaysBetween(s.value, e.value, false).totalDays, 4);
    const inc = calculateDaysBetween(s.value, e.value, true);
    assert.equal(inc.totalDays, 5);
    assert.equal(inc.weeks, 0);
    assert.equal(inc.remainingDays, 5);
  }
});

test("Discount and Profit & Loss calculators validate ranges and compute margins", () => {
  const disc = calculateDiscount(120, 25);
  assert.equal(disc.discountAmount, 30);
  assert.equal(disc.finalPrice, 90);
  assert.throws(() => calculateDiscount(100, 120));

  const pl = calculateProfitLoss(800, 1000);
  assert.equal(pl.status, "profit");
  assert.equal(pl.amount, 200);
  assert.equal(pl.markupPercent, 25);
  assert.equal(pl.profitMarginPercent, 20);
  assert.throws(() => calculateProfitLoss(0, 100));

  assert.equal(WORLD_CURRENCY_CODES.length >= 150, true);
  for (const code of WORLD_CURRENCY_CODES) {
    const formatted = formatCurrencyValue(1234.56, code, "en-US");
    assert.ok(formatted.length > 0, `Empty format for currency ${code}`);
  }
  assert.ok(formatCurrencyValue(1200, "JPY", "en-US").includes("1,200"));
  assert.ok(formatCurrencyValue(250, "EUR", "de-DE").includes("€"));
  assert.ok(formatCurrencyValue(250, "BRL", "pt-BR").includes("R$"));
  assert.ok(formatCurrencyValue(250, "INR", "en-US").includes("₹"));
});

test("Ratio and Fraction calculators simplify, solve, and handle division by zero", () => {
  const ratio = simplifyRatio([12, 18, 30]);
  assert.equal(ratio.formatted, "2 : 3 : 5");
  assert.equal(solveMissingRatio(4, 3, 16), 12);
  assert.equal(compareRatios(16, 9, 1920, 1080).comparison, "equal");

  const frac = calculateFraction(3, 4, 5, 6, "add");
  assert.equal(frac.formattedFraction, "19/12");
  assert.equal(frac.formattedMixed, "1 7/12");
  assert.throws(() => calculateFraction(1, 0, 1, 2, "add"));
  assert.throws(() => calculateFraction(1, 2, 0, 3, "divide"));
});

test("Time and Time Duration calculators handle carry-over and overnight intervals", () => {
  const t = calculateTimeArithmetic(4, 45, 3, 35, "add");
  assert.equal(t.formatted, "8h 20m");
  assert.equal(t.totalMinutes, 500);

  const dur = calculateTimeDuration("22:15", "06:45", true);
  assert.equal(dur.formatted, "8h 30m");
  assert.equal(dur.decimalHours, 8.5);
  assert.equal(dur.isOvernight, true);
  assert.throws(() => calculateTimeDuration("22:15", "06:45", false));
});

test("Unit converter converts metric/imperial and blocks below absolute zero", () => {
  assert.equal(convertUnits("length", 1, "in", "cm"), 2.54);
  assert.equal(convertUnits("temperature", 100, "c", "f"), 212);
  assert.equal(convertUnits("weight", 1, "lb", "kg"), 0.453592);
  assert.throws(() => convertUnits("temperature", -5, "k", "c"));
});

test("Health calculators: BMI, BMR, TDEE, Calorie safety floor, Ideal Weight, Body Fat", () => {
  const bmi = calculateBmi(70, 172);
  assert.equal(bmi.bmi, 23.7);
  assert.equal(bmi.category, "Normal weight");

  const impHeight = feetInchesToCm(5, 8);
  const impWeight = poundsToKg(160);
  assert.equal(calculateBmi(impWeight, impHeight).bmi, 24.3);

  const bmr = calculateBmrMifflinStJeor("female", 62, 165, 30);
  assert.equal(bmr, 1340);

  const tdee = calculateTdee("male", 78, 178, 32, "moderate");
  assert.equal(tdee.bmr, 1738);
  assert.equal(tdee.tdee, 2694);

  // Enforce non-clinical minimum floor for small sedentary individual selecting -500 kcal
  const cal = calculateDailyCalories("female", 48, 152, 50, "sedentary", "loss");
  assert.equal(cal.floorApplied, true);
  assert.equal(cal.targetCalories, 1200);

  const iw = calculateIdealWeight("male", 177.8);
  assert.equal(iw.devineKg, 73);
  assert.equal(iw.robinsonKg, 71);

  const bf = calculateBodyFatNavy("male", 178, 38, 86, undefined, 76);
  assert.ok(bf.bodyFatPercent > 15 && bf.bodyFatPercent < 20);
  assert.throws(() => calculateBodyFatNavy("male", 178, 45, 40));
});

test("Health calculators: Protein, Water, Pregnancy & Ovulation", () => {
  const prot = calculateProteinIntake(70, "active");
  assert.equal(prot.minGramsPerDay, 84);
  assert.equal(prot.maxGramsPerDay, 105);

  const water = calculateWaterIntake(68, 45, "warm");
  assert.equal(water.millilitersPerDay, 3069);

  const pMonth = convertPregnancyWeeksToMonths(24, 3);
  assert.equal(pMonth.approximateMonth, 6);
  assert.equal(pMonth.trimester, 2);

  const lmp = parseISODateUTC("2026-06-01");
  const today = parseISODateUTC("2026-11-24");
  if (lmp.ok && today.ok) {
    const edd = calculatePregnancyDueDate(lmp.value, today.value, 28);
    assert.equal(edd.dueDateISO, "2027-03-08");
    const fromEdd = calculatePregnancyFromDueDate(
      parseISODateUTC("2027-03-08").ok
        ? (parseISODateUTC("2027-03-08") as { ok: true; value: Date }).value
        : today.value,
      today.value
    );
    assert.equal(fromEdd.gestationalWeeks, edd.gestationalWeeks);
  }

  const ovuStart = parseISODateUTC("2026-11-01");
  if (ovuStart.ok) {
    const ovu = calculateOvulation(ovuStart.value, 30);
    assert.equal(ovu.nextPeriodISO, "2026-12-01");
    assert.equal(ovu.estimatedOvulationISO, "2026-11-17");
    assert.equal(ovu.fertileWindowStartISO, "2026-11-12");
  }
});
