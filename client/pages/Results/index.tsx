import React from 'react';
import state from '../../state';
import { useSnapshot } from 'valtio';
import type { DfxPointId } from '@nuralogix.ai/anura-online';
import CardsPresenter from './CardsPresenter/CardsPresenter';
import AccordionPresenter from './AccordionPresenter/AccordionPresenter';

const Results = () => {
  const measurementSnap = useSnapshot(state.measurement);
  const { results } = measurementSnap;
  if (results) {
    const { points } = results;
    const pointList = Object.keys(points) as DfxPointId[];
    return (
      <div>
        <div>Final Results</div>
        <div>
          {pointList.map((point) => {
            const signal = points[point]!;
            const { value, info } = signal;
            const { name, unit } = info;
            return (
              <div key={point}>
                <div>
                  {point} - {name}
                </div>
                <div>
                  {value} {unit}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    {
      /* return <CardsPresenter />; */
    }
    return <AccordionPresenter />;
  }
};

export default Results;
