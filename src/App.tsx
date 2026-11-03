import { useState, useEffect } from 'react';
import { TabType } from './types';
import { MODULES_DATA } from './data/modulesData';
import { QUESTIONS_DATA } from './data/questionsData';
import { FLASHCARDS_DATA } from './data/flashcardsData';
import { GLOSSARY_DATA } from './data/glossaryData';
import { STUDY_PLAN_DATA } from './data/studyPlanData';

import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { ModuleViewer } from './components/ModuleViewer';
import { ConfusionMatrixSimulator } from './components/ConfusionMatrixSimulator';
import { QuizSimulado } from './components/QuizSimulado';
import { FlashcardsView } from './components/FlashcardsView';
import { GlossaryView } from './components/GlossaryView';
import { StudyPlanView } from './components/StudyPlanView';
import { SearchModal } from './components/SearchModal';
import { EnglishDecoderTool } from './components/EnglishDecoderTool';
import { BeginnerGuideModal } from './components/BeginnerGuideModal';

import { 
  Ship,
  Sparkles, 
  ArrowRight,
  BookText,
  Languages,
  Database,
  Calculator,
  Trophy,
  Calendar,
  Compass,
  Lightbulb
} from 'lucide-react';

function AppContent() {
  const { isClean } = useTheme();
  const [currentTab, setCurrentTab] = useState<TabType>('cienciadados');
  const [simuladoFilterTopic, setSimuladoFilterTopic] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isBeginnerGuideOpen, setIsBeginnerGuideOpen] = useState<boolean>(false);
  const [englishSubTab, setEnglishSubTab] = useState<'decifrador' | 'modulos'>('decifrador');

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
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      isClean 
        ? 'bg-slate-100 text-slate-800 selection:bg-emerald-500 selection:text-white' 
        : 'bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white'
    }`}>
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onTabChange={(tab) => {
          setCurrentTab(tab);
          if (tab !== 'simulado') setSimuladoFilterTopic(undefined);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBeginnerGuide={() => setIsBeginnerGuideOpen(true)}
      />

      {/* Target Exam Notice Banner */}
      <div className={`py-2 px-4 text-xs text-center border-b transition-colors ${
        isClean
          ? 'bg-emerald-50/80 border-emerald-200 text-slate-700'
          : 'bg-gradient-to-r from-emerald-950/60 via-slate-900 to-indigo-950/60 border-emerald-900/40 text-slate-300'
      }`}>
        <span className="inline-flex items-center gap-2 flex-wrap justify-center">
          <span className={`px-2 py-0.5 rounded font-extrabold uppercase text-[10px] border flex items-center gap-1 ${
            isClean
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
              : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
          }`}>
            <Ship className="w-3 h-3" /> Transpetro • Cesgranrio
          </span>
          <span>
            1ª vez prestando concurso? Foque nos conceitos práticos de <strong>Ênfase 8: Ciência de Dados</strong>, <strong>Português</strong> e no <strong>Decifrador de Inglês</strong> sem tradutor!
          </span>
          <button
            onClick={() => setIsBeginnerGuideOpen(true)}
            className="text-emerald-600 dark:text-emerald-400 font-bold underline inline-flex items-center gap-0.5 ml-1 hover:opacity-80"
          >
            Abrir Dicas para Iniciantes <Lightbulb className="w-3 h-3" />
          </button>
        </span>
      </div>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Module Viewer for Data Science */}
        {currentTab === 'cienciadados' && (
          <ModuleViewer
            modules={MODULES_DATA}
            disciplineFilter="cienciadados"
            onOpenSimuladoWithTopic={handleOpenSimuladoWithTopic}
            onOpenMatrixSimulator={handleOpenMatrixSimulator}
          />
        )}

        {/* Module Viewer for Portuguese */}
        {currentTab === 'portugues' && (
          <ModuleViewer
            modules={MODULES_DATA}
            disciplineFilter="portugues"
            onOpenSimuladoWithTopic={handleOpenSimuladoWithTopic}
          />
        )}

        {/* English Tab: Dual Mode (Decifrador Sem Tradutor vs Módulos Teóricos) */}
        {currentTab === 'ingles' && (
          <div className="space-y-6">
            <div className={`p-3 rounded-2xl border flex items-center justify-between gap-3 ${
              isClean ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900 border-slate-800 shadow-md'
            }`}>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-slate-500 dark:text-slate-400">Modo de Estudo de Inglês:</span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setEnglishSubTab('decifrador')}
                    className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
                      englishSubTab === 'decifrador'
                        ? 'bg-emerald-600 text-white shadow'
                        : isClean
                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" /> 🕵️ Decifrador Sem Tradutor (Recomendado)
                  </button>
                  <button
                    onClick={() => setEnglishSubTab('modulos')}
                    className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
                      englishSubTab === 'modulos'
                        ? 'bg-emerald-600 text-white shadow'
                        : isClean
                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <BookText className="w-3.5 h-3.5" /> 📚 Módulos Teóricos & Conectivos
                  </button>
                </div>
              </div>
            </div>

            {englishSubTab === 'decifrador' ? (
              <EnglishDecoderTool />
            ) : (
              <ModuleViewer
                modules={MODULES_DATA}
                disciplineFilter="ingles"
                onOpenSimuladoWithTopic={handleOpenSimuladoWithTopic}
              />
            )}
          </div>
        )}

        {/* Confusion Matrix Simulator */}
        {currentTab === 'matriz' && (
          <ConfusionMatrixSimulator />
        )}

        {/* Contest Exam Simulator */}
        {currentTab === 'simulado' && (
          <QuizSimulado
            questions={QUESTIONS_DATA}
            initialTopicFilter={simuladoFilterTopic}
            onClearTopicFilter={() => setSimuladoFilterTopic(undefined)}
          />
        )}

        {/* Flashcards View */}
        {currentTab === 'flashcards' && (
          <FlashcardsView cards={FLASHCARDS_DATA} />
        )}

        {/* Glossary View */}
        {currentTab === 'glossario' && (
          <GlossaryView terms={GLOSSARY_DATA} />
        )}

        {/* 30-Day Plan */}
        {currentTab === 'plano' && (
          <StudyPlanView days={STUDY_PLAN_DATA} />
        )}
      </main>

      {/* Beginner Guide Modal */}
      <BeginnerGuideModal
        isOpen={isBeginnerGuideOpen}
        onClose={() => setIsBeginnerGuideOpen(false)}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        modules={MODULES_DATA}
        questions={QUESTIONS_DATA}
        flashcards={FLASHCARDS_DATA}
        glossary={GLOSSARY_DATA}
        onSelectModule={(modId) => {
          const mod = MODULES_DATA.find((m) => m.id === modId);
          if (mod) setCurrentTab(mod.discipline);
        }}
        onSelectSimulado={(topicId) => {
          setSimuladoFilterTopic(topicId);
          setCurrentTab('simulado');
        }}
        onSelectGlossary={() => setCurrentTab('glossario')}
        onSelectFlashcards={() => setCurrentTab('flashcards')}
      />

      {/* Footer */}
      <footer className={`mt-auto border-t py-6 text-xs text-center transition-colors ${
        isClean ? 'bg-white border-slate-200 text-slate-500' : 'bg-slate-950 border-slate-900 text-slate-500'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            <strong>Transpetro Ciência de Dados</strong> — Preparatório Didático Cesgranrio (Ênfase 8).
          </p>
          <div className="flex items-center gap-3">
            <span>Português</span>
            <span>•</span>
            <span>Inglês Instrumental</span>
            <span>•</span>
            <span>Ciência de Dados</span>
            <span>•</span>
            <span>Rumo à Transpetro! 🚢</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
