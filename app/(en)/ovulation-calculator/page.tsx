import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { OvulationCalculator } from "@/components/calculators/health/OvulationCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("ovulation-calculator");

export default function OvulationCalculatorPage() {
  return (
    <CalculatorPageLayout slug="ovulation-calculator">
      <OvulationCalculator />
    </CalculatorPageLayout>
  );
}
