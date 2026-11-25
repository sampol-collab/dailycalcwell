import {
  CALCULATORS,
  CalculatorCategoryId,
  CalculatorMeta,
} from "@/lib/constants/calculators";
import { Locale, NonDefaultLocale, localizePath } from "./config";
import { getUiDictionary } from "./ui";

export interface LocalizedCalcFields {
  name: string;
  shortName: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  keywords: string[];
}

const HI_CALCS: Record<string, LocalizedCalcFields> = {
  "percentage-calculator": {
    name: "प्रतिशत कैलकुलेटर",
    shortName: "प्रतिशत",
    seoTitle: "प्रतिशत कैलकुलेटर – ऑनलाइन प्रतिशत और बदलाव गणना",
    seoDescription:
      "आसान सूत्रों और उदाहरणों के साथ प्रतिशत, प्रतिशत वृद्धि, कमी, प्रतिशत अंतर और प्रतिशत परिवर्तन तुरंत ऑनलाइन निकालें।",
    shortDescription:
      "किसी संख्या का X%, प्रतिशत वृद्धि, कमी, अंतर और परिवर्तन निकालें।",
    keywords: [
      "प्रतिशत कैलकुलेटर",
      "percentage calculator hindi",
      "प्रतिशत वृद्धि",
      "प्रतिशत कमी",
    ],
  },
  "average-calculator": {
    name: "औसत कैलकुलेटर",
    shortName: "औसत",
    seoTitle: "औसत कैलकुलेटर – अंकगणितीय माध्य और भारित औसत",
    seoDescription:
      "किसी भी संख्या सूची के लिए अंकगणितीय माध्य, माध्यिका और भारित औसत की गणना करें। चरण-दर-चरण विवरण के साथ डेटा जोड़ें या हटाएँ।",
    shortDescription:
      "डायनामिक इनपुट के साथ माध्य, माध्यिका और भारित औसत निकालें।",
    keywords: [
      "औसत कैलकुलेटर",
      "average calculator hindi",
      "भारित औसत",
      "माध्य कैलकुलेटर",
    ],
  },
  "age-calculator": {
    name: "उम्र कैलकुलेटर",
    shortName: "उम्र",
    seoTitle: "उम्र कैलकुलेटर – वर्ष, महीने और दिनों में सटीक आयु",
    seoDescription:
      "जन्मतिथि से अपनी सटीक उम्र जानें। वर्ष, महीने, दिन, कुल जिए गए दिन और अगले जन्मदिन तक शेष दिनों की तुरंत गणना करें।",
    shortDescription:
      "वर्ष, महीने, दिन, कुल दिन और अगले जन्मदिन की उल्टी गिनती जानें।",
    keywords: [
      "उम्र कैलकुलेटर",
      "आयु कैलकुलेटर",
      "जन्मतिथि से उम्र",
      "age calculator hindi",
    ],
  },
  "date-calculator": {
    name: "तारीख़ कैलकुलेटर",
    shortName: "तारीख़",
    seoTitle: "तारीख़ कैलकुलेटर – दिन, सप्ताह, महीने और वर्ष जोड़ें/घटाएँ",
    seoDescription:
      "लीप वर्ष और महीने के अंत की सटीक गणना के साथ किसी भी कैलेंडर तारीख़ में दिन, सप्ताह, महीने और वर्ष जोड़ें या घटाएँ।",
    shortDescription:
      "लीप-वर्ष सटीकता के साथ तारीख़ में दिन, सप्ताह, महीने और वर्ष जोड़ें या घटाएँ।",
    keywords: [
      "तारीख़ कैलकुलेटर",
      "date calculator hindi",
      "तारीख जोड़ना",
      "कैलेंडर गणना",
    ],
  },
  "days-between-dates-calculator": {
    name: "तारीख़ों के बीच दिन कैलकुलेटर",
    shortName: "दिन गिनती",
    seoTitle: "तारीख़ों के बीच दिन कैलकुलेटर – सटीक दिन और सप्ताह गिनें",
    seoDescription:
      "अनुबंध, यात्रा या छुट्टियों की योजना के लिए दो तारीख़ों के बीच सटीक दिन और सप्ताह गिनें। अंतिम तारीख़ शामिल करने का विकल्प उपलब्ध।",
    shortDescription:
      "अंतिम दिन शामिल करने के विकल्प के साथ दो तारीख़ों के बीच दिन और सप्ताह गिनें।",
    keywords: [
      "दिन गिनती कैलकुलेटर",
      "दो तारीखों के बीच दिन",
      "days between dates hindi",
    ],
  },
  "discount-calculator": {
    name: "छूट कैलकुलेटर",
    shortName: "छूट",
    seoTitle: "छूट कैलकुलेटर – विक्रय मूल्य और बचत (सभी विश्व मुद्राएँ)",
    seoDescription:
      "INR, USD, EUR, GBP, JPY सहित विश्व की 156 मुद्राओं में विक्रय मूल्य, छूट राशि और बचत तुरंत निकालें। मूल मूल्य और छूट दर दर्ज करें।",
    shortDescription:
      "विश्व की 156 मुद्राओं में छूट राशि और अंतिम विक्रय मूल्य की गणना करें।",
    keywords: [
      "छूट कैलकुलेटर",
      "डिस्काउंट कैलकुलेटर",
      "discount calculator world currencies",
      "बचत कैलकुलेटर",
    ],
  },
  "profit-loss-calculator": {
    name: "लाभ और हानि कैलकुलेटर",
    shortName: "लाभ-हानि",
    seoTitle: "लाभ और हानि कैलकुलेटर – मार्जिन व मार्कअप (सभी मुद्राएँ)",
    seoDescription:
      "INR, USD, EUR सहित विश्व की किसी भी मुद्रा में क्रय मूल्य और विक्रय मूल्य से लाभ, हानि प्रतिशत, मार्जिन और मार्कअप तुरंत निकालें।",
    shortDescription:
      "सभी विश्व मुद्राओं में लाभ/हानि राशि, प्रतिशत, मार्जिन और मार्कअप जानें।",
    keywords: [
      "लाभ हानि कैलकुलेटर",
      "profit loss calculator hindi",
      "मार्जिन कैलकुलेटर",
      "मार्कअप",
    ],
  },
  "ratio-calculator": {
    name: "अनुपात कैलकुलेटर",
    shortName: "अनुपात",
    seoTitle: "अनुपात कैलकुलेटर – अनुपात सरल करें, तुलना करें और हल निकालें",
    seoDescription:
      "बहु-संख्या अनुपातों को न्यूनतम रूप में सरल करें, दो अनुपातों की तुलना करें या चरण-दर-चरण गणित से अज्ञात समानुपात मान ज्ञात करें।",
    shortDescription:
      "अनुपातों को सरल करें, उनकी तुलना करें और अज्ञात समानुपात मान हल करें।",
    keywords: [
      "अनुपात कैलकुलेटर",
      "ratio calculator hindi",
      "समानुपात हल",
    ],
  },
  "fraction-calculator": {
    name: "भिन्न कैलकुलेटर",
    shortName: "भिन्न",
    seoTitle: "भिन्न कैलकुलेटर – जोड़, घटाव, गुणा और भाग ऑनलाइन",
    seoDescription:
      "ऑनलाइन भिन्नों को जोड़ें, घटाएँ, गुणा और भाग करें। परिणाम स्वचालित रूप से न्यूनतम भिन्न, मिश्रित संख्या और दशमलव में दिखते हैं।",
    shortDescription:
      "सरल रूप और मिश्रित संख्या के साथ भिन्नों की सभी मुख्य गणनाएँ करें।",
    keywords: [
      "भिन्न कैलकुलेटर",
      "fraction calculator hindi",
      "मिश्रित भिन्न",
    ],
  },
  "time-calculator": {
    name: "समय कैलकुलेटर",
    shortName: "समय",
    seoTitle: "समय कैलकुलेटर – घंटे और मिनट जोड़ें और घटाएँ",
    seoDescription:
      "कार्य लॉग, बिलिंग, शेड्यूल और यात्रा के लिए घंटे और मिनट सटीकता से जोड़ें या घटाएँ, कुल मिनट और दिनों के बराबर मान के साथ।",
    shortDescription:
      "कुल मिनट और दिन समतुल्य के साथ घंटे और मिनट जोड़ें या घटाएँ।",
    keywords: [
      "समय कैलकुलेटर",
      "time calculator hindi",
      "घंटे मिनट जोड़ें",
    ],
  },
  "time-duration-calculator": {
    name: "समय अवधि कैलकुलेटर",
    shortName: "समय अवधि",
    seoTitle: "समय अवधि कैलकुलेटर – शुरुआती और अंतिम समय के बीच घंटे",
    seoDescription:
      "शुरुआती और अंतिम समय के बीच सटीक घंटे, मिनट और दशमलव घंटे निकालें, जिसमें मध्यरात्रि पार करने वाली रात्रि शिफ्ट भी शामिल हैं।",
    shortDescription:
      "रात्रि शिफ्ट सहित दो घड़ी समयों के बीच बीती अवधि की गणना करें।",
    keywords: [
      "समय अवधि कैलकुलेटर",
      "शिफ्ट समय कैलकुलेटर",
      "time duration hindi",
    ],
  },
  "unit-converter": {
    name: "इकाई कनवर्टर",
    shortName: "इकाई कनवर्टर",
    seoTitle: "इकाई कनवर्टर – लंबाई, वजन, तापमान और आयतन रूपांतरण",
    seoDescription:
      "भारत और अमेरिका में प्रचलित मीट्रिक और इंपीरियल इकाइयों के बीच लंबाई, वजन, तापमान, आयतन, गति और क्षेत्रफल आसानी से बदलें।",
    shortDescription:
      "मीट्रिक और इंपीरियल में लंबाई, वजन, तापमान, आयतन, गति व क्षेत्रफल बदलें।",
    keywords: [
      "इकाई कनवर्टर",
      "unit converter hindi",
      "kg to lbs",
      "cm to feet",
    ],
  },
  "bmi-calculator": {
    name: "BMI कैलकुलेटर",
    shortName: "BMI",
    seoTitle: "BMI कैलकुलेटर – ऑनलाइन बॉडी मास इंडेक्स की जाँच करें",
    seoDescription:
      "kg/cm या lb/ft/in में ऊँचाई और वजन से अपना BMI निकालें। वयस्क BMI श्रेणियाँ, स्वस्थ वजन सीमा और स्क्रीनिंग विवरण देखें।",
    shortDescription:
      "मीट्रिक (kg/cm) या इंपीरियल (lb/ft/in) में वयस्क बॉडी मास इंडेक्स जाँचें।",
    keywords: [
      "BMI कैलकुलेटर",
      "बॉडी मास इंडेक्स",
      "bmi calculator hindi",
      "स्वस्थ वजन",
    ],
  },
  "bmr-calculator": {
    name: "BMR कैलकुलेटर",
    shortName: "BMR",
    seoTitle: "BMR कैलकुलेटर – बेसल मेटाबॉलिक रेट (Mifflin-St Jeor)",
    seoDescription:
      "मीट्रिक या इंपीरियल इकाइयों में Mifflin-St Jeor समीकरण से अपना बेसल मेटाबॉलिक रेट और विश्राम कैलोरी खर्च अनुमानित करें।",
    shortDescription:
      "Mifflin-St Jeor सूत्र से दैनिक विश्राम ऊर्जा आवश्यकता अनुमानित करें।",
    keywords: [
      "BMR कैलकुलेटर",
      "बेसल मेटाबॉलिक रेट",
      "bmr calculator hindi",
    ],
  },
  "tdee-calculator": {
    name: "TDEE कैलकुलेटर",
    shortName: "TDEE",
    seoTitle: "TDEE कैलकुलेटर – कुल दैनिक ऊर्जा व्यय और मेंटेनेंस कैलोरी",
    seoDescription:
      "मीट्रिक या इंपीरियल में BMR और साप्ताहिक शारीरिक गतिविधि के आधार पर अपना कुल दैनिक ऊर्जा व्यय (TDEE) और मेंटेनेंस कैलोरी जानें।",
    shortDescription:
      "BMR और गतिविधि स्तर जोड़कर दैनिक मेंटेनेंस कैलोरी का अनुमान लगाएँ।",
    keywords: [
      "TDEE कैलकुलेटर",
      "कुल दैनिक ऊर्जा व्यय",
      "मेंटेनेंस कैलोरी",
    ],
  },
  "calorie-calculator": {
    name: "कैलोरी कैलकुलेटर",
    shortName: "कैलोरी",
    seoTitle: "कैलोरी कैलकुलेटर – दैनिक कैलोरी आवश्यकता का अनुमान",
    seoDescription:
      "Mifflin-St Jeor सूत्र और गतिविधि स्तर से वजन बनाए रखने, कम करने या बढ़ाने के लिए सुरक्षित दैनिक कैलोरी आवश्यकता जानें।",
    shortDescription:
      "वजन संतुलन, क्रमिक घटाव या बढ़ोतरी के लिए दैनिक कैलोरी अनुमानित करें।",
    keywords: [
      "कैलोरी कैलकुलेटर",
      "दैनिक कैलोरी जरूरत",
      "calorie calculator hindi",
    ],
  },
  "ideal-weight-calculator": {
    name: "आदर्श वजन कैलकुलेटर",
    shortName: "आदर्श वजन",
    seoTitle: "आदर्श वजन कैलकुलेटर – ऊँचाई अनुसार स्वस्थ वजन सीमा",
    seoDescription:
      "किलोग्राम और पाउंड में स्वस्थ BMI वजन सीमा के साथ Devine, Robinson, Miller और Hamwi सूत्रों से आदर्श वजन अनुमान देखें।",
    shortDescription:
      "स्वस्थ BMI सीमा के साथ Devine, Robinson, Miller व Hamwi अनुमान देखें।",
    keywords: [
      "आदर्श वजन कैलकुलेटर",
      "ऊंचाई के अनुसार वजन",
      "ideal weight hindi",
    ],
  },
  "body-fat-calculator": {
    name: "बॉडी फैट कैलकुलेटर",
    shortName: "बॉडी फैट",
    seoTitle: "बॉडी फैट कैलकुलेटर – यू.एस. नेवी बॉडी फैट प्रतिशत अनुमान",
    seoDescription:
      "सेंटीमीटर या इंच में गर्दन, कमर, कूल्हे और ऊँचाई के माप से यू.एस. नेवी परिधि सूत्र द्वारा शारीरिक वसा प्रतिशत और लीन मास जानें।",
    shortDescription:
      "टेप माप के उपयोग से बॉडी फैट प्रतिशत, फैट मास और लीन मास जानें।",
    keywords: [
      "बॉडी फैट कैलकुलेटर",
      "शरीर की चर्बी प्रतिशत",
      "body fat hindi",
    ],
  },
  "protein-calculator": {
    name: "प्रोटीन कैलकुलेटर",
    shortName: "प्रोटीन",
    seoTitle: "प्रोटीन कैलकुलेटर – दैनिक प्रोटीन आवश्यकता (ग्राम में)",
    seoDescription:
      "kg या lb में शरीर के वजन और फिटनेस लक्ष्य के आधार पर प्रमाण-आधारित दैनिक प्रोटीन आवश्यकता ग्राम में अनुमानित करें।",
    shortDescription:
      "शरीर के वजन और गतिविधि लक्ष्य अनुसार दैनिक प्रोटीन ग्राम जानें।",
    keywords: [
      "प्रोटीन कैलकुलेटर",
      "दैनिक प्रोटीन",
      "protein calculator hindi",
    ],
  },
  "water-intake-calculator": {
    name: "पानी की मात्रा कैलकुलेटर",
    shortName: "दैनिक पानी",
    seoTitle: "दैनिक पानी कैलकुलेटर – शरीर के लिए जल आवश्यकता अनुमान",
    seoDescription:
      "शरीर के वजन, व्यायाम समय और मौसम के आधार पर लीटर, मिलीलीटर, औंस और कप में दैनिक पानी पीने की मात्रा अनुमानित करें।",
    shortDescription:
      "वजन, व्यायाम और जलवायु के अनुसार लीटर व औंस में दैनिक हाइड्रेशन जानें।",
    keywords: [
      "पानी कैलकुलेटर",
      "रोज कितना पानी पिएं",
      "water intake hindi",
    ],
  },
  "pregnancy-weeks-to-months": {
    name: "गर्भावस्था सप्ताह से महीने कैलकुलेटर",
    shortName: "सप्ताह से महीने",
    seoTitle: "गर्भावस्था सप्ताह से महीने कैलकुलेटर और तिमाही गाइड",
    seoDescription:
      "गर्भावस्था के सप्ताह और दिनों को अनुमानित महीने व तिमाही में बदलें और जानें कि डॉक्टर कैलेंडर महीनों के बजाय सप्ताह क्यों गिनते हैं।",
    shortDescription:
      "गर्भावस्था सप्ताह और दिनों को अनुमानित महीने व तिमाही में बदलें।",
    keywords: [
      "गर्भावस्था सप्ताह से महीने",
      "प्रेग्नेंसी महीने चार्ट",
      "तिमाही कैलकुलेटर",
    ],
  },
  "pregnancy-due-date-calculator": {
    name: "गर्भावस्था डिलीवरी तिथि कैलकुलेटर",
    shortName: "डिलीवरी तिथि",
    seoTitle: "प्रेग्नेंसी ड्यू डेट कैलकुलेटर – LMP से अनुमानित प्रसव तिथि",
    seoDescription:
      "अंतिम मासिक धर्म (LMP) और 280-दिन के मानक नियम से अनुमानित प्रसव तिथि, वर्तमान गर्भावस्था सप्ताह और तिमाही जानें।",
    shortDescription:
      "अंतिम मासिक धर्म से ड्यू डेट, वर्तमान सप्ताह और तिमाही अनुमानित करें।",
    keywords: [
      "ड्यू डेट कैलकुलेटर",
      "गर्भावस्था प्रसव तिथि",
      "pregnancy due date hindi",
    ],
  },
  "pregnancy-calculator": {
    name: "गर्भावस्था कैलकुलेटर",
    shortName: "गर्भावस्था",
    seoTitle: "गर्भावस्था कैलकुलेटर – गर्भावधि आयु और प्रगति प्रतिशत",
    seoDescription:
      "LMP या डिलीवरी तिथि से वर्तमान गर्भावस्था सप्ताह व दिन, पूर्ण प्रगति प्रतिशत और अनुमानित प्रसव तिथि की गणना करें।",
    shortDescription:
      "गर्भावस्था के सप्ताह, प्रगति प्रतिशत और अनुमानित ड्यू डेट देखें।",
    keywords: [
      "गर्भावस्था कैलकुलेटर",
      "कितने सप्ताह की प्रेग्नेंसी",
      "pregnancy calculator hindi",
    ],
  },
  "ovulation-calculator": {
    name: "ओव्यूलेशन कैलकुलेटर",
    shortName: "ओव्यूलेशन",
    seoTitle: "ओव्यूलेशन कैलकुलेटर – फर्टाइल विंडो और अगला पीरियड",
    seoDescription:
      "अंतिम पीरियड और चक्र लंबाई के आधार पर अगला मासिक धर्म, संभावित ओव्यूलेशन दिन और फर्टाइल विंडो का अनुमान लगाएँ।",
    shortDescription:
      "चक्र लंबाई से अगला पीरियड, संभावित ओव्यूलेशन और फर्टाइल विंडो जानें।",
    keywords: [
      "ओव्यूलेशन कैलकुलेटर",
      "फर्टाइल विंडो",
      "ovulation calculator hindi",
    ],
  },
};

