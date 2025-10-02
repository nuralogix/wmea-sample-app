import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as stylex from '@stylexjs/stylex';
import type { Results } from '@nuralogix.ai/web-measurement-embedded-app';
import MetricCard from './MetricCard';
import { getGroupsFromResults, getPointsForGroup } from './utils';
import { useMobileDetection } from '../../hooks/useMobileDetection';

const styles = stylex.create({
  container: {
    height: '100vh',
    overflowY: 'auto',
    backgroundColor: '#f8fafc',
    padding: 20,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  wrapper: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  header: {
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
  title: {
    margin: '0 0 8px 0',
    fontSize: 32,
    fontWeight: 700,
    color: '#1f2937',
    '@media (max-width: 640px)': {
      fontSize: 24,
    },
  },
  snrInfo: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 8,
  },
  tabContainer: {
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
  tabInactive: {
    backgroundColor: 'transparent',
    color: '#6b7280',
  },
  tabHover: {
    backgroundColor: '#f3f4f6',
    color: '#374151',
  },
  groupSection: {
    marginBottom: 32,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: '#374151',
    marginBottom: 16,
    borderBottom: '1px solid #e5e7eb',
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
});

interface ResultsSummaryProps {
  results: Results;
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ results }) => {
  const { t } = useTranslation();
  const { isMobile } = useMobileDetection();

  // Utility: convert group keys to readable labels
  const getGroupLabel = (groupKey: string): string => {
    const keyMap = {
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
    } as const;

    return t(keyMap[groupKey as keyof typeof keyMap]);
  };

  // Dynamically generate tabs from groups present in results.points
  const groups = getGroupsFromResults(results.points);
  // Filter out metadata group as it will be displayed in header
  const visibleGroups = groups.filter((group) => group !== 'metadata');
  const tabs = [
    { id: 'All', name: t('RESULTS_ALL_RESULTS') },
    ...visibleGroups.map((group) => ({ id: group, name: getGroupLabel(group) })),
  ];

  const snr = results.points.SNR;
  const [activeTab, setActiveTab] = useState<string>('All');

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.wrapper)}>
        {/* Header */}
        <div {...stylex.props(styles.header)}>
          <h1 {...stylex.props(styles.title)}>{t('HEALTH_RESULTS')}</h1>
          {snr && (
            <div {...stylex.props(styles.snrInfo)}>
              {t('RESULTS_SNR_LABEL')}: {snr.value}
              {snr.info.unit && ` ${snr.info.unit}`}
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div {...stylex.props(styles.tabContainer)}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              {...stylex.props(
                styles.tab,
                activeTab === tab.id ? styles.tabActive : styles.tabInactive
              )}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.color = '#374151';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#6b7280';
                }
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'All' ? (
          <>
            {visibleGroups.map((group) => {
              const pointsForGroup = getPointsForGroup(results.points, group);
              if (pointsForGroup.length === 0) return null;
              return (
                <div key={group} {...stylex.props(styles.groupSection)}>
                  <h2 {...stylex.props(styles.groupTitle)}>{getGroupLabel(group)}</h2>
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
            {getPointsForGroup(results.points, activeTab).map(([dfxPointId, pt]) => (
              <MetricCard point={pt} key={dfxPointId} dfxPointId={dfxPointId} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsSummary;
