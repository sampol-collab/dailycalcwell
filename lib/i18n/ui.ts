import { Locale } from "./config";

export interface UiDictionary {
  siteTagline: string;
  skipToContent: string;
  nav: {
    home: string;
    everyday: string;
    health: string;
    about: string;
    contact: string;
    search: string;
    language: string;
    openMenu: string;
    closeMenu: string;
  };
  search: {
    placeholder: string;
    findButton: string;
    modalTitle: string;
    closeSearch: string;
    noMatchesPrefix: string;
    noMatchesTry: string;
    or: string;
    clearQuery: string;
  };
  footer: {
    blurb: string;
    categoriesHeading: string;
    companyHeading: string;
    legalHeading: string;
    editorialPolicy: string;
    disclaimer: string;
    sitemap: string;
    privacyPolicy: string;
    terms: string;
    cookiePolicy: string;
    cookiePreferences: string;
    xmlSitemap: string;
    copyrightSuffix: string;
    regionReady: string;
  };
  consent: {
    bannerText: string;
    preferences: string;
    necessaryOnly: string;
    acceptAll: string;
    dialogTitle: string;
    dialogSubtitle: string;
    necessaryTitle: string;
    necessaryDesc: string;
    alwaysActive: string;
    analyticsTitle: string;
    analyticsDesc: string;
    adsTitle: string;
    adsDesc: string;
    savePreferences: string;
    closeDialog: string;
  };
  datePicker: {
    selectDate: string;
    today: string;
    prevMonth: string;
    nextMonth: string;
    chooseDate: string;
    months: string[];
    weekdays: string[];
  };
  calculatorShell: {
    calculate: string;
    reset: string;
    copyResult: string;
    copied: string;
    share: string;
    inputError: string;
    copyUnsupported: string;
    shareCopied: string;
    shareUnavailable: string;
  };
  calculatorLayout: {
    editorialTeam: string;
    lastReviewed: string;
    healthNoticeTitle: string;
    understandingResult: string;
    stepByStep: string;
    howToUse: string;
    workedExample: string;
    resultLabel: string;
    assumptionsTitle: string;
    faqTitle: string;
    referencesTitle: string;
    sourceLabel: string;
    reviewedUnderPrefix: string;
    editorialPolicyLink: string;
    localExecutionNote: string;
    relatedCalculators: string;
    popularCalculators: string;
    allPrefix: string;
    backToHome: string;
  };
  home: {
    seoTitle: string;
    seoDescription: string;
    heroTitle: string;
    heroSubtitle: string;
    categoryToolsLabel: string;
    browseEveryday: string;
    browseHealth: string;
    popularHeading: string;
    popularSubtitle: string;
    everydayHeading: string;
    viewAllEveryday: string;
    healthHeading: string;
    viewAllHealth: string;
    recentHeading: string;
    recentSubtitle: string;
    howToUseHeading: string;
    step1Title: string;
    step1Body: string;
    step2Title: string;
    step2Body: string;
    step3Title: string;
    step3Body: string;
    faqHeading: string;
    faqs: { question: string; answer: string }[];
  };
  categories: {
    everyday: {
      name: string;
      seoTitle: string;
      seoDescription: string;
      intro: string;
      sectionHeading: string;
      sectionBody: string;
      crossLinkPrefix: string;
      crossLinkLabel: string;
    };
    health: {
      name: string;
      seoTitle: string;
      seoDescription: string;
      intro: string;
      notice: string;
      sectionHeading: string;
      sectionBody: string;
      crossLinkPrefix: string;
      crossLinkLabel: string;
    };
  };
  pages: {
    about: {
      seoTitle: string;
      seoDescription: string;
      title: string;
      lead: string;
      globalHeading: string;
      globalBody: string;
      transparencyHeading: string;
      transparencyBody: string;
      publisherHeading: string;
      operatedBy: string;
      contactEmail: string;
      location: string;
      readEditorial: string;
      contactUs: string;
    };
    contact: {
      seoTitle: string;
      seoDescription: string;
      title: string;
      subtitle: string;
      detailsHeading: string;
      publisherLabel: string;
      emailLabel: string;
      addressLabel: string;
      noteText: string;
      formName: string;
      formEmail: string;
      formTopic: string;
      formMessage: string;
      formSubmit: string;
      formReset: string;
      formSuccessTitle: string;
      formSuccessBody: string;
      topics: { feedback: string; correction: string; privacy: string; business: string };
      errors: { name: string; email: string; message: string };
    };
    privacy: {
      seoTitle: string;
      seoDescription: string;
      title: string;
      updated: string;
      intro: string;
      sections: { heading: string; body: string }[];
    };
    terms: {
      seoTitle: string;
      seoDescription: string;
      title: string;
      updated: string;
      sections: { heading: string; body: string }[];
    };
    disclaimer: {
      seoTitle: string;
      seoDescription: string;
      title: string;
      updated: string;
      sections: { heading: string; paragraphs: string[] }[];
    };
    editorial: {
      seoTitle: string;
      seoDescription: string;
      title: string;
      bylinePrefix: string;
      sections: { heading: string; body: string }[];
    };
    cookie: {
      seoTitle: string;
      seoDescription: string;
      title: string;
      updated: string;
      intro: string;
      sections: { heading: string; body: string }[];
      manageButton: string;
    };
    sitemap: {
      seoTitle: string;
      seoDescription: string;
      title: string;
      subtitlePrefix: string;
      xmlLinkLabel: string;
      everydayHeading: string;
      healthHeading: string;
      infoHeading: string;
      homepageLabel: string;
      everydayHubLabel: string;
      healthHubLabel: string;
    };
    notFound: {
      codeLabel: string;
      title: string;
      body: string;
      backHome: string;
      browseEveryday: string;
      browseHealth: string;
    };
  };
}

const EN_UI: UiDictionary = {
  siteTagline:
    "Free Online Everyday & Health Calculators for India and the United States",
  skipToContent: "Skip to main content",
  nav: {
    home: "Home",
    everyday: "Everyday Calculators",
    health: "Health Calculators",
    about: "About Us",
    contact: "Contact Us",
    search: "Search",
    language: "Language",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  search: {
    placeholder:
      "Search calculators (e.g. BMI, percentage, pregnancy due date, INR discount)...",
    findButton: "Find",
    modalTitle: "Find a Calculator",
    closeSearch: "Close calculator search",
    noMatchesPrefix: "No calculators matched",
    noMatchesTry: "Try",
    or: "or",
    clearQuery: "Clear search query",
  },
  footer: {
    blurb:
      "Free, fast, privacy-conscious everyday and health calculators built for visitors in India, the United States, and worldwide. Calculations run directly in your browser.",
    categoriesHeading: "Calculator Categories",
    companyHeading: "Company & Trust",
    legalHeading: "Legal & Privacy",
    editorialPolicy: "Editorial Policy",
    disclaimer: "Disclaimer",
    sitemap: "Sitemap",
    privacyPolicy: "Privacy Policy",
    terms: "Terms and Conditions",
    cookiePolicy: "Cookie Policy",
    cookiePreferences: "Cookie Preferences",
    xmlSitemap: "XML Sitemap",
    copyrightSuffix:
      "All rights reserved. Informational estimates only; not medical, financial, or legal advice.",
    regionReady: "Metric & Imperial Units · 150+ World Currencies Ready",
  },
  consent: {
    bannerText:
      "DailyCalcWell uses strictly necessary storage for site preferences. Optional analytics and advertising cookies remain off unless you accept them.",
    preferences: "Preferences",
    necessaryOnly: "Necessary Only",
    acceptAll: "Accept All",
    dialogTitle: "Privacy & Cookie Preferences",
    dialogSubtitle:
      "Manage optional storage and cookies. Calculator inputs are processed locally in your browser and never stored as analytics parameters.",
    necessaryTitle: "Necessary Storage",
    necessaryDesc:
      "Remembers your privacy choices and ensures core page functionality. Always active.",
    alwaysActive: "Always Active",
    analyticsTitle: "Analytics Cookies (GA4)",
    analyticsDesc:
      "Helps measure aggregate page views and calculator usage without collecting personal health figures.",
    adsTitle: "Advertising Cookies (Google AdSense)",
    adsDesc:
      "Supports future Google AdSense display when enabled by the site publisher.",
    savePreferences: "Save Preferences",
    closeDialog: "Close privacy preferences",
  },
  datePicker: {
    selectDate: "Select a date",
    today: "Today",
    prevMonth: "Previous month",
    nextMonth: "Next month",
    chooseDate: "Choose date",
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  },
  calculatorShell: {
    calculate: "Calculate",
    reset: "Reset",
    copyResult: "Copy Result",
    copied: "Copied",
    share: "Share",
    inputError: "Input Error",
    copyUnsupported: "Copy not supported in this browser.",
    shareCopied: "Result & page link copied to clipboard.",
    shareUnavailable: "Sharing is unavailable on this browser.",
  },
  calculatorLayout: {
    editorialTeam: "DailyCalcWell Editorial Team",
    lastReviewed: "Last reviewed",
    healthNoticeTitle: "Important Health & Educational Notice",
    understandingResult: "Understanding Your Result",
    stepByStep: "Step-by-Step Calculation Method",
    howToUse: "How to Use This Calculator",
    workedExample: "Worked Example",
    resultLabel: "Result",
    assumptionsTitle: "Assumptions and Limitations",
    faqTitle: "Frequently Asked Questions",
    referencesTitle: "References & Methodology Sources",
    sourceLabel: "Source",
    reviewedUnderPrefix: "Reviewed under the",
    editorialPolicyLink: "DailyCalcWell Editorial Policy",
    localExecutionNote: "Calculations execute locally in your browser.",
    relatedCalculators: "Related Calculators",
    popularCalculators: "Popular Calculators",
    allPrefix: "All",
    backToHome: "Back to Homepage",
  },
  home: {
    seoTitle: "Free Online Calculators for Everyday Life and Health",
    seoDescription:
      "Use our free online calculators to calculate percentages, averages, age, dates, BMI, daily calorie needs, pregnancy dates and more in metric or imperial units.",
    heroTitle: "Free Online Calculators for Everyday Life and Health",
    heroSubtitle:
      "Use our free online calculators to calculate percentages, averages, age, dates, BMI, daily calorie requirements, pregnancy dates and more. Get quick, accurate and easy-to-understand results in metric or imperial units.",
    categoryToolsLabel: "Category · 12 Tools",
    browseEveryday: "Browse Everyday Calculators",
    browseHealth: "Browse Health Calculators",
    popularHeading: "Popular Calculators",
    popularSubtitle:
      "Most frequently opened tools across everyday math and personal health.",
    everydayHeading: "Everyday Calculators",
    viewAllEveryday: "View All Everyday Tools",
    healthHeading: "Health Calculators",
    viewAllHealth: "View All Health Tools",
    recentHeading: "Recently Added Calculators",
    recentSubtitle:
      "Newly published tools supporting business pricing, shift timing, body composition, and cycle planning.",
    howToUseHeading: "How to Use DailyCalcWell Tools",
    step1Title: "01. Choose Your Units or World Currency",
    step1Body:
      "Designed for visitors worldwide, tools switch cleanly between metric (kg, cm, liters) and imperial (lb, ft/in, fl oz), plus 156 world currencies (USD, EUR, INR, GBP, JPY, BRL, AED, and more).",
    step2Title: "02. Check Formulas & Assumptions",
    step2Body:
      "Every calculator page documents the exact formula, step-by-step arithmetic, a worked example, and key limitations so you understand how each number is produced.",
    step3Title: "03. Copy, Reset, or Share Locally",
    step3Body:
      "All math runs instantaneously in your browser with accessible validation, keyboard controls, one-click result copying, and privacy-respecting sharing.",
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Are all calculators on DailyCalcWell free to use?",
        answer:
          "Yes. Every everyday and health calculator on DailyCalcWell is free to use with no sign-up, account creation, or download required.",
      },
      {
        question: "Do these tools support international units and world currencies?",
        answer:
          "Yes. Health and unit tools support both metric (kg, cm, liters, °C) and imperial (lb, ft/in, fl oz, °F) measurements, and price tools support 156 ISO-4217 world currencies including USD, EUR, INR, GBP, JPY, BRL, CAD, AUD, and AED.",
      },
      {
        question: "Are my personal or health inputs stored on a server?",
        answer:
          "No. Calculations run locally inside your web browser. Personal measurements such as weight, age, or pregnancy dates are not stored in a database or logged as analytics parameters.",
      },
      {
        question: "Can I rely on the health calculators for medical diagnosis?",
        answer:
          "No. Health calculators provide educational estimates based on published formulas such as Mifflin-St Jeor, standard BMI cutoffs, and 280-day gestational averages. Always consult a qualified healthcare professional for medical advice.",
      },
    ],
  },
  categories: {
    everyday: {
      name: "Everyday Calculators",
      seoTitle: "Everyday Calculators – Percentages, Dates, Age & Units",
      seoDescription:
        "Browse free online everyday calculators for percentages, averages, exact age, dates, discounts, profit and loss, ratios, fractions, time and unit conversions.",
      intro:
        "Practical tools for daily math, shopping discounts in 150+ world currencies, business margins, calendar planning, time tracking, and metric-to-imperial conversions.",
      sectionHeading: "Designed for Daily Use Worldwide",
      sectionBody:
        "Whether you are checking a sale discount in USD, EUR, INR, GBP, JPY, or BRL, comparing a retail markup in your local currency, counting inclusive leave days on a calendar, or converting centimetres and kilograms to feet and pounds, each everyday tool runs instantaneously in your browser with full formula transparency.",
      crossLinkPrefix: "Looking for wellness or maternity tools instead? Visit our",
      crossLinkLabel: "Health Calculators category",
    },
    health: {
      name: "Health Calculators",
      seoTitle: "Health Calculators – BMI, BMR, Calories & Pregnancy Tools",
      seoDescription:
        "Use free online health calculators for BMI, BMR, TDEE, daily calories, ideal weight, body fat, protein, hydration, pregnancy dates and ovulation estimates.",
      intro:
        "Evidence-referenced wellness and pregnancy estimation tools supporting both metric (kg, cm) and imperial (lb, ft/in) measurements with clear assumptions.",
      notice:
        "Health calculators provide general educational estimates based on published formulas. They do not diagnose medical conditions, prescribe nutrition plans, or replace advice from a qualified doctor, dietitian, or obstetric clinician.",
      sectionHeading: "Privacy-First Health Calculations",
      sectionBody:
        "All body measurement, calorie, hydration, pregnancy, and cycle calculations execute locally inside your browser. DailyCalcWell does not transmit your personal health inputs to analytics services or store them on a backend server.",
      crossLinkPrefix: "Need everyday math, date, or unit tools? Explore our",
      crossLinkLabel: "Everyday Calculators category",
    },
  },
  pages: {
    about: {
      seoTitle: "About Us – DailyCalcWell Online Calculators",
      seoDescription:
        "Learn about DailyCalcWell, our mission to provide accurate everyday and health calculators worldwide, and our commitment to privacy.",
      title: "About DailyCalcWell",
      lead:
        "DailyCalcWell is an independent online calculator platform focused on two clear areas: Everyday Calculators and Health Calculators. Our goal is to make routine math, date planning, unit conversions, and foundational health estimates straightforward, transparent, and accessible on any device.",
      globalHeading: "Built for Visitors Worldwide",
      globalBody:
        "Users across India, the United States, Europe, and Latin America often encounter calculators locked to a single measurement system or language. DailyCalcWell tools support both metric units (kilograms, centimetres, litres, Celsius) and imperial units (pounds, feet, inches, US fluid ounces, Fahrenheit), as well as Indian Rupees (₹) and US Dollars ($).",
      transparencyHeading: "Transparency & Formula Accuracy",
      transparencyBody:
        "Rather than displaying a black-box result, every calculator page explains the underlying formula, step-by-step calculation logic, a worked example, and key limitations. Health tools reference publicly recognized equations and institutional publications from bodies such as the World Health Organization (WHO), CDC, NIH, and ACOG.",
      publisherHeading: "Publisher Details",
      operatedBy: "Operated by:",
      contactEmail: "Contact Email:",
      location: "Location:",
      readEditorial: "Read Our Editorial Policy",
      contactUs: "Contact Us",
    },
    contact: {
      seoTitle: "Contact Us – DailyCalcWell Feedback & Support",
      seoDescription:
        "Contact DailyCalcWell to report a calculation issue, suggest a new everyday or health tool, or ask a privacy question.",
      title: "Contact Us",
      subtitle:
        "Have feedback on a formula, noticed a bug, or want to ask about our privacy practices? Reach out using the details or contact form below.",
      detailsHeading: "Direct Contact Details",
      publisherLabel: "Publisher",
      emailLabel: "Email",
      addressLabel: "Mailing Address",
      noteText:
        "Note: Replace the bracketed placeholders above with your verified domain email and business details before submitting for Google AdSense review.",
      formName: "Your Name",
      formEmail: "Email Address",
      formTopic: "Topic",
      formMessage: "Message",
      formSubmit: "Send Inquiry",
      formReset: "Reset Form",
      formSuccessTitle: "Message Prepared for Review",
      formSuccessBody:
        "Your inquiry has been validated. Because this site does not store form submissions on a database until an email endpoint is configured by the site owner, please also send urgent inquiries directly to",
      topics: {
        feedback: "Calculator Feedback or Suggestion",
        correction: "Formula or Content Correction",
        privacy: "Privacy / Cookie Question",
        business: "General Inquiry",
      },
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        message: "Please enter a message of at least 10 characters.",
      },
    },
    privacy: {
      seoTitle: "Privacy Policy – DailyCalcWell",
      seoDescription:
        "Read how DailyCalcWell handles calculator inputs locally in your browser, optional analytics, advertising cookies, and your privacy choices.",
      title: "Privacy Policy",
      updated: "Last updated: November 24, 2026",
      intro:
        "This Privacy Policy explains how DailyCalcWell handles information when you visit our website and use our everyday and health calculators.",
      sections: [
        {
          heading: "1. Calculator Inputs Processed Locally",
          body: "All mathematical, date, unit, body-measurement, nutrition, and pregnancy calculations run directly inside your web browser. We do not intentionally store your calculator inputs on a backend database, expose them in page URLs, or transmit them as analytics event parameters.",
        },
        {
          heading: "2. Analytics & Measurement (Optional)",
          body: "When enabled by the site owner and consented to via our Cookie Preferences banner, we may use Google Analytics 4 (GA4) to understand aggregate traffic patterns. GA4 scripts do not load until you accept analytics cookies, and personal health figures are never sent in analytics events.",
        },
        {
          heading: "3. Advertising & Third-Party Cookies",
          body: "After site review and approval, DailyCalcWell may display advertisements served by Google AdSense or similar partners. Third-party vendors, including Google, may use cookies to serve ads based on prior visits. Advertising scripts remain disabled unless enabled by the site publisher and permitted through your cookie consent settings.",
        },
        {
          heading: "4. Server Logs & Hosting Infrastructure",
          body: "Our hosting provider may record standard technical request metadata (such as IP address, browser type, and requested URL) in transient server access logs for security, uptime, and abuse prevention.",
        },
        {
          heading: "5. Your Privacy Choices & Contact",
          body: "You may accept, decline, or update your consent preferences at any time using Cookie Preferences in the website footer. For privacy inquiries, email contact@dailycalcwell.com.",
        },
      ],
    },
    terms: {
      seoTitle: "Terms and Conditions – DailyCalcWell",
      seoDescription:
        "Review the Terms and Conditions governing your use of DailyCalcWell online everyday and health calculators.",
      title: "Terms and Conditions",
      updated: "Last updated: November 24, 2026",
      sections: [
        {
          heading: "1. Acceptance of Terms",
          body: "By accessing or using DailyCalcWell (dailycalcwell.com), you agree to comply with these Terms and Conditions and applicable laws.",
        },
        {
          heading: "2. Informational Use Only",
          body: "All calculators, formulas, and educational guides on this site are provided for general informational and educational purposes only and do not constitute medical, financial, tax, or legal advice.",
        },
        {
          heading: "3. Accuracy & No Warranty",
          body: "While we carefully test standard mathematical and health equations, the website is provided on an 'as is' basis without warranties. Independently verify critical financial, tax, or healthcare calculations.",
        },
        {
          heading: "4. Acceptable Use & Intellectual Property",
          body: "You may use the calculators freely for personal, educational, or internal business reference. You may not scrape, mirror, or redistribute original editorial content.",
        },
        {
          heading: "5. Contact Information",
          body: "Questions about these terms may be sent to contact@dailycalcwell.com.",
        },
      ],
    },
    disclaimer: {
      seoTitle: "Disclaimer – Medical & Financial Notice",
      seoDescription:
        "Read the medical, nutrition, pregnancy, and financial disclaimer for DailyCalcWell online everyday and health calculators.",
      title: "Disclaimer",
      updated: "Last updated: November 24, 2026",
      sections: [
        {
          heading: "1. Not Medical Advice or Clinical Diagnosis",
          paragraphs: [
            "The Health Calculators on DailyCalcWell—including BMI, BMR, TDEE, Calorie, Ideal Weight, Body Fat, Protein, Water Intake, Pregnancy Weeks to Months, Pregnancy Due Date, Pregnancy, and Ovulation calculators—are provided strictly for general informational and educational purposes.",
            "They do not diagnose medical conditions, prescribe nutrition or medical treatment plans, or replace consultation with a licensed physician, registered dietitian, or qualified obstetric/gynecological provider.",
          ],
        },
        {
          heading: "2. Pregnancy & Ovulation Estimate Limitations",
          paragraphs: [
            "Pregnancy due dates and gestational ages are statistical estimates based on standard 280-day calculations and cycle-length assumptions. Actual delivery dates vary, and clinical ultrasound dating may be significantly more accurate. Ovulation and fertile-window estimates are calendar approximations and MUST NOT be used as contraception.",
          ],
        },
        {
          heading: "3. Financial & Commercial Math Notice",
          paragraphs: [
            "Everyday tools such as Discount and Profit & Loss calculators compute standard arithmetic percentages and do not automatically include GST, sales tax, shipping, or accounting rules. Confirm commercial or tax figures with an accountant or official invoice.",
          ],
        },
      ],
    },
    editorial: {
      seoTitle: "Editorial Policy – Formula Verification & Standards",
      seoDescription:
        "Learn how DailyCalcWell verifies formulas, cites reputable health and mathematical sources, and maintains transparent editorial standards.",
      title: "Editorial Policy",
      bylinePrefix: "DailyCalcWell Editorial Team · Last reviewed:",
      sections: [
        {
          heading: "1. Formula Selection & Credible Sources",
          body: "Every calculator published on DailyCalcWell is built around clearly documented mathematical or clinical equations, referencing public institutional publications including the WHO, CDC, NIH, ACOG, National Academies, NHS, and NIST.",
        },
        {
          heading: "2. Transparency of Assumptions & Limitations",
          body: "Statistical equations always carry assumptions and error margins. Every DailyCalcWell tool page lists the formula used, a worked numerical example, and clear limitations.",
        },
        {
          heading: "3. Honest Attribution & Updates",
          body: "Content is prepared and maintained by the DailyCalcWell Editorial Team without fabricated reviewer profiles. Each calculator page displays its last-reviewed date.",
        },
        {
          heading: "4. Corrections & Feedback",
          body: "If you spot an edge case, unit discrepancy, or unclear explanation, notify us via Contact Us. Automated unit tests verify calculation logic before updates deploy.",
        },
      ],
    },
    cookie: {
      seoTitle: "Cookie Policy – Consent & Storage Choices",
      seoDescription:
        "Learn how DailyCalcWell distinguishes strictly necessary storage from optional analytics and advertising cookies, and manage your preferences.",
      title: "Cookie Policy",
      updated: "Last updated: November 24, 2026",
      intro:
        "This Cookie Policy explains the types of cookies and local browser storage used on DailyCalcWell and how you can control them.",
      sections: [
        {
          heading: "1. Strictly Necessary Storage",
          body: "We store your consent preference locally in your browser (under dailycalcwell_consent_v1) so we remember your cookie choice across visits without cross-site tracking.",
        },
        {
          heading: "2. Analytics Cookies (Optional)",
          body: "If Google Analytics 4 is enabled and you opt in, GA4 sets cookies such as _ga to measure aggregate traffic. Analytics scripts stay inactive unless accepted.",
        },
        {
          heading: "3. Advertising Cookies (Optional)",
          body: "Once advertising is enabled following review and approval, Google AdSense may use cookies where permitted by your consent choice.",
        },
      ],
      manageButton: "Manage Cookie Preferences",
    },
    sitemap: {
      seoTitle: "HTML Sitemap – All Calculators & Pages",
      seoDescription:
        "Browse the complete DailyCalcWell directory of all 24 everyday and health calculators, category hubs, and policy pages.",
      title: "Website Sitemap",
      subtitlePrefix:
        "Direct links to every calculator, category hub, and policy page on DailyCalcWell. For search engines, view the",
      xmlLinkLabel: "XML Sitemap",
      everydayHeading: "Everyday Calculators",
      healthHeading: "Health Calculators",
      infoHeading: "Categories & Information",
      homepageLabel: "Homepage",
      everydayHubLabel: "Everyday Calculators Hub",
      healthHubLabel: "Health Calculators Hub",
    },
    notFound: {
      codeLabel: "404 · Page Not Found",
      title: "We could not find that calculator or page.",
      body: "The link may have moved or the URL may contain a typo. Browse our everyday or health calculators below to jump directly to a working tool.",
      backHome: "Back to Homepage",
      browseEveryday: "Browse Everyday Calculators",
      browseHealth: "Browse Health Calculators",
    },
  },
};

