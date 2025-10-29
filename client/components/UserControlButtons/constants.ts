import type { SupportedLanguage } from '../../types';

export const LANGUAGE_OPTIONS = [
  { label: 'LANGUAGE_EN' as const, value: 'en' as SupportedLanguage },
  { label: 'LANGUAGE_FR' as const, value: 'fr' as SupportedLanguage },
  { label: 'LANGUAGE_JA' as const, value: 'ja' as SupportedLanguage },
  { label: 'LANGUAGE_CN' as const, value: 'cn' as SupportedLanguage },
  { label: 'LANGUAGE_ES' as const, value: 'es' as SupportedLanguage },
  { label: 'LANGUAGE_PT' as const, value: 'pt' as SupportedLanguage },
  { label: 'LANGUAGE_IT' as const, value: 'it' as SupportedLanguage },
  { label: 'LANGUAGE_DE' as const, value: 'de' as SupportedLanguage },
  { label: 'LANGUAGE_BR' as const, value: 'br' as SupportedLanguage },
] as const;
