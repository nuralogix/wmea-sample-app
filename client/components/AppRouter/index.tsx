import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from '../../pages/NotFound';
import Profile from '../../pages/Profile';
import Measurement from '../../pages/Measurement';
import Results from '../../pages/Results';
import PageWrapper from '../PageWrapper';
import { ProtectedRoute } from '../ProtectedRoute';
import Login from '../Login';

const routes = [
  { path: '/profile', element: <Profile /> },
  { path: '/measurement', element: <Measurement /> },
  { path: '/results', element: <Results /> },
];

const AppRouter = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={<PageWrapper>{element}</PageWrapper>} />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
