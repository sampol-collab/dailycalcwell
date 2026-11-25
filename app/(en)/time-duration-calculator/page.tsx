import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { TimeDurationCalculator } from "@/components/calculators/everyday/TimeDurationCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("time-duration-calculator");

export default function TimeDurationCalculatorPage() {
  return (
    <CalculatorPageLayout slug="time-duration-calculator">
      <TimeDurationCalculator />
    </CalculatorPageLayout>
  );
}
