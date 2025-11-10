import React from 'react';
import Navbar from '../Navbar/Navbar';

interface PageWrapperProps {
  children?: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PageWrapper;
