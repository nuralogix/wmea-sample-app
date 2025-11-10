import { SupportedLanguage } from '../../types';

type Theme = 'light' | 'dark';

export type GeneralState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: SupportedLanguage | null;
  setLanguage: (language: SupportedLanguage | null) => void;
};
