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
  }
];
