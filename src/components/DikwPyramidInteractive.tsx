import { useState } from 'react';
import { Database, FileText, Brain, Crown, ArrowRight, Lightbulb } from 'lucide-react';

export function DikwPyramidInteractive() {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);

  const levels = [
    {
      level: 4,
      name: 'Sabedoria (Wisdom)',
      icon: Crown,
      color: 'bg-amber-500 text-amber-950',
      borderColor: 'border-amber-400',
      activeBg: 'bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-700',
      question: 'Qual o melhor caminho para o futuro? (Saber o que fazer)',
      nature: 'Estratégica, ética, juízo de valor e visão de longo prazo.',
      example: '"Prescrever antitérmico, repouso, hidratação intravenosa e solicitar hemograma para investigar a causa raiz da infecção."',
      examTip: 'O topo da pirâmide. Envolve julgamento humano, ética e ação futura baseada na experiência acumulada.'
    },
    {
      level: 3,
      name: 'Conhecimento (Knowledge)',
      icon: Brain,
      color: 'bg-purple-500 text-purple-950',
      borderColor: 'border-purple-400',
      activeBg: 'bg-purple-50 dark:bg-purple-950/30 text-purple-900 dark:text-purple-200 border-purple-300 dark:border-purple-700',
      question: 'Como? Por quê? (Compreensão de padrões e relações)',
      nature: 'Pragmática e cognitiva. Informação assimilada com experiência prévia.',
      example: '"A temperatura de 39°C em um paciente adulto caracteriza febre alta e indica provável reação infecciosa aguda em andamento."',
      examTip: 'Conhecimento não é passivo; exige cognição humana ou algoritmos para conectar causas e efeitos.'
    },
    {
      level: 2,
      name: 'Informação (Information)',
      icon: FileText,
      color: 'bg-blue-500 text-blue-950',
      borderColor: 'border-blue-400',
      activeBg: 'bg-blue-50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-700',
      question: 'Quem? O que? Onde? Quando? (Dado com significado)',
      nature: 'Semântica. Dados organizados, rotulados e dotados de propósito.',
      example: '"O paciente João da Silva está com temperatura corporal de 39°C aferida às 14h30 no pronto-socorro."',
      examTip: 'A informação é o dado lapidado e contextualizado. Sozinha, responde a fatos, mas ainda não explica a estratégia.'
    },
    {
      level: 1,
      name: 'Dado (Data)',
      icon: Database,
      color: 'bg-slate-400 text-slate-950',
      borderColor: 'border-slate-300',
      activeBg: 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-600',
      question: 'O quê? (Símbolos brutos, números isolados)',
      nature: 'Sintática. Sem significado próprio isolado, sem contexto.',
      example: '"39" ou "120" ou "A+"',
      examTip: 'A base da pirâmide. O dado é a matéria-prima bruta. Não permite tomar decisões inteligentes isoladamente.'
    }
  ];

  const current = levels[selectedLevel];
  const IconComponent = current.icon;

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl my-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="p-1.5 bg-blue-500/20 text-blue-400 rounded-lg">
          <Brain className="w-5 h-5" />
        </span>
        <h4 className="font-semibold text-lg text-slate-100">Simulador Interativo: A Pirâmide DIKW</h4>
      </div>
      <p className="text-sm text-slate-400 mb-6">
        Clique nos diferentes andares da pirâmide abaixo para ver como um símbolo bruto se transforma em decisão estratégica:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Pyramid visual buttons */}
        <div className="md:col-span-5 flex flex-col items-center gap-2">
          {levels.map((item, idx) => {
            const isSelected = selectedLevel === idx;
            const widths = ['w-36', 'w-48', 'w-64', 'w-80'];
            return (
              <button
                key={item.name}
                onClick={() => setSelectedLevel(idx)}
                className={`py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm ${widths[idx]} ${
                  isSelected
                    ? `${item.color} ring-4 ring-white/30 scale-105 font-bold`
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name.split(' ')[0]}</span>
              </button>
            );
          })}
          <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-2">
            <span>Base (Dados Brutos)</span>
            <ArrowRight className="w-3 h-3 rotate-[-90deg]" />
            <span>Topo (Sabedoria / Decisão)</span>
          </div>
        </div>

        {/* Selected level explanation */}
        <div className="md:col-span-7 bg-slate-800/80 rounded-xl p-5 border border-slate-700/80">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <span className={`p-2 rounded-lg ${current.color}`}>
                <IconComponent className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Nível {current.level} de 4</span>
                <h5 className="font-bold text-base text-white">{current.name}</h5>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-4 text-sm">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase">Pergunta que responde:</span>
              <p className="text-slate-200 font-medium">{current.question}</p>
            </div>

            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase">Natureza Conceitual:</span>
              <p className="text-slate-300">{current.nature}</p>
            </div>

            <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-700/60">
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <Lightbulb className="w-3.5 h-3.5" /> Exemplo Prático:
              </span>
              <p className="text-slate-200 text-xs mt-1 italic">{current.example}</p>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 text-xs text-amber-200">
              <span className="font-bold">Como cai na prova: </span>
              {current.examTip}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
