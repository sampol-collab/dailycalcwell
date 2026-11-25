import { CalculatorGuide } from "./types";

export const HEALTH_GUIDES: Record<string, CalculatorGuide> = {
  "bmi-calculator": {
    intro:
      "Body Mass Index (BMI) is a widely used population screening ratio comparing weight to height squared. Use this tool with either metric units (kilograms and centimetres) or imperial units (pounds, feet, and inches) to check your adult BMI number and standard category.",
    resultExplanation:
      "The calculator outputs your numeric BMI, its standard adult WHO/CDC weight category (Underweight below 18.5, Normal weight 18.5–24.9, Overweight 25.0–29.9, Obesity 30.0+), and the corresponding weight range for your height. Remember that BMI is an initial screening measure—not a clinical diagnosis of body fatness or health.",
    formulaTitle: "BMI Formula (Metric & Imperial)",
    formulas: [
      "Metric: BMI = Weight (kg) / [Height (m)]²",
      "Imperial: BMI = 703 × Weight (lb) / [Height (in)]²",
    ],
    stepByStep: [
      "Convert height to metres (cm ÷ 100) or total inches (feet × 12 + inches).",
      "Square the height value.",
      "Divide weight by height squared (multiplying by 703 if using pounds and inches).",
      "Compare the result against standard adult WHO/CDC cutoffs.",
    ],
    workedExample: {
      title: "Metric & Imperial BMI Examples",
      scenario:
        "Adult A is 172 cm tall and weighs 70 kg. Adult B is 5 ft 8 in (68 in) tall and weighs 160 lb.",
      calculationSteps: [
        "Adult A: 70 ÷ (1.72 × 1.72) = 70 ÷ 2.9584 = 23.7 (Normal weight).",
        "Adult B: 703 × 160 ÷ (68 × 68) = 112,480 ÷ 4,624 = 24.3 (Normal weight).",
      ],
      outcome: "Adult A has a BMI of 23.7 and Adult B has a BMI of 24.3.",
    },
    howToUse: [
      "Toggle between Metric (kg / cm) and Imperial (lb / ft + in).",
      "Enter your height and current body weight.",
      "Review your BMI score, standard adult category, and healthy BMI weight range.",
    ],
    assumptionsAndLimitations: [
      "Adult BMI vs. Child BMI: Standard adult cutoffs (18.5 / 25 / 30) apply only to adults aged 20 and older. Children and teens (ages 2–19) require age- and sex-specific BMI-for-age percentile charts rather than fixed adult thresholds.",
      "BMI does not directly measure body fat, muscle mass, bone density, or visceral fat distribution; muscular athletes can score in the overweight range despite low body fat.",
      "Health organizations in India and across Asia note that metabolic risk can occur at lower BMI thresholds (for example, ≥23 kg/m² in Asian-specific clinical guidelines) than standard global cutoffs.",
    ],
    medicalDisclaimer:
      "BMI is a general screening indicator and is not a diagnosis of health, body composition, or disease risk. Consult a qualified physician or registered healthcare provider for personalized medical evaluation.",
    faqs: [
      {
        question: "Can I use this BMI calculator for children or teenagers?",
        answer:
          "No. While the mathematical BMI ratio uses the same formula, children and teens aged 2 to 19 must be evaluated against pediatric age- and sex-specific percentile growth charts, not adult cutoffs.",
      },
      {
        question: "Why do Indian and Asian guidelines sometimes cite a lower BMI cutoff?",
        answer:
          "Consensus guidelines for Asian Indian adults note higher abdominal fat and cardiometabolic risk at lower BMI levels (often flagging overweight at 23.0–24.9 kg/m²), though this tool displays the standard global WHO/CDC adult categories for universal reference.",
      },
      {
        question: "Does BMI distinguish between muscle and fat?",
        answer:
          "No. BMI measures total weight relative to height without separating lean muscle from adipose tissue. Consider pairing it with waist circumference or our Body Fat Calculator.",
      },
    ],
    references: [
      {
        label: "CDC – About Adult BMI & Screening Limitations",
        source: "Centers for Disease Control and Prevention",
        url: "https://www.cdc.gov/bmi/adult-calculator/index.html",
      },
      {
        label: "WHO – Obesity and Overweight Global Adult Classifications",
        source: "World Health Organization",
        url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
      },
    ],
  },

  "bmr-calculator": {
    intro:
      "Basal Metabolic Rate (BMR) estimates the minimum calories your body uses each day at complete rest to sustain breathing, circulation, temperature regulation, and cellular repair. This calculator implements the Mifflin-St Jeor equation in metric or imperial units.",
    resultExplanation:
      "Your BMR is reported in kilocalories (kcal) per day. Because almost nobody remains completely motionless all day, BMR is only your resting baseline; multiply it by an activity factor in our TDEE Calculator to estimate total daily energy burn.",
    formulaTitle: "Mifflin-St Jeor BMR Equation (1990)",
    formulas: [
      "Men: BMR = (10 × weight in kg) + (6.25 × height in cm) − (5 × age) + 5",
      "Women: BMR = (10 × weight in kg) + (6.25 × height in cm) − (5 × age) − 161",
    ],
    stepByStep: [
      "Convert height to centimetres and weight to kilograms if entered in imperial units.",
      "Compute (10 × weight) + (6.25 × height) − (5 × age).",
      "Add +5 for male or subtract 161 for female as specified by the Mifflin-St Jeor equation.",
    ],
    workedExample: {
      title: "Mifflin-St Jeor Calculation",
      scenario: "A 30-year-old woman who is 165 cm tall and weighs 62 kg.",
      calculationSteps: [
        "10 × 62 = 620.",
        "6.25 × 165 = 1,031.25.",
        "5 × 30 = 150.",
        "620 + 1,031.25 − 150 − 161 = 1,340.25 kcal/day.",
      ],
      outcome: "Estimated BMR is approximately 1,340 kcal/day.",
    },
    howToUse: [
      "Choose Metric or Imperial units.",
      "Select the sex constant used by the Mifflin-St Jeor equation, then enter age, height, and weight.",
      "Use the resulting BMR with our TDEE or Calorie Calculator to estimate daily energy intake.",
    ],
    assumptionsAndLimitations: [
      "Predictive equations like Mifflin-St Jeor are statistical averages that can vary by ±10% or more from indirect calorimetry measurements.",
      "The formula does not directly account for lean muscle mass, thyroid conditions, pregnancy, lactation, or acute illness.",
      "The sex input selects the biological constant (+5 vs −161) established in the original 1990 study.",
    ],
    medicalDisclaimer:
      "BMR figures are mathematical estimates for educational planning, not a medical assessment. Never restrict daily food intake below your BMR without clinical supervision.",
    faqs: [
      {
        question: "Why does this calculator use the Mifflin-St Jeor formula instead of Harris-Benedict?",
        answer:
          "Systematic reviews by the Academy of Nutrition and Dietetics found Mifflin-St Jeor to be more accurate across modern populations than the older 1919 Harris-Benedict equation.",
      },
      {
        question: "Should I eat exactly my BMR calories to lose weight?",
        answer:
          "Generally no. Your body needs additional energy for everyday movement and digestion. Use TDEE to estimate total burn before applying a moderate, sustainable adjustment.",
      },
    ],
    references: [
      {
        label: "Mifflin MD, St Jeor ST et al. (1990) – A new predictive equation for resting energy expenditure",
        source: "American Journal of Clinical Nutrition / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
      },
    ],
  },

  "tdee-calculator": {
    intro:
      "Total Daily Energy Expenditure (TDEE) estimates how many calories your body burns over 24 hours by combining your resting Basal Metabolic Rate (BMR) with daily physical movement and structured exercise.",
    resultExplanation:
      "The primary output shows your estimated maintenance calories—the daily intake that roughly maintains current body weight—alongside your underlying Mifflin-St Jeor BMR and selected activity multiplier.",
    formulaTitle: "TDEE Estimation Formula",
    formulas: [
      "TDEE = BMR (Mifflin-St Jeor) × Activity Multiplier",
      "Multipliers: Sedentary 1.2 · Light 1.375 · Moderate 1.55 · Very Active 1.725 · Extra Active 1.9",
    ],
    stepByStep: [
      "Calculate BMR using age, sex constant, height, and weight.",
      "Select the activity tier that best reflects your average week (not just your most active day).",
      "Multiply BMR by the activity factor to estimate maintenance energy expenditure.",
    ],
    workedExample: {
      title: "Moderately Active Adult TDEE",
      scenario:
        "A 32-year-old man (178 cm, 78 kg) exercises moderately 4 days per week (1.55 multiplier).",
      calculationSteps: [
        "BMR = (10 × 78) + (6.25 × 178) − (5 × 32) + 5 = 780 + 1,112.5 − 160 + 5 = 1,738 kcal/day.",
        "TDEE = 1,738 × 1.55 = 2,693 kcal/day.",
      ],
      outcome: "Estimated maintenance TDEE is approximately 2,693 kcal/day.",
    },
    howToUse: [
      "Select Metric or Imperial units and enter your body metrics.",
      "Choose your realistic average weekly activity level.",
      "Review estimated BMR and maintenance TDEE.",
    ],
    assumptionsAndLimitations: [
      "People often overestimate activity levels; if you work a desk job and walk 30 minutes a few times a week, Lightly Active (1.375) is usually closer than Moderately Active.",
      "TDEE is an initial estimate. Monitoring weight trends over 2–4 weeks provides far better personal calibration.",
    ],
    medicalDisclaimer:
      "TDEE estimates are informational approximations and do not account for metabolic disorders, medications, pregnancy, or breastfeeding.",
    faqs: [
      {
        question: "Which activity level should a desk worker who goes to the gym 3 times a week choose?",
        answer:
          "Most desk workers who train 2–3 times weekly fit best in Lightly Active (1.375) or Moderately Active (1.55), depending on daily step counts outside the gym.",
      },
      {
        question: "What is the difference between BMR and TDEE?",
        answer:
          "BMR estimates calories burned at complete rest, whereas TDEE adds calories burned through walking, work, digestion, and exercise.",
      },
    ],
    references: [
      {
        label: "NIH National Heart, Lung, and Blood Institute – Aim for a Healthy Weight",
        source: "NIH NHLBI",
        url: "https://www.nhlbi.nih.gov/health/educational/lose_wt/index.htm",
      },
    ],
  },

  "calorie-calculator": {
    intro:
      "Estimate your daily calorie requirements whether your goal is maintaining weight, gradual weight reduction, or steady weight gain. Built on the Mifflin-St Jeor equation and standard activity multipliers with conservative safety floors.",
    resultExplanation:
      "You will see both your estimated maintenance calories (TDEE) and your goal-adjusted daily calorie estimate. To discourage unsafe crash dieting, weight-loss targets never drop below standard non-clinical floors (1,200 kcal for women, 1,500 kcal for men) without flagging a clear note.",
    formulaTitle: "Goal-Adjusted Calorie Estimate",
    formulas: [
      "Maintenance = Mifflin-St Jeor BMR × Activity Multiplier",
      "Mild Loss / Loss = Maintenance − 250 or −500 kcal/day (floored at 1,200 / 1,500 kcal)",
      "Mild Gain / Gain = Maintenance + 250 or +500 kcal/day",
    ],
    stepByStep: [
      "Compute BMR from age, sex factor, height, and weight.",
      "Multiply by your weekly activity factor to establish maintenance calories.",
      "Apply a moderate daily energy adjustment (+/− 250 or +/− 500 kcal) matching your selected pace.",
    ],
    workedExample: {
      title: "Moderate Weight-Loss Target",
      scenario:
        "An adult with an estimated TDEE of 2,200 kcal/day selects a steady weight-loss goal (−500 kcal/day).",
      calculationSteps: [
        "Maintenance calories = 2,200 kcal/day.",
        "Goal adjustment = 2,200 − 500 = 1,700 kcal/day.",
      ],
      outcome: "Estimated daily target is 1,700 kcal/day.",
    },
    howToUse: [
      "Choose Metric or Imperial units and enter age, sex constant, height, and weight.",
      "Select your weekly activity level and weight goal.",
      "Review both maintenance calories and the goal-adjusted estimate.",
    ],
    assumptionsAndLimitations: [
      "Calorie adjustments are simplified averages; real weight changes fluctuate with water balance, hormonal cycles, and metabolic adaptation.",
      "Very low-calorie diets (<1,200 kcal for women or <1,500 kcal for men) carry nutritional deficiency risks and require direct medical supervision.",
    ],
    medicalDisclaimer:
      "This calculator provides general educational estimates only and is not a clinical nutrition prescription. Speak with a doctor or registered dietitian before making major dietary changes, especially if pregnant, nursing, or managing a health condition.",
    faqs: [
      {
        question: "Why does the calculator stop reducing calories below 1,200 or 1,500 kcal?",
        answer:
          "Public health guidance generally advises against dropping below these thresholds without medical oversight because obtaining essential vitamins, minerals, and protein becomes difficult.",
      },
      {
        question: "How accurate are online calorie calculators?",
        answer:
          "Equation-based estimates typically get within 10–15% for most adults. Treat the output as a starting benchmark rather than an exact guarantee.",
      },
    ],
    references: [
      {
        label: "USDA & HHS Dietary Guidelines for Americans (2020–2025)",
        source: "DietaryGuidelines.gov",
        url: "https://www.dietaryguidelines.gov/",
      },
    ],
  },

  "ideal-weight-calculator": {
    intro:
      "Historically, clinicians developed several height-based formulas to estimate reference body weights for medication dosing and general screening. This calculator compares four recognized formulas—Devine, Robinson, Miller, and Hamwi—alongside the broad healthy BMI weight range.",
    resultExplanation:
      "Because different formulas yield noticeably different numbers and cannot measure muscle mass or frame size, results are presented side by side as reference benchmarks rather than a single rigid target.",
    formulaTitle: "Recognized Reference Weight Formulas",
    formulas: [
      "Devine (1974): Male 50 + 2.3 kg/in over 5 ft  |  Female 45.5 + 2.3 kg/in over 5 ft",
      "Robinson (1983): Male 52 + 1.9 kg/in over 5 ft  |  Female 49 + 1.7 kg/in over 5 ft",
      "Miller (1983): Male 56.2 + 1.41 kg/in over 5 ft  |  Female 53.1 + 1.36 kg/in over 5 ft",
      "Hamwi (1964): Male 48 + 2.7 kg/in over 5 ft  |  Female 45.5 + 2.2 kg/in over 5 ft",
    ],
    stepByStep: [
      "Convert your height into total inches and calculate inches above 60 inches (5 feet).",
      "Apply each formula's base weight plus per-inch increment.",
      "Compare those point estimates with the broader weight span corresponding to BMI 18.5–24.9.",
    ],
    workedExample: {
      title: "Comparing Formulas at 5 ft 10 in (177.8 cm)",
      scenario: "Adult male at 70 inches tall (10 inches over 5 feet).",
      calculationSteps: [
        "Devine: 50 + (2.3 × 10) = 73.0 kg (160.9 lb).",
        "Robinson: 52 + (1.9 × 10) = 71.0 kg (156.5 lb).",
        "Miller: 56.2 + (1.41 × 10) = 70.3 kg (155.0 lb).",
        "Healthy BMI Range (18.5–24.9): 58.5–78.7 kg (129–173.5 lb).",
      ],
      outcome: "Formula estimates cluster around 70–75 kg inside a much wider 58.5–78.7 kg healthy BMI band.",
    },
    howToUse: [
      "Select Metric (cm) or Imperial (ft/in) and select the formula sex constant.",
      "Enter your height (120–240 cm).",
      "Review all four formula estimates alongside the broader healthy BMI range in both kg and lb.",
    ],
    assumptionsAndLimitations: [
      "There is no single 'ideal weight' for every person of a given height. Bone density, athletic muscle mass, age, and ethnicity all affect healthy body weight.",
      "These historical formulas were originally created for clinical drug dosing and extrapolate poorly below 5 feet (152.4 cm).",
    ],
    medicalDisclaimer:
      "Displayed weights are historical formula references, not medical recommendations or targets. Consult a healthcare professional to discuss a healthy weight range for your individual build.",
    faqs: [
      {
        question: "Why do the four ideal weight formulas give different answers?",
        answer:
          "Each formula was derived from different reference cohorts between 1964 and 1983. The wide healthy BMI span usually gives more realistic context than any single equation.",
      },
      {
        question: "Is the Devine formula a medical diagnosis?",
        answer:
          "No. It was originally published to assist pharmacists in calculating creatinine clearance and medication dosages.",
      },
    ],
    references: [
      {
        label: "Pai MP, Paloucek FP (2000) – The Origin of the 'Ideal' Body Weight Equations",
        source: "Annals of Pharmacotherapy / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/11009138/",
      },
    ],
  },

  "body-fat-calculator": {
    intro:
      "Estimate adult body fat percentage using the U.S. Navy circumference method. Unlike BMI, which only considers total weight and height, circumference equations use tape measurements at the waist, neck, and (for women) hips to approximate adipose tissue.",
    resultExplanation:
      "The calculator displays estimated body fat percentage, a general reference category note, and—when body weight is provided—estimated fat mass and lean body mass in kg and lb.",
    formulaTitle: "U.S. Navy Body Fat Equations (Logarithmic)",
    formulas: [
      "Men: %BF = 495 / (1.0324 − 0.19077 × log₁₀(waist − neck) + 0.15456 × log₁₀(height)) − 450",
      "Women: %BF = 495 / (1.29579 − 0.35004 × log₁₀(waist + hip − neck) + 0.22100 × log₁₀(height)) − 450",
    ],
    stepByStep: [
      "Measure height without shoes, neck just below the larynx, waist at the navel (men) or narrowest point (women), and hips at the widest point (women).",
      "Convert all measurements to centimetres if entered in inches.",
      "Apply the base-10 logarithmic U.S. Navy equation to estimate body fat percentage.",
    ],
    workedExample: {
      title: "Male Navy Body Fat Estimate",
      scenario: "Height 178 cm, neck 38 cm, waist 86 cm, weight 76 kg.",
      calculationSteps: [
        "Waist − Neck = 86 − 38 = 48 cm.",
        "Denominator = 1.0324 − 0.19077 × log₁₀(48) + 0.15456 × log₁₀(178) ≈ 1.0598.",
        "% Body Fat = (495 / 1.0598) − 450 ≈ 17.1%.",
      ],
      outcome: "Estimated body fat is 17.1% (approx. 13.0 kg fat mass and 63.0 kg lean mass).",
    },
    howToUse: [
      "Select Metric (cm/kg) or Imperial (in/lb) units.",
      "Choose male or female equation inputs and enter tape measurements.",
      "Optionally enter weight to see estimated fat mass and lean mass.",
    ],
    assumptionsAndLimitations: [
      "Circumference equations have an error margin of roughly ±3% to ±5% compared with DEXA scans.",
      "Tape tension, posture, breathing, and inconsistent anatomical landmarks significantly affect repeatability.",
    ],
    medicalDisclaimer:
      "Circumference-based body fat calculations are rough fitness estimates, not medical body composition diagnostics like DEXA or hydrostatic weighing.",
    faqs: [
      {
        question: "Where exactly should I measure my waist for the Navy formula?",
        answer:
          "For men, measure horizontally at the level of the navel (belly button) after a normal exhale without pulling the tape tight. For women, measure at the narrowest natural waist.",
      },
      {
        question: "Why is body fat percentage sometimes more informative than BMI?",
        answer:
          "Two people with the same BMI can carry vastly different amounts of muscle vs. fat. Circumference tracking helps monitor waist changes even when scale weight stays steady.",
      },
    ],
    references: [
      {
        label: "Hodgdon JA & Beckett MB – Prediction of percent body fat for U.S. Navy men and women",
        source: "Naval Health Research Center",
      },
    ],
  },

  "protein-calculator": {
    intro:
      "Protein supports muscle repair, immune function, and satiety. This calculator provides an evidence-informed daily protein range in grams based on your body weight in kilograms or pounds and your general activity level.",
    resultExplanation:
      "Rather than a single rigid figure, the calculator presents a practical minimum-to-maximum daily gram range and midpoint based on widely cited sports and general nutrition guidelines.",
    formulaTitle: "Body-Weight Protein Range Method",
    formulas: [
      "General Adult Baseline: 0.8–1.0 g per kg of body weight",
      "Active Fitness: 1.2–1.5 g/kg  |  Endurance: 1.2–1.6 g/kg  |  Strength Training: 1.6–2.0 g/kg",
    ],
    stepByStep: [
      "Convert body weight from pounds to kilograms if needed (lb × 0.4536).",
      "Multiply weight in kg by the lower and upper factors for your selected activity goal.",
    ],
    workedExample: {
      title: "Active Adult Protein Range",
      scenario: "A 70 kg (154 lb) adult who runs and trains regularly selects Active Fitness (1.2–1.5 g/kg).",
      calculationSteps: [
        "Lower bound: 70 × 1.2 = 84 g/day.",
        "Upper bound: 70 × 1.5 = 105 g/day.",
      ],
      outcome: "Estimated daily protein range is 84–105 g/day (midpoint 95 g).",
    },
    howToUse: [
      "Choose Metric (kg) or Imperial (lb) and enter your body weight.",
      "Select the activity or fitness goal closest to your routine.",
      "Review your estimated daily gram range.",
    ],
    assumptionsAndLimitations: [
      "People with kidney disease, liver conditions, or specialized medical diets should follow clinician-prescribed protein targets rather than general fitness multipliers.",
      "For individuals with high body fat percentages, protein multipliers applied to total body weight may overestimate needs compared with lean-mass-adjusted estimates.",
    ],
    medicalDisclaimer:
      "Protein ranges shown are general educational guidelines, not individualized medical nutrition therapy. Consult a healthcare professional or registered dietitian if you have kidney or metabolic conditions.",
    faqs: [
      {
        question: "What is the standard Recommended Dietary Allowance (RDA) for protein?",
        answer:
          "The general baseline RDA for sedentary adults is 0.8 grams per kilogram of body weight per day, intended to prevent deficiency rather than maximize athletic recovery.",
      },
      {
        question: "Does plant-based vs. animal protein change the total grams?",
        answer:
          "The gram target remains similar, though people relying solely on plant sources often spread varied legumes, soy, grains, and nuts across meals to cover all essential amino acids.",
      },
    ],
    references: [
      {
        label: "National Academies – Dietary Reference Intakes for Protein",
        source: "National Academies Press",
        url: "https://nap.nationalacademies.org/",
      },
    ],
  },

  "water-intake-calculator": {
    intro:
      "Daily fluid needs vary considerably between a cool office day in Seattle and a humid summer afternoon in Delhi or Phoenix. This tool provides a baseline daily hydration estimate adjusted for body weight, exercise duration, and climate.",
    resultExplanation:
      "Your estimate is shown in liters, milliliters, US fluid ounces, and 8-ounce cups so it is easy to track with any bottle size used in India or the United States.",
    formulaTitle: "Weight & Activity Hydration Heuristic",
    formulas: [
      "Base Fluid (mL) = Body Weight (kg) × 33 mL",
      "Exercise Addition = (Exercise Minutes / 30) × 350 mL",
      "Warm / Humid Climate Addition = +300 mL",
    ],
    stepByStep: [
      "Convert body weight to kilograms if entered in pounds.",
      "Multiply kg by 33 mL to establish a general baseline.",
      "Add 350 mL per 30 minutes of daily exercise and 300 mL if living or working in a warm climate.",
    ],
    workedExample: {
      title: "Warm-Climate Hydration Estimate",
      scenario: "A 68 kg (150 lb) adult exercises 45 minutes in a warm climate.",
      calculationSteps: [
        "Baseline: 68 × 33 = 2,244 mL.",
        "Exercise addition: (45 ÷ 30) × 350 = 525 mL.",
        "Warm climate addition: +300 mL.",
        "Total: 2,244 + 525 + 300 = 3,069 mL ≈ 3.07 L (104 fl oz).",
      ],
      outcome: "General hydration estimate is approximately 3.07 liters (104 fl oz) per day.",
    },
    howToUse: [
      "Select Metric (kg) or Imperial (lb) and enter your weight.",
      "Enter average daily exercise minutes and select Temperate or Warm/Humid climate.",
      "Check your daily total in liters, milliliters, fluid ounces, and 8-oz cups.",
    ],
    assumptionsAndLimitations: [
      "Approximately 20% of daily fluid intake typically comes from water-rich foods (fruits, vegetables, soups, curries), while the rest comes from beverages.",
      "Individual hydration needs change during fever, illness, pregnancy, breastfeeding, high-altitude travel, or kidney/heart conditions.",
    ],
    medicalDisclaimer:
      "This calculation provides a general wellness estimate and is not a medical prescription. Individuals on fluid-restricted diets (for heart or kidney conditions) must follow their doctor's specific limits.",
    faqs: [
      {
        question: "Do tea, coffee, and milk count toward daily hydration?",
        answer:
          "Yes, non-alcoholic beverages and water-rich foods contribute to total fluid intake, though plain water remains the primary calorie-free choice.",
      },
      {
        question: "Is drinking too much water dangerous?",
        answer:
          "Yes. Drinking excessive water rapidly—especially during endurance sports without electrolytes—can dilute blood sodium levels (hyponatremia). Listen to thirst cues and check pale-yellow urine color.",
      },
    ],
    references: [
      {
        label: "National Academies – Dietary Reference Intakes for Water",
        source: "National Academies of Sciences",
        url: "https://www.nationalacademies.org/",
      },
    ],
  },

  "pregnancy-weeks-to-months": {
    intro:
      "Healthcare providers measure pregnancy in weeks from the first day of the last menstrual period (LMP), whereas family and friends usually ask how many months along you are. Convert exact pregnancy weeks and days into an approximate month and trimester here.",
    resultExplanation:
      "Because an average calendar month is ~30.44 days (about 4.33 weeks) rather than exactly 4 weeks, a 40-week full-term pregnancy spans roughly 9 calendar months plus a week. That is why 12 weeks equals roughly 3 months, 28 weeks marks the start of the third trimester, and 40 weeks completes month 9.",
    formulaTitle: "40-Week to 9-Month Mapping",
    formulas: [
      "Total Gestational Days = (Weeks × 7) + Days",
      "Approximate Pregnancy Month = min(9, ceil((Weeks + Days/7) / 4.33))",
      "Trimester: 1st (0–13 wks) · 2nd (14–27 wks) · 3rd (28–40+ wks)",
    ],
    stepByStep: [
      "Combine completed weeks and extra days into total gestational weeks.",
      "Divide by 4.33 weeks per average month rather than 4.0 weeks per month (which would wrongly make pregnancy 10 months).",
      "Classify the week into First, Second, or Third Trimester according to clinical obstetrics cutoffs.",
    ],
    workedExample: {
      title: "Converting 24 Weeks and 3 Days",
      scenario: "A patient is 24 weeks and 3 days pregnant.",
      calculationSteps: [
        "Total days = (24 × 7) + 3 = 171 days.",
        "Decimal weeks = 24 + 3/7 ≈ 24.43 weeks.",
        "24.43 ÷ 4.33 ≈ 5.64 → Month 6 (Second Trimester).",
      ],
      outcome: "24 weeks 3 days corresponds to approximately month 6 and the Second Trimester.",
    },
    howToUse: [
      "Enter completed gestational weeks (0 to 42) and additional days (0 to 6).",
      "Read the approximate pregnancy month, trimester, and progress percentage out of 40 weeks.",
    ],
    assumptionsAndLimitations: [
      "Pregnancy months are inherently approximate because calendar months range from 28 to 31 days; clinicians always rely on weeks and days for scheduling tests and monitoring fetal growth.",
      "Never confuse 4-week lunar months (10 × 28 = 280 days) with standard 30–31 day calendar months.",
    ],
    medicalDisclaimer:
      "This conversion is an educational reference. Always rely on your obstetrician, midwife, or prenatal clinic for official gestational age dating.",
    faqs: [
      {
        question: "Why is pregnancy 40 weeks if 40 divided by 4 is 10?",
        answer:
          "Only February has exactly 4 weeks (28 days). Most calendar months have 30 or 31 days (~4.33 weeks), so 40 weeks equals about 9 calendar months and 1 week.",
      },
      {
        question: "When does the second trimester start?",
        answer:
          "Under standard ACOG guidelines, the first trimester runs through 13 weeks 6 days, and the second trimester begins at 14 weeks 0 days.",
      },
    ],
    references: [
      {
        label: "ACOG – How Your Fetus Grows During Pregnancy & Gestational Trimesters",
        source: "American College of Obstetricians and Gynecologists",
        url: "https://www.acog.org/",
      },
    ],
  },

  "pregnancy-due-date-calculator": {
    intro:
      "Estimate your expected due date (EDD), current gestational week and day, and trimester based on the first day of your last menstrual period (LMP) and your typical menstrual cycle length.",
    resultExplanation:
      "Using the standard 280-day (40-week) assumption from LMP for a 28-day cycle—adjusted by the difference if your cycle is shorter or longer than 28 days—the tool calculates an estimated due date and current week count.",
    formulaTitle: "280-Day Clinical Estimation (Naegele's Assumption)",
    formulas: [
      "Estimated Due Date = LMP + 280 days + (Cycle Length − 28 days)",
      "Gestational Age = (Today − LMP) − (Cycle Length − 28 days)",
    ],
    stepByStep: [
      "Start with the first day of your last menstrual period (LMP).",
      "Add 280 days (40 weeks) to reach the baseline due date.",
      "Adjust forward or backward if your regular menstrual cycle is longer or shorter than 28 days.",
    ],
    workedExample: {
      title: "Standard 28-Day Cycle Due Date",
      scenario: "First day of last menstrual period was June 1, 2026 with a 28-day cycle.",
      calculationSteps: [
        "June 1, 2026 + 280 days (40 weeks) = March 8, 2027.",
      ],
      outcome: "Estimated due date is March 8, 2027.",
    },
    howToUse: [
      "Select the first day of your Last Menstrual Period.",
      "Adjust average cycle length (21–35 days, default 28).",
      "Review the estimated due date, current gestational week, and trimester.",
    ],
    assumptionsAndLimitations: [
      "The 280-day estimate assumes ovulation occurred around day 14 of a 28-day cycle; irregular cycles, late ovulation, or hormonal contraception can shift actual conception dates.",
      "Only a small fraction of babies arrive on the exact estimated due date; most full-term births occur between 37 and 42 weeks.",
      "First-trimester ultrasound dating performed by a clinician is generally more accurate than LMP dating alone.",
    ],
    medicalDisclaimer:
      "Due dates generated online are estimates only and cannot replace prenatal care or clinical ultrasound dating. Contact a qualified obstetric provider for confirmed pregnancy dating.",
    faqs: [
      {
        question: "How accurate is an LMP-based due date?",
        answer:
          "It provides a helpful initial estimate when menstrual cycles are regular, but early ultrasound crown-rump length measurements are the clinical gold standard for confirming due dates.",
      },
      {
        question: "Why does the calculation start from my last period instead of conception?",
        answer:
          "Because the exact day of ovulation and fertilization is rarely known with certainty, whereas most patients remember the first day of their last menstrual period.",
      },
    ],
    references: [
      {
        label: "ACOG Committee Opinion – Methods for Estimating the Due Date",
        source: "ACOG",
        url: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date",
      },
    ],
  },

  "pregnancy-calculator": {
    intro:
      "Check how many weeks and days pregnant you are today, view your estimated pregnancy progress percentage, and find your trimester using either your Last Menstrual Period (LMP) or an already-confirmed Estimated Due Date.",
    resultExplanation:
      "Every output—gestational weeks and days, trimester, days remaining, and progress percentage—is clearly labeled as an estimate based on a standard 40-week (280-day) gestational timeline.",
    formulaTitle: "Dual-Method Gestational Age Estimation",
    formulas: [
      "From LMP: Elapsed Days = Today − LMP  |  Due Date = LMP + 280 days",
      "From Due Date: Estimated LMP = Due Date − 280 days  |  Elapsed Days = Today − Estimated LMP",
      "Progress % = (Elapsed Days / 280) × 100",
    ],
    stepByStep: [
      "Choose whether to calculate from your Last Menstrual Period or from an Estimated Due Date given by a clinic.",
      "The calculator computes elapsed gestational days out of a standard 280-day pregnancy.",
      "Elapsed days are converted into completed weeks plus remaining days and mapped to Trimester 1, 2, or 3.",
    ],
    workedExample: {
      title: "Calculating Current Week from a Confirmed Due Date",
      scenario: "An ultrasound-confirmed due date is March 15, 2027, checked on November 24, 2026.",
      calculationSteps: [
        "Estimated LMP baseline = March 15, 2027 − 280 days = June 8, 2026.",
        "Days elapsed from June 8, 2026 to November 24, 2026 = 169 days.",
        "169 ÷ 7 = 24 weeks and 1 day (60.4% progress, Second Trimester).",
      ],
      outcome: "Estimated gestational age is 24 weeks and 1 day.",
    },
    howToUse: [
      "Switch between 'Last Menstrual Period' and 'Estimated Due Date' calculation methods.",
      "Select the relevant date and check against today's date (or a custom check date).",
      "Review estimated weeks/days, progress bar, trimester, and remaining days.",
    ],
    assumptionsAndLimitations: [
      "All dates and progress percentages are mathematical estimates anchored to a 280-day term.",
      "Clinical ultrasound measurements, IVF transfer dates, and individual medical factors may alter official gestational dating.",
    ],
    medicalDisclaimer:
      "Results are strictly informational estimates and do not constitute medical diagnosis or prenatal advice. Always follow guidance from your obstetrician, gynecologist, or midwife.",
    faqs: [
      {
        question: "Which method is better: LMP or Estimated Due Date?",
        answer:
          "If your doctor or midwife has already adjusted your due date after a first-trimester ultrasound, entering that Estimated Due Date usually yields a more consistent week count.",
      },
      {
        question: "What does 100% progress mean?",
        answer:
          "100% represents reaching 40 weeks (280 days). Healthy deliveries commonly occur anywhere between 37 weeks and 41+ weeks.",
      },
    ],
    references: [
      {
        label: "NHS – Due Date & Gestational Weeks Guide",
        source: "UK National Health Service",
        url: "https://www.nhs.uk/pregnancy/finding-out/due-date-calculator/",
      },
    ],
  },

  "ovulation-calculator": {
    intro:
      "Estimate your next menstrual period, likely ovulation date, and approximate fertile window based on the first day of your last menstrual period and your average menstrual cycle length.",
    resultExplanation:
      "Because ovulation typically occurs roughly 14 days before the start of the next menstrual period, subtracting 14 days from the projected next period estimates ovulation, and the preceding 5 days plus ovulation day form the estimated fertile window.",
    formulaTitle: "Calendar Luteal-Phase Estimation",
    formulas: [
      "Estimated Next Period = LMP + Average Cycle Length (days)",
      "Estimated Ovulation Date = Next Period − 14 days",
      "Estimated Fertile Window = [Ovulation − 5 days] through [Ovulation Date]",
    ],
    stepByStep: [
      "Add your average cycle length (for example, 28 or 30 days) to the first day of your last menstrual period to project the next period.",
      "Subtract 14 days (average luteal phase length) to estimate the likely ovulation date.",
      "Count 5 days prior to ovulation through ovulation day to display the approximate 6-day fertile window.",
    ],
    workedExample: {
      title: "30-Day Cycle Ovulation Estimate",
      scenario: "Last period began November 1, 2026 with a regular 30-day cycle.",
      calculationSteps: [
        "Estimated next period = Nov 1 + 30 days = December 1, 2026.",
        "Estimated ovulation = Dec 1 − 14 days = November 17, 2026.",
        "Estimated fertile window = November 12 to November 17, 2026.",
      ],
      outcome: "Estimated ovulation falls around November 17, with a fertile window of November 12–17.",
    },
    howToUse: [
      "Select the first day of your Last Menstrual Period.",
      "Enter your average cycle length between 21 and 45 days.",
      "View estimated ovulation date, fertile window, and projected next period.",
    ],
    assumptionsAndLimitations: [
      "NOT RELIABLE CONTRACEPTION: Calendar-based ovulation estimates are NOT a reliable method of birth control or pregnancy prevention. Ovulation timing shifts frequently due to stress, illness, travel, PCOS, postpartum changes, or natural cycle variation.",
      "Assumes a typical 14-day luteal phase, though normal luteal phases vary from 11 to 17 days.",
    ],
    medicalDisclaimer:
      "This tool provides general calendar estimates only. It cannot guarantee ovulation, fertility, or safe days and MUST NOT be used as contraception. Consult a qualified physician or OB/GYN for fertility or family-planning guidance.",
    faqs: [
      {
        question: "Can I use an ovulation calculator as birth control?",
        answer:
          "No. Calendar-based estimates cannot predict unexpected early or late ovulation and should never be relied upon to prevent pregnancy.",
      },
      {
        question: "What if my menstrual cycles vary from month to month?",
        answer:
          "Calendar formulas lose accuracy when cycles are irregular. Methods such as LH ovulation predictor kits, cervical mucus tracking, or basal body temperature charting—or consulting a clinician—offer better insight.",
      },
    ],
    references: [
      {
        label: "ACOG – Fertility Awareness and Ovulation Basics",
        source: "American College of Obstetricians and Gynecologists",
        url: "https://www.acog.org/womens-health/faqs/evaluating-infertility",
      },
    ],
  },
};
