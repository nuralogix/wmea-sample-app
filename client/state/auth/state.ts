import { proxy } from 'valtio';
import { AuthState } from './types';

const isDev = !!process.env.IS_DEVELOPMENT;

const authState: AuthState = proxy({
    isLoggedIn: isDev ? true : false,
    autoLoginEnabled: isDev,
    login: () => {
        authState.isLoggedIn = true;
    },
    logout: () => {
        authState.isLoggedIn = false;
    },
});

export default authState;