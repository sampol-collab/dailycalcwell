import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { ProteinCalculator } from "@/components/calculators/health/ProteinCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("protein-calculator");

export default function ProteinCalculatorPage() {
  return (
    <CalculatorPageLayout slug="protein-calculator">
      <ProteinCalculator />
    </CalculatorPageLayout>
  );
}
