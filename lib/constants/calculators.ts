export type CalculatorCategoryId = "everyday" | "health";

export interface CalculatorMeta {
  slug: string;
  name: string;
  shortName: string;
  category: CalculatorCategoryId;
  categoryName: string;
  categoryPath: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  primaryKeyword: string;
  keywords: string[];
  popular?: boolean;
  recentlyAdded?: boolean;
  relatedSlugs: string[];
  lastReviewed: string;
}

export const SITE_NAME = "DailyCalcWell";
export const SITE_TAGLINE =
  "Free Online Everyday & Health Calculators for India and the United States";
export const LAST_EDITORIAL_REVIEW = "2026-11-24";

export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.APP_URL ||
    "https://dailycalcwell.com";
  return raw.replace(/\/+$/, "");
}

export const CATEGORIES: Record<
  CalculatorCategoryId,
  {
    id: CalculatorCategoryId;
    name: string;
    path: string;
    seoTitle: string;
    seoDescription: string;
    intro: string;
  }
> = {
  everyday: {
    id: "everyday",
    name: "Everyday Calculators",
    path: "/everyday/",
    seoTitle: "Everyday Calculators – Percentages, Dates, Age & Units",
    seoDescription:
      "Browse free online everyday calculators for percentages, averages, exact age, dates, discounts, profit and loss, ratios, fractions, time and unit conversions.",
    intro:
      "Practical tools for daily math, shopping discounts in 150+ world currencies, business margins, calendar planning, time tracking, and metric-to-imperial conversions.",
  },
  health: {
    id: "health",
    name: "Health Calculators",
    path: "/health/",
    seoTitle: "Health Calculators – BMI, BMR, Calories & Pregnancy Tools",
    seoDescription:
      "Use free online health calculators for BMI, BMR, TDEE, daily calories, ideal weight, body fat, protein, hydration, pregnancy dates and ovulation estimates.",
    intro:
      "Evidence-referenced wellness and pregnancy estimation tools supporting both metric (kg, cm) and imperial (lb, ft/in) measurements with clear assumptions.",
  },
};

