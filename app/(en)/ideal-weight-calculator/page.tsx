import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { IdealWeightCalculator } from "@/components/calculators/health/IdealWeightCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("ideal-weight-calculator");

export default function IdealWeightCalculatorPage() {
  return (
    <CalculatorPageLayout slug="ideal-weight-calculator">
      <IdealWeightCalculator />
    </CalculatorPageLayout>
  );
}
