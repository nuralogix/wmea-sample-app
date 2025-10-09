export type AuthState = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};
