import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Languages, 
  HelpCircle, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  BookOpen, 
  ArrowRight,
  Lightbulb,
  MousePointerClick
} from 'lucide-react';

interface SentenceItem {
  id: number;
  en: string;
  pt: string;
  explanation: string;
  cognates: string[];
  connectors: string[];
  falseFriends?: string[];
}

const SAMPLE_TEXT: SentenceItem[] = [
  {
    id: 1,
    en: "Maritime transportation companies are increasingly investing in artificial intelligence to optimize logistics and prevent environmental accidents.",
    pt: "Empresas de transporte marítimo estão investindo cada vez mais em inteligência artificial para otimizar a logística e prevenir acidentes ambientais.",
    explanation: "Repare como 'transportation', 'companies', 'artificial', 'intelligence', 'optimize', 'logistics' e 'accidents' são quase idênticas ao português!",
    cognates: ["transportation", "companies", "artificial", "intelligence", "optimize", "logistics", "accidents"],
    connectors: ["and", "to"]
  },
  {
    id: 2,
    en: "ALTHOUGH implementing predictive algorithms in offshore pipelines requires substantial capital, the long-term reduction in operational risks justifies the cost.",
    pt: "EMBORA a implementação de algoritmos preditivos em oleodutos no mar exija capital substancial, a redução a longo prazo nos riscos operacionais justifica o custo.",
    explanation: "Aqui está a palavra mágica que a Cesgranrio ama: 'ALTHOUGH' = EMBORA (expressa uma concessão).",
    cognates: ["implementing", "predictive", "algorithms", "pipelines", "substantial", "capital", "reduction", "operational", "risks", "justifies"],
    connectors: ["ALTHOUGH"],
  },
  {
    id: 3,
    en: "ACTUALLY, recent inspections revealed that robotic crawlers detected microscopic flaws before any leakage occurred.",
    pt: "NA VERDADE, inspeções recentes revelaram que robôs rastreadores detectaram falhas microscópicas antes que qualquer vazamento ocorresse.",
    explanation: "CUIDADO: 'ACTUALLY' não é atualmente! Significa 'NA VERDADE / DE FATO'. É o maior falso cognato da prova.",
    cognates: ["inspections", "revealed", "microscopic"],
    connectors: ["before"],
    falseFriends: ["ACTUALLY"]
  },
  {
    id: 4,
    en: "THEREFORE, autonomous condition monitoring ensures higher safety standards for vessels and coastal terminals.",
    pt: "PORTANTO, o monitoramento autônomo da condição garante padrões de segurança mais elevados para navios e terminais costeiros.",
    explanation: "'THEREFORE' = PORTANTO (expressa uma conclusão ou consequência lógica).",
    cognates: ["autonomous", "condition", "terminals"],
    connectors: ["THEREFORE"]
  }
];

const MAGIC_50_WORDS = [
  { en: "Although / Even though", pt: "Embora / Ainda que", category: "Conectivo de Concessão", tip: "A Cesgranrio ama! Indica um obstáculo que não impede a ação." },
  { en: "However / Nevertheless", pt: "Porém / Contudo / No entanto", category: "Conectivo de Oposição", tip: "Sinônimos perfeitos. Quebram a expectativa." },
  { en: "Therefore / Thus / Hence", pt: "Portanto / Por conseguinte", category: "Conectivo de Conclusão", tip: "Indicam o resultado ou consequência de algo." },
  { en: "Furthermore / Moreover", pt: "Além disso / Ademais", category: "Conectivo de Adição", tip: "Somam mais um argumento positivo ou negativo." },
  { en: "Actually", pt: "Na verdade / De fato (NÃO é atualmente)", category: "Falso Cognato Perigoso", tip: "Atualmente se diz 'currently'. Actually = na verdade." },
  { en: "Eventually", pt: "Com o tempo / No final das contas", category: "Falso Cognato Perigoso", tip: "NÃO é de vez em quando. Significa o desfecho final inevitável." },
  { en: "Pipeline", pt: "Duto / Oleoduto / Gasoduto", category: "Termo Técnico Transpetro", tip: "Aparece em quase todos os textos da prova da Transpetro." },
  { en: "Vessel / Tanker", pt: "Navio / Embarcação / Petroleiro", category: "Termo Técnico Transpetro", tip: "Refere-se à frota naval de transporte de petróleo." },
  { en: "Leak / Leakage", pt: "Vazamento / Derramamento", category: "Termo Técnico Operacional", tip: "Objetivo dos modelos de IA é 'prevent leaks' (prevenir vazamentos)." },
  { en: "Prevent / Avoid", pt: "Prevenir / Evitar", category: "Verbo Estratégico", tip: "Aparece nas alternativas certas sobre benefícios de IA." },
  { en: "Increase / Growth", pt: "Aumentar / Crescimento", category: "Verbo Estratégico", tip: "Indica subida de eficiência, vazão ou lucro." },
  { en: "Decrease / Reduction", pt: "Diminuir / Redução", category: "Verbo Estratégico", tip: "Indica queda de custos, poluição ou acidentes." },
  { en: "Ensure / Guarantee", pt: "Garantir / Assegurar", category: "Verbo Estratégico", tip: "Ex: 'ensure safety' = garantir a segurança." },
  { en: "Despite / In spite of", pt: "Apesar de", category: "Conectivo de Contraste", tip: "Seguido de substantivo ou verbo com -ing (ex: Despite the flaws)." }
];

