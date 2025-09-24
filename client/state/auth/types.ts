export type AuthState = {
  isLoggedIn: boolean;
  autoLoginEnabled: boolean;
  login: () => void;
  logout: () => void;
};