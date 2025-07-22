import React, { useState } from 'react';
import {
  Activity,
  Heart,
  Brain,
  Scale,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Droplets,
  Wind,
  Zap,
} from 'lucide-react';

interface HealthMetric {
  id: string;
  name: string;
  value: number | string;
  unit: string;
  status: 'normal' | 'warning' | 'critical' | 'excellent';
  range: string;
  icon: React.ReactNode;
}

const ResultsSummary = () => {
  const [activeTab, setActiveTab] = useState('vitals');

  // Mock data based on your metrics
  const healthData = {
    vitals: [
      {
        id: 'HR_BPM',
        name: 'Heart Rate',
        value: 72,
        unit: 'bpm',
        status: 'normal' as const,
        range: '60-100 bpm',
        icon: <Heart size={24} />,
      },
      {
        id: 'BP_SYSTOLIC',
        name: 'Systolic Blood Pressure',
        value: 118,
        unit: 'mmHg',
        status: 'normal' as const,
        range: '90-120 mmHg',
        icon: <Activity size={24} />,
      },
      {
        id: 'BP_DIASTOLIC',
        name: 'Diastolic Blood Pressure',
        value: 78,
        unit: 'mmHg',
        status: 'normal' as const,
        range: '60-80 mmHg',
        icon: <Activity size={24} />,
      },
      {
        id: 'BR_BPM',
        name: 'Breathing Rate',
        value: 16,
        unit: 'breaths/min',
        status: 'normal' as const,
        range: '12-20 breaths/min',
        icon: <Wind size={24} />,
      },
      {
        id: 'HRV_SDNN',
        name: 'Heart Rate Variability',
        value: 45,
        unit: 'ms',
        status: 'excellent' as const,
        range: '>30 ms',
        icon: <Zap size={24} />,
      },
    ],
    cardiovascular: [
      {
        id: 'BP_CVD',
        name: 'Cardiovascular Disease Risk',
        value: 8.2,
        unit: '%',
        status: 'normal' as const,
        range: '<10%',
        icon: <Heart size={24} />,
      },
      {
        id: 'BP_STROKE',
        name: 'Stroke Risk',
        value: 3.1,
        unit: '%',
        status: 'normal' as const,
        range: '<5%',
        icon: <Brain size={24} />,
      },
      {
        id: 'BP_HEART_ATTACK',
        name: 'Heart Attack Risk',
        value: 4.7,
        unit: '%',
        status: 'normal' as const,
        range: '<7%',
        icon: <AlertTriangle size={24} />,
      },
      {
        id: 'BP_RPP',
        name: 'Cardiac Workload',
        value: 8496,
        unit: 'units',
        status: 'normal' as const,
        range: '6000-12000',
        icon: <TrendingUp size={24} />,
      },
      {
        id: 'HPT_RISK_PROB',
        name: 'Hypertension Risk',
        value: 12.3,
        unit: '%',
        status: 'warning' as const,
        range: '<15%',
        icon: <AlertTriangle size={24} />,
      },
    ],
    metabolic: [
      {
        id: 'DBT_RISK_PROB',
        name: 'Type 2 Diabetes Risk',
        value: 6.8,
        unit: '%',
        status: 'normal' as const,
        range: '<7.5%',
        icon: <Droplets size={24} />,
      },
      {
        id: 'FLD_RISK_PROB',
        name: 'Fatty Liver Disease Risk',
        value: 18.5,
        unit: '%',
        status: 'warning' as const,
        range: '<20%',
        icon: <AlertTriangle size={24} />,
      },
      {
        id: 'HBA1C_RISK_PROB',
        name: 'Hemoglobin A1C Risk',
        value: 5.4,
        unit: '%',
        status: 'normal' as const,
        range: '<5.7%',
        icon: <Droplets size={24} />,
      },
      {
        id: 'HDLTC_RISK_PROB',
        name: 'Hypercholesterolemia Risk',
        value: 22.1,
        unit: '%',
        status: 'warning' as const,
        range: '<25%',
        icon: <TrendingUp size={24} />,
      },
      {
        id: 'MFBG_RISK_PROB',
        name: 'Fasting Blood Glucose Risk',
        value: 8.9,
        unit: '%',
        status: 'normal' as const,
        range: '<10%',
        icon: <Droplets size={24} />,
      },
      {
        id: 'TG_RISK_PROB',
        name: 'Hypertriglyceridemia Risk',
        value: 15.2,
        unit: '%',
        status: 'normal' as const,
        range: '<20%',
        icon: <TrendingUp size={24} />,
      },
    ],
    bodyComposition: [
      {
        id: 'BMI_CALC',
        name: 'Body Mass Index',
        value: 23.4,
        unit: 'kg/m²',
        status: 'normal' as const,
        range: '18.5-24.9',
        icon: <Scale size={24} />,
      },
      {
        id: 'ABSI',
        name: 'A Body Shape Index',
        value: 0.082,
        unit: '',
        status: 'normal' as const,
        range: '0.075-0.085',
        icon: <Scale size={24} />,
      },
      {
        id: 'WAIST_TO_HEIGHT',
        name: 'Waist to Height Ratio',
        value: 0.48,
        unit: '',
        status: 'excellent' as const,
        range: '<0.5',
        icon: <Scale size={24} />,
      },
    ],
    overallScores: [
      {
        id: 'HEALTH_SCORE',
        name: 'Overall Health Score',
        value: 82,
        unit: '/100',
        status: 'excellent' as const,
        range: '70-100',
        icon: <CheckCircle size={24} />,
      },
      {
        id: 'VITAL_SCORE',
        name: 'Vital Signs Score',
        value: 87,
        unit: '/100',
        status: 'excellent' as const,
        range: '70-100',
        icon: <Activity size={24} />,
      },
      {
        id: 'MENTAL_SCORE',
        name: 'Mental Stress Index',
        value: 65,
        unit: '/100',
        status: 'normal' as const,
        range: '60-80',
        icon: <Brain size={24} />,
      },
      {
        id: 'OVERALL_METABOLIC_RISK_PROB',
        name: 'Overall Metabolic Risk',
        value: 14.2,
        unit: '%',
        status: 'normal' as const,
        range: '<20%',
        icon: <TrendingUp size={24} />,
      },
    ],
  };

  const tabs = [
    { id: 'vitals', name: 'Vitals', icon: <Heart size={20} /> },
    { id: 'cardiovascular', name: 'Cardiovascular', icon: <Activity size={20} /> },
    { id: 'metabolic', name: 'Metabolic Health', icon: <Droplets size={20} /> },
    { id: 'bodyComposition', name: 'Body Composition', icon: <Scale size={20} /> },
    { id: 'overallScores', name: 'Overall Scores', icon: <CheckCircle size={20} /> },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return '#10b981';
      case 'normal':
        return '#3b82f6';
      case 'warning':
        return '#f59e0b';
      case 'critical':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getStatusBackground = (status: string) => {
    switch (status) {
      case 'excellent':
        return '#ecfdf5';
      case 'normal':
        return '#eff6ff';
      case 'warning':
        return '#fffbeb';
      case 'critical':
        return '#fef2f2';
      default:
        return '#f9fafb';
    }
  };

  const MetricCard = ({ metric }: { metric: HealthMetric }) => (
    <div
      style={{
        backgroundColor: getStatusBackground(metric.status),
        border: `2px solid ${getStatusColor(metric.status)}`,
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        minHeight: '160px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ color: getStatusColor(metric.status), flexShrink: 0 }}>{metric.icon}</div>
        <h3
          style={{
            margin: 0,
            fontSize: '16px',
            fontWeight: '600',
            color: '#1f2937',
            lineHeight: '1.3',
          }}
        >
          {metric.name}
        </h3>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        <span
          style={{
            fontSize: '28px',
            fontWeight: '700',
            color: getStatusColor(metric.status),
          }}
        >
          {metric.value}
        </span>
        <span
          style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#6b7280',
          }}
        >
          {metric.unit}
        </span>
      </div>

      <div style={{ marginTop: 'auto' }}>
        <div
          style={{
            fontSize: '12px',
            color: '#6b7280',
            marginBottom: '4px',
          }}
        >
          Normal range: {metric.range}
        </div>
        <div
          style={{
            display: 'inline-block',
            backgroundColor: getStatusColor(metric.status),
            color: 'white',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '500',
            textTransform: 'capitalize',
          }}
        >
          {metric.status}
        </div>
      </div>
    </div>
  );

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
          <p
            style={{
              margin: 0,
              fontSize: '16px',
              color: '#6b7280',
            }}
          >
            Comprehensive contactless medical diagnostics analysis
          </p>
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
          {tabs.map((tab) => (
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
          {healthData[activeTab as keyof typeof healthData].map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>

        {/* Summary Stats */}
        <div
          style={{
            marginTop: '32px',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <h2
            style={{
              margin: '0 0 16px 0',
              fontSize: '20px',
              fontWeight: '600',
              color: '#1f2937',
            }}
          >
            Quick Summary
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {Object.entries(healthData).map(([category, metrics]) => {
              const normalCount = metrics.filter(
                (m) => m.status === 'normal' || m.status === 'excellent'
              ).length;
              const totalCount = metrics.length;
              const percentage = Math.round((normalCount / totalCount) * 100);

              return (
                <div
                  key={category}
                  style={{
                    textAlign: 'center',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color:
                        percentage >= 80 ? '#10b981' : percentage >= 60 ? '#f59e0b' : '#ef4444',
                      marginBottom: '4px',
                    }}
                  >
                    {percentage}%
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      textTransform: 'capitalize',
                    }}
                  >
                    {category.replace(/([A-Z])/g, ' $1').trim()} Normal
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSummary;
