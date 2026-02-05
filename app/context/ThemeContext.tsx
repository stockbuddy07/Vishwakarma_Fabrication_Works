'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    // Check if localStorage has saved theme
    const savedTheme = localStorage.getItem('theme-mode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
    setMounted(true);
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme-mode', darkMode ? 'dark' : 'light');
      // Force update across all tabs/windows
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'theme-mode',
        newValue: darkMode ? 'dark' : 'light',
        url: window.location.href,
      }));
    }
  }, [darkMode, mounted]);

  // Listen for changes from other tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme-mode' && e.newValue) {
        setDarkMode(e.newValue === 'dark');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
