import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { Button, Rotate } from '@nuralogix.ai/web-ui';
import { useNavigate } from 'react-router';

const styles = stylex.create({
  header: {
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    borderBottom: '1px solid #ddd',
  },
  iconButton: {
    minWidth: '44px',
    minHeight: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
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
    <header {...stylex.props(styles.header)}>
      <div {...stylex.props(styles.iconButton)}>
        <Button variant="link" onClick={handleBack} aria-label="Go back">
          ←
        </Button>
      </div>

      <div {...stylex.props(styles.iconButton)}>
        <Button variant="link" onClick={handleFlipCamera} aria-label="Flip camera">
          <Rotate height="24px" width="24px" />
        </Button>
      </div>
    </header>
  );
};

export default MobileMeasurementNav;
