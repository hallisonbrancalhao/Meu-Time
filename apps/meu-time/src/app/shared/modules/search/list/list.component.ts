import { Country } from '../../../@types/countrie.type';
import { BehaviorSubject } from 'rxjs';
import { CountriesService } from '../../../core/service/countries/countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  #filteredCountries = new BehaviorSubject<Country[]>([]);
  filteredCountries$ = this.#filteredCountries.asObservable();

  #allCountries: Country[] = [];
  public apiError = false;

  constructor(private countryApiService: CountriesService) {}

  ngOnInit(): void {
    this.countryApiService.getAll().subscribe((coutries) => {
      this.#filteredCountries.next(coutries.response);
      this.#allCountries = coutries.response;
    });
  }

  public getSearch(value: string) {
    const filter = this.#allCountries.filter((res: Country) => {
      return res.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
    this.#filteredCountries.next(filter);
  }
}
