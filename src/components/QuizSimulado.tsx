import { useState, useMemo } from 'react';
import { Question } from '../types';
import { useTheme } from '../context/ThemeContext';
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
  const { isClean } = useTheme();
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [selectedBanca, setSelectedBanca] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>(initialTopicFilter || 'all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  // Topics list for filter
  const topicsList = useMemo(() => {
    const map = new Map<string, { id: string; name: string; discipline: string }>();
    questions.forEach((q) => {
      map.set(q.topicId, { id: q.topicId, name: q.topicName, discipline: q.discipline });
    });
    return Array.from(map.values());
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
      if (selectedDiscipline !== 'all' && q.discipline !== selectedDiscipline) return false;
      if (selectedBanca !== 'all' && q.banca !== selectedBanca) return false;
      if (selectedTopic !== 'all' && q.topicId !== selectedTopic) return false;
      if (selectedType !== 'all' && q.type !== selectedType) return false;
      return true;
    });
  }, [questions, selectedDiscipline, selectedBanca, selectedTopic, selectedType]);

  const currentQuestion = filteredQuestions[currentIdx] || filteredQuestions[0];

  const handleSelectAnswer = (qId: string, answer: string) => {
    if (userAnswers[qId]) return; // already answered
    const nextAnswers = { ...userAnswers, [qId]: answer };
    setUserAnswers(nextAnswers);
    setShowExplanation({ ...showExplanation, [qId]: true });

    // If correct, trigger mini confetti
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
      <div className={`p-8 rounded-3xl border text-center space-y-4 ${
        isClean ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800'
      }`}>
        <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto" />
        <h3 className={`text-xl font-bold ${isClean ? 'text-slate-900' : 'text-white'}`}>
          Nenhuma questão encontrada com esses filtros
        </h3>
        <p className={`text-sm ${isClean ? 'text-slate-600' : 'text-slate-400'}`}>
          Tente limpar os filtros para voltar a praticar.
        </p>
        <button
          onClick={() => {
            setSelectedDiscipline('all');
            setSelectedBanca('all');
            setSelectedTopic('all');
            setSelectedType('all');
            if (onClearTopicFilter) onClearTopicFilter();
          }}
          className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold"
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
      <div className={`p-4 sm:p-6 rounded-3xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors ${
        isClean ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-slate-900 border-slate-800 shadow-md text-slate-100'
      }`}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`p-1.5 rounded-lg ${isClean ? 'bg-emerald-600 text-white' : 'bg-emerald-500/20 text-emerald-400'}`}>
              <Trophy className="w-5 h-5" />
            </span>
            <h3 className={`text-xl font-bold ${isClean ? 'text-slate-900' : 'text-white'}`}>
              Simulado de Questões Cesgranrio (Gabarito Comentado)
            </h3>
          </div>
          <p className={`text-xs sm:text-sm ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>
            Treine com o padrão de múltipla escolha (A a E) e textos de apoio com explicação didática e alerta de pegadinhas.
          </p>
        </div>

        {/* Stats widget */}
        <div className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl border shrink-0 ${
          isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/80 border-slate-700/80'
        }`}>
          <div className="text-center">
            <div className={`text-[10px] uppercase font-semibold ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>Respondidas</div>
            <div className={`text-base font-extrabold ${isClean ? 'text-slate-900' : 'text-white'}`}>{totalAnswered} / {questions.length}</div>
          </div>
          <div className={`h-7 w-px ${isClean ? 'bg-slate-200' : 'bg-slate-700'}`} />
          <div className="text-center">
            <div className={`text-[10px] uppercase font-semibold ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>Taxa de Acerto</div>
            <div className={`text-base font-extrabold ${hitRate >= 70 ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-500'}`}>
              {hitRate}%
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className={`p-3 rounded-2xl border flex flex-wrap items-center gap-2 text-xs ${
        isClean ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/80 border-slate-800'
      }`}>
        <span className={`font-semibold flex items-center gap-1 mr-1 ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>
          <Filter className="w-3.5 h-3.5" /> Filtrar:
        </span>

        {/* Discipline filter */}
        <select
          value={selectedDiscipline}
          onChange={(e) => {
            setSelectedDiscipline(e.target.value);
            setSelectedTopic('all');
            setCurrentIdx(0);
          }}
          className={`rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-semibold border ${
            isClean ? 'bg-slate-50 border-slate-300 text-slate-800' : 'bg-slate-800 border-slate-700 text-slate-200'
          }`}
        >
          <option value="all">Todas as Disciplinas</option>
          <option value="cienciadados">🧪 Ciência de Dados (Ênfase 8)</option>
          <option value="portugues">🇧🇷 Português (Cesgranrio)</option>
          <option value="ingles">🇬🇧 Inglês (Cesgranrio)</option>
        </select>

        {/* Topic filter */}
        <select
          value={selectedTopic}
          onChange={(e) => {
            setSelectedTopic(e.target.value);
            setCurrentIdx(0);
          }}
          className={`rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 border ${
            isClean ? 'bg-slate-50 border-slate-300 text-slate-800' : 'bg-slate-800 border-slate-700 text-slate-200'
          }`}
        >
          <option value="all">Todos os Assuntos</option>
          {topicsList
            .filter((t) => selectedDiscipline === 'all' || t.discipline === selectedDiscipline)
            .map((t) => (
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
          className={`rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 border ${
            isClean ? 'bg-slate-50 border-slate-300 text-slate-800' : 'bg-slate-800 border-slate-700 text-slate-200'
          }`}
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
          className={`rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 border ${
            isClean ? 'bg-slate-50 border-slate-300 text-slate-800' : 'bg-slate-800 border-slate-700 text-slate-200'
          }`}
        >
          <option value="all">Todos os Tipos</option>
          <option value="multipla_escolha">Múltipla Escolha (Padrão Cesgranrio A-E)</option>
          <option value="certo_errado">Certo / Errado</option>
        </select>

        {(selectedDiscipline !== 'all' || selectedBanca !== 'all' || selectedTopic !== 'all' || selectedType !== 'all') && (
          <button
            onClick={() => {
              setSelectedDiscipline('all');
              setSelectedBanca('all');
              setSelectedTopic('all');
              setSelectedType('all');
              setCurrentIdx(0);
              if (onClearTopicFilter) onClearTopicFilter();
            }}
            className="text-[11px] text-emerald-600 dark:text-emerald-400 hover:underline ml-auto"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {/* Main Question Card */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-colors ${
        isClean ? 'bg-white border-slate-200 text-slate-800 shadow-sm' : 'bg-slate-900 border-slate-800 text-slate-100 shadow-xl'
      }`}>
        {/* Question Header */}
        <div className={`flex flex-wrap items-center justify-between gap-2 pb-4 border-b text-xs ${
          isClean ? 'border-slate-200' : 'border-slate-800'
        }`}>
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 font-bold rounded-lg border ${
              isClean ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            }`}>
              {currentQuestion.banca}
            </span>
            <span className={`font-medium ${isClean ? 'text-slate-500' : 'text-slate-400'}`}>
              {currentQuestion.orgaoAno}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded border font-mono text-[11px] ${
              isClean ? 'bg-slate-100 text-slate-600 border-slate-200' : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}>
              Questão {currentIdx + 1} de {filteredQuestions.length}
            </span>
            <span className={`px-2 py-0.5 rounded border text-[11px] ${
              isClean ? 'bg-slate-100 text-slate-600 border-slate-200' : 'bg-slate-800 text-slate-300 border-slate-700'
            }`}>
              {currentQuestion.topicName}
            </span>
          </div>
        </div>

        {/* Text Context (se houver texto de apoio) */}
        {currentQuestion.textContext && (
          <div className={`mt-5 p-4 sm:p-5 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
            isClean ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-950/70 border-indigo-900/40 text-slate-200'
          }`}>
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-1.5 flex items-center gap-1.5">
              <span>📄</span> Texto de Apoio da Questão (Cesgranrio):
            </span>
            <p className="italic whitespace-pre-line border-l-2 border-emerald-500 pl-3">
              {currentQuestion.textContext}
            </p>
          </div>
        )}

        {/* Enunciado */}
        <div className="py-5">
          <p className={`text-base sm:text-lg font-medium leading-relaxed whitespace-pre-line ${
            isClean ? 'text-slate-900' : 'text-slate-100'
          }`}>
            {currentQuestion.enunciado}
          </p>
        </div>

        {/* Options / Answer Buttons */}
        <div className="space-y-3">
          {currentQuestion.type === 'certo_errado' ? (
            <div className="grid grid-cols-2 gap-4">
              {['C', 'E'].map((opt) => {
                const label = opt === 'C' ? 'CERTO' : 'ERRADO';
                const chosenThis = currentChosen === opt;
                const isThisTheCorrectAnswer = currentQuestion.correctAnswer === opt;

                let btnStyles = isClean
                  ? 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-300'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700';

                if (isAnswered) {
                  if (isThisTheCorrectAnswer) {
                    btnStyles = isClean
                      ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/50'
                      : 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold ring-2 ring-emerald-500/50';
                  } else if (chosenThis) {
                    btnStyles = isClean
                      ? 'bg-rose-100 border-rose-500 text-rose-950 font-bold'
                      : 'bg-rose-950/60 border-rose-500 text-rose-300 font-bold';
                  } else {
                    btnStyles = 'opacity-40 border-transparent';
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

                let optStyles = isClean
                  ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                  : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-200';

                if (isAnswered) {
                  if (isThisTheCorrectAnswer) {
                    optStyles = isClean
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/50 font-medium'
                      : 'bg-emerald-950/60 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/50 font-medium';
                  } else if (chosenThis) {
                    optStyles = isClean
                      ? 'bg-rose-50 border-rose-500 text-rose-950'
                      : 'bg-rose-950/60 border-rose-500 text-rose-200';
                  } else {
                    optStyles = 'opacity-40';
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
                        ? 'bg-emerald-500 text-white'
                        : isAnswered && chosenThis
                        ? 'bg-rose-500 text-white'
                        : isClean
                        ? 'bg-slate-200 text-slate-700'
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
          <div className={`mt-6 pt-6 border-t space-y-4 ${isClean ? 'border-slate-200' : 'border-slate-800'}`}>
            <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
              isCorrect
                ? isClean
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                : isClean
                ? 'bg-rose-50 border-rose-300 text-rose-900'
                : 'bg-rose-950/30 border-rose-500/40 text-rose-200'
            }`}>
              {isCorrect ? (
                <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              )}
              <div>
                <h5 className="font-bold text-base">
                  {isCorrect ? 'Parabéns! Resposta Correta!' : 'Atenção: Resposta Incorreta!'}
                </h5>
                <p className={`text-xs mt-1 ${isClean ? 'text-slate-700' : 'text-slate-300'}`}>
                  Gabarito Oficial da Cesgranrio: <strong className={isClean ? 'text-slate-900' : 'text-white'}>({currentQuestion.correctAnswer})</strong>
                </p>
              </div>
            </div>

            {/* Detailed Explanation */}
            <div className={`rounded-xl p-4 border text-sm ${
              isClean ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-800/60 border-slate-700/60 text-slate-200'
            }`}>
              <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">Comentário do Professor:</strong>
              <p className="whitespace-pre-line text-xs sm:text-sm leading-relaxed">{currentQuestion.explicacao}</p>
            </div>

            {/* Trap Warning */}
            <div className={`border rounded-xl p-4 text-xs sm:text-sm flex items-start gap-2.5 ${
              isClean ? 'bg-amber-50 border-amber-300 text-amber-950' : 'bg-amber-950/20 border-amber-500/30 text-amber-200'
            }`}>
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className={isClean ? 'text-amber-900 font-bold block mb-0.5' : 'text-amber-300 block mb-0.5'}>
                  Pegadinha Frequente da Cesgranrio:
                </strong>
                <p>{currentQuestion.pegadinha}</p>
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className={`mt-8 pt-6 border-t flex items-center justify-between gap-2 ${
          isClean ? 'border-slate-200' : 'border-slate-800'
        }`}>
          <button
            onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
            disabled={currentIdx === 0}
            className={`flex items-center gap-1.5 px-4 py-2 disabled:opacity-40 text-xs font-semibold rounded-xl border transition ${
              isClean ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
            }`}
          >
            <ArrowLeft className="w-4 h-4" /> Anterior
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetQuiz}
              className={`text-xs px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${
                isClean ? 'text-slate-500 hover:text-slate-800' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reiniciar Respostas
            </button>
          </div>

          <button
            onClick={() => setCurrentIdx((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
            disabled={currentIdx === filteredQuestions.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-40 text-xs font-bold rounded-xl transition shadow"
          >
            Próxima <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
