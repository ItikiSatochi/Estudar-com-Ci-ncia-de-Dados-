import { useState } from 'react';
import { StudyDay } from '../types';
import { useTheme } from '../context/ThemeContext';
import { 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Target, 
  Sparkles, 
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface StudyPlanViewProps {
  days: StudyDay[];
  onOpenModuleById?: (moduleId: string) => void;
}

export function StudyPlanView({ days }: StudyPlanViewProps) {
  const { isClean } = useTheme();
  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>(() => {
    try {
      const saved = localStorage.getItem('dataconcurso_study_days');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [expandedWeek, setExpandedWeek] = useState<number>(1);

  const toggleDay = (dayNum: number) => {
    const next = { ...completedDays, [dayNum]: !completedDays[dayNum] };
    setCompletedDays(next);
    try {
      localStorage.setItem('dataconcurso_study_days', JSON.stringify(next));
    } catch (e) {
      console.error(e);
    }
  };

  const totalCompleted = Object.values(completedDays).filter(Boolean).length;
  const progressPercent = Math.round((totalCompleted / days.length) * 100);

  const weeks = [
    {
      num: 1,
      name: 'Semana 1: Fundamentos, Conjunções Cesgranrio & Linking Words',
      desc: 'DIKW, Tipos de dados, Big Data 5Vs, Conquandto vs Porquanto e conectivos em inglês.',
      daysRange: [1, 7]
    },
    {
      num: 2,
      name: 'Semana 2: Armazenamento, CRISP-DM, PLN & Pontuação',
      desc: 'Data Warehouse vs Lake, CRISP-DM (80% preparação), TF-IDF, Stemming e Verbo Haver.',
      daysRange: [8, 14]
    },
    {
      num: 3,
      name: 'Semana 3: Visão Computacional, Estatística & Contratos',
      desc: 'CNNs para inspeção naval, Teste de Hipótese (P-valor < 0,05) e Fiscalização na Lei 13.303.',
      daysRange: [15, 21]
    },
    {
      num: 4,
      name: 'Semana 4: Matriz de Confusão, Simulados & Reta Final',
      desc: 'Acurácia, Precisão, Recall para vazamentos, Simulado completo e revisão de véspera.',
      daysRange: [22, 30]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header & Progress Card */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-colors ${
        isClean ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-slate-900 border-slate-800 shadow-xl text-slate-100'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`p-1.5 rounded-lg ${isClean ? 'bg-emerald-600 text-white' : 'bg-emerald-500/20 text-emerald-400'}`}>
                <Target className="w-5 h-5" />
              </span>
              <h3 className={`text-xl sm:text-2xl font-bold ${isClean ? 'text-slate-900' : 'text-white'}`}>
                Plano de Estudos de 30 Dias: Transpetro Cesgranrio
              </h3>
            </div>
            <p className={`text-sm max-w-2xl leading-relaxed ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>
              Cronograma objetivo de 40 a 50 minutos diários, balanceando <strong>Ciência de Dados (Ênfase 8)</strong>, <strong>Língua Portuguesa</strong> e <strong>Língua Inglesa</strong> para quem está prestando o primeiro concurso.
            </p>
          </div>

          <div className={`p-4 rounded-2xl min-w-[220px] text-center shrink-0 border ${
            isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/90 border-slate-700'
          }`}>
            <span className={`text-xs uppercase font-bold block mb-1 ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>
              Dias Concluídos
            </span>
            <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
              {totalCompleted} <span className="text-slate-400 text-sm font-normal">/ {days.length} dias</span>
            </div>
            <div className={`w-full h-2.5 rounded-full mt-2 overflow-hidden ${isClean ? 'bg-slate-200' : 'bg-slate-700'}`}>
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className={`text-[11px] mt-1.5 block ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>
              {progressPercent}% do cronograma cumprido
            </span>
          </div>
        </div>
      </div>

      {/* Weeks Accordion */}
      <div className="space-y-4">
        {weeks.map((wk) => {
          const isExpanded = expandedWeek === wk.num;
          const weekDays = days.filter((d) => d.week === wk.num);
          const weekCompleted = weekDays.filter((d) => completedDays[d.day]).length;
          const isWeekFinished = weekCompleted === weekDays.length;

          return (
            <div
              key={wk.num}
              className={`rounded-3xl border overflow-hidden transition ${
                isClean ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800 shadow-sm'
              }`}
            >
              {/* Week Header */}
              <button
                onClick={() => setExpandedWeek(isExpanded ? 0 : wk.num)}
                className={`w-full p-5 flex items-center justify-between text-left transition ${
                  isClean ? 'hover:bg-slate-50' : 'hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                    isWeekFinished
                      ? 'bg-emerald-500 text-white font-black'
                      : isClean
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                  }`}>
                    S{wk.num}
                  </span>
                  <div>
                    <h4 className={`font-bold text-base ${isClean ? 'text-slate-900' : 'text-white'}`}>{wk.name}</h4>
                    <p className={`text-xs ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>{wk.desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border hidden sm:inline-block ${
                    isClean ? 'bg-slate-100 text-slate-700 border-slate-200' : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {weekCompleted} de {weekDays.length} concluídos
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Days List */}
              {isExpanded && (
                <div className={`p-5 pt-0 border-t divide-y ${
                  isClean ? 'border-slate-100 divide-slate-100' : 'border-slate-800/60 divide-slate-800/60'
                }`}>
                  {weekDays.map((d) => {
                    const isDone = !!completedDays[d.day];
                    return (
                      <div
                        key={d.day}
                        className={`py-4 first:pt-4 flex items-start gap-4 transition -mx-5 px-5 ${
                          isClean ? 'hover:bg-slate-50/70' : 'hover:bg-slate-800/20'
                        }`}
                      >
                        {/* Checkbox */}
                        <button
                          onClick={() => toggleDay(d.day)}
                          className="mt-1 shrink-0 text-slate-400 hover:text-emerald-500 transition"
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                          ) : (
                            <Circle className={`w-6 h-6 ${isClean ? 'text-slate-300 hover:text-slate-400' : 'text-slate-600 hover:text-slate-400'}`} />
                          )}
                        </button>

                        {/* Day Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                              Dia {d.day}
                            </span>
                            <span className={isClean ? 'text-slate-300' : 'text-slate-600'}>•</span>
                            <span className={`text-xs flex items-center gap-1 ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>
                              <Clock className="w-3 h-3" /> {d.durationMinutes} minutos
                            </span>
                          </div>

                          <h5 className={`font-semibold text-sm ${
                            isDone 
                              ? isClean ? 'line-through text-slate-400' : 'line-through text-slate-500'
                              : isClean ? 'text-slate-900' : 'text-white'
                          }`}>
                            {d.title}
                          </h5>
                          <p className={`text-xs mt-0.5 ${isClean ? 'text-slate-600' : 'text-slate-400'}`}>
                            {d.description}
                          </p>

                          {/* Action items checklist */}
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {d.actionItems.map((act, i) => (
                              <span
                                key={i}
                                className={`text-[11px] px-2.5 py-1 rounded-md border ${
                                  isClean
                                    ? 'bg-slate-100 text-slate-700 border-slate-200'
                                    : 'bg-slate-800/80 text-slate-300 border-slate-700/60'
                                }`}
                              >
                                {act}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
