import React, { useState } from 'react';
import { TextInput } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';
import * as stylex from '@stylexjs/stylex';
import FieldWrapper from '../FieldWrapper';
import { isHeightFeetInvalid, isHeightInchesInvalid } from '../utils/validationUtils';
import { createFieldBlurHandler } from '../utils/formUtils';

const styles = stylex.create({
  container: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },
  inputWrapper: {
    flex: 1,
  },
});

interface ImperialHeightFieldProps {
  feet: string;
  inches: string;
  onFeetChange: (value: string) => void;
  onInchesChange: (value: string) => void;
}

const ImperialHeightField: React.FC<ImperialHeightFieldProps> = ({
  feet,
  inches,
  onFeetChange,
  onInchesChange,
}) => {
  const { t } = useTranslation();
  const [feetTouched, setFeetTouched] = useState(false);
  const [inchesTouched, setInchesTouched] = useState(false);

  const handleFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFeetChange(e.target.value);
  };

  const handleInchesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInchesChange(e.target.value);
  };

  const handleFeetBlur = createFieldBlurHandler(feet, onFeetChange, setFeetTouched);
  const handleInchesBlur = createFieldBlurHandler(inches, onInchesChange, setInchesTouched);

  return (
    <FieldWrapper variant="textInput">
      <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.inputWrapper)}>
          <TextInput
            label={t('PROFILE_FORM_HEIGHT_FEET_LABEL')}
            value={feet}
            onChange={handleFeetChange}
            placeholder={t('PROFILE_FORM_HEIGHT_FEET_PLACEHOLDER')}
            type="text"
            invalid={feetTouched && isHeightFeetInvalid(feet)}
            invalidMessage={t('PROFILE_FORM_VALIDATION_HEIGHT_FEET')}
            onBlur={handleFeetBlur}
          />
        </div>
        <div {...stylex.props(styles.inputWrapper)}>
          <TextInput
            label={t('PROFILE_FORM_HEIGHT_INCHES_LABEL')}
            value={inches}
            onChange={handleInchesChange}
            placeholder={t('PROFILE_FORM_HEIGHT_INCHES_PLACEHOLDER')}
            type="text"
            invalid={inchesTouched && isHeightInchesInvalid(inches)}
            invalidMessage={t('PROFILE_FORM_VALIDATION_HEIGHT_INCHES')}
            onBlur={handleInchesBlur}
          />
        </div>
      </div>
    </FieldWrapper>
  );
};

export default ImperialHeightField;
