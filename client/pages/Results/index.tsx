import state from '../../state';
import { useSnapshot } from 'valtio';
import { mockResults } from './mockResults';
import ResultsError from './ResultsError';
import ResultsSummary from './ResultsSummary';

const Results = () => {
  const measurementSnap = useSnapshot(state.measurement);
  const { results } = measurementSnap;

  // Choose which results to show (real or mock)
  const data = results || mockResults;

  if (!data) {
    return <ResultsError />;
  }

  return <ResultsSummary results={data} />;
};

export default Results;
