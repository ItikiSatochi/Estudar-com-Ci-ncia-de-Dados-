import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Calculator, AlertCircle, CheckCircle, HelpCircle, Sparkles, RefreshCw, BookmarkCheck } from 'lucide-react';

interface Scenario {
  name: string;
  desc: string;
  vp: number;
  fp: number;
  fn: number;
  vn: number;
  focus: string;
  bancaInsight: string;
}

const PRESET_SCENARIOS: Scenario[] = [
  {
    name: 'O Paradoxo da Acurácia (Doença Rara)',
    desc: 'Cenário onde apenas 1 em 1.000 pessoas está doente e o modelo "burro" prevê que todo mundo é saudável.',
    vp: 0,
    fp: 0,
    fn: 10,
    vn: 990,
    focus: 'Acurácia enganosa (99.0%) vs Recall nulo (0.0%)',
    bancaInsight: 'Cai muito! Mostra por que a Acurácia não presta para dados desbalanceados. O modelo tem 99% de acurácia, mas é 100% inútil para salvar vidas.'
  },
  {
    name: 'Detecção de Vazamento em Dutos (Transpetro)',
    desc: 'Deixar um vazamento passar (FN) é catastrófico para a Transpetro. A empresa prefere um alarme falso (FP) a um desastre ecológico.',
    vp: 85,
    fp: 30,
    fn: 5,
    vn: 880,
    focus: 'Priorizar RECALL (Sensibilidade) para zerar Falsos Negativos',
    bancaInsight: 'Em vazamentos ou crimes ambientais, a banca exige priorizar o RECALL (Revocação) para capturar o maior número possível de ocorrências reais.'
  },
  {
    name: 'Filtro de Spam de E-mails',
    desc: 'Um e-mail importante do diretor NÃO pode ser classificado como spam por engano (FP custa caríssimo!).',
    vp: 120,
    fp: 2,
    fn: 18,
    vn: 860,
    focus: 'Priorizar PRECISÃO para não ter Falso Positivo',
    bancaInsight: 'Quando um alarme falso é inaceitável, a banca cobra a PRECISÃO. Se o modelo diz que é spam, ele tem que ter certeza absoluta.'
  },
  {
    name: 'Questão Típica de Concurso (Base 100)',
    desc: 'Exemplo clássico com números redondos cobrado pela Cesgranrio para você calcular de cabeça.',
    vp: 40,
    fp: 10,
    fn: 10,
    vn: 40,
    focus: 'Equilíbrio 80% Acurácia, 80% Precisão, 80% Recall',
    bancaInsight: 'Muito comum em provas que não permitem calculadora. Guarde as fórmulas para somar e dividir rápido no dia da prova.'
  }
];

