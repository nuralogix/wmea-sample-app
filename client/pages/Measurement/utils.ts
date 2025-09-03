import i18n from '../../i18n';
import { CODE_TO_I18N_KEY } from './constants';

export type AppletError =
  | { code?: keyof typeof CODE_TO_I18N_KEY; message?: string }
  | string
  | unknown;

export function getMessageFromKey(key: string): string {
  try {
    const t: any = i18n.t as unknown as (k: string) => string;
    return t(key);
  } catch {
    return key;
  }
}

export function getMessageFromCode(error: AppletError): string {
  if (typeof error === 'string') return error;
  if (error && typeof error === 'object') {
    const e = error as { code?: keyof typeof CODE_TO_I18N_KEY; message?: string };
    const key = e?.code ? CODE_TO_I18N_KEY[e.code] : undefined;
    if (key) return getMessageFromKey(key);
    return e?.message || 'An unexpected error occurred';
  }
  return 'An unexpected error occurred';
}
