import { TeamService } from './team.service';
import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('teams/squad')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Post()
  getStatistics() {
    return this.teamService.getStatisctics();
  }

  @Post('goals')
  getGoalsByMinute() {
    return this.teamService.getGoalsByMinute();
  }

  @Get(':teamId')
  getSquad(@Param('teamId') teamId: string) {
    return this.teamService.getSquad(teamId);
  }
}
