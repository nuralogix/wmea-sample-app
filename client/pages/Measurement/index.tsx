import { useEffect } from 'react';
import AnuraApplet, {
  faceAttributeValue,
  type Demographics,
  type AppSettings,
} from '@nuralogix.ai/anura-online';
import { useNavigate } from 'react-router';
import { useSnapshot } from 'valtio';
import state from '../../state';

const anuraApplet = new AnuraApplet();

const Measurement = () => {
  const { setResutls } = useSnapshot(state.measurement);
  const navigate = useNavigate();

  useEffect(() => {
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

    const settings: AppSettings = {
      token: 'token-value',
      refreshToken: 'refresh-token-value',
      studyId: 'study-id-value',
    };

    anuraApplet.init({
      container,
      appPath: '.',
      settings,
      profile,
      loadError: function (error) {
        console.error('error', error);
      },
    });
    anuraApplet.on.results = (results) => {
      setResutls(results);
      navigate('/results');
    };
    anuraApplet.on.error = (error) => {
      console.log('error received', error);
    };
    anuraApplet.on.webhook = (webhook) => {
      console.log('Webhook received', webhook);
    };
    return () => {
      anuraApplet.destroy();
    };
  }, []);
  return null;
};

export default Measurement;
