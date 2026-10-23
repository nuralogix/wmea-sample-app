import React from 'react';
import { useTranslation } from 'react-i18next';
import OptionalRadioGroup from './OptionalRadioGroup';
import { SmokingStatus } from '../types';
import { FORM_VALUES } from '../constants';

interface SmokingFieldProps {
  value: SmokingStatus;
  onChange: (value: SmokingStatus) => void;
}

const SmokingField: React.FC<SmokingFieldProps> = ({ value, onChange }) => {
  const { t } = useTranslation();

  const smokingOptions = [
    { value: FORM_VALUES.SMOKER_TRUE, label: t('YES') },
    { value: FORM_VALUES.SMOKER_FALSE, label: t('NO') },
  ];

  const handleChange = (value: string) => {
    onChange(value as SmokingStatus);
  };

  return (
    <OptionalRadioGroup
      labelKey="PROFILE_FORM_SMOKING_LABEL"
      value={value}
      onChange={handleChange}
      options={smokingOptions}
    />
  );
};

export default SmokingField;
