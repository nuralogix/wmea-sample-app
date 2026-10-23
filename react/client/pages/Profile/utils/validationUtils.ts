import {
  FORM_VALUES,
  AGE_MIN,
  AGE_MAX,
  HEIGHT_METRIC_MIN,
  HEIGHT_METRIC_MAX,
  HEIGHT_FEET_MIN,
  HEIGHT_FEET_MAX,
  HEIGHT_INCHES_MIN,
  HEIGHT_INCHES_MAX,
  WEIGHT_METRIC_MIN,
  WEIGHT_METRIC_MAX,
  WEIGHT_IMPERIAL_MIN,
  WEIGHT_IMPERIAL_MAX,
  BMI_MIN,
  BMI_MAX,
} from '../constants';
import { FormState } from '../types';
import { getHeightInCm, getWeightInKg } from './utils';
import demographicsState from '../../../state/demographics/state';

/** When partial profiles are allowed, every field is optional (empty is valid) */
export const isPartialProfileAllowed = (): boolean => demographicsState.allowPartialProfile;

const isBlank = (value: string): boolean => value.replace(/\s/g, '') === '';

// Generic numeric validation utility
const isNumericValueInvalid = (value: string, min: number, max: number): boolean => {
  // Strip spaces before validation to avoid showing errors for spaces
  const cleanValue = value.replace(/\s/g, '');
  if (!cleanValue) return !isPartialProfileAllowed();
  const numValue = parseInt(cleanValue);
  return isNaN(numValue) || cleanValue !== numValue.toString() || numValue < min || numValue > max;
};

export const isAgeInvalid = (age: string): boolean => {
  return isNumericValueInvalid(age, AGE_MIN, AGE_MAX);
};

export const isHeightMetricInvalid = (height: string): boolean => {
  return isNumericValueInvalid(height, HEIGHT_METRIC_MIN, HEIGHT_METRIC_MAX);
};

export const isHeightFeetInvalid = (feet: string): boolean => {
  return isNumericValueInvalid(feet, HEIGHT_FEET_MIN, HEIGHT_FEET_MAX);
};

export const isHeightInchesInvalid = (inches: string): boolean => {
  return isNumericValueInvalid(inches, HEIGHT_INCHES_MIN, HEIGHT_INCHES_MAX);
};

export const isWeightMetricInvalid = (weight: string): boolean => {
  return isNumericValueInvalid(weight, WEIGHT_METRIC_MIN, WEIGHT_METRIC_MAX);
};

export const isWeightImperialInvalid = (weight: string): boolean => {
  return isNumericValueInvalid(weight, WEIGHT_IMPERIAL_MIN, WEIGHT_IMPERIAL_MAX);
};

export const isHeightInvalid = (formState: FormState): boolean => {
  if (formState.unit === FORM_VALUES.METRIC) {
    return isHeightMetricInvalid(formState.heightMetric);
  } else {
    // Inches on their own don't make a height (partial profiles only; otherwise feet is required)
    if (isBlank(formState.heightFeet) && !isBlank(formState.heightInches)) return true;
    return (
      isHeightFeetInvalid(formState.heightFeet) || isHeightInchesInvalid(formState.heightInches)
    );
  }
};

export const hasHeight = (formState: FormState): boolean =>
  formState.unit === FORM_VALUES.METRIC
    ? !isBlank(formState.heightMetric)
    : !isBlank(formState.heightFeet);

export const hasWeight = (formState: FormState): boolean => !isBlank(formState.weight);

export const isWeightInvalid = (formState: FormState): boolean => {
  if (formState.unit === FORM_VALUES.METRIC) {
    return isWeightMetricInvalid(formState.weight);
  } else {
    return isWeightImperialInvalid(formState.weight);
  }
};

// BMI calculation utility - assumes valid height and weight
const calculateBMI = (formState: FormState): number => {
  const heightInCm = getHeightInCm(formState);
  const weightInKg = getWeightInKg(formState);

  const heightInM = heightInCm / 100;
  return weightInKg / (heightInM * heightInM);
};

// BMI validation utility
export const showBMIError = (formState: FormState): boolean => {
  // Don't show BMI error if height/weight are missing or invalid
  if (
    !hasHeight(formState) ||
    !hasWeight(formState) ||
    isHeightInvalid(formState) ||
    isWeightInvalid(formState)
  ) {
    return false;
  }

  const bmi = calculateBMI(formState);
  return bmi < BMI_MIN || bmi > BMI_MAX;
};

// A selection (radio) field is valid if answered, or if partial profiles are allowed
const isSelectionValid = (value: string): boolean => value !== '' || isPartialProfileAllowed();

// Step-specific validation functions
export const isSexAndAgeValid = (formState: FormState): boolean => {
  return isSelectionValid(formState.sex) && !isAgeInvalid(formState.age);
};

export const isProfileInfoValid = (formState: FormState): boolean => {
  return (
    !isHeightInvalid(formState) &&
    !isWeightInvalid(formState) &&
    !showBMIError(formState) &&
    isSexAndAgeValid(formState)
  );
};

export const isMedicalQuestionnaireValid = (formState: FormState): boolean => {
  const { smoking, bloodPressureMed, diabetesStatus } = formState;

  return (
    isSelectionValid(smoking) && isSelectionValid(bloodPressureMed) && isSelectionValid(diabetesStatus)
  );
};

export const isFormValid = (formState: FormState): boolean => {
  return isProfileInfoValid(formState) && isMedicalQuestionnaireValid(formState);
};
