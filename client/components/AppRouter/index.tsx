import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from '../../pages/NotFound';
import Profile from '../../pages/Profile';
import Measurement from '../../pages/Measurement';
import Results from '../../pages/Results';
import PageWrapper from '../PageWrapper';

const routes = [
  { path: '/', element: <Profile /> },
  { path: '/measurement', element: <Measurement /> },
  { path: '/results', element: <Results /> },
  { path: '*', element: <NotFound /> },
];

const AppRouter = () => (
  <BrowserRouter basename="/">
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={<PageWrapper>{element}</PageWrapper>} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
