import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { SupportedLanguage } from './types';
import Backend from 'i18next-http-backend';
import { getSavedLanguage } from './utils/localStorage';

const savedLanguage = getSavedLanguage();

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: savedLanguage,
    backend: {
      loadPath: '/language/strings.{{lng}}.json',
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

const loadLanguage = async (lang: SupportedLanguage) => {
  try {
    await i18n.changeLanguage(lang);
    return true;
  } catch {
    return false;
  }
};

export { loadLanguage };

export default i18n;
