import React, { useState, useRef, useEffect } from 'react';
import * as stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';
import { useSnapshot } from 'valtio';
import state from '../state';
import type { SupportedLanguage } from '../types';
import { LANGUAGE_OPTIONS } from './UserControlButtons/constants';

// TODO move to UI library
const LanguageIcon = () => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: 20, height: 20, fill: 'currentColor' }}
  >
    <g>
      <path d="M478.33,433.6l-90-218a22,22,0,0,0-40.67,0l-90,218a22,22,0,1,0,40.67,16.79L316.66,406H419.33l18.33,44.39A22,22,0,0,0,458,464a22,22,0,0,0,20.32-30.4ZM334.83,362,368,281.65,401.17,362Z" />
      <path d="M267.84,342.92a22,22,0,0,0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73,39.65-53.68,62.11-114.75,71.27-143.49H330a22,22,0,0,0,0-44H214V70a22,22,0,0,0-44,0V90H54a22,22,0,0,0,0,44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-31.41-41.68-43.08-68.65-43.17-68.87a22,22,0,0,0-40.58,17c.58,1.38,14.55,34.23,52.86,83.93.92,1.19,1.83,2.35,2.74,3.51-39.24,44.35-77.74,71.86-93.85,80.74a22,22,0,1,0,21.07,38.63c2.16-1.18,48.6-26.89,101.63-85.59,22.52,24.08,38,35.44,38.93,36.1a22,22,0,0,0,30.75-4.9Z" />
    </g>
  </svg>
);

const styles = stylex.create({
  container: {
    position: 'relative',
    display: 'inline-block',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 10px',
    backgroundColor: 'var(--hover-bg, #f5f5f5)',
    border: '1px solid var(--border-hover-color, #ccc)',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
    color: 'currentColor',
    transition: 'all 0.2s ease',
    minWidth: 70,
  },
  buttonActive: {
    borderColor: 'var(--primary-color, #007bff)',
  },
  code: {
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: 600,
  },
  dropdown: {
    position: 'absolute',
    top: 'calc(100% + 4px)',
    right: 0,
    backgroundColor: 'var(--bg-color, white)',
    border: '1px solid var(--border-color, #e0e0e0)',
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    minWidth: 180,
    maxHeight: 320,
    overflowY: 'auto',
    padding: 4,
    '@media (max-width: 600px)': {
      position: 'fixed',
      right: 8,
      left: 8,
      top: 'auto',
      bottom: 80,
      minWidth: 'auto',
      maxWidth: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: 4,
    fontSize: 14,
    transition: 'background-color 0.15s ease',
    ':hover': {
      backgroundColor: 'var(--hover-bg, #f5f5f5)',
    },
  },
  optionActive: {
    backgroundColor: 'var(--primary-light, #e3f2fd)',
    fontWeight: 600,
    color: 'var(--primary-color, #007bff)',
  },
  optionCode: {
    fontSize: 12,
    color: 'var(--text-secondary, #666)',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginLeft: 12,
  },
});

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const generalSnap = useSnapshot(state.general);
  const { setLanguage } = state.general;
  const { t } = useTranslation();

  const currentLanguage = generalSnap.language ?? 'en';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (value: SupportedLanguage) => {
    setLanguage(value);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} {...stylex.props(styles.container)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        {...stylex.props(styles.button, isOpen && styles.buttonActive)}
      >
        <LanguageIcon />
        <span {...stylex.props(styles.code)}>{currentLanguage}</span>
      </button>
      {isOpen && (
        <div {...stylex.props(styles.dropdown)}>
          {LANGUAGE_OPTIONS.map(({ label, value }) => (
            <div
              key={value}
              onClick={() => handleSelect(value)}
              {...stylex.props(styles.option, currentLanguage === value && styles.optionActive)}
            >
              <span>{t(label)}</span>
              <span {...stylex.props(styles.optionCode)}>{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
