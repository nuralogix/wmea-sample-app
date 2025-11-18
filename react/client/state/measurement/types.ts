import type { Results } from '@nuralogix.ai/web-measurement-embedded-app';

export interface MeasurementState {
  apiUrl: string;
  results: Results | null;
  setResults: (results: Results | null) => void;
}
