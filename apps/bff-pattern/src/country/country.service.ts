import { api } from '../api/axios';
import { DtoSearch } from './@types/search.type';

export class CountryService {
  async search(value: DtoSearch) {
    const options = {
      method: 'GET',
      url: `https://api-football-v1.p.rapidapi.com/v3/countries?name=${value.name}`,
      headers: {
        'X-RapidAPI-Key': '4bdea2629dmsh648bf9a51aa0838p12d1ccjsn2ff47de99fff',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      },
    };

    await api
      .request(options)
      .then((response) => {
        return response.data.response[0];
      })
      .catch((err) => console.log(err));
  }
}