export function ConfusionMatrixSimulator() {
  const { isClean } = useTheme();
  const [vp, setVp] = useState<number>(40);
  const [fp, setFp] = useState<number>(10);
  const [fn, setFn] = useState<number>(10);
  const [vn, setVn] = useState<number>(40);

  const total = vp + fp + fn + vn;
  const safeTotal = total === 0 ? 1 : total;

  // Calculations
  const acuracia = ((vp + vn) / safeTotal) * 100;
  const precisao = vp + fp === 0 ? 0 : (vp / (vp + fp)) * 100;
  const recall = vp + fn === 0 ? 0 : (vp / (vp + fn)) * 100;
  const especificidade = vn + fp === 0 ? 0 : (vn / (vn + fp)) * 100;
  const f1 =
    precisao + recall === 0 ? 0 : (2 * (precisao * recall)) / (precisao + recall);

  const handleApplyScenario = (sc: Scenario) => {
    setVp(sc.vp);
    setFp(sc.fp);
    setFn(sc.fn);
    setVn(sc.vn);
  };

  const handleReset = () => {
    setVp(40);
    setFp(10);
    setFn(10);
    setVn(40);
  };

  return (
    <div className="space-y-6">
      {/* Header intro */}
      <div className={`p-6 rounded-3xl border transition-all ${
        isClean
          ? 'bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border-emerald-200 shadow-sm text-slate-800'
          : 'bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-900/60 border-blue-800/40 shadow-lg text-slate-100'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`p-1.5 rounded-lg ${isClean ? 'bg-emerald-600 text-white' : 'bg-emerald-500/20 text-emerald-400'}`}>
                <Calculator className="w-5 h-5" />
              </span>
              <h3 className={`text-xl font-bold ${isClean ? 'text-slate-900' : 'text-white'}`}>
                Simulador Interativo da Matriz de Confusão & Métricas
              </h3>
            </div>
            <p className={`text-sm ${isClean ? 'text-slate-700' : 'text-slate-300'}`}>
              Modifique os 4 quadrantes abaixo ou carregue cenários reais de prova para ver como as fórmulas de <strong>Acurácia, Precisão, Recall e F1-Score</strong> se comportam na prática.
            </p>
          </div>
          <button
            onClick={handleReset}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
              isClean
                ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" /> Resetar Valores
          </button>
        </div>

        {/* Preset scenario chips */}
        <div className={`mt-4 pt-4 border-t ${isClean ? 'border-emerald-200' : 'border-slate-800'}`}>
          <span className={`text-xs font-semibold uppercase tracking-wider block mb-2 ${
            isClean ? 'text-slate-600' : 'text-slate-400'
          }`}>
            Carregar Cenários Frequentes de Prova:
          </span>
          <div className="flex flex-wrap gap-2">
            {PRESET_SCENARIOS.map((sc) => (
              <button
                key={sc.name}
                onClick={() => handleApplyScenario(sc)}
                className={`text-xs font-medium border px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
                  isClean
                    ? 'bg-white hover:bg-emerald-50 text-slate-800 border-slate-300'
                    : 'bg-slate-800 hover:bg-indigo-900/50 hover:border-indigo-500/50 text-slate-200 border-slate-700'
                }`}
              >
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>{sc.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive 2x2 Matrix */}
        <div className={`lg:col-span-6 p-6 rounded-3xl border ${
          isClean ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800 shadow-md'
        }`}>
          <h4 className={`font-bold text-base mb-2 flex items-center justify-between ${
            isClean ? 'text-slate-900' : 'text-white'
          }`}>
            <span>A Matriz de Confusão (2 × 2)</span>
            <span className={`text-xs font-normal ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>
              Total de Amostras: <strong className={isClean ? 'text-slate-900' : 'text-white'}>{total}</strong>
            </span>
          </h4>
          <p className={`text-xs mb-4 ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>
            Altere os números digitando ou usando os seletores de cada quadrante:
          </p>

          <div className="relative overflow-x-auto">
            {/* Headers */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold mb-2">
              <div></div>
              <div className={`py-1.5 rounded-lg border font-bold ${
                isClean ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-slate-800 text-emerald-300 border-slate-700'
              }`}>
                Previsto: POSITIVO (+)
              </div>
              <div className={`py-1.5 rounded-lg border font-bold ${
                isClean ? 'bg-slate-100 text-slate-700 border-slate-200' : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}>
                Previsto: NEGATIVO (-)
              </div>
            </div>

            {/* Row 1: Real Positivo */}
            <div className="grid grid-cols-3 gap-2 mb-2 items-stretch">
              <div className={`p-2 rounded-lg border flex flex-col justify-center text-xs font-bold text-center ${
                isClean ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-slate-800 border-slate-700 text-emerald-400'
              }`}>
                <span>Realidade:</span>
                <span>POSITIVO (+)</span>
              </div>

              {/* VP */}
              <div className={`border-2 rounded-2xl p-3 flex flex-col justify-between ${
                isClean ? 'bg-emerald-50/70 border-emerald-300' : 'bg-emerald-950/40 border-emerald-500/40'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-bold ${isClean ? 'text-emerald-900' : 'text-emerald-300'}`}>VP</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                    isClean ? 'bg-emerald-200 text-emerald-900' : 'bg-emerald-900/60 text-emerald-200'
                  }`}>
                    Acerto
                  </span>
                </div>
                <div className={`text-[11px] mb-2 ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>Verdadeiro Positivo</div>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={vp}
                  onChange={(e) => setVp(Math.max(0, parseInt(e.target.value) || 0))}
                  className={`w-full rounded-lg px-2.5 py-1.5 text-center text-lg font-bold border focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    isClean ? 'bg-white border-emerald-300 text-emerald-950' : 'bg-slate-900 border-emerald-500/50 text-emerald-300'
                  }`}
                />
              </div>

              {/* FN */}
              <div className={`border-2 rounded-2xl p-3 flex flex-col justify-between ${
                isClean ? 'bg-rose-50/70 border-rose-300' : 'bg-rose-950/40 border-rose-500/50'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-bold ${isClean ? 'text-rose-900' : 'text-rose-300'}`}>FN</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                    isClean ? 'bg-rose-200 text-rose-900' : 'bg-rose-900/80 text-rose-200'
                  }`}>
                    Erro Tipo II
                  </span>
                </div>
                <div className={`text-[11px] mb-2 ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>Falso Negativo (Omissão)</div>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={fn}
                  onChange={(e) => setFn(Math.max(0, parseInt(e.target.value) || 0))}
                  className={`w-full rounded-lg px-2.5 py-1.5 text-center text-lg font-bold border focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                    isClean ? 'bg-white border-rose-300 text-rose-950' : 'bg-slate-900 border-rose-500/50 text-rose-300'
                  }`}
                />
              </div>
            </div>

            {/* Row 2: Real Negativo */}
            <div className="grid grid-cols-3 gap-2 items-stretch">
              <div className={`p-2 rounded-lg border flex flex-col justify-center text-xs font-bold text-center ${
                isClean ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}>
                <span>Realidade:</span>
                <span>NEGATIVO (-)</span>
              </div>

              {/* FP */}
              <div className={`border-2 rounded-2xl p-3 flex flex-col justify-between ${
                isClean ? 'bg-amber-50/70 border-amber-300' : 'bg-amber-950/40 border-amber-500/50'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-bold ${isClean ? 'text-amber-900' : 'text-amber-300'}`}>FP</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                    isClean ? 'bg-amber-200 text-amber-900' : 'bg-amber-900/80 text-amber-200'
                  }`}>
                    Erro Tipo I
                  </span>
                </div>
                <div className={`text-[11px] mb-2 ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>Falso Positivo (Alarme)</div>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={fp}
                  onChange={(e) => setFp(Math.max(0, parseInt(e.target.value) || 0))}
                  className={`w-full rounded-lg px-2.5 py-1.5 text-center text-lg font-bold border focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    isClean ? 'bg-white border-amber-300 text-amber-950' : 'bg-slate-900 border-amber-500/50 text-amber-300'
                  }`}
                />
              </div>

              {/* VN */}
              <div className={`border-2 rounded-2xl p-3 flex flex-col justify-between ${
                isClean ? 'bg-blue-50/70 border-blue-300' : 'bg-blue-950/40 border-blue-500/40'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-bold ${isClean ? 'text-blue-900' : 'text-blue-300'}`}>VN</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                    isClean ? 'bg-blue-200 text-blue-900' : 'bg-blue-900/60 text-blue-200'
                  }`}>
                    Acerto
                  </span>
                </div>
                <div className={`text-[11px] mb-2 ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>Verdadeiro Negativo</div>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={vn}
                  onChange={(e) => setVn(Math.max(0, parseInt(e.target.value) || 0))}
                  className={`w-full rounded-lg px-2.5 py-1.5 text-center text-lg font-bold border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isClean ? 'bg-white border-blue-300 text-blue-950' : 'bg-slate-900 border-blue-500/50 text-blue-300'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Quick Explanation of Errors */}
          <div className={`mt-4 pt-4 border-t grid grid-cols-2 gap-3 text-xs ${
            isClean ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div className={`p-2.5 rounded-xl border ${
              isClean ? 'bg-amber-50 border-amber-200 text-slate-800' : 'bg-amber-950/20 border-amber-900/50 text-slate-300'
            }`}>
              <span className="font-bold text-amber-600 dark:text-amber-300 block mb-0.5">Erro Tipo I (FP):</span>
              <p className="text-[11px]">
                Alarme falso. O sensor gritou vazamento, mas não tinha nada.
              </p>
            </div>
            <div className={`p-2.5 rounded-xl border ${
              isClean ? 'bg-rose-50 border-rose-200 text-slate-800' : 'bg-rose-950/20 border-rose-900/50 text-slate-300'
            }`}>
              <span className="font-bold text-rose-600 dark:text-rose-300 block mb-0.5">Erro Tipo II (FN):</span>
              <p className="text-[11px]">
                Omissão trágica. O duto estava vazando e o modelo disse que estava tudo bem.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Calculated Metrics */}
        <div className="lg:col-span-6 space-y-4">
          <div className={`p-6 rounded-3xl border space-y-4 ${
            isClean ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800 shadow-md'
          }`}>
            <h4 className={`font-bold text-base flex items-center gap-2 ${
              isClean ? 'text-slate-900' : 'text-white'
            }`}>
              <BookmarkCheck className="w-5 h-5 text-emerald-500" />
              <span>Métricas Calculadas em Tempo Real</span>
            </h4>

            {/* Metric 1: Acurácia */}
            <div className={`p-3.5 rounded-xl border ${
              isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/80 border-slate-700/80'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-bold uppercase tracking-wider ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>
                  Acurácia (Accuracy)
                </span>
                <span className={`text-lg font-extrabold ${isClean ? 'text-slate-900' : 'text-white'}`}>
                  {acuracia.toFixed(1)}%
                </span>
              </div>
              <div className={`w-full h-2 rounded-full overflow-hidden mb-2 ${isClean ? 'bg-slate-200' : 'bg-slate-700'}`}>
                <div
                  className="bg-indigo-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(0, acuracia))}%` }}
                />
              </div>
              <div className={`text-[11px] font-mono p-1.5 rounded ${
                isClean ? 'bg-white border border-slate-200 text-slate-700' : 'bg-slate-900/60 text-slate-400'
              }`}>
                (VP + VN) / Total = ({vp} + {vn}) / {total} = <strong>{(acuracia / 100).toFixed(3)}</strong>
              </div>
            </div>

            {/* Metric 2: Precisão */}
            <div className={`p-3.5 rounded-xl border ${
              isClean ? 'bg-emerald-50/50 border-emerald-200' : 'bg-slate-800/80 border-slate-700/80'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Precisão (Precision)
                </span>
                <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-300">
                  {precisao.toFixed(1)}%
                </span>
              </div>
              <div className={`w-full h-2 rounded-full overflow-hidden mb-2 ${isClean ? 'bg-slate-200' : 'bg-slate-700'}`}>
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(0, precisao))}%` }}
                />
              </div>
              <div className={`text-[11px] font-mono p-1.5 rounded ${
                isClean ? 'bg-white border border-slate-200 text-slate-700' : 'bg-slate-900/60 text-slate-400'
              }`}>
                VP / (VP + FP) = {vp} / ({vp} + {fp}) = <strong>{(precisao / 100).toFixed(3)}</strong>
              </div>
              <p className={`text-[11px] mt-1 ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>
                De tudo que o modelo disse ser Positivo, quanto ele realmente acertou?
              </p>
            </div>

            {/* Metric 3: Recall / Sensibilidade */}
            <div className={`p-3.5 rounded-xl border ${
              isClean ? 'bg-blue-50/50 border-blue-200' : 'bg-slate-800/80 border-slate-700/80'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Recall / Revocação / Sensibilidade
                </span>
                <span className="text-lg font-extrabold text-blue-600 dark:text-blue-300">
                  {recall.toFixed(1)}%
                </span>
              </div>
              <div className={`w-full h-2 rounded-full overflow-hidden mb-2 ${isClean ? 'bg-slate-200' : 'bg-slate-700'}`}>
                <div
                  className="bg-blue-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(0, recall))}%` }}
                />
              </div>
              <div className={`text-[11px] font-mono p-1.5 rounded ${
                isClean ? 'bg-white border border-slate-200 text-slate-700' : 'bg-slate-900/60 text-slate-400'
              }`}>
                VP / (VP + FN) = {vp} / ({vp} + {fn}) = <strong>{(recall / 100).toFixed(3)}</strong>
              </div>
              <p className={`text-[11px] mt-1 ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>
                De todos os positivos reais existentes no mundo, quantos o modelo conseguiu achar?
              </p>
            </div>

            {/* Metric 4: F1-Score */}
            <div className={`p-3.5 rounded-xl border ${
              isClean ? 'bg-amber-50/50 border-amber-200' : 'bg-slate-800/80 border-slate-700/80'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  F1-Score (Média Harmônica)
                </span>
                <span className="text-lg font-extrabold text-amber-600 dark:text-amber-300">
                  {f1.toFixed(1)}%
                </span>
              </div>
              <div className={`w-full h-2 rounded-full overflow-hidden mb-2 ${isClean ? 'bg-slate-200' : 'bg-slate-700'}`}>
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(0, f1))}%` }}
                />
              </div>
              <div className={`text-[11px] font-mono p-1.5 rounded ${
                isClean ? 'bg-white border border-slate-200 text-slate-700' : 'bg-slate-900/60 text-slate-400'
              }`}>
                2 × (Precisão × Recall) / (Precisão + Recall) = <strong>{(f1 / 100).toFixed(3)}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Strategy Box */}
      <div className={`p-5 rounded-3xl border text-sm ${
        isClean ? 'bg-white border-slate-200' : 'bg-slate-900 border-indigo-900/40'
      }`}>
        <h5 className={`font-bold flex items-center gap-2 mb-2 ${
          isClean ? 'text-indigo-900' : 'text-indigo-300'
        }`}>
          <HelpCircle className="w-4 h-4 text-emerald-500" /> Qual métrica a Cesgranrio vai cobrar de você?
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mt-3">
          <div className={`p-3 rounded-2xl border ${
            isClean ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-slate-800/60 border-slate-700 text-slate-300'
          }`}>
            <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">Cobrou Precisão:</strong>
            Quando o Falso Positivo custa muito caro. Se você enviar um alarme falso de vazamento que paralisa a refinaria inteira, o prejuízo é milionário.
          </div>
          <div className={`p-3 rounded-2xl border ${
            isClean ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-slate-800/60 border-slate-700 text-slate-300'
          }`}>
            <strong className="text-blue-600 dark:text-blue-400 block mb-1">Cobrou Recall (Sensibilidade):</strong>
            Quando o Falso Negativo é inaceitável. Na Transpetro, um vazamento em duto submarino NÃO pode passar despercebido.
          </div>
          <div className={`p-3 rounded-2xl border ${
            isClean ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-slate-800/60 border-slate-700 text-slate-300'
          }`}>
            <strong className="text-amber-600 dark:text-amber-400 block mb-1">Cobrou F1-Score:</strong>
            Quando a base é desbalanceada e a banca pede um equilíbrio harmônico entre não dar alarmes falsos e não deixar passar incidentes.
          </div>
        </div>
      </div>
    </div>
  );
}
