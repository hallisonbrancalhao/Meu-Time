import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../../../core/service/countries/countries.service';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../../../../@types/countrie.type';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
})
export class SeasonsComponent implements OnInit {
  seasons = new BehaviorSubject<number[]>([]);
  country = new BehaviorSubject<Country>({ code: '', name: '', flag: '' });
  constructor(
    private activeRoute: ActivatedRoute,
    private coutriesService: CountriesService
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
    console.log(season);
  }
}
