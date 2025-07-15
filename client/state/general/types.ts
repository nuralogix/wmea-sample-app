type Theme = 'light' | 'dark';

export type GeneralState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
