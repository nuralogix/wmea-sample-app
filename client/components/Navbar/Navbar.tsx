import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { useSnapshot } from 'valtio';
import state from '../../state';
import { Button, Heading, ThemeToggle } from '@nuralogix.ai/web-ui';
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
  right: {
    marginRight: '2rem',
    display: 'flex',
    gap: '1rem',
  },
});

const Navbar: React.FC = () => {
  const { theme, setTheme, language, setLanguage } = useSnapshot(state.general);
  const { logout } = useSnapshot(state.auth);
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header {...stylex.props(styles.header)}>
      {/* TODO replace with logo? */}
      <Heading>Web Measurement Embedded Sample App</Heading>
      <div {...stylex.props(styles.right)}>
        <Button variant="link" onClick={toggleLanguage}>
          {language === 'en' ? 'Français' : 'English'}
        </Button>
        <ThemeToggle
          isDarkMode={theme === 'dark'}
          onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <Button variant="link" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
