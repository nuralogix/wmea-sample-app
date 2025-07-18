import type { DfxPointId } from '@nuralogix.ai/anura-online';

// Define Point and Points interfaces locally if not exported from the package
interface Point {
  channel: string;
  notes: any[]; // Replace with RealtimeResultNotes[] if available
  value: string;
  dial: {
    sections: any[]; // Replace with DialSection[] if available
    group: number;
    subGroup: number;
  };
  meta: any; // Replace with IMeta if available
  info: {
    name: string;
    unit: string;
  };
}
type Points = {
  [x in DfxPointId]?: Point;
};

interface AccordionPresenterProps {
  points: Points;
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

// Example: group metrics by a simple theme map (customize as needed)
const THEME_GROUPS: { [section: string]: DfxPointId[] } = {
  'Cardiovascular Health': ['BP_CVD', 'BP_HEART_ATTACK', 'BP_STROKE'],
  Vitals: ['HR_BPM', 'BR_BPM', 'BP_SYSTOLIC', 'BP_DIASTOLIC'],
  'Metabolic Health': ['BMI_CALC', 'WAIST_TO_HEIGHT', 'ABSI'],
  'Diabetes & Glucose': ['DBT_RISK_PROB', 'MFBG_RISK_PROB', 'HBA1C_RISK_PROB'],
  'Liver & Lipids': ['FLD_RISK_PROB', 'HDLTC_RISK_PROB', 'TG_RISK_PROB'],
  'Mental & Overall Health': ['MENTAL_SCORE', 'HEALTH_SCORE', 'VITAL_SCORE'],
};

import { getColorFromGroup } from '../getColorFromDialSections';
import * as stylex from '@stylexjs/stylex';
import { Accordion } from '@nuralogix.ai/web-ui';
import MetricRow from './MetricRow';

const AccordionPresenter: React.FC<AccordionPresenterProps> = ({ points }) => {
  return (
    <div {...stylex.props(styles.container)}>
      {Object.entries(THEME_GROUPS).map(([section, ids], sectionIdx) => {
        // Only include ids that exist in points
        const presentIds = ids.filter((id) => points[id]);
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

// Minimal mock data for testing/demo
export const mockPoints: Points = {
  BP_CVD: {
    channel: '',
    notes: [],
    value: '5',
    dial: { sections: [], group: 1, subGroup: 0 },
    meta: {},
    info: { name: 'CVD Risk', unit: '%' },
  },
  BP_HEART_ATTACK: {
    channel: '',
    notes: [],
    value: '2',
    dial: { sections: [], group: 1, subGroup: 0 },
    meta: {},
    info: { name: 'Heart Attack Risk', unit: '%' },
  },
  BP_STROKE: {
    channel: '',
    notes: [],
    value: '1',
    dial: { sections: [], group: 1, subGroup: 0 },
    meta: {},
    info: { name: 'Stroke Risk', unit: '%' },
  },
  HR_BPM: {
    channel: '',
    notes: [],
    value: '78',
    dial: { sections: [], group: 2, subGroup: 0 },
    meta: {},
    info: { name: 'Heart Rate', unit: 'bpm' },
  },
  BR_BPM: {
    channel: '',
    notes: [],
    value: '16',
    dial: { sections: [], group: 2, subGroup: 0 },
    meta: {},
    info: { name: 'Breathing Rate', unit: 'bpm' },
  },
  BP_SYSTOLIC: {
    channel: '',
    notes: [],
    value: '120',
    dial: { sections: [], group: 2, subGroup: 0 },
    meta: {},
    info: { name: 'Systolic BP', unit: 'mmHg' },
  },
  BP_DIASTOLIC: {
    channel: '',
    notes: [],
    value: '80',
    dial: { sections: [], group: 2, subGroup: 0 },
    meta: {},
    info: { name: 'Diastolic BP', unit: 'mmHg' },
  },
  BMI_CALC: {
    channel: '',
    notes: [],
    value: '22.5',
    dial: { sections: [], group: 3, subGroup: 0 },
    meta: {},
    info: { name: 'BMI', unit: '' },
  },
  WAIST_TO_HEIGHT: {
    channel: '',
    notes: [],
    value: '0.48',
    dial: { sections: [], group: 3, subGroup: 0 },
    meta: {},
    info: { name: 'Waist/Height', unit: '' },
  },
  ABSI: {
    channel: '',
    notes: [],
    value: '0.08',
    dial: { sections: [], group: 3, subGroup: 0 },
    meta: {},
    info: { name: 'ABSI', unit: '' },
  },
  DBT_RISK_PROB: {
    channel: '',
    notes: [],
    value: '3',
    dial: { sections: [], group: 4, subGroup: 0 },
    meta: {},
    info: { name: 'Type 2 Diabetes Risk', unit: '%' },
  },
  MFBG_RISK_PROB: {
    channel: '',
    notes: [],
    value: '5.1',
    dial: { sections: [], group: 4, subGroup: 0 },
    meta: {},
    info: { name: 'Fasting Blood Glucose', unit: 'mmol/L' },
  },
  HBA1C_RISK_PROB: {
    channel: '',
    notes: [],
    value: '5.4',
    dial: { sections: [], group: 4, subGroup: 0 },
    meta: {},
    info: { name: 'Hemoglobin A1C', unit: '%' },
  },
  FLD_RISK_PROB: {
    channel: '',
    notes: [],
    value: '4',
    dial: { sections: [], group: 5, subGroup: 0 },
    meta: {},
    info: { name: 'Fatty Liver Risk', unit: '%' },
  },
  HDLTC_RISK_PROB: {
    channel: '',
    notes: [],
    value: '2',
    dial: { sections: [], group: 5, subGroup: 0 },
    meta: {},
    info: { name: 'Hypercholesterolemia', unit: '%' },
  },
  TG_RISK_PROB: {
    channel: '',
    notes: [],
    value: '1',
    dial: { sections: [], group: 5, subGroup: 0 },
    meta: {},
    info: { name: 'Hypertriglyceridemia', unit: '%' },
  },
  MENTAL_SCORE: {
    channel: '',
    notes: [],
    value: 'Low',
    dial: { sections: [], group: 6, subGroup: 0 },
    meta: {},
    info: { name: 'Mental Stress Index', unit: '' },
  },
  HEALTH_SCORE: {
    channel: '',
    notes: [],
    value: '92',
    dial: { sections: [], group: 6, subGroup: 0 },
    meta: {},
    info: { name: 'Health Score', unit: '' },
  },
  VITAL_SCORE: {
    channel: '',
    notes: [],
    value: '88',
    dial: { sections: [], group: 6, subGroup: 0 },
    meta: {},
    info: { name: 'Vital Score', unit: '' },
  },
};

export default AccordionPresenter;
