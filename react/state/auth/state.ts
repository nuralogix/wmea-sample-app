import { proxy } from 'valtio';
import { AuthState } from './types';
import {
  getHasPreviouslyAuthenticated,
  markPreviouslyAuthenticated,
  clearPreviousAuth,
} from '../../utils/localStorage';

const authState: AuthState = proxy({
  isLoggedIn: getHasPreviouslyAuthenticated(),
  hasPreviouslyAuthenticated: getHasPreviouslyAuthenticated(),
  login: () => {
    authState.isLoggedIn = true;
    if (!authState.hasPreviouslyAuthenticated) {
      markPreviouslyAuthenticated();
      authState.hasPreviouslyAuthenticated = true;
    }
  },
  logout: () => {
    authState.isLoggedIn = false;
    clearPreviousAuth();
    authState.hasPreviouslyAuthenticated = false;
  },
});

export default authState;
