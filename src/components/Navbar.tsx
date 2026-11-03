import { TabType } from '../types';
import { useTheme } from '../context/ThemeContext';
import { STUDY_PLAN_DATA } from '../data/studyPlanData';
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
  Ship, 
  Sun, 
  Moon, 
  Compass, 
  Award,
  ZoomIn, 
  Check,
  ChevronDown
} from 'lucide-react';
import { useState, useRef } from 'react';

interface NavbarProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
  onOpenSearch: () => void;
  onOpenBeginnerGuide?: () => void;
  onOpenCertificate?: () => void;
  completionPercent?: number;
  currentSelectedDay?: number;
  onSelectDay?: (day: number) => void;
}

export function Navbar({ 
  currentTab, 
  onTabChange, 
  onOpenSearch, 
  onOpenBeginnerGuide,
  onOpenCertificate,
  completionPercent = 0,
  currentSelectedDay = 1,
  onSelectDay
}: NavbarProps) {
  const { isClean, toggleTheme, zoomLevel, setZoomLevel } = useTheme();
  const [showZoomMenu, setShowZoomMenu] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const tabs: { 
    id: TabType; 
    label: string; 
    shortLabel?: string;
    icon: typeof Database; 
    badge?: string;
    category: 'guia' | 'disciplinas' | 'pratica' | 'organizacao';
  }[] = [
    { id: 'guiadiario', label: 'Guia Diário (30 Dias)', shortLabel: 'Guia Diário', icon: Calendar, badge: 'Roteiro', category: 'guia' },
    { id: 'cienciadados', label: 'Ciência de Dados', shortLabel: 'Ciência de Dados', icon: Database, badge: 'Ênfase 8', category: 'disciplinas' },
    { id: 'portugues', label: 'Língua Portuguesa', shortLabel: 'Português', icon: BookText, badge: 'Cesgranrio', category: 'disciplinas' },
    { id: 'ingles', label: 'Língua Inglesa', shortLabel: 'Inglês', icon: Languages, badge: 'Decifrador', category: 'disciplinas' },
    { id: 'matriz', label: 'Simulador Matriz Confusão', shortLabel: 'Simulador Matriz', icon: Calculator, category: 'pratica' },
    { id: 'simulado', label: 'Simulado Cesgranrio', shortLabel: 'Simulado', icon: HelpCircle, badge: 'Inédito', category: 'pratica' },
    { id: 'flashcards', label: 'Flashcards & Macetes', shortLabel: 'Flashcards', icon: Sparkles, category: 'pratica' },
    { id: 'plano', label: 'Visão Geral 30 Dias', shortLabel: 'Plano Geral', icon: Calendar, category: 'organizacao' },
    { id: 'glossario', label: 'Glossário de Termos', shortLabel: 'Glossário', icon: BookA, category: 'organizacao' }
  ];

  const handleSelectTab = (tab: TabType) => {
    onTabChange(tab);
  };

  const handleSelectDayDropdown = (dayNum: number) => {
    onSelectDay?.(dayNum);
    onTabChange('guiadiario');
  };

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 select-none ${
      isClean
        ? 'bg-white/95 border-slate-200 text-slate-800 shadow-xs'
        : 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-md'
    }`}>
      {/* Tier 1: Main Header (Logo, Daily Selector, Certificate 80%, Zoom, Theme, Search) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-13 sm:h-14 gap-2">
          
          {/* Logo & Transpetro / Cesgranrio Badge */}
          <button
            onClick={() => handleSelectTab('guiadiario')}
            className="flex items-center gap-2 text-left group shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition">
              <Ship className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className={`text-sm sm:text-base font-extrabold tracking-tight ${
                  isClean ? 'text-slate-900' : 'text-white'
                }`}>
                  Transpetro
                </span>
                <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${
                  isClean
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                }`}>
                  Cesgranrio
                </span>
              </div>
              <span className={`text-[11px] block leading-none font-medium ${
                isClean ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Ênfase 8: Ciência de Dados
              </span>
            </div>
          </button>

          {/* Center: Dropdown Day Selector (Direct selector to study by day) */}
          <div className="hidden sm:flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Calendar className="w-3 h-3" /> Guia:
            </span>
            <div className="relative">
              <select
                value={currentSelectedDay}
                onChange={(e) => handleSelectDayDropdown(Number(e.target.value))}
                className={`text-xs font-bold py-1 pl-2 pr-6 rounded-lg border appearance-none cursor-pointer transition max-w-[180px] md:max-w-[260px] truncate ${
                  isClean ? 'bg-white border-slate-300 text-slate-800' : 'bg-slate-800 border-slate-700 text-slate-200'
                }`}
                title="Selecione o que estudar dia a dia e leve direto para a página"
              >
                {STUDY_PLAN_DATA.map((d) => (
                  <option key={d.day} value={d.day}>
                    Dia {d.day}: {d.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 absolute right-1.5 top-2 pointer-events-none text-emerald-500" />
            </div>
            <button
              onClick={() => handleSelectTab('guiadiario')}
              className="px-2 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold transition shrink-0"
              title="Abrir página de estudo do dia selecionado"
            >
              Ir
            </button>
          </div>

          {/* Right Action Icons: Certificate 80%, Zoom Scale, Beginner Guide, Theme Toggle, Search */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* 80% Certificate Button */}
            {onOpenCertificate && (
              <button
                onClick={onOpenCertificate}
                className={`flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-bold border transition ${
                  completionPercent >= 80
                    ? 'bg-gradient-to-r from-amber-400 to-emerald-500 text-slate-950 font-black shadow-sm animate-pulse'
                    : isClean
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                    : 'bg-emerald-950/40 text-emerald-300 border-emerald-700/50 hover:bg-emerald-900/50'
                }`}
                title="Certificado de Conclusão e Prontidão (Meta: 80%+ da preparação)"
              >
                <Award className={`w-3.5 h-3.5 ${completionPercent >= 80 ? 'text-slate-950' : 'text-amber-500'}`} />
                <span className="hidden sm:inline">Certificado</span>
                <span className={`text-[10px] px-1 py-0.2 rounded font-extrabold ${
                  completionPercent >= 80 ? 'bg-black/20 text-slate-950' : 'bg-emerald-600 text-white'
                }`}>
                  {completionPercent}%
                </span>
              </button>
            )}

            {/* Zoom / Layout Density Selector */}
            <div className="relative">
              <button
                onClick={() => setShowZoomMenu(!showZoomMenu)}
                className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${
                  isClean
                    ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300'
                }`}
                title="Ajustar tamanho da página / zoom"
              >
                <ZoomIn className="w-3.5 h-3.5 text-emerald-500" />
                <span className="hidden md:inline text-[11px]">
                  {zoomLevel === 'compact' ? 'Compacto' : zoomLevel === 'large' ? 'Amplo' : 'Padrão'}
                </span>
              </button>

              {showZoomMenu && (
                <div
                  className={`absolute right-0 mt-1 w-44 rounded-xl border shadow-xl py-1.5 z-50 transition ${
                    isClean ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-800 text-slate-100'
                  }`}
                >
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Tamanho da Página
                  </div>
                  <button
                    onClick={() => { setZoomLevel('compact'); setShowZoomMenu(false); }}
                    className={`w-full px-3 py-1.5 text-xs text-left flex items-center justify-between transition ${
                      zoomLevel === 'compact' ? 'font-bold text-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>Compacto (Ideal p/ Tela)</span>
                    {zoomLevel === 'compact' && <Check className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => { setZoomLevel('normal'); setShowZoomMenu(false); }}
                    className={`w-full px-3 py-1.5 text-xs text-left flex items-center justify-between transition ${
                      zoomLevel === 'normal' ? 'font-bold text-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>Padrão (100%)</span>
                    {zoomLevel === 'normal' && <Check className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => { setZoomLevel('large'); setShowZoomMenu(false); }}
                    className={`w-full px-3 py-1.5 text-xs text-left flex items-center justify-between transition ${
                      zoomLevel === 'large' ? 'font-bold text-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>Amplo / Texto Maior</span>
                    {zoomLevel === 'large' && <Check className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}
            </div>

            {/* Beginner Guide Button */}
            {onOpenBeginnerGuide && (
              <button
                onClick={onOpenBeginnerGuide}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold border transition ${
                  isClean
                    ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                    : 'bg-amber-950/30 text-amber-300 border-amber-500/40 hover:bg-amber-900/50'
                }`}
                title="Dicas e analogias para 1ª viagem em concurso"
              >
                <Compass className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden md:inline">1ª Vez? Dicas</span>
              </button>
            )}

            {/* Clean vs Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition ${
                isClean
                  ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
              title={isClean ? 'Mudar para o Modo Escuro (Dark)' : 'Mudar para o Modo Clean (Claro)'}
            >
              {isClean ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="hidden lg:inline">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden lg:inline">Clean</span>
                </>
              )}
            </button>

            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs transition ${
                isClean
                  ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
              title="Pesquisar (Ctrl+K ou /)"
            >
              <Search className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden xl:inline text-[11px]">Buscar</span>
              <kbd className={`hidden sm:inline-block text-[10px] font-mono px-1 py-0.2 rounded border ${
                isClean ? 'bg-white border-slate-200 text-slate-500' : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}>
                /
              </kbd>
            </button>

          </div>
        </div>
      </div>

      {/* Tier 2: Ergonomic Horizontal Tabs Bar */}
      <div className={`border-t transition-colors ${
        isClean ? 'border-slate-100 bg-slate-50/70' : 'border-slate-900 bg-slate-900/50'
      }`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-1 py-1.5 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {tabs.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              
              // Add subtle separators between categories
              const isGroupChange = idx > 0 && tabs[idx - 1].category !== tab.category;

              return (
                <div key={tab.id} className="flex items-center shrink-0">
                  {isGroupChange && (
                    <div className={`h-4 w-px mx-1.5 shrink-0 ${isClean ? 'bg-slate-200' : 'bg-slate-800'}`} />
                  )}
                  <button
                    onClick={() => handleSelectTab(tab.id)}
                    className={`whitespace-nowrap shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-150 ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-xs font-bold'
                        : isClean
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/80 border border-transparent hover:border-slate-700'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-emerald-500'}`} />
                    <span className="shrink-0">{tab.label}</span>
                    {tab.badge && (
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-bold shrink-0 ${
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
