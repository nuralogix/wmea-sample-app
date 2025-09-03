import { ErrorCodes } from './types';

export const CODE_TO_I18N_KEY: Record<UIErrorCode, string> = {
  [ErrorCodes.PAGE_NOT_VISIBLE]: 'ERR_TAB_SWITCHED_OR_WINDOW_MINIMIZED',
  [ErrorCodes.MEASUREMENT_LOW_SNR]: 'ERR_MSG_SNR',
  [ErrorCodes.NO_DEVICES_FOUND]: 'NO_DEVICES_FOUND',
  [ErrorCodes.CAMERA_PERMISSION_DENIED]: 'CAMERA_PERMISSION_DENIED',
};

export type EmbeddedErrorCode = keyof typeof CODE_TO_I18N_KEY;

// Subset of error codes that require a UI trigger
export type UIErrorCode =
  | ErrorCodes.PAGE_NOT_VISIBLE
  | ErrorCodes.MEASUREMENT_LOW_SNR
  | ErrorCodes.NO_DEVICES_FOUND
  | ErrorCodes.CAMERA_PERMISSION_DENIED;

export const UI_ERROR_CODES: readonly UIErrorCode[] = [
  ErrorCodes.PAGE_NOT_VISIBLE,
  ErrorCodes.MEASUREMENT_LOW_SNR,
  ErrorCodes.NO_DEVICES_FOUND,
  ErrorCodes.CAMERA_PERMISSION_DENIED,
] as const;

export const isUIErrorCode = (code: ErrorCodes): code is UIErrorCode => {
  return (UI_ERROR_CODES as readonly string[]).includes(code);
};