const ES_CALCS: Record<string, LocalizedCalcFields> = {
  "percentage-calculator": {
    name: "Calculadora de Porcentajes",
    shortName: "Porcentajes",
    seoTitle: "Calculadora de Porcentajes – Calcular Porcentajes Online",
    seoDescription:
      "Calcula porcentajes, aumentos, descuentos, diferencia porcentual y cambio porcentual al instante con fórmulas claras y ejemplos prácticos.",
    shortDescription:
      "Calcula el X% de un número, aumento, reducción, diferencia y variación porcentual.",
    keywords: ["calculadora de porcentajes", "calcular porcentaje", "aumento porcentual"],
  },
  "average-calculator": {
    name: "Calculadora de Promedio",
    shortName: "Promedio",
    seoTitle: "Calculadora de Promedio – Media Aritmética y Ponderada",
    seoDescription:
      "Calcula la media aritmética, la mediana y el promedio ponderado de cualquier lista de números con explicación paso a paso.",
    shortDescription:
      "Calcula la media aritmética, mediana y promedio ponderado con filas dinámicas.",
    keywords: ["calculadora de promedio", "media aritmética", "promedio ponderado"],
  },
  "age-calculator": {
    name: "Calculadora de Edad",
    shortName: "Edad",
    seoTitle: "Calculadora de Edad – Edad Exacta en Años, Meses y Días",
    seoDescription:
      "Descubre tu edad exacta desde tu fecha de nacimiento: años, meses, días, total de días vividos y días restantes para tu próximo cumpleaños.",
    shortDescription:
      "Calcula edad exacta en años, meses y días, días vividos y próximo cumpleaños.",
    keywords: ["calculadora de edad", "calcular edad exacta", "fecha de nacimiento"],
  },
  "date-calculator": {
    name: "Calculadora de Fechas",
    shortName: "Fechas",
    seoTitle: "Calculadora de Fechas – Sumar o Restar Días, Meses y Años",
    seoDescription:
      "Suma o resta días, semanas, meses y años a cualquier fecha del calendario con manejo exacto de años bisiestos y fines de mes.",
    shortDescription:
      "Suma o resta días, semanas, meses y años con precisión en años bisiestos.",
    keywords: ["calculadora de fechas", "sumar días a una fecha", "restar fechas"],
  },
  "days-between-dates-calculator": {
    name: "Calculadora de Días entre Fechas",
    shortName: "Días entre Fechas",
    seoTitle: "Días entre Fechas – Contar Días y Semanas Exactas",
    seoDescription:
      "Cuenta el número exacto de días y semanas entre dos fechas. Elige si deseas incluir el día final para viajes, contratos o vacaciones.",
    shortDescription:
      "Calcula días y semanas totales entre dos fechas con opción de fecha final.",
    keywords: ["días entre dos fechas", "contador de días", "diferencia de fechas"],
  },
  "discount-calculator": {
    name: "Calculadora de Descuentos",
    shortName: "Descuentos",
    seoTitle: "Calculadora de Descuentos – Precio Final y Divisas",
    seoDescription:
      "Calcula precios rebajados, importe ahorrado y porcentaje de descuento al instante en 156 monedas del mundo (EUR, USD, MXN, ARS, COP, INR).",
    shortDescription:
      "Calcula el descuento y precio final en más de 150 monedas del mundo.",
    keywords: ["calculadora de descuentos", "precio con descuento", "porcentaje de rebaja"],
  },
  "profit-loss-calculator": {
    name: "Calculadora de Ganancias y Pérdidas",
    shortName: "Ganancias y Pérdidas",
    seoTitle: "Calculadora de Ganancias, Margen y Markup Global",
    seoDescription:
      "Calcula ganancia o pérdida, porcentaje sobre costo (markup) y margen bruto en 156 monedas del mundo desde precio de compra y venta.",
    shortDescription:
      "Obtén ganancia o pérdida, margen comercial y markup en cualquier moneda.",
    keywords: ["calculadora de margen", "ganancias y pérdidas", "markup"],
  },
  "ratio-calculator": {
    name: "Calculadora de Razones y Proporciones",
    shortName: "Proporciones",
    seoTitle: "Calculadora de Proporciones – Simplificar y Comparar",
    seoDescription:
      "Simplifica razones numéricas a su mínima expresión, compara dos proporciones o resuelve una incógnita con regla de tres paso a paso.",
    shortDescription:
      "Simplifica razones múltiples, compara ratios y resuelve proporciones.",
    keywords: ["calculadora de proporciones", "simplificar razones", "regla de tres"],
  },
  "fraction-calculator": {
    name: "Calculadora de Fracciones",
    shortName: "Fracciones",
    seoTitle: "Calculadora de Fracciones – Sumar, Restar, Multiplicar",
    seoDescription:
      "Suma, resta, multiplica y divide fracciones online. Simplifica resultados automáticamente y muestra números mixtos y decimales.",
    shortDescription:
      "Opera fracciones con simplificación automática, números mixtos y decimales.",
    keywords: ["calculadora de fracciones", "sumar fracciones", "simplificar fracciones"],
  },
  "time-calculator": {
    name: "Calculadora de Tiempo",
    shortName: "Tiempo",
    seoTitle: "Calculadora de Tiempo – Sumar y Restar Horas y Minutos",
    seoDescription:
      "Suma o resta bloques de horas y minutos con precisión para hojas de trabajo, facturación y horarios con conversión a minutos y días.",
    shortDescription:
      "Suma y resta horas y minutos con equivalencias totales en minutos y días.",
    keywords: ["calculadora de tiempo", "sumar horas y minutos", "restar horas"],
  },
  "time-duration-calculator": {
    name: "Calculadora de Duración de Tiempo",
    shortName: "Duración",
    seoTitle: "Calculadora de Horas Trabajadas y Duración entre Horas",
    seoDescription:
      "Calcula las horas, minutos y horas decimales exactas entre una hora inicial y final, incluidos turnos nocturnos que cruzan la medianoche.",
    shortDescription:
      "Mide horas y minutos transcurridos entre dos horas, incluso turnos nocturnos.",
    keywords: ["duración entre dos horas", "horas trabajadas", "turno nocturno"],
  },
  "unit-converter": {
    name: "Conversor de Unidades",
    shortName: "Conversor",
    seoTitle: "Conversor de Unidades – Longitud, Peso y Temperatura",
    seoDescription:
      "Convierte longitud, peso, temperatura, volumen, velocidad y área entre el sistema métrico e imperial con factores estándar exactos.",
    shortDescription:
      "Convierte longitud, peso, temperatura, volumen, velocidad y área al instante.",
    keywords: ["conversor de unidades", "métrico a imperial", "kg a libras"],
  },
  "bmi-calculator": {
    name: "Calculadora de IMC (BMI)",
    shortName: "IMC",
    seoTitle: "Calculadora de IMC – Índice de Masa Corporal Online",
    seoDescription:
      "Calcula tu IMC con altura y peso en kg/cm o lb/ft/in. Consulta categorías OMS para adultos y el rango de peso saludable.",
    shortDescription:
      "Evalúa el Índice de Masa Corporal adulto en unidades métricas o imperiales.",
    keywords: ["calculadora de IMC", "índice de masa corporal", "peso saludable"],
  },
  "bmr-calculator": {
    name: "Calculadora de TMB (BMR)",
    shortName: "TMB",
    seoTitle: "Calculadora de TMB – Tasa Metabólica Basal (Mifflin-St Jeor)",
    seoDescription:
      "Estima tu Tasa Metabólica Basal con la fórmula Mifflin-St Jeor en unidades métricas o imperiales y conoce tu gasto calórico en reposo.",
    shortDescription:
      "Estima el gasto calórico diario en reposo con la ecuación Mifflin-St Jeor.",
    keywords: ["calculadora TMB", "tasa metabólica basal", "calorías en reposo"],
  },
  "tdee-calculator": {
    name: "Calculadora de TDEE",
    shortName: "TDEE",
    seoTitle: "Calculadora de TDEE – Gasto Energético Diario Total",
    seoDescription:
      "Calcula tu Gasto Energético Diario Total y calorías de mantenimiento combinando tu TMB con tu nivel semanal de actividad física.",
    shortDescription:
      "Estima las calorías diarias de mantenimiento según tu TMB y nivel de actividad.",
    keywords: ["calculadora TDEE", "gasto calórico diario", "calorías mantenimiento"],
  },
  "calorie-calculator": {
    name: "Calculadora de Calorías",
    shortName: "Calorías",
    seoTitle: "Calculadora de Calorías – Necesidades Calóricas Diarias",
    seoDescription:
      "Estima tu consumo calórico diario para mantener, bajar o subir de peso usando la ecuación Mifflin-St Jeor y márgenes seguros.",
    shortDescription:
      "Estima calorías diarias para mantener, perder o ganar peso de forma gradual.",
    keywords: ["calculadora de calorías", "déficit calórico", "calorías diarias"],
  },
  "ideal-weight-calculator": {
    name: "Calculadora de Peso Ideal",
    shortName: "Peso Ideal",
    seoTitle: "Calculadora de Peso Ideal – Fórmulas y Rango Saludable",
    seoDescription:
      "Compara las fórmulas de Devine, Robinson, Miller y Hamwi junto al rango saludable de IMC en kilogramos y libras.",
    shortDescription:
      "Compara Devine, Robinson, Miller y Hamwi más el rango de IMC saludable.",
    keywords: ["calculadora peso ideal", "peso según estatura", "fórmula de Devine"],
  },
  "body-fat-calculator": {
    name: "Calculadora de Grasa Corporal",
    shortName: "Grasa Corporal",
    seoTitle: "Calculadora de Grasa Corporal – Método de la Marina EE. UU.",
    seoDescription:
      "Estima tu porcentaje de grasa corporal con la fórmula de circunferencias (cuello, cintura, cadera y altura) en cm o pulgadas.",
    shortDescription:
      "Estima porcentaje de grasa corporal, masa grasa y masa magra con medidas.",
    keywords: ["porcentaje grasa corporal", "método marina", "masa magra"],
  },
  "protein-calculator": {
    name: "Calculadora de Proteínas",
    shortName: "Proteínas",
    seoTitle: "Calculadora de Proteínas – Consumo Diario Recomendado",
    seoDescription:
      "Estima tu ingesta diaria de proteínas en gramos según tu peso corporal en kg o lb y tu nivel de actividad o entrenamiento.",
    shortDescription:
      "Estima los gramos diarios de proteína según peso corporal y actividad.",
    keywords: ["calculadora de proteínas", "proteína diaria por kg", "gramos proteína"],
  },
  "water-intake-calculator": {
    name: "Calculadora de Agua Diaria",
    shortName: "Hidratación",
    seoTitle: "Calculadora de Agua – Hidratación Diaria Recomendada",
    seoDescription:
      "Estima cuánta agua beber al día en litros, mililitros, onzas y vasos según tu peso corporal, minutos de ejercicio y clima.",
    shortDescription:
      "Calcula tu hidratación diaria en litros y onzas según peso, deporte y clima.",
    keywords: ["cuánta agua beber al día", "calculadora de agua", "hidratación diaria"],
  },
  "pregnancy-weeks-to-months": {
    name: "Semanas a Meses de Embarazo",
    shortName: "Semanas a Meses",
    seoTitle: "Semanas a Meses de Embarazo y Guía de Trimestres",
    seoDescription:
      "Convierte semanas y días de embarazo en meses aproximados y trimestre, y descubre por qué el control prenatal usa semanas.",
    shortDescription:
      "Convierte semanas gestacionales y días en mes aproximado y trimestre.",
    keywords: ["semanas a meses embarazo", "tabla meses embarazo", "trimestres"],
  },
  "pregnancy-due-date-calculator": {
    name: "Calculadora de Fecha de Parto",
    shortName: "Fecha de Parto",
    seoTitle: "Calculadora de Fecha Probable de Parto (FPP) desde FUR",
    seoDescription:
      "Estima tu fecha probable de parto, semana gestacional actual y trimestre desde tu última menstruación bajo el criterio de 280 días.",
    shortDescription:
      "Estima la fecha de parto, semana actual y trimestre desde tu última regla.",
    keywords: ["fecha probable de parto", "calculadora FPP", "embarazo 280 días"],
  },
  "pregnancy-calculator": {
    name: "Calculadora de Embarazo",
    shortName: "Embarazo",
    seoTitle: "Calculadora de Embarazo – Semanas de Gestación y Progreso",
    seoDescription:
      "Consulta cuántas semanas y días de embarazo tienes, el porcentaje de avance y tu fecha estimada de parto desde FUR o FPP.",
    shortDescription:
      "Calcula edad gestacional en semanas, progreso del embarazo y fecha de parto.",
    keywords: ["calculadora de embarazo", "cuántas semanas de embarazo tengo"],
  },
  "ovulation-calculator": {
    name: "Calculadora de Ovulación",
    shortName: "Ovulación",
    seoTitle: "Calculadora de Ovulación – Días Fértiles y Próxima Regla",
    seoDescription:
      "Estima tu próximo período, día probable de ovulación y ventana fértil a partir de tu última regla y la duración media de tu ciclo.",
    shortDescription:
      "Estima próxima menstruación, día de ovulación y ventana fértil.",
    keywords: ["calculadora de ovulación", "días fértiles", "ciclo menstrual"],
  },
};

