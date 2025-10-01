import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { useSnapshot } from 'valtio';
import state from '../../state';
import { useNavigate } from 'react-router';
import { Button, ThemeToggle, HamburgerMenu, Cross, Card } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';

const styles = stylex.create({
  mobileMenuToggle: {
    display: 'flex',
    alignItems: 'center',
  },
  mobileMenuPanel: {
    position: 'absolute',
    top: 60,
    right: 8,
    zIndex: 1000,
    minWidth: 200,
    display: 'flex',
  },
  menuInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
  },
  toggleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
});

const MobileMenu: React.FC = () => {
  const { logout } = useSnapshot(state.auth);
  const { theme, setTheme, language, setLanguage } = useSnapshot(state.general);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
  };

  const MenuContent = () => (
    <div {...stylex.props(styles.menuInner)}>
      <Button
        variant="link"
        onClick={() => {
          toggleLanguage();
          closeMenu();
        }}
      >
        {language === 'en' ? 'Français' : 'English'}
      </Button>
      <div {...stylex.props(styles.toggleWrapper)}>
        <ThemeToggle
          isDarkMode={theme === 'dark'}
          onToggle={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        />
      </div>
      <Button
        variant="link"
        onClick={() => {
          handleLogout();
          closeMenu();
        }}
      >
        {t('LOGOUT')}
      </Button>
    </div>
  );

  return (
    <div {...stylex.props(styles.mobileMenuToggle)}>
      <Button
        variant="link"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <Cross width="15px" height="15px" /> : <HamburgerMenu width="24px" height="24px" />}
      </Button>
      {open && (
        <div id="mobile-nav-menu" role="menu" {...stylex.props(styles.mobileMenuPanel)}>
          <Card width="100%" padding="s">
            <MenuContent />
          </Card>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
