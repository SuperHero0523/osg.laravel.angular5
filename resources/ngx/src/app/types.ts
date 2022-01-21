export type ExpBankRow = {
  weight_min?: number;
  weight_max?: number;
  untrained: string;
  novice: string;
  intermediate: string;
  advanced: string;
  elite: string;
};

export type ExpBankPrograms = {
  untrained: string[];
  novice: string[];
  intermediate: string[];
  advanced: string[];
  elite: string[];
}

export type ProgramCategory = {
  key: string;
  name: string;
};

export type ProgressionModels = {
  [bodypart: string]: string;
};

export type Day = {
  plan?: number;
  date?: string;
  isTestDay?: boolean;
};
export type Week = Array<Day>;
export type Weeks = Array<Week>;
