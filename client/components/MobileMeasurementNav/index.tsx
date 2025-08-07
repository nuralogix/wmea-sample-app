import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { Button, Rotate } from '@nuralogix.ai/web-ui';
import { useNavigate } from 'react-router';

const styles = stylex.create({
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 16px',
    height: '48px',
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  iconButton: {
    minWidth: '44px',
    minHeight: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
  },
  spacer: {
    flex: 1,
  },
});

const MobileMeasurementNav: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleFlipCamera = () => {
    // TODO: Implement camera flip functionality
    console.log('Camera flip requested');
  };

  return (
    <nav {...stylex.props(styles.navbar)}>
      <div {...stylex.props(styles.iconButton)}>
        <Button variant="link" onClick={handleBack} aria-label="Go back">
          ←
        </Button>
      </div>
      <div {...stylex.props(styles.spacer)} />
      <div {...stylex.props(styles.iconButton)}>
        <Button variant="link" onClick={handleFlipCamera} aria-label="Flip camera">
          <Rotate height="24px" width="24px" />
        </Button>
      </div>
    </nav>
  );
};

export default MobileMeasurementNav;
