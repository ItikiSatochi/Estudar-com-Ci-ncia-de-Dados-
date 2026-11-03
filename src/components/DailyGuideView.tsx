import { useState, useEffect } from 'react';
import { StudyDay, Question, TabType } from '../types';
import { useTheme } from '../context/ThemeContext';
import { 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  BookOpen, 
  HelpCircle, 
  Sparkles, 
  Lightbulb, 
  ChevronDown, 
  Award, 
  AlertTriangle,
  Ship,
  CheckSquare,
  PlayCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DailyGuideViewProps {
  studyDays: StudyDay[];
  questions: Question[];
  currentSelectedDay: number;
  onSelectDay: (day: number) => void;
  onNavigateToTab: (tab: TabType, filterTopic?: string) => void;
  onOpenCertificate: () => void;
  completedDays: Record<number, boolean>;
  onToggleDayCompleted: (day: number) => void;
}

export function DailyGuideView({
  studyDays,
  questions,
  currentSelectedDay,
  onSelectDay,
  onNavigateToTab,
  onOpenCertificate,
  completedDays,
  onToggleDayCompleted
}: DailyGuideViewProps) {
  const { isClean } = useTheme();

  // Find active day data
  const activeDay = studyDays.find((d) => d.day === currentSelectedDay) || studyDays[0];

  // Action items local checked state for the current day
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('dataconcurso_checked_action_items');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Question interaction state for current day
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);

  // Reset question state when changing days
  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
  }, [currentSelectedDay]);

  const toggleActionItem = (itemKey: string) => {
    const next = { ...checkedItems, [itemKey]: !checkedItems[itemKey] };
    setCheckedItems(next);
    try {
      localStorage.setItem('dataconcurso_checked_action_items', JSON.stringify(next));
    } catch (e) {
      console.error(e);
    }
  };

  // Find question related to current day
  const targetQuestion = questions.find((q) => {
    if (activeDay.day === 1) return q.id === 'csg-cd-7' || q.id === 'csg-cd-8';
    if (activeDay.day === 2) return q.id === 'csg-port-1';
    if (activeDay.day === 3) return q.id === 'csg-ing-1' || q.id === 'csg-ing-2';
    if (activeDay.day === 4) return q.id === 'csg-cd-5';
    if (activeDay.day === 5) return q.id === 'csg-port-2';
    if (activeDay.day === 6) return q.id === 'csg-ing-3';
    if (activeDay.day === 8) return q.id === 'csg-cd-9';
    if (activeDay.day === 9) return q.id === 'csg-cd-6';
    if (activeDay.day === 10) return q.id === 'csg-port-3';
    if (activeDay.day === 11) return q.id === 'csg-cd-1';
    if (activeDay.day === 12) return q.id === 'csg-port-4';
    if (activeDay.day === 13) return q.id === 'csg-cd-2';
    if (activeDay.day === 15) return q.id === 'csg-cd-3';
    if (activeDay.day === 16) return q.id === 'csg-cd-4';
    if (activeDay.day === 17) return q.id === 'csg-cd-8';
    if (activeDay.day === 18) return q.id === 'csg-cd-11';
    if (activeDay.day === 19) return q.id === 'csg-port-5';
    if (activeDay.day === 20) return q.id === 'csg-ing-4';
    if (activeDay.day === 22 || activeDay.day === 23) return q.id === 'csg-cd-10';
    return q.discipline === (activeDay.discipline || 'cienciadados');
  }) || questions[0];

  // Calculate overall progress percent
  const totalDays = studyDays.length;
  const completedCount = studyDays.filter((d) => completedDays[d.day]).length;
  const progressPercent = Math.round((completedCount / totalDays) * 100);
  const isCertifiedEligible = progressPercent >= 80;

  const handleMarkDayCompleted = (day: number) => {
    const isNowDone = !completedDays[day];
    onToggleDayCompleted(day);
    if (isNowDone) {
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handlePrevDay = () => {
    if (activeDay.day > 1) {
      onSelectDay(activeDay.day - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextDay = () => {
    if (activeDay.day < totalDays) {
      onSelectDay(activeDay.day + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Determine theory badge and helper
  const getDisciplineInfo = (day: StudyDay) => {
    if (day.title.includes('Português')) {
      return { label: 'Português', tab: 'portugues' as TabType, color: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border-teal-300 dark:border-teal-800' };
    }
    if (day.title.includes('Inglês')) {
      return { label: 'Inglês Instrumental', tab: 'ingles' as TabType, color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-300 dark:border-indigo-800' };
    }
    if (day.title.includes('Simulado') || day.title.includes('Revisão')) {
      return { label: 'Simulado & Prática', tab: 'simulado' as TabType, color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800' };
    }
    return { label: 'Ciência de Dados', tab: 'cienciadados' as TabType, color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800' };
  };

  const discInfo = getDisciplineInfo(activeDay);

  return (
    <div className="space-y-6">
      {/* 80% Certificate Achievement Banner */}
      <div className={`p-4 sm:p-5 rounded-3xl border transition shadow-sm ${
        isCertifiedEligible
          ? 'bg-gradient-to-r from-amber-500/20 via-emerald-500/15 to-teal-500/20 border-amber-400 text-slate-900 dark:text-white'
          : isClean
          ? 'bg-white border-slate-200 text-slate-800'
          : 'bg-slate-900 border-slate-800 text-slate-100'
      }`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 w-full md:w-auto">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
              isCertifiedEligible
                ? 'bg-amber-500 text-slate-950 font-black animate-bounce'
                : 'bg-emerald-600/20 text-emerald-500'
            }`}>
              <Award className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Meta do Edital: 80%+ de Conclusão
                </span>
                {isCertifiedEligible && (
                  <span className="px-2 py-0.2 rounded-full text-[10px] font-black bg-amber-400 text-slate-950 uppercase">
                    Liberado!
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-black tracking-tight">
                {isCertifiedEligible
                  ? '🎉 Parabéns! Você atingiu o limiar de 80% do programa!'
                  : `Progresso: ${progressPercent}% da preparação concluída (${completedCount}/${totalDays} dias)`
                }
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isCertifiedEligible
                  ? 'Seu certificado de prontidão e domínio da prova já pode ser gerado e impresso!'
                  : `Faltam ${Math.max(0, 80 - progressPercent)}% para emitir seu Certificado Oficial de Prontidão da Transpetro.`
                }
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            {isCertifiedEligible ? (
              <button
                onClick={onOpenCertificate}
                className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-400 hover:to-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition"
              >
                <Award className="w-4 h-4" /> Visualizar & Imprimir Certificado
              </button>
            ) : (
              <button
                onClick={onOpenCertificate}
                className={`w-full md:w-auto px-4 py-2 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 ${
                  isClean 
                    ? 'border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700' 
                    : 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
                title="Pré-visualizar como ficará o seu certificado ao atingir 80%"
              >
                <Award className="w-4 h-4 text-amber-500" /> Prévia do Certificado
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3.5">
          <div className={`w-full h-2 rounded-full overflow-hidden ${isClean ? 'bg-slate-100' : 'bg-slate-800'}`}>
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                isCertifiedEligible 
                  ? 'bg-gradient-to-r from-amber-400 via-emerald-500 to-teal-400' 
                  : 'bg-emerald-500'
              }`}
              style={{ width: `${Math.min(100, progressPercent)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Interactive Daily Study Session */}
      <div className={`rounded-3xl border overflow-hidden transition shadow-sm ${
        isClean ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
      }`}>
        {/* Top Header: Dropdown Day Selector & Quick Navigation */}
        <div className={`p-4 sm:p-6 border-b transition ${
          isClean ? 'bg-slate-50/80 border-slate-200' : 'bg-slate-950/60 border-slate-800'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                Guia Roteirizado Dia a Dia (30 Dias)
              </span>
              <h2 className={`text-xl sm:text-2xl font-extrabold tracking-tight ${isClean ? 'text-slate-900' : 'text-white'}`}>
                Roteiro de Estudo do Dia
              </h2>
            </div>

            {/* Dropdown Day Selector (Select what to study) */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  value={activeDay.day}
                  onChange={(e) => {
                    onSelectDay(Number(e.target.value));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`py-2 pl-3 pr-8 rounded-xl text-xs font-bold border appearance-none cursor-pointer transition shadow-xs ${
                    isClean 
                      ? 'bg-white border-emerald-400 text-slate-800 hover:border-emerald-500' 
                      : 'bg-slate-800 border-emerald-500/40 text-slate-100 hover:border-emerald-500'
                  }`}
                >
                  {studyDays.map((d) => (
                    <option key={d.day} value={d.day}>
                      {completedDays[d.day] ? '✅' : '⭕'} Dia {d.day}: {d.title.slice(0, 42)}...
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2.5 top-2.5 pointer-events-none text-emerald-500" />
              </div>

              {/* Day Previous / Next buttons */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={handlePrevDay}
                  disabled={activeDay.day === 1}
                  className={`p-2 rounded-xl border disabled:opacity-30 transition ${
                    isClean ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100' : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                  }`}
                  title="Dia Anterior"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextDay}
                  disabled={activeDay.day === totalDays}
                  className={`p-2 rounded-xl border disabled:opacity-30 transition ${
                    isClean ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100' : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                  }`}
                  title="Próximo Dia"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Current Day Pill Badges & Duration */}
          <div className="flex flex-wrap items-center gap-2.5 mt-4">
            <span className="px-3 py-1 rounded-lg text-xs font-extrabold bg-emerald-600 text-white shadow-xs">
              Dia {activeDay.day} de {totalDays}
            </span>
            <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold border ${discInfo.color}`}>
              {discInfo.label}
            </span>
            <span className={`px-2.5 py-0.5 rounded-lg text-xs font-medium border ${
              isClean ? 'bg-white border-slate-200 text-slate-600' : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}>
              Semana {activeDay.week}
            </span>
            <span className="text-xs flex items-center gap-1 text-slate-500 dark:text-slate-400 ml-auto">
              <Clock className="w-3.5 h-3.5 text-emerald-500" /> Meta do dia: <strong>{activeDay.durationMinutes} minutos</strong>
            </span>
          </div>

          {/* Day Title & Goal */}
          <div className="mt-3">
            <h3 className={`text-lg sm:text-xl font-bold ${isClean ? 'text-slate-900' : 'text-white'}`}>
              {activeDay.title}
            </h3>
            <p className={`text-xs sm:text-sm mt-1 ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>
              {activeDay.description}
            </p>
          </div>
        </div>

        {/* Day Body: Step 1 Action Items Checklist + Step 2 Theory Summary + Step 3 Practical Cesgranrio Question */}
        <div className="p-4 sm:p-6 sm:p-8 space-y-6 sm:space-y-8">
          
          {/* 1. Checklist de Metas do Dia */}
          <section className="space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
              isClean ? 'text-slate-700' : 'text-slate-300'
            }`}>
              <CheckSquare className="w-4 h-4 text-emerald-500" />
              1. Checklist de Tarefas de Hoje (Marque ao Concluir):
            </h4>
            <div className={`rounded-2xl border divide-y overflow-hidden ${
              isClean ? 'bg-slate-50/50 border-slate-200 divide-slate-100' : 'bg-slate-950/40 border-slate-800 divide-slate-800/80'
            }`}>
              {activeDay.actionItems.map((item, idx) => {
                const itemKey = `day_${activeDay.day}_item_${idx}`;
                const isChecked = !!checkedItems[itemKey];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleActionItem(itemKey)}
                    className={`p-3.5 flex items-center gap-3 cursor-pointer transition select-none ${
                      isChecked 
                        ? isClean ? 'bg-emerald-50/40 text-slate-800' : 'bg-emerald-950/20 text-slate-200' 
                        : isClean ? 'hover:bg-white text-slate-700' : 'hover:bg-slate-900 text-slate-300'
                    }`}
                  >
                    <button
                      type="button"
                      className="shrink-0 text-slate-400 hover:text-emerald-500 transition"
                    >
                      {isChecked ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                      )}
                    </button>
                    <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 2. Resumo Teórico Didático do Dia */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                isClean ? 'text-slate-700' : 'text-slate-300'
              }`}>
                <BookOpen className="w-4 h-4 text-emerald-500" />
                2. Teoria Direta ao Ponto (Foco na Cesgranrio):
              </h4>
              <button
                onClick={() => onNavigateToTab(discInfo.tab)}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                Abrir Módulo Completo da Teoria <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className={`p-4 sm:p-5 rounded-2xl border space-y-3 ${
              isClean ? 'bg-emerald-50/30 border-emerald-200 text-slate-800' : 'bg-slate-800/50 border-slate-700 text-slate-200'
            }`}>
              <div className="text-xs sm:text-sm leading-relaxed space-y-2">
                <p>
                  <strong>Tema do Dia:</strong> {activeDay.title}
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  {activeDay.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeDay.topics.map((t, i) => (
                    <span
                      key={i}
                      className={`text-[11px] px-2.5 py-0.5 rounded-md font-semibold border ${
                        isClean 
                          ? 'bg-white border-slate-300 text-slate-700' 
                          : 'bg-slate-900 border-slate-700 text-slate-300'
                      }`}
                    >
                      • {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Macete de Fixação Rápida */}
              <div className={`p-3.5 rounded-xl border flex items-start gap-2.5 ${
                isClean ? 'bg-amber-50 border-amber-300 text-amber-950' : 'bg-amber-950/30 border-amber-800 text-amber-200'
              }`}>
                <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <strong className="block text-amber-900 dark:text-amber-300 font-bold uppercase tracking-wider text-[11px]">
                    💡 Macete de Ouro Cesgranrio para Hoje:
                  </strong>
                  <p>
                    {activeDay.title.includes('Conjunções') && 'CONQUANTO = EMBORA (Concessão). PORQUANTO = PORQUE (Causa/Explicação). Nunca confunda as duas!'}
                    {activeDay.title.includes('Crase') && 'Antes de verbo e palavra masculina, crase é proibida! Antes de feminino, troque por "ao"; se der "ao", crase sem medo.'}
                    {activeDay.title.includes('Regência') && 'Preferir X A Y (nunca use "do que"). Implicar no sentido de causar não aceita preposição "em" ("implicou atrasos").'}
                    {activeDay.title.includes('Pontuação') && 'Com vírgula antes do "que" = Adjetiva Explicativa (todos). Sem vírgula = Adjetiva Restritiva (apenas parte).'}
                    {activeDay.title.includes('Inglês') && !activeDay.title.includes('Avançado') && 'ACTUALLY não é atualmente (é "na verdade"). DESPITE não usa "of". HOWEVER é oposição ("entretanto").'}
                    {activeDay.title.includes('DIKW') && 'Dado é 39 solto. Informação é 39ºC de febre. Conhecimento é saber que precisa de antitérmico. Sabedoria é a decisão.'}
                    {activeDay.title.includes('Data Warehouse') && 'Data Warehouse = Schema-on-Write (limpo antes de gravar). Data Lake = Schema-on-Read (guarda bruto).'}
                    {activeDay.title.includes('CRISP-DM') && 'A fase que mais consome tempo (70% a 80%) é a PREPARAÇÃO DOS DADOS (limpeza), e não a modelagem!'}
                    {activeDay.title.includes('Estatística') && 'P-valor < 0,05? Rejeita a hipótese nula (H0)! O modelo novo é estatisticamente superior.'}
                    {activeDay.title.includes('Fiscalização') && 'Fiscal Técnico cuida do OBJETO (código, SLA, entregas). Fiscal Administrativo cuida de GUIA (FGTS, INSS).'}
                    {activeDay.title.includes('Supervisionado') && 'Regressão Logística é CLASSIFICAÇÃO (prevê classes). Random Forest faz Bagging. SVM busca margem máxima.'}
                    {activeDay.title.includes('Overfitting') && 'Overfitting: modelo decora o treino (99%) e erra no teste (55%). Lasso (L1) zera variáveis; Ridge (L2) encolhe.'}
                    {activeDay.title.includes('Matriz') && 'Para vazamento de óleo no mar, priorize RECALL alto (não pode deixar passar vazamento real, mesmo tolerando falsos alarmes)!'}
                    {activeDay.title.includes('SQL') && 'INNER JOIN só traz quem casa. LEFT JOIN traz todos da esquerda e põe NULL à direita. HAVING filtra pós-GROUP BY!'}
                    {(!activeDay.title.includes('Conjunções') && !activeDay.title.includes('Crase') && !activeDay.title.includes('Regência') && !activeDay.title.includes('Pontuação') && !activeDay.title.includes('Inglês') && !activeDay.title.includes('DIKW') && !activeDay.title.includes('Data Warehouse') && !activeDay.title.includes('CRISP-DM') && !activeDay.title.includes('Estatística') && !activeDay.title.includes('Fiscalização') && !activeDay.title.includes('Supervisionado') && !activeDay.title.includes('Overfitting') && !activeDay.title.includes('Matriz') && !activeDay.title.includes('SQL')) && 
                      'Resolva as questões comentadas da banca para absorver o padrão de cobrança da Cesgranrio e garantir os 80%+ no simulado.'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Questão do Dia (Cesgranrio) */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                isClean ? 'text-slate-700' : 'text-slate-300'
              }`}>
                <HelpCircle className="w-4 h-4 text-emerald-500" />
                3. Questão Cesgranrio Recomendada para Hoje:
              </h4>
              <button
                onClick={() => onNavigateToTab('simulado')}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                Ver Todas as Questões no Simulado <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className={`p-4 sm:p-5 rounded-2xl border space-y-4 ${
              isClean ? 'bg-white border-slate-200' : 'bg-slate-950/70 border-slate-800'
            }`}>
              {/* Question Metadata */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white">
                  {targetQuestion.banca}
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                  isClean ? 'bg-slate-100 text-slate-700 border-slate-200' : 'bg-slate-800 text-slate-300 border-slate-700'
                }`}>
                  {targetQuestion.orgaoAno}
                </span>
                <span className="text-xs text-slate-400 font-medium ml-auto">
                  Tópico: {targetQuestion.topicName}
                </span>
              </div>

              {/* Context text if exists */}
              {targetQuestion.textContext && (
                <div className={`p-3 rounded-xl border text-xs sm:text-sm font-serif italic ${
                  isClean ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}>
                  {targetQuestion.textContext}
                </div>
              )}

              {/* Enunciado */}
              <p className={`text-xs sm:text-sm font-semibold leading-relaxed ${isClean ? 'text-slate-900' : 'text-white'}`}>
                {targetQuestion.enunciado}
              </p>

              {/* Options */}
              <div className="space-y-2">
                {targetQuestion.options?.map((opt) => {
                  const isChosen = selectedAnswer === opt.id;
                  const isCorrect = opt.id === targetQuestion.correctAnswer;
                  
                  let optStyle = isClean 
                    ? 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100' 
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-bold';
                    } else if (isChosen && !isCorrect) {
                      optStyle = 'bg-red-500/20 border-red-500 text-red-950 dark:text-red-200 font-bold';
                    }
                  } else if (isChosen) {
                    optStyle = isClean 
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold' 
                      : 'bg-emerald-950/40 border-emerald-500 text-white font-bold';
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => !isAnswerSubmitted && setSelectedAnswer(opt.id)}
                      disabled={isAnswerSubmitted}
                      className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 transition ${optStyle}`}
                    >
                      <span className={`w-5 h-5 rounded-full border flex items-center justify-center font-bold text-xs shrink-0 ${
                        isChosen ? 'border-emerald-500 text-emerald-500' : 'border-slate-400 text-slate-400'
                      }`}>
                        {opt.id}
                      </span>
                      <span className="flex-1">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Verify button */}
              {!isAnswerSubmitted ? (
                <button
                  onClick={() => selectedAnswer && setIsAnswerSubmitted(true)}
                  disabled={!selectedAnswer}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow transition"
                >
                  Conferir Resposta
                </button>
              ) : (
                <div className={`p-4 rounded-xl border space-y-2 animate-in fade-in ${
                  selectedAnswer === targetQuestion.correctAnswer
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 text-emerald-950 dark:text-emerald-200'
                    : 'bg-red-50/70 dark:bg-red-950/30 border-red-300 text-red-950 dark:text-red-200'
                }`}>
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                    {selectedAnswer === targetQuestion.correctAnswer ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Parabéns, você acertou! Gabarito Oficial: {targetQuestion.correctAnswer}
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-5 h-5 text-red-500" /> Atenção! A resposta correta é a letra {targetQuestion.correctAnswer}.
                      </>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
                    {targetQuestion.explicacao}
                  </p>
                  {targetQuestion.pegadinha && (
                    <div className="mt-2 text-xs p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200">
                      <strong>⚠️ Pegadinha da Cesgranrio:</strong> {targetQuestion.pegadinha}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* 4. Complete Day Final Button */}
          <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isClean ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <button
              onClick={() => handleMarkDayCompleted(activeDay.day)}
              className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition shadow-md ${
                completedDays[activeDay.day]
                  ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-105'
              }`}
            >
              {completedDays[activeDay.day] ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-white" /> Dia {activeDay.day} Concluído! (Clique para desmarcar)
                </>
              ) : (
                <>
                  <CheckSquare className="w-5 h-5" /> Marcar Dia {activeDay.day} como Concluído!
                </>
              )}
            </button>

            {activeDay.day < totalDays && (
              <button
                onClick={handleNextDay}
                className={`w-full sm:w-auto px-4 py-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                  isClean 
                    ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700' 
                    : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
                }`}
              >
                Avançar para o Dia {activeDay.day + 1} <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
