import React, { ReactNode, useEffect, useState } from 'react';
import { loadLanguage } from '../i18n';
import { SupportedLanguage } from '../types';
import { supportedLanguages } from './constants';

interface Props {
  children: ReactNode;
}

export const LanguageInitializer: React.FC<Props> = ({ children }) => {
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);

  useEffect(() => {
    const initializeLanguage = async () => {
      setIsLanguageLoaded(false);
      const browserLanguage = navigator.language.split('-')[0];
      if (supportedLanguages.includes(browserLanguage)) {
        const res = await loadLanguage(browserLanguage as SupportedLanguage);
        if (!res) {
          await loadLanguage('en');
        }
      } else {
        await loadLanguage('en');
      }

      setIsLanguageLoaded(true);
    };

    initializeLanguage();
  }, []);

  if (!isLanguageLoaded) {
    return <></>;
  }

  return <>{children}</>;
};
