import { api } from '../api/axios';
import { DtoSearch } from './@types/search.type';

export class CountryService {
  async search(value: DtoSearch) {
    const endpoint = `countries?name=${value.name}`;
    const country = await api.get(endpoint);
    return country.data.response[0];
  }

  async getAll() {
    const endpoint = `countries`;
    const allCountries = await api.get(endpoint);
    return allCountries.data;
  }

  async getSeasons() {
    const endpoint = `leagues/seasons`;
    const seasons = await api.get(endpoint);
    return seasons.data;
  }
}
