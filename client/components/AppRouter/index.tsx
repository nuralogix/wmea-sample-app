import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/NotFound';
import Profile from '../../pages/Profile';
import Measurement from '../../pages/Measurement';
import Results from '../../pages/Results';
import PageWrapper from '../PageWrapper';
import { ProtectedRoute } from '../ProtectedRoute';
import Login from '../Login';

// Single list of protected routes, each already wrapped in its layout component.
const protectedRoutes = [
  {
    path: '/profile',
    element: (
      <PageWrapper>
        <Profile />
      </PageWrapper>
    ),
  },
  {
    path: '/results',
    element: (
      <PageWrapper>
        <Results />
      </PageWrapper>
    ),
  },
  {
    path: '/measurement',
    element: (
      <PageWrapper>
        <Measurement />
      </PageWrapper>
    ),
  },
];

const AppRouter = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        {protectedRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
