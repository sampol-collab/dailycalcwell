import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { ProfitLossCalculator } from "@/components/calculators/everyday/ProfitLossCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("profit-loss-calculator");

export default function ProfitLossCalculatorPage() {
  return (
    <CalculatorPageLayout slug="profit-loss-calculator">
      <ProfitLossCalculator />
    </CalculatorPageLayout>
  );
}