export const CALCULATORS: CalculatorMeta[] = [
  // Everyday Calculators (12)
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    shortName: "Percentage",
    category: "everyday",
    categoryName: "Everyday Calculators",
    categoryPath: "/everyday/",
    seoTitle: "Percentage Calculator – Calculate Percentages Online",
    seoDescription:
      "Calculate percentages, percentage increase, decrease, percentage difference and percentage change quickly with clear formulas and worked examples.",
    shortDescription:
      "Find X% of a number, percentage increase, decrease, difference and change.",
    primaryKeyword: "percentage calculator",
    keywords: [
      "percentage calculator",
      "calculate percentage",
      "percentage increase calculator",
      "percentage decrease calculator",
    ],
    popular: true,
    relatedSlugs: [
      "discount-calculator",
      "profit-loss-calculator",
      "average-calculator",
      "ratio-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "average-calculator",
    name: "Average Calculator",
    shortName: "Average",
    category: "everyday",
    categoryName: "Everyday Calculators",
    categoryPath: "/everyday/",
    seoTitle: "Average Calculator – Arithmetic Mean & Weighted Average",
    seoDescription:
      "Calculate arithmetic mean, median, and weighted average for any list of numbers or decimals. Add or remove entries with step-by-step explanations.",
    shortDescription:
      "Compute arithmetic mean, median, and weighted average with dynamic inputs.",
    primaryKeyword: "average calculator",
    keywords: [
      "average calculator",
      "weighted average calculator",
      "arithmetic mean calculator",
      "mean median calculator",
    ],
    popular: true,
    relatedSlugs: [
      "percentage-calculator",
      "ratio-calculator",
      "fraction-calculator",
      "profit-loss-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "age-calculator",
    name: "Age Calculator",
    shortName: "Age",
    category: "everyday",
    categoryName: "Everyday Calculators",
    categoryPath: "/everyday/",
    seoTitle: "Age Calculator – Exact Age in Years, Months and Days",
    seoDescription:
      "Find your exact age from your date of birth. Calculate years, months, days, total days lived and the days remaining until your next birthday.",
    shortDescription:
      "Calculate exact age in years, months, days, total days lived and next birthday.",
    primaryKeyword: "age calculator",
    keywords: [
      "age calculator",
      "calculate age from date of birth",
      "age in years months and days",
      "date of birth calculator",
    ],
    popular: true,
    relatedSlugs: [
      "date-calculator",
      "days-between-dates-calculator",
      "time-calculator",
      "time-duration-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "date-calculator",
    name: "Date Calculator",
    shortName: "Date",
    category: "everyday",
    categoryName: "Everyday Calculators",
    categoryPath: "/everyday/",
    seoTitle: "Date Calculator – Add or Subtract Days, Weeks & Years",
    seoDescription:
      "Add or subtract days, weeks, months and years from any calendar date with accurate leap-year and month-end handling for planning and deadlines.",
    shortDescription:
      "Add or subtract days, weeks, months and years with leap-year precision.",
    primaryKeyword: "date calculator",
    keywords: [
      "date calculator",
      "add days to date",
      "subtract days from date",
      "calendar date calculator",
    ],
    relatedSlugs: [
      "days-between-dates-calculator",
      "age-calculator",
      "time-calculator",
      "pregnancy-due-date-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "days-between-dates-calculator",
    name: "Days Between Dates Calculator",
    shortName: "Days Between Dates",
    category: "everyday",
    categoryName: "Everyday Calculators",
    categoryPath: "/everyday/",
    seoTitle: "Days Between Dates Calculator – Count Days & Weeks",
    seoDescription:
      "Count the exact number of days and weeks between two dates. Choose whether to include or exclude the end date for contracts, travel or planning.",
    shortDescription:
      "Find total days and weeks between two dates with optional end-date inclusion.",
    primaryKeyword: "days between dates calculator",
    keywords: [
      "days between dates calculator",
      "day counter",
      "date difference calculator",
      "weeks between dates",
    ],
    recentlyAdded: true,
    relatedSlugs: [
      "date-calculator",
      "age-calculator",
      "time-duration-calculator",
      "pregnancy-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "discount-calculator",
    name: "Discount Calculator",
    shortName: "Discount",
    category: "everyday",
    categoryName: "Everyday Calculators",
    categoryPath: "/everyday/",
    seoTitle: "Discount Calculator – Sale Price & World Currencies",
    seoDescription:
      "Calculate sale prices, discount amounts and savings percentages across 150+ world currencies (USD, EUR, INR, GBP, JPY, BRL and more).",
    shortDescription:
      "Compute discount amount and final sale price in any world currency.",
    primaryKeyword: "discount calculator",
    keywords: [
      "discount calculator",
      "sale price calculator",
      "percentage off calculator",
      "world currency discount calculator",
    ],
    popular: true,
    relatedSlugs: [
      "percentage-calculator",
      "profit-loss-calculator",
      "average-calculator",
      "ratio-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "profit-loss-calculator",
    name: "Profit and Loss Calculator",
    shortName: "Profit & Loss",
    category: "everyday",
    categoryName: "Everyday Calculators",
    categoryPath: "/everyday/",
    seoTitle: "Profit and Loss Calculator – Margin & Markup (All Currencies)",
    seoDescription:
      "Calculate profit or loss amount, percentage, gross margin and markup across 150+ world currencies from cost price and selling price.",
    shortDescription:
      "Find profit/loss amount, percentage, margin and markup in any world currency.",
    primaryKeyword: "profit and loss calculator",
    keywords: [
      "profit and loss calculator",
      "profit margin calculator",
      "markup calculator",
      "cost price selling price calculator",
    ],
    recentlyAdded: true,
    relatedSlugs: [
      "discount-calculator",
      "percentage-calculator",
      "average-calculator",
      "ratio-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "ratio-calculator",
    name: "Ratio Calculator",
    shortName: "Ratio",
    category: "everyday",
    categoryName: "Everyday Calculators",
    categoryPath: "/everyday/",
    seoTitle: "Ratio Calculator – Simplify, Compare & Solve Ratios",
    seoDescription:
      "Simplify multi-number ratios to lowest terms, compare two ratios side by side, or solve for a missing proportion value with step-by-step math.",
    shortDescription:
      "Simplify multi-part ratios, compare ratios and solve missing proportions.",
    primaryKeyword: "ratio calculator",
    keywords: [
      "ratio calculator",
      "simplify ratio",
      "proportion calculator",
      "compare ratios",
    ],
    relatedSlugs: [
      "fraction-calculator",
      "percentage-calculator",
      "average-calculator",
      "unit-converter",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "fraction-calculator",
    name: "Fraction Calculator",
    shortName: "Fraction",
    category: "everyday",
    categoryName: "Everyday Calculators",
    categoryPath: "/everyday/",
    seoTitle: "Fraction Calculator – Add, Subtract, Multiply & Divide",
    seoDescription:
      "Add, subtract, multiply and divide fractions online. Automatically simplifies results to lowest terms and displays mixed numbers and decimals.",
    shortDescription:
      "Perform fraction arithmetic with automatic simplification and mixed numbers.",
    primaryKeyword: "fraction calculator",
    keywords: [
      "fraction calculator",
      "add fractions",
      "simplify fractions",
      "mixed number calculator",
    ],
    relatedSlugs: [
      "ratio-calculator",
      "percentage-calculator",
      "average-calculator",
      "unit-converter",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "time-calculator",
    name: "Time Calculator",
    shortName: "Time",
    category: "everyday",
    categoryName: "Everyday Calculators",
    categoryPath: "/everyday/",
    seoTitle: "Time Calculator – Add and Subtract Hours and Minutes",
    seoDescription:
      "Add or subtract hours and minutes accurately for work logs, project billing, schedules and travel planning with total minute and day conversions.",
    shortDescription:
      "Add and subtract hours and minutes with total minutes and day equivalents.",
    primaryKeyword: "time calculator",
    keywords: [
      "time calculator",
      "add hours and minutes",
      "subtract hours and minutes",
      "time math calculator",
    ],
    relatedSlugs: [
      "time-duration-calculator",
      "date-calculator",
      "days-between-dates-calculator",
      "age-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "time-duration-calculator",
    name: "Time Duration Calculator",
    shortName: "Time Duration",
    category: "everyday",
    categoryName: "Everyday Calculators",
    categoryPath: "/everyday/",
    seoTitle: "Time Duration Calculator – Hours Between Start & End Time",
    seoDescription:
      "Calculate the exact hours and minutes between a start time and end time, including overnight shifts that cross midnight and decimal hour totals.",
    shortDescription:
      "Measure elapsed hours and minutes between two times, including overnight shifts.",
    primaryKeyword: "time duration calculator",
    keywords: [
      "time duration calculator",
      "hours between two times",
      "shift duration calculator",
      "overnight time calculator",
    ],
    recentlyAdded: true,
    relatedSlugs: [
      "time-calculator",
      "days-between-dates-calculator",
      "date-calculator",
      "age-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "unit-converter",
    name: "Unit Converter",
    shortName: "Unit Converter",
    category: "everyday",
    categoryName: "Everyday Calculators",
    categoryPath: "/everyday/",
    seoTitle: "Unit Converter – Metric & Imperial Length, Weight & Temp",
    seoDescription:
      "Convert length, weight, temperature, volume, speed and area between metric and imperial units commonly used in India and the United States.",
    shortDescription:
      "Convert length, weight, temperature, volume, speed and area across metric and imperial.",
    primaryKeyword: "unit converter",
    keywords: [
      "unit converter",
      "metric to imperial converter",
      "kg to lbs converter",
      "cm to feet converter",
    ],
    popular: true,
    relatedSlugs: [
      "bmi-calculator",
      "water-intake-calculator",
      "ratio-calculator",
      "fraction-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },

  // Health Calculators (12)
  {
    slug: "bmi-calculator",
    name: "BMI Calculator",
    shortName: "BMI",
    category: "health",
    categoryName: "Health Calculators",
    categoryPath: "/health/",
    seoTitle: "BMI Calculator – Calculate Body Mass Index Online",
    seoDescription:
      "Calculate your BMI using height and weight in kg/cm or lb/ft/in. View adult BMI categories, healthy weight range and understand how BMI screening works.",
    shortDescription:
      "Check adult Body Mass Index using metric (kg/cm) or imperial (lb/ft/in) units.",
    primaryKeyword: "bmi calculator",
    keywords: [
      "BMI calculator",
      "calculate BMI",
      "body mass index calculator",
      "BMI calculator kg and cm",
      "BMI calculator pounds and feet",
    ],
    popular: true,
    relatedSlugs: [
      "bmr-calculator",
      "tdee-calculator",
      "ideal-weight-calculator",
      "calorie-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "bmr-calculator",
    name: "BMR Calculator",
    shortName: "BMR",
    category: "health",
    categoryName: "Health Calculators",
    categoryPath: "/health/",
    seoTitle: "BMR Calculator – Basal Metabolic Rate (Mifflin-St Jeor)",
    seoDescription:
      "Estimate your Basal Metabolic Rate using the Mifflin-St Jeor equation in metric or imperial units. Learn how resting calorie burn is estimated.",
    shortDescription:
      "Estimate resting daily energy needs using the Mifflin-St Jeor formula.",
    primaryKeyword: "bmr calculator",
    keywords: [
      "BMR calculator",
      "basal metabolic rate calculator",
      "Mifflin-St Jeor calculator",
      "resting calories calculator",
    ],
    relatedSlugs: [
      "tdee-calculator",
      "calorie-calculator",
      "bmi-calculator",
      "protein-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "tdee-calculator",
    name: "TDEE Calculator",
    shortName: "TDEE",
    category: "health",
    categoryName: "Health Calculators",
    categoryPath: "/health/",
    seoTitle: "TDEE Calculator – Total Daily Energy Expenditure",
    seoDescription:
      "Calculate your estimated Total Daily Energy Expenditure and maintenance calories based on BMR and weekly physical activity level in metric or imperial.",
    shortDescription:
      "Estimate daily maintenance calories by combining BMR and activity level.",
    primaryKeyword: "tdee calculator",
    keywords: [
      "TDEE calculator",
      "total daily energy expenditure",
      "maintenance calorie calculator",
      "daily energy burn",
    ],
    popular: true,
    relatedSlugs: [
      "bmr-calculator",
      "calorie-calculator",
      "bmi-calculator",
      "protein-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "calorie-calculator",
    name: "Calorie Calculator",
    shortName: "Calorie",
    category: "health",
    categoryName: "Health Calculators",
    categoryPath: "/health/",
    seoTitle: "Calorie Calculator – Estimate Daily Calorie Needs",
    seoDescription:
      "Estimate daily calorie intake for maintaining, losing or gaining weight using the Mifflin-St Jeor equation, activity multipliers and safe bounds.",
    shortDescription:
      "Estimate daily calories for weight maintenance, gradual loss or gradual gain.",
    primaryKeyword: "calorie calculator",
    keywords: [
      "calorie calculator",
      "daily calorie needs",
      "calorie deficit calculator",
      "calorie intake estimator",
    ],
    popular: true,
    relatedSlugs: [
      "tdee-calculator",
      "bmr-calculator",
      "protein-calculator",
      "bmi-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "ideal-weight-calculator",
    name: "Ideal Weight Calculator",
    shortName: "Ideal Weight",
    category: "health",
    categoryName: "Health Calculators",
    categoryPath: "/health/",
    seoTitle: "Ideal Weight Calculator – Height & Healthy Weight Range",
    seoDescription:
      "Explore ideal body weight estimates from Devine, Robinson, Miller and Hamwi formulas alongside healthy BMI ranges in kilograms and pounds.",
    shortDescription:
      "Compare Devine, Robinson, Miller and Hamwi estimates plus healthy BMI range.",
    primaryKeyword: "ideal weight calculator",
    keywords: [
      "ideal weight calculator",
      "healthy weight for height",
      "Devine formula weight",
      "ideal body weight chart",
    ],
    relatedSlugs: [
      "bmi-calculator",
      "body-fat-calculator",
      "bmr-calculator",
      "calorie-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "body-fat-calculator",
    name: "Body Fat Calculator",
    shortName: "Body Fat",
    category: "health",
    categoryName: "Health Calculators",
    categoryPath: "/health/",
    seoTitle: "Body Fat Calculator – U.S. Navy Body Fat Estimator",
    seoDescription:
      "Estimate body fat percentage using the U.S. Navy circumference formula with neck, waist, hip and height measurements in centimetres or inches.",
    shortDescription:
      "Estimate body fat percentage, fat mass and lean mass using tape measurements.",
    primaryKeyword: "body fat calculator",
    keywords: [
      "body fat calculator",
      "navy body fat calculator",
      "body fat percentage estimator",
      "lean mass calculator",
    ],
    recentlyAdded: true,
    relatedSlugs: [
      "bmi-calculator",
      "ideal-weight-calculator",
      "protein-calculator",
      "tdee-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "protein-calculator",
    name: "Protein Calculator",
    shortName: "Protein",
    category: "health",
    categoryName: "Health Calculators",
    categoryPath: "/health/",
    seoTitle: "Protein Calculator – Daily Protein Intake Estimate",
    seoDescription:
      "Estimate daily protein intake in grams based on your body weight in kg or lb and general fitness or activity goal with evidence-based ranges.",
    shortDescription:
      "Estimate daily protein grams based on body weight and general activity goal.",
    primaryKeyword: "protein calculator",
    keywords: [
      "protein calculator",
      "daily protein intake calculator",
      "protein per kg calculator",
      "grams of protein per day",
    ],
    recentlyAdded: true,
    relatedSlugs: [
      "calorie-calculator",
      "tdee-calculator",
      "water-intake-calculator",
      "body-fat-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "water-intake-calculator",
    name: "Water Intake Calculator",
    shortName: "Water Intake",
    category: "health",
    categoryName: "Health Calculators",
    categoryPath: "/health/",
    seoTitle: "Water Intake Calculator – Daily Hydration Estimate",
    seoDescription:
      "Estimate general daily water intake in liters, milliliters, ounces and cups based on body weight, daily exercise duration and climate conditions.",
    shortDescription:
      "Estimate daily hydration in liters and fluid ounces by weight, activity and climate.",
    primaryKeyword: "water intake calculator",
    keywords: [
      "water intake calculator",
      "daily hydration calculator",
      "how much water to drink",
      "liters of water per day",
    ],
    relatedSlugs: [
      "protein-calculator",
      "calorie-calculator",
      "tdee-calculator",
      "unit-converter",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "pregnancy-weeks-to-months",
    name: "Pregnancy Weeks to Months Calculator",
    shortName: "Pregnancy Weeks to Months",
    category: "health",
    categoryName: "Health Calculators",
    categoryPath: "/health/",
    seoTitle: "Pregnancy Weeks to Months Calculator & Trimester Guide",
    seoDescription:
      "Convert pregnancy weeks and days into an approximate pregnancy month and trimester, and learn why clinical dating uses weeks instead of calendar months.",
    shortDescription:
      "Convert gestational weeks and days to approximate pregnancy month and trimester.",
    primaryKeyword: "pregnancy weeks to months",
    keywords: [
      "pregnancy weeks to months",
      "pregnancy months chart",
      "trimester calculator",
      "how many months pregnant",
    ],
    relatedSlugs: [
      "pregnancy-calculator",
      "pregnancy-due-date-calculator",
      "ovulation-calculator",
      "date-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "pregnancy-due-date-calculator",
    name: "Pregnancy Due Date Calculator",
    shortName: "Pregnancy Due Date",
    category: "health",
    categoryName: "Health Calculators",
    categoryPath: "/health/",
    seoTitle: "Pregnancy Due Date Calculator – Estimate EDD from LMP",
    seoDescription:
      "Estimate your pregnancy due date, current gestational week and trimester from your last menstrual period using the standard 280-day clinical assumption.",
    shortDescription:
      "Estimate due date, current week and trimester from last menstrual period.",
    primaryKeyword: "pregnancy due date calculator",
    keywords: [
      "pregnancy due date calculator",
      "estimated due date",
      "LMP due date calculator",
      "280 day pregnancy calculator",
    ],
    popular: true,
    relatedSlugs: [
      "pregnancy-calculator",
      "pregnancy-weeks-to-months",
      "ovulation-calculator",
      "days-between-dates-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "pregnancy-calculator",
    name: "Pregnancy Calculator",
    shortName: "Pregnancy",
    category: "health",
    categoryName: "Health Calculators",
    categoryPath: "/health/",
    seoTitle: "Pregnancy Calculator – Gestational Age & Progress Estimate",
    seoDescription:
      "Estimate current gestational age in weeks and days, pregnancy progress percentage and estimated due date using either last menstrual period or due date.",
    shortDescription:
      "Track estimated gestational weeks, pregnancy progress and due date.",
    primaryKeyword: "pregnancy calculator",
    keywords: [
      "pregnancy calculator",
      "how many weeks pregnant am I",
      "gestational age calculator",
      "pregnancy progress calculator",
    ],
    relatedSlugs: [
      "pregnancy-due-date-calculator",
      "pregnancy-weeks-to-months",
      "ovulation-calculator",
      "days-between-dates-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
  {
    slug: "ovulation-calculator",
    name: "Ovulation Calculator",
    shortName: "Ovulation",
    category: "health",
    categoryName: "Health Calculators",
    categoryPath: "/health/",
    seoTitle: "Ovulation Calculator – Estimate Fertile Window & Next Period",
    seoDescription:
      "Estimate your next period, likely ovulation date and fertile window from your last menstrual period and cycle length. Includes key limitations.",
    shortDescription:
      "Estimate next period, likely ovulation day and fertile window from cycle length.",
    primaryKeyword: "ovulation calculator",
    keywords: [
      "ovulation calculator",
      "fertile window calculator",
      "ovulation date estimator",
      "menstrual cycle calculator",
    ],
    recentlyAdded: true,
    relatedSlugs: [
      "pregnancy-due-date-calculator",
      "pregnancy-calculator",
      "pregnancy-weeks-to-months",
      "date-calculator",
    ],
    lastReviewed: LAST_EDITORIAL_REVIEW,
  },
];

export function getCalculatorBySlug(slug: string): CalculatorMeta {
  const found = CALCULATORS.find((c) => c.slug === slug);
  if (!found) {
    throw new Error(`Unknown calculator slug: ${slug}`);
  }
  return found;
}

export function getCalculatorsByCategory(
  category: CalculatorCategoryId
): CalculatorMeta[] {
  return CALCULATORS.filter((c) => c.category === category);
}

export function getPopularCalculators(): CalculatorMeta[] {
  return CALCULATORS.filter((c) => c.popular);
}

export function getRecentlyAddedCalculators(): CalculatorMeta[] {
  return CALCULATORS.filter((c) => c.recentlyAdded);
}
