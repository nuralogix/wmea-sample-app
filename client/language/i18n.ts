import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { SupportedLanguage } from '../types';
import Backend from 'i18next-fetch-backend';

const initI18n = (loadPath: string, selectedLanguage: SupportedLanguage) => {
  console.log('Initializing i18n with language:', loadPath, selectedLanguage);
  return i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      lng: selectedLanguage,
      fallbackLng: 'en',
      backend: {
        loadPath,
        requestOptions: {
          credentials: 'same-origin',
          mode: 'cors', 
          headers: {
            'Content-Type': 'application/json',
          },
        },
      },
      interpolation: {
        escapeValue: false, // React already escapes
      },
    });
};

export default initI18n;