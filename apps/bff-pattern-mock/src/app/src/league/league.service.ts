import { Injectable } from '@nestjs/common';
import { LeagueParams } from './@types/params.type';
import { TeamsDTO } from './@types/teams.type';
import { teams } from './data/teams.data';

import { dataLeague } from './data/leagues';

@Injectable()
export class LeagueService {
  search(data: LeagueParams) {
    const teams = dataLeague.filter(
      (dataSeasons) =>
        data.country === dataSeasons.country.name &&
        dataSeasons.seasons.filter((res) => res.year === data.season)
    );
    return teams;
  }

  getTeams(data: TeamsDTO) {
    return teams;
  }
}
