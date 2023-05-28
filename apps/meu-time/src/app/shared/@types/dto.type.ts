import { Country } from './countrie.type';

export interface CountyDTO {
  errors: Array<any>;
  get: string;
  paging: object;
  parameters: Array<any>;
  response: Array<Country>;
  results: number;
}
