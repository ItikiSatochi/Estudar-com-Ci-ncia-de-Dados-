import { useState } from 'react';
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
    name: 'Detecção de Fraude Bancária',
    desc: 'Deixar uma fraude passar (FN) é catastrófico. O banco prefere dar algum alarme falso (FP) a perder milhões.',
    vp: 85,
    fp: 30,
    fn: 5,
    vn: 880,
    focus: 'Priorizar RECALL (Sensibilidade) para zerar Falsos Negativos',
    bancaInsight: 'Em fraudes ou crimes, a banca exige priorizar o RECALL (Revocação) para capturar o maior número possível de bandidos/fraudes.'
  },
  {
    name: 'Filtro de Spam de E-mails',
    desc: 'Um e-mail importante do chefe NÃO pode ser classificado como spam por engano (FP custa caríssimo!).',
    vp: 120,
    fp: 2,
    fn: 18,
    vn: 860,
    focus: 'Priorizar PRECISÃO para não ter Falso Positivo',
    bancaInsight: 'Quando um alarme falso é inaceitável, a banca cobra a PRECISÃO. Se o modelo diz que é spam, ele tem que ter certeza absoluta.'
  },
  {
    name: 'Questão Típica de Concurso (Base 100)',
    desc: 'Exemplo clássico com números redondos cobrado por bancas como FCC e FGV para você calcular de cabeça.',
    vp: 40,
    fp: 10,
    fn: 10,
    vn: 40,
    focus: 'Equilíbrio 80% Acurácia, 80% Precisão, 80% Recall',
    bancaInsight: 'Muito comum em provas que não permitem calculadora. Guarde as fórmulas para somar e dividir rápido na hora da prova.'
  }
];

