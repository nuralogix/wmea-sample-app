import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useSnapshot } from 'valtio';
import state from '../../state';

export const ProtectedRoute = () => {
  const { isLoggedIn, isDev, login } = useSnapshot(state.auth);

  useEffect(() => {
    if (isDev && !isLoggedIn) {
      login();
    }
  }, [isDev, isLoggedIn, login]);

  if (!isLoggedIn && !isDev) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
