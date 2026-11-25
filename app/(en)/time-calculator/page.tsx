import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { TimeCalculator } from "@/components/calculators/everyday/TimeCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("time-calculator");

export default function TimeCalculatorPage() {
  return (
    <CalculatorPageLayout slug="time-calculator">
      <TimeCalculator />
    </CalculatorPageLayout>
  );
}
