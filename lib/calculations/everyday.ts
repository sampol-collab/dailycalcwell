import {
  daysInMonth,
  formatISODateUTC,
  formatReadableDateUTC,
  gcd,
  roundTo,
} from "../validation/inputs";

export type CurrencyCode = string;

export function formatCurrencyValue(
  amount: number,
  currency: CurrencyCode,
  intlLocale = "en-US"
): string {
  const effectiveLocale =
    currency === "INR" && intlLocale === "en-US" ? "en-IN" : intlLocale;
  try {
    return new Intl.NumberFormat(effectiveLocale, {
      style: "currency",
      currency,
      currencyDisplay: "narrowSymbol",
    }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}

/* 1. Percentage Calculator */
export type PercentageMode =
  | "percentOf"
  | "whatPercent"
  | "increase"
  | "decrease"
  | "difference"
  | "change";

export interface PercentageResult {
  primaryValue: number;
  formattedPrimary: string;
  secondaryLabel?: string;
  secondaryValue?: string;
  formulaUsed: string;
}

export function calculatePercentage(
  mode: PercentageMode,
  a: number,
  b: number
): PercentageResult {
  switch (mode) {
    case "percentOf": {
      const value = roundTo((a / 100) * b, 6);
      return {
        primaryValue: value,
        formattedPrimary: String(value),
        formulaUsed: `(${a} / 100) × ${b} = ${value}`,
      };
    }
    case "whatPercent": {
      if (b === 0) {
        throw new Error("The total value (denominator) cannot be zero.");
      }
      const value = roundTo((a / b) * 100, 4);
      return {
        primaryValue: value,
        formattedPrimary: `${value}%`,
        formulaUsed: `(${a} / ${b}) × 100 = ${value}%`,
      };
    }
    case "increase": {
      const increaseAmt = roundTo((a * b) / 100, 6);
      const finalVal = roundTo(a + increaseAmt, 6);
      return {
        primaryValue: finalVal,
        formattedPrimary: String(finalVal),
        secondaryLabel: "Increase Amount",
        secondaryValue: `+${increaseAmt}`,
        formulaUsed: `${a} + (${a} × ${b}%) = ${finalVal}`,
      };
    }
    case "decrease": {
      const decreaseAmt = roundTo((a * b) / 100, 6);
      const finalVal = roundTo(a - decreaseAmt, 6);
      return {
        primaryValue: finalVal,
        formattedPrimary: String(finalVal),
        secondaryLabel: "Decrease Amount",
        secondaryValue: `-${decreaseAmt}`,
        formulaUsed: `${a} − (${a} × ${b}%) = ${finalVal}`,
      };
    }
    case "difference": {
      const avg = (Math.abs(a) + Math.abs(b)) / 2;
      if (avg === 0) {
        throw new Error("Both values cannot be zero for percentage difference.");
      }
      const diff = Math.abs(a - b);
      const pct = roundTo((diff / avg) * 100, 4);
      return {
        primaryValue: pct,
        formattedPrimary: `${pct}%`,
        secondaryLabel: "Absolute Difference",
        secondaryValue: String(roundTo(diff, 6)),
        formulaUsed: `(|${a} − ${b}| / ((|${a}| + |${b}|) / 2)) × 100 = ${pct}%`,
      };
    }
    case "change": {
      if (a === 0) {
        throw new Error("Initial value cannot be zero when calculating percentage change.");
      }
      const delta = roundTo(b - a, 6);
      const pct = roundTo((delta / Math.abs(a)) * 100, 4);
      const sign = pct > 0 ? "+" : "";
      return {
        primaryValue: pct,
        formattedPrimary: `${sign}${pct}%`,
        secondaryLabel: delta >= 0 ? "Net Increase" : "Net Decrease",
        secondaryValue: `${delta >= 0 ? "+" : ""}${delta}`,
        formulaUsed: `((${b} − ${a}) / |${a}|) × 100 = ${sign}${pct}%`,
      };
    }
  }
}

/* 2. Average Calculator */
export interface AverageResult {
  mean: number;
  sum: number;
  count: number;
  min: number;
  max: number;
  median: number;
}

export function calculateArithmeticAverage(values: number[]): AverageResult {
  if (values.length === 0) {
    throw new Error("Enter at least one number to calculate an average.");
  }
  const sum = roundTo(
    values.reduce((acc, v) => acc + v, 0),
    8
  );
  const count = values.length;
  const mean = roundTo(sum / count, 6);
  const sorted = [...values].sort((x, y) => x - y);
  const mid = Math.floor(count / 2);
  const median =
    count % 2 === 0
      ? roundTo((sorted[mid - 1] + sorted[mid]) / 2, 6)
      : sorted[mid];
  return {
    mean,
    sum,
    count,
    min: sorted[0],
    max: sorted[count - 1],
    median,
  };
}

export interface WeightedItem {
  value: number;
  weight: number;
}

export interface WeightedAverageResult {
  weightedMean: number;
  weightedSum: number;
  totalWeight: number;
}

export function calculateWeightedAverage(
  items: WeightedItem[]
): WeightedAverageResult {
  if (items.length === 0) {
    throw new Error("Add at least one value and weight pair.");
  }
  const totalWeight = roundTo(
    items.reduce((acc, item) => acc + item.weight, 0),
    8
  );
  if (totalWeight <= 0) {
    throw new Error("Total weight must be greater than zero.");
  }
  const weightedSum = roundTo(
    items.reduce((acc, item) => acc + item.value * item.weight, 0),
    8
  );
  return {
    weightedMean: roundTo(weightedSum / totalWeight, 6),
    weightedSum,
    totalWeight,
  };
}

/* 3. Age Calculator */
export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  nextBirthdayISO: string;
  nextBirthdayReadable: string;
  daysUntilNextBirthday: number;
}

export function calculateExactAge(dobUTC: Date, asOfUTC: Date): AgeResult {
  if (dobUTC.getTime() > asOfUTC.getTime()) {
    throw new Error("Date of birth cannot be in the future relative to the target date.");
  }

  let years = asOfUTC.getUTCFullYear() - dobUTC.getUTCFullYear();
  let months = asOfUTC.getUTCMonth() - dobUTC.getUTCMonth();
  let days = asOfUTC.getUTCDate() - dobUTC.getUTCDate();

  if (days < 0) {
    months -= 1;
    const prevMonthYear =
      asOfUTC.getUTCMonth() === 0
        ? asOfUTC.getUTCFullYear() - 1
        : asOfUTC.getUTCFullYear();
    const prevMonthIndex =
      asOfUTC.getUTCMonth() === 0 ? 11 : asOfUTC.getUTCMonth() - 1;
    days += daysInMonth(prevMonthYear, prevMonthIndex);
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const msPerDay = 86_400_000;
  const totalDays = Math.floor((asOfUTC.getTime() - dobUTC.getTime()) / msPerDay);
  const totalWeeks = Math.floor(totalDays / 7);

  // Next birthday (handle Feb 29 safely by clamping to Feb 28 in non-leap years)
  const dobMonth = dobUTC.getUTCMonth();
  const dobDay = dobUTC.getUTCDate();

  let nextYear = asOfUTC.getUTCFullYear();
  let clampedDay = Math.min(dobDay, daysInMonth(nextYear, dobMonth));
  let nextBirthday = new Date(Date.UTC(nextYear, dobMonth, clampedDay));

  if (nextBirthday.getTime() <= asOfUTC.getTime()) {
    nextYear += 1;
    clampedDay = Math.min(dobDay, daysInMonth(nextYear, dobMonth));
    nextBirthday = new Date(Date.UTC(nextYear, dobMonth, clampedDay));
  }

  const daysUntilNextBirthday = Math.round(
    (nextBirthday.getTime() - asOfUTC.getTime()) / msPerDay
  );

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks,
    nextBirthdayISO: formatISODateUTC(nextBirthday),
    nextBirthdayReadable: formatReadableDateUTC(nextBirthday),
    daysUntilNextBirthday,
  };
}

/* 4. Date Calculator (Add / Subtract) */
export interface DateShiftInput {
  startDateUTC: Date;
  operation: "add" | "subtract";
  years: number;
  months: number;
  weeks: number;
  days: number;
}

export interface DateShiftResult {
  resultDateISO: string;
  resultDateReadable: string;
  dayOfWeek: string;
}

export function calculateDateShift(input: DateShiftInput): DateShiftResult {
  const sign = input.operation === "add" ? 1 : -1;
  const start = input.startDateUTC;

  // Apply years and months first with month-end clamping
  const totalMonths = sign * (input.years * 12 + input.months);
  const targetYearRaw = start.getUTCFullYear();
  const targetMonthIndexRaw = start.getUTCMonth() + totalMonths;

  const year = targetYearRaw + Math.floor(targetMonthIndexRaw / 12);
  const month = ((targetMonthIndexRaw % 12) + 12) % 12;
  const clampedDay = Math.min(start.getUTCDate(), daysInMonth(year, month));

  const shifted = new Date(Date.UTC(year, month, clampedDay));
  const extraDays = sign * (input.weeks * 7 + input.days);
  shifted.setUTCDate(shifted.getUTCDate() + extraDays);

  const dayOfWeek = shifted.toLocaleDateString("en-US", {
    timeZone: "UTC",
    weekday: "long",
  });

  return {
    resultDateISO: formatISODateUTC(shifted),
    resultDateReadable: formatReadableDateUTC(shifted),
    dayOfWeek,
  };
}

/* 5. Days Between Dates Calculator */
export interface DaysBetweenResult {
  totalDays: number;
  weeks: number;
  remainingDays: number;
  approximateMonths: number;
  approximateYears: number;
  reversedOrder: boolean;
}

export function calculateDaysBetween(
  startUTC: Date,
  endUTC: Date,
  includeEndDate: boolean
): DaysBetweenResult {
  const msPerDay = 86_400_000;
  const rawDiff = Math.round(
    Math.abs(endUTC.getTime() - startUTC.getTime()) / msPerDay
  );
  const totalDays = includeEndDate ? rawDiff + 1 : rawDiff;
  const weeks = Math.floor(totalDays / 7);
  const remainingDays = totalDays % 7;

  return {
    totalDays,
    weeks,
    remainingDays,
    approximateMonths: roundTo(totalDays / 30.4375, 2),
    approximateYears: roundTo(totalDays / 365.25, 2),
    reversedOrder: endUTC.getTime() < startUTC.getTime(),
  };
}

/* 6. Discount Calculator */
export interface DiscountResult {
  originalPrice: number;
  discountPercent: number;
  discountAmount: number;
  finalPrice: number;
  savingsNote: string;
}

export function calculateDiscount(
  originalPrice: number,
  discountPercent: number
): DiscountResult {
  if (originalPrice < 0) {
    throw new Error("Original price cannot be negative.");
  }
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Discount percentage must be between 0 and 100.");
  }
  const discountAmount = roundTo((originalPrice * discountPercent) / 100, 2);
  const finalPrice = roundTo(originalPrice - discountAmount, 2);
  return {
    originalPrice,
    discountPercent,
    discountAmount,
    finalPrice,
    savingsNote: `You save ${discountPercent}% off the original price.`,
  };
}

