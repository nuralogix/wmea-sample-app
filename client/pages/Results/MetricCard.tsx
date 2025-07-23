import { DfxPointId, Results } from '@nuralogix.ai/web-measurement-embedded-app';
import { getColorFromGroup } from './utils/getColorFromDialSections';
import { MetricIcon } from './MetricIcon';

const MetricCard = ({ results, dfxPointId }: { dfxPointId: DfxPointId; results: Results }) => {
  if (!results || !results.points) return null;
  const metric = results.points[dfxPointId];
  if (!metric) return null;
  const { info, value } = metric;

  const color = getColorFromGroup(metric.dial?.sections, metric.dial?.group);
  // const color = getStatusColor(status);
  console.log('MetricCard', { dfxPointId, metric });
  const background = getColorFromGroup(metric.dial?.sections, metric.dial?.group);
  return (
    <div
      style={{
        backgroundColor: background,
        border: `2px solid ${color}`,
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        minHeight: '160px',
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
          {/* TODO: Add range maybe */}
          {/* Normal range: {meta?.range ? `${meta.range.min} - ${meta.range.max}` : ''} */}
        </div>
      </div>
    </div>
  );
};
export default MetricCard;
