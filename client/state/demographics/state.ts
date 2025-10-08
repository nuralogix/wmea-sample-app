import { proxy } from 'valtio';
import { DemographicsState } from './types';
import { faceAttributeValue } from '@nuralogix.ai/web-measurement-embedded-app';

const { SEX_ASSIGNED_MALE_AT_BIRTH, SMOKER_FALSE, BLOOD_PRESSURE_MEDICATION_FALSE, DIABETES_NONE } =
  faceAttributeValue;

const demographicsState: DemographicsState = proxy({
  demographics: {
    age: 0,
    height: 0,
    weight: 0,
    sex: SEX_ASSIGNED_MALE_AT_BIRTH,
    smoking: SMOKER_FALSE,
    bloodPressureMedication: BLOOD_PRESSURE_MEDICATION_FALSE,
    diabetes: DIABETES_NONE,
    bypassProfile: false,
  },
  setDemographics: (demographics) => {
    demographicsState.demographics = demographics;
  },
});

export default demographicsState;
