import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { FractionCalculator } from "@/components/calculators/everyday/FractionCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("fraction-calculator");

export default function FractionCalculatorPage() {
  return (
    <CalculatorPageLayout slug="fraction-calculator">
      <FractionCalculator />
    </CalculatorPageLayout>
  );
}
