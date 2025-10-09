import { Navigate, Outlet } from 'react-router-dom';
import { useSnapshot } from 'valtio';
import state from '../../state';

export const ProtectedRoute = () => {
  const { isLoggedIn } = useSnapshot(state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
