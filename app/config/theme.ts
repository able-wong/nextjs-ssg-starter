/**
 * Theme configuration for the application.
 * It should match what in global.css.
 * Available themes could be found here:
 * https://daisyui.com/docs/themes/
 */
export const themeConfig = {
  themes: {
    system: '',
    light: 'corporate',
    dark: 'business',
  },
} as const;

// Type for theme names
export type ThemeName = keyof typeof themeConfig.themes;

// Helper to get the next theme in the cycle
export const getNextTheme = (currentTheme: string | null) => {
  const themeOrder = ['system', 'light', 'dark'] as const;
  const currentIndex = themeOrder.indexOf(currentTheme as any);
  const nextIndex = (currentIndex + 1) % themeOrder.length;
  return themeOrder[nextIndex];
};
