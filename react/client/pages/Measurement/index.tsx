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
import { isUiErrorCode, isCancelOnErrorCode } from './constants';

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
          console.log('Error received: ', error.code, error.message);
        };
        measurementApp.on.event = (appEvent) => {
          switch (appEvent) {
            case appEvents.APP_LOADED:
              break;
            case appEvents.ASSETS_DOWNLOADED:
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
            case appEvents.MEASUREMENT_PREPARED:
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
