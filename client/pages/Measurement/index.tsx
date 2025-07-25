import { useEffect } from 'react';
import AnuraApplet, {
  faceAttributeValue,
  type Demographics,
} from '@nuralogix.ai/web-measurement-embedded-app';
import { useNavigate } from 'react-router';
import { useSnapshot } from 'valtio';
import state from '../../state';

const anuraApplet = new AnuraApplet();

const Measurement = () => {
  const { setResults } = useSnapshot(state.measurement);
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      const container = document.createElement('div');
      const {
        SEX_ASSIGNED_MALE_AT_BIRTH,
        SMOKER_FALSE,
        BLOOD_PRESSURE_MEDICATION_FALSE,
        DIABETES_NONE,
      } = faceAttributeValue;

      const profile: Demographics = {
        age: 40,
        height: 180,
        weight: 60,
        sex: SEX_ASSIGNED_MALE_AT_BIRTH,
        smoking: SMOKER_FALSE,
        bloodPressureMedication: BLOOD_PRESSURE_MEDICATION_FALSE,
        diabetes: DIABETES_NONE,
        unit: 'Metric',
      };

      const apiUrl = '/api';
      const studyId = await fetch(`${apiUrl}/studyId`);
      const studyIdResponse = await studyId.json();
      const token = await fetch(`${apiUrl}/token`);
      const tokenResponse = await token.json();

      if (studyIdResponse.status === '200' && tokenResponse.status === '200') {
        anuraApplet.init({
          container,
          top: '93.5px',
          appPath: './measurement-app',
          settings: {
            token: tokenResponse.token,
            refreshToken: tokenResponse.refreshToken,
            studyId: studyIdResponse.studyId,
          },
          profile,
          loadError: function (error) {
            console.error('load error', error);
          },
        });
        anuraApplet.on.results = (results) => {
          console.log('Results received', results);
          setResults(results);
          navigate('/results');
          // anuraApplet.destroy();
        };
        anuraApplet.on.error = (error) => {
          console.log('error received', error);
        };
        anuraApplet.on.webhook = (webhook) => {
          console.log('Webhook received', webhook);
        };
        anuraApplet.on.cancel = () => {
          console.log('Measurement cancelled');
        };
      } else {
        console.error('Failed to get Study ID and Token pair');
      }
    })();
    return () => {
      anuraApplet.destroy();
    };
  }, []);
  return null;
};

export default Measurement;
