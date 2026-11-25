import { LocalizedGuideBody } from "./hi";

export const PT_GUIDES: Record<string, LocalizedGuideBody> = {
  "percentage-calculator": {
    intro:
      "Porcentagens expressam uma fração de 100 em impostos, descontos, notas escolares e reajustes salariais. Esta calculadora reúne seis operações essenciais em um só lugar.",
    resultExplanation:
      "Exibe o valor calculado, a proporção percentual ou a variação com sinal, além do montante exato somado ou subtraído.",
    formulaTitle: "Fórmulas Principais de Porcentagem",
    formulas: [
      "X% de Y = (X / 100) × Y",
      "X como % de Y = (X / Y) × 100",
      "Aumento (%) = Original + (Original × Taxa / 100)",
      "Desconto (%) = Original − (Original × Taxa / 100)",
      "Variação (%) = ((Novo − Inicial) / |Inicial|) × 100",
      "Diferença (%) = (|A − B| / ((|A| + |B|) / 2)) × 100",
    ],
    stepByStep: [
      "Escolha se deseja uma parte do total, comparação simétrica ou variação direcional.",
      "Divida a taxa por 100 e aplique a fórmula correspondente.",
    ],
    workedExample: {
      title: "Aumento de 18%",
      scenario: "Produto de US$ 30 (₹ 2.500) sobe 18%.",
      calculationSteps: [
        "30 × 0,18 = 5,40 → Total: US$ 35,40 (₹ 2.950).",
      ],
      outcome: "Preço final: US$ 35,40 (₹ 2.950).",
    },
    howToUse: [
      "Selecione um dos seis modos e informe os dois valores.",
    ],
    assumptionsAndLimitations: [
      "A variação percentual é indefinida quando o valor inicial é zero.",
    ],
    faqs: [
      {
        question: "Qual a diferença entre variação (%) e diferença (%)?",
        answer:
          "Variação mede de um valor inicial para um final; diferença compara dois valores de forma simétrica.",
      },
      {
        question: "Por que +20% seguido de −20% não volta ao valor inicial?",
        answer:
          "Porque a redução de 20% incide sobre o valor já aumentado (100 → 120 → 96).",
      },
    ],
  },
  "average-calculator": {
    intro:
      "Calcule média aritmética, mediana, mínimo, máximo e média ponderada para notas, finanças ou relatórios.",
    resultExplanation:
      "No modo padrão exibe média e mediana; no modo ponderado multiplica cada item pelo seu peso.",
    formulaTitle: "Fórmulas de Média",
    formulas: [
      "Média Aritmética = (x₁ + x₂ + ... + xₙ) / n",
      "Média Ponderada = (w₁x₁ + ... + wₙxₙ) / (w₁ + ... + wₙ)",
    ],
    stepByStep: [
      "Some os valores e divida por n ou pela soma dos pesos.",
    ],
    workedExample: {
      title: "Média Ponderada Escolar",
      scenario: "Notas 82% (peso 30), 76% (30) e 90% (40).",
      calculationSteps: [
        "(2.460 + 2.280 + 3.600) / 100 = 83,4%.",
      ],
      outcome: "Média ponderada: 83,4%.",
    },
    howToUse: [
      "Escolha Média Aritmética ou Ponderada e preencha as linhas.",
    ],
    assumptionsAndLimitations: [
      "A soma dos pesos deve ser maior que zero.",
    ],
    faqs: [
      {
        question: "Os pesos precisam somar 100?",
        answer:
          "Não, qualquer valor positivo funciona pois a fórmula divide pela soma real dos pesos.",
      },
      {
        question: "Quando usar média ponderada?",
        answer:
          "Quando alguns valores têm maior importância ou carga horária.",
      },
    ],
  },
  "age-calculator": {
    intro:
      "Calcule sua idade exata em anos, meses e dias considerando meses de 28 a 31 dias e anos bissextos.",
    resultExplanation:
      "Exibe anos completos, meses, dias restantes, total de dias vividos e contagem para o próximo aniversário.",
    formulaTitle: "Regra de Idade no Calendário",
    formulas: [
      "Anos = Ano Alvo − Ano Nascimento (ajustado antes do aniversário)",
      "Dias Vividos = (Data Alvo UTC − Nascimento UTC) / 86.400.000 ms",
    ],
    stepByStep: [
      "Subtraia ano, mês e dia ajustando os dias exatos do mês anterior quando necessário.",
    ],
    workedExample: {
      title: "Nascimento em Ano Bissexto",
      scenario: "Nascido em 29 de fevereiro de 2000 em 24 de novembro de 2026.",
      calculationSteps: [
        "26 anos, 8 meses e 26 dias.",
      ],
      outcome: "Idade exata: 26 anos, 8 meses e 26 dias.",
    },
    howToUse: [
      "Escolha a data de nascimento e a data de referência no calendário.",
    ],
    assumptionsAndLimitations: [
      "Usa o calendário gregoriano em UTC.",
    ],
    faqs: [
      {
        question: "Inclui anos bissextos?",
        answer:
          "Sim, todos os dias 29 de fevereiro no intervalo são contados.",
      },
      {
        question: "Por que difere de dividir dias por 30?",
        answer:
          "Porque os meses civis têm entre 28 e 31 dias reais.",
      },
    ],
  },
  "date-calculator": {
    intro:
      "Some ou subtraia dias, semanas, meses e anos a qualquer data para prazos contratuais, vistos e entregas.",
    resultExplanation:
      "Exibe a nova data completa, formato ISO (AAAA-MM-DD) e dia da semana.",
    formulaTitle: "Ordem de Ajuste",
    formulas: [
      "Etapa 1: Anos e meses (limitado ao fim do mês)  |  Etapa 2: ± (Semanas × 7 + Dias)",
    ],
    stepByStep: [
      "Selecione data inicial, Somar (+) ou Subtrair (−) e informe os valores.",
    ],
    workedExample: {
      title: "31 de Janeiro + 1 Mês e 10 Dias",
      scenario: "31/01/2024 + 1 mês e 10 dias.",
      calculationSteps: [
        "31/01 + 1 mês = 29/02/2024 → +10 dias = 10/03/2024.",
      ],
      outcome: "Domingo, 10 de março de 2024.",
    },
    howToUse: [
      "Escolha a data e preencha os campos desejados.",
    ],
    assumptionsAndLimitations: [
      "Opera em datas UTC sem interferência de horário de verão.",
    ],
    faqs: [
      {
        question: "O que ocorre em 31 de janeiro + 1 mês?",
        answer:
          "Ajusta-se para o último dia válido de fevereiro (28 ou 29).",
      },
      {
        question: "Trata anos bissextos automaticamente?",
        answer:
          "Sim.",
      },
    ],
  },
  "days-between-dates-calculator": {
    intro:
      "Conte exatamente quantos dias e semanas há entre duas datas para contratos, viagens, aluguéis ou férias.",
    resultExplanation:
      "Mostra dias totais, semanas + dias e permite incluir o dia final (+1 dia).",
    formulaTitle: "Fórmula de Diferença de Dias",
    formulas: [
      "Dias = |Fim (UTC) − Início (UTC)| / 86.400.000",
    ],
    stepByStep: [
      "Normalize as datas em UTC e marque a opção inclusiva se o último dia contar.",
    ],
    workedExample: {
      title: "Férias Inclusivas",
      scenario: "De 2 a 6 de março de 2026 inclusive.",
      calculationSteps: [
        "4 dias + 1 = 5 dias.",
      ],
      outcome: "Total: 5 dias.",
    },
    howToUse: [
      "Selecione Data Inicial e Final.",
    ],
    assumptionsAndLimitations: [
      "Inclui fins de semana e feriados.",
    ],
    faqs: [
      {
        question: "Quando incluir o dia final?",
        answer:
          "Em férias ou eventos em que o primeiro e o último dia fazem parte do período.",
      },
      {
        question: "O horário de verão altera a contagem?",
        answer:
          "Não, graças à base UTC.",
      },
    ],
  },
  "discount-calculator": {
    intro:
      "Calcule rapidamente o preço final e a economia em promoções usando USD ($) ou INR (₹).",
    resultExplanation:
      "Exibe o preço com desconto e o valor economizado.",
    formulaTitle: "Fórmulas de Desconto",
    formulas: [
      "Desconto = Preço Original × (Taxa / 100)  |  Final = Original − Desconto",
    ],
    stepByStep: [
      "Multiplique o preço original pela taxa percentual e subtraia.",
    ],
    workedExample: {
      title: "Desconto de 25%",
      scenario: "Item de US$ 150 (₹ 12.000) com 25% off.",
      calculationSteps: [
        "Desconto: US$ 37,50 → Final: US$ 112,50.",
      ],
      outcome: "Você paga US$ 112,50 e economiza US$ 37,50.",
    },
    howToUse: [
      "Escolha moeda, preço original e percentual (0–100%).",
    ],
    assumptionsAndLimitations: [
      "Não adiciona impostos locais automaticamente.",
    ],
    faqs: [
      {
        question: "Como calcular descontos sucessivos (20% + 10%)?",
        answer:
          "Aplique 20% e depois aplique 10% sobre o resultado (equivalente a 28% total).",
      },
      {
        question: "A troca de moeda converte câmbio?",
        answer:
          "Não, apenas altera símbolo e formatação.",
      },
    ],
  },
  "profit-loss-calculator": {
    intro:
      "Avalie lucros, prejuízos, markup sobre custo e margem bruta em USD ou INR.",
    resultExplanation:
      "Separa Markup (sobre o custo) e Margem (sobre a venda).",
    formulaTitle: "Fórmulas de Lucro, Margem e Markup",
    formulas: [
      "Lucro = Venda − Custo  |  Markup % = (Lucro / Custo) × 100  |  Margem % = (Lucro / Venda) × 100",
    ],
    stepByStep: [
      "Subtraia custo da venda e divida pelo custo ou pela venda.",
    ],
    workedExample: {
      title: "Margem vs. Markup",
      scenario: "Custo US$ 80, venda US$ 100.",
      calculationSteps: [
        "Lucro US$ 20 → Markup 25%, Margem 20%.",
      ],
      outcome: "Lucro de US$ 20 (25% markup / 20% margem).",
    },
    howToUse: [
      "Escolha moeda, informe custo (> 0) e preço de venda.",
    ],
    assumptionsAndLimitations: [
      "Inclua frete e taxas no custo para obter margem líquida.",
    ],
    faqs: [
      {
        question: "Por que a margem é menor que o markup?",
        answer:
          "Porque divide o mesmo lucro por um preço de venda maior.",
      },
      {
        question: "E se os preços forem iguais?",
        answer:
          "Exibe ponto de equilíbrio (0 lucro, 0%).",
      },
    ],
  },
  "ratio-calculator": {
    intro:
      "Simplifique razões múltiplas, compare proporções ou resolva regra de três A : B = C : X.",
    resultExplanation:
      "Usa MDC para simplificar e multiplicação cruzada para encontrar X.",
    formulaTitle: "Fórmulas de Proporção",
    formulas: [
      "Simplificada = (A / MDC) : (B / MDC)  |  A : B = C : X ⇒ X = (B × C) / A",
    ],
    stepByStep: [
      "Divida pelo MDC para simplificar ou resolva X = (B × C) / A.",
    ],
    workedExample: {
      title: "Simplificar 12 : 18 : 30",
      scenario: "Reduzir 12 : 18 : 30.",
      calculationSteps: [
        "MDC = 6 → 2 : 3 : 5.",
      ],
      outcome: "Razão simplificada: 2 : 3 : 5.",
    },
    howToUse: [
      "Selecione Simplificar, Resolver ou Comparar.",
    ],
    assumptionsAndLimitations: [
      "Exige números positivos diferentes de zero.",
    ],
    faqs: [
      {
        question: "Aceita 3 ou mais números?",
        answer:
          "Sim, use o botão Adicionar Termo.",
      },
      {
        question: "16:9 equivale a 1920:1080?",
        answer:
          "Sim, ambos valem 1,777778.",
      },
    ],
  },
  "fraction-calculator": {
    intro:
      "Some, subtraia, multiplique ou divida frações com simplificação automática, número misto e decimal.",
    resultExplanation:
      "Exibe fração irredutível, número misto e valor decimal.",
    formulaTitle: "Regras de Frações",
    formulas: [
      "(a/b) ± (c/d) = (ad ± bc) / bd  |  (a/b) × (c/d) = ac / bd  |  (a/b) ÷ (c/d) = ad / bc",
    ],
    stepByStep: [
      "Aplique a operação e reduza pelo MDC.",
    ],
    workedExample: {
      title: "3/4 + 5/6",
      scenario: "Somar frações.",
      calculationSteps: [
        "(18 + 20) / 24 = 38/24 = 19/12 = 1 7/12.",
      ],
      outcome: "19/12 ou 1 7/12.",
    },
    howToUse: [
      "Informe numeradores inteiros e denominadores ≠ 0.",
    ],
    assumptionsAndLimitations: [
      "Denominadores nulos não são permitidos.",
    ],
    faqs: [
      {
        question: "Por que mostra 19/12 e 1 7/12?",
        answer:
          "19/12 é a fração imprópria simplificada e 1 7/12 o número misto.",
      },
      {
        question: "Aceita frações negativas?",
        answer:
          "Sim, coloque o sinal no numerador.",
      },
    ],
  },
  "time-calculator": {
    intro:
      "Some ou subtraia horas e minutos em base 60 para controle de horas, estudos e viagens.",
    resultExplanation:
      "Converte para minutos totais e retorna horas, minutos e dias.",
    formulaTitle: "Aritmética Base 60",
    formulas: [
      "Minutos Totais = (H₁ × 60 + M₁) ± (H₂ × 60 + M₂)",
    ],
    stepByStep: [
      "Converta para minutos totais, opere e divida por 60.",
    ],
    workedExample: {
      title: "Somar Jornadas",
      scenario: "4h 45m + 3h 35m.",
      calculationSteps: [
        "285 + 215 = 500 min = 8h 20m.",
      ],
      outcome: "8h 20m (500 minutos).",
    },
    howToUse: [
      "Informe horas e minutos e escolha + ou −.",
    ],
    assumptionsAndLimitations: [
      "Minutos ≥ 60 são convertidos automaticamente para horas.",
    ],
    faqs: [
      {
        question: "E se eu digitar 90 minutos?",
        answer:
          "0h 90m é ajustado para 1h 30m.",
      },
      {
        question: "Como converter para horas decimais?",
        answer:
          "Divida o total de minutos por 60.",
      },
    ],
  },
  "time-duration-calculator": {
    intro:
      "Calcule horas, minutos e horas decimais entre início e fim, inclusive turnos noturnos que passam da meia-noite.",
    resultExplanation:
      "No modo noturno soma 24 horas quando o fim é anterior ao início.",
    formulaTitle: "Duração entre Horários",
    formulas: [
      "Decorrido = Fim − Início (+ 1.440 min após meia-noite)",
    ],
    stepByStep: [
      "Converta os dois horários em minutos desde a meia-noite e divida por 60.",
    ],
    workedExample: {
      title: "Turno Noturno",
      scenario: "Das 22:15 às 06:45.",
      calculationSteps: [
        "405 − 1.335 + 1.440 = 510 min = 8h 30m (8,5 h).",
      ],
      outcome: "8h 30m (8,50 horas decimais).",
    },
    howToUse: [
      "Selecione Hora Inicial e Final.",
    ],
    assumptionsAndLimitations: [
      "Mede intervalos de até 24 horas.",
    ],
    faqs: [
      {
        question: "Por que exibir horas decimais?",
        answer:
          "Para multiplicar facilmente por valores horários (8h 30m = 8,5 h).",
      },
      {
        question: "Se início e fim forem iguais?",
        answer:
          "Resultado 0h 0m (0 minutos).",
      },
    ],
  },
  "unit-converter": {
    intro:
      "Converta Comprimento, Peso, Temperatura, Volume, Velocidade e Área entre sistemas métrico e imperial.",
    resultExplanation:
      "Usa definições internacionais exatas (1 pol = 2,54 cm, 1 lb = 0,45359237 kg).",
    formulaTitle: "Constantes Métrico–Imperiais",
    formulas: [
      "1 pol = 2,54 cm  |  1 lb = 0,45359237 kg  |  °F = (°C × 9/5) + 32",
    ],
    stepByStep: [
      "Escolha a categoria, unidade de origem e unidade de destino.",
    ],
    workedExample: {
      title: "kg para lb e °F para °C",
      scenario: "72 kg e 100 °F.",
      calculationSteps: [
        "72 ÷ 0,45359237 = 158,73 lb ; (100 − 32) × 5/9 = 37,78 °C.",
      ],
      outcome: "72 kg ≈ 158,73 lb e 100 °F = 37,78 °C.",
    },
    howToUse: [
      "Selecione categoria, valor e unidades.",
    ],
    assumptionsAndLimitations: [
      "Volumes utilizam padrão americano (1 galão US = 3,7854 L).",
    ],
    faqs: [
      {
        question: "Os fatores são exatos?",
        answer:
          "Sim, seguem referências NIST/SI.",
      },
      {
        question: "Diferença entre galão US e UK?",
        answer:
          "Galão US = 3,785 L; galão UK = 4,546 L.",
      },
    ],
  },
  "bmi-calculator": {
    intro:
      "Calcule o Índice de Massa Corporal (IMC) para adultos em unidades métricas (kg/cm) ou imperiais (lb/ft/in).",
    resultExplanation:
      "Mostra IMC numérico, classificação OMS/CDC e faixa de peso saudável.",
    formulaTitle: "Fórmula do IMC",
    formulas: [
      "Métrico: Peso (kg) / [Altura (m)]²  |  Imperial: 703 × Peso (lb) / [Altura (in)]²",
    ],
    stepByStep: [
      "Eleve a altura ao quadrado e divida o peso por esse valor.",
    ],
    workedExample: {
      title: "Exemplo Adulto",
      scenario: "172 cm e 70 kg.",
      calculationSteps: [
        "70 ÷ (1,72 × 1,72) = 23,7 (Peso normal).",
      ],
      outcome: "IMC = 23,7 kg/m².",
    },
    howToUse: [
      "Escolha o sistema e digite altura e peso.",
    ],
    assumptionsAndLimitations: [
      "Aplicável a adultos com 20+ anos ; não distingue músculos de gordura.",
    ],
    medicalDisclaimer:
      "O IMC é apenas um indicador de triagem e não substitui avaliação médica.",
    faqs: [
      {
        question: "Serve para crianças?",
        answer:
          "Não, crianças e jovens usam gráficos de percentis por idade e sexo.",
      },
      {
        question: "Diferencia músculo e gordura?",
        answer:
          "Não; atletas podem ter IMC alto mesmo com pouca gordura.",
      },
    ],
  },
  "bmr-calculator": {
    intro:
      "Estime sua Taxa Metabólica Basal (TMB) em repouso pela equação Mifflin-St Jeor.",
    resultExplanation:
      "Resultado em kcal/dia para combinar com atividade física na calculadora TDEE.",
    formulaTitle: "Equação Mifflin-St Jeor",
    formulas: [
      "Homem: (10 × kg) + (6,25 × cm) − (5 × idade) + 5",
      "Mulher: (10 × kg) + (6,25 × cm) − (5 × idade) − 161",
    ],
    stepByStep: [
      "Converta para cm e kg e aplique a constante do sexo.",
    ],
    workedExample: {
      title: "Mulher de 30 Anos",
      scenario: "165 cm e 62 kg.",
      calculationSteps: [
        "620 + 1.031,25 − 150 − 161 = 1.340,25 kcal/dia.",
      ],
      outcome: "TMB ≈ 1.340 kcal/dia.",
    },
    howToUse: [
      "Escolha unidades, sexo, idade, altura e peso.",
    ],
    assumptionsAndLimitations: [
      "Estimativa estatística com margem aproximada de ±10%.",
    ],
    medicalDisclaimer:
      "Valor educativo apenas; não faça dietas abaixo da TMB sem médico.",
    faqs: [
      {
        question: "Por que Mifflin-St Jeor?",
        answer:
          "É considerada mais precisa hoje do que Harris-Benedict.",
      },
      {
        question: "Devo ingerir exatamente minha TMB para emagrecer?",
        answer:
          "Não, calcule primeiro o TDEE considerando seu movimento diário.",
      },
    ],
  },
  "tdee-calculator": {
    intro:
      "Calcule seu Gasto Energético Diário Total (TDEE) e calorias de manutenção combinando TMB e atividade semanal.",
    resultExplanation:
      "Mostra calorias de manutenção, TMB base e fator selecionado.",
    formulaTitle: "Fórmula TDEE",
    formulas: [
      "TDEE = TMB × Fator de Atividade (1,2 a 1,9)",
    ],
    stepByStep: [
      "Calcule a TMB e multiplique pelo nível de atividade real.",
    ],
    workedExample: {
      title: "Adulto Moderadamente Ativo",
      scenario: "Homem 32 anos, 178 cm, 78 kg, fator 1,55.",
      calculationSteps: [
        "1.738 × 1,55 = 2.693 kcal/dia.",
      ],
      outcome: "Manutenção estimada: ~2.693 kcal/dia.",
    },
    howToUse: [
      "Informe dados físicos e nível semanal de atividade.",
    ],
    assumptionsAndLimitations: [
      "Ajuste conforme tendência de peso ao longo de 2–4 semanas.",
    ],
    medicalDisclaimer:
      "Estimativa informativa, não substitui nutricionista ou médico.",
    faqs: [
      {
        question: "Diferença entre TMB e TDEE?",
        answer:
          "TMB mede repouso absoluto; TDEE inclui atividades diárias e treinos.",
      },
      {
        question: "Qual nível para quem treina 3×/semana?",
        answer:
          "Geralmente Leve (1,375) ou Moderado (1,55) em trabalho de escritório.",
      },
    ],
  },
  "calorie-calculator": {
    intro:
      "Estime calorias diárias para manter, perder ou ganhar peso gradualmente com pisos mínimos de segurança.",
    resultExplanation:
      "Apresenta manutenção e meta ajustada respeitando limites de 1.200 kcal (mulher) e 1.500 kcal (homem).",
    formulaTitle: "Calorias por Objetivo",
    formulas: [
      "Meta = TDEE ± 250 ou ± 500 kcal/dia (pisos 1.200 / 1.500 kcal)",
    ],
    stepByStep: [
      "Calcule o TDEE e aplique o ajuste escolhido.",
    ],
    workedExample: {
      title: "Déficit Moderado",
      scenario: "TDEE 2.200 kcal com −500 kcal/dia.",
      calculationSteps: [
        "2.200 − 500 = 1.700 kcal/dia.",
      ],
      outcome: "Meta estimada: 1.700 kcal/dia.",
    },
    howToUse: [
      "Informe medidas, atividade e objetivo.",
    ],
    assumptionsAndLimitations: [
      "Dietas muito baixas exigem acompanhamento médico.",
    ],
    medicalDisclaimer:
      "Estimativa geral apenas; consulte médico ou nutricionista.",
    faqs: [
      {
        question: "Por que há piso de 1.200 / 1.500 kcal?",
        answer:
          "Para evitar deficiências de vitaminas, minerais e proteínas sem supervisão.",
      },
      {
        question: "Qual a precisão?",
        answer:
          "Cerca de ±10–15% como ponto inicial.",
      },
    ],
  },
  "ideal-weight-calculator": {
    intro:
      "Compare Devine, Robinson, Miller e Hamwi lado a lado com a faixa saudável de IMC em kg e libras.",
    resultExplanation:
      "Mostra referências históricas junto à banda IMC 18,5–24,9.",
    formulaTitle: "Fórmulas de Peso de Referência",
    formulas: [
      "Devine, Robinson, Miller e Hamwi baseadas na altura acima de 5 pés (152,4 cm)",
    ],
    stepByStep: [
      "Converta a altura em polegadas acima de 60 e aplique cada equação.",
    ],
    workedExample: {
      title: "Para 177,8 cm (70 pol)",
      scenario: "Homem adulto.",
      calculationSteps: [
        "Devine 73,0 kg · Robinson 71,0 kg · Miller 70,3 kg · Faixa IMC 58,5–78,7 kg.",
      ],
      outcome: "Estimativas entre 70–75 kg dentro da faixa saudável 58,5–78,7 kg.",
    },
    howToUse: [
      "Escolha sistema, sexo e altura.",
    ],
    assumptionsAndLimitations: [
      "Fórmulas criadas originalmente para dosagem clínica de medicamentos.",
    ],
    medicalDisclaimer:
      "Referências estatísticas apenas; converse com um profissional de saúde.",
    faqs: [
      {
        question: "Por que dão valores diferentes?",
        answer:
          "Foram derivadas de populações diferentes entre 1964 e 1983.",
      },
      {
        question: "Devine é diagnóstico médico?",
        answer:
          "Não.",
      },
    ],
  },
  "body-fat-calculator": {
    intro:
      "Estime o percentual de gordura corporal pelo método da Marinha dos EUA com medidas de pescoço, cintura, quadril e altura.",
    resultExplanation:
      "Exibe percentual estimado, massa gorda e massa magra (quando peso é informado).",
    formulaTitle: "Fórmula Logarítmica US Navy",
    formulas: [
      "Homens: 495 / (1,0324 − 0,19077 × log₁₀(cintura − pescoço) + 0,15456 × log₁₀(altura)) − 450",
    ],
    stepByStep: [
      "Meça com fita métrica e aplique a equação logarítmica.",
    ],
    workedExample: {
      title: "Exemplo Masculino",
      scenario: "178 cm, pescoço 38 cm, cintura 86 cm, 76 kg.",
      calculationSteps: [
        "86 − 38 = 48 cm → ≈ 17,1% de gordura.",
      ],
      outcome: "17,1% (~13,0 kg massa gorda / 63,0 kg massa magra).",
    },
    howToUse: [
      "Escolha unidades e insira medidas.",
    ],
    assumptionsAndLimitations: [
      "Margem aproximada de ±3% a ±5% frente ao exame DEXA.",
    ],
    medicalDisclaimer:
      "Estimativa fitness apenas, não substitui avaliação clínica.",
    faqs: [
      {
        question: "Onde medir a cintura?",
        answer:
          "No umbigo para homens e na parte mais estreita para mulheres.",
      },
      {
        question: "Por que usar além do IMC?",
        answer:
          "Permite acompanhar alterações na cintura mesmo quando o peso estabiliza.",
      },
    ],
  },
  "protein-calculator": {
    intro:
      "Estime sua ingestão diária de proteínas em gramas conforme peso corporal e objetivo físico.",
    resultExplanation:
      "Apresenta faixa prática mínima–máxima e ponto médio.",
    formulaTitle: "Faixas de Proteína",
    formulas: [
      "Geral 0,8–1,0 g/kg · Ativo 1,2–1,5 g/kg · Força 1,6–2,0 g/kg",
    ],
    stepByStep: [
      "Multiplique seu peso em kg pelos fatores do objetivo.",
    ],
    workedExample: {
      title: "Adulto Ativo (70 kg)",
      scenario: "Objetivo Ativo (1,2–1,5 g/kg).",
      calculationSteps: [
        "84 g a 105 g/dia.",
      ],
      outcome: "Faixa estimada: 84–105 g/dia (média 95 g).",
    },
    howToUse: [
      "Informe peso e escolha objetivo.",
    ],
    assumptionsAndLimitations: [
      "Condições renais ou hepáticas exigem orientação médica específica.",
    ],
    medicalDisclaimer:
      "Diretriz educativa geral, não substitui prescrição nutricional.",
    faqs: [
      {
        question: "Qual a recomendação básica (RDA)?",
        answer:
          "0,8 g por kg por dia para adultos sedentários.",
      },
      {
        question: "Vale para dietas vegetarianas?",
        answer:
          "Sim, variando leguminosas, soja, grãos e oleaginosas.",
      },
    ],
  },
  "water-intake-calculator": {
    intro:
      "Estime quanta água beber por dia em litros, mililitros, onças e copos conforme peso, exercício e clima.",
    resultExplanation:
      "Converte automaticamente entre litros, mL, fl oz e copos de 8 oz.",
    formulaTitle: "Estimativa de Hidratação",
    formulas: [
      "Base (mL) = Peso (kg) × 33 mL  +  Treino (+350 mL/30 min)  +  Clima Quente (+300 mL)",
    ],
    stepByStep: [
      "Multiplique o peso por 33 mL e adicione extras de exercício e clima.",
    ],
    workedExample: {
      title: "Clima Quente",
      scenario: "68 kg, 45 min de treino, clima quente.",
      calculationSteps: [
        "2.244 + 525 + 300 = 3.069 mL ≈ 3,07 L.",
      ],
      outcome: "Estimativa diária ≈ 3,07 litros (104 fl oz).",
    },
    howToUse: [
      "Informe peso, minutos de exercício e clima.",
    ],
    assumptionsAndLimitations: [
      "Cerca de 20% dos líquidos vêm de frutas, verduras e sopas.",
    ],
    medicalDisclaimer:
      "Não substitui restrições hídricas médicas em doenças cardíacas ou renais.",
    faqs: [
      {
        question: "Chá, café e leite contam?",
        answer:
          "Sim, contribuem para a hidratação diária.",
      },
      {
        question: "Beber água demais faz mal?",
        answer:
          "Sim, excessos rápidos sem eletrólitos podem diluir o sódio sanguíneo.",
      },
    ],
  },
  "pregnancy-weeks-to-months": {
    intro:
      "Converta semanas e dias de gestação em mês aproximado e trimestre clínico.",
    resultExplanation:
      "Um mês civil tem em média ~4,33 semanas (30,44 dias), por isso 40 semanas equivalem a cerca de 9 meses e 1 semana.",
    formulaTitle: "Mapeamento 40 Semanas → 9 Meses",
    formulas: [
      "Mês ≈ min(9, ceil((Semanas + Dias/7) / 4,33))",
    ],
    stepByStep: [
      "Divida as semanas decimais por 4,33 e identifique o trimestre.",
    ],
    workedExample: {
      title: "24 Semanas e 3 Dias",
      scenario: "Gestação de 24s 3d.",
      calculationSteps: [
        "24,43 ÷ 4,33 ≈ 5,64 → 6º mês (2º trimestre).",
      ],
      outcome: "Aproximadamente 6º mês e 2º trimestre.",
    },
    howToUse: [
      "Informe semanas (0–42) e dias (0–6).",
    ],
    assumptionsAndLimitations: [
      "Obstetras acompanham a gestação por semanas exatas.",
    ],
    medicalDisclaimer:
      "Referência informativa; confie sempre na datação do seu pré-natal.",
    faqs: [
      {
        question: "Por que 40 semanas equivalem a 9 meses e não 10?",
        answer:
          "Porque quase todos os meses têm 30 ou 31 dias (~4,33 semanas).",
      },
      {
        question: "Quando começa o 2º trimestre?",
        answer:
          "Em 14 semanas e 0 dias.",
      },
    ],
  },
  "pregnancy-due-date-calculator": {
    intro:
      "Estime a data provável do parto (DPP), semana gestacional atual e trimestre pela última menstruação e duração do ciclo.",
    resultExplanation:
      "Aplica a regra padrão de 280 dias ajustada pela diferença do seu ciclo frente a 28 dias.",
    formulaTitle: "Regra dos 280 Dias",
    formulas: [
      "DPP = DUM + 280 dias + (Ciclo − 28 dias)",
    ],
    stepByStep: [
      "Some 280 dias à data da última menstruação mais o ajuste do ciclo.",
    ],
    workedExample: {
      title: "Ciclo de 28 Dias",
      scenario: "DUM em 1º de junho de 2026.",
      calculationSteps: [
        "1º de junho de 2026 + 280 dias = 8 de março de 2027.",
      ],
      outcome: "Data estimada do parto: 8 de março de 2027.",
    },
    howToUse: [
      "Selecione a data da última menstruação e duração média do ciclo.",
    ],
    assumptionsAndLimitations: [
      "O ultrassom do 1º trimestre é mais preciso que a data pela DUM.",
    ],
    medicalDisclaimer:
      "Estimativa orientativa apenas; não substitui o pré-natal nem o ultrassom.",
    faqs: [
      {
        question: "Qual a precisão pela última menstruação?",
        answer:
          "Boa estimativa inicial em ciclos regulares; confirmada pelo ultrassom precoce.",
      },
      {
        question: "Por que contar da última menstruação?",
        answer:
          "Porque a data exata da fecundação raramente é conhecida.",
      },
    ],
  },
  "pregnancy-calculator": {
    intro:
      "Veja quantas semanas e dias de gravidez você está hoje, progresso percentual e trimestre via DUM ou DPP.",
    resultExplanation:
      "Calcula dias decorridos em uma gestação padrão de 280 dias.",
    formulaTitle: "Cálculo Gestacional Duplo",
    formulas: [
      "Progresso % = (Dias Decorridos / 280) × 100",
    ],
    stepByStep: [
      "Escolha calcular pela última menstruação ou pela data prevista do parto.",
    ],
    workedExample: {
      title: "A Partir da DPP",
      scenario: "DPP em 15/03/2027 verificada em 24/11/2026.",
      calculationSteps: [
        "169 dias = 24 semanas e 1 dia (60,4%, 2º trimestre).",
      ],
      outcome: "24 semanas e 1 dia.",
    },
    howToUse: [
      "Alterne entre DUM ou DPP e escolha as datas.",
    ],
    assumptionsAndLimitations: [
      "Baseado no padrão de 280 dias; siga a data confirmada no pré-natal.",
    ],
    medicalDisclaimer:
      "Resultados exclusivamente informativos; consulte seu obstetra.",
    faqs: [
      {
        question: "Qual método usar: DUM ou DPP?",
        answer:
          "Se o médico já confirmou a DPP por ultrassom, use a DPP.",
      },
      {
        question: "O que significa 100%?",
        answer:
          "Completar 40 semanas (280 dias).",
      },
    ],
  },
  "ovulation-calculator": {
    intro:
      "Estime sua próxima menstruação, dia provável da ovulação e período fértil com base na última menstruação e ciclo.",
    resultExplanation:
      "Subtrai 14 dias da próxima menstruação prevista e destaca a janela fértil de 6 dias.",
    formulaTitle: "Estimativa da Fase Lútea",
    formulas: [
      "Próxima Menstruação = DUM + Ciclo  |  Ovulação = Próxima − 14 dias",
    ],
    stepByStep: [
      "Some a duração do ciclo e subtraia 14 dias.",
    ],
    workedExample: {
      title: "Ciclo de 30 Dias",
      scenario: "DUM em 1º de novembro de 2026.",
      calculationSteps: [
        "Próxima: 1º dez. · Ovulação: 17 nov. · Fértil: 12–17 nov.",
      ],
      outcome: "Ovulação estimada por volta de 17 de novembro.",
    },
    howToUse: [
      "Informe DUM e duração média do ciclo (21–45 dias).",
    ],
    assumptionsAndLimitations: [
      "NÃO É MÉTODO CONTRACEPTIVO: a ovulação varia e não deve ser usada para evitar gravidez.",
    ],
    medicalDisclaimer:
      "Estimativa apenas; NUNCA utilize como método contraceptivo.",
    faqs: [
      {
        question: "Posso usar como anticoncepcional?",
        answer:
          "Não. Cálculos de calendário não impedem gravidez.",
      },
      {
        question: "E se meu ciclo for irregular?",
        answer:
          "Testes de LH ou avaliação médica oferecem maior precisão.",
      },
    ],
  },
};
