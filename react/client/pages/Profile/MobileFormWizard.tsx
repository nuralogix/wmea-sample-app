import { useState } from 'react';
import { Heading, Card, Paragraph, Button } from '@nuralogix.ai/web-ui';
import * as stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';
import MedicalQuestionnaire from './MedicalQuestionnaire';
import { FormState } from './types';
import { isAgeInvalid, isProfileInfoValid } from './utils/validationUtils';
import { INITIAL_FORM_STATE, FORM_VALUES } from './constants';
import { useFormSubmission } from './utils/formSubmissionUtils';
import useUnitConversion from './hooks/useUnitConversion';
import { usePrepopulateForm } from './hooks/usePrepopulateForm';
import SexSelector from './Fields/SexSelector';
import AgeField from './Fields/AgeField';
import UnitSelector from './Fields/UnitSelector';
import ImperialHeightField from './Fields/ImperialHeightField';
import MetricHeightField from './Fields/MetricHeightField';
import WeightField from './Fields/WeightField';
import { useNavigate } from 'react-router';
import state from '../../state';

const MOBILE_STEPS = {
  SEX_AGE: 'sex_age',
  BODY: 'body',
  MEDICAL: 'medical',
} as const;

type MobileStep = (typeof MOBILE_STEPS)[keyof typeof MOBILE_STEPS];

const styles = stylex.create({
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    padding: '16px 12px',
    boxSizing: 'border-box',
    height: 'calc(100dvh - 60px)',
    width: '100%',
    overflow: 'hidden',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    maxWidth: 520,
    padding: '24px 20px 16px',
    boxSizing: 'border-box',
    '@media (min-width: 640px)': {
      maxWidth: 640,
      padding: '32px 28px 20px',
    },
    '@media (min-width: 900px)': {
      maxWidth: 680,
      padding: '40px 36px 24px',
    },
  },

  topMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  stepDots: {
    display: 'flex',
    gap: 8,
    marginBottom: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'var(--dot-inactive, #555)',
  },
  dotActive: {
    backgroundColor: 'var(--dot-active, #4D6FE5)',
  },
  introMessage: {
    marginBottom: 20,
  },
  content: {
    flex: 1,
    overflowY: 'auto',
    paddingRight: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  contentNoScroll: {
    overflowY: 'hidden',
  },

  fieldsColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  footerNav: {
    marginTop: 12,
    paddingTop: 12,
    borderTop: '1px solid rgba(255,255,255,0.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerNavSingle: {
    justifyContent: 'flex-end',
  },
});

const MobileFormWizard = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<MobileStep>(MOBILE_STEPS.SEX_AGE);
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);
  const { handleSubmit } = useFormSubmission();
  const navigate = useNavigate();

  useUnitConversion(formState, setFormState);
  usePrepopulateForm(setFormState);

  const goNext = () => {
    if (currentStep === MOBILE_STEPS.SEX_AGE) setCurrentStep(MOBILE_STEPS.BODY);
    else if (currentStep === MOBILE_STEPS.BODY) setCurrentStep(MOBILE_STEPS.MEDICAL);
  };

  const goBack = () => {
    if (currentStep === MOBILE_STEPS.BODY) setCurrentStep(MOBILE_STEPS.SEX_AGE);
    else if (currentStep === MOBILE_STEPS.MEDICAL) setCurrentStep(MOBILE_STEPS.BODY);
  };

  const onSubmit = () => handleSubmit(formState);

  const canProceedSexAge = formState.sex !== '' && !isAgeInvalid(formState.age);
  const canProceedBody = isProfileInfoValid(formState);

  const stepsArray = [MOBILE_STEPS.SEX_AGE, MOBILE_STEPS.BODY, MOBILE_STEPS.MEDICAL];
  const stepIndex = stepsArray.indexOf(currentStep);

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Card xstyle={styles.card}>
        <div {...stylex.props(styles.topMeta)}>
          <div {...stylex.props(styles.stepDots)}>
            {stepsArray.map((s, i) => (
              <div
                key={s}
                {...stylex.props(styles.dot, i === stepIndex && styles.dotActive)}
                aria-label={`step ${i + 1}`}
              />
            ))}
          </div>
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
        <div
          {...stylex.props(
            styles.content,
            currentStep === MOBILE_STEPS.BODY && styles.contentNoScroll
          )}
        >
          {currentStep !== MOBILE_STEPS.BODY && (
            <div>
              <Heading>
                {currentStep === MOBILE_STEPS.MEDICAL
                  ? t('PROFILE_FORM_STEP_2_TITLE')
                  : t('PROFILE_FORM_STEP_1_TITLE')}
              </Heading>
              {currentStep === MOBILE_STEPS.SEX_AGE && (
                <div {...stylex.props(styles.introMessage)}>
                  <Paragraph>{t('PROFILE_FORM_INTRO_MESSAGE')}</Paragraph>
                </div>
              )}
            </div>
          )}

          {currentStep === MOBILE_STEPS.SEX_AGE && (
            <div {...stylex.props(styles.fieldsColumn)}>
              <SexSelector
                value={formState.sex}
                onChange={(value) => setFormState((prev) => ({ ...prev, sex: value }))}
              />
              <AgeField
                value={formState.age}
                onChange={(value) => setFormState((prev) => ({ ...prev, age: value }))}
              />
            </div>
          )}

          {currentStep === MOBILE_STEPS.BODY && (
            <div {...stylex.props(styles.fieldsColumn)}>
              <UnitSelector
                value={formState.unit}
                onChange={(value) => setFormState((prev) => ({ ...prev, unit: value }))}
              />
              {formState.unit === FORM_VALUES.METRIC ? (
                <MetricHeightField
                  value={formState.heightMetric}
                  onChange={(value) => setFormState((prev) => ({ ...prev, heightMetric: value }))}
                />
              ) : (
                <ImperialHeightField
                  feet={formState.heightFeet}
                  inches={formState.heightInches}
                  onFeetChange={(value) => setFormState((prev) => ({ ...prev, heightFeet: value }))}
                  onInchesChange={(value) =>
                    setFormState((prev) => ({ ...prev, heightInches: value }))
                  }
                />
              )}
              <WeightField
                value={formState.weight}
                isMetric={formState.unit === FORM_VALUES.METRIC}
                onChange={(value) => setFormState((prev) => ({ ...prev, weight: value }))}
              />
            </div>
          )}

          {currentStep === MOBILE_STEPS.MEDICAL && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <MedicalQuestionnaire
                formState={formState}
                setFormState={setFormState}
                onSubmit={onSubmit}
                onBack={goBack}
              />
            </div>
          )}
        </div>
        {currentStep !== MOBILE_STEPS.MEDICAL && (
          <div
            {...stylex.props(
              styles.footerNav,
              currentStep === MOBILE_STEPS.SEX_AGE && styles.footerNavSingle
            )}
          >
            {currentStep === MOBILE_STEPS.BODY && (
              <Button variant="link" onClick={goBack}>
                {t('BACK')}
              </Button>
            )}
            <Button
              variant="primary"
              disabled={currentStep === MOBILE_STEPS.SEX_AGE ? !canProceedSexAge : !canProceedBody}
              onClick={goNext}
            >
              {t('NEXT')}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default MobileFormWizard;
