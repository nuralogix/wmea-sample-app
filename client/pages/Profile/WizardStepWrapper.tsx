import React from 'react';

/**
 * Handles Enter key for keyboard submit in wizard flows.
 *
 */

interface WizardStepWrapperProps {
  onSubmit: () => void;
  isEnabled: boolean;
  children: React.ReactNode;
}

const WizardStepWrapper: React.FC<WizardStepWrapperProps> = ({ onSubmit, isEnabled, children }) => (
  <div
    tabIndex={-1}
    onKeyDown={(e) => {
      if (e.key === 'Enter' && isEnabled) {
        onSubmit();
      }
    }}
  >
    {children}
  </div>
);

export default WizardStepWrapper;
