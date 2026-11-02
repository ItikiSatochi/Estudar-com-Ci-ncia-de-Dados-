import { ModuleSection } from '../types';

export const MODULES_DATA: ModuleSection[] = [
  {
    id: 'dikw',
    title: '1. Pirâmide DIKW: Dado, Informação, Conhecimento e Sabedoria',
    shortDescription: 'Entenda a evolução da matéria-prima até a decisão estratégica. Conceito favorito do Cebraspe e FGV.',
    badge: 'Fundamentos',
    readTime: '6 min',
    keyPoints: [
      'Dado é o fato bruto, sem contexto isolado (ex: "39").',
      'Informação é o dado contextualizado e organizado (ex: "Temperatura corporal de 39°C").',
      'Conhecimento é a compreensão e aplicação de padrões (ex: "39°C indica febre alta e risco clínico").',
      'Sabedoria é a tomada de decisão ética e orientada ao futuro (ex: "Prescrever antitérmico e investigar a causa raiz").'
    ],
    content: {
      intro: 'A pirâmide DIKW (Data, Information, Knowledge, Wisdom) descreve a jornada do dado bruto até a inteligência estratégica. Em concursos, as bancas adoram trocar as definições de Dado e Informação ou inverter a ordem hierárquica.',
      subsections: [
        {
          subtitle: 'Os 4 Níveis Explicados no Detalhe',
          text: '1. Dado (Data): Sequência de símbolos quantitativos ou qualitativos brutos, sem significado semântico intrínseco. Sozinho, não serve para decidir.\n2. Informação (Information): Dados organizados, formatados e dotados de significado e relevância para um propósito.\n3. Conhecimento (Knowledge): A informação assimilada e compreendida por pessoas ou algoritmos, combinando experiência, contexto e regras.\n4. Sabedoria (Wisdom): O nível mais alto, que envolve discernimento, visão de longo prazo, julgamento de valor e tomada de decisão estratégica.',
          example: 'Analogia clássica da prova:\n• Dado: "120"\n• Informação: "Pressão arterial sistólica de 120 mmHg"\n• Conhecimento: "120 mmHg é considerada pressão normal para um adulto em repouso"\n• Sabedoria: "Manter a dieta e hábitos saudáveis atuais do paciente".',
          examTip: 'Atenção à pegadinha de inversão: Se a questão disser que "o dado é a informação processada", está ERRADO! O dado é o insumo; a informação é o dado após processamento e contextualização.'
        },
        {
          subtitle: 'Tabela Resumo para Decorar para a Prova',
          text: 'Memorize as palavras-chave associadas a cada estágio:',
          comparisonTable: {
            headers: ['Nível', 'Pergunta que responde', 'Natureza', 'Exemplo Prático'],
            rows: [
              ['Dado', 'O quê? (Símbolo bruto)', 'Sintática (sem contexto)', '"4500"'],
              ['Informação', 'Quem? Quando? Onde?', 'Semântica (com contexto)', '"Vendas de R$ 4.500 no setor B em outubro"'],
              ['Conhecimento', 'Como? Por quê?', 'Pragmática (aprendizado/padrão)', '"O setor B sempre fatura 30% mais em feriados"'],
              ['Sabedoria', 'Qual o melhor caminho?', 'Estratégica (juízo de valor e futuro)', '"Alocar mais estoque no setor B antes do feriado"']
            ]
          }
        }
      ],
      bancaTrap: 'Pegadinha Clássica: A banca afirma que "Conhecimento independe da ação humana ou de agentes cognitivos". Falso! Conhecimento exige cognição, interpretação e conexão com a experiência acumulada.',
      summaryCheatsheet: [
        'Dado: bruto, sem contexto, fato isolado.',
        'Informação: dado + contexto + relevância.',
        'Conhecimento: informação + interpretação + experiência (Saber Como).',
        'Sabedoria: conhecimento + visão estratégica e julgamento (Saber o que fazer).'
      ]
    }
  },
  {
    id: 'tipos-dados',
    title: '2. Tipos de Dados: Estruturados, Não Estruturados e Semiestruturados',
    shortDescription: 'Como os dados são organizados no mundo real e onde cada um é armazenado.',
    badge: 'Estruturas',
    readTime: '7 min',
    keyPoints: [
      'Estruturados: formato rígido, linhas e colunas (SQL, tabelas, planilhas).',
      'Não Estruturados: sem esquema formal (fotos, vídeos, áudios, PDFs, e-mails). Representam 80%+ dos dados.',
      'Semiestruturados: não são tabelas relacionais, mas possuem marcadores internos/metadados (JSON, XML, HTML, NoSQL documental).'
    ],
    content: {
      intro: 'Na era do Big Data, apenas uma pequena parcela dos dados do mundo cabe perfeitamente em uma tabela com linhas e colunas. Compreender essa divisão é essencial para entender Data Warehouse versus Data Lake.',
      subsections: [
        {
          subtitle: '1. Dados Estruturados (Structured Data)',
          text: 'Seguem um esquema rígido (Schema-on-Write), definido antes da gravação. Possuem tipos de dados pré-definidos (inteiro, texto de tamanho fixo, data) e se relacionam por chaves primárias e estrangeiras. Fáceis de consultar via linguagem SQL.',
          example: 'Exemplos: Tabelas de bancos de dados relacionais (PostgreSQL, Oracle, MySQL, SQL Server), planilhas Excel formatadas, arquivos CSV com esquema fixo.',
          examTip: 'Se a prova falar em modelo relacional, tuplas, atributos e SQL, trata-se de dado estruturado.'
        },
        {
          subtitle: '2. Dados Não Estruturados (Unstructured Data)',
          text: 'Não possuem nenhum modelo de dados conceitual ou esquema formal predefinido. O conteúdo é livre e heterogêneo. Exigem técnicas de Processamento de Linguagem Natural (PLN) ou Visão Computacional para serem interpretados.',
          example: 'Exemplos: Imagens (.jpg, .png), vídeos (.mp4), gravações de áudio (.mp3), postagens em redes sociais, mensagens de chat, documentos PDF escaneados.'
        },
        {
          subtitle: '3. Dados Semiestruturados (Semi-structured Data) - Onde as bancas pegam!',
          text: 'Não possuem formato tabular tradicional de banco relacional, MAS contêm tags, chaves, delimitadores ou árvores hierárquicas que separam os elementos de dados e impõem hierarquias internas (Schema-on-Read).',
          example: 'Exemplos campeões de concurso:\n• JSON (JavaScript Object Notation)\n• XML (eXtensible Markup Language)\n• Documentos HTML\n• Arquivos de log de servidores Web\n• Bancos NoSQL Documentais (MongoDB, CouchDB).',
          examTip: 'SEMPRE que a questão citar JSON ou XML, a resposta é DADOS SEMIESTRUTURADOS. As bancas adoram tentar dizer que JSON é não estruturado ou estruturado puro.'
        }
      ],
      bancaTrap: 'Afirmar que arquivos JSON são não estruturados porque não possuem tabelas SQL. Cuidado! JSON possui chaves e valores estruturantes ({ "nome": "Carlos", "idade": 30 }), logo é classificado tecnicamente como SEMIESTRUTURADO.',
      summaryCheatsheet: [
        'Estruturados: Tabelas, SQL, RDBMS, linhas x colunas (Schema-on-Write).',
        'Semiestruturados: JSON, XML, NoSQL documental, logs com tags (Auto-descritivos).',
        'Não Estruturados: Textos livres, vídeos, imagens, áudios (Maior volume da internet).'
      ]
    }
  },
  {
    id: 'big-data',
    title: '3. Big Data e os 5 "Vs" (e os Vs adicionais)',
    shortDescription: 'Volume, Velocidade, Variedade, Veracidade e Valor. O que realmente define Big Data.',
    badge: 'Big Data',
    readTime: '6 min',
    keyPoints: [
      'Big Data não é apenas "muito dado", é um ecossistema caracterizado pela conjunção dos Vs.',
      'Os 3Vs originais (Doug Laney): Volume, Velocidade e Variedade.',
      'Os 5Vs clássicos de concurso: + Veracidade e Valor.',
      'Vs adicionais que bancas recentes cobram: Variabilidade e Validade.'
    ],
    content: {
      intro: 'O termo Big Data surgiu para descrever conjuntos de dados cujo tamanho, velocidade de geração e complexidade superam a capacidade de processamento dos sistemas de banco de dados tradicionais.',
      subsections: [
        {
          subtitle: 'Os 5 Vs Fundamentais Detalhados',
          text: '1. Volume: A escala e imensidão dos dados (terabytes, petabytes, exabytes). Exemplo: bilhões de transações diárias de cartões de crédito.\n2. Velocidade: O ritmo vertiginoso no qual os dados chegam e exigem processamento em tempo real ou quase real (streaming). Ex: telemetria de sensores de trânsito.\n3. Variedade: A pluralidade de formatos (estruturados, semiestruturados e não estruturados simultaneamente).\n4. Veracidade: A qualidade, integridade, acurácia e nível de confiabilidade do dado. Dado ruidoso ou com viés destrói o modelo.\n5. Valor: O benefício financeiro, operacional ou social gerado pela análise. Ter dados sem gerar valor é apenas custo de armazenamento.',
          examTip: 'Para o Cebraspe e FGV, o "Valor" é considerado muitas vezes o V mais importante do ponto de vista de negócios, pois todo o esforço de Big Data só se justifica pelo retorno gerado.'
        },
        {
          subtitle: 'Outros Vs que aparecem em provas avançadas',
          text: '• Variabilidade: A mudança constante do significado ou do contexto dos dados ao longo do tempo (ex: o mesmo termo em gírias no Twitter muda de significado a cada semana).\n• Validade: Garantia de que o dado ainda é correto para o momento atual da tomada de decisão.\n• Volatilidade: Quanto tempo o dado precisa ser retido antes de ser descartado.',
          example: 'Exemplo de questão: "O aspecto de Big Data relacionado à capacidade de separar dados limpos e precisos de dados com ruído e fraudes corresponde à VERACIDADE." (Gabarito: CERTO).'
        }
      ],
      bancaTrap: 'A banca afirma que "Big Data é definido exclusivamente pelo gigantismo do volume armazenado em disco". Falso! Volume isolado não é suficiente; a velocidade de ingestão e a variedade heterogênea são critérios obrigatórios da definição.',
      summaryCheatsheet: [
        'Volume = Quantidade / Tamanho massivo.',
        'Velocidade = Tempo real, fluxo contínuo (streaming).',
        'Variedade = Múltiplos formatos (texto, vídeo, JSON, tabela).',
        'Veracidade = Qualidade, veracidade e ausência de ruído.',
        'Valor = Impacto prático e retorno para o negócio.'
      ]
    }
  },
  {
    id: 'engenharia-dw-lake',
    title: '4. Armazenamento: Data Warehouse vs Data Lake vs ETL/ELT',
    shortDescription: 'Diferenças cruciais entre repositórios corporativos e os fluxos de ingestão de dados.',
    badge: 'Arquitetura',
    readTime: '9 min',
    keyPoints: [
      'Data Warehouse (DW): dados estruturados, limpos, históricos, para relatórios analíticos (OLAP).',
      'Data Lake: dados brutos (raw), de todos os tipos (estruturados, semi e não estruturados), em escala.',
      'ETL (Extract, Transform, Load): transforma antes de carregar (tradicional para DW).',
      'ELT (Extract, Load, Transform): carrega no estado bruto e transforma depois sob demanda (típico de nuvem e Data Lakes).',
      'Data Mart: subconjunto focado em uma área específica (ex: RH, Vendas).'
    ],
    content: {
      intro: 'Toda organização precisa guardar dados do passado para planejar o futuro. Concursos amam cobrar o contraste entre Data Warehouse e Data Lake, bem como o processo de ETL vs ELT.',
      subsections: [
        {
          subtitle: 'Comparativo Direto: Data Warehouse vs Data Lake',
          text: 'O Data Warehouse é uma "biblioteca catalogada", onde tudo já está classificado e limpo. O Data Lake é um "lago com toda a água natural que desce das montanhas", onde a água bruta fica preservada até que alguém precise filtrá-la.',
          comparisonTable: {
            headers: ['Critério', 'Data Warehouse (DW)', 'Data Lake'],
            rows: [
              ['Tipo de Dado', 'Apenas estruturados (e limpos)', 'Brutos: estruturados, semi e não estruturados'],
              ['Esquema', 'Schema-on-Write (definido antes de gravar)', 'Schema-on-Read (definido na leitura)'],
              ['Usuários típicos', 'Analistas de negócios, gestores (BI)', 'Cientistas de dados, engenheiros de ML'],
              ['Processamento', 'ETL tradicional', 'ELT (Load imediato)'],
              ['Finalidade', 'Relatórios rápidos, dashboards, KPIs', 'Exploração analítica, IA, Big Data, deep learning'],
              ['Risco comum', 'Custo alto e rigidez de mudanças', 'Tornar-se um "Data Swamp" (Pântano de Dados)']
            ]
          },
          examTip: 'Data Swamp (Pântano de Dados): conceito cobrado pela FGV/Cebraspe. Ocorre quando o Data Lake recebe dados desordenados sem governança e metadados, tornando impossível encontrar informações úteis.'
        },
        {
          subtitle: 'ETL vs ELT: Qual a diferença?',
          text: '• ETL (Extract, Transform, Load):\n  1. Extração: busca dados nos sistemas transacionais (ERP, CRM).\n  2. Transformação: higieniza, converte tipos, remove duplicatas em um servidor intermediário (Staging Area).\n  3. Carga: grava os dados prontos no Data Warehouse.\n\n• ELT (Extract, Load, Transform):\n  1. Extração: busca os dados nas origens.\n  2. Carga: grava IMEDIATAMENTE no Data Lake em formato bruto.\n  3. Transformação: o processamento é feito DEPOIS, utilizando o poder computacional distribuído da própria nuvem.',
          example: 'Se a questão falar que "no processo ELT, os dados brutos são persistidos no repositório antes de sua transformação", o item está CORRETO!'
        },
        {
          subtitle: 'OLTP vs OLAP',
          text: '• OLTP (Online Transaction Processing): Foco no dia a dia da operação. Milhares de transações curtas por segundo (insert, update). Ex: caixa eletrônico, carrinho de compras. Banco normalizado (evita redundância).\n• OLAP (Online Analytical Processing): Foco na análise histórica e tomada de decisão estratégica. Consultas complexas em grandes volumes (select com agregações). Base do Data Warehouse. Modelagem dimensional (Star Schema / Snowflake).',
          examTip: 'Star Schema (Esquema Estrela): Possui uma tabela FATO no centro (métricas numéricas como valor da venda) rodeada por tabelas DIMENSÃO desnormalizadas (tempo, cliente, produto).'
        }
      ],
      bancaTrap: 'Dizer que "o Data Lake exige que os dados sejam normalizados e passem por limpeza estrita antes de serem armazenados". FALSO! Quem exige limpeza prévia é o Data Warehouse. O Data Lake aceita dados crus (raw).',
      summaryCheatsheet: [
        'DW = Estruturado + Limpo + Schema-on-Write + BI/OLAP.',
        'Data Lake = Qualquer formato + Bruto + Schema-on-Read + ML.',
        'ETL = Transforma ANTES de carregar no destino.',
        'ELT = Carrega PRIMEIRO no lago, transforma sob demanda.',
        'Data Mart = Pedaço do DW para um departamento específico.'
      ]
    }
  },
  {
    id: 'crisp-dm',
    title: '5. Metodologia & Ciclo de Vida: CRISP-DM e KDD',
    shortDescription: 'As 6 fases obrigatórias do CRISP-DM e as etapas do KDD. Questão garantida de prova!',
    badge: 'Metodologias',
    readTime: '7 min',
    keyPoints: [
      'CRISP-DM é a metodologia padrão mais cobrada em concursos de Ciência de Dados.',
      'Possui 6 fases cíclicas e iterativas.',
      'A fase que mais consome tempo é a Preparação dos Dados (cerca de 70% a 80%).',
      'KDD (Knowledge Discovery in Databases) é o processo clássico de 5 etapas.'
    ],
    content: {
      intro: 'Projetos de ciência de dados não são lineares; eles são empíricos e iterativos. O CRISP-DM (Cross-Industry Standard Process for Data Mining) é o modelo de processo mais consagrado nas provas.',
      subsections: [
        {
          subtitle: 'As 6 Fases do CRISP-DM na Ordem Correta',
          text: '1. Entendimento do Negócio (Business Understanding): Definir os objetivos do projeto, metas do negócio e critérios de sucesso.\n2. Entendimento dos Dados (Data Understanding): Coleta inicial, exploração, identificação de problemas de qualidade e formulação de hipóteses.\n3. Preparação dos Dados (Data Preparation): Seleção de variáveis (features), limpeza de nulos, normalização, enriquecimento e transformação. É A FASE QUE MAIS CONSOME TEMPO DO CIENTISTA (até 80% do projeto)!\n4. Modelagem (Modeling): Seleção e aplicação dos algoritmos de Machine Learning (ex: treinar Árvores de Decisão, SVM, Redes Neurais).\n5. Avaliação (Evaluation): Verificar se o modelo atende aos objetivos de negócio estabelecidos na Fase 1 (não é apenas métrica técnica, mas valor de negócio).\n6. Implantação (Deployment): Colocar o modelo em produção para uso diário pelos usuários e planejar monitoramento contínuo.',
          examTip: 'O CRISP-DM é CÍCLICO e ITERATIVO. É comum voltar da Avaliação para o Entendimento do Negócio, ou da Modelagem para a Preparação dos Dados.'
        },
        {
          subtitle: 'As 5 Etapas do KDD (Processo Clássico)',
          text: 'O KDD (Knowledge Discovery in Databases) foca na extração de conhecimento não trivial. As etapas são:\n1. Seleção (Selection): Escolha da base de dados.\n2. Pré-processamento (Preprocessing): Limpeza de ruído e tratamento de dados ausentes.\n3. Transformação (Transformation): Redução de dimensionalidade e normalização.\n4. Mineração de Dados (Data Mining): Aplicação dos algoritmos de descoberta de padrões.\n5. Interpretação/Avaliação (Interpretation/Evaluation): Análise dos padrões descobertos para gerar conhecimento útil.',
          example: 'Atenção à distinção: Data Mining (Mineração de Dados) é apenas UMA das etapas dentro do processo maior de KDD!'
        }
      ],
      bancaTrap: 'A banca pergunta qual a fase do CRISP-DM onde se gasta a maior parte do tempo e esforço. Muitos marcam "Modelagem" por acharem que criar algoritmos é o principal. O correto é PREPARAÇÃO DOS DADOS (Data Preparation), que consome até 80% do tempo!',
      summaryCheatsheet: [
        'CRISP-DM tem 6 fases: Negócio → Dados → Preparação → Modelagem → Avaliação → Implantação.',
        'É iterativo (não é cascata engessada).',
        'Fase mais demorada: Preparação dos Dados (~80%).',
        'Data Mining é apenas a etapa central do processo de KDD.'
      ]
    }
  },
  {
    id: 'pre-processamento',
    title: '6. Pré-processamento: Dados Ausentes, Outliers e Escalas',
    shortDescription: '"Lixo entra, lixo sai" (Garbage In, Garbage Out). Como tratar dados antes do algoritmo.',
    badge: 'Preparação',
    readTime: '8 min',
    keyPoints: [
      'Valores ausentes (Missing/Null): podem ser removidos ou imputados (média, mediana ou moda).',
      'Outliers (Valores Discrepantes): pontos anômalos detectados por Boxplot ou Z-score.',
      'Normalização (Min-Max) leva os dados para o intervalo [0, 1].',
      'Padronização (Z-score) deixa os dados com média 0 e desvio padrão 1.',
      'One-Hot Encoding transforma categorias em colunas binárias de 0 e 1.'
    ],
    content: {
      intro: 'Algoritmos matemáticos só entendem números e são vulneráveis a falhas na entrada. O pré-processamento é a etapa onde o cientista higieniza a base para evitar distorções graves.',
      subsections: [
        {
          subtitle: 'Tratamento de Dados Ausentes (Missing Values)',
          text: 'Quando há campos vazios na base:\n• Exclusão: Remove a linha ou a coluna inteira (só recomendável se forem pouquíssimos registros ou se a coluna tiver mais de 60% vazia).\n• Imputação por Média: Substitui os nulos pela média dos outros valores. ATENÇÃO: a média é sensível a outliers!\n• Imputação por Mediana: Substitui pela mediana. Muito mais robusta quando há valores extremos!\n• Imputação por Moda: Para variáveis categóricas (texto/classes), substitui pelo valor mais frequente.',
          examTip: 'Se a distribuição dos dados for assimétrica ou contiver outliers fortes, a MEDIANA é preferível à MÉDIA para imputação.'
        },
        {
          subtitle: 'Detecção e Tratamento de Outliers',
          text: 'Outlier é um registro que se distancia drasticamente do padrão da amostra (ex: uma pessoa com 250 anos de idade em um cadastro).\n• Boxplot (Diagrama de Caixas): Identifica outliers usando o Intervalo Interquartil (IQR = Q3 - Q1). Pontos além de Q3 + 1.5*IQR ou aquém de Q1 - 1.5*IQR são considerados outliers.\n• Tratamento: Podem ser removidos (se forem erros de digitação) ou mantidos/analisados à parte (em detecção de fraudes, o outlier é exatamente o que procuramos!).'
        },
        {
          subtitle: 'Normalização vs Padronização: Não confunda!',
          text: 'Algoritmos baseados em distância (como KNN e K-Means) sofrem se uma variável estiver em escala de 0 a 1 e outra em escala de 0 a 1.000.000.',
          comparisonTable: {
            headers: ['Técnica', 'Fórmula Conceitual', 'Escala Resultante', 'Sensibilidade'],
            rows: [
              ['Normalização (Min-Max)', '(X - Min) / (Max - Min)', 'Fixa entre [0 e 1]', 'Muito sensível a outliers'],
              ['Padronização (Z-Score)', '(X - Média) / Desvio Padrão', 'Média = 0, Desvio Padrão = 1 (sem teto)', 'Mais robusta a outliers']
            ]
          }
        },
        {
          subtitle: 'One-Hot Encoding vs Label Encoding',
          text: '• Label Encoding: Transforma categorias em números (Ex: "Solteiro" = 0, "Casado" = 1, "Divorciado" = 2). Cuidado: o modelo pode achar que "Divorciado" vale o dobro de "Casado"!\n• One-Hot Encoding: Cria uma nova coluna binária (0 ou 1) para cada categoria distinta (Ex: coluna "É_Solteiro", coluna "É_Casado"). Evita criar relações de ordem inexistentes.',
          examTip: 'Use One-Hot Encoding para dados nominais (sem ordem natural) e Label/Ordinal Encoding para dados com hierarquia (ex: Escolaridade: Fundamental, Médio, Superior).'
        }
      ],
      bancaTrap: 'A banca afirma que "todo outlier deve ser compulsoriamente eliminado da base de dados antes de treinar qualquer modelo". FALSO! Em sistemas de detecção de fraudes financeiras e intrusão em redes, os outliers são os eventos mais valiosos.',
      summaryCheatsheet: [
        'Missing: Média (dados simétricos), Mediana (com outliers), Moda (categóricos).',
        'Outlier no Boxplot: Fora dos limites Q1 - 1.5*IQR e Q3 + 1.5*IQR.',
        'Normalização: Escala [0, 1].',
        'Padronização: Média 0 e Desvio Padrão 1.',
        'One-Hot Encoding: Cria colunas binárias para evitar ordem falsa.'
      ]
    }
  },
  {
    id: 'machine-learning',
    title: '7. Machine Learning: Supervisionado, Não Supervisionado e Algoritmos',
    shortDescription: 'O coração da disciplina: classificação, regressão, agrupamento e os algoritmos que mais caem.',
    badge: 'Machine Learning',
    readTime: '10 min',
    keyPoints: [
      'Supervisionado: dados de treino possuem a resposta certa (rótulo/target/label).',
      'Classificação prevê classe discreta (Sim/Não, A/B/C); Regressão prevê valor numérico contínuo (R$, m², temperatura).',
      'Não Supervisionado: não tem gabarito. O algoritmo descobre agrupamentos naturais (Clusterização: K-Means) ou regras de Associação (Apriori).',
      'Principais algoritmos: Árvores de Decisão, Random Forest, Regressão Logística, KNN, Naive Bayes e K-Means.'
    ],
    content: {
      intro: 'Machine Learning é a capacidade de ensinar computadores a reconhecer padrões e tomar decisões a partir de dados históricos, sem que precisem ser explicitamente programados com regras fixas "se/então".',
      subsections: [
        {
          subtitle: '1. Aprendizado Supervisionado (Supervised Learning)',
          text: 'O cientista alimenta o algoritmo com exemplos que contêm tanto as variáveis de entrada (Features/X) quanto o resultado esperado (Target/Rótulo/y).\n\nDivide-se em:\n• Classificação: O alvo é discreto/categórico.\n  Exemplos: O e-mail é "Spam" ou "Não-spam"? O cliente é "Adimplente" ou "Inadimplente"?\n  Algoritmos: Regressão Logística, Árvores de Decisão, Random Forest, Naive Bayes, KNN, SVM.\n\n• Regressão: O alvo é contínuo/numérico.\n  Exemplos: Prever o valor do imóvel em reais, prever a temperatura de amanhã, estimar o tempo de entrega em minutos.\n  Algoritmos: Regressão Linear Simples/Múltipla, Árvore de Regressão, Ridge/Lasso.',
          examTip: 'Atenção com o nome "Regressão Logística": apesar de ter regressão no nome, ele é um algoritmo de CLASSIFICAÇÃO (calcula a probabilidade de pertencer a uma classe).'
        },
        {
          subtitle: '2. Aprendizado Não Supervisionado (Unsupervised Learning)',
          text: 'Os dados NÃO possuem rótulo de resposta. O algoritmo busca regularidades e grupos intrínsecos.\n\n• Clusterização (Agrupamento): Agrupa instâncias parecidas no mesmo grupo e separa as diferentes.\n  Algoritmo mais famoso: K-Means (onde K é o número pré-definido de grupos escolhido pelo usuário).\n\n• Associação: Encontra regras de coocorrência em cestas de compras ("Market Basket Analysis").\n  Algoritmo famoso: Apriori ("Quem compra pão e manteiga também compra café com 80% de confiança").\n\n• Redução de Dimensionalidade: Comprime muitas variáveis em poucas mantendo a variância.\n  Técnica famosa: PCA (Principal Component Analysis).'
        },
        {
          subtitle: 'Guia Rápido dos Principais Algoritmos para Concurso',
          text: 'Decorando para a prova:\n• Árvore de Decisão: Fácil de interpretar, cria regras em formato de árvore hierárquica. Tende a sofrer de overfitting se não for podada.\n• Random Forest (Floresta Aleatória): Combina dezenas de árvores de decisão (Ensemble de Bagging) para melhorar a precisão e reduzir o overfitting.\n• KNN (K-Nearest Neighbors): Classifica o novo dado com base no voto dos K vizinhos mais próximos pela distância euclidiana. É um algoritmo "preguiçoso" (Lazy Learner).\n• Naive Bayes: Baseado no Teorema de Bayes, assume que todas as variáveis são mutuamente independentes (premissa "ingênua"). Excelente para classificação de texto e spam.\n• K-Means: Define K centros (centróides) e itera calculando a distância de cada ponto até o centróide mais próximo até convergir.'
        }
      ],
      bancaTrap: 'Pegadinha certeira: A banca afirma que "No algoritmo K-Means, o valor de K é determinado automaticamente pelo próprio algoritmo sem intervenção do usuário". FALSO! O número de clusters K deve ser especificado previamente pelo analista (que costuma usar o Método do Cotovelo / Elbow Method para auxiliar na escolha).',
      summaryCheatsheet: [
        'Supervisionado = Tem gabarito (Classificação: rótulo; Regressão: número).',
        'Não Supervisionado = Sem gabarito (Clusterização/K-Means, Associação/Apriori).',
        'Regressão Logística = Classificação (prevê probabilidades binárias).',
        'KNN = Baseado na distância dos K vizinhos mais próximos.',
        'Naive Bayes = Assume independência condicional entre variáveis.'
      ]
    }
  },
  {
    id: 'overfitting-underfitting',
    title: '8. Overfitting, Underfitting e o Trade-off Viés-Variância',
    shortDescription: 'O drama da modelagem: quando o modelo decora demais ou quando não aprende nada.',
    badge: 'Desempenho',
    readTime: '7 min',
    keyPoints: [
      'Overfitting (Sobreajuste): Alta Variância e Baixo Viés. O modelo decorou os dados de treino e falha nos dados novos.',
      'Underfitting (Subajuste): Alto Viés e Baixa Variância. O modelo é simples demais e não aprendeu nem o básico.',
      'Generalização: a capacidade de o modelo performar bem em dados que ele nunca viu antes.',
      'Técnicas anti-overfitting: Divisão Treino/Teste, Validação Cruzada K-Fold, Poda de Árvores, Regularização (Lasso L1 / Ridge L2).'
    ],
    content: {
      intro: 'O maior objetivo de qualquer modelo de aprendizado de máquina é a **Generalização** — ter alta taxa de acerto em dados inéditos do mundo real.',
      subsections: [
        {
          subtitle: 'Overfitting vs Underfitting: O Comparativo Definitivo',
          text: 'Pense no estudante para um concurso:\n• Underfitting: Estudou apenas 10 minutos, chegou na prova e não sabe responder nada (erro alto no treino e alto no teste).\n• Overfitting: Decorou as 50 questões do livro com vírgulas e pontos. Tirou 10 no simulado. Na prova real, caiu uma questão com números trocados e ele errou tudo (erro baixíssimo no treino, erro altíssimo no teste).\n• Modelo Ideal: Entendeu a teoria e o raciocínio, acertando questões novas da vida real.',
          comparisonTable: {
            headers: ['Característica', 'Underfitting (Subajuste)', 'Modelo Balanceado', 'Overfitting (Sobreajuste)'],
            rows: [
              ['Erro no Treino', 'Alto', 'Baixo', 'Quase Zero (perfeito)'],
              ['Erro no Teste / Novos', 'Alto', 'Baixo', 'Muito Alto (desastroso)'],
              ['Complexidade', 'Muito simples', 'Equilibrada', 'Complexo demais'],
              ['Viés (Bias)', 'Alto', 'Moderado', 'Baixo'],
              ['Variância (Variance)', 'Baixa', 'Moderada', 'Alta']
            ]
          }
        },
        {
          subtitle: 'Como Combater o Overfitting (Questão Certa de Prova)',
          text: '1. Regularização:\n   • Ridge (L2): Adiciona penalidade quadrática aos coeficientes, encolhendo-os.\n   • Lasso (L1): Adiciona penalidade absoluta aos coeficientes e pode ZERAR variáveis irrelevantes (faz seleção automática de features!).\n2. Validação Cruzada (K-Fold Cross-Validation): Divide os dados em K pedaços, treina em K-1 e testa no pedaço restante, repetindo K vezes.\n3. Early Stopping (Parada Precoce): Interromper o treinamento de redes neurais antes que comecem a memorizar ruídos.\n4. Dropout: Desativar neurônios aleatoriamente durante o treino em redes profundas.\n5. Poda (Pruning): Cortar galhos excessivamente específicos em árvores de decisão.'
        }
      ],
      bancaTrap: 'Dizer que "um modelo com 100% de acerto na base de treinamento é a prova definitiva de um modelo perfeito para produção". Errado! Esse é o sintoma clássico de OVERFITTING grave.',
      summaryCheatsheet: [
        'Overfitting: Decorou o treino, erra no teste (Baixo Viés, Alta Variância).',
        'Underfitting: Não aprendeu nem no treino (Alto Viés, Baixa Variância).',
        'Lasso (L1): Pode zerar coeficientes (seleciona features).',
        'Ridge (L2): Encolhe coeficientes próximos de zero, mas não elimina.',
        'K-Fold: Divide em K partes para avaliar robustez sem viés de partição.'
      ]
    }
  },
  {
    id: 'metricas-matriz',
    title: '9. Métricas de Avaliação & Matriz de Confusão',
    shortDescription: 'Acurácia, Precisão, Sensibilidade/Recall, F1-Score e o Erro Tipo I vs Tipo II.',
    badge: 'Métricas',
    readTime: '9 min',
    keyPoints: [
      'Matriz de Confusão cruza o Real com o Previsto: VP, VN, FP e FN.',
      'Falso Positivo (FP) = Erro Tipo I (Alarme Falso).',
      'Falso Negativo (FN) = Erro Tipo II (Omissão Crítica).',
      'Acurácia engana em bases desbalanceadas (O Paradoxo da Acurácia).',
      'F1-Score é a média harmônica entre Precisão e Recall.'
    ],
    content: {
      intro: 'Em concursos, as bancas adoram dar uma pequena tabela com 4 números e pedir para você calcular Acurácia, Precisão ou Recall, ou perguntar qual métrica priorizar em diagnósticos médicos ou fraudes.',
      subsections: [
        {
          subtitle: 'Os 4 Elementos da Matriz de Confusão',
          text: 'Considere a classe Positiva = "Ter a Doença":\n• Verdadeiro Positivo (VP): O paciente está doente e o teste deu Positivo (Acerto).\n• Verdadeiro Negativo (VN): O paciente está saudável e o teste deu Negativo (Acerto).\n• Falso Positivo (FP - Erro Tipo I): O paciente está saudável, mas o teste deu Positivo (Alarme falso).\n• Falso Negativo (FN - Erro Tipo II): O paciente está doente, mas o teste disse que está saudável (Erro gravíssimo!).',
          examTip: 'Macete para memorizar os Erros:\n• Tipo I (FP): Condenar um inocente (Alarme falso).\n• Tipo II (FN): Libertar o culpado (Omissão perigosa).'
        },
        {
          subtitle: 'Fórmulas Indispensáveis para Levar para a Prova',
          text: '1. Acurácia = (VP + VN) / Total\n   Mede o percentual geral de acertos.\n\n2. Precisão (Precision) = VP / (VP + FP)\n   "De tudo que o modelo disse ser Positivo, quanto realmente era?"\n   Priorizada quando o custo do Falso Positivo é alto (Ex: filtro de spam; não podemos jogar e-mails importantes do chefe no lixo).\n\n3. Recall / Sensibilidade / Revocação = VP / (VP + FN)\n   "De todos os casos que eram Realmente Positivos no mundo, quantos o modelo conseguiu detectar?"\n   Priorizada quando o custo do Falso Negativo é inaceitável (Ex: diagnóstico de câncer, detecção de bombas, fraudes bancárias graves).\n\n4. F1-Score = 2 * (Precisão * Recall) / (Precisão + Recall)\n   Média harmônica que equilibra precisão e recall quando os dados são desbalanceados.'
        },
        {
          subtitle: 'O "Paradoxo da Acurácia" (Cai em TODA prova)',
          text: 'Imagine uma doença rara que atinge 1 em cada 1.000 pessoas (0,1%). Se criarmos um modelo "burro" que sempre responde "Saudável" para todo mundo sem nem olhar os dados:\n• Ele vai acertar 999 pessoas e errar 1.\n• Acurácia = 99,9%!\n• Porém, o Recall é 0% (ele não encontrou nenhum doente).\nPor isso, em bases desbalanceadas, a ACURÁCIA NÃO SERVE como métrica confiável!',
          example: 'Curva ROC e AUC (Area Under the Curve):\nA curva ROC plota a Taxa de Verdadeiros Positivos (Sensibilidade) contra a Taxa de Falsos Positivos (1 - Especificidade). Uma AUC de 1.0 é um modelo perfeito; 0.5 equivale a jogar uma moeda para o alto (chute aleatório).'
        }
      ],
      bancaTrap: 'A banca pergunta: "Em um sistema de rastreamento de fraude em cartões de crédito, onde deixar de detectar uma fraude acarreta prejuízo milionário, deve-se maximizar prioritariamente a PRECISÃO". FALSO! Deve-se priorizar o RECALL (Revocação/Sensibilidade) para minimizar ao máximo os Falsos Negativos (fraudes não detectadas)!',
      summaryCheatsheet: [
        'Acurácia = Acertos / Total (Cuidado com bases desbalanceadas!).',
        'Precisão = VP / (VP + FP) → Minimiza alarmes falsos.',
        'Recall = VP / (VP + FN) → Minimiza omissões perigosas (doenças, fraudes).',
        'F1-Score = Média harmônica entre Precisão e Recall.',
        'Erro Tipo I = FP (Alarme falso). Erro Tipo II = FN (Omissão).'
      ]
    }
  }
];
