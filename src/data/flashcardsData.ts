import { Flashcard } from '../types';

export const FLASHCARDS_DATA: Flashcard[] = [
  {
    id: 'f1',
    topic: 'Fundamentos',
    front: 'O que diferencia Dado de Informação na pirâmide DIKW?',
    back: 'O Dado é o fato bruto, sem significado isolado (ex: "39"). A Informação é o dado contextualizado e organizado (ex: "39°C de febre").',
    macete: 'Macete: Dado é o tijolo; Informação é a parede construída.'
  },
  {
    id: 'f2',
    topic: 'Fundamentos',
    front: 'Qual a ordem correta dos 4 níveis da pirâmide DIKW?',
    back: '1. Dado (Data)\n2. Informação (Information)\n3. Conhecimento (Knowledge)\n4. Sabedoria (Wisdom)',
    macete: 'Mnemônico: D-I-C-S (Dado, Informação, Conhecimento, Sabedoria).'
  },
  {
    id: 'f3',
    topic: 'Estruturas',
    front: 'Arquivos JSON e XML são estruturados, semiestruturados ou não estruturados?',
    back: 'SEMIESTRUTURADOS! Não são tabelas relacionais SQL, mas contêm tags/chaves internas auto-descritivas.',
    macete: 'Caiu JSON ou XML na prova? Resposta certa: Semiestruturado.'
  },
  {
    id: 'f4',
    topic: 'Big Data',
    front: 'Quais são os 5 "Vs" fundamentais do Big Data?',
    back: 'Volume, Velocidade, Variedade, Veracidade e Valor.',
    macete: 'Mnemônico dos 5Vs: "Vo-Ve-Va-Ve-Va" (Volume, Velocidade, Variedade, Veracidade, Valor).'
  },
  {
    id: 'f5',
    topic: 'Big Data',
    front: 'Qual "V" de Big Data trata da confiabilidade e qualidade dos dados?',
    back: 'VERACIDADE. Trata de filtrar ruídos, inconsistências e garantir que o dado é verdadeiro.',
    macete: 'Veracidade = Verdade e integridade dos dados.'
  },
  {
    id: 'f6',
    topic: 'Arquitetura',
    front: 'Data Warehouse vs Data Lake: Quem usa Schema-on-Write e quem usa Schema-on-Read?',
    back: 'Data Warehouse usa Schema-on-Write (esquema definido antes de salvar, dados estruturados limpos).\nData Lake usa Schema-on-Read (dados brutos gravados primeiro, estrutura interpretada na leitura).',
    macete: 'DW = Write (escrita arrumada) | Lake = Read (lago livre para nadar).'
  },
  {
    id: 'f7',
    topic: 'Arquitetura',
    front: 'Qual a diferença central entre ETL e ELT?',
    back: 'No ETL, a transformação é feita antes de carregar no repositório final. No ELT, os dados brutos são carregados primeiro no lago/nuvem e a transformação é feita sob demanda.',
    macete: 'Olhe a ordem das letras: T antes do L = transforma antes; L antes do T = carrega antes.'
  },
  {
    id: 'f8',
    topic: 'Metodologias',
    front: 'Qual é a fase do CRISP-DM que mais consome tempo e esforço do cientista de dados?',
    back: 'PREPARAÇÃO DOS DADOS (Data Preparation) — consome cerca de 70% a 80% de todo o tempo do projeto.',
    macete: 'Pegadinha mortal: NÃO é modelagem! É preparação/limpeza de dados.'
  },
  {
    id: 'f9',
    topic: 'Metodologias',
    front: 'Quais são as 6 fases do CRISP-DM na sequência?',
    back: '1. Entendimento do Negócio\n2. Entendimento dos Dados\n3. Preparação dos Dados\n4. Modelagem\n5. Avaliação\n6. Implantação (Deployment)',
    macete: 'Mnemônico: N-D-P-M-A-I (Negócio, Dados, Preparo, Modelo, Avaliação, Implantação).'
  },
  {
    id: 'f10',
    topic: 'Pré-processamento',
    front: 'Quando há valores ausentes (missing) e presença de outliers fortes, qual medida estatística é melhor para imputação: Média ou Mediana?',
    back: 'MEDIANA! Porque a média é puxada pelos valores extremos (outliers), enquanto a mediana é resistente.',
    macete: 'Outlier no meio? Média não, Mediana sim!'
  },
  {
    id: 'f11',
    topic: 'Pré-processamento',
    front: 'Qual a diferença entre Normalização (Min-Max) e Padronização (Z-score)?',
    back: 'Normalização comprime os dados no intervalo fixo [0, 1].\nPadronização transforma a distribuição para ter Média = 0 e Desvio Padrão = 1 (sem limites fixos).',
    macete: 'Normaliza = limita a 0 e 1 | Padroniza = média zero e desvio um.'
  },
  {
    id: 'f12',
    topic: 'Machine Learning',
    front: 'Qual a diferença entre tarefas de Classificação e Regressão no aprendizado supervisionado?',
    back: 'Classificação prevê um rótulo discreto/classe (ex: Spam/Não Spam, Doente/Sadio).\nRegressão prevê um valor numérico contínuo (ex: Preço da casa R$, Salário, Temperatura).',
    macete: 'Classificação = Categoria | Regressão = R$ / Régua de números.'
  },
  {
    id: 'f13',
    topic: 'Machine Learning',
    front: 'Regressão Logística é usada para Classificação ou para Regressão numérica?',
    back: 'CLASSIFICAÇÃO! Ela calcula probabilidades binárias usando a curva sigmoide para prever classes (ex: 0 ou 1, Sim ou Não).',
    macete: 'Regressão Logística tem nome de regressão, mas o trabalho dela é CLASSIFICAR!'
  },
  {
    id: 'f14',
    topic: 'Machine Learning',
    front: 'O algoritmo K-Means é supervisionado ou não supervisionado? E para que serve?',
    back: 'NÃO SUPERVISIONADO. Serve para CLUSTERIZAÇÃO (agrupamento de instâncias semelhantes sem rótulo prévio).',
    macete: 'K-Means = Não supervisionado + Clusters (K grupos definidos pelo usuário).'
  },
  {
    id: 'f15',
    topic: 'Desempenho',
    front: 'O que é Overfitting (Sobreajuste)?',
    back: 'Ocorre quando o modelo decora os dados de treino com perfeição (inclusive ruídos), mas erra feio em dados novos de teste. Possui Baixo Viés e Alta Variância.',
    macete: 'Overfitting = O modelo "decoreba" que tira 10 no simulado e zera na prova.'
  },
  {
    id: 'f16',
    topic: 'Desempenho',
    front: 'Qual técnica de regularização pode zerar os coeficientes de features irrelevantes: Lasso (L1) ou Ridge (L2)?',
    back: 'LASSO (L1)! O Lasso zera coeficientes e faz seleção automática de features. O Ridge (L2) apenas encolhe os coeficientes próximos de zero.',
    macete: 'Lasso = "Laça" e elimina a variável (Zera).'
  },
  {
    id: 'f17',
    topic: 'Métricas',
    front: 'Na Matriz de Confusão, o que é o Erro Tipo I e o Erro Tipo II?',
    back: 'Erro Tipo I = Falso Positivo (FP) - alarme falso (ex: condenar um inocente).\nErro Tipo II = Falso Negativo (FN) - omissão grave (ex: liberar o culpado ou dizer que o doente está sadio).',
    macete: 'Tipo I = Falso Positivo | Tipo II = Falso Negativo (II risquinhos = FN).'
  },
  {
    id: 'f18',
    topic: 'Métricas',
    front: 'O que é o Paradoxo da Acurácia?',
    back: 'Em bases desbalanceadas (ex: 99% de não-fraudes e 1% de fraudes), um modelo que sempre chuta a classe majoritária tem 99% de acurácia, mas é 100% inútil para pegar fraudes.',
    macete: 'Base desbalanceada? NUNCA confie apenas na Acurácia!'
  },
  {
    id: 'f19',
    topic: 'Métricas',
    front: 'Qual a diferença prática entre Precisão e Recall (Sensibilidade)?',
    back: 'Precisão = VP / (VP + FP) → De tudo que o modelo disse ser positivo, quanto ele acertou?\nRecall = VP / (VP + FN) → De todos os casos reais positivos do mundo, quantos o modelo achou?',
    macete: 'Recall busca não deixar passar nenhum doente/fraude (reduz FN). Precisão busca não dar alarme falso (reduz FP).'
  },
  {
    id: 'f20',
    topic: 'Métricas',
    front: 'O que é o F1-Score?',
    back: 'É a média harmônica entre a Precisão e o Recall. É a métrica ideal quando precisamos de equilíbrio entre Precisão e Recall em dados desbalanceados.',
    macete: 'F1-Score = 2 * (Precisão * Recall) / (Precisão + Recall).'
  }
];
