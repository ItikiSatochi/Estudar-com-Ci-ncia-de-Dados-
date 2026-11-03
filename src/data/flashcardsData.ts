import { Flashcard } from '../types';

export const FLASHCARDS_DATA: Flashcard[] = [
  // ==========================================
  // CIÊNCIA DE DADOS - ÊNFASE 8 (TRANSPETRO)
  // ==========================================
  {
    id: 'f-pln-1',
    topic: 'PLN / NLP',
    front: 'O que é TF-IDF e qual o papel do IDF?',
    back: 'Term Frequency - Inverse Document Frequency. O IDF penaliza palavras comuns em todo o acervo e destaca palavras raras com alto poder discriminatório no documento.',
    macete: 'Macete: IDF alto = Palavra rara e especial no texto!'
  },
  {
    id: 'f-pln-2',
    topic: 'PLN / NLP',
    front: 'Qual a diferença central entre Stemming e Lemmatization no PLN?',
    back: 'Stemming corta sufixos por regras brutas (gera radicais como "estud-"). Lemmatization analisa morfologia e gramática para achar a forma canônica do dicionário ("estudar").',
    macete: 'Stemming = Corta na tesoura | Lema = Dicionário e gramática.'
  },
  {
    id: 'f-pdi-1',
    topic: 'Visão Computacional',
    front: 'Em Redes Convolucionais (CNNs), qual a função da camada de MaxPooling?',
    back: 'Reduz a dimensionalidade espacial (downsampling), diminui parâmetros computacionais, previne overfitting e confere tolerância a pequenas translações na imagem.',
    macete: 'MaxPooling = Enxuga o tamanho mantendo apenas a ativação máxima.'
  },
  {
    id: 'f-pdi-2',
    topic: 'Visão Computacional',
    front: 'Para detectar trincas e bordas em dutos/navios, que tipo de filtro espacial é usado?',
    back: 'Filtro passa-altas (ex: Sobel, Prewitt, Canny). Filtros passa-baixas (ex: Gaussiano) servem para suavizar ruído.',
    macete: 'Passa-Altas = Borda e trinca viva | Passa-Baixas = Suaviza e embaça o ruído.'
  },
  {
    id: 'f-est-1',
    topic: 'Estatística',
    front: 'Quando rejeitamos a Hipótese Nula (H0) em um Teste de Hipótese?',
    back: 'Quando o P-valor é MENOR que o nível de significância alfa (geralmente 0,05). Significa que a diferença observada é estatisticamente significativa e não mero acaso.',
    macete: 'Macete: "P-valor baixo (< 0,05), H0 vai para o espaço!"'
  },
  {
    id: 'f-fisc-1',
    topic: 'Fiscalização de Contratos',
    front: 'Qual a diferença entre Fiscal Técnico e Fiscal Administrativo na Transpetro?',
    back: 'Fiscal Técnico: confere o objeto, código, entregas, qualidade e SLA. Fiscal Administrativo: confere guias de FGTS, INSS, certidões trabalhistas e notas fiscais.',
    macete: 'Técnico cuida do produto/IA | Administrativo cuida do FGTS e certidões.'
  },
  {
    id: 'f-dw-1',
    topic: 'Engenharia de Dados',
    front: 'Data Warehouse vs Data Lake: Quem usa Schema-on-Write e quem usa Schema-on-Read?',
    back: 'Data Warehouse usa Schema-on-Write (estruturado e limpo antes de salvar). Data Lake usa Schema-on-Read (dados brutos gravados primeiro, interpretados na leitura).',
    macete: 'DW = Write (escrita arrumada) | Lake = Read (lago com água bruta).'
  },
  {
    id: 'f-crisp-1',
    topic: 'CRISP-DM',
    front: 'Qual fase do CRISP-DM consome mais tempo e esforço do cientista de dados?',
    back: 'PREPARAÇÃO DOS DADOS (Data Preparation) — consome de 70% a 80% do esforço do projeto.',
    macete: 'Pegadinha clássica: Não é modelagem, é preparação!'
  },
  {
    id: 'f-over-1',
    topic: 'Machine Learning',
    front: 'O que é Overfitting e qual regularização pode zerar variáveis (Lasso ou Ridge)?',
    back: 'Overfitting é memorizar o treino e falhar nos dados novos. A regularização LASSO (L1) pode zerar coeficientes e selecionar features. O Ridge (L2) apenas encolhe.',
    macete: 'Lasso (L1) = Laça e zera a variável inútil.'
  },

  // ==========================================
  // PORTUGUÊS - BANCA CESGRANRIO
  // ==========================================
  {
    id: 'f-port-1',
    topic: 'Português Cesgranrio',
    front: 'O que significa a conjunção "CONQUANTO" que a Cesgranrio sempre cobra?',
    back: 'Significa "EMBORA" ou "AINDA QUE" (conjunção concessiva). Indica um obstáculo que não impede a oração principal.',
    macete: 'CONQUANTO = EMBORA (Concessão). Não confunda com Porquanto (= porque).'
  },
  {
    id: 'f-port-2',
    topic: 'Português Cesgranrio',
    front: 'O que significa "PORQUANTO"?',
    back: 'Significa "PORQUE", "VISTO QUE" ou "JÁ QUE" (conjunção causal ou explicativa).',
    macete: 'Porquanto = Porque | Conquanto = Embora.'
  },
  {
    id: 'f-port-3',
    topic: 'Português Cesgranrio',
    front: 'O verbo HAVER no sentido de existir ou indicando tempo pode ir para o plural?',
    back: 'NUNCA! É impessoal e fica na 3ª pessoa do SINGULAR ("Havia dez navios", "Houve problemas"). Em locução verbal, o auxiliar também fica singular ("Deve haver falhas").',
    macete: 'Haver (existir) não tem plural: sempre "Havia", nunca "Haviam".'
  },
  {
    id: 'f-port-4',
    topic: 'Português Cesgranrio',
    front: 'Quais os principais casos em que a crase é terminantemente PROIBIDA?',
    back: '1. Antes de verbo;\n2. Antes de palavra masculina;\n3. Antes de palavras repetidas (dia a dia);\n4. Antes de pronomes de tratamento e indefinidos;\n5. Com "a" no singular diante de palavra no plural.',
    macete: 'Antes de verbo ou homem, crase não come!'
  },
  {
    id: 'f-port-5',
    topic: 'Português Cesgranrio',
    front: 'Qual a diferença entre "À medida que" e "Na medida em que"?',
    back: '"À medida que" indica PROPORÇÃO (à proporção que). "Na medida em que" indica CAUSA (visto que, já que).',
    macete: 'À medida que = Proporção | Na medida em que = Causa.'
  },

  // ==========================================
  // INGLÊS - BANCA CESGRANRIO
  // ==========================================
  {
    id: 'f-ing-1',
    topic: 'Inglês Cesgranrio',
    front: 'O que significam as linking words "HOWEVER" e "NEVERTHELESS"?',
    back: 'Significam "CONTUDO", "TODAVIA", "NO ENTANTO" ou "PORÉM" (expressam oposição/contraste).',
    macete: 'However = Contudo/Porém | Sinônimo perfeito: Nevertheless.'
  },
  {
    id: 'f-ing-2',
    topic: 'Inglês Cesgranrio',
    front: 'O que significa o falso cognato "ACTUALLY" em inglês?',
    back: 'Significa "NA VERDADE" ou "DE FATO" (really, in fact). NÃO significa atualmente (atualmente é "currently").',
    macete: 'Actually = Na verdade! Currently = Atualmente.'
  },
  {
    id: 'f-ing-3',
    topic: 'Inglês Cesgranrio',
    front: 'O que significa o falso cognato "EVENTUALLY"?',
    back: 'Significa "COM O TEMPO", "AO FINAL", "NO FIM DAS CONTAS". NÃO significa de vez em quando (ocasionalmente é "occasionally").',
    macete: 'Eventually = No final das contas.'
  },
  {
    id: 'f-ing-4',
    topic: 'Inglês Cesgranrio',
    front: 'No contexto de óleo e gás da Transpetro, o que significa "PIPELINE" e "VESSEL"?',
    back: 'Pipeline = Duto / Oleoduto / Gasoduto. Vessel = Navio / Embarcação / Petroleiro.',
    macete: 'Pipeline = Duto | Vessel = Navio petroleiro.'
  },
  {
    id: 'f-ing-5',
    topic: 'Inglês Cesgranrio',
    front: 'O que significam "FURTHERMORE" e "MOREOVER"?',
    back: 'Significam "ALÉM DISSO", "ADEMAIIS" (conectivos de adição de ideias).',
    macete: 'Furthermore / Moreover = Além disso (+ soma de ideias).'
  }
];
