import { Modal, Paragraph } from '@nuralogix.ai/web-ui';
import { getMessageFromKey } from './utils';
import { CODE_TO_I18N_KEY } from './constants';
import { ErrorCodes } from './types';
import CameraPermissionsNotGranted from '../../components/CameraPermissionsNotGranted';
import type React from 'react';

type ErrorMessageProps = {
  errorCode: string | null;
  onClear: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorCode, onClear }) => {
  if (errorCode === ErrorCodes.CAMERA_PERMISSION_DENIED) {
    return <CameraPermissionsNotGranted />;
  }
  if (!errorCode) return null;
  const key = CODE_TO_I18N_KEY[errorCode as keyof typeof CODE_TO_I18N_KEY];

  let title = 'Error';
  let variant: 'danger' | 'warning' | 'info' | 'success';

  switch (key) {
    case 'ERR_TAB_SWITCHED_OR_WINDOW_MINIMIZED':
      title = 'Measurement Interrupted';
      variant = 'warning';
      break;
    case 'ERR_MSG_SNR':
      title = 'Low Signal';
      variant = 'warning';
      break;
    case 'NO_DEVICES_FOUND':
      title = 'No Camera Found';
      variant = 'danger';
      break;
    default:
      title = 'Error';
      variant = 'danger';
  }

  const body = getMessageFromKey(key);

  return (
    <Modal title={title} isOpen variant={variant} onClose={onClear}>
      <Paragraph>{body}</Paragraph>
    </Modal>
  );
};

export default ErrorMessage;
