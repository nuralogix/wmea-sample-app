import { useSnapshot } from 'valtio';
import { useTranslation } from 'react-i18next';
import state from '../../../state';
import type en from '../../../language/strings.en.json';

export type TranslationKey = keyof typeof en;

/**
 * Partial-profile helpers for form fields.
 * - `isPartial`: whether the partial profile setting is on (every field optional)
 * - `fieldLabel(key)`: the translated label, marked "(optional)" when partial
 */
export const usePartialProfile = () => {
  const { t } = useTranslation();
  const { allowPartialProfile } = useSnapshot(state.demographics);

  const fieldLabel = (key: TranslationKey) =>
    allowPartialProfile ? t('PROFILE_FORM_OPTIONAL_LABEL', { label: t(key) }) : t(key);

  return { isPartial: allowPartialProfile, fieldLabel };
};
