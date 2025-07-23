import React, { useState } from 'react';
import {
  PulseRate,
  BloodPressure,
  Breathing,
  HeartRateVariability,
  CardioVascularDiseaseRisk,
  StrokeRisk,
  HeartAttackRisk,
  CardiacWorkload,
  Hypertension,
  Type2DiabetesRisk,
  FattyLiverDiseaseRisk,
  HemoglobinA1C,
  Hypercholesterolemia,
  FastingBloodGlucose,
  Hypertriglyceridemia,
  BodyMassIndex,
  BodyShapeIndex,
  WaistToHeight,
  HealthScore,
  MentalStressIndex,
  OverallMetabolicHealthRisk,
} from '@nuralogix.ai/web-ui';

import { Heart, Activity, Droplets, Scale, CheckCircle } from 'lucide-react';

interface HealthMetric {
  id: string;
  name: string;
  value: number | string;
  unit: string;
  status: 'normal' | 'warning' | 'critical' | 'excellent';
  range: string;
  icon: React.ReactNode;
}

const ICON_WIDTH = '24';
const ICON_HEIGHT = '24';

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
        icon: <PulseRate width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'BP_SYSTOLIC',
        name: 'Systolic Blood Pressure',
        value: 118,
        unit: 'mmHg',
        status: 'normal' as const,
        range: '90-120 mmHg',
        icon: <BloodPressure width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'BP_DIASTOLIC',
        name: 'Diastolic Blood Pressure',
        value: 78,
        unit: 'mmHg',
        status: 'normal' as const,
        range: '60-80 mmHg',
        icon: <BloodPressure width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'BR_BPM',
        name: 'Breathing Rate',
        value: 16,
        unit: 'breaths/min',
        status: 'normal' as const,
        range: '12-20 breaths/min',
        icon: <Breathing width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'HRV_SDNN',
        name: 'Heart Rate Variability',
        value: 45,
        unit: 'ms',
        status: 'excellent' as const,
        range: '>30 ms',
        icon: <HeartRateVariability width={ICON_WIDTH} height={ICON_HEIGHT} />,
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
        icon: <CardioVascularDiseaseRisk width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'BP_STROKE',
        name: 'Stroke Risk',
        value: 3.1,
        unit: '%',
        status: 'normal' as const,
        range: '<5%',
        icon: <StrokeRisk width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'BP_HEART_ATTACK',
        name: 'Heart Attack Risk',
        value: 4.7,
        unit: '%',
        status: 'normal' as const,
        range: '<7%',
        icon: <HeartAttackRisk width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'BP_RPP',
        name: 'Cardiac Workload',
        value: 8496,
        unit: 'units',
        status: 'normal' as const,
        range: '6000-12000',
        icon: <CardiacWorkload width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'HPT_RISK_PROB',
        name: 'Hypertension Risk',
        value: 12.3,
        unit: '%',
        status: 'warning' as const,
        range: '<15%',
        icon: <Hypertension width={ICON_WIDTH} height={ICON_HEIGHT} />,
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
        icon: <Type2DiabetesRisk width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'FLD_RISK_PROB',
        name: 'Fatty Liver Disease Risk',
        value: 18.5,
        unit: '%',
        status: 'warning' as const,
        range: '<20%',
        icon: <FattyLiverDiseaseRisk width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'HBA1C_RISK_PROB',
        name: 'Hemoglobin A1C Risk',
        value: 5.4,
        unit: '%',
        status: 'normal' as const,
        range: '<5.7%',
        icon: <HemoglobinA1C width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'HDLTC_RISK_PROB',
        name: 'Hypercholesterolemia Risk',
        value: 22.1,
        unit: '%',
        status: 'warning' as const,
        range: '<25%',
        icon: <Hypercholesterolemia width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'MFBG_RISK_PROB',
        name: 'Fasting Blood Glucose Risk',
        value: 8.9,
        unit: '%',
        status: 'normal' as const,
        range: '<10%',
        icon: <FastingBloodGlucose width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'TG_RISK_PROB',
        name: 'Hypertriglyceridemia Risk',
        value: 15.2,
        unit: '%',
        status: 'normal' as const,
        range: '<20%',
        icon: <Hypertriglyceridemia width={ICON_WIDTH} height={ICON_HEIGHT} />,
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
        icon: <BodyMassIndex width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'ABSI',
        name: 'A Body Shape Index',
        value: 0.082,
        unit: '',
        status: 'normal' as const,
        range: '0.075-0.085',
        icon: <BodyShapeIndex width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'WAIST_TO_HEIGHT',
        name: 'Waist to Height Ratio',
        value: 0.48,
        unit: '',
        status: 'excellent' as const,
        range: '<0.5',
        icon: <WaistToHeight width={ICON_WIDTH} height={ICON_HEIGHT} />,
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
        icon: <HealthScore width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'VITAL_SCORE',
        name: 'Vital Signs Score',
        value: 87,
        unit: '/100',
        status: 'excellent' as const,
        range: '70-100',
        icon: <HealthScore width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'MENTAL_SCORE',
        name: 'Mental Stress Index',
        value: 65,
        unit: '/100',
        status: 'normal' as const,
        range: '60-80',
        icon: <MentalStressIndex width={ICON_WIDTH} height={ICON_HEIGHT} />,
      },
      {
        id: 'OVERALL_METABOLIC_RISK_PROB',
        name: 'Overall Metabolic Risk',
        value: 14.2,
        unit: '%',
        status: 'normal' as const,
        range: '<20%',
        icon: <OverallMetabolicHealthRisk width={ICON_WIDTH} height={ICON_HEIGHT} />,
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
        {/* <div
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
        </div> */}
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
      </div>
    </div>
  );
};

export default ResultsSummary;
