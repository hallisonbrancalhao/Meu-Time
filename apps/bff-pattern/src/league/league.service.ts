import { api } from '../api/axios';
import { LeagueParams } from './@types/params.type';
import { TeamResponse, TeamsDTO } from './@types/teams.type';

export class LeagueService {
  async search(data: LeagueParams) {
    // const teams = await api.get(
    //   `leagues?country=${data.country}&season=${data.season}`
    // );
    // return teams.data.response;

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

  async getTeams(data: TeamsDTO): Promise<TeamResponse[]> {
    // const teams = await api.get(
    //   `teams?league=${data.league}&season=${data.season}`
    // );
    // return teams.data.response;

    return [
      {
        team: {
          id: 33,
          name: 'Manchester United',
          code: 'MUN',
          country: 'England',
          founded: 1878,
          national: false,
          logo: 'https://media-1.api-sports.io/football/teams/33.png',
        },
        venue: {
          id: 556,
          name: 'Old Trafford',
          address: 'Sir Matt Busby Way',
          city: 'Manchester',
          capacity: 76212,
          surface: 'grass',
          image: 'https://media-3.api-sports.io/football/venues/556.png',
        },
      },
      {
        team: {
          id: 34,
          name: 'Newcastle',
          code: 'NEW',
          country: 'England',
          founded: 1892,
          national: false,
          logo: 'https://media-1.api-sports.io/football/teams/34.png',
        },
        venue: {
          id: 562,
          name: "St. James' Park",
          address: 'St. James&apos; Street',
          city: 'Newcastle upon Tyne',
          capacity: 52389,
          surface: 'grass',
          image: 'https://media-2.api-sports.io/football/venues/562.png',
        },
      },
      {
        team: {
          id: 36,
          name: 'Fulham',
          code: 'FUL',
          country: 'England',
          founded: 1879,
          national: false,
          logo: 'https://media-3.api-sports.io/football/teams/36.png',
        },
        venue: {
          id: 535,
          name: 'Craven Cottage',
          address: 'Stevenage Road',
          city: 'London',
          capacity: 25700,
          surface: 'grass',
          image: 'https://media-3.api-sports.io/football/venues/535.png',
        },
      },
    ];
  }
}
