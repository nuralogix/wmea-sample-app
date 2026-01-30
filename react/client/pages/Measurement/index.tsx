import { useEffect, useState } from 'react';
import MeasurementEmbeddedApp, {
  appEvents,
  ErrorCodes,
  type MeasurementEmbeddedAppError,
  type MeasurementEmbeddedAppOptions,
} from '@nuralogix.ai/web-measurement-embedded-app';

import { useNavigate } from 'react-router';
import { useSnapshot } from 'valtio';
import { isUiErrorCode, isCancelOnErrorCode } from './constants';
import state from '../../state';
import ErrorMessage from './ErrorMessage';
import MeasurementHeader from '../../components/MeasurementHeader';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100dvh',
    width: '100%',
    overflow: 'hidden',
  },
});

const Measurement = () => {
  const [measurementApp] = useState(() => new MeasurementEmbeddedApp());
  const [isInit, setIsInit] = useState(false);
  const { setResults } = useSnapshot(state.measurement);
  const { theme, language } = useSnapshot(state.general);
  const { demographics } = useSnapshot(state.demographics);
  const navigate = useNavigate();
  const [appError, setAppError] = useState<MeasurementEmbeddedAppError | null>(null);

  useEffect(() => {
    (async function () {
      const container = document.createElement('div');
      container.id = 'measurement-embedded-app-container';
      document.body.appendChild(container);

      const apiUrl = '/api';
      const studyId = await fetch(`${apiUrl}/studyId`);
      const studyIdResponse = await studyId.json();
      const token = await fetch(`${apiUrl}/token`);
      const tokenResponse = await token.json();

      if (studyIdResponse.status === '200' && tokenResponse.status === '200') {
        const options: MeasurementEmbeddedAppOptions = {
          container,
          ...(language && { language }),
          appPath: './wmea',
          // apiUrl: 'api.na-east.deepaffex.ai',
          settings: {
            token: tokenResponse.token,
            refreshToken: tokenResponse.refreshToken,
            studyId: studyIdResponse.studyId,
            // measurementOptions: {
            //   partnerId: 'test-partner-id',
            //   userProfileId: '550e8400-e29b-41d4-a716-446655440000',
            // },
          },
          profile: demographics,
          config: {
            checkConstraints: true,
            cameraFacingMode: 'user',
            cameraAutoStart: false,
            measurementAutoStart: false,
            cancelWhenLowSNR: true,
          },
        };

        measurementApp.on.results = (results) => {
          setResults(results);
          navigate('/results');
        };
        measurementApp.on.error = async (error) => {
          if (isCancelOnErrorCode(error.code)) {
            try {
              await measurementApp.cancel(true);
            } catch (e) {
              console.warn('Failed to cancel after error code', error.code, e);
            }
          }
          if (isUiErrorCode(error.code)) {
            setAppError(error);
          }
          switch (error.code) {
            case ErrorCodes.MEASUREMENT_PREPARE_FAILED:
              console.error('Credentials are invalid or missing');
              console.error('Check your token, refreshToken, or studyId');
              break;
            default:
              console.log('Error received: ', error.code, error.message);
              break;
          }
        };
        measurementApp.on.event = (appEvent) => {
          switch (appEvent) {
            case appEvents.APP_LOADED:
              break;
            case appEvents.ASSETS_DOWNLOADED:
              console.log('Assets downloaded, ready to measure!');
              break;
            case appEvents.FACE_TRACKER_LOADED:
              console.log('Face tracker loaded:', appEvent.payload.version);
              break;
            case appEvents.CAMERA_PERMISSION_GRANTED:
              break;
            case appEvents.CAMERA_STARTED:
              break;
            case appEvents.CONSTRAINT_VIOLATION:
              console.warn('Constraint violated:', appEvent.payload.code);
              break;
            case appEvents.INTERMEDIATE_RESULTS:
              console.log('Intermediate results received:', appEvent.payload.points);
              break;
            case appEvents.MEASUREMENT_CANCELED:
              console.log('User manually canceled the measurement or closed the camera');
              console.log('Measurement ID: ', appEvent.payload.measurementId);
              break;
            case appEvents.MEASUREMENT_COMPLETED:
              break;
            case appEvents.MEASUREMENT_PREPARED:
              console.log(
                'Token pairs have been validated and renewed. The study config file has been downloaded.'
              );
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
        try {
          await measurementApp.init(options);
          setIsInit(true);
          measurementApp.setTheme(theme);
        } catch (error) {
          console.error('Failed to initialize MeasurementEmbeddedApp:', error);
        }
      } else {
        console.error('Failed to get Study ID and Token pair');
      }
    })();
    return () => {
      const cleanup = async () => {
        const logs = await measurementApp.getLogs();
        console.log('WMEA Logs:', logs);
        // Destroy the instance and free up resources
        await measurementApp.destroy();
        setIsInit(false);
        const container = document.getElementById('measurement-embedded-app-container');
        if (container) {
          document.body.removeChild(container);
        }
      };
      cleanup();
    };
  }, []);

  // Listen for theme changes and update the measurement app
  useEffect(() => {
    if (isInit) {
      measurementApp.setTheme(theme);
    }
  }, [theme, isInit]);

  // Listen for language changes and update the measurement app
  useEffect(() => {
    if (isInit && language) {
      measurementApp.setLanguage(language);
    }
  }, [language, isInit]);

  const onClear = () => {
    setAppError(null);
  };

  return (
    <div {...stylex.props(styles.container)}>
      <MeasurementHeader />
      {appError ? <ErrorMessage error={appError} onClear={onClear} /> : null}
    </div>
  );
};

export default Measurement;
