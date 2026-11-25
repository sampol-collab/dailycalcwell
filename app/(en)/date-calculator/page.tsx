import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { DateCalculator } from "@/components/calculators/everyday/DateCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("date-calculator");

export default function DateCalculatorPage() {
  return (
    <CalculatorPageLayout slug="date-calculator">
      <DateCalculator />
    </CalculatorPageLayout>
  );
}
