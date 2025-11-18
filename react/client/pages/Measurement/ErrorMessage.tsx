import { Paragraph, Modal } from '@nuralogix.ai/web-ui';
import CameraPermissionsNotGranted from '../../components/CameraPermissionsNotGranted';
import {
  ErrorCodes,
  MeasurementEmbeddedAppError,
} from '@nuralogix.ai/web-measurement-embedded-app';
import type React from 'react';
import { useTranslation } from 'react-i18next';
import { isModalErrorCode } from './constants';

type ErrorMessageProps = {
  error: MeasurementEmbeddedAppError;
  onClear: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, onClear }) => {
  const { code } = error;
  const { t } = useTranslation();

  if (code === ErrorCodes.CAMERA_PERMISSION_DENIED) {
    return <CameraPermissionsNotGranted />; // Non-closable custom overlay
  }

  if (isModalErrorCode(code)) {
    return (
      <Modal isOpen variant="danger" onClose={onClear} showConfirmButton={false}>
        <Paragraph>{t(code)}</Paragraph>
      </Modal>
    );
  }

  return null;
};

export default ErrorMessage;
