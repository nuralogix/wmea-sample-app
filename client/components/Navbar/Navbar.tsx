import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { useSnapshot } from 'valtio';
import state from '../../state';
import { Button, Heading, ThemeToggle } from '@nuralogix.ai/web-ui';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import MobileMenu from '../MobileMenu';

const styles = stylex.create({
  header: {
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    borderBottom: '1px solid var(--border-color, #e0e0e0)',
    boxSizing: 'border-box',
  },
  title: {
    margin: 0,
    fontSize: 16,
    '@media (min-width: 640px)': {
      fontSize: 18,
    },
    '@media (min-width: 900px)': {
      fontSize: 20,
    },
  },
  desktopActions: {
    display: 'none',
    '@media (min-width: 900px)': {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
  },
  mobileMenuWrapper: {
    display: 'flex',
    alignItems: 'center',
    '@media (min-width: 900px)': {
      display: 'none',
    },
  },
  menuInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
  },
  menuInnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  toggleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  toggleWrapperRow: {
    width: 'auto',
    justifyContent: 'flex-start',
  },
});

const Navbar: React.FC = () => {
  const { theme, setTheme, language, setLanguage } = useSnapshot(state.general);
  const { logout } = useSnapshot(state.auth);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const [screenWidth, setScreenWidth] = React.useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  React.useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isNarrow = screenWidth < 900;
  const titleKey = isNarrow ? 'APP_TITLE_SHORT' : 'APP_TITLE';

  const MenuContent: React.FC<{ orientation: 'row' | 'column' }> = ({ orientation }) => {
    const isRow = orientation === 'row';
    return (
      <div {...stylex.props(styles.menuInner, isRow && styles.menuInnerRow)}>
        <Button variant="link" onClick={toggleLanguage}>
          {language === 'en' ? 'Français' : 'English'}
        </Button>
        <div {...stylex.props(styles.toggleWrapper, isRow && styles.toggleWrapperRow)}>
          <ThemeToggle
            isDarkMode={theme === 'dark'}
            onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
        </div>
        <Button variant="link" onClick={handleLogout}>
          {t('LOGOUT')}
        </Button>
      </div>
    );
  };

  return (
    <header {...stylex.props(styles.header)}>
      <div {...stylex.props(styles.title)}>
        <Heading>{t(titleKey as any)}</Heading>
      </div>
      <div {...stylex.props(styles.desktopActions)}>
        <MenuContent orientation="row" />
      </div>
      <div {...stylex.props(styles.mobileMenuWrapper)}>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;
