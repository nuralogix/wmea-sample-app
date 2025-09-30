import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { useSnapshot } from 'valtio';
import state from '../../state';
import { useNavigate } from 'react-router';
import { Button, Rotate, ThemeToggle } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';
import { useMobileDetection } from '../../hooks/useMobileDetection';

const styles = stylex.create({
  wrapper: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 12px',
    boxSizing: 'border-box',
    borderBottom: '1px solid #2a2f35',
    background: 'var(--header-bg, #2d3339)',
  },
  leftGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  rightGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  rotateBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 40,
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.15)',
    cursor: 'pointer',
  },
  hiddenDesktop: {
    '@media (min-width: 900px)': {
      display: 'none',
    },
  },
  desktopBar: {
    display: 'none',
    '@media (min-width: 900px)': {
      display: 'flex',
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      borderBottom: '1px solid #ddd',
    },
  },
  desktopActions: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  // Removed mobile slide-out menu styles
});

interface MeasurementHeaderProps {
  onRotateCamera?: () => void;
}

const MeasurementHeader: React.FC<MeasurementHeaderProps> = ({ onRotateCamera }) => {
  const { logout } = useSnapshot(state.auth);
  const { theme, setTheme, language, setLanguage } = useSnapshot(state.general);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isMobile } = useMobileDetection();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
  };

  // Desktop: reuse style similar to regular navbar (without title to emphasize camera)
  if (!isMobile) {
    return (
      <div {...stylex.props(styles.desktopBar)}>
        <div style={{ fontWeight: 600 }}>{t('APP_TITLE')}</div>
        <div {...stylex.props(styles.desktopActions)}>
          <Button variant="link" onClick={toggleLanguage}>
            {language === 'en' ? 'Français' : 'English'}
          </Button>
          <ThemeToggle
            isDarkMode={theme === 'dark'}
            onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <Button variant="link" onClick={handleLogout}>
            {t('LOGOUT')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.leftGroup)}>
        <Button variant="link" aria-label="Logout" onClick={handleLogout}>
          ×
        </Button>
      </div>
      <div {...stylex.props(styles.rightGroup)}>
        <button
          type="button"
          aria-label="Rotate Camera"
          onClick={onRotateCamera}
          {...stylex.props(styles.rotateBtn)}
        >
          <Rotate width="20px" height="20px" />
        </button>
      </div>
    </div>
  );
};

export default MeasurementHeader;
