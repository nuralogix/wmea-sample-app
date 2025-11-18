import React from 'react';
import { DfxPointId } from '@nuralogix.ai/web-measurement-embedded-app';
import {
  BodyShapeIndex,
  BodyMassIndex,
  CardioVascularDiseaseRisk,
  BloodPressure,
  HeartAttackRisk,
  CardiacWorkload,
  StrokeRisk,
  Breathing,
  Type2DiabetesRisk,
  FattyLiverDiseaseRisk,
  HemoglobinA1C,
  Hypercholesterolemia,
  HealthScore,
  Hypertension,
  PulseRate,
  HeartRateVariability,
  FastingBloodGlucose,
  MentalStressIndex,
  OverallMetabolicHealthRisk,
  Hypertriglyceridemia,
  WaistToHeight,
} from '@nuralogix.ai/web-ui';

interface MetricIconProps {
  dfxPointId: DfxPointId;
  width?: string;
  height?: string;
}

export const MetricIcon: React.FC<MetricIconProps> = ({
  dfxPointId,
  width = '24px',
  height = '24px',
}) => {
  switch (dfxPointId) {
    case 'ABSI':
      return <BodyShapeIndex width={width} height={height} />;
    case 'BMI_CALC':
      return <BodyMassIndex width={width} height={height} />;
    case 'BP_CVD':
      return <CardioVascularDiseaseRisk width={width} height={height} />;
    case 'BP_DIASTOLIC':
    case 'BP_SYSTOLIC':
      return <BloodPressure width={width} height={height} />;
    case 'BP_HEART_ATTACK':
      return <HeartAttackRisk width={width} height={height} />;
    case 'BP_RPP':
      return <CardiacWorkload width={width} height={height} />;
    case 'BP_STROKE':
      return <StrokeRisk width={width} height={height} />;
    case 'BR_BPM':
      return <Breathing width={width} height={height} />;
    case 'DBT_RISK_PROB':
      return <Type2DiabetesRisk width={width} height={height} />;
    case 'FLD_RISK_PROB':
      return <FattyLiverDiseaseRisk width={width} height={height} />;
    case 'HBA1C_RISK_PROB':
      return <HemoglobinA1C width={width} height={height} />;
    case 'HDLTC_RISK_PROB':
      return <Hypercholesterolemia width={width} height={height} />;
    case 'HEALTH_SCORE':
      return <HealthScore width={width} height={height} />;
    case 'HPT_RISK_PROB':
      return <Hypertension width={width} height={height} />;
    case 'HR_BPM':
      return <PulseRate width={width} height={height} />;
    case 'HRV_SDNN':
      return <HeartRateVariability width={width} height={height} />;
    case 'MFBG_RISK_PROB':
      return <FastingBloodGlucose width={width} height={height} />;
    case 'MENTAL_SCORE':
      return <MentalStressIndex width={width} height={height} />;
    case 'MSI':
      return <MentalStressIndex width={width} height={height} />;
    case 'OVERALL_METABOLIC_RISK_PROB':
      return <OverallMetabolicHealthRisk width={width} height={height} />;
    case 'TG_RISK_PROB':
      return <Hypertriglyceridemia width={width} height={height} />;
    case 'VITAL_SCORE':
      return <HealthScore width={width} height={height} />;
    case 'WAIST_TO_HEIGHT':
      return <WaistToHeight width={width} height={height} />;
    default:
      return null;
  }
};
