import { useEffect, useState } from 'react';
import { SupportedLanguage } from '../types';
import { supportedLanguages } from '../language/constants';
import initI18n from '../language/i18n';
import state from '../state';

/**
 * Determines the best supported language from browser settings.
 * Tries exact match (pt-BR) → base language (pt) → fallback to English.
 */
const getDefaultLanguage = (): SupportedLanguage => {
  const browserLang = navigator.language;

  if (supportedLanguages.includes(browserLang)) {
    return browserLang as SupportedLanguage;
  }

  const baseLang = browserLang.split('-')[0];
  if (supportedLanguages.includes(baseLang)) {
    return baseLang as SupportedLanguage;
  }

  return 'en';
};

/**
 * Initializes i18n with the best available language.
 * Priority: validated user preference → browser language → English.
 */
export const useInitializeLanguage = (): boolean => {
  const [isLangInitialized, setIsLangInitialized] = useState(false);

  useEffect(() => {
    const language = state.general.language;
    const lng = language && supportedLanguages.includes(language) ? language : getDefaultLanguage();

    initI18n(`/language/strings.{{lng}}.json`, lng).then(() => {
      setIsLangInitialized(true);
      state.general.setLanguage(lng);
    });
  }, []);

  return isLangInitialized;
};

export default useInitializeLanguage;
