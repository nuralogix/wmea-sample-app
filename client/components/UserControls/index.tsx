import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { useNavigate } from 'react-router';
import { Button, ThemeToggle } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';
import { useSnapshot } from 'valtio';
import state from '../../state';

export type ControlKey = 'language' | 'theme' | 'logout';

export type RenderItemParams = {
  key: ControlKey;
  element: React.ReactElement;
  index: number;
  count: number;
};

type Orientation = 'row' | 'column';

interface UserControlsProps {
  orientation?: Orientation;
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  gap?: number;
  renderItem?: (params: RenderItemParams) => React.ReactNode;
}

const styles = stylex.create({
  containerBase: {
    display: 'flex',
    alignItems: 'center',
  },
  containerRow: {
    flexDirection: 'row',
    gap: '16px',
  },
  containerColumn: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '12px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
});

const UserControls: React.FC<UserControlsProps> = ({
  orientation = 'row',
  align = 'center',
  gap,
  renderItem,
}) => {
  const { logout } = useSnapshot(state.auth);
  const { theme, setTheme, language, setLanguage } = useSnapshot(state.general);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const items: Array<{ key: ControlKey; element: React.ReactElement }> = [
    {
      key: 'language',
      element: (
        <Button variant="link" onClick={toggleLanguage}>
          {language === 'en' ? 'Français' : 'English'}
        </Button>
      ),
    },
    {
      key: 'theme',
      element: <ThemeToggle isDarkMode={theme === 'dark'} onToggle={toggleTheme} />,
    },
    {
      key: 'logout',
      element: (
        <Button variant="link" onClick={handleLogout}>
          {t('LOGOUT')}
        </Button>
      ),
    },
  ];

  const containerStyles = [
    styles.containerBase,
    orientation === 'column' ? styles.containerColumn : styles.containerRow,
  ];

  const inlineStyle = align ? { justifyContent: align, gap } : { gap };

  return (
    <div {...stylex.props(...containerStyles)} style={inlineStyle}>
      {items.map(({ key, element }, index) =>
        renderItem ? (
          <React.Fragment key={key}>
            {renderItem({ key, element, index, count: items.length })}
          </React.Fragment>
        ) : (
          <div key={key} {...stylex.props(styles.item)}>
            {element}
          </div>
        ),
      )}
    </div>
  );
};

export default UserControls;
