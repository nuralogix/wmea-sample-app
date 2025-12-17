# Known Issues and Limitations

## 1. Constraint Satisfaction on iPhones (WMEA-176)

It's difficult to satisfy measurement constraints on iPhones. As a temporary workaround, `checkConstraints` needs to be disabled for iPhone users.

## 2. PartnerId Not Yet Supported (WMEA-10)

PartnerId configuration is not yet supported in the embedded app.

## 3. onCancel Handler Not Wired Up (WMEA-171)

The `onCancel` (appEvents.MEASUREMENT_CANCELED) handler is not yet wired up in the measurement flow.

## 4. Camera Flipping on Mobile Not Supported (WMEA-94)

Camera flipping on the measurement page on mobile devices is not yet supported.
