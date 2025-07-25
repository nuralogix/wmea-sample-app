import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Results, DfxPointId } from '@nuralogix.ai/web-measurement-embedded-app';
import MetricCard from './MetricCard';
import { getGroupsFromResults, getPointsForGroup, getGroupLabel } from './utils';

interface ResultsSummaryProps {
  results: Results;
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ results }) => {
  const { t } = useTranslation();

  // Dynamically generate tabs from groups present in results.points
  const groups = getGroupsFromResults(results.points);
  // Filter out metadata group as it will be displayed in header
  const visibleGroups = groups.filter((group) => group !== 'metadata');
  const visibleTabs = [
    { id: 'All', name: t('RESULTS_ALL_RESULTS') },
    ...visibleGroups.map((group) => ({ id: group, name: getGroupLabel(group, t) })),
  ];

  // Get SNR value for header display
  const snrPoint = results.points?.SNR;
  const snrValue = snrPoint?.value;
  const snrUnit = snrPoint?.info?.unit;
  // If the current activeTab is not visible, default to the first visible tab
  const [activeTab, setActiveTab] = useState<string>(visibleTabs[0]?.id || '');

  useEffect(() => {
    if (!visibleTabs.find((tab) => tab.id === activeTab)) {
      setActiveTab(visibleTabs[0]?.id || '');
    }
  }, [activeTab, visibleTabs]);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              margin: '0 0 8px 0',
              fontSize: '32px',
              fontWeight: '700',
              color: '#1f2937',
            }}
          >
            Health Assessment Results
          </h1>
          {snrValue && (
            <div
              style={{
                fontSize: '16px',
                color: '#6b7280',
                marginTop: '8px',
              }}
            >
              {t('RESULTS_SNR_LABEL')}: {snrValue}
              {snrUnit && ` ${snrUnit}`}
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '8px',
            marginBottom: '24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            gap: '4px',
            flexWrap: 'wrap',
          }}
        >
          {visibleTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 16px',
                border: 'none',
                borderRadius: '8px',
                backgroundColor: activeTab === tab.id ? '#3b82f6' : 'transparent',
                color: activeTab === tab.id ? 'white' : '#6b7280',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                minWidth: 'fit-content',
              }}
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
              <span style={{ display: window.innerWidth < 640 ? 'none' : 'inline' }}>
                {tab.name}
              </span>
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
                <div key={group} style={{ marginBottom: '32px' }}>
                  <h2
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '16px',
                      borderBottom: '1px solid #e5e7eb',
                      paddingBottom: '4px',
                    }}
                  >
                    {getGroupLabel(group, t)}
                  </h2>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        window.innerWidth < 640 ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
                      gap: '20px',
                    }}
                  >
                    {pointsForGroup.map(([dfxPointId, pt]) => (
                      <MetricCard
                        point={pt}
                        key={dfxPointId}
                        dfxPointId={dfxPointId as DfxPointId}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                window.innerWidth < 640 ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {getPointsForGroup(results.points, activeTab).map(([dfxPointId, pt]) => (
              <MetricCard point={pt} key={dfxPointId} dfxPointId={dfxPointId as DfxPointId} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsSummary;
