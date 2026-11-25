import { CalculatorPageLayout } from "@/components/calculators/CalculatorPageLayout";
import { UnitConverter } from "@/components/calculators/everyday/UnitConverter";
import { buildCalculatorMetadata } from "@/lib/seo/metadata";

export const metadata = buildCalculatorMetadata("unit-converter");

export default function UnitConverterPage() {
  return (
    <CalculatorPageLayout slug="unit-converter">
      <UnitConverter />
    </CalculatorPageLayout>
  );
}
