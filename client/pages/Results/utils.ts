import type { Results, DfxPointId } from '@nuralogix.ai/web-measurement-embedded-app';
import type { Snapshot } from 'valtio';

type PointsSnapshot = Snapshot<Results>['points'];

// Utility: get all unique groups present in results.points
export function getGroupsFromResults(points: PointsSnapshot) {
  const groupSet = new Set<string>();
  Object.values(points).forEach((pt) => {
    if (pt.meta.group) groupSet.add(pt.meta.group);
  });
  return Array.from(groupSet);
}

// Utility: get all points for a group
export function getPointsForGroup(points: PointsSnapshot, group: string) {
  return Object.entries(points).filter(
    (
      entry
    ): entry is [
      DfxPointId,
      PointsSnapshot[DfxPointId] & NonNullable<Results['points'][DfxPointId]>,
    ] => {
      const [, pt] = entry;
      return Boolean(pt && pt.meta.group === group);
    }
  );
}
