import { api } from '../api/axios';
import { Player } from './@types/squad.dto.types';

export class TeamService {
  async getSquad(teamId: number): Promise<Player[]> {
    const squad = await api.get(`players/squads?team=${teamId}`);
    return squad.data.response[0].players;
  }
}
