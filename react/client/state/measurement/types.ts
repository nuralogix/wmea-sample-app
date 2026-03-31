import type { Results } from '../../pages/Results/helpers';

export interface MeasurementState {
  apiUrl: string;
  results: Results | null;
  setResults: (results: Results | null) => void;
}
