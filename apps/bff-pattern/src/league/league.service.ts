import { api } from '../api/axios';
import { LeagueParams } from './@types/params.type';
import { TeamResponse, TeamsDTO } from './@types/teams.type';

export class LeagueService {
  async search(data: LeagueParams) {
    const teams = await api.get(
      `leagues?country=${data.country}&season=${data.season}`
    );
    return teams.data.response;
  }

  async getTeams(data: TeamsDTO): Promise<TeamResponse[]> {
    const teams = await api.get(
      `teams?league=${data.league}&season=${data.season}`
    );
    return teams.data.response;
  }
}
