import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { CalorieCalculator } from "@/components/calculators/health/CalorieCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("calorie-calculator");

export default function CalorieCalculatorPage() {
  return (
    <CalculatorPageLayout slug="calorie-calculator">
      <CalorieCalculator />
    </CalculatorPageLayout>
  );
}
