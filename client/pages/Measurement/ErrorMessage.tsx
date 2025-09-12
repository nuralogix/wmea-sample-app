import { Modal, Paragraph } from '@nuralogix.ai/web-ui';
import CameraPermissionsNotGranted from '../../components/CameraPermissionsNotGranted';
import { ErrorCodes, MeasurementEmbeddedAppError } from '@nuralogix.ai/web-measurement-embedded-app';
import type React from 'react';
import { useTranslation } from 'react-i18next';

type ErrorMessageProps = {
  error: MeasurementEmbeddedAppError;
  onClear: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, onClear }) => {
  const { code, message } = error;
  const { t } = useTranslation();
  let text = '';
  // TODO: Update text with proper messages from translation file
  switch (code) {
    case ErrorCodes.CAMERA_PERMISSION_DENIED:
      return <CameraPermissionsNotGranted />;
    case ErrorCodes.CAMERA_START_FAILED:
      break;
    case ErrorCodes.NO_DEVICES_FOUND:
      return <Paragraph variant="error">{t('NO_DEVICES_FOUND')}</Paragraph>;
    case ErrorCodes.PAGE_NOT_VISIBLE:
      text = t(code);
      break;
    case ErrorCodes.PROFILE_INFO_NOT_SET:
      text = message;
      break;
    case ErrorCodes.MEASUREMENT_LOW_SNR:
      text = t(code);
      break;
    case ErrorCodes.WORKER_ERROR:
      text = message;
      break;
    case ErrorCodes.COLLECTOR:
      text = message;
      break;
    case ErrorCodes.WEBSOCKET_DISCONNECTED:
      text = message;
      break;
    default:
      break;
  }

  return (
    <Modal isOpen variant="danger" onClose={onClear}>
      <Paragraph>{text}</Paragraph>
    </Modal>
  );
};

export default ErrorMessage;
