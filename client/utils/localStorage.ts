import type { SupportedLanguage } from '../types';

export const getSavedLanguage = (): SupportedLanguage => {
  return localStorage.getItem('language') === 'fr' ? 'fr' : 'en';
};

export const getSavedTheme = () => {
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
};
