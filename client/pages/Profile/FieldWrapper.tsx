import React from 'react';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  fieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '12px',
  },
  // For text inputs - reserves space for validation messages
  textInput: {
    minHeight: '90px', // Label + input + validation message space
  },
});

interface FieldWrapperProps {
  children: React.ReactNode;
  variant?: 'textInput';
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({ children, variant }) => {
  return (
    <div {...stylex.props(styles.fieldWrapper, variant === 'textInput' && styles.textInput)}>
      {children}
    </div>
  );
};

export default FieldWrapper;
