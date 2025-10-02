import state from '../../state';
import { useSnapshot } from 'valtio';
import ResultsError from './ResultsError';
import ResultsSummary from './ResultsSummary';

const Results = () => {
  const measurementSnap = useSnapshot(state.measurement);
  const { results } = measurementSnap;

  // Show error if no results OR if only SNR point exists
  const pointKeys = results ? Object.keys(results.points) : [];
  const onlySnrExists = pointKeys.length === 1 && pointKeys[0] === 'SNR';

  if (!results || onlySnrExists) {
    return <ResultsError />;
  }

  const mutableResults = JSON.parse(JSON.stringify(results));
  return <ResultsSummary results={mutableResults} />;
};

export default Results;
