import React from 'react';
import * as stylex from '@stylexjs/stylex';
import MetricTitle from './MetricTitle';
import ValueBadge from './ValueBadge';
import { DfxPointId } from '@nuralogix.ai/anura-online';

const styles = stylex.create({
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    width: '100%',
    marginBottom: '16px',
  },
});

interface MetricRowProps {
  dfxPointId: DfxPointId;
  label: React.ReactNode;
  value: string;
  fillColor: string;
}

const MetricRow: React.FC<MetricRowProps> = ({ dfxPointId, label, value, fillColor }) => (
  <div {...stylex.props(styles.contentWrapper)}>
    <MetricTitle dfxPointId={dfxPointId}>{label}</MetricTitle>
    <ValueBadge value={value} fillColor={fillColor} />
  </div>
);

export default MetricRow;