/* 7. Profit and Loss Calculator */
export interface ProfitLossResult {
  status: "profit" | "loss" | "breakeven";
  amount: number;
  percentageOnCost: number;
  profitMarginPercent: number;
  markupPercent: number;
}

export function calculateProfitLoss(
  costPrice: number,
  sellingPrice: number
): ProfitLossResult {
  if (costPrice <= 0) {
    throw new Error("Cost price must be greater than zero.");
  }
  if (sellingPrice < 0) {
    throw new Error("Selling price cannot be negative.");
  }
  const diff = roundTo(sellingPrice - costPrice, 2);
  const percentageOnCost = roundTo((Math.abs(diff) / costPrice) * 100, 2);
  const profitMarginPercent =
    sellingPrice > 0 ? roundTo((diff / sellingPrice) * 100, 2) : -100;
  const markupPercent = roundTo((diff / costPrice) * 100, 2);

  return {
    status: diff > 0 ? "profit" : diff < 0 ? "loss" : "breakeven",
    amount: Math.abs(diff),
    percentageOnCost,
    profitMarginPercent,
    markupPercent,
  };
}

/* 8. Ratio Calculator */
export interface SimplifiedRatioResult {
  simplified: number[];
  divisor: number;
  formatted: string;
}

export function simplifyRatio(parts: number[]): SimplifiedRatioResult {
  if (parts.length < 2) {
    throw new Error("Provide at least two numbers to simplify a ratio.");
  }
  if (parts.some((p) => p <= 0)) {
    throw new Error("All ratio terms must be greater than zero.");
  }
  // Convert decimals to integers via scaling by power of 10
  const maxDecimals = Math.max(
    ...parts.map((p) => {
      const s = String(p);
      const idx = s.indexOf(".");
      return idx === -1 ? 0 : s.length - idx - 1;
    })
  );
  const scale = Math.pow(10, Math.min(maxDecimals, 6));
  const scaled = parts.map((p) => Math.round(p * scale));
  const common = scaled.reduce((acc, val) => gcd(acc, val));
  const simplified = scaled.map((val) => val / common);
  return {
    simplified,
    divisor: common,
    formatted: simplified.join(" : "),
  };
}