const HI_UI: UiDictionary = {
  siteTagline:
    "भारत, अमेरिका और विश्व भर के लिए निःशुल्क दैनिक और स्वास्थ्य कैलकुलेटर",
  skipToContent: "मुख्य सामग्री पर जाएँ",
  nav: {
    home: "होम",
    everyday: "दैनिक कैलकुलेटर",
    health: "स्वास्थ्य कैलकुलेटर",
    about: "हमारे बारे में",
    contact: "संपर्क करें",
    search: "खोजें",
    language: "भाषा",
    openMenu: "नेविगेशन मेनू खोलें",
    closeMenu: "नेविगेशन मेनू बंद करें",
  },
  search: {
    placeholder: "कैलकुलेटर खोजें (जैसे BMI, प्रतिशत, उम्र, गर्भावस्था तिथि, छूट)...",
    findButton: "खोजें",
    modalTitle: "कैलकुलेटर खोजें",
    closeSearch: "खोज बंद करें",
    noMatchesPrefix: "कोई कैलकुलेटर नहीं मिला:",
    noMatchesTry: "कृपया देखें",
    or: "या",
    clearQuery: "खोज साफ़ करें",
  },
  footer: {
    blurb:
      "भारत, अमेरिका और वैश्विक उपयोगकर्ताओं के लिए तेज़, सटीक और गोपनीयता-केंद्रित दैनिक और स्वास्थ्य कैलकुलेटर। सभी गणनाएँ सीधे आपके ब्राउज़र में चलती हैं।",
    categoriesHeading: "कैलकुलेटर श्रेणियाँ",
    companyHeading: "कंपनी और विश्वसनीयता",
    legalHeading: "कानूनी और गोपनीयता",
    editorialPolicy: "संपादकीय नीति",
    disclaimer: "अस्वीकरण",
    sitemap: "साइटमैप",
    privacyPolicy: "गोपनीयता नीति",
    terms: "नियम और शर्तें",
    cookiePolicy: "कुकी नीति",
    cookiePreferences: "कुकी प्राथमिकताएँ",
    xmlSitemap: "XML साइटमैप",
    copyrightSuffix:
      "सर्वाधिकार सुरक्षित। केवल सामान्य जानकारी के लिए; यह चिकित्सा, वित्तीय या कानूनी सलाह नहीं है।",
    regionReady: "मीट्रिक और इंपीरियल इकाइयाँ · 150+ विश्व मुद्राएँ समर्थित",
  },
  consent: {
    bannerText:
      "DailyCalcWell साइट प्राथमिकताओं के लिए आवश्यक स्टोरेज का उपयोग करता है। वैकल्पिक एनालिटिक्स और विज्ञापन कुकीज़ आपकी सहमति के बिना बंद रहती हैं।",
    preferences: "प्राथमिकताएँ",
    necessaryOnly: "केवल आवश्यक",
    acceptAll: "सभी स्वीकार करें",
    dialogTitle: "गोपनीयता और कुकी प्राथमिकताएँ",
    dialogSubtitle:
      "वैकल्पिक स्टोरेज और कुकीज़ प्रबंधित करें। आपके कैलकुलेटर इनपुट केवल ब्राउज़र में प्रोसेस होते हैं और एनालिटिक्स में कभी नहीं भेजे जाते।",
    necessaryTitle: "आवश्यक स्टोरेज",
    necessaryDesc:
      "आपकी गोपनीयता पसंद याद रखता है और मुख्य पेज कार्यक्षमता सुनिश्चित करता है। हमेशा सक्रिय।",
    alwaysActive: "हमेशा सक्रिय",
    analyticsTitle: "एनालिटिक्स कुकीज़ (GA4)",
    analyticsDesc:
      "व्यक्तिगत स्वास्थ्य डेटा एकत्र किए बिना पेज व्यू और उपयोग मापने में मदद करता है।",
    adsTitle: "विज्ञापन कुकीज़ (Google AdSense)",
    adsDesc:
      "प्रकाशक द्वारा सक्षम किए जाने पर भविष्य के Google AdSense विज्ञापनों का समर्थन करता है।",
    savePreferences: "प्राथमिकताएँ सहेजें",
    closeDialog: "संवाद बंद करें",
  },
  datePicker: {
    selectDate: "तारीख़ चुनें",
    today: "आज",
    prevMonth: "पिछला महीना",
    nextMonth: "अगला महीना",
    chooseDate: "तारीख़ चुनें",
    months: [
      "जनवरी",
      "फ़रवरी",
      "मार्च",
      "अप्रैल",
      "मई",
      "जून",
      "जुलाई",
      "अगस्त",
      "सितंबर",
      "अक्टूबर",
      "नवंबर",
      "दिसंबर",
    ],
    weekdays: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
  },
  calculatorShell: {
    calculate: "गणना करें",
    reset: "रीसेट करें",
    copyResult: "परिणाम कॉपी करें",
    copied: "कॉपी हो गया",
    share: "शेयर करें",
    inputError: "इनपुट त्रुटि",
    copyUnsupported: "इस ब्राउज़र में कॉपी समर्थित नहीं है।",
    shareCopied: "परिणाम और पेज लिंक कॉपी हो गया।",
    shareUnavailable: "इस ब्राउज़र में शेयर करना उपलब्ध नहीं है।",
  },
  calculatorLayout: {
    editorialTeam: "DailyCalcWell संपादकीय टीम",
    lastReviewed: "अंतिम समीक्षा",
    healthNoticeTitle: "महत्वपूर्ण स्वास्थ्य एवं शैक्षिक सूचना",
    understandingResult: "अपने परिणाम को समझें",
    stepByStep: "चरण-दर-चरण गणना विधि",
    howToUse: "इस कैलकुलेटर का उपयोग कैसे करें",
    workedExample: "उदाहरण सहित गणना",
    resultLabel: "परिणाम",
    assumptionsTitle: "मान्यताएँ और सीमाएँ",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    referencesTitle: "संदर्भ और कार्यप्रणाली स्रोत",
    sourceLabel: "स्रोत",
    reviewedUnderPrefix: "समीक्षित अंतर्गत:",
    editorialPolicyLink: "DailyCalcWell संपादकीय नीति",
    localExecutionNote: "गणनाएँ आपके ब्राउज़र में स्थानीय रूप से चलती हैं।",
    relatedCalculators: "संबंधित कैलकुलेटर",
    popularCalculators: "लोकप्रिय कैलकुलेटर",
    allPrefix: "सभी",
    backToHome: "होमपेज पर लौटें",
  },
  home: {
    seoTitle: "दैनिक जीवन और स्वास्थ्य के लिए निःशुल्क ऑनलाइन कैलकुलेटर",
    seoDescription:
      "प्रतिशत, औसत, उम्र, तारीख़, BMI, दैनिक कैलोरी, गर्भावस्था तिथि और अधिक की गणना करने के लिए मीट्रिक और इंपीरियल इकाइयों में निःशुल्क ऑनलाइन कैलकुलेटर उपयोग करें।",
    heroTitle: "दैनिक जीवन और स्वास्थ्य के लिए निःशुल्क ऑनलाइन कैलकुलेटर",
    heroSubtitle:
      "प्रतिशत, औसत, उम्र, तारीख़, BMI, दैनिक कैलोरी आवश्यकता, गर्भावस्था तिथियों और अधिक की गणना तुरंत करें। मीट्रिक (kg, cm, ₹) और इंपीरियल (lb, ft/in, $) दोनों इकाइयों में स्पष्ट और सटीक परिणाम प्राप्त करें।",
    categoryToolsLabel: "श्रेणी · 12 उपकरण",
    browseEveryday: "दैनिक कैलकुलेटर देखें",
    browseHealth: "स्वास्थ्य कैलकुलेटर देखें",
    popularHeading: "लोकप्रिय कैलकुलेटर",
    popularSubtitle:
      "दैनिक गणित और व्यक्तिगत स्वास्थ्य में सबसे अधिक उपयोग किए जाने वाले उपकरण।",
    everydayHeading: "दैनिक कैलकुलेटर",
    viewAllEveryday: "सभी दैनिक उपकरण देखें",
    healthHeading: "स्वास्थ्य कैलकुलेटर",
    viewAllHealth: "सभी स्वास्थ्य उपकरण देखें",
    recentHeading: "हाल ही में जोड़े गए कैलकुलेटर",
    recentSubtitle:
      "व्यावसायिक मूल्य निर्धारण, कार्य समय, शारीरिक संरचना और चक्र योजना के लिए नए उपकरण।",
    howToUseHeading: "DailyCalcWell उपकरणों का उपयोग कैसे करें",
    step1Title: "01. अपनी इकाई या मुद्रा चुनें",
    step1Body:
      "भारत, अमेरिका और वैश्विक उपयोगकर्ताओं के लिए डिज़ाइन किए गए सभी उपकरण मीट्रिक (kg, cm, लीटर) और इंपीरियल (lb, ft/in, fl oz) तथा INR (₹) और USD ($) के बीच आसानी से बदलते हैं।",
    step2Title: "02. सूत्र और मान्यताएँ जाँचें",
    step2Body:
      "हर कैलकुलेटर पेज सटीक फ़ॉर्मूला, चरण-दर-चरण गणना, एक हल किया गया उदाहरण और प्रमुख सीमाएँ स्पष्ट रूप से दिखाता है।",
    step3Title: "03. कॉपी, रीसेट या शेयर करें",
    step3Body:
      "सभी गणनाएँ आपके ब्राउज़र में तुरंत चलती हैं—बिना किसी साइन-अप या डेटा संग्रह के, एक-क्लिक कॉपी और रीसेट के साथ।",
    faqHeading: "अक्सर पूछे जाने वाले प्रश्न",
    faqs: [
      {
        question: "क्या DailyCalcWell के सभी कैलकुलेटर निःशुल्क हैं?",
        answer:
          "हाँ। DailyCalcWell पर उपलब्ध हर दैनिक और स्वास्थ्य कैलकुलेटर बिना किसी साइन-अप या शुल्क के पूरी तरह निःशुल्क है।",
      },
      {
        question: "क्या ये उपकरण भारत और अमेरिका दोनों मानकों के लिए काम करते हैं?",
        answer:
          "हाँ। सभी स्वास्थ्य और इकाई उपकरण मीट्रिक (kg, cm, लीटर, °C) तथा इंपीरियल (lb, ft/in, fl oz, °F) और खरीदारी उपकरण INR (₹) व USD ($) दोनों का समर्थन करते हैं।",
      },
      {
        question: "क्या मेरा व्यक्तिगत या स्वास्थ्य डेटा सर्वर पर सहेजा जाता है?",
        answer:
          "नहीं। सभी गणनाएँ आपके ब्राउज़र में स्थानीय रूप से होती हैं। वजन, जन्मतिथि या गर्भावस्था तिथियाँ किसी डेटाबेस में सहेजी नहीं जातीं।",
      },
      {
        question: "क्या स्वास्थ्य कैलकुलेटर चिकित्सीय निदान का विकल्प हैं?",
        answer:
          "नहीं। स्वास्थ्य कैलकुलेटर Mifflin-St Jeor, WHO BMI मानकों और 280-दिन के गर्भावस्था मॉडल पर आधारित शैक्षिक अनुमान देते हैं। चिकित्सीय सलाह के लिए डॉक्टर से परामर्श लें।",
      },
    ],
  },
  categories: {
    everyday: {
      name: "दैनिक कैलकुलेटर",
      seoTitle: "दैनिक कैलकुलेटर – प्रतिशत, तारीख़, उम्र और इकाई रूपांतरण",
      seoDescription:
        "प्रतिशत, औसत, सटीक उम्र, तारीख़ अंतर, छूट, लाभ-हानि, अनुपात, भिन्न, समय अवधि और इकाई रूपांतरण के लिए निःशुल्क ऑनलाइन कैलकुलेटर।",
      intro:
        "दैनिक गणित, INR या USD में खरीदारी छूट, व्यवसाय मार्जिन, कैलेंडर योजना, समय ट्रैकिंग और मीट्रिक-से-इंपीरियल रूपांतरण के व्यावहारिक उपकरण।",
      sectionHeading: "भारत और विश्व में दैनिक उपयोग के लिए निर्मित",
      sectionBody:
        "चाहे आप भारतीय रुपये (₹) में त्योहारी छूट की जाँच कर रहे हों, अमेरिकी डॉलर ($) में मार्जिन निकाल रहे हों, कैलेंडर पर छुट्टियों के दिन गिन रहे हों या सेंटीमीटर व किलोग्राम बदल रहे हों—हर उपकरण स्पष्ट सूत्र के साथ तुरंत काम करता है।",
      crossLinkPrefix: "क्या आपको स्वास्थ्य या मातृत्व कैलकुलेटर चाहिए? देखें हमारी",
      crossLinkLabel: "स्वास्थ्य कैलकुलेटर श्रेणी",
    },
    health: {
      name: "स्वास्थ्य कैलकुलेटर",
      seoTitle: "स्वास्थ्य कैलकुलेटर – BMI, BMR, कैलोरी और गर्भावस्था उपकरण",
      seoDescription:
        "BMI, BMR, TDEE, दैनिक कैलोरी, आदर्श वजन, बॉडी फ़ैट, प्रोटीन, पानी की मात्रा, गर्भावस्था और ओव्यूलेशन अनुमान के लिए निःशुल्क ऑनलाइन स्वास्थ्य कैलकुलेटर।",
      intro:
        "मीट्रिक (kg, cm) और इंपीरियल (lb, ft/in) इकाइयों में स्पष्ट मान्यताओं के साथ प्रमाण-आधारित स्वास्थ्य और गर्भावस्था अनुमान उपकरण।",
      notice:
        "स्वास्थ्य कैलकुलेटर प्रकाशित सूत्रों पर आधारित सामान्य शैक्षिक अनुमान प्रदान करते हैं। ये किसी बीमारी का निदान नहीं करते और न ही योग्य चिकित्सक की सलाह का स्थान लेते हैं।",
      sectionHeading: "गोपनीयता-प्रथम स्वास्थ्य गणनाएँ",
      sectionBody:
        "शरीर माप, कैलोरी, हाइड्रेशन, गर्भावस्था और चक्र से जुड़ी सभी गणनाएँ सीधे आपके ब्राउज़र में चलती हैं। DailyCalcWell आपका व्यक्तिगत स्वास्थ्य डेटा किसी सर्वर पर नहीं भेजता।",
      crossLinkPrefix: "दैनिक गणित, तारीख़ या इकाई उपकरण चाहिए? देखें हमारी",
      crossLinkLabel: "दैनिक कैलकुलेटर श्रेणी",
    },
  },
  pages: {
    about: {
      seoTitle: "हमारे बारे में – DailyCalcWell ऑनलाइन कैलकुलेटर",
      seoDescription:
        "DailyCalcWell, भारत और विश्व भर के उपयोगकर्ताओं के लिए सटीक दैनिक एवं स्वास्थ्य कैलकुलेटर प्रदान करने के हमारे मिशन और गोपनीयता प्रतिबद्धता के बारे में जानें।",
      title: "DailyCalcWell के बारे में",
      lead:
        "DailyCalcWell एक स्वतंत्र ऑनलाइन कैलकुलेटर प्लेटफ़ॉर्म है जो दो स्पष्ट श्रेणियों पर केंद्रित है: दैनिक कैलकुलेटर और स्वास्थ्य कैलकुलेटर। हमारा उद्देश्य रोज़मर्रा के गणित, तारीख़ नियोजन, इकाई रूपांतरण और स्वास्थ्य अनुमानों को सरल और पारदर्शी बनाना है।",
      globalHeading: "भारत और विश्व भर के उपयोगकर्ताओं के लिए",
      globalBody:
        "DailyCalcWell के उपकरण मीट्रिक (किलोग्राम, सेंटीमीटर, लीटर, सेल्सियस) और इंपीरियल (पाउंड, फीट/इंच, फ़्लूइड औंस, फ़ारेनहाइट) इकाइयों के साथ भारतीय रुपये (₹) और अमेरिकी डॉलर ($) दोनों का समर्थन करते हैं।",
      transparencyHeading: "पारदर्शिता और सूत्र की सटीकता",
      transparencyBody:
        "हर कैलकुलेटर पेज उपयोग किए गए सूत्र, चरण-दर-चरण तर्क, उदाहरण और सीमाएँ बताता है। स्वास्थ्य उपकरण WHO, CDC, NIH और ACOG जैसे प्रतिष्ठित संस्थानों के प्रकाशित मानकों का संदर्भ देते हैं।",
      publisherHeading: "प्रकाशक विवरण",
      operatedBy: "संचालक:",
      contactEmail: "संपर्क ईमेल:",
      location: "स्थान:",
      readEditorial: "हमारी संपादकीय नीति पढ़ें",
      contactUs: "संपर्क करें",
    },
    contact: {
      seoTitle: "संपर्क करें – DailyCalcWell सहायता और सुझाव",
      seoDescription:
        "गणना संबंधी समस्या की रिपोर्ट करने, नया कैलकुलेटर सुझाने या गोपनीयता प्रश्न पूछने के लिए DailyCalcWell से संपर्क करें।",
      title: "संपर्क करें",
      subtitle:
        "किसी सूत्र पर सुझाव, तकनीकी समस्या या गोपनीयता से जुड़ा प्रश्न है? नीचे दिए गए विवरण या फ़ॉर्म का उपयोग करके संपर्क करें।",
      detailsHeading: "सीधा संपर्क विवरण",
      publisherLabel: "प्रकाशक",
      emailLabel: "ईमेल",
      addressLabel: "पता",
      noteText:
        "नोट: Google AdSense समीक्षा से पहले ऊपर दिए गए कोष्ठक प्लेसहोल्डर में अपना वास्तविक व्यावसायिक नाम और पता भरें।",
      formName: "आपका नाम",
      formEmail: "ईमेल पता",
      formTopic: "विषय",
      formMessage: "संदेश",
      formSubmit: "संदेश भेजें",
      formReset: "फ़ॉर्म रीसेट करें",
      formSuccessTitle: "संदेश समीक्षा के लिए तैयार है",
      formSuccessBody:
        "आपका संदेश सत्यापित हो गया है। आवश्यक या त्वरित पूछताछ के लिए कृपया सीधे इस ईमेल पर लिखें:",
      topics: {
        feedback: "कैलकुलेटर सुझाव या प्रतिक्रिया",
        correction: "सूत्र या सामग्री सुधार",
        privacy: "गोपनीयता / कुकी प्रश्न",
        business: "सामान्य पूछताछ",
      },
      errors: {
        name: "कृपया अपना नाम दर्ज करें।",
        email: "कृपया मान्य ईमेल पता दर्ज करें।",
        message: "कृपया कम से कम 10 अक्षरों का संदेश लिखें।",
      },
    },
    privacy: {
      seoTitle: "गोपनीयता नीति – DailyCalcWell",
      seoDescription:
        "जानें कि DailyCalcWell आपके ब्राउज़र में स्थानीय गणना, वैकल्पिक एनालिटिक्स और विज्ञापन कुकीज़ को कैसे संभालता है।",
      title: "गोपनीयता नीति",
      updated: "अंतिम अपडेट: 24 नवंबर 2026",
      intro:
        "यह गोपनीयता नीति बताती है कि जब आप DailyCalcWell वेबसाइट और हमारे दैनिक व स्वास्थ्य कैलकुलेटर का उपयोग करते हैं तो जानकारी को कैसे संभाला जाता है।",
      sections: [
        {
          heading: "1. ब्राउज़र में स्थानीय गणना",
          body: "सभी गणित, तारीख़, इकाई, शारीरिक माप, पोषण और गर्भावस्था गणनाएँ सीधे आपके वेब ब्राउज़र के भीतर चलती हैं। हम आपके व्यक्तिगत इनपुट डेटाबेस में संग्रहीत नहीं करते।",
        },
        {
          heading: "2. एनालिटिक्स और मापन (वैकल्पिक)",
          body: "यदि साइट स्वामी द्वारा सक्षम किया गया हो और आप कुकी वरीयता के माध्यम से सहमति देते हैं, तो हम समग्र ट्रैफ़िक समझने के लिए Google Analytics 4 (GA4) का उपयोग कर सकते हैं। व्यक्तिगत स्वास्थ्य आंकड़े कभी नहीं भेजे जाते।",
        },
        {
          heading: "3. विज्ञापन और तृतीय-पक्ष कुकीज़",
          body: "स्वीकृति के बाद DailyCalcWell Google AdSense द्वारा विज्ञापन प्रदर्शित कर सकता है। विज्ञापन स्क्रिप्ट तब तक बंद रहती हैं जब तक प्रकाशक उन्हें सक्षम न करे और आपकी सहमति प्राप्त न हो।",
        },
        {
          heading: "4. सर्वर लॉग और सुरक्षा",
          body: "हमारा होस्टिंग प्रदाता सुरक्षा और अपटाइम सुनिश्चित करने के लिए अस्थायी सर्वर लॉग में मानक तकनीकी अनुरोध मेटाडेटा रिकॉर्ड कर सकता है।",
        },
        {
          heading: "5. आपकी गोपनीयता पसंद और संपर्क",
          body: "आप फ़ुटर में कुकी प्राथमिकताएँ का उपयोग करके कभी भी अपनी सहमति बदल सकते हैं। पूछताछ के लिए contact@dailycalcwell.com पर संपर्क करें।",
        },
      ],
    },
    terms: {
      seoTitle: "नियम और शर्तें – DailyCalcWell",
      seoDescription:
        "DailyCalcWell ऑनलाइन दैनिक और स्वास्थ्य कैलकुलेटर के उपयोग की शर्तें पढ़ें।",
      title: "नियम और शर्तें",
      updated: "अंतिम अपडेट: 24 नवंबर 2026",
      sections: [
        {
          heading: "1. शर्तों की स्वीकृति",
          body: "DailyCalcWell (dailycalcwell.com) का उपयोग करके आप इन नियमों और लागू कानूनों का पालन करने के लिए सहमत होते हैं।",
        },
        {
          heading: "2. केवल सूचनात्मक उपयोग",
          body: "इस साइट पर सभी कैलकुलेटर और मार्गदर्शिकाएँ केवल सामान्य जानकारी व शिक्षा के लिए हैं; ये चिकित्सा, वित्तीय या कानूनी सलाह नहीं हैं।",
        },
        {
          heading: "3. सटीकता और कोई वारंटी नहीं",
          body: "हम मानक सूत्रों का परीक्षण करते हैं, फिर भी वेबसाइट 'जैसी है' के आधार पर प्रदान की जाती है। महत्वपूर्ण वित्तीय, कर या स्वास्थ्य निर्णयों से पहले परिणाम स्वतंत्र रूप से सत्यापित करें।",
        },
        {
          heading: "4. स्वीकार्य उपयोग",
          body: "आप व्यक्तिगत, शैक्षिक या आंतरिक व्यावसायिक संदर्भ के लिए कैलकुलेटर का निःशुल्क उपयोग कर सकते हैं। मूल संपादकीय सामग्री की अनधिकृत कॉपी या स्क्रैपिंग निषिद्ध है।",
        },
        {
          heading: "5. संपर्क जानकारी",
          body: "इन शर्तों से संबंधित प्रश्न contact@dailycalcwell.com पर भेजे जा सकते हैं।",
        },
      ],
    },
    disclaimer: {
      seoTitle: "अस्वीकरण – चिकित्सा और वित्तीय सूचना",
      seoDescription:
        "DailyCalcWell ऑनलाइन दैनिक और स्वास्थ्य कैलकुलेटर के लिए चिकित्सा, पोषण, गर्भावस्था और वित्तीय अस्वीकरण पढ़ें।",
      title: "अस्वीकरण",
      updated: "अंतिम अपडेट: 24 नवंबर 2026",
      sections: [
        {
          heading: "1. चिकित्सीय सलाह या निदान नहीं",
          paragraphs: [
            "DailyCalcWell पर सभी स्वास्थ्य कैलकुलेटर—BMI, BMR, TDEE, कैलोरी, आदर्श वजन, बॉडी फ़ैट, प्रोटीन, पानी, गर्भावस्था और ओव्यूलेशन—केवल सामान्य शैक्षिक जानकारी के लिए हैं।",
            "ये किसी बीमारी का निदान नहीं करते और न ही योग्य डॉक्टर या आहार विशेषज्ञ के परामर्श का स्थान लेते हैं।",
          ],
        },
        {
          heading: "2. गर्भावस्था और ओव्यूलेशन सीमाएँ",
          paragraphs: [
            "प्रसव तिथि और ओव्यूलेशन तिथियाँ 280-दिन और औसत चक्र मान्यताओं पर आधारित सांख्यिकीय अनुमान हैं। ओव्यूलेशन कैलकुलेटर गर्भनिरोधक का विश्वसनीय तरीका नहीं है।",
          ],
        },
        {
          heading: "3. वित्तीय और कर सूचना",
          paragraphs: [
            "छूट और लाभ-हानि कैलकुलेटर मानक प्रतिशत गणना करते हैं और इनमें GST या बिक्री कर स्वचालित रूप से शामिल नहीं होता।",
          ],
        },
      ],
    },
    editorial: {
      seoTitle: "संपादकीय नीति – सूत्र सत्यापन और मानक",
      seoDescription:
        "जानें कि DailyCalcWell सूत्रों को कैसे सत्यापित करता है और पारदर्शी संपादकीय मानक बनाए रखता है।",
      title: "संपादकीय नीति",
      bylinePrefix: "DailyCalcWell संपादकीय टीम · अंतिम समीक्षा:",
      sections: [
        {
          heading: "1. सूत्र चयन और विश्वसनीय स्रोत",
          body: "हर कैलकुलेटर WHO, CDC, NIH, ACOG, National Academies, NHS और NIST जैसे मानक सार्वजनिक स्रोतों पर आधारित स्पष्ट गणितीय या नैदानिक समीकरणों का उपयोग करता है।",
        },
        {
          heading: "2. मान्यताओं की पारदर्शिता",
          body: "हर कैलकुलेटर पेज उपयोग किए गए सूत्र, हल किए गए उदाहरण और स्पष्ट सीमाओं को दर्शाता है।",
        },
        {
          heading: "3. ईमानदार श्रेय और अद्यतन",
          body: "सामग्री DailyCalcWell संपादकीय टीम द्वारा तैयार की जाती है और हर पेज पर अंतिम समीक्षा तिथि प्रदर्शित होती है।",
        },
        {
          heading: "4. सुधार और प्रतिक्रिया",
          body: "यदि आपको कोई त्रुटि दिखे तो संपर्क करें पेज से हमें सूचित करें। कोड अपडेट से पहले स्वचालित यूनिट परीक्षण चलाए जाते हैं।",
        },
      ],
    },
    cookie: {
      seoTitle: "कुकी नीति – सहमति और स्टोरेज विकल्प",
      seoDescription:
        "जानें कि DailyCalcWell आवश्यक स्टोरेज तथा वैकल्पिक एनालिटिक्स व विज्ञापन कुकीज़ का उपयोग कैसे करता है।",
      title: "कुकी नीति",
      updated: "अंतिम अपडेट: 24 नवंबर 2026",
      intro:
        "यह कुकी नीति बताती है कि DailyCalcWell पर किस प्रकार की कुकीज़ और स्थानीय ब्राउज़र स्टोरेज का उपयोग होता है।",
      sections: [
        {
          heading: "1. आवश्यक स्टोरेज",
          body: "हम आपकी सहमति प्राथमिकता को आपके ब्राउज़र में (dailycalcwell_consent_v1 के अंतर्गत) सहेजते हैं ताकि आपकी पसंद याद रहे।",
        },
        {
          heading: "2. एनालिटिक्स कुकीज़ (वैकल्पिक)",
          body: "सहमति देने पर Google Analytics 4 समग्र ट्रैफ़िक मापने के लिए कुकीज़ सेट कर सकता है। सहमति के बिना यह निष्क्रिय रहता है।",
        },
        {
          heading: "3. विज्ञापन कुकीज़ (वैकल्पिक)",
          body: "साइट अनुमोदन के बाद, आपकी सहमति के अनुसार Google AdSense विज्ञापन कुकीज़ उपयोग कर सकता है।",
        },
      ],
      manageButton: "कुकी प्राथमिकताएँ प्रबंधित करें",
    },
    sitemap: {
      seoTitle: "HTML साइटमैप – सभी कैलकुलेटर और पेज",
      seoDescription:
        "DailyCalcWell के सभी 24 दैनिक व स्वास्थ्य कैलकुलेटर, श्रेणी हब और नीति पेजों की पूरी निर्देशिका देखें।",
      title: "वेबसाइट साइटमैप",
      subtitlePrefix:
        "DailyCalcWell के हर कैलकुलेटर, श्रेणी और नीति पेज के सीधे लिंक। सर्च इंजन के लिए देखें",
      xmlLinkLabel: "XML साइटमैप",
      everydayHeading: "दैनिक कैलकुलेटर",
      healthHeading: "स्वास्थ्य कैलकुलेटर",
      infoHeading: "श्रेणियाँ और जानकारी",
      homepageLabel: "होमपेज",
      everydayHubLabel: "दैनिक कैलकुलेटर हब",
      healthHubLabel: "स्वास्थ्य कैलकुलेटर हब",
    },
    notFound: {
      codeLabel: "404 · पेज नहीं मिला",
      title: "हम यह कैलकुलेटर या पेज नहीं ढूँढ पाए।",
      body: "यह लिंक हटाया गया हो सकता है या URL में त्रुटि हो सकती है। नीचे दिए गए दैनिक या स्वास्थ्य कैलकुलेटर देखें।",
      backHome: "होमपेज पर लौटें",
      browseEveryday: "दैनिक कैलकुलेटर देखें",
      browseHealth: "स्वास्थ्य कैलकुलेटर देखें",
    },
  },
};

