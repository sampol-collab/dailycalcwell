import { LocalizedGuideBody } from "./hi";

export const DE_GUIDES: Record<string, LocalizedGuideBody> = {
  "percentage-calculator": {
    intro:
      "Prozente drücken einen Anteil pro 100 aus – von Mehrwertsteuer und Rabatten bis zu Noten und Gehaltsanpassungen. Dieser Rechner deckt sechs häufige Prozentfragen in einem Tool ab.",
    resultExplanation:
      "Je nach gewähltem Modus sehen Sie den berechneten Wert, den Prozentanteil oder die prozentuale Veränderung samt exaktem Differenzbetrag.",
    formulaTitle: "Wichtige Prozentformeln",
    formulas: [
      "X% von Y = (X / 100) × Y",
      "X als % von Y = (X / Y) × 100",
      "Erhöhung = Ausgangswert + (Ausgangswert × Rate / 100)",
      "Senkung = Ausgangswert − (Ausgangswert × Rate / 100)",
      "Prozentuale Änderung = ((Neu − Alt) / |Alt|) × 100",
      "Prozentuale Differenz = (|A − B| / ((|A| + |B|) / 2)) × 100",
    ],
    stepByStep: [
      "Wählen Sie, ob ein Anteil, ein symmetrischer Vergleich oder eine Veränderung gesucht wird.",
      "Teilen Sie den Prozentsatz durch 100, um die Dezimalzahl zu erhalten.",
      "Setzen Sie die Werte ein und runden Sie erst am Schluss.",
    ],
    workedExample: {
      title: "18 % Aufschlag auf den Preis",
      scenario: "Ein Artikel für 30 $ (2.500 ₹) steigt um 18 %.",
      calculationSteps: [
        "18 / 100 = 0,18 → Aufschlag: 30 × 0,18 = 5,40 $ (450 ₹).",
        "Endpreis: 30 + 5,40 = 35,40 $ (2.950 ₹).",
      ],
      outcome: "Der neue Preis beträgt 35,40 $ (2.950 ₹).",
    },
    howToUse: [
      "Wählen Sie einen der sechs Modi und geben Sie beide Zahlenwerte ein.",
    ],
    assumptionsAndLimitations: [
      "Eine prozentuale Veränderung ist bei Ausgangswert 0 mathematisch nicht definiert.",
    ],
    faqs: [
      {
        question: "Unterschied zwischen prozentualer Änderung und Differenz?",
        answer:
          "Die Änderung misst gerichtet vom alten zum neuen Wert; die Differenz vergleicht zwei Werte symmetrisch gegen ihren Mittelwert.",
      },
      {
        question: "Warum ergibt +20 % gefolgt von −20 % nicht wieder den Ausgangswert?",
        answer:
          "Weil die −20 % vom bereits erhöhten Wert abgezogen werden (100 → 120 → 96).",
      },
    ],
  },
  "average-calculator": {
    intro:
      "Berechnen Sie arithmetisches Mittel, Median, Minimum, Maximum sowie den gewichteten Durchschnitt für Noten, Ausgaben oder Messreihen.",
    resultExplanation:
      "Der Standardmodus zeigt Mittelwert, Median, Anzahl und Summe; der gewichtete Modus berücksichtigt individuelle Gewichte.",
    formulaTitle: "Formeln für Mittelwerte",
    formulas: [
      "Arithmetisches Mittel = (x₁ + x₂ + ... + xₙ) / n",
      "Gewichteter Durchschnitt = (w₁x₁ + ... + wₙxₙ) / (w₁ + ... + wₙ)",
    ],
    stepByStep: [
      "Addieren Sie alle Zahlen und teilen Sie durch die Anzahl n.",
      "Bei Gewichtung multiplizieren Sie jeden Wert mit seinem Gewicht und teilen durch die Gewichtssumme.",
    ],
    workedExample: {
      title: "Gewichtete Kursnote",
      scenario: "82 % (Gewicht 30 %), 76 % (30 %) und 90 % (40 %).",
      calculationSteps: [
        "(82×30 + 76×30 + 90×40) / 100 = 8.340 / 100 = 83,4 %.",
      ],
      outcome: "Gewichteter Durchschnitt: 83,4 %.",
    },
    howToUse: [
      "Wählen Sie Arithmetisches Mittel oder Gewichtet und tragen Sie Ihre Werte ein.",
    ],
    assumptionsAndLimitations: [
      "Die Summe aller Gewichte muss größer als null sein.",
    ],
    faqs: [
      {
        question: "Müssen Gewichte genau 100 ergeben?",
        answer:
          "Nein, beliebige positive Gewichte sind zulässig.",
      },
      {
        question: "Wann lohnt sich der gewichtete Durchschnitt?",
        answer:
          "Wenn einzelne Werte stärker zählen, etwa Leistungspunkte oder Teilprüfungen.",
      },
    ],
  },
  "age-calculator": {
    intro:
      "Berechnen Sie Ihr exaktes Alter in Jahren, Monaten und Tagen vom Geburtsdatum bis heute oder zu einem Wunschdatum inklusive Schaltjahren.",
    resultExplanation:
      "Zeigt vollendete Jahre, Monate, Tage, insgesamt gelebte Tage sowie den Countdown bis zum nächsten Geburtstag.",
    formulaTitle: "Kalender-Altersberechnung",
    formulas: [
      "Jahre = Zieljahr − Geburtsjahr (korrigiert vor dem Geburtstag)",
      "Gelebte Tage = (Zieldatum UTC − Geburtsdatum UTC) / 86.400.000 ms",
    ],
    stepByStep: [
      "Subtrahieren Sie Jahr, Monat und Tag vom Zieldatum und borgen Sie bei Bedarf exakte Monatslängen.",
    ],
    workedExample: {
      title: "Schaltjahr-Geburtstag",
      scenario: "Geboren am 29. Februar 2000, geprüft am 24. November 2026.",
      calculationSteps: [
        "26 Jahre, 8 Monate, 26 Tage.",
      ],
      outcome: "Exaktes Alter: 26 Jahre, 8 Monate, 26 Tage.",
    },
    howToUse: [
      "Wählen Sie Geburtsdatum und Zieldatum über den Kalender.",
    ],
    assumptionsAndLimitations: [
      "Basiert auf dem gregorianischen Kalender in UTC.",
    ],
    faqs: [
      {
        question: "Werden Schaltjahre mitgezählt?",
        answer:
          "Ja, jeder 29. Februar zwischen beiden Daten zählt mit.",
      },
      {
        question: "Warum weicht die Monatsangabe vom Teilen durch 30 ab?",
        answer:
          "Weil reale Monate zwischen 28 und 31 Tagen haben.",
      },
    ],
  },
  "date-calculator": {
    intro:
      "Addieren oder subtrahieren Sie Tage, Wochen, Monate und Jahre zu einem beliebigen Datum – ideal für Fristen, Verträge und Reiseplanung.",
    resultExplanation:
      "Zeigt das Zieldatum im Klartext, im ISO-Format (JJJJ-MM-TT) sowie den Wochentag.",
    formulaTitle: "Kalender-Versatzreihenfolge",
    formulas: [
      "Schritt 1: Jahre & Monate anwenden (auf Monatsende begrenzt)  |  Schritt 2: ± (Wochen × 7 + Tage)",
    ],
    stepByStep: [
      "Wählen Sie Startdatum, Addieren (+) oder Subtrahieren (−) sowie die Zeiträume.",
    ],
    workedExample: {
      title: "Monatsende + 1 Monat & 10 Tage",
      scenario: "31. Januar 2024 + 1 Monat + 10 Tage.",
      calculationSteps: [
        "31. Jan. + 1 Monat = 29. Feb. 2024 → +10 Tage = 10. März 2024.",
      ],
      outcome: "Ergebnis: Sonntag, 10. März 2024.",
    },
    howToUse: [
      "Startdatum auswählen, Modus wählen und Werte eingeben.",
    ],
    assumptionsAndLimitations: [
      "Alle Berechnungen arbeiten mit UTC-Daten ohne Sommerzeit-Sprünge.",
    ],
    faqs: [
      {
        question: "Was passiert bei 31. Januar + 1 Monat?",
        answer:
          "Das Datum wird sauber auf den letzten gültigen Februartag (28. oder 29.) gesetzt.",
      },
      {
        question: "Werden Schaltjahre berücksichtigt?",
        answer:
          "Ja, vollautomatisch.",
      },
    ],
  },
  "days-between-dates-calculator": {
    intro:
      "Zählen Sie exakte Kalendertage und volle Wochen zwischen zwei Daten für Urlaub, Miete, Kündigungsfristen oder Projekte.",
    resultExplanation:
      "Zeigt Gesamttage, Wochen plus Resttage und erlaubt das Mitzählen des Endtages (+1 Tag).",
    formulaTitle: "Tagesdifferenz-Formel",
    formulas: [
      "Tage = |Enddatum (UTC) − Startdatum (UTC)| / 86.400.000",
    ],
    stepByStep: [
      "Normalisieren Sie beide Daten auf UTC-Mitternacht und wählen Sie optional Endtag einschließen.",
    ],
    workedExample: {
      title: "Inklusive Urlaubstage",
      scenario: "Montag 2. März bis Freitag 6. März 2026 inklusive.",
      calculationSteps: [
        "4 Tage Differenz + 1 Tag inklusiv = 5 Tage.",
      ],
      outcome: "Gesamtdauer: 5 Tage.",
    },
    howToUse: [
      "Start- und Enddatum auswählen und Option Endtag prüfen.",
    ],
    assumptionsAndLimitations: [
      "Zählt alle Kalendertage inklusive Wochenenden und Feiertagen.",
    ],
    faqs: [
      {
        question: "Wann Endtag einschließen?",
        answer:
          "Bei Urlaub oder Veranstaltungen, bei denen beide Randtage dazugehören.",
      },
      {
        question: "Verfälscht die Zeitumstellung das Ergebnis?",
        answer:
          "Nein, da mit UTC-Mitternacht gerechnet wird.",
      },
    ],
  },
  "discount-calculator": {
    intro:
      "Berechnen Sie Angebotspreis und Ersparnis in USD ($) oder INR (₹) direkt aus Originalpreis und Rabatt in Prozent.",
    resultExplanation:
      "Zeigt reduzierten Endpreis und exakten Rabattbetrag.",
    formulaTitle: "Rabattformeln",
    formulas: [
      "Rabattbetrag = Originalpreis × (Rabatt % / 100)  |  Endpreis = Original − Rabatt",
    ],
    stepByStep: [
      "Multiplizieren Sie den Originalpreis mit dem Rabattsatz durch 100 und ziehen Sie den Betrag ab.",
    ],
    workedExample: {
      title: "25 % Rabatt",
      scenario: "150 $ (12.000 ₹) mit 25 % Nachlass.",
      calculationSteps: [
        "Rabatt: 37,50 $ → Endpreis: 112,50 $.",
      ],
      outcome: "Sie zahlen 112,50 $ und sparen 37,50 $.",
    },
    howToUse: [
      "Währung wählen, Preis und Rabattsatz eingeben.",
    ],
    assumptionsAndLimitations: [
      "Berechnet Preise vor Verkaufssteuer.",
    ],
    faqs: [
      {
        question: "Wie rechne ich gestaffelte Rabatte (20 % + 10 %)?",
        answer:
          "Erst 20 % abziehen, dann auf den neuen Preis 10 % anwenden (ergibt 28 % gesamt).",
      },
      {
        question: "Rechnet die Währungswahl Wechselkurse um?",
        answer:
          "Nein, sie formatiert nur Währungssymbol und Zifferngruppierung.",
      },
    ],
  },
  "profit-loss-calculator": {
    intro:
      "Berechnen Sie Gewinn oder Verlust, prozentualen Aufschlag (Markup) auf den Einkaufspreis und Handelsspanne (Marge) in USD oder INR.",
    resultExplanation:
      "Trennt klar zwischen Aufschlag auf Kosten (Markup) und Marge auf Umsatz.",
    formulaTitle: "Gewinn-, Margen- & Aufschlagformeln",
    formulas: [
      "Gewinn/Verlust = Verkaufspreis − Einkaufspreis",
      "Markup % = (Gewinn / Einkauf) × 100  |  Marge % = (Gewinn / Verkauf) × 100",
    ],
    stepByStep: [
      "Differenz bilden und durch Einkaufspreis (Markup) bzw. Verkaufspreis (Marge) teilen.",
    ],
    workedExample: {
      title: "Marge vs. Aufschlag",
      scenario: "Einkauf 80 $, Verkauf 100 $.",
      calculationSteps: [
        "Gewinn 20 $ → Aufschlag 25 %, Marge 20 %.",
      ],
      outcome: "20 $ Gewinn (25 % Markup / 20 % Marge).",
    },
    howToUse: [
      "Währung wählen, Einkaufs- und Verkaufspreis eingeben.",
    ],
    assumptionsAndLimitations: [
      "Versand- und Gebührenkosten ggf. in den Einkaufspreis einrechnen.",
    ],
    faqs: [
      {
        question: "Warum ist die Marge kleiner als der Aufschlag?",
        answer:
          "Weil bei Gewinn durch den höheren Verkaufspreis geteilt wird.",
      },
      {
        question: "Was passiert bei gleichen Preisen?",
        answer:
          "Break-even mit 0 Gewinn, 0 % Marge und 0 % Markup.",
      },
    ],
  },
  "ratio-calculator": {
    intro:
      "Kürzen Sie mehrteilige Verhältnisse, vergleichen Sie zwei Verhältnisse oder berechnen Sie fehlende Werte per Dreisatz.",
    resultExplanation:
      "Verwendet den größten gemeinsamen Teiler (ggT) sowie Kreuzmultiplikation.",
    formulaTitle: "Verhältnis- & Proportionsformeln",
    formulas: [
      "Gekürzt = (A / ggT) : (B / ggT)  |  A : B = C : X ⇒ X = (B × C) / A",
    ],
    stepByStep: [
      "Bestimmen Sie den ggT zum Kürzen oder lösen Sie X per Kreuzprodukt.",
    ],
    workedExample: {
      title: "12 : 18 : 30 kürzen",
      scenario: "Verhältnis 12 : 18 : 30 vereinfachen.",
      calculationSteps: [
        "ggT = 6 → 2 : 3 : 5.",
      ],
      outcome: "Gekürztes Verhältnis: 2 : 3 : 5.",
    },
    howToUse: [
      "Modus wählen und positive Zahlen eingeben.",
    ],
    assumptionsAndLimitations: [
      "Erfordert positive Zahlen ungleich null.",
    ],
    faqs: [
      {
        question: "Sind 3 oder 4 Zahlen möglich?",
        answer:
          "Ja, über Begriff hinzufügen im Kürzen-Modus.",
      },
      {
        question: "Sind 16:9 und 1920:1080 gleich?",
        answer:
          "Ja, beide entsprechen 1,777778.",
      },
    ],
  },
  "fraction-calculator": {
    intro:
      "Addieren, subtrahieren, multiplizieren und dividieren Sie Brüche mit automatischer Kürzung, gemischter Zahl und Dezimalwert.",
    resultExplanation:
      "Zeigt gekürzten Bruch, gemischte Zahl und Dezimalzahl.",
    formulaTitle: "Bruchrechenregeln",
    formulas: [
      "(a/b) ± (c/d) = (ad ± bc) / bd  |  (a/b) × (c/d) = ac / bd  |  (a/b) ÷ (c/d) = ad / bc",
    ],
    stepByStep: [
      "Operation ausführen und Zähler sowie Nenner durch den ggT kürzen.",
    ],
    workedExample: {
      title: "3/4 + 5/6",
      scenario: "Zwei Brüche addieren.",
      calculationSteps: [
        "(18 + 20) / 24 = 38/24 = 19/12 = 1 7/12.",
      ],
      outcome: "19/12 bzw. 1 7/12.",
    },
    howToUse: [
      "Ganzzahlige Zähler und Nenner ≠ 0 eingeben, Rechenart wählen.",
    ],
    assumptionsAndLimitations: [
      "Nenner null ist ausgeschlossen.",
    ],
    faqs: [
      {
        question: "Warum 19/12 und 1 7/12?",
        answer:
          "19/12 ist der gekürzte unechte Bruch, 1 7/12 die gemischte Schreibweise.",
      },
      {
        question: "Sind negative Brüche möglich?",
        answer:
          "Ja, über ein Minuszeichen im Zähler.",
      },
    ],
  },
  "time-calculator": {
    intro:
      "Addieren oder subtrahieren Sie Stunden und Minuten exakt im 60er-System für Arbeitszeitkonten und Projekte.",
    resultExplanation:
      "Rechnet alles in Gesamtminuten um und gibt Stunden, Minuten sowie Tage aus.",
    formulaTitle: "Basis-60 Zeitrechnung",
    formulas: [
      "Gesamtminuten = (H₁ × 60 + M₁) ± (H₂ × 60 + M₂)",
    ],
    stepByStep: [
      "Stunden mal 60 plus Minuten addieren/subtrahieren und zurückwandeln.",
    ],
    workedExample: {
      title: "Arbeitszeiten addieren",
      scenario: "4 h 45 min + 3 h 35 min.",
      calculationSteps: [
        "285 + 215 = 500 min = 8 h 20 min.",
      ],
      outcome: "8h 20m (500 Minuten).",
    },
    howToUse: [
      "Stunden/Minuten eingeben und + oder − wählen.",
    ],
    assumptionsAndLimitations: [
      "Minuten ≥ 60 werden automatisch in Stunden umgerechnet.",
    ],
    faqs: [
      {
        question: "Was passiert bei Eingabe von 90 Minuten?",
        answer:
          "0h 90m wird automatisch als 1h 30m berechnet.",
      },
      {
        question: "Wie erhalte ich Industriestunden?",
        answer:
          "Gesamtminuten durch 60 teilen.",
      },
    ],
  },
  "time-duration-calculator": {
    intro:
      "Berechnen Sie Stunden, Minuten und Dezimalstunden zwischen Start- und Enduhrzeit inklusive Nachtschichten über Mitternacht.",
    resultExplanation:
      "Bei früherer Endzeit addiert der Nachtmodus automatisch 24 Stunden.",
    formulaTitle: "Uhrzeitdifferenz",
    formulas: [
      "Dauer = Endminuten − Startminuten (+ 1.440 min über Mitternacht)",
    ],
    stepByStep: [
      "Uhrzeiten in Minuten seit Mitternacht umrechnen und Differenz durch 60 teilen.",
    ],
    workedExample: {
      title: "Nachtschicht",
      scenario: "22:15 bis 06:45 Uhr.",
      calculationSteps: [
        "405 − 1.335 + 1.440 = 510 min = 8h 30m (8,5 Std.).",
      ],
      outcome: "8h 30m bzw. 8,50 Dezimalstunden.",
    },
    howToUse: [
      "Start- und Endzeit eingeben und Nachtintervall je nach Bedarf aktivieren.",
    ],
    assumptionsAndLimitations: [
      "Misst Spannen bis 24 Stunden.",
    ],
    faqs: [
      {
        question: "Wozu Dezimalstunden?",
        answer:
          "Lohnabrechnungen multiplizieren Stundenlöhne mit Dezimalstunden (8h 30m = 8,5).",
      },
      {
        question: "Was erscheint bei gleicher Start- und Endzeit?",
        answer:
          "0h 0m (0 Minuten).",
      },
    ],
  },
  "unit-converter": {
    intro:
      "Rechnen Sie Länge, Gewicht, Temperatur, Volumen, Geschwindigkeit und Fläche zwischen metrischem und US-imperialem System exakt um.",
    resultExplanation:
      "Verwendet exakte NIST/SI-Konstanten wie 1 Zoll = 2,54 cm und 1 lb = 0,45359237 kg.",
    formulaTitle: "Exakte Umrechnungsfaktoren",
    formulas: [
      "1 in = 2,54 cm  |  1 lb = 0,45359237 kg  |  °F = (°C × 9/5) + 32",
    ],
    stepByStep: [
      "Kategorie wählen, Ausgangs- und Zieleinheit einstellen.",
    ],
    workedExample: {
      title: "kg in Pfund & °F in °C",
      scenario: "72 kg in lb und 100 °F in °C.",
      calculationSteps: [
        "72 ÷ 0,45359237 = 158,73 lb ; (100 − 32) × 5/9 = 37,78 °C.",
      ],
      outcome: "72 kg ≈ 158,73 lb und 100 °F = 37,78 °C.",
    },
    howToUse: [
      "Größe wählen, Wert eingeben und bei Bedarf Einheiten tauschen.",
    ],
    assumptionsAndLimitations: [
      "Volumenangaben nutzen US-Gallonen (3,7854 L).",
    ],
    faqs: [
      {
        question: "Sind die Faktoren exakt?",
        answer:
          "Ja, gemäß internationalen SI/NIST-Definitionen.",
      },
      {
        question: "Unterschied US- zu UK-Gallone?",
        answer:
          "US-Gallone = 3,785 L, UK-Gallone = 4,546 L.",
      },
    ],
  },
  "bmi-calculator": {
    intro:
      "Der Body-Mass-Index (BMI) setzt Körpergewicht ins Verhältnis zur Körpergröße zum Quadrat – metrisch oder imperial berechenbar.",
    resultExplanation:
      "Zeigt BMI-Wert, WHO/CDC-Erwachsenenkategorie und das zugehörige Normalgewichtsspektrum.",
    formulaTitle: "BMI-Formeln",
    formulas: [
      "Metrisch: Gewicht (kg) / [Größe (m)]²  |  Imperial: 703 × Gewicht (lb) / [Größe (in)]²",
    ],
    stepByStep: [
      "Größe in Meter umrechnen, quadrieren und Gewicht dadurch teilen.",
    ],
    workedExample: {
      title: "Metrisches Beispiel",
      scenario: "172 cm und 70 kg.",
      calculationSteps: [
        "70 ÷ (1,72 × 1,72) = 23,7 (Normalgewicht).",
      ],
      outcome: "BMI = 23,7 kg/m².",
    },
    howToUse: [
      "System wählen und Größe sowie Gewicht eingeben.",
    ],
    assumptionsAndLimitations: [
      "Gilt für Erwachsene ab 20 Jahren; unterscheidet nicht zwischen Muskel- und Fettmasse.",
    ],
    medicalDisclaimer:
      "Der BMI ist ein Screening-Richtwert und keine ärztliche Diagnose.",
    faqs: [
      {
        question: "Für Kinder geeignet?",
        answer:
          "Nein, unter 20 Jahren gelten alters- und geschlechtsspezifische Perzentilen.",
      },
      {
        question: "Erkennt der BMI Muskelmasse?",
        answer:
          "Nein; trainierte Personen können trotz geringen Fetts erhöhte BMI-Werte zeigen.",
      },
    ],
  },
  "bmr-calculator": {
    intro:
      "Schätzen Sie Ihren täglichen Grundumsatz (BMR) im Ruhezustand nach der Mifflin-St-Jeor-Formel.",
    resultExplanation:
      "Ausgabe in kcal/Tag als Basis für den Gesamtumsatz (TDEE).",
    formulaTitle: "Mifflin-St-Jeor-Gleichung",
    formulas: [
      "Männer: (10 × kg) + (6,25 × cm) − (5 × Alter) + 5",
      "Frauen: (10 × kg) + (6,25 × cm) − (5 × Alter) − 161",
    ],
    stepByStep: [
      "Maße in cm/kg einsetzen und Geschlechtskonstante anwenden.",
    ],
    workedExample: {
      title: "Rechenbeispiel Frau",
      scenario: "30 Jahre, 165 cm, 62 kg.",
      calculationSteps: [
        "620 + 1.031,25 − 150 − 161 = 1.340,25 kcal/Tag.",
      ],
      outcome: "Grundumsatz ≈ 1.340 kcal/Tag.",
    },
    howToUse: [
      "Einheit, Geschlecht, Alter, Größe und Gewicht angeben.",
    ],
    assumptionsAndLimitations: [
      "Statistische Schätzung mit rund ±10 % Schwankungsbreite.",
    ],
    medicalDisclaimer:
      "Nur zur Information; essen Sie nicht dauerhaft unter dem Grundumsatz ohne ärztlichen Rat.",
    faqs: [
      {
        question: "Warum Mifflin-St Jeor?",
        answer:
          "Sie gilt als präziser für heutige Erwachsene als Harris-Benedict.",
      },
      {
        question: "Zum Abnehmen exakt den BMR essen?",
        answer:
          "Nein, berechnen Sie zuerst Ihren TDEE inklusive Alltagsbewegung.",
      },
    ],
  },
  "tdee-calculator": {
    intro:
      "Berechnen Sie Ihren gesamten täglichen Kalorienverbrauch (TDEE) aus Grundumsatz und Aktivitätsniveau.",
    resultExplanation:
      "Zeigt Erhaltungskalorien sowie BMR und Aktivitätsfaktor.",
    formulaTitle: "TDEE-Formel",
    formulas: [
      "TDEE = BMR × Aktivitätsfaktor (1,2 bis 1,9)",
    ],
    stepByStep: [
      "BMR berechnen und mit wöchentlicher Aktivität multiplizieren.",
    ],
    workedExample: {
      title: "Moderat aktiv",
      scenario: "Mann 32 J., 178 cm, 78 kg, Faktor 1,55.",
      calculationSteps: [
        "1.738 × 1,55 = 2.693 kcal/Tag.",
      ],
      outcome: "Erhaltungsumsatz ≈ 2.693 kcal/Tag.",
    },
    howToUse: [
      "Körperdaten eingeben und realistisches Aktivitätslevel wählen.",
    ],
    assumptionsAndLimitations: [
      "Bürotätige überschätzen ihr Level oft; Gewichtstrend 2–4 Wochen beobachten.",
    ],
    medicalDisclaimer:
      "Informativer Richtwert, keine medizinische Ernährungsberatung.",
    faqs: [
      {
        question: "Unterschied BMR vs. TDEE?",
        answer:
          "BMR ist reine Ruheenergie, TDEE umfasst Bewegung, Arbeit und Sport.",
      },
      {
        question: "Welches Level bei 3× Sport im Bürojob?",
        answer:
          "Meist Leicht aktiv (1,375) oder Moderat aktiv (1,55).",
      },
    ],
  },
  "calorie-calculator": {
    intro:
      "Schätzen Sie Ihren täglichen Kalorienbedarf zum Gewichthalten, Abnehmen oder Zunehmen mit sicheren Untergrenzen.",
    resultExplanation:
      "Zeigt Erhaltungskalorien und Zielkalorien (±250/500 kcal) bei Mindestgrenzen von 1.200 / 1.500 kcal.",
    formulaTitle: "Zielkalorien-Formel",
    formulas: [
      "Ziel = TDEE ± 250 oder ± 500 kcal/Tag (min. 1.200 / 1.500 kcal)",
    ],
    stepByStep: [
      "TDEE bestimmen und Anpassung je nach Ziel anwenden.",
    ],
    workedExample: {
      title: "Moderates Defizit",
      scenario: "TDEE 2.200 kcal mit Ziel −500 kcal.",
      calculationSteps: [
        "2.200 − 500 = 1.700 kcal/Tag.",
      ],
      outcome: "Tagesziel ≈ 1.700 kcal.",
    },
    howToUse: [
      "Daten eingeben, Aktivität und Gewichtsziel auswählen.",
    ],
    assumptionsAndLimitations: [
      "Sehr kalorienarme Diäten gehören in ärztliche Begleitung.",
    ],
    medicalDisclaimer:
      "Allgemeine Orientierung, kein individueller Ernährungsplan.",
    faqs: [
      {
        question: "Warum gibt es eine Untergrenze?",
        answer:
          "Unter 1.200/1.500 kcal ist die Nährstoffversorgung ohne Aufsicht kaum gesichert.",
      },
      {
        question: "Wie genau ist der Wert?",
        answer:
          "Typischerweise ±10–15 % als Startwert.",
      },
    ],
  },
  "ideal-weight-calculator": {
    intro:
      "Vergleichen Sie die vier etablierten Formeln (Devine, Robinson, Miller, Hamwi) samt gesundem BMI-Bereich in kg und Pfund.",
    resultExplanation:
      "Zeigt alle Schätzwerte neben dem gesunden BMI-Spektrum.",
    formulaTitle: "Referenzformeln",
    formulas: [
      "Devine, Robinson, Miller, Hamwi auf Basis der Körpergröße über 5 Fuß (152,4 cm)",
    ],
    stepByStep: [
      "Größe über 60 Zoll bestimmen und jede Formel auswerten.",
    ],
    workedExample: {
      title: "Bei 177,8 cm (70 Zoll)",
      scenario: "Erwachsener Mann.",
      calculationSteps: [
        "Devine 73,0 kg · Robinson 71,0 kg · Miller 70,3 kg · BMI-Spanne 58,5–78,7 kg.",
      ],
      outcome: "Formelwerte 70–75 kg innerhalb des BMI-Normalbereichs.",
    },
    howToUse: [
      "Einheit, Geschlecht und Körpergröße wählen.",
    ],
    assumptionsAndLimitations: [
      "Historische Dosierungsformeln berücksichtigen keine Muskelmasse.",
    ],
    medicalDisclaimer:
      "Statistische Vergleichswerte, keine ärztliche Vorgabe.",
    faqs: [
      {
        question: "Warum weichen die vier Formeln ab?",
        answer:
          "Sie entstanden zwischen 1964 und 1983 aus unterschiedlichen Stichproben.",
      },
      {
        question: "Ist Devine ein Diagnosewert?",
        answer:
          "Nein, ursprünglich diente sie zur Medikamentendosierung.",
      },
    ],
  },
  "body-fat-calculator": {
    intro:
      "Schätzen Sie Ihren Körperfettanteil nach der US-Navy-Methode anhand von Hals-, Taillen-, Hüft- und Größenmaßen.",
    resultExplanation:
      "Zeigt geschätzten Körperfettanteil sowie bei Gewichtsangabe Fett- und Magermasse.",
    formulaTitle: "US-Navy-Formel",
    formulas: [
      "Männer: 495 / (1,0324 − 0,19077 × log₁₀(Taille − Hals) + 0,15456 × log₁₀(Größe)) − 450",
    ],
    stepByStep: [
      "Umfänge waagerecht messen und in die Formel einsetzen.",
    ],
    workedExample: {
      title: "Beispiel Mann",
      scenario: "178 cm, Hals 38 cm, Taille 86 cm, 76 kg.",
      calculationSteps: [
        "86 − 38 = 48 cm → ≈ 17,1 % Körperfett.",
      ],
      outcome: "17,1 % (~13,0 kg Fettmasse / 63,0 kg Magermasse).",
    },
    howToUse: [
      "Maßsystem wählen und Maßbandwerte eintragen.",
    ],
    assumptionsAndLimitations: [
      "Abweichung gegenüber DEXA rund ±3 bis 5 %.",
    ],
    medicalDisclaimer:
      "Fitness-Schätzung, keine medizinische Körperanalyse.",
    faqs: [
      {
        question: "Wo wird der Taillenumfang gemessen?",
        answer:
          "Bei Männern auf Nabelhöhe, bei Frauen an der schmalsten Stelle.",
      },
      {
        question: "Warum zusätzlich zum BMI?",
        answer:
          "Erfasst Veränderungen am Bauchumfang unabhängig vom Waagengewicht.",
      },
    ],
  },
  "protein-calculator": {
    intro:
      "Schätzen Sie Ihren täglichen Eiweißbedarf in Gramm anhand von Körpergewicht und Trainingsziel.",
    resultExplanation:
      "Zeigt empfohlene Unter- und Obergrenze sowie Mittelwert.",
    formulaTitle: "Protein-Richtwerte",
    formulas: [
      "Basis 0,8–1,0 g/kg · Aktiv 1,2–1,5 g/kg · Kraftsport 1,6–2,0 g/kg",
    ],
    stepByStep: [
      "Gewicht in kg mit Zielbereich multiplizieren.",
    ],
    workedExample: {
      title: "Aktiver Erwachsener (70 kg)",
      scenario: "Ziel Aktiv (1,2–1,5 g/kg).",
      calculationSteps: [
        "70 × 1,2 = 84 g bis 70 × 1,5 = 105 g/Tag.",
      ],
      outcome: "Empfohlene Spanne: 84–105 g/Tag (Mittel 95 g).",
    },
    howToUse: [
      "Gewicht (kg/lb) und Aktivitätsziel wählen.",
    ],
    assumptionsAndLimitations: [
      "Bei Nieren- oder Lebererkrankungen ärztliche Vorgaben einhalten.",
    ],
    medicalDisclaimer:
      "Allgemeine Richtlinie, keine medizinische Ernährungstherapie.",
    faqs: [
      {
        question: "Wie hoch ist die allgemeine Basisempfehlung?",
        answer:
          "Rund 0,8 g Protein pro kg Körpergewicht täglich.",
      },
      {
        question: "Gilt dies auch bei pflanzlicher Ernährung?",
        answer:
          "Ja, durch Kombination verschiedener pflanzlicher Eiweißquellen.",
      },
    ],
  },
  "water-intake-calculator": {
    intro:
      "Schätzen Sie Ihren täglichen Flüssigkeitsbedarf in Litern, Millilitern, Unzen und Gläsern nach Gewicht, Sport und Klima.",
    resultExplanation:
      "Gibt Liter, mL, fl oz und 8-oz-Becher aus.",
    formulaTitle: "Hydratations-Schätzung",
    formulas: [
      "Basis (mL) = Gewicht (kg) × 33 mL  +  Sport (+350 mL/30 min)  +  Warmes Klima (+300 mL)",
    ],
    stepByStep: [
      "Gewicht × 33 mL berechnen und Zuschläge addieren.",
    ],
    workedExample: {
      title: "Warmes Klima",
      scenario: "68 kg, 45 Min. Sport, warmes Klima.",
      calculationSteps: [
        "2.244 + 525 + 300 = 3.069 mL ≈ 3,07 L.",
      ],
      outcome: "Tagesbedarf ≈ 3,07 Liter (104 fl oz).",
    },
    howToUse: [
      "Gewicht, Trainingsminuten und Klima wählen.",
    ],
    assumptionsAndLimitations: [
      "Rund 20 % der Flüssigkeit stammen aus wasserreichen Lebensmitteln.",
    ],
    medicalDisclaimer:
      "Kein Ersatz für ärztliche Trinkmengenbegrenzungen.",
    faqs: [
      {
        question: "Zählen Tee und Kaffee mit?",
        answer:
          "Ja, tragen ebenfalls zur Flüssigkeitsbilanz bei.",
      },
      {
        question: "Kann man zu viel trinken?",
        answer:
          "Ja, zu schnelles Trinken großer Mengen ohne Elektrolyte kann Natrium verdünnen.",
      },
    ],
  },
  "pregnancy-weeks-to-months": {
    intro:
      "Rechnen Sie Schwangerschaftswochen (SSW) und Tage in ungefähre Schwangerschaftsmonate und das Trimester um.",
    resultExplanation:
      "Da ein Kalendermonat ~4,33 Wochen umfasst, entsprechen 40 Wochen rund 9 Kalendermonaten plus einer Woche.",
    formulaTitle: "40 Wochen auf 9 Monate",
    formulas: [
      "Monat ≈ min(9, ceil((Wochen + Tage/7) / 4,33))",
    ],
    stepByStep: [
      "Wochen durch 4,33 teilen und Trimester zuordnen.",
    ],
    workedExample: {
      title: "24 Wochen & 3 Tage",
      scenario: "24+3 SSW.",
      calculationSteps: [
        "24,43 ÷ 4,33 ≈ 5,64 → 6. Monat (2. Trimester).",
      ],
      outcome: "Etwa 6. Monat, 2. Trimester.",
    },
    howToUse: [
      "Abgeschlossene Wochen und Tage eingeben.",
    ],
    assumptionsAndLimitations: [
      "Ärzte orientieren sich stets an exakten SSW statt Kalendermonaten.",
    ],
    medicalDisclaimer:
      "Informativer Überblick; maßgeblich ist die Datierung Ihrer Frauenarztpraxis.",
    faqs: [
      {
        question: "Warum 40 Wochen statt 9×4 = 36 Wochen?",
        answer:
          "Weil Kalendermonate durchschnittlich 4,33 Wochen dauern.",
      },
      {
        question: "Wann startet das 2. Trimester?",
        answer:
          "Bei 14+0 SSW.",
      },
    ],
  },
  "pregnancy-due-date-calculator": {
    intro:
      "Schätzen Sie Ihren errechneten Geburtstermin (ET), die aktuelle SSW und das Trimester anhand der letzten Periode und Zykluslänge.",
    resultExplanation:
      "Nutzt die 280-Tage-Regel mit Anpassung an Ihre persönliche Zykluslänge.",
    formulaTitle: "280-Tage-Regel",
    formulas: [
      "ET = Letzte Periode + 280 Tage + (Zykluslänge − 28 Tage)",
    ],
    stepByStep: [
      "Ersten Tag der letzten Periode wählen und 280 Tage plus Zyklusdifferenz addieren.",
    ],
    workedExample: {
      title: "28-Tage-Zyklus",
      scenario: "Letzte Periode am 1. Juni 2026.",
      calculationSteps: [
        "1. Juni 2026 + 280 Tage = 8. März 2027.",
      ],
      outcome: "Errechneter Termin: 8. März 2027.",
    },
    howToUse: [
      "Startdatum der letzten Periode und Zykluslänge (21–35 Tage) wählen.",
    ],
    assumptionsAndLimitations: [
      "Eine Ultraschall-Datierung im 1. Trimester ist genauer als die Periodenrechnung.",
    ],
    medicalDisclaimer:
      "Unverbindliche Schätzung; ersetzt keine ärztliche Vorsorge oder Ultraschalluntersuchung.",
    faqs: [
      {
        question: "Wie genau ist der errechnete Termin?",
        answer:
          "Guter Richtwert bei regelmäßigem Zyklus; genauer bestätigt durch frühen Ultraschall.",
      },
      {
        question: "Warum wird ab der letzten Periode gezählt?",
        answer:
          "Weil der exakte Eisprungtag meist nicht bekannt ist.",
      },
    ],
  },
  "pregnancy-calculator": {
    intro:
      "Berechnen Sie aktuelle Schwangerschaftswoche (SSW), Fortschritt in Prozent und Geburtstermin anhand letzter Periode oder bestätigtem ET.",
    resultExplanation:
      "Zeigt SSW + Tage, Trimester, verbleibende Tage und Fortschrittsbalken.",
    formulaTitle: "Doppelte Altersberechnung",
    formulas: [
      "Fortschritt % = (Verstrichene Tage / 280) × 100",
    ],
    stepByStep: [
      "Zwischen letzter Periode oder Geburtstermin als Ausgangspunkt wechseln.",
    ],
    workedExample: {
      title: "Ab bestätigtem ET",
      scenario: "ET 15. März 2027, geprüft am 24. Nov. 2026.",
      calculationSteps: [
        "169 Tage = 24 SSW + 1 Tag (60,4 %, 2. Trimester).",
      ],
      outcome: "24 Wochen und 1 Tag.",
    },
    howToUse: [
      "Methode wählen und Datum eintragen.",
    ],
    assumptionsAndLimitations: [
      "Orientiert an 280 Tagen Standarddauer.",
    ],
    medicalDisclaimer:
      "Reine Orientierungshilfe; folgen Sie stets Ihrer Ärztin oder Hebamme.",
    faqs: [
      {
        question: "Welche Methode soll ich wählen?",
        answer:
          "Bei bereits per Ultraschall festgelegtem ET empfiehlt sich der Geburtstermin.",
      },
      {
        question: "Was bedeutet 100 %?",
        answer:
          "40 volle Wochen (280 Tage).",
      },
    ],
  },
  "ovulation-calculator": {
    intro:
      "Schätzen Sie Ihre nächste Periode, den wahrscheinlichen Eisprung und die fruchtbaren Tage aus letztem Zyklusbeginn und Zykluslänge.",
    resultExplanation:
      "Zieht 14 Tage von der nächsten erwarteten Periode ab und markiert das 6-tägige fruchtbare Fenster.",
    formulaTitle: "Lutealphasen-Schätzung",
    formulas: [
      "Nächste Periode = LMP + Zykluslänge  |  Eisprung = Nächste Periode − 14 Tage",
    ],
    stepByStep: [
      "Zykluslänge addieren und 14 Tage Lutealphase abziehen.",
    ],
    workedExample: {
      title: "30-Tage-Zyklus",
      scenario: "Start 1. Nov. 2026, Zyklus 30 Tage.",
      calculationSteps: [
        "Nächste Periode: 1. Dez. · Eisprung: 17. Nov. · Fruchtbar: 12.–17. Nov.",
      ],
      outcome: "Eisprung um den 17. November.",
    },
    howToUse: [
      "Letzte Periode und Zykluslänge (21–45 Tage) wählen.",
    ],
    assumptionsAndLimitations: [
      "KEINE VERHÜTUNGSMETHODE: Eisprünge schwanken; nicht zur Schwangerschaftsverhütung geeignet.",
    ],
    medicalDisclaimer:
      "Unverbindliche Kalenderschätzung; NICHT als Verhütungsmittel geeignet.",
    faqs: [
      {
        question: "Taugt der Rechner zur Verhütung?",
        answer:
          "Nein, keinesfalls, da sich der Eisprung jederzeit verschieben kann.",
      },
      {
        question: "Was bei unregelmäßigen Zyklen?",
        answer:
          "LH-Tests oder ärztliche Beratung sind dann deutlich zuverlässiger.",
      },
    ],
  },
};