export function EnglishDecoderTool() {
  const { isClean } = useTheme();
  const [activeSentenceId, setActiveSentenceId] = useState<number>(1);
  const [highlightMode, setHighlightMode] = useState<'all' | 'cognates' | 'connectors' | 'falseFriends'>('all');
  const [showPortuguese, setShowPortuguese] = useState<boolean>(true);
  const [searchWord, setSearchWord] = useState<string>('');

  const activeSentence = SAMPLE_TEXT.find((s) => s.id === activeSentenceId) || SAMPLE_TEXT[0];

  const filteredWords = MAGIC_50_WORDS.filter(
    (w) =>
      w.en.toLowerCase().includes(searchWord.toLowerCase()) ||
      w.pt.toLowerCase().includes(searchWord.toLowerCase()) ||
      w.category.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Intro Hero Card */}
      <div className={`p-6 rounded-3xl border transition-all ${
        isClean
          ? 'bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border-emerald-200 shadow-sm'
          : 'bg-gradient-to-r from-emerald-950/40 via-teal-950/40 to-slate-900 border-emerald-800/40 shadow-xl'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`p-1.5 rounded-lg ${isClean ? 'bg-emerald-600 text-white' : 'bg-emerald-500/20 text-emerald-400'}`}>
                <Languages className="w-5 h-5" />
              </span>
              <h3 className={`text-xl font-extrabold ${isClean ? 'text-slate-900' : 'text-white'}`}>
                Decifrador de Inglês Cesgranrio para Iniciantes
              </h3>
            </div>
            <p className={`text-sm ${isClean ? 'text-slate-700' : 'text-slate-300'} max-w-3xl leading-relaxed`}>
              <strong>Não sabe inglês? Fique tranquilo!</strong> Você não precisa falar nem traduzir o texto inteiro. No dia da prova, você não terá tradutor, mas poderá usar a <strong>Técnica dos Cognatos e Conectivos</strong> para achar o gabarito em menos de 2 minutos.
            </p>
          </div>
          <div className={`p-3.5 rounded-2xl border text-center shrink-0 ${
            isClean ? 'bg-white border-emerald-200' : 'bg-slate-800/90 border-slate-700'
          }`}>
            <span className={`text-[10px] font-bold uppercase tracking-wider block ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>
              Palavras Amigas no Texto
            </span>
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
              ~60%
            </span>
            <span className={`text-[10px] block mt-0.5 ${isClean ? 'text-slate-600' : 'text-slate-400'}`}>
              São idênticas ao português!
            </span>
          </div>
        </div>

        {/* 3 Survival Rules for English */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-4 border-t border-emerald-500/20 text-xs">
          <div className={`p-3 rounded-xl border flex items-start gap-2 ${
            isClean ? 'bg-white/80 border-emerald-100 text-slate-700' : 'bg-slate-900/60 border-slate-800 text-slate-300'
          }`}>
            <Lightbulb className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-emerald-600 dark:text-emerald-400">1. Leia a pergunta primeiro:</strong>
              Veja o que a questão pede antes de encostar no texto em inglês.
            </div>
          </div>
          <div className={`p-3 rounded-xl border flex items-start gap-2 ${
            isClean ? 'bg-white/80 border-emerald-100 text-slate-700' : 'bg-slate-900/60 border-slate-800 text-slate-300'
          }`}>
            <Search className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-teal-600 dark:text-teal-400">2. Rastreie palavras iguais:</strong>
              A alternativa correta repete termos ou sinônimos do próprio parágrafo.
            </div>
          </div>
          <div className={`p-3 rounded-xl border flex items-start gap-2 ${
            isClean ? 'bg-white/80 border-emerald-100 text-slate-700' : 'bg-slate-900/60 border-slate-800 text-slate-300'
          }`}>
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-amber-600 dark:text-amber-400">3. Cuidado com falsos amigos:</strong>
              Actually não é atualmente! É "na verdade".
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Bilingual Text Decoder */}
      <div className={`p-6 rounded-3xl border ${
        isClean ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800 shadow-xl'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className={`font-bold text-base flex items-center gap-2 ${isClean ? 'text-slate-900' : 'text-white'}`}>
              <MousePointerClick className="w-4 h-4 text-emerald-500" />
              Simulador de Leitura Guiada (Texto Técnico Transpetro)
            </h4>
            <p className={`text-xs ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>
              Clique em cada frase abaixo para ver a decodificação imediata, os cognatos transparentes e as palavras mágicas:
            </p>
          </div>

          {/* Toggle Portuguese translation */}
          <button
            onClick={() => setShowPortuguese(!showPortuguese)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1.5 ${
              showPortuguese
                ? isClean
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                  : 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40'
                : isClean
                ? 'bg-slate-100 text-slate-600 border-slate-300'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            <Eye className="w-3.5 h-3.5" /> {showPortuguese ? 'Ocultar Tradução' : 'Mostrar Tradução'}
          </button>
        </div>

        {/* Sentence selector chips */}
        <div className="flex flex-wrap gap-2 my-4">
          {SAMPLE_TEXT.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSentenceId(s.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
                activeSentenceId === s.id
                  ? isClean
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow'
                    : 'bg-emerald-600 text-white border-emerald-500 shadow'
                  : isClean
                  ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              Frase {s.id}
            </button>
          ))}
        </div>

        {/* Selected Sentence Card */}
        <div className={`p-5 rounded-2xl border space-y-4 ${
          isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800'
        }`}>
          {/* English Text */}
          <div>
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-1">
              Como aparece na prova (Inglês):
            </span>
            <p className={`text-base sm:text-lg font-medium leading-relaxed font-serif ${
              isClean ? 'text-slate-900' : 'text-slate-100'
            }`}>
              "{activeSentence.en}"
            </p>
          </div>

          {/* Portuguese translation */}
          {showPortuguese && (
            <div className={`pt-3 border-t ${isClean ? 'border-slate-200' : 'border-slate-800'}`}>
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-1">
                Tradução em Português:
              </span>
              <p className={`text-sm sm:text-base leading-relaxed ${
                isClean ? 'text-slate-700' : 'text-slate-300'
              }`}>
                "{activeSentence.pt}"
              </p>
            </div>
          )}

          {/* Pedagogical Explanation */}
          <div className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs ${
            isClean ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950' : 'bg-emerald-950/20 border-emerald-800/40 text-emerald-200'
          }`}>
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block mb-0.5">Dica de Ouro do Professor:</strong>
              {activeSentence.explanation}
            </div>
          </div>

          {/* Breakdown tags */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
            <span className={`text-[11px] font-bold ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>
              Palavras transparentes nesta frase:
            </span>
            {activeSentence.cognates.map((c, i) => (
              <span
                key={i}
                className={`px-2 py-0.5 rounded-md font-mono text-[11px] font-semibold border ${
                  isClean
                    ? 'bg-white text-emerald-700 border-emerald-300'
                    : 'bg-emerald-950/40 text-emerald-300 border-emerald-700/50'
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* The 14 Magic Words Table */}
      <div className={`p-6 rounded-3xl border ${
        isClean ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800 shadow-xl'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <h4 className={`font-bold text-base ${isClean ? 'text-slate-900' : 'text-white'}`}>
              As Palavras que Decidem 90% das Provas de Inglês da Cesgranrio
            </h4>
            <p className={`text-xs ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>
              Decore esta lista de conectivos e termos operacionais para não precisar de tradutor na hora da prova:
            </p>
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Buscar palavra (ex: Although, Pipeline)..."
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              className={`w-full rounded-xl pl-9 pr-3 py-1.5 text-xs focus:outline-none border ${
                isClean
                  ? 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-1 focus:ring-emerald-500'
                  : 'bg-slate-800 border-slate-700 text-slate-200 focus:ring-1 focus:ring-emerald-500'
              }`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredWords.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition flex flex-col justify-between ${
                isClean
                  ? 'bg-slate-50/80 hover:bg-slate-50 border-slate-200'
                  : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                    item.category.includes('Perigoso')
                      ? 'bg-rose-500/20 text-rose-500 border-rose-500/30'
                      : 'bg-indigo-500/15 text-indigo-500 dark:text-indigo-300 border-indigo-500/30'
                  }`}>
                    {item.category}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <h5 className={`font-extrabold text-base ${isClean ? 'text-slate-900' : 'text-white'}`}>
                    {item.en}
                  </h5>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    = {item.pt}
                  </span>
                </div>
              </div>

              <p className={`text-xs mt-2 pt-2 border-t leading-relaxed ${
                isClean ? 'border-slate-200 text-slate-600' : 'border-slate-700 text-slate-300'
              }`}>
                <strong className={isClean ? 'text-slate-800' : 'text-slate-200'}>Como cai na prova: </strong>
                {item.tip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
