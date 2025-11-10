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
  value: number
): void => {
  if (!formState[fieldKey]) {
    formState[fieldKey] = String(value) as FormState[K];
  }
};

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

      if (!saved) return prev;

      const next = { ...prev };

      populateField(next, FORM_FIELDS.AGE, saved.age);
      populateField(next, FORM_FIELDS.SEX, saved.sex);
      populateField(next, FORM_FIELDS.WEIGHT, saved.weight);
      populateField(next, FORM_FIELDS.HEIGHT_METRIC, saved.height);
      populateField(next, FORM_FIELDS.SMOKING, saved.smoking);
      populateField(next, FORM_FIELDS.BLOOD_PRESSURE_MED, saved.bloodPressureMedication);
      populateField(next, FORM_FIELDS.DIABETES_STATUS, saved.diabetes);

      return next;
    });
  }, [setFormState]);
};
