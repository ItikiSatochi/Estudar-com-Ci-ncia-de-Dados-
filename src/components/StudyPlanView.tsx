import { useState } from 'react';
import { StudyDay } from '../types';
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
      name: 'Semana 1: Fundamentos & Estruturas de Dados',
      desc: 'Pirâmide DIKW, Dados Estruturados vs Não Estruturados e os 5Vs do Big Data.',
      daysRange: [1, 7]
    },
    {
      num: 2,
      name: 'Semana 2: Engenharia, Armazenamento & CRISP-DM',
      desc: 'Data Warehouse vs Data Lake, ETL vs ELT, as 6 fases do CRISP-DM e tratamento de nulos.',
      daysRange: [8, 14]
    },
    {
      num: 3,
      name: 'Semana 3: Machine Learning & Algoritmos',
      desc: 'Supervisionado vs Não Supervisionado, Classificação, Regressão, K-Means e Overfitting.',
      daysRange: [15, 21]
    },
    {
      num: 4,
      name: 'Semana 4: Métricas, Matriz de Confusão & Reta Final',
      desc: 'Acurácia, Precisão, Recall, F1-Score, Bateria de Simulados e Revisão Turbo.',
      daysRange: [22, 30]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header & Progress Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg">
                <Target className="w-5 h-5" />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Plano de Estudos de 30 Dias para a Prova
              </h3>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Cronograma objetivo de 40 a 50 minutos diários, planejado sob medida para quem está começando do zero e tem a prova no próximo mês.
            </p>
          </div>

          <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-2xl min-w-[220px] text-center shrink-0">
            <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
              Dias Concluídos
            </span>
            <div className="text-2xl font-extrabold text-emerald-400">
              {totalCompleted} <span className="text-slate-400 text-sm font-normal">/ {days.length} dias</span>
            </div>
            <div className="w-full bg-slate-700 h-2.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[11px] text-slate-400 mt-1.5 block">
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
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm transition"
            >
              {/* Week Header */}
              <button
                onClick={() => setExpandedWeek(isExpanded ? 0 : wk.num)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-800/40 transition"
              >
                <div className="flex items-center gap-3.5">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                    isWeekFinished
                      ? 'bg-emerald-500 text-slate-950 font-black'
                      : 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                  }`}>
                    S{wk.num}
                  </span>
                  <div>
                    <h4 className="font-bold text-base text-white">{wk.name}</h4>
                    <p className="text-xs text-slate-400">{wk.desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-lg border border-slate-700 hidden sm:inline-block">
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
                <div className="p-5 pt-0 border-t border-slate-800/60 divide-y divide-slate-800/60">
                  {weekDays.map((d) => {
                    const isDone = !!completedDays[d.day];
                    return (
                      <div
                        key={d.day}
                        className="py-4 first:pt-4 flex items-start gap-4 transition hover:bg-slate-800/20 -mx-5 px-5"
                      >
                        {/* Checkbox */}
                        <button
                          onClick={() => toggleDay(d.day)}
                          className="mt-1 shrink-0 text-slate-400 hover:text-emerald-400 transition"
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                          ) : (
                            <Circle className="w-6 h-6 text-slate-600 hover:text-slate-400" />
                          )}
                        </button>

                        {/* Day Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-indigo-400">
                              Dia {d.day}
                            </span>
                            <span className="text-slate-500">•</span>
                            <span className="text-xs text-slate-400 flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {d.durationMinutes} minutos
                            </span>
                          </div>

                          <h5 className={`font-semibold text-sm ${isDone ? 'line-through text-slate-500' : 'text-white'}`}>
                            {d.title}
                          </h5>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {d.description}
                          </p>

                          {/* Action items checklist */}
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {d.actionItems.map((act, i) => (
                              <span
                                key={i}
                                className="text-[11px] bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60"
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
