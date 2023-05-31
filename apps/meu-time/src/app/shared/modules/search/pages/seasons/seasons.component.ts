import { Country } from '../../../../@types/countrie.type';
import { ActivatedRoute } from '@angular/router';
import { LeaguesService } from '../../../../core/service/leagues/leagues.service';
import { BehaviorSubject } from 'rxjs';
import { CountriesService } from '../../../../core/service/countries/countries.service';
import { Component, OnInit } from '@angular/core';
import { Team, TeamResponse } from '../../../../@types/teams.type';
import { League, LeagueResponse } from '../../../../@types/leagues.type';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
})
export class SeasonsComponent implements OnInit {
  seasons = new BehaviorSubject<number[]>([]);
  country = new BehaviorSubject<Country>({ code: '', name: '', flag: '' });
  leagues = new BehaviorSubject<LeagueResponse[]>([]);
  seasonSelected!: number;
  isSetLeague = false;
  league!: League;
  teams!: TeamResponse[];

  constructor(
    private activeRoute: ActivatedRoute,
    private coutriesService: CountriesService,
    private leagueService: LeaguesService
  ) {}

  ngOnInit(): void {
    this.getSeason();
  }

  public getSeason() {
    this.coutriesService
      .getCountry(this.activeRoute.snapshot.params['pais'])
      .subscribe((country) => {
        this.country.next(country);
      });
    this.coutriesService.getSeasons().subscribe((season) => {
      this.seasons.next(season.response);
    });
  }

  public setSeason(season: number) {
    this.leagueService
      .getLeagues(this.activeRoute.snapshot.params['pais'], season)
      .subscribe((res) => {
        this.leagues.next(res);
      });
  }

  public selectLeague(value: League): void {
    this.isSetLeague = true;
    this.league = value;
    this.leagueService
      .getTeams(this.league.id, this.seasonSelected)
      .subscribe((res) => {
        this.teams = res;
      });
  }

  public setTeam(team: Team) {
    this.leagueService.setTeam(
      this.country.value,
      this.seasonSelected,
      team,
      this.league
    );
  }
}
