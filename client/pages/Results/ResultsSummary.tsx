import React, { useState } from 'react';
import { Heart, Activity, Droplets, Scale, CheckCircle } from 'lucide-react';
import { THEME_GROUPS } from './constants';
import type { Results, DfxPointId } from '@nuralogix.ai/web-measurement-embedded-app';
import MetricCard from './MetricCard';

interface ResultsSummaryProps {
  results: Results;
}

const TABS = [
  { id: 'Vitals', name: 'Vitals', icon: <Heart size={20} /> },
  { id: 'Cardiovascular Health', name: 'Cardiovascular Health', icon: <Activity size={20} /> },
  { id: 'Metabolic Health', name: 'Metabolic Health', icon: <Droplets size={20} /> },
  { id: 'Body Composition', name: 'Body Composition', icon: <Scale size={20} /> },
  { id: 'Overall Scores', name: 'Overall Scores', icon: <CheckCircle size={20} /> },
];

// Utility: should render a group if at least one metric exists in results.points
function shouldRenderGroup(groupIds: DfxPointId[], points: Results['points']): boolean {
  if (!points) return false;
  return groupIds.some((dfxPointId) => !!points[dfxPointId]);
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ results }) => {
  // Only show tabs for groups that have at least one metric present
  const visibleTabs = TABS.filter((tab) =>
    shouldRenderGroup(THEME_GROUPS[tab.id] || [], results.points)
  );
  // If the current activeTab is not visible, default to the first visible tab
  const [activeTab, setActiveTab] = useState<string>(visibleTabs[0]?.id || '');

  React.useEffect(() => {
    if (!visibleTabs.find((tab) => tab.id === activeTab)) {
      setActiveTab(visibleTabs[0]?.id || '');
    }
  }, [activeTab, visibleTabs]);

  const groupIds = THEME_GROUPS[activeTab] || [];

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
          {/* <p
            style={{
              margin: 0,
              fontSize: '16px',
              color: '#6b7280',
            }}
          >
            Comprehensive contactless medical diagnostics analysis
          </p> */}
          <div
            style={{
              marginTop: '16px',
              fontSize: '14px',
              color: '#9ca3af',
            }}
          >
            Scan completed on{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
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
            overflowX: 'auto',
          }}
        >
          {visibleTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
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
              {tab.icon}
              <span style={{ display: window.innerWidth < 640 ? 'none' : 'inline' }}>
                {tab.name}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              window.innerWidth < 640 ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {groupIds.map((dfxPointId) =>
            results.points && results.points[dfxPointId] ? (
              <MetricCard results={results} key={dfxPointId} dfxPointId={dfxPointId} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsSummary;
