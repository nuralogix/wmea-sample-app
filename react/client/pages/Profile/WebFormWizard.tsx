import { useState } from 'react';
import { Heading, Card, Paragraph, Button } from '@nuralogix.ai/web-ui';
import * as stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';
import ProfileInfo from './ProfileInfo';
import MedicalQuestionnaire from './MedicalQuestionnaire';
import { FormState, WizardStep } from './types';
import { INITIAL_FORM_STATE, WIZARD_STEPS } from './constants';
import { useFormSubmission } from './utils/formSubmissionUtils';
import { useNavigate } from 'react-router';
import state from '../../state';
import useUnitConversion from './hooks/useUnitConversion';
import { usePrepopulateForm } from './hooks/usePrepopulateForm';

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
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '16px',
  },
  introMessage: {
    marginBottom: '24px',
  },
});

const FormWizard = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<WizardStep>(WIZARD_STEPS.PROFILE);
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);
  const navigate = useNavigate();
  const { handleSubmit } = useFormSubmission();

  useUnitConversion(formState, setFormState);
  usePrepopulateForm(setFormState);

  const handleNextStep = () => {
    setCurrentStep(WIZARD_STEPS.MEDICAL);
  };

  const handlePreviousStep = () => {
    setCurrentStep(WIZARD_STEPS.PROFILE);
  };

  const onSubmit = () => handleSubmit(formState);

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Card xstyle={styles.card}>
        <div {...stylex.props(styles.headerRow)}>
          <Heading>
            {currentStep === WIZARD_STEPS.PROFILE
              ? t('PROFILE_FORM_STEP_1_TITLE')
              : t('PROFILE_FORM_STEP_2_TITLE')}
          </Heading>
          <Button
            variant="link"
            type="button"
            onClick={() => {
              state.demographics.setDemographics({
                ...state.demographics.demographics,
                bypassProfile: true,
              });
              navigate('/measurement');
            }}
          >
            {t('SKIP_PROFILE')}
          </Button>
        </div>
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
            onSubmit={onSubmit}
            onBack={handlePreviousStep}
          />
        )}
      </Card>
    </div>
  );
};

export default FormWizard;
