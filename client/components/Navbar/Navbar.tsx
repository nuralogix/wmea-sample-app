import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { useSnapshot } from 'valtio';
import state from '../../state';
import { Button, Heading, ThemeToggle } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';

const styles = stylex.create({
  header: {
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    borderBottom: '1px solid #ddd',
  },
  right: {
    marginRight: '2rem',
    display: 'flex',
    gap: '1rem',
  },
});

const Navbar: React.FC = () => {
  const { theme, setTheme } = useSnapshot(state.general);
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header {...stylex.props(styles.header)}>
      {/* TODO replace with logo? */}
      <Heading>Anura Web Sample App</Heading>
      <div {...stylex.props(styles.right)}>
        <Button variant="link" onClick={toggleLanguage}>
          {i18n.language === 'en' ? 'Français' : 'English'}
        </Button>
        {/* TODO replace with toggle */}
        <ThemeToggle
          isDarkMode={theme === 'dark'}
          onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        {/* <Button variant="outline" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Change theme
        </Button> */}
      </div>
    </header>
  );
};

export default Navbar;
