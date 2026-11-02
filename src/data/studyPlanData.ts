import { StudyDay } from '../types';

export const STUDY_PLAN_DATA: StudyDay[] = [
  // SEMANA 1: FUNDAMENTOS & ESTRUTURAS
  {
    day: 1,
    week: 1,
    title: 'A Pirâmide DIKW e a essência dos dados',
    description: 'Compreender a escala de Dado até Sabedoria e não cair nas inversões das bancas.',
    topics: ['Dado vs Informação', 'Conhecimento vs Sabedoria', 'Exemplos práticos de banca'],
    durationMinutes: 40,
    actionItems: ['Ler o Módulo 1 (DIKW)', 'Fazer as questões 1 e 2', 'Revisar flashcards f1 e f2']
  },
  {
    day: 2,
    week: 1,
    title: 'Estruturados vs Não Estruturados',
    description: 'Entender bancos relacionais, tabelas e dados multimídia livres.',
    topics: ['Tabelas e SQL', 'Texto livre, imagens e áudios', 'Volume de dados no mundo'],
    durationMinutes: 40,
    actionItems: ['Ler a primeira parte do Módulo 2', 'Identificar exemplos no seu cotidiano']
  },
  {
    day: 3,
    week: 1,
    title: 'Dados Semiestruturados: O queridinho das bancas',
    description: 'Dominar JSON, XML e arquivos de log. Decorar que eles são semiestruturados!',
    topics: ['Estrutura do JSON', 'Tags XML', 'Bancos NoSQL orientados a documentos'],
    durationMinutes: 45,
    actionItems: ['Ler a seção de Semiestruturados no Módulo 2', 'Resolver questão 3 e 4', 'Flashcard f3']
  },
  {
    day: 4,
    week: 1,
    title: 'Big Data: Os 3Vs originais de Doug Laney',
    description: 'Volume, Velocidade e Variedade. Por que bancos relacionais não aguentavam.',
    topics: ['Escalabilidade horizontal vs vertical', 'Streaming em tempo real', 'Heterogeneidade'],
    durationMinutes: 40,
    actionItems: ['Ler Módulo 3 (Big Data)', 'Revisar glossário de termos']
  },
  {
    day: 5,
    week: 1,
    title: 'Big Data: Os 5Vs e os novos Vs de concurso',
    description: 'Veracidade (qualidade/ruído) e Valor (negócio). Variabilidade e Validade.',
    topics: ['Veracidade e ruídos', 'Retorno financeiro e social (Valor)', 'Vs adicionais'],
    durationMinutes: 45,
    actionItems: ['Fazer questões 5 e 6', 'Flashcards f4 e f5']
  },
  {
    day: 6,
    week: 1,
    title: 'Revisão da Semana 1 & Mini Simulado',
    description: 'Fixação de DIKW, tipos de dados e os 5Vs de Big Data.',
    topics: ['Revisão ativa', 'Identificação de dúvidas'],
    durationMinutes: 50,
    actionItems: ['Refazer todas as questões da Semana 1', 'Revisar os 5 primeiros flashcards']
  },
  {
    day: 7,
    week: 1,
    title: 'Dia de Descanso ou Consolidação Leve',
    description: 'Deixe o cérebro consolidar a memória de longo prazo.',
    topics: ['Descanso estratégico'],
    durationMinutes: 20,
    actionItems: ['Apenas folhear o Glossário por 15 minutos descontraído']
  },

  // SEMANA 2: ENGENHARIA, ARMAZENAMENTO & CRISP-DM
  {
    day: 8,
    week: 2,
    title: 'Data Warehouse (DW) e Análise OLAP',
    description: 'O repositório clássico de dados históricos limpos e modelagem dimensional.',
    topics: ['Data Warehouse', 'Schema-on-Write', 'Star Schema e Snowflake', 'OLAP vs OLTP'],
    durationMinutes: 50,
    actionItems: ['Ler a primeira parte do Módulo 4', 'Revisar termos OLAP no Glossário']
  },
  {
    day: 9,
    week: 2,
    title: 'Data Lake vs Data Swamp',
    description: 'O repositório moderno que aceita dados em estado bruto (raw).',
    topics: ['Data Lake', 'Schema-on-Read', 'Data Swamp (Pântano)', 'Data Mart'],
    durationMinutes: 50,
    actionItems: ['Ler tabela comparativa DW vs Data Lake no Módulo 4', 'Resolver questão 7']
  },
  {
    day: 10,
    week: 2,
    title: 'ETL vs ELT: O fluxo de dados',
    description: 'Entender a ordem de carregar antes ou transformar antes.',
    topics: ['Extract, Transform, Load (ETL)', 'Extract, Load, Transform (ELT)', 'Staging Area'],
    durationMinutes: 45,
    actionItems: ['Ler seção de ETL/ELT no Módulo 4', 'Resolver questão 8', 'Flashcard f6 e f7']
  },
  {
    day: 11,
    week: 2,
    title: 'CRISP-DM: As 6 fases na veia',
    description: 'A metodologia mais cobrada em qualquer prova de Ciência de Dados.',
    topics: ['Business Understanding', 'Data Understanding', 'Data Preparation', 'Modeling', 'Evaluation', 'Deployment'],
    durationMinutes: 50,
    actionItems: ['Estudar o diagrama interativo do CRISP-DM no Módulo 5', 'Memorizar o mnemônico N-D-P-M-A-I']
  },
  {
    day: 12,
    week: 2,
    title: 'A maior pegadinha do CRISP-DM & Metodologia KDD',
    description: 'Data Preparation consome 80% do tempo! E as 5 etapas do KDD.',
    topics: ['Por que a preparação demora tanto', 'KDD: Seleção, Pré-proc, Transformação, Mineração e Avaliação'],
    durationMinutes: 45,
    actionItems: ['Resolver questões 9 e 10', 'Flashcards f8 e f9']
  },
  {
    day: 13,
    week: 2,
    title: 'Tratamento de Dados Ausentes (Missing Values)',
    description: 'Quando usar exclusão, e quando usar média, mediana ou moda na imputação.',
    topics: ['Dados faltantes', 'Sensibilidade da média', 'Robustez da mediana'],
    durationMinutes: 45,
    actionItems: ['Ler seção de nulos no Módulo 6', 'Resolver questão 11', 'Flashcard f10']
  },
  {
    day: 14,
    week: 2,
    title: 'Revisão da Semana 2',
    description: 'Bateria de fixação de DW, Lake, ETL, CRISP-DM e missing values.',
    topics: ['Revisão combinada'],
    durationMinutes: 50,
    actionItems: ['Revisar flashcards f6 até f10', 'Revisar resumo esquemático do CRISP-DM']
  },

  // SEMANA 3: MACHINE LEARNING & ALGORITMOS
  {
    day: 15,
    week: 3,
    title: 'O mapa do Machine Learning: Supervisionado vs Não Supervisionado',
    description: 'Compreender a presença ou ausência da variável alvo (Target/Label).',
    topics: ['Conceito de Machine Learning', 'Supervisionado (com resposta)', 'Não Supervisionado (sem resposta)'],
    durationMinutes: 50,
    actionItems: ['Ler introdução do Módulo 7', 'Revisar termos Feature e Target no Glossário']
  },
  {
    day: 16,
    week: 3,
    title: 'Supervisionado: Classificação vs Regressão',
    description: 'Descobrir se a resposta é uma categoria ou um número contínuo.',
    topics: ['Prever rótulo vs prever valor contínuo', 'Regressão Linear', 'Regressão Logística (Classificação!)'],
    durationMinutes: 50,
    actionItems: ['Resolver questões 13 e 15', 'Flashcard f12 e f13']
  },
  {
    day: 17,
    week: 3,
    title: 'Algoritmos Supervisionados Frequentes: Árvores, Random Forest e KNN',
    description: 'As regras visuais de decisão, a floresta (ensemble) e a distância dos vizinhos.',
    topics: ['Árvores de Decisão', 'Random Forest (Bagging)', 'KNN (Vizinhos mais próximos)', 'Naive Bayes'],
    durationMinutes: 50,
    actionItems: ['Ler a síntese dos algoritmos no Módulo 7', 'Identificar as palavras-chave de cada um']
  },
  {
    day: 18,
    week: 3,
    title: 'Não Supervisionado: K-Means e Associação (Apriori)',
    description: 'Agrupamento em K clusters e análise de cesta de compras.',
    topics: ['K-Means (escolha prévia do K)', 'Centróides e Método do Cotovelo', 'Algoritmo Apriori'],
    durationMinutes: 45,
    actionItems: ['Resolver questão 14', 'Flashcard f14']
  },
  {
    day: 19,
    week: 3,
    title: 'Overfitting vs Underfitting (O pesadelo do modelo)',
    description: 'Decorar o treino vs não aprender nada. Trade-off entre Viés e Variância.',
    topics: ['Overfitting (Alta Variância, Baixo Viés)', 'Underfitting (Alto Viés, Baixa Variância)', 'Generalização'],
    durationMinutes: 50,
    actionItems: ['Ler Módulo 8', 'Resolver questão 16', 'Flashcard f15']
  },
  {
    day: 20,
    week: 3,
    title: 'Como combater o Overfitting: Regularização e K-Fold',
    description: 'Lasso L1 (zera coeficientes) vs Ridge L2 (encolhe). Validação Cruzada.',
    topics: ['Lasso vs Ridge', 'K-Fold Cross-Validation', 'Poda de Árvores (Pruning)'],
    durationMinutes: 50,
    actionItems: ['Resolver questão 17', 'Flashcard f16']
  },
  {
    day: 21,
    week: 3,
    title: 'Revisão da Semana 3',
    description: 'Consolidação de tipos de aprendizado, algoritmos e overfitting.',
    topics: ['Revisão geral de ML'],
    durationMinutes: 50,
    actionItems: ['Bateria de flashcards de ML', 'Refazer questões 13 a 17']
  },

  // SEMANA 4: MÉTRICAS, MATRIZ DE CONFUSÃO & SIMULADO FINAL
  {
    day: 22,
    week: 4,
    title: 'A Matriz de Confusão: VP, VN, FP e FN',
    description: 'Dominar o cruzamento entre Realidade e Previsão. Erro Tipo I vs Erro Tipo II.',
    topics: ['Verdadeiro Positivo/Negativo', 'Falso Positivo (Tipo I)', 'Falso Negativo (Tipo II)'],
    durationMinutes: 50,
    actionItems: ['Ler o Módulo 9', 'Abrir o Simulador Interativo da Matriz de Confusão', 'Resolver questão 18']
  },
  {
    day: 23,
    week: 4,
    title: 'Acurácia, Precisão e Recall no detalhe',
    description: 'As 3 fórmulas que você precisa saber de cor para a prova.',
    topics: ['Fórmula da Acurácia', 'Fórmula da Precisão', 'Fórmula do Recall/Sensibilidade'],
    durationMinutes: 55,
    actionItems: ['Usar os controles do Simulador da Matriz de Confusão', 'Calcular na mão a questão 20']
  },
  {
    day: 24,
    week: 4,
    title: 'O Paradoxo da Acurácia e o F1-Score',
    description: 'Por que 99% de acurácia pode ser um lixo em dados desbalanceados. Média harmônica F1.',
    topics: ['Desbalanceamento de classes', 'Detecção de doenças e fraudes', 'F1-Score e Curva ROC/AUC'],
    durationMinutes: 50,
    actionItems: ['Testar o cenário "Detecção de Doença Rara" no Simulador', 'Resolver questão 19']
  },
  {
    day: 25,
    week: 4,
    title: 'Normalização, Padronização & One-Hot Encoding',
    description: 'Ajuste final de escala de variáveis e conversão de texto em binário.',
    topics: ['Min-Max [0, 1]', 'Z-score (média 0, desvio 1)', 'One-Hot vs Label Encoding'],
    durationMinutes: 45,
    actionItems: ['Resolver questão 12', 'Flashcard f11']
  },
  {
    day: 26,
    week: 4,
    title: 'Simulado Completo - Parte 1',
    description: 'Fazer as questões de 1 a 10 sem consultar o material.',
    topics: ['Treino em condições reais de prova'],
    durationMinutes: 60,
    actionItems: ['Executar o Simulado no modo "Todas as Questões"', 'Anotar os erros e ler os comentários']
  },
  {
    day: 27,
    week: 4,
    title: 'Simulado Completo - Parte 2',
    description: 'Fazer as questões de 11 a 20 focando no tempo por questão.',
    topics: ['Velocidade e precisão de resolução'],
    durationMinutes: 60,
    actionItems: ['Completar o Simulado', 'Revisar os pontos fracos apontados no relatório']
  },
  {
    day: 28,
    week: 4,
    title: 'Revisão das Pegadinhas de Banca',
    description: 'Rever todos os "Cuidado com a Pegadinha" dos 8 módulos.',
    topics: ['Imunização contra pegadinhas frequentes de Cebraspe/FGV/FCC'],
    durationMinutes: 50,
    actionItems: ['Ler o box de pegadinhas em cada um dos módulos']
  },
  {
    day: 29,
    week: 4,
    title: 'Revisão Turbo de Véspera com Flashcards',
    description: 'Passar por todos os 20 flashcards e memorizar os macetes mnemônicos.',
    topics: ['Fixação rápida'],
    durationMinutes: 45,
    actionItems: ['Modo Flashcards até acertar todos', 'Descansar cedo']
  },
  {
    day: 30,
    week: 4,
    title: 'Dia da Prova: Calma e Confiança!',
    description: 'Você dominou os conceitos essenciais que 90% dos candidatos ignoram.',
    topics: ['Sucesso na prova'],
    durationMinutes: 15,
    actionItems: ['Revisar mentalmente: DIKW, 5Vs, DW vs Lake, CRISP-DM, Erro Tipo I vs II, e Boa Prova!']
  }
];
