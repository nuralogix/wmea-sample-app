import type { Results } from '@nuralogix.ai/web-measurement-embedded-app';

// Utility: get all unique groups present in results.points
export function getGroupsFromResults(points: Results['points']) {
  const groupSet = new Set<string>();
  Object.values(points).forEach((pt) => {
    if (pt.meta.group) groupSet.add(pt.meta.group);
  });
  return Array.from(groupSet);
}

// Utility: get all points for a group
export function getPointsForGroup(points: Results['points'], group: string) {
  return Object.entries(points).filter(([, pt]) => pt.meta.group === group);
}
