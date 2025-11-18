import type {
  Results,
  PointGroupType,
  DfxPointId,
  Point,
} from '@nuralogix.ai/web-measurement-embedded-app';

// Tab identifiers in the Results summary UI: any point group or the aggregate 'All'.
export type ResultsTabId = PointGroupType | 'All';

// Re-export core SDK point-related types for convenience within the Results module.
export type { Results, PointGroupType, DfxPointId, Point };
