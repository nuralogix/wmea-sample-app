import type { SupportedLanguage } from '../types';
import type { Profile } from '@nuralogix.ai/web-measurement-embedded-app';

export const getSavedLanguage = (): SupportedLanguage | null => {
  const saved = localStorage.getItem('language');
  if (!saved || saved === 'null') return null;
  return saved as SupportedLanguage;
};

export const getSavedTheme = () => {
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
};

export const markPreviouslyAuthenticated = () => {
  localStorage.setItem('hasPreviouslyAuthenticated', '1');
};

export const getHasPreviouslyAuthenticated = (): boolean => {
  return localStorage.getItem('hasPreviouslyAuthenticated') === '1';
};

export const clearPreviousAuth = () => {
  localStorage.removeItem('hasPreviouslyAuthenticated');
};

const DEMO_KEY = 'wmea_demo_v1';

export const loadSavedDemographics = (): Profile | null => {
  const raw = localStorage.getItem(DEMO_KEY);
  if (!raw) return null;
  return JSON.parse(raw) as Profile;
};
export const saveDemographics = (profile: Profile) => {
  localStorage.setItem(DEMO_KEY, JSON.stringify(profile));
};
export const clearDemographics = () => {
  localStorage.removeItem(DEMO_KEY);
};
