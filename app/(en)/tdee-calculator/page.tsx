import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { TdeeCalculator } from "@/components/calculators/health/TdeeCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("tdee-calculator");

export default function TdeeCalculatorPage() {
  return (
    <CalculatorPageLayout slug="tdee-calculator">
      <TdeeCalculator />
    </CalculatorPageLayout>
  );
}
