import { proxy } from 'valtio';
import { AuthState } from './types';

// Single source of truth for dev mode
const isDevEnv = !!process.env.IS_DEVELOPMENT;

const authState: AuthState = proxy({
  isLoggedIn: isDevEnv ? true : false,
  isDev: isDevEnv,
  login: () => {
    authState.isLoggedIn = true;
  },
  logout: () => {
    // In dev mode we keep the user "logged in" to streamline testing
    if (authState.isDev) return;
    authState.isLoggedIn = false;
  },
});

export default authState;