const FR_CALCS: Record<string, LocalizedCalcFields> = {
  "percentage-calculator": {
    name: "Calculateur de Pourcentage",
    shortName: "Pourcentage",
    seoTitle: "Calculateur de Pourcentage – Calculs en Ligne Rapides",
    seoDescription:
      "Calculez facilement un pourcentage, une hausse, une baisse, une variation ou un écart en pourcentage avec formules et exemples détaillés.",
    shortDescription:
      "Calculez X% de Y, hausse, baisse, écart et variation en pourcentage.",
    keywords: ["calculateur de pourcentage", "calculer pourcentage", "variation"],
  },
  "average-calculator": {
    name: "Calculateur de Moyenne",
    shortName: "Moyenne",
    seoTitle: "Calculateur de Moyenne – Moyenne Arithmétique et Pondérée",
    seoDescription:
      "Calculez la moyenne arithmétique, la médiane et la moyenne pondérée pour toute série de notes ou de valeurs avec explications claires.",
    shortDescription:
      "Calculez moyenne arithmétique, médiane et moyenne pondérée facilement.",
    keywords: ["calculateur de moyenne", "moyenne pondérée", "médiane"],
  },
  "age-calculator": {
    name: "Calculateur d'Âge",
    shortName: "Âge",
    seoTitle: "Calculateur d'Âge – Âge Exact en Ans, Mois et Jours",
    seoDescription:
      "Trouvez votre âge exact à partir de votre date de naissance : années, mois, jours vécus et compte à rebours avant le prochain anniversaire.",
    shortDescription:
      "Calculez votre âge exact en ans, mois et jours et le prochain anniversaire.",
    keywords: ["calculateur d'âge", "calculer âge exact", "date de naissance"],
  },
  "date-calculator": {
    name: "Calculateur de Date",
    shortName: "Date",
    seoTitle: "Calculateur de Date – Ajouter ou Soustraire des Jours",
    seoDescription:
      "Ajoutez ou soustrayez des jours, semaines, mois et années à n'importe quelle date avec gestion exacte des années bissextiles.",
    shortDescription:
      "Ajoutez ou retirez jours, semaines, mois et années avec gestion bissextile.",
    keywords: ["calculateur de date", "ajouter des jours", "soustraire des mois"],
  },
  "days-between-dates-calculator": {
    name: "Jours Entre Deux Dates",
    shortName: "Jours entre Dates",
    seoTitle: "Calculateur de Jours Entre Deux Dates – Jours et Semaines",
    seoDescription:
      "Comptez le nombre exact de jours et de semaines entre deux dates. Choisissez d'inclure ou non la date de fin pour vos séjours ou contrats.",
    shortDescription:
      "Comptez le nombre exact de jours et semaines entre deux dates civiles.",
    keywords: ["jours entre deux dates", "compteur de jours", "écart de dates"],
  },
  "discount-calculator": {
    name: "Calculateur de Remise",
    shortName: "Remise",
    seoTitle: "Calculateur de Remise – Prix Soldé & Toutes Devises",
    seoDescription:
      "Calculez instantanément le prix après réduction et le montant économisé dans 156 devises mondiales (EUR, USD, CAD, CHF, GBP, INR).",
    shortDescription:
      "Calculez le montant de la réduction et le prix final en 156 devises.",
    keywords: ["calculateur de remise", "calculer solde", "pourcentage de réduction"],
  },
  "profit-loss-calculator": {
    name: "Calculateur de Profit, Marge et Markup",
    shortName: "Profit & Marge",
    seoTitle: "Calculateur de Bénéfice, Marge Brute et Taux de Marque",
    seoDescription:
      "Calculez bénéfice ou perte, marge sur prix de vente et majoration (markup) dans 156 devises mondiales pour vos tarifs commerciaux.",
    shortDescription:
      "Calculez profit ou perte, marge brute et majoration dans toute devise.",
    keywords: ["calculateur de marge", "bénéfice et perte", "taux de marge"],
  },
  "ratio-calculator": {
    name: "Calculateur de Ratio et Proportion",
    shortName: "Ratio",
    seoTitle: "Calculateur de Ratio – Simplifier et Résoudre une Proportion",
    seoDescription:
      "Simplifiez des ratios à plusieurs termes, comparez deux rapports ou résolvez une règle de trois étape par étape en ligne.",
    shortDescription:
      "Simplifiez des ratios, comparez deux rapports et trouvez l'inconnue.",
    keywords: ["calculateur de ratio", "simplifier un ratio", "proportion"],
  },
  "fraction-calculator": {
    name: "Calculateur de Fractions",
    shortName: "Fractions",
    seoTitle: "Calculateur de Fractions – Addition, Soustraction, Division",
    seoDescription:
      "Additionnez, soustrayez, multipliez et divisez des fractions avec réduction automatique, écriture mixte et valeur décimale.",
    shortDescription:
      "Effectuez les quatre opérations sur fractions avec simplification exacte.",
    keywords: ["calculateur de fractions", "simplifier fraction", "fraction mixte"],
  },
  "time-calculator": {
    name: "Calculateur d'Heures",
    shortName: "Heures",
    seoTitle: "Calculateur d'Heures – Additionner et Soustraire des Durées",
    seoDescription:
      "Additionnez ou soustrayez des heures et minutes sans erreur de base 60 pour vos feuilles de temps, plannings et trajets.",
    shortDescription:
      "Additionnez et soustrayez heures et minutes avec total en minutes et jours.",
    keywords: ["calculateur d'heures", "additionner heures minutes", "temps"],
  },
  "time-duration-calculator": {
    name: "Calculateur de Durée Horaire",
    shortName: "Durée Horaire",
    seoTitle: "Calculateur de Durée – Heures Entre Début et Fin",
    seoDescription:
      "Calculez la durée exacte en heures, minutes et heures décimales entre deux horaires, y compris les quarts de nuit passant minuit.",
    shortDescription:
      "Mesurez les heures et minutes écoulées entre deux horaires, nuit incluse.",
    keywords: ["durée entre deux heures", "heures décimales", "travail de nuit"],
  },
  "unit-converter": {
    name: "Convertisseur d'Unités",
    shortName: "Convertisseur",
    seoTitle: "Convertisseur d'Unités – Longueur, Poids, Température",
    seoDescription:
      "Convertissez longueur, masse, température, volume, vitesse et surface entre systèmes métrique et impérial selon les normes exactes.",
    shortDescription:
      "Convertissez longueur, poids, température, volume, vitesse et surface.",
    keywords: ["convertisseur d'unités", "kg en livres", "métrique impérial"],
  },
  "bmi-calculator": {
    name: "Calculateur d'IMC (BMI)",
    shortName: "IMC",
    seoTitle: "Calculateur d'IMC – Indice de Masse Corporelle Adulte",
    seoDescription:
      "Calculez votre IMC en kg/cm ou lb/ft/in. Consultez la catégorie OMS pour adultes et la fourchette de poids de référence.",
    shortDescription:
      "Évaluez l'Indice de Masse Corporelle adulte en unités métriques ou impériales.",
    keywords: ["calculateur IMC", "indice de masse corporelle", "poids santé"],
  },
  "bmr-calculator": {
    name: "Calculateur de Métabolisme Basal (BMR)",
    shortName: "BMR",
    seoTitle: "Calculateur de Métabolisme Basal (Mifflin-St Jeor)",
    seoDescription:
      "Estimez votre métabolisme de base avec l'équation Mifflin-St Jeor en unités métriques ou impériales et découvrez vos besoins au repos.",
    shortDescription:
      "Estimez les calories brûlées au repos selon la formule Mifflin-St Jeor.",
    keywords: ["métabolisme basal", "calculateur BMR", "Mifflin-St Jeor"],
  },
  "tdee-calculator": {
    name: "Calculateur de Dépense Énergétique (TDEE)",
    shortName: "TDEE",
    seoTitle: "Calculateur de TDEE – Dépense Énergétique Quotidienne",
    seoDescription:
      "Calculez votre dépense énergétique journalière et vos calories de maintien selon votre BMR et votre niveau d'activité hebdomadaire.",
    shortDescription:
      "Estimez vos calories de maintien selon le métabolisme basal et l'activité.",
    keywords: ["calculateur TDEE", "dépense énergétique quotidienne", "maintien"],
  },
  "calorie-calculator": {
    name: "Calculateur de Calories",
    shortName: "Calories",
    seoTitle: "Calculateur de Calories – Besoins Journaliers Estimés",
    seoDescription:
      "Estimez vos besoins caloriques quotidiens pour maintenir, perdre ou prendre du poids avec la formule Mifflin-St Jeor et des seuils sûrs.",
    shortDescription:
      "Estimez l'apport calorique quotidien selon votre objectif pondéral.",
    keywords: ["calculateur de calories", "besoins caloriques", "déficit calorique"],
  },
  "ideal-weight-calculator": {
    name: "Calculateur de Poids Idéal",
    shortName: "Poids Idéal",
    seoTitle: "Calculateur de Poids Idéal – Formules et Plage IMC",
    seoDescription:
      "Comparez les formules de Devine, Robinson, Miller et Hamwi ainsi que la plage de poids IMC normale en kilogrammes et en livres.",
    shortDescription:
      "Comparez Devine, Robinson, Miller et Hamwi avec la fourchette IMC normale.",
    keywords: ["calculateur poids idéal", "poids selon taille", "formule Devine"],
  },
  "body-fat-calculator": {
    name: "Calculateur de Masse Grasse",
    shortName: "Masse Grasse",
    seoTitle: "Calculateur de Masse Grasse – Méthode US Navy",
    seoDescription:
      "Estimez votre pourcentage de masse grasse par la méthode des circonférences (cou, taille, hanches et stature) en cm ou pouces.",
    shortDescription:
      "Estimez masse grasse (%), masse adipeuse et masse maigre par mesures.",
    keywords: ["calculateur masse grasse", "taux de graisse corporelle", "US Navy"],
  },
  "protein-calculator": {
    name: "Calculateur de Protéines",
    shortName: "Protéines",
    seoTitle: "Calculateur de Protéines – Apport Quotidien en Grammes",
    seoDescription:
      "Estimez votre apport journalier recommandé en protéines selon votre poids corporel (kg ou lb) et votre pratique sportive.",
    shortDescription:
      "Estimez vos grammes de protéines quotidiens selon votre poids et objectif.",
    keywords: ["calculateur de protéines", "grammes de protéines par jour"],
  },
  "water-intake-calculator": {
    name: "Calculateur d'Eau Quotidienne",
    shortName: "Hydratation",
    seoTitle: "Calculateur d'Eau – Besoin d'Hydratation Quotidien",
    seoDescription:
      "Estimez votre besoin journalier en eau en litres, millilitres, onces et verres selon votre poids, votre sport et le climat.",
    shortDescription:
      "Estimez votre hydratation quotidienne en litres selon poids, sport et climat.",
    keywords: ["calculateur eau par jour", "besoin hydratation", "combien d'eau boire"],
  },
  "pregnancy-weeks-to-months": {
    name: "Semaines en Mois de Grossesse",
    shortName: "Semaines en Mois",
    seoTitle: "Convertisseur Semaines en Mois de Grossesse et Trimestres",
    seoDescription:
      "Convertissez les semaines et jours d'aménorrhée en mois approximatifs et trimestre de grossesse avec repères cliniques.",
    shortDescription:
      "Convertissez semaines de grossesse en mois approximatif et trimestre.",
    keywords: ["semaines en mois grossesse", "tableau mois grossesse", "trimestre"],
  },
  "pregnancy-due-date-calculator": {
    name: "Calculateur Date d'Accouchement",
    shortName: "Date d'Accouchement",
    seoTitle: "Calculateur de Date d'Accouchement Prévue (DPA)",
    seoDescription:
      "Estimez votre date prévue d'accouchement, votre semaine actuelle et votre trimestre à partir de vos dernières règles (cycle de 280 jours).",
    shortDescription:
      "Estimez la DPA, la semaine en cours et le trimestre depuis vos dernières règles.",
    keywords: ["date d'accouchement prévue", "calculateur DPA", "grossesse"],
  },
  "pregnancy-calculator": {
    name: "Calculateur de Grossesse",
    shortName: "Grossesse",
    seoTitle: "Calculateur de Grossesse – Semaines et Avancement",
    seoDescription:
      "Suivez votre âge gestationnel en semaines et jours, le pourcentage d'avancement et votre DPA depuis vos règles ou votre terme prévu.",
    shortDescription:
      "Estimez semaines de grossesse, avancement (%) et date prévue d'accouchement.",
    keywords: ["calculateur de grossesse", "semaines d'aménorrhée", "suivi grossesse"],
  },
  "ovulation-calculator": {
    name: "Calculateur d'Ovulation",
    shortName: "Ovulation",
    seoTitle: "Calculateur d'Ovulation – Fenêtre Fertile et Prochain Cycle",
    seoDescription:
      "Estimez vos prochaines règles, votre jour probable d'ovulation et votre fenêtre fertile selon le début du dernier cycle et sa durée.",
    shortDescription:
      "Estimez prochaines règles, jour d'ovulation probable et période fertile.",
    keywords: ["calculateur d'ovulation", "période fertile", "cycle menstruel"],
  },
};

