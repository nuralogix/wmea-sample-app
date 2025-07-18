import state from '../../state';
import { useSnapshot } from 'valtio';

import AccordionPresenter from './AccordionPresenter/AccordionPresenter';
import { mockResults } from './mockResults';
import ResultsError from './ResultsError';
import CardsPresenter from './CardsPresenter/CardsPresenter';
import BasicPresenter from './BasicPresenter/BasicPresenter';
import { useState } from 'react';
import { RadioButtonGroup } from '@nuralogix.ai/web-ui';

const Results = () => {
  const measurementSnap = useSnapshot(state.measurement);
  const { results } = measurementSnap;
  const [view, setView] = useState<'accordion' | 'cards' | 'basic'>('cards');

  // Handler for RadioButtonGroup change
  const handleViewChange = (value: string) => {
    setView(value as 'accordion' | 'cards');
  };

  // Choose which results to show (real or mock)
  const data = results || mockResults;

  const options = [
    { value: 'accordion', label: 'Accordion View' },
    { value: 'cards', label: 'Cards View' },
    { value: 'basic', label: 'Basic View' },
  ];

  if (!data) {
    return <ResultsError />;
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <RadioButtonGroup
          options={options}
          value={view}
          onChange={handleViewChange}
          direction="row"
        />
      </div>
      {view === 'accordion' && <AccordionPresenter results={data} />}
      {view === 'cards' && <CardsPresenter results={data} />}
      {view === 'basic' && <BasicPresenter results={data} />}
    </div>
  );
};

export default Results;
