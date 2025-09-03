import { Modal, Paragraph } from '@nuralogix.ai/web-ui';
import { getMessageFromKey } from './utils';
import { CODE_TO_I18N_KEY, type UIErrorCode } from './constants';
import { ErrorCodes } from './types';
import CameraPermissionsNotGranted from '../../components/CameraPermissionsNotGranted';
import type React from 'react';
import { useEffect, useState } from 'react';

type ErrorMessageProps = {
  errorCode: UIErrorCode;
  onClear: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorCode, onClear }) => {
  // Control modal visibility locally
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setOpen(true);
  }, [errorCode]);

  if (errorCode === ErrorCodes.CAMERA_PERMISSION_DENIED) {
    return <CameraPermissionsNotGranted />;
  }

  if (errorCode === ErrorCodes.NO_DEVICES_FOUND) {
    return <Paragraph variant="error">{getMessageFromKey(CODE_TO_I18N_KEY[errorCode])}</Paragraph>;
  }

  const body = getMessageFromKey(CODE_TO_I18N_KEY[errorCode]);

  return (
    <Modal
      isOpen={open}
      variant="danger"
      onClose={() => {
        setOpen(false);
        onClear();
      }}
    >
      <Paragraph>{body}</Paragraph>
    </Modal>
  );
};

export default ErrorMessage;
