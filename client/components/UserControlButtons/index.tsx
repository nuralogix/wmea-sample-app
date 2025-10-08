import React from 'react';
import { Button, ThemeToggle } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useSnapshot } from 'valtio';
import state from '../../state';

export const LanguageToggleButton: React.FC = () => {
  const { language, setLanguage } = useSnapshot(state.general);

  const handleClick = () => {
    const nextLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(nextLanguage);
  };

  return (
    <Button variant="link" onClick={handleClick}>
      {language === 'en' ? 'Français' : 'English'}
    </Button>
  );
};

export const ThemeToggleControl: React.FC = () => {
  const { theme, setTheme } = useSnapshot(state.general);

  return (
    <ThemeToggle
      isDarkMode={theme === 'dark'}
      onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  );
};

export const LogoutButton: React.FC = () => {
  const { logout } = useSnapshot(state.auth);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    logout();
    navigate('/');
  };

  return (
    <Button variant="link" onClick={handleClick}>
      {t('LOGOUT')}
    </Button>
  );
};
