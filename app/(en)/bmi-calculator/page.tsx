import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { BmiCalculator } from "@/components/calculators/health/BmiCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("bmi-calculator");

export default function BmiCalculatorPage() {
  return (
    <CalculatorPageLayout slug="bmi-calculator">
      <BmiCalculator />
    </CalculatorPageLayout>
  );
}
