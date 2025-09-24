import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useSnapshot } from 'valtio';
import state from '../../state';

export const ProtectedRoute = () => {
  const { isLoggedIn, autoLoginEnabled, login } = useSnapshot(state.auth);

  useEffect(() => {
    if (autoLoginEnabled && !isLoggedIn) {
      login();
    }
  }, [autoLoginEnabled, isLoggedIn, login]);

  if (!isLoggedIn && !autoLoginEnabled) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
