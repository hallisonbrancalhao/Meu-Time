import { Country } from '../../../../@types/countrie.type';
import { ActivatedRoute } from '@angular/router';
import { LeaguesService } from '../../../../core/service/leagues/leagues.service';
import { League, LeagueResponse } from '../../../../@types/leagues.type';
import { CountriesService } from '../../../../core/service/countries/countries.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
})
export class SeasonsComponent implements OnInit {
  seasons = new BehaviorSubject<number[]>([]);
  seasonSelected!: number;
  country = new BehaviorSubject<Country>({ code: '', name: '', flag: '' });
  leagues = new BehaviorSubject<LeagueResponse[]>([]);

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
}
