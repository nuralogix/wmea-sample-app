import { Modal, Paragraph } from '@nuralogix.ai/web-ui';
import { CODE_TO_I18N_KEY, type UIErrorCode } from './constants';
import { ErrorCodes } from './types';
import CameraPermissionsNotGranted from '../../components/CameraPermissionsNotGranted';
import type React from 'react';
import { useTranslation } from 'react-i18next';

type ErrorMessageProps = {
  errorCode: UIErrorCode;
  onClear: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorCode, onClear }) => {
  const { t } = useTranslation();
  if (errorCode === ErrorCodes.CAMERA_PERMISSION_DENIED) {
    return <CameraPermissionsNotGranted />;
  }

  if (errorCode === ErrorCodes.NO_DEVICES_FOUND) {
    return <Paragraph variant="error">{t('NO_DEVICES_FOUND')}</Paragraph>;
  }

  const messageKey = CODE_TO_I18N_KEY[errorCode];

  return (
    <Modal isOpen variant="danger" onClose={onClear}>
      <Paragraph>{t(messageKey)}</Paragraph>
    </Modal>
  );
};

export default ErrorMessage;
