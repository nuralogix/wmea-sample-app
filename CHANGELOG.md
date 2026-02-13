# Changelog

## [0.1.0-beta.13] - 2026-02-13

### 📦 Package Updates

#### `@nuralogix.ai/web-measurement-embedded-app` → v0.1.0-beta.13

**Added**

- `debugMode`: New optional `debugMode` property in `Config` to enables verbose logging for debugging purposes
- `ASSET_DOWNLOAD_FAILED`: New error code dispatched when app fails to download assets and initialize SDK
- New logs added to different components
- `setAppSettings`: New method to allow updating app settings
- `MeasurementOptions`: Results object now displays `MeasurementOptions`

**Changed**

- Lifecycle Safety: Prevented `destroy()` and `cancel()` from running before critical initialization event (`ASSETS_DOWNLOADED`)
- Updated Logger: Updated the logger to format logs and emit console.logs when `debugMode` is set to true

**Dependencies**

- `@nuralogix.ai/anura-web-core-sdk`: Upgraded from `0.1.0-beta.5` to `0.1.0-beta.7`

---

## [0.1.0-beta.12] - 2026-01-30

### 📦 Package Updates

#### `@nuralogix.ai/web-measurement-embedded-app` → v0.1.0-beta.12

**Added**

- `measurementOptions`: New optional `measurementOptions` property in `AppSettings` to pass `partnerId` and `userProfileId` to the SDK when starting a measurement

**Fixed**

- iOS Camera Auto-Start: Fixed video not playing on iOS Safari when camera auto-start is enabled
- Improved Profile Validation: Fixed profile validation and added BMI validation

---

## [0.1.0-beta.11] - 2026-01-14

### Fixed

- Constraint satisfaction on iPhones in portrait mode

### 📦 Package Updates

#### `@nuralogix.ai/web-measurement-embedded-app` → v0.1.0-beta.11

**Added**

- `FACE_TRACKER_LOADED` Event: New app event dispatched when face tracker is loaded, includes SDK version info (`webSDK`, `extractionLib`, `faceTracker`)
- `INTERMEDIATE_RESULTS` Payload: Event now includes `{ points }` with intermediate biomarker values
- `CONSTRAINT_VIOLATION` Payload: Event now includes `{ code }` with constraint code (`TOO_CLOSE`, `TOO_FAR`, `TURN_LEFT`, `TURN_RIGHT`, `LOOK_UP`, `LOOK_DOWN`, `TILT_LEFT`, `TILT_RIGHT`, `NOT_CENTERED`, `HOLD_STILL`)
- `ConstraintCode` Enum: New exported enum for constraint violation codes
- `appEventSeverity` Export: Now exported for external use
- `FACE_NONE` Documentation: Added to README error codes table

**Changed**

- `ASSETS_DOWNLOADED` Event: No longer includes SDK version (moved to `FACE_TRACKER_LOADED` since version is only available after tracker loads)

**Fixed**

- iOS Portrait Mode Constraints: Fixed constraint alignment on iOS devices in portrait mode with upgrade of SDK

**Dependencies**

- `@nuralogix.ai/anura-web-core-sdk`: Upgraded from 0.1.0-beta.3 to 0.1.0-beta.5

---

## [0.1.0-beta.10] - 2026-01-09

### Added

- `FACE_NONE` error handling

### 📦 Package Updates

#### `@nuralogix.ai/web-measurement-embedded-app` → v0.1.0-beta.10

**Added**

- `FACE_NONE` Error Code: Added new error code `FACE_NONE` to detect when face is lost during measurement (dispatched after 10 consecutive frames without face detection)

**Fixed**

- Next.js Dynamic Import: Fixed dynamic import issue for Next.js compatibility in rollup.config.mjs

---

## [0.1.0-beta.8] - 2026-01-07

### Added

- Improved console logging for measurement events (`MEASUREMENT_PREPARED`, `ASSETS_DOWNLOADED`, `MEASUREMENT_CANCELED`)
- Error handling for `MEASUREMENT_PREPARE_FAILED` with debug messages

### 📦 Package Updates

#### `@nuralogix.ai/web-measurement-embedded-app` → v0.1.0-beta.9

**Added**

- SDK Version in Events: `ASSETS_DOWNLOADED` event now includes SDK version information (`webSDK`, `extractionLib`, `faceTracker`)
- Measurement ID Tracking: `MEASUREMENT_STARTED` and `MEASUREMENT_CANCELED` events now include `measurementId`
- New Exported Types: Added `AppEvent`, `AppEventPayloadMap`, and `SDKVersion` types for better TypeScript integration

**Changed**

- `AppEvent` Type Refactored: `AppEvent` now uses a mapped type pattern with typed payloads per event type for improved type safety
- Event Payload Structure: All app events now nest custom data in a `payload` object instead of spreading at the top level
