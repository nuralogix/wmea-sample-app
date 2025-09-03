import { SupportedLanguage } from '../../types';

type Theme = 'light' | 'dark';

export type GeneralState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
};
