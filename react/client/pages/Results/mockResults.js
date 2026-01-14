// Mock results for testing partial results modal
// This file is gitignored - for local testing only

export const mockPartialResults = {
  measurementId: 'test-123',
  measurementResultId: 'result-456',
  resultsOrder: 1,
  finalChunkNumber: 1,
  statusId: 'PARTIAL', // Any value other than 'COMPLETE' will trigger the modal
  points: {
    SNR: {
      channel: 'SNR',
      notes: [],
      value: '4.5',
      dial: { sections: [], group: 0, subGroup: 0 },
      meta: { availableAfterSec: 5, range: { min: 0, max: 10 }, requirements: { profileInfo: false, medicalHistory: false }, group: 'metadata', ranges: { global: [] }, dialBandColors: { global: [] } },
      info: { name: 'SNR', unit: '' },
    },
    HR: {
      channel: 'HR',
      notes: [],
      value: '72',
      dial: { sections: [], group: 0, subGroup: 0 },
      meta: { availableAfterSec: 5, range: { min: 40, max: 200 }, requirements: { profileInfo: false, medicalHistory: false }, group: 'vitals', ranges: { global: [] }, dialBandColors: { global: [] } },
      info: { name: 'Heart Rate', unit: 'bpm' },
    },
  },
  errors: {
    code: 'PARTIAL',
    errors: {
      BP_SYSTOLIC: { messages: ['Insufficient data'] },
    },
  },
};
