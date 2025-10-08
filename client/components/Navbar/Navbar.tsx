import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { Heading } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';
import MobileMenu from '../MobileMenu';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import UserControls from '../UserControls';

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
    fontSize: 18,
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
});

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  const { titleKey } = useMobileDetection();

  const MenuContent: React.FC<{ orientation: 'row' | 'column' }> = ({ orientation }) => {
    const isRow = orientation === 'row';
    return (
      <div {...stylex.props(styles.menuInner, isRow && styles.menuInnerRow)}>
        <UserControls orientation={orientation} />
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
