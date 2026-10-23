import React from 'react';
import { useTranslation } from 'react-i18next';
import OptionalRadioGroup from './OptionalRadioGroup';
import { DiabetesStatus } from '../types';
import { FORM_VALUES } from '../constants';

interface DiabetesStatusFieldProps {
  value: DiabetesStatus;
  onChange: (value: DiabetesStatus) => void;
}

const DiabetesStatusField: React.FC<DiabetesStatusFieldProps> = ({ value, onChange }) => {
  const { t } = useTranslation();

  const diabetesStatusOptions = [
    { value: FORM_VALUES.DIABETES_TYPE1, label: t('TYPE_1') },
    { value: FORM_VALUES.DIABETES_TYPE2, label: t('TYPE_2') },
    { value: FORM_VALUES.DIABETES_NONE, label: t('NO') },
  ];

  const handleChange = (value: string) => {
    onChange(value as DiabetesStatus);
  };

  return (
    <OptionalRadioGroup
      labelKey="PROFILE_FORM_DIABETES_LABEL"
      value={value}
      onChange={handleChange}
      options={diabetesStatusOptions}
    />
  );
};

export default DiabetesStatusField;
