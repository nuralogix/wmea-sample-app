import type { DfxPointId, Results } from '@nuralogix.ai/anura-online';

export const THEME_GROUPS: { [section: string]: DfxPointId[] } = {
  'Cardiovascular Health': ['BP_CVD', 'BP_HEART_ATTACK', 'BP_STROKE'],
  Vitals: ['HR_BPM', 'BR_BPM', 'BP_SYSTOLIC', 'BP_DIASTOLIC'],
  'Metabolic Health': ['BMI_CALC', 'WAIST_TO_HEIGHT', 'ABSI'],
  'Diabetes & Glucose': ['DBT_RISK_PROB', 'MFBG_RISK_PROB', 'HBA1C_RISK_PROB'],
  'Liver & Lipids': ['FLD_RISK_PROB', 'HDLTC_RISK_PROB', 'TG_RISK_PROB'],
  'Mental & Overall Health': ['MENTAL_SCORE', 'HEALTH_SCORE', 'VITAL_SCORE'],
};
