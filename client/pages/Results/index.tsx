import state from '../../state';
import { useSnapshot } from 'valtio';
import ResultsError from './ResultsError';
import ResultsSummary from './ResultsSummary';
import { mockResults } from './mockResults';

const Results = () => {
  const measurementSnap = useSnapshot(state.measurement);
  const { results } = measurementSnap;

  if (!mockResults) {
    return <ResultsError />;
  }

  return <ResultsSummary results={mockResults} />;
};

export default Results;
