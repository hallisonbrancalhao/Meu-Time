import { Injectable } from '@nestjs/common';
import { IChartData, IChartSeries } from './@types/chart.type';

@Injectable()
export class TeamService {
  getSquad(teamId: string) {
    return [
      {
        id: 882,
        name: 'David de Gea',
        age: 31,
        number: 1,
        position: 'Goalkeeper',
        photo: 'https://media.api-sports.io/football/players/882.png',
      },
      {
        id: 883,
        name: 'L. Grant',
        age: 38,
        number: 13,
        position: 'Goalkeeper',
        photo: 'https://media.api-sports.io/football/players/883.png',
      },
      {
        id: 2931,
        name: 'T. Heaton',
        age: 35,
        number: null,
        position: 'Goalkeeper',
        photo: 'https://media.api-sports.io/football/players/2931.png',
      },
      {
        id: 19088,
        name: 'D. Henderson',
        age: 24,
        number: 26,
        position: 'Goalkeeper',
        photo: 'https://media.api-sports.io/football/players/19088.png',
      },
      {
        id: 885,
        name: 'E. Bailly',
        age: 27,
        number: 3,
        position: 'Defender',
        photo: 'https://media.api-sports.io/football/players/885.png',
      },
      {
        id: 886,
        name: 'Diogo Dalot',
        age: 22,
        number: 20,
        position: 'Defender',
        photo: 'https://media.api-sports.io/football/players/886.png',
      },
      {
        id: 153434,
        name: 'W. Fish',
        age: 18,
        number: 48,
        position: 'Defender',
        photo: 'https://media.api-sports.io/football/players/153434.png',
      },
      {
        id: 888,
        name: 'P. Jones',
        age: 29,
        number: 4,
        position: 'Defender',
        photo: 'https://media.api-sports.io/football/players/888.png',
      },
      {
        id: 138775,
        name: 'E. Laird',
        age: 20,
        number: null,
        position: 'Defender',
        photo: 'https://media.api-sports.io/football/players/138775.png',
      },
      {
        id: 2935,
        name: 'H. Maguire',
        age: 28,
        number: 5,
        position: 'Defender',
        photo: 'https://media.api-sports.io/football/players/2935.png',
      },
      {
        id: 889,
        name: 'V. Lindelöf',
        age: 27,
        number: 2,
        position: 'Defender',
        photo: 'https://media.api-sports.io/football/players/889.png',
      },
      {
        id: 891,
        name: 'L. Shaw',
        age: 26,
        number: 23,
        position: 'Defender',
        photo: 'https://media.api-sports.io/football/players/891.png',
      },
      {
        id: 378,
        name: 'Alex Telles',
        age: 29,
        number: 27,
        position: 'Defender',
        photo: 'https://media.api-sports.io/football/players/378.png',
      },
      {
        id: 19182,
        name: 'A. Tuanzebe',
        age: 24,
        number: 38,
        position: 'Defender',
        photo: 'https://media.api-sports.io/football/players/19182.png',
      },
      {
        id: 18846,
        name: 'A. Wan-Bissaka',
        age: 24,
        number: 29,
        position: 'Defender',
        photo: 'https://media.api-sports.io/football/players/18846.png',
      },
      {
        id: 138806,
        name: 'B. Williams',
        age: 21,
        number: 33,
        position: 'Defender',
        photo: 'https://media.api-sports.io/football/players/138806.png',
      },
      {
        id: 1485,
        name: 'Bruno Fernandes',
        age: 27,
        number: 18,
        position: 'Midfielder',
        photo: 'https://media.api-sports.io/football/players/1485.png',
      },
      {
        id: 895,
        name: 'J. Garner',
        age: 20,
        number: null,
        position: 'Midfielder',
        photo: 'https://media.api-sports.io/football/players/895.png',
      },
      {
        id: 899,
        name: 'Andreas Pereira',
        age: 25,
        number: 15,
        position: 'Midfielder',
        photo: 'https://media.api-sports.io/football/players/899.png',
      },
      {
        id: 900,
        name: 'J. Lingard',
        age: 29,
        number: 14,
        position: 'Midfielder',
        photo: 'https://media.api-sports.io/football/players/900.png',
      },
      {
        id: 901,
        name: 'Mata',
        age: 33,
        number: 8,
        position: 'Midfielder',
        photo: 'https://media.api-sports.io/football/players/901.png',
      },
      {
        id: 902,
        name: 'N. Matić',
        age: 33,
        number: 31,
        position: 'Midfielder',
        photo: 'https://media.api-sports.io/football/players/902.png',
      },
      {
        id: 903,
        name: 'S. McTominay',
        age: 25,
        number: 39,
        position: 'Midfielder',
        photo: 'https://media.api-sports.io/football/players/903.png',
      },
      {
        id: 180560,
        name: 'H. Mejbri',
        age: 18,
        number: 46,
        position: 'Midfielder',
        photo: 'https://media.api-sports.io/football/players/180560.png',
      },
      {
        id: 904,
        name: 'P. Pogba',
        age: 28,
        number: 6,
        position: 'Midfielder',
        photo: 'https://media.api-sports.io/football/players/904.png',
      },
      {
        id: 905,
        name: 'Fred',
        age: 28,
        number: 17,
        position: 'Midfielder',
        photo: 'https://media.api-sports.io/football/players/905.png',
      },
      {
        id: 163054,
        name: 'S. Shoretire',
        age: 17,
        number: 74,
        position: 'Midfielder',
        photo: 'https://media.api-sports.io/football/players/163054.png',
      },
      {
        id: 547,
        name: 'D. van de Beek',
        age: 24,
        number: 34,
        position: 'Midfielder',
        photo: 'https://media.api-sports.io/football/players/547.png',
      },
      {
        id: 138814,
        name: 'E. Galbraith',
        age: 20,
        number: null,
        position: 'Midfielder',
        photo: 'https://media.api-sports.io/football/players/138814.png',
      },
      {
        id: 274,
        name: 'E. Cavani',
        age: 34,
        number: 7,
        position: 'Attacker',
        photo: 'https://media.api-sports.io/football/players/274.png',
      },
      {
        id: 153430,
        name: 'A. Elanga',
        age: 19,
        number: 56,
        position: 'Attacker',
        photo: 'https://media.api-sports.io/football/players/153430.png',
      },
      {
        id: 897,
        name: 'M. Greenwood',
        age: 20,
        number: 11,
        position: 'Attacker',
        photo: 'https://media.api-sports.io/football/players/897.png',
      },
      {
        id: 19329,
        name: 'D. James',
        age: 24,
        number: 21,
        position: 'Attacker',
        photo: 'https://media.api-sports.io/football/players/19329.png',
      },
      {
        id: 908,
        name: 'A. Martial',
        age: 26,
        number: 9,
        position: 'Attacker',
        photo: 'https://media.api-sports.io/football/players/908.png',
      },
      {
        id: 909,
        name: 'M. Rashford',
        age: 24,
        number: 10,
        position: 'Attacker',
        photo: 'https://media.api-sports.io/football/players/909.png',
      },
      {
        id: 157997,
        name: 'A. Diallo',
        age: 19,
        number: 19,
        position: 'Attacker',
        photo: 'https://media.api-sports.io/football/players/157997.png',
      },
    ];
  }

