import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { PregnancyWeeksToMonthsCalculator } from "@/components/calculators/health/PregnancyWeeksToMonthsCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("pregnancy-weeks-to-months");

export default function PregnancyWeeksToMonthsPage() {
  return (
    <CalculatorPageLayout slug="pregnancy-weeks-to-months">
      <PregnancyWeeksToMonthsCalculator />
    </CalculatorPageLayout>
  );
}
