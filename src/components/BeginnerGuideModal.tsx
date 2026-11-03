import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Compass, 
  X, 
  Lightbulb, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface BeginnerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BeginnerGuideModal({ isOpen, onClose }: BeginnerGuideModalProps) {
  const { isClean } = useTheme();
  const [activeTab, setActiveTab] = useState<'regras' | 'analogias' | 'estrategia'>('analogias');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className={`w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col ${
        isClean ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-800 text-slate-100'
      }`}>
        {/* Modal Header */}
        <div className={`p-5 sm:p-6 border-b flex items-center justify-between ${
          isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800'
        }`}>
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-emerald-500/20 text-emerald-500 rounded-xl">
              <Compass className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                Guia do Iniciante: Sua 1ª Prova de Concurso
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tudo o que você precisa saber para encarar a Cesgranrio sem medo, mesmo começando do zero.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition ${
              isClean ? 'hover:bg-slate-200 border-slate-200 text-slate-500' : 'hover:bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className={`px-6 pt-3 flex gap-2 border-b text-xs font-bold ${
          isClean ? 'border-slate-200 bg-white' : 'border-slate-800 bg-slate-900'
        }`}>
          <button
            onClick={() => setActiveTab('analogias')}
            className={`pb-3 px-3 border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'analogias'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            <Lightbulb className="w-4 h-4" /> 💡 Analogias Práticas da Vida Real
          </button>
          <button
            onClick={() => setActiveTab('regras')}
            className={`pb-3 px-3 border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'regras'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" /> 🛡️ Regras de Ouro da Cesgranrio
          </button>
          <button
            onClick={() => setActiveTab('estrategia')}
            className={`pb-3 px-3 border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'estrategia'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            <Clock className="w-4 h-4" /> ⏳ Gestão do Tempo de Prova
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1 text-sm leading-relaxed">
          {activeTab === 'analogias' && (
            <div className="space-y-4">
              <div className={`p-4 rounded-2xl border ${
                isClean ? 'bg-emerald-50/50 border-emerald-200' : 'bg-emerald-950/20 border-emerald-800/40'
              }`}>
                <h5 className="font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-2 mb-1">
                  <span>🏪</span> 1. Data Warehouse vs Data Lake (A Despensa vs O Supermercado)
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  Imagine que o <strong>Data Warehouse</strong> é a sua despensa em casa: tudo está dentro de potes de vidro etiquetados (arroz, feijão, açúcar), limpos e organizados prontos para cozinhar (Schema-on-Write). Já o <strong>Data Lake</strong> é o carrinho de compras saindo do atacado: tem pacote de frango congelado, sabão em pó, garrafas e notas fiscais todas misturadas em estado bruto para você processar depois (Schema-on-Read).
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${
                isClean ? 'bg-indigo-50/50 border-indigo-200' : 'bg-indigo-950/20 border-indigo-800/40'
              }`}>
                <h5 className="font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-2 mb-1">
                  <span>🎓</span> 2. Overfitting (O Aluno que Decora com Vírgulas)
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  Imagine um candidato que decorou as 50 questões do livro com todos os pontos e vírgulas. No simulado em casa, ele tira nota 10 (erro de treino zero!). Mas no dia da prova, a Cesgranrio troca apenas um número do enunciado e ele erra feio (erro de teste gigante!). Isso é o <strong>Overfitting (Sobreajuste)</strong>: o algoritmo decorou o passado e não sabe pensar diante do novo.
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${
                isClean ? 'bg-amber-50/50 border-amber-200' : 'bg-amber-950/20 border-amber-800/40'
              }`}>
                <h5 className="font-bold text-amber-700 dark:text-amber-300 flex items-center gap-2 mb-1">
                  <span>🩺</span> 3. Matriz de Confusão: Alarme Falso vs Deixar o Ladrão Fugir
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <strong>Erro Tipo I (Falso Positivo):</strong> O alarme de incêndio do prédio toca às 3 da manhã sem fogo nenhum (alarme falso chato, mas ninguém morreu).<br />
                  <strong>Erro Tipo II (Falso Negativo):</strong> A casa está pegando fogo e o sensor não apita nada (omissão trágica!). Em dutos de petróleo, a Transpetro jamais pode aceitar o Erro Tipo II (deixar passar um vazamento sem detectar!).
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${
                isClean ? 'bg-blue-50/50 border-blue-200' : 'bg-blue-950/20 border-blue-800/40'
              }`}>
                <h5 className="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2 mb-1">
                  <span>⚖️</span> 4. Normalização (Idade vs Faturamento da Transpetro)
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  Se colocarmos na mesma tabela a idade do operador (ex: 30) e o faturamento do navio (ex: R$ 40.000.000), o algoritmo matemático vai achar que o dinheiro é 1.300.000 vezes mais importante do que a idade, simplesmente porque o número é maior! A <strong>Normalização</strong> comprime tudo entre 0 e 1 para que todas as variáveis compitam em igualdade de condições.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'regras' && (
            <div className="space-y-3">
              <div className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/60 border-slate-700'
              }`}>
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">1. NUNCA deixe nenhuma questão em branco!</strong>
                  Na Cesgranrio, errar uma questão NÃO anula uma certa (ao contrário do Cebraspe). Mesmo que você não saiba nada, você tem 20% de chance de acertar no chute.
                </div>
              </div>

              <div className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/60 border-slate-700'
              }`}>
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">2. A Técnica da Eliminação das 3 Absurdas</strong>
                  Nas 5 alternativas (A, B, C, D, E), a banca quase sempre coloca: 2 ou 3 alternativas completamente absurdas ou com termos radicais ("sempre", "exclusivamente", "nunca"). Risque-as de imediato com a caneta. Sua chance sobe para 50%!
                </div>
              </div>

              <div className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/60 border-slate-700'
              }`}>
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">3. Atenção à pontuação mínima em Português e Inglês</strong>
                  Não adianta gabaritar Ciência de Dados e zerar a prova de Português ou Inglês. O edital da Transpetro elimina quem obtiver nota zero nos blocos básicos.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'estrategia' && (
            <div className="space-y-3 text-xs sm:text-sm">
              <div className={`p-4 rounded-xl border ${
                isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/60 border-slate-700'
              }`}>
                <h5 className="font-bold text-slate-900 dark:text-white mb-2">
                  Como dividir as 4 horas e 30 minutos de prova:
                </h5>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>1. Bloco de Português (10 questões):</span>
                    <strong className="text-emerald-500">~35 minutos</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>2. Bloco de Inglês (5 questões):</span>
                    <strong className="text-emerald-500">~20 minutos</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>3. Conhecimentos Específicos Ciência de Dados (50 questões):</span>
                    <strong className="text-emerald-500">~2h e 30 minutos</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>4. Preenchimento do Cartão de Respostas (Gabarito):</span>
                    <strong className="text-emerald-500">Últimos 30 minutos sagrados</strong>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className={`p-4 border-t flex justify-end ${
          isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800'
        }`}>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition"
          >
            Entendi, vamos aos estudos! 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
