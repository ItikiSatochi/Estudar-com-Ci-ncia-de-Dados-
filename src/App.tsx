import { useState, useEffect } from 'react';
import { TabType } from './types';
import { MODULES_DATA } from './data/modulesData';
import { QUESTIONS_DATA } from './data/questionsData';
import { FLASHCARDS_DATA } from './data/flashcardsData';
import { GLOSSARY_DATA } from './data/glossaryData';
import { STUDY_PLAN_DATA } from './data/studyPlanData';

import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { DailyGuideView } from './components/DailyGuideView';
import { CertificateModal } from './components/CertificateModal';
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
  Lightbulb,
  X
} from 'lucide-react';

function AppContent() {
  const { isClean } = useTheme();
  
  // Default tab is the Daily Guide (Guia Diário com seleção por dia)
  const [currentTab, setCurrentTab] = useState<TabType>('guiadiario');
  const [simuladoFilterTopic, setSimuladoFilterTopic] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isBeginnerGuideOpen, setIsBeginnerGuideOpen] = useState<boolean>(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);
  const [englishSubTab, setEnglishSubTab] = useState<'decifrador' | 'modulos'>('decifrador');
  const [showBanner, setShowBanner] = useState<boolean>(true);

  // Selected Day state (1 to 30)
  const [currentSelectedDay, setCurrentSelectedDay] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('dataconcurso_current_day');
      return saved ? Number(saved) : 1;
    } catch {
      return 1;
    }
  });

  // Completed Days map
  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>(() => {
    try {
      const saved = localStorage.getItem('dataconcurso_completed_days');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save day selection
  const handleSelectDay = (day: number) => {
    setCurrentSelectedDay(day);
    try {
      localStorage.setItem('dataconcurso_current_day', String(day));
    } catch (e) {
      console.error(e);
    }
  };

  // Toggle day completed
  const handleToggleDayCompleted = (day: number) => {
    const next = { ...completedDays, [day]: !completedDays[day] };
    setCompletedDays(next);
    try {
      localStorage.setItem('dataconcurso_completed_days', JSON.stringify(next));
    } catch (e) {
      console.error(e);
    }
  };

  // Calculate overall progress percent
  const totalDays = STUDY_PLAN_DATA.length;
  const completedDaysCount = Object.values(completedDays).filter(Boolean).length;
  const completionPercent = Math.round((completedDaysCount / totalDays) * 100);

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

  const handleNavigateToTab = (tab: TabType, filterTopic?: string) => {
    if (filterTopic) setSimuladoFilterTopic(filterTopic);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      isClean 
        ? 'bg-slate-100 text-slate-800 selection:bg-emerald-500 selection:text-white' 
        : 'bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white'
    }`}>
      {/* Top Navbar with Dropdown Day Selector & 80% Certificate Trigger */}
      <Navbar
        currentTab={currentTab}
        onTabChange={(tab) => {
          setCurrentTab(tab);
          if (tab !== 'simulado') setSimuladoFilterTopic(undefined);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBeginnerGuide={() => setIsBeginnerGuideOpen(true)}
        onOpenCertificate={() => setIsCertificateOpen(true)}
        completionPercent={completionPercent}
        currentSelectedDay={currentSelectedDay}
        onSelectDay={handleSelectDay}
      />

      {/* Target Exam Notice Banner */}
      {showBanner && (
        <div className={`py-1.5 px-3 text-xs text-center border-b transition-colors relative flex items-center justify-center ${
          isClean
            ? 'bg-emerald-50/80 border-emerald-200 text-slate-700'
            : 'bg-gradient-to-r from-emerald-950/60 via-slate-900 to-indigo-950/60 border-emerald-900/40 text-slate-300'
        }`}>
          <div className="inline-flex items-center gap-1.5 flex-wrap justify-center pr-6">
            <span className={`px-1.5 py-0.2 rounded font-extrabold uppercase text-[10px] border flex items-center gap-1 ${
              isClean
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            }`}>
              <Ship className="w-3 h-3" /> Transpetro • Cesgranrio
            </span>
            <span>
              1ª vez em concurso? Use o <strong>Guia Diário (30 Dias)</strong> para estudar dia a dia e desbloqueie seu <strong>Certificado aos 80%+</strong>!
            </span>
            <button
              onClick={() => setIsBeginnerGuideOpen(true)}
              className="text-emerald-600 dark:text-emerald-400 font-bold underline inline-flex items-center gap-0.5 ml-1 hover:opacity-80"
            >
              Dicas p/ Iniciantes <Lightbulb className="w-3 h-3" />
            </button>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
            title="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6">
        
        {/* Guia Diário Roteirizado (O que estudar dia a dia + Dropdown) */}
        {currentTab === 'guiadiario' && (
          <DailyGuideView
            studyDays={STUDY_PLAN_DATA}
            questions={QUESTIONS_DATA}
            currentSelectedDay={currentSelectedDay}
            onSelectDay={handleSelectDay}
            onNavigateToTab={handleNavigateToTab}
            onOpenCertificate={() => setIsCertificateOpen(true)}
            completedDays={completedDays}
            onToggleDayCompleted={handleToggleDayCompleted}
          />
        )}

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

        {/* 30-Day Plan Overview */}
        {currentTab === 'plano' && (
          <StudyPlanView days={STUDY_PLAN_DATA} />
        )}
      </main>

      {/* Official 80%+ Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        completionPercent={completionPercent}
        stats={{
          daysCompleted: completedDaysCount,
          totalDays,
          questionsAnswered: completedDaysCount * 2,
          correctRate: Math.min(100, 75 + Math.round(completionPercent * 0.25))
        }}
      />

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
            <strong>Transpetro Ciência de Dados</strong> — Guia de Estudos Roteirizado Cesgranrio (Ênfase 8).
          </p>
          <div className="flex items-center gap-3">
            <span>Roteiro Diário</span>
            <span>•</span>
            <span>Português</span>
            <span>•</span>
            <span>Inglês Instrumental</span>
            <span>•</span>
            <span>Ciência de Dados</span>
            <span>•</span>
            <span>Certificado 80%+ 🎓</span>
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
