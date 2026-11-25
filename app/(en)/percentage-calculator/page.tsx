import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { PercentageCalculator } from "@/components/calculators/everyday/PercentageCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("percentage-calculator");

export default function PercentageCalculatorPage() {
  return (
    <CalculatorPageLayout slug="percentage-calculator">
      <PercentageCalculator />
    </CalculatorPageLayout>
  );
}
