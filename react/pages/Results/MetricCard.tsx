import * as stylex from '@stylexjs/stylex';
import { useSnapshot } from 'valtio';
import type { DfxPointId, Point } from '@nuralogix.ai/web-measurement-embedded-app';
import { Heading, Paragraph } from '@nuralogix.ai/web-ui';
import { BAND_COLOR_MAP } from './constants';
import { MetricIcon } from './MetricIcon';
import state from '../../state';

const styles = stylex.create({
  card: {
    borderRadius: 12,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    minHeight: 80,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    flexShrink: 0,
  },
  title: {
    margin: 0,
    lineHeight: 1.3,
    flex: 1,
  },
  valueSection: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 4,
  },
  value: {
    fontSize: 28,
    fontWeight: 700,
  },
  // Theme-aware colors for transparent cards
  titleLight: {
    color: '#1f2937',
  },
  titleDark: {
    color: '#f1f5f9',
  },
  titleTransparentLight: {
    color: '#111827', // Darker for better contrast on transparent
  },
  titleTransparentDark: {
    color: '#ffffff', // Pure white for transparent cards in dark mode
  },
  valueLight: {
    color: '#111827',
  },
  valueDark: {
    color: '#f8fafc',
  },
});

const MetricCard = ({ point, dfxPointId }: { dfxPointId: DfxPointId; point: Point }) => {
  const { info, value, dial } = point;
  const { theme } = useSnapshot(state.general);
  const isDark = theme === 'dark';
  const sections = dial.sections || [];
  const group = dial.group || 0;

  // Get the band color, ensuring we handle missing bandColor properties
  let cardColor = 'transparent';
  let borderColor = isDark ? '#374151' : '#d1d5db'; // Dark mode aware default border
  const isTransparent = cardColor === 'transparent';

  if (sections.length > 0 && group > 0 && group <= sections.length) {
    const section = sections[group - 1];
    if (section.bandColor && BAND_COLOR_MAP[section.bandColor]) {
      cardColor = BAND_COLOR_MAP[section.bandColor];
      borderColor = cardColor;
    }
  }

  // Determine which title style to use based on transparency and theme
  const titleStyle = isTransparent
    ? isDark
      ? styles.titleTransparentDark
      : styles.titleTransparentLight
    : isDark
      ? styles.titleDark
      : styles.titleLight;

  return (
    <div
      {...stylex.props(styles.card)}
      style={{
        backgroundColor: cardColor,
        border: `2px solid ${borderColor}`,
      }}
    >
      <div {...stylex.props(styles.header)}>
        <div {...stylex.props(styles.icon)}>
          <MetricIcon dfxPointId={dfxPointId} />
        </div>
        <div {...stylex.props(styles.title, titleStyle)}>
          <Heading>{info.name}</Heading>
        </div>
      </div>
      <div {...stylex.props(styles.valueSection)}>
        <span {...stylex.props(styles.value, isDark ? styles.valueDark : styles.valueLight)}>
          {value}
        </span>
        {info.unit && <Paragraph>{info.unit}</Paragraph>}
      </div>
    </div>
  );
};
export default MetricCard;
