import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Cpu, Sliders, Play, CheckCircle2, AlertTriangle, ArrowRight, Activity, GitFork, RefreshCw } from 'lucide-react';

export function MlAlgorithmsInteractive() {
  const { isClean } = useTheme();
  const [activeTab, setActiveTab] = useState<'decision_tree' | 'kmeans' | 'normalization'>('decision_tree');

  // Decision Tree Inputs
  const [pressao, setPressao] = useState<number>(88); // 50 to 120 bar
  const [temperatura, setTemperatura] = useState<number>(68); // 30 to 90 °C
  const [vibracao, setVibracao] = useState<number>(4.2); // 1.0 to 10.0 mm/s

  // Decision Tree Logic
  const passStep1 = pressao > 85;
  const passStep2 = temperatura > 60;
  const isCritical = passStep1 && passStep2;

  // Normalization inputs
  const [rawVal, setRawVal] = useState<number>(8500); // 1000 to 10000 m3/h
  const minVal = 1000;
  const maxVal = 10000;
  const meanVal = 5500;
  const stdVal = 1800;

  const minMaxVal = ((rawVal - minVal) / (maxVal - minVal)).toFixed(3);
  const zScoreVal = ((rawVal - meanVal) / stdVal).toFixed(2);

  return (
    <div className={`p-4 sm:p-6 rounded-3xl border transition shadow-sm space-y-5 ${
      isClean ? 'bg-slate-50 border-emerald-200' : 'bg-slate-900/80 border-emerald-900/40'
    }`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
            Laboratório Visual Prático de Machine Learning
          </span>
          <h4 className={`text-base font-extrabold flex items-center gap-2 ${isClean ? 'text-slate-900' : 'text-white'}`}>
            <Cpu className="w-4 h-4 text-emerald-500" />
            Simulador Interativo de Algoritmos na Transpetro
          </h4>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab('decision_tree')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition border ${
              activeTab === 'decision_tree'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow'
                : isClean ? 'bg-white border-slate-200 text-slate-700' : 'bg-slate-800 border-slate-700 text-slate-300'
            }`}
          >
            Árvore de Decisão
          </button>
          <button
            onClick={() => setActiveTab('normalization')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition border ${
              activeTab === 'normalization'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow'
                : isClean ? 'bg-white border-slate-200 text-slate-700' : 'bg-slate-800 border-slate-700 text-slate-300'
            }`}
          >
            Normalização vs Z-Score
          </button>
          <button
            onClick={() => setActiveTab('kmeans')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition border ${
              activeTab === 'kmeans'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow'
                : isClean ? 'bg-white border-slate-200 text-slate-700' : 'bg-slate-800 border-slate-700 text-slate-300'
            }`}
          >
            K-Means (Cotovelo)
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive Decision Tree */}
      {activeTab === 'decision_tree' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Ajuste os controles deslizantes dos sensores do oleoduto e veja em tempo real como o modelo supervisionado percorre os nós da árvore:
          </p>

          {/* Sliders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={`p-3.5 rounded-2xl border ${isClean ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <span>Pressão no Duto:</span>
                <span className="text-emerald-500 font-mono text-sm">{pressao} bar</span>
              </div>
              <input
                type="range"
                min="50"
                max="120"
                value={pressao}
                onChange={(e) => setPressao(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block mt-1">Limiar do nó: &gt; 85 bar</span>
            </div>

            <div className={`p-3.5 rounded-2xl border ${isClean ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <span>Temperatura do Fluido:</span>
                <span className="text-emerald-500 font-mono text-sm">{temperatura} °C</span>
              </div>
              <input
                type="range"
                min="30"
                max="90"
                value={temperatura}
                onChange={(e) => setTemperatura(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block mt-1">Limiar do nó: &gt; 60 °C</span>
            </div>
          </div>

          {/* Visual Interactive Tree Graph */}
          <div className={`p-5 rounded-2xl border space-y-4 text-center ${
            isClean ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'
          }`}>
            {/* Root Node */}
            <div className={`inline-block px-4 py-2 rounded-xl text-xs font-bold border transition ${
              passStep1
                ? 'bg-amber-500/20 border-amber-500 text-amber-950 dark:text-amber-200 ring-2 ring-amber-500/30'
                : 'bg-emerald-500/20 border-emerald-500 text-emerald-950 dark:text-emerald-200'
            }`}>
              1. Nó Raiz: Pressão &gt; 85 bar?
              <span className="block text-[10px] font-mono mt-0.5">
                Valor Atual: {pressao} bar → {passStep1 ? 'SIM (Desvia p/ Risco)' : 'NÃO (Normal)'}
              </span>
            </div>

            {/* Branches */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-2">
              {/* Left Branch (Normal) */}
              <div className={`p-3 rounded-xl border text-xs transition ${
                !passStep1
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-bold scale-105 shadow'
                  : 'opacity-40 border-slate-300 dark:border-slate-800'
              }`}>
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
                <span>OPERAÇÃO NORMAL</span>
                <span className="block text-[10px] text-slate-500 mt-1">Pressão estável, sem risco de fadiga mecânica.</span>
              </div>

              {/* Right Branch (Step 2 Check) */}
              <div className={`p-3 rounded-xl border text-xs transition ${
                passStep1
                  ? isCritical
                    ? 'bg-red-500/20 border-red-500 text-red-950 dark:text-red-200 font-bold scale-105 shadow'
                    : 'bg-amber-500/20 border-amber-500 text-amber-950 dark:text-amber-200 font-bold scale-105 shadow'
                  : 'opacity-40 border-slate-300 dark:border-slate-800'
              }`}>
                {isCritical ? (
                  <>
                    <AlertTriangle className="w-5 h-5 text-red-500 mx-auto mb-1 animate-pulse" />
                    <span className="text-red-600 dark:text-red-400">ALERTA CRÍTICO: RISCO DE VAZAMENTO!</span>
                    <span className="block text-[10px] text-slate-500 mt-1">Pressão ({pressao} bar) e Temp ({temperatura}°C) elevadas!</span>
                  </>
                ) : (
                  <>
                    <Activity className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                    <span>ALERTA MODERADO</span>
                    <span className="block text-[10px] text-slate-500 mt-1">Pressão alta, mas temperatura segura ({temperatura}°C).</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Normalization vs Standardization */}
      {activeTab === 'normalization' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Veja como o pré-processamento transforma uma leitura real de vazão de duto para escalas aceitas por redes neurais e SVM:
          </p>

          <div className={`p-4 rounded-2xl border space-y-3 ${isClean ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
            <div className="flex items-center justify-between text-xs font-bold">
              <span>Vazão Bruta do Duto (m³/hora):</span>
              <span className="text-emerald-500 font-mono text-base font-black">{rawVal.toLocaleString('pt-BR')} m³/h</span>
            </div>
            <input
              type="range"
              min="1000"
              max="10000"
              step="100"
              value={rawVal}
              onChange={(e) => setRawVal(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Mínimo Histórico: 1.000 m³/h</span>
              <span>Média: 5.500 m³/h</span>
              <span>Máximo Histórico: 10.000 m³/h</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={`p-4 rounded-2xl border space-y-2 ${isClean ? 'bg-emerald-50/50 border-emerald-200 text-slate-800' : 'bg-emerald-950/20 border-emerald-800 text-slate-200'}`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                1. Normalização Min-Max [0, 1]
              </span>
              <p className="font-mono text-2xl font-black text-emerald-600 dark:text-emerald-300">
                {minMaxVal}
              </p>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                Fórmula: ({rawVal} - 1000) / (10000 - 1000)
              </p>
              <span className="text-[10px] text-slate-500 block">
                Garante que o valor fique estritamente entre 0.000 e 1.000.
              </span>
            </div>

            <div className={`p-4 rounded-2xl border space-y-2 ${isClean ? 'bg-indigo-50/50 border-indigo-200 text-slate-800' : 'bg-indigo-950/20 border-indigo-800 text-slate-200'}`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                2. Padronização StandardScaler (Z-Score)
              </span>
              <p className="font-mono text-2xl font-black text-indigo-600 dark:text-indigo-300">
                {zScoreVal} σ
              </p>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                Fórmula: ({rawVal} - 5500) / 1800
              </p>
              <span className="text-[10px] text-slate-500 block">
                Indica a quantos desvios-padrão da média o valor está. Muito mais tolerante a outliers!
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: K-Means & Elbow Method */}
      {activeTab === 'kmeans' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-600 dark:text-slate-300">
            O K-Means agrupa navios petroleiros sem supervisão. Como escolher o número ótimo de grupos K? Pelo Método do Cotovelo (Elbow Method):
          </p>

          <div className={`p-4 rounded-2xl border space-y-3 ${isClean ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
              Gráfico da Inércia (WCSS) vs Número de Grupos K
            </span>
            <div className="grid grid-cols-5 gap-2 text-center text-xs">
              <div className="p-2 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="block font-bold">K = 1</span>
                <span className="text-[10px] font-mono text-slate-400">Inércia: 9.800</span>
              </div>
              <div className="p-2 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="block font-bold">K = 2</span>
                <span className="text-[10px] font-mono text-slate-400">Inércia: 4.200</span>
              </div>
              <div className="p-2 rounded-xl border-2 border-emerald-500 bg-emerald-500/10 font-bold">
                <span className="block text-emerald-500">K = 3 ⭐</span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">Cotovelo! (1.500)</span>
              </div>
              <div className="p-2 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="block font-bold">K = 4</span>
                <span className="text-[10px] font-mono text-slate-400">Inércia: 1.200</span>
              </div>
              <div className="p-2 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="block font-bold">K = 5</span>
                <span className="text-[10px] font-mono text-slate-400">Inércia: 1.050</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              💡 <strong>Regra da Cesgranrio:</strong> De K=1 para K=2 e K=3 a inércia cai bruscamente. A partir de K=3, adicionar novos grupos quase não traz ganho. Portanto, o <strong>cotovelo está em K = 3</strong>!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
