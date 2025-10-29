import { proxy } from 'valtio';
import { MeasurementState } from './types';
import type { Results } from '@nuralogix.ai/web-measurement-embedded-app';

const measurementState: MeasurementState = proxy({
  apiUrl: 'api.deepaffex.ai',
  results: null,
  setResults: (results: Results | null) => {
    measurementState.results = results;
  },
});

export default measurementState;
