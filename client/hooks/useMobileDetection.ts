import { useState, useEffect } from 'react';

interface MobileDetection {
  isMobile: boolean;
  screenWidth: number;
}

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

export const useMobileDetection = (): MobileDetection => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth < TABLET_BREAKPOINT;

  return {
    isMobile,
    screenWidth,
  };
};
