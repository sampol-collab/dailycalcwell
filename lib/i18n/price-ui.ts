import { Locale } from "./config";

export interface PriceCalculatorUi {
  currencySelect: {
    label: string;
    popularLabel: string;
    allCurrenciesPlaceholder: string;
    searchPlaceholder: string;
    noResults: string;
    worldCountLabel: string;
    closeList: string;
  };
  discount: {
    title: string;
    originalPrice: string;
    discountPercent: string;
    finalPrice: string;
    youSave: string;
    savingsNote: (pct: number) => string;
  };
  profitLoss: {
    title: string;
    costPrice: string;
    sellingPrice: string;
    netProfit: string;
    netLoss: string;
    breakeven: string;
    profitPrefix: string;
    lossPrefix: string;
    profitPercent: string;
    lossPercent: string;
    profitMargin: string;
    markupPercent: string;
  };
  percentagePrice: {
    toggleLabel: string;
    plainNumber: string;
    currencyPrice: string;
  };
}

const PRICE_UI: Record<Locale, PriceCalculatorUi> = {
  en: {
    currencySelect: {
      label: "Currency (156 World Currencies)",
      popularLabel: "Popular",
      allCurrenciesPlaceholder: "All currencies",
      searchPlaceholder: "Search currency code or name (e.g. EUR, INR, JPY, Peso)...",
      noResults: "No matching currency found.",
      worldCountLabel: "156 ISO-4217 currencies",
      closeList: "Close currency list",
    },
    discount: {
      title: "Discount Calculator",
      originalPrice: "Original Price",
      discountPercent: "Discount Percentage (%)",
      finalPrice: "Final Price",
      youSave: "You Save",
      savingsNote: (pct) => `You save ${pct}% off the original price.`,
    },
    profitLoss: {
      title: "Profit and Loss Calculator",
      costPrice: "Cost Price",
      sellingPrice: "Selling Price",
      netProfit: "Net Profit",
      netLoss: "Net Loss",
      breakeven: "Breakeven",
      profitPrefix: "Profit: ",
      lossPrefix: "Loss: ",
      profitPercent: "Profit %",
      lossPercent: "Loss %",
      profitMargin: "Profit Margin",
      markupPercent: "Markup %",
    },
    percentagePrice: {
      toggleLabel: "Output Format",
      plainNumber: "Standard Number",
      currencyPrice: "Price / Currency",
    },
  },
  hi: {
    currencySelect: {
      label: "मुद्रा चुनें (विश्व की 156 मुद्राएँ)",
      popularLabel: "लोकप्रिय",
      allCurrenciesPlaceholder: "सभी मुद्राएँ",
      searchPlaceholder: "मुद्रा कोड या नाम खोजें (जैसे INR, USD, EUR, AED, JPY)...",
      noResults: "कोई मेल खाने वाली मुद्रा नहीं मिली।",
      worldCountLabel: "156 विश्व मुद्राएँ",
      closeList: "मुद्रा सूची बंद करें",
    },
    discount: {
      title: "छूट कैलकुलेटर",
      originalPrice: "मूल कीमत",
      discountPercent: "छूट प्रतिशत (%)",
      finalPrice: "अंतिम कीमत",
      youSave: "आपकी बचत",
      savingsNote: (pct) => `मूल कीमत पर आपको ${pct}% की बचत होती है।`,
    },
    profitLoss: {
      title: "लाभ और हानि कैलकुलेटर",
      costPrice: "क्रय मूल्य (Cost)",
      sellingPrice: "विक्रय मूल्य (Selling)",
      netProfit: "शुद्ध लाभ",
      netLoss: "शुद्ध हानि",
      breakeven: "समतुल्य (कोई लाभ/हानि नहीं)",
      profitPrefix: "लाभ: ",
      lossPrefix: "हानि: ",
      profitPercent: "लाभ %",
      lossPercent: "हानि %",
      profitMargin: "प्रॉफ़िट मार्जिन",
      markupPercent: "मार्कअप %",
    },
    percentagePrice: {
      toggleLabel: "परिणाम प्रारूप",
      plainNumber: "सामान्य संख्या",
      currencyPrice: "कीमत / मुद्रा",
    },
  },
  es: {
    currencySelect: {
      label: "Moneda (156 divisas del mundo)",
      popularLabel: "Populares",
      allCurrenciesPlaceholder: "Todas las monedas",
      searchPlaceholder: "Buscar código o nombre (ej. EUR, MXN, USD, Peso)...",
      noResults: "No se encontraron monedas.",
      worldCountLabel: "156 divisas ISO-4217",
      closeList: "Cerrar lista de monedas",
    },
    discount: {
      title: "Calculadora de Descuentos",
      originalPrice: "Precio Original",
      discountPercent: "Porcentaje de Descuento (%)",
      finalPrice: "Precio Final",
      youSave: "Ahorras",
      savingsNote: (pct) => `Ahorras un ${pct}% sobre el precio original.`,
    },
    profitLoss: {
      title: "Calculadora de Ganancias y Pérdidas",
      costPrice: "Precio de Costo",
      sellingPrice: "Precio de Venta",
      netProfit: "Ganancia Neta",
      netLoss: "Pérdida Neta",
      breakeven: "Punto de Equilibrio",
      profitPrefix: "Ganancia: ",
      lossPrefix: "Pérdida: ",
      profitPercent: "% Ganancia",
      lossPercent: "% Pérdida",
      profitMargin: "Margen de Beneficio",
      markupPercent: "% Recargo (Markup)",
    },
    percentagePrice: {
      toggleLabel: "Formato de Resultado",
      plainNumber: "Número estándar",
      currencyPrice: "Precio / Moneda",
    },
  },
  fr: {
    currencySelect: {
      label: "Devise (156 devises mondiales)",
      popularLabel: "Populaires",
      allCurrenciesPlaceholder: "Toutes les devises",
      searchPlaceholder: "Rechercher code ou nom (ex. EUR, CAD, CHF, USD)...",
      noResults: "Aucune devise correspondante.",
      worldCountLabel: "156 devises ISO-4217",
      closeList: "Fermer la liste des devises",
    },
    discount: {
      title: "Calculatrice de Remise",
      originalPrice: "Prix Initial",
      discountPercent: "Pourcentage de Remise (%)",
      finalPrice: "Prix Final",
      youSave: "Économie",
      savingsNote: (pct) => `Vous économisez ${pct}% sur le prix initial.`,
    },
    profitLoss: {
      title: "Calculatrice de Profit et Perte",
      costPrice: "Prix de Revient",
      sellingPrice: "Prix de Vente",
      netProfit: "Bénéfice Net",
      netLoss: "Perte Nette",
      breakeven: "Seuil de Rentabilité",
      profitPrefix: "Profit : ",
      lossPrefix: "Perte : ",
      profitPercent: "% Profit",
      lossPercent: "% Perte",
      profitMargin: "Marge Bénéficiaire",
      markupPercent: "Taux de Marge (%)",
    },
    percentagePrice: {
      toggleLabel: "Format du Résultat",
      plainNumber: "Nombre standard",
      currencyPrice: "Prix / Devise",
    },
  },
  de: {
    currencySelect: {
      label: "Währung (156 Weltwährungen)",
      popularLabel: "Beliebt",
      allCurrenciesPlaceholder: "Alle Währungen",
      searchPlaceholder: "Währungscode oder Name suchen (z. B. EUR, CHF, USD)...",
      noResults: "Keine passende Währung gefunden.",
      worldCountLabel: "156 ISO-4217-Währungen",
      closeList: "Währungsliste schließen",
    },
    discount: {
      title: "Rabattrechner",
      originalPrice: "Ursprungspreis",
      discountPercent: "Rabatt in Prozent (%)",
      finalPrice: "Endpreis",
      youSave: "Sie sparen",
      savingsNote: (pct) => `Sie sparen ${pct}% gegenüber dem Ursprungspreis.`,
    },
    profitLoss: {
      title: "Gewinn- und Verlustrechner",
      costPrice: "Einkaufspreis (Kosten)",
      sellingPrice: "Verkaufspreis",
      netProfit: "Nettogewinn",
      netLoss: "Nettoverlust",
      breakeven: "Gewinnschwelle",
      profitPrefix: "Gewinn: ",
      lossPrefix: "Verlust: ",
      profitPercent: "Gewinn %",
      lossPercent: "Verlust %",
      profitMargin: "Gewinnmarge",
      markupPercent: "Aufschlag %",
    },
    percentagePrice: {
      toggleLabel: "Ausgabeformat",
      plainNumber: "Standardzahl",
      currencyPrice: "Preis / Währung",
    },
  },
  pt: {
    currencySelect: {
      label: "Moeda (156 moedas do mundo)",
      popularLabel: "Populares",
      allCurrenciesPlaceholder: "Todas as moedas",
      searchPlaceholder: "Buscar código ou nome (ex. BRL, EUR, USD, AOA)...",
      noResults: "Nenhuma moeda encontrada.",
      worldCountLabel: "156 moedas ISO-4217",
      closeList: "Fechar lista de moedas",
    },
    discount: {
      title: "Calculadora de Desconto",
      originalPrice: "Preço Original",
      discountPercent: "Desconto (%)",
      finalPrice: "Preço Final",
      youSave: "Você Economiza",
      savingsNote: (pct) => `Você economiza ${pct}% sobre o preço original.`,
    },
    profitLoss: {
      title: "Calculadora de Lucro e Prejuízo",
      costPrice: "Preço de Custo",
      sellingPrice: "Preço de Venda",
      netProfit: "Lucro Líquido",
      netLoss: "Prejuízo Líquido",
      breakeven: "Ponto de Equilíbrio",
      profitPrefix: "Lucro: ",
      lossPrefix: "Prejuízo: ",
      profitPercent: "Lucro %",
      lossPercent: "Prejuízo %",
      profitMargin: "Margem de Lucro",
      markupPercent: "Markup %",
    },
    percentagePrice: {
      toggleLabel: "Formato do Resultado",
      plainNumber: "Número padrão",
      currencyPrice: "Preço / Moeda",
    },
  },
};

export function getPriceUi(locale: Locale): PriceCalculatorUi {
  return PRICE_UI[locale] || PRICE_UI.en;
}
