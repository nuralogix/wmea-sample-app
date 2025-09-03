import { Modal, Paragraph } from '@nuralogix.ai/web-ui';
import { getMessageFromKey } from './utils';
import { CODE_TO_I18N_KEY } from './constants';
import { ErrorCodes } from './types';
import CameraPermissionsNotGranted from '../../components/CameraPermissionsNotGranted';
import type React from 'react';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  fixedBelowNavbar: {
    position: 'fixed',
    top: '93.5px',
    left: 0,
    right: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '12px 16px',
  },
  content: {
    maxWidth: '960px',
    width: '100%',
  },
});

type ErrorMessageProps = {
  errorCode: ErrorCodes | null;
  onClear: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorCode, onClear }) => {
  if (errorCode === ErrorCodes.CAMERA_PERMISSION_DENIED) {
    return <CameraPermissionsNotGranted />;
  }
  if (!errorCode) return null;

  // Bespoke inline message: show a Paragraph right below the navbar
  if (errorCode === ErrorCodes.NO_DEVICES_FOUND) {
    return (
      <div {...stylex.props(styles.fixedBelowNavbar)}>
        <div {...stylex.props(styles.content)}>
          <Paragraph variant="error">{getMessageFromKey(CODE_TO_I18N_KEY[errorCode])}</Paragraph>
        </div>
      </div>
    );
  }

  let title = 'Error';
  let variant: 'danger' | 'warning' | 'info' | 'success';

  switch (errorCode) {
    case ErrorCodes.PAGE_NOT_VISIBLE:
      title = 'Measurement Interrupted';
      variant = 'warning';
      break;
    case ErrorCodes.MEASUREMENT_LOW_SNR:
      title = 'Low Signal';
      variant = 'warning';
      break;
    default:
      title = 'Error';
      variant = 'danger';
  }

  const body = getMessageFromKey(CODE_TO_I18N_KEY[errorCode]);

  return (
    <Modal title={title} isOpen variant={variant} onClose={onClear}>
      <Paragraph>{body}</Paragraph>
    </Modal>
  );
};

export default ErrorMessage;
