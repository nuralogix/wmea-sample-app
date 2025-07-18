import state from '../../state';
import { useSnapshot } from 'valtio';
import AccordionPresenter from './AccordionPresenter/AccordionPresenter';
import { mockResults } from './mockResults';
import ResultsError from './ResultsError';

const Results = () => {
  const measurementSnap = useSnapshot(state.measurement);
  const { results } = measurementSnap;
  if (results) {
    {
      /* return <CardsPresenter results={results} />; */
    }
    return <AccordionPresenter results={results} />;
  } else {
    return <ResultsError />;
    // return <AccordionPresenter results={mockResults} />;
  }
};

export default Results;
