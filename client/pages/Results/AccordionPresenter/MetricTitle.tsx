import * as stylex from '@stylexjs/stylex';
import { DfxPointId } from '@nuralogix.ai/anura-online';
import { MetricIcon } from '../MetricIcon';

interface MetricTitleProps {
  dfxPointId: DfxPointId;
  children: React.ReactNode;
}

const styles = stylex.create({
  textWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: 500,
    fontSize: '1rem',
  },
});

const MetricTitle: React.FC<MetricTitleProps> = ({ dfxPointId, children }) => {
  return (
    <span {...stylex.props(styles.textWrapper)}>
      <MetricIcon dfxPointId={dfxPointId} />
      {children}
    </span>
  );
};

export default MetricTitle;
