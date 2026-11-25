import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { BmrCalculator } from "@/components/calculators/health/BmrCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("bmr-calculator");

export default function BmrCalculatorPage() {
  return (
    <CalculatorPageLayout slug="bmr-calculator">
      <BmrCalculator />
    </CalculatorPageLayout>
  );
}
