import React from 'react';
import { Button } from '@nuralogix.ai/web-ui';
import * as stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';
import { SmokingField, BloodPressureMedField, DiabetesStatusField } from './Fields';
import { FormState } from './types';
import { isFormValid } from './utils/validationUtils';
import { createFieldHandler } from './utils/formUtils';
import { FORM_FIELDS } from './constants';
import WizardStepWrapper from './WizardStepWrapper';

const styles = stylex.create({
  buttonWrapper: {
    marginTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
  },
});

interface MedicalQuestionnaireProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
  onSubmit: () => void;
  onBack: () => void;
}

const MedicalQuestionnaire: React.FC<MedicalQuestionnaireProps> = ({
  formState,
  setFormState,
  onSubmit,
  onBack,
}) => {
  const { t } = useTranslation();

  const { smoking, bloodPressureMed, diabetesStatus } = formState;

  return (
    <WizardStepWrapper onSubmit={onSubmit} isEnabled={isFormValid(formState)}>
      <SmokingField
        value={smoking}
        onChange={createFieldHandler(FORM_FIELDS.SMOKING, setFormState)}
      />
      <BloodPressureMedField
        value={bloodPressureMed}
        onChange={createFieldHandler(FORM_FIELDS.BLOOD_PRESSURE_MED, setFormState)}
      />
      <DiabetesStatusField
        value={diabetesStatus}
        onChange={createFieldHandler(FORM_FIELDS.DIABETES_STATUS, setFormState)}
      />
      <div {...stylex.props(styles.buttonWrapper)}>
        <Button width="100%" onClick={onSubmit} disabled={!isFormValid(formState)}>
          {t('PROFILE_FORM_SUBMIT_BUTTON')}
        </Button>
        <Button variant="link" onClick={onBack}>
          {t('BACK')}
        </Button>
      </div>
    </WizardStepWrapper>
  );
};

export default MedicalQuestionnaire;