export function ConfusionMatrixSimulator() {
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
      <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-900/60 p-6 rounded-2xl border border-blue-800/40 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1.5 bg-blue-500/20 text-blue-400 rounded-lg">
                <Calculator className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold text-white">
                Simulador Interativo da Matriz de Confusão & Métricas
              </h3>
            </div>
            <p className="text-sm text-slate-300">
              Modifique os 4 quadrantes abaixo ou carregue cenários reais de prova para ver como as fórmulas de <strong>Acurácia, Precisão, Recall e F1-Score</strong> se comportam na prática.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Resetar Valores
          </button>
        </div>

        {/* Preset scenario chips */}
        <div className="mt-4 pt-4 border-t border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            Carregar Cenários Frequentes de Prova:
          </span>
          <div className="flex flex-wrap gap-2">
            {PRESET_SCENARIOS.map((sc) => (
              <button
                key={sc.name}
                onClick={() => handleApplyScenario(sc)}
                className="text-xs font-medium bg-slate-800 hover:bg-indigo-900/50 hover:border-indigo-500/50 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg transition flex items-center gap-1.5"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{sc.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive 2x2 Matrix */}
        <div className="lg:col-span-6 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-md">
          <h4 className="font-bold text-base text-white mb-2 flex items-center justify-between">
            <span>A Matriz de Confusão (2 × 2)</span>
            <span className="text-xs font-normal text-slate-400">Total de Amostras: <strong className="text-white">{total}</strong></span>
          </h4>
          <p className="text-xs text-slate-400 mb-4">
            Altere os números digitando ou usando os seletores de cada quadrante:
          </p>

          <div className="relative overflow-x-auto">
            {/* Headers */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold text-slate-300 mb-2">
              <div></div>
              <div className="bg-slate-800 py-1.5 rounded-lg border border-slate-700 text-blue-300">
                Previsto: POSITIVO (+)
              </div>
              <div className="bg-slate-800 py-1.5 rounded-lg border border-slate-700 text-slate-300">
                Previsto: NEGATIVO (-)
              </div>
            </div>

            {/* Row 1: Real Positivo */}
            <div className="grid grid-cols-3 gap-2 mb-2 items-stretch">
              <div className="bg-slate-800 p-2 rounded-lg border border-slate-700 flex flex-col justify-center text-xs font-semibold text-emerald-400 text-center">
                <span>Realidade:</span>
                <span>POSITIVO (+)</span>
              </div>

              {/* VP */}
              <div className="bg-emerald-950/40 border-2 border-emerald-500/40 rounded-xl p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-emerald-300">VP</span>
                  <span className="text-[10px] bg-emerald-900/60 text-emerald-200 px-1.5 py-0.5 rounded">
                    Acerto
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 mb-2">Verdadeiro Positivo</div>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={vp}
                  onChange={(e) => setVp(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-slate-900 border border-emerald-500/50 rounded-lg px-2.5 py-1.5 text-center text-lg font-bold text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              {/* FN */}
              <div className="bg-rose-950/40 border-2 border-rose-500/50 rounded-xl p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-rose-300">FN</span>
                  <span className="text-[10px] bg-rose-900/80 text-rose-200 px-1.5 py-0.5 rounded font-semibold">
                    Erro Tipo II
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 mb-2">Falso Negativo (Omissão)</div>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={fn}
                  onChange={(e) => setFn(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-slate-900 border border-rose-500/50 rounded-lg px-2.5 py-1.5 text-center text-lg font-bold text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>
            </div>

            {/* Row 2: Real Negativo */}
            <div className="grid grid-cols-3 gap-2 items-stretch">
              <div className="bg-slate-800 p-2 rounded-lg border border-slate-700 flex flex-col justify-center text-xs font-semibold text-slate-400 text-center">
                <span>Realidade:</span>
                <span>NEGATIVO (-)</span>
              </div>

              {/* FP */}
              <div className="bg-amber-950/40 border-2 border-amber-500/50 rounded-xl p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-amber-300">FP</span>
                  <span className="text-[10px] bg-amber-900/80 text-amber-200 px-1.5 py-0.5 rounded font-semibold">
                    Erro Tipo I
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 mb-2">Falso Positivo (Alarme)</div>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={fp}
                  onChange={(e) => setFp(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-slate-900 border border-amber-500/50 rounded-lg px-2.5 py-1.5 text-center text-lg font-bold text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* VN */}
              <div className="bg-blue-950/40 border-2 border-blue-500/40 rounded-xl p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-blue-300">VN</span>
                  <span className="text-[10px] bg-blue-900/60 text-blue-200 px-1.5 py-0.5 rounded">
                    Acerto
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 mb-2">Verdadeiro Negativo</div>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={vn}
                  onChange={(e) => setVn(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-slate-900 border border-blue-500/50 rounded-lg px-2.5 py-1.5 text-center text-lg font-bold text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          </div>

          {/* Quick Explanation of Errors */}
          <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs">
            <div className="bg-amber-950/20 p-2.5 rounded-lg border border-amber-900/50">
              <span className="font-bold text-amber-300 block mb-0.5">Erro Tipo I (FP):</span>
              <p className="text-slate-300 text-[11px]">
                Alarme falso. O modelo gritou "positivo", mas era negativo. Ex: Condenar um inocente.
              </p>
            </div>
            <div className="bg-rose-950/20 p-2.5 rounded-lg border border-rose-900/50">
              <span className="font-bold text-rose-300 block mb-0.5">Erro Tipo II (FN):</span>
              <p className="text-slate-300 text-[11px]">
                Omissão trágica. Era positivo, mas o modelo deixou passar. Ex: Liberar um criminoso.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Calculated Metrics */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-md space-y-4">
            <h4 className="font-bold text-base text-white flex items-center gap-2">
              <BookmarkCheck className="w-5 h-5 text-indigo-400" />
              <span>Métricas Calculadas em Tempo Real</span>
            </h4>

            {/* Metric 1: Acurácia */}
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Acurácia (Accuracy)
                </span>
                <span className="text-lg font-extrabold text-white">
                  {acuracia.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden mb-2">
                <div
                  className="bg-indigo-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(0, acuracia))}%` }}
                />
              </div>
              <div className="text-[11px] font-mono text-slate-400 bg-slate-900/60 p-1.5 rounded">
                (VP + VN) / Total = ({vp} + {vn}) / {total} = <strong>{(acuracia / 100).toFixed(3)}</strong>
              </div>
            </div>

            {/* Metric 2: Precisão */}
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Precisão (Precision)
                </span>
                <span className="text-lg font-extrabold text-emerald-300">
                  {precisao.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden mb-2">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(0, precisao))}%` }}
                />
              </div>
              <div className="text-[11px] font-mono text-slate-400 bg-slate-900/60 p-1.5 rounded">
                VP / (VP + FP) = {vp} / ({vp} + {fp}) = <strong>{(precisao / 100).toFixed(3)}</strong>
              </div>
              <p className="text-[11px] text-slate-300 mt-1">
                De tudo que o modelo disse ser Positivo, quanto ele realmente acertou?
              </p>
            </div>

            {/* Metric 3: Recall / Sensibilidade */}
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Recall / Revocação / Sensibilidade
                </span>
                <span className="text-lg font-extrabold text-blue-300">
                  {recall.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden mb-2">
                <div
                  className="bg-blue-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(0, recall))}%` }}
                />
              </div>
              <div className="text-[11px] font-mono text-slate-400 bg-slate-900/60 p-1.5 rounded">
                VP / (VP + FN) = {vp} / ({vp} + {fn}) = <strong>{(recall / 100).toFixed(3)}</strong>
              </div>
              <p className="text-[11px] text-slate-300 mt-1">
                De todos os positivos reais existentes no mundo, quantos o modelo conseguiu achar?
              </p>
            </div>

            {/* Metric 4: F1-Score */}
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  F1-Score (Média Harmônica)
                </span>
                <span className="text-lg font-extrabold text-amber-300">
                  {f1.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden mb-2">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(0, f1))}%` }}
                />
              </div>
              <div className="text-[11px] font-mono text-slate-400 bg-slate-900/60 p-1.5 rounded">
                2 × (Precisão × Recall) / (Precisão + Recall) = <strong>{(f1 / 100).toFixed(3)}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Strategy Box */}
      <div className="bg-slate-900 p-5 rounded-2xl border border-indigo-900/40 text-sm">
        <h5 className="font-bold text-white flex items-center gap-2 mb-2 text-indigo-300">
          <HelpCircle className="w-4 h-4" /> Qual métrica a banca de concurso vai cobrar de você?
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300 mt-3">
          <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700">
            <strong className="text-emerald-400 block mb-1">Cobrou Precisão:</strong>
            Quando o Falso Positivo custa muito caro. Se você mandar o e-mail do presidente da empresa para a caixa de spam, você é demitido.
          </div>
          <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700">
            <strong className="text-blue-400 block mb-1">Cobrou Recall (Sensibilidade):</strong>
            Quando o Falso Negativo é inaceitável. Se o paciente tem câncer ou se a mala tem explosivo, o modelo não pode deixar passar de jeito nenhum.
          </div>
          <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700">
            <strong className="text-amber-400 block mb-1">Cobrou F1-Score:</strong>
            Quando a base é desbalanceada e você precisa de um meio-termo equilibrado entre não dar alarme falso e não deixar passar ninguém.
          </div>
        </div>
      </div>
    </div>
  );
}
