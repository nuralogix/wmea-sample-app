import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { Button, HamburgerMenu, Cross, Card } from '@nuralogix.ai/web-ui';
import { LanguageSelector, ThemeToggleControl, LogoutButton } from '../UserControlButtons';

const styles = stylex.create({
  mobileMenuToggle: {
    display: 'flex',
    alignItems: 'center',
  },
  mobileMenuPanel: {
    position: 'absolute',
    top: 64,
    right: 8,
    zIndex: 1000,
    minWidth: 180,
    maxWidth: 220,
    display: 'flex',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuInner: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 4,
    gap: 0,
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 12px',
    borderRadius: 6,
    cursor: 'pointer',
    transition: 'background-color 0.15s ease',
    ':hover': {
      backgroundColor: 'var(--hover-bg, rgba(0, 0, 0, 0.04))',
    },
    ':active': {
      backgroundColor: 'var(--active-bg, rgba(0, 0, 0, 0.08))',
    },
  },
  separator: {
    height: 1,
    backgroundColor: 'var(--border-light, #e8e8e8)',
    margin: '2px 8px',
  },
  logoutItem: {
    color: 'var(--error-color, #dc2626)',
    fontWeight: 500,
  },
  themeToggleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
});

const MobileMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false);

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
          <Card width="100%">
            <div {...stylex.props(styles.menuInner)}>
              <div {...stylex.props(styles.menuItem)}>
                <LanguageSelector />
              </div>
              <div {...stylex.props(styles.separator)} />
              <div {...stylex.props(styles.menuItem)}>
                <div {...stylex.props(styles.themeToggleWrapper)}>
                  <ThemeToggleControl />
                </div>
              </div>
              <div {...stylex.props(styles.separator)} />
              <div {...stylex.props(styles.menuItem, styles.logoutItem)}>
                <LogoutButton />
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
