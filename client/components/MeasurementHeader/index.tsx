import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { Heading } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import MobileMenu from '../MobileMenu';
import { LanguageSelector, ThemeToggleControl, LogoutButton } from '../UserControlButtons';

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
  desktopActions: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  mobileMenuWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: 18,
  },
});

const MeasurementHeader: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile, titleKey } = useMobileDetection();

  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.title)}>
        <Heading>{t(titleKey as any)}</Heading>
      </div>
      {!isMobile ? (
        <div {...stylex.props(styles.desktopActions)}>
          <LanguageSelector />
          <ThemeToggleControl />
          <LogoutButton />
        </div>
      ) : (
        <div {...stylex.props(styles.mobileMenuWrapper)}>
          <MobileMenu />
        </div>
      )}
    </div>
  );
};

export default MeasurementHeader;