const ES_UI: UiDictionary = {
  siteTagline:
    "Calculadoras en línea gratuitas de uso diario y salud para EE. UU., India y todo el mundo",
  skipToContent: "Saltar al contenido principal",
  nav: {
    home: "Inicio",
    everyday: "Calculadoras Diarias",
    health: "Calculadoras de Salud",
    about: "Sobre Nosotros",
    contact: "Contacto",
    search: "Buscar",
    language: "Idioma",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",
  },
  search: {
    placeholder:
      "Buscar calculadoras (ej. IMC, porcentaje, edad, fecha de parto, descuento)...",
    findButton: "Buscar",
    modalTitle: "Buscar una Calculadora",
    closeSearch: "Cerrar búsqueda",
    noMatchesPrefix: "No se encontraron calculadoras para",
    noMatchesTry: "Prueba",
    or: "o",
    clearQuery: "Borrar búsqueda",
  },
  footer: {
    blurb:
      "Calculadoras gratuitas, rápidas y privadas de uso diario y salud para usuarios en Estados Unidos, India y el mundo. Todos los cálculos se ejecutan en tu navegador.",
    categoriesHeading: "Categorías de Calculadoras",
    companyHeading: "Empresa y Transparencia",
    legalHeading: "Legal y Privacidad",
    editorialPolicy: "Política Editorial",
    disclaimer: "Aviso Legal",
    sitemap: "Mapa del Sitio",
    privacyPolicy: "Política de Privacidad",
    terms: "Términos y Condiciones",
    cookiePolicy: "Política de Cookies",
    cookiePreferences: "Preferencias de Cookies",
    xmlSitemap: "Mapa XML",
    copyrightSuffix:
      "Todos los derechos reservados. Estimaciones informativas únicamente; no sustituyen asesoramiento médico, financiero ni legal.",
    regionReady: "Sistema métrico e imperial · +150 monedas mundiales",
  },
  consent: {
    bannerText:
      "DailyCalcWell utiliza almacenamiento estrictamente necesario para tus preferencias. Las cookies opcionales de análisis y publicidad permanecen desactivadas salvo aceptación.",
    preferences: "Preferencias",
    necessaryOnly: "Solo Necesarias",
    acceptAll: "Aceptar Todo",
    dialogTitle: "Preferencias de Privacidad y Cookies",
    dialogSubtitle:
      "Administra el almacenamiento opcional. Los datos ingresados en las calculadoras se procesan localmente en tu navegador y nunca se envían como parámetros analíticos.",
    necessaryTitle: "Almacenamiento Necesario",
    necessaryDesc:
      "Recuerda tu elección de privacidad y garantiza la funcionalidad básica del sitio. Siempre activo.",
    alwaysActive: "Siempre Activo",
    analyticsTitle: "Cookies de Análisis (GA4)",
    analyticsDesc:
      "Ayuda a medir visitas agregadas y uso de herramientas sin recopilar cifras de salud personales.",
    adsTitle: "Cookies Publicitarias (Google AdSense)",
    adsDesc:
      "Admite la futura visualización de Google AdSense cuando sea habilitada por el editor.",
    savePreferences: "Guardar Preferencias",
    closeDialog: "Cerrar preferencias",
  },
  datePicker: {
    selectDate: "Seleccionar fecha",
    today: "Hoy",
    prevMonth: "Mes anterior",
    nextMonth: "Mes siguiente",
    chooseDate: "Elegir fecha",
    months: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    weekdays: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
  },
  calculatorShell: {
    calculate: "Calcular",
    reset: "Restablecer",
    copyResult: "Copiar Resultado",
    copied: "Copiado",
    share: "Compartir",
    inputError: "Error de Entrada",
    copyUnsupported: "La copia al portapapeles no es compatible en este navegador.",
    shareCopied: "Resultado y enlace copiados al portapapeles.",
    shareUnavailable: "Compartir no está disponible en este navegador.",
  },
  calculatorLayout: {
    editorialTeam: "Equipo Editorial de DailyCalcWell",
    lastReviewed: "Última revisión",
    healthNoticeTitle: "Aviso Importante de Salud y Educación",
    understandingResult: "Cómo Interpretar tu Resultado",
    stepByStep: "Método de Cálculo Paso a Paso",
    howToUse: "Cómo Usar Esta Calculadora",
    workedExample: "Ejemplo Práctico",
    resultLabel: "Resultado",
    assumptionsTitle: "Supuestos y Limitaciones",
    faqTitle: "Preguntas Frecuentes",
    referencesTitle: "Referencias y Fuentes Metodológicas",
    sourceLabel: "Fuente",
    reviewedUnderPrefix: "Revisado bajo la",
    editorialPolicyLink: "Política Editorial de DailyCalcWell",
    localExecutionNote: "Los cálculos se ejecutan localmente en tu navegador.",
    relatedCalculators: "Calculadoras Relacionadas",
    popularCalculators: "Calculadoras Populares",
    allPrefix: "Todas las",
    backToHome: "Volver al Inicio",
  },
  home: {
    seoTitle: "Calculadoras Gratis en Línea para la Vida Diaria y Salud",
    seoDescription:
      "Usa nuestras calculadoras gratuitas en línea para porcentajes, promedios, edad exacta, fechas, IMC, calorías diarias, embarazo y más en unidades métricas o imperiales.",
    heroTitle: "Calculadoras Gratis en Línea para la Vida Diaria y Salud",
    heroSubtitle:
      "Calcula porcentajes, promedios, edad exacta, fechas, IMC, requerimientos calóricos diarios, fechas de embarazo y mucho más en unidades métricas o imperiales de forma rápida y clara.",
    categoryToolsLabel: "Categoría · 12 Herramientas",
    browseEveryday: "Explorar Calculadoras Diarias",
    browseHealth: "Explorar Calculadoras de Salud",
    popularHeading: "Calculadoras Populares",
    popularSubtitle:
      "Las herramientas más utilizadas para cálculos cotidianos y bienestar personal.",
    everydayHeading: "Calculadoras Diarias",
    viewAllEveryday: "Ver Todas las Diarias",
    healthHeading: "Calculadoras de Salud",
    viewAllHealth: "Ver Todas las de Salud",
    recentHeading: "Calculadoras Agregadas Recientemente",
    recentSubtitle:
      "Nuevas herramientas para márgenes comerciales, horas trabajadas, composición corporal y ciclo.",
    howToUseHeading: "Cómo Usar las Herramientas de DailyCalcWell",
    step1Title: "01. Elige tus Unidades o Moneda",
    step1Body:
      "Diseñadas para usuarios globales, alternan fácilmente entre unidades métricas (kg, cm, litros) e imperiales (lb, ft/in, fl oz), además de USD ($) e INR (₹).",
    step2Title: "02. Revisa Fórmulas y Supuestos",
    step2Body:
      "Cada página documenta la fórmula exacta, los pasos aritméticos, un ejemplo resuelto y las limitaciones clave.",
    step3Title: "03. Copia, Restablece o Comparte",
    step3Body:
      "Toda la matemática se ejecuta al instante en tu navegador con validación accesible y copia en un clic.",
    faqHeading: "Preguntas Frecuentes",
    faqs: [
      {
        question: "¿Son gratuitas todas las calculadoras de DailyCalcWell?",
        answer:
          "Sí. Todas las calculadoras diarias y de salud son gratuitas y no requieren registro ni descargas.",
      },
      {
        question: "¿Funcionan tanto en unidades métricas como imperiales?",
        answer:
          "Sí. Puedes alternar entre kg/cm/litros y libras/pies-pulgadas/onzas fluidas, así como usar USD ($) o INR (₹).",
      },
      {
        question: "¿Se guardan mis datos personales o de salud en un servidor?",
        answer:
          "No. Todos los cálculos ocurren localmente en tu navegador web y nunca se almacenan en bases de datos.",
      },
      {
        question: "¿Puedo usar las calculadoras de salud para diagnóstico médico?",
        answer:
          "No. Son estimaciones educativas basadas en fórmulas publicadas (Mifflin-St Jeor, IMC estándar, gestación de 280 días). Consulta siempre a un profesional de la salud.",
      },
    ],
  },
  categories: {
    everyday: {
      name: "Calculadoras Diarias",
      seoTitle: "Calculadoras Diarias – Porcentajes, Fechas, Edad y Unidades",
      seoDescription:
        "Calculadoras en línea gratuitas de porcentajes, promedios, edad exacta, fechas, descuentos, ganancias y pérdidas, razones, fracciones y tiempo.",
      intro:
        "Herramientas prácticas para matemáticas diarias, descuentos en USD o INR, márgenes comerciales, planificación de fechas y conversiones.",
      sectionHeading: "Diseñadas para Uso Diario Global",
      sectionBody:
        "Ya sea para calcular un descuento comercial, contar días entre dos fechas o convertir medidas métricas e imperiales, cada herramienta ofrece transparencia total de fórmulas en tu navegador.",
      crossLinkPrefix: "¿Buscas herramientas de bienestar o maternidad? Visita nuestra categoría de",
      crossLinkLabel: "Calculadoras de Salud",
    },
    health: {
      name: "Calculadoras de Salud",
      seoTitle: "Calculadoras de Salud – IMC, TMB, Calorías y Embarazo",
      seoDescription:
        "Calculadoras gratuitas de IMC, TMB, gasto calórico total, calorías diarias, peso ideal, grasa corporal, proteínas, agua, embarazo y ovulación.",
      intro:
        "Herramientas de estimación de salud y embarazo basadas en evidencia con soporte métrico e imperial y supuestos claros.",
      notice:
        "Las calculadoras de salud ofrecen estimaciones educativas basadas en fórmulas publicadas y no reemplazan el consejo de un médico, nutricionista u obstetra.",
      sectionHeading: "Cálculos de Salud con Privacidad Primero",
      sectionBody:
        "Todos los cálculos de medidas corporales, calorías, hidratación y embarazo se ejecutan en tu navegador. DailyCalcWell no transmite tus datos personales a servidores externos.",
      crossLinkPrefix: "¿Necesitas matemáticas diarias o fechas? Explora nuestra categoría de",
      crossLinkLabel: "Calculadoras Diarias",
    },
  },
  pages: {
    about: {
      seoTitle: "Sobre Nosotros – DailyCalcWell Calculadoras en Línea",
      seoDescription:
        "Conoce DailyCalcWell, nuestra misión de ofrecer calculadoras diarias y de salud precisas y nuestro compromiso con la privacidad.",
      title: "Sobre DailyCalcWell",
      lead:
        "DailyCalcWell es una plataforma independiente enfocada en dos áreas claras: Calculadoras Diarias y Calculadoras de Salud. Facilitamos cálculos cotidianos, fechas, unidades y estimaciones de bienestar de forma transparente.",
      globalHeading: "Construido para Usuarios Globales",
      globalBody:
        "Nuestras herramientas admiten unidades métricas e imperiales y múltiples monedas para que cualquier persona en EE. UU., India, Latinoamérica o Europa obtenga resultados útiles.",
      transparencyHeading: "Transparencia y Precisión de Fórmulas",
      transparencyBody:
        "Cada calculadora explica su fórmula, método paso a paso, ejemplo práctico y limitaciones, citando instituciones como OMS, CDC, NIH y ACOG.",
      publisherHeading: "Datos del Editor",
      operatedBy: "Operado por:",
      contactEmail: "Correo de contacto:",
      location: "Ubicación:",
      readEditorial: "Leer Política Editorial",
      contactUs: "Contacto",
    },
    contact: {
      seoTitle: "Contacto – Comentarios y Soporte de DailyCalcWell",
      seoDescription:
        "Contacta a DailyCalcWell para reportar un error, sugerir una calculadora o consultar sobre privacidad.",
      title: "Contacto",
      subtitle:
        "¿Tienes comentarios sobre una fórmula, encontraste un error o deseas consultar sobre privacidad? Escríbenos mediante el formulario o los datos de contacto.",
      detailsHeading: "Contacto Directo",
      publisherLabel: "Editor",
      emailLabel: "Correo",
      addressLabel: "Dirección Postal",
      noteText:
        "Nota: Reemplaza los marcadores entre corchetes con tu nombre comercial y dirección verificada antes de solicitar Google AdSense.",
      formName: "Tu Nombre",
      formEmail: "Correo Electrónico",
      formTopic: "Tema",
      formMessage: "Mensaje",
      formSubmit: "Enviar Consulta",
      formReset: "Limpiar Formulario",
      formSuccessTitle: "Mensaje Preparado para Revisión",
      formSuccessBody:
        "Tu consulta ha sido validada. Para consultas urgentes escribe directamente a",
      topics: {
        feedback: "Sugerencia o comentario",
        correction: "Corrección de fórmula o contenido",
        privacy: "Consulta de privacidad o cookies",
        business: "Consulta general",
      },
      errors: {
        name: "Por favor ingresa tu nombre.",
        email: "Por favor ingresa un correo electrónico válido.",
        message: "Por favor ingresa un mensaje de al menos 10 caracteres.",
      },
    },
    privacy: {
      seoTitle: "Política de Privacidad – DailyCalcWell",
      seoDescription:
        "Conoce cómo DailyCalcWell procesa tus cálculos localmente y gestiona análisis y cookies publicitarias.",
      title: "Política de Privacidad",
      updated: "Última actualización: 24 de noviembre de 2026",
      intro:
        "Esta Política de Privacidad explica cómo DailyCalcWell gestiona la información cuando utilizas nuestras calculadoras diarias y de salud.",
      sections: [
        {
          heading: "1. Entradas Procesadas Localmente",
          body: "Todos los cálculos se ejecutan dentro de tu navegador web. No almacenamos tus datos personales ni médicos en bases de datos.",
        },
        {
          heading: "2. Análisis (Opcional)",
          body: "Si aceptas las cookies analíticas, Google Analytics 4 mide visitas agregadas sin incluir nunca valores de salud personales.",
        },
        {
          heading: "3. Publicidad y Cookies de Terceros",
          body: "Tras la aprobación del sitio, Google AdSense puede mostrar anuncios utilizando cookies según tus preferencias de consentimiento.",
        },
        {
          heading: "4. Registros Técnicos del Servidor",
          body: "El proveedor de alojamiento puede registrar metadatos estándar de solicitud por motivos de seguridad y disponibilidad.",
        },
        {
          heading: "5. Tus Opciones y Contacto",
          body: "Puedes actualizar tu consentimiento en Preferencias de Cookies en el pie de página o escribir a contact@dailycalcwell.com.",
        },
      ],
    },
    terms: {
      seoTitle: "Términos y Condiciones – DailyCalcWell",
      seoDescription:
        "Revisa los Términos y Condiciones de uso de las calculadoras de DailyCalcWell.",
      title: "Términos y Condiciones",
      updated: "Última actualización: 24 de noviembre de 2026",
      sections: [
        {
          heading: "1. Aceptación de Términos",
          body: "Al usar DailyCalcWell (dailycalcwell.com), aceptas cumplir estos Términos y Condiciones y las leyes aplicables.",
        },
        {
          heading: "2. Solo Uso Informativo",
          body: "Todas las calculadoras y guías tienen fines educativos e informativos y no constituyen asesoramiento médico, financiero ni legal.",
        },
        {
          heading: "3. Sin Garantías",
          body: "El sitio se ofrece tal cual. Verifica cálculos financieros, fiscales o médicos críticos con un profesional.",
        },
        {
          heading: "4. Uso Aceptable",
          body: "Puedes usar las herramientas libremente para referencia personal o profesional. No se permite raspar o redistribuir contenido editorial.",
        },
        {
          heading: "5. Contacto",
          body: "Consultas sobre estos términos: contact@dailycalcwell.com.",
        },
      ],
    },
    disclaimer: {
      seoTitle: "Aviso Legal – Información Médica y Financiera",
      seoDescription:
        "Lee el aviso médico, nutricional, de embarazo y financiero de las calculadoras de DailyCalcWell.",
      title: "Aviso Legal",
      updated: "Última actualización: 24 de noviembre de 2026",
      sections: [
        {
          heading: "1. No Constituye Consejo Médico",
          paragraphs: [
            "Las calculadoras de salud de DailyCalcWell son estrictamente educativas e informativas.",
            "No diagnostican enfermedades ni reemplazan la consulta con un médico, dietista o especialista obstétrico.",
          ],
        },
        {
          heading: "2. Limitaciones de Embarazo y Ovulación",
          paragraphs: [
            "Las fechas de parto y ovulación son estimaciones estadísticas basadas en ciclos promedio y NO deben usarse como método anticonceptivo.",
          ],
        },
        {
          heading: "3. Cálculos Comerciales",
          paragraphs: [
            "Las calculadoras de descuento y ganancia calculan porcentajes estándar sin incluir impuestos locales ni normas contables.",
          ],
        },
      ],
    },
    editorial: {
      seoTitle: "Política Editorial – Verificación de Fórmulas",
      seoDescription:
        "Descubre cómo DailyCalcWell verifica fórmulas y cita fuentes médicas y matemáticas confiables.",
      title: "Política Editorial",
      bylinePrefix: "Equipo Editorial de DailyCalcWell · Última revisión:",
      sections: [
        {
          heading: "1. Selección de Fórmulas y Fuentes",
          body: "Cada calculadora utiliza ecuaciones documentadas basadas en publicaciones de OMS, CDC, NIH, ACOG, NHS y NIST.",
        },
        {
          heading: "2. Transparencia de Supuestos",
          body: "Cada página incluye la fórmula aplicada, un ejemplo numérico y sus limitaciones.",
        },
        {
          heading: "3. Atribución Honesta",
          body: "El contenido es mantenido por el Equipo Editorial de DailyCalcWell sin perfiles ficticios y muestra su fecha de revisión.",
        },
        {
          heading: "4. Correcciones",
          body: "Reporta mejoras mediante nuestra página de Contacto; ejecutamos pruebas automatizadas antes de publicar.",
        },
      ],
    },
    cookie: {
      seoTitle: "Política de Cookies – Consentimiento",
      seoDescription:
        "Conoce los tipos de cookies y almacenamiento local usados en DailyCalcWell y gestiona tus preferencias.",
      title: "Política de Cookies",
      updated: "Última actualización: 24 de noviembre de 2026",
      intro:
        "Esta política explica el almacenamiento necesario y las cookies opcionales en DailyCalcWell.",
      sections: [
        {
          heading: "1. Almacenamiento Necesario",
          body: "Guardamos tu preferencia de consentimiento localmente (dailycalcwell_consent_v1) sin rastreo entre sitios.",
        },
        {
          heading: "2. Cookies de Análisis (Opcionales)",
          body: "Si aceptas, Google Analytics 4 mide tráfico agregado sin datos personales de salud.",
        },
        {
          heading: "3. Cookies Publicitarias (Opcionales)",
          body: "Cuando Google AdSense esté habilitado, solo usará cookies según tu consentimiento.",
        },
      ],
      manageButton: "Administrar Preferencias de Cookies",
    },
    sitemap: {
      seoTitle: "Mapa del Sitio HTML – Calculadoras y Páginas",
      seoDescription:
        "Explora el directorio completo de 24 calculadoras diarias y de salud y páginas informativas de DailyCalcWell.",
      title: "Mapa del Sitio",
      subtitlePrefix:
        "Enlaces directos a todas las calculadoras y páginas informativas de DailyCalcWell. Para motores de búsqueda, consulta el",
      xmlLinkLabel: "Mapa XML",
      everydayHeading: "Calculadoras Diarias",
      healthHeading: "Calculadoras de Salud",
      infoHeading: "Categorías e Información",
      homepageLabel: "Página Principal",
      everydayHubLabel: "Categoría Calculadoras Diarias",
      healthHubLabel: "Categoría Calculadoras de Salud",
    },
    notFound: {
      codeLabel: "404 · Página No Encontrada",
      title: "No pudimos encontrar esa calculadora o página.",
      body: "El enlace puede haber cambiado. Explora nuestras calculadoras diarias o de salud a continuación.",
      backHome: "Volver al Inicio",
      browseEveryday: "Ver Calculadoras Diarias",
      browseHealth: "Ver Calculadoras de Salud",
    },
  },
};

