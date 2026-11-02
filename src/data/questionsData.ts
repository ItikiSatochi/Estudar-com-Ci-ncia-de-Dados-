import { Question } from '../types';

export const QUESTIONS_DATA: Question[] = [
  // 1. DIKW
  {
    id: 'q1',
    banca: 'Cebraspe',
    orgaoAno: 'Polícia Federal / Perito',
    topicId: 'dikw',
    topicName: 'Pirâmide DIKW',
    type: 'certo_errado',
    enunciado: 'Na hierarquia da informação, o dado pode ser definido como uma coleção de fatos brutos, sem contexto e desprovidos de significado quando analisados de forma isolada, enquanto a informação resulta do processamento e contextualização desses dados.',
    correctAnswer: 'C',
    explicacao: 'Item CORRETO. O dado é o elemento básico, sintático e bruto (ex: "38"). Quando esse dado é organizado, contextualizado e ganha significado (ex: "38°C de temperatura corporal"), ele se transforma em Informação.',
    pegadinha: 'As bancas frequentemente invertem dizendo que a informação é a matéria-prima bruta e o dado é o resultado. Lembre-se: Dado → Informação → Conhecimento → Sabedoria.'
  },
  {
    id: 'q2',
    banca: 'FGV',
    orgaoAno: 'SEFAZ / Auditor Fiscal',
    topicId: 'dikw',
    topicName: 'Pirâmide DIKW',
    type: 'multipla_escolha',
    enunciado: 'Considere a seguinte afirmação em uma organização: "O número de cancelamentos de clientes no setor de telecomunicações sobe 25% sempre que o tempo de espera no SAC ultrapassa 15 minutos". De acordo com a pirâmide DIKW, essa constatação representa:',
    options: [
      { id: 'A', text: 'Dado bruto.' },
      { id: 'B', text: 'Metadado relacional.' },
      { id: 'C', text: 'Conhecimento.' },
      { id: 'D', text: 'Apenas um dado não estruturado.' },
      { id: 'E', text: 'Informação sintática sem aplicação prática.' }
    ],
    correctAnswer: 'C',
    explicacao: 'Gabarito C. Identificar padrões de causa e efeito ("sobe 25% sempre que ultrapassa 15 min"), combinando informações históricas e experiência empírica, é a definição exata de CONHECIMENTO (compreender o "como" e o "porquê").',
    pegadinha: 'Muitos confundem com informação. Informação seria apenas dizer: "Em maio houve 400 cancelamentos e a média do SAC foi 18 minutos". Já a correlação explicativa e compreensão de padrão é Conhecimento.'
  },

  // 2. Tipos de Dados
  {
    id: 'q3',
    banca: 'Cebraspe',
    orgaoAno: 'TCE / Analista de TI',
    topicId: 'tipos-dados',
    topicName: 'Tipos de Dados',
    type: 'certo_errado',
    enunciado: 'Arquivos codificados em formato JSON (JavaScript Object Notation) e XML (eXtensible Markup Language) são tecnicamente classificados como dados não estruturados, visto que não residem em tabelas bidimensionais de bancos de dados relacionais.',
    correctAnswer: 'E',
    explicacao: 'Item ERRADO. Arquivos JSON e XML são classificados como dados SEMIESTRUTURADOS. Embora não sigam um esquema rígido prévio de banco relacional tradicional (tabela SQL), eles possuem marcadores internos, tags e delimitadores que conferem estrutura interna auto-descritiva.',
    pegadinha: 'A pegadinha clássica das bancas é tentar enfiar tudo o que não é SQL no saco de "não estruturado". JSON e XML são o maior clássico de dados SEMIESTRUTURADOS em concursos!'
  },
  {
    id: 'q4',
    banca: 'FCC',
    orgaoAno: 'TRT / Tecnologia da Informação',
    topicId: 'tipos-dados',
    topicName: 'Tipos de Dados',
    type: 'multipla_escolha',
    enunciado: 'Um tribunal pretende minerar petições judiciais escaneadas em formato PDF, postagens públicas em redes sociais e gravações em vídeo de audiências de instrução. No contexto da Ciência de Dados, essa massa de dados é classificada como:',
    options: [
      { id: 'A', text: 'Dados Estruturados relacionais.' },
      { id: 'B', text: 'Dados Não Estruturados.' },
      { id: 'C', text: 'Dados Semiestruturados padronizados em XML.' },
      { id: 'D', text: 'Dados Transacionais ACID.' },
      { id: 'E', text: 'Dados Matriciais Normalizados.' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B. Vídeos, textos livres de petições e redes sociais não possuem esquemas rígidos ou tags padronizadas de dados. Trata-se de dados NÃO ESTRUTURADOS, que exigem visão computacional ou PLN para extração de significado.',
    pegadinha: 'Não se deixe enganar por um documento ter "título e parágrafos": em Ciência de Dados, texto livre e multimídia são dados Não Estruturados.'
  },

  // 3. Big Data 5 Vs
  {
    id: 'q5',
    banca: 'Cesgranrio',
    orgaoAno: 'Banco do Brasil / Tecnologia',
    topicId: 'big-data',
    topicName: 'Big Data & 5 Vs',
    type: 'multipla_escolha',
    enunciado: 'Em projetos de Big Data no setor bancário, a dimensão que trata da qualidade, confiabilidade, fidedignidade e higienização dos dados para evitar a propagação de inconsistências ou fraudes é denominada:',
    options: [
      { id: 'A', text: 'Velocidade.' },
      { id: 'B', text: 'Variabilidade.' },
      { id: 'C', text: 'Veracidade.' },
      { id: 'D', text: 'Variedade.' },
      { id: 'E', text: 'Volatilidade.' }
    ],
    correctAnswer: 'C',
    explicacao: 'Gabarito C. O "V" de VERACIDADE refere-se à garantia de qualidade, autenticidade, acurácia e nível de confiança que se pode depositar nos dados coletados.',
    pegadinha: 'Atenção para não confundir Veracidade (qualidade/confiança) com Variabilidade (mudança de significado dos dados no tempo).'
  },
  {
    id: 'q6',
    banca: 'Cebraspe',
    orgaoAno: 'INSS / Ciência de Dados',
    topicId: 'big-data',
    topicName: 'Big Data & 5 Vs',
    type: 'certo_errado',
    enunciado: 'O conceito de Big Data restringe-se primariamente ao armazenamento de volumes colossais de dados que excedem a capacidade de discos rígidos convencionais, sendo a velocidade e a variedade aspectos secundários e prescindíveis.',
    correctAnswer: 'E',
    explicacao: 'Item ERRADO. Big Data é uma conjunção multidimensional. Ter apenas muito volume não caracteriza plenamente o desafio de Big Data; a velocidade de ingestão contínua (streaming) e a variedade heterogênea de formatos são características basilares e indispensáveis.',
    pegadinha: 'Sempre desconfie de itens com palavras restritivas como "restringe-se primariamente", "prescindíveis" ou "apenas volume".'
  },

  // 4. Engenharia, DW, Lake & ETL
  {
    id: 'q7',
    banca: 'Cebraspe',
    orgaoAno: 'Tribunal de Contas da União (TCU)',
    topicId: 'engenharia-dw-lake',
    topicName: 'Data Warehouse vs Data Lake',
    type: 'certo_errado',
    enunciado: 'Diferentemente de um Data Warehouse tradicional, que impõe o esquema na escrita (schema-on-write) e armazena apenas dados tratados e estruturados, um Data Lake utiliza o conceito de schema-on-read, permitindo a ingestão e persistência de dados em seu estado nativo e bruto.',
    correctAnswer: 'C',
    explicacao: 'Item CORRETO. É a síntese perfeita cobrada em provas: Data Warehouse = Schema-on-Write (esquema rígido definido antes de gravar, dados limpos). Data Lake = Schema-on-Read (dados brutos gravados diretamente; a estrutura é interpretada apenas no momento da consulta analítica).',
    pegadinha: 'Cuidado quando a questão tentar inverter: "Data Lake exige schema-on-write" estaria falso.'
  },
  {
    id: 'q8',
    banca: 'FGV',
    orgaoAno: 'Receita Federal / Auditor',
    topicId: 'engenharia-dw-lake',
    topicName: 'ETL vs ELT',
    type: 'multipla_escolha',
    enunciado: 'No contexto de arquitetura moderna de dados em nuvem, a principal distinção do paradigma ELT (Extract, Load, Transform) em relação ao tradicional ETL (Extract, Transform, Load) reside no fato de que o ELT:',
    options: [
      { id: 'A', text: 'elimina a etapa de extração dos dados nas fontes transacionais originais.' },
      { id: 'B', text: 'carrega os dados brutos diretamente no repositório de destino antes de realizar a transformação, aproveitando o poder computacional distribuído do destino.' },
      { id: 'C', text: 'só pode ser utilizado em conjunto com bancos de dados relacionais OLTP estritos.' },
      { id: 'D', text: 'obriga a transformação a ocorrer exclusivamente em uma Staging Area separada por motivos de conformidade LGPD.' },
      { id: 'E', text: 'impede qualquer tipo de limpeza ou transformação posterior dos dados carregados.' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B. No ELT, a ordem das letras explica o processo: Extrair (E), Carregar (L - Load) bruto no destino (ex: Data Lake / Cloud DW como BigQuery/Snowflake), e Transformar (T) sob demanda dentro da própria nuvem.',
    pegadinha: 'A alternativa C e D tentam inventar restrições inexistentes. No ELT a transformação acontece DEPOIS da carga bruta.'
  },

  // 5. CRISP-DM
  {
    id: 'q9',
    banca: 'Cebraspe',
    orgaoAno: 'Polícia Rodoviária Federal (PRF)',
    topicId: 'crisp-dm',
    topicName: 'CRISP-DM',
    type: 'certo_errado',
    enunciado: 'No modelo de processo CRISP-DM (Cross-Industry Standard Process for Data Mining), a fase que historicamente consome a maior parcela de tempo e esforço dos profissionais da equipe é a fase de Modelagem, na qual os algoritmos de aprendizado de máquina são ajustados.',
    correctAnswer: 'E',
    explicacao: 'Item ERRADO. A fase que consome a maior parcela de tempo (estimada entre 70% e 80% do esforço do projeto) é a PREPARAÇÃO DOS DADOS (Data Preparation) — limpeza de ruídos, tratamento de nulos, normalização e engenharia de variáveis.',
    pegadinha: 'Essa é a pegadinha MAIS CLÁSSICA sobre CRISP-DM em concursos! O senso comum acha que criar algoritmos (Modelagem) demora mais, mas na realidade limpar e preparar os dados é a etapa mais demorada de longe.'
  },
  {
    id: 'q10',
    banca: 'Vunesp',
    orgaoAno: 'Tribunal de Justiça / Analista',
    topicId: 'crisp-dm',
    topicName: 'CRISP-DM',
    type: 'multipla_escolha',
    enunciado: 'O modelo CRISP-DM estabelece um ciclo de vida estruturado para projetos de mineração e ciência de dados. Assinale a alternativa que apresenta a sequência cronológica correta das fases iniciais desse modelo:',
    options: [
      { id: 'A', text: 'Modelagem → Entendimento dos Dados → Preparação dos Dados.' },
      { id: 'B', text: 'Entendimento do Negócio → Entendimento dos Dados → Preparação dos Dados.' },
      { id: 'C', text: 'Preparação dos Dados → Modelagem → Avaliação.' },
      { id: 'D', text: 'Entendimento dos Dados → Implantação → Modelagem.' },
      { id: 'E', text: 'Avaliação → Entendimento do Negócio → Engenharia de Features.' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B. A ordem padrão das 6 fases do CRISP-DM é: 1. Business Understanding (Negócio) → 2. Data Understanding (Dados) → 3. Data Preparation (Preparação) → 4. Modeling (Modelagem) → 5. Evaluation (Avaliação) → 6. Deployment (Implantação).',
    pegadinha: 'Lembre-se sempre: primeiro entende o NEGÓCIO, depois os DADOS, depois PREPARA os dados para então MODELAR.'
  },

  // 6. Pré-processamento
  {
    id: 'q11',
    banca: 'Cesgranrio',
    orgaoAno: 'Petrobras / Ciência de Dados',
    topicId: 'pre-processamento',
    topicName: 'Pré-processamento & Missing',
    type: 'multipla_escolha',
    enunciado: 'Durante a fase de pré-processamento de uma coluna numérica com dados faltantes (missing values), o cientista de dados constatou que a distribuição é fortemente assimétrica e possui diversos outliers extremos de alto valor. Para a imputação de valores nessa coluna, a medida estatística mais recomendada para substituir os valores nulos é a:',
    options: [
      { id: 'A', text: 'Média aritmética simples.' },
      { id: 'B', text: 'Mediana.' },
      { id: 'C', text: 'Variância amostral.' },
      { id: 'D', text: 'Desvio padrão.' },
      { id: 'E', text: 'Correlação de Pearson.' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B. A MEDIANA é uma medida robusta a outliers e a assimetrias. A média aritmética simples seria puxada para cima pelos outliers extremos, distorcendo os dados imputados.',
    pegadinha: 'A média é sensível a valores extremos. Se há outliers ou assimetria acentuada, a mediana é a melhor escolha.'
  },
  {
    id: 'q12',
    banca: 'Cebraspe',
    orgaoAno: 'ANATEL / Especialista',
    topicId: 'pre-processamento',
    topicName: 'Normalização e Padronização',
    type: 'certo_errado',
    enunciado: 'O processo de normalização Min-Max redimensiona os valores de uma variável numérica para um intervalo fixo entre 0 e 1, enquanto a padronização (Z-score) transforma os dados para que tenham média igual a 0 e desvio padrão igual a 1.',
    correctAnswer: 'C',
    explicacao: 'Item CORRETO. Definição exata:\n• Normalização Min-Max: (X - Min) / (Max - Min) → escala no intervalo [0, 1].\n• Padronização Z-score: (X - Média) / Desvio Padrão → centraliza na média 0 com dispersão unitária (desvio 1).',
    pegadinha: 'A banca costuma inverter dizendo que o Z-score limita os dados entre 0 e 1. Não limite! Z-score pode ter valores negativos (-2.5) e positivos (+3.2).'
  },

  // 7. Machine Learning
  {
    id: 'q13',
    banca: 'FGV',
    orgaoAno: 'TJ / Analista Judiciário',
    topicId: 'machine-learning',
    topicName: 'Aprendizado Supervisionado vs Não Supervisionado',
    type: 'multipla_escolha',
    enunciado: 'Considere os seguintes problemas de uma organização:\nI. Agrupar os contribuintes em perfis de comportamento com base em similaridades em suas declarações fiscais, sem conhecimento prévio de categorias pré-existentes.\nII. Prever se um novo e-mail recebido é fraude ("phishing") ou mensagem legítima a partir de uma base com milhares de e-mails rotulados historicamente.\n\nOs métodos de aprendizado de máquina adequados para solucionar I e II são, respectivamente:',
    options: [
      { id: 'A', text: 'Supervisionado (Regressão) e Não Supervisionado (Clusterização).' },
      { id: 'B', text: 'Não Supervisionado (Clusterização) e Supervisionado (Classificação).' },
      { id: 'C', text: 'Supervisionado (Classificação) e Supervisionado (Regressão).' },
      { id: 'D', text: 'Não Supervisionado (Associação) e Não Supervisionado (Clusterização).' },
      { id: 'E', text: 'Por Reforço e Supervisionado (Séries Temporais).' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B.\n• Problema I: Sem rótulo prévio, apenas agrupando por semelhança → Não Supervisionado (Clusterização/Agrupamento).\n• Problema II: Possui base de e-mails já rotulados e a resposta é uma classe discreta ("fraude" ou "legítimo") → Supervisionado (Classificação).',
    pegadinha: 'Note que prever classes (Fraude x Legítimo) é Classificação, e NÃO Regressão (regressão prevê números contínuos, como valores em Reais).'
  },
  {
    id: 'q14',
    banca: 'Cebraspe',
    orgaoAno: 'Polícia Federal / Papiloscopista',
    topicId: 'machine-learning',
    topicName: 'Algoritmo K-Means',
    type: 'certo_errado',
    enunciado: 'O algoritmo K-Means é uma técnica de aprendizado supervisionado utilizada exclusivamente para tarefas de regressão contínua em dados estruturados.',
    correctAnswer: 'E',
    explicacao: 'Item ERRADO. O K-Means é um dos exemplos mais clássicos de aprendizado NÃO SUPERVISIONADO voltado para CLUSTERIZAÇÃO (agrupamento). Ele não utiliza rótulos e não é um algoritmo de regressão.',
    pegadinha: 'K-Means é NÃO SUPERVISIONADO e serve para CLUSTERIZAÇÃO. Erro duplo do item!'
  },
  {
    id: 'q15',
    banca: 'FCC',
    orgaoAno: 'SEFAZ / Auditor Fiscal da Receita',
    topicId: 'machine-learning',
    topicName: 'Algoritmos de ML',
    type: 'multipla_escolha',
    enunciado: 'Apesar de conter o termo "Regressão" em seu nome técnico, o algoritmo de Regressão Logística é fundamentalmente aplicado em tarefas de:',
    options: [
      { id: 'A', text: 'Clusterização hierárquica aglomerativa.' },
      { id: 'B', text: 'Redução de dimensionalidade linear (PCA).' },
      { id: 'C', text: 'Classificação supervisionada (geralmente binária).' },
      { id: 'D', text: 'Geração de regras de associação frequentes.' },
      { id: 'E', text: 'Interpolação contínua de splines cúbicos.' }
    ],
    correctAnswer: 'C',
    explicacao: 'Gabarito C. A Regressão Logística utiliza a função sigmoide para estimar probabilidades entre 0 e 1, mapeando o resultado para classes categóricas (ex: Sim/Não, Venceu/Perdeu). Trata-se, portanto, de um algoritmo de CLASSIFICAÇÃO supervisionada.',
    pegadinha: 'O nome "Regressão" engana muitos candidatos. Não caia nisso: Regressão Linear = Regressão; Regressão Logística = Classificação!'
  },

  // 8. Overfitting e Underfitting
  {
    id: 'q16',
    banca: 'Cebraspe',
    orgaoAno: 'Banco Central do Brasil (BACEN)',
    topicId: 'overfitting-underfitting',
    topicName: 'Overfitting e Variância',
    type: 'certo_errado',
    enunciado: 'O fenômeno do sobreajuste (overfitting) manifesta-se quando um modelo de aprendizado de máquina exibe desempenho excelente nos dados de treinamento, mas apresenta taxas elevadas de erro ao ser confrontado com dados novos e não observados durante o treino.',
    correctAnswer: 'C',
    explicacao: 'Item CORRETO. Overfitting é exatamente a memorização ou decoreba dos dados de treinamento (incluindo ruídos e particularidades daquela amostra), perdendo a capacidade de generalização para dados inéditos.',
    pegadinha: 'Se a questão disser que um erro de treino quase zero garante um modelo ótimo em produção, está errado.'
  },
  {
    id: 'q17',
    banca: 'FGV',
    orgaoAno: 'Tribunal de Contas / Auditor',
    topicId: 'overfitting-underfitting',
    topicName: 'Regularização Lasso vs Ridge',
    type: 'multipla_escolha',
    enunciado: 'Um analista de dados deseja aplicar uma técnica de regularização em um modelo linear para reduzir a complexidade e mitigar o sobreajuste (overfitting). Ele necessita que a técnica penalize coeficientes de variáveis irrelevantes a ponto de reduzi-los exatamente a zero, realizando seleção automática de atributos (feature selection). Essa técnica é a:',
    options: [
      { id: 'A', text: 'Regularização Ridge (penalidade L2).' },
      { id: 'B', text: 'Regularização Lasso (penalidade L1).' },
      { id: 'C', text: 'Transformação Box-Cox.' },
      { id: 'D', text: 'Validação simples Hold-out.' },
      { id: 'E', text: 'Bagging por amostragem com reposição.' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B. A regularização Lasso (L1) utiliza a norma da soma dos valores absolutos dos coeficientes. Ela tem a propriedade geométrica exclusiva de zerar coeficientes de variáveis irrelevantes, atuando como um selecionador automático de features.',
    pegadinha: 'Ridge (L2) encolhe os coeficientes para perto de zero, mas NUNCA zera completamente. Quem zera é o Lasso (L1)!'
  },

  // 9. Métricas e Matriz de Confusão
  {
    id: 'q18',
    banca: 'Cesgranrio',
    orgaoAno: 'Caixa Econômica Federal / TI',
    topicId: 'metricas-matriz',
    topicName: 'Matriz de Confusão & Tipos de Erro',
    type: 'multipla_escolha',
    enunciado: 'Em um modelo preditivo para liberação de empréstimos, o evento positivo é "Cliente Inadimplente/Caloteiro". Um cliente honesto que pagaria todas as faturas em dia foi classificado erroneamente pelo modelo como provável inadimplente e teve o crédito negado. Em termos de matriz de confusão, ocorreu um:',
    options: [
      { id: 'A', text: 'Verdadeiro Negativo.' },
      { id: 'B', text: 'Verdadeiro Positivo.' },
      { id: 'C', text: 'Falso Positivo (Erro Tipo I).' },
      { id: 'D', text: 'Falso Negativo (Erro Tipo II).' },
      { id: 'E', text: 'Erro de Subajuste Estocástico.' }
    ],
    correctAnswer: 'C',
    explicacao: 'Gabarito C. O modelo previu POSITIVO (inadimplente), mas na realidade o cliente era NEGATIVO (honesto). Foi um alarme falso = FALSO POSITIVO, que corresponde ao Erro Tipo I.',
    pegadinha: 'Lembre-se:\n• Falso Positivo = Disse que era positivo, mas não era (Erro Tipo I - Alarme falso).\n• Falso Negativo = Disse que era negativo, mas era positivo (Erro Tipo II - Deixou passar).'
  },
  {
    id: 'q19',
    banca: 'Cebraspe',
    orgaoAno: 'Polícia Federal / Agente',
    topicId: 'metricas-matriz',
    topicName: 'Acurácia vs Recall em Doenças',
    type: 'certo_errado',
    enunciado: 'Em cenários com conjuntos de dados desbalanceados, como no diagnóstico precoce de doenças raras ou na detecção de transações financeiras fraudulentas, a métrica de acurácia global é suficiente e altamente recomendada para atestar a eficácia do classificador.',
    correctAnswer: 'E',
    explicacao: 'Item ERRADO. É o clássico "Paradoxo da Acurácia". Se apenas 0,1% das transações são fraudes, um modelo que sempre diga "Não é fraude" terá 99,9% de acurácia, mas será completamente inútil porque não detectou nenhuma fraude. Nesses casos, deve-se usar métricas como Recall (Sensibilidade), Precisão, F1-Score ou AUC-ROC.',
    pegadinha: 'SEMPRE que a questão afirmar que "em dados desbalanceados a acurácia é suficiente", o item estará ERRADO!'
  },
  {
    id: 'q20',
    banca: 'FCC',
    orgaoAno: 'Tribunal Regional Federal / Analista',
    topicId: 'metricas-matriz',
    topicName: 'Cálculo de Precisão e Recall',
    type: 'multipla_escolha',
    enunciado: 'Um modelo de classificação foi testado em uma amostra de 100 instâncias, apresentando os seguintes resultados na matriz de confusão:\n• Verdadeiros Positivos (VP) = 40\n• Falsos Positivos (FP) = 10\n• Falsos Negativos (FN) = 10\n• Verdadeiros Negativos (VN) = 40\n\nA Acurácia e a Precisão desse classificador são, respectivamente:',
    options: [
      { id: 'A', text: '80% e 80%.' },
      { id: 'B', text: '75% e 85%.' },
      { id: 'C', text: '90% e 80%.' },
      { id: 'D', text: '80% e 50%.' },
      { id: 'E', text: '50% e 80%.' }
    ],
    correctAnswer: 'A',
    explicacao: 'Gabarito A.\n• Acurácia = (VP + VN) / Total = (40 + 40) / 100 = 80 / 100 = 80% (0,80).\n• Precisão = VP / (VP + FP) = 40 / (40 + 10) = 40 / 50 = 80% (0,80).\n• (Bônus) Recall = VP / (VP + FN) = 40 / (40 + 10) = 80%.',
    pegadinha: 'Nunca confunda o denominador da Precisão (VP + FP) com o do Recall (VP + FN). Na precisão, o denominador é a soma de todos que o modelo disse ser positivo.'
  }
];
