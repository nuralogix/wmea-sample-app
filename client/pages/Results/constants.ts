import type { DfxPointId, Results } from '@nuralogix.ai/web-measurement-embedded-app';

// TODO change to correct grouping if we want to support groups instead of just scroll
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

// TODO use color tokens from design system?
// const colors = {
//   dfxPointBandGreen: '#62DB99',
//   dfxPointBandLightGreen: '#91E6B7',
//   dfxPointBandYellow: '#FFEC89',
//   dfxPointBandLightRed: '#FF8989',
//   dfxPointBandRed: '#FF5757',
// };

// Using RGBA for transparency
const colors = {
  dfxPointBandGreen: 'rgba(98, 219, 153, 0.5)', // #62DB99
  dfxPointBandLightGreen: 'rgba(145, 230, 183, 0.5)', // #91E6B7
  dfxPointBandYellow: 'rgba(255, 236, 137, 0.5)', // #FFEC89
  dfxPointBandLightRed: 'rgba(255, 137, 137, 0.5)', // #FF8989
  dfxPointBandRed: 'rgba(255, 87, 87, 0.5)', // #FF5757
};

export const BAND_COLOR_MAP = {
  YELLOW: colors.dfxPointBandYellow,
  LIGHT_GREEN: colors.dfxPointBandLightGreen,
  GREEN: colors.dfxPointBandGreen,
  LIGHT_RED: colors.dfxPointBandLightRed,
  RED: colors.dfxPointBandRed,
} as const;

export type BandColor = keyof typeof BAND_COLOR_MAP;
