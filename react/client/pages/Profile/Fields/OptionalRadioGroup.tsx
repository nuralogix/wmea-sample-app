import React from 'react';
import { Button, RadioButtonGroup } from '@nuralogix.ai/web-ui';
import * as stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';
import FieldWrapper from '../FieldWrapper';
import { usePartialProfile, type TranslationKey } from '../hooks/usePartialProfile';

const styles = stylex.create({
  clear: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

interface OptionalRadioGroupProps {
  labelKey: TranslationKey;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  direction?: 'row' | 'column';
}

/**
 * RadioButtonGroup for profile fields. When partial profiles are allowed the
 * label is marked optional, and a "Clear" button appears once an answer is
 * picked — radios can't be un-selected on their own.
 */
const OptionalRadioGroup: React.FC<OptionalRadioGroupProps> = ({
  labelKey,
  value,
  onChange,
  options,
  direction,
}) => {
  const { t } = useTranslation();
  const { isPartial, fieldLabel } = usePartialProfile();

  return (
    <FieldWrapper>
      <RadioButtonGroup
        direction={direction}
        label={fieldLabel(labelKey)}
        value={value}
        onChange={onChange}
        options={options}
      />
      {isPartial && value !== '' && (
        <div {...stylex.props(styles.clear)}>
          <Button variant="link" size="sm" type="button" onClick={() => onChange('')}>
            {t('PROFILE_FORM_CLEAR_SELECTION')}
          </Button>
        </div>
      )}
    </FieldWrapper>
  );
};

export default OptionalRadioGroup;