const FR_UI: UiDictionary = {
  siteTagline:
    "Calculatrices en ligne gratuites pour le quotidien et la santé",
  skipToContent: "Aller au contenu principal",
  nav: {
    home: "Accueil",
    everyday: "Calculatrices Quotidiennes",
    health: "Calculatrices Santé",
    about: "À propos",
    contact: "Contact",
    search: "Rechercher",
    language: "Langue",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  search: {
    placeholder:
      "Rechercher une calculatrice (ex. IMC, pourcentage, âge, grossesse, remise)...",
    findButton: "Trouver",
    modalTitle: "Trouver une Calculatrice",
    closeSearch: "Fermer la recherche",
    noMatchesPrefix: "Aucune calculatrice trouvée pour",
    noMatchesTry: "Essayez",
    or: "ou",
    clearQuery: "Effacer la recherche",
  },
  footer: {
    blurb:
      "Calculatrices gratuites, rapides et respectueuses de la vie privée pour le quotidien et la santé. Tous les calculs s'exécutent dans votre navigateur.",
    categoriesHeading: "Catégories",
    companyHeading: "À propos & Confiance",
    legalHeading: "Mentions Légales",
    editorialPolicy: "Politique Éditoriale",
    disclaimer: "Avertissement",
    sitemap: "Plan du Site",
    privacyPolicy: "Confidentialité",
    terms: "Conditions d'Utilisation",
    cookiePolicy: "Politique de Cookies",
    cookiePreferences: "Préférences Cookies",
    xmlSitemap: "Sitemap XML",
    copyrightSuffix:
      "Tous droits réservés. Estimations informatives uniquement ; ne remplace pas un avis médical, financier ou juridique.",
    regionReady: "Système métrique & impérial · 150+ devises mondiales",
  },
  consent: {
    bannerText:
      "DailyCalcWell utilise un stockage strictement nécessaire pour vos préférences. Les cookies analytiques et publicitaires restent désactivés sans votre accord.",
    preferences: "Préférences",
    necessaryOnly: "Nécessaires uniquement",
    acceptAll: "Tout accepter",
    dialogTitle: "Préférences de Confidentialité et Cookies",
    dialogSubtitle:
      "Gérez les cookies optionnels. Vos saisies sont calculées localement dans votre navigateur et jamais envoyées aux outils d'analyse.",
    necessaryTitle: "Stockage Nécessaire",
    necessaryDesc:
      "Mémorise vos choix de confidentialité et assure le bon fonctionnement du site. Toujours actif.",
    alwaysActive: "Toujours Actif",
    analyticsTitle: "Cookies Analytiques (GA4)",
    analyticsDesc:
      "Mesure le trafic global sans collecter aucune donnée personnelle de santé.",
    adsTitle: "Cookies Publicitaires (Google AdSense)",
    adsDesc:
      "Prend en charge l'affichage futur de Google AdSense lorsque activé par l'éditeur.",
    savePreferences: "Enregistrer",
    closeDialog: "Fermer la fenêtre",
  },
  datePicker: {
    selectDate: "Choisir une date",
    today: "Aujourd'hui",
    prevMonth: "Mois précédent",
    nextMonth: "Mois suivant",
    chooseDate: "Choisir une date",
    months: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    weekdays: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
  },
  calculatorShell: {
    calculate: "Calculer",
    reset: "Réinitialiser",
    copyResult: "Copier le Résultat",
    copied: "Copié",
    share: "Partager",
    inputError: "Erreur de Saisie",
    copyUnsupported: "La copie n'est pas prise en charge par ce navigateur.",
    shareCopied: "Résultat et lien copiés.",
    shareUnavailable: "Partage indisponible sur ce navigateur.",
  },
  calculatorLayout: {
    editorialTeam: "Équipe Éditoriale DailyCalcWell",
    lastReviewed: "Dernière révision",
    healthNoticeTitle: "Avis Santé et Éducatif Important",
    understandingResult: "Comprendre Votre Résultat",
    stepByStep: "Méthode de Calcul Étape par Étape",
    howToUse: "Comment Utiliser Cette Calculatrice",
    workedExample: "Exemple Détaillé",
    resultLabel: "Résultat",
    assumptionsTitle: "Hypothèses et Limites",
    faqTitle: "Questions Fréquentes",
    referencesTitle: "Références & Sources Méthodologiques",
    sourceLabel: "Source",
    reviewedUnderPrefix: "Vérifié selon la",
    editorialPolicyLink: "Politique Éditoriale DailyCalcWell",
    localExecutionNote: "Les calculs s'exécutent localement dans votre navigateur.",
    relatedCalculators: "Calculatrices Associées",
    popularCalculators: "Calculatrices Populaires",
    allPrefix: "Toutes les",
    backToHome: "Retour à l'Accueil",
  },
  home: {
    seoTitle: "Calculatrices en Ligne Gratuites – Quotidien et Santé",
    seoDescription:
      "Calculatrices gratuites pour pourcentages, moyennes, âge exact, dates, IMC, besoins caloriques, grossesse et plus en unités métriques ou impériales.",
    heroTitle: "Calculatrices en Ligne Gratuites pour le Quotidien et la Santé",
    heroSubtitle:
      "Calculez facilement pourcentages, moyennes, âge exact, dates, IMC, calories quotidiennes, dates de grossesse et plus encore en unités métriques ou impériales.",
    categoryToolsLabel: "Catégorie · 12 Outils",
    browseEveryday: "Voir les Calculatrices Quotidiennes",
    browseHealth: "Voir les Calculatrices Santé",
    popularHeading: "Calculatrices Populaires",
    popularSubtitle:
      "Les outils les plus utilisés pour les calculs quotidiens et le bien-être.",
    everydayHeading: "Calculatrices Quotidiennes",
    viewAllEveryday: "Tout voir (Quotidien)",
    healthHeading: "Calculatrices Santé",
    viewAllHealth: "Tout voir (Santé)",
    recentHeading: "Récemment Ajoutées",
    recentSubtitle:
      "Nouveaux outils pour marges commerciales, horaires, composition corporelle et cycle.",
    howToUseHeading: "Comment Utiliser les Outils DailyCalcWell",
    step1Title: "01. Choisissez Vos Unités ou Devises",
    step1Body:
      "Basculez entre unités métriques (kg, cm, litres) et impériales (lb, ft/in, fl oz), ainsi qu'entre USD ($) et INR (₹).",
    step2Title: "02. Vérifiez Formules & Hypothèses",
    step2Body:
      "Chaque page détaille la formule exacte, les étapes, un exemple chiffré et les limites méthodologiques.",
    step3Title: "03. Copiez, Réinitialisez ou Partagez",
    step3Body:
      "Tout s'exécute instantanément dans votre navigateur avec validation accessible et copie en un clic.",
    faqHeading: "Questions Fréquentes",
    faqs: [
      {
        question: "Toutes les calculatrices DailyCalcWell sont-elles gratuites ?",
        answer:
          "Oui. Chaque outil est entièrement gratuit, sans inscription ni téléchargement.",
      },
      {
        question: "Les unités métriques et impériales sont-elles prises en charge ?",
        answer:
          "Oui, les outils prennent en charge kg/cm/litres ainsi que lb/ft-in/fl oz, et les devises USD ($) et INR (₹).",
      },
      {
        question: "Mes données personnelles sont-elles enregistrées sur un serveur ?",
        answer:
          "Non. Tous les calculs s'effectuent localement dans votre navigateur et aucune donnée de santé n'est stockée.",
      },
      {
        question: "Les outils santé remplacent-ils un avis médical ?",
        answer:
          "Non. Ce sont des estimations éducatives basées sur des formules publiées (Mifflin-St Jeor, IMC, modèle 280 jours). Consultez un professionnel de santé.",
      },
    ],
  },
  categories: {
    everyday: {
      name: "Calculatrices Quotidiennes",
      seoTitle: "Calculatrices Quotidiennes – Pourcentages, Dates, Âge & Unités",
      seoDescription:
        "Calculatrices gratuites : pourcentages, moyennes, âge exact, dates, remises, profits et pertes, ratios, fractions et conversions.",
      intro:
        "Outils pratiques pour calculs courants, remises commerciales, marges, planification de dates, durée et conversions d'unités.",
      sectionHeading: "Conçues pour un Usage Quotidien Mondial",
      sectionBody:
        "Que vous calculiez une remise, un écart entre deux dates ou une conversion métrique-impériale, chaque outil s'exécute instantanément avec transparence des formules.",
      crossLinkPrefix: "Besoin d'outils bien-être ou maternité ? Consultez nos",
      crossLinkLabel: "Calculatrices Santé",
    },
    health: {
      name: "Calculatrices Santé",
      seoTitle: "Calculatrices Santé – IMC, Métabolisme, Calories & Grossesse",
      seoDescription:
        "Calculatrices santé gratuites : IMC, BMR, TDEE, calories, poids idéal, masse grasse, protéines, hydratation, grossesse et ovulation.",
      intro:
        "Outils d'estimation bien-être et maternité fondés sur des équations publiées en unités métriques et impériales.",
      notice:
        "Ces outils fournissent des estimations éducatives générales et ne remplacent jamais l'avis d'un médecin, diététicien ou obstétricien.",
      sectionHeading: "Calculs Santé Axés sur la Confidentialité",
      sectionBody:
        "Tous les calculs corporels, nutritionnels et de grossesse restent strictement dans votre navigateur sans transmission vers un serveur.",
      crossLinkPrefix: "Besoin d'outils mathématiques ou calendaires ? Voir nos",
      crossLinkLabel: "Calculatrices Quotidiennes",
    },
  },
  pages: {
    about: {
      seoTitle: "À propos – Calculatrices en Ligne DailyCalcWell",
      seoDescription:
        "Découvrez DailyCalcWell, notre mission de transparence mathématique et notre engagement envers la vie privée.",
      title: "À propos de DailyCalcWell",
      lead:
        "DailyCalcWell est une plateforme indépendante dédiée aux Calculatrices Quotidiennes et Calculatrices Santé, conçue pour offrir des résultats rapides, clairs et transparents.",
      globalHeading: "Conçu pour un Public International",
      globalBody:
        "Nos outils prennent en charge le système métrique et impérial ainsi que plusieurs devises pour s'adapter aux utilisateurs du monde entier.",
      transparencyHeading: "Transparencia & Exactitude des Formules",
      transparencyBody:
        "Chaque page présente la formule utilisée, un exemple chiffré et ses limites, en citant l'OMS, le CDC, le NIH et l'ACOG.",
      publisherHeading: "Informations Éditeur",
      operatedBy: "Édité par :",
      contactEmail: "E-mail :",
      location: "Localisation :",
      readEditorial: "Lire la Politique Éditoriale",
      contactUs: "Nous Contacter",
    },
    contact: {
      seoTitle: "Contact – Support & Suggestions DailyCalcWell",
      seoDescription:
        "Contactez DailyCalcWell pour signaler un problème, suggérer un outil ou poser une question sur la confidentialité.",
      title: "Contact",
      subtitle:
        "Une question sur une formule ou la confidentialité ? Utilisez les coordonnées ou le formulaire ci-dessous.",
      detailsHeading: "Coordonnées Directes",
      publisherLabel: "Éditeur",
      emailLabel: "E-mail",
      addressLabel: "Adresse Postale",
      noteText:
        "Note : Remplacez les mentions entre crochets par vos coordonnées vérifiées avant votre demande Google AdSense.",
      formName: "Votre Nom",
      formEmail: "Adresse E-mail",
      formTopic: "Sujet",
      formMessage: "Message",
      formSubmit: "Envoyer",
      formReset: "Réinitialiser",
      formSuccessTitle: "Message Prêt pour Examen",
      formSuccessBody:
        "Votre demande a été validée. Pour toute urgence, écrivez directement à",
      topics: {
        feedback: "Suggestion ou avis",
        correction: "Correction de formule",
        privacy: "Question vie privée / cookies",
        business: "Demande générale",
      },
      errors: {
        name: "Veuillez saisir votre nom.",
        email: "Veuillez saisir une adresse e-mail valide.",
        message: "Veuillez saisir un message d'au moins 10 caractères.",
      },
    },
    privacy: {
      seoTitle: "Politique de Confidentialité – DailyCalcWell",
      seoDescription:
        "Comment DailyCalcWell traite vos données localement et gère cookies analytiques et publicitaires.",
      title: "Politique de Confidentialité",
      updated: "Dernière mise à jour : 24 novembre 2026",
      intro:
        "Cette politique explique comment DailyCalcWell traite les informations lors de votre visite.",
      sections: [
        {
          heading: "1. Traitement Local dans le Navigateur",
          body: "Toutes les saisies sont calculées localement dans votre navigateur et ne sont jamais stockées en base de données.",
        },
        {
          heading: "2. Mesure d'Audience (Optionnelle)",
          body: "Si vous acceptez les cookies analytiques, Google Analytics 4 mesure l'audience globale sans aucune donnée personnelle de santé.",
        },
        {
          heading: "3. Publicité et Cookies Tiers",
          body: "Après approbation, Google AdSense peut utiliser des cookies selon votre consentement.",
        },
        {
          heading: "4. Journaux Techniques",
          body: "L'hébergeur peut conserver des journaux techniques temporaires pour la sécurité et la disponibilité.",
        },
        {
          heading: "5. Vos Choix & Contact",
          body: "Modifiez votre consentement à tout moment via Préférences Cookies ou écrivez à contact@dailycalcwell.com.",
        },
      ],
    },
    terms: {
      seoTitle: "Conditions d'Utilisation – DailyCalcWell",
      seoDescription:
        "Consultez les Conditions d'Utilisation des calculatrices en ligne DailyCalcWell.",
      title: "Conditions d'Utilisation",
      updated: "Dernière mise à jour : 24 novembre 2026",
      sections: [
        {
          heading: "1. Acceptation",
          body: "En accédant à DailyCalcWell (dailycalcwell.com), vous acceptez ces conditions.",
        },
        {
          heading: "2. Usage Informatif Uniquement",
          body: "Les calculatrices et guides sont purement éducatifs et ne remplacent pas un avis médical, fiscal ou juridique.",
        },
        {
          heading: "3. Absence de Garantie",
          body: "Le service est fourni en l'état ; vérifiez tout calcul critique auprès d'un professionnel.",
        },
        {
          heading: "4. Propriété Intellectuelle",
          body: "L'utilisation personnelle et éducative est libre ; l'extraction automatisée du contenu éditorial est interdite.",
        },
        {
          heading: "5. Contact",
          body: "Questions : contact@dailycalcwell.com.",
        },
      ],
    },
    disclaimer: {
      seoTitle: "Avertissement Médical & Financier",
      seoDescription:
        "Consultez l'avertissement médical, nutritionnel, de grossesse et financier de DailyCalcWell.",
      title: "Avertissement",
      updated: "Dernière mise à jour : 24 novembre 2026",
      sections: [
        {
          heading: "1. Pas d'Avis Médical",
          paragraphs: [
            "Les calculatrices santé sont fournies uniquement à titre éducatif.",
            "Elles ne posent aucun diagnostic et ne remplacent pas un médecin ou diététicien.",
          ],
        },
        {
          heading: "2. Grossesse & Ovulation",
          paragraphs: [
            "Les dates d'accouchement et d'ovulation sont des estimations statistiques et ne doivent JAMAIS servir de méthode contraceptive.",
          ],
        },
        {
          heading: "3. Calculs Commerciaux",
          paragraphs: [
            "Les outils de remise et de marge n'incluent pas automatiquement les taxes locales (TVA, GST).",
          ],
        },
      ],
    },
    editorial: {
      seoTitle: "Politique Éditoriale – Standards & Sources",
      seoDescription:
        "Comment DailyCalcWell vérifie ses formules et cite ses sources scientifiques.",
      title: "Politique Éditoriale",
      bylinePrefix: "Équipe Éditoriale DailyCalcWell · Dernière révision :",
      sections: [
        {
          heading: "1. Sources Crédibles",
          body: "Nos outils s'appuient sur des équations publiées par l'OMS, le CDC, le NIH, l'ACOG, le NHS et le NIST.",
        },
        {
          heading: "2. Transparence des Limites",
          body: "Chaque page détaille la formule, un exemple pratique et les limites statistiques.",
        },
        {
          heading: "3. Attribution Honnête",
          body: "Le contenu est rédigé par l'équipe DailyCalcWell sans profils fictifs et indique la date de révision.",
        },
        {
          heading: "4. Corrections",
          body: "Signalez toute remarque via Contact ; des tests automatisés vérifient la logique avant déploiement.",
        },
      ],
    },
    cookie: {
      seoTitle: "Politique de Cookies – Préférences",
      seoDescription:
        "Gérez les préférences de stockage et cookies sur DailyCalcWell.",
      title: "Politique de Cookies",
      updated: "Dernière mise à jour : 24 novembre 2026",
      intro:
        "Cette page décrit les cookies et le stockage local utilisés sur DailyCalcWell.",
      sections: [
        {
          heading: "1. Stockage Nécessaire",
          body: "Votre choix est conservé localement sous dailycalcwell_consent_v1 sans suivi inter-sites.",
        },
        {
          heading: "2. Cookies Analytiques (Optionnels)",
          body: "Avec votre accord, Google Analytics 4 mesure l'audience globale sans données de santé.",
        },
        {
          heading: "3. Cookies Publicitaires (Optionnels)",
          body: "Google AdSense n'utilise de cookies publicitaires qu'après activation et consentement.",
        },
      ],
      manageButton: "Gérer les Préférences Cookies",
    },
    sitemap: {
      seoTitle: "Plan du Site HTML – Calculatrices DailyCalcWell",
      seoDescription:
        "Accédez aux 24 calculatrices quotidiennes et santé ainsi qu'aux pages légales de DailyCalcWell.",
      title: "Plan du Site",
      subtitlePrefix:
        "Liens directs vers toutes les calculatrices et pages de DailyCalcWell. Pour les moteurs de recherche, voir le",
      xmlLinkLabel: "Sitemap XML",
      everydayHeading: "Calculatrices Quotidiennes",
      healthHeading: "Calculatrices Santé",
      infoHeading: "Catégories & Informations",
      homepageLabel: "Accueil",
      everydayHubLabel: "Hub Calculatrices Quotidiennes",
      healthHubLabel: "Hub Calculatrices Santé",
    },
    notFound: {
      codeLabel: "404 · Page Introuvable",
      title: "Impossible de trouver cette calculatrice ou page.",
      body: "Le lien a peut-être changé. Parcourez nos calculatrices ci-dessous.",
      backHome: "Retour à l'Accueil",
      browseEveryday: "Calculatrices Quotidiennes",
      browseHealth: "Calculatrices Santé",
    },
  },
};

const DE_UI: UiDictionary = {
  siteTagline:
    "Kostenlose Online-Rechner für Alltag und Gesundheit",
  skipToContent: "Zum Hauptinhalt springen",
  nav: {
    home: "Startseite",
    everyday: "Alltagsrechner",
    health: "Gesundheitsrechner",
    about: "Über uns",
    contact: "Kontakt",
    search: "Suche",
    language: "Sprache",
    openMenu: "Navigationsmenü öffnen",
    closeMenu: "Navigationsmenü schließen",
  },
  search: {
    placeholder:
      "Rechner suchen (z. B. BMI, Prozent, Alter, Geburtstermin, Rabatt)...",
    findButton: "Finden",
    modalTitle: "Rechner finden",
    closeSearch: "Suche schließen",
    noMatchesPrefix: "Keine Rechner gefunden für",
    noMatchesTry: "Versuchen Sie",
    or: "oder",
    clearQuery: "Suche leeren",
  },
  footer: {
    blurb:
      "Kostenlose, schnelle und datenschutzfreundliche Alltags- und Gesundheitsrechner. Alle Berechnungen laufen direkt in Ihrem Browser.",
    categoriesHeading: "Kategorien",
    companyHeading: "Über uns & Vertrauen",
    legalHeading: "Rechtliches & Datenschutz",
    editorialPolicy: "Redaktionsrichtlinie",
    disclaimer: "Haftungsausschluss",
    sitemap: "Sitemap",
    privacyPolicy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    cookiePolicy: "Cookie-Richtlinie",
    cookiePreferences: "Cookie-Einstellungen",
    xmlSitemap: "XML-Sitemap",
    copyrightSuffix:
      "Alle Rechte vorbehalten. Nur zu Informationszwecken; keine medizinische, finanzielle oder rechtliche Beratung.",
    regionReady: "Metrisch & Imperial · 150+ Weltwährungen unterstützt",
  },
  consent: {
    bannerText:
      "DailyCalcWell nutzt technisch notwendige Speicherung für Einstellungen. Optionale Analyse- und Werbe-Cookies bleiben ohne Zustimmung deaktiviert.",
    preferences: "Einstellungen",
    necessaryOnly: "Nur Notwendige",
    acceptAll: "Alle Akzeptieren",
    dialogTitle: "Datenschutz- & Cookie-Einstellungen",
    dialogSubtitle:
      "Verwalten Sie optionale Cookies. Ihre Eingaben werden lokal im Browser berechnet und niemals an Analysedienste gesendet.",
    necessaryTitle: "Notwendige Speicherung",
    necessaryDesc:
      "Speichert Ihre Datenschutzwahl und sichert die Grundfunktionen der Website. Immer aktiv.",
    alwaysActive: "Immer Aktiv",
    analyticsTitle: "Analyse-Cookies (GA4)",
    analyticsDesc:
      "Misst aggregierte Seitenaufrufe ohne Erfassung persönlicher Gesundheitswerte.",
    adsTitle: "Werbe-Cookies (Google AdSense)",
    adsDesc:
      "Unterstützt künftige Google AdSense-Anzeigen nach Aktivierung durch den Betreiber.",
    savePreferences: "Auswahl speichern",
    closeDialog: "Dialog schließen",
  },
  datePicker: {
    selectDate: "Datum wählen",
    today: "Heute",
    prevMonth: "Vorheriger Monat",
    nextMonth: "Nächster Monat",
    chooseDate: "Datum auswählen",
    months: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ],
    weekdays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  },
  calculatorShell: {
    calculate: "Berechnen",
    reset: "Zurücksetzen",
    copyResult: "Ergebnis kopieren",
    copied: "Kopiert",
    share: "Teilen",
    inputError: "Eingabefehler",
    copyUnsupported: "Kopieren wird von diesem Browser nicht unterstützt.",
    shareCopied: "Ergebnis und Link in die Zwischenablage kopiert.",
    shareUnavailable: "Teilen ist in diesem Browser nicht verfügbar.",
  },
  calculatorLayout: {
    editorialTeam: "DailyCalcWell Redaktion",
    lastReviewed: "Zuletzt geprüft",
    healthNoticeTitle: "Wichtiger Gesundheits- & Bildungshinweis",
    understandingResult: "Ihr Ergebnis verstehen",
    stepByStep: "Schritt-für-Schritt-Berechnung",
    howToUse: "So verwenden Sie diesen Rechner",
    workedExample: "Rechenbeispiel",
    resultLabel: "Ergebnis",
    assumptionsTitle: "Annahmen und Grenzen",
    faqTitle: "Häufig gestellte Fragen",
    referencesTitle: "Quellen & Methodik",
    sourceLabel: "Quelle",
    reviewedUnderPrefix: "Geprüft nach der",
    editorialPolicyLink: "DailyCalcWell Redaktionsrichtlinie",
    localExecutionNote: "Berechnungen laufen lokal in Ihrem Browser.",
    relatedCalculators: "Verwandte Rechner",
    popularCalculators: "Beliebte Rechner",
    allPrefix: "Alle",
    backToHome: "Zur Startseite",
  },
  home: {
    seoTitle: "Kostenlose Online-Rechner für Alltag und Gesundheit",
    seoDescription:
      "Berechnen Sie Prozente, Durchschnitte, exaktes Alter, Daten, BMI, Kalorienbedarf, Schwangerschaftsdaten und mehr in metrischen oder imperialen Einheiten.",
    heroTitle: "Kostenlose Online-Rechner für Alltag und Gesundheit",
    heroSubtitle:
      "Berechnen Sie schnell Prozente, Durchschnitte, Alter, Daten, BMI, täglichen Kalorienbedarf, Schwangerschaftsdaten und mehr in metrischen oder imperialen Einheiten.",
    categoryToolsLabel: "Kategorie · 12 Tools",
    browseEveryday: "Alltagsrechner ansehen",
    browseHealth: "Gesundheitsrechner ansehen",
    popularHeading: "Beliebte Rechner",
    popularSubtitle:
      "Meistgenutzte Werkzeuge für Alltagsmathematik und Gesundheit.",
    everydayHeading: "Alltagsrechner",
    viewAllEveryday: "Alle Alltagsrechner",
    healthHeading: "Gesundheitsrechner",
    viewAllHealth: "Alle Gesundheitsrechner",
    recentHeading: "Neu hinzugefügt",
    recentSubtitle:
      "Neue Rechner für Preiskalkulation, Arbeitszeit, Körperzusammensetzung und Zyklusplanung.",
    howToUseHeading: "So nutzen Sie DailyCalcWell",
    step1Title: "01. Einheiten oder Währung wählen",
    step1Body:
      "Wechseln Sie flexibel zwischen metrischen (kg, cm, Liter) und imperialen Einheiten (lb, ft/in, fl oz) sowie USD ($) und INR (₹).",
    step2Title: "02. Formeln & Annahmen prüfen",
    step2Body:
      "Jede Rechnerseite erklärt die exakte Formel, Rechenschritte, ein Beispiel und wichtige Grenzen.",
    step3Title: "03. Kopieren, Zurücksetzen oder Teilen",
    step3Body:
      "Alle Berechnungen laufen sofort im Browser mit zugänglicher Validierung und Ein-Klick-Kopie.",
    faqHeading: "Häufig gestellte Fragen",
    faqs: [
      {
        question: "Sind alle Rechner auf DailyCalcWell kostenlos?",
        answer:
          "Ja. Alle Alltags- und Gesundheitsrechner sind kostenlos und ohne Anmeldung nutzbar.",
      },
      {
        question: "Werden metrische und imperiale Einheiten unterstützt?",
        answer:
          "Ja, sowohl kg/cm/Liter als auch lb/ft-in/fl oz sowie USD ($) und INR (₹).",
      },
      {
        question: "Werden meine persönlichen Daten auf einem Server gespeichert?",
        answer:
          "Nein. Alle Berechnungen laufen lokal im Browser und Gesundheitsdaten werden niemals gespeichert.",
      },
      {
        question: "Ersetzen Gesundheitsrechner eine ärztliche Diagnose?",
        answer:
          "Nein. Sie bieten Schätzungen auf Basis wissenschaftlicher Formeln und ersetzen keinen Arztbesuch.",
      },
    ],
  },
  categories: {
    everyday: {
      name: "Alltagsrechner",
      seoTitle: "Alltagsrechner – Prozente, Daten, Alter & Einheiten",
      seoDescription:
        "Kostenlose Online-Rechner für Prozente, Durchschnitt, exaktes Alter, Datumsdifferenz, Rabatt, Gewinn & Verlust, Verhältnis, Brüche und Zeit.",
      intro:
        "Praktische Rechner für Alltagsmathematik, Rabatte, Margen, Terminplanung, Arbeitszeiten und Einheitenumrechnung.",
      sectionHeading: "Für den weltweiten Alltag entwickelt",
      sectionBody:
        "Ob Rabattberechnung, Datumsplanung oder Einheitenumrechnung: Jedes Tool arbeitet transparent mit klar dokumentierter Formel im Browser.",
      crossLinkPrefix: "Suchen Sie Wellness- oder Schwangerschaftsrechner? Zu unseren",
      crossLinkLabel: "Gesundheitsrechnern",
    },
    health: {
      name: "Gesundheitsrechner",
      seoTitle: "Gesundheitsrechner – BMI, Grundumsatz, Kalorien & Schwangerschaft",
      seoDescription:
        "Kostenlose Rechner für BMI, BMR, TDEE, Kalorienbedarf, Idealgewicht, Körperfett, Protein, Wasserbedarf, Schwangerschaft und Eisprung.",
      intro:
        "Evidenzbasierte Rechner für Gesundheit und Schwangerschaft in metrischen und imperialen Einheiten.",
      notice:
        "Gesundheitsrechner liefern allgemeine Schätzungen und ersetzen keine medizinische Beratung oder Diagnose durch Ärzte.",
      sectionHeading: "Datenschutzfreundliche Gesundheitsberechnung",
      sectionBody:
        "Alle Körper-, Kalorien-, Flüssigkeits- und Schwangerschaftsberechnungen laufen ausschließlich lokal in Ihrem Browser.",
      crossLinkPrefix: "Brauchen Sie Alltagsmathematik oder Datumsrechner? Zu unseren",
      crossLinkLabel: "Alltagsrechnern",
    },
  },
  pages: {
    about: {
      seoTitle: "Über uns – DailyCalcWell Online-Rechner",
      seoDescription:
        "Erfahren Sie mehr über DailyCalcWell, unsere Mission für präzise Alltags- und Gesundheitsrechner und Datenschutz.",
      title: "Über DailyCalcWell",
      lead:
        "DailyCalcWell ist eine unabhängige Plattform für Alltagsrechner und Gesundheitsrechner mit Fokus auf Klarheit, Transparenz und Datenschutz.",
      globalHeading: "Für Nutzer weltweit entwickelt",
      globalBody:
        "Unsere Rechner unterstützen metrische und imperiale Maßeinheiten sowie internationale Währungen.",
      transparencyHeading: "Transparenz & Formelgenauigkeit",
      transparencyBody:
        "Jede Seite nennt Formel, Rechenweg, Beispiel und Grenzen und verweist auf WHO, CDC, NIH und ACOG.",
      publisherHeading: "Herausgeber-Details",
      operatedBy: "Betrieben von:",
      contactEmail: "Kontakt-E-Mail:",
      location: "Standort:",
      readEditorial: "Redaktionsrichtlinie lesen",
      contactUs: "Kontakt",
    },
    contact: {
      seoTitle: "Kontakt – Feedback & Support",
      seoDescription:
        "Kontaktieren Sie DailyCalcWell bei Fragen zu Formeln, Fehlern oder Datenschutz.",
      title: "Kontakt",
      subtitle:
        "Feedback zu einer Formel oder Fragen zum Datenschutz? Nutzen Sie das Formular oder die Kontaktdaten.",
      detailsHeading: "Direkter Kontakt",
      publisherLabel: "Herausgeber",
      emailLabel: "E-Mail",
      addressLabel: "Postanschrift",
      noteText:
        "Hinweis: Ersetzen Sie die Platzhalter vor der Google AdSense-Prüfung durch Ihre echten Firmendaten.",
      formName: "Ihr Name",
      formEmail: "E-Mail-Adresse",
      formTopic: "Thema",
      formMessage: "Nachricht",
      formSubmit: "Anfrage senden",
      formReset: "Zurücksetzen",
      formSuccessTitle: "Nachricht vorbereitet",
      formSuccessBody:
        "Ihre Anfrage wurde geprüft. Bei dringenden Anliegen schreiben Sie bitte direkt an",
      topics: {
        feedback: "Feedback oder Vorschlag",
        correction: "Formel- oder Inhaltskorrektur",
        privacy: "Datenschutz / Cookies",
        business: "Allgemeine Anfrage",
      },
      errors: {
        name: "Bitte geben Sie Ihren Namen ein.",
        email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        message: "Bitte geben Sie mindestens 10 Zeichen ein.",
      },
    },
    privacy: {
      seoTitle: "Datenschutzerklärung – DailyCalcWell",
      seoDescription:
        "Wie DailyCalcWell Eingaben lokal verarbeitet und optionale Analyse- sowie Werbe-Cookies handhabt.",
      title: "Datenschutzerklärung",
      updated: "Zuletzt aktualisiert: 24. November 2026",
      intro:
        "Diese Datenschutzerklärung erläutert die Verarbeitung von Informationen auf DailyCalcWell.",
      sections: [
        {
          heading: "1. Lokale Berechnung im Browser",
          body: "Alle Eingaben werden ausschließlich lokal im Browser berechnet und nicht auf Servern gespeichert.",
        },
        {
          heading: "2. Analyse (Optional)",
          body: "Nach Ihrer Einwilligung misst Google Analytics 4 aggregierte Zugriffe ohne Gesundheitsdaten.",
        },
        {
          heading: "3. Werbung & Drittanbieter-Cookies",
          body: "Nach Freigabe kann Google AdSense gemäß Ihren Cookie-Einstellungen Anzeigen schalten.",
        },
        {
          heading: "4. Server-Logs",
          body: "Der Hosting-Anbieter speichert aus Sicherheitsgründen temporäre technische Zugriffsprotokolle.",
        },
        {
          heading: "5. Ihre Rechte & Kontakt",
          body: "Passen Sie Ihre Auswahl jederzeit in den Cookie-Einstellungen an oder schreiben Sie an contact@dailycalcwell.com.",
        },
      ],
    },
    terms: {
      seoTitle: "Nutzungsbedingungen – DailyCalcWell",
      seoDescription:
        "Lesen Sie die Nutzungsbedingungen von DailyCalcWell.",
      title: "Nutzungsbedingungen",
      updated: "Zuletzt aktualisiert: 24. November 2026",
      sections: [
        {
          heading: "1. Zustimmung",
          body: "Durch die Nutzung von DailyCalcWell (dailycalcwell.com) stimmen Sie diesen Bedingungen zu.",
        },
        {
          heading: "2. Nur zu Informationszwecken",
          body: "Alle Rechner dienen ausschließlich Bildungs- und Informationszwecken und ersetzen keine Fachberatung.",
        },
        {
          heading: "3. Keine Gewährleistung",
          body: "Die Nutzung erfolgt ohne Gewähr; überprüfen Sie kritische Berechnungen unabhängig.",
        },
        {
          heading: "4. Zulässige Nutzung",
          body: "Private und geschäftliche Nutzung der Rechner ist frei; automatisiertes Scraping der Inhalte ist untersagt.",
        },
        {
          heading: "5. Kontakt",
          body: "Fragen richten Sie bitte an contact@dailycalcwell.com.",
        },
      ],
    },
    disclaimer: {
      seoTitle: "Haftungsausschluss – Medizin & Finanzen",
      seoDescription:
        "Medizinischer, Ernährungs-, Schwangerschafts- und Finanz-Haftungsausschluss von DailyCalcWell.",
      title: "Haftungsausschluss",
      updated: "Zuletzt aktualisiert: 24. November 2026",
      sections: [
        {
          heading: "1. Keine medizinische Beratung",
          paragraphs: [
            "Alle Gesundheitsrechner dienen ausschließlich der allgemeinen Information.",
            "Sie stellen keine Diagnosen und ersetzen keinen Arzt oder Ernährungsberater.",
          ],
        },
        {
          heading: "2. Schwangerschaft & Eisprung",
          paragraphs: [
            "Geburtstermine und fruchtbare Tage sind statistische Schätzungen und dürfen NIEMALS zur Empfängnisverhütung verwendet werden.",
          ],
        },
        {
          heading: "3. Finanz- & Geschäftsmathematik",
          paragraphs: [
            "Rabatt- und Gewinnrechner berücksichtigen keine automatischen Steuersätze (z. B. MwSt./GST).",
          ],
        },
      ],
    },
    editorial: {
      seoTitle: "Redaktionsrichtlinie – Formelprüfung",
      seoDescription:
        "Wie DailyCalcWell Formeln prüft und wissenschaftliche Quellen angibt.",
      title: "Redaktionsrichtlinie",
      bylinePrefix: "DailyCalcWell Redaktion · Zuletzt geprüft:",
      sections: [
        {
          heading: "1. Quellen & Standards",
          body: "Wir nutzen dokumentierte Gleichungen basierend auf WHO, CDC, NIH, ACOG, NHS und NIST.",
        },
        {
          heading: "2. Transparenz",
          body: "Jede Seite nennt Formel, Beispiel und Grenzen.",
        },
        {
          heading: "3. Ehrliche Autorschaft",
          body: "Inhalte werden ohne erfundene Expertenprofile gepflegt und mit Prüfdatum versehen.",
        },
        {
          heading: "4. Korrekturen",
          body: "Melden Sie Hinweise über Kontakt; automatisierte Tests prüfen die Logik vor jedem Update.",
        },
      ],
    },
    cookie: {
      seoTitle: "Cookie-Richtlinie – Einstellungen",
      seoDescription:
        "Informationen zu notwendigen und optionalen Cookies auf DailyCalcWell.",
      title: "Cookie-Richtlinie",
      updated: "Zuletzt aktualisiert: 24. November 2026",
      intro:
        "Diese Richtlinie erklärt die Nutzung von Cookies und lokalem Speicher auf DailyCalcWell.",
      sections: [
        {
          heading: "1. Notwendige Speicherung",
          body: "Ihre Auswahl wird lokal unter dailycalcwell_consent_v1 gespeichert.",
        },
        {
          heading: "2. Analyse-Cookies (Optional)",
          body: "Nur bei Zustimmung misst Google Analytics 4 aggregierte Zugriffe.",
        },
        {
          heading: "3. Werbe-Cookies (Optional)",
          body: "Google AdSense nutzt Cookies erst nach Freigabe und Einwilligung.",
        },
      ],
      manageButton: "Cookie-Einstellungen verwalten",
    },
    sitemap: {
      seoTitle: "HTML-Sitemap – Alle Rechner",
      seoDescription:
        "Vollständige Übersicht aller 24 Alltags- und Gesundheitsrechner von DailyCalcWell.",
      title: "Website-Sitemap",
      subtitlePrefix:
        "Direktlinks zu allen Rechnern und Seiten auf DailyCalcWell. Für Suchmaschinen:",
      xmlLinkLabel: "XML-Sitemap",
      everydayHeading: "Alltagsrechner",
      healthHeading: "Gesundheitsrechner",
      infoHeading: "Kategorien & Infos",
      homepageLabel: "Startseite",
      everydayHubLabel: "Alltagsrechner-Übersicht",
      healthHubLabel: "Gesundheitsrechner-Übersicht",
    },
    notFound: {
      codeLabel: "404 · Seite nicht gefunden",
      title: "Dieser Rechner oder diese Seite wurde nicht gefunden.",
      body: "Der Link wurde möglicherweise verschoben. Wählen Sie unten eine Kategorie aus.",
      backHome: "Zur Startseite",
      browseEveryday: "Alltagsrechner ansehen",
      browseHealth: "Gesundheitsrechner ansehen",
    },
  },
};

