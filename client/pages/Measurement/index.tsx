import { useEffect, useState } from 'react';
import MeasurementEmbeddedApp, {
  appEvents,
  type MeasurementEmbeddedAppError,
  type MeasurementEmbeddedAppOptions,
} from '@nuralogix.ai/web-measurement-embedded-app';
import { useNavigate } from 'react-router';
import { useSnapshot } from 'valtio';
import state from '../../state';
import ErrorMessage from './ErrorMessage';

const Measurement = () => {
  const [measurementApp] = useState(() => new MeasurementEmbeddedApp());
  const { setResults } = useSnapshot(state.measurement);
  const { theme, language } = useSnapshot(state.general);
  const { demographics } = useSnapshot(state.demographics);
  const navigate = useNavigate();
  const [appError, setAppError] = useState<MeasurementEmbeddedAppError | null>(null);

  useEffect(() => {
    (async function () {
      const container = document.createElement('div');

      const apiUrl = '/api';
      const studyId = await fetch(`${apiUrl}/studyId`);
      const studyIdResponse = await studyId.json();
      const token = await fetch(`${apiUrl}/token`);
      const tokenResponse = await token.json();

      if (studyIdResponse.status === '200' && tokenResponse.status === '200') {
        const options: MeasurementEmbeddedAppOptions = {
          container,
          top: '93.5px',
          language,
          appPath: './wmea',
          apiUrl: 'api.deepaffex.ai',
          settings: {
            token: tokenResponse.token,
            refreshToken: tokenResponse.refreshToken,
            studyId: studyIdResponse.studyId,
          },
          profile: demographics,
          config: {
            checkConstraints: true,
            cameraFacingMode: 'user',
            cameraAutoStart: false,
            measurementAutoStart: false,
          },
          loadError: function (error) {
            console.error('load error', error);
          },
        };
        measurementApp.init(options);

        measurementApp.on.results = (results) => {
          setResults(results);
          navigate('/results');
        };
        measurementApp.on.error = (error) => {
          // Update only if null to avoid overwriting the first error
          setAppError((prev) => {
            return prev === null ? error : prev;
          });
          console.log('Error received', error);
        };
        measurementApp.on.event = (appEvent) => {
          switch (appEvent) {
            case appEvents.APP_LOADED:
              break;
            case appEvents.CAMERA_PERMISSION_GRANTED:
              break;
            case appEvents.CAMERA_STARTED:
              break;
            case appEvents.CONSTRAINT_VIOLATION:
              break;
            case appEvents.INTERMEDIATE_RESULTS:
              break;
            case appEvents.MEASUREMENT_CANCELED:
              break;
            case appEvents.MEASUREMENT_COMPLETED:
              break;
            case appEvents.MEASUREMENT_STARTED:
              break;
            case appEvents.PAGE_UNLOADED:
              break;
            case appEvents.PAGE_VISIBILITY_CHANGE:
              break;
            case appEvents.RESULTS_RECEIVED:
              break;
            default:
              break;
          }
          console.log('App event received', appEvent);
        };
      } else {
        console.error('Failed to get Study ID and Token pair');
      }
    })();
    return () => {
      const cleanup = async () => {
        // Close the camera and hide the mask but not reset the SDK
        await measurementApp.cancel(false);
        const logs = await measurementApp.getLogs();
        console.log('WMEA Logs:', logs);
        // Destroy the instance and free up resources
        measurementApp.destroy();
      };
      cleanup();
    };
  }, []);

  // Listen for theme changes and update the measurement app
  useEffect(() => {
    measurementApp.setTheme(theme);
  }, [theme]);

  // Listen for language changes and update the measurement app
  useEffect(() => {
    measurementApp.setLanguage(language);
  }, [language]);

  const onClear = () => {
    setAppError(null);
  };

  return <>{appError ? <ErrorMessage error={appError} onClear={onClear} /> : null}</>;
};

export default Measurement;
