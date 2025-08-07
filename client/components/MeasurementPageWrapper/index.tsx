import React from 'react';
import MeasurementNavbar from '../MobileMeasurementNav';
import Navbar from '../Navbar/Navbar';
import { useMobileDetection } from '../../hooks/useMobileDetection';

interface MeasurementPageWrapperProps {
  children?: React.ReactNode;
}

const MeasurementPageWrapper: React.FC<MeasurementPageWrapperProps> = ({ children }) => {
  const { isMobile } = useMobileDetection();

  return (
    <>
      {isMobile ? <MeasurementNavbar /> : <Navbar />}
      {children}
    </>
  );
};

export default MeasurementPageWrapper;
