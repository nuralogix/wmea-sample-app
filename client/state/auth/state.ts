import { proxy } from 'valtio';
import { AuthState } from './types';

const authState: AuthState = proxy({
    isLoggedIn: false,
    login: () => {
        authState.isLoggedIn = true;
    },
    logout: () => {
        authState.isLoggedIn = true;
    },
});

export default authState;