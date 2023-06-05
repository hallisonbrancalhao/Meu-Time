import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryService } from './src/country/country.service';
import { LeagueService } from './src/league/league.service';
import { TeamService } from './src/team/team.service';
import { AuthModule } from './src/auth/auth.module';
import { CountryModule } from './src/country/country.module';
import { LeagueModule } from './src/league/league.module';
import { TeamModule } from './src/team/team.module';

@Module({
  imports: [AuthModule, CountryModule, LeagueModule, TeamModule],
  controllers: [AppController],
  providers: [AppService, CountryService, LeagueService, TeamService],
})
export class AppModule {}
