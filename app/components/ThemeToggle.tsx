'use client';

import { useEffect, useState } from 'react';
import { themeConfig, getNextTheme } from '../config/theme';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>('system');

  useEffect(() => {
    // Get the initial theme from localStorage or default to system
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
    if (savedTheme !== 'system') {
      document.documentElement.setAttribute(
        'data-theme',
        themeConfig.themes[savedTheme as keyof typeof themeConfig.themes],
      );
    }
  }, []);

  const handleThemeChange = () => {
    const nextTheme = getNextTheme(theme);
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);

    if (nextTheme === 'system') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute(
        'data-theme',
        themeConfig.themes[nextTheme],
      );
    }
  };

  return (
    <div className="fixed top-4 right-4">
      <button
        className="btn btn-ghost gap-2 normal-case"
        onClick={handleThemeChange}
        title={`Switch to ${getNextTheme(theme)} theme`}
      >
        <div className="flex items-center gap-2">
          {theme === 'system' ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 15l-2 5-2-5"
                />
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M17.5 6.5a4 4 0 11-8 0"
                />
              </svg>
              <span>System</span>
            </>
          ) : theme === 'light' ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-current"
              >
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"
                />
              </svg>
              <span>Light</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <span>Dark</span>
            </>
          )}
        </div>
      </button>
    </div>
  );
}

