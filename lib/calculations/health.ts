import { formatISODateUTC, formatReadableDateUTC, roundTo } from "../validation/inputs";

export type UnitSystem = "metric" | "imperial";
export type FormulaSex = "male" | "female";

export function feetInchesToCm(feet: number, inches: number): number {
  return roundTo((feet * 12 + inches) * 2.54, 4);
}

export function poundsToKg(pounds: number): number {
  return roundTo(pounds * 0.45359237, 4);
}

export function kgToPounds(kg: number): number {
  return roundTo(kg / 0.45359237, 2);
}

/* 1. BMI Calculator */
export interface BmiResult {
  bmi: number;
  category: "Underweight" | "Normal weight" | "Overweight" | "Obesity";
  healthyWeightRangeKg: { min: number; max: number };
  healthyWeightRangeLb: { min: number; max: number };
}

export function calculateBmi(weightKg: number, heightCm: number): BmiResult {
  if (weightKg <= 0 || heightCm <= 0) {
    throw new Error("Height and weight must be greater than zero.");
  }
  const heightM = heightCm / 100;
  const bmi = roundTo(weightKg / (heightM * heightM), 1);

  let category: BmiResult["category"];
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obesity";

  const minKg = roundTo(18.5 * heightM * heightM, 1);
  const maxKg = roundTo(24.9 * heightM * heightM, 1);

  return {
    bmi,
    category,
    healthyWeightRangeKg: { min: minKg, max: maxKg },
    healthyWeightRangeLb: { min: kgToPounds(minKg), max: kgToPounds(maxKg) },
  };
}

/* 2. BMR Calculator (Mifflin-St Jeor) */
export function calculateBmrMifflinStJeor(
  sex: FormulaSex,
  weightKg: number,
  heightCm: number,
  ageYears: number
): number {
  if (weightKg <= 0 || heightCm <= 0) {
    throw new Error("Weight and height must be greater than zero.");
  }
  if (ageYears < 15 || ageYears > 110) {
    throw new Error("Mifflin-St Jeor adult BMR estimates apply to ages 15 to 110.");
  }
  const base = 10 * weightKg + 6.25 * heightCm - 5 * ageYears;
  const offset = sex === "male" ? 5 : -161;
  return Math.round(base + offset);
}

/* 3. TDEE Calculator */
export type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very_active";

export const ACTIVITY_MULTIPLIERS: Record<
  ActivityLevel,
  { label: string; factor: number; description: string }
> = {
  sedentary: {
    label: "Sedentary",
    factor: 1.2,
    description: "Desk work with little or no structured exercise",
  },
  light: {
    label: "Lightly Active",
    factor: 1.375,
    description: "Light exercise or walking 1–3 days per week",
  },
  moderate: {
    label: "Moderately Active",
    factor: 1.55,
    description: "Moderate exercise 3–5 days per week",
  },
  active: {
    label: "Very Active",
    factor: 1.725,
    description: "Hard exercise or physical job 6–7 days per week",
  },
  very_active: {
    label: "Extra Active",
    factor: 1.9,
    description: "Intense daily athletic training or heavy physical labor",
  },
};

export interface TdeeResult {
  bmr: number;
  tdee: number;
  multiplier: number;
  activityLabel: string;
}

export function calculateTdee(
  sex: FormulaSex,
  weightKg: number,
  heightCm: number,
  ageYears: number,
  activity: ActivityLevel
): TdeeResult {
  const bmr = calculateBmrMifflinStJeor(sex, weightKg, heightCm, ageYears);
  const info = ACTIVITY_MULTIPLIERS[activity];
  return {
    bmr,
    tdee: Math.round(bmr * info.factor),
    multiplier: info.factor,
    activityLabel: info.label,
  };
}

/* 4. Calorie Calculator */
export type CalorieGoal = "maintain" | "mild_loss" | "loss" | "mild_gain" | "gain";

export interface CaloriePlanResult {
  maintenanceCalories: number;
  targetCalories: number;
  dailyAdjustment: number;
  floorApplied: boolean;
  minimumSafeNote: string;
}