  getStatisctics() {
    return '4-2-3-1';
  }

  getGoalsByMinute() {
    const statistics = {
      errors: [],
      get: 'teams/statistics',
      paging: {
        current: 1,
        total: 1,
      },
      parameters: {
        league: '39',
        season: '2020',
        team: '33',
      },
      response: {
        biggest: {
          goals: {
            against: {
              away: 2,
              home: 6,
            },
            for: {
              away: 4,
              home: 9,
            },
          },
          loses: {
            away: null,
            home: '1-6',
          },
          streak: {
            draws: 2,
            loses: 1,
            wins: 4,
          },
          wins: {
            away: '1-4',
            home: '9-0',
          },
        },
        cards: {
          red: {
            '0-15': {
              percentage: null,
              total: null,
            },
            '106-120': {
              percentage: null,
              total: null,
            },
            '16-30': {
              percentage: '100.00%',
              total: 1,
            },
            '31-45': {
              percentage: null,
              total: null,
            },
            '46-60': {
              percentage: null,
              total: null,
            },
            '61-75': {
              percentage: null,
              total: null,
            },
            '76-90': {
              percentage: null,
              total: null,
            },
            '91-105': {
              percentage: null,
              total: null,
            },
          },
          yellow: {
            '0-15': {
              percentage: '2.00%',
              total: 1,
            },
            '106-120': {
              percentage: null,
              total: null,
            },
            '16-30': {
              percentage: '4.00%',
              total: 2,
            },
            '31-45': {
              percentage: '20.00%',
              total: 10,
            },
            '46-60': {
              percentage: '28.00%',
              total: 14,
            },
            '61-75': {
              percentage: '12.00%',
              total: 6,
            },
            '76-90': {
              percentage: '32.00%',
              total: 16,
            },
            '91-105': {
              percentage: '2.00%',
              total: 1,
            },
          },
        },
        clean_sheet: {
          away: 6,
          home: 6,
          total: 12,
        },
        failed_to_score: {
          away: 4,
          home: 3,
          total: 7,
        },
        fixtures: {
          draws: {
            away: 6,
            home: 3,
            total: 9,
          },
          loses: {
            away: 0,
            home: 4,
            total: 4,
          },
          played: {
            away: 15,
            home: 15,
            total: 30,
          },
          wins: {
            away: 9,
            home: 8,
            total: 17,
          },
        },
        form: 'LWLWDLWWWWDWWDWWWDWLDWDDWDDWWW',
        goals: {
          against: {
            average: {
              away: '0.9',
              home: '1.3',
              total: '1.1',
            },
            minute: {
              '0-15': {
                percentage: '20.59%',
                total: 7,
              },
              '106-120': {
                percentage: null,
                total: null,
              },
              '16-30': {
                percentage: '11.76%',
                total: 4,
              },
              '31-45': {
                percentage: '26.47%',
                total: 9,
              },
              '46-60': {
                percentage: '14.71%',
                total: 5,
              },
              '61-75': {
                percentage: '11.76%',
                total: 4,
              },
              '76-90': {
                percentage: '8.82%',
                total: 3,
              },
              '91-105': {
                percentage: '5.88%',
                total: 2,
              },
            },
            total: {
              away: 13,
              home: 20,
              total: 33,
            },
          },
          for: {
            average: {
              away: '1.8',
              home: '2.1',
              total: '1.9',
            },
            minute: {
              '0-15': {
                percentage: '8.77%',
                total: 5,
              },
              '106-120': {
                percentage: null,
                total: null,
              },
              '16-30': {
                percentage: '17.54%',
                total: 10,
              },
              '31-45': {
                percentage: '12.28%',
                total: 7,
              },
              '46-60': {
                percentage: '10.53%',
                total: 6,
              },
              '61-75': {
                percentage: '24.56%',
                total: 14,
              },
              '76-90': {
                percentage: '15.79%',
                total: 9,
              },
              '91-105': {
                percentage: '10.53%',
                total: 6,
              },
            },
            total: {
              away: 27,
              home: 31,
              total: 58,
            },
          },
        },
        league: {
          country: 'England',
          flag: 'https://media.api-sports.io/flags/gb.svg',
          id: 39,
          logo: 'https://media.api-sports.io/football/leagues/39.png',
          name: 'Premier League',
          season: 2020,
        },
        lineups: [
          {
            formation: '4-2-3-1',
            played: 28,
          },
          {
            formation: '4-3-1-2',
            played: 2,
          },
        ],
        penalty: {
          missed: {
            percentage: '0%',
            total: 0,
          },
          scored: {
            percentage: '100.00%',
            total: 8,
          },
          total: 8,
        },
        team: {
          id: 33,
          logo: 'https://media.api-sports.io/football/teams/33.png',
          name: 'Manchester United',
        },
      },
      results: 11,
    };

    const minutesFor = statistics.response.goals.for.minute;
    const minutesAgainst = statistics.response.goals.against.minute;

    const goals: IChartData[] = [];

    const seriesFor: IChartSeries[] = Object.entries(minutesFor)
      .map(([name, { total }]) => ({ name, value: total }))
      .filter((item) => item.value != null);
    const seriesAgainst: IChartSeries[] = Object.entries(minutesAgainst)
      .map(([name, { total }]) => ({ name, value: total }))
      .filter((item) => item.value != null);

    goals.push(
      { name: 'Marcados', series: seriesFor },
      { name: 'Sofridos', series: seriesAgainst }
    );

    return goals;
  }
}
