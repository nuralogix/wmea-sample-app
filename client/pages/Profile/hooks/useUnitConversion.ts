import { useEffect, useRef } from 'react';
import type { FormState } from '../types';
import { FORM_FIELDS, FORM_VALUES } from '../constants';

const LBS_PER_KG = 2.20462;

const toCm = (feet: number, inches: number) => Math.round(((feet * 12) + inches) * 2.54);
const toFeetInches = (cm: number) => {
  const totalInches = cm / 2.54;
  const f = Math.floor(totalInches / 12);
  const i = Math.round(totalInches - f * 12);
  return { f, i };
};

/**
 * Hook to synchronize height & weight when units change instead of clearing.
 * Converts whichever representation currently has data and mirrors the other.
 */
function useUnitConversion(
  formState: FormState,
  setFormState: (updater: (prev: FormState) => FormState) => void
) {
  const prevUnitRef = useRef(formState.unit);

  useEffect(() => {
    const prevUnit = prevUnitRef.current;
    const nextUnit = formState.unit;
    if (prevUnit === nextUnit) return;

    setFormState((prev) => {
      const next = { ...prev };

      const cm = parseFloat(prev[FORM_FIELDS.HEIGHT_METRIC]);
      const feet = parseFloat(prev[FORM_FIELDS.HEIGHT_FEET]);
      const inches = parseFloat(prev[FORM_FIELDS.HEIGHT_INCHES]);
      const weightNum = parseFloat(prev[FORM_FIELDS.WEIGHT]);

      const hasMetricHeight = !isNaN(cm) && cm > 0;
      const hasImperialHeight = !isNaN(feet) && feet > 0;

      if (nextUnit === FORM_VALUES.METRIC) {
        if (hasImperialHeight) {
          const newCm = toCm(feet, isNaN(inches) ? 0 : inches);
          next[FORM_FIELDS.HEIGHT_METRIC] = String(newCm);
        } else if (hasMetricHeight) {
          const { f, i } = toFeetInches(cm);
          next[FORM_FIELDS.HEIGHT_FEET] = String(f);
          next[FORM_FIELDS.HEIGHT_INCHES] = String(i);
        }
        if (!isNaN(weightNum) && prevUnit === FORM_VALUES.IMPERIAL) {
          next[FORM_FIELDS.WEIGHT] = (weightNum / LBS_PER_KG).toFixed(0);
        }
      } else if (nextUnit === FORM_VALUES.IMPERIAL) {
        if (hasMetricHeight) {
          const { f, i } = toFeetInches(cm);
          next[FORM_FIELDS.HEIGHT_FEET] = String(f);
          next[FORM_FIELDS.HEIGHT_INCHES] = String(i);
        } else if (hasImperialHeight) {
          const newCm = toCm(feet, isNaN(inches) ? 0 : inches);
          next[FORM_FIELDS.HEIGHT_METRIC] = String(newCm);
        }
        if (!isNaN(weightNum) && prevUnit === FORM_VALUES.METRIC) {
          next[FORM_FIELDS.WEIGHT] = Math.round(weightNum * LBS_PER_KG).toString();
        }
      }
      return next;
    });

    prevUnitRef.current = nextUnit;
  }, [formState.unit, setFormState]);
}

export default useUnitConversion;