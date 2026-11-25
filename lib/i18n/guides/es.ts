import { LocalizedGuideBody } from "./hi";

export const ES_GUIDES: Record<string, LocalizedGuideBody> = {
  "percentage-calculator": {
    intro:
      "Los porcentajes expresan una fracción sobre 100 y se utilizan a diario en impuestos, descuentos, notas académicas e incrementos salariales. Esta calculadora resuelve seis operaciones porcentuales esenciales en un solo panel.",
    resultExplanation:
      "Según el modo elegido, el resultado principal muestra el valor resultante, la proporción porcentual o la variación porcentual con signo, junto con el monto exacto sumado o restado.",
    formulaTitle: "Fórmulas Principales de Porcentaje",
    formulas: [
      "X% de Y = (X / 100) × Y",
      "Qué % es X de Y = (X / Y) × 100",
      "Aumento Porcentual = Valor Original + (Original × Tasa / 100)",
      "Reducción Porcentual = Valor Original − (Original × Tasa / 100)",
      "Cambio Porcentual = ((Nuevo − Inicial) / |Inicial|) × 100",
      "Diferencia Porcentual = (|A − B| / ((|A| + |B|) / 2)) × 100",
    ],
    stepByStep: [
      "Identifica si buscas una parte de un total, una comparación simétrica entre dos cifras o una variación direccional desde un valor inicial.",
      "Divide el porcentaje entre 100 para expresarlo como decimal.",
      "Aplica la fórmula y redondea únicamente el resultado final para evitar pérdida de precisión.",
    ],
    workedExample: {
      title: "Aumento de Precio o Impuesto del 18%",
      scenario: "Un artículo de $30 (o ₹2,500) sube un 18%.",
      calculationSteps: [
        "Convierte 18% a decimal: 18 / 100 = 0.18.",
        "Calcula el incremento: 30 × 0.18 = 5.40 (o 2,500 × 0.18 = 450).",
        "Suma al precio base: 30 + 5.40 = $35.40 (o ₹2,950).",
      ],
      outcome: "El precio final tras aumentar 18% es $35.40 (o ₹2,950).",
    },
    howToUse: [
      "Elige uno de los seis modos de cálculo en la parte superior.",
      "Introduce las cifras correspondientes, incluidos decimales o negativos.",
      "Consulta el resultado al instante y cópialo o compártelo si lo necesitas.",
    ],
    assumptionsAndLimitations: [
      "El cambio porcentual no está definido cuando el valor inicial es exactamente cero.",
      "La diferencia porcentual es simétrica respecto al promedio de ambos valores, mientras que el cambio porcentual depende de cuál sea el valor inicial.",
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre cambio porcentual y diferencia porcentual?",
        answer:
          "El cambio porcentual mide la variación desde un valor inicial hacia uno nuevo; la diferencia porcentual compara dos valores de forma simétrica frente a su punto medio.",
      },
      {
        question: "¿Por qué subir un 20% y luego bajar un 20% no devuelve el número original?",
        answer:
          "Porque el descuento del 20% se aplica sobre la cifra ya incrementada. Por ejemplo, 100 + 20% = 120, y 120 − 20% = 96.",
      },
    ],
  },
  "average-calculator": {
    intro:
      "Un promedio resume un conjunto de datos en un único valor representativo. Calcula la media aritmética, mediana, mínimo, máximo o promedio ponderado para calificaciones, gastos o estadísticas.",
    resultExplanation:
      "El modo estándar muestra la media aritmética junto con la mediana, el conteo y la suma total. En modo ponderado, cada valor se multiplica por su peso antes de dividir entre la suma de pesos.",
    formulaTitle: "Fórmulas de Media y Promedio Ponderado",
    formulas: [
      "Media Aritmética = (x₁ + x₂ + ... + xₙ) / n",
      "Promedio Ponderado = (w₁x₁ + w₂x₂ + ... + wₙxₙ) / (w₁ + w₂ + ... + wₙ)",
    ],
    stepByStep: [
      "Para la media simple, suma todos los valores ingresados.",
      "Divide la suma entre la cantidad total de elementos.",
      "Para el promedio ponderado, multiplica cada valor por su peso, suma los productos y divide entre la suma de todos los pesos.",
    ],
    workedExample: {
      title: "Nota Final Ponderada",
      scenario: "Un estudiante obtiene 82% en tareas (30%), 76% en parcial (30%) y 90% en examen final (40%).",
      calculationSteps: [
        "(82 × 30) + (76 × 30) + (90 × 40) = 2,460 + 2,280 + 3,600 = 8,340.",
        "Suma de pesos: 30 + 30 + 40 = 100.",
        "Resultado: 8,340 / 100 = 83.4.",
      ],
      outcome: "El promedio ponderado del curso es 83.4%.",
    },
    howToUse: [
      "Selecciona Media Aritmética o Promedio Ponderado.",
      "Introduce números positivos, negativos o decimales.",
      "Agrega o elimina filas según necesites.",
    ],
    assumptionsAndLimitations: [
      "Las filas vacías se omiten, pero se requiere al menos un valor válido.",
      "En modo ponderado la suma total de pesos debe ser mayor que cero.",
    ],
    faqs: [
      {
        question: "¿Cuándo conviene usar un promedio ponderado?",
        answer:
          "Cuando ciertos elementos tienen mayor peso o frecuencia que otros, como créditos universitarios o ponderaciones de evaluación.",
      },
      {
        question: "¿Los pesos deben sumar siempre 100?",
        answer:
          "No. Pueden ser créditos, horas o cualquier número positivo, ya que la fórmula divide entre la suma real de los pesos.",
      },
    ],
  },
  "age-calculator": {
    intro:
      "Calcular la edad exacta considerando meses de distinta duración y años bisiestos requiere aritmética de calendario precisa. Obtén tu edad en años, meses y días desde tu nacimiento hasta hoy o cualquier fecha.",
    resultExplanation:
      "Muestra años cumplidos, meses desde tu último cumpleaños y días restantes, además del total de días vividos y los días que faltan para tu próximo cumpleaños.",
    formulaTitle: "Lógica de Edad de Calendario",
    formulas: [
      "Años Cumplidos = Año Objetivo − Año Nacimiento (ajustado si aún no pasa el cumpleaños)",
      "Días Restantes = Ajustados según los días reales del mes anterior (28, 29, 30 o 31)",
      "Días Vividos = (Fecha Objetivo UTC − Nacimiento UTC) / 86,400,000 ms",
    ],
    stepByStep: [
      "Resta año, mes y día de nacimiento a la fecha objetivo.",
      "Si los días son negativos, toma prestados los días exactos del mes precedente.",
      "Si los meses son negativos, resta 1 año y suma 12 meses.",
    ],
    workedExample: {
      title: "Nacimiento en Año Bisiesto",
      scenario: "Alguien nacido el 29 de febrero de 2000 consulta su edad el 24 de noviembre de 2026.",
      calculationSteps: [
        "Años transcurridos: 2026 − 2000 = 26 años.",
        "Meses de febrero a octubre: 8 meses cumplidos.",
        "Días del 29 de octubre al 24 de noviembre: (31 − 29) + 24 = 26 días.",
      ],
      outcome: "La edad exacta es 26 años, 8 meses y 26 días.",
    },
    howToUse: [
      "Elige tu Fecha de Nacimiento en el selector de calendario.",
      "Deja la fecha objetivo en hoy o cámbiala para calcular a futuro o pasado.",
      "Consulta años, meses, días y días vividos al instante.",
    ],
    assumptionsAndLimitations: [
      "Sigue el calendario gregoriano estándar en fecha UTC para evitar desfases horarios.",
      "En años no bisiestos, los nacidos el 29 de febrero celebran el 28 para la cuenta regresiva.",
    ],
    faqs: [
      {
        question: "¿Incluye años bisiestos como 2000 o 2024?",
        answer:
          "Sí. El conteo total de días incluye cada 29 de febrero comprendido entre ambas fechas.",
      },
      {
        question: "¿Por qué los meses y días exactos difieren de dividir días entre 30?",
        answer:
          "Porque los meses reales tienen entre 28 y 31 días; esta herramienta usa la duración real de cada mes.",
      },
    ],
  },
  "date-calculator": {
    intro:
      "Suma o resta días, semanas, meses y años a cualquier fecha para planificar plazos legales, visas, entregas de proyectos o vencimientos.",
    resultExplanation:
      "Muestra la fecha resultante en formato legible completo, formato ISO (YYYY-MM-DD) y el día de la semana exacto.",
    formulaTitle: "Orden de Cálculo de Calendario",
    formulas: [
      "Paso 1: Mes/Año Destino = Mes Inicial ± (Años × 12 + Meses), ajustando al fin de mes",
      "Paso 2: Fecha Final = Fecha Paso 1 ± (Semanas × 7 + Días)",
    ],
    stepByStep: [
      "Parte de la fecha inicial elegida.",
      "Suma o resta años y meses primero, ajustando al último día válido si el mes destino es más corto.",
      "Agrega o resta las semanas (×7) y días sueltos.",
    ],
    workedExample: {
      title: "Sumar 1 Mes y 10 Días a Fin de Mes",
      scenario: "Sumar 1 mes y 10 días al 31 de enero de 2024 (año bisiesto).",
      calculationSteps: [
        "31 de enero + 1 mes se ajusta al 29 de febrero de 2024.",
        "29 de febrero + 10 días = 10 de marzo de 2024.",
      ],
      outcome: "La fecha resultante es domingo, 10 de marzo de 2024.",
    },
    howToUse: [
      "Selecciona la fecha inicial.",
      "Elige Sumar (+) o Restar (−).",
      "Indica años, meses, semanas y días.",
    ],
    assumptionsAndLimitations: [
      "Opera en fechas UTC para que los cambios de horario de verano nunca alteren el día.",
    ],
    faqs: [
      {
        question: "¿Qué ocurre al sumar 1 mes al 31 de enero?",
        answer:
          "Se ajusta al 28 de febrero (o 29 en año bisiesto) sin saltar accidentalmente a marzo.",
      },
      {
        question: "¿Maneja años bisiestos automáticamente?",
        answer:
          "Sí, aplica automáticamente las reglas gregorianas de cada 4 años y siglos.",
      },
    ],
  },
  "days-between-dates-calculator": {
    intro:
      "Cuenta exactamente cuántos días y semanas completas separan dos fechas para contratos de alquiler, viajes, vacaciones o plazos de entrega.",
    resultExplanation:
      "Obtienes el total de días, el desglose en semanas y días restantes, y la equivalencia aproximada en meses y años. La opción de incluir fecha final suma 1 día.",
    formulaTitle: "Fórmula de Diferencia de Días",
    formulas: [
      "Días Exclusivos = |Fecha Final (UTC) − Fecha Inicial (UTC)| / 86,400,000",
      "Días Inclusivos = Días Exclusivos + 1",
    ],
    stepByStep: [
      "Normaliza ambas fechas a medianoche UTC.",
      "Calcula la diferencia absoluta en milisegundos y divídela entre 86,400,000.",
      "Suma 1 si ambos extremos del rango cuentan como días incluidos.",
    ],
    workedExample: {
      title: "Días de Vacaciones Inclusivos",
      scenario: "Permiso del lunes 2 de marzo al viernes 6 de marzo de 2026 inclusive.",
      calculationSteps: [
        "Diferencia estándar: 4 días.",
        "Con fecha final incluida (+1): 5 días (del 2 al 6 de marzo).",
      ],
      outcome: "Duración total inclusiva: 5 días.",
    },
    howToUse: [
      "Selecciona Fecha Inicial y Fecha Final.",
      "Marca o desmarca 'Incluir fecha final (+1 día)'.",
      "Consulta el total de días y semanas.",
    ],
    assumptionsAndLimitations: [
      "Cuenta todos los días calendario incluidos fines de semana y festivos.",
    ],
    faqs: [
      {
        question: "¿Cuándo conviene marcar 'Incluir fecha final'?",
        answer:
          "En vacaciones, eventos o contratos donde tanto el primer día como el último forman parte del período. Déjalo desmarcado para noches de hotel.",
      },
      {
        question: "¿Afecta el horario de verano al cálculo?",
        answer:
          "No, gracias a la normalización UTC a medianoche.",
      },
    ],
  },
  "discount-calculator": {
    intro:
      "Calcula rápidamente cuánto ahorras en rebajas y promociones. Introduce el precio original y el porcentaje de descuento en USD ($) o INR (₹).",
    resultExplanation:
      "Muestra el precio final rebajado y el ahorro monetario exacto de forma clara.",
    formulaTitle: "Fórmulas de Descuento",
    formulas: [
      "Importe Descontado = Precio Original × (Descuento % / 100)",
      "Precio Final = Precio Original − Importe Descontado",
    ],
    stepByStep: [
      "Multiplica el precio original por el porcentaje de descuento dividido entre 100.",
      "Resta ese descuento del precio original para obtener el importe final antes de impuestos.",
    ],
    workedExample: {
      title: "Descuento del 25% en Compras",
      scenario: "Un artículo de $150 (o ₹12,000) tiene 25% de descuento.",
      calculationSteps: [
        "Descuento: 150 × 0.25 = $37.50 (o ₹3,000).",
        "Precio final: 150 − 37.50 = $112.50 (o ₹9,000).",
      ],
      outcome: "Pagas $112.50 (₹9,000) y ahorras $37.50 (₹3,000).",
    },
    howToUse: [
      "Elige USD ($) o INR (₹).",
      "Escribe el precio original y el porcentaje (0–100%).",
      "Visualiza el precio rebajado y el ahorro total.",
    ],
    assumptionsAndLimitations: [
      "Calcula precios previos a impuestos (IVA, sales tax o GST no se añaden automáticamente).",
    ],
    faqs: [
      {
        question: "¿Cómo calculo descuentos acumulados como 20% + 10% adicional?",
        answer:
          "Aplica primero el 20% y luego usa el resultado como nuevo precio para aplicar el 10%. Juntos equivalen al 28% total, no al 30%.",
      },
      {
        question: "¿El selector de moneda convierte divisas?",
        answer:
          "No. Solo adapta el símbolo y el formato numérico sin tipo de cambio en vivo.",
      },
    ],
  },
  "profit-loss-calculator": {
    intro:
      "Evalúa precios de venta, márgenes comerciales y rentabilidad en USD o INR. Obtén ganancia o pérdida, markup sobre costo y margen bruto.",
    resultExplanation:
      "Distingue claramente entre Markup (ganancia sobre costo) y Margen de Ganancia (ganancia sobre precio de venta).",
    formulaTitle: "Fórmulas de Ganancia, Margen y Markup",
    formulas: [
      "Ganancia o Pérdida = Precio de Venta − Precio de Costo",
      "Markup % (sobre Costo) = ((Venta − Costo) / Costo) × 100",
      "Margen Bruto % (sobre Venta) = ((Venta − Costo) / Venta) × 100",
    ],
    stepByStep: [
      "Resta el precio de costo al precio de venta.",
      "Divide entre el costo × 100 para obtener el markup.",
      "Divide entre el precio de venta × 100 para obtener el margen.",
    ],
    workedExample: {
      title: "Margen vs. Markup en Comercio",
      scenario: "Costo de $80 (₹800) y venta a $100 (₹1,000).",
      calculationSteps: [
        "Ganancia = 100 − 80 = $20 (₹200).",
        "Markup = (20 / 80) × 100 = 25%.",
        "Margen bruto = (20 / 100) × 100 = 20%.",
      ],
      outcome: "Ganancia de $20 (₹200) con 25% de markup y 20% de margen.",
    },
    howToUse: [
      "Selecciona USD o INR.",
      "Introduce Costo (>0) y Precio de Venta.",
      "Revisa ganancia, margen y markup.",
    ],
    assumptionsAndLimitations: [
      "No deduce automáticamente envío, comisiones de plataforma ni impuestos salvo que los incluyas en el costo.",
    ],
    faqs: [
      {
        question: "¿Por qué el margen siempre es menor que el markup cuando hay ganancia?",
        answer:
          "Porque el precio de venta es mayor que el costo, y dividir la misma ganancia por un denominador mayor da un porcentaje menor.",
      },
      {
        question: "¿Qué sucede si ambos precios son iguales?",
        answer:
          "Se muestra punto de equilibrio ($0 / ₹0, 0% margen y 0% markup).",
      },
    ],
  },
  "ratio-calculator": {
    intro:
      "Simplifica razones múltiples a su forma irreducible, compara dos razones o resuelve un valor faltante mediante proporción directa.",
    resultExplanation:
      "Usa el máximo común divisor (MCD) para simplificar, multiplicación cruzada para despejar X y cocientes decimales para comparar.",
    formulaTitle: "Fórmulas de Razón y Proporción",
    formulas: [
      "Razón Simplificada = (A / MCD) : (B / MCD) : (C / MCD)",
      "Incógnita en A : B = C : X  ⇒  X = (B × C) / A",
    ],
    stepByStep: [
      "Para simplificar, calcula el MCD de todos los términos y divide cada uno.",
      "Para resolver A : B = C : X, multiplica B × C y divide entre A.",
    ],
    workedExample: {
      title: "Simplificar una Razón de 3 Términos",
      scenario: "Simplifica 12 : 18 : 30.",
      calculationSteps: [
        "El MCD de 12, 18 y 30 es 6.",
        "Divide cada número entre 6: 2 : 3 : 5.",
      ],
      outcome: "La razón simplificada es 2 : 3 : 5.",
    },
    howToUse: [
      "Elige Simplificar, Resolver Incógnita o Comparar.",
      "Introduce valores positivos y añade términos si lo necesitas.",
    ],
    assumptionsAndLimitations: [
      "Requiere valores positivos distintos de cero.",
    ],
    faqs: [
      {
        question: "¿Puedo simplificar razones de 3 o más números?",
        answer:
          "Sí, utiliza el botón de agregar término en el modo Simplificar.",
      },
      {
        question: "¿Cómo compruebo si 16:9 equivale a 1920:1080?",
        answer:
          "Usa Comparar con A=16, B=9 y C=1920, D=1080; ambos cocientes dan 1.777778.",
      },
    ],
  },
  "fraction-calculator": {
    intro:
      "Suma, resta, multiplica o divide dos fracciones con simplificación automática, número mixto y resultado decimal.",
    resultExplanation:
      "Muestra la fracción irreducible, el número mixto equivalente cuando corresponde y su valor decimal.",
    formulaTitle: "Reglas de Fracciones",
    formulas: [
      "Suma: (a/b) + (c/d) = (ad + bc) / (bd)",
      "Resta: (a/b) − (c/d) = (ad − bc) / (bd)",
      "Multiplicación: (a/b) × (c/d) = (ac) / (bd)",
      "División: (a/b) ÷ (c/d) = (ad) / (bc)",
    ],
    stepByStep: [
      "Aplica la operación correspondiente sobre numeradores y denominadores.",
      "Divide numerador y denominador por su MCD para simplificar.",
      "Convierte a número mixto si |numerador| ≥ denominador.",
    ],
    workedExample: {
      title: "Sumar Fracciones con Distinto Denominador",
      scenario: "Calcula 3/4 + 5/6.",
      calculationSteps: [
        "(3×6 + 5×4) / (4×6) = 38/24.",
        "Simplifica por MCD(38,24)=2 → 19/12 = 1 7/12.",
      ],
      outcome: "3/4 + 5/6 = 19/12 (o 1 7/12).",
    },
    howToUse: [
      "Ingresa numeradores enteros y denominadores distintos de cero.",
      "Elige la operación (+, −, ×, ÷) y revisa los resultados.",
    ],
    assumptionsAndLimitations: [
      "No se permiten denominadores iguales a cero ni división por cero.",
    ],
    faqs: [
      {
        question: "¿Por qué muestra 19/12 y también 1 7/12?",
        answer:
          "19/12 es la fracción impropia simplificada y 1 7/12 es el número mixto útil en mediciones físicas.",
      },
      {
        question: "¿Admite fracciones negativas?",
        answer:
          "Sí, puedes ingresar el signo menos en el numerador.",
      },
    ],
  },
  "time-calculator": {
    intro:
      "Suma o resta horas y minutos en base 60 sin errores de cálculo manual para registros de trabajo, proyectos, estudio y viajes.",
    resultExplanation:
      "Convierte ambas entradas a minutos totales, realiza la suma o resta y devuelve horas, minutos y equivalencia en días.",
    formulaTitle: "Aritmética Horaria Base 60",
    formulas: [
      "Minutos Totales = (Horas₁ × 60 + Min₁) ± (Horas₂ × 60 + Min₂)",
      "Horas = floor(|Minutos Totales| / 60)  |  Minutos = |Minutos Totales| mod 60",
    ],
    stepByStep: [
      "Convierte horas y minutos a minutos totales multiplicando por 60.",
      "Suma o resta y convierte de nuevo a horas y minutos.",
    ],
    workedExample: {
      title: "Sumar Dos Jornadas",
      scenario: "Sumar 4 h 45 min y 3 h 35 min.",
      calculationSteps: [
        "285 min + 215 min = 500 min.",
        "500 ÷ 60 = 8 horas y 20 minutos.",
      ],
      outcome: "El total es 8h 20m (500 minutos).",
    },
    howToUse: [
      "Introduce horas y minutos para Tiempo A y Tiempo B.",
      "Elige Sumar (+) o Restar (−).",
    ],
    assumptionsAndLimitations: [
      "Los valores de minutos iguales o mayores a 60 se convierten automáticamente a horas.",
    ],
    faqs: [
      {
        question: "¿Qué pasa si escribo 90 en el campo de minutos?",
        answer:
          "0h 90m se normaliza correctamente como 1h 30m.",
      },
      {
        question: "¿Cómo paso el total a horas decimales?",
        answer:
          "Divide el total de minutos entre 60 o usa la calculadora de Duración entre Horas.",
      },
    ],
  },
  "time-duration-calculator": {
    intro:
      "Calcula las horas, minutos y horas decimales exactas entre una hora de inicio y una de fin, incluidos turnos nocturnos que cruzan la medianoche.",
    resultExplanation:
      "Si la hora final es menor que la inicial y el modo nocturno está activo, suma 24 horas automáticamente para medir el turno completo.",
    formulaTitle: "Duración entre Dos Horas",
    formulas: [
      "Minutos Transcurridos = Fin − Inicio (+ 1,440 min si cruza medianoche)",
    ],
    stepByStep: [
      "Convierte ambas horas de reloj a minutos desde medianoche.",
      "Resta inicio de fin y añade 1,440 minutos si cruza la medianoche.",
      "Divide entre 60 para obtener horas decimales.",
    ],
    workedExample: {
      title: "Turno Nocturno",
      scenario: "De 22:15 a 06:45.",
      calculationSteps: [
        "405 − 1,335 + 1,440 = 510 minutos.",
        "510 minutos = 8h 30m (8.5 horas decimales).",
      ],
      outcome: "La duración es 8h 30m (8.50 horas).",
    },
    howToUse: [
      "Selecciona Hora Inicial y Hora Final.",
      "Mantén activo 'Permitir intervalo nocturno' para turnos de noche.",
    ],
    assumptionsAndLimitations: [
      "Mide intervalos de hasta 24 horas; para varios días usa Días entre Fechas.",
    ],
    faqs: [
      {
        question: "¿Para qué sirven las horas decimales?",
        answer:
          "Las nóminas multiplican el salario por hora usando horas decimales (8h 30m = 8.5 horas).",
      },
      {
        question: "¿Qué muestra si inicio y fin son iguales?",
        answer:
          "Muestra 0h 0m (0 minutos).",
      },
    ],
  },
  "unit-converter": {
    intro:
      "Convierte fácilmente entre unidades métricas e imperiales de Longitud, Peso, Temperatura, Volumen, Velocidad y Área con constantes internacionales exactas.",
    resultExplanation:
      "Aplica equivalencias oficiales como 1 pulgada = 2.54 cm y 1 libra = 0.45359237 kg e incluye botón de intercambio rápido.",
    formulaTitle: "Equivalencias Métrico–Imperiales",
    formulas: [
      "1 pulgada = 2.54 cm  |  1 pie = 0.3048 m  |  1 milla = 1.609344 km",
      "1 libra (lb) = 0.45359237 kg  |  °F = (°C × 9/5) + 32",
    ],
    stepByStep: [
      "Elige la magnitud física (Longitud, Peso, Temperatura, Volumen, Velocidad o Área).",
      "Selecciona unidad de origen y destino e ingresa la cantidad.",
    ],
    workedExample: {
      title: "Convertir Kilogramos a Libras y °F a °C",
      scenario: "Convertir 72 kg a libras y 100°F a Celsius.",
      calculationSteps: [
        "72 ÷ 0.45359237 = 158.73 lb.",
        "(100 − 32) × 5/9 = 37.78°C.",
      ],
      outcome: "72 kg equivalen a ~158.73 lb y 100°F a 37.78°C.",
    },
    howToUse: [
      "Selecciona una de las seis categorías.",
      "Ingresa el valor y usa Intercambiar para invertir unidades.",
    ],
    assumptionsAndLimitations: [
      "Los volúmenes emplean galones y onzas líquidas estándar de EE. UU. (1 galón = 3.7854 L).",
    ],
    faqs: [
      {
        question: "¿Son exactos los factores de conversión?",
        answer:
          "Sí, se basan en definiciones internacionales NIST/SI con precisión de hasta 6 decimales.",
      },
      {
        question: "¿En qué difiere el galón de EE. UU. del imperial británico?",
        answer:
          "El galón estadounidense equivale a 3.785 L mientras que el británico antiguo es de 4.546 L.",
      },
    ],
  },
  "bmi-calculator": {
    intro:
      "El Índice de Masa Corporal (IMC o BMI) relaciona el peso con la estatura al cuadrado como indicador general de detección para adultos en unidades métricas o imperiales.",
    resultExplanation:
      "Muestra tu IMC numérico, la categoría estándar OMS/CDC (Bajo peso <18.5, Normal 18.5–24.9, Sobrepeso 25.0–29.9, Obesidad ≥30) y el rango de peso saludable para tu estatura.",
    formulaTitle: "Fórmula de IMC (Métrica e Imperial)",
    formulas: [
      "Métrica: IMC = Peso (kg) / [Estatura (m)]²",
      "Imperial: IMC = 703 × Peso (lb) / [Estatura (in)]²",
    ],
    stepByStep: [
      "Convierte la altura a metros (cm ÷ 100) o pulgadas totales.",
      "Eleva la altura al cuadrado y divide el peso entre ese valor.",
    ],
    workedExample: {
      title: "Ejemplo Métrico de IMC",
      scenario: "Adulto de 172 cm y 70 kg.",
      calculationSteps: [
        "70 ÷ (1.72 × 1.72) = 70 ÷ 2.9584 = 23.7 (Peso normal).",
      ],
      outcome: "El IMC estimado es 23.7 kg/m².",
    },
    howToUse: [
      "Elige sistema Métrico (cm/kg) o Imperial (ft/in/lb).",
      "Ingresa estatura y peso para ver resultado y rango saludable.",
    ],
    assumptionsAndLimitations: [
      "Las categorías adultas aplican a mayores de 20 años; niños y adolescentes requieren percentiles pediátricos.",
      "No distingue directamente entre masa muscular y grasa corporal.",
    ],
    medicalDisclaimer:
      "El IMC es solo una herramienta orientativa de cribado y no constituye un diagnóstico médico. Consulta a un profesional de la salud.",
    faqs: [
      {
        question: "¿Sirve para niños y adolescentes?",
        answer:
          "No. Menores de 20 años deben evaluarse con tablas de percentiles según edad y sexo.",
      },
      {
        question: "¿El IMC diferencia músculo y grasa?",
        answer:
          "No; personas muy musculosas pueden arrojar un IMC elevado aun con poca grasa corporal.",
      },
    ],
  },
  "bmr-calculator": {
    intro:
      "La Tasa Metabólica Basal (TMB / BMR) estima las calorías mínimas que tu cuerpo consume al día en reposo absoluto. Utiliza la ecuación Mifflin-St Jeor.",
    resultExplanation:
      "Se expresa en kilocalorías diarias (kcal/día). Combínala con un factor de actividad en la calculadora TDEE para conocer tu gasto total.",
    formulaTitle: "Ecuación Mifflin-St Jeor (1990)",
    formulas: [
      "Hombres: TMB = (10 × peso kg) + (6.25 × altura cm) − (5 × edad) + 5",
      "Mujeres: TMB = (10 × peso kg) + (6.25 × altura cm) − (5 × edad) − 161",
    ],
    stepByStep: [
      "Convierte altura a cm y peso a kg si usas unidades imperiales.",
      "Calcula (10 × peso) + (6.25 × altura) − (5 × edad) y suma +5 o resta 161.",
    ],
    workedExample: {
      title: "Cálculo TMB con Mifflin-St Jeor",
      scenario: "Mujer de 30 años, 165 cm y 62 kg.",
      calculationSteps: [
        "620 + 1,031.25 − 150 − 161 = 1,340.25 kcal/día.",
      ],
      outcome: "La TMB estimada es aproximadamente 1,340 kcal/día.",
    },
    howToUse: [
      "Selecciona unidades, constante de sexo, edad, estatura y peso.",
    ],
    assumptionsAndLimitations: [
      "Las fórmulas predictivas presentan un margen aproximado de ±10% respecto a mediciones clínicas.",
    ],
    medicalDisclaimer:
      "La TMB es una estimación matemática informativa; no reduzcas tu ingesta por debajo de la TMB sin supervisión médica.",
    faqs: [
      {
        question: "¿Debo comer exactamente mi TMB para bajar de peso?",
        answer:
          "Por lo general no. Tu organismo gasta energía adicional al moverse y digerir; calcula primero tu TDEE.",
      },
      {
        question: "¿Por qué usar Mifflin-St Jeor?",
        answer:
          "Estudios clínicos la consideran más precisa para adultos actuales que la antigua ecuación Harris-Benedict.",
      },
    ],
  },
  "tdee-calculator": {
    intro:
      "El Gasto Energético Diario Total (TDEE) estima cuántas calorías quemas en 24 horas sumando tu metabolismo basal y tu actividad física diaria.",
    resultExplanation:
      "Indica tus calorías de mantenimiento junto a tu TMB base y el multiplicador de actividad elegido.",
    formulaTitle: "Fórmula de TDEE",
    formulas: [
      "TDEE = TMB (Mifflin-St Jeor) × Factor de Actividad",
      "Factores: Sedentario 1.2 · Ligero 1.375 · Moderado 1.55 · Muy Activo 1.725 · Extra 1.9",
    ],
    stepByStep: [
      "Calcula tu TMB con edad, sexo, estatura y peso.",
      "Multiplica por el nivel de actividad semanal real.",
    ],
    workedExample: {
      title: "TDEE Moderadamente Activo",
      scenario: "Hombre de 32 años, 178 cm, 78 kg con actividad moderada (1.55).",
      calculationSteps: [
        "TMB = 1,738 kcal/día.",
        "TDEE = 1,738 × 1.55 = 2,693 kcal/día.",
      ],
      outcome: "El gasto diario de mantenimiento estimado es 2,693 kcal/día.",
    },
    howToUse: [
      "Ingresa tus datos físicos y selecciona tu promedio semanal de actividad.",
    ],
    assumptionsAndLimitations: [
      "Es común sobreestimar la actividad; quien trabaja en oficina suele corresponder a Ligero (1.375).",
    ],
    medicalDisclaimer:
      "El TDEE es una cifra orientativa y no sustituye la evaluación de un médico o nutricionista.",
    faqs: [
      {
        question: "¿En qué se diferencian TMB y TDEE?",
        answer:
          "La TMB mide el reposo absoluto; el TDEE añade el gasto por caminar, trabajar y hacer ejercicio.",
      },
      {
        question: "¿Qué nivel elegir si voy al gimnasio 3 veces por semana?",
        answer:
          "Para un trabajo de escritorio suele encajar entre Ligero (1.375) y Moderado (1.55).",
      },
    ],
  },
  "calorie-calculator": {
    intro:
      "Estima tus requerimientos diarios de calorías para mantener, perder o ganar peso gradualmente usando Mifflin-St Jeor y umbrales mínimos seguros.",
    resultExplanation:
      "Muestra tanto tus calorías de mantenimiento como el objetivo ajustado (−250/−500 o +250/+500 kcal), respetando mínimos de seguridad (1,200 kcal mujeres / 1,500 kcal hombres).",
    formulaTitle: "Cálculo Calórico por Objetivo",
    formulas: [
      "Mantenimiento = TMB × Factor de Actividad",
      "Déficit / Superávit = Mantenimiento ± 250 o ± 500 kcal/día",
    ],
    stepByStep: [
      "Calcula tu TDEE de mantenimiento.",
      "Aplica el ajuste diario según tu meta elegida.",
    ],
    workedExample: {
      title: "Objetivo de Déficit Moderado",
      scenario: "Adulto con TDEE de 2,200 kcal/día que busca pérdida gradual (−500 kcal).",
      calculationSteps: [
        "2,200 − 500 = 1,700 kcal/día.",
      ],
      outcome: "Objetivo diario estimado: 1,700 kcal/día.",
    },
    howToUse: [
      "Introduce medidas, nivel de actividad y objetivo ponderal.",
    ],
    assumptionsAndLimitations: [
      "Dietas por debajo de 1,200/1,500 kcal conllevan riesgo nutricional y requieren supervisión médica.",
    ],
    medicalDisclaimer:
      "Esta calculadora ofrece estimaciones educativas generales y no reemplaza un plan nutricional profesional.",
    faqs: [
      {
        question: "¿Por qué no baja de 1,200 o 1,500 kcal?",
        answer:
          "Porque cubrir vitaminas, minerales y proteínas esenciales por debajo de esos umbrales sin control médico resulta difícil.",
      },
      {
        question: "¿Qué precisión tienen estos cálculos?",
        answer:
          "Aproximadamente un ±10–15% inicial; ajusta observando tu evolución durante 2 a 4 semanas.",
      },
    ],
  },
  "ideal-weight-calculator": {
    intro:
      "Compara cuatro fórmulas clásicas basadas en estatura (Devine, Robinson, Miller y Hamwi) junto al rango saludable de IMC en kilogramos y libras.",
    resultExplanation:
      "Muestra todas las fórmulas lado a lado junto con la banda saludable de IMC (18.5–24.9) porque ningún número único define el peso ideal de cada complexión.",
    formulaTitle: "Fórmulas de Peso de Referencia",
    formulas: [
      "Devine: H 50 + 2.3 kg/pulgada sobre 5 pies | M 45.5 + 2.3 kg/pulgada",
      "Robinson: H 52 + 1.9 | M 49 + 1.7  ·  Miller: H 56.2 + 1.41 | M 53.1 + 1.36",
      "Hamwi: H 48 + 2.7 | M 45.5 + 2.2",
    ],
    stepByStep: [
      "Convierte la altura a pulgadas y calcula las pulgadas por encima de 60 (5 pies).",
      "Aplica cada ecuación y compara con el rango IMC saludable.",
    ],
    workedExample: {
      title: "Comparación a 177.8 cm (5 pies 10 pulg.)",
      scenario: "Hombre adulto de 70 pulgadas (10 sobre 5 pies).",
      calculationSteps: [
        "Devine: 73.0 kg · Robinson: 71.0 kg · Miller: 70.3 kg.",
        "Rango IMC 18.5–24.9: 58.5–78.7 kg.",
      ],
      outcome: "Las fórmulas rondan 70–75 kg dentro del amplio rango saludable 58.5–78.7 kg.",
    },
    howToUse: [
      "Elige Métrico o Imperial, selecciona sexo e ingresa tu estatura.",
    ],
    assumptionsAndLimitations: [
      "Fórmulas creadas originalmente para dosificación clínica de fármacos; no miden masa muscular ni ósea.",
    ],
    medicalDisclaimer:
      "Los valores son referencias estadísticas históricas, no objetivos médicos obligatorios.",
    faqs: [
      {
        question: "¿Por qué dan cifras distintas las cuatro fórmulas?",
        answer:
          "Cada ecuación se derivó de cohortes históricas distintas entre 1964 y 1983.",
      },
      {
        question: "¿La fórmula de Devine es un diagnóstico clínico?",
        answer:
          "No, nació para estimar dosis médicas.",
      },
    ],
  },
  "body-fat-calculator": {
    intro:
      "Estima el porcentaje de grasa corporal con la fórmula de circunferencias de la Marina de EE. UU. utilizando cuello, cintura, cadera y altura.",
    resultExplanation:
      "Muestra el porcentaje estimado, una referencia general y—si añades tu peso—la masa grasa y la masa magra en kg y libras.",
    formulaTitle: "Ecuación Logarítmica US Navy",
    formulas: [
      "Hombres: %GC = 495 / (1.0324 − 0.19077 × log₁₀(cintura − cuello) + 0.15456 × log₁₀(altura)) − 450",
      "Mujeres: %GC = 495 / (1.29579 − 0.35004 × log₁₀(cintura + cadera − cuello) + 0.22100 × log₁₀(altura)) − 450",
    ],
    stepByStep: [
      "Toma medidas horizontales con cinta métrica en altura, cuello, cintura y cadera.",
      "Aplica la fórmula logarítmica correspondiente.",
    ],
    workedExample: {
      title: "Estimación Masculina",
      scenario: "Altura 178 cm, cuello 38 cm, cintura 86 cm, peso 76 kg.",
      calculationSteps: [
        "Cintura − Cuello = 48 cm → Grasa corporal ≈ 17.1%.",
      ],
      outcome: "17.1% de grasa corporal (~13.0 kg masa grasa y 63.0 kg masa magra).",
    },
    howToUse: [
      "Elige cm/kg o pulgadas/libras y escribe tus medidas de cinta.",
    ],
    assumptionsAndLimitations: [
      "Margen de error de ±3% a ±5% frente a estudios DEXA.",
    ],
    medicalDisclaimer:
      "Es una estimación aproximada de fitness y no sustituye pruebas clínicas de composición corporal.",
    faqs: [
      {
        question: "¿Dónde medir la cintura?",
        answer:
          "En hombres al nivel del ombligo tras exhalar normalmente; en mujeres en la parte más estrecha natural.",
      },
      {
        question: "¿Por qué complementa al IMC?",
        answer:
          "Ayuda a seguir cambios en la cintura cuando el peso total en báscula apenas cambia.",
      },
    ],
  },
  "protein-calculator": {
    intro:
      "Estima tu rango diario recomendado de proteínas en gramos según tu peso corporal (kg o lb) y tu nivel de entrenamiento o actividad.",
    resultExplanation:
      "Presenta un rango práctico mínimo-máximo y su punto medio basado en guías nutricionales y deportivas reconocidas.",
    formulaTitle: "Rangos de Proteína por Peso Corporal",
    formulas: [
      "Adulto General: 0.8–1.0 g/kg  |  Activo: 1.2–1.5 g/kg",
      "Resistencia: 1.2–1.6 g/kg  |  Fuerza: 1.6–2.0 g/kg",
    ],
    stepByStep: [
      "Convierte el peso a kg si lo ingresaste en libras.",
      "Multiplica por los factores mínimo y máximo de tu objetivo.",
    ],
    workedExample: {
      title: "Adulto Activo de 70 kg",
      scenario: "Peso 70 kg con actividad física regular (1.2–1.5 g/kg).",
      calculationSteps: [
        "70 × 1.2 = 84 g/día; 70 × 1.5 = 105 g/día.",
      ],
      outcome: "Rango diario estimado: 84–105 g/día (punto medio 95 g).",
    },
    howToUse: [
      "Elige unidad de peso, ingresa tus kilos o libras y selecciona objetivo.",
    ],
    assumptionsAndLimitations: [
      "Personas con enfermedad renal o hepática deben seguir pautas médicas específicas.",
    ],
    medicalDisclaimer:
      "Guía educativa general; consulta a un dietista o médico ante condiciones clínicas.",
    faqs: [
      {
        question: "¿Cuál es la ingesta diaria básica (RDA) de proteína?",
        answer:
          "0.8 g por kilogramo de peso corporal al día para adultos sedentarios.",
      },
      {
        question: "¿Cambia el total si sigo una dieta vegetal?",
        answer:
          "El total en gramos es similar combinando legumbres, soja, cereales y frutos secos.",
      },
    ],
  },
  "water-intake-calculator": {
    intro:
      "Calcula tu necesidad aproximada de hidratación diaria en litros, mililitros, onzas líquidas y vasos según peso, ejercicio y clima.",
    resultExplanation:
      "Convierte el resultado a múltiples formatos de botellas y vasos habituales.",
    formulaTitle: "Estimación de Hidratación Diaria",
    formulas: [
      "Base (mL) = Peso (kg) × 33 mL",
      "Ejercicio = (Minutos / 30) × 350 mL  |  Clima Cálido = +300 mL",
    ],
    stepByStep: [
      "Multiplica tu peso en kg por 33 mL.",
      "Añade el extra por ejercicio diario y clima cálido o húmedo.",
    ],
    workedExample: {
      title: "Hidratación en Clima Cálido",
      scenario: "Adulto de 68 kg con 45 minutos de ejercicio en clima cálido.",
      calculationSteps: [
        "2,244 + 525 + 300 = 3,069 mL ≈ 3.07 L (104 fl oz).",
      ],
      outcome: "Estimación diaria: ~3.07 litros (104 fl oz).",
    },
    howToUse: [
      "Ingresa peso, minutos diarios de ejercicio y tipo de clima.",
    ],
    assumptionsAndLimitations: [
      "Cerca del 20% de los líquidos diarios suele provenir de frutas, verduras y sopas.",
    ],
    medicalDisclaimer:
      "No sustituye restricciones de líquidos indicadas por médicos en insuficiencia renal o cardíaca.",
    faqs: [
      {
        question: "¿Cuentan el té, la leche o el café?",
        answer:
          "Sí, aportan hidratación diaria, aunque el agua natural sigue siendo la base ideal.",
      },
      {
        question: "¿Es malo beber demasiada agua?",
        answer:
          "Sí; beber excesivamente rápido sin electrolitos puede diluir el sodio sanguíneo.",
      },
    ],
  },
  "pregnancy-weeks-to-months": {
    intro:
      "Convierte las semanas y días de embarazo en el mes aproximado y trimestre correspondiente, entendiendo por qué la medicina cuenta en semanas.",
    resultExplanation:
      "Un mes promedio dura ~4.33 semanas (30.44 días), no 4 semanas exactas; por eso 40 semanas equivalen a unos 9 meses calendario y 1 semana.",
    formulaTitle: "Conversión de 40 Semanas a 9 Meses",
    formulas: [
      "Mes Aproximado = min(9, ceil((Semanas + Días/7) / 4.33))",
      "Trimestres: 1.º (0–13 sem) · 2.º (14–27 sem) · 3.º (28–40+ sem)",
    ],
    stepByStep: [
      "Suma semanas y fracción de días.",
      "Divide entre 4.33 semanas por mes promedio y asigna el trimestre clínico.",
    ],
    workedExample: {
      title: "Convertir 24 Semanas y 3 Días",
      scenario: "Gestación de 24 semanas y 3 días.",
      calculationSteps: [
        "24.43 ÷ 4.33 ≈ 5.64 → Mes 6 (Segundo Trimestre).",
      ],
      outcome: "Corresponde aproximadamente al mes 6 y al Segundo Trimestre.",
    },
    howToUse: [
      "Ingresa semanas completas (0–42) y días adicionales (0–6).",
    ],
    assumptionsAndLimitations: [
      "Los controles prenatales siempre se rigen por semanas y días exactos.",
    ],
    medicalDisclaimer:
      "Referencia educativa; sigue siempre la datación gestacional de tu obstetra o matrona.",
    faqs: [
      {
        question: "¿Por qué dura 40 semanas si 40 ÷ 4 es 10?",
        answer:
          "Porque casi todos los meses tienen 30 o 31 días (~4.33 semanas), haciendo que 40 semanas sean ~9 meses y una semana.",
      },
      {
        question: "¿Cuándo empieza el segundo trimestre?",
        answer:
          "Según ACOG, comienza exactamente a las 14 semanas y 0 días.",
      },
    ],
  },
  "pregnancy-due-date-calculator": {
    intro:
      "Estima tu fecha probable de parto (FPP), semana gestacional actual y trimestre a partir del primer día de tu última menstruación (FUR) y duración del ciclo.",
    resultExplanation:
      "Usa la regla estándar de 280 días (40 semanas) ajustada cuando tu ciclo habitual dura más o menos de 28 días.",
    formulaTitle: "Estimación Estándar de 280 Días",
    formulas: [
      "Fecha Probable de Parto = FUR + 280 días + (Duración Ciclo − 28 días)",
    ],
    stepByStep: [
      "Toma el primer día de tu última regla (FUR).",
      "Suma 280 días y ajusta la diferencia respecto a 28 días.",
    ],
    workedExample: {
      title: "Ciclo Regular de 28 Días",
      scenario: "FUR el 1 de junio de 2026 con ciclo de 28 días.",
      calculationSteps: [
        "1 de junio de 2026 + 280 días = 8 de marzo de 2027.",
      ],
      outcome: "Fecha estimada de parto: 8 de marzo de 2027.",
    },
    howToUse: [
      "Selecciona el primer día de tu última menstruación y la duración media de tu ciclo.",
    ],
    assumptionsAndLimitations: [
      "La mayoría de los partos a término ocurren entre la semana 37 y la 42; la ecografía del primer trimestre es más precisa.",
    ],
    medicalDisclaimer:
      "Las fechas calculadas son estimaciones orientativas y no sustituyen el control prenatal ni la ecografía obstétrica.",
    faqs: [
      {
        question: "¿Qué tan exacta es la fecha calculada desde la última regla?",
        answer:
          "Es una buena primera referencia en ciclos regulares, pero la ecografía temprana confirma la fecha clínica.",
      },
      {
        question: "¿Por qué se cuenta desde la última regla y no desde la concepción?",
        answer:
          "Porque rara vez se conoce el día exacto de ovulación y fecundación.",
      },
    ],
  },
  "pregnancy-calculator": {
    intro:
      "Consulta cuántas semanas y días de embarazo tienes hoy, el porcentaje de avance y tu trimestre usando la última regla (FUR) o tu fecha probable de parto (FPP).",
    resultExplanation:
      "Presenta edad gestacional, trimestre, días restantes y porcentaje completado sobre un término estándar de 280 días.",
    formulaTitle: "Cálculo Dual de Edad Gestacional",
    formulas: [
      "Desde FUR: Días Transcurridos = Hoy − FUR  |  Progreso % = (Días / 280) × 100",
      "Desde FPP: FUR Estimada = FPP − 280 días",
    ],
    stepByStep: [
      "Elige calcular desde FUR o desde FPP.",
      "Divide los días transcurridos entre 7 para obtener semanas y días.",
    ],
    workedExample: {
      title: "Semana Actual desde FPP Confirmada",
      scenario: "FPP el 15 de marzo de 2027 consultada el 24 de noviembre de 2026.",
      calculationSteps: [
        "FUR estimada = 8 de junio de 2026.",
        "169 días transcurridos = 24 semanas y 1 día (60.4%, Segundo Trimestre).",
      ],
      outcome: "Edad gestacional estimada: 24 semanas y 1 día.",
    },
    howToUse: [
      "Alterna entre Última Menstruación y Fecha Probable de Parto e ingresa las fechas.",
    ],
    assumptionsAndLimitations: [
      "Las fechas clínicas pueden variar tras ecografías o tratamientos de reproducción asistida.",
    ],
    medicalDisclaimer:
      "Resultados estrictamente informativos; sigue siempre las indicaciones de tu ginecólogo u obstetra.",
    faqs: [
      {
        question: "¿Qué método es preferible: FUR o Fecha de Parto?",
        answer:
          "Si tu médico ya ajustó la FPP por ecografía, usar esa fecha ofrece mayor coherencia semanal.",
      },
      {
        question: "¿Qué significa llegar al 100%?",
        answer:
          "Alcanzar las 40 semanas (280 días), aunque un nacimiento a término ocurre normalmente entre las semanas 37 y 41+.",
      },
    ],
  },
  "ovulation-calculator": {
    intro:
      "Estima tu próximo período menstrual, el día probable de ovulación y tu ventana fértil a partir de tu última menstruación y duración media del ciclo.",
    resultExplanation:
      "Resta 14 días a la próxima menstruación estimada para aproximar la ovulación y muestra los 5 días previos más el día de ovulación como ventana fértil.",
    formulaTitle: "Estimación de Fase Lútea",
    formulas: [
      "Próxima Regla = FUR + Duración Ciclo",
      "Ovulación Estimada = Próxima Regla − 14 días",
      "Ventana Fértil = [Ovulación − 5 días] hasta [Ovulación]",
    ],
    stepByStep: [
      "Suma tu ciclo promedio al primer día de tu última regla.",
      "Resta 14 días para estimar la ovulación y marca los 6 días fértiles.",
    ],
    workedExample: {
      title: "Ciclo de 30 Días",
      scenario: "Última regla el 1 de noviembre de 2026 con ciclo de 30 días.",
      calculationSteps: [
        "Próxima regla: 1 de diciembre de 2026.",
        "Ovulación estimada: 17 de noviembre · Ventana fértil: 12–17 de noviembre.",
      ],
      outcome: "Ovulación estimada alrededor del 17 de noviembre.",
    },
    howToUse: [
      "Selecciona el primer día de tu última regla e indica la duración de tu ciclo (21–45 días).",
    ],
    assumptionsAndLimitations: [
      "NO ES MÉTODO ANTICONCEPTIVO: Los cálculos de calendario no previenen embarazos ante variaciones de ovulación por estrés, enfermedad o ciclos irregulares.",
    ],
    medicalDisclaimer:
      "Estimación estadística únicamente; NUNCA debe usarse como anticonceptivo. Consulta a tu médico para planificación familiar.",
    faqs: [
      {
        question: "¿Puedo usar esta calculadora como método anticonceptivo?",
        answer:
          "No. La ovulación puede adelantarse o retrasarse de forma imprevista y los cálculos de calendario no evitan el embarazo.",
      },
      {
        question: "¿Qué ocurre si mis ciclos son irregulares?",
        answer:
          "Las fórmulas de calendario pierden precisión en ciclos variables; consulta a un especialista o usa pruebas de LH.",
      },
    ],
  },
};
