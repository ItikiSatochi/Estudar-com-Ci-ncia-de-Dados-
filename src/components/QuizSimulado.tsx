import { useState, useMemo } from 'react';
import { Question } from '../types';
import confetti from 'canvas-confetti';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  RotateCcw, 
  HelpCircle, 
  Filter, 
  Award, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Trophy
} from 'lucide-react';

interface QuizSimuladoProps {
  questions: Question[];
  initialTopicFilter?: string;
  onClearTopicFilter?: () => void;
}

export function QuizSimulado({
  questions,
  initialTopicFilter,
  onClearTopicFilter
}: QuizSimuladoProps) {
  const [selectedBanca, setSelectedBanca] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>(initialTopicFilter || 'all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  // Topics list for filter
  const topicsList = useMemo(() => {
    const map = new Map<string, string>();
    questions.forEach((q) => {
      map.set(q.topicId, q.topicName);
    });
    return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
  }, [questions]);

  // Bancas list
  const bancasList = useMemo(() => {
    const set = new Set<string>();
    questions.forEach((q) => set.add(q.banca));
    return Array.from(set);
  }, [questions]);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (selectedBanca !== 'all' && q.banca !== selectedBanca) return false;
      if (selectedTopic !== 'all' && q.topicId !== selectedTopic) return false;
      if (selectedType !== 'all' && q.type !== selectedType) return false;
      return true;
    });
  }, [questions, selectedBanca, selectedTopic, selectedType]);

  const currentQuestion = filteredQuestions[currentIdx] || filteredQuestions[0];

  const handleSelectAnswer = (qId: string, answer: string) => {
    if (userAnswers[qId]) return; // already answered
    const nextAnswers = { ...userAnswers, [qId]: answer };
    setUserAnswers(nextAnswers);
    setShowExplanation({ ...showExplanation, [qId]: true });

    // If correct, maybe trigger mini confetti
    if (answer === currentQuestion?.correctAnswer) {
      confetti({
        particleCount: 25,
        spread: 40,
        origin: { y: 0.8 }
      });
    }
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowExplanation({});
    setCurrentIdx(0);
  };

  // Stats calculation
  const totalAnswered = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(([id, ans]) => {
    const q = questions.find((item) => item.id === id);
    return q && q.correctAnswer === ans;
  }).length;
  const hitRate = totalAnswered === 0 ? 0 : Math.round((correctCount / totalAnswered) * 100);

  if (filteredQuestions.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-4">
        <AlertTriangle className="w-12 h-12 text-amber-400 mx-auto" />
        <h3 className="text-xl font-bold text-white">Nenhuma questão encontrada com esses filtros</h3>
        <p className="text-sm text-slate-400">
          Tente remover o filtro de banca ou tópico para voltar a praticar.
        </p>
        <button
          onClick={() => {
            setSelectedBanca('all');
            setSelectedTopic('all');
            setSelectedType('all');
            if (onClearTopicFilter) onClearTopicFilter();
          }}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold"
        >
          Limpar Todos os Filtros
        </button>
      </div>
    );
  }

  const isAnswered = currentQuestion && !!userAnswers[currentQuestion.id];
  const currentChosen = currentQuestion ? userAnswers[currentQuestion.id] : null;
  const isCorrect = currentChosen === currentQuestion?.correctAnswer;

  return (
    <div className="space-y-6">
      {/* Top Banner & Stats */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 bg-indigo-500/20 text-indigo-400 rounded-lg">
              <Trophy className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-white">
              Simulado de Questões de Concurso com Gabarito Comentado
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            Treine com questões no estilo <strong>Cebraspe (Certo/Errado)</strong> e <strong>Múltipla Escolha (FGV, FCC, Cesgranrio)</strong> com explicação detalhada e alerta de pegadinha.
          </p>
        </div>

        {/* Stats widget */}
        <div className="flex items-center gap-3 bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700/80 shrink-0">
          <div className="text-center">
            <div className="text-[10px] uppercase font-semibold text-slate-400">Respondidas</div>
            <div className="text-base font-extrabold text-white">{totalAnswered} / {questions.length}</div>
          </div>
          <div className="h-7 w-px bg-slate-700" />
          <div className="text-center">
            <div className="text-[10px] uppercase font-semibold text-slate-400">Taxa de Acerto</div>
            <div className={`text-base font-extrabold ${hitRate >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {hitRate}%
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-slate-400 font-semibold flex items-center gap-1 mr-1">
          <Filter className="w-3.5 h-3.5" /> Filtrar:
        </span>

        {/* Topic filter */}
        <select
          value={selectedTopic}
          onChange={(e) => {
            setSelectedTopic(e.target.value);
            setCurrentIdx(0);
          }}
          className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="all">Todos os Assuntos ({questions.length})</option>
          {topicsList.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>

        {/* Banca filter */}
        <select
          value={selectedBanca}
          onChange={(e) => {
            setSelectedBanca(e.target.value);
            setCurrentIdx(0);
          }}
          className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="all">Todas as Bancas</option>
          {bancasList.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        {/* Question Type Filter */}
        <select
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value);
            setCurrentIdx(0);
          }}
          className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="all">Todos os Tipos</option>
          <option value="certo_errado">Certo / Errado (Cebraspe)</option>
          <option value="multipla_escolha">Múltipla Escolha (FGV / FCC / Cesgranrio)</option>
        </select>

        {(selectedBanca !== 'all' || selectedTopic !== 'all' || selectedType !== 'all') && (
          <button
            onClick={() => {
              setSelectedBanca('all');
              setSelectedTopic('all');
              setSelectedType('all');
              setCurrentIdx(0);
              if (onClearTopicFilter) onClearTopicFilter();
            }}
            className="text-[11px] text-indigo-400 hover:text-indigo-300 ml-auto underline"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {/* Main Question Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        {/* Question Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold rounded-lg border border-indigo-500/30">
              {currentQuestion.banca}
            </span>
            <span className="text-slate-400 font-medium">
              {currentQuestion.orgaoAno}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700 font-mono text-[11px]">
              Questão {currentIdx + 1} de {filteredQuestions.length}
            </span>
            <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700 text-[11px]">
              {currentQuestion.topicName}
            </span>
          </div>
        </div>

        {/* Enunciado */}
        <div className="py-6">
          <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed whitespace-pre-line">
            {currentQuestion.enunciado}
          </p>
        </div>

        {/* Options / Answer Buttons */}
        <div className="space-y-3">
          {currentQuestion.type === 'certo_errado' ? (
            <div className="grid grid-cols-2 gap-4">
              {/* Option Certo */}
              {['C', 'E'].map((opt) => {
                const label = opt === 'C' ? 'CERTO' : 'ERRADO';
                const chosenThis = currentChosen === opt;
                const isThisTheCorrectAnswer = currentQuestion.correctAnswer === opt;

                let btnStyles = 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700';

                if (isAnswered) {
                  if (isThisTheCorrectAnswer) {
                    btnStyles = 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold ring-2 ring-emerald-500/50';
                  } else if (chosenThis) {
                    btnStyles = 'bg-rose-950/60 border-rose-500 text-rose-300 font-bold';
                  } else {
                    btnStyles = 'opacity-40 bg-slate-800/40 border-slate-800 text-slate-500';
                  }
                }

                return (
                  <button
                    key={opt}
                    disabled={isAnswered}
                    onClick={() => handleSelectAnswer(currentQuestion.id, opt)}
                    className={`p-4 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-center gap-1.5 ${btnStyles}`}
                  >
                    <span className="text-xl font-black">{opt}</span>
                    <span className="text-xs font-semibold tracking-wider">{label}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-2.5">
              {currentQuestion.options?.map((opt) => {
                const chosenThis = currentChosen === opt.id;
                const isThisTheCorrectAnswer = currentQuestion.correctAnswer === opt.id;

                let optStyles = 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-200';

                if (isAnswered) {
                  if (isThisTheCorrectAnswer) {
                    optStyles = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/50 font-medium';
                  } else if (chosenThis) {
                    optStyles = 'bg-rose-950/60 border-rose-500 text-rose-200';
                  } else {
                    optStyles = 'opacity-40 bg-slate-800/40 border-slate-800 text-slate-500';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    disabled={isAnswered}
                    onClick={() => handleSelectAnswer(currentQuestion.id, opt.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3 ${optStyles}`}
                  >
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                      isAnswered && isThisTheCorrectAnswer
                        ? 'bg-emerald-500 text-slate-950'
                        : isAnswered && chosenThis
                        ? 'bg-rose-500 text-white'
                        : 'bg-slate-700 text-slate-300'
                    }`}>
                      {opt.id}
                    </span>
                    <span className="text-sm leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Explanation & Trap Box (Appears after answer) */}
        {isAnswered && (
          <div className="mt-6 pt-6 border-t border-slate-800 space-y-4">
            <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
              isCorrect
                ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                : 'bg-rose-950/30 border-rose-500/40 text-rose-200'
            }`}>
              {isCorrect ? (
                <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
              )}
              <div>
                <h5 className="font-bold text-base">
                  {isCorrect ? 'Parabéns! Resposta Correta!' : 'Atenção: Resposta Incorreta!'}
                </h5>
                <p className="text-xs text-slate-300 mt-1">
                  Gabarito Oficial da Banca: <strong className="text-white">({currentQuestion.correctAnswer})</strong>
                </p>
              </div>
            </div>

            {/* Detailed Explanation */}
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/60 text-sm text-slate-200">
              <strong className="text-indigo-300 block mb-1">Comentário do Professor:</strong>
              <p className="whitespace-pre-line text-xs sm:text-sm">{currentQuestion.explicacao}</p>
            </div>

            {/* Trap Warning */}
            <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 text-xs sm:text-sm text-amber-200 flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 block mb-0.5">Pegadinha Frequente desta Banca:</strong>
                <p className="text-slate-300">{currentQuestion.pegadinha}</p>
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between gap-2">
          <button
            onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
            disabled={currentIdx === 0}
            className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 text-xs font-semibold rounded-xl border border-slate-700 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Anterior
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetQuiz}
              className="text-xs text-slate-400 hover:text-slate-200 px-3 py-1.5 rounded-lg transition flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reiniciar Respostas
            </button>
          </div>

          <button
            onClick={() => setCurrentIdx((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
            disabled={currentIdx === filteredQuestions.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 text-xs font-bold rounded-xl transition shadow"
          >
            Próxima <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
