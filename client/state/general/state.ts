import { proxy } from 'valtio';
import { GeneralState } from './types';
import i18n from '../../i18n';
import { getSavedLanguage, getSavedTheme } from '../../utils/localStorage';

const savedTheme = getSavedTheme();
const savedLanguage = getSavedLanguage();

const generalState: GeneralState = proxy({
  theme: savedTheme,
  setTheme: (theme) => {
    generalState.theme = theme;
    localStorage.setItem('theme', theme);
  },
  language: savedLanguage,
  setLanguage: (language) => {
    generalState.language = language;
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  },
});

export default generalState;
