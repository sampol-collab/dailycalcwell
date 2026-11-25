import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { AgeCalculator } from "@/components/calculators/everyday/AgeCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("age-calculator");

export default function AgeCalculatorPage() {
  return (
    <CalculatorPageLayout slug="age-calculator">
      <AgeCalculator />
    </CalculatorPageLayout>
  );
}
