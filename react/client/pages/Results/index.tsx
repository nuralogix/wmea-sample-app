import state from '../../state';
import { useSnapshot } from 'valtio';
import ResultsError from './ResultsError';
import ResultsSummary from './ResultsSummary';
import type { Results } from './types';
import { mockPartialResults } from './mockResults';

const Results = () => {
  const measurementSnap = useSnapshot(state.measurement);
  const { results } = measurementSnap;

  // TODO: Remove mock - for testing partial results modal only
  const testResults = mockPartialResults as unknown as Results;

  // Show error if no results OR if only SNR point exists
  const pointKeys = results ? Object.keys(results.points) : [];
  const onlySnrExists = pointKeys.length === 1 && pointKeys[0] === 'SNR';

  // if (!results || onlySnrExists) {
  //   return <ResultsError />;
  // }

  return <ResultsSummary results={testResults} />;
};

export default Results;
