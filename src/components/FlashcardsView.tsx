import { useState, useMemo } from 'react';
import { Flashcard } from '../types';
import { 
  Sparkles, 
  RotateCw, 
  Check, 
  X, 
  Shuffle, 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

interface FlashcardsViewProps {
  cards: Flashcard[];
}

export function FlashcardsView({ cards }: FlashcardsViewProps) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('dataconcurso_mastered_cards');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const topics = useMemo(() => {
    const set = new Set<string>();
    cards.forEach((c) => set.add(c.topic));
    return Array.from(set);
  }, [cards]);

  const filteredCards = useMemo(() => {
    if (selectedTopic === 'all') return cards;
    if (selectedTopic === 'pendentes') return cards.filter((c) => !masteredCards[c.id]);
    return cards.filter((c) => c.topic === selectedTopic);
  }, [cards, selectedTopic, masteredCards]);

  const currentCard = filteredCards[currentIdx] || filteredCards[0];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIdx((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIdx((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const toggleMastered = (id: string) => {
    const next = { ...masteredCards, [id]: !masteredCards[id] };
    setMasteredCards(next);
    try {
      localStorage.setItem('dataconcurso_mastered_cards', JSON.stringify(next));
    } catch (e) {
      console.error(e);
    }
  };

  const masteredTotal = Object.values(masteredCards).filter(Boolean).length;
  const progressPercent = Math.round((masteredTotal / cards.length) * 100);

  if (!currentCard) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
        <h3 className="text-xl font-bold text-white">Todos os cartões deste filtro foram dominados!</h3>
        <p className="text-sm text-slate-400">Excelente trabalho na memorização.</p>
        <button
          onClick={() => setSelectedTopic('all')}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold"
        >
          Ver Todos os Flashcards
        </button>
      </div>
    );
  }

  const isCurrentMastered = !!masteredCards[currentCard.id];

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header & Controls */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 bg-purple-500/20 text-purple-400 rounded-lg">
              <Sparkles className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-white">Flashcards de Memorização Rápida</h3>
          </div>
          <p className="text-xs text-slate-400">
            Fixe conceitos e macetes mnemônicos essenciais para a véspera da prova.
          </p>
        </div>

        {/* Progress gauge */}
        <div className="bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700/80 text-right shrink-0">
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Dominados</span>
          <span className="text-sm font-extrabold text-emerald-400">
            {masteredTotal} / {cards.length} ({progressPercent}%)
          </span>
        </div>
      </div>

      {/* Filter and Nav */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-semibold">Tópico:</span>
          <select
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(e.target.value);
              setCurrentIdx(0);
              setIsFlipped(false);
            }}
            className="bg-slate-800 border border-slate-700 text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none"
          >
            <option value="all">Todos os Tópicos ({cards.length})</option>
            <option value="pendentes">Apenas Não Dominados</option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="text-slate-400 font-mono">
          Cartão <strong>{currentIdx + 1}</strong> de <strong>{filteredCards.length}</strong>
        </div>
      </div>

      {/* 3D Flip Card */}
      <div
        onClick={handleFlip}
        className="w-full min-h-[340px] bg-slate-900 border-2 border-slate-700/80 hover:border-indigo-500/60 rounded-3xl p-6 sm:p-10 shadow-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between relative group select-none"
      >
        {/* Top Badges */}
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg border border-indigo-500/30">
            {currentCard.topic}
          </span>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="flex items-center gap-1 group-hover:text-indigo-400 transition">
              <RotateCw className="w-3.5 h-3.5" /> Clique para virar
            </span>
          </div>
        </div>

        {/* Card Content (Front or Back) */}
        <div className="my-auto py-6 text-center">
          {!isFlipped ? (
            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block">
                Pergunta / Conceito:
              </span>
              <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
                {currentCard.front}
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-left">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block">
                Resposta Direta para a Prova:
              </span>
              <p className="text-base sm:text-lg text-slate-100 font-medium whitespace-pre-line leading-relaxed">
                {currentCard.back}
              </p>

              {currentCard.macete && (
                <div className="mt-4 p-3 bg-amber-500/15 border border-amber-500/30 rounded-xl text-amber-200 text-xs sm:text-sm flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-300">Macete Mnemônico: </strong>
                    {currentCard.macete}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Card Footer Status */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
          <span className="text-slate-500">
            {isFlipped ? 'Mostrando o Verso' : 'Mostrando a Frente'}
          </span>
          {isCurrentMastered && (
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Cartão Dominado!
            </span>
          )}
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={handlePrev}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Anterior
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleMastered(currentCard.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
              isCurrentMastered
                ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
            }`}
          >
            {isCurrentMastered ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" /> Já Decorei!
              </>
            ) : (
              <>
                <Check className="w-4 h-4" /> Marcar como Já Decorei
              </>
            )}
          </button>
        </div>

        <button
          onClick={handleNext}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition shadow"
        >
          Próximo <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
