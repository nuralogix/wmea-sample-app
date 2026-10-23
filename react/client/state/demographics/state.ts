import { proxy } from 'valtio';
import { DemographicsState } from './types';
import type { Profile } from '@nuralogix.ai/web-measurement-embedded-app';
import { loadSavedDemographics, saveDemographics } from '../../utils/localStorage';

// When true, every profile form field is optional: users can fill in any subset
// (e.g. only height and weight) and WMEA receives a partial profile
// (`partialProfile: true`) with only those values. When false (default), every
// field is required, as in earlier versions.
const ALLOW_PARTIAL_PROFILE = false;

// A saved partial profile isn't valid while partial profiles are off, so load it
// as skipped (not sent). Its values are kept so the profile form can still prefill them.
const loadInitialDemographics = (): Profile | null => {
  const saved = loadSavedDemographics();
  if (saved?.partialProfile === true && !saved.bypassProfile && !ALLOW_PARTIAL_PROFILE) {
    return { ...saved, bypassProfile: true };
  }
  return saved;
};

// No saved profile yet: skipped, with no answers. It used to carry placeholder values
// (age 0, sex male, ...) that "Skip profile" saved and the form later prefilled as answers.
const initial: Profile = loadInitialDemographics() || {
  bypassProfile: true,
  partialProfile: true,
};

const demographicsState: DemographicsState = proxy({
  demographics: initial,
  setDemographics: (demographics) => {
    demographicsState.demographics = demographics;
    saveDemographics(demographics);
  },
  allowPartialProfile: ALLOW_PARTIAL_PROFILE,
});

export default demographicsState;
