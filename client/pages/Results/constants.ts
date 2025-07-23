import type { DfxPointId, Results } from '@nuralogix.ai/web-measurement-embedded-app';

export const THEME_GROUPS: { [section: string]: DfxPointId[] } = {
  Vitals: ['HR_BPM', 'BP_SYSTOLIC', 'BP_DIASTOLIC', 'BR_BPM', 'HRV_SDNN'],
  'Cardiovascular Health': ['BP_CVD', 'BP_STROKE', 'BP_HEART_ATTACK', 'BP_RPP', 'HPT_RISK_PROB'],
  'Metabolic Health': [
    'DBT_RISK_PROB',
    'FLD_RISK_PROB',
    'HBA1C_RISK_PROB',
    'HDLTC_RISK_PROB',
    'MFBG_RISK_PROB',
    'TG_RISK_PROB',
  ],
  'Body Composition': ['BMI_CALC', 'ABSI', 'WAIST_TO_HEIGHT'],
  'Overall Scores': ['HEALTH_SCORE', 'VITAL_SCORE', 'MENTAL_SCORE', 'OVERALL_METABOLIC_RISK_PROB'],
};
