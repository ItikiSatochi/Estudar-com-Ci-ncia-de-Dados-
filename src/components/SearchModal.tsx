import { useState, useMemo, useEffect } from 'react';
import { ModuleSection, Question, Flashcard, GlossaryTerm } from '../types';
import { Search, X, BookOpen, HelpCircle, Sparkles, BookA, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  modules: ModuleSection[];
  questions: Question[];
  flashcards: Flashcard[];
  glossary: GlossaryTerm[];
  onSelectModule: (moduleId: string) => void;
  onSelectSimulado: (topicId?: string) => void;
  onSelectGlossary: () => void;
  onSelectFlashcards: () => void;
}

export function SearchModal({
  isOpen,
  onClose,
  modules,
  questions,
  flashcards,
  glossary,
  onSelectModule,
  onSelectSimulado,
  onSelectGlossary,
  onSelectFlashcards
}: SearchModalProps) {
  const [query, setQuery] = useState('');

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) return null;
    const q = query.toLowerCase();

    // Matching modules
    const matchedModules = modules.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.shortDescription.toLowerCase().includes(q) ||
        m.keyPoints.some((p) => p.toLowerCase().includes(q))
    );

    // Matching glossary terms
    const matchedGlossary = glossary.filter(
      (g) =>
        g.term.toLowerCase().includes(q) ||
        g.translation.toLowerCase().includes(q) ||
        g.simpleDefinition.toLowerCase().includes(q)
    );

    // Matching questions
    const matchedQuestions = questions.filter(
      (ques) =>
        ques.enunciado.toLowerCase().includes(q) ||
        ques.topicName.toLowerCase().includes(q) ||
        ques.explicacao.toLowerCase().includes(q)
    );

    // Matching flashcards
    const matchedFlashcards = flashcards.filter(
      (f) =>
        f.front.toLowerCase().includes(q) ||
        f.back.toLowerCase().includes(q) ||
        (f.macete && f.macete.toLowerCase().includes(q))
    );

    return {
      modules: matchedModules,
      glossary: matchedGlossary,
      questions: matchedQuestions,
      flashcards: matchedFlashcards
    };
  }, [query, modules, glossary, questions, flashcards]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Digite para buscar qualquer termo (ex: K-Means, Overfitting, Recall, ETL)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-1 rounded-lg border border-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-4 flex-1">
          {!results ? (
            <div className="py-8 text-center text-slate-500 text-sm">
              Digite pelo menos 2 letras para pesquisar em toda a plataforma.
            </div>
          ) : (
            <>
              {/* Modules Results */}
              {results.modules.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" /> Módulos Teóricos ({results.modules.length})
                  </span>
                  <div className="space-y-1.5">
                    {results.modules.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => {
                          onSelectModule(m.id);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition flex items-center justify-between group"
                      >
                        <div>
                          <h5 className="font-semibold text-xs sm:text-sm text-white group-hover:text-indigo-300">
                            {m.title}
                          </h5>
                          <p className="text-[11px] text-slate-400 line-clamp-1">
                            {m.shortDescription}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Glossary Results */}
              {results.glossary.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookA className="w-3.5 h-3.5 text-blue-400" /> Glossário de Termos ({results.glossary.length})
                  </span>
                  <div className="space-y-1.5">
                    {results.glossary.map((g) => (
                      <button
                        key={g.term}
                        onClick={() => {
                          onSelectGlossary();
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition flex items-center justify-between group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs sm:text-sm text-white group-hover:text-blue-300">
                              {g.term}
                            </span>
                            <span className="text-[10px] text-emerald-400">
                              ({g.translation})
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-1">
                            {g.simpleDefinition}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Questions Results */}
              {results.questions.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> Questões de Concurso ({results.questions.length})
                  </span>
                  <div className="space-y-1.5">
                    {results.questions.slice(0, 4).map((q) => (
                      <button
                        key={q.id}
                        onClick={() => {
                          onSelectSimulado(q.topicId);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition flex items-center justify-between group"
                      >
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] font-bold text-amber-400 mr-2">
                            [{q.banca} - {q.topicName}]
                          </span>
                          <p className="text-xs text-slate-200 line-clamp-1 inline">
                            {q.enunciado}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Flashcards Results */}
              {results.flashcards.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Flashcards ({results.flashcards.length})
                  </span>
                  <div className="space-y-1.5">
                    {results.flashcards.slice(0, 3).map((f) => (
                      <button
                        key={f.id}
                        onClick={() => {
                          onSelectFlashcards();
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition flex items-center justify-between group"
                      >
                        <div>
                          <span className="text-[10px] font-bold text-purple-400 block mb-0.5">
                            {f.topic}
                          </span>
                          <p className="text-xs text-white line-clamp-1">
                            {f.front}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {results.modules.length === 0 &&
                results.glossary.length === 0 &&
                results.questions.length === 0 &&
                results.flashcards.length === 0 && (
                  <div className="py-8 text-center text-slate-500 text-sm">
                    Nenhum resultado encontrado para "{query}".
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
