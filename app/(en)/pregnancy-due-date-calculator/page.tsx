import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { PregnancyDueDateCalculator } from "@/components/calculators/health/PregnancyDueDateCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("pregnancy-due-date-calculator");

export default function PregnancyDueDateCalculatorPage() {
  return (
    <CalculatorPageLayout slug="pregnancy-due-date-calculator">
      <PregnancyDueDateCalculator />
    </CalculatorPageLayout>
  );
}
