import { useState, useMemo } from 'react';
import { GlossaryTerm } from '../types';
import { useTheme } from '../context/ThemeContext';
import { Search, BookA, Tag, Sparkles, Copy, Check } from 'lucide-react';

interface GlossaryViewProps {
  terms: GlossaryTerm[];
}

export function GlossaryView({ terms }: GlossaryViewProps) {
  const { isClean } = useTheme();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedTerm, setCopiedTerm] = useState<string | null>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    terms.forEach((t) => set.add(t.category));
    return Array.from(set);
  }, [terms]);

  const filteredTerms = useMemo(() => {
    return terms.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchTerm.toLowerCase();
      const matchText =
        item.term.toLowerCase().includes(q) ||
        item.translation.toLowerCase().includes(q) ||
        item.simpleDefinition.toLowerCase().includes(q) ||
        item.examContext.toLowerCase().includes(q);
      return matchCat && matchText;
    });
  }, [terms, searchTerm, selectedCategory]);

  const handleCopy = (term: string, definition: string) => {
    navigator.clipboard.writeText(`${term} (${definition})`);
    setCopiedTerm(term);
    setTimeout(() => setCopiedTerm(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`p-6 rounded-3xl border transition-colors ${
        isClean ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-slate-900 border-slate-800 shadow-md text-slate-100'
      }`}>
        <div className="flex items-center gap-2 mb-2">
          <span className={`p-1.5 rounded-lg ${isClean ? 'bg-emerald-600 text-white' : 'bg-blue-500/20 text-blue-400'}`}>
            <BookA className="w-5 h-5" />
          </span>
          <h3 className={`text-xl font-bold ${isClean ? 'text-slate-900' : 'text-white'}`}>
            Glossário Inglês-Português para Concursos
          </h3>
        </div>
        <p className={`text-sm ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>
          A Cesgranrio costuma usar os termos técnicos em inglês sem tradução na prova da Transpetro. Domine o vocabulário para não perder pontos fáceis.
        </p>

        {/* Search & Category Filter */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Buscar termo em inglês ou português (ex: Feature, Outlier, Pipeline)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none border ${
                isClean
                  ? 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-1 focus:ring-emerald-500'
                  : 'bg-slate-800 border-slate-700 text-slate-100 focus:ring-1 focus:ring-emerald-500'
              }`}
            />
          </div>

          <div className="md:col-span-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`w-full rounded-xl px-3 py-2 text-sm focus:outline-none border ${
                isClean
                  ? 'bg-slate-50 border-slate-300 text-slate-800 focus:ring-1 focus:ring-emerald-500'
                  : 'bg-slate-800 border-slate-700 text-slate-200 focus:ring-1 focus:ring-emerald-500'
              }`}
            >
              <option value="all">Todas as Categorias ({terms.length})</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((t) => (
          <div
            key={t.term}
            className={`p-5 rounded-3xl border transition flex flex-col justify-between ${
              isClean
                ? 'bg-white border-slate-200 hover:border-emerald-300 shadow-sm'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded border ${
                  isClean ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30'
                }`}>
                  {t.category}
                </span>
                <button
                  onClick={() => handleCopy(t.term, t.simpleDefinition)}
                  title="Copiar termo e definição"
                  className={isClean ? 'text-slate-400 hover:text-slate-700' : 'text-slate-400 hover:text-white'}
                >
                  {copiedTerm === t.term ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <h4 className={`text-lg font-extrabold tracking-wide ${isClean ? 'text-slate-900' : 'text-white'}`}>
                {t.term}
              </h4>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                {t.translation}
              </p>

              <p className={`text-xs sm:text-sm mb-3 leading-relaxed ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>
                {t.simpleDefinition}
              </p>
            </div>

            <div className={`pt-3 border-t -mx-5 -mb-5 p-4 rounded-b-3xl ${
              isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/40 border-slate-800'
            }`}>
              <span className="text-[11px] font-bold text-amber-500 flex items-center gap-1 mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Como a Cesgranrio cobra:
              </span>
              <p className={`text-xs italic ${isClean ? 'text-slate-600' : 'text-slate-300'}`}>
                {t.examContext}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className={`p-8 rounded-3xl border text-center text-sm ${
          isClean ? 'bg-white border-slate-200 text-slate-500' : 'bg-slate-900 border-slate-800 text-slate-400'
        }`}>
          Nenhum termo encontrado para "{searchTerm}".
        </div>
      )}
    </div>
  );
}
