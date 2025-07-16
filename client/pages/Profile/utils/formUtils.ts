import React from 'react';
import { FormState } from '../types';

/**
 * Generic handler factory for form field updates
 * Creates a type-safe handler function for updating a specific field in FormState
 */
export const createFieldHandler = <K extends keyof FormState>(
  key: K,
  setFormState: React.Dispatch<React.SetStateAction<FormState>>
) => {
  return (value: FormState[K]) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };
};

/**
 * Utility to create a blur handler that strips spaces and sets touched state
 */
export const createFieldBlurHandler = (
  value: string,
  onChange: (value: string) => void,
  setTouched: (touched: boolean) => void
) => {
  return () => {
    setTouched(true);
    // Strip spaces from the value
    const trimmedValue = value.replace(/\s/g, '');
    if (trimmedValue !== value) {
      onChange(trimmedValue);
    }
  };
};
