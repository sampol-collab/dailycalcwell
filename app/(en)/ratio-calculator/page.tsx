import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { RatioCalculator } from "@/components/calculators/everyday/RatioCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("ratio-calculator");

export default function RatioCalculatorPage() {
  return (
    <CalculatorPageLayout slug="ratio-calculator">
      <RatioCalculator />
    </CalculatorPageLayout>
  );
}
