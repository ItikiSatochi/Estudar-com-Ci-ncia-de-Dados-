import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Database, Play, CheckCircle2, Table, Info, Sparkles, ArrowRight } from 'lucide-react';

export function SqlPlaygroundInteractive() {
  const { isClean } = useTheme();
  const [activeQuery, setActiveQuery] = useState<'inner' | 'left' | 'having'>('left');

  // Base raw tables
  const NAVIOS = [
    { id: 1, nome: 'Petroleiro Dragão do Mar', capacidade: 150000, tipo: 'Suezmax' },
    { id: 2, nome: 'Navio Anita Garibaldi', capacidade: 100000, tipo: 'Aframax' },
    { id: 3, nome: 'Petroleiro Zumbi dos Palmares', capacidade: 155000, tipo: 'Suezmax' },
    { id: 4, nome: 'Gaseiro Darcy Ribeiro (Novo)', capacidade: 35000, tipo: 'Gaseiro' } // No voyages yet!
  ];

  const VIAGENS = [
    { id_viagem: 101, id_navio: 1, terminal: 'Angra dos Reis (TEBIG)', carga_m3: 140000 },
    { id_viagem: 102, id_navio: 1, terminal: 'São Sebastião (TEBAR)', carga_m3: 135000 },
    { id_viagem: 103, id_navio: 2, terminal: 'Madre de Deus (TEMADRE)', carga_m3: 98000 },
    { id_viagem: 104, id_navio: 3, terminal: 'Angra dos Reis (TEBIG)', carga_m3: 150000 }
  ];

  return (
    <div className={`p-4 sm:p-6 rounded-3xl border transition shadow-sm space-y-5 ${
      isClean ? 'bg-slate-50 border-emerald-200' : 'bg-slate-900/80 border-emerald-900/40'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
            Laboratório Interativo Prático de SQL
          </span>
          <h4 className={`text-base font-extrabold flex items-center gap-2 ${isClean ? 'text-slate-900' : 'text-white'}`}>
            <Database className="w-4 h-4 text-emerald-500" />
            Simulador de Consultas SQL da Transpetro
          </h4>
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Clique nas consultas para ver o resultado na hora:
        </span>
      </div>

      {/* Query Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveQuery('left')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
            activeQuery === 'left'
              ? 'bg-emerald-600 text-white border-emerald-600 shadow'
              : isClean
              ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
          }`}
        >
          1. Testar LEFT JOIN (com NULL)
        </button>
        <button
          onClick={() => setActiveQuery('inner')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
            activeQuery === 'inner'
              ? 'bg-emerald-600 text-white border-emerald-600 shadow'
              : isClean
              ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
          }`}
        >
          2. Testar INNER JOIN
        </button>
        <button
          onClick={() => setActiveQuery('having')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
            activeQuery === 'having'
              ? 'bg-emerald-600 text-white border-emerald-600 shadow'
              : isClean
              ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
          }`}
        >
          3. Testar GROUP BY + HAVING
        </button>
      </div>

      {/* Code Snippet Box */}
      <div className="p-3.5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs border border-slate-800 space-y-1 overflow-x-auto shadow-inner">
        <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 mb-1 border-b border-slate-800">
          <span>SQL Query Executada:</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <Play className="w-3 h-3 fill-emerald-400" /> Executado com Sucesso
          </span>
        </div>
        {activeQuery === 'left' && (
          <p className="text-emerald-300">
            <span className="text-pink-400">SELECT</span> n.nome_navio, n.tipo, v.terminal, v.carga_m3<br />
            <span className="text-pink-400">FROM</span> navios n<br />
            <span className="text-pink-400">LEFT JOIN</span> viagens v <span className="text-pink-400">ON</span> n.id_navio = v.id_navio;
          </p>
        )}
        {activeQuery === 'inner' && (
          <p className="text-emerald-300">
            <span className="text-pink-400">SELECT</span> n.nome_navio, n.tipo, v.terminal, v.carga_m3<br />
            <span className="text-pink-400">FROM</span> navios n<br />
            <span className="text-pink-400">INNER JOIN</span> viagens v <span className="text-pink-400">ON</span> n.id_navio = v.id_navio;
          </p>
        )}
        {activeQuery === 'having' && (
          <p className="text-emerald-300">
            <span className="text-pink-400">SELECT</span> v.terminal, <span className="text-yellow-300">COUNT</span>(*) <span className="text-pink-400">AS</span> total_viagens, <span className="text-yellow-300">SUM</span>(v.carga_m3) <span className="text-pink-400">AS</span> volume_total<br />
            <span className="text-pink-400">FROM</span> viagens v<br />
            <span className="text-pink-400">GROUP BY</span> v.terminal<br />
            <span className="text-pink-400">HAVING</span> <span className="text-yellow-300">COUNT</span>(*) &gt; 1;
          </p>
        )}
      </div>

      {/* Result Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-xs">
          <thead className={isClean ? 'bg-slate-100 text-slate-800 font-bold' : 'bg-slate-800 text-slate-200 font-bold'}>
            {activeQuery === 'having' ? (
              <tr>
                <th className="px-3 py-2.5">terminal</th>
                <th className="px-3 py-2.5">total_viagens</th>
                <th className="px-3 py-2.5">volume_total (m³)</th>
              </tr>
            ) : (
              <tr>
                <th className="px-3 py-2.5">nome_navio</th>
                <th className="px-3 py-2.5">tipo</th>
                <th className="px-3 py-2.5">terminal</th>
                <th className="px-3 py-2.5">carga_m3</th>
              </tr>
            )}
          </thead>
          <tbody className={`divide-y ${isClean ? 'bg-white divide-slate-100' : 'bg-slate-900 divide-slate-800'}`}>
            {activeQuery === 'left' && (
              <>
                <tr>
                  <td className="px-3 py-2 font-medium">Petroleiro Dragão do Mar</td>
                  <td className="px-3 py-2">Suezmax</td>
                  <td className="px-3 py-2">Angra dos Reis (TEBIG)</td>
                  <td className="px-3 py-2 font-mono">140.000</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Petroleiro Dragão do Mar</td>
                  <td className="px-3 py-2">Suezmax</td>
                  <td className="px-3 py-2">São Sebastião (TEBAR)</td>
                  <td className="px-3 py-2 font-mono">135.000</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Navio Anita Garibaldi</td>
                  <td className="px-3 py-2">Aframax</td>
                  <td className="px-3 py-2">Madre de Deus (TEMADRE)</td>
                  <td className="px-3 py-2 font-mono">98.000</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Petroleiro Zumbi dos Palmares</td>
                  <td className="px-3 py-2">Suezmax</td>
                  <td className="px-3 py-2">Angra dos Reis (TEBIG)</td>
                  <td className="px-3 py-2 font-mono">150.000</td>
                </tr>
                <tr className="bg-amber-500/10 dark:bg-amber-500/15 font-bold">
                  <td className="px-3 py-2 text-amber-700 dark:text-amber-300">Gaseiro Darcy Ribeiro (Novo)</td>
                  <td className="px-3 py-2 text-amber-700 dark:text-amber-300">Gaseiro</td>
                  <td className="px-3 py-2 text-amber-600 dark:text-amber-400 font-mono">NULL ⚠️</td>
                  <td className="px-3 py-2 text-amber-600 dark:text-amber-400 font-mono">NULL ⚠️</td>
                </tr>
              </>
            )}

            {activeQuery === 'inner' && (
              <>
                <tr>
                  <td className="px-3 py-2 font-medium">Petroleiro Dragão do Mar</td>
                  <td className="px-3 py-2">Suezmax</td>
                  <td className="px-3 py-2">Angra dos Reis (TEBIG)</td>
                  <td className="px-3 py-2 font-mono">140.000</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Petroleiro Dragão do Mar</td>
                  <td className="px-3 py-2">Suezmax</td>
                  <td className="px-3 py-2">São Sebastião (TEBAR)</td>
                  <td className="px-3 py-2 font-mono">135.000</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Navio Anita Garibaldi</td>
                  <td className="px-3 py-2">Aframax</td>
                  <td className="px-3 py-2">Madre de Deus (TEMADRE)</td>
                  <td className="px-3 py-2 font-mono">98.000</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Petroleiro Zumbi dos Palmares</td>
                  <td className="px-3 py-2">Suezmax</td>
                  <td className="px-3 py-2">Angra dos Reis (TEBIG)</td>
                  <td className="px-3 py-2 font-mono">150.000</td>
                </tr>
              </>
            )}

            {activeQuery === 'having' && (
              <tr>
                <td className="px-3 py-2 font-bold text-emerald-600 dark:text-emerald-400">Angra dos Reis (TEBIG)</td>
                <td className="px-3 py-2 font-mono font-bold">2 viagens</td>
                <td className="px-3 py-2 font-mono font-bold">290.000 m³</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Practical Didactic Explanation Box */}
      <div className={`p-3.5 rounded-2xl border text-xs leading-relaxed flex items-start gap-2.5 ${
        isClean ? 'bg-white border-slate-200 text-slate-700' : 'bg-slate-900 border-slate-800 text-slate-300'
      }`}>
        <Info className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
        <div>
          {activeQuery === 'left' && (
            <p>
              <strong>O que você está vendo no LEFT JOIN:</strong> O navio <em>Gaseiro Darcy Ribeiro</em> é novo e nunca fez viagens cadastradas na tabela da direita. Como usamos <strong>LEFT JOIN</strong>, ele NÃO foi descartado! A tabela manteve o navio e completou as colunas da viagem com <strong>NULL</strong>. Se fosse um INNER JOIN, ele sumiria da lista!
            </p>
          )}
          {activeQuery === 'inner' && (
            <p>
              <strong>O que você está vendo no INNER JOIN:</strong> O <em>Gaseiro Darcy Ribeiro</em> sumiu do resultado! O INNER JOIN só traz linhas que possuem correspondência nas DUAS tabelas simultaneamente.
            </p>
          )}
          {activeQuery === 'having' && (
            <p>
              <strong>O que você está vendo no HAVING:</strong> Os terminais de São Sebastião e Madre de Deus tiveram apenas 1 viagem cada. A cláusula <code>HAVING COUNT(*) &gt; 1</code> filtrou o grupo, mostrando apenas o terminal de <strong>Angra dos Reis (TEBIG)</strong> que teve 2 viagens. Lembre-se: WHERE não pode filtrar COUNT(), só o HAVING!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
