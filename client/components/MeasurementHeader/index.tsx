import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { useSnapshot } from 'valtio';
import state from '../../state';
import { useNavigate } from 'react-router';
import { Button, ThemeToggle } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import MobileMenu from '../MobileMenu';

const styles = stylex.create({
  wrapper: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 12px',
    boxSizing: 'border-box',
    borderBottom: '1px solid #e0e0e0',
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

  hiddenDesktop: {
    '@media (min-width: 900px)': {
      display: 'none',
    },
  },

  desktopActions: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  mobileMenuWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
});

const MeasurementHeader: React.FC = () => {
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

  return (
    <div {...stylex.props(styles.wrapper)}>
      {!isMobile ? (
        <>
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
        </>
      ) : (
        <>
          <div>{/* Empty left side */}</div>
          <div {...stylex.props(styles.mobileMenuWrapper)}>
            <MobileMenu />
          </div>
        </>
      )}
    </div>
  );
};

export default MeasurementHeader;
