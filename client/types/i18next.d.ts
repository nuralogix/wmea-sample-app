import 'i18next';
import type en from '../language/strings.en.json';
import { ErrorCodes } from '@nuralogix.ai/web-measurement-embedded-app';

// extract string literals from enum
type ErrorCodesType = `${ErrorCodes}`;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof en;
    };
    returnNull: false;
    keySeparator: false;
  }

  // augment the signature of TFunction
  interface TFunction {
    (key: keyof typeof en | ErrorCodesType, ...args: any[]): string;
  }
}
