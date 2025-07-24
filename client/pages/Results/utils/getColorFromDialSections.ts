// TODO use color tokens from design system?
// const colors = {
//   dfxPointBandGreen: '#62DB99',
//   dfxPointBandLightGreen: '#91E6B7',
//   dfxPointBandYellow: '#FFEC89',
//   dfxPointBandLightRed: '#FF8989',
//   dfxPointBandRed: '#FF5757',
// };
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

export interface DialSection {
  groupSize: number;
  bandColor: BandColor;
  range: number[]; // [min, max]
}

// Utility to get color from group index (preferred for Anura Results)
export function getColorFromGroup(sections: DialSection[], group: number): string {
  console.log('MetricCard getColorFromGroup', { sections, group });
  if (sections.length === 0) {
    return '#D8CAB5';
  }
  return BAND_COLOR_MAP[sections[group - 1].bandColor];
}
