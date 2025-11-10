import type { Profile } from '@nuralogix.ai/web-measurement-embedded-app';

export interface DemographicsState {
  demographics: Profile;
  setDemographics: (demographics: Profile) => void;
}
