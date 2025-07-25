import { DfxPointId, Results } from '@nuralogix.ai/web-measurement-embedded-app';
import { BAND_COLOR_MAP } from './constants';
import { MetricIcon } from './MetricIcon';

type PointsType = Results['points'];
type DefinedPoint = NonNullable<PointsType['SNR']>;

const MetricCard = ({ point, dfxPointId }: { dfxPointId: DfxPointId; point: DefinedPoint }) => {
  const { info, value, dial } = point;
  const sections = dial.sections || [];
  const group = dial.group || 0;

  const cardColor =
    sections.length === 0 ? 'transparent' : BAND_COLOR_MAP[sections[group - 1].bandColor];
  const borderColor = cardColor === 'transparent' ? '#d1d5db' : cardColor;

  return (
    <div
      style={{
        backgroundColor: cardColor,
        border: `2px solid ${borderColor}`,
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        minHeight: '80px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ flexShrink: 0 }}>
          <MetricIcon dfxPointId={dfxPointId} />
        </div>
        <h3
          style={{
            margin: 0,
            fontSize: '16px',
            fontWeight: '600',
            color: '#1f2937',
            lineHeight: '1.3',
          }}
        >
          {info?.name ?? dfxPointId}
        </h3>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        <span
          style={{
            fontSize: '28px',
            fontWeight: '700',
            // color: color,
          }}
        >
          {value}
        </span>
        <span
          style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#6b7280',
          }}
        >
          {info?.unit}
        </span>
      </div>
      <div style={{ marginTop: 'auto' }}>
        <div
          style={{
            fontSize: '12px',
            color: '#6b7280',
            marginBottom: '4px',
          }}
        >
          
          
        </div>
      </div>
    </div>
  );
};
export default MetricCard;