export function calculateDailyCalories(
  sex: FormulaSex,
  weightKg: number,
  heightCm: number,
  ageYears: number,
  activity: ActivityLevel,
  goal: CalorieGoal
): CaloriePlanResult {
  const { tdee } = calculateTdee(sex, weightKg, heightCm, ageYears, activity);
  const adjustments: Record<CalorieGoal, number> = {
    maintain: 0,
    mild_loss: -250,
    loss: -500,
    mild_gain: 250,
    gain: 500,
  };
  const dailyAdjustment = adjustments[goal];
  const rawTarget = tdee + dailyAdjustment;
  const safeFloor = sex === "female" ? 1200 : 1500;
  const floorApplied =
    (goal === "mild_loss" || goal === "loss") && rawTarget < safeFloor;
  const targetCalories = floorApplied ? safeFloor : rawTarget;

  return {
    maintenanceCalories: tdee,
    targetCalories,
    dailyAdjustment,
    floorApplied,
    minimumSafeNote: floorApplied
      ? `Adjusted to a general non-clinical minimum floor of ${safeFloor} kcal/day. Very low calorie intakes should only be undertaken under medical supervision.`
      : "General estimate based on Mifflin-St Jeor BMR and activity multiplier.",
  };
}

/* 5. Ideal Weight Calculator */
export interface IdealWeightResult {
  devineKg: number;
  robinsonKg: number;
  millerKg: number;
  hamwiKg: number;
  healthyBmiMinKg: number;
  healthyBmiMaxKg: number;
}

export function calculateIdealWeight(
  sex: FormulaSex,
  heightCm: number
): IdealWeightResult {
  if (heightCm < 120 || heightCm > 240) {
    throw new Error("Height must be between 120 cm (3 ft 11 in) and 240 cm (7 ft 10 in).");
  }
  const heightInches = heightCm / 2.54;
  const inchesOver5Ft = Math.max(0, heightInches - 60);

  const devineKg = roundTo(
    (sex === "male" ? 50 : 45.5) + 2.3 * inchesOver5Ft,
    1
  );
  const robinsonKg = roundTo(
    (sex === "male" ? 52 : 49) + (sex === "male" ? 1.9 : 1.7) * inchesOver5Ft,
    1
  );
  const millerKg = roundTo(
    (sex === "male" ? 56.2 : 53.1) +
      (sex === "male" ? 1.41 : 1.36) * inchesOver5Ft,
    1
  );
  const hamwiKg = roundTo(
    (sex === "male" ? 48 : 45.5) + (sex === "male" ? 2.7 : 2.2) * inchesOver5Ft,
    1
  );

  const heightM = heightCm / 100;
  return {
    devineKg,
    robinsonKg,
    millerKg,
    hamwiKg,
    healthyBmiMinKg: roundTo(18.5 * heightM * heightM, 1),
    healthyBmiMaxKg: roundTo(24.9 * heightM * heightM, 1),
  };
}

/* 6. Body Fat Calculator (U.S. Navy Circumference Formula) */
export interface BodyFatResult {
  bodyFatPercent: number;
  fatMassKg: number;
  leanMassKg: number;
  referenceRangeNote: string;
}

export function calculateBodyFatNavy(
  sex: FormulaSex,
  heightCm: number,
  neckCm: number,
  waistCm: number,
  hipCm?: number,
  weightKg?: number
): BodyFatResult {
  if (heightCm <= 0 || neckCm <= 0 || waistCm <= 0) {
    throw new Error("Height, neck, and waist measurements must be greater than zero.");
  }

  let bodyFatPercent: number;

  if (sex === "male") {
    const diff = waistCm - neckCm;
    if (diff <= 0) {
      throw new Error("Waist circumference must be greater than neck circumference.");
    }
    bodyFatPercent =
      495 /
        (1.0324 - 0.19077 * Math.log10(diff) + 0.15456 * Math.log10(heightCm)) -
      450;
  } else {
    if (!hipCm || hipCm <= 0) {
      throw new Error("Hip circumference is required for the female U.S. Navy formula.");
    }
    const sumMinusNeck = waistCm + hipCm - neckCm;
    if (sumMinusNeck <= 0) {
      throw new Error("Waist plus hip circumference must exceed neck circumference.");
    }
    bodyFatPercent =
      495 /
        (1.29579 -
          0.35004 * Math.log10(sumMinusNeck) +
          0.221 * Math.log10(heightCm)) -
      450;
  }

  const clampedPct = roundTo(Math.max(2, Math.min(65, bodyFatPercent)), 1);
  const w = weightKg && weightKg > 0 ? weightKg : 0;
  const fatMassKg = w > 0 ? roundTo((w * clampedPct) / 100, 1) : 0;
  const leanMassKg = w > 0 ? roundTo(w - fatMassKg, 1) : 0;

  const referenceRangeNote =
    sex === "male"
      ? "ACE general adult reference categories: Athletes 6–13%, Fitness 14–17%, Average 18–24%, Obesity 25%+."
      : "ACE general adult reference categories: Athletes 14–20%, Fitness 21–24%, Average 25–31%, Obesity 32%+.";

  return {
    bodyFatPercent: clampedPct,
    fatMassKg,
    leanMassKg,
    referenceRangeNote,
  };
}

