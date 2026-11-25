import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { DaysBetweenDatesCalculator } from "@/components/calculators/everyday/DaysBetweenDatesCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("days-between-dates-calculator");

export default function DaysBetweenDatesCalculatorPage() {
  return (
    <CalculatorPageLayout slug="days-between-dates-calculator">
      <DaysBetweenDatesCalculator />
    </CalculatorPageLayout>
  );
}
