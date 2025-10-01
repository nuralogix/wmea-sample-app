import { useNavigate } from 'react-router';
import { useSnapshot } from 'valtio';
import state from '../../../state';
import { FormState } from '../types';
import { isFormValid } from './validationUtils';
import { convertFormStateToSDKDemographics } from './utils';

export const useFormSubmission = () => {
  const navigate = useNavigate();
  const { isDev } = useSnapshot(state.auth);

  const handleSkipProfile = () => {
    const base = state.demographics.demographics;
    state.demographics.setDemographics({ ...base, bypassProfile: true });
    navigate('/measurement');
  };

  const handleSubmit = (formState: FormState) => {
    // Defensive validation check but disabled btns should prevent this
    if (!isFormValid(formState)) {
      // TODO: Show error notification to user if needed
      return;
    }

    // Convert form data to SDK format before pushing to store
    const demographicsData = convertFormStateToSDKDemographics(formState);

    // Update the demographics store
    state.demographics.setDemographics(demographicsData);

    // Navigate to measurement page
    navigate('/measurement');
  };

  return {
    handleSkipProfile,
    handleSubmit,
    isDev,
  };
};
