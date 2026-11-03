import { useState, useEffect } from 'react';
import { ModuleSection, DisciplineType } from '../types';
import { useTheme } from '../context/ThemeContext';
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
  Calculator,
  Ship,
  BookText,
  Languages,
  PanelLeftClose,
  PanelLeftOpen,
  ChevronDown
} from 'lucide-react';

interface ModuleViewerProps {
  modules: ModuleSection[];
  disciplineFilter?: DisciplineType;
  onOpenSimuladoWithTopic?: (topicId: string) => void;
  onOpenMatrixSimulator?: () => void;
}

export function ModuleViewer({
  modules,
  disciplineFilter,
  onOpenSimuladoWithTopic,
  onOpenMatrixSimulator
}: ModuleViewerProps) {
  const { isClean } = useTheme();
  const filteredModules = disciplineFilter 
    ? modules.filter(m => m.discipline === disciplineFilter)
    : modules;

  const [selectedModuleId, setSelectedModuleId] = useState<string>(filteredModules[0]?.id || 'dikw');

  // When discipline filter changes, ensure active module belongs to filtered list
  useEffect(() => {
    if (filteredModules.length > 0 && !filteredModules.some(m => m.id === selectedModuleId)) {
      setSelectedModuleId(filteredModules[0].id);
    }
  }, [disciplineFilter, filteredModules, selectedModuleId]);

  const [completedModules, setCompletedModules] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('dataconcurso_completed_modules');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const currentModule = filteredModules.find((m) => m.id === selectedModuleId) || filteredModules[0] || modules[0];
  const currentIndex = filteredModules.findIndex((m) => m.id === currentModule?.id);

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
      setSelectedModuleId(filteredModules[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredModules.length - 1) {
      setSelectedModuleId(filteredModules[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const completedCount = filteredModules.filter(m => completedModules[m.id]).length;
  const progressPercent = Math.round((completedCount / filteredModules.length) * 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
      {/* Left Navigation: Modules Index */}
      {isSidebarOpen && (
        <div className="lg:col-span-4 xl:col-span-3 space-y-3.5">
          {/* Progress Card */}
          <div className={`p-3.5 rounded-xl border transition-colors ${
            isClean ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900 border-slate-800 shadow-xs'
          }`}>
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <span className={isClean ? 'text-slate-600' : 'text-slate-400'}>Progresso na Matéria</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                {completedCount} de {filteredModules.length} ({progressPercent}%)
              </span>
            </div>
            <div className={`w-full h-1.5 rounded-full overflow-hidden ${isClean ? 'bg-slate-100' : 'bg-slate-800'}`}>
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

        {/* Modules List */}
        <div className={`p-3 space-y-1.5 rounded-2xl border max-h-[750px] overflow-y-auto transition-colors ${
          isClean ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800 shadow-sm'
        }`}>
          <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 block ${
            isClean ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Tópicos da Disciplina:
          </span>
          {filteredModules.map((mod, index) => {
            const isSelected = mod.id === currentModule.id;
            const isCompleted = !!completedModules[mod.id];
            return (
              <div
                key={mod.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setSelectedModuleId(mod.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedModuleId(mod.id);
                  }
                }}
                className={`w-full text-left p-3 rounded-xl transition-all duration-150 flex items-start gap-2.5 border cursor-pointer select-none ${
                  isSelected
                    ? isClean
                      ? 'bg-emerald-50/80 border-emerald-400 text-emerald-950 font-bold shadow-xs'
                      : 'bg-emerald-600/15 border-emerald-500/50 text-white shadow-sm'
                    : isClean
                    ? 'bg-transparent border-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                    : 'bg-transparent border-transparent text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <button
                  type="button"
                  aria-label={isCompleted ? "Marcar como não lido" : "Marcar como lido"}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleModuleCompleted(mod.id);
                  }}
                  className="mt-0.5 text-slate-400 hover:text-emerald-500 shrink-0 p-0.5"
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                      isClean ? 'border-slate-300 text-slate-500' : 'border-slate-600 text-slate-400'
                    }`}>
                      {index + 1}
                    </div>
                  )}
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className={`text-[10px] uppercase font-bold px-1.5 py-0.2 rounded border ${
                      isClean
                        ? 'bg-slate-100 text-slate-600 border-slate-200'
                        : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}>
                      {mod.badge}
                    </span>
                    <span className={`text-[10px] flex items-center gap-0.5 ${
                      isClean ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      <Clock className="w-2.5 h-2.5" /> {mod.readTime}
                    </span>
                  </div>
                  <p className={`text-xs leading-snug line-clamp-2 ${
                    isSelected 
                      ? isClean ? 'text-emerald-900 font-bold' : 'text-emerald-300 font-bold'
                      : isClean ? 'text-slate-800 font-medium' : 'text-slate-200'
                  }`}>
                    {mod.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      )}

      {/* Right Column: Module Reader */}
      <div className={`${isSidebarOpen ? 'lg:col-span-8 xl:col-span-9' : 'lg:col-span-12 max-w-5xl mx-auto w-full'} space-y-5`}>
        <div className={`p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border transition-colors ${
          isClean 
            ? 'bg-white border-slate-200 text-slate-800 shadow-sm' 
            : 'bg-slate-900 border-slate-800 text-slate-100 shadow-xl'
        }`}>
          {/* Module Header */}
          <div className={`pb-5 border-b ${isClean ? 'border-slate-200' : 'border-slate-800'}`}>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                {/* Sidebar Toggle Button */}
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition ${
                    isClean
                      ? 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                  }`}
                  title={isSidebarOpen ? "Ocultar menu lateral para leitura ampla" : "Mostrar lista de tópicos"}
                >
                  {isSidebarOpen ? <PanelLeftClose className="w-3.5 h-3.5 text-emerald-500" /> : <PanelLeftOpen className="w-3.5 h-3.5 text-emerald-500" />}
                  <span>{isSidebarOpen ? 'Ocultar Menu Lateral' : 'Mostrar Tópicos'}</span>
                </button>

                {/* Quick Topic Selector Dropdown */}
                <div className="relative inline-block">
                  <select
                    value={currentModule.id}
                    onChange={(e) => {
                      setSelectedModuleId(e.target.value);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`text-xs font-semibold py-1.5 pl-2.5 pr-6 rounded-lg border appearance-none cursor-pointer transition max-w-[190px] sm:max-w-xs truncate ${
                      isClean ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-800 border-slate-700 text-slate-200'
                    }`}
                  >
                    {filteredModules.map((m, i) => (
                      <option key={m.id} value={m.id}>
                        {i + 1}. {m.title}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 absolute right-2 top-2 pointer-events-none text-slate-400" />
                </div>

                <span className={`px-2 py-0.5 text-xs font-bold rounded-md border hidden sm:inline-block ${
                  isClean
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                }`}>
                  {currentModule.badge}
                </span>

                <span className={`text-xs flex items-center gap-1 hidden md:flex ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>
                  <Clock className="w-3 h-3" /> {currentModule.readTime}
                </span>
              </div>

              <button
                onClick={() => toggleModuleCompleted(currentModule.id)}
                className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition ${
                  completedModules[currentModule.id]
                    ? isClean
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40'
                    : isClean
                    ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {completedModules[currentModule.id] ? (
                  <>
                    <CheckSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Concluído
                  </>
                ) : (
                  <>
                    <Square className="w-3.5 h-3.5" /> Marcar Lido
                  </>
                )}
              </button>
            </div>

            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              isClean ? 'text-slate-900' : 'text-white'
            }`}>
              {currentModule.title}
            </h2>
            <p className={`text-sm sm:text-base mt-2 ${
              isClean ? 'text-slate-600' : 'text-slate-300'
            }`}>
              {currentModule.shortDescription}
            </p>
          </div>

          {/* Key Points (Pontos Vitais para Decorar) */}
          <div className={`my-6 rounded-2xl p-4 sm:p-5 border ${
            isClean
              ? 'bg-amber-50/70 border-amber-200 text-slate-800'
              : 'bg-slate-800/60 border-slate-700/70 text-slate-200'
          }`}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5 mb-3">
              <Lightbulb className="w-4 h-4" /> Pontos Vitais para Decorar (Resumo Executivo):
            </h4>
            <ul className="space-y-2">
              {currentModule.keyPoints.map((pt, i) => (
                <li key={i} className={`text-xs sm:text-sm flex items-start gap-2.5 ${
                  isClean ? 'text-slate-700' : 'text-slate-200'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Embed if Applicable */}
          {currentModule.id === 'dikw' && <DikwPyramidInteractive />}
          {currentModule.id === 'crisp-dm' && <CrispDmInteractive />}
          {currentModule.id === 'metricas-matriz' && onOpenMatrixSimulator && (
            <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 my-6 ${
              isClean 
                ? 'bg-emerald-50 border-emerald-200' 
                : 'bg-gradient-to-r from-emerald-950/40 to-indigo-950/40 border-emerald-800/40'
            }`}>
              <div>
                <h5 className={`font-bold text-sm flex items-center gap-1.5 ${isClean ? 'text-slate-900' : 'text-white'}`}>
                  <Calculator className="w-4 h-4 text-emerald-500" /> Experimente o Simulador Interativo da Matriz!
                </h5>
                <p className={`text-xs mt-0.5 ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>
                  Teste os cálculos de Acurácia, Precisão, Recall e F1 com números e gráficos em tempo real.
                </p>
              </div>
              <button
                onClick={onOpenMatrixSimulator}
                className="shrink-0 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition shadow"
              >
                Abrir Calculadora
              </button>
            </div>
          )}

          {/* Content Sections */}
          <div className="space-y-6 mt-6 text-sm leading-relaxed">
            <p className={`text-base font-medium ${isClean ? 'text-slate-700' : 'text-slate-300'}`}>
              {currentModule.content.intro}
            </p>

            {currentModule.content.subsections.map((sub, idx) => (
              <div key={idx} className={`space-y-3 pt-4 border-t ${isClean ? 'border-slate-200' : 'border-slate-800'}`}>
                <h3 className={`text-lg font-bold ${isClean ? 'text-slate-900' : 'text-white'}`}>
                  {sub.subtitle}
                </h3>
                <p className={`whitespace-pre-line leading-relaxed ${isClean ? 'text-slate-700' : 'text-slate-300'}`}>
                  {sub.text}
                </p>

                {/* Example Callout */}
                {sub.example && (
                  <div className={`border-l-4 p-3.5 rounded-r-xl text-xs sm:text-sm whitespace-pre-line ${
                    isClean
                      ? 'bg-slate-50 border-emerald-500 text-slate-800'
                      : 'bg-slate-800/50 border-emerald-500 text-slate-200'
                  }`}>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                      💡 Exemplo Prático da Vida Real / Cesgranrio:
                    </span>
                    {sub.example}
                  </div>
                )}

                {/* Comparison Table */}
                {sub.comparisonTable && (
                  <div className={`overflow-x-auto my-4 rounded-xl border ${
                    isClean ? 'border-slate-200' : 'border-slate-700'
                  }`}>
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className={`uppercase font-semibold ${
                        isClean ? 'bg-slate-100 text-slate-800' : 'bg-slate-800 text-slate-200'
                      }`}>
                        <tr>
                          {sub.comparisonTable.headers.map((h, i) => (
                            <th key={i} className={`px-3 py-2.5 border-b ${isClean ? 'border-slate-200' : 'border-slate-700'}`}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${
                        isClean ? 'divide-slate-200 bg-white' : 'divide-slate-800 bg-slate-900/60'
                      }`}>
                        {sub.comparisonTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={isClean ? 'hover:bg-slate-50' : 'hover:bg-slate-800/30'}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`px-3 py-2 font-medium ${
                                isClean ? 'text-slate-700' : 'text-slate-300'
                              }`}>
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
                  <div className={`border rounded-xl p-3 text-xs sm:text-sm flex items-start gap-2 ${
                    isClean
                      ? 'bg-indigo-50/70 border-indigo-200 text-indigo-950'
                      : 'bg-indigo-950/30 border-indigo-800/40 text-indigo-200'
                  }`}>
                    <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <strong className={isClean ? 'text-indigo-900 font-bold' : 'text-amber-300'}>
                        Dica Quente de Concurso: 
                      </strong>{' '}
                      {sub.examTip}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Banca Trap Box */}
            <div className={`border-2 rounded-2xl p-4 sm:p-5 my-6 ${
              isClean
                ? 'bg-rose-50/80 border-rose-300 text-rose-950'
                : 'bg-rose-950/20 border-rose-500/40 text-rose-200'
            }`}>
              <div className="flex items-center gap-2 mb-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>🚨 Cuidado com a Pegadinha de Banca (Cesgranrio)!</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                {currentModule.content.bancaTrap}
              </p>
            </div>

            {/* Final Cheatsheet */}
            <div className={`rounded-2xl p-5 border ${
              isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/80 border-slate-700'
            }`}>
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                isClean ? 'text-slate-700' : 'text-slate-300'
              }`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Ficha Rápida de Memorização (Para Ler na Véspera):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {currentModule.content.summaryCheatsheet.map((item, i) => (
                  <div key={i} className={`p-2.5 rounded-lg border flex items-center gap-2 font-mono ${
                    isClean 
                      ? 'bg-white border-slate-200 text-slate-800' 
                      : 'bg-slate-900 border-slate-800 text-slate-200'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isClean ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border disabled:opacity-40 text-xs font-semibold transition ${
                  isClean
                    ? 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700'
                    : 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                <ArrowLeft className="w-4 h-4" /> Anterior
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === filteredModules.length - 1}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border disabled:opacity-40 text-xs font-semibold transition ${
                  isClean
                    ? 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700'
                    : 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                Próximo <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {onOpenSimuladoWithTopic && (
              <button
                onClick={() => onOpenSimuladoWithTopic(currentModule.id)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition shadow"
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
