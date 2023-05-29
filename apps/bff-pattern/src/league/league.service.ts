import { api } from '../api/axios';
import { LeagueParams } from './@types/params.type';

export class LeagueService {
  async search(data: LeagueParams) {
    const options = {
      method: 'GET',
      url: `https://api-football-v1.p.rapidapi.com/v3/leagues?country=${data.country}&season=${data.season}`,
      headers: {
        'X-RapidAPI-Key': '4bdea2629dmsh648bf9a51aa0838p12d1ccjsn2ff47de99fff',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      },
    };

    // const league = await api.request(options);
    // return league.data.response;

    return [
      {
        league: {
          id: 622,
          name: 'Pernambucano - 1',
          type: 'League',
          logo: 'https://media-1.api-sports.io/football/leagues/622.png',
        },
        country: {
          name: 'Brazil',
          code: 'BR',
          flag: 'https://media-3.api-sports.io/flags/br.svg',
        },
        seasons: [
          {
            year: 2022,
            start: '2022-01-22',
            end: '2022-04-30',
            current: false,
            coverage: {
              fixtures: {
                events: true,
                lineups: true,
                statistics_fixtures: false,
                statistics_players: false,
              },
              standings: true,
              players: true,
              top_scorers: true,
              top_assists: true,
              top_cards: true,
              injuries: false,
              predictions: true,
              odds: false,
            },
          },
        ],
      },
      {
        league: {
          id: 618,
          name: 'São Paulo Youth Cup',
          type: 'Cup',
          logo: 'https://media-3.api-sports.io/football/leagues/618.png',
        },
        country: {
          name: 'Brazil',
          code: 'BR',
          flag: 'https://media-2.api-sports.io/flags/br.svg',
        },
        seasons: [
          {
            year: 2022,
            start: '2022-01-02',
            end: '2022-01-25',
            current: false,
            coverage: {
              fixtures: {
                events: true,
                lineups: false,
                statistics_fixtures: false,
                statistics_players: false,
              },
              standings: false,
              players: false,
              top_scorers: false,
              top_assists: false,
              top_cards: false,
              injuries: false,
              predictions: true,
              odds: false,
            },
          },
        ],
      },
      {
        league: {
          id: 632,
          name: 'Supercopa do Brasil',
          type: 'Cup',
          logo: 'https://media-3.api-sports.io/football/leagues/632.png',
        },
        country: {
          name: 'Brazil',
          code: 'BR',
          flag: 'https://media-3.api-sports.io/flags/br.svg',
        },
        seasons: [
          {
            year: 2022,
            start: '2022-02-20',
            end: '2022-02-20',
            current: false,
            coverage: {
              fixtures: {
                events: true,
                lineups: true,
                statistics_fixtures: false,
                statistics_players: false,
              },
              standings: false,
              players: false,
              top_scorers: false,
              top_assists: false,
              top_cards: false,
              injuries: false,
              predictions: true,
              odds: false,
            },
          },
        ],
      },
      {
        league: {
          id: 631,
          name: 'Tocantinense',
          type: 'League',
          logo: 'https://media-2.api-sports.io/football/leagues/631.png',
        },
        country: {
          name: 'Brazil',
          code: 'BR',
          flag: 'https://media-1.api-sports.io/flags/br.svg',
        },
        seasons: [
          {
            year: 2022,
            start: '2022-01-22',
            end: '2022-04-10',
            current: false,
            coverage: {
              fixtures: {
                events: false,
                lineups: false,
                statistics_fixtures: false,
                statistics_players: false,
              },
              standings: true,
              players: true,
              top_scorers: true,
              top_assists: true,
              top_cards: true,
              injuries: false,
              predictions: true,
              odds: false,
            },
          },
        ],
      },
    ];
  }
}
