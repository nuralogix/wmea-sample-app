import type { Results } from '@nuralogix.ai/anura-online';

export interface MeasurementState {
  apiUrl: string;
  results: Results | null;
  setResults: (results: Results) => void;
}
