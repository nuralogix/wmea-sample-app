import { Heading, Tabs } from '@nuralogix.ai/web-ui';
import HeartRateCard from './Cards/HeartRateCard';

const CardsPresenter = () => {
  return (
    <>
      <Heading>Results</Heading>

      <Tabs
        tabs={[
          {
            label: 'Tab 1',
            content: <HeartRateCard />,
          },
          { label: 'Tab 2', content: <div>Content for Tab 2</div> },
          { label: 'Tab 3', content: <div>Content for Tab 3</div> },
        ]}
      />
    </>
  );
};

export default CardsPresenter;
