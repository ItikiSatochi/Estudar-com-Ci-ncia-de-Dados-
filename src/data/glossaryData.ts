import { GlossaryTerm } from '../types';

export const GLOSSARY_DATA: GlossaryTerm[] = [
  {
    term: 'Feature',
    translation: 'Atributo, Característica ou Variável Independente',
    category: 'Machine Learning',
    simpleDefinition: 'Cada coluna da sua tabela que serve de entrada para o algoritmo aprender (ex: idade, salário, escolaridade). Geralmente representada pela letra X.',
    examContext: 'Questões costumam falar em "Feature Selection" (seleção de variáveis mais relevantes) e "Feature Engineering" (criação de novas variáveis).'
  },
  {
    term: 'Target / Label',
    translation: 'Alvo, Rótulo ou Variável Dependente (Resposta)',
    category: 'Machine Learning',
    simpleDefinition: 'O resultado que o modelo quer prever. Na base histórica é o gabarito. Geralmente representado pela letra y.',
    examContext: 'A presença do "Label/Target" nos dados de treino é o que define se o aprendizado é Supervisionado ou Não Supervisionado.'
  },
  {
    term: 'Outlier',
    translation: 'Dado discrepante, Ponto fora da curva ou Anomalia',
    category: 'Estatística',
    simpleDefinition: 'Um valor que foge drasticamente do padrão da grande maioria dos dados da amostra (ex: um salário de R$ 5.000.000 em uma empresa onde todos ganham R$ 2.000).',
    examContext: 'Bancas adoram perguntar como detectar (Boxplot / Z-score) e se devem ser sempre apagados (NÃO! Fraudes são outliers).'
  },
  {
    term: 'Overfitting',
    translation: 'Sobreajuste ou Superajuste',
    category: 'Machine Learning',
    simpleDefinition: 'Quando o algoritmo "decorou" os dados de treino com perfeição excessiva, perdendo a capacidade de generalizar para dados novos.',
    examContext: 'Associado a Baixo Viés (Low Bias) e Alta Variância (High Variance). Combate-se com regularização, poda e validação cruzada.'
  },
  {
    term: 'Underfitting',
    translation: 'Subajuste',
    category: 'Machine Learning',
    simpleDefinition: 'Quando o modelo é simples demais e não consegue nem sequer aprender as relações básicas nos dados de treino.',
    examContext: 'Associado a Alto Viés (High Bias) e Baixa Variância (Low Variance). Resolve-se aumentando a complexidade do modelo.'
  },
  {
    term: 'Ensemble Learning',
    translation: 'Aprendizado em Conjunto ou Comitê de Modelos',
    category: 'Machine Learning',
    simpleDefinition: 'Técnica que combina vários modelos mais simples para produzir uma previsão conjunta muito mais forte e estável.',
    examContext: 'Principais formas: Bagging (ex: Random Forest) e Boosting (ex: XGBoost, AdaBoost, LightGBM).'
  },
  {
    term: 'Bagging vs Boosting',
    translation: 'Agregação por Bootstrap vs Impulsionamento Sequencial',
    category: 'Machine Learning',
    simpleDefinition: 'Bagging treina modelos em paralelo com amostras aleatórias (reduz variância). Boosting treina em sequência, onde cada novo modelo foca nos erros do anterior (reduz viés).',
    examContext: 'Questão certa: Random Forest usa Bagging. XGBoost usa Boosting.'
  },
  {
    term: 'Cross-Validation (K-Fold)',
    translation: 'Validação Cruzada K-Vias',
    category: 'Machine Learning',
    simpleDefinition: 'Método para avaliar o modelo dividindo os dados em K blocos: treina em K-1 blocos e testa no bloco restante, repetindo K vezes.',
    examContext: 'Evita a sorte ou azar de uma divisão simples de treino/teste e mede a real capacidade de generalização.'
  },
  {
    term: 'Clustering',
    translation: 'Clusterização ou Agrupamento',
    category: 'Machine Learning',
    simpleDefinition: 'Técnica não supervisionada que divide os dados em grupos (clusters) homogêneos internamente e heterogêneos entre si.',
    examContext: 'O algoritmo mais cobrado em provas é o K-Means.'
  },
  {
    term: 'Data Swamp',
    translation: 'Pântano de Dados',
    category: 'Engenharia',
    simpleDefinition: 'Um Data Lake que foi abandonado sem governança, sem catálogo e sem metadados, tornando impossível encontrar informações confiáveis.',
    examContext: 'Conceito frequentemente cobrado pelo Cebraspe e FGV ao falar de falhas de governança em Data Lakes.'
  },
  {
    term: 'Schema-on-Write vs Schema-on-Read',
    translation: 'Esquema na Escrita vs Esquema na Leitura',
    category: 'Engenharia',
    simpleDefinition: 'Schema-on-Write exige que os dados sejam formatados e limpos ANTES de gravar (Data Warehouse). Schema-on-Read grava o dado bruto e interpreta a estrutura na leitura (Data Lake).',
    examContext: 'Cai em praticamente todas as provas de TI e área fiscal.'
  },
  {
    term: 'Imbalanced Data',
    translation: 'Dados Desbalanceados',
    category: 'Machine Learning',
    simpleDefinition: 'Quando uma classe é esmagadoramente mais frequente que outra (ex: 99,8% de compras normais e 0,2% de compras com fraude).',
    examContext: 'Causa o "Paradoxo da Acurácia". Exige uso de métricas como F1-Score, Precisão e Recall em vez de apenas Acurácia.'
  },
  {
    term: 'Recall / Sensitivity',
    translation: 'Revocação, Sensibilidade ou Taxa de Verdadeiros Positivos',
    category: 'Métricas',
    simpleDefinition: 'Mede a capacidade do modelo de encontrar todos os casos positivos reais (VP / [VP + FN]).',
    examContext: 'Fundamental quando o custo de deixar passar um caso positivo é trágico (doenças graves, fraudes, armas).'
  },
  {
    term: 'Precision',
    translation: 'Precisão ou Valor Preditivo Positivo',
    category: 'Métricas',
    simpleDefinition: 'Mede a certeza do modelo: quando ele diz que é positivo, quanto ele realmente acerta? (VP / [VP + FP]).',
    examContext: 'Fundamental quando o alarme falso gera grande prejuízo ou incômodo (bloquear e-mails normais como spam).'
  },
  {
    term: 'Ground Truth',
    translation: 'Verdade Fundamental ou Gabarito Real',
    category: 'Conceito',
    simpleDefinition: 'A informação empírica real e comprovada do mundo físico, usada como referência absoluta para checar os acertos do algoritmo.',
    examContext: 'As bancas usam o termo para se referir ao conjunto de dados rotulados e verificados por especialistas.'
  },
  {
    term: 'Pruning',
    translation: 'Poda (em Árvores de Decisão)',
    category: 'Machine Learning',
    simpleDefinition: 'Técnica de cortar nós e ramificações excessivamente específicos de uma árvore de decisão para evitar sobreajuste (overfitting).',
    examContext: 'Pode ser Pré-poda (parar o crescimento antes) ou Pós-poda (cortar galhos após a árvore inteira crescer).'
  },
  {
    term: 'Baseline',
    translation: 'Linha de Base ou Modelo de Referência',
    category: 'Conceito',
    simpleDefinition: 'Um modelo simples ou regra heurística trivial (ex: chutar sempre a média) usado para comparar se o modelo de Machine Learning realmente agrega valor.',
    examContext: 'Se um modelo complexo de deep learning não superar o baseline simples, ele não deve ser adotado.'
  },
  {
    term: 'One-Hot Encoding',
    translation: 'Codificação 1-de-N ou Binária',
    category: 'Engenharia',
    simpleDefinition: 'Converter uma variável categórica em múltiplas colunas de 0 e 1 para que o algoritmo não atribua falsa hierarquia aos valores textuais.',
    examContext: 'Diferente de Label Encoding (que numera 1, 2, 3), o One-Hot Encoding evita que o modelo ache que a categoria 3 vale mais que a categoria 1.'
  }
];
