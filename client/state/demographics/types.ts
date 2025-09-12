import type { Profile } from '@nuralogix.ai/web-measurement-embedded-app';

export type Demographics = Omit<Profile, 'bypassProfile'>;

export interface DemographicsState {
  demographics: Demographics;
  setDemographics: (demographics: Demographics) => void;
}
