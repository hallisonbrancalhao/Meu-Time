import { api } from '../api/axios';
import { GoalsMinuteResponse } from './@types/goals.types';
import { Player, StatisticsDTO } from './@types/squad.dto.types';
import { IChartData, IChartSeries } from './@types/chart.type';

export class TeamService {
  async getSquad(teamId: string): Promise<Player[]> {
    const squad = await api.get(`players/squads?team=${teamId}`);
    return squad.data.response[0];
  }

  async getStatisctics(data: StatisticsDTO) {
    try {
      const statistics = await api.get(
        `teams/statistics?league=${data.leagueId}&season=${data.seasonId}&team=${data.teamId}`
      );
      return statistics.data.response.lineups[0].formation;
    } catch (error) {
      throw new Error('Não foi possivel pegar a formação');
    }
  }

  async getGoalsByMinute(data: StatisticsDTO) {
    try {
      const statistics = await api.get(
        `teams/statistics?league=${data.leagueId}&season=${data.seasonId}&team=${data.teamId}`
      );

      const minutesFor: GoalsMinuteResponse =
        statistics.data.response.goals.for.minute;
      const minutesAgainst: GoalsMinuteResponse =
        statistics.data.response.goals.against.minute;

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
    } catch (error) {
      console.error(error);
    }
  }
}
