import { CalculatorGuide } from "./types";

export const EVERYDAY_GUIDES: Record<string, CalculatorGuide> = {
  "percentage-calculator": {
    intro:
      "Percentages express a part relative to 100 and appear everywhere from retail sales taxes in the United States and GST invoices in India to exam grades and salary increments. This calculator handles six common percentage questions in one clean workspace.",
    resultExplanation:
      "Depending on your selected mode, the primary figure shows either the resulting numerical value, the percentage share, or the signed percentage change. Secondary details display the exact amount added or subtracted so you can audit every step.",
    formulaTitle: "Core Percentage Formulas",
    formulas: [
      "X% of Y = (X / 100) × Y",
      "X as a % of Y = (X / Y) × 100",
      "Percentage Increase = Original + (Original × Rate / 100)",
      "Percentage Decrease = Original − (Original × Rate / 100)",
      "Percentage Change = ((New − Old) / |Old|) × 100",
      "Percentage Difference = (|A − B| / ((|A| + |B|) / 2)) × 100",
    ],
    stepByStep: [
      "Identify whether you need a share of a total, a comparison between two symmetric values (percentage difference), or a directional shift from an initial baseline (percentage change).",
      "Convert any percentage rate into a decimal by dividing by 100.",
      "Multiply or divide according to the target formula and round only at the final step to preserve precision.",
    ],
    workedExample: {
      title: "GST Addition vs. Retail Price Increase",
      scenario:
        "A laptop accessory priced at ₹2,500 in India or $30 in the US increases in price by 18%.",
      calculationSteps: [
        "Convert 18% to decimal form: 18 / 100 = 0.18.",
        "Calculate the increase amount: 2,500 × 0.18 = 450 (or 30 × 0.18 = 5.40).",
        "Add the increase to the base price: 2,500 + 450 = ₹2,950 (or $35.40).",
      ],
      outcome: "The final price after an 18% increase is ₹2,950 (or $35.40).",
    },
    howToUse: [
      "Select one of the six calculation modes from the mode selector.",
      "Enter your numbers, including decimals or negative values if measuring a financial decline.",
      "Review the instant result and copy or share the summary if needed.",
    ],
    assumptionsAndLimitations: [
      "Percentage change is undefined when the starting baseline equals zero because division by zero is not mathematically valid.",
      "Percentage difference uses the midpoint of absolute values and is symmetric; swapping A and B produces the same result, whereas percentage change depends on which number is the original baseline.",
    ],
    faqs: [
      {
        question: "What is the difference between percentage change and percentage difference?",
        answer:
          "Percentage change measures directional movement from an old value to a new value relative to the old value. Percentage difference compares two values symmetrically against their average without assuming either came first.",
      },
      {
        question: "Why does increasing a number by 20% and then decreasing by 20% not return to the original number?",
        answer:
          "The 20% decrease applies to the larger post-increase figure, not the original starting number. For example, 100 increased by 20% becomes 120, and decreasing 120 by 20% removes 24, leaving 96.",
      },
      {
        question: "Can I enter decimal percentages such as 8.25% sales tax or 12.5%?",
        answer:
          "Yes. All inputs accept decimal values and preserve up to four to six decimal places before final formatting.",
      },
    ],
    references: [
      {
        label: "National Institute of Standards and Technology (NIST) – SI Units & Decimal Arithmetic",
        source: "NIST Reference",
        url: "https://www.nist.gov/pml/owm/metric-si/si-units",
      },
    ],
  },

  "average-calculator": {
    intro:
      "An average summarizes a group of numbers into a single representative value. Use this calculator to compute the arithmetic mean, median, minimum, maximum, or a weighted average for grades, monthly expenses, or performance scores.",
    resultExplanation:
      "In Standard mode, the tool outputs the arithmetic mean alongside the median, count, sum, and range. Comparing the mean and median helps reveal whether extreme outliers are pulling your average upward or downward. In Weighted mode, items with higher weights contribute proportionally more to the final score.",
    formulaTitle: "Mean & Weighted Average Formulas",
    formulas: [
      "Arithmetic Mean = (x₁ + x₂ + ... + xₙ) / n",
      "Weighted Average = (w₁x₁ + w₂x₂ + ... + wₙxₙ) / (w₁ + w₂ + ... + wₙ)",
    ],
    stepByStep: [
      "For an arithmetic mean, add all entered values together to obtain the sum.",
      "Divide that sum by the total count of values entered.",
      "For a weighted average, multiply each value by its corresponding weight, sum those products, and divide by the sum of all weights.",
    ],
    workedExample: {
      title: "Weighted Course Grade Calculation",
      scenario:
        "A university student earns 82% on assignments (weight 30%), 76% on a midterm (weight 30%), and 90% on the final exam (weight 40%).",
      calculationSteps: [
        "Multiply each score by its weight: (82 × 30) + (76 × 30) + (90 × 40) = 2,460 + 2,280 + 3,600 = 8,340.",
        "Sum the weights: 30 + 30 + 40 = 100.",
        "Divide weighted sum by total weight: 8,340 / 100 = 83.4.",
      ],
      outcome: "The student's weighted average grade is 83.4%.",
    },
    howToUse: [
      "Choose Arithmetic Mean to add or remove individual number fields, or switch to Weighted Average to pair values with weights.",
      "Enter positive, negative, or decimal numbers in each row.",
      "Use Add Row to expand the list or Remove to delete unused entries.",
    ],
    assumptionsAndLimitations: [
      "Every non-empty field is treated as a valid numerical observation; empty rows are ignored or flagged if fewer than one entry remains.",
      "In Weighted Average mode, the sum of weights must be greater than zero.",
    ],
    faqs: [
      {
        question: "When should I use a weighted average instead of a simple arithmetic mean?",
        answer:
          "Use a weighted average whenever some numbers carry more importance or frequency than others—such as university credit hours, stock portfolio allocations, or survey responses.",
      },
      {
        question: "Do weighted average weights have to add up to 100?",
        answer:
          "No. Weights can be credits, hours, quantities, or percentages of any positive total, because the formula divides by the actual sum of weights.",
      },
    ],
    references: [
      {
        label: "NIST/SEMATECH e-Handbook of Statistical Methods – Measures of Location",
        source: "NIST",
        url: "https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm",
      },
    ],
  },

  "age-calculator": {
    intro:
      "Calculating exact age across months of varying lengths and leap years requires careful calendar arithmetic. This calculator determines your chronological age in years, months, and days from your date of birth to today or any custom target date.",
    resultExplanation:
      "The primary result breaks your age into completed calendar years, completed months since your last birthday anniversary, and remaining days. You also see total days lived, total weeks, and a countdown to your upcoming birthday.",
    formulaTitle: "Calendar Age & Leap-Year Logic",
    formulas: [
      "Completed Years = Target Year − Birth Year (adjusted if birth month/day has not yet occurred)",
      "Remaining Days = Borrowed from the actual days in the preceding calendar month (28, 29, 30, or 31)",
      "Total Days Lived = (Target UTC Midnight − Birth UTC Midnight) / 86,400,000 ms",
    ],
    stepByStep: [
      "Subtract birth year, month, and day from the target date.",
      "If the day difference is negative, borrow the exact number of days in the month immediately preceding the target date.",
      "If the month difference is negative, borrow 12 months from the year count.",
      "Compute total elapsed days across all intervening leap years (years divisible by 4, excluding century years not divisible by 400).",
    ],
    workedExample: {
      title: "Leap-Year Birthday Example",
      scenario:
        "Someone born on February 29, 2000 checks their age on November 24, 2026.",
      calculationSteps: [
        "Years elapsed: 2026 − 2000 = 26 years.",
        "Months from February to November: 8 completed months (Feb 29 to Oct 29).",
        "Days from Oct 29 to Nov 24: 26 days (since October has 31 days: 31 − 29 + 24 = 26).",
      ],
      outcome: "Exact age is 26 years, 8 months, and 26 days.",
    },
    howToUse: [
      "Select your Date of Birth using the calendar input.",
      "Keep the Target Date set to today or choose a past or future date to calculate age on a specific date.",
      "Review exact age, total days lived, and the next birthday countdown.",
    ],
    assumptionsAndLimitations: [
      "Calculations follow the standard Gregorian calendar used in India, the United States, and internationally.",
      "If a person was born on February 29, their birthday in non-leap years is mapped to February 28 for countdown purposes.",
      "Future birth dates relative to the target date are rejected with a clear validation error.",
    ],
    faqs: [
      {
        question: "How does this calculator handle leap years such as 2000 or 2024?",
        answer:
          "Total days lived includes every February 29 between your birth date and target date using standard Gregorian leap-year rules.",
      },
      {
        question: "Why can age in months and days differ slightly from dividing total days by 30?",
        answer:
          "Calendar months vary between 28 and 31 days. This calculator uses exact calendar month boundaries rather than a fixed 30-day approximation.",
      },
    ],
    references: [
      {
        label: "ISO 8601 Date and Time Standard & Gregorian Calendar Rules",
        source: "U.S. Naval Observatory / ISO",
      },
    ],
  },

  "date-calculator": {
    intro:
      "Whether you are calculating a visa validity window, a 90-day notice period, a project deadline, or a warranty expiration date, adding and subtracting mixed calendar units requires accurate month-end and leap-year handling.",
    resultExplanation:
      "The calculator displays the resulting calendar date in long readable format, ISO format (YYYY-MM-DD), and the exact day of the week.",
    formulaTitle: "Gregorian Calendar Offset Order",
    formulas: [
      "Step 1: Target Month/Year = Start Month + (±Years × 12 ± Months), clamping day to month length",
      "Step 2: Final Date = Step 1 Date ± (Weeks × 7 + Days)",
    ],
    stepByStep: [
      "Start with the chosen calendar date.",
      "Add or subtract years and months first, clamping the day if the destination month has fewer days (for instance, January 31 plus 1 month clamps to February 28 or 29).",
      "Add or subtract weeks (multiplied by 7) and individual days to arrive at the final date.",
    ],
    workedExample: {
      title: "Adding 1 Month and 10 Days to a Month-End Date",
      scenario: "Add 1 month and 10 days to January 31, 2024 (a leap year).",
      calculationSteps: [
        "Adding 1 month to January 31, 2024 clamps to February 29, 2024 (because 2024 is a leap year).",
        "Adding 10 days to February 29, 2024 moves into March: March 10, 2024.",
      ],
      outcome: "The resulting date is Sunday, March 10, 2024.",
    },
    howToUse: [
      "Choose a starting date.",
      "Select Add (+) or Subtract (−).",
      "Enter any combination of years, months, weeks, and days (zero is allowed for unused fields).",
    ],
    assumptionsAndLimitations: [
      "Calendar months vary in length (28–31 days), so adding 1 month then 10 days can differ from adding 40 days directly.",
      "All calculations operate at UTC calendar dates to prevent daylight-saving hour shifts from changing the date.",
    ],
    faqs: [
      {
        question: "What happens if I add 1 month to January 31?",
        answer:
          "Because February has 28 days (or 29 in a leap year), the day clamps to the final valid day of February rather than spilling into March.",
      },
      {
        question: "Does the Date Calculator account for leap years automatically?",
        answer:
          "Yes. Century and 4-year leap-year rules are applied automatically whenever February 29 falls within the span.",
      },
    ],
    references: [
      {
        label: "Time and Date Standards – Gregorian Calendar Rules",
        source: "NIST Time and Frequency Division",
        url: "https://www.nist.gov/pml/time-and-frequency-division",
      },
    ],
  },

  "days-between-dates-calculator": {
    intro:
      "Count the exact number of calendar days and full weeks between two dates for rental agreements, travel itineraries, notice periods, academic semesters, or invoice due dates.",
    resultExplanation:
      "You get the exact day count, a breakdown into weeks plus remaining days, and approximate month and year equivalents. Toggling 'Include end date' adds 1 day, which is useful when both the start and end dates are inclusive (such as hotel stays or leave requests).",
    formulaTitle: "Day Difference Formula",
    formulas: [
      "Exclusive Days = |End Date (UTC) − Start Date (UTC)| / 86,400,000",
      "Inclusive Days = Exclusive Days + 1",
      "Weeks & Remainder = floor(Total Days / 7) weeks and (Total Days mod 7) days",
    ],
    stepByStep: [
      "Convert both calendar dates to midnight UTC timestamps so daylight-saving transitions never add or drop an hour.",
      "Take the absolute difference in milliseconds and divide by 86,400,000.",
      "Add 1 day if the end date itself should be counted as part of the period.",
    ],
    workedExample: {
      title: "Counting Inclusive Leave Days",
      scenario:
        "An employee takes leave from Monday, March 2, 2026 through Friday, March 6, 2026 (inclusive).",
      calculationSteps: [
        "Standard difference between March 2 and March 6 is 4 days.",
        "Enabling 'Include end date' adds 1 to count March 2, 3, 4, 5, and 6.",
      ],
      outcome: "Total inclusive duration is 5 days (0 weeks and 5 days).",
    },
    howToUse: [
      "Select the Start Date and End Date.",
      "Check or uncheck 'Include end date (+1 day)' based on whether the closing day counts.",
      "Read the total days, weeks, and approximate calendar equivalents.",
    ],
    assumptionsAndLimitations: [
      "Counts all calendar days including weekends and public holidays; it does not exclude regional bank holidays.",
      "If the end date precedes the start date, the calculator measures the absolute span and notes the reversed order.",
    ],
    faqs: [
      {
        question: "When should I check 'Include end date'?",
        answer:
          "Check it for inclusive ranges such as event durations, paid leave days, or project sprints where work happens on both the first and last date. Leave it unchecked for night stays or elapsed age.",
      },
      {
        question: "Does daylight saving time affect the day count?",
        answer:
          "No. Calculations normalize dates to UTC midnight so 23-hour or 25-hour DST days never skew the day count.",
      },
    ],
    references: [
      {
        label: "ISO 8601 Calendar Date Representation",
        source: "International Organization for Standardization",
      },
    ],
  },

  "discount-calculator": {
    intro:
      "Quickly check how much money you save during sales or clearance events anywhere in the world. Enter the original price and discount percentage to see the exact savings and final price in any of 156 world currencies (including USD, EUR, INR, GBP, BRL, JPY, CAD, AUD, AED, MXN, and more).",
    resultExplanation:
      "The calculator displays the final discounted price prominently alongside the exact monetary discount saved. Choosing any world currency automatically applies native symbols, decimal places (such as 0 decimals for Japanese Yen or 3 decimals for Kuwaiti Dinar), and regional digit grouping.",
    formulaTitle: "Discount & Sale Price Formulas",
    formulas: [
      "Discount Amount = Original Price × (Discount % / 100)",
      "Final Price = Original Price − Discount Amount",
    ],
    stepByStep: [
      "Multiply the listed original price by the discount percentage divided by 100.",
      "Subtract that discount amount from the original price to find the pre-tax sale price.",
    ],
    workedExample: {
      title: "Sale Discount Example (Multi-Currency)",
      scenario: "An item listed at $150 (or €150 / ₹12,000) has a 25% discount.",
      calculationSteps: [
        "Discount amount: 150 × 0.25 = 37.50 (or 12,000 × 0.25 = ₹3,000).",
        "Final price: 150 − 37.50 = 112.50 (or 12,000 − 3,000 = ₹9,000).",
      ],
      outcome: "You pay $112.50 (€112.50 / ₹9,000) and save $37.50 (€37.50 / ₹3,000).",
    },
    howToUse: [
      "Choose a quick-pick currency or search all 156 ISO-4217 world currencies from the currency selector.",
      "Enter the Original Price and the Discount Percentage (0 to 100%).",
      "Read the final price and total discount saved immediately.",
    ],
    assumptionsAndLimitations: [
      "Calculates pre-tax sale prices; VAT, GST, or state sales tax is not automatically added because tax rates vary by country and item.",
      "Supports single percentage discounts up to 100%.",
    ],
    faqs: [
      {
        question: "How do I calculate stacked discounts like 20% off plus an extra 10% off?",
        answer:
          "Apply the first discount (20%) to get the interim price, then enter that interim price as the new original price and apply 10%. Stacked 20% + 10% equals a 28% total discount, not 30%.",
      },
      {
        question: "Does currency selection convert exchange rates?",
        answer:
          "No. Selecting any of the 156 supported world currencies formats prices with that currency's symbol, decimal standard, and grouping without live FX conversion.",
      },
    ],
    references: [
      {
        label: "Consumer Pricing & Percentage Discount Arithmetic",
        source: "Standard Commercial Math",
      },
    ],
  },

  "profit-loss-calculator": {
    intro:
      "Evaluate product pricing, e-commerce margins, or resale outcomes in any of 156 world currencies. Enter your cost price and selling price to see profit or loss, percentage return on cost (markup), and gross profit margin.",
    resultExplanation:
      "The calculator clearly distinguishes between Markup (profit divided by cost price) and Profit Margin (profit divided by selling price)—two metrics frequently confused in retail and accounting.",
    formulaTitle: "Profit, Loss, Margin & Markup Formulas",
    formulas: [
      "Profit or Loss = Selling Price − Cost Price",
      "Markup % (on Cost) = ((Selling Price − Cost Price) / Cost Price) × 100",
      "Profit Margin % (on Revenue) = ((Selling Price − Cost Price) / Selling Price) × 100",
    ],
    stepByStep: [
      "Subtract Cost Price from Selling Price. A positive figure indicates profit; a negative figure indicates a loss.",
      "Divide the difference by Cost Price and multiply by 100 to find the profit/loss percentage (markup).",
      "Divide the profit by Selling Price and multiply by 100 to find the gross profit margin.",
    ],
    workedExample: {
      title: "Retail Product Margin vs. Markup",
      scenario: "A shop buys inventory at 80 ($80 / €80 / ₹800) and sells it for 100 ($100 / €100 / ₹1,000).",
      calculationSteps: [
        "Net Profit = 100 − 80 = $20 (or 1,000 − 800 = ₹200).",
        "Profit % / Markup on Cost = (20 / 80) × 100 = 25%.",
        "Gross Profit Margin = (20 / 100) × 100 = 20%.",
      ],
      outcome: "Profit is $20 (or ₹200), representing a 25% markup and a 20% profit margin.",
    },
    howToUse: [
      "Select any of the 156 supported world currencies from the currency selector.",
      "Enter the Cost Price (must be greater than zero) and Selling Price.",
      "Inspect profit/loss status, percentage on cost, margin, and markup.",
    ],
    assumptionsAndLimitations: [
      "Compares direct unit cost and selling price; shipping fees, marketplace commissions, VAT/GST/sales tax, and overhead must be included in your cost price if you want net margin.",
    ],
    faqs: [
      {
        question: "Why is profit margin always lower than markup for a profitable sale?",
        answer:
          "Because selling price is higher than cost price when you make a profit, dividing the same profit amount by the larger selling price yields a smaller percentage than dividing by cost price.",
      },
      {
        question: "What happens if selling price equals cost price?",
        answer:
          "The result reports Breakeven with zero profit, 0% margin, and 0% markup in your selected currency.",
      },
    ],
    references: [
      {
        label: "U.S. Small Business Administration – Pricing and Profit Margin Concepts",
        source: "SBA Business Guide",
        url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances",
      },
    ],
  },

  "ratio-calculator": {
    intro:
      "Ratios compare quantities proportionally in recipes, concrete mixes, screen aspect ratios, financial splits, and math homework. Simplify multi-number ratios, compare two ratios, or solve for a missing proportion value.",
    resultExplanation:
      "In Simplify mode, every term is divided by the greatest common divisor (GCD). In Solve Missing Value mode, cross-multiplication computes X in A : B = C : X. In Compare mode, both ratios are converted to decimals to verify equivalence.",
    formulaTitle: "Ratio & Proportion Formulas",
    formulas: [
      "Simplified Ratio (A : B : C) = (A / GCD) : (B / GCD) : (C / GCD)",
      "Missing Value in A : B = C : X  ⇒  X = (B × C) / A",
      "Ratio Comparison: compare A / B against C / D",
    ],
    stepByStep: [
      "To simplify, scale any decimals to integers, compute the Greatest Common Divisor of all terms, and divide each term by that GCD.",
      "To solve A : B = C : X, multiply B by C and divide by A.",
      "To compare two ratios A : B and C : D, express each as A ÷ B and C ÷ D.",
    ],
    workedExample: {
      title: "Simplifying a 3-Part Ratio",
      scenario: "Simplify the ratio 12 : 18 : 30.",
      calculationSteps: [
        "Find the greatest common divisor of 12, 18, and 30, which is 6.",
        "Divide every term by 6: 12÷6 = 2, 18÷6 = 3, 30÷6 = 5.",
      ],
      outcome: "The simplified ratio is 2 : 3 : 5.",
    },
    howToUse: [
      "Pick Simplify Multi-Number Ratio, Solve Missing Value, or Compare Two Ratios.",
      "In Simplify mode, add or remove ratio terms as needed (supports 2 or more numbers).",
      "Enter positive numbers and view the simplified or solved result immediately.",
    ],
    assumptionsAndLimitations: [
      "Ratio simplification requires positive non-zero terms.",
      "Decimals with up to six fractional digits are scaled cleanly before finding the greatest common divisor.",
    ],
    faqs: [
      {
        question: "Can I simplify a ratio with three or four numbers?",
        answer:
          "Yes. Use the Add Term button in Simplify mode to include three, four, or more quantities.",
      },
      {
        question: "How do I check if 16:9 and 1920:1080 are equivalent?",
        answer:
          "Use Compare Two Ratios with A=16, B=9 and C=1920, D=1080. Both equal 1.777778, confirming they are equal.",
      },
    ],
    references: [
      {
        label: "Elementary Number Theory – Euclidean Algorithm for Greatest Common Divisor",
        source: "Standard Mathematics",
      },
    ],
  },

  "fraction-calculator": {
    intro:
      "Add, subtract, multiply, or divide two fractions and automatically reduce the answer to its simplest form. Ideal for carpentry measurements in inches, cooking recipes, and classroom math verification.",
    resultExplanation:
      "Results display the simplified improper fraction (or whole integer), an equivalent mixed number when the numerator exceeds the denominator, and the decimal value.",
    formulaTitle: "Fraction Arithmetic Rules",
    formulas: [
      "Addition: (a/b) + (c/d) = (ad + bc) / (bd)",
      "Subtraction: (a/b) − (c/d) = (ad − bc) / (bd)",
      "Multiplication: (a/b) × (c/d) = (ac) / (bd)",
      "Division: (a/b) ÷ (c/d) = (ad) / (bc)",
    ],
    stepByStep: [
      "Apply the arithmetic rule for the selected operator to obtain an unreduced numerator and denominator.",
      "Normalize any negative sign into the numerator.",
      "Divide both numerator and denominator by their Greatest Common Divisor (GCD).",
      "If |numerator| ≥ denominator, convert to a mixed number using integer division.",
    ],
    workedExample: {
      title: "Adding Two Fractions with Different Denominators",
      scenario: "Calculate 3/4 + 5/6.",
      calculationSteps: [
        "Multiply crosswise for numerator: (3 × 6) + (5 × 4) = 18 + 20 = 38.",
        "Multiply denominators: 4 × 6 = 24, giving 38/24.",
        "Divide top and bottom by GCD(38, 24) = 2 to get 19/12.",
        "Convert to mixed number: 1 7/12 (decimal ≈ 1.583333).",
      ],
      outcome: "3/4 + 5/6 = 19/12, or 1 7/12.",
    },
    howToUse: [
      "Enter integer numerators and non-zero integer denominators for both fractions.",
      "Choose Add (+), Subtract (−), Multiply (×), or Divide (÷).",
      "View the simplified fraction, mixed number, and decimal readout.",
    ],
    assumptionsAndLimitations: [
      "Numerators and denominators accept whole integers (positive, negative, or zero for numerators).",
      "Denominators cannot be zero, and dividing by a fraction with numerator zero is blocked.",
    ],
    faqs: [
      {
        question: "Why does the calculator show both 19/12 and 1 7/12?",
        answer:
          "19/12 is the simplified improper fraction useful in algebra, while 1 7/12 is the mixed number useful for physical tape measures and recipes.",
      },
      {
        question: "Can I enter negative fractions?",
        answer:
          "Yes. Enter a minus sign in the numerator (or denominator) and the calculator automatically places the sign in standard form.",
      },
    ],
    references: [
      {
        label: "Fraction Arithmetic & Rational Number Reduction",
        source: "Standard Mathematics",
      },
    ],
  },

  "time-calculator": {
    intro:
      "Add or subtract blocks of hours and minutes without making base-60 arithmetic mistakes. Useful for timesheets, podcast editing, study logs, flight layovers, and workout durations.",
    resultExplanation:
      "The calculator converts both entries into total minutes, performs addition or subtraction, and converts the result back into hours and minutes along with total minutes and day equivalents.",
    formulaTitle: "Base-60 Time Arithmetic",
    formulas: [
      "Total Minutes = (Hours₁ × 60 + Minutes₁) ± (Hours₂ × 60 + Minutes₂)",
      "Output Hours = floor(|Total Minutes| / 60)",
      "Output Minutes = |Total Minutes| mod 60",
    ],
    stepByStep: [
      "Convert each hours-and-minutes pair into minutes by multiplying hours by 60.",
      "Add or subtract the two minute totals.",
      "Divide the absolute minute total by 60 to obtain whole hours and the remainder for minutes.",
    ],
    workedExample: {
      title: "Adding Two Work Sessions",
      scenario: "Add 4 hours 45 minutes and 3 hours 35 minutes.",
      calculationSteps: [
        "First entry in minutes: (4 × 60) + 45 = 285 minutes.",
        "Second entry in minutes: (3 × 60) + 35 = 215 minutes.",
        "Sum: 285 + 215 = 500 minutes.",
        "Convert back: 500 ÷ 60 = 8 hours with 20 minutes remaining.",
      ],
      outcome: "Total time is 8h 20m (500 minutes).",
    },
    howToUse: [
      "Enter non-negative hours and minutes for Time A and Time B.",
      "Select Add (+) or Subtract (−).",
      "Read the formatted hours/minutes, total minutes, and day equivalent.",
    ],
    assumptionsAndLimitations: [
      "Minutes fields accept 0 or higher; values ≥ 60 are automatically normalized into hours.",
      "When subtracting a larger duration from a smaller one, the output clearly displays a negative sign.",
    ],
    faqs: [
      {
        question: "What if I enter 90 minutes directly in the minutes box?",
        answer:
          "The calculator converts all hours and minutes to base minutes first, so 0h 90m is handled accurately as 1h 30m.",
      },
      {
        question: "How can I convert the result to decimal hours for billing?",
        answer:
          "Divide the displayed Total Minutes by 60, or use the Time Duration Calculator when measuring between clock start and end times.",
      },
    ],
    references: [
      {
        label: "Sexagesimal (Base-60) Time Measurement",
        source: "NIST Time Standards",
      },
    ],
  },

  "time-duration-calculator": {
    intro:
      "Determine the exact hours, minutes, and decimal hours between a start time and an end time—including overnight shifts or red-eye flights that cross midnight.",
    resultExplanation:
      "When the end time is earlier on the clock than the start time and overnight mode is enabled, the tool automatically treats the interval as crossing midnight into the next day and labels it as an overnight span.",
    formulaTitle: "Elapsed Clock Duration",
    formulas: [
      "Start Minutes = (Start Hour × 60) + Start Minute",
      "End Minutes = (End Hour × 60) + End Minute",
      "Elapsed = End − Start (plus 1,440 minutes if crossing midnight)",
    ],
    stepByStep: [
      "Convert both 24-hour clock times into minutes since midnight.",
      "Subtract start minutes from end minutes.",
      "If negative and overnight calculation is enabled, add 1,440 minutes (24 hours) to span midnight.",
      "Convert elapsed minutes into hours, minutes, and decimal hours (elapsed ÷ 60).",
    ],
    workedExample: {
      title: "Overnight Shift Duration",
      scenario: "A night shift begins at 22:15 (10:15 PM) and ends at 06:45 (6:45 AM).",
      calculationSteps: [
        "22:15 = 1,335 minutes; 06:45 = 405 minutes.",
        "405 − 1,335 = −930 minutes; add 1,440 for midnight crossover = 510 minutes.",
        "510 minutes = 8 hours 30 minutes (8.50 decimal hours).",
      ],
      outcome: "The overnight duration is 8h 30m (8.5 decimal hours).",
    },
    howToUse: [
      "Pick your Start Time and End Time using the time inputs.",
      "Leave 'Allow overnight interval' enabled for shifts crossing midnight, or disable it to catch same-day input typos.",
      "Read the hours/minutes, decimal hours, and total minutes.",
    ],
    assumptionsAndLimitations: [
      "Measures intervals within a single 24-hour window; multi-day spans should use the Days Between Dates Calculator.",
      "Does not automatically deduct unpaid meal breaks.",
    ],
    faqs: [
      {
        question: "Why does the calculator also display decimal hours?",
        answer:
          "Payroll and freelancing systems multiply hourly rates by decimal hours (for example, 8h 30m = 8.5 hours) rather than hours and minutes.",
      },
      {
        question: "What happens if start time and end time are identical?",
        answer:
          "The duration is 0h 0m (0 minutes). For a full 24-hour shift, use 24 hours in the Time Calculator.",
      },
    ],
    references: [
      {
        label: "U.S. Department of Labor – Decimal Hour Timekeeping Practices",
        source: "DOL Guidance",
      },
    ],
  },

  "unit-converter": {
    intro:
      "Convert effortlessly between metric units used across India and imperial/US customary units used in the United States. Covers Length, Weight & Mass, Temperature, Volume, Speed, and Area.",
    resultExplanation:
      "Conversions use exact international definitions—such as 1 inch = 2.54 cm, 1 pound = 0.45359237 kg, and 1 US gallon = 3.785411784 L—and include a quick Swap button to reverse direction.",
    formulaTitle: "Key Metric–Imperial Exact Constants",
    formulas: [
      "1 inch = 2.54 cm  |  1 foot = 0.3048 m  |  1 mile = 1.609344 km",
      "1 pound (lb) = 0.45359237 kg  |  1 ounce = 28.349523 g",
      "°F = (°C × 9/5) + 32  |  K = °C + 273.15",
      "1 US gallon = 3.785411784 L  |  1 acre = 4,046.856 m²",
    ],
    stepByStep: [
      "Select the measurement category (Length, Weight, Temperature, Volume, Speed, or Area).",
      "Choose your source unit and target unit.",
      "Linear units convert through a standard SI base unit (meter, kilogram, liter, m/s, m²); temperature uses affine offset formulas.",
    ],
    workedExample: {
      title: "Converting Height or Weight Between India and US Standards",
      scenario: "Convert 72 kilograms to pounds, or 100°F to Celsius.",
      calculationSteps: [
        "72 kg ÷ 0.45359237 kg/lb = 158.732829 lb.",
        "(100°F − 32) × 5/9 = 37.7778°C.",
      ],
      outcome: "72 kg equals approximately 158.73 lb, and 100°F equals 37.78°C.",
    },
    howToUse: [
      "Choose one of the six measurement categories.",
      "Enter a numeric value and select From and To units.",
      "Click Swap Units to invert the conversion instantly.",
    ],
    assumptionsAndLimitations: [
      "Volume units use US customary definitions (1 US gallon = 3.7854 L), not UK imperial gallons (4.546 L).",
      "Temperatures below absolute zero (−273.15°C / 0 K) are rejected as physically invalid.",
    ],
    faqs: [
      {
        question: "Are the conversion factors exact or rounded?",
        answer:
          "Base factors follow exact international NIST/SI standards (for example, 1 in = 2.54 cm exact), with output rounded cleanly up to 6 decimal places.",
      },
      {
        question: "Why does US gallon differ from Imperial gallon?",
        answer:
          "The United States uses the 231-cubic-inch US gallon (3.785 L), whereas the older UK imperial gallon is 4.546 L. This tool clearly labels US customary volume units.",
      },
    ],
    references: [
      {
        label: "NIST Handbook 44 – Appendix C: General Tables of Units of Measurement",
        source: "NIST",
        url: "https://www.nist.gov/pml/owm/publications/nist-handbook-44",
      },
    ],
  },
};
