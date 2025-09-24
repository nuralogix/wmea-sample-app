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

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '40px 20px',
    boxSizing: 'border-box',
  },
  card: {
    padding: '32px',
    maxWidth: '450px',
    width: '100%',
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

  const isDev = !!process.env.IS_DEVELOPMENT;

  const handleSkipProfile = () => {
    // Build a full valid FormState with SDK-aligned numeric string values.
    // Fall back to known safe defaults if user hasn't entered anything yet.
    const skipFormState: FormState = {
      [FORM_FIELDS.UNIT]: FORM_VALUES.METRIC,
      [FORM_FIELDS.HEIGHT_METRIC]: formState.heightMetric || '180',
      [FORM_FIELDS.HEIGHT_FEET]: '',
      [FORM_FIELDS.HEIGHT_INCHES]: '',
      [FORM_FIELDS.WEIGHT]: formState.weight || '60',
      [FORM_FIELDS.AGE]: formState.age || '40',
      [FORM_FIELDS.SEX]: formState.sex || FORM_VALUES.MALE, // valid male value
      [FORM_FIELDS.SMOKING]: formState.smoking || FORM_VALUES.SMOKER_FALSE,
      [FORM_FIELDS.BLOOD_PRESSURE_MED]:
        formState.bloodPressureMed || FORM_VALUES.BLOOD_PRESSURE_MEDICATION_FALSE,
      [FORM_FIELDS.DIABETES_STATUS]: formState.diabetesStatus || FORM_VALUES.DIABETES_NONE,
    };

    const demographicsData = convertFormStateToSDKDemographics(skipFormState);
    // Persist with a bypassProfile hint for Measurement component
    state.demographics.setDemographics({ ...demographicsData, bypassProfile: true } as any);
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