const DE_CALCS: Record<string, LocalizedCalcFields> = {
  "percentage-calculator": {
    name: "Prozentrechner",
    shortName: "Prozent",
    seoTitle: "Prozentrechner – Prozentwert, Zunahme & Abweichung Online",
    seoDescription:
      "Berechnen Sie Prozentsätze, prozentuale Zunahme, Abnahme, Differenz und Veränderung sofort mit verständlichen Formeln und Beispielen.",
    shortDescription:
      "Berechnen Sie X% von Y, Zunahme, Abnahme, Differenz und Veränderung.",
    keywords: ["Prozentrechner", "Prozent berechnen", "prozentuale Veränderung"],
  },
  "average-calculator": {
    name: "Durchschnittsrechner",
    shortName: "Durchschnitt",
    seoTitle: "Durchschnittsrechner – Arithmetisches Mittel & Gewichteter Schnitt",
    seoDescription:
      "Berechnen Sie arithmetisches Mittel, Median und gewichteten Durchschnitt beliebiger Zahlenreihen mit Schritt-für-Schritt-Erklärung.",
    shortDescription:
      "Berechnen Sie Mittelwert, Median und gewichteten Durchschnitt flexibel.",
    keywords: ["Durchschnittsrechner", "Mittelwert berechnen", "gewichteter Durchschnitt"],
  },
  "age-calculator": {
    name: "Altersrechner",
    shortName: "Alter",
    seoTitle: "Altersrechner – Exaktes Alter in Jahren, Monaten & Tagen",
    seoDescription:
      "Ermitteln Sie Ihr genaues Alter ab dem Geburtsdatum in Jahren, Monaten, Tagen, gelebten Tagen und Tagen bis zum nächsten Geburtstag.",
    shortDescription:
      "Berechnen Sie genaues Alter, gelebte Tage und Countdown zum Geburtstag.",
    keywords: ["Altersrechner", "Alter berechnen", "Geburtsdatum Rechner"],
  },
  "date-calculator": {
    name: "Datumsrechner",
    shortName: "Datum",
    seoTitle: "Datumsrechner – Tage, Wochen, Monate & Jahre addieren",
    seoDescription:
      "Addieren oder subtrahieren Sie Tage, Wochen, Monate und Jahre zu jedem Datum unter exakter Berücksichtigung von Schaltjahren.",
    shortDescription:
      "Addieren oder subtrahieren Sie Tage, Wochen, Monate und Jahre exakt.",
    keywords: ["Datumsrechner", "Tage zum Datum addieren", "Datum berechnen"],
  },
  "days-between-dates-calculator": {
    name: "Tage zwischen zwei Daten",
    shortName: "Tageszähler",
    seoTitle: "Tage zwischen zwei Daten – Tage & Wochen exakt zählen",
    seoDescription:
      "Zählen Sie exakte Kalendertage und Wochen zwischen zwei Daten. Wählen Sie optional, ob der Endtag für Urlaub oder Fristen mitgezählt wird.",
    shortDescription:
      "Zählen Sie exakte Tage und Wochen zwischen zwei Daten inkl. Enddatum-Option.",
    keywords: ["Tage zwischen Daten", "Tageszähler", "Datumsdifferenz"],
  },
  "discount-calculator": {
    name: "Rabattrechner",
    shortName: "Rabatt",
    seoTitle: "Rabattrechner – Angebotspreis & Alle Weltwährungen",
    seoDescription:
      "Berechnen Sie Verkaufspreis, Rabattbetrag und Ersparnis sofort in 156 Weltwährungen (EUR, CHF, USD, GBP, INR, JPY und mehr).",
    shortDescription:
      "Berechnen Sie Rabattbetrag und Endpreis schnell in jeder Weltwährung.",
    keywords: ["Rabattrechner", "Prozent Rabatt", "Angebotspreis berechnen"],
  },
  "profit-loss-calculator": {
    name: "Gewinn- und Verlustrechner",
    shortName: "Gewinn & Verlust",
    seoTitle: "Gewinnrechner – Marge, Aufschlag & Alle Währungen",
    seoDescription:
      "Berechnen Sie Gewinn oder Verlust, prozentualen Aufschlag (Markup) und Handelsspanne in 156 Weltwährungen aus Ein- und Verkaufspreis.",
    shortDescription:
      "Ermitteln Sie Gewinn/Verlust, Handelsspanne und Aufschlag weltweit.",
    keywords: ["Gewinnrechner", "Marge berechnen", "Aufschlag Markup"],
  },
  "ratio-calculator": {
    name: "Verhältnisrechner",
    shortName: "Verhältnis",
    seoTitle: "Verhältnisrechner – Verhältnisse kürzen & Proportion lösen",
    seoDescription:
      "Kürzen Sie mehrteilige Zahlenverhältnisse, vergleichen Sie zwei Verhältnisse oder berechnen Sie fehlende Werte per Dreisatz.",
    shortDescription:
      "Kürzen und vergleichen Sie Verhältnisse oder lösen Sie Proportionen.",
    keywords: ["Verhältnisrechner", "Verhältnis kürzen", "Dreisatz Rechner"],
  },
  "fraction-calculator": {
    name: "Bruchrechner",
    shortName: "Brüche",
    seoTitle: "Bruchrechner – Brüche addieren, subtrahieren & kürzen",
    seoDescription:
      "Addieren, subtrahieren, multiplizieren und dividieren Sie Brüche online mit automatischem Kürzen, gemischter Zahl und Dezimalwert.",
    shortDescription:
      "Rechnen Sie mit Brüchen inklusive Kürzung, gemischter Zahl und Dezimalwert.",
    keywords: ["Bruchrechner", "Brüche berechnen", "Brüche kürzen"],
  },
  "time-calculator": {
    name: "Zeitrechner",
    shortName: "Zeit",
    seoTitle: "Zeitrechner – Stunden und Minuten addieren & subtrahieren",
    seoDescription:
      "Addieren oder subtrahieren Sie Stunden und Minuten präzise im 60er-System für Arbeitszeiten, Stundenzettel und Reiseplanung.",
    shortDescription:
      "Addieren und subtrahieren Sie Stunden/Minuten mit Minuten- und Tagessumme.",
    keywords: ["Zeitrechner", "Stunden addieren", "Arbeitszeit berechnen"],
  },
  "time-duration-calculator": {
    name: "Zeitdauer-Rechner",
    shortName: "Zeitdauer",
    seoTitle: "Zeitdauer-Rechner – Stunden zwischen Start- & Endzeit",
    seoDescription:
      "Berechnen Sie exakte Stunden, Minuten und Dezimalstunden zwischen zwei Uhrzeiten – inklusive Nachtschichten über Mitternacht.",
    shortDescription:
      "Messen Sie Stunden und Dezimalstunden zwischen zwei Uhrzeiten inkl. Nachtschicht.",
    keywords: ["Zeitdauer Rechner", "Stunden zwischen Uhrzeiten", "Nachtschicht"],
  },
  "unit-converter": {
    name: "Einheitenumrechner",
    shortName: "Umrechner",
    seoTitle: "Einheitenumrechner – Länge, Gewicht, Temperatur & Volumen",
    seoDescription:
      "Rechnen Sie Länge, Gewicht, Temperatur, Volumen, Geschwindigkeit und Fläche zwischen metrischem und US-imperialem System um.",
    shortDescription:
      "Rechnen Sie Länge, Gewicht, Temperatur, Volumen, Tempo und Fläche um.",
    keywords: ["Einheitenumrechner", "kg in Pfund", "metrisch imperial"],
  },
  "bmi-calculator": {
    name: "BMI-Rechner",
    shortName: "BMI",
    seoTitle: "BMI-Rechner – Body-Mass-Index für Erwachsene Online",
    seoDescription:
      "Berechnen Sie Ihren BMI aus Größe und Gewicht in kg/cm oder lb/ft/in mit WHO-Kategorien und Normalgewichtsbereich.",
    shortDescription:
      "Berechnen Sie den Body-Mass-Index metrisch (kg/cm) oder imperial (lb/ft/in).",
    keywords: ["BMI-Rechner", "Body-Mass-Index", "Normalgewicht berechnen"],
  },
  "bmr-calculator": {
    name: "Grundumsatz-Rechner (BMR)",
    shortName: "Grundumsatz",
    seoTitle: "Grundumsatz-Rechner – BMR nach Mifflin-St Jeor",
    seoDescription:
      "Schätzen Sie Ihren täglichen Grundumsatz (BMR) mit der Mifflin-St-Jeor-Formel metrisch oder imperial und verstehen Sie den Ruheverbrauch.",
    shortDescription:
      "Schätzen Sie Ihren täglichen Ruheenergiebedarf nach Mifflin-St Jeor.",
    keywords: ["Grundumsatz Rechner", "BMR berechnen", "Mifflin-St Jeor"],
  },
  "tdee-calculator": {
    name: "Kalorienverbrauch-Rechner (TDEE)",
    shortName: "TDEE",
    seoTitle: "TDEE-Rechner – Täglicher Gesamtenergieumsatz",
    seoDescription:
      "Berechnen Sie Ihren gesamten täglichen Energieumsatz (TDEE) und Erhaltungskalorien aus Grundumsatz und Aktivitätslevel.",
    shortDescription:
      "Berechnen Sie Erhaltungskalorien aus BMR und wöchentlicher Aktivität.",
    keywords: ["TDEE-Rechner", "Gesamtumsatz berechnen", "Erhaltungskalorien"],
  },
  "calorie-calculator": {
    name: "Kalorienrechner",
    shortName: "Kalorien",
    seoTitle: "Kalorienrechner – Täglichen Kalorienbedarf berechnen",
    seoDescription:
      "Schätzen Sie Ihren täglichen Kalorienbedarf zum Halten, Abnehmen oder Zunehmen nach Mifflin-St Jeor mit sicheren Untergrenzen.",
    shortDescription:
      "Schätzen Sie den täglichen Kalorienbedarf für Halten, Abnahme oder Zunahme.",
    keywords: ["Kalorienrechner", "Kalorienbedarf", "Kaloriendefizit"],
  },
  "ideal-weight-calculator": {
    name: "Idealgewicht-Rechner",
    shortName: "Idealgewicht",
    seoTitle: "Idealgewicht-Rechner – Formeln & Gesunder BMI-Bereich",
    seoDescription:
      "Vergleichen Sie die Referenzformeln von Devine, Robinson, Miller und Hamwi mit dem gesunden BMI-Gewichtsbereich in kg und Pfund.",
    shortDescription:
      "Vergleichen Sie Devine, Robinson, Miller, Hamwi und den BMI-Normalbereich.",
    keywords: ["Idealgewicht Rechner", "Wohlfühlgewicht", "Devine Formel"],
  },
  "body-fat-calculator": {
    name: "Körperfett-Rechner",
    shortName: "Körperfett",
    seoTitle: "Körperfett-Rechner – US-Navy-Methode mit Maßband",
    seoDescription:
      "Schätzen Sie Ihren Körperfettanteil nach der US-Navy-Umfangsformel mit Hals-, Taillen-, Hüft- und Größenmaßen in cm oder Zoll.",
    shortDescription:
      "Schätzen Sie Körperfettanteil, Fettmasse und fettfreie Masse per Maßband.",
    keywords: ["Körperfett Rechner", "Körperfettanteil", "US Navy Methode"],
  },
  "protein-calculator": {
    name: "Proteinrechner",
    shortName: "Protein",
    seoTitle: "Proteinrechner – Täglicher Eiweißbedarf in Gramm",
    seoDescription:
      "Schätzen Sie Ihren täglichen Eiweißbedarf in Gramm anhand von Körpergewicht (kg oder lb) und Ihrem Trainings- oder Fitnessziel.",
    shortDescription:
      "Ermitteln Sie Ihren täglichen Proteinbedarf in Gramm nach Gewicht & Ziel.",
    keywords: ["Proteinrechner", "Eiweißbedarf berechnen", "Gramm Protein"],
  },
  "water-intake-calculator": {
    name: "Wasserbedarfs-Rechner",
    shortName: "Wasserbedarf",
    seoTitle: "Wasserbedarfs-Rechner – Tägliche Trinkmenge schätzen",
    seoDescription:
      "Schätzen Sie Ihre tägliche Flüssigkeitszufuhr in Litern, Millilitern, Unzen und Gläsern nach Gewicht, Sportdauer und Klima.",
    shortDescription:
      "Schätzen Sie den täglichen Flüssigkeitsbedarf nach Gewicht, Sport und Klima.",
    keywords: ["Wasserbedarf Rechner", "wie viel Wasser trinken", "Flüssigkeitsbedarf"],
  },
  "pregnancy-weeks-to-months": {
    name: "SSW in Monate Rechner",
    shortName: "SSW in Monate",
    seoTitle: "SSW in Monate Umrechner – Schwangerschaftswochen & Trimester",
    seoDescription:
      "Rechnen Sie Schwangerschaftswochen und -tage in den ungefähren Schwangerschaftsmonat und das Trimester um.",
    shortDescription:
      "Rechnen Sie Schwangerschaftswochen und Tage in Monat und Trimester um.",
    keywords: ["SSW in Monate", "Schwangerschaftsmonate", "Trimester Rechner"],
  },
  "pregnancy-due-date-calculator": {
    name: "Geburtstermin-Rechner",
    shortName: "Geburtstermin",
    seoTitle: "Geburtstermin-Rechner – Errechneter Termin (ET) ab letzter Periode",
    seoDescription:
      "Schätzen Sie Ihren voraussichtlichen Geburtstermin, die aktuelle SSW und das Trimester anhand der 280-Tage-Regel und Zykluslänge.",
    shortDescription:
      "Schätzen Sie den Geburtstermin (ET), SSW und Trimester ab letzter Periode.",
    keywords: ["Geburtstermin Rechner", "ET berechnen", "Schwangerschaft 280 Tage"],
  },
  "pregnancy-calculator": {
    name: "Schwangerschaftsrechner",
    shortName: "Schwangerschaft",
    seoTitle: "Schwangerschaftsrechner – SSW, Fortschritt & Geburtstermin",
    seoDescription:
      "Prüfen Sie Ihre aktuelle Schwangerschaftswoche (SSW), den Fortschritt in Prozent und den errechneten Geburtstermin.",
    shortDescription:
      "Berechnen Sie Schwangerschaftswoche, Fortschritt (%) und Geburtstermin.",
    keywords: ["Schwangerschaftsrechner", "aktuelle SSW", "Schwangerschaft"],
  },
  "ovulation-calculator": {
    name: "Eisprungrechner",
    shortName: "Eisprung",
    seoTitle: "Eisprungrechner – Fruchtbare Tage & Nächste Periode",
    seoDescription:
      "Schätzen Sie Ihre nächste Periode, den wahrscheinlichen Eisprungtag und die fruchtbaren Tage aus Zyklusbeginn und Zykluslänge.",
    shortDescription:
      "Schätzen Sie nächste Periode, Eisprung und fruchtbares Fenster nach Zyklus.",
    keywords: ["Eisprungrechner", "fruchtbare Tage", "Zyklusrechner"],
  },
};