export function solveMissingRatio(a: number, b: number, c: number): number {
  if (a === 0 || b <= 0 || c <= 0) {
    throw new Error("Ratio values must be positive numbers.");
  }
  return roundTo((b * c) / a, 6);
}

export function compareRatios(
  a: number,
  b: number,
  c: number,
  d: number
): { comparison: "equal" | "greater" | "less"; leftDecimal: number; rightDecimal: number } {
  if (b === 0 || d === 0) {
    throw new Error("Second term of each ratio cannot be zero.");
  }
  const leftDecimal = roundTo(a / b, 6);
  const rightDecimal = roundTo(c / d, 6);
  const epsilon = 1e-9;
  const comparison =
    Math.abs(leftDecimal - rightDecimal) < epsilon
      ? "equal"
      : leftDecimal > rightDecimal
        ? "greater"
        : "less";
  return { comparison, leftDecimal, rightDecimal };
}

/* 9. Fraction Calculator */
export type FractionOperation = "add" | "subtract" | "multiply" | "divide";

export interface FractionResult {
  numerator: number;
  denominator: number;
  mixedWhole: number;
  mixedNumerator: number;
  mixedDenominator: number;
  decimal: number;
  formattedFraction: string;
  formattedMixed: string | null;
}

export function calculateFraction(
  n1: number,
  d1: number,
  n2: number,
  d2: number,
  operation: FractionOperation
): FractionResult {
  if (d1 === 0 || d2 === 0) {
    throw new Error("Fraction denominators cannot be zero.");
  }
  let rawNum = 0;
  let rawDen = 1;

  switch (operation) {
    case "add":
      rawNum = n1 * d2 + n2 * d1;
      rawDen = d1 * d2;
      break;
    case "subtract":
      rawNum = n1 * d2 - n2 * d1;
      rawDen = d1 * d2;
      break;
    case "multiply":
      rawNum = n1 * n2;
      rawDen = d1 * d2;
      break;
    case "divide":
      if (n2 === 0) {
        throw new Error("Cannot divide by a fraction whose numerator is zero.");
      }
      rawNum = n1 * d2;
      rawDen = d1 * n2;
      break;
  }

  if (rawDen < 0) {
    rawNum = -rawNum;
    rawDen = -rawDen;
  }

  const divisor = rawNum === 0 ? 1 : gcd(rawNum, rawDen);
  const numerator = rawNum / divisor;
  const denominator = rawDen / divisor;
  const decimal = roundTo(numerator / denominator, 6);

  const absNum = Math.abs(numerator);
  let formattedMixed: string | null = null;
  let mixedWhole = 0;
  let mixedNumerator = numerator;
  const mixedDenominator = denominator;

  if (absNum >= denominator && denominator !== 1) {
    const sign = numerator < 0 ? -1 : 1;
    mixedWhole = sign * Math.floor(absNum / denominator);
    mixedNumerator = absNum % denominator;
    formattedMixed =
      mixedNumerator === 0
        ? String(mixedWhole)
        : `${mixedWhole} ${mixedNumerator}/${denominator}`;
  }

  const formattedFraction =
    denominator === 1 ? String(numerator) : `${numerator}/${denominator}`;

  return {
    numerator,
    denominator,
    mixedWhole,
    mixedNumerator,
    mixedDenominator,
    decimal,
    formattedFraction,
    formattedMixed,
  };
}

