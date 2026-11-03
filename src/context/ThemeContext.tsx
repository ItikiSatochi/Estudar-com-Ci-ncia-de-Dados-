import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'dark' | 'clean';
export type ZoomLevel = 'compact' | 'normal' | 'large';

interface ThemeContextType {
  theme: ThemeMode;
  isClean: boolean;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
  zoomLevel: ZoomLevel;
  setZoomLevel: (level: ZoomLevel) => void;
  cycleZoom: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('dataconcurso_theme');
      return saved === 'clean' ? 'clean' : 'dark';
    } catch {
      return 'dark';
    }
  });

  const [zoomLevel, setZoomLevelState] = useState<ZoomLevel>(() => {
    try {
      const saved = localStorage.getItem('dataconcurso_zoom');
      return (saved as ZoomLevel) || 'compact'; // Default to compact so it fits comfortably on any screen!
    } catch {
      return 'compact';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('dataconcurso_theme', theme);
    } catch (e) {
      console.error(e);
    }

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('clean');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('clean');
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem('dataconcurso_zoom', zoomLevel);
    } catch (e) {
      console.error(e);
    }

    // Apply scaling smoothly to the page
    const root = document.documentElement;
    root.classList.remove('zoom-compact', 'zoom-normal', 'zoom-large');
    root.classList.add(`zoom-${zoomLevel}`);

    if (zoomLevel === 'compact') {
      root.style.fontSize = '14px';
    } else if (zoomLevel === 'large') {
      root.style.fontSize = '17px';
    } else {
      root.style.fontSize = '15px';
    }
  }, [zoomLevel]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'clean' : 'dark'));
  };

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
  };

  const setZoomLevel = (level: ZoomLevel) => {
    setZoomLevelState(level);
  };

  const cycleZoom = () => {
    setZoomLevelState((prev) => {
      if (prev === 'compact') return 'normal';
      if (prev === 'normal') return 'large';
      return 'compact';
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isClean: theme === 'clean',
        toggleTheme,
        setTheme,
        zoomLevel,
        setZoomLevel,
        cycleZoom
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
