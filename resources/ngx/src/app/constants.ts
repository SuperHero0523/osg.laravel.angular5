
// age min max constants
export const AGE_MIN_MAXS = [
  {min: 0, max: 20},
  {min: 21, max: 30},
  {min: 31, max: 40},
  {min: 41, max: 50},
  {min: 51, max: 60},
  {min: 61, max: 80},
];

// height min max constants
export const HEIGHT_MIN_MAXS = [
  {min: 0, max: 139},
  {min: 140, max: 149},
  {min: 150, max: 159},
  {min: 160, max: 169},
  {min: 170, max: 179},
  {min: 180, max: 189},
  {min: 190, max: 199},
  {min: 200, max: 209},
  {min: 210, max: 219},
  {min: 220, max: 300},
];

// weight min max constants
export const WEIGHT_MIN_MAXS_MALE = [
  {min: 0, max: 50},
  {min: 51, max: 60},
  {min: 61, max: 70},
  {min: 71, max: 80},
  {min: 81, max: 90},
  {min: 91, max: 100},
  {min: 101, max: 110},
  {min: 111, max: 120},
];

export const WEIGHT_MIN_MAXS_FEMALE = [
  {min: 0, max: 40},
  {min: 41, max: 50},
  {min: 51, max: 60},
  {min: 61, max: 70},
  {min: 71, max: 80},
  {min: 81, max: 90},
  {min: 91, max: 100},
  {min: 101, max: 110},
];

// waist-hip-ratio min max constants
export const WHR_MIN_MAXS_MALE = [
  {min: "0,71", max: "0,80"},
  {min: "0,81", max: "0,90"},
  {min: "0,91", max: "1,00"},
  {min: "1,01", max: "1,10"},
  {min: "1,11", max: "1,20"},
];

export const WHR_MIN_MAXS_FEMALE = [
  {min: "0,61", max: "0,70"},
  {min: "0,71", max: "0,80"},
  {min: "0,81", max: "0,90"},
  {min: "0,91", max: "1,00"},
  {min: "1,01", max: "1,10"},
];

export const LEVELS = {
  untrained: 'Untrained',
  novice: 'Novice',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  elite: 'Elite',
};

export const LEVEL_RATIOS = {
  untrained: 0.34,
  novice: 0.49,
  intermediate: 0.61,
  advanced: 0.8,
  elite: 1
}

export const NO_RM_EQUIPMENTS = [
  'Assisted',
  'Band',
  'Body weight',
  'Bosu ball',
  // 'Leverage machine',
  'Medicine Ball',
  // 'Power Sled',
  'Resistance Band',
  // 'Rope',
  // 'Sled machine',
  'Stability ball',
  'Suspension',
  'Weighted'
];

export const RM_DATA = [
  [100, 95.5, 92.2, 89.2, 86.3, 83.7, 81.1, 78.6, 76.2, 73.9, 70.7, 68.0, 64.9, 62.1, 59.4, 56.6, 53.8, 51.0, 48.2, 45.5],
  [95.5, 92.2, 89.2, 86.3, 83.7, 81.1, 78.6, 76.2, 73.9, 70.7, 68.0, 65.3, 62.6, 60.0, 57.3, 54.6, 51.9, 49.2, 46.6, 43.9],
  [92.2, 89.2, 86.3, 83.7, 81.1, 78.6, 76.2, 73.9, 70.7, 68.0, 65.3, 62.6, 60.1, 57.4, 54.8, 52.1, 49.5, 46.8, 44.2, 41.5],
  [89.2, 86.3, 83.7, 81.1, 78.6, 76.2, 73.9, 70.7, 68.0, 65.3, 62.6, 59.9, 57.4, 54.8, 52.2, 49.5, 46.9, 44.2, 41.6, 38.9],
  [85.3, 83.2, 80.8, 78.4, 76.0, 73.7, 71.5, 68.4, 65.3, 62.4, 59.9, 57.2, 55.0, 52.5, 49.9, 47.3, 44.7, 42.7, 39.6, 37.0],
  [81.7, 80.1, 77.9, 75.7, 73.4, 71.2, 69.1, 65.8, 62.5, 59.5, 57.2, 54.5, 52.5, 50.0, 47.5, 44.9, 42.4, 39.9, 37.3, 34.8]
];

export const ENTER_INFO_STATUS_EXPBANK = 'experience';
export const ENTER_INFO_STATUS_STRENSTAND = 'strength';

export const METHODS = {
  STRAIGHT: 1,
  WARM_UP: 2,
  TEST: 3,
  PYRAMID: 4,
  SUPER: 5,
  GIANT: 6,
  PRE_EXHAUST: 7,
  DROP: 8
}

export const MOVEMENTS = ['Barbell', 'Dumbbell', 'Cable/Machine', 'Other'];
export const PROGRESSION_MODELS = [
  'Intensity',
  'Volume',
  'Frequency',
  'Intensity-, Volume-, Frequency',
  'Intensity-, Volume',
  'Volume-, Frequency',
  'Intensity, Frequency',
];


export const PUBLIC_BODYPARTS = [
  'WAIST',
  'BACK',
  'UPPER ARMS',
  'THIGHS',
  'CHEST',
  'HIPS',
  'SHOULDERS',
  'FOREARMS',
  'CALVES'
];

export const WEEK_TYPE_OPTIONS = [
  'Test & training week',
  'Training week',
  'Deload week'
];

export function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function saveCookie(name, value) {
  var nameEQ = name + "=";
  var index = -1;
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) {
      index = i;
      break;
    }
  }

  if (index != -1) {
    ca.splice(index, 1);
  }

  ca.push(`${name}=${value}`);
  // ca.push(`${name}=5`);
  var date = new Date();
  date.setTime(date.getTime() + (24*60*60*1000));
  var expires = "; expires=" + date.toUTCString();

  document.cookie = ca.join(';') + expires +  "; path=/";
  console.log('-------------- document cookie: ', ca.join(';') + expires + "; path=/");

  setTimeout(() => {
    console.log('-------------- document cookie: ', document.cookie);
  }, 2000);
}