/* 7. Protein Calculator */
export type ProteinGoal = "general" | "active" | "strength" | "endurance";

export interface ProteinResult {
  minGramsPerDay: number;
  maxGramsPerDay: number;
  midpointGramsPerDay: number;
  gramsPerKgRange: string;
}

export function calculateProteinIntake(
  weightKg: number,
  goal: ProteinGoal
): ProteinResult {
  if (weightKg <= 0) {
    throw new Error("Weight must be greater than zero.");
  }
  const ranges: Record<ProteinGoal, [number, number]> = {
    general: [0.8, 1.0],
    active: [1.2, 1.5],
    strength: [1.6, 2.0],
    endurance: [1.2, 1.6],
  };
  const [low, high] = ranges[goal];
  const minGramsPerDay = Math.round(weightKg * low);
  const maxGramsPerDay = Math.round(weightKg * high);
  return {
    minGramsPerDay,
    maxGramsPerDay,
    midpointGramsPerDay: Math.round((minGramsPerDay + maxGramsPerDay) / 2),
    gramsPerKgRange: `${low}–${high} g/kg`,
  };
}

/* 8. Water Intake Calculator */
export type ClimateType = "temperate" | "warm";

export interface WaterIntakeResult {
  litersPerDay: number;
  millilitersPerDay: number;
  fluidOuncesPerDay: number;
  cups8OzPerDay: number;
}

export function calculateWaterIntake(
  weightKg: number,
  exerciseMinutesPerDay: number,
  climate: ClimateType
): WaterIntakeResult {
  if (weightKg <= 0) {
    throw new Error("Weight must be greater than zero.");
  }
  if (exerciseMinutesPerDay < 0 || exerciseMinutesPerDay > 480) {
    throw new Error("Daily exercise minutes must be between 0 and 480.");
  }
  // Baseline ~33 ml/kg + ~350 ml per 30 min activity + ~300 ml warm climate adjustment
  const baseMl = weightKg * 33;
  const activityMl = (exerciseMinutesPerDay / 30) * 350;
  const climateMl = climate === "warm" ? 300 : 0;
  const millilitersPerDay = Math.round(baseMl + activityMl + climateMl);
  const litersPerDay = roundTo(millilitersPerDay / 1000, 2);
  const fluidOuncesPerDay = Math.round(millilitersPerDay / 29.5735);
  const cups8OzPerDay = roundTo(fluidOuncesPerDay / 8, 1);

  return {
    litersPerDay,
    millilitersPerDay,
    fluidOuncesPerDay,
    cups8OzPerDay,
  };
}

/* 9. Pregnancy Weeks to Months Calculator */
export interface PregnancyWeeksMonthsResult {
  totalDays: number;
  approximateMonth: number;
  trimester: 1 | 2 | 3;
  trimesterLabel: string;
  progressPercent: number;
}

export function convertPregnancyWeeksToMonths(
  weeks: number,
  days: number
): PregnancyWeeksMonthsResult {
  if (weeks < 0 || weeks > 42) {
    throw new Error("Pregnancy weeks should be between 0 and 42.");
  }
  if (days < 0 || days > 6) {
    throw new Error("Additional days must be between 0 and 6.");
  }
  const totalDays = weeks * 7 + days;
  if (totalDays > 294) {
    throw new Error("Gestational age cannot exceed 42 weeks (294 days).");
  }
  // Standard clinical grouping across a 40-week (9-month) term (~4.33 weeks/month)
  const approximateMonth = Math.min(9, Math.max(1, Math.ceil((weeks + days / 7) / 4.33)));
  let trimester: 1 | 2 | 3 = 1;
  if (weeks >= 28) trimester = 3;
  else if (weeks >= 14) trimester = 2;

  const trimesterLabels: Record<1 | 2 | 3, string> = {
    1: "First Trimester (Weeks 0–13)",
    2: "Second Trimester (Weeks 14–27)",
    3: "Third Trimester (Weeks 28–40+)",
  };

  return {
    totalDays,
    approximateMonth,
    trimester,
    trimesterLabel: trimesterLabels[trimester],
    progressPercent: roundTo(Math.min(100, (totalDays / 280) * 100), 1),
  };
}