const PT_UI: UiDictionary = {
  siteTagline:
    "Calculadoras online gratuitas para o dia a dia e saúde",
  skipToContent: "Ir para o conteúdo principal",
  nav: {
    home: "Início",
    everyday: "Calculadoras Diárias",
    health: "Calculadoras de Saúde",
    about: "Sobre Nós",
    contact: "Contato",
    search: "Buscar",
    language: "Idioma",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  search: {
    placeholder:
      "Buscar calculadoras (ex. IMC, porcentagem, idade, gravidez, desconto)...",
    findButton: "Buscar",
    modalTitle: "Encontrar Calculadora",
    closeSearch: "Fechar busca",
    noMatchesPrefix: "Nenhuma calculadora encontrada para",
    noMatchesTry: "Tente",
    or: "ou",
    clearQuery: "Limpar busca",
  },
  footer: {
    blurb:
      "Calculadoras gratuitas, rápidas e privadas para o dia a dia e saúde. Todos os cálculos rodam diretamente no seu navegador.",
    categoriesHeading: "Categorias",
    companyHeading: "Empresa & Confiança",
    legalHeading: "Legal & Privacidade",
    editorialPolicy: "Política Editorial",
    disclaimer: "Aviso Legal",
    sitemap: "Mapa do Site",
    privacyPolicy: "Política de Privacidade",
    terms: "Termos de Uso",
    cookiePolicy: "Política de Cookies",
    cookiePreferences: "Preferências de Cookies",
    xmlSitemap: "Sitemap XML",
    copyrightSuffix:
      "Todos os direitos reservados. Estimativas apenas informativas; não substituem orientação médica, financeira ou jurídica.",
    regionReady: "Métrico e Imperial · +150 moedas mundiais suportadas",
  },
  consent: {
    bannerText:
      "DailyCalcWell usa armazenamento estritamente necessário para preferências. Cookies opcionais de análise e anúncios permanecem desativados sem aceitação.",
    preferences: "Preferências",
    necessaryOnly: "Apenas Necessários",
    acceptAll: "Aceitar Todos",
    dialogTitle: "Preferências de Privacidade e Cookies",
    dialogSubtitle:
      "Gerencie cookies opcionais. Os dados inseridos são processados localmente no navegador e nunca são enviados para análise.",
    necessaryTitle: "Armazenamento Necessário",
    necessaryDesc:
      "Memoriza sua escolha de privacidade e garante o funcionamento essencial do site. Sempre ativo.",
    alwaysActive: "Sempre Ativo",
    analyticsTitle: "Cookies de Análise (GA4)",
    analyticsDesc:
      "Ajuda a medir visitas agregadas sem coletar dados pessoais de saúde.",
    adsTitle: "Cookies de Publicidade (Google AdSense)",
    adsDesc:
      "Suporta exibição futura do Google AdSense quando ativado pelo editor.",
    savePreferences: "Salvar Preferências",
    closeDialog: "Fechar preferências",
  },
  datePicker: {
    selectDate: "Selecionar data",
    today: "Hoje",
    prevMonth: "Mês anterior",
    nextMonth: "Próximo mês",
    chooseDate: "Escolher data",
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    weekdays: ["Do", "Se", "Te", "Qa", "Qi", "Sx", "Sá"],
  },
  calculatorShell: {
    calculate: "Calcular",
    reset: "Redefinir",
    copyResult: "Copiar Resultado",
    copied: "Copiado",
    share: "Compartilhar",
    inputError: "Erro de Entrada",
    copyUnsupported: "Cópia não suportada neste navegador.",
    shareCopied: "Resultado e link copiados.",
    shareUnavailable: "Compartilhamento indisponível neste navegador.",
  },
  calculatorLayout: {
    editorialTeam: "Equipe Editorial DailyCalcWell",
    lastReviewed: "Última revisão",
    healthNoticeTitle: "Aviso Importante de Saúde e Educação",
    understandingResult: "Entendendo o Seu Resultado",
    stepByStep: "Método Passo a Passo",
    howToUse: "Como Usar Esta Calculadora",
    workedExample: "Exemplo Prático",
    resultLabel: "Resultado",
    assumptionsTitle: "Premissas e Limitações",
    faqTitle: "Perguntas Frequentes",
    referencesTitle: "Referências e Fontes Metodológicas",
    sourceLabel: "Fonte",
    reviewedUnderPrefix: "Revisado conforme a",
    editorialPolicyLink: "Política Editorial DailyCalcWell",
    localExecutionNote: "Os cálculos são executados localmente no seu navegador.",
    relatedCalculators: "Calculadoras Relacionadas",
    popularCalculators: "Calculadoras Populares",
    allPrefix: "Todas as",
    backToHome: "Voltar ao Início",
  },
  home: {
    seoTitle: "Calculadoras Online Gratuitas para Dia a Dia e Saúde",
    seoDescription:
      "Calcule porcentagens, médias, idade exata, datas, IMC, calorias diárias, gravidez e mais em unidades métricas ou imperiais gratuitamente.",
    heroTitle: "Calculadoras Online Gratuitas para o Dia a Dia e Saúde",
    heroSubtitle:
      "Calcule porcentagens, médias, idade exata, datas, IMC, necessidades calóricas diárias, datas de gravidez e muito mais com resultados rápidos e claros em unidades métricas ou imperiais.",
    categoryToolsLabel: "Categoria · 12 Ferramentas",
    browseEveryday: "Explorar Calculadoras Diárias",
    browseHealth: "Explorar Calculadoras de Saúde",
    popularHeading: "Calculadoras Populares",
    popularSubtitle:
      "Ferramentas mais usadas em matemática cotidiana e bem-estar.",
    everydayHeading: "Calculadoras Diárias",
    viewAllEveryday: "Ver Todas Diárias",
    healthHeading: "Calculadoras de Saúde",
    viewAllHealth: "Ver Todas de Saúde",
    recentHeading: "Adicionadas Recentemente",
    recentSubtitle:
      "Novas ferramentas para margens comerciais, jornada, composição corporal e ciclo.",
    howToUseHeading: "Como Usar o DailyCalcWell",
    step1Title: "01. Escolha Unidades ou Moeda",
    step1Body:
      "Alterne facilmente entre unidades métricas (kg, cm, litros) e imperiais (lb, ft/in, fl oz), além de USD ($) e INR (₹).",
    step2Title: "02. Confira Fórmulas e Premissas",
    step2Body:
      "Cada página documenta a fórmula exata, o passo a passo, um exemplo resolvido e as limitações.",
    step3Title: "03. Copie, Redefina ou Compartilhe",
    step3Body:
      "Tudo roda instantaneamente no navegador com validação acessível e cópia em um clique.",
    faqHeading: "Perguntas Frequentes",
    faqs: [
      {
        question: "Todas as calculadoras do DailyCalcWell são gratuitas?",
        answer:
          "Sim. Todas são totalmente gratuitas, sem cadastro nem download.",
      },
      {
        question: "Funcionam nos sistemas métrico e imperial?",
        answer:
          "Sim, suportam kg/cm/litros e lb/ft-in/fl oz, além de USD ($) e INR (₹).",
      },
      {
        question: "Meus dados pessoais ficam salvos em algum servidor?",
        answer:
          "Não. Todos os cálculos ocorrem localmente no navegador e nenhum dado de saúde é armazenado.",
      },
      {
        question: "As calculadoras de saúde servem como diagnóstico médico?",
        answer:
          "Não. São estimativas educativas baseadas em fórmulas publicadas. Consulte sempre um médico.",
      },
    ],
  },
  categories: {
    everyday: {
      name: "Calculadoras Diárias",
      seoTitle: "Calculadoras Diárias – Porcentagens, Datas, Idade & Unidades",
      seoDescription:
        "Calculadoras gratuitas de porcentagem, média, idade exata, datas, desconto, lucro e prejuízo, proporção, frações e tempo.",
      intro:
        "Ferramentas práticas para matemática diária, descontos, margens, planejamento de datas, duração e conversões.",
      sectionHeading: "Feitas para o Uso Diário Global",
      sectionBody:
        "De descontos comerciais a contagem de dias e conversão de medidas, cada ferramenta mostra a fórmula completa no navegador.",
      crossLinkPrefix: "Procurando ferramentas de bem-estar ou maternidade? Veja",
      crossLinkLabel: "Calculadoras de Saúde",
    },
    health: {
      name: "Calculadoras de Saúde",
      seoTitle: "Calculadoras de Saúde – IMC, TMB, Calorias & Gravidez",
      seoDescription:
        "Calculadoras gratuitas de IMC, TMB, TDEE, calorias, peso ideal, gordura corporal, proteína, água, gravidez e ovulação.",
      intro:
        "Ferramentas de bem-estar e maternidade baseadas em evidências nos sistemas métrico e imperial.",
      notice:
        "As calculadoras de saúde oferecem estimativas educativas e não substituem consulta com médico, nutricionista ou obstetra.",
      sectionHeading: "Cálculos de Saúde com Privacidade",
      sectionBody:
        "Todos os cálculos corporais, nutricionais e de gravidez permanecem no seu navegador sem envio a servidores.",
      crossLinkPrefix: "Precisa de matemática diária ou datas? Explore",
      crossLinkLabel: "Calculadoras Diárias",
    },
  },
  pages: {
    about: {
      seoTitle: "Sobre Nós – Calculadoras Online DailyCalcWell",
      seoDescription:
        "Conheça o DailyCalcWell, nossa missão de precisão em calculadoras diárias e de saúde e compromisso com privacidade.",
      title: "Sobre o DailyCalcWell",
      lead:
        "O DailyCalcWell é uma plataforma independente focada em Calculadoras Diárias e Calculadoras de Saúde para entregar resultados claros e transparentes.",
      globalHeading: "Construído para Usuários no Mundo Todo",
      globalBody:
        "Nossas ferramentas suportam unidades métricas e imperiais e múltiplas moedas.",
      transparencyHeading: "Transparência & Precisão",
      transparencyBody:
        "Cada página explica a fórmula, o passo a passo, um exemplo e limitações, citando OMS, CDC, NIH e ACOG.",
      publisherHeading: "Dados do Editor",
      operatedBy: "Operado por:",
      contactEmail: "E-mail:",
      location: "Localização:",
      readEditorial: "Ler Política Editorial",
      contactUs: "Fale Conosco",
    },
    contact: {
      seoTitle: "Contato – Suporte e Sugestões",
      seoDescription:
        "Entre em contato com o DailyCalcWell para enviar sugestões, correções ou dúvidas de privacidade.",
      title: "Contato",
      subtitle:
        "Tem sugestões sobre fórmulas ou dúvidas sobre privacidade? Use os dados ou formulário abaixo.",
      detailsHeading: "Contato Direto",
      publisherLabel: "Editor",
      emailLabel: "E-mail",
      addressLabel: "Endereço",
      noteText:
        "Nota: Substitua os marcadores entre colchetes pelos seus dados verificados antes de solicitar o Google AdSense.",
      formName: "Seu Nome",
      formEmail: "E-mail",
      formTopic: "Assunto",
      formMessage: "Mensagem",
      formSubmit: "Enviar Mensagem",
      formReset: "Limpar",
      formSuccessTitle: "Mensagem Pronta",
      formSuccessBody:
        "Sua mensagem foi validada. Para assuntos urgentes escreva diretamente para",
      topics: {
        feedback: "Sugestão ou feedback",
        correction: "Correção de fórmula",
        privacy: "Privacidade / cookies",
        business: "Assunto geral",
      },
      errors: {
        name: "Informe seu nome.",
        email: "Informe um e-mail válido.",
        message: "Digite uma mensagem com pelo menos 10 caracteres.",
      },
    },
    privacy: {
      seoTitle: "Política de Privacidade – DailyCalcWell",
      seoDescription:
        "Como o DailyCalcWell processa cálculos localmente e gerencia cookies opcionais.",
      title: "Política de Privacidade",
      updated: "Última atualização: 24 de novembro de 2026",
      intro:
        "Esta Política explica como o DailyCalcWell trata informações durante sua visita.",
      sections: [
        {
          heading: "1. Processamento Local",
          body: "Todos os cálculos rodam localmente no navegador e não são armazenados em servidores.",
        },
        {
          heading: "2. Análise (Opcional)",
          body: "Com seu consentimento, o Google Analytics 4 mede tráfego agregado sem dados de saúde.",
        },
        {
          heading: "3. Publicidade e Cookies",
          body: "Após aprovação, o Google AdSense poderá usar cookies conforme suas preferências.",
        },
        {
          heading: "4. Logs do Servidor",
          body: "O provedor de hospedagem registra metadados técnicos temporários para segurança.",
        },
        {
          heading: "5. Suas Escolhas & Contato",
          body: "Atualize seu consentimento em Preferências de Cookies ou escreva para contact@dailycalcwell.com.",
        },
      ],
    },
    terms: {
      seoTitle: "Termos de Uso – DailyCalcWell",
      seoDescription:
        "Leia os Termos de Uso das calculadoras DailyCalcWell.",
      title: "Termos de Uso",
      updated: "Última atualização: 24 de novembro de 2026",
      sections: [
        {
          heading: "1. Aceitação",
          body: "Ao usar o DailyCalcWell (dailycalcwell.com), você concorda com estes termos.",
        },
        {
          heading: "2. Uso Informativo",
          body: "As calculadoras são educativas e não substituem orientação médica, contábil ou jurídica.",
        },
        {
          heading: "3. Sem Garantias",
          body: "O site é fornecido como está; confirme cálculos críticos com profissionais.",
        },
        {
          heading: "4. Uso Aceitável",
          body: "O uso pessoal e comercial dos cálculos é livre; a raspagem automatizada do conteúdo é proibida.",
        },
        {
          heading: "5. Contato",
          body: "Dúvidas: contact@dailycalcwell.com.",
        },
      ],
    },
    disclaimer: {
      seoTitle: "Aviso Legal – Médico & Financeiro",
      seoDescription:
        "Leia o aviso médico, de gravidez e financeiro do DailyCalcWell.",
      title: "Aviso Legal",
      updated: "Última atualização: 24 de novembro de 2026",
      sections: [
        {
          heading: "1. Não É Orientação Médica",
          paragraphs: [
            "As calculadoras de saúde têm fins estritamente informativos e educativos.",
            "Não fazem diagnósticos nem substituem médicos ou nutricionistas.",
          ],
        },
        {
          heading: "2. Gravidez & Ovulação",
          paragraphs: [
            "Datas de parto e ovulação são estimativas estatísticas e NÃO devem ser usadas como anticoncepcional.",
          ],
        },
        {
          heading: "3. Cálculos Comerciais",
          paragraphs: [
            "Calculadoras de desconto e lucro não incluem impostos locais automaticamente.",
          ],
        },
      ],
    },
    editorial: {
      seoTitle: "Política Editorial – Padrões & Fórmulas",
      seoDescription:
        "Como o DailyCalcWell verifica fórmulas e cita instituições confiáveis.",
      title: "Política Editorial",
      bylinePrefix: "Equipe Editorial DailyCalcWell · Última revisão:",
      sections: [
        {
          heading: "1. Fontes Confiáveis",
          body: "Utilizamos equações documentadas com referências da OMS, CDC, NIH, ACOG, NHS e NIST.",
        },
        {
          heading: "2. Transparência",
          body: "Cada página mostra a fórmula, um exemplo e suas limitações.",
        },
        {
          heading: "3. Atribuição Honesta",
          body: "Conteúdo mantido pela equipe DailyCalcWell sem perfis fictícios, com data de revisão.",
        },
        {
          heading: "4. Correções",
          body: "Envie melhorias pela página de Contato; testes automatizados validam cada atualização.",
        },
      ],
    },
    cookie: {
      seoTitle: "Política de Cookies – Consentimento",
      seoDescription:
        "Saiba como o DailyCalcWell utiliza armazenamento local e cookies opcionais.",
      title: "Política de Cookies",
      updated: "Última atualização: 24 de novembro de 2026",
      intro:
        "Esta política detalha o armazenamento necessário e os cookies opcionais no DailyCalcWell.",
      sections: [
        {
          heading: "1. Armazenamento Necessário",
          body: "Sua preferência é salva localmente em dailycalcwell_consent_v1 sem rastreamento externo.",
        },
        {
          heading: "2. Cookies Analíticos (Opcionais)",
          body: "Com sua autorização, o Google Analytics 4 mede o tráfego sem dados de saúde.",
        },
        {
          heading: "3. Cookies Publicitários (Opcionais)",
          body: "O Google AdSense usa cookies apenas após ativação e consentimento.",
        },
      ],
      manageButton: "Gerenciar Preferências de Cookies",
    },
    sitemap: {
      seoTitle: "Mapa do Site HTML – Calculadoras DailyCalcWell",
      seoDescription:
        "Navegue pelas 24 calculadoras diárias e de saúde e páginas do DailyCalcWell.",
      title: "Mapa do Site",
      subtitlePrefix:
        "Links diretos para todas as calculadoras e páginas do DailyCalcWell. Para mecanismos de busca, veja o",
      xmlLinkLabel: "Sitemap XML",
      everydayHeading: "Calculadoras Diárias",
      healthHeading: "Calculadoras de Saúde",
      infoHeading: "Categorias & Informações",
      homepageLabel: "Página Inicial",
      everydayHubLabel: "Hub Calculadoras Diárias",
      healthHubLabel: "Hub Calculadoras de Saúde",
    },
    notFound: {
      codeLabel: "404 · Página Não Encontrada",
      title: "Não foi possível encontrar esta calculadora ou página.",
      body: "O endereço pode ter mudado. Escolha uma categoria abaixo.",
      backHome: "Voltar ao Início",
      browseEveryday: "Calculadoras Diárias",
      browseHealth: "Calculadoras de Saúde",
    },
  },
};

export const UI_DICTIONARIES: Record<Locale, UiDictionary> = {
  en: EN_UI,
  hi: HI_UI,
  es: ES_UI,
  fr: FR_UI,
  de: DE_UI,
  pt: PT_UI,
};

export function getUiDictionary(locale: Locale): UiDictionary {
  return UI_DICTIONARIES[locale] ?? EN_UI;
}
