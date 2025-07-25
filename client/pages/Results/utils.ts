import type { Results, DfxPointId } from '@nuralogix.ai/web-measurement-embedded-app';

// Utility: get all unique groups present in results.points
export function getGroupsFromResults(points: Results['points']) {
  const groupSet = new Set<string>();
  Object.values(points || {}).forEach((pt: any) => {
    if (pt?.meta?.group) groupSet.add(pt.meta.group);
  });
  return Array.from(groupSet);
}

// Utility: get all points for a group
export function getPointsForGroup(points: Results['points'], group: string) {
  return Object.entries(points || {}).filter(([, pt]: Results['points'][string]) => pt?.meta?.group === group);
}

// Utility: convert group keys to readable labels
export function getGroupLabel(groupKey: string, t: (key: string) => string): string {
  // Convert camelCase to SCREAMING_SNAKE_CASE
  const snakeCase = groupKey.replace(/([A-Z])/g, '_$1').toUpperCase();
  return t(`RESULTS_GROUP_${snakeCase}`);
}

// Utility: should render a group if at least one metric exists in results.points
export function shouldRenderGroup(groupIds: DfxPointId[], points: Results['points']): boolean {
  if (!points) return false;
  return groupIds.some((dfxPointId) => !!points[dfxPointId]);
}
