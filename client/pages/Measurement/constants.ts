// Maps embedded error codes to i18n keys used by this app
import { ErrorCodes } from './types';

export const CODE_TO_I18N_KEY = {
  [ErrorCodes.PAGE_NOT_VISIBLE]: 'ERR_TAB_SWITCHED_OR_WINDOW_MINIMIZED',
  [ErrorCodes.MEASUREMENT_LOW_SNR]: 'ERR_MSG_SNR',
  [ErrorCodes.NO_DEVICES_FOUND]: 'NO_DEVICES_FOUND',
  [ErrorCodes.CAMERA_PERMISSION_DENIED]: 'CAMERA_PERMISSION_DENIED',
  // The following codes can be added when we have i18n strings for them
  // [ErrorCodes.WORKER_ERROR]: 'ERR_TAB_SWITCHED_OR_WINDOW_MINIMIZED',
  // [ErrorCodes.PROFILE_INFO_NOT_SET]: 'ERR_TAB_SWITCHED_OR_WINDOW_MINIMIZED',
  // [ErrorCodes.CAMERA_START_FAILED]: 'ERR_TAB_SWITCHED_OR_WINDOW_MINIMIZED',
};

export type EmbeddedErrorCode = keyof typeof CODE_TO_I18N_KEY;
