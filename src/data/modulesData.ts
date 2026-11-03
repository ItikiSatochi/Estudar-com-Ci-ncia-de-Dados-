import { ModuleSection } from '../types';

export const MODULES_DATA: ModuleSection[] = [
  // ==========================================
  // CIÊNCIA DE DADOS - ÊNFASE 8 (TRANSPETRO)
  // ==========================================
  {
    id: 'dikw',
    discipline: 'cienciadados',
    title: '1. Pirâmide DIKW: Dado, Informação, Conhecimento e Sabedoria',
    shortDescription: 'Entenda a evolução da matéria-prima até a decisão estratégica. Conceito clássico da Cesgranrio.',
    badge: 'Fundamentos',
    readTime: '6 min',
    keyPoints: [
      'Dado é o fato bruto, sem contexto isolado (ex: "39").',
      'Informação é o dado contextualizado e organizado (ex: "Temperatura do duto em 39°C").',
      'Conhecimento é a compreensão de causas e padrões operacionais (ex: "39°C indica sobrecarga na bomba").',
      'Sabedoria é a tomada de decisão estratégica preventiva e ética.'
    ],
    content: {
      intro: 'A pirâmide DIKW descreve a jornada do dado bruto até a inteligência operacional na Transpetro. Em concursos, as bancas adoram inverter as definições de Dado e Informação.',
      subsections: [
        {
          subtitle: 'Os 4 Níveis Explicados no Detalhe',
          text: '1. Dado: Sequência de símbolos brutos sem contexto. Ex: "120".\n2. Informação: Dado contextualizado. Ex: "Vazão do duto de 120 m³/h".\n3. Conhecimento: Padrão interpretado. Ex: "Com vazão abaixo de 150 m³/h em regime contínuo, há risco de acúmulo de sedimentos".\n4. Sabedoria: Decisão de alto nível. Ex: "Programar passagem de PIG limpador preventivo e recalibrar válvulas".',
          examTip: 'Cesgranrio adora perguntar se o dado sozinho permite tomada de decisão. A resposta é NÃO! O dado é bruto; precisa virar informação e conhecimento.'
        }
      ],
      bancaTrap: 'Afirmar que o conhecimento independe de agentes cognitivos ou experiência. Falso! Conhecimento exige cognição humana ou inteligência analítica.',
      summaryCheatsheet: [
        'Dado: bruto, sem contexto.',
        'Informação: dado + contexto + relevância.',
        'Conhecimento: compreensão de padrões e causalidade.',
        'Sabedoria: julgamento de valor e decisão estratégica futura.'
      ]
    }
  },
  {
    id: 'tipos-dados',
    discipline: 'cienciadados',
    title: '2. Tipos de Dados: Estruturados, Não Estruturados e Semiestruturados',
    shortDescription: 'Tabelas SQL, arquivos JSON/XML e vídeos/imagens de telemetria.',
    badge: 'Estruturas',
    readTime: '6 min',
    keyPoints: [
      'Estruturados: formato rígido, linhas e colunas (SQL, tabelas de telemetria).',
      'Não Estruturados: sem esquema formal (imagens de drones, vídeos de robôs submarinos, relatórios de áudio).',
      'Semiestruturados: possuem tags e delimitadores internos (JSON de APIs, XML de notas fiscais).'
    ],
    content: {
      intro: 'Nas operações logísticas da Transpetro, convivem dados de sensores em tabelas SQL, telemetria em JSON e inspeções visuais submarinas em vídeos não estruturados.',
      subsections: [
        {
          subtitle: 'A Regra de Ouro da Cesgranrio para JSON e XML',
          text: 'Arquivos JSON e XML NÃO são tabelas tradicionais de banco relacional, mas contêm hierarquias e chaves internas (Schema-on-Read). Por isso, são classificados tecnicamente como DADOS SEMIESTRUTURADOS.',
          examTip: 'A Cesgranrio tenta dizer que JSON é não estruturado. Não caia: JSON e XML são Semiestruturados.'
        }
      ],
      bancaTrap: 'Classificar arquivos JSON como "não estruturados". São SEMIESTRUTURADOS.',
      summaryCheatsheet: [
        'Estruturados: Tabelas, SQL, Schema-on-Write.',
        'Semiestruturados: JSON, XML, NoSQL documental.',
        'Não Estruturados: Vídeos de inspeção, imagens, áudios, PDFs.'
      ]
    }
  },
  {
    id: 'big-data',
    discipline: 'cienciadados',
    title: '3. Big Data e os 5 "Vs"',
    shortDescription: 'Volume, Velocidade, Variedade, Veracidade e Valor nas operações de transporte de óleo e gás.',
    badge: 'Big Data',
    readTime: '6 min',
    keyPoints: [
      'Volume: petabytes gerados por sensores SCADA ao longo de milhares de quilômetros de dutos.',
      'Velocidade: streaming em tempo real para monitorar pressão e prevenir vazamentos.',
      'Variedade: textos, imagens termográficas, tabelas e dados geoespaciais.',
      'Veracidade: filtragem de ruídos para evitar falsos alarmes de vazamento.',
      'Valor: otimização logística de frotas e segurança operacional.'
    ],
    content: {
      intro: 'O Big Data na Transpetro envolve milhares de sensores em navios e dutos gerando dados a cada fração de segundo.',
      subsections: [
        {
          subtitle: 'Os 5 Vs em Detalhes',
          text: '1. Volume: escala gigantesca de armazenamento.\n2. Velocidade: tempo real para contenção de incidentes.\n3. Variedade: formatos heterogêneos simultâneos.\n4. Veracidade: integridade e garantia de que o dado não é ruído de sensor com defeito.\n5. Valor: retorno financeiro, ambiental e de segurança.',
          examTip: 'Veracidade refere-se à confiabilidade dos dados; não confunda com Variabilidade (mudança semântica).'
        }
      ],
      bancaTrap: 'Dizer que Big Data se define exclusivamente pela quantidade de terabytes em disco. Requer variedade e velocidade.',
      summaryCheatsheet: [
        'Volume = Escala massiva.',
        'Velocidade = Streaming em tempo real.',
        'Variedade = Diversidade de formatos.',
        'Veracidade = Qualidade e ausência de ruído.',
        'Valor = Impacto e utilidade para a Companhia.'
      ]
    }
  },
  {
    id: 'engenharia-dw-lake',
    discipline: 'cienciadados',
    title: '4. Data Warehouse, Data Lake & ETL vs ELT',
    shortDescription: 'Repositórios analíticos e pipelines de ingestão de dados da Companhia.',
    badge: 'Arquitetura',
    readTime: '8 min',
    keyPoints: [
      'Data Warehouse (DW): dados estruturados limpos para relatórios executivos (Schema-on-Write).',
      'Data Lake: dados brutos de todos os tipos para modelos de IA e exploração (Schema-on-Read).',
      'ETL: Transforma antes de carregar (DW tradicional).',
      'ELT: Carrega bruto no destino (Lake/Cloud) e transforma sob demanda.'
    ],
    content: {
      intro: 'A governança corporativa exige saber onde guardar dados tratados (Data Warehouse) e onde armazenar dados brutos de telemetria contínua (Data Lake).',
      subsections: [
        {
          subtitle: 'Comparativo DW vs Data Lake',
          text: 'Data Warehouse é como um armazém etiquetado (Schema-on-Write). Data Lake é um repositório amplo em formato nativo (Schema-on-Read). Quando um Data Lake não tem governança nem catálogo, vira um Data Swamp (pântano de dados).',
          comparisonTable: {
            headers: ['Característica', 'Data Warehouse', 'Data Lake'],
            rows: [
              ['Dados', 'Estruturados e tratados', 'Brutos (Raw), qualquer formato'],
              ['Esquema', 'Schema-on-Write', 'Schema-on-Read'],
              ['Uso Principal', 'BI, dashboards gerenciais', 'Machine Learning, exploração, IA'],
              ['Processo', 'ETL clássico', 'ELT moderno']
            ]
          }
        }
      ],
      bancaTrap: 'Dizer que o Data Lake exige limpeza prévia antes do armazenamento. O Data Lake recebe dados brutos.',
      summaryCheatsheet: [
        'DW = Estruturado + Schema-on-Write + BI.',
        'Data Lake = Bruto + Schema-on-Read + IA.',
        'Data Swamp = Lago sem governança.',
        'ELT = Carga imediata, transformação posterior.'
      ]
    }
  },
  {
    id: 'crisp-dm',
    discipline: 'cienciadados',
    title: '5. Ciclo de Vida CRISP-DM: As 6 Fases',
    shortDescription: 'Metodologia padrão de projetos de Data Science. Questão garantida na Cesgranrio.',
    badge: 'Metodologias',
    readTime: '7 min',
    keyPoints: [
      'CRISP-DM possui 6 fases iterativas e cíclicas.',
      'A fase mais demorada é a PREPARAÇÃO DOS DADOS (70% a 80% do tempo).',
      'Ordem: Negócio → Dados → Preparação → Modelagem → Avaliação → Implantação.'
    ],
    content: {
      intro: 'Projetos de ciência de dados na Transpetro seguem o ciclo CRISP-DM para garantir que os modelos de IA atendam às metas estratégicas.',
      subsections: [
        {
          subtitle: 'As 6 Fases na Sequência',
          text: '1. Business Understanding: objetivos de negócio e critérios de sucesso.\n2. Data Understanding: exploração inicial e verificação de qualidade.\n3. Data Preparation: limpeza, imputação e engenharia de variáveis (consome 80% do esforço!).\n4. Modeling: treino de algoritmos de Machine Learning.\n5. Evaluation: checagem se o modelo atingiu os objetivos de negócio.\n6. Deployment: colocação do modelo em produção e monitoramento contínuo.',
          examTip: 'A Cesgranrio pergunta em qual fase se gasta mais tempo. A resposta é PREPARAÇÃO DOS DADOS!'
        }
      ],
      bancaTrap: 'Marcar que a Modelagem é a fase que mais consome tempo. É a Preparação dos Dados.',
      summaryCheatsheet: [
        'Fase 1: Negócio | Fase 2: Dados | Fase 3: Preparação (80% tempo).',
        'Fase 4: Modelagem | Fase 5: Avaliação | Fase 6: Implantação.',
        'Ciclo iterativo com voltas frequentes.'
      ]
    }
  },
  {
    id: 'pln-nlp',
    discipline: 'cienciadados',
    title: '6. Processamento de Linguagem Natural (PLN / NLP)',
    shortDescription: 'Explícito no edital: mineração de textos, relatórios de manutenção, contratos e chamados.',
    badge: 'Ênfase 8 - Edital',
    readTime: '9 min',
    keyPoints: [
      'Tokenização: quebra do texto em palavras ou subpalavras (tokens).',
      'Stopwords: palavras frequentes sem valor semântico (de, a, o, em) que são removidas.',
      'Stemming (redução ao radical: "estud-") vs Lemmatization (forma canônica de dicionário: "estudar").',
      'TF-IDF: mede a importância de uma palavra em um documento em relação ao corpus.',
      'Word Embeddings (Word2Vec, BERT): representação vetorial densa com proximidade semântica.'
    ],
    content: {
      intro: 'A ênfase de Ciência de Dados da Transpetro cita explicitamente o uso de PLN para automação e análise de documentos técnicos, contratos de serviços e relatórios de bordo.',
      subsections: [
        {
          subtitle: 'Etapas Clássicas de Pré-processamento de Texto',
          text: '1. Tokenização: segmentar a frase em unidades mínimas.\n2. Remoção de Stopwords: eliminar preposições e artigos.\n3. Stemming: algoritmo rápido de corte de sufixos (ex: algoritmo de Porter). Pode gerar palavras inexistentes.\n4. Lemmatization: processo mais refinado que consulta vocabulário e morfologia gramatical para encontrar o lema correto do dicionário.',
          examTip: 'Cesgranrio ama diferenciar: Stemming é corte bruto de sufixo baseado em regras; Lemmatization usa análise morfológica e gramatical de dicionário.'
        },
        {
          subtitle: 'Vetorização: Bag-of-Words vs TF-IDF vs Embeddings',
          text: '• Bag of Words (BoW): Apenas conta a frequência das palavras. Ignora a ordem e o contexto.\n• TF-IDF (Term Frequency - Inverse Document Frequency):\n  - TF: quão frequente a palavra é no texto específico.\n  - IDF: penaliza palavras que aparecem em quase todos os documentos do corpus (como "relatório").\n  - Palavras com alto TF-IDF são raras no conjunto geral, mas frequentes no documento analisado (são as palavras-chave mais discriminatórias!).\n• Word Embeddings (Word2Vec, GloVe, BERT): Representam palavras como vetores contínuos densos em espaço multidimensional, onde palavras de mesmo contexto semântico ficam geometricamente próximas (ex: vetor("Navio") próximo de vetor("Petroleiro")).',
          example: 'TF-IDF da palavra "petróleo" em um banco de 10.000 relatórios da Transpetro: como quase todos os relatórios contêm "petróleo", seu IDF será muito baixo, reduzindo seu poder discriminatório.'
        }
      ],
      bancaTrap: 'Dizer que o Bag of Words preserva a ordem gramatical e a semântica profunda das frases. O BoW ignora a ordem sintática!',
      summaryCheatsheet: [
        'Tokenização = Quebra em palavras/tokens.',
        'Stemming = Reduz ao radical bruto (ex: correr, correndo → corr).',
        'Lemmatização = Retorna à forma de dicionário (ex: foi, fomos → ser/ir).',
        'TF-IDF = Recompensa termos frequentes no texto, mas raros no corpus.',
        'Word Embeddings = Vetores densos de contexto semântico.'
      ]
    }
  },
  {
    id: 'pdi-visao',
    discipline: 'cienciadados',
    title: '7. Processamento Digital de Imagens (PDI & Visão Computacional)',
    shortDescription: 'Explícito no edital: inspeção visual de dutos, cascos de navios, corrosão e vazamentos.',
    badge: 'Ênfase 8 - Edital',
    readTime: '9 min',
    keyPoints: [
      'Imagem digital: matriz 2D (tons de cinza) ou 3D (canais RGB: Red, Green, Blue) de pixels [0 a 255].',
      'Filtros espaciais: convolução de uma máscara (kernel) sobre a matriz de pixels.',
      'Filtro da Média/Gaussiano: suaviza ruídos (blur). Filtro de Sobel/Canny: detecta bordas e fissuras.',
      'CNN (Rede Neural Convolucional): padrão ouro para visão computacional.',
      'Camadas da CNN: Convolução (extrai mapas de características), MaxPooling (reduz dimensionalidade), Densa (classificação final).'
    ],
    content: {
      intro: 'O processamento de imagens é essencial na Transpetro para analisar fotos de drones e filmagens de robôs submarinos inspecionando dutos submarinos em busca de pontos de ferrugem, corrosão ou trincas.',
      subsections: [
        {
          subtitle: 'Fundamentos de Imagens Digitais e Convolução',
          text: 'Uma imagem colorida de 1080x1920 pixels possui 3 canais de cor (Vermelho, Verde e Azul - RGB), totalizando matrizes numéricas com valores de intensidade de 0 (preto) a 255 (intensidade máxima).\n\nA Convolução Espacial aplica uma matriz menor (chamada Kernel ou Máscara, tipicamente 3x3) deslizando sobre a imagem pixel a pixel para calcular produtos e somas, transformando a imagem original.',
          examTip: 'Para suavizar ruído: filtro Gaussiano (passa-baixas). Para realçar trincas e bordas: filtro de Sobel ou Laplaciano (passa-altas).'
        },
        {
          subtitle: 'Arquitetura de Redes Convolucionais (CNN)',
          text: '1. Camada Convolucional (Conv): Usa filtros aprendidos automaticamente para detectar bordas, curvas e texturas de ferrugem.\n2. Camada de Ativação (ReLU): Introduz não-linearidade (substitui negativos por zero).\n3. Camada de Pooling (ex: MaxPooling): Reduz a resolução espacial mantendo o valor máximo de cada quadrante (torna o modelo invariante a pequenas translações e diminui o custo computacional).\n4. Camada Totalmente Conectada (Dense/Fully Connected): Pega as características achatadas (flattened) e realiza a classificação (ex: "Tem corrosão: Sim/Não").',
          example: 'Classificação de imagens de dutos: CNN treinada para distinguir imagens com fissuras críticas de imagens com superfícies íntegras.'
        }
      ],
      bancaTrap: 'Dizer que a camada de Pooling aumenta a resolução da imagem para capturar detalhes menores. FALSO! O Pooling reduz a dimensionalidade espacial para evitar sobreajuste e diminuir o processamento.',
      summaryCheatsheet: [
        'Pixel RGB: valores de 0 a 255 em 3 canais.',
        'Convolução: aplicação de kernel para extrair feições.',
        'Filtro Passa-Baixas = Suaviza ruído. Passa-Altas = Realça bordas/trincas.',
        'CNN = Convolução + ReLU + MaxPooling + Fully Connected.'
      ]
    }
  },
  {
    id: 'estatistica-modelagem',
    discipline: 'cienciadados',
    title: '8. Estatística Descritiva, Inferência e Testes de Hipótese',
    shortDescription: 'Cálculo de médias, variância, desvio padrão, distribuição normal e p-valor.',
    badge: 'Estatística',
    readTime: '8 min',
    keyPoints: [
      'Média: sensível a outliers. Mediana: medida robusta de posição central.',
      'Variância e Desvio Padrão: medem a dispersão dos dados em torno da média.',
      'Distribuição Normal (Gaussiana): simétrica em formato de sino (Média = Mediana = Moda).',
      'Regra Empírica da Normal: ~68% dos dados a ±1 DP, ~95% a ±2 DP, ~99.7% a ±3 DP.',
      'P-valor < 0,05: rejeita-se a Hipótese Nula (H0), evidência estatística de efeito real.'
    ],
    content: {
      intro: 'A tomada de decisão em operações navais e dutoviárias exige sólida base estatística para validar se uma melhoria no processo é estatisticamente significativa ou mero acaso.',
      subsections: [
        {
          subtitle: 'Medidas de Tendência Central e Dispersão',
          text: '• Média: Soma dividida pelo número de observações. Se houver um outlier extremo, ela é puxada drasticamente.\n• Mediana: O valor do meio após ordenar os dados. Não sofre com outliers.\n• Variância: Média dos quadrados das diferenças em relação à média.\n• Desvio Padrão: Raiz quadrada da variância (está na mesma unidade de medida dos dados originais!).',
          examTip: 'Cesgranrio ama perguntar: "O desvio padrão está na mesma unidade de medida da variável original?" Resposta: SIM! A variância está na unidade ao quadrado.'
        },
        {
          subtitle: 'Testes de Hipótese e o P-Valor (P-Value)',
          text: '• Hipótese Nula (H0): Suposição de que NÃO há diferença ou efeito (ex: "O novo aditivo anticorrosivo não alterou a taxa de desgaste").\n• Hipótese Alternativa (H1): Suposição de que há efeito real ou diferença estatisticamente significativa.\n• P-valor (Nível Descritivo): Probabilidade de obter um resultado igual ou mais extremo que o observado, admitindo que H0 seja verdadeira.\n• Regra de Ouro: Se P-valor < Nível de Significância (alfa = 0,05 ou 5%), REJEITA-SE H0! Conclui-se que o efeito é real.',
          example: 'Se um teste estatístico gerou p-valor = 0,01, como 0,01 < 0,05, rejeita-se a hipótese de que o modelo antigo é igual ao novo.'
        }
      ],
      bancaTrap: 'Afirmar que a variância tem a mesma unidade de medida dos dados. A variância é ao quadrado; quem tem a mesma unidade é o DESVIO PADRÃO.',
      summaryCheatsheet: [
        'Média = Sensível a outliers | Mediana = Robusta.',
        'Desvio Padrão = Raiz quadrada da Variância (mesma unidade).',
        'Normal = Média = Mediana = Moda.',
        'P-valor < 0,05 → Rejeita H0 (resultado estatisticamente significativo).'
      ]
    }
  },
  {
    id: 'fiscalizacao-contratos',
    discipline: 'cienciadados',
    title: '9. Fiscalização Técnica e Administrativa de Contratos',
    shortDescription: 'Atribuição explícita do cargo: gestão e fiscalização de bens e serviços na Lei 13.303/2016.',
    badge: 'Atribuição Cargo',
    readTime: '7 min',
    keyPoints: [
      'A Transpetro rege seus contratos pela Lei das Estatais (Lei nº 13.303/2016).',
      'Fiscal Técnico: fiscaliza o cumprimento do objeto, entregáveis, qualidade técnica e acordos de nível de serviço (SLA/ANS).',
      'Fiscal Administrativo: fiscaliza documentação trabalhista, previdenciária, FGTS e notas fiscais das terceirizadas.',
      'Contratos de TI/Software: pagamentos vinculados a entregas e resultados mensuráveis, vedada a remuneração por mera hora-homem presencial sem produto.',
      'Recebimento Provisório (conferência do fiscal) vs Recebimento Definitivo (termo formal de aceitação após testes).'
    ],
    content: {
      intro: 'O edital da Ênfase 8 define que o Cientista de Dados da Transpetro deve "Executar a fiscalização técnica e administrativa dos contratos de bens e serviços", como contratação de ferramentas em nuvem, consultorias de IA e equipamentos de medição.',
      subsections: [
        {
          subtitle: 'Fiscal Técnico vs Fiscal Administrativo',
          text: '• Fiscal Técnico: É o profissional da área fim (você, Cientista de Dados!). Verifica se o modelo de Machine Learning entregue pela consultoria atinge as métricas de acurácia, se os códigos-fonte foram entregues com documentação e se os prazos do cronograma técnico foram cumpridos.\n• Fiscal Administrativo: Focado na regularidade legal. Confere se a contratada pagou os salários dos funcionários alocados, se recolheu INSS e FGTS, e se as certidões negativas de débito tributário continuam válidas.',
          examTip: 'A Cesgranrio costuma trocar as funções: dizer que o fiscal técnico confere guia de FGTS ou que o fiscal administrativo avalia o código-fonte.'
        },
        {
          subtitle: 'Boas Práticas em Contratos de TI e Dados',
          text: '1. Acordo de Nível de Serviço (ANS / SLA): Indicadores claros de desempenho (ex: disponibilidade da API de 99,5%, tempo de resposta menor que 500ms).\n2. Pagamento por Resultado: Em serviços de desenvolvimento de software e IA, o pagamento deve ser atrelado à homologação de sprints e produtos, evitando contratos puramente por homem-hora sem especificação de resultado.\n3. Recebimento Provisório: Pelo fiscal técnico em até X dias para verificação de conformidade.\n4. Recebimento Definitivo: Pela comissão ou gestor após comprovação da adequação aos termos contratuais.',
          example: 'Ao receber um modelo de visão computacional encomendado a uma consultoria terceirizada, o fiscal técnico deve rodar os testes de homologação na base de validação antes de atestar a nota fiscal.'
        }
      ],
      bancaTrap: 'Dizer que o fiscal técnico pode emitir atesto de pagamento mesmo constatando que as certidões de FGTS da empresa estão vencidas, pois isso seria irrelevante para a área técnica. FALSO! O processo de pagamento exige a conformidade técnica E a regularidade fiscal/trabalhista.',
      summaryCheatsheet: [
        'Fiscal Técnico = Objeto, qualidade, código, métricas, SLA.',
        'Fiscal Administrativo = Guias de FGTS, INSS, certidões trabalhistas e notas.',
        'Contrato de TI = Remuneração atrelada a produtos/resultados, não mera hora presencial.',
        'Recebimento Provisório precede o Recebimento Definitivo.'
      ]
    }
  },

  // ==========================================
  // LÍNGUA PORTUGUESA - BANCA CESGRANRIO
  // ==========================================
  {
    id: 'portugues-conjuncoes',
    discipline: 'portugues',
    title: '1. Conjunções e Conectivos: O Carro-Chefe da Cesgranrio',
    shortDescription: 'O assunto mais cobrado pela Cesgranrio em todas as provas de estatais (Petrobras, Transpetro, BB).',
    badge: 'Português Cesgranrio',
    readTime: '7 min',
    keyPoints: [
      'Concessivas (indicam oposição sem impedir o fato): embora, conquanto, ainda que, mesmo que, apesar de que.',
      'Adversativas (quebra de expectativa/contraste): mas, porém, contudo, todavia, no entanto, entretanto.',
      'Conformativas (conformidade): conforme, segundo, consoante, como.',
      'Causais (motivo do fato principal): porque, já que, visto que, como (no início da frase), uma vez que.',
      'Consecutivas (consequência): tão... que, tanto... que, de modo que.'
    ],
    content: {
      intro: 'Se você fizer 10 provas da Cesgranrio, em todas as 10 haverá pelo menos uma questão pedindo para substituir uma conjunção ou identificar o valor semântico de um conectivo no texto.',
      subsections: [
        {
          subtitle: 'A Batalha das Oposições: Concessiva vs Adversativa',
          text: '• Conjunção Adversativa: Conecta orações coordenadas. Introduz um argumento que prevalece.\n  Exemplo: "O investimento em inteligência artificial é alto, CONTUDO os ganhos de eficiência compensam."\n  (Conectivos: mas, porém, contudo, todavia, no entanto, entretanto).\n\n• Conjunção Concessiva: Conecta oração subordinada. Admite um obstáculo, mas que NÃO impede a realização da oração principal. É a favorita absoluta da Cesgranrio!\n  Exemplo: "EMBORA o mar estivesse revolto, o navio atracou no terminal com segurança."\n  (Conectivos: embora, conquanto, ainda que, posto que, se bem que, apesar de que).',
          examTip: 'A Cesgranrio AMA o conectivo "CONQUANTO". Lembre-se: CONQUANTO = EMBORA (Concessão). Não confunda com "porquanto" (que significa porque/visto que - causal).'
        },
        {
          subtitle: 'Tabela de Substituições Aceitas pela Cesgranrio',
          text: 'Memorize as equivalências para responder rápido a questões de substituição de conectivos:',
          comparisonTable: {
            headers: ['Valor Semântico', 'Conectivos Equivalentes', 'Atenção Especial'],
            rows: [
              ['Concessão', 'embora = conquanto = ainda que = apesar de que', 'Exige verbo no subjuntivo'],
              ['Adversidade', 'contudo = todavia = porém = no entanto', 'Não exige subjuntivo'],
              ['Causa', 'já que = visto que = uma vez que = porquanto', '"Como" no início da frase tem valor de causa'],
              ['Conformidade', 'conforme = segundo = consoante = de acordo com', 'Ideia de acordo/referência'],
              ['Proporção', 'à medida que = à proporção que', 'Cuidado com "na medida em que" (é causal!)']
            ]
          }
        }
      ],
      bancaTrap: 'A Cesgranrio tenta trocar "na medida em que" por "à medida que". Cuidado! "À medida que" indica proporção; "Na medida em que" indica causa (já que/visto que). As bancas punem quem mistura!',
      summaryCheatsheet: [
        'Conquanto = Embora (Concessão - campeã da Cesgranrio).',
        'Porquanto = Porque / Visto que (Causa/Explicação).',
        'Contudo / Todavia = Mas / Porém (Adversativa).',
        'À medida que = Proporção | Na medida em que = Causa.'
      ]
    }
  },
  {
    id: 'portugues-crase-regencia',
    discipline: 'portugues',
    title: '2. Crase, Regência Verbal e Concordância',
    shortDescription: 'Regras práticas e os casos proibidos que eliminam 4 alternativas na prova.',
    badge: 'Português Cesgranrio',
    readTime: '8 min',
    keyPoints: [
      'Crase Proibida: antes de palavra masculina, antes de verbo, antes de pronomes de tratamento e palavras repetidas.',
      'Crase Facultativa: diante de nome próprio feminino, pronome possessivo feminino singular e depois da preposição "até".',
      'Verbo Haver (no sentido de existir/ocorrer ou tempo decorrido) é IMPESSOAL: não vai para o plural!',
      'Partícula "SE": Pronome Apassivador (VTD + se → verbo concorda com o sujeito: "Alugam-se salas").'
    ],
    content: {
      intro: 'As questões gramaticais da Cesgranrio são muito diretas e baseadas em regras canônicas de concordância, regência e acento grave indicativo de crase.',
      subsections: [
        {
          subtitle: 'Os Casos Proibidos de Crase (Elimine alternativas!)',
          text: 'Em 90% das questões de crase da Cesgranrio, basta aplicar os casos proibidos para achar a resposta:\n1. NUNCA ocorre crase antes de verbo: "disposto a colaborar" (sem crase).\n2. NUNCA ocorre crase antes de palavra masculina: "chegamos a pé / pagamento a prazo" (sem crase).\n3. NUNCA antes de palavras repetidas: "dia a dia / cara a cara" (sem crase).\n4. NUNCA antes de pronomes indefinidos ou de tratamento: "pediu a ela / solicitou a Vossa Senhoria" (sem crase, com exceção de senhora e senhorita).\n5. NUNCA com o "a" no singular diante de palavra no plural: "referiu-se a pessoas" (sem crase). Se fosse "às pessoas", teria crase.',
          examTip: 'Macete da troca pelo masculino: Troque a palavra feminina seguinte por uma masculina equivalente (ex: "ir à praia" → "ir ao clube"). Se virou "AO", leva crase!'
        },
        {
          subtitle: 'Concordância Fatal da Cesgranrio: Verbo Haver e Fazer',
          text: '• O verbo HAVER significando "existir", "acontecer" ou indicando tempo transcorrido é IMPESSOAL. Fica sempre na 3ª pessoa do SINGULAR!\n  Correto: "Havia muitos navios no porto" (ERRADO: Haviam muitos navios).\n  Correto: "Deve haver relatórios pendentes" (o verbo auxiliar também fica no singular!).\n\n• O verbo FAZER indicando tempo transcorrido ou clima também é impessoal:\n  Correto: "Faz dez anos que a empresa opera o terminal" (ERRADO: Fazem dez anos).',
          example: 'Questão Cesgranrio: "Na sala de reunião, HAVIAM três diretores." (Item incorreto. O correto é "HAVIA três diretores").'
        }
      ],
      bancaTrap: 'Dizer que o verbo haver concorda com o substantivo seguinte no plural. O termo seguinte é OBJETO DIRETO, não é sujeito! Por isso o verbo fica no singular: "Havia problemas".',
      summaryCheatsheet: [
        'Crase antes de verbo ou palavra masculina: PROIBIDA.',
        'Troca pelo masculino: Virou "AO" no masculino? Crase no feminino.',
        'Haver (existir/tempo) = Sempre no SINGULAR (Havia, Houve, Há).',
        'VTD + se = Verbo concorda com o sujeito paciente (Vendem-se navios).'
      ]
    }
  },
  {
    id: 'portugues-pontuacao-texto',
    discipline: 'portugues',
    title: '3. Pontuação (Uso da Vírgula) & Interpretação de Texto',
    shortDescription: 'Como pontuar corretamente orações e interpretar sem extrapolar o texto da Cesgranrio.',
    badge: 'Português Cesgranrio',
    readTime: '7 min',
    keyPoints: [
      'Regra básica proibitiva: NUNCA se separa o sujeito do predicado por vírgula!',
      'NUNCA se separa o verbo de seu complemento (objeto direto/indireto) por vírgula.',
      'Vírgula obrigatória: adjuntos adverbiais deslocados longos e orações adjetivas explicativas.',
      'Interpretação Cesgranrio: apegar-se estritamente ao que está escrito no texto, sem extrapolar com opiniões pessoais.'
    ],
    content: {
      intro: 'A Cesgranrio costuma abrir a prova com um texto de 30 a 50 linhas sobre tecnologia, sociedade, sustentabilidade ou logística naval, seguido de 5 a 6 questões de interpretação e 4 a 5 de gramática aplicada.',
      subsections: [
        {
          subtitle: 'A Vírgula nas Orações Adjetivas (Muda o sentido!)',
          text: '• Oração Adjetiva Explicativa (COM vírgula): Refere-se à TOTALIDADE dos elementos. Acrescenta uma característica geral a todos.\n  Exemplo: "Os engenheiros da Transpetro, que foram certificados na nova tecnologia, receberam premiação." (Significa que TODOS os engenheiros foram certificados).\n\n• Oração Adjetiva Restritiva (SEM vírgula): Limita, especifica um subgrupo.\n  Exemplo: "Os engenheiros da Transpetro que foram certificados na nova tecnologia receberam premiação." (Significa que APENAS ALGUNS engenheiros foram certificados; os outros não).',
          examTip: 'A Cesgranrio adora perguntar: "A supressão das vírgulas no trecho X altera o sentido original do período?" Se for oração adjetiva, a resposta é SIM! Transforma explicação em restrição.'
        }
      ],
      bancaTrap: 'Extrapolar na interpretação: achar que uma alternativa está certa só porque é uma afirmação verdadeira no mundo real, mas que NÃO foi dita pelo autor no texto.',
      summaryCheatsheet: [
        'Sujeito e Verbo: Sem vírgula intermediária.',
        'Com vírgula = Explicativa (todos).',
        'Sem vírgula = Restritiva (apenas alguns).',
        'Interpretação: Atenha-se exclusivamente ao texto fornecido.'
      ]
    }
  },

  // ==========================================
  // LÍNGUA INGLESA - BANCA CESGRANRIO
  // ==========================================
  {
    id: 'ingles-leitura-estrategia',
    discipline: 'ingles',
    title: '1. Estratégias de Leitura em Inglês: Skimming & Scanning',
    shortDescription: 'Como gabaritar o texto em inglês da Cesgranrio sem precisar traduzir palavra por palavra.',
    badge: 'Inglês Cesgranrio',
    readTime: '6 min',
    keyPoints: [
      'Skimming: leitura rápida e panorâmica para captar o tema central e a tese do autor.',
      'Scanning: busca ocular direta por palavras-chave específicas solicitadas no enunciado (datas, nomes, números, siglas).',
      'Textos da Cesgranrio versam sobre transição energética, petróleo/gás, tecnologia, sustentabilidade e inovação marítima.',
      'Leia primeiro os enunciados das questões antes de ler o texto completo!'
    ],
    content: {
      intro: 'Na prova da Transpetro, o tempo é precioso. Você não precisa ser fluente para gabaritar o inglês da Cesgranrio: basta saber localizar as respostas no texto usando técnicas de leitura instrumental.',
      subsections: [
        {
          subtitle: 'O Passo a Passo do Candidato Estrategista',
          text: 'Passo 1: Leia diretamente o enunciado da Questão 1 e as alternativas. Sublinhe as palavras-chave (ex: nomes próprios, termos técnicos como "offshore", "pipeline", "predictive model").\n\nPasso 2: Faça uma leitura de Skimming do primeiro parágrafo (onde quase sempre está a ideia central do texto) e do último parágrafo (onde fica a conclusão).\n\nPasso 3: Faça o Scanning nos parágrafos intermediários para encontrar a linha exata onde a pergunta está ancorada.',
          examTip: 'A questão número 1 de inglês da Cesgranrio quase sempre pergunta: "The main purpose of the text is to..." ou "The text mainly discusses...". A resposta quase sempre se encontra no primeiro e no último parágrafo.'
        }
      ],
      bancaTrap: 'Tentar traduzir o texto mentalmente em português palavra por palavra. Isso gasta 30 minutos preciosos e cansa o cérebro. Busque os sentidos globais e as palavras-chave.',
      summaryCheatsheet: [
        'Primeiro leia as perguntas, depois o texto.',
        'Primeiro parágrafo = Tese/Tema principal.',
        'Último parágrafo = Conclusão do autor.',
        'Scanning = Encontrar a palavra-chave da pergunta no texto.'
      ]
    }
  },
  {
    id: 'ingles-conectivos-cognatos',
    discipline: 'ingles',
    title: '2. Linking Words (Conectivos) e Falsos Cognatos',
    shortDescription: 'As conjunções em inglês que definem a lógica das frases e pegadinhas de vocabulário.',
    badge: 'Inglês Cesgranrio',
    readTime: '8 min',
    keyPoints: [
      'Contraste/Oposição: However (contudo), Although/Even though (embora), Despite/In spite of (apesar de), Whereas (enquanto que).',
      'Adição: Furthermore, Moreover, Besides, In addition to (além disso).',
      'Causa e Consequência: Therefore (portanto), Thus (assim/portanto), Consequently, Because of / Due to (devido a).',
      'Falsos Cognatos: Actually = na verdade; Eventually = no final das contas; Pretend = fingir; Intend = pretender.'
    ],
    content: {
      intro: 'A Cesgranrio frequentemente destaca uma palavra em negrito no texto (ex: "The word **ALTHOUGH** in paragraph 2 can be replaced with...") e pede o sinônimo ou a ideia expressa.',
      subsections: [
        {
          subtitle: 'Linking Words mais cobradas pela Cesgranrio',
          text: 'As conjunções de oposição e adição são as mais recorrentes nas provas da Cesgranrio:',
          comparisonTable: {
            headers: ['Função Lógica', 'Conectivos em Inglês', 'Tradução / Equivalente'],
            rows: [
              ['Contraste / Concessão', 'However, Nevertheless, Although, Despite', 'Porém, Todavia, Embora, Apesar de'],
              ['Adição de Ideia', 'Furthermore, Moreover, In addition, Besides', 'Além disso, Ademais'],
              ['Conclusão / Resultado', 'Therefore, Thus, Hence, As a result', 'Portanto, Por conseguinte, Sendo assim'],
              ['Causa / Motivo', 'Due to, Owing to, Since, Because of', 'Devido a, Visto que, Porque']
            ]
          },
          examTip: 'Note a diferença de estrutura: "Although" é seguido por uma oração completa com verbo (sujeito + verbo). "Despite" é seguido diretamente por substantivo ou verbo com -ing (ex: "Despite the rain / Despite working hard").'
        },
        {
          subtitle: 'Falsos Cognatos Clássicos de Prova (False Friends)',
          text: '• Actually: Significa "na verdade / realmente" (NÃO é atualmente! Atualmente se diz "currently" ou "nowadays").\n• Eventually: Significa "ao final / com o tempo / no fim das contas" (NÃO é eventualmente no sentido de às vezes! Às vezes se diz "occasionally").\n• Intend: Significa "pretender / ter intenção de".\n• Pretend: Significa "fingir / simular" (ex: "He pretended to know" = Ele fingiu que sabia).\n• Notice: Significa "perceber / notar / aviso" (Notícia se diz "news").',
          example: 'A Cesgranrio adora colocar uma questão dizendo que "Eventually" expressa algo incerto. Errado! "Eventually" expressa um resultado final inevitável com o passar do tempo.'
        }
      ],
      bancaTrap: 'Traduzir "Actually" como "atualmente". Significa "na verdade". Para "atualmente", use "currently".',
      summaryCheatsheet: [
        'However / Although = Ideia de contraste/oposição.',
        'Furthermore / Moreover = Adição de ideia.',
        'Therefore / Thus = Conclusão/consequência.',
        'Actually = Na verdade (não é atualmente).',
        'Eventually = Com o tempo/no final (não é ocasionalmente).'
      ]
    }
  },
  {
    id: 'ingles-vocabulario-tecnico',
    discipline: 'ingles',
    title: '3. Vocabulário Técnico: Óleo, Gás, Logística e Ciência de Dados',
    shortDescription: 'Os termos operacionais da Transpetro e tecnológicos que aparecem nos textos da Cesgranrio.',
    badge: 'Vocabulário',
    readTime: '6 min',
    keyPoints: [
      'Logística & Óleo: Pipeline (duto/oleoduto), Vessel/Tanker (navio-tanque/petroleiro), Offshore (em alto mar), Onshore (em terra), Fleet (frota).',
      'Operação & Segurança: Leakage / Spill (vazamento/derramamento), Flaw / Crack (trinca/falha), Maintenance (manutenção), Storage terminal (terminal de armazenamento).',
      'Tecnologia: Predictive maintenance (manutenção preditiva), Raw data (dados brutos), Framework (estrutura), Benchmark (padrão de referência).'
    ],
    content: {
      intro: 'Os textos de língua inglesa da Cesgranrio em concursos da Transpetro são invariavelmente retirados de publicações como Harvard Business Review, The Guardian, MIT Technology Review, Oil & Gas Journal e artigos sobre transporte marítimo sustentável.',
      subsections: [
        {
          subtitle: 'Glossário Técnico Bilíngue Transpetro',
          text: 'Estes termos operacionais e tecnológicos aparecem frequentemente em enunciados e alternativas:',
          comparisonTable: {
            headers: ['Termo em Inglês', 'Significado Prático no Contexto', 'Exemplo de Frase de Prova'],
            rows: [
              ['Pipeline', 'Duto / Oleoduto / Gasoduto', '"Sensors installed along the pipeline detect pressure anomalies."'],
              ['Vessel / Oil Tanker', 'Navio petroleiro / Embarcação', '"The company operates a modern shipping fleet of oil tankers."'],
              ['Leak detection', 'Detecção de vazamento', '"Machine learning algorithms enhance early leak detection."'],
              ['Offshore / Onshore', 'Em alto mar / Em terra firme', '"Offshore terminals require robust communication networks."'],
              ['Condition monitoring', 'Monitoramento da integridade', '"Computer vision helps in the condition monitoring of hulls."'],
              ['Supply chain', 'Cadeia de suprimentos / Logística', '"Data science optimizes the maritime fuel supply chain."']
            ]
          }
        }
      ],
      bancaTrap: 'Não reconhecer termos fundamentais como "Vessel" (embarcação) ou "Pipeline" (duto), que aparecem no título dos textos.',
      summaryCheatsheet: [
        'Pipeline = Duto / Oleoduto.',
        'Vessel = Navio / Embarcação.',
        'Leak = Vazamento.',
        'Hull = Casco do navio.',
        'Fleet = Frota naval.'
      ]
    }
  },

  // ==========================================
  // NOVOS MÓDULOS ENRIQUECIDOS - CIÊNCIA DE DADOS
  // ==========================================
  {
    id: 'ml-supervisionado',
    discipline: 'cienciadados',
    title: '10. Machine Learning Supervisionado: Classificação e Regressão',
    shortDescription: 'Árvores de Decisão, Random Forest, SVM, Regressão Logística, Linear e KNN com exemplos práticos.',
    badge: 'Machine Learning',
    readTime: '10 min',
    keyPoints: [
      'Supervisionado: o algoritmo aprende a partir de dados históricos rotulados (com gabarito/target conhecido).',
      'Classificação (variável discreta/categórica): Sim/Não, Falha/Normal, Tipo de Óleo (Árvores, Random Forest, SVM, Logística, KNN, Naive Bayes).',
      'Regressão (variável contínua/numérica): Preço, Volume de Vazão, Horas até quebra (Regressão Linear, Ridge, Lasso, Árvores de Regressão).',
      'Árvores de Decisão: dividem o espaço baseando-se em impureza de Gini ou Entropia/Ganho de Informação.',
      'Random Forest: comitê (ensemble) de múltiplas árvores com amostragem aleatória (Bagging), reduzindo a variância.',
      'SVM (Support Vector Machines): encontra o hiperplano ótimo de margem máxima que separa as classes.'
    ],
    content: {
      intro: 'O Aprendizado Supervisionado é o pilar mais cobrado em provas da Cesgranrio. O modelo recebe exemplos passados contendo as variáveis explicativas (features) e o rótulo correto (target), ajustando seus parâmetros internos para prever novos casos.',
      subsections: [
        {
          subtitle: 'Classificação vs Regressão: A Diferença Crucial de Prova',
          text: 'A distinção entre Classificação e Regressão é uma das perguntas mais frequentes em concursos:\n\n• Classificação: A variável que queremos prever é uma CATEGORIA ou CLASSE (qualitativa/discreta).\n  - Exemplo Transpetro 1: O sensor acusará risco de vazamento? [Classe: "Sim" ou "Não"].\n  - Exemplo Transpetro 2: O combustível atende às especificações da ANP? [Classe: "Conforme", "Não Conforme", "Em Análise"].\n  - Principais Algoritmos: Árvores de Decisão, Random Forest, Regressão Logística, SVM, KNN, Naive Bayes.\n\n• Regressão: A variável que queremos prever é um NÚMERO CONTÍNUO (quantitativo).\n  - Exemplo Transpetro 1: Qual será a vazão exata de óleo em m³/hora no oleoduto amanhã? [Número: 1.450,8 m³/h].\n  - Exemplo Transpetro 2: Quantas horas úteis de operação restam até a bomba necessitar de troca de rolamento? [Número: 342 horas].\n  - Principais Algoritmos: Regressão Linear Simples/Múltipla, Ridge, Lasso, SVR (Support Vector Regression).',
          comparisonTable: {
            headers: ['Problema / Tarefa', 'Tipo de Saída (Target)', 'Algoritmos Recomendados', 'Métricas de Avaliação'],
            rows: [
              ['Classificação', 'Rótulo / Categoria (Sim/Não, A/B/C)', 'Regressão Logística, Random Forest, SVM, KNN', 'Acurácia, Precisão, Recall, F1, ROC-AUC'],
              ['Regressão', 'Valor Numérico Contínuo (R$, m³, Horas)', 'Regressão Linear, Ridge, Lasso, Random Forest Regressor', 'MSE, RMSE, MAE, R² (R-quadrado)']
            ]
          },
          examTip: 'Cuidado com a PEGADINHA da Cesgranrio: apesar do nome ter "Regressão", a REGRESSÃO LOGÍSTICA é um algoritmo de CLASSIFICAÇÃO (prevê probabilidades entre 0 e 1 para classes discretas)!'
        },
        {
          subtitle: 'Os 6 Algoritmos Mais Cobrados e Como Funcionam na Prática',
          text: '1. Árvores de Decisão (Decision Trees): Estrutura hierárquica de regras "SE-ENTÃO". O algoritmo escolhe a melhor divisão usando medidas de pureza como Índice de Gini (quanto mais próximo de 0, mais pura a divisão) ou Entropia (da Teoria da Informação).\n2. Random Forest (Florestas Aleatórias): Cria centenas de árvores independentes treinadas em subconjuntos aleatórios de dados e de variáveis (técnica chamada Bagging). A decisão final é a votação da maioria. Vantagem: é muito mais robusta a overfitting do que uma árvore isolada.\n3. Regressão Logística: Aplica a função sigmoide (curva em S) sobre uma combinação linear de variáveis, convertendo qualquer número em uma probabilidade entre 0% e 100%.\n4. K-Nearest Neighbors (KNN): Não cria modelo prévio (algoritmo "preguiçoso" ou lazy). Quando chega um novo dado, calcula a distância euclidiana para todos os pontos e classifica pela classe predominante entre os K vizinhos mais próximos.\n5. Support Vector Machine (SVM): Busca encontrar o "hiperplano separador ótimo" que maximize a distância (margem) entre as classes. Pontos mais próximos do hiperplano são chamados de "Vetores de Suporte". Quando os dados não são linearmente separáveis, usa funções de Kernel (como RBF/Radial) para projetar os dados em dimensões superiores.\n6. Naive Bayes: Baseado no Teorema de Bayes de probabilidade condicional. É chamado de "Naive" (ingênuo) porque assume a premissa de que todas as variáveis são independentes entre si.',
          example: 'Exemplo Prático na Transpetro: Para prever se uma válvula submarina sofrerá emperramento nas próximas 48h com base em 3 variáveis (pressão em bar, temperatura em °C e tempo desde a última lubrificação em dias), uma Árvore de Decisão faz perguntas consecutivas: "Pressão > 85 bar? Se SIM, Temperatura > 60°C? Se SIM, classe = ALTO RISCO DE FALHA".'
        }
      ],
      bancaTrap: 'Dizer que o Naive Bayes considera correlações complexas entre as variáveis. FALSO! O Naive Bayes assume independência estrita entre os preditores.',
      summaryCheatsheet: [
        'Regressão Logística = Classificação (não regressão!).',
        'Árvores de Decisão = Critério de Gini e Entropia.',
        'Random Forest = Conjunto de árvores (Bagging) para reduzir variância.',
        'KNN = Baseado em distâncias (sensível à escala dos dados).',
        'SVM = Margem máxima e vetores de suporte.'
      ]
    }
  },
  {
    id: 'ml-nao-supervisionado',
    discipline: 'cienciadados',
    title: '11. Machine Learning Não Supervisionado: K-Means, DBSCAN e Apriori',
    shortDescription: 'Clusterização de frotas e dutos, detecção de anomalias por densidade e regras de associação.',
    badge: 'Machine Learning',
    readTime: '9 min',
    keyPoints: [
      'Não Supervisionado: NÃO há rótulos nem gabarito prévio (o algoritmo descobre padrões e agrupamentos ocultos).',
      'K-Means: particiona os dados em K grupos ao redor de centróides médios (calcula distâncias euclidianas iterativamente).',
      'Método do Cotovelo (Elbow Method): técnica para descobrir o número ótimo de clusters K observando a inércia (WCSS).',
      'DBSCAN: clusterização baseada em densidade espacial; detecta automaticamente formas arbitrárias e identifica ruídos (outliers).',
      'Regras de Associação (Apriori): descobre regras do tipo "SE compra A, ENTÃO compra B" (Métricas: Suporte, Confiança e Lift).'
    ],
    content: {
      intro: 'Quando a Transpetro recebe milhões de leituras de sensores sem saber previamente quais navios operam de forma eficiente ou quais dutos têm comportamento atípico, aplicam-se algoritmos Não Supervisionados para agrupar e revelar comportamentos ocultos.',
      subsections: [
        {
          subtitle: 'K-Means em Detalhes: O Algoritmo Campeão de Provas',
          text: 'O K-Means funciona em 4 passos simples e elegantes:\n1. O cientista escolhe o número K de grupos desejados (ex: K = 3).\n2. O algoritmo posiciona K pontos aleatórios no espaço, chamados CENTRÓIDES.\n3. Cada dado da tabela é atribuído ao centróide mais próximo (pela distância euclidiana).\n4. O algoritmo recalcula a posição de cada centróide como sendo a média de todos os pontos atribuídos àquele grupo.\n5. Os passos 3 e 4 se repetem até os centróides pararem de se mover (convergência).\n\n• Como definir o melhor K? Utiliza-se o Método do Cotovelo (Elbow Method): plota-se o gráfico da Inércia (soma das distâncias quadráticas intra-cluster) em função de K. O ponto onde a curva forma uma "dobra de cotovelo" é o K ideal.',
          examTip: 'Cesgranrio adora perguntar limitações do K-Means: ele exige que você defina o K previamente, é muito sensível a outliers (que puxam os centróides) e só identifica clusters esféricos/circulares.'
        },
        {
          subtitle: 'DBSCAN vs K-Means: A Batalha dos Métodos de Agrupamento',
          text: 'Enquanto o K-Means tenta forçar todos os pontos para algum cluster, o DBSCAN (Density-Based Spatial Clustering of Applications with Noise) agrupa regiões densas e separa o ruído:\n• Parâmetros do DBSCAN:\n  - Epsilon (eps): o raio de vizinhança ao redor de cada ponto.\n  - MinPts: o número mínimo de pontos dentro do raio epsilon para formar um núcleo denso.\n• Vantagens do DBSCAN:\n  1. NÃO precisa que você defina o número de clusters K previamente!\n  2. Identifica automaticamente ruídos e outliers (pontos isolados que não atendem ao MinPts são classificados como ruído).\n  3. Consegue encontrar clusters em formatos complexos e orgânicos (não apenas esferas).',
          comparisonTable: {
            headers: ['Critério', 'K-Means', 'DBSCAN'],
            rows: [
              ['Número de Clusters K', 'Obrigatório definir antes', 'Automático (descoberto pelos dados)'],
              ['Sensibilidade a Outliers', 'Alta (o outlier deforma o centróide)', 'Baixa (classifica outliers como ruído)'],
              ['Formato dos Clusters', 'Apenas esféricos / convexos', 'Formatos arbitrários e sinuosos'],
              ['Custo Computacional', 'Rápido, escala bem para Big Data', 'Mais custoso para bases imensas']
            ]
          },
          example: 'Exemplo Prático na Transpetro: Segmentação da frota de navios petroleiros em 3 clusters: Cluster 1 = Navios de longa distância em alto mar com velocidade constante; Cluster 2 = Navios de cabotagem costeira com paradas frequentes; Cluster 3 = Navios operando em manobras portuárias lentas. O K-Means agrupou sem ninguém precisar rotular à mão.'
        },
        {
          subtitle: 'Regras de Associação (Algoritmo Apriori)',
          text: 'Utilizado para mineração de padrões de ocorrências simultâneas (ex: peças que falham juntas em relatórios de manutenção):\n• Suporte (Support): Frequência com que o conjunto de itens aparece na base total: Suporte(A, B) = Ocorrências(A e B) / Total.\n• Confiança (Confidence): Probabilidade de B ocorrer dado que A ocorreu: Confiança(A → B) = Suporte(A, B) / Suporte(A).\n• Lift (Elevação): Mede a força da regra comparada ao acaso. Se Lift > 1, a presença de A aumenta significativamente a chance de B acontecer.',
          examTip: 'Se a questão mencionar "Lift > 1", significa que a associação entre os itens é POSITIVA e não é mero acaso estatístico!'
        }
      ],
      bancaTrap: 'Dizer que o K-Means é ótimo para detectar ruído. FALSO! O K-Means tenta forçar outliers para dentro de algum grupo. O algoritmo especialista em ruído é o DBSCAN.',
      summaryCheatsheet: [
        'K-Means = Exige K prévio, centróides médios, clusters esféricos.',
        'Elbow Method = Acha o K onde a curva de inércia forma um cotovelo.',
        'DBSCAN = Baseado em densidade (Eps e MinPts), isola ruído/outliers.',
        'Apriori = Suporte (frequência), Confiança (condicional), Lift (> 1 indica regra real).'
      ]
    }
  },
  {
    id: 'preprocessamento-overfitting',
    discipline: 'cienciadados',
    title: '12. Pré-processamento, Outliers, Codificação e Regularização',
    shortDescription: 'Limpeza, normalização, One-Hot Encoding, Overfitting vs Underfitting e Regularização L1/L2.',
    badge: 'Engenharia de Dados',
    readTime: '9 min',
    keyPoints: [
      'Tratamento de Nulos: Imputação por Média (dados simétricos), Mediana (robusta a outliers) ou exclusão controlada.',
      'Detecção de Outliers: Regra do Intervalo Interquartil (IQR = Q3 - Q1, limites: Q1 - 1.5*IQR e Q3 + 1.5*IQR) e Z-Score (|Z| > 3).',
      'Normalização Min-Max ([0, 1]) vs Padronização StandardScaler (média 0 e desvio padrão 1).',
      'Codificação: One-Hot Encoding (cria colunas binárias 0/1 para nominais sem ordem) vs Ordinal Encoding (quando há ordem intrínseca).',
      'Overfitting (Sobreajuste): baixo erro no treino, alto erro no teste (o modelo decorou o ruído).',
      'Regularização: Lasso (L1) zera coeficientes irrelevantes (seleção de variáveis); Ridge (L2) encolhe coeficientes sem zerá-los.'
    ],
    content: {
      intro: 'Na prática de um Cientista de Dados na Transpetro, 80% do tempo de um projeto (conforme o CRISP-DM) é dedicado a limpar dados sujos, tratar leituras com defeito e garantir que o modelo generalize bem sem sofrer de overfitting.',
      subsections: [
        {
          subtitle: 'Normalização vs Padronização: Quando Usar Cada Uma?',
          text: 'Algoritmos baseados em distâncias (como KNN, K-Means e SVM) ou em gradiente descendente (como Redes Neurais e Regressão Logística) são extremamente prejudicados se uma variável estiver em escala de milhões e outra em escala de zero a um:\n\n• Normalização (Min-Max Scaling):\n  - Fórmula: X_norm = (X - X_min) / (X_max - X_min)\n  - Transforma todos os valores para o intervalo rígido entre [0 e 1].\n  - Uso recomendado: quando os dados NÃO seguem distribuição normal ou quando o algoritmo exige limites fixos (como redes neurais e imagens).\n\n• Padronização (StandardScaler / Z-Score):\n  - Fórmula: Z = (X - média) / desvio_padrão\n  - Centraliza os dados na média 0 e com desvio padrão unitário 1.\n  - Uso recomendado: quando os dados seguem distribuição Gaussiana (Normal) ou para algoritmos sensíveis como SVM e PCA. É muito mais tolerante a outliers do que o Min-Max!',
          example: 'Telemetria de Dutos: Pressão varia de 50 a 120 bar; Vazão varia de 1.000 a 10.000 m³/h. Sem padronização, o algoritmo de clusterização consideraria a vazão 100 vezes mais importante que a pressão simplesmente porque seus números são maiores!'
        },
        {
          subtitle: 'Codificação de Variáveis Categóricas (Encoding)',
          text: 'Computadores operam com matemática vetorial, não com palavras. Portanto, variáveis de texto devem ser convertidas em números:\n• One-Hot Encoding (Variáveis Dummy):\n  - Cria uma nova coluna binária (0 ou 1) para cada categoria existente.\n  - Exemplo: Tipo de Terminal marítimo: [Ilha Redonda, Angra, Santos]. Cria 3 colunas: Terminal_Ilha, Terminal_Angra, Terminal_Santos.\n  - Recomendado para categorias NOMINAIS (sem hierarquia nem ordem).\n• Ordinal Encoding:\n  - Mapeia categorias para inteiros respeitando uma ordem lógica.\n  - Exemplo: Nível de Gravidade de Alarme: Baixo = 1, Médio = 2, Crítico = 3, Emergência = 4.',
          examTip: 'Cesgranrio ama cobrar: Se você aplicar Ordinal Encoding em categorias que NÃO têm ordem (ex: Cores de Casco de Navio: Vermelho=1, Azul=2, Branco=3), o algoritmo assumirá falsamente que Branco é maior que Vermelho! Por isso usa-se One-Hot Encoding.'
        },
        {
          subtitle: 'Overfitting vs Underfitting e Regularização (Lasso vs Ridge)',
          text: '• Overfitting (Sobreajuste / Alta Variância):\n  - O modelo se ajusta perfeitamente aos dados de treino (acurácia 99%), mas erra grotescamente em dados novos de teste (acurácia 55%).\n  - Causa: modelo complexo demais que decorou o ruído.\n  - Soluções: Reduzir complexidade, usar mais dados de treino, aplicar Validação Cruzada (K-Fold) e aplicar Regularização.\n\n• Underfitting (Subajuste / Alto Viés):\n  - O modelo é simples demais e não consegue aprender nem os dados de treino (acurácia 50% no treino e 50% no teste).\n  - Solução: Adicionar mais variáveis ou usar um algoritmo mais potente.\n\n• Regularização Lasso (L1) vs Ridge (L2):\n  - A regularização adiciona uma penalidade à função de perda para evitar pesos gigantescos:\n  - Ridge (L2): Penaliza o quadrado dos coeficientes. Encolhe os pesos para perto de zero, mas NUNCA os zera completamente.\n  - Lasso (L1): Penaliza o valor absoluto dos coeficientes. Consegue zerar totalmente coeficientes de variáveis inúteis, atuando como um SELETOR AUTOMÁTICO DE VARIÁVEIS!',
          comparisonTable: {
            headers: ['Técnica', 'Penalidade Matemática', 'Efeito nos Coeficientes', 'Especialidade de Prova'],
            rows: [
              ['Ridge (L2)', 'Soma dos quadrados: λ * Σ(w²)', 'Encolhe pesos para próximo de zero', 'Bom quando há multicolinearidade (muitas variáveis correlacionadas)'],
              ['Lasso (L1)', 'Soma dos módulos: λ * Σ|w|', 'Zera pesos irrelevantes', 'Atua como seleção de variáveis (Feature Selection)']
            ]
          }
        }
      ],
      bancaTrap: 'Confundir Lasso com Ridge: Guarde a letra L de Lasso = Limpa/Zera variáveis!',
      summaryCheatsheet: [
        'Min-Max = Escala [0, 1] | StandardScaler = Média 0, DP 1.',
        'One-Hot Encoding = Para nominais sem ordem (cria colunas 0/1).',
        'Ordinal Encoding = Para ordens com hierarquia (Baixo, Médio, Alto).',
        'Overfitting = Baixo erro no treino, alto no teste (decorou o ruído).',
        'Lasso L1 = Zera variáveis | Ridge L2 = Encolhe coeficientes.'
      ]
    }
  },
  {
    id: 'sql-bancos-dados',
    discipline: 'cienciadados',
    title: '13. Bancos de Dados Relacionais & SQL para Ciência de Dados',
    shortDescription: 'SELECT, WHERE, JOINs (Inner, Left, Right), GROUP BY, HAVING e Window Functions.',
    badge: 'SQL & Bancos',
    readTime: '9 min',
    keyPoints: [
      'SQL (Structured Query Language): linguagem padrão para consulta e manipulação de bancos relacionais (PostgreSQL, Oracle, MySQL, SQL Server).',
      'Ordem Lógica de Execução do SELECT: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.',
      'WHERE vs HAVING: WHERE filtra linhas individuais ANTES do agrupamento; HAVING filtra grupos consolidados APÓS o GROUP BY.',
      'INNER JOIN: retorna apenas registros que possuem correspondência em AMBAS as tabelas.',
      'LEFT JOIN: retorna TODOS os registros da tabela da esquerda, preenchendo com NULL onde não houver correspondência na direita.',
      'Window Functions (ROW_NUMBER, RANK, DENSE_RANK): realizam cálculos sobre partições de linhas sem agrupar em linha única.'
    ],
    content: {
      intro: 'Antes de rodar qualquer algoritmo de Machine Learning, o Cientista de Dados da Transpetro precisa extrair e cruzar dados de bancos de dados relacionais via SQL. Questões de SQL com tabelas e saídas de consultas são certas na Cesgranrio.',
      subsections: [
        {
          subtitle: 'A Batalha dos JOINs na Prática',
          text: 'Imagine duas tabelas da Transpetro:\n• Tabela `navios` (id_navio, nome_navio, capacidade_dwt)\n• Tabela `viagens` (id_viagem, id_navio, terminal_origem, carga_transportada)\n\n1. INNER JOIN:\n   `SELECT n.nome_navio, v.carga_transportada FROM navios n INNER JOIN viagens v ON n.id_navio = v.id_navio;`\n   Resultado: Traz apenas os navios que realizaram viagens cadastradas.\n\n2. LEFT JOIN (ou LEFT OUTER JOIN):\n   `SELECT n.nome_navio, v.carga_transportada FROM navios n LEFT JOIN viagens v ON n.id_navio = v.id_navio;`\n   Resultado: Traz TODOS os navios da tabela `navios`. Se um navio novo nunca fez nenhuma viagem, ele aparece na consulta com a coluna `carga_transportada` preenchida com NULL!\n\n3. RIGHT JOIN:\n   Resultado: Traz todas as viagens, mesmo que o navio associado tenha sido deletado.\n\n4. FULL OUTER JOIN:\n   Resultado: Traz tudo de ambas as tabelas, unindo com NULL quando não há par.',
          comparisonTable: {
            headers: ['Tipo de JOIN', 'O que retorna?', 'Quando há linhas sem correspondência?'],
            rows: [
              ['INNER JOIN', 'Apenas a interseção exata (linhas que casam)', 'Linhas sem par são descartadas'],
              ['LEFT JOIN', 'Toda a tabela da esquerda + dados da direita', 'Lado direito é preenchido com NULL'],
              ['RIGHT JOIN', 'Toda a tabela da direita + dados da esquerda', 'Lado esquerdo é preenchido com NULL'],
              ['FULL JOIN', 'União completa de ambas as tabelas', 'Valores ausentes viram NULL em ambos os lados']
            ]
          },
          examTip: 'Se a Cesgranrio perguntar: "Qual comando lista TODOS os navios, inclusive aqueles que NÃO registraram nenhuma manutenção?", a resposta correta é LEFT JOIN com a tabela de manutenções!'
        },
        {
          subtitle: 'WHERE vs HAVING: A Pegadinha Mais Antiga da Cesgranrio',
          text: '• Cláusula WHERE: Filtra linhas individuais da tabela ANTES de qualquer agrupamento. Não aceita funções de agregação como SUM(), AVG(), COUNT().\n  Exemplo Correto: `WHERE status_operacional = \'Ativo\'`\n  Exemplo ERRADO na prova: `WHERE COUNT(id_viagem) > 5` (violação de sintaxe!).\n\n• Cláusula HAVING: Filtra o resultado consolidado APÓS a execução do `GROUP BY`. É usada obrigatoriamente para filtrar por funções de agregação!\n  Exemplo Correto: `GROUP BY terminal_origem HAVING COUNT(id_viagem) > 10;`\n  (Mostra apenas terminais que registraram mais de 10 viagens no total).',
          example: 'Consulta Real da Transpetro: Listar navios que transportaram mais de 500.000 barris no total:\nSELECT id_navio, SUM(barris_transportados) AS total_barris\nFROM operacoes_navais\nWHERE ano = 2026\nGROUP BY id_navio\nHAVING SUM(barris_transportados) > 500000\nORDER BY total_barris DESC;'
        }
      ],
      bancaTrap: 'Usar função de agregação (como SUM ou AVG) dentro do WHERE. Isso causa erro de execução em SQL. Filtro com função agregada exige HAVING!',
      summaryCheatsheet: [
        'INNER JOIN = Apenas interseção.',
        'LEFT JOIN = Todos da esquerda, nulos à direita se não casar.',
        'WHERE = Filtra linhas antes de agrupar (não aceita SUM/COUNT).',
        'HAVING = Filtra grupos agregados após o GROUP BY.',
        'ORDER BY DESC = Ordem decrescente (maior para o menor).'
      ]
    }
  },

  // ==========================================
  // NOVOS MÓDULOS ENRIQUECIDOS - PORTUGUÊS
  // ==========================================
  {
    id: 'portugues-regencia-crase-verbos',
    discipline: 'portugues',
    title: '4. Regência Verbal: Os Verbos Perigosos da Cesgranrio',
    shortDescription: 'Preferir, Implicar, Assistir, Visar, Aspirar e Esquecer com exemplos práticos de prova.',
    badge: 'Português Cesgranrio',
    readTime: '8 min',
    keyPoints: [
      'Preferir: transitivo direto e indireto, exige a preposição "a" (NUNCA "do que" nem "mais que").',
      'Implicar: no sentido de acarretar, é transitivo direto (NÃO aceita a preposição "em").',
      'Assistir: no sentido de ver/presenciar exige "a" ("assistiu ao evento"). No sentido de prestar assistência é direto ("assistiu o acidentado").',
      'Visar e Aspirar: no sentido de desejar/almejar exigem a preposição "a" ("visava ao cargo", "aspirava à vaga").',
      'Esquecer e Lembrar: sem pronome são diretos ("esqueci o prazo"). Com pronome exigem "de" ("esqueci-me do prazo").'
    ],
    content: {
      intro: 'A banca Cesgranrio tem predileção por verbos cuja regência culta diverge da linguagem coloquial do dia a dia. Conhecer a regência exata desses 6 verbos garante acertos imediatos.',
      subsections: [
        {
          subtitle: 'Os 6 Verbos Clássicos Analisados com Certo e Errado',
          text: '1. Verbo PREFERIR:\n• Errado no dia a dia: "Prefiro mais Ciência de Dados do que Direito."\n• Correto na norma-padrão: "Prefiro Ciência de Dados A Direito."\n(Regra: O verbo preferir rejeita intensificadores como "mais", "muito mais" e rejeita a locução "do que").\n\n2. Verbo IMPLICAR:\n• Errado no dia a dia: "A nova norma da ANP implicou em custos extras."\n• Correto na norma-padrão: "A nova norma da ANP implicou custos extras."\n(Regra: No sentido de causar, produzir ou acarretar, é VTD puro, sem preposição "em").\n\n3. Verbo ASSISTIR:\n• No sentido de ver/presenciar: VTI exigindo preposição "a": "O técnico assistiu AO monitoramento do duto."\n• No sentido de dar auxílio/socorrer: VTD: "A equipe médica assistiu O trabalhador ferido."\n\n4. Verbos ASPIRAR e VISAR:\n• No sentido de aspirar ar/perfume: VTD sem preposição: "Aspirou o ar marinho."\n• No sentido de desejar/almejar: VTI com preposição "a": "O candidato aspira AO cargo na Transpetro." / "O projeto visa À sustentabilidade."\n\n5. Verbos ESQUECER e LEMBRAR:\n• Se NÃO tiver pronome reflexivo (não pronominal): VTD sem preposição: "O fiscal esqueceu o relatório."\n• Se TIVER pronome reflexivo (pronominal): VTI com preposição "de": "O fiscal esqueceu-SE DO relatório."',
          comparisonTable: {
            headers: ['Verbo', 'Construção Errada (Pegadinha)', 'Construção Correta (Norma Culta)'],
            rows: [
              ['Preferir', 'Prefiro café do que chá', 'Prefiro café A chá'],
              ['Implicar', 'A falha implicou em atraso', 'A falha implicou atraso'],
              ['Aspirar (desejar)', 'Ele aspira o sucesso profissional', 'Ele aspira AO sucesso profissional'],
              ['Assistir (ver)', 'Assistimos o documentário naval', 'Assistimos AO documentário naval'],
              ['Esquecer (pronominal)', 'Ele esqueceu-se o documento', 'Ele esqueceu-se DO documento']
            ]
          },
          examTip: 'Verbo "preferir... do que" é a pegadinha número 1 da Cesgranrio em provas de nível superior. Elimine a alternativa que contiver "do que" com preferir imediatamente!'
        }
      ],
      bancaTrap: 'Marcar que "implicou em demissão" está correto. A regência culta exige "implicou demissão" (sem a preposição "em").',
      summaryCheatsheet: [
        'Preferir X A Y (nunca "do que").',
        'Implicar algo (nunca "implicar em").',
        'Assistir AO jogo / Aspirar AO cargo (exigem "a").',
        'Esqueci O livro / Esqueci-me DO livro.'
      ]
    }
  },

  // ==========================================
  // NOVOS MÓDULOS ENRIQUECIDOS - INGLÊS
  // ==========================================
  {
    id: 'ingles-avancado-concursos',
    discipline: 'ingles',
    title: '4. Interpretação Avançada & As 20 Pegadinhas Gramaticais em Inglês',
    shortDescription: 'Voz passiva técnica, verbos modais, conectivos compostos e pronomes anafóricos.',
    badge: 'Inglês Cesgranrio',
    readTime: '8 min',
    keyPoints: [
      'Voz Passiva Técnica: textos científicos da Cesgranrio usam passiva extensivamente ("is being monitored", "were deployed", "has been achieved").',
      'Verbos Modais: expressam obrigação rígida (Must), recomendação (Should), possibilidade/permissão (May, Might, Can).',
      'Conectivos Compostos: "In spite of the fact that" (embora), "As long as" (contanto que), "On the contrary" (pelo contrário).',
      'Referência Pronominal: questões que perguntam a quem se refere o pronome "it", "they", "which" ou "whose" no texto.'
    ],
    content: {
      intro: 'Nas questões avançadas de inglês da Cesgranrio, a banca testa a capacidade de rastrear referências pronominais dentro de orações longas e interpretar a nuance de certeza ou incerteza dos verbos modais.',
      subsections: [
        {
          subtitle: 'Os Verbos Modais e Seus Graus de Certeza na Prova',
          text: 'A Cesgranrio adora formular alternativas afirmando que algo "é obrigatório" quando o texto original dizia apenas que "é uma possibilidade". Fique atento à distinção:\n\n• MUST / HAVE TO: Expressa OBRIGAÇÃO estrita ou certeza absoluta.\n  - Exemplo: "The pipeline operator MUST report any pressure anomaly immediately." (Obrigatório por lei/norma).\n\n• SHOULD / OUGHT TO: Expressa RECOMENDAÇÃO ou conselho ético/técnico.\n  - Exemplo: "Companies SHOULD invest in predictive maintenance." (É recomendável, mas não mandatário).\n\n• MAY / MIGHT / COULD: Expressa POSSIBILIDADE ou hipótese.\n  - Exemplo: "Corrosion MAY compromise the hull if left untreated." (Pode acontecer, mas não é uma certeza absoluta).',
          comparisonTable: {
            headers: ['Modal Verb', 'Significado / Força', 'Pegadinha Típica da Banca'],
            rows: [
              ['Must', 'Dever imperativo / Obrigação', 'A banca diz que é facultativo'],
              ['Should', 'Deveria / Recomendação', 'A banca diz que é uma ordem legal'],
              ['May / Might', 'Pode ser que / Hipótese', 'A banca diz que é uma certeza comprovada'],
              ['Can', 'Capacidade física / Habilidade', 'Confundir com permissão formal']
            ]
          },
          examTip: 'Atenção aos modais de possibilidade: se o texto diz "AI MAY reduce fuel consumption", a alternativa da prova que disser "AI WILL GUARANTEE zero fuel consumption" está ERRADA por extrapolação!'
        },
        {
          subtitle: 'Pronomes Anafóricos: O que "Which", "It" e "They" estão substituindo?',
          text: 'Questão tradicionalíssima da Cesgranrio: "In the sentence \'Sensors detect vibrations in the turbine, WHICH helps prevent sudden shutdowns\', the pronoun WHICH refers to:"\n\n• O pronome "which" acompanhado de vírgula frequentemente se refere a TODA A ORAÇÃO ANTERIOR (ou seja, o fato de os sensores detectarem vibrações) e não apenas à palavra "turbina"!\n• "They" e "Their" no plural substituem o substantivo no plural mais próximo que faça sentido sintático.\n• "It" e "Its" no singular substituem conceitos singulares abstratos ou objetos (ex: "the system", "the company", "the fleet").',
          example: 'Texto de prova: "The company upgraded its fleet of vessels, which reduced carbon emissions by 18%." Pergunta da Cesgranrio: O que reduziu as emissões? Não foram apenas os navios isolados, mas o UPGRADE (a modernização) da frota!'
        }
      ],
      bancaTrap: 'Achar que "which" sempre se refere estritamente à palavra anterior. Quando precedido por vírgula, ele frequentemente resume o fato inteiro da oração precedente.',
      summaryCheatsheet: [
        'Must = Obrigação inescapável | Should = Recomendação desejável.',
        'May / Might = Hipótese / Possibilidade (não certeza).',
        'Voz Passiva = "is performed by", "was installed by".',
        'Referência Pronominal = Rastreie o sujeito sintático de volta no texto.'
      ]
    }
  }
];
