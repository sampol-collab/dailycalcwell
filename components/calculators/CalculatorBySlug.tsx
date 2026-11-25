import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { AgeCalculator } from "@/components/calculators/everyday/AgeCalculator";
import { AverageCalculator } from "@/components/calculators/everyday/AverageCalculator";
import { DateCalculator } from "@/components/calculators/everyday/DateCalculator";
import { DaysBetweenDatesCalculator } from "@/components/calculators/everyday/DaysBetweenDatesCalculator";
import { DiscountCalculator } from "@/components/calculators/everyday/DiscountCalculator";
import { FractionCalculator } from "@/components/calculators/everyday/FractionCalculator";
import { PercentageCalculator } from "@/components/calculators/everyday/PercentageCalculator";
import { ProfitLossCalculator } from "@/components/calculators/everyday/ProfitLossCalculator";
import { RatioCalculator } from "@/components/calculators/everyday/RatioCalculator";
import { TimeCalculator } from "@/components/calculators/everyday/TimeCalculator";
import { TimeDurationCalculator } from "@/components/calculators/everyday/TimeDurationCalculator";
import { UnitConverter } from "@/components/calculators/everyday/UnitConverter";
import { BmiCalculator } from "@/components/calculators/health/BmiCalculator";
import { BmrCalculator } from "@/components/calculators/health/BmrCalculator";
import { BodyFatCalculator } from "@/components/calculators/health/BodyFatCalculator";
import { CalorieCalculator } from "@/components/calculators/health/CalorieCalculator";
import { IdealWeightCalculator } from "@/components/calculators/health/IdealWeightCalculator";
import { OvulationCalculator } from "@/components/calculators/health/OvulationCalculator";
import { PregnancyCalculator } from "@/components/calculators/health/PregnancyCalculator";
import { PregnancyDueDateCalculator } from "@/components/calculators/health/PregnancyDueDateCalculator";
import { PregnancyWeeksToMonthsCalculator } from "@/components/calculators/health/PregnancyWeeksToMonthsCalculator";
import { ProteinCalculator } from "@/components/calculators/health/ProteinCalculator";
import { TdeeCalculator } from "@/components/calculators/health/TdeeCalculator";
import { WaterIntakeCalculator } from "@/components/calculators/health/WaterIntakeCalculator";
import { DEFAULT_LOCALE, Locale } from "@/lib/i18n/config";

interface CalculatorBySlugProps {
  slug: string;
  locale?: Locale;
}

function renderCalculatorWidget(slug: string) {
  switch (slug) {
    case "percentage-calculator":
      return <PercentageCalculator />;
    case "average-calculator":
      return <AverageCalculator />;
    case "age-calculator":
      return <AgeCalculator />;
    case "date-calculator":
      return <DateCalculator />;
    case "days-between-dates-calculator":
      return <DaysBetweenDatesCalculator />;
    case "discount-calculator":
      return <DiscountCalculator />;
    case "profit-loss-calculator":
      return <ProfitLossCalculator />;
    case "ratio-calculator":
      return <RatioCalculator />;
    case "fraction-calculator":
      return <FractionCalculator />;
    case "time-calculator":
      return <TimeCalculator />;
    case "time-duration-calculator":
      return <TimeDurationCalculator />;
    case "unit-converter":
      return <UnitConverter />;
    case "bmi-calculator":
      return <BmiCalculator />;
    case "bmr-calculator":
      return <BmrCalculator />;
    case "tdee-calculator":
      return <TdeeCalculator />;
    case "calorie-calculator":
      return <CalorieCalculator />;
    case "ideal-weight-calculator":
      return <IdealWeightCalculator />;
    case "body-fat-calculator":
      return <BodyFatCalculator />;
    case "protein-calculator":
      return <ProteinCalculator />;
    case "water-intake-calculator":
      return <WaterIntakeCalculator />;
    case "pregnancy-weeks-to-months":
      return <PregnancyWeeksToMonthsCalculator />;
    case "pregnancy-due-date-calculator":
      return <PregnancyDueDateCalculator />;
    case "pregnancy-calculator":
      return <PregnancyCalculator />;
    case "ovulation-calculator":
      return <OvulationCalculator />;
    default:
      return null;
  }
}

export function CalculatorBySlug({
  slug,
  locale = DEFAULT_LOCALE,
}: CalculatorBySlugProps) {
  const widget = renderCalculatorWidget(slug);
  if (!widget) return null;

  return (
    <CalculatorPageLayout slug={slug} locale={locale}>
      {widget}
    </CalculatorPageLayout>
  );
}
