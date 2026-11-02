import { useState, useEffect } from 'react';
import { TabType } from './types';
import { MODULES_DATA } from './data/modulesData';
import { QUESTIONS_DATA } from './data/questionsData';
import { FLASHCARDS_DATA } from './data/flashcardsData';
import { GLOSSARY_DATA } from './data/glossaryData';
import { STUDY_PLAN_DATA } from './data/studyPlanData';

import { Navbar } from './components/Navbar';
import { ModuleViewer } from './components/ModuleViewer';
import { ConfusionMatrixSimulator } from './components/ConfusionMatrixSimulator';
import { QuizSimulado } from './components/QuizSimulado';
import { FlashcardsView } from './components/FlashcardsView';
import { GlossaryView } from './components/GlossaryView';
import { StudyPlanView } from './components/StudyPlanView';
import { SearchModal } from './components/SearchModal';

import { 
  BookOpen, 
  Calculator, 
  HelpCircle, 
  Sparkles, 
  BookA, 
  Calendar,
  CheckCircle2,
  Trophy,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('modulos');
  const [simuladoFilterTopic, setSimuladoFilterTopic] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Global keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenSimuladoWithTopic = (topicId: string) => {
    setSimuladoFilterTopic(topicId);
    setCurrentTab('simulado');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenMatrixSimulator = () => {
    setCurrentTab('matriz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onTabChange={(tab) => {
          setCurrentTab(tab);
          if (tab !== 'simulado') setSimuladoFilterTopic(undefined);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Hero Notification Ribbon */}
      <div className="bg-gradient-to-r from-indigo-900/40 via-blue-900/40 to-slate-900/50 border-b border-indigo-950/80 py-2.5 px-4 text-xs text-center text-slate-300">
        <span className="inline-flex items-center gap-1.5 flex-wrap justify-center">
          <span className="bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-bold uppercase text-[10px] border border-indigo-500/30">
            Foco no Concurso
          </span>
          <span>Sua prova é no próximo mês? <strong>Não tente virar programador agora:</strong> foque nos 9 pilares conceituais, pegadinhas de banca e questões comentadas.</span>
          <button
            onClick={() => setCurrentTab('plano')}
            className="text-indigo-400 hover:text-indigo-300 font-semibold underline inline-flex items-center gap-0.5 ml-1"
          >
            Ver Cronograma de 30 Dias <ArrowRight className="w-3 h-3" />
          </button>
        </span>
      </div>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentTab === 'modulos' && (
          <ModuleViewer
            modules={MODULES_DATA}
            onOpenSimuladoWithTopic={handleOpenSimuladoWithTopic}
            onOpenMatrixSimulator={handleOpenMatrixSimulator}
          />
        )}

        {currentTab === 'matriz' && (
          <ConfusionMatrixSimulator />
        )}

        {currentTab === 'simulado' && (
          <QuizSimulado
            questions={QUESTIONS_DATA}
            initialTopicFilter={simuladoFilterTopic}
            onClearTopicFilter={() => setSimuladoFilterTopic(undefined)}
          />
        )}

        {currentTab === 'flashcards' && (
          <FlashcardsView cards={FLASHCARDS_DATA} />
        )}

        {currentTab === 'glossario' && (
          <GlossaryView terms={GLOSSARY_DATA} />
        )}

        {currentTab === 'plano' && (
          <StudyPlanView days={STUDY_PLAN_DATA} />
        )}
      </main>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        modules={MODULES_DATA}
        questions={QUESTIONS_DATA}
        flashcards={FLASHCARDS_DATA}
        glossary={GLOSSARY_DATA}
        onSelectModule={(modId) => {
          setCurrentTab('modulos');
        }}
        onSelectSimulado={(topicId) => {
          setSimuladoFilterTopic(topicId);
          setCurrentTab('simulado');
        }}
        onSelectGlossary={() => setCurrentTab('glossario')}
        onSelectFlashcards={() => setCurrentTab('flashcards')}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            <strong>DataConcurso</strong> — Ciência de Dados Simplificada para Concursos Públicos.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Foco Cebraspe, FGV, FCC, Cesgranrio e Vunesp</span>
            <span>•</span>
            <span>Rumo à Aprovação! 🎯</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
