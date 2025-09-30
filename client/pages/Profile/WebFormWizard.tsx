import { useState, useEffect } from 'react';
import { Heading, Card, Paragraph } from '@nuralogix.ai/web-ui';
import * as stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';
import ProfileInfo from './ProfileInfo';
import MedicalQuestionnaire from './MedicalQuestionnaire';
import { FormState, WizardStep } from './types';
import { isFormValid } from './utils/validationUtils';
import { INITIAL_FORM_STATE, WIZARD_STEPS, FORM_FIELDS, FORM_VALUES } from './constants';
import { convertFormStateToSDKDemographics } from './utils/utils';
import { useNavigate } from 'react-router';
import state from '../../state';
import { useSnapshot } from 'valtio';

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '40px 20px',
    boxSizing: 'border-box',
    height: 'calc(100vh - 64px)',
    overflowY: 'auto',
    width: '100%',
  },
  card: {
    padding: '32px',
    maxWidth: '450px',
    width: '100%',
    '@media (min-width: 640px)': {
      maxWidth: '560px',
      padding: '40px',
    },
    '@media (min-width: 900px)': {
      maxWidth: '640px',
    },
  },
  introMessage: {
    marginBottom: '24px',
  },
  skipRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  skipBtn: {
    background: 'none',
    border: 'none',
    color: '#666',
    cursor: 'pointer',
    fontSize: 12,
    textDecoration: 'underline',
  },
});

const FormWizard = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<WizardStep>(WIZARD_STEPS.PROFILE);
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);
  const navigate = useNavigate();

  // Clear height and weight values when unit changes
  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      [FORM_FIELDS.HEIGHT_METRIC]: '',
      [FORM_FIELDS.HEIGHT_FEET]: '',
      [FORM_FIELDS.HEIGHT_INCHES]: '',
      [FORM_FIELDS.WEIGHT]: '',
    }));
  }, [formState.unit]);

  const { isDev } = useSnapshot(state.auth);

  const handleSkipProfile = () => {
    const base = state.demographics.demographics;
    state.demographics.setDemographics({ ...base, bypassProfile: true });
    navigate('/measurement');
  };

  const handleNextStep = () => {
    setCurrentStep(WIZARD_STEPS.MEDICAL);
  };

  const handlePreviousStep = () => {
    setCurrentStep(WIZARD_STEPS.PROFILE);
  };

  const handleSubmit = () => {
    // Defensive validation check but disabled btns should prevent this
    if (!isFormValid(formState)) {
      // TODO: Show error notification to user if needed
      return;
    }

    // Convert form data to SDK format before pushing to store
    const demographicsData = convertFormStateToSDKDemographics(formState);

    // Update the demographics store
    state.demographics.setDemographics(demographicsData);

    // Navigate to measurement page
    navigate('/measurement');
  };

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Card xstyle={styles.card}>
        {isDev && (
          <div {...stylex.props(styles.skipRow)}>
            <button type="button" {...stylex.props(styles.skipBtn)} onClick={handleSkipProfile}>
              Skip Profile
            </button>
          </div>
        )}
        <Heading>
          {currentStep === WIZARD_STEPS.PROFILE
            ? t('PROFILE_FORM_STEP_1_TITLE')
            : t('PROFILE_FORM_STEP_2_TITLE')}
        </Heading>
        <div {...stylex.props(styles.introMessage)}>
          <Paragraph>{t('PROFILE_FORM_INTRO_MESSAGE')}</Paragraph>
        </div>

        {currentStep === WIZARD_STEPS.PROFILE && (
          <ProfileInfo formState={formState} setFormState={setFormState} onNext={handleNextStep} />
        )}

        {currentStep === WIZARD_STEPS.MEDICAL && (
          <MedicalQuestionnaire
            formState={formState}
            setFormState={setFormState}
            onSubmit={handleSubmit}
            onBack={handlePreviousStep}
          />
        )}
      </Card>
    </div>
  );
};

export default FormWizard;
