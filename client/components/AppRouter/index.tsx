import { Routes, Route } from 'react-router';
import NotFound from '../../pages/NotFound';
import Profile from '../../pages/Profile';
import Measurement from '../../pages/Measurement';
import Results from '../../pages/Results';
import PageWrapper from '../PageWrapper';
import MeasurementPageWrapper from '../MeasurementPageWrapper';

const AppRouter = () => (
  <Routes>
    <Route
      path="/"
      element={
        <PageWrapper>
          <Profile />
        </PageWrapper>
      }
    />
    <Route
      path="/measurement"
      element={
        <MeasurementPageWrapper>
          <Measurement />
        </MeasurementPageWrapper>
      }
    />
    <Route
      path="/results"
      element={
        <PageWrapper>
          <Results />
        </PageWrapper>
      }
    />
    <Route
      path="*"
      element={
        <PageWrapper>
          <NotFound />
        </PageWrapper>
      }
    />
  </Routes>
);

export default AppRouter;
