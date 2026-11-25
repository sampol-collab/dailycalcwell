import { LocalizedGuideBody } from "./hi";

export const FR_GUIDES: Record<string, LocalizedGuideBody> = {
  "percentage-calculator": {
    intro:
      "Un pourcentage exprime une proportion sur 100 pour vos calculs de TVA, remises commerciales, notes scolaires ou hausses de salaire. Cet outil réunit six modes de calcul courants.",
    resultExplanation:
      "Selon le mode sélectionné, le résultat principal indique la valeur obtenue, la part en pourcentage ou la variation signée, accompagné du montant exact ajouté ou soustrait.",
    formulaTitle: "Formules Clés de Pourcentage",
    formulas: [
      "X% de Y = (X / 100) × Y",
      "X en % de Y = (X / Y) × 100",
      "Hausse (%) = Valeur Initiale + (Initiale × Taux / 100)",
      "Baisse (%) = Valeur Initiale − (Initiale × Taux / 100)",
      "Variation (%) = ((Nouveau − Ancien) / |Ancien|) × 100",
      "Écart (%) = (|A − B| / ((|A| + |B|) / 2)) × 100",
    ],
    stepByStep: [
      "Choisissez s'il s'agit d'une fraction d'un total, d'un écart symétrique ou d'une variation orientée.",
      "Divisez le taux en pourcentage par 100 pour l'exprimer en décimal.",
      "Appliquez la formule et n'arrondissez qu'à l'étape finale.",
    ],
    workedExample: {
      title: "Hausse de Prix ou TVA de 18%",
      scenario: "Un produit à 30 $ (ou 2 500 ₹) augmente de 18 %.",
      calculationSteps: [
        "18 / 100 = 0,18.",
        "Montant ajouté : 30 × 0,18 = 5,40 $ (ou 450 ₹).",
        "Total : 30 + 5,40 = 35,40 $ (ou 2 950 ₹).",
      ],
      outcome: "Le prix final après hausse de 18 % est de 35,40 $ (2 950 ₹).",
    },
    howToUse: [
      "Sélectionnez l'un des six modes de calcul.",
      "Saisissez les deux valeurs numériques et consultez le résultat instantané.",
    ],
    assumptionsAndLimitations: [
      "La variation en pourcentage n'est pas définie lorsque la valeur de départ vaut zéro.",
    ],
    faqs: [
      {
        question: "Quelle différence entre variation (%) et écart (%) ?",
        answer:
          "La variation mesure un changement depuis une valeur de départ vers une nouvelle valeur ; l'écart compare deux nombres de manière symétrique par rapport à leur moyenne.",
      },
      {
        question: "Pourquoi +20 % puis −20 % ne redonne-t-il pas le nombre initial ?",
        answer:
          "La baisse de 20 % s'applique au nombre augmenté : 100 + 20 % = 120, puis 120 − 20 % = 96.",
      },
    ],
  },
  "average-calculator": {
    intro:
      "La moyenne résume une série de données en une valeur représentative. Calculez moyenne arithmétique, médiane, minimum, maximum et moyenne pondérée.",
    resultExplanation:
      "Le mode standard affiche moyenne arithmétique, médiane, effectif et somme. Le mode pondéré multiplie chaque valeur par son coefficient.",
    formulaTitle: "Formules de Moyenne",
    formulas: [
      "Moyenne Arithmétique = (x₁ + x₂ + ... + xₙ) / n",
      "Moyenne Pondérée = (w₁x₁ + w₂x₂ + ... + wₙxₙ) / (w₁ + w₂ + ... + wₙ)",
    ],
    stepByStep: [
      "Additionnez toutes les valeurs et divisez par leur nombre n.",
      "Pour une moyenne pondérée, multipliez chaque note par son coefficient avant de diviser par la somme des coefficients.",
    ],
    workedExample: {
      title: "Moyenne Pondérée d'un Cours",
      scenario: "Notes : 82 % (coeff. 30), 76 % (coeff. 30) et 90 % (coeff. 40).",
      calculationSteps: [
        "(82 × 30) + (76 × 30) + (90 × 40) = 8 340.",
        "8 340 / 100 = 83,4 %.",
      ],
      outcome: "La moyenne pondérée finale est de 83,4 %.",
    },
    howToUse: [
      "Choisissez Moyenne Arithmétique ou Pondérée, saisissez vos lignes et ajoutez-en si besoin.",
    ],
    assumptionsAndLimitations: [
      "En mode pondéré, la somme des coefficients doit être strictement positive.",
    ],
    faqs: [
      {
        question: "Les coefficients doivent-ils totaliser 100 ?",
        answer:
          "Non, tout nombre positif fonctionne car la formule divise par la somme réelle des coefficients.",
      },
      {
        question: "Quand utiliser la moyenne pondérée ?",
        answer:
          "Lorsque certaines valeurs pèsent plus lourd que d'autres (crédits universitaires, portefeuille, sondages).",
      },
    ],
  },
  "age-calculator": {
    intro:
      "Calculez votre âge chronologique exact en années, mois et jours à partir de votre date de naissance, avec gestion précise des mois et années bissextiles.",
    resultExplanation:
      "Affiche les années révolues, les mois et jours restants, le nombre total de jours vécus et le décompte avant le prochain anniversaire.",
    formulaTitle: "Règle d'Âge Calendaire",
    formulas: [
      "Années = Année Cible − Année Naissance (ajusté si l'anniversaire n'est pas passé)",
      "Total Jours Vécus = (Date Cible UTC − Naissance UTC) / 86 400 000 ms",
    ],
    stepByStep: [
      "Soustrayez année, mois et jour de naissance de la date cible.",
      "Empruntez le nombre exact de jours du mois précédent si la différence de jours est négative.",
    ],
    workedExample: {
      title: "Naissance un 29 Février",
      scenario: "Personne née le 29 février 2000 au 24 novembre 2026.",
      calculationSteps: [
        "26 ans révolus, 8 mois (février à octobre) et 26 jours.",
      ],
      outcome: "Âge exact : 26 ans, 8 mois et 26 jours.",
    },
    howToUse: [
      "Choisissez votre date de naissance et conservez aujourd'hui ou sélectionnez une date cible.",
    ],
    assumptionsAndLimitations: [
      "Suit le calendrier grégorien en temps UTC pour éviter tout décalage horaire.",
    ],
    faqs: [
      {
        question: "Les années bissextiles sont-elles incluses ?",
        answer:
          "Oui, chaque 29 février entre les deux dates est pris en compte.",
      },
      {
        question: "Pourquoi les mois diffèrent-ils d'une division par 30 ?",
        answer:
          "Parce que les mois civils comptent entre 28 et 31 jours réels.",
      },
    ],
  },
  "date-calculator": {
    intro:
      "Ajoutez ou soustrayez jours, semaines, mois et années à toute date pour planifier préavis, visas, échéances ou garanties.",
    resultExplanation:
      "Indique la date obtenue en texte lisible, au format ISO (AAAA-MM-JJ) et le jour de la semaine.",
    formulaTitle: "Ordre d'Ajustement Calendaire",
    formulas: [
      "Étape 1 : Années et mois ajoutés/retirés avec ajustement en fin de mois",
      "Étape 2 : Semaines × 7 + Jours ajoutés/retirés",
    ],
    stepByStep: [
      "Sélectionnez la date de départ.",
      "Ajoutez ou soustrayez années et mois, puis semaines et jours.",
    ],
    workedExample: {
      title: "Fin de Mois + 1 Mois et 10 Jours",
      scenario: "31 janvier 2024 + 1 mois et 10 jours.",
      calculationSteps: [
        "31 janvier + 1 mois = 29 février 2024 (bissextile).",
        "29 février + 10 jours = 10 mars 2024.",
      ],
      outcome: "La date obtenue est le dimanche 10 mars 2024.",
    },
    howToUse: [
      "Choisissez la date initiale, Addition (+) ou Soustraction (−) et les durées souhaitées.",
    ],
    assumptionsAndLimitations: [
      "Les calculs s'effectuent à minuit UTC sans perturbation liée à l'heure d'été.",
    ],
    faqs: [
      {
        question: "Que donne 31 janvier + 1 mois ?",
        answer:
          "Le résultat s'ajuste au dernier jour valide de février (28 ou 29).",
      },
      {
        question: "Les années bissextiles sont-elles gérées ?",
        answer:
          "Oui, automatiquement selon les règles grégoriennes.",
      },
    ],
  },
  "days-between-dates-calculator": {
    intro:
      "Comptez le nombre exact de jours et de semaines entre deux dates pour vos locations, congés, voyages ou contrats.",
    resultExplanation:
      "Affiche le total de jours, la décomposition en semaines et jours, et permet d'inclure la date de fin (+1 jour).",
    formulaTitle: "Formule d'Écart en Jours",
    formulas: [
      "Jours = |Date Fin (UTC) − Date Début (UTC)| / 86 400 000",
      "Jours Inclusifs = Jours + 1",
    ],
    stepByStep: [
      "Normalisez les deux dates à minuit UTC.",
      "Divisez la différence absolue par 86 400 000 ms et ajoutez 1 si le jour de fin est inclus.",
    ],
    workedExample: {
      title: "Congés Inclusifs",
      scenario: "Du lundi 2 mars au vendredi 6 mars 2026 inclus.",
      calculationSteps: [
        "Différence simple = 4 jours ; avec fin incluse (+1) = 5 jours.",
      ],
      outcome: "Durée totale inclusive : 5 jours.",
    },
    howToUse: [
      "Choisissez Date de début et Date de fin, puis cochez si le dernier jour compte.",
    ],
    assumptionsAndLimitations: [
      "Compte tous les jours civils, week-ends et jours fériés compris.",
    ],
    faqs: [
      {
        question: "Quand cocher « Inclure la date de fin » ?",
        answer:
          "Pour les congés ou événements couvrant du premier au dernier jour inclus. Laissez décoché pour des nuitées d'hôtel.",
      },
      {
        question: "Le changement d'heure modifie-t-il le décompte ?",
        answer:
          "Non, grâce au calcul en UTC.",
      },
    ],
  },
  "discount-calculator": {
    intro:
      "Vérifiez instantanément le prix soldé et l'économie réalisée en USD ($) ou INR (₹) à partir du prix d'origine et du taux de remise.",
    resultExplanation:
      "Affiche le prix final remisé et le montant exact économisé.",
    formulaTitle: "Formules de Remise",
    formulas: [
      "Montant de Remise = Prix Initial × (Remise % / 100)",
      "Prix Final = Prix Initial − Montant de Remise",
    ],
    stepByStep: [
      "Multipliez le prix d'origine par le taux divisé par 100.",
      "Soustrayez cette remise du prix initial.",
    ],
    workedExample: {
      title: "Réduction de 25%",
      scenario: "Article à 150 $ (12 000 ₹) avec 25 % de remise.",
      calculationSteps: [
        "Remise : 150 × 0,25 = 37,50 $ (3 000 ₹).",
        "Prix final : 150 − 37,50 = 112,50 $ (9 000 ₹).",
      ],
      outcome: "Vous payez 112,50 $ et économisez 37,50 $.",
    },
    howToUse: [
      "Choisissez USD ou INR, saisissez prix initial et taux de remise (0–100 %).",
    ],
    assumptionsAndLimitations: [
      "Prix hors taxes locales ajoutées en caisse.",
    ],
    faqs: [
      {
        question: "Comment calculer 20 % puis 10 % supplémentaires ?",
        answer:
          "Appliquez 20 %, puis saisissez le prix obtenu pour appliquer 10 %. Le total réel est de 28 %, non 30 %.",
      },
      {
        question: "Le changement de devise convertit-il les taux de change ?",
        answer:
          "Non, il change uniquement le symbole et la mise en forme.",
      },
    ],
  },
  "profit-loss-calculator": {
    intro:
      "Analysez vos tarifs commerciaux en USD ou INR : calculez profit ou perte, majoration sur prix d'achat (markup) et marge commerciale.",
    resultExplanation:
      "Distingue clairement le Markup (profit / prix d'achat) de la Marge brute (profit / prix de vente).",
    formulaTitle: "Formules Profit, Marge et Markup",
    formulas: [
      "Profit / Perte = Prix de Vente − Prix d'Achat",
      "Markup (%) = ((Vente − Achat) / Achat) × 100",
      "Marge Brute (%) = ((Vente − Achat) / Vente) × 100",
    ],
    stepByStep: [
      "Soustrayez le prix d'achat du prix de vente.",
      "Divisez par le prix d'achat pour le markup, ou par le prix de vente pour la marge.",
    ],
    workedExample: {
      title: "Marge vs Markup",
      scenario: "Achat 80 $ (800 ₹), vente 100 $ (1 000 ₹).",
      calculationSteps: [
        "Profit = 20 $ · Markup = 25 % · Marge = 20 %.",
      ],
      outcome: "Bénéfice de 20 $, soit 25 % de markup et 20 % de marge.",
    },
    howToUse: [
      "Sélectionnez USD ou INR et saisissez prix d'achat (> 0) et prix de vente.",
    ],
    assumptionsAndLimitations: [
      "Intégrez frais de port et commissions dans le prix d'achat pour calculer une marge nette.",
    ],
    faqs: [
      {
        question: "Pourquoi la marge est-elle inférieure au markup ?",
        answer:
          "Parce qu'en cas de profit le prix de vente est plus élevé que le prix d'achat.",
      },
      {
        question: "Que se passe-t-il à prix coûtant ?",
        answer:
          "L'outil affiche Seuil de rentabilité (0 $, 0 %).",
      },
    ],
  },
  "ratio-calculator": {
    intro:
      "Simplifiez des ratios à plusieurs termes, comparez deux rapports ou résolvez une règle de trois A : B = C : X.",
    resultExplanation:
      "Utilise le PGCD pour simplifier et le produit en croix pour trouver la valeur manquante.",
    formulaTitle: "Formules de Ratio",
    formulas: [
      "Ratio Simplifié = (A / PGCD) : (B / PGCD) : (C / PGCD)",
      "A : B = C : X  ⇒  X = (B × C) / A",
    ],
    stepByStep: [
      "Calculez le PGCD des termes et divisez chacun par ce PGCD.",
      "Pour résoudre X, multipliez B par C et divisez par A.",
    ],
    workedExample: {
      title: "Simplifier 12 : 18 : 30",
      scenario: "Réduire 12 : 18 : 30.",
      calculationSteps: [
        "PGCD(12, 18, 30) = 6 → 2 : 3 : 5.",
      ],
      outcome: "Ratio simplifié : 2 : 3 : 5.",
    },
    howToUse: [
      "Choisissez Simplifier, Résoudre ou Comparer et saisissez vos nombres positifs.",
    ],
    assumptionsAndLimitations: [
      "Requiert des valeurs strictement positives.",
    ],
    faqs: [
      {
        question: "Puis-je simplifier un ratio de 3 ou 4 nombres ?",
        answer:
          "Oui, via le bouton d'ajout de terme en mode Simplifier.",
      },
      {
        question: "Comment vérifier l'équivalence 16:9 et 1920:1080 ?",
        answer:
          "Utilisez Comparer ; les deux rapports valent 1,777778.",
      },
    ],
  },
  "fraction-calculator": {
    intro:
      "Additionnez, soustrayez, multipliez ou divisez deux fractions avec réduction automatique, écriture mixte et décimale.",
    resultExplanation:
      "Affiche la fraction irréductible, l'entier + fraction (nombre mixte) et la valeur décimale.",
    formulaTitle: "Opérations sur Fractions",
    formulas: [
      "(a/b) + (c/d) = (ad + bc) / (bd)  |  (a/b) × (c/d) = ac / bd",
      "(a/b) − (c/d) = (ad − bc) / (bd)  |  (a/b) ÷ (c/d) = ad / bc",
    ],
    stepByStep: [
      "Appliquez la règle de l'opérateur sélectionné.",
      "Réduisez numérateur et dénominateur par leur PGCD.",
    ],
    workedExample: {
      title: "3/4 + 5/6",
      scenario: "Additionner 3/4 et 5/6.",
      calculationSteps: [
        "(18 + 20) / 24 = 38/24 → 19/12 = 1 7/12.",
      ],
      outcome: "Résultat : 19/12 (ou 1 7/12).",
    },
    howToUse: [
      "Saisissez numérateurs entiers et dénominateurs non nuls, puis choisissez l'opération.",
    ],
    assumptionsAndLimitations: [
      "Un dénominateur nul est bloqué automatiquement.",
    ],
    faqs: [
      {
        question: "Pourquoi afficher 19/12 et 1 7/12 ?",
        answer:
          "19/12 sert en algèbre, tandis que 1 7/12 facilite les mesures pratiques.",
      },
      {
        question: "Les fractions négatives sont-elles acceptées ?",
        answer:
          "Oui, saisissez un signe moins au numérateur.",
      },
    ],
  },
  "time-calculator": {
    intro:
      "Additionnez ou soustrayez heures et minutes en base 60 pour vos feuilles d'heures, études ou trajets.",
    resultExplanation:
      "Convertit en minutes totales puis reconvertit proprement en heures, minutes et jours.",
    formulaTitle: "Calcul Horaire Base 60",
    formulas: [
      "Minutes Totales = (H₁ × 60 + M₁) ± (H₂ × 60 + M₂)",
    ],
    stepByStep: [
      "Convertissez chaque durée en minutes (heures × 60 + minutes).",
      "Additionnez ou soustrayez puis redivisez par 60.",
    ],
    workedExample: {
      title: "Addition de Deux Durées",
      scenario: "4 h 45 min + 3 h 35 min.",
      calculationSteps: [
        "285 + 215 = 500 minutes = 8 h 20 min.",
      ],
      outcome: "Total : 8h 20m (500 minutes).",
    },
    howToUse: [
      "Indiquez heures et minutes pour Durée A et B et choisissez + ou −.",
    ],
    assumptionsAndLimitations: [
      "Les minutes ≥ 60 sont converties automatiquement en heures.",
    ],
    faqs: [
      {
        question: "Que se passe-t-il si je saisis 90 minutes ?",
        answer:
          "0h 90m est converti exactement en 1h 30m.",
      },
      {
        question: "Comment obtenir les heures décimales ?",
        answer:
          "Divisez le total des minutes par 60.",
      },
    ],
  },
  "time-duration-calculator": {
    intro:
      "Calculez les heures, minutes et heures décimales entre une heure de début et une heure de fin, y compris de nuit après minuit.",
    resultExplanation:
      "Si l'heure de fin précède l'heure de début avec le mode nuit activé, 24 heures (1 440 minutes) sont ajoutées automatiquement.",
    formulaTitle: "Durée entre Deux Horaires",
    formulas: [
      "Durée = Fin − Début (+ 1 440 min si passage de minuit)",
    ],
    stepByStep: [
      "Convertissez début et fin en minutes depuis minuit.",
      "Soustrayez et divisez par 60 pour obtenir les heures décimales.",
    ],
    workedExample: {
      title: "Quart de Nuit",
      scenario: "De 22h15 à 06h45.",
      calculationSteps: [
        "405 − 1 335 + 1 440 = 510 min = 8h 30m (8,5 heures).",
      ],
      outcome: "Durée totale : 8h 30m (8,50 h).",
    },
    howToUse: [
      "Choisissez heure de début et heure de fin.",
    ],
    assumptionsAndLimitations: [
      "Mesure des plages jusqu'à 24 heures ; au-delà, utilisez Jours entre Deux Dates.",
    ],
    faqs: [
      {
        question: "À quoi servent les heures décimales ?",
        answer:
          "Elles permettent de multiplier directement un tarif horaire (8h 30m = 8,5 h).",
      },
      {
        question: "Que donne début = fin ?",
        answer:
          "0h 0m (0 minute).",
      },
    ],
  },
  "unit-converter": {
    intro:
      "Convertissez Longueur, Poids, Température, Volume, Vitesse et Surface entre unités métriques et impériales selon les constantes exactes.",
    resultExplanation:
      "Utilise les définitions officielles NIST/SI (1 pouce = 2,54 cm, 1 livre = 0,45359237 kg) avec bouton d'inversion rapide.",
    formulaTitle: "Constantes de Conversion",
    formulas: [
      "1 pouce = 2,54 cm  |  1 livre = 0,45359237 kg  |  °F = (°C × 9/5) + 32",
    ],
    stepByStep: [
      "Choisissez la grandeur, l'unité source et l'unité cible.",
    ],
    workedExample: {
      title: "Kilogrammes en Livres",
      scenario: "72 kg en livres et 100 °F en Celsius.",
      calculationSteps: [
        "72 ÷ 0,45359237 = 158,73 lb ; (100 − 32) × 5/9 = 37,78 °C.",
      ],
      outcome: "72 kg ≈ 158,73 lb et 100 °F = 37,78 °C.",
    },
    howToUse: [
      "Sélectionnez la catégorie, saisissez la valeur et cliquez sur Inverser si besoin.",
    ],
    assumptionsAndLimitations: [
      "Les volumes utilisent le gallon américain (3,7854 L).",
    ],
    faqs: [
      {
        question: "Les facteurs sont-ils exacts ?",
        answer:
          "Oui, conformes aux standards internationaux NIST/SI.",
      },
      {
        question: "Quelle différence avec le gallon impérial UK ?",
        answer:
          "Le gallon US vaut 3,785 L contre 4,546 L pour l'ancien gallon britannique.",
      },
    ],
  },
  "bmi-calculator": {
    intro:
      "L'Indice de Masse Corporelle (IMC) évalue le poids par rapport à la taille au carré comme indicateur de dépistage adulte en unités métriques ou impériales.",
    resultExplanation:
      "Affiche votre IMC, la catégorie OMS/CDC adulte et la plage de poids correspondante (IMC 18,5–24,9).",
    formulaTitle: "Formule de l'IMC",
    formulas: [
      "Métrique : IMC = Poids (kg) / [Taille (m)]²",
      "Impérial : IMC = 703 × Poids (lb) / [Taille (in)]²",
    ],
    stepByStep: [
      "Convertissez la taille en mètres ou pouces totaux.",
      "Divisez le poids par la taille au carré.",
    ],
    workedExample: {
      title: "Exemple Adulte",
      scenario: "172 cm pour 70 kg.",
      calculationSteps: [
        "70 ÷ (1,72 × 1,72) = 23,7 (Poids normal).",
      ],
      outcome: "IMC estimé : 23,7 kg/m².",
    },
    howToUse: [
      "Choisissez Métrique ou Impérial et saisissez taille et poids.",
    ],
    assumptionsAndLimitations: [
      "Valable pour les adultes de 20 ans et plus ; ne distingue pas muscle et graisse.",
    ],
    medicalDisclaimer:
      "L'IMC est un indicateur général et ne constitue pas un diagnostic médical. Consultez un médecin.",
    faqs: [
      {
        question: "Est-ce adapté aux enfants ?",
        answer:
          "Non, les moins de 20 ans utilisent des courbes pédiatriques selon l'âge et le sexe.",
      },
      {
        question: "L'IMC sépare-t-il muscle et graisse ?",
        answer:
          "Non ; associez-le au tour de taille ou à la masse grasse pour plus de précision.",
      },
    ],
  },
  "bmr-calculator": {
    intro:
      "Le métabolisme de base (BMR) estime l'énergie minimale dépensée chaque jour au repos complet selon la formule Mifflin-St Jeor.",
    resultExplanation:
      "Exprimé en kcal/jour ; combinez-le avec votre niveau d'activité dans le calculateur TDEE.",
    formulaTitle: "Équation Mifflin-St Jeor",
    formulas: [
      "Homme : (10 × kg) + (6,25 × cm) − (5 × âge) + 5",
      "Femme : (10 × kg) + (6,25 × cm) − (5 × âge) − 161",
    ],
    stepByStep: [
      "Convertissez taille en cm et poids en kg, puis appliquez la constante selon le sexe.",
    ],
    workedExample: {
      title: "Calcul Femme de 30 Ans",
      scenario: "30 ans, 165 cm, 62 kg.",
      calculationSteps: [
        "620 + 1 031,25 − 150 − 161 = 1 340,25 kcal/jour.",
      ],
      outcome: "Métabolisme basal estimé : ~1 340 kcal/jour.",
    },
    howToUse: [
      "Choisissez unités, sexe, âge, taille et poids.",
    ],
    assumptionsAndLimitations: [
      "Marge statistique de ±10 % par rapport aux mesures en laboratoire.",
    ],
    medicalDisclaimer:
      "Estimation informative ; ne descendez pas votre apport sous votre BMR sans suivi médical.",
    faqs: [
      {
        question: "Pourquoi Mifflin-St Jeor ?",
        answer:
          "Elle s'avère plus fiable sur les populations actuelles que Harris-Benedict.",
      },
      {
        question: "Faut-il manger exactement son BMR pour maigrir ?",
        answer:
          "Non, utilisez d'abord le TDEE qui intègre vos mouvements quotidiens.",
      },
    ],
  },
  "tdee-calculator": {
    intro:
      "Estimez votre Dépense Énergétique Journalière Totale (TDEE) et vos calories de maintien selon votre BMR et votre activité physique.",
    resultExplanation:
      "Multiplie votre BMR par votre coefficient d'activité hebdomadaire.",
    formulaTitle: "Formule TDEE",
    formulas: [
      "TDEE = BMR × Facteur (1,2 · 1,375 · 1,55 · 1,725 · 1,9)",
    ],
    stepByStep: [
      "Calculez le BMR puis multipliez par votre niveau moyen d'activité.",
    ],
    workedExample: {
      title: "Adulte Modérément Actif",
      scenario: "Homme 32 ans, 178 cm, 78 kg, facteur 1,55.",
      calculationSteps: [
        "1 738 × 1,55 = 2 693 kcal/jour.",
      ],
      outcome: "Maintien estimé : ~2 693 kcal/jour.",
    },
    howToUse: [
      "Saisissez vos mesures et choisissez votre niveau d'activité réaliste.",
    ],
    assumptionsAndLimitations: [
      "Les emplois de bureau surestiment souvent l'activité ; ajustez selon le poids sur 2–4 semaines.",
    ],
    medicalDisclaimer:
      "Estimation éducative ne remplaçant pas un avis diététique ou médical.",
    faqs: [
      {
        question: "Différence entre BMR et TDEE ?",
        answer:
          "Le BMR mesure le repos strict ; le TDEE ajoute marche, travail et sport.",
      },
      {
        question: "Quel niveau pour 3 séances de sport/semaine ?",
        answer:
          "Souvent Légèrement actif (1,375) ou Modérément actif (1,55) pour un travail sédentaire.",
      },
    ],
  },
  "calorie-calculator": {
    intro:
      "Estimez vos besoins quotidiens en calories pour maintenir, perdre ou prendre du poids progressivement avec seuils de sécurité.",
    resultExplanation:
      "Applique un ajustement modéré (+/− 250 ou 500 kcal) tout en respectant les planchers de 1 200 kcal (femme) et 1 500 kcal (homme).",
    formulaTitle: "Calcul Calorique par Objectif",
    formulas: [
      "Cible = TDEE ± 250 ou ± 500 kcal/jour (planchers 1 200 / 1 500 kcal)",
    ],
    stepByStep: [
      "Déterminez le TDEE de maintien puis appliquez l'ajustement choisi.",
    ],
    workedExample: {
      title: "Déficit Modéré",
      scenario: "TDEE de 2 200 kcal avec objectif −500 kcal/jour.",
      calculationSteps: [
        "2 200 − 500 = 1 700 kcal/jour.",
      ],
      outcome: "Cible journalière estimée : 1 700 kcal/jour.",
    },
    howToUse: [
      "Entrez vos mesures, activité et objectif pondéral.",
    ],
    assumptionsAndLimitations: [
      "Les régimes très restrictifs nécessitent un suivi médical.",
    ],
    medicalDisclaimer:
      "Outil informatif uniquement ; consultez un médecin ou diététicien.",
    faqs: [
      {
        question: "Pourquoi un seuil minimal à 1 200 / 1 500 kcal ?",
        answer:
          "En dessous, il devient difficile de couvrir vitamines, minéraux et protéines sans encadrement médical.",
      },
      {
        question: "Quelle marge d'erreur ?",
        answer:
          "Environ ±10–15 % comme point de départ à affiner selon votre suivi.",
      },
    ],
  },
  "ideal-weight-calculator": {
    intro:
      "Comparez quatre formules historiques de poids théorique (Devine, Robinson, Miller, Hamwi) et la plage IMC saine en kg et livres.",
    resultExplanation:
      "Présente les quatre estimations côte à côte avec la fourchette IMC 18,5–24,9.",
    formulaTitle: "Formules de Référence",
    formulas: [
      "Devine : H 50 + 2,3 kg/pouce (> 5 pi) | F 45,5 + 2,3 kg/pouce",
      "Robinson, Miller & Hamwi : variantes pondérées au-dessus de 60 pouces",
    ],
    stepByStep: [
      "Convertissez la taille en pouces au-dessus de 5 pieds (60 po) et appliquez chaque équation.",
    ],
    workedExample: {
      title: "Taille de 177,8 cm (5 pi 10 po)",
      scenario: "Homme adulte de 70 pouces.",
      calculationSteps: [
        "Devine 73,0 kg · Robinson 71,0 kg · Miller 70,3 kg · Plage IMC 58,5–78,7 kg.",
      ],
      outcome: "Estimations autour de 70–75 kg dans la plage saine 58,5–78,7 kg.",
    },
    howToUse: [
      "Sélectionnez unités, sexe et taille.",
    ],
    assumptionsAndLimitations: [
      "Formules conçues à l'origine pour le dosage médicamenteux ; ne tiennent pas compte de la musculature.",
    ],
    medicalDisclaimer:
      "Références statistiques non prescriptives ; consultez un professionnel de santé.",
    faqs: [
      {
        question: "Pourquoi quatre résultats différents ?",
        answer:
          "Chaque formule provient d'une cohorte statistique différente entre 1964 et 1983.",
      },
      {
        question: "La formule de Devine est-elle un diagnostic ?",
        answer:
          "Non, c'est une référence pharmacologique historique.",
      },
    ],
  },
  "body-fat-calculator": {
    intro:
      "Estimez votre pourcentage de masse grasse par la méthode des circonférences US Navy (cou, taille, hanches et stature).",
    resultExplanation:
      "Indique le taux estimé ainsi que la masse grasse et masse maigre si vous saisissez votre poids.",
    formulaTitle: "Équation Logarithmique US Navy",
    formulas: [
      "Hommes : %MG = 495 / (1,0324 − 0,19077 × log₁₀(taille − cou) + 0,15456 × log₁₀(stature)) − 450",
    ],
    stepByStep: [
      "Mesurez au ruban taille, cou, hanches et stature puis appliquez la formule logarithmique.",
    ],
    workedExample: {
      title: "Estimation Homme",
      scenario: "178 cm, cou 38 cm, taille 86 cm, poids 76 kg.",
      calculationSteps: [
        "86 − 38 = 48 cm → ≈ 17,1 % de masse grasse.",
      ],
      outcome: "17,1 % (~13,0 kg gras / 63,0 kg maigre).",
    },
    howToUse: [
      "Choisissez cm/kg ou po/lb et entrez vos mensurations.",
    ],
    assumptionsAndLimitations: [
      "Marge d'erreur d'environ ±3 à 5 % comparée à un examen DEXA.",
    ],
    medicalDisclaimer:
      "Estimation fitness uniquement, non assimilable à un examen clinique.",
    faqs: [
      {
        question: "Où mesurer le tour de taille ?",
        answer:
          "Au nombril pour les hommes et au creux naturel le plus fin pour les femmes.",
      },
      {
        question: "Pourquoi compléter l'IMC ?",
        answer:
          "Permet de suivre la réduction abdominale même lorsque le poids total reste stable.",
      },
    ],
  },
  "protein-calculator": {
    intro:
      "Estimez votre besoin quotidien en protéines (en grammes) selon votre poids corporel et votre niveau sportif.",
    resultExplanation:
      "Fournit une fourchette pratique min–max et sa valeur médiane.",
    formulaTitle: "Repères Protéiques",
    formulas: [
      "Général : 0,8–1,0 g/kg · Actif : 1,2–1,5 g/kg · Force : 1,6–2,0 g/kg",
    ],
    stepByStep: [
      "Multipliez le poids en kg par les bornes inférieure et supérieure de votre profil.",
    ],
    workedExample: {
      title: "Adulte Actif de 70 kg",
      scenario: "Profil Actif (1,2–1,5 g/kg).",
      calculationSteps: [
        "70 × 1,2 = 84 g ; 70 × 1,5 = 105 g/jour.",
      ],
      outcome: "Fourchette estimée : 84–105 g/jour (moyenne 95 g).",
    },
    howToUse: [
      "Entrez votre poids (kg ou lb) et sélectionnez votre objectif.",
    ],
    assumptionsAndLimitations: [
      "En cas d'insuffisance rénale ou hépatique, suivez strictement l'avis médical.",
    ],
    medicalDisclaimer:
      "Repère nutritionnel général, non destiné à un suivi médical spécialisé.",
    faqs: [
      {
        question: "Quel est l'apport de référence minimal (AJR) ?",
        answer:
          "0,8 g par kg de poids corporel par jour pour un adulte sédentaire.",
      },
      {
        question: "Est-ce valable pour une alimentation végétale ?",
        answer:
          "Oui, en variant légumineuses, soja, céréales et oléagineux.",
      },
    ],
  },
  "water-intake-calculator": {
    intro:
      "Estimez votre besoin quotidien en eau (litres, mL, onces, verres) selon votre poids, votre activité physique et le climat.",
    resultExplanation:
      "Convertit automatiquement l'apport hydrique total dans les formats de gourdes et verres les plus courants.",
    formulaTitle: "Formule d'Hydratation",
    formulas: [
      "Base (mL) = Poids (kg) × 33 mL  +  (Minutes sport / 30) × 350 mL  +  300 mL (climat chaud)",
    ],
    stepByStep: [
      "Multipliez le poids en kg par 33 mL puis ajoutez les suppléments sport et climat chaud.",
    ],
    workedExample: {
      title: "Climat Chaud",
      scenario: "68 kg, 45 min de sport, climat chaud.",
      calculationSteps: [
        "2 244 + 525 + 300 = 3 069 mL ≈ 3,07 L.",
      ],
      outcome: "Besoin estimé : ~3,07 litres (104 fl oz) par jour.",
    },
    howToUse: [
      "Indiquez poids, durée d'exercice et climat.",
    ],
    assumptionsAndLimitations: [
      "Environ 20 % des apports hydriques proviennent aussi des aliments riches en eau.",
    ],
    medicalDisclaimer:
      "Ne remplace pas les limites hydriques prescrites en cas de pathologie cardiaque ou rénale.",
    faqs: [
      {
        question: "Le thé ou le café comptent-ils ?",
        answer:
          "Oui, ils contribuent à l'hydratation quotidienne, l'eau pure restant la base idéale.",
      },
      {
        question: "Peut-on boire trop d'eau ?",
        answer:
          "Oui, un excès rapide sans électrolytes peut diluer le sodium sanguin.",
      },
    ],
  },
  "pregnancy-weeks-to-months": {
    intro:
      "Convertissez semaines et jours de grossesse en mois approximatif et trimestre, tout en comprenant pourquoi le suivi médical utilise les semaines.",
    resultExplanation:
      "Un mois civil moyen compte ~4,33 semaines (30,44 jours) : 40 semaines correspondent donc à environ 9 mois et 1 semaine.",
    formulaTitle: "Correspondance 40 Semaines / 9 Mois",
    formulas: [
      "Mois ≈ min(9, ceil((Semaines + Jours/7) / 4,33))",
    ],
    stepByStep: [
      "Divisez le nombre décimal de semaines par 4,33 et déterminez le trimestre.",
    ],
    workedExample: {
      title: "24 Semaines et 3 Jours",
      scenario: "Grossesse à 24 semaines + 3 jours.",
      calculationSteps: [
        "24,43 ÷ 4,33 ≈ 5,64 → 6ᵉ mois (2ᵉ trimestre).",
      ],
      outcome: "Environ 6ᵉ mois, 2ᵉ trimestre.",
    },
    howToUse: [
      "Entrez semaines (0–42) et jours (0–6).",
    ],
    assumptionsAndLimitations: [
      "Les professionnels utilisent uniquement les semaines exactes pour planifier les examens.",
    ],
    medicalDisclaimer:
      "Référence informative ; fiez-vous toujours à l'âge gestationnel fixé par votre médecin ou sage-femme.",
    faqs: [
      {
        question: "Pourquoi 40 semaines font-elles 9 mois et non 10 ?",
        answer:
          "Parce que la plupart des mois comptent 30 ou 31 jours (~4,33 semaines) et non 28.",
      },
      {
        question: "Quand débute le 2ᵉ trimestre ?",
        answer:
          "À 14 semaines et 0 jour selon les repères obstétricaux standard.",
      },
    ],
  },
  "pregnancy-due-date-calculator": {
    intro:
      "Estimez votre date prévue d'accouchement (DPA), semaine actuelle et trimestre à partir de vos dernières règles et de la durée de votre cycle.",
    resultExplanation:
      "Applique la règle standard de 280 jours (40 semaines) ajustée selon l'écart de votre cycle par rapport à 28 jours.",
    formulaTitle: "Estimation à 280 Jours",
    formulas: [
      "DPA = Dernières Règles + 280 jours + (Durée Cycle − 28 jours)",
    ],
    stepByStep: [
      "Partez du premier jour des dernières règles, ajoutez 280 jours puis l'ajustement du cycle.",
    ],
    workedExample: {
      title: "Cycle Standard de 28 Jours",
      scenario: "Dernières règles le 1ᵉʳ juin 2026.",
      calculationSteps: [
        "1ᵉʳ juin 2026 + 280 jours = 8 mars 2027.",
      ],
      outcome: "Date prévue d'accouchement estimée : 8 mars 2027.",
    },
    howToUse: [
      "Sélectionnez la date des dernières règles et ajustez la durée du cycle (21–35 jours).",
    ],
    assumptionsAndLimitations: [
      "La plupart des accouchements à terme ont lieu entre 37 et 42 semaines ; l'échographie du 1ᵉʳ trimestre reste la référence.",
    ],
    medicalDisclaimer:
      "Date purement estimative ne remplaçant ni le suivi prénatal ni l'échographie.",
    faqs: [
      {
        question: "Quelle fiabilité par rapport à l'échographie ?",
        answer:
          "L'échographie précoce est plus précise lorsque l'ovulation ou les cycles varient.",
      },
      {
        question: "Pourquoi partir des dernières règles ?",
        answer:
          "Parce que la date exacte de fécondation est rarement connue.",
      },
    ],
  },
  "pregnancy-calculator": {
    intro:
      "Suivez votre avancement de grossesse en semaines, jours et pourcentage à partir de la date de vos dernières règles ou de votre DPA confirmée.",
    resultExplanation:
      "Calcule le temps écoulé sur une durée de référence de 280 jours et indique trimestre et jours restants.",
    formulaTitle: "Double Méthode Gestationnelle",
    formulas: [
      "Depuis Règles : Écoulé = Aujourd'hui − Règles  |  Depuis DPA : Règles ≈ DPA − 280 j",
    ],
    stepByStep: [
      "Choisissez la méthode de départ et la date de référence.",
    ],
    workedExample: {
      title: "Depuis une DPA Confirmée",
      scenario: "DPA le 15 mars 2027 au 24 novembre 2026.",
      calculationSteps: [
        "169 jours écoulés = 24 semaines et 1 jour (60,4 %, 2ᵉ trimestre).",
      ],
      outcome: "Âge gestationnel estimé : 24 semaines et 1 jour.",
    },
    howToUse: [
      "Sélectionnez Dernières Règles ou Date Prévue d'Accouchement.",
    ],
    assumptionsAndLimitations: [
      "Estimations mathématiques à confirmer par votre obstétricien.",
    ],
    medicalDisclaimer:
      "Outil strictement informatif ; suivez l'avis de votre médecin ou sage-femme.",
    faqs: [
      {
        question: "Vaut-il mieux saisir les règles ou la DPA ?",
        answer:
          "Si votre médecin a confirmé une DPA par échographie, utilisez la DPA.",
      },
      {
        question: "Que signifie 100 % d'avancement ?",
        answer:
          "Atteindre 40 semaines (280 jours).",
      },
    ],
  },
  "ovulation-calculator": {
    intro:
      "Estimez vos prochaines règles, votre jour probable d'ovulation et votre fenêtre fertile selon votre dernier cycle.",
    resultExplanation:
      "Retranche 14 jours aux prochaines règles estimées pour situer l'ovulation et affiche les 6 jours fertiles associés.",
    formulaTitle: "Calcul Calendaire Lutéal",
    formulas: [
      "Prochaines Règles = Début Cycle + Durée Cycle  |  Ovulation = Prochaines Règles − 14 j",
    ],
    stepByStep: [
      "Ajoutez la durée du cycle pour projeter les prochaines règles, puis soustrayez 14 jours.",
    ],
    workedExample: {
      title: "Cycle de 30 Jours",
      scenario: "Dernières règles le 1ᵉʳ novembre 2026.",
      calculationSteps: [
        "Prochaines règles : 1ᵉʳ déc. · Ovulation : 17 nov. · Fenêtre fertile : 12–17 nov.",
      ],
      outcome: "Ovulation estimée autour du 17 novembre.",
    },
    howToUse: [
      "Choisissez la date des dernières règles et la durée habituelle du cycle (21–45 jours).",
    ],
    assumptionsAndLimitations: [
      "NE SERT PAS DE CONTRACEPTION : l'ovulation varie facilement ; n'utilisez jamais cet outil pour éviter une grossesse.",
    ],
    medicalDisclaimer:
      "Estimation calendaire uniquement ; NE DOIT JAMAIS servir de méthode contraceptive.",
    faqs: [
      {
        question: "Peut-on l'utiliser comme contraception ?",
        answer:
          "Non. Le calendrier ne protège pas contre les ovulations précoces ou tardives.",
      },
      {
        question: "Et si mes cycles sont irréguliers ?",
        answer:
          "Utilisez des tests LH ou consultez un professionnel de santé.",
      },
    ],
  },
};
