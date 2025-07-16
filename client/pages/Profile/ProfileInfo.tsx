import React from 'react';
import { Button, Paragraph } from '@nuralogix.ai/web-ui';
import * as stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';
import {
  MetricHeightField,
  ImperialHeightField,
  AgeField,
  UnitSelector,
  WeightField,
  SexSelector,
} from './Fields';
import { FormState } from './types';
import { FORM_VALUES, FORM_FIELDS } from './constants';
import { isProfileInfoValid, showBMIError } from './utils/validationUtils';
import { createFieldHandler } from './utils/formUtils';
import WizardStepWrapper from './WizardStepWrapper';

const styles = stylex.create({
  nextButton: {
    marginTop: '32px',
    display: 'flex',
    justifyContent: 'center',
  },
  bmiError: {
    marginTop: '8px',
  },
});

interface ProfileInfoProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
  onNext: () => void;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ formState, setFormState, onNext }) => {
  const { t } = useTranslation();
  const isMetric = formState.unit === FORM_VALUES.METRIC;

  const { sex, age, unit, heightMetric, heightFeet, heightInches, weight } = formState;

  return (
    <WizardStepWrapper onSubmit={onNext} isEnabled={isProfileInfoValid(formState)}>
      <SexSelector value={sex} onChange={createFieldHandler(FORM_FIELDS.SEX, setFormState)} />
      <AgeField value={age} onChange={createFieldHandler(FORM_FIELDS.AGE, setFormState)} />
      <UnitSelector value={unit} onChange={createFieldHandler(FORM_FIELDS.UNIT, setFormState)} />
      {showBMIError(formState) && (
        <div {...stylex.props(styles.bmiError)}>
          <Paragraph>{t('PROFILE_FORM_VALIDATION_BMI')}</Paragraph>
        </div>
      )}
      {isMetric ? (
        <MetricHeightField
          value={heightMetric}
          onChange={createFieldHandler(FORM_FIELDS.HEIGHT_METRIC, setFormState)}
        />
      ) : (
        <ImperialHeightField
          feet={heightFeet}
          inches={heightInches}
          onFeetChange={createFieldHandler(FORM_FIELDS.HEIGHT_FEET, setFormState)}
          onInchesChange={createFieldHandler(FORM_FIELDS.HEIGHT_INCHES, setFormState)}
        />
      )}
      <WeightField
        value={weight}
        onChange={createFieldHandler(FORM_FIELDS.WEIGHT, setFormState)}
        isMetric={isMetric}
      />
      <div {...stylex.props(styles.nextButton)}>
        <Button width="100%" onClick={onNext} disabled={!isProfileInfoValid(formState)}>
          {t('NEXT')}
        </Button>
      </div>
    </WizardStepWrapper>
  );
};

export default ProfileInfo;
