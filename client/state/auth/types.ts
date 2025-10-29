export type AuthState = {
  isLoggedIn: boolean;
  hasPreviouslyAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};
