import type { PointGroupType, DfxPointId, Point, Results } from './types';

/** Preferred display order for result point groups (others follow afterward). */
export const PREFERRED_GROUP_ORDER: PointGroupType[] = [
  'vitals',
  'generalRisks',
  'metabolicRisks',
  'bloodBiomarkers',
  'physical',
  'physiological',
  'mental',
];

/** Collect distinct non-metadata group ids present in a Results object. */
export function getGroupsFromResults(results: Results): PointGroupType[] {
  const groups: Set<PointGroupType> = new Set();
  for (const pt of Object.values(results.points)) {
    const g = pt?.meta?.group;
    if (g && g !== 'metadata') groups.add(g);
  }
  return Array.from(groups);
}

/** Return group ids ordered by preference first, then remaining in discovery order. */
export function getOrderedGroupIds(results: Results): PointGroupType[] {
  const groups = getGroupsFromResults(results);
  if (groups.length === 0) return [];
  const groupSet = new Set(groups);
  // 1. Add in preferred order
  const ordered = PREFERRED_GROUP_ORDER.filter((g) => groupSet.has(g));
  // 2. Append any remaining (non-preferred) groups in original discovery order
  const remaining = groups.filter((g) => !PREFERRED_GROUP_ORDER.includes(g));
  return [...ordered, ...remaining];
}

/** All point entries for a given group as [id, point] tuples. */
export function getPointsForGroup(results: Results, group: PointGroupType): [DfxPointId, Point][] {
  const out: [DfxPointId, Point][] = [];
  for (const [id, pt] of Object.entries(results.points)) {
    if (pt && pt.meta.group === group) {
      out.push([id as DfxPointId, pt]);
    }
  }
  return out;
}
