export type AuthState = {
  isLoggedIn: boolean;
  isDev: boolean; // true when running in development mode; governs auto login & dev-only UI
  login: () => void;
  logout: () => void;
};