/* 10. Pregnancy Due Date Calculator */
export interface PregnancyEstimateResult {
  dueDateISO: string;
  dueDateReadable: string;
  lmpISO: string;
  lmpReadable: string;
  gestationalWeeks: number;
  gestationalDays: number;
  totalDaysPregnant: number;
  daysRemaining: number;
  trimester: 1 | 2 | 3;
  trimesterLabel: string;
  progressPercent: number;
}

export function calculatePregnancyDueDate(
  lmpUTC: Date,
  todayUTC: Date,
  cycleLengthDays = 28
): PregnancyEstimateResult {
  if (cycleLengthDays < 21 || cycleLengthDays > 35) {
    throw new Error("Average cycle length adjustment supports 21 to 35 days.");
  }
  const msPerDay = 86_400_000;
  const cycleAdjustment = cycleLengthDays - 28;
  const dueDateUTC = new Date(
    lmpUTC.getTime() + (280 + cycleAdjustment) * msPerDay
  );

  const rawElapsed = Math.floor(
    (todayUTC.getTime() - lmpUTC.getTime()) / msPerDay
  );
  if (rawElapsed < 0) {
    throw new Error("Last menstrual period date cannot be in the future.");
  }
  if (rawElapsed > 310) {
    throw new Error("Last menstrual period date is more than 44 weeks ago.");
  }

  const adjustedElapsed = Math.max(0, rawElapsed - cycleAdjustment);
  const gestationalWeeks = Math.floor(adjustedElapsed / 7);
  const gestationalDays = adjustedElapsed % 7;
  const daysRemaining = Math.max(
    0,
    Math.ceil((dueDateUTC.getTime() - todayUTC.getTime()) / msPerDay)
  );

  const weeksMeta = convertPregnancyWeeksToMonths(
    Math.min(42, gestationalWeeks),
    gestationalDays
  );

  return {
    dueDateISO: formatISODateUTC(dueDateUTC),
    dueDateReadable: formatReadableDateUTC(dueDateUTC),
    lmpISO: formatISODateUTC(lmpUTC),
    lmpReadable: formatReadableDateUTC(lmpUTC),
    gestationalWeeks,
    gestationalDays,
    totalDaysPregnant: adjustedElapsed,
    daysRemaining,
    trimester: weeksMeta.trimester,
    trimesterLabel: weeksMeta.trimesterLabel,
    progressPercent: weeksMeta.progressPercent,
  };
}

/* 11. Pregnancy Calculator (LMP or Due Date method) */
export function calculatePregnancyFromDueDate(
  dueDateUTC: Date,
  todayUTC: Date
): PregnancyEstimateResult {
  const msPerDay = 86_400_000;
  const lmpUTC = new Date(dueDateUTC.getTime() - 280 * msPerDay);
  return calculatePregnancyDueDate(lmpUTC, todayUTC, 28);
}

/* 12. Ovulation Calculator */
export interface OvulationResult {
  nextPeriodISO: string;
  nextPeriodReadable: string;
  estimatedOvulationISO: string;
  estimatedOvulationReadable: string;
  fertileWindowStartISO: string;
  fertileWindowStartReadable: string;
  fertileWindowEndISO: string;
  fertileWindowEndReadable: string;
}

export function calculateOvulation(
  lmpUTC: Date,
  cycleLengthDays: number
): OvulationResult {
  if (cycleLengthDays < 21 || cycleLengthDays > 45) {
    throw new Error("Cycle length must be between 21 and 45 days.");
  }
  const msPerDay = 86_400_000;
  const nextPeriodUTC = new Date(lmpUTC.getTime() + cycleLengthDays * msPerDay);
  // Luteal phase is typically ~14 days prior to the next menstrual period
  const ovulationUTC = new Date(nextPeriodUTC.getTime() - 14 * msPerDay);
  const fertileStartUTC = new Date(ovulationUTC.getTime() - 5 * msPerDay);
  const fertileEndUTC = ovulationUTC;

  return {
    nextPeriodISO: formatISODateUTC(nextPeriodUTC),
    nextPeriodReadable: formatReadableDateUTC(nextPeriodUTC),
    estimatedOvulationISO: formatISODateUTC(ovulationUTC),
    estimatedOvulationReadable: formatReadableDateUTC(ovulationUTC),
    fertileWindowStartISO: formatISODateUTC(fertileStartUTC),
    fertileWindowStartReadable: formatReadableDateUTC(fertileStartUTC),
    fertileWindowEndISO: formatISODateUTC(fertileEndUTC),
    fertileWindowEndReadable: formatReadableDateUTC(fertileEndUTC),
  };
}
