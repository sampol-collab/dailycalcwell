import { FaqEntry } from "../seo/structured-data";

export interface GuideReference {
  label: string;
  source: string;
  url?: string;
}

export interface CalculatorGuide {
  intro: string;
  resultExplanation: string;
  formulaTitle: string;
  formulas: string[];
  stepByStep: string[];
  workedExample: {
    title: string;
    scenario: string;
    calculationSteps: string[];
    outcome: string;
  };
  howToUse: string[];
  assumptionsAndLimitations: string[];
  medicalDisclaimer?: string;
  faqs: FaqEntry[];
  references: GuideReference[];
}
