import { Routes, Route } from 'react-router';
import NotFound from '../../pages/NotFound';
import Profile from '../../pages/Profile';
import Measurement from '../../pages/Measurement';
import Results from '../../pages/Results';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/measurement" element={<Measurement />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
