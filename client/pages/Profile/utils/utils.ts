import { Demographics } from '@nuralogix.ai/anura-web-core-sdk';
import { FormState } from '../types';
import { FORM_VALUES } from '../constants';

/**
 * Converts imperial height (feet + inches) to centimeters
 */
export const convertImperialHeightToCm = (feet: number, inches: number): number => {
  const totalInches = feet * 12 + inches;
  return Math.round(totalInches * 2.54);
};

/**
 * Converts imperial weight (pounds) to kilograms
 */
export const convertImperialWeightToKg = (pounds: number): number => {
  return Math.round(pounds * 0.453592);
};

/**
 * Gets height in centimeters from form state, converting from imperial if needed
 */
export const getHeightInCm = (formState: FormState): number => {
  if (formState.unit === FORM_VALUES.METRIC) {
    return parseInt(formState.heightMetric);
  } else {
    const feet = parseInt(formState.heightFeet);
    const inches = parseInt(formState.heightInches);
    return convertImperialHeightToCm(feet, inches);
  }
};

/**
 * Gets weight in kilograms from form state, converting from imperial if needed
 */
export const getWeightInKg = (formState: FormState): number => {
  const weight = parseInt(formState.weight);
  if (formState.unit === FORM_VALUES.METRIC) {
    return weight;
  } else {
    return convertImperialWeightToKg(weight);
  }
};

/**
 * Converts form state to SDK Demographics format
 * Form values are already aligned with SDK values, only need string-to-number conversion
 * Height and weight are always converted to metric (cm and kg)
 */
export const convertFormStateToSDKDemographics = (formState: FormState): Demographics => {
  const { age, sex, smoking, bloodPressureMed, diabetesStatus } = formState;

  return {
    age: parseInt(age),
    height: getHeightInCm(formState),
    weight: getWeightInKg(formState),
    sex: parseInt(sex), // Form value is already SDK value as string
    smoking: parseInt(smoking), // Form value is already SDK value as string
    bloodPressureMedication: parseInt(bloodPressureMed), // Form value is already SDK value as string
    diabetes: parseInt(diabetesStatus), // Form value is already SDK value as string
    unit: 'Metric', // TODO remove when sdk updated
  };
};
