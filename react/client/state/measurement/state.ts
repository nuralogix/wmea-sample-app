import { proxy } from 'valtio';
import { MeasurementState } from './types';
import type { Results } from '../../pages/Results/helpers';

const measurementState: MeasurementState = proxy({
  apiUrl: 'api.na-east.deepaffex.ai',
  results: null,
  setResults: (results: Results | null) => {
    measurementState.results = results;
  },
});

export default measurementState;
