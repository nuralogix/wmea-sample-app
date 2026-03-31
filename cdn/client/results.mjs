// Reference: https://docs.deepaffex.ai/points/introduction.html

const en = {
  ABSI: {
    name: 'Body Shape Index',
    unit: ''
  },
  AGE: {
    name: 'Facial Skin Age',
    unit: 'years'
  },
  AGE_CVM: {
    name: 'Cardiovascular Metabolic Age',
    unit: 'years'
  },  
  BMI_CALC: {
    name: 'Body Mass Index',
    unit: 'kg/m²'
  },
  BP_CVD: {
    name: 'Cardiovascular Disease Risk',
    unit: '%'
  },
  CVD_MULTI_YEAR_RISK_PROBS: {
    name: 'Multi-year Cardiovascular Disease Risk',
    unit: '%'
  },
  CVD_MULTI_YEAR_RISK_YEARS: {
    name: 'Multi-year Cardiovascular Disease Risk [not used in visualization]',
    unit: 'years'
  },
  BP_DIASTOLIC: {
    name: 'Diastolic Blood Pressure',
    unit: 'mmHg'
  },
  BP_HEART_ATTACK: {
    name: 'Heart Attack Risk',
    unit: '%'
  },
  BP_RPP: {
    name: 'Cardiac Workload',
    unit: 'dB'
  },
  BP_STROKE: {
    name: 'Stroke Risk',
    unit: '%'
  },
  BP_SYSTOLIC: {
    name: 'Systolic Blood Pressure',
    unit: 'mmHg'
  },
  BP_TAU: {
    name: 'Vascular Capacity',
    unit: 'seconds'
  },
  BR_BPM: {
    name: 'Breathing Rate',
    unit: 'breaths / minute'
  },
  DBT_RISK_PROB: {
    name: 'Type 2 Diabetes Risk',
    unit: '%'
  },
  FLD_RISK_PROB: {
    name: 'Fatty Liver Disease Risk',
    unit: '%'
  },
  HBA1C_RISK_PROB: {
    name: 'Hemoglobin A1C Risk',
    unit: '%'
  },
  HDLTC_RISK_PROB: {
    name: 'Hypercholesterolemia Risk',
    unit: '%'
  },
  HEIGHT: {
    name: 'Estimated Height',
    unit: 'cm'
  },
  HEALTH_SCORE: {
    name: 'NuraLogix General Wellness Score',
    unit: ''
  },
  HPT_RISK_PROB: {
    name: 'Hypertension Risk',
    unit: '%'
  },
  HR_BPM: {
    name: 'Pulse Rate',
    unit: 'beats / minute'
  },
  HRV_SDNN: {
    name: 'Heart Rate Variability',
    unit: 'ms'
  },
  IHB_COUNT: {
    name: 'Irregular Heartbeat Count',
    unit: ''
  },
  MENTAL_SCORE: {
    name: 'NuraLogix Mental Score',
    unit: ''
  },
  MFBG_RISK_PROB: {
    name: 'Fasting Blood Glucose Risk',
    unit: '%'
  },
  MSI: {
    name: 'NuraLogix Mental Stress Index',
    unit: ''
  },
  OVERALL_METABOLIC_RISK_PROB: {
    name: 'Overall Metabolic Health Risk',
    unit: '%'
  },
  PHYSICAL_SCORE: {
    name: 'NuraLogix Physical Score',
    unit: ''
  },
  PHYSIO_SCORE: {
    name: 'NuraLogix Physiological Score',
    unit: ''
  },
  RISKS_SCORE: {
    name: 'NuraLogix Risks Score',
    unit: ''
  },
  SNR: {
    name: 'Signal to Noise Ratio',
    unit: 'dB'
  },
  SURVEY_ANXIETY_MODERATE: {
    name: 'Moderate Anxiety Rapid Assessment',
    unit: '%'
  },
  SURVEY_DEPRESSION_MODERATE: {
    name: 'Moderate Depression Rapid Assessment',
    unit: '%'
  },
  TG_RISK_PROB: {
    name: 'Hypertriglyceridemia Risk',
    unit: '%'
  },
  VITAL_SCORE: {
    name: 'NuraLogix Vitals Score',
    unit: ''
  },
  WAIST_CIRCUM: {
    name: 'Waist Circumference',
    unit: 'cm'
  },
  WAIST_TO_HEIGHT: {
    name: 'Waist-to-Height Ratio',
    unit: '%'
  },
  WEIGHT: {
    name: 'Estimated Weight',
    unit: 'kg'
  },
  ANXIETY_INDEX: {
    name: 'NuraLogix Anxiety Index',
    unit: ''
  },
  SLEEP_QUALITY: {
    name: 'NuraLogix Sleep Quality Index',
    unit: ''
  },
  SMK_RISK_PROB: {
    name: 'Smoking Risk',
    unit: '%'
  },
  VITALITY: {
    name: 'NuraLogix Vitality Index',
    unit: ''
  }
};

export const localication = {
    en,
};

export const pointGroup = {
    METADATA: 'metadata',
    PHYSICAL: 'physical',
    GENERAL_RISKS: 'generalRisks',
    VITALS: 'vitals',
    PHYSIOLOGICAL: 'physiological',
    METABOLIC_RISKS: 'metabolicRisks',
    BLOOD_BIOMARKERS: 'bloodBiomarkers',
    OVERALL: 'overall',
    MENTAL: 'mental',
    SURVEYS: 'surveys',
};

export const RESULT_TYPE = {
    SCALAR: 'SCALAR',
    ARRAY: 'ARRAY',
    INTERNAL: 'INTERNAL'
};

