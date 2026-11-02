import { useState, useMemo } from 'react';
import { GlossaryTerm } from '../types';
import { Search, BookA, Tag, Sparkles, Copy, Check } from 'lucide-react';

interface GlossaryViewProps {
  terms: GlossaryTerm[];
}

export function GlossaryView({ terms }: GlossaryViewProps) {
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
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 bg-blue-500/20 text-blue-400 rounded-lg">
            <BookA className="w-5 h-5" />
          </span>
          <h3 className="text-xl font-bold text-white">
            Glossário Inglês-Português para Concursos
          </h3>
        </div>
        <p className="text-sm text-slate-300">
          As bancas organizadoras costumam usar os termos técnicos em inglês sem tradução na prova. Domine o vocabulário para não perder pontos fáceis por questão de vocabulário.
        </p>

        {/* Search & Category Filter */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Buscar termo em inglês ou português (ex: Feature, Outlier, Recall)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="md:col-span-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 shadow-sm transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  {t.category}
                </span>
                <button
                  onClick={() => handleCopy(t.term, t.simpleDefinition)}
                  title="Copiar termo e definição"
                  className="text-slate-400 hover:text-white transition"
                >
                  {copiedTerm === t.term ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <h4 className="text-lg font-extrabold text-white tracking-wide">
                {t.term}
              </h4>
              <p className="text-xs font-semibold text-emerald-400 mb-3">
                {t.translation}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
                {t.simpleDefinition}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 bg-slate-950/40 -mx-5 -mb-5 p-4 rounded-b-2xl">
              <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1 mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Como a banca cobra:
              </span>
              <p className="text-xs text-slate-300 italic">
                {t.examContext}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-400 text-sm">
          Nenhum termo encontrado para "{searchTerm}".
        </div>
      )}
    </div>
  );
}
