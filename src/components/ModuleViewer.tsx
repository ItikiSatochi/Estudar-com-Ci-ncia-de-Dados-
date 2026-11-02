import { useState } from 'react';
import { ModuleSection } from '../types';
import { DikwPyramidInteractive } from './DikwPyramidInteractive';
import { CrispDmInteractive } from './CrispDmInteractive';
import { 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  CheckSquare, 
  Square,
  HelpCircle,
  Calculator
} from 'lucide-react';

interface ModuleViewerProps {
  modules: ModuleSection[];
  onOpenSimuladoWithTopic?: (topicId: string) => void;
  onOpenMatrixSimulator?: () => void;
}

export function ModuleViewer({
  modules,
  onOpenSimuladoWithTopic,
  onOpenMatrixSimulator
}: ModuleViewerProps) {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(modules[0]?.id || 'dikw');
  const [completedModules, setCompletedModules] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('dataconcurso_completed_modules');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const currentModule = modules.find((m) => m.id === selectedModuleId) || modules[0];
  const currentIndex = modules.findIndex((m) => m.id === currentModule.id);

  const toggleModuleCompleted = (id: string) => {
    const next = { ...completedModules, [id]: !completedModules[id] };
    setCompletedModules(next);
    try {
      localStorage.setItem('dataconcurso_completed_modules', JSON.stringify(next));
    } catch (e) {
      console.error(e);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedModuleId(modules[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentIndex < modules.length - 1) {
      setSelectedModuleId(modules[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const completedCount = Object.values(completedModules).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / modules.length) * 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Navigation: Modules Index */}
      <div className="lg:col-span-4 space-y-4">
        {/* Progress Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-1.5">
            <span>Progresso nos Módulos</span>
            <span className="text-indigo-400">{completedCount} de {modules.length} ({progressPercent}%)</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Modules List */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-1.5 shadow-sm max-h-[750px] overflow-y-auto">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 block">
            Índice de Tópicos do Concurso:
          </span>
          {modules.map((mod, index) => {
            const isSelected = mod.id === currentModule.id;
            const isCompleted = !!completedModules[mod.id];
            return (
              <button
                key={mod.id}
                onClick={() => {
                  setSelectedModuleId(mod.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full text-left p-3 rounded-xl transition-all duration-150 flex items-start gap-2.5 border ${
                  isSelected
                    ? 'bg-indigo-600/15 border-indigo-500/50 text-white shadow-sm'
                    : 'bg-transparent border-transparent text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleModuleCompleted(mod.id);
                  }}
                  className="mt-0.5 text-slate-400 hover:text-indigo-400 shrink-0"
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[10px] text-slate-400">
                      {index + 1}
                    </div>
                  )}
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 bg-slate-800 text-slate-300 rounded border border-slate-700">
                      {mod.badge}
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                      <Clock className="w-2.5 h-2.5" /> {mod.readTime}
                    </span>
                  </div>
                  <p className={`text-xs font-semibold leading-snug line-clamp-2 ${isSelected ? 'text-indigo-300' : 'text-slate-200'}`}>
                    {mod.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Module Reader */}
      <div className="lg:col-span-8 space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          {/* Module Header */}
          <div className="pb-6 border-b border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-indigo-500/20 text-indigo-400 text-xs font-bold rounded-lg border border-indigo-500/30">
                  {currentModule.badge}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Leitura: {currentModule.readTime}
                </span>
              </div>
              <button
                onClick={() => toggleModuleCompleted(currentModule.id)}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition ${
                  completedModules[currentModule.id]
                    ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {completedModules[currentModule.id] ? (
                  <>
                    <CheckSquare className="w-4 h-4 text-emerald-400" /> Módulo Concluído!
                  </>
                ) : (
                  <>
                    <Square className="w-4 h-4" /> Marcar como Lido
                  </>
                )}
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {currentModule.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              {currentModule.shortDescription}
            </p>
          </div>

          {/* Key Points (Pontos Vitais) */}
          <div className="my-6 bg-slate-800/60 rounded-2xl p-4 sm:p-5 border border-slate-700/70">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-3">
              <Lightbulb className="w-4 h-4" /> Pontos Vitais para Decorar (Resumo Executivo):
            </h4>
            <ul className="space-y-2">
              {currentModule.keyPoints.map((pt, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Embed if Applicable */}
          {currentModule.id === 'dikw' && <DikwPyramidInteractive />}
          {currentModule.id === 'crisp-dm' && <CrispDmInteractive />}
          {currentModule.id === 'metricas-matriz' && onOpenMatrixSimulator && (
            <div className="bg-gradient-to-r from-blue-950/60 to-indigo-950/60 p-4 rounded-2xl border border-indigo-700/40 flex flex-col sm:flex-row items-center justify-between gap-4 my-6">
              <div>
                <h5 className="font-bold text-white text-sm flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-indigo-400" /> Experimente o Simulador Interativo de Matriz!
                </h5>
                <p className="text-xs text-slate-300 mt-0.5">
                  Teste o cálculo de Acurácia, Precisão, Recall e F1 com números e gráficos em tempo real.
                </p>
              </div>
              <button
                onClick={onOpenMatrixSimulator}
                className="shrink-0 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition shadow"
              >
                Abrir Calculadora
              </button>
            </div>
          )}

          {/* Content Sections */}
          <div className="space-y-6 mt-6 text-slate-200 text-sm leading-relaxed">
            <p className="text-base text-slate-300 font-medium">
              {currentModule.content.intro}
            </p>

            {currentModule.content.subsections.map((sub, idx) => (
              <div key={idx} className="space-y-3 pt-4 border-t border-slate-800">
                <h3 className="text-lg font-bold text-white">
                  {sub.subtitle}
                </h3>
                <p className="whitespace-pre-line text-slate-300">
                  {sub.text}
                </p>

                {/* Example Callout */}
                {sub.example && (
                  <div className="bg-slate-800/40 border-l-4 border-indigo-500 p-3.5 rounded-r-xl text-xs sm:text-sm text-slate-300 whitespace-pre-line">
                    <span className="font-bold text-indigo-300 block mb-1">Exemplo Prático:</span>
                    {sub.example}
                  </div>
                )}

                {/* Comparison Table */}
                {sub.comparisonTable && (
                  <div className="overflow-x-auto my-4 rounded-xl border border-slate-700">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-800 text-slate-200 uppercase font-semibold">
                        <tr>
                          {sub.comparisonTable.headers.map((h, i) => (
                            <th key={i} className="px-3 py-2.5 border-b border-slate-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 bg-slate-900/60">
                        {sub.comparisonTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-800/30">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-3 py-2 text-slate-300 font-medium">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Exam Tip */}
                {sub.examTip && (
                  <div className="bg-indigo-950/30 border border-indigo-800/40 rounded-xl p-3 text-xs sm:text-sm text-indigo-200 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-amber-300">Dica Quente de Concurso: </strong>
                      {sub.examTip}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Banca Trap Box */}
            <div className="bg-rose-950/20 border-2 border-rose-500/40 rounded-2xl p-4 sm:p-5 my-6">
              <div className="flex items-center gap-2 mb-2 text-rose-400 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>🚨 Cuidado com a Pegadinha de Banca!</span>
              </div>
              <p className="text-xs sm:text-sm text-rose-200">
                {currentModule.content.bancaTrap}
              </p>
            </div>

            {/* Final Cheatsheet */}
            <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Ficha Rápida de Memorização (Para Ler no Dia Anterior):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {currentModule.content.summaryCheatsheet.map((item, i) => (
                  <div key={i} className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-slate-200 flex items-center gap-2 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 text-xs font-semibold transition"
              >
                <ArrowLeft className="w-4 h-4" /> Anterior
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === modules.length - 1}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 text-xs font-semibold transition"
              >
                Próximo <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {onOpenSimuladoWithTopic && (
              <button
                onClick={() => onOpenSimuladoWithTopic(currentModule.id)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition shadow-lg"
              >
                <HelpCircle className="w-4 h-4" /> Treinar Questões deste Módulo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
