import type { Demographics } from '@nuralogix.ai/web-measurement-embedded-app';

export interface DemographicsState {
  demographics: Demographics;
  setDemographics: (demographics: Demographics) => void;
}
