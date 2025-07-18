import { proxy } from 'valtio';
import { MeasurementState } from './types';
import type { Results } from '@nuralogix.ai/anura-online';

const measurementState: MeasurementState = proxy({
  apiUrl: 'api.deepaffex.ai',
  results: null,
  setResults: (results: Results) => {
    measurementState.results = results;
  },
});

export default measurementState;
