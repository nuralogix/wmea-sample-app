import { FORM_VALUES, WIZARD_STEPS, FORM_FIELDS } from './constants';

export type Unit = typeof FORM_VALUES.METRIC | typeof FORM_VALUES.IMPERIAL;

export type SmokingStatus = typeof FORM_VALUES.SMOKER_TRUE | typeof FORM_VALUES.SMOKER_FALSE | '';

export type BloodPressureMedStatus =
  | typeof FORM_VALUES.BLOOD_PRESSURE_MEDICATION_TRUE
  | typeof FORM_VALUES.BLOOD_PRESSURE_MEDICATION_FALSE
  | '';

export type Sex = typeof FORM_VALUES.MALE | typeof FORM_VALUES.FEMALE | '';

export type DiabetesStatus =
  | typeof FORM_VALUES.DIABETES_TYPE1
  | typeof FORM_VALUES.DIABETES_TYPE2
  | typeof FORM_VALUES.DIABETES_NONE
  | '';

export type WizardStep = typeof WIZARD_STEPS.PROFILE | typeof WIZARD_STEPS.MEDICAL;

export interface FormState {
  [FORM_FIELDS.UNIT]: Unit;
  [FORM_FIELDS.HEIGHT_METRIC]: string;
  [FORM_FIELDS.HEIGHT_FEET]: string; // For imperial only
  [FORM_FIELDS.HEIGHT_INCHES]: string; // For imperial only
  [FORM_FIELDS.WEIGHT]: string;
  [FORM_FIELDS.AGE]: string;
  [FORM_FIELDS.SEX]: Sex;
  [FORM_FIELDS.SMOKING]: SmokingStatus;
  [FORM_FIELDS.BLOOD_PRESSURE_MED]: BloodPressureMedStatus;
  [FORM_FIELDS.DIABETES_STATUS]: DiabetesStatus;
}