export const DFX_POINTS = {
  VITALITY: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.PHYSIOLOGICAL,
      range: {
        min: 1,
        max: 5.9
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [1.0, 1.1],
            [1.1, 1.2],
            [1.2, 1.3],
            [1.3, 1.4],
            [1.4, 1.5],
            [1.5, 1.6],
            [1.6, 1.7],
            [1.7, 1.8],
            [1.8, 1.9],
            [1.9, 2.0],
          ],
          [
            [2.0, 2.1],
            [2.1, 2.2],
            [2.2, 2.3],
            [2.3, 2.4],
            [2.4, 2.5],
            [2.5, 2.6],
            [2.6, 2.7],
            [2.7, 2.8],
            [2.8, 2.9],
            [2.9, 3.0],
          ],
          [
            [3.0, 3.1],
            [3.1, 3.2],
            [3.2, 3.3],
            [3.3, 3.4],
            [3.4, 3.5],
            [3.5, 3.6],
            [3.6, 3.7],
            [3.7, 3.8],
            [3.8, 3.9],
            [3.9, 4.0],
          ],
          [
            [4.0, 4.1],
            [4.1, 4.2],
            [4.2, 4.3],
            [4.3, 4.4],
            [4.4, 4.5],
            [4.5, 4.6],
            [4.6, 4.7],
            [4.7, 4.8],
            [4.8, 4.9],
            [4.9, 5.0],
          ],
          [
            [5.0, 5.1],
            [5.1, 5.2],
            [5.2, 5.3],
            [5.3, 5.4],
            [5.4, 5.5],
            [5.5, 5.6],
            [5.6, 5.7],
            [5.7, 5.8],
            [5.8, 5.9],
            [5.9, 5.9],
            [5.9, Infinity],
          ]
        ]
      },
      dialBandColors: {
        global: ['RED', 'LIGHT_RED', 'YELLOW', 'LIGHT_GREEN', 'GREEN']
      }
    }
  },
  SMK_RISK_PROB: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.GENERAL_RISKS,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0, 2.5],
            [2.5, 5],
            [5, 7.5],
            [7.5, 10],
            [10, 12.5],
            [12.5, 15],
            [15, 17.5],
            [17.5, 20],
            [20, 22.5],
            [22.5, 25]
          ],
          [
            [25, 27.5],
            [27.5, 30],
            [30, 32.5],
            [32.5, 35],
            [35, 37.5],
            [37.5, 40],
            [40, 42.5],
            [42.5, 45]
          ],
          [
            [45, 47.5],
            [47.5, 50],
            [50, 52.5],
            [52.5, 55]
          ],
          [
            [55, 57.5],
            [57.5, 60],
            [60, 62.5],
            [62.5, 65],
            [65, 67.5],
            [67.5, 70],
            [70, 72.5],
            [72.5, 75],
            [75, 77.5]
          ],
          [
            [77.5, 80],
            [80, 82.5],
            [82.5, 85],
            [85, 87.5],
            [87.5, 90],
            [90, 92.5],
            [92.5, 95],
            [95, 97.5],
            [97.5, 100],
            [100, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  SLEEP_QUALITY: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.MENTAL,
      range: {
        min: 1,
        max: 5.9
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [1.0, 1.1],
            [1.1, 1.2],
            [1.2, 1.3],
            [1.3, 1.4],
            [1.4, 1.5],
            [1.5, 1.6],
            [1.6, 1.7],
            [1.7, 1.8],
            [1.8, 1.9],
            [1.9, 2.0],
          ],
          [
            [2.0, 2.1],
            [2.1, 2.2],
            [2.2, 2.3],
            [2.3, 2.4],
            [2.4, 2.5],
            [2.5, 2.6],
            [2.6, 2.7],
            [2.7, 2.8],
            [2.8, 2.9],
            [2.9, 3.0],
          ],
          [
            [3.0, 3.1],
            [3.1, 3.2],
            [3.2, 3.3],
            [3.3, 3.4],
            [3.4, 3.5],
            [3.5, 3.6],
            [3.6, 3.7],
            [3.7, 3.8],
            [3.8, 3.9],
            [3.9, 4.0],
          ],
          [
            [4.0, 4.1],
            [4.1, 4.2],
            [4.2, 4.3],
            [4.3, 4.4],
            [4.4, 4.5],
            [4.5, 4.6],
            [4.6, 4.7],
            [4.7, 4.8],
            [4.8, 4.9],
            [4.9, 5.0],
          ],
          [
            [5.0, 5.1],
            [5.1, 5.2],
            [5.2, 5.3],
            [5.3, 5.4],
            [5.4, 5.5],
            [5.5, 5.6],
            [5.6, 5.7],
            [5.7, 5.8],
            [5.8, 5.9],
            [5.9, 5.9],
            [5.9, Infinity],
          ]
        ]
      },
      dialBandColors: {
        global: ['RED', 'LIGHT_RED', 'YELLOW', 'LIGHT_GREEN', 'GREEN']
      }
    }
  },
  ANXIETY_INDEX: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.MENTAL,
      range: {
        min: 1,
        max: 5.9
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [1.0, 1.1],
            [1.1, 1.2],
            [1.2, 1.3],
            [1.3, 1.4],
            [1.4, 1.5],
            [1.5, 1.6],
            [1.6, 1.7],
            [1.7, 1.8],
            [1.8, 1.9],
            [1.9, 2.0],
          ],
          [
            [2.0, 2.1],
            [2.1, 2.2],
            [2.2, 2.3],
            [2.3, 2.4],
            [2.4, 2.5],
            [2.5, 2.6],
            [2.6, 2.7],
            [2.7, 2.8],
            [2.8, 2.9],
            [2.9, 3.0],
          ],
          [
            [3.0, 3.1],
            [3.1, 3.2],
            [3.2, 3.3],
            [3.3, 3.4],
            [3.4, 3.5],
            [3.5, 3.6],
            [3.6, 3.7],
            [3.7, 3.8],
            [3.8, 3.9],
            [3.9, 4.0],
          ],
          [
            [4.0, 4.1],
            [4.1, 4.2],
            [4.2, 4.3],
            [4.3, 4.4],
            [4.4, 4.5],
            [4.5, 4.6],
            [4.6, 4.7],
            [4.7, 4.8],
            [4.8, 4.9],
            [4.9, 5.0],
          ],
          [
            [5.0, 5.1],
            [5.1, 5.2],
            [5.2, 5.3],
            [5.3, 5.4],
            [5.4, 5.5],
            [5.5, 5.6],
            [5.6, 5.7],
            [5.7, 5.8],
            [5.8, 5.9],
            [5.9, 5.9],
            [5.9, Infinity],
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  SNR: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 5,
      group: pointGroup.METADATA,
      range: {
        min: -10,
        max: 20
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      ranges: {
        global: []
      },
      dialBandColors: {
        global: []
      }
    }
  },
  HR_BPM: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 5,
      group: pointGroup.VITALS,
      range: {
        min: 0,
        max: 140
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0.0, 20.0],
            [20.0, 24.44],
            [24.44, 28.88],
            [28.88, 33.32],
            [33.32, 37.76],
            [37.76, 42.2],
            [42.2, 46.64],
            [46.64, 51.08],
            [51.08, 55.52],
            [55.52, 60.0]
          ],
          [
            [60.0, 61.33],
            [61.33, 62.67],
            [62.67, 64.0],
            [64.0, 65.33],
            [65.33, 66.67],
            [66.67, 68.0],
            [68.0, 69.33],
            [69.33, 70.67],
            [70.67, 72.0],
            [72.0, 73.33],
            [73.33, 74.67],
            [74.67, 76.0],
            [76.0, 77.33],
            [77.33, 78.67],
            [78.67, 80.0],
            [80.0, 81.33],
            [81.33, 82.67],
            [82.67, 84.0],
            [84.0, 85.33],
            [85.33, 86.67],
            [86.67, 88.0],
            [88.0, 89.33],
            [89.33, 90.67],
            [90.67, 92.0],
            [92.0, 93.33],
            [93.33, 94.67],
            [94.67, 96.0],
            [96.0, 97.33],
            [97.33, 98.67],
            [98.67, 100.0]
          ],
          [
            [100.0, 104.0],
            [104.0, 108.0],
            [108.0, 112.0],
            [112.0, 116.0],
            [116.0, 120.0],
            [120.0, 124.0],
            [124.0, 128.0],
            [128.0, 132.0],
            [132.0, 136.0],
            [136.0, 140.0],
            [140.0, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['YELLOW', 'GREEN', 'YELLOW']
      }
    }
  },
  BP_SYSTOLIC: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.VITALS,
      range: {
        min: 45,
        max: 180
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0.0, 45.0],
            [45.0, 50.0],
            [50.0, 55.0],
            [55.0, 60.0],
            [60.0, 65.0],
            [65.0, 70.0],
            [70.0, 75.0],
            [75.0, 80.0],
            [80.0, 85.0],
            [85.0, 90.0]
          ],
          [
            [90.0, 93.0],
            [93.0, 96.0],
            [96.0, 99.0],
            [99.0, 102.0],
            [102.0, 105.0],
            [105.0, 108.0],
            [108.0, 111.0],
            [111.0, 114.0],
            [114.0, 117.0],
            [117.0, 120.0]
          ],
          [
            [120.0, 121.0],
            [121.0, 122.0],
            [122.0, 123.0],
            [123.0, 124.0],
            [124.0, 125.0],
            [125.0, 126.0],
            [126.0, 127.0],
            [127.0, 128.0],
            [128.0, 129.0],
            [129.0, 130.0]
          ],
          [
            [130.0, 131.0],
            [131.0, 132.0],
            [132.0, 133.0],
            [133.0, 134.0],
            [134.0, 135.0],
            [135.0, 136.0],
            [136.0, 137.0],
            [137.0, 138.0],
            [138.0, 139.0],
            [139.0, 140.0]
          ],
          [
            [140.0, 144.0],
            [144.0, 148.0],
            [148.0, 152.0],
            [152.0, 156.0],
            [156.0, 160.0],
            [160.0, 164.0],
            [164.0, 168.0],
            [168.0, 172.0],
            [172.0, 176.0],
            [176.0, 180.0],
            [180.0, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['YELLOW', 'GREEN', 'LIGHT_GREEN', 'YELLOW', 'RED']
      }
    }
  },
  BP_DIASTOLIC: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.VITALS,
      range: {
        min: 30,
        max: 120
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0.0, 30.0],
            [30.0, 33.34],
            [33.34, 36.67],
            [36.67, 40.0],
            [40.0, 43.34],
            [43.34, 46.67],
            [46.67, 50.0],
            [50.0, 53.33],
            [53.33, 56.67],
            [56.67, 60.0]
          ],
          [
            [60.0, 61.0],
            [61.0, 62.0],
            [62.0, 63.0],
            [63.0, 64.0],
            [64.0, 65.0],
            [65.0, 66.0],
            [66.0, 67.0],
            [67.0, 68.0],
            [68.0, 69.0],
            [69.0, 70.0]
          ],
          [
            [70.0, 71.0],
            [71.0, 72.0],
            [72.0, 73.0],
            [73.0, 74.0],
            [74.0, 75.0],
            [75.0, 76.0],
            [76.0, 77.0],
            [77.0, 78.0],
            [78.0, 79.0],
            [79.0, 80.0]
          ],
          [
            [80.0, 81.0],
            [81.0, 82.0],
            [82.0, 83.0],
            [83.0, 84.0],
            [84.0, 85.0],
            [85.0, 86.0],
            [86.0, 87.0],
            [87.0, 88.0],
            [88.0, 89.0],
            [89.0, 90.0]
          ],
          [
            [90.0, 93.0],
            [93.0, 96.0],
            [96.0, 99.0],
            [99.0, 102.0],
            [102.0, 105.0],
            [105.0, 108.0],
            [108.0, 111.0],
            [111.0, 114.0],
            [114.0, 117.0],
            [117.0, 120.0],
            [120.0, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['YELLOW', 'GREEN', 'LIGHT_GREEN', 'YELLOW', 'RED']
      }
    }
  },
  BR_BPM: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.VITALS,
      range: {
        min: 1.2,
        max: 35
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0.0, 1.2],
            [1.2, 2.4],
            [2.4, 3.6],
            [3.6, 4.8],
            [4.8, 6.0],
            [6.0, 7.2],
            [7.2, 8.4],
            [8.4, 9.6],
            [9.6, 10.8],
            [10.8, 12.0]
          ],
          [
            [12.0, 12.4],
            [12.4, 12.8],
            [12.8, 13.2],
            [13.2, 13.6],
            [13.6, 14.0],
            [14.0, 14.4],
            [14.4, 14.8],
            [14.8, 15.2],
            [15.2, 15.6],
            [15.6, 16.0],
            [16.0, 16.5],
            [16.5, 17.0],
            [17.0, 17.5],
            [17.5, 18.0],
            [18.0, 18.5],
            [18.5, 19.0],
            [19.0, 19.5],
            [19.5, 20.0],
            [20.0, 20.5],
            [20.5, 21.0],
            [21.0, 21.4],
            [21.4, 21.8],
            [21.8, 22.2],
            [22.2, 22.6],
            [22.6, 23.0],
            [23.0, 23.4],
            [23.4, 23.8],
            [23.8, 24.2],
            [24.2, 24.6],
            [24.6, 25.0]
          ],
          [
            [25.0, 26.0],
            [26.0, 27.0],
            [27.0, 28.0],
            [28.0, 29.0],
            [29.0, 30.0],
            [30.0, 31.0],
            [31.0, 32.0],
            [32.0, 33.0],
            [33.0, 34.0],
            [34.0, 35.0],
            [35.0, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['YELLOW', 'GREEN', 'YELLOW']
      }
    }
  },
  HRV_SDNN: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.PHYSIOLOGICAL,
      range: {
        min: 1,
        max: 80
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0.0, 1.1],
            [1.1, 2.2],
            [2.2, 3.2],
            [3.2, 4.3],
            [4.3, 5.4],
            [5.4, 6.5],
            [6.5, 7.6],
            [7.6, 8.6],
            [8.6, 9.7],
            [9.7, 10.8]
          ],
          [
            [10.8, 11.4],
            [11.4, 11.9],
            [11.9, 12.5],
            [12.5, 13.0],
            [13.0, 13.6],
            [13.6, 14.2],
            [14.2, 14.7],
            [14.7, 15.3],
            [15.3, 15.8],
            [15.8, 16.4]
          ],
          [
            [16.4, 18.3],
            [18.3, 20.2],
            [20.2, 22.1],
            [22.1, 24.0],
            [24.0, 26.0],
            [26.0, 27.9],
            [27.9, 29.8],
            [29.8, 31.7],
            [31.7, 33.6],
            [33.6, 35.5]
          ],
          [
            [35.5, 37.1],
            [37.1, 38.7],
            [38.7, 40.3],
            [40.3, 41.9],
            [41.9, 43.5],
            [43.5, 45.1],
            [45.1, 46.7],
            [46.7, 48.3],
            [48.3, 49.9],
            [49.9, 51.5]
          ],
          [
            [51.5, 54.4],
            [54.4, 57.2],
            [57.2, 60.1],
            [60.1, 62.9],
            [62.9, 65.8],
            [65.8, 68.6],
            [68.6, 71.5],
            [71.5, 74.3],
            [74.3, 77.2],
            [77.2, 80.0],
            [80.0, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['RED', 'LIGHT_RED', 'YELLOW', 'LIGHT_GREEN', 'GREEN']
      }
    }
  },
  ABSI: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 5,
      group: pointGroup.PHYSICAL,
      range: {
        min: 6.19,
        max: 8.83
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      ranges: {
        globalMale: [
          [
            [0.0, 6.6],
            [6.6, 6.66],
            [6.66, 6.71],
            [6.71, 6.77],
            [6.77, 6.82],
            [6.82, 6.88],
            [6.88, 6.93],
            [6.93, 6.99],
            [6.99, 7.04],
            [7.04, 7.1]
          ],
          [
            [7.1, 7.15],
            [7.15, 7.2],
            [7.2, 7.25],
            [7.25, 7.3],
            [7.3, 7.35],
            [7.35, 7.4],
            [7.4, 7.45],
            [7.45, 7.5],
            [7.5, 7.55],
            [7.55, 7.6]
          ],
          [
            [7.6, 7.7],
            [7.7, 7.8],
            [7.8, 7.9],
            [7.9, 8.0],
            [8.0, 8.1],
            [8.1, 8.2],
            [8.2, 8.3],
            [8.3, 8.4],
            [8.4, 8.5],
            [8.5, 8.6]
          ],
          [
            [8.6, 8.65],
            [8.65, 8.7],
            [8.7, 8.75],
            [8.75, 8.8],
            [8.8, 8.85],
            [8.85, 8.9],
            [8.9, 8.95],
            [8.95, 9.0],
            [9.0, 9.05],
            [9.05, 9.1]
          ],
          [
            [9.1, 9.15],
            [9.15, 9.2],
            [9.2, 9.25],
            [9.25, 9.3],
            [9.3, 9.35],
            [9.35, 9.4],
            [9.4, 9.45],
            [9.45, 9.5],
            [9.5, 9.55],
            [9.55, 9.6],
            [9.6, Infinity]
          ]
        ],
        globalFemale: [
          [
            [0.0, 6.2],
            [6.2, 6.27],
            [6.27, 6.33],
            [6.33, 6.4],
            [6.4, 6.47],
            [6.47, 6.53],
            [6.53, 6.6],
            [6.6, 6.67],
            [6.67, 6.73],
            [6.73, 6.8]
          ],
          [
            [6.8, 6.86],
            [6.86, 6.92],
            [6.92, 6.98],
            [6.98, 7.04],
            [7.04, 7.1],
            [7.1, 7.16],
            [7.16, 7.22],
            [7.22, 7.28],
            [7.28, 7.34],
            [7.34, 7.4]
          ],
          [
            [7.4, 7.52],
            [7.52, 7.64],
            [7.64, 7.76],
            [7.76, 7.88],
            [7.88, 8.0],
            [8.0, 8.12],
            [8.12, 8.24],
            [8.24, 8.36],
            [8.36, 8.48],
            [8.48, 8.6]
          ],
          [
            [8.6, 8.66],
            [8.66, 8.72],
            [8.72, 8.78],
            [8.78, 8.84],
            [8.84, 8.9],
            [8.9, 8.96],
            [8.96, 9.02],
            [9.02, 9.08],
            [9.08, 9.14],
            [9.14, 9.2]
          ],
          [
            [9.2, 9.26],
            [9.26, 9.32],
            [9.32, 9.38],
            [9.38, 9.44],
            [9.44, 9.5],
            [9.5, 9.56],
            [9.56, 9.62],
            [9.62, 9.68],
            [9.68, 9.74],
            [9.74, 9.8],
            [9.8, Infinity]
          ]
        ],
        eastAsiaMale: [
          [
            [0.0, 6.75],
            [6.75, 6.79],
            [6.79, 6.83],
            [6.83, 6.87],
            [6.87, 6.92],
            [6.92, 6.96],
            [6.96, 7.0],
            [7.0, 7.04],
            [7.04, 7.08],
            [7.08, 7.12]
          ],
          [
            [7.12, 7.16],
            [7.16, 7.2],
            [7.2, 7.23],
            [7.23, 7.27],
            [7.27, 7.31],
            [7.31, 7.34],
            [7.34, 7.38],
            [7.38, 7.42],
            [7.42, 7.46],
            [7.46, 7.49]
          ],
          [
            [7.49, 7.57],
            [7.57, 7.64],
            [7.64, 7.71],
            [7.71, 7.79],
            [7.79, 7.86],
            [7.86, 7.94],
            [7.94, 8.01],
            [8.01, 8.08],
            [8.08, 8.16],
            [8.16, 8.23]
          ],
          [
            [8.23, 8.27],
            [8.27, 8.31],
            [8.31, 8.34],
            [8.34, 8.38],
            [8.38, 8.42],
            [8.42, 8.45],
            [8.45, 8.49],
            [8.49, 8.53],
            [8.53, 8.56],
            [8.56, 8.6]
          ],
          [
            [8.6, 8.64],
            [8.64, 8.67],
            [8.67, 8.71],
            [8.71, 8.75],
            [8.75, 8.79],
            [8.79, 8.82],
            [8.82, 8.86],
            [8.86, 8.9],
            [8.9, 8.93],
            [8.93, 8.97],
            [8.97, Infinity]
          ]
        ],
        eastAsiaFemale: [
          [
            [0.0, 6.19],
            [6.19, 6.24],
            [6.24, 6.29],
            [6.29, 6.33],
            [6.33, 6.38],
            [6.38, 6.43],
            [6.43, 6.48],
            [6.48, 6.53],
            [6.53, 6.58],
            [6.58, 6.63]
          ],
          [
            [6.63, 6.67],
            [6.67, 6.71],
            [6.71, 6.76],
            [6.76, 6.8],
            [6.8, 6.85],
            [6.85, 6.89],
            [6.89, 6.93],
            [6.93, 6.98],
            [6.98, 7.02],
            [7.02, 7.07]
          ],
          [
            [7.07, 7.16],
            [7.16, 7.24],
            [7.24, 7.33],
            [7.33, 7.42],
            [7.42, 7.51],
            [7.51, 7.6],
            [7.6, 7.68],
            [7.68, 7.77],
            [7.77, 7.86],
            [7.86, 7.95]
          ],
          [
            [7.95, 7.99],
            [7.99, 8.04],
            [8.04, 8.08],
            [8.08, 8.13],
            [8.13, 8.17],
            [8.17, 8.21],
            [8.21, 8.26],
            [8.26, 8.3],
            [8.3, 8.35],
            [8.35, 8.39]
          ],
          [
            [8.39, 8.43],
            [8.43, 8.48],
            [8.48, 8.52],
            [8.52, 8.57],
            [8.57, 8.61],
            [8.61, 8.65],
            [8.65, 8.7],
            [8.7, 8.74],
            [8.74, 8.79],
            [8.79, 8.83],
            [8.83, Infinity]
          ]
        ]
      },
      dialBandColors: {
        globalMale: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED'],
        globalFemale: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED'],
        eastAsiaMale: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED'],
        eastAsiaFemale: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  BMI_CALC: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 5,
      group: pointGroup.PHYSICAL,
      range: {
        min: 10,
        max: 60
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0.0, 10.0],
            [10.0, 10.9],
            [10.9, 11.9],
            [11.9, 12.8],
            [12.8, 13.8],
            [13.8, 14.7],
            [14.7, 15.7],
            [15.7, 16.6],
            [16.6, 17.6],
            [17.6, 18.5]
          ],
          [
            [18.5, 19.2],
            [19.2, 19.8],
            [19.8, 20.5],
            [20.5, 21.1],
            [21.1, 21.8],
            [21.8, 22.4],
            [22.4, 23.1],
            [23.1, 23.7],
            [23.7, 24.4],
            [24.4, 25.0]
          ],
          [
            [25.0, 25.5],
            [25.5, 26.0],
            [26.0, 26.5],
            [26.5, 27.0],
            [27.0, 27.5],
            [27.5, 28.0],
            [28.0, 28.5],
            [28.5, 29.0],
            [29.0, 29.5],
            [29.5, 30.0]
          ],
          [
            [30.0, 30.5],
            [30.5, 31.0],
            [31.0, 31.5],
            [31.5, 32.0],
            [32.0, 32.5],
            [32.5, 33.0],
            [33.0, 33.5],
            [33.5, 34.0],
            [34.0, 34.5],
            [34.5, 35.0]
          ],
          [
            [35.0, 37.5],
            [37.5, 40.0],
            [40.0, 42.5],
            [42.5, 45.0],
            [45.0, 47.5],
            [47.5, 50.0],
            [50.0, 52.5],
            [52.5, 55.0],
            [55.0, 57.5],
            [57.5, 60.0],
            [60.0, Infinity]
          ]
        ],
        eastAsiaMale: [
          [
            [0.0, 10.0],
            [10.0, 10.9],
            [10.9, 11.9],
            [11.9, 12.8],
            [12.8, 13.8],
            [13.8, 14.7],
            [14.7, 15.7],
            [15.7, 16.6],
            [16.6, 17.6],
            [17.6, 18.5]
          ],
          [
            [18.5, 19.1],
            [19.1, 19.6],
            [19.6, 20.2],
            [20.2, 20.7],
            [20.7, 21.3],
            [21.3, 21.8],
            [21.8, 22.4],
            [22.4, 22.9],
            [22.9, 23.5],
            [23.5, 24.0]
          ],
          [
            [24.0, 24.4],
            [24.4, 24.8],
            [24.8, 25.2],
            [25.2, 25.6],
            [25.6, 26.0],
            [26.0, 26.4],
            [26.4, 26.8],
            [26.8, 27.2],
            [27.2, 27.6],
            [27.6, 28.0]
          ],
          [
            [28.0, 28.7],
            [28.7, 29.4],
            [29.4, 30.1],
            [30.1, 30.8],
            [30.8, 31.5],
            [31.5, 32.2],
            [32.2, 32.9],
            [32.9, 33.6],
            [33.6, 34.3],
            [34.3, 35.0],
            [35.0, Infinity]
          ]
        ],
        eastAsiaFemale: [
          [
            [0.0, 10.0],
            [10.0, 10.9],
            [10.9, 11.9],
            [11.9, 12.8],
            [12.8, 13.8],
            [13.8, 14.7],
            [14.7, 15.7],
            [15.7, 16.6],
            [16.6, 17.6],
            [17.6, 18.5]
          ],
          [
            [18.5, 19.1],
            [19.1, 19.6],
            [19.6, 20.2],
            [20.2, 20.7],
            [20.7, 21.3],
            [21.3, 21.8],
            [21.8, 22.4],
            [22.4, 22.9],
            [22.9, 23.5],
            [23.5, 24.0]
          ],
          [
            [24.0, 24.4],
            [24.4, 24.8],
            [24.8, 25.2],
            [25.2, 25.6],
            [25.6, 26.0],
            [26.0, 26.4],
            [26.4, 26.8],
            [26.8, 27.2],
            [27.2, 27.6],
            [27.6, 28.0]
          ],
          [
            [28.0, 28.7],
            [28.7, 29.4],
            [29.4, 30.1],
            [30.1, 30.8],
            [30.8, 31.5],
            [31.5, 32.2],
            [32.2, 32.9],
            [32.9, 33.6],
            [33.6, 34.3],
            [34.3, 35.0],
            [35.0, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: [ 'YELLOW', 'GREEN', 'YELLOW', 'LIGHT_RED', 'RED' ],
        eastAsiaMale: [ 'YELLOW', 'GREEN', 'YELLOW', 'RED' ],
        eastAsiaFemale: [ 'YELLOW', 'GREEN', 'YELLOW', 'RED' ]
      }
    }
  },
  BP_RPP: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.PHYSIOLOGICAL,
      range: {
        min: 3.71,
        max: 4.28
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0.0, 3.71],
            [3.71, 3.72],
            [3.72, 3.73],
            [3.73, 3.74],
            [3.74, 3.75],
            [3.75, 3.76],
            [3.76, 3.77],
            [3.77, 3.78],
            [3.78, 3.79],
            [3.79, 3.8]
          ],
          [
            [3.8, 3.81],
            [3.81, 3.82],
            [3.82, 3.83],
            [3.83, 3.84],
            [3.84, 3.85],
            [3.85, 3.86],
            [3.86, 3.87],
            [3.87, 3.88],
            [3.88, 3.89],
            [3.89, 3.9]
          ],
          [
            [3.9, 3.91],
            [3.91, 3.93],
            [3.93, 3.95],
            [3.95, 3.97],
            [3.97, 3.99],
            [3.99, 4.01],
            [4.01, 4.03],
            [4.03, 4.05],
            [4.05, 4.06],
            [4.06, 4.08]
          ],
          [
            [4.08, 4.09],
            [4.09, 4.1],
            [4.1, 4.11],
            [4.11, 4.12],
            [4.12, 4.13],
            [4.13, 4.14],
            [4.14, 4.15],
            [4.15, 4.16],
            [4.16, 4.17],
            [4.17, 4.18]
          ],
          [
            [4.18, 4.19],
            [4.19, 4.2],
            [4.2, 4.21],
            [4.21, 4.22],
            [4.22, 4.23],
            [4.23, 4.24],
            [4.24, 4.25],
            [4.25, 4.26],
            [4.26, 4.27],
            [4.27, 4.28],
            [4.28, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  BP_CVD: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.GENERAL_RISKS,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: true
      },
      ranges: {
        global: [
          [
            [0.0, 0.5],
            [0.5, 1.0],
            [1.0, 1.5],
            [1.5, 2.0],
            [2.0, 2.5],
            [2.5, 3.0],
            [3.0, 3.5],
            [3.5, 4.0],
            [4.0, 4.5],
            [4.5, 5.0]
          ],
          [
            [5.0, 5.25],
            [5.25, 5.5],
            [5.5, 5.75],
            [5.75, 6.0],
            [6.0, 6.25],
            [6.25, 6.5],
            [6.5, 6.75],
            [6.75, 7.0],
            [7.0, 7.25]
          ],
          [
            [7.25, 7.5],
            [7.5, 7.75],
            [7.75, 8.0],
            [8.0, 8.25],
            [8.25, 8.5],
            [8.5, 8.75],
            [8.75, 9.0],
            [9.0, 9.25],
            [9.25, 9.5],
            [9.5, 9.75],
            [9.75, 10.0]
          ],
          [
            [10.0, 11.0],
            [11.0, 12.0],
            [12.0, 13.0],
            [13.0, 14.0],
            [14.0, 15.0],
            [15.0, 16.0],
            [16.0, 17.0],
            [17.0, 18.0],
            [18.0, 19.0],
            [19.0, 20.0]
          ],
          [
            [20.0, 28.0],
            [28.0, 36.0],
            [36.0, 44.0],
            [44.0, 52.0],
            [52.0, 60.0],
            [60.0, 68.0],
            [68.0, 76.0],
            [76.0, 84.0],
            [84.0, 92.0],
            [92.0, 100.0],
            [100.0, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  CVD_MULTI_YEAR_RISK_YEARS: {
    meta: {
      resultsType: RESULT_TYPE.INTERNAL,
      availableAfterSec: 30,
      range: {
        min: 1,
        max: 20
      },
      requirements: {
        profileInfo: true,
        medicalHistory: true
      },
      group: pointGroup.GENERAL_RISKS,
      ranges: {
        global: []
      },
      dialBandColors: {
        global: []
      }
    }
  },
  CVD_MULTI_YEAR_RISK_PROBS: {
    meta: {
      resultsType: RESULT_TYPE.ARRAY,
      availableAfterSec: 30,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: true
      },
      group: pointGroup.GENERAL_RISKS,
      ranges: {
        global: [
          [
            [0.0, 0.5],
            [0.5, 1.0],
            [1.0, 1.5],
            [1.5, 2.0],
            [2.0, 2.5],
            [2.5, 3.0],
            [3.0, 3.5],
            [3.5, 4.0],
            [4.0, 4.5],
            [4.5, 5.0]
          ],
          [
            [5.0, 5.25],
            [5.25, 5.5],
            [5.5, 5.75],
            [5.75, 6.0],
            [6.0, 6.25],
            [6.25, 6.5],
            [6.5, 6.75],
            [6.75, 7.0],
            [7.0, 7.25]
          ],
          [
            [7.25, 7.5],
            [7.5, 7.75],
            [7.75, 8.0],
            [8.0, 8.25],
            [8.25, 8.5],
            [8.5, 8.75],
            [8.75, 9.0],
            [9.0, 9.25],
            [9.25, 9.5],
            [9.5, 9.75],
            [9.75, 10.0]
          ],
          [
            [10.0, 11.0],
            [11.0, 12.0],
            [12.0, 13.0],
            [13.0, 14.0],
            [14.0, 15.0],
            [15.0, 16.0],
            [16.0, 17.0],
            [17.0, 18.0],
            [18.0, 19.0],
            [19.0, 20.0]
          ],
          [
            [20.0, 28.0],
            [28.0, 36.0],
            [36.0, 44.0],
            [44.0, 52.0],
            [52.0, 60.0],
            [60.0, 68.0],
            [68.0, 76.0],
            [76.0, 84.0],
            [84.0, 92.0],
            [92.0, 100.0],
            [100.0, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  HEALTH_SCORE: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.OVERALL,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: true
      },
      ranges: {
        global: [
          [
            [0, 2],
            [2, 4],
            [4, 6],
            [6, 8],
            [8, 10],
            [10, 12],
            [12, 14],
            [14, 16],
            [16, 18],
            [18, 20]
          ],
          [
            [20, 22],
            [22, 24],
            [24, 26],
            [26, 28],
            [28, 30],
            [30, 32],
            [32, 34],
            [34, 36],
            [36, 38],
            [38, 40]
          ],
          [
            [40, 42],
            [42, 44],
            [44, 46],
            [46, 48],
            [48, 50],
            [50, 52],
            [52, 54],
            [54, 56],
            [56, 58],
            [58, 60]
          ],
          [
            [60, 62],
            [62, 64],
            [64, 66],
            [66, 68],
            [68, 70],
            [70, 72],
            [72, 74],
            [74, 76],
            [76, 78],
            [78, 80]
          ],
          [
            [80, 82],
            [82, 84],
            [84, 86],
            [86, 88],
            [88, 90],
            [90, 92],
            [92, 94],
            [94, 96],
            [96, 98],
            [98, 100],
            [100, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['RED', 'LIGHT_RED', 'YELLOW', 'LIGHT_GREEN', 'GREEN']
      }
    }
  },
  BP_HEART_ATTACK: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.GENERAL_RISKS,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: true
      },
      ranges: {
        global: [
          [
            [0.0, 0.17],
            [0.17, 0.33],
            [0.33, 0.5],
            [0.5, 0.66],
            [0.66, 0.83],
            [0.83, 0.99],
            [0.99, 1.16],
            [1.16, 1.32],
            [1.32, 1.49],
            [1.49, 1.65]
          ],
          [
            [1.65, 1.73],
            [1.73, 1.82],
            [1.82, 1.9],
            [1.9, 1.98],
            [1.98, 2.06],
            [2.06, 2.15],
            [2.15, 2.23],
            [2.23, 2.31],
            [2.31, 2.39]
          ],
          [
            [2.39, 2.48],
            [2.48, 2.56],
            [2.56, 2.64],
            [2.64, 2.72],
            [2.72, 2.81],
            [2.81, 2.89],
            [2.89, 2.97],
            [2.97, 3.05],
            [3.05, 3.14],
            [3.14, 3.22],
            [3.22, 3.3]
          ],
          [
            [3.3, 3.63],
            [3.63, 3.96],
            [3.96, 4.29],
            [4.29, 4.62],
            [4.62, 4.95],
            [4.95, 5.28],
            [5.28, 5.61],
            [5.61, 5.94],
            [5.94, 6.27],
            [6.27, 6.6]
          ],
          [
            [6.6, 9.24],
            [9.24, 11.88],
            [11.88, 14.52],
            [14.52, 17.16],
            [17.16, 19.8],
            [19.8, 22.44],
            [22.4, 25.08],
            [25.08, 27.72],
            [27.72, 30.36],
            [30.36, 33.0],
            [33.0, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  IHB_COUNT: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.VITALS,
      range: {
        min: 0,
        max: 4
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0, 4],
            [4, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: []
      }
    }
  },
  MSI: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.MENTAL,
      range: {
        min: 1,
        max: 5.9
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [1.0, 1.1],
            [1.1, 1.2],
            [1.2, 1.3],
            [1.3, 1.4],
            [1.4, 1.5],
            [1.5, 1.6],
            [1.6, 1.7],
            [1.7, 1.8],
            [1.8, 1.9],
            [1.9, 2.0]
          ],
          [
            [2.0, 2.1],
            [2.1, 2.2],
            [2.2, 2.3],
            [2.3, 2.4],
            [2.4, 2.5],
            [2.5, 2.6],
            [2.6, 2.7],
            [2.7, 2.8],
            [2.8, 2.9],
            [2.9, 3.0]
          ],
          [
            [3.0, 3.1],
            [3.1, 3.2],
            [3.2, 3.3],
            [3.3, 3.4],
            [3.4, 3.5],
            [3.5, 3.6],
            [3.6, 3.7],
            [3.7, 3.8],
            [3.8, 3.9],
            [3.9, 4.0]
          ],
          [
            [4.0, 4.1],
            [4.1, 4.2],
            [4.2, 4.3],
            [4.3, 4.4],
            [4.4, 4.5],
            [4.5, 4.6],
            [4.6, 4.7],
            [4.7, 4.8],
            [4.8, 4.9],
            [4.9, 5.0]
          ],
          [
            [5.0, 5.1],
            [5.1, 5.2],
            [5.2, 5.3],
            [5.3, 5.4],
            [5.4, 5.5],
            [5.5, 5.6],
            [5.6, 5.7],
            [5.7, 5.8],
            [5.8, 5.9],
            [5.9, 6.0],
            [6.0, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  BP_STROKE: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.GENERAL_RISKS,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: true
      },
      ranges: {
        global: [
          [
            [0.0, 0.33],
            [0.33, 0.66],
            [0.66, 0.99],
            [0.99, 1.32],
            [1.32, 1.65],
            [1.65, 1.98],
            [1.98, 2.31],
            [2.31, 2.64],
            [2.64, 2.97],
            [2.97, 3.3]
          ],
          [
            [3.3, 3.47],
            [3.47, 3.63],
            [3.63, 3.8],
            [3.8, 3.96],
            [3.96, 4.13],
            [4.13, 4.29],
            [4.29, 4.46],
            [4.46, 4.62],
            [4.62, 4.79]
          ],
          [
            [4.79, 4.95],
            [4.95, 5.12],
            [5.12, 5.28],
            [5.28, 5.45],
            [5.45, 5.61],
            [5.61, 5.78],
            [5.78, 5.94],
            [5.94, 6.11],
            [6.11, 6.27],
            [6.27, 6.44],
            [6.44, 6.6]
          ],
          [
            [6.6, 7.26],
            [7.26, 7.92],
            [7.92, 8.58],
            [8.58, 9.24],
            [9.24, 9.9],
            [9.9, 10.56],
            [10.56, 11.22],
            [11.22, 11.88],
            [11.88, 12.54],
            [12.54, 13.2]
          ],
          [
            [13.2, 18.48],
            [18.48, 23.76],
            [23.76, 29.04],
            [29.04, 34.32],
            [34.32, 39.6],
            [39.6, 44.88],
            [44.88, 50.16],
            [50.16, 55.44],
            [55.44, 60.72],
            [60.72, 66.0],
            [66.0, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  BP_TAU: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.PHYSIOLOGICAL,
      range: {
        min: 0.3,
        max: 3
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0.0, 0.3],
            [0.3, 0.35],
            [0.35, 0.41],
            [0.41, 0.46],
            [0.46, 0.52],
            [0.52, 0.57],
            [0.57, 0.62],
            [0.62, 0.68],
            [0.68, 0.73],
            [0.73, 0.79]
          ],
          [
            [0.79, 0.82],
            [0.82, 0.86],
            [0.86, 0.89],
            [0.89, 0.92],
            [0.92, 0.96],
            [0.96, 0.99],
            [0.99, 1.02],
            [1.02, 1.05],
            [1.05, 1.09],
            [1.09, 1.12]
          ],
          [
            [1.12, 1.19],
            [1.19, 1.25],
            [1.25, 1.32],
            [1.32, 1.38],
            [1.38, 1.45],
            [1.45, 1.52],
            [1.52, 1.58],
            [1.58, 1.65],
            [1.65, 1.71],
            [1.71, 1.78]
          ],
          [
            [1.78, 1.81],
            [1.81, 1.85],
            [1.85, 1.88],
            [1.88, 1.91],
            [1.91, 1.95],
            [1.95, 1.98],
            [1.98, 2.01],
            [2.01, 2.04],
            [2.04, 2.08],
            [2.08, 2.11]
          ],
          [
            [2.11, 2.2],
            [2.2, 2.29],
            [2.29, 2.38],
            [2.38, 2.47],
            [2.47, 2.56],
            [2.56, 2.64],
            [2.64, 2.73],
            [2.73, 2.82],
            [2.82, 2.91],
            [2.91, 3.0],
            [3.0, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['RED', 'LIGHT_RED', 'YELLOW', 'LIGHT_GREEN', 'GREEN']
      }
    }
  },
  HBA1C_RISK_PROB: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.BLOOD_BIOMARKERS,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0, 2.5],
            [2.5, 5],
            [5, 7.5],
            [7.5, 10],
            [10, 12.5],
            [12.5, 15],
            [15, 17.5],
            [17.5, 20],
            [20, 22.5],
            [22.5, 25]
          ],
          [
            [25, 27.5],
            [27.5, 30],
            [30, 32.5],
            [32.5, 35],
            [35, 37.5],
            [37.5, 40],
            [40, 42.5],
            [42.5, 45]
          ],
          [
            [45, 47.5],
            [47.5, 50],
            [50, 52.5],
            [52.5, 55]
          ],
          [
            [55, 57.5],
            [57.5, 60],
            [60, 62.5],
            [62.5, 65],
            [65, 67.5],
            [67.5, 70],
            [70, 72.5],
            [72.5, 75],
            [75, 77.5]
          ],
          [
            [77.5, 80],
            [80, 82.5],
            [82.5, 85],
            [85, 87.5],
            [87.5, 90],
            [90, 92.5],
            [92.5, 95],
            [95, 97.5],
            [97.5, 100],
            [100, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  MFBG_RISK_PROB: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.BLOOD_BIOMARKERS,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0, 2.5],
            [2.5, 5],
            [5, 7.5],
            [7.5, 10],
            [10, 12.5],
            [12.5, 15],
            [15, 17.5],
            [17.5, 20],
            [20, 22.5],
            [22.5, 25]
          ],
          [
            [25, 27.5],
            [27.5, 30],
            [30, 32.5],
            [32.5, 35],
            [35, 37.5],
            [37.5, 40],
            [40, 42.5],
            [42.5, 45]
          ],
          [
            [45, 47.5],
            [47.5, 50],
            [50, 52.5],
            [52.5, 55]
          ],
          [
            [55, 57.5],
            [57.5, 60],
            [60, 62.5],
            [62.5, 65],
            [65, 67.5],
            [67.5, 70],
            [70, 72.5],
            [72.5, 75],
            [75, 77.5]
          ],
          [
            [77.5, 80],
            [80, 82.5],
            [82.5, 85],
            [85, 87.5],
            [87.5, 90],
            [90, 92.5],
            [92.5, 95],
            [95, 97.5],
            [97.5, 100],
            [100, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  HPT_RISK_PROB: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.METABOLIC_RISKS,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0, 2.5],
            [2.5, 5],
            [5, 7.5],
            [7.5, 10],
            [10, 12.5],
            [12.5, 15],
            [15, 17.5],
            [17.5, 20],
            [20, 22.5],
            [22.5, 25]
          ],
          [
            [25, 27.5],
            [27.5, 30],
            [30, 32.5],
            [32.5, 35],
            [35, 37.5],
            [37.5, 40],
            [40, 42.5],
            [42.5, 45]
          ],
          [
            [45, 47.5],
            [47.5, 50],
            [50, 52.5],
            [52.5, 55]
          ],
          [
            [55, 57.5],
            [57.5, 60],
            [60, 62.5],
            [62.5, 65],
            [65, 67.5],
            [67.5, 70],
            [70, 72.5],
            [72.5, 75],
            [75, 77.5]
          ],
          [
            [77.5, 80],
            [80, 82.5],
            [82.5, 85],
            [85, 87.5],
            [87.5, 90],
            [90, 92.5],
            [92.5, 95],
            [95, 97.5],
            [97.5, 100],
            [100, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  DBT_RISK_PROB: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.METABOLIC_RISKS,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0, 2.5],
            [2.5, 5],
            [5, 7.5],
            [7.5, 10],
            [10, 12.5],
            [12.5, 15],
            [15, 17.5],
            [17.5, 20],
            [20, 22.5],
            [22.5, 25]
          ],
          [
            [25, 27.5],
            [27.5, 30],
            [30, 32.5],
            [32.5, 35],
            [35, 37.5],
            [37.5, 40],
            [40, 42.5],
            [42.5, 45]
          ],
          [
            [45, 47.5],
            [47.5, 50],
            [50, 52.5],
            [52.5, 55]
          ],
          [
            [55, 57.5],
            [57.5, 60],
            [60, 62.5],
            [62.5, 65],
            [65, 67.5],
            [67.5, 70],
            [70, 72.5],
            [72.5, 75],
            [75, 77.5]
          ],
          [
            [77.5, 80],
            [80, 82.5],
            [82.5, 85],
            [85, 87.5],
            [87.5, 90],
            [90, 92.5],
            [92.5, 95],
            [95, 97.5],
            [97.5, 100],
            [100, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  HDLTC_RISK_PROB: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.METABOLIC_RISKS,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0, 2.5],
            [2.5, 5],
            [5, 7.5],
            [7.5, 10],
            [10, 12.5],
            [12.5, 15],
            [15, 17.5],
            [17.5, 20],
            [20, 22.5],
            [22.5, 25]
          ],
          [
            [25, 27.5],
            [27.5, 30],
            [30, 32.5],
            [32.5, 35],
            [35, 37.5],
            [37.5, 40],
            [40, 42.5],
            [42.5, 45]
          ],
          [
            [45, 47.5],
            [47.5, 50],
            [50, 52.5],
            [52.5, 55]
          ],
          [
            [55, 57.5],
            [57.5, 60],
            [60, 62.5],
            [62.5, 65],
            [65, 67.5],
            [67.5, 70],
            [70, 72.5],
            [72.5, 75],
            [75, 77.5]
          ],
          [
            [77.5, 80],
            [80, 82.5],
            [82.5, 85],
            [85, 87.5],
            [87.5, 90],
            [90, 92.5],
            [92.5, 95],
            [95, 97.5],
            [97.5, 100],
            [100, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  TG_RISK_PROB: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      group: pointGroup.METABOLIC_RISKS,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      ranges: {
        global: [
          [
            [0, 2.5],
            [2.5, 5],
            [5, 7.5],
            [7.5, 10],
            [10, 12.5],
            [12.5, 15],
            [15, 17.5],
            [17.5, 20],
            [20, 22.5],
            [22.5, 25]
          ],
          [
            [25, 27.5],
            [27.5, 30],
            [30, 32.5],
            [32.5, 35],
            [35, 37.5],
            [37.5, 40],
            [40, 42.5],
            [42.5, 45]
          ],
          [
            [45, 47.5],
            [47.5, 50],
            [50, 52.5],
            [52.5, 55]
          ],
          [
            [55, 57.5],
            [57.5, 60],
            [60, 62.5],
            [62.5, 65],
            [65, 67.5],
            [67.5, 70],
            [70, 72.5],
            [72.5, 75],
            [75, 77.5]
          ],
          [
            [77.5, 80],
            [80, 82.5],
            [82.5, 85],
            [85, 87.5],
            [87.5, 90],
            [90, 92.5],
            [92.5, 95],
            [95, 97.5],
            [97.5, 100],
            [100, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  AGE: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 5,
      range: {
        min: 13,
        max: 120
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      group: pointGroup.PHYSICAL,
      ranges: {
        global: []
      },
      dialBandColors: {
        global: []
      }
    }
  },
  AGE_CVM: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      range: {
        min: 18,
        max: 110
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      group: pointGroup.PHYSICAL,
      ranges: {
        global: []
      },
      dialBandColors: {
        global: []
      }
    }
  },
  FLD_RISK_PROB: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      group: pointGroup.METABOLIC_RISKS,
      ranges: {
        global: [
          [
            [0, 2.5],
            [2.5, 5],
            [5, 7.5],
            [7.5, 10],
            [10, 12.5],
            [12.5, 15],
            [15, 17.5],
            [17.5, 20],
            [20, 22.5],
            [22.5, 25]
          ],
          [
            [25, 27.5],
            [27.5, 30],
            [30, 32.5],
            [32.5, 35],
            [35, 37.5],
            [37.5, 40],
            [40, 42.5],
            [42.5, 45]
          ],
          [
            [45, 47.5],
            [47.5, 50],
            [50, 52.5],
            [52.5, 55]
          ],
          [
            [55, 57.5],
            [57.5, 60],
            [60, 62.5],
            [62.5, 65],
            [65, 67.5],
            [67.5, 70],
            [70, 72.5],
            [72.5, 75],
            [75, 77.5]
          ],
          [
            [77.5, 80],
            [80, 82.5],
            [82.5, 85],
            [85, 87.5],
            [87.5, 90],
            [90, 92.5],
            [92.5, 95],
            [95, 97.5],
            [97.5, 100],
            [100, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  HEIGHT: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 5,
      range: {
        min: 120,
        max: 220
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      group: pointGroup.PHYSICAL,
      ranges: {
        global: []
      },
      dialBandColors: {
        global: []
      }
    }
  },
  MENTAL_SCORE: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      range: {
        min: 1,
        max: 5
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      group: pointGroup.OVERALL,
      ranges: {
        global: [
          [
            [0, 1.5],
            [1.5, 2.5],
            [2.5, 3.5],
            [3.5, 4.5],
            [4.5, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: []
      }
    }
  },
  OVERALL_METABOLIC_RISK_PROB: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      group: pointGroup.METABOLIC_RISKS,
      ranges: {
        global: [
          [
            [0, 2.5],
            [2.5, 5],
            [5, 7.5],
            [7.5, 10],
            [10, 12.5],
            [12.5, 15],
            [15, 17.5],
            [17.5, 20],
            [20, 22.5],
            [22.5, 25]
          ],
          [
            [25, 27.5],
            [27.5, 30],
            [30, 32.5],
            [32.5, 35],
            [35, 37.5],
            [37.5, 40],
            [40, 42.5],
            [42.5, 45]
          ],
          [
            [45, 47.5],
            [47.5, 50],
            [50, 52.5],
            [52.5, 55]
          ],
          [
            [55, 57.5],
            [57.5, 60],
            [60, 62.5],
            [62.5, 65],
            [65, 67.5],
            [67.5, 70],
            [70, 72.5],
            [72.5, 75],
            [75, 77.5]
          ],
          [
            [77.5, 80],
            [80, 82.5],
            [82.5, 85],
            [85, 87.5],
            [87.5, 90],
            [90, 92.5],
            [92.5, 95],
            [95, 97.5],
            [97.5, 100],
            [100, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  PHYSICAL_SCORE: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      range: {
        min: 1,
        max: 5
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      group: pointGroup.OVERALL,
      ranges: {
        global: [
          [
            [0, 1.5],
            [1.5, 2.5],
            [2.5, 3.5],
            [3.5, 4.5],
            [4.5, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: []
      }
    }
  },
  PHYSIO_SCORE: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      range: {
        min: 1,
        max: 5
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      group: pointGroup.OVERALL,
      ranges: {
        global: [
          [
            [0, 1.5],
            [1.5, 2.5],
            [2.5, 3.5],
            [3.5, 4.5],
            [4.5, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: []
      }
    }
  },
  RISKS_SCORE: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      range: {
        min: 1,
        max: 5
      },
      requirements: {
        profileInfo: true,
        medicalHistory: true
      },
      group: pointGroup.OVERALL,
      ranges: {
        global: [
          [
            [0, 1.5],
            [1.5, 2.5],
            [2.5, 3.5],
            [3.5, 4.5],
            [4.5, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: []
      }
    }
  },
  SURVEY_ANXIETY_MODERATE: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 0,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      group: pointGroup.SURVEYS,
      ranges: {
        global: [
          [
            [0, 20],
            [20, 40],
            [40, 60],
            [60, 80],
            [80, 100]
          ]
        ]
      },
      dialBandColors: {
        global: [ 'GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  SURVEY_DEPRESSION_MODERATE: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 0,
      range: {
        min: 0,
        max: 100
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      group: pointGroup.SURVEYS,
      ranges: {
        global: [
          [
            [0, 20],
            [20, 40],
            [40, 60],
            [60, 80],
            [80, 100]
          ]
        ]
      },
      dialBandColors: {
        global: [ 'GREEN', 'LIGHT_GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  VITAL_SCORE: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 30,
      range: {
        min: 1,
        max: 5
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      group: pointGroup.OVERALL,
      ranges: {
        global: [
          [
            [0, 1.5],
            [1.5, 2.5],
            [2.5, 3.5],
            [3.5, 4.5],
            [4.5, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: []
      }
    }
  },
  WAIST_CIRCUM: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 5,
      range: {
        min: 0,
        max: Infinity
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      group: pointGroup.PHYSICAL,
      ranges: {
        global: []
      },
      dialBandColors: {
        global: []
      }
    }
  },
  WAIST_TO_HEIGHT: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 5,
      range: {
        min: 25,
        max: 70
      },
      requirements: {
        profileInfo: true,
        medicalHistory: false
      },
      group: pointGroup.PHYSICAL,
      ranges: {
        global: [
          [
            [0.0, 25.0],
            [25.0, 27.0],
            [27.0, 29.0],
            [29.0, 31.0],
            [31.0, 33.0],
            [33.0, 35.0],
            [35.0, 37.0],
            [37.0, 39.0],
            [39.0, 41.0],
            [41.0, 43.0]
          ],
          [
            [43.0, 44.0],
            [44.0, 45.0],
            [45.0, 46.0],
            [46.0, 47.0],
            [47.0, 48.0],
            [48.0, 49.0],
            [49.0, 50.0],
            [50.0, 51.0],
            [51.0, 52.0],
            [52.0, 53.0]
          ],
          [
            [53.0, 53.5],
            [53.5, 54.0],
            [54.0, 54.5],
            [54.5, 55.0],
            [55.0, 55.5],
            [55.5, 56.0],
            [56.0, 56.5],
            [56.5, 57.0],
            [57.0, 57.5],
            [57.5, 58.0]
          ],
          [
            [58.0, 58.5],
            [58.5, 59.0],
            [59.0, 59.5],
            [59.5, 60.0],
            [60.0, 60.5],
            [60.5, 61.0],
            [61.0, 61.5],
            [61.5, 62.0],
            [62.0, 62.5],
            [62.5, 63.0]
          ],
          [
            [63.0, 64.2],
            [64.2, 65.4],
            [65.4, 66.6],
            [66.6, 67.8],
            [67.8, 69.0],
            [69.0, 70.2],
            [70.2, 71.4],
            [71.4, 72.6],
            [72.6, 73.8],
            [73.8, 75.0],
            [75.0, Infinity]
          ]
        ],
        globalMale: [
          [
            [0.0, 25.0],
            [25.0, 27.0],
            [27.0, 29.0],
            [29.0, 31.0],
            [31.0, 33.0],
            [33.0, 35.0],
            [35.0, 37.0],
            [37.0, 39.0],
            [39.0, 41.0],
            [41.0, 43.0]
          ],
          [
            [43.0, 44.0],
            [44.0, 45.0],
            [45.0, 46.0],
            [46.0, 47.0],
            [47.0, 48.0],
            [48.0, 49.0],
            [49.0, 50.0],
            [50.0, 51.0],
            [51.0, 52.0],
            [52.0, 53.0]
          ],
          [
            [53.0, 53.5],
            [53.5, 54.0],
            [54.0, 54.5],
            [54.5, 55.0],
            [55.0, 55.5],
            [55.5, 56.0],
            [56.0, 56.5],
            [56.5, 57.0],
            [57.0, 57.5],
            [57.5, 58.0]
          ],
          [
            [58.0, 58.5],
            [58.5, 59.0],
            [59.0, 59.5],
            [59.5, 60.0],
            [60.0, 60.5],
            [60.5, 61.0],
            [61.0, 61.5],
            [61.5, 62.0],
            [62.0, 62.5],
            [62.5, 63.0]
          ],
          [
            [63.0, 64.2],
            [64.2, 65.4],
            [65.4, 66.6],
            [66.6, 67.8],
            [67.8, 69.0],
            [69.0, 70.2],
            [70.2, 71.4],
            [71.4, 72.6],
            [72.6, 73.8],
            [73.8, 75.0],
            [75.0, Infinity]
          ]
        ],
        globalFemale: [
          [
            [0.0, 25.0],
            [25.0, 26.9],
            [26.9, 28.8],
            [28.8, 30.6],
            [30.6, 32.5],
            [32.5, 34.4],
            [34.4, 36.3],
            [36.3, 38.2],
            [38.2, 40.0],
            [40.0, 42.0]
          ],
          [
            [42.0, 42.7],
            [42.7, 43.4],
            [43.4, 44.1],
            [44.1, 44.8],
            [44.8, 45.5],
            [45.5, 46.2],
            [46.2, 46.9],
            [46.9, 47.6],
            [47.6, 48.3],
            [48.3, 49.0]
          ],
          [
            [49.0, 49.5],
            [49.5, 50.0],
            [50.0, 50.5],
            [50.5, 51.0],
            [51.0, 51.5],
            [51.5, 52.0],
            [52.0, 52.5],
            [52.5, 53.0],
            [53.0, 53.5],
            [53.5, 54.0]
          ],
          [
            [54.0, 54.4],
            [54.4, 54.8],
            [54.8, 55.2],
            [55.2, 55.6],
            [55.6, 56.0],
            [56.0, 56.4],
            [56.4, 56.8],
            [56.8, 57.2],
            [57.2, 57.6],
            [57.6, 58.0]
          ],
          [
            [58.0, 59.2],
            [59.2, 60.4],
            [60.4, 61.6],
            [61.6, 62.8],
            [62.8, 64.0],
            [64.0, 65.2],
            [65.2, 66.4],
            [66.4, 67.6],
            [67.6, 68.8],
            [68.8, 70.0],
            [70.0, Infinity]
          ]
        ],
        eastAsiaMale: [
          [
            [0.0, 25.0],
            [25.0, 27.0],
            [27.0, 29.0],
            [29.0, 31.0],
            [31.0, 33.0],
            [33.0, 35.0],
            [35.0, 37.0],
            [37.0, 39.0],
            [39.0, 41.0],
            [41.0, 43.0]
          ],
          [
            [43.0, 44.0],
            [44.0, 45.0],
            [45.0, 46.0],
            [46.0, 47.0],
            [47.0, 48.0],
            [48.0, 49.0],
            [49.0, 50.0],
            [50.0, 51.0],
            [51.0, 52.0],
            [52.0, 53.0]
          ],
          [
            [53.0, 53.5],
            [53.5, 54.0],
            [54.0, 54.5],
            [54.5, 55.0],
            [55.0, 55.5],
            [55.5, 56.0],
            [56.0, 56.5],
            [56.5, 57.0],
            [57.0, 57.5],
            [57.5, 58.0]
          ],
          [
            [58.0, 58.5],
            [58.5, 59.0],
            [59.0, 59.5],
            [59.5, 60.0],
            [60.0, 60.5],
            [60.5, 61.0],
            [61.0, 61.5],
            [61.5, 62.0],
            [62.0, 62.5],
            [62.5, 63.0]
          ],
          [
            [63.0, 64.2],
            [64.2, 65.4],
            [65.4, 66.6],
            [66.6, 67.8],
            [67.8, 69.0],
            [69.0, 70.2],
            [70.2, 71.4],
            [71.4, 72.6],
            [72.6, 73.8],
            [73.8, 75.0],
            [75.0, Infinity]
          ]
        ],
        eastAsiaFemale: [
          [
            [0.0, 25.0],
            [25.0, 26.9],
            [26.9, 28.8],
            [28.8, 30.6],
            [30.6, 32.5],
            [32.5, 34.4],
            [34.4, 36.3],
            [36.3, 38.2],
            [38.2, 40.0],
            [40.0, 42.0]
          ],
          [
            [42.0, 42.7],
            [42.7, 43.4],
            [43.4, 44.1],
            [44.1, 44.8],
            [44.8, 45.5],
            [45.5, 46.2],
            [46.2, 46.9],
            [46.9, 47.6],
            [47.6, 48.3],
            [48.3, 49.0]
          ],
          [
            [49.0, 49.5],
            [49.5, 50.0],
            [50.0, 50.5],
            [50.5, 51.0],
            [51.0, 51.5],
            [51.5, 52.0],
            [52.0, 52.5],
            [52.5, 53.0],
            [53.0, 53.5],
            [53.5, 54.0]
          ],
          [
            [54.0, 54.4],
            [54.4, 54.8],
            [54.8, 55.2],
            [55.2, 55.6],
            [55.6, 56.0],
            [56.0, 56.4],
            [56.4, 56.8],
            [56.8, 57.2],
            [57.2, 57.6],
            [57.6, 58.0]
          ],
          [
            [58.0, 59.2],
            [59.2, 60.4],
            [60.4, 61.6],
            [61.6, 62.8],
            [62.8, 64.0],
            [64.0, 65.2],
            [65.2, 66.4],
            [66.4, 67.6],
            [67.6, 68.8],
            [68.8, 70.0],
            [70.0, Infinity]
          ]
        ]
      },
      dialBandColors: {
        global: ['YELLOW', 'GREEN', 'YELLOW', 'LIGHT_RED', 'RED'],
        globalMale: ['YELLOW', 'GREEN', 'YELLOW', 'LIGHT_RED', 'RED'],
        globalFemale: ['YELLOW', 'GREEN', 'YELLOW', 'LIGHT_RED', 'RED'],
        eastAsiaMale: ['YELLOW', 'GREEN', 'YELLOW', 'LIGHT_RED', 'RED'],
        eastAsiaFemale: ['YELLOW', 'GREEN', 'YELLOW', 'LIGHT_RED', 'RED']
      }
    }
  },
  WEIGHT: {
    meta: {
      resultsType: RESULT_TYPE.SCALAR,
      availableAfterSec: 5,
      range: {
        min: 30,
        max: 300
      },
      requirements: {
        profileInfo: false,
        medicalHistory: false
      },
      group: pointGroup.PHYSICAL,
      ranges: {
        global: []
      },
      dialBandColors: {
        global: []
      }
    }
  }
};

export const calculateMedian = (array) => {
    const sorted = [...array].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};

export const parseResults = (results) => {
    const { Multiplier, Error, Channels, MeasurementID, MeasurementResultID } = results;
    const result = {
        measurementId: MeasurementID,
        measurementResultId: MeasurementResultID,
        points: {},
        errors: { code: 'OK', errors: {} },
        statusId: results?.StatusID ?? '',
    };
    const points = Channels
        ? Object.keys(Channels)
        : [];
    const population = 'global';
    const countSubarrays = (arr) => {
        return arr.map((sub) => sub.length);
    };

    points.forEach((point) => {
        const defaultMeta = {
            resultsType: RESULT_TYPE.SCALAR,
            availableAfterSec: 0,
            range: {
                min: 0,
                max: 0,
            },
            requirements: {
                profileInfo: false,
                medicalHistory: false,
            },
            group: 'metadata',
            ranges: {
                global: [],
            },
            dialBandColors: {
                global: [],
            }
        };
        const defaultInfo = {
            name: '',
            unit: ''
        }
        // Check if the point exists in DFX_POINTS, otherwise use defaults
        const pointMeta = DFX_POINTS[point]?.meta || defaultMeta;
        if (!DFX_POINTS[point]) {
            console.error(`The metadata and info for point "${point}" not found in DFX_POINTS. Please contact the support team to add this point.`);
        }
        const { ranges } = pointMeta;
        const { dialBandColors } = pointMeta;
        const { resultsType } = pointMeta;

        
        let scalerValue = '0';
        let arrayValue = [];
        if (resultsType === RESULT_TYPE.SCALAR) {
            scalerValue = (calculateMedian(Channels[point].Data) / Multiplier).toFixed(2);
        } else {
            arrayValue = Channels[point].Data.map(v => v / Multiplier);
        }

        const range = ranges[population] ?? [];
        const bandColors = dialBandColors[population] ?? [];
        let group = 1;
        let subGroup = 0;
        const truncatedValue = Number(scalerValue);
        range.forEach((rangeGroup, i) => {
            rangeGroup.forEach((rangeSubGroup, j) => {
                const [start, end] = rangeSubGroup;
                if (truncatedValue >= start && truncatedValue <= end) {
                    group = i + 1;
                    subGroup = j;
                }
            });
        });
        
        // Check if the point exists in localization, otherwise use defaults
        const pointInfo = localication['en'][point] || defaultInfo;

        result.points[point] = {
            channel: Channels[point].Channel,
            notes: Channels[point].Notes ? Channels[point].Notes : [],
            value: resultsType === RESULT_TYPE.SCALAR ? scalerValue : arrayValue,
            dial: {
                sections: countSubarrays(range).map((groupSize, index) => {
                    const rangeGroup = range[index];
                    const start = rangeGroup[0][0];
                    const end = rangeGroup[rangeGroup.length - 1][1];
                    return {
                        groupSize,
                        bandColor: bandColors[index],
                        range: [start, end],
                    }
                }),
                group,
                subGroup,
            },
            meta: pointMeta,
            info: pointInfo,
        };
    });

    result.errors.code = Error.Code;
    if (Error.Errors) {
        const errorKeys = Object.keys(Error.Errors);
        for (const key of errorKeys) {
            result.errors.errors[key] = {
                messages: Error.Errors[key]?.msgs ?? [],
            };
        }
    }
    return result;
}