import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v3/',

  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json;charset=UTF-8',
    'X-RapidAPI-Key': '4bdea2629dmsh648bf9a51aa0838p12d1ccjsn2ff47de99fff',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
  },
});
