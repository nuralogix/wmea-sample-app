import { Dial, Paragraph, PulseRate, ResultsCard } from '@nuralogix.ai/web-ui';
import React from 'react';

const HeartRateCard: React.FC = () => (
  <ResultsCard
    dial={
      <Dial
        group={2}
        subGroup={4}
        metadata={[
          { groupSize: 10, bandColors: 'YELLOW', label: 0 },
          { groupSize: 30, bandColors: 'GREEN', label: 60 },
          { groupSize: 11, bandColors: 'YELLOW', label: 100 },
        ]}
        value="65"
        unit="bpm"
      />
    }
    icon={<PulseRate width="24px" height="24px" />}
    headerText="Heart Rate"
    width={400}
    infoModalContent={
      <Paragraph>
        A range of 60 to 100 beats per minute (bpm) is considered a normal range for an adult's
        resting heart rate.
      </Paragraph>
    }
  />
);

export default HeartRateCard;
