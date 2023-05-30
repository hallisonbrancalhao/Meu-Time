import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team, TeamResponse } from '../../../@types/teams.type';
import { League, LeagueResponse, Season } from '../../../@types/leagues.type';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../../@types/countrie.type';

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  #leaguesUrl = 'http://localhost:3333/leagues';
  #teamsUrl = 'http://localhost:3333/teams';

  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  getLeagues(country: string, season: number) {
    return this.http
      .post<LeagueResponse[]>(this.#leaguesUrl, {
        country: country,
        season: season,
      })
      .pipe(
        tap((res) => {
          res;
        })
      );
  }

  getTeams(league: number, season: number) {
    return this.http
      .post<TeamResponse[]>(this.#teamsUrl, {
        league,
        season,
      })
      .pipe(
        tap((res) => {
          res;
        })
      );
  }

  setTeam(country: Country, season: number, team: Team, league: League) {
    this.router.navigate([
      `buscar/${country.code}/${season}/${team.id}/${league.id}`,
    ]);
  }
}
