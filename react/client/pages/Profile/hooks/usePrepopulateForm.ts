import { useEffect } from 'react';
import { loadSavedDemographics } from '../../../utils/localStorage';
import { FORM_FIELDS } from '../constants';
import type { FormState } from '../types';

/**
 * Helper to populate a form field from a demographic value if the field is empty
 */
const populateField = <K extends keyof FormState>(
  formState: FormState,
  fieldKey: K,
  value: number | undefined
): void => {
  // A partial profile may not have every field
  if (value === undefined) return;
  if (!formState[fieldKey]) {
    formState[fieldKey] = String(value) as FormState[K];
  }
};

/**
 * Older versions saved a placeholder profile (age, height and weight 0, sex male,
 * non-smoker, ...) when the profile was skipped before ever being filled in. Those
 * values were never entered by the user, so they must not be prefilled. No real
 * profile has age, height and weight all 0 (minimums are 13 years, 120 cm, 30 kg).
 */
const isLegacyPlaceholder = (saved: {
  bypassProfile: boolean;
  age?: number;
  heightCm?: number;
  weightKg?: number;
}): boolean =>
  saved.bypassProfile && saved.age === 0 && saved.heightCm === 0 && saved.weightKg === 0;

/**
 * Custom hook to prepopulate form state from saved demographics in localStorage on mount.
 * Only populates if there are actually saved demographics (not default values).
 * @param setFormState - State setter function to update the form state
 */
export const usePrepopulateForm = (
  setFormState: React.Dispatch<React.SetStateAction<FormState>>
) => {
  useEffect(() => {
    setFormState((prev) => {
      const saved = loadSavedDemographics();

      if (!saved || isLegacyPlaceholder(saved)) return prev;

      const next = { ...prev };

      populateField(next, FORM_FIELDS.AGE, saved.age);
      populateField(next, FORM_FIELDS.SEX, saved.sex);
      populateField(next, FORM_FIELDS.WEIGHT, saved.weightKg);
      populateField(next, FORM_FIELDS.HEIGHT_METRIC, saved.heightCm);
      populateField(next, FORM_FIELDS.SMOKING, saved.smoking);
      populateField(next, FORM_FIELDS.BLOOD_PRESSURE_MED, saved.bloodPressureMedication);
      populateField(next, FORM_FIELDS.DIABETES_STATUS, saved.diabetes);

      return next;
    });
  }, [setFormState]);
};
