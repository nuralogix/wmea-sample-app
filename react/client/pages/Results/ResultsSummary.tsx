import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useSnapshot } from 'valtio';
import * as stylex from '@stylexjs/stylex';
import type { Results, ResultsTabId, PointGroupType } from './types';
import { getOrderedGroupIds, getPointsForGroup } from './utils';
import { Heading, Paragraph, Button } from '@nuralogix.ai/web-ui';
import MetricCard from './MetricCard';
import { handleMeasureAgain } from './utils/measureAgain';
import state from '../../state';
import { GROUP_I18N_KEY_MAP } from './constants';

const styles = stylex.create({
  container: {
    height: '100dvh',
    overflowY: 'auto',
    padding: 20,
  },
  containerLight: {
    backgroundColor: '#f8fafc',
  },
  containerDark: {
    backgroundColor: '#0f172a',
  },
  wrapper: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  headerLight: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 32,
    marginBottom: 24,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    '@media (max-width: 640px)': {
      padding: 20,
      marginBottom: 16,
    },
  },
  headerDark: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 32,
    marginBottom: 24,
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    textAlign: 'center',
    '@media (max-width: 640px)': {
      padding: 20,
      marginBottom: 16,
    },
  },

  tabContainerLight: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 8,
    marginBottom: 24,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    gap: 4,
    flexWrap: 'wrap',
    '@media (max-width: 640px)': {
      marginBottom: 16,
      padding: 4,
    },
  },
  tabContainerDark: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 8,
    marginBottom: 24,
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    display: 'flex',
    gap: 4,
    flexWrap: 'wrap',
    '@media (max-width: 640px)': {
      marginBottom: 16,
      padding: 4,
    },
  },
  tab: {
    padding: '12px 16px',
    border: 'none',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
    minWidth: 'fit-content',
    '@media (max-width: 640px)': {
      padding: '8px 12px',
      fontSize: 13,
      flex: '1 1 auto',
      textAlign: 'center',
    },
  },
  tabActive: {
    backgroundColor: '#3b82f6',
    color: 'white',
  },
  tabInactiveLight: {
    backgroundColor: 'transparent',
    color: '#6b7280',
    ':hover': {
      backgroundColor: '#f3f4f6',
      color: '#374151',
    },
  },
  tabInactiveDark: {
    backgroundColor: 'transparent',
    color: '#94a3b8',
    ':hover': {
      backgroundColor: '#334155',
      color: '#e2e8f0',
    },
  },
  groupSection: {
    marginBottom: 32,
  },
  groupTitleLight: {
    fontSize: 18,
    fontWeight: 600,
    color: '#374151',
    marginBottom: 16,
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: 4,
  },
  groupTitleDark: {
    fontSize: 18,
    fontWeight: 600,
    color: '#e2e8f0',
    marginBottom: 16,
    borderBottom: '1px solid #475569',
    paddingBottom: 4,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 20,
    '@media (max-width: 640px)': {
      gridTemplateColumns: '1fr',
      gap: 16,
    },
  },
  measureAgainWrapper: {
    marginTop: 16,
  },
});

interface ResultsSummaryProps {
  results: Results;
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ results }) => {
  const { t } = useTranslation();
  const { theme } = useSnapshot(state.general);
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const getGroupLabel = (group: PointGroupType): string => t(GROUP_I18N_KEY_MAP[group]);

  const orderedVisibleGroups = getOrderedGroupIds(results);
  const tabs: { id: ResultsTabId; name: string }[] = [
    ...orderedVisibleGroups.map((group) => ({ id: group, name: getGroupLabel(group) })),
    { id: 'All', name: t('RESULTS_ALL_RESULTS') },
  ];

  const snr = results.points.SNR;
  const [activeTab, setActiveTab] = useState<ResultsTabId>(tabs[0].id);

  const isAllTab = (tab: ResultsTabId): tab is 'All' => tab === 'All';

  return (
    <div {...stylex.props(styles.container, isDark ? styles.containerDark : styles.containerLight)}>
      <div {...stylex.props(styles.wrapper)}>
        {/* Header */}
        <div {...stylex.props(isDark ? styles.headerDark : styles.headerLight)}>
          <Heading>{t('HEALTH_RESULTS')}</Heading>
          {snr && (
            <Paragraph>
              {t('RESULTS_SNR_LABEL')}: {snr.value}
              {snr.info.unit && ` ${snr.info.unit}`}
            </Paragraph>
          )}
          <div {...stylex.props(styles.measureAgainWrapper)}>
            <Button variant="outline" onClick={handleMeasureAgain}>
              {t('MEASURE_AGAIN')}
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div {...stylex.props(isDark ? styles.tabContainerDark : styles.tabContainerLight)}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              {...stylex.props(
                styles.tab,
                activeTab === tab.id
                  ? styles.tabActive
                  : isDark
                    ? styles.tabInactiveDark
                    : styles.tabInactiveLight
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        {isAllTab(activeTab) ? (
          <>
            {orderedVisibleGroups.map((group) => {
              const pointsForGroup = getPointsForGroup(results, group);
              if (pointsForGroup.length === 0) return null;
              return (
                <div key={group} {...stylex.props(styles.groupSection)}>
                  <div {...stylex.props(isDark ? styles.groupTitleDark : styles.groupTitleLight)}>
                    <Heading>{getGroupLabel(group)}</Heading>
                  </div>
                  <div {...stylex.props(styles.grid)}>
                    {pointsForGroup.map(([dfxPointId, pt]) => (
                      <MetricCard point={pt} key={dfxPointId} dfxPointId={dfxPointId} />
                    ))}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div {...stylex.props(styles.grid)}>
            {getPointsForGroup(results, activeTab).map(([dfxPointId, pt]) => (
              <MetricCard point={pt} key={dfxPointId} dfxPointId={dfxPointId} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsSummary;
