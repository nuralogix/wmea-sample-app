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

import type { PointGroupType } from '@nuralogix.ai/web-measurement-embedded-app';

// Translation key union for result point groups.
export type ResultGroupTranslationKey =
  | 'RESULTS_GROUP_METADATA'
  | 'RESULTS_GROUP_PHYSICAL'
  | 'RESULTS_GROUP_GENERAL_RISKS'
  | 'RESULTS_GROUP_VITALS'
  | 'RESULTS_GROUP_PHYSIOLOGICAL'
  | 'RESULTS_GROUP_METABOLIC_RISKS'
  | 'RESULTS_GROUP_BLOOD_BIOMARKERS'
  | 'RESULTS_GROUP_OVERALL'
  | 'RESULTS_GROUP_MENTAL'
  | 'RESULTS_GROUP_SURVEYS';

/** Mapping from SDK point group identifiers to their i18n translation keys used for tab/display labels. */
export const GROUP_I18N_KEY_MAP: { [K in PointGroupType]: ResultGroupTranslationKey } = {
  metadata: 'RESULTS_GROUP_METADATA',
  physical: 'RESULTS_GROUP_PHYSICAL',
  generalRisks: 'RESULTS_GROUP_GENERAL_RISKS',
  vitals: 'RESULTS_GROUP_VITALS',
  physiological: 'RESULTS_GROUP_PHYSIOLOGICAL',
  metabolicRisks: 'RESULTS_GROUP_METABOLIC_RISKS',
  bloodBiomarkers: 'RESULTS_GROUP_BLOOD_BIOMARKERS',
  overall: 'RESULTS_GROUP_OVERALL',
  mental: 'RESULTS_GROUP_MENTAL',
  surveys: 'RESULTS_GROUP_SURVEYS',
};
