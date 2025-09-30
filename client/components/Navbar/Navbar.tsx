import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { useSnapshot } from 'valtio';
import state from '../../state';
import { Button, Heading, ThemeToggle, HamburgerMenu, Cross, Card } from '@nuralogix.ai/web-ui';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const styles = stylex.create({
  header: {
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    borderBottom: '1px solid #ddd',
    boxSizing: 'border-box',
  },
  title: {
    margin: 0,
    fontSize: 18,
    '@media (min-width: 640px)': {
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
  mobileMenuToggle: {
    display: 'flex',
    alignItems: 'center',
    '@media (min-width: 900px)': {
      display: 'none',
    },
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

  const [open, setOpen] = React.useState(false);
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

  const closeMenu = () => setOpen(false);

  const MenuContent: React.FC<{ orientation: 'row' | 'column'; closeOnAction?: boolean }> = ({
    orientation,
    closeOnAction = true,
  }) => {
    const isRow = orientation === 'row';
    return (
      <div {...stylex.props(styles.menuInner, isRow && styles.menuInnerRow)}>
        <Button
          variant="link"
          onClick={() => {
            toggleLanguage();
            if (closeOnAction) closeMenu();
          }}
        >
          {language === 'en' ? 'Français' : 'English'}
        </Button>
        <div {...stylex.props(styles.toggleWrapper, isRow && styles.toggleWrapperRow)}>
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
            if (closeOnAction) closeMenu();
          }}
        >
          {t('LOGOUT')}
        </Button>
      </div>
    );
  };

  return (
    <header {...stylex.props(styles.header)}>
      <Heading>{t(titleKey as any)}</Heading>
      <div {...stylex.props(styles.desktopActions)}>
        <MenuContent orientation="row" closeOnAction={false} />
      </div>
      <div {...stylex.props(styles.mobileMenuToggle)}>
        <Button
          variant="link"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <Cross width="15px" height="15px" />
          ) : (
            <HamburgerMenu width="24px" height="24px" />
          )}
        </Button>
        {open && (
          <div id="mobile-nav-menu" role="menu" {...stylex.props(styles.mobileMenuPanel)}>
            <Card width="100%" padding="s">
              <MenuContent orientation="column" />
            </Card>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
