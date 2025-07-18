import { getColorFromGroup } from '../getColorFromDialSections';
import * as stylex from '@stylexjs/stylex';
import { Accordion } from '@nuralogix.ai/web-ui';
import MetricRow from './MetricRow';
import type { Results } from '@nuralogix.ai/anura-online';
import { THEME_GROUPS } from '../constants';

interface AccordionPresenterProps {
  results: Results;
  // Optionally, you could pass in a grouping function or config for sections
}

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    maxWidth: '500px',
  },
});

const AccordionPresenter: React.FC<AccordionPresenterProps> = ({ results }) => {
  const { points } = results;
  return (
    <div {...stylex.props(styles.container)}>
      {Object.entries(THEME_GROUPS).map(([section, ids], sectionIdx) => {
        const metricIds = ids as DfxPointId[];
        // Only include ids that exist in points
        const presentIds = metricIds.filter((id) => points[id]);
        if (presentIds.length === 0) return null;

        return (
          <Accordion key={section} title={section} width="500px" defaultOpen={sectionIdx === 0}>
            {presentIds.map((id) => {
              const metric = points[id]!;
              // Defensive: check for dial and info
              const color =
                metric.dial && metric.dial.sections && typeof metric.dial.group === 'number'
                  ? getColorFromGroup(metric.dial.sections, metric.dial.group)
                  : undefined;
              return (
                <MetricRow
                  key={id}
                  dfxPointId={id}
                  label={metric.info?.name ?? id}
                  value={metric.info ? `${metric.value} ${metric.info.unit}` : metric.value}
                  fillColor={color ?? ''}
                />
              );
            })}
          </Accordion>
        );
      })}
    </div>
  );
};

export default AccordionPresenter;
