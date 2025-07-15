import type { Demographics } from '@nuralogix.ai/anura-online';

export interface DemographicsState {
  demographics: Demographics;
  setDemographics: (demographics: Demographics) => void;
}
