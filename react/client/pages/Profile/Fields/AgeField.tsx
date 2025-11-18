import React, { useState } from 'react';
import { TextInput } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';
import FieldWrapper from '../FieldWrapper';
import { isAgeInvalid } from '../utils/validationUtils';
import { createFieldBlurHandler } from '../utils/formUtils';

interface AgeFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const AgeField: React.FC<AgeFieldProps> = ({ value, onChange }) => {
  const { t } = useTranslation();
  const [touched, setTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleBlur = createFieldBlurHandler(value, onChange, setTouched);

  return (
    <FieldWrapper variant="textInput">
      <TextInput
        label={t('PROFILE_FORM_AGE_LABEL')}
        value={value}
        onChange={handleChange}
        placeholder={t('PROFILE_FORM_AGE_PLACEHOLDER')}
        invalid={touched && isAgeInvalid(value)}
        invalidMessage={t('PROFILE_FORM_VALIDATION_AGE')}
        onBlur={handleBlur}
      />
    </FieldWrapper>
  );
};

export default AgeField;
