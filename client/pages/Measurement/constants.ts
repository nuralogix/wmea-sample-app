import { ErrorCodes } from '@nuralogix.ai/web-measurement-embedded-app';

// Error codes that should render the generic danger modal
export const MODAL_ERROR_CODES: ErrorCodes[] = [
  ErrorCodes.PAGE_NOT_VISIBLE,
  ErrorCodes.MEASUREMENT_LOW_SNR,
  ErrorCodes.CAMERA_START_FAILED,
  ErrorCodes.WORKER_ERROR,
  ErrorCodes.COLLECTOR,
] as const;

// Error codes that should surface some UI to the user (modal + custom components)
export const UI_ERROR_CODES: ErrorCodes[] = [
  ...MODAL_ERROR_CODES,
  ErrorCodes.CAMERA_PERMISSION_DENIED,
] as const;
export type UIErrorCode = (typeof UI_ERROR_CODES)[number];

// Error codes that require an immediate cancellation/reset before UI is shown
export const CANCEL_ON_ERROR_CODES: ErrorCodes[] = [
  ErrorCodes.PAGE_NOT_VISIBLE,
  ErrorCodes.WORKER_ERROR,
  ErrorCodes.COLLECTOR,
] as const;
export type CancelOnErrorCode = (typeof CANCEL_ON_ERROR_CODES)[number];

export const isUiErrorCode = (code: ErrorCodes): code is UIErrorCode =>
  (UI_ERROR_CODES as readonly ErrorCodes[]).includes(code);
export const isCancelOnErrorCode = (code: ErrorCodes): code is CancelOnErrorCode =>
  (CANCEL_ON_ERROR_CODES as readonly ErrorCodes[]).includes(code);
export const isModalErrorCode = (code: ErrorCodes): boolean =>
  (MODAL_ERROR_CODES as readonly ErrorCodes[]).includes(code);
