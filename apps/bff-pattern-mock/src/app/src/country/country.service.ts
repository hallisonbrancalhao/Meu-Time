import { Injectable } from '@nestjs/common';
import { DtoSearch } from './@types/search.type';
import { countries } from './data/country.data';
import { Country } from './@types/countrie.type';
import { seasons } from './data/season.data';

@Injectable()
export class CountryService {
  search(value: DtoSearch) {
    const country: Country[] = this.getAll().response.filter(
      (country) => country.name === value.name
    );
    return country;
  }

  getAll() {
    const res = { response: countries };
    return res;
  }

  getSeasons() {
    return seasons;
  }
}