const PT_CALCS: Record<string, LocalizedCalcFields> = {
  "percentage-calculator": {
    name: "Calculadora de Porcentagem",
    shortName: "Porcentagem",
    seoTitle: "Calculadora de Porcentagem – Cálculos Online Rápidos",
    seoDescription:
      "Calcule porcentagens, aumento, desconto, diferença percentual e variação percentual online com fórmulas claras e exemplos práticos.",
    shortDescription:
      "Calcule X% de Y, aumento, redução, diferença e variação percentual.",
    keywords: ["calculadora de porcentagem", "calcular porcentagem", "variação"],
  },
  "average-calculator": {
    name: "Calculadora de Média",
    shortName: "Média",
    seoTitle: "Calculadora de Média – Média Aritmética e Ponderada",
    seoDescription:
      "Calcule a média aritmética, mediana e média ponderada para qualquer lista de notas ou valores com explicação passo a passo.",
    shortDescription:
      "Calcule média aritmética, mediana e média ponderada com entradas flexíveis.",
    keywords: ["calculadora de média", "média ponderada", "média aritmética"],
  },
  "age-calculator": {
    name: "Calculadora de Idade",
    shortName: "Idade",
    seoTitle: "Calculadora de Idade – Idade Exata em Anos, Meses e Dias",
    seoDescription:
      "Descubra sua idade exata pela data de nascimento em anos, meses, dias, total de dias vividos e contagem para o próximo aniversário.",
    shortDescription:
      "Calcule idade exata em anos, meses, dias e dias até o próximo aniversário.",
    keywords: ["calculadora de idade", "calcular idade exata", "data de nascimento"],
  },
  "date-calculator": {
    name: "Calculadora de Datas",
    shortName: "Datas",
    seoTitle: "Calculadora de Datas – Somar ou Subtrair Dias e Meses",
    seoDescription:
      "Some ou subtraia dias, semanas, meses e anos de qualquer data do calendário com tratamento preciso de anos bissextos e fins de mês.",
    shortDescription:
      "Some ou subtraia dias, semanas, meses e anos com precisão bissexta.",
    keywords: ["calculadora de datas", "somar dias à data", "subtrair datas"],
  },
  "days-between-dates-calculator": {
    name: "Dias entre Datas",
    shortName: "Dias entre Datas",
    seoTitle: "Calculadora de Dias entre Datas – Contar Dias e Semanas",
    seoDescription:
      "Conte exatamente quantos dias e semanas existem entre duas datas, com opção de incluir o dia final para contratos, viagens ou férias.",
    shortDescription:
      "Conte dias e semanas totais entre duas datas com opção de inclusão final.",
    keywords: ["dias entre datas", "contador de dias", "diferença entre datas"],
  },
  "discount-calculator": {
    name: "Calculadora de Desconto",
    shortName: "Desconto",
    seoTitle: "Calculadora de Desconto – Preço Final em 156 Moedas",
    seoDescription:
      "Calcule preços promocionais, valor economizado e porcentagem de desconto na hora em 156 moedas do mundo (BRL, EUR, USD, AOA, GBP).",
    shortDescription:
      "Calcule o valor do desconto e o preço final em qualquer moeda mundial.",
    keywords: ["calculadora de desconto", "preço com desconto", "porcentagem off"],
  },
  "profit-loss-calculator": {
    name: "Calculadora de Lucro e Prejuízo",
    shortName: "Lucro e Prejuízo",
    seoTitle: "Calculadora de Lucro, Margem e Markup (Todas as Moedas)",
    seoDescription:
      "Calcule lucro ou prejuízo, percentual sobre o custo (markup) e margem bruta em 156 moedas mundiais a partir do custo e venda.",
    shortDescription:
      "Encontre lucro ou prejuízo, margem bruta e markup em qualquer moeda.",
    keywords: ["calculadora de lucro", "margem de lucro", "markup"],
  },
  "ratio-calculator": {
    name: "Calculadora de Razão e Proporção",
    shortName: "Proporção",
    seoTitle: "Calculadora de Proporção – Simplificar e Comparar Razões",
    seoDescription:
      "Simplifique razões numéricas, compare duas razões ou encontre o valor desconhecido de uma proporção com regra de três passo a passo.",
    shortDescription:
      "Simplifique razões múltiplas, compare proporções e ache valores ausentes.",
    keywords: ["calculadora de proporção", "simplificar razão", "regra de três"],
  },
  "fraction-calculator": {
    name: "Calculadora de Frações",
    shortName: "Frações",
    seoTitle: "Calculadora de Frações – Somar, Subtrair, Dividir",
    seoDescription:
      "Some, subtraia, multiplique e divida frações online. Simplifica resultados automaticamente e exibe número misto e decimal.",
    shortDescription:
      "Faça operações com frações com simplificação automática e número misto.",
    keywords: ["calculadora de frações", "somar frações", "simplificar fração"],
  },
  "time-calculator": {
    name: "Calculadora de Tempo",
    shortName: "Tempo",
    seoTitle: "Calculadora de Tempo – Somar e Subtrair Horas e Minutos",
    seoDescription:
      "Some ou subtraia blocos de horas e minutos sem erros de base 60 para controle de ponto, estudos e viagens com totais em minutos e dias.",
    shortDescription:
      "Some e subtraia horas e minutos com totais equivalentes em minutos e dias.",
    keywords: ["calculadora de tempo", "somar horas e minutos", "subtrair horas"],
  },
  "time-duration-calculator": {
    name: "Calculadora de Duração",
    shortName: "Duração",
    seoTitle: "Calculadora de Duração – Horas entre Início e Fim",
    seoDescription:
      "Calcule as horas, minutos e horas decimais exatas entre um horário inicial e final, incluindo turnos noturnos após a meia-noite.",
    shortDescription:
      "Meça horas e minutos decorridos entre dois horários, inclusive noturnos.",
    keywords: ["duração entre horários", "horas trabalhadas", "turno noturno"],
  },
  "unit-converter": {
    name: "Conversor de Unidades",
    shortName: "Conversor",
    seoTitle: "Conversor de Unidades – Comprimento, Peso e Temperatura",
    seoDescription:
      "Converta comprimento, peso, temperatura, volume, velocidade e área entre o sistema métrico e imperial com fatores exatos.",
    shortDescription:
      "Converta comprimento, peso, temperatura, volume, velocidade e área.",
    keywords: ["conversor de unidades", "kg para libras", "métrico imperial"],
  },
  "bmi-calculator": {
    name: "Calculadora de IMC (BMI)",
    shortName: "IMC",
    seoTitle: "Calculadora de IMC – Índice de Massa Corporal Online",
    seoDescription:
      "Calcule seu IMC com altura e peso em kg/cm ou lb/ft/in. Veja categorias da OMS para adultos e faixa de peso de referência.",
    shortDescription:
      "Verifique o Índice de Massa Corporal adulto em unidades métricas ou imperiais.",
    keywords: ["calculadora de IMC", "índice de massa corporal", "peso saudável"],
  },
  "bmr-calculator": {
    name: "Calculadora de TMB (BMR)",
    shortName: "TMB",
    seoTitle: "Calculadora de TMB – Taxa Metabólica Basal (Mifflin-St Jeor)",
    seoDescription:
      "Estime sua Taxa Metabólica Basal com a equação Mifflin-St Jeor em medidas métricas ou imperiais e entenda seu gasto calórico em repouso.",
    shortDescription:
      "Estime o gasto calórico diário em repouso com a fórmula Mifflin-St Jeor.",
    keywords: ["calculadora TMB", "taxa metabólica basal", "Mifflin-St Jeor"],
  },
  "tdee-calculator": {
    name: "Calculadora de TDEE",
    shortName: "TDEE",
    seoTitle: "Calculadora de TDEE – Gasto Energético Diário Total",
    seoDescription:
      "Calcule seu Gasto Energético Diário Total e calorias de manutenção combinando sua TMB com o nível semanal de atividade física.",
    shortDescription:
      "Estime calorias diárias de manutenção combinando TMB e nível de atividade.",
    keywords: ["calculadora TDEE", "gasto calórico diário", "calorias manutenção"],
  },
  "calorie-calculator": {
    name: "Calculadora de Calorias",
    shortName: "Calorias",
    seoTitle: "Calculadora de Calorias – Necessidade Calórica Diária",
    seoDescription:
      "Estime quantas calorias consumir por dia para manter, perder ou ganhar peso usando Mifflin-St Jeor e limites mínimos seguros.",
    shortDescription:
      "Estime calorias diárias para manter, perder ou ganhar peso gradualmente.",
    keywords: ["calculadora de calorias", "déficit calórico", "calorias diárias"],
  },
  "ideal-weight-calculator": {
    name: "Calculadora de Peso Ideal",
    shortName: "Peso Ideal",
    seoTitle: "Calculadora de Peso Ideal – Fórmulas e Faixa de IMC",
    seoDescription:
      "Compare estimativas de peso pelas fórmulas de Devine, Robinson, Miller e Hamwi junto à faixa saudável de IMC em quilos e libras.",
    shortDescription:
      "Compare Devine, Robinson, Miller e Hamwi com a faixa saudável de IMC.",
    keywords: ["calculadora peso ideal", "peso pela altura", "fórmula de Devine"],
  },
  "body-fat-calculator": {
    name: "Calculadora de Gordura Corporal",
    shortName: "Gordura Corporal",
    seoTitle: "Calculadora de Gordura Corporal – Método da Marinha EUA",
    seoDescription:
      "Estime o percentual de gordura corporal pela fórmula de circunferências (pescoço, cintura, quadril e altura) em cm ou polegadas.",
    shortDescription:
      "Estime percentual de gordura corporal, massa gorda e massa magra por medidas.",
    keywords: ["percentual gordura corporal", "método marinha", "massa magra"],
  },
  "protein-calculator": {
    name: "Calculadora de Proteína",
    shortName: "Proteína",
    seoTitle: "Calculadora de Proteína – Ingestão Diária em Gramas",
    seoDescription:
      "Estime sua meta diária de proteínas em gramas com base no peso corporal (kg ou lb) e no seu nível de treino ou condicionamento.",
    shortDescription:
      "Estime gramas diários de proteína conforme peso corporal e atividade.",
    keywords: ["calculadora de proteína", "proteína por kg", "gramas de proteína"],
  },
  "water-intake-calculator": {
    name: "Calculadora de Água Diária",
    shortName: "Hidratação",
    seoTitle: "Calculadora de Água – Meta de Hidratação Diária",
    seoDescription:
      "Estime sua ingestão diária de água em litros, mililitros, onças e copos de acordo com peso, duração do exercício e clima.",
    shortDescription:
      "Estime a hidratação diária em litros e onças por peso, treino e clima.",
    keywords: ["calculadora de água", "quanta água beber", "hidratação diária"],
  },
  "pregnancy-weeks-to-months": {
    name: "Semanas em Meses de Gravidez",
    shortName: "Semanas em Meses",
    seoTitle: "Conversor de Semanas em Meses de Gravidez e Trimestres",
    seoDescription:
      "Converta semanas e dias de gestação para o mês aproximado e trimestre, entendendo por que a obstetrícia utiliza semanas.",
    shortDescription:
      "Converta semanas gestacionais e dias em mês aproximado e trimestre.",
    keywords: ["semanas em meses gravidez", "tabela meses gestação", "trimestres"],
  },
  "pregnancy-due-date-calculator": {
    name: "Calculadora de Data do Parto",
    shortName: "Data do Parto",
    seoTitle: "Calculadora de Data Provável do Parto (DPP) pela DUM",
    seoDescription:
      "Estime a data provável do parto, semana gestacional atual e trimestre pela data da última menstruação no modelo padrão de 280 dias.",
    shortDescription:
      "Estime a data do parto, semana atual e trimestre pela última menstruação.",
    keywords: ["data provável do parto", "calculadora DPP", "gravidez 280 dias"],
  },
  "pregnancy-calculator": {
    name: "Calculadora de Gravidez",
    shortName: "Gravidez",
    seoTitle: "Calculadora de Gravidez – Idade Gestacional e Progresso",
    seoDescription:
      "Veja quantas semanas e dias de gravidez você está hoje, o percentual de progresso e a data prevista do parto via DUM ou DPP.",
    shortDescription:
      "Acompanhe semanas gestacionais, progresso da gravidez e data prevista.",
    keywords: ["calculadora de gravidez", "quantas semanas de gravidez", "gestação"],
  },
  "ovulation-calculator": {
    name: "Calculadora de Ovulação",
    shortName: "Ovulação",
    seoTitle: "Calculadora de Ovulação – Período Fértil e Próximo Ciclo",
    seoDescription:
      "Estime sua próxima menstruação, dia provável da ovulação e janela fértil pela data da última menstruação e duração do ciclo.",
    shortDescription:
      "Estime próxima menstruação, dia provável da ovulação e período fértil.",
    keywords: ["calculadora de ovulação", "período fértil", "ciclo menstrual"],
  },
};

