import { DfxPointId, Results } from '@nuralogix.ai/web-measurement-embedded-app';
import { BAND_COLOR_MAP } from './constants';
import { MetricIcon } from './MetricIcon';

type PointsType = Results['points'];
type DefinedPoint = NonNullable<PointsType['SNR']>;

const MetricCard = ({ point, dfxPointId }: { dfxPointId: DfxPointId; point: DefinedPoint }) => {
  const { info, value, dial } = point;
  const sections = dial.sections || [];
  const group = dial.group || 0;

  // Get the band color, ensuring we handle missing bandColor properties
  let cardColor = 'transparent';
  let borderColor = '#d1d5db'; // Default gray border

  if (sections.length > 0 && group > 0 && group <= sections.length) {
    const section = sections[group - 1];
    if (section.bandColor && BAND_COLOR_MAP[section.bandColor]) {
      cardColor = BAND_COLOR_MAP[section.bandColor];
      borderColor = cardColor;
    }
  }

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
        <div></div>
      </div>
    </div>
  );
};
export default MetricCard;
