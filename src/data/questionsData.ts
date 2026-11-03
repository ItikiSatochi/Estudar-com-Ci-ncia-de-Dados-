import { Question } from '../types';

export const QUESTIONS_DATA: Question[] = [
  // ==========================================
  // CIÊNCIA DE DADOS - ÊNFASE 8 (TRANSPETRO / CESGRANRIO)
  // ==========================================
  {
    id: 'csg-cd-1',
    discipline: 'cienciadados',
    banca: 'Cesgranrio',
    orgaoAno: 'Petrobras / Ciência de Dados',
    topicId: 'pln-nlp',
    topicName: 'PLN - Vetorização TF-IDF',
    type: 'multipla_escolha',
    enunciado: 'Em tarefas de Processamento de Linguagem Natural (PLN) para minerar relatórios de ocorrências técnicas em uma companhia de transporte de combustíveis, utiliza-se a técnica TF-IDF (Term Frequency - Inverse Document Frequency). A função do componente IDF nessa métrica é:',
    options: [
      { id: 'A', text: 'aumentar o peso de palavras que aparecem em praticamente todos os documentos do corpus, por representarem o tema central da empresa.' },
      { id: 'B', text: 'penalizar termos muito frequentes em todo o acervo documental e valorizar termos raros que possuem alto poder discriminatório.' },
      { id: 'C', text: 'computar a distância euclidiana exata entre os sinônimos de um dicionário morfológico.' },
      { id: 'D', text: 'gerar vetores densos e não-esparsos através de janelas de contexto supervisionadas.' },
      { id: 'E', text: 'remover automaticamente todos os números e caracteres alfanuméricos do cabeçalho dos textos.' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B. O Inverse Document Frequency (IDF) atua calculando o logaritmo inverso da frequência de documentos que contêm o termo. Se uma palavra aparece em quase todos os documentos (ex: "petróleo", "relatório"), seu IDF é muito baixo ou zero. Já palavras raras no acervo geral (como "vazamento_junta_x4") recebem alto valor de IDF.',
    pegadinha: 'A alternativa A inverte a lógica: o IDF NÃO aumenta o peso de palavras onipresentes; ele PENALIZA palavras muito comuns para destacar termos discriminatórios.'
  },
  {
    id: 'csg-cd-2',
    discipline: 'cienciadados',
    banca: 'Cesgranrio',
    orgaoAno: 'Transpetro / Padrão Cesgranrio',
    topicId: 'pdi-visao',
    topicName: 'Visão Computacional - Camada de Pooling em CNNs',
    type: 'multipla_escolha',
    enunciado: 'Na inspeção visual de cascos de navios e dutos por imagens captadas por robôs submarinos, redes neurais convolucionais (CNNs) são empregadas para detectar pontos de corrosão. O objetivo primário da camada de agrupamento (MaxPooling) nessas redes é:',
    options: [
      { id: 'A', text: 'ampliar a resolução espacial da matriz de entrada para realçar detalhes nanométricos.' },
      { id: 'B', text: 'reduzir a dimensionalidade espacial do mapa de características, diminuindo o número de parâmetros computacionais e conferindo invariância a pequenas translações.' },
      { id: 'C', text: 'converter a imagem colorida RGB obrigatoriamente para o modelo monocromático de tons de cinza.' },
      { id: 'D', text: 'zerar todos os pesos sinápticos negativos por meio da função logística sigmoide.' },
      { id: 'E', text: 'executar a tokenização semântica das legendas das imagens capturadas.' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B. O Pooling (como o MaxPooling) reduz a largura e altura dos mapas de feições (downsampling), mantendo apenas as ativações mais expressivas. Isso reduz o custo computacional, mitiga o sobreajuste (overfitting) e torna a rede tolerante a pequenos deslocamentos dos objetos na imagem.',
    pegadinha: 'A alternativa A é uma clássica pegadinha: o Pooling REDUZ (e não amplia) a resolução espacial.'
  },
  {
    id: 'csg-cd-3',
    discipline: 'cienciadados',
    banca: 'Cesgranrio',
    orgaoAno: 'Petrobras / Analista de Sistemas',
    topicId: 'estatistica-modelagem',
    topicName: 'Estatística - Teste de Hipótese e P-Valor',
    type: 'multipla_escolha',
    enunciado: 'Um cientista de dados implementou um novo algoritmo preditivo de consumo de combustível para a frota de navios da Transpetro. Para avaliar se o novo modelo é estatisticamente superior ao modelo legado, formulou-se um teste de hipótese considerando um nível de significância padrão de alfa = 0,05 (5%). O teste gerou um P-valor igual a 0,008. Com base nesse resultado, a decisão estatística correta é:',
    options: [
      { id: 'A', text: 'aceitar a hipótese nula (H0), concluindo que os dois modelos têm desempenho idêntico.' },
      { id: 'B', text: 'rejeitar a hipótese nula (H0), concluindo que há evidência estatística de que o novo modelo possui desempenho significativamente diferente/superior.' },
      { id: 'C', text: 'descartar o teste por apresentar erro estocástico de Tipo I superior a 10%.' },
      { id: 'D', text: 'concluir que a média amostral é igual a 0,008.' },
      { id: 'E', text: 'aumentar o nível de significância para 50% para que o P-valor se torne válido.' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B. Regra de ouro da estatística: Se P-valor < alfa (0,008 < 0,05), REJEITA-SE a Hipótese Nula (H0)! Rejeitar H0 significa que a diferença observada é estatisticamente significativa e não foi mero fruto do acaso.',
    pegadinha: 'Muitos confundem a regra: "P-valor baixo, H0 vai para o espaço!" (ou seja, rejeita-se H0 quando o p-valor for menor que o limite estipulado).'
  },
  {
    id: 'csg-cd-4',
    discipline: 'cienciadados',
    banca: 'Cesgranrio',
    orgaoAno: 'Transpetro / Profissional de Nível Superior',
    topicId: 'fiscalizacao-contratos',
    topicName: 'Fiscalização de Contratos de TI e Serviços',
    type: 'multipla_escolha',
    enunciado: 'No exercício da atribuição de fiscalização técnica e administrativa de contratos de prestação de serviços de tecnologia da informação e modelos de inteligência artificial na Transpetro (sob a égide da Lei das Estatais - Lei 13.303/2016), compete especificamente ao FISCAL TÉCNICO:',
    options: [
      { id: 'A', text: 'verificar a regularidade trabalhista da empresa contratada, conferindo a quitação de guias de FGTS e GPS dos empregados.' },
      { id: 'B', text: 'avaliar a qualidade e conformidade das entregas técnicas, códigos e métricas de modelos de acordo com os níveis de serviço (SLA) contratados.' },
      { id: 'C', text: 'assinar os aditivos contratuais de prorrogação de prazo e repactuação de preços da empresa.' },
      { id: 'D', text: 'substituir unilateralmente o Diretor Financeiro da Companhia na autorização de despesas.' },
      { id: 'E', text: 'autorizar pagamentos antecipados sem qualquer entrega física ou digital homologada.' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B. O Fiscal Técnico é o profissional especialista responsável pelo acompanhamento do OBJETO: avaliar entregas, verificar métricas, código, documentação e cumprimento do SLA (Service Level Agreement). A verificação de guias de FGTS/INSS (alternativa A) compete ao Fiscal Administrativo.',
    pegadinha: 'A Cesgranrio sempre tenta trocar as atribuições do Fiscal Técnico com as do Fiscal Administrativo.'
  },
  {
    id: 'csg-cd-5',
    discipline: 'cienciadados',
    banca: 'Cesgranrio',
    orgaoAno: 'Banco do Brasil / Tecnologia',
    topicId: 'big-data',
    topicName: 'Big Data - Os 5 Vs',
    type: 'multipla_escolha',
    enunciado: 'Em projetos de Big Data corporativo, a dimensão que trata da qualidade, confiabilidade, fidedignidade e higienização dos dados para evitar a propagação de inconsistências ou fraudes é denominada:',
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
    id: 'csg-cd-6',
    discipline: 'cienciadados',
    banca: 'Cesgranrio',
    orgaoAno: 'Petrobras / Ciência de Dados',
    topicId: 'crisp-dm',
    topicName: 'CRISP-DM - Esforço das Fases',
    type: 'multipla_escolha',
    enunciado: 'No ciclo de vida de projetos analíticos estruturado pelo modelo CRISP-DM (Cross-Industry Standard Process for Data Mining), a fase que empiricamente demanda a maior proporção de tempo e dedicação dos profissionais da equipe (frequentemente entre 70% e 80% do esforço total) é a fase de:',
    options: [
      { id: 'A', text: 'Modelagem (Modeling).' },
      { id: 'B', text: 'Preparação dos Dados (Data Preparation).' },
      { id: 'C', text: 'Avaliação de Negócio (Evaluation).' },
      { id: 'D', text: 'Implantação em Produção (Deployment).' },
      { id: 'E', text: 'Definição de Hiperparâmetros Neurais.' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B. A PREPARAÇÃO DOS DADOS (limpeza, imputação de nulos, normalização, seleção e engenharia de variáveis) consome até 80% do tempo de um projeto de Ciência de Dados.',
    pegadinha: 'A alternativa A é a pegadinha clássica da Cesgranrio: muitos candidatos acham que "criar algoritmos" (modelagem) é o que mais demora, quando na verdade é limpar os dados.'
  },

  // ==========================================
  // LÍNGUA PORTUGUESA - BANCA CESGRANRIO
  // ==========================================
  {
    id: 'csg-port-1',
    discipline: 'portugues',
    banca: 'Cesgranrio',
    orgaoAno: 'Transpetro / Nível Superior',
    topicId: 'portugues-conjuncoes',
    topicName: 'Conjunções Concessivas (Conquanto)',
    type: 'multipla_escolha',
    textContext: '"A expansão da malha de dutos e o transporte marítimo de biocombustíveis exigem vultosos investimentos tecnológicos. CONQUANTO os custos de implementação inicial sejam elevados, a sustentabilidade da operação a longo prazo compensa o aporte."',
    enunciado: 'No período acima, o conectivo em destaque "CONQUANTO" estabelece entre as orações uma relação semântica de:',
    options: [
      { id: 'A', text: 'consequência, equivalendo semântica e gramaticalmente a "portanto".' },
      { id: 'B', text: 'causa, podendo ser substituído por "porquanto" sem alteração de sentido.' },
      { id: 'C', text: 'concessão, podendo ser substituído por "embora" mantendo o sentido original.' },
      { id: 'D', text: 'conformidade, equivalendo a "segundo determina o planejamento".' },
      { id: 'E', text: 'tempo, indicando simultaneidade temporal entre as ações.' }
    ],
    correctAnswer: 'C',
    explicacao: 'Gabarito C. O conectivo "CONQUANTO" é uma conjunção subordinativa concessiva (indica um obstáculo que não impede a oração principal). Seu equivalente direto e perfeito é "EMBORA" ou "AINDA QUE".',
    pegadinha: 'A Cesgranrio AMA o par "conquanto" vs "porquanto". Guarde para sempre: CONQUANTO = EMBORA (Concessão). PORQUANTO = PORQUE (Causa/Explicação).'
  },
  {
    id: 'csg-port-2',
    discipline: 'portugues',
    banca: 'Cesgranrio',
    orgaoAno: 'Petrobras / Nível Superior',
    topicId: 'portugues-crase-regencia',
    topicName: 'Emprego do Acento Grave (Crase)',
    type: 'multipla_escolha',
    enunciado: 'O acento grave indicativo de crase está empregado em estrita conformidade com a norma-padrão da língua portuguesa em:',
    options: [
      { id: 'A', text: 'O cientista de dados estava sempre disposto à colaborar com os técnicos de campo.' },
      { id: 'B', text: 'A diretoria da companhia prestou assistência à diversas comunidades ribeirinhas.' },
      { id: 'C', text: 'O novo sistema de automação logística atendeu perfeitamente às exigências da ANP.' },
      { id: 'D', text: 'A reunião sobre a fiscalização de contratos terminou à uma hora da tarde de ontem.' },
      { id: 'E', text: 'Eles preferiram realizar a entrega dos relatórios à prazo em vez de à vista.' }
    ],
    correctAnswer: 'C',
    explicacao: 'Gabarito C. Quem atende, atende a algo (exige preposição "a") + artigo "as" de "as exigências" = "às exigências" (crase correta e obrigatória).\n\nErros das demais:\n• A: Errado, antes de verbo ("colaborar") NUNCA há crase.\n• B: Errado, antes de "diversas" (plural) com "a" no singular não há crase.\n• D: Errado, antes de número cardinal indefinido ("uma") não há crase.\n• E: Errado, "a prazo" é palavra masculina (sem crase).',
    pegadinha: 'Antes de verbo ("à colaborar") e antes de palavras masculinas ("à prazo"), a crase é estritamente PROIBIDA pela Cesgranrio!'
  },
  {
    id: 'csg-port-3',
    discipline: 'portugues',
    banca: 'Cesgranrio',
    orgaoAno: 'Banco do Brasil / Escriturário',
    topicId: 'portugues-crase-regencia',
    topicName: 'Concordância com Verbo Haver',
    type: 'multipla_escolha',
    enunciado: 'Assinale a frase redigida inteiramente de acordo com a norma-padrão no que tange à concordância verbal:',
    options: [
      { id: 'A', text: 'Haviam muitos candidatos inscritos para a ênfase de Ciência de Dados.' },
      { id: 'B', text: 'Havia muitos candidatos inscritos para a ênfase de Ciência de Dados.' },
      { id: 'C', text: 'Fazem dois anos que a nova tecnologia de PIG inteligente foi adotada.' },
      { id: 'D', text: 'Devem haver soluções analíticas mais eficientes para o setor naval.' },
      { id: 'E', text: 'Pode existirem falhas humanas se não houver auditoria contínua.' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B. O verbo HAVER com sentido de "existir" é IMPESSOAL e não possui sujeito. Ele deve permanecer obrigatoriamente na 3ª pessoa do singular: "Havia muitos candidatos" (e não "Haviam"). Da mesma forma, em locuções verbais, o auxiliar herda a impessoalidade: "Deve haver" (e não "Devem haver"). Em C, "fazer" indicando tempo também é impessoal ("Faz dois anos").',
    pegadinha: 'A Cesgranrio sempre coloca "Haviam muitos..." para tentar induzir o candidato a concordar com o plural aparente.'
  },
  {
    id: 'csg-port-4',
    discipline: 'portugues',
    banca: 'Cesgranrio',
    orgaoAno: 'Transpetro / Nível Superior',
    topicId: 'portugues-pontuacao-texto',
    topicName: 'Pontuação - Orações Adjetivas e Sentido',
    type: 'multipla_escolha',
    enunciado: 'Considere a frase: "Os petroleiros da frota, que possuem duplo casco, oferecem índice superior de segurança ambiental."\n\nSe as vírgulas forem inteiramente retiradas, a consequência semântica e sintática para o texto será:',
    options: [
      { id: 'A', text: 'tornar a frase gramaticalmente incorreta, violando as regras da norma culta.' },
      { id: 'B', text: 'manter o mesmo sentido original, pois a vírgula antes do pronome relativo "que" é de uso facultativo.' },
      { id: 'C', text: 'alterar o sentido da frase, que passará a indicar que apenas parte dos petroleiros da frota possui duplo casco (sentido restritivo).' },
      { id: 'D', text: 'transformar o pronome relativo "que" em uma conjunção integrante explicativa.' },
      { id: 'E', text: 'deslocar o sujeito sintático para a oração subordinada adverbial causal.' }
    ],
    correctAnswer: 'C',
    explicacao: 'Gabarito C. Com vírgulas, a oração é Adjetiva Explicativa (generaliza: afirma que TODOS os petroleiros da frota têm duplo casco). Ao retirar as vírgulas, ela se torna Adjetiva Restritiva (limita o universo: apenas aqueles petroleiros que têm duplo casco oferecem segurança superior). O sentido muda completamente!',
    pegadinha: 'A Cesgranrio adora afirmar que as vírgulas nas orações subordinadas adjetivas são "meramente estilísticas ou facultativas". Não são! Elas alteram o sentido entre totalidade (explicação) e subconjunto (restrição).'
  },

  // ==========================================
  // LÍNGUA INGLESA - BANCA CESGRANRIO
  // ==========================================
  {
    id: 'csg-ing-1',
    discipline: 'ingles',
    banca: 'Cesgranrio',
    orgaoAno: 'Petrobras / Nível Superior',
    topicId: 'ingles-conectivos-cognatos',
    topicName: 'Linking Words - However e Although',
    type: 'multipla_escolha',
    textContext: '"Maritime logistics companies are increasingly relying on machine learning models to optimize ship routes and reduce greenhouse gas emissions. HOWEVER, implementing these autonomous navigation algorithms in offshore terminals still faces significant technical and cybersecurity barriers."',
    enunciado: 'In the excerpt above, the transitional word "HOWEVER" can be replaced, with no substantial change in meaning, by:',
    options: [
      { id: 'A', text: 'Furthermore' },
      { id: 'B', text: 'Nevertheless' },
      { id: 'C', text: 'Therefore' },
      { id: 'D', text: 'Consequently' },
      { id: 'E', text: 'Moreover' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B. A palavra "HOWEVER" expressa oposição/contraste (entretanto, contudo, porém). A única opção que tem exatamente esse mesmo valor semântico é "NEVERTHELESS" (não obstante, todavia, contudo).\n\nAs outras alternativas expressam:\n• Furthermore / Moreover: Adição (além disso).\n• Therefore / Consequently: Conclusão / Consequência (portanto).',
    pegadinha: 'Cuidado para não confundir conectivos de oposição (However, Nevertheless, Although) com conectivos de adição (Furthermore, Moreover) ou conclusão (Therefore, Thus).'
  },
  {
    id: 'csg-ing-2',
    discipline: 'ingles',
    banca: 'Cesgranrio',
    orgaoAno: 'Transpetro / Nível Superior',
    topicId: 'ingles-conectivos-cognatos',
    topicName: 'Falsos Cognatos - Actually vs Currently',
    type: 'multipla_escolha',
    textContext: '"Initial reports suggested that the sensor failure was caused by extreme marine weather conditions. ACTUALLY, the internal inspection revealed that the damage had resulted from mechanical fatigue."',
    enunciado: 'Based on the context, the word "ACTUALLY" is used to convey the idea of:',
    options: [
      { id: 'A', text: 'something happening at the present time (currently).' },
      { id: 'B', text: 'a situation that occurs only by chance (accidentally).' },
      { id: 'C', text: 'the true reality of the facts, correcting a previous assumption (in fact / really).' },
      { id: 'D', text: 'an event scheduled to take place in the immediate future.' },
      { id: 'E', text: 'a simulated action performed by the inspection team.' }
    ],
    correctAnswer: 'C',
    explicacao: 'Gabarito C. "ACTUALLY" é um falso cognato clássico: NÃO significa "atualmente", e sim "na verdade / de fato / em realidade" (in fact, really). O texto usa "Actually" para contrapor o relatório inicial à realidade dos fatos apurada pela inspeção.',
    pegadinha: 'A alternativa A é a maior armadilha das bancas brasileiras em inglês: "actually" NUNCA significa "at the present time" (atualmente).'
  },
  {
    id: 'csg-ing-3',
    discipline: 'ingles',
    banca: 'Cesgranrio',
    orgaoAno: 'Petrobras / Nível Superior',
    topicId: 'ingles-leitura-estrategia',
    topicName: 'Interpretação e Vocabulário Técnico',
    type: 'multipla_escolha',
    textContext: '"Predictive maintenance powered by computer vision algorithms has become a key asset for oil transportation companies. By analyzing underwater images captured by robotic crawlers along thousands of kilometers of pipelines, the system can spot microscopic cracks and signs of corrosion long before any major leakage occurs, thereby avoiding catastrophic environmental damage and reducing maintenance downtime."',
    enunciado: 'According to the text, the main operational benefit of using computer vision along the pipelines is:',
    options: [
      { id: 'A', text: 'eliminating the need for human data scientists in offshore operations.' },
      { id: 'B', text: 'detecting structural anomalies early in order to prevent leaks and decrease maintenance downtime.' },
      { id: 'C', text: 'increasing the speed of crude oil flow regardless of safety regulations.' },
      { id: 'D', text: 'replacing maritime shipping tankers with underwater drones.' },
      { id: 'E', text: 'producing automated marketing reports for environmental agencies.' }
    ],
    correctAnswer: 'B',
    explicacao: 'Gabarito B. O trecho final do texto diz explicitamente: "...spot microscopic cracks and signs of corrosion long before any major leakage occurs, thereby avoiding catastrophic environmental damage and reducing maintenance downtime", exatamente o que consta na alternativa B.',
    pegadinha: 'Técnica de Scanning: localize as palavras "leakage", "cracks" e "downtime" no texto para confirmar a resposta sem perder tempo traduzindo o parágrafo inteiro.'
  }
];
