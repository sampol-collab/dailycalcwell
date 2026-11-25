import { EVERYDAY_GUIDES } from "./everyday-guides";
import { HEALTH_GUIDES } from "./health-guides";
import { CalculatorGuide } from "./types";

export const CALCULATOR_GUIDES: Record<string, CalculatorGuide> = {
  ...EVERYDAY_GUIDES,
  ...HEALTH_GUIDES,
};

export function getCalculatorGuide(slug: string): CalculatorGuide {
  const guide = CALCULATOR_GUIDES[slug];
  if (!guide) {
    throw new Error(`Missing guide content for calculator: ${slug}`);
  }
  return guide;
}

export type { CalculatorGuide, GuideReference } from "./types";