/* 10. Time Calculator (Add / Subtract Hours & Minutes) */
export interface TimeArithmeticResult {
  totalMinutes: number;
  hours: number;
  minutes: number;
  daysEquivalent: number;
  isNegative: boolean;
  formatted: string;
}

export function calculateTimeArithmetic(
  h1: number,
  m1: number,
  h2: number,
  m2: number,
  operation: "add" | "subtract"
): TimeArithmeticResult {
  const firstTotal = h1 * 60 + m1;
  const secondTotal = h2 * 60 + m2;
  const totalMinutes =
    operation === "add" ? firstTotal + secondTotal : firstTotal - secondTotal;
  const isNegative = totalMinutes < 0;
  const absMins = Math.abs(totalMinutes);
  const hours = Math.floor(absMins / 60);
  const minutes = absMins % 60;
  const sign = isNegative ? "-" : "";

  return {
    totalMinutes,
    hours,
    minutes,
    daysEquivalent: roundTo(absMins / 1440, 2),
    isNegative,
    formatted: `${sign}${hours}h ${minutes}m`,
  };
}

/* 11. Time Duration Calculator (Start Time to End Time) */
export interface TimeDurationResult {
  totalMinutes: number;
  hours: number;
  minutes: number;
  decimalHours: number;
  isOvernight: boolean;
  formatted: string;
}

