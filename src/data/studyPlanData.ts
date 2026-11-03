import { StudyDay } from '../types';

export const STUDY_PLAN_DATA: StudyDay[] = [
  // SEMANA 1: FUNDAMENTOS, CONJUNÇÕES CESGRANRIO & LINKING WORDS
  {
    day: 1,
    week: 1,
    title: 'Ciência de Dados: Pirâmide DIKW & Tipos de Dados',
    description: 'Dado vs Informação e a regra de ouro do JSON/XML (Semiestruturado).',
    topics: ['DIKW', 'Estruturados vs Não Estruturados', 'Semiestruturados (JSON/XML)'],
    durationMinutes: 45,
    actionItems: ['Ler Módulos 1 e 2 de Ciência de Dados', 'Fazer questões de DIKW', 'Revisar flashcards de fundamentos']
  },
  {
    day: 2,
    week: 1,
    title: 'Português Cesgranrio: O Trunfo das Conjunções',
    description: 'Dominar o conectivo "CONQUANTO" (embora/concessão) e "PORQUANTO" (porque/causa).',
    topics: ['Conjunções concessivas', 'Conjunções adversativas', 'Causais vs Consecutivas'],
    durationMinutes: 45,
    actionItems: ['Ler Módulo 1 de Português (Conjunções)', 'Resolver questão csg-port-1', 'Fixar flashcards de conjunções']
  },
  {
    day: 3,
    week: 1,
    title: 'Inglês Cesgranrio: Linking Words & Falsos Cognatos',
    description: 'However, Although, Despite e os falsos cognatos (Actually não é atualmente!).',
    topics: ['Linking words de oposição', 'Linking words de adição', 'Actually vs Currently', 'Eventually'],
    durationMinutes: 40,
    actionItems: ['Ler Módulo 2 de Inglês (Conectivos)', 'Fazer questões csg-ing-1 e csg-ing-2', 'Revisar flashcards de inglês']
  },
  {
    day: 4,
    week: 1,
    title: 'Ciência de Dados: Big Data & Os 5 Vs na Transpetro',
    description: 'Volume, Velocidade, Variedade, Veracidade (qualidade/ruído) e Valor na operação.',
    topics: ['5 Vs de Big Data', 'Telemetria em tempo real', 'Sensores em dutos'],
    durationMinutes: 40,
    actionItems: ['Ler Módulo 3 de Ciência de Dados', 'Resolver questão csg-cd-5']
  },
  {
    day: 5,
    week: 1,
    title: 'Português Cesgranrio: Crase sem Mistério',
    description: 'Casos proibidos (antes de verbo e palavra masculina) e macete da troca pelo masculino.',
    topics: ['Casos proibidos de crase', 'Casos obrigatórios', 'Regência com crase'],
    durationMinutes: 45,
    actionItems: ['Ler Módulo 2 de Português (Crase)', 'Resolver questão csg-port-2']
  },
  {
    day: 6,
    week: 1,
    title: 'Inglês: Leitura Instrumental & Vocabulário Transpetro',
    description: 'Técnicas de Skimming & Scanning aplicadas a notícias do setor de energia.',
    topics: ['Pipeline', 'Vessel / Tanker', 'Leakage detection', 'Predictive maintenance'],
    durationMinutes: 40,
    actionItems: ['Ler Módulo 1 e 3 de Inglês', 'Resolver questão csg-ing-3']
  },
  {
    day: 7,
    week: 1,
    title: 'Consolidação da Semana 1 & Mini Simulado',
    description: 'Revisão ativa das três disciplinas.',
    topics: ['Revisão combinada'],
    durationMinutes: 45,
    actionItems: ['Revisar os 10 primeiros flashcards', 'Refazer questões da Semana 1']
  },

  // SEMANA 2: ARMAZENAMENTO, PLN, CONCORDÂNCIA E PONTUAÇÃO
  {
    day: 8,
    week: 2,
    title: 'Ciência de Dados: Data Warehouse vs Data Lake & ELT',
    description: 'Schema-on-Write vs Schema-on-Read, Data Swamp e ingestão moderna.',
    topics: ['DW estruturado', 'Data Lake em bruto', 'ETL vs ELT'],
    durationMinutes: 45,
    actionItems: ['Ler Módulo 4 de Ciência de Dados', 'Fixar flashcard f-dw-1']
  },
  {
    day: 9,
    week: 2,
    title: 'Ciência de Dados: CRISP-DM (Preparação consome 80%!)',
    description: 'As 6 fases do ciclo de vida e a maior pegadinha da Cesgranrio.',
    topics: ['Negócio', 'Dados', 'Preparação (70-80%)', 'Modelagem', 'Avaliação', 'Implantação'],
    durationMinutes: 45,
    actionItems: ['Estudar o diagrama interativo do CRISP-DM', 'Resolver questão csg-cd-6']
  },
  {
    day: 10,
    week: 2,
    title: 'Português Cesgranrio: Concordância com Verbo Haver e Fazer',
    description: 'A impessoalidade fatal do verbo haver no sentido de existir ("Havia navios").',
    topics: ['Haver impessoal', 'Fazer indicando tempo', 'Partícula SE apassivadora'],
    durationMinutes: 45,
    actionItems: ['Ler seção de concordância no Módulo 2 de Português', 'Resolver questão csg-port-3']
  },
  {
    day: 11,
    week: 2,
    title: 'Ciência de Dados: Processamento de Linguagem Natural (PLN)',
    description: 'Tokenização, Stopwords, Stemming vs Lemmatization e Vetorização TF-IDF.',
    topics: ['PLN', 'Stemming (corte bruto)', 'Lemmatization (dicionário)', 'TF-IDF'],
    durationMinutes: 50,
    actionItems: ['Ler Módulo 6 de Ciência de Dados (PLN)', 'Resolver questão csg-cd-1', 'Flashcards f-pln-1 e f-pln-2']
  },
  {
    day: 12,
    week: 2,
    title: 'Português Cesgranrio: Pontuação e Orações Adjetivas',
    description: 'A diferença entre explicação (com vírgula) e restrição (sem vírgula).',
    topics: ['Oração adjetiva explicativa', 'Oração adjetiva restritiva', 'Adjuntos deslocados'],
    durationMinutes: 45,
    actionItems: ['Ler Módulo 3 de Português', 'Resolver questão csg-port-4']
  },
  {
    day: 13,
    week: 2,
    title: 'Ciência de Dados: Processamento Digital de Imagens (PDI)',
    description: 'Filtros espaciais (Sobel para bordas) e Redes Neurais Convolucionais (CNNs).',
    topics: ['Canais RGB', 'Convolução espacial', 'Camada de MaxPooling', 'Inspeção de cascos e dutos'],
    durationMinutes: 50,
    actionItems: ['Ler Módulo 7 de Ciência de Dados (PDI)', 'Resolver questão csg-cd-2', 'Flashcards f-pdi-1 e f-pdi-2']
  },
  {
    day: 14,
    week: 2,
    title: 'Revisão da Semana 2 & Rodada de Flashcards',
    description: 'Consolidação de DW, CRISP-DM, PLN e Visão Computacional.',
    topics: ['Revisão combinada'],
    durationMinutes: 50,
    actionItems: ['Girar os flashcards marcando os dominados']
  },

  // SEMANA 3: ESTATÍSTICA, MACHINE LEARNING & CONTRATOS
  {
    day: 15,
    week: 3,
    title: 'Ciência de Dados: Estatística Descritiva & Teste de Hipótese',
    description: 'Média, Mediana, Variância, Desvio Padrão e o P-valor (P < 0,05 rejeita H0).',
    topics: ['Mediana robusta', 'Desvio Padrão', 'Distribuição Normal', 'P-valor e H0'],
    durationMinutes: 50,
    actionItems: ['Ler Módulo 8 de Ciência de Dados', 'Resolver questão csg-cd-3', 'Flashcard f-est-1']
  },
  {
    day: 16,
    week: 3,
    title: 'Ciência de Dados: Fiscalização Técnica e Administrativa de Contratos',
    description: 'Atribuição explícita do cargo: Fiscal Técnico vs Administrativo na Lei 13.303/2016.',
    topics: ['Fiscal Técnico (SLA, código, entregas)', 'Fiscal Administrativo (FGTS, INSS)', 'Recebimento Provisório e Definitivo'],
    durationMinutes: 45,
    actionItems: ['Ler Módulo 9 de Ciência de Dados', 'Resolver questão csg-cd-4', 'Flashcard f-fisc-1']
  },
  {
    day: 17,
    week: 3,
    title: 'Ciência de Dados: Supervisionado vs Não Supervisionado',
    description: 'Classificação (rótulo discreto) vs Regressão (número contínuo) e K-Means.',
    topics: ['Supervisionado', 'Classificação', 'Regressão Logística', 'K-Means e Apriori'],
    durationMinutes: 50,
    actionItems: ['Revisar mapa de algoritmos', 'Resolver questões de Machine Learning']
  },
  {
    day: 18,
    week: 3,
    title: 'Ciência de Dados: Overfitting, Underfitting e Lasso (L1)',
    description: 'Decorar o treino vs errar no teste. Lasso zera variáveis e Ridge encolhe.',
    topics: ['Alta variância', 'Baixo viés', 'Regularização Lasso L1', 'Validação Cruzada K-Fold'],
    durationMinutes: 50,
    actionItems: ['Fixar flashcard f-over-1', 'Resolver questões de overfitting']
  },
  {
    day: 19,
    week: 3,
    title: 'Português: Simulado Rápido de Interpretação Cesgranrio',
    description: 'Treino de leitura de texto longo e resolução sem extrapolação.',
    topics: ['Inferência textual', 'Coesão referencial', 'Sinonímia contextual'],
    durationMinutes: 45,
    actionItems: ['Fazer questões de interpretação da Cesgranrio no simulador']
  },
  {
    day: 20,
    week: 3,
    title: 'Inglês: Simulado Rápido de Artigo Técnico de Óleo & Gás',
    description: 'Aplicação direta de Skimming e Scanning em texto da área naval.',
    topics: ['Offshore', 'Condition monitoring', 'Decarbonization'],
    durationMinutes: 40,
    actionItems: ['Resolver bateria de inglês no simulador']
  },
  {
    day: 21,
    week: 3,
    title: 'Revisão da Semana 3',
    description: 'Consolidação de Estatística, Fiscalização de Contratos e ML.',
    topics: ['Revisão combinada'],
    durationMinutes: 50,
    actionItems: ['Revisar todos os flashcards pendentes']
  },

  // SEMANA 4: MATRIZ DE CONFUSÃO, SIMULADOS COMPLETOS & RETA FINAL
  {
    day: 22,
    week: 4,
    title: 'Ciência de Dados: A Matriz de Confusão & Erros Tipo I e II',
    description: 'Verdadeiro Positivo, Falso Positivo (Tipo I) e Falso Negativo (Tipo II - grave!).',
    topics: ['Matriz 2x2', 'Alarme falso (FP)', 'Omissão perigosa (FN)'],
    durationMinutes: 50,
    actionItems: ['Abrir a aba "Simulador da Matriz"', 'Testar os quadrantes interativos']
  },
  {
    day: 23,
    week: 4,
    title: 'Ciência de Dados: Fórmulas de Acurácia, Precisão, Recall e F1',
    description: 'Quando usar cada métrica e o clássico Paradoxo da Acurácia.',
    topics: ['Acurácia = (VP+VN)/Total', 'Precisão = VP/(VP+FP)', 'Recall = VP/(VP+FN)', 'F1-Score'],
    durationMinutes: 50,
    actionItems: ['Carregar o cenário "Paradoxo da Acurácia" no simulador', 'Testar "Fraude Bancária"']
  },
  {
    day: 24,
    week: 4,
    title: 'Simulado Transpetro: Conhecimentos Básicos (Português + Inglês)',
    description: 'Bateria cronometrada simulando as primeiras questões da prova.',
    topics: ['Treino de prova real'],
    durationMinutes: 60,
    actionItems: ['Filtrar simulado por Português e Inglês', 'Ler comentários dos erros']
  },
  {
    day: 25,
    week: 4,
    title: 'Simulado Transpetro: Conhecimentos Específicos (Ciência de Dados)',
    description: 'Bateria focada nas questões de peso alto da Ênfase 8.',
    topics: ['PLN, PDI, ML, Estatística e Fiscalização'],
    durationMinutes: 60,
    actionItems: ['Filtrar simulado por Ciência de Dados', 'Anotar os pontos frágeis']
  },
  {
    day: 26,
    week: 4,
    title: 'Revisão das Pegadinhas da Cesgranrio',
    description: 'Imunização contra as armadilhas mais comuns da banca.',
    topics: ['Pegadinha do CRISP-DM', 'Actually', 'Conquanto vs Porquanto', 'Verbo Haver'],
    durationMinutes: 50,
    actionItems: ['Rever o box "Cuidado com a Pegadinha" em todos os módulos']
  },
  {
    day: 27,
    week: 4,
    title: 'Maratona dos Flashcards (Zerar o Baralho)',
    description: 'Rodar todos os flashcards das 3 disciplinas até dominar 100%.',
    topics: ['Memorização turbo'],
    durationMinutes: 50,
    actionItems: ['Filtrar "Apenas Não Dominados" até zerar']
  },
  {
    day: 28,
    week: 4,
    title: 'Glossário Inglês e Falsos Cognatos',
    description: 'Passagem rápida pelo vocabulário de tecnologia e logística.',
    topics: ['Fixação visual dos termos'],
    durationMinutes: 40,
    actionItems: ['Revisar os termos da aba Glossário']
  },
  {
    day: 29,
    week: 4,
    title: 'Revisão Leve de Véspera: As Fórmulas e Regras Chave',
    description: 'Apenas os pontos vitais: Conquanto=Embora, Haver no singular, P<0,05 rejeita H0, TF-IDF, Recall para vazamentos.',
    topics: ['Revisão mental tranquila'],
    durationMinutes: 30,
    actionItems: ['Descansar bem e dormir cedo']
  },
  {
    day: 30,
    week: 4,
    title: 'Dia da Prova Transpetro: Confiança e Aprovação!',
    description: 'Você cobriu o tripé do edital: Português Cesgranrio, Inglês Técnico e Ciência de Dados Ênfase 8.',
    topics: ['Sucesso na prova'],
    durationMinutes: 10,
    actionItems: ['Respire fundo, confie na preparação e boa prova!']
  }
];
