import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { BodyFatCalculator } from "@/components/calculators/health/BodyFatCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("body-fat-calculator");

export default function BodyFatCalculatorPage() {
  return (
    <CalculatorPageLayout slug="body-fat-calculator">
      <BodyFatCalculator />
    </CalculatorPageLayout>
  );
}
