import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { DiscountCalculator } from "@/components/calculators/everyday/DiscountCalculator";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("discount-calculator");

export default function DiscountCalculatorPage() {
  return (
    <CalculatorPageLayout slug="discount-calculator">
      <DiscountCalculator />
    </CalculatorPageLayout>
  );
}
