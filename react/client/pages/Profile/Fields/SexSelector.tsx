import React from 'react';
import { useTranslation } from 'react-i18next';
import OptionalRadioGroup from './OptionalRadioGroup';
import { Sex } from '../types';
import { FORM_VALUES } from '../constants';

interface SexSelectorProps {
  value: Sex;
  onChange: (value: Sex) => void;
}

const SexSelector: React.FC<SexSelectorProps> = ({ value, onChange }) => {
  const { t } = useTranslation();

  const sexOptions = [
    { value: FORM_VALUES.MALE, label: t('MALE') },
    { value: FORM_VALUES.FEMALE, label: t('FEMALE') },
  ];

  const handleChange = (value: string) => {
    onChange(value as Sex);
  };

  return (
    <OptionalRadioGroup
      direction="row"
      labelKey="PROFILE_FORM_SEX_LABEL"
      value={value}
      onChange={handleChange}
      options={sexOptions}
    />
  );
};

export default SexSelector;
