import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { PregnancyCalculator } from "@/components/calculators/health/PregnancyCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("pregnancy-calculator");

export default function PregnancyCalculatorPage() {
  return (
    <CalculatorPageLayout slug="pregnancy-calculator">
      <PregnancyCalculator />
    </CalculatorPageLayout>
  );
}
