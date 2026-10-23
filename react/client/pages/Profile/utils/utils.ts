import { FormState } from '../types';
import { FORM_VALUES } from '../constants';
import type { PartialProfile, Profile } from '@nuralogix.ai/web-measurement-embedded-app';
import demographicsState from '../../../state/demographics/state';

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

const isBlank = (value: string): boolean => value.trim() === '';

/**
 * Converts form state to a partial profile: blank fields are left out so only
 * the values the user entered are sent.
 */
const convertFormStateToPartialProfile = (formState: FormState): PartialProfile => {
  const { unit, heightMetric, heightFeet, heightInches, weight, age, sex } = formState;
  const { smoking, bloodPressureMed, diabetesStatus } = formState;
  const hasHeight = unit === FORM_VALUES.METRIC ? !isBlank(heightMetric) : !isBlank(heightFeet);
  const toNumber = (value: string) => (isBlank(value) ? undefined : parseInt(value));

  const profile: PartialProfile = { bypassProfile: false, partialProfile: true };
  if (hasHeight) {
    profile.heightCm = getHeightInCm({
      ...formState,
      // Feet without inches means an exact number of feet
      heightInches: isBlank(heightInches) ? '0' : heightInches,
    });
  }
  if (!isBlank(weight)) profile.weightKg = getWeightInKg(formState);
  const optionalFields = {
    age: toNumber(age),
    sex: toNumber(sex),
    smoking: toNumber(smoking),
    bloodPressureMedication: toNumber(bloodPressureMed),
    diabetes: toNumber(diabetesStatus),
  };
  for (const [key, value] of Object.entries(optionalFields)) {
    if (value !== undefined) profile[key as keyof typeof optionalFields] = value;
  }
  return profile;
};

/**
 * Converts form state to SDK Profile format
 * Form values are already aligned with SDK values, only need string-to-number conversion
 * Height and weight are always converted to metric (cm and kg)
 * When partial profiles are allowed (the partial profile setting), blank fields are omitted.
 */
export const convertFormStateToSDKDemographics = (formState: FormState): Profile => {
  if (demographicsState.allowPartialProfile) {
    return convertFormStateToPartialProfile(formState);
  }

  const { age, sex, smoking, bloodPressureMed, diabetesStatus } = formState;

  return {
    age: parseInt(age),
    heightCm: getHeightInCm(formState),
    weightKg: getWeightInKg(formState),
    sex: parseInt(sex), // Form value is already SDK value as string
    smoking: parseInt(smoking), // Form value is already SDK value as string
    bloodPressureMedication: parseInt(bloodPressureMed), // Form value is already SDK value as string
    diabetes: parseInt(diabetesStatus), // Form value is already SDK value as string
    bypassProfile: false,
  };
};