export const LOCALIZED_CALCS: Record<
  NonDefaultLocale,
  Record<string, LocalizedCalcFields>
> = {
  hi: HI_CALCS,
  es: ES_CALCS,
  fr: FR_CALCS,
  de: DE_CALCS,
  pt: PT_CALCS,
};

export function getLocalizedCalculator(
  slug: string,
  locale: Locale
): CalculatorMeta {
  const base = CALCULATORS.find((c) => c.slug === slug);
  if (!base) {
    throw new Error(`Unknown calculator slug: ${slug}`);
  }
  if (locale === "en") {
    return base;
  }
  const ui = getUiDictionary(locale);
  const loc = LOCALIZED_CALCS[locale][slug];
  if (!loc) {
    throw new Error(`Missing localized calculator metadata for ${slug} (${locale})`);
  }
  return {
    ...base,
    name: loc.name,
    shortName: loc.shortName,
    categoryName: ui.categories[base.category].name,
    categoryPath: localizePath(base.categoryPath, locale),
    seoTitle: loc.seoTitle,
    seoDescription: loc.seoDescription,
    shortDescription: loc.shortDescription,
    keywords: loc.keywords,
  };
}

export function getAllLocalizedCalculators(locale: Locale): CalculatorMeta[] {
  return CALCULATORS.map((c) => getLocalizedCalculator(c.slug, locale));
}

export function getLocalizedCalculatorsByCategory(
  category: CalculatorCategoryId,
  locale: Locale
): CalculatorMeta[] {
  return CALCULATORS.filter((c) => c.category === category).map((c) =>
    getLocalizedCalculator(c.slug, locale)
  );
}

export function getLocalizedPopularCalculators(locale: Locale): CalculatorMeta[] {
  return CALCULATORS.filter((c) => c.popular).map((c) =>
    getLocalizedCalculator(c.slug, locale)
  );
}

export function getLocalizedRecentlyAddedCalculators(
  locale: Locale
): CalculatorMeta[] {
  return CALCULATORS.filter((c) => c.recentlyAdded).map((c) =>
    getLocalizedCalculator(c.slug, locale)
  );
}
