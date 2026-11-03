import { TabType } from '../types';
import { useTheme } from '../context/ThemeContext';
import { 
  Database, 
  BookText, 
  Languages, 
  Calculator, 
  HelpCircle, 
  Sparkles, 
  Calendar, 
  BookA, 
  Search, 
  Menu, 
  X,
  Ship,
  Sun,
  Moon,
  Compass
} from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
  onOpenSearch: () => void;
  onOpenBeginnerGuide?: () => void;
}

export function Navbar({ currentTab, onTabChange, onOpenSearch, onOpenBeginnerGuide }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, isClean, toggleTheme } = useTheme();

  const tabs: { id: TabType; label: string; icon: typeof Database; badge?: string }[] = [
    { id: 'cienciadados', label: 'Ciência de Dados', icon: Database, badge: 'Ênfase 8' },
    { id: 'portugues', label: 'Português', icon: BookText, badge: 'Cesgranrio' },
    { id: 'ingles', label: 'Inglês', icon: Languages, badge: 'Decifrador' },
    { id: 'matriz', label: 'Simulador Matriz', icon: Calculator },
    { id: 'simulado', label: 'Simulado Transpetro', icon: HelpCircle },
    { id: 'flashcards', label: 'Flashcards', icon: Sparkles },
    { id: 'plano', label: 'Plano 30 Dias', icon: Calendar },
    { id: 'glossario', label: 'Glossário', icon: BookA }
  ];

  const handleSelectTab = (tab: TabType) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${
      isClean
        ? 'bg-white/90 border-slate-200 text-slate-800 shadow-sm'
        : 'bg-slate-950/90 border-slate-800 text-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand: Transpetro + Cesgranrio */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSelectTab('cienciadados')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition">
                <Ship className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-base font-extrabold tracking-tight flex items-center gap-1.5 ${
                  isClean ? 'text-slate-900' : 'text-white'
                }`}>
                  Transpetro
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${
                    isClean
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  }`}>
                    Cesgranrio
                  </span>
                </span>
                <span className={`text-[11px] block -mt-0.5 ${
                  isClean ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  Ênfase 8: Ciência de Dados
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav Tabs */}
          <nav className="hidden xl:flex items-center gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTab(tab.id)}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm font-bold'
                      : isClean
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[9px] px-1 py-0.2 rounded font-bold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : isClean
                        ? 'bg-slate-200 text-slate-700'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Medium screen tabs: simplified */}
          <nav className="hidden md:flex xl:hidden items-center gap-1">
            {tabs.slice(0, 4).map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTab(tab.id)}
                  className={`px-2 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition ${
                    isActive
                      ? 'bg-emerald-600 text-white font-bold'
                      : isClean
                      ? 'text-slate-600 hover:bg-slate-100'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons: Beginner Guide + Theme Toggle + Search */}
          <div className="flex items-center gap-2">
            {/* Beginner Guide Button */}
            {onOpenBeginnerGuide && (
              <button
                onClick={onOpenBeginnerGuide}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition ${
                  isClean
                    ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                    : 'bg-amber-950/30 text-amber-300 border-amber-500/40 hover:bg-amber-900/50'
                }`}
                title="Manual de sobrevivência para sua 1ª prova"
              >
                <Compass className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
                <span className="hidden sm:inline">1ª Vez? Guia Rápido</span>
              </button>
            )}

            {/* Clean vs Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition ${
                isClean
                  ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
              title={isClean ? 'Mudar para o Modo Escuro (Dark)' : 'Mudar para o Modo Clean (Claro)'}
            >
              {isClean ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Clean</span>
                </>
              )}
            </button>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs transition ${
                isClean
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-600'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
              title="Pesquisar em toda a plataforma"
            >
              <Search className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden sm:inline">Buscar...</span>
              <kbd className={`hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                isClean ? 'bg-white border-slate-300 text-slate-500' : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}>
                /
              </kbd>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-xl border ${
                isClean
                  ? 'bg-slate-100 border-slate-200 text-slate-700'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`xl:hidden border-b px-4 pt-2 pb-4 space-y-1 ${
          isClean ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleSelectTab(tab.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition ${
                  isActive
                    ? 'bg-emerald-600 text-white font-bold'
                    : isClean
                    ? 'text-slate-700 hover:bg-slate-100'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </div>
                {tab.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded ${
                    isClean ? 'bg-slate-200 text-slate-700' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
