import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { WaterIntakeCalculator } from "@/components/calculators/health/WaterIntakeCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("water-intake-calculator");

export default function WaterIntakeCalculatorPage() {
  return (
    <CalculatorPageLayout slug="water-intake-calculator">
      <WaterIntakeCalculator />
    </CalculatorPageLayout>
  );
}
