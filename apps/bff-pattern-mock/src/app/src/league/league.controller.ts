import { TeamsDTO } from './@types/teams.type';
import { LeagueParams } from './@types/params.type';
import { LeagueService } from './league.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class LeagueController {
  constructor(private leagueService: LeagueService) {}

  @Post('leagues')
  getBySeason(@Body() data: LeagueParams) {
    return this.leagueService.search(data);
  }
  @Post('teams')
  getTeams(@Body() data: TeamsDTO) {
    return this.leagueService.getTeams(data);
  }
}
