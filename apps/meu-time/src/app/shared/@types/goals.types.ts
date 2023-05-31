export interface Goals {
  for: { [key: string]: GoalsMinute };
  against: { [key: string]: GoalsMinute };
}

export interface GoalsMinute {
  minute: {
    '0-15': {
      total: number | null;
      percentage: null | string;
    };
    '16-30': {
      total: number | null;
      percentage: null | string;
    };
    '31-45': {
      total: number | null;
      percentage: null | string;
    };
    '46-60': {
      total: number | null;
      percentage: null | string;
    };
    '61-75': {
      total: number | null;
      percentage: null | string;
    };
    '76-90': {
      total: number | null;
      percentage: null | string;
    };
    '91-105': {
      total: number | null;
      percentage: null | string;
    };
    '106-120': {
      total: number | null;
      percentage: null | string;
    };
  };
}
