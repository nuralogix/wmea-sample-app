import * as stylex from '@stylexjs/stylex';
import { Accordion } from '@nuralogix.ai/web-ui';
import type { DfxPointId } from '@nuralogix.ai/anura-online';
import MetricRow from './MetricRow';

const GREEN = '#4CAF50';

// Mock data

type Metric = {
  dfxPointId: DfxPointId;
  label: string;
  value: string;
  fillColor: string;
};

const ACCORDION_DATA: {
  title: string;
  metrics: Metric[];
}[] = [
  {
    title: 'Cardiovascular Health',
    metrics: [
      {
        dfxPointId: 'BP_CVD',
        label: 'CVD Risk',
        value: '5%',
        fillColor: GREEN,
      },
      {
        dfxPointId: 'BP_HEART_ATTACK',
        label: 'Heart Attack Risk',
        value: '2%',
        fillColor: GREEN,
      },
      {
        dfxPointId: 'BP_STROKE',
        label: 'Stroke Risk',
        value: '1%',
        fillColor: GREEN,
      },
    ],
  },
  {
    title: 'Vitals',
    metrics: [
      {
        dfxPointId: 'HR_BPM',
        label: 'Heart Rate',
        value: '78 bpm',
        fillColor: GREEN,
      },
      {
        dfxPointId: 'BR_BPM',
        label: 'Breathing Rate',
        value: '16 bpm',
        fillColor: GREEN,
      },
      {
        dfxPointId: 'BP_SYSTOLIC',
        label: 'Systolic BP',
        value: '120 mmHg',
        fillColor: GREEN,
      },
      {
        dfxPointId: 'BP_DIASTOLIC',
        label: 'Diastolic BP',
        value: '80 mmHg',
        fillColor: GREEN,
      },
    ],
  },
  {
    title: 'Metabolic Health',
    metrics: [
      {
        dfxPointId: 'BMI_CALC',
        label: 'BMI',
        value: '22.5',
        fillColor: GREEN,
      },
      {
        dfxPointId: 'WAIST_TO_HEIGHT',
        label: 'Waist/Height',
        value: '0.48',
        fillColor: GREEN,
      },
      {
        dfxPointId: 'ABSI',
        label: 'ABSI',
        value: '0.08',
        fillColor: GREEN,
      },
    ],
  },
  {
    title: 'Diabetes & Glucose',
    metrics: [
      {
        dfxPointId: 'DBT_RISK_PROB',
        label: 'Type 2 Diabetes Risk',
        value: '3%',
        fillColor: GREEN,
      },
      {
        dfxPointId: 'MFBG_RISK_PROB',
        label: 'Fasting Blood Glucose',
        value: '5.1 mmol/L',
        fillColor: GREEN,
      },
      {
        dfxPointId: 'HBA1C_RISK_PROB',
        label: 'Hemoglobin A1C',
        value: '5.4%',
        fillColor: GREEN,
      },
    ],
  },
  {
    title: 'Liver & Lipids',
    metrics: [
      {
        dfxPointId: 'FLD_RISK_PROB',
        label: 'Fatty Liver Risk',
        value: '4%',
        fillColor: GREEN,
      },
      {
        dfxPointId: 'HDLTC_RISK_PROB',
        label: 'Hypercholesterolemia',
        value: '2%',
        fillColor: GREEN,
      },
      {
        dfxPointId: 'TG_RISK_PROB',
        label: 'Hypertriglyceridemia',
        value: '1%',
        fillColor: GREEN,
      },
    ],
  },
  {
    title: 'Mental & Overall Health',
    metrics: [
      {
        dfxPointId: 'MENTAL_SCORE',
        label: 'Mental Stress Index',
        value: 'Low',
        fillColor: GREEN,
      },
      {
        dfxPointId: 'HEALTH_SCORE',
        label: 'Health Score',
        value: '92',
        fillColor: GREEN,
      },
      {
        dfxPointId: 'VITAL_SCORE',
        label: 'Vital Score',
        value: '88',
        fillColor: GREEN,
      },
    ],
  },
];

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    maxWidth: '500px',
  },
});

const AccordionPresenter = () => {
  return (
    <div {...stylex.props(styles.container)}>
      {ACCORDION_DATA.map((section, sectionIdx) => (
        <Accordion
          key={sectionIdx}
          title={section.title}
          width="500px"
          defaultOpen={sectionIdx === 0}
        >
          {section.metrics.map((metric, idx) => (
            <MetricRow
              key={idx}
              dfxPointId={metric.dfxPointId}
              label={metric.label}
              value={metric.value}
              fillColor={metric.fillColor}
            />
          ))}
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionPresenter;
