export const BAND_COLOR_MAP = {
  YELLOW: '#FFEB3B',
  LIGHT_GREEN: '#8BC34A',
  GREEN: '#4CAF50',
  LIGHT_RED: '#FF8A80',
  RED: '#F44336',
} as const;

export type BandColor = keyof typeof BAND_COLOR_MAP;

export interface DialSection {
  groupSize: number;
  bandColor: BandColor;
  range: number[]; // [min, max]
}

// Utility to get color from group index (preferred for Anura Results)
export function getColorFromGroup(sections: DialSection[], group: number): string {
  if (!Array.isArray(sections) || typeof group !== 'number' || !sections[group])
    return BAND_COLOR_MAP.GREEN;
  return BAND_COLOR_MAP[sections[group].bandColor];
}