export function calculateTimeDuration(
  startTimeHHMM: string,
  endTimeHHMM: string,
  allowOvernight = true
): TimeDurationResult {
  const parseTime = (val: string) => {
    const m = /^(\d{2}):(\d{2})$/.exec(val.trim());
    if (!m) return null;
    const hh = Number(m[1]);
    const mm = Number(m[2]);
    if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;
    return hh * 60 + mm;
  };

  const startMins = parseTime(startTimeHHMM);
  const endMins = parseTime(endTimeHHMM);
  if (startMins === null || endMins === null) {
    throw new Error("Please select valid start and end times in 24-hour HH:MM format.");
  }

  let diff = endMins - startMins;
  let isOvernight = false;

  if (diff < 0) {
    if (!allowOvernight) {
      throw new Error("End time is earlier than start time. Enable overnight intervals to span midnight.");
    }
    diff += 24 * 60;
    isOvernight = true;
  }

  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;

  return {
    totalMinutes: diff,
    hours,
    minutes,
    decimalHours: roundTo(diff / 60, 2),
    isOvernight,
    formatted: `${hours}h ${minutes}m`,
  };
}

/* 12. Unit Converter */
export type UnitCategory =
  | "length"
  | "weight"
  | "temperature"
  | "volume"
  | "speed"
  | "area";

export interface UnitDefinition {
  id: string;
  label: string;
  symbol: string;
  toBaseFactor?: number;
}

