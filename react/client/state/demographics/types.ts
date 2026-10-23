import type { Profile } from '@nuralogix.ai/web-measurement-embedded-app';

export interface DemographicsState {
  demographics: Profile;
  setDemographics: (demographics: Profile) => void;
  /** When true every profile form field is optional and the form submits a partial
   *  profile (`partialProfile: true`) with only the fields entered. Set in state.ts. */
  allowPartialProfile: boolean;
}
