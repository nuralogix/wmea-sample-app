import { proxy } from 'valtio';
import { GeneralState } from './types';

const savedTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

const generalState: GeneralState = proxy({
  theme: savedTheme,
  setTheme: (theme) => {
    generalState.theme = theme;
    localStorage.setItem('theme', theme);
  },
});

export default generalState;
