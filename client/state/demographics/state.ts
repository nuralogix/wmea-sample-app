import { proxy } from 'valtio';
import { DemographicsState } from './types';
import { faceAttributeValue } from '@nuralogix.ai/web-measurement-embedded-app';
import { loadSavedDemographics, saveDemographics } from '../../utils/localStorage';

const { SEX_ASSIGNED_MALE_AT_BIRTH, SMOKER_FALSE, BLOOD_PRESSURE_MEDICATION_FALSE, DIABETES_NONE } =
  faceAttributeValue;

const initial = loadSavedDemographics() || {
  age: 0,
  height: 0,
  weight: 0,
  sex: SEX_ASSIGNED_MALE_AT_BIRTH,
  smoking: SMOKER_FALSE,
  bloodPressureMedication: BLOOD_PRESSURE_MEDICATION_FALSE,
  diabetes: DIABETES_NONE,
  bypassProfile: true,
};

const demographicsState: DemographicsState = proxy({
  demographics: initial,
  setDemographics: (demographics) => {
    demographicsState.demographics = demographics;
    saveDemographics(demographics);
  },
});

export default demographicsState;