export const UNIT_DEFINITIONS: Record<UnitCategory, UnitDefinition[]> = {
  length: [
    { id: "m", label: "Meters", symbol: "m", toBaseFactor: 1 },
    { id: "km", label: "Kilometers", symbol: "km", toBaseFactor: 1000 },
    { id: "cm", label: "Centimeters", symbol: "cm", toBaseFactor: 0.01 },
    { id: "mm", label: "Millimeters", symbol: "mm", toBaseFactor: 0.001 },
    { id: "mi", label: "Miles", symbol: "mi", toBaseFactor: 1609.344 },
    { id: "yd", label: "Yards", symbol: "yd", toBaseFactor: 0.9144 },
    { id: "ft", label: "Feet", symbol: "ft", toBaseFactor: 0.3048 },
    { id: "in", label: "Inches", symbol: "in", toBaseFactor: 0.0254 },
  ],
  weight: [
    { id: "kg", label: "Kilograms", symbol: "kg", toBaseFactor: 1 },
    { id: "g", label: "Grams", symbol: "g", toBaseFactor: 0.001 },
    { id: "mg", label: "Milligrams", symbol: "mg", toBaseFactor: 0.000001 },
    { id: "lb", label: "Pounds", symbol: "lb", toBaseFactor: 0.45359237 },
    { id: "oz", label: "Ounces", symbol: "oz", toBaseFactor: 0.028349523125 },
    { id: "t", label: "Metric Tonnes", symbol: "t", toBaseFactor: 1000 },
  ],
  temperature: [
    { id: "c", label: "Celsius", symbol: "°C" },
    { id: "f", label: "Fahrenheit", symbol: "°F" },
    { id: "k", label: "Kelvin", symbol: "K" },
  ],
  volume: [
    { id: "l", label: "Liters", symbol: "L", toBaseFactor: 1 },
    { id: "ml", label: "Milliliters", symbol: "mL", toBaseFactor: 0.001 },
    { id: "gal_us", label: "US Gallons", symbol: "gal (US)", toBaseFactor: 3.785411784 },
    { id: "fl_oz_us", label: "US Fluid Ounces", symbol: "fl oz", toBaseFactor: 0.0295735295625 },
    { id: "cup_us", label: "US Cups", symbol: "cup", toBaseFactor: 0.2365882365 },
  ],
  speed: [
    { id: "mps", label: "Meters per second", symbol: "m/s", toBaseFactor: 1 },
    { id: "kmh", label: "Kilometers per hour", symbol: "km/h", toBaseFactor: 1 / 3.6 },
    { id: "mph", label: "Miles per hour", symbol: "mph", toBaseFactor: 0.44704 },
    { id: "kn", label: "Knots", symbol: "kn", toBaseFactor: 0.5144444444 },
  ],
  area: [
    { id: "sqm", label: "Square Meters", symbol: "m²", toBaseFactor: 1 },
    { id: "sqft", label: "Square Feet", symbol: "sq ft", toBaseFactor: 0.09290304 },
    { id: "sqkm", label: "Square Kilometers", symbol: "km²", toBaseFactor: 1_000_000 },
    { id: "acre", label: "Acres", symbol: "ac", toBaseFactor: 4046.8564224 },
    { id: "ha", label: "Hectares", symbol: "ha", toBaseFactor: 10_000 },
  ],
};

export function convertUnits(
  category: UnitCategory,
  value: number,
  fromUnitId: string,
  toUnitId: string
): number {
  if (category === "temperature") {
    let celsius: number;
    if (fromUnitId === "c") celsius = value;
    else if (fromUnitId === "f") celsius = (value - 32) * (5 / 9);
    else if (fromUnitId === "k") {
      if (value < 0) throw new Error("Kelvin cannot be below absolute zero (0 K).");
      celsius = value - 273.15;
    } else throw new Error("Unsupported source temperature unit.");

    if (celsius < -273.15) {
      throw new Error("Temperature cannot be below absolute zero (-273.15 °C).");
    }

    if (toUnitId === "c") return roundTo(celsius, 4);
    if (toUnitId === "f") return roundTo(celsius * (9 / 5) + 32, 4);
    if (toUnitId === "k") return roundTo(celsius + 273.15, 4);
    throw new Error("Unsupported target temperature unit.");
  }

  const units = UNIT_DEFINITIONS[category];
  const fromDef = units.find((u) => u.id === fromUnitId);
  const toDef = units.find((u) => u.id === toUnitId);
  if (!fromDef?.toBaseFactor || !toDef?.toBaseFactor) {
    throw new Error("Unsupported unit selection.");
  }
  const baseValue = value * fromDef.toBaseFactor;
  return roundTo(baseValue / toDef.toBaseFactor, 6);
}
