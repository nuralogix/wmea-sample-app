import React, { useState, useEffect } from 'react';
import { TextInput } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';
import FieldWrapper from '../FieldWrapper';
import { isWeightMetricInvalid, isWeightImperialInvalid } from '../utils/validationUtils';
import { createFieldBlurHandler } from '../utils/formUtils';

interface WeightFieldProps {
  value: string;
  onChange: (value: string) => void;
  isMetric: boolean;
}

const WeightField: React.FC<WeightFieldProps> = ({ value, onChange, isMetric }) => {
  const { t } = useTranslation();
  const [touched, setTouched] = useState(false);

  // Reset touched state when unit changes
  useEffect(() => {
    setTouched(false);
  }, [isMetric]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleBlur = createFieldBlurHandler(value, onChange, setTouched);

  return (
    <FieldWrapper variant="textInput">
      <TextInput
        label={t(
          isMetric ? 'PROFILE_FORM_WEIGHT_LABEL_METRIC' : 'PROFILE_FORM_WEIGHT_LABEL_IMPERIAL'
        )}
        value={value}
        onChange={handleChange}
        placeholder={t(
          isMetric
            ? 'PROFILE_FORM_WEIGHT_PLACEHOLDER_METRIC'
            : 'PROFILE_FORM_WEIGHT_PLACEHOLDER_IMPERIAL'
        )}
        invalid={
          touched && (isMetric ? isWeightMetricInvalid(value) : isWeightImperialInvalid(value))
        }
        invalidMessage={t(
          isMetric
            ? 'PROFILE_FORM_VALIDATION_WEIGHT_METRIC'
            : 'PROFILE_FORM_VALIDATION_WEIGHT_IMPERIAL'
        )}
        onBlur={handleBlur}
      />
    </FieldWrapper>
  );
};

export default WeightField;
