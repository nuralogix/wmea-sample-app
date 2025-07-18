import React from 'react';
import type { Results } from '@nuralogix.ai/anura-online';
import type { DfxPointId } from '@nuralogix.ai/anura-online';

interface BasicPresenterProps {
  results: Results;
}

const BasicPresenter: React.FC<BasicPresenterProps> = ({ results }) => {
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
};

export default BasicPresenter;
