export interface DtoSearch {
  name: string;
}

export interface GetSeason {
  errors: any[];
  get: string;
  paging: {
    current: number;
    total: number;
  };
  parameters: any[];
  response: number[];
  results: number;
}
