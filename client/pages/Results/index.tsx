import state from '../../state';
import { useSnapshot } from 'valtio';
import ResultsError from './ResultsError';
import ResultsSummary from './ResultsSummary';

const Results = () => {
  const measurementSnap = useSnapshot(state.measurement);
  const { results } = measurementSnap;

  if (!results) {
    return <ResultsError />;
  }

  return <ResultsSummary results={results} />;
};

export default Results;
