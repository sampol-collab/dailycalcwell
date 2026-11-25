import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { AverageCalculator } from "@/components/calculators/everyday/AverageCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("average-calculator");

export default function AverageCalculatorPage() {
  return (
    <CalculatorPageLayout slug="average-calculator">
      <AverageCalculator />
    </CalculatorPageLayout>
  );
}
