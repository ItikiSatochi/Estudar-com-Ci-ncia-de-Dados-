import { useState } from 'react';
import { Briefcase, Search, Sparkles, Cpu, CheckCircle2, Rocket, ArrowRight, AlertTriangle, Clock } from 'lucide-react';

export function CrispDmInteractive() {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to Data Preparation (the exam trap!)

  const steps = [
    {
      step: 1,
      title: '1. Entendimento do Negócio',
      english: 'Business Understanding',
      icon: Briefcase,
      color: 'from-blue-600 to-indigo-600',
      timeEffort: '10% do tempo',
      objective: 'Definir os objetivos do projeto sob a perspectiva de negócio e transformá-los em metas técnicas de Data Science.',
      activities: [
        'Determinar os critérios de sucesso do negócio (ex: reduzir churn em 15%).',
        'Avaliar a situação atual, recursos, restrições e riscos.',
        'Traduzir o problema de negócio em problema analítico (classificação, regressão, etc.).',
        'Elaborar o plano inicial do projeto.'
      ],
      deliverables: 'Metas de negócio documentadas e plano de projeto preliminar.'
    },
    {
      step: 2,
      title: '2. Entendimento dos Dados',
      english: 'Data Understanding',
      icon: Search,
      color: 'from-cyan-600 to-blue-600',
      timeEffort: '15% do tempo',
      objective: 'Familiarizar-se com os dados disponíveis, identificar problemas de qualidade e formular hipóteses preliminares.',
      activities: [
        'Coleta inicial de dados das fontes primárias.',
        'Descrição das propriedades dos dados (número de linhas, colunas, tipos).',
        'Exploração descritiva inicial (médias, distribuições, gráficos).',
        'Verificação da qualidade dos dados (campos nulos, inconsistências).'
      ],
      deliverables: 'Relatório de exploração e diagnóstico de qualidade dos dados.'
    },
    {
      step: 3,
      title: '3. Preparação dos Dados (A Mais Longa!)',
      english: 'Data Preparation',
      icon: Sparkles,
      color: 'from-amber-500 to-orange-600',
      timeEffort: '70% a 80% do tempo!',
      isHighlight: true,
      objective: 'Construir o conjunto de dados final que será inserido nas ferramentas de modelagem a partir dos dados brutos.',
      activities: [
        'Seleção de tabelas, registros e variáveis (Feature Selection).',
        'Limpeza de dados (imputação de valores nulos, tratamento de outliers).',
        'Construção e transformação de variáveis (One-Hot Encoding, log, ratios).',
        'Integração e junção de múltiplas fontes de dados.',
        'Formatação e padronização (Z-score ou Normalização Min-Max).'
      ],
      deliverables: 'Conjunto de dados pronto para treinamento e documentação das transformações.'
    },
    {
      step: 4,
      title: '4. Modelagem',
      english: 'Modeling',
      icon: Cpu,
      color: 'from-purple-600 to-pink-600',
      timeEffort: '10% do tempo',
      objective: 'Selecionar e aplicar diversas técnicas de modelagem algorítmica e calibrar seus hiperparâmetros.',
      activities: [
        'Seleção de algoritmos candidatos (Árvores, Regressão, Random Forest, etc.).',
        'Definição da estratégia de teste (Separação Treino/Teste, Validação Cruzada K-Fold).',
        'Construção e treino dos modelos com os dados preparados.',
        'Avaliação técnica inicial das métricas de treinamento.'
      ],
      deliverables: 'Modelos treinados e ajuste fino de hiperparâmetros.'
    },
    {
      step: 5,
      title: '5. Avaliação',
      english: 'Evaluation',
      icon: CheckCircle2,
      color: 'from-emerald-600 to-teal-600',
      timeEffort: '5% do tempo',
      objective: 'Avaliar rigorosamente o modelo construído para assegurar que ele realmente atinge os objetivos de negócio definidos na Fase 1.',
      activities: [
        'Avaliação dos resultados frente às metas de negócio (não apenas acurácia matemática).',
        'Revisão completa do processo para garantir que nada foi negligenciado.',
        'Decisão final: o modelo está aprovado para entrar em produção ou é necessário reiniciar do Passo 1?'
      ],
      deliverables: 'Decisão formal de aprovação para implantação.'
    },
    {
      step: 6,
      title: '6. Implantação (Em Produção)',
      english: 'Deployment',
      icon: Rocket,
      color: 'from-rose-600 to-red-600',
      timeEffort: 'Contínuo',
      objective: 'Organizar e disponibilizar os resultados do modelo para que a organização os utilize nas decisões rotineiras.',
      activities: [
        'Planejamento e execução da implantação (APIs, pipelines em nuvem, dashboards).',
        'Planejamento de monitoramento de deriva dos dados (Data Drift / Model Drift).',
        'Produção do relatório final de encerramento.',
        'Revisão de lições aprendidas pelo time.'
      ],
      deliverables: 'Modelo em produção gerando valor e plano de manutenção.'
    }
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-amber-500/20 text-amber-400 rounded-lg">
            <Sparkles className="w-5 h-5" />
          </span>
          <h4 className="font-semibold text-lg text-slate-100">Simulador do Ciclo de Vida: CRISP-DM</h4>
        </div>
        <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
          6 Fases Cíclicas e Iterativas
        </span>
      </div>

      <p className="text-sm text-slate-400 mb-6">
        Clique em cada etapa para explorar o que acontece e por que o processo é o mais cobrado em provas de concurso:
      </p>

      {/* Steps Navigation Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
        {steps.map((st, idx) => {
          const isSelected = activeStep === idx;
          const StepIcon = st.icon;
          return (
            <button
              key={st.title}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between relative ${
                isSelected
                  ? 'bg-slate-800 border-amber-400 ring-2 ring-amber-400/30 shadow-lg'
                  : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/80 hover:border-slate-600 text-slate-300'
              }`}
            >
              {st.isHighlight && (
                <span className="absolute -top-2 right-2 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow">
                  80% TEMPO
                </span>
              )}
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300'}`}>
                  Fase {st.step}
                </span>
                <StepIcon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
              </div>
              <p className="text-xs font-semibold line-clamp-2 text-slate-200">{st.english}</p>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detail Box */}
      <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} text-white shadow-md`}>
              <CurrentIcon className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-lg text-white">{current.title}</h5>
              <p className="text-xs text-slate-400">{current.english}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-slate-300">Esforço estimado: </span>
            <span className="text-amber-400 font-bold">{current.timeEffort}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-3">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Objetivo Central:</span>
              <p className="text-slate-200 text-sm mt-1">{current.objective}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Entregável (Deliverable):</span>
              <p className="text-slate-300 text-xs mt-1 bg-slate-900/50 p-2.5 rounded-lg border border-slate-700/60 font-mono">
                {current.deliverables}
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">
              Principais Tarefas Práticas:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {current.activities.map((act, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {current.isHighlight && (
          <div className="mt-5 p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-200">
              <span className="font-bold text-amber-300">ATENÇÃO MÁXIMA PARA A PROVA: </span>
              A fase de <strong>Preparação dos Dados</strong> é a que mais consome recursos (70% a 80%). Bancas como Cebraspe e FGV adoram afirmar que é a Modelagem. Marque Preparação e garanta o ponto!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
