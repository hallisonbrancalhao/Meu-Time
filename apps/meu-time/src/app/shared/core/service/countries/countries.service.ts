import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../../@types/countrie.type';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  #countryUrl = 'http://localhost:3333/countries';

  constructor(private http: HttpClient, private router: Router) {}

  getCountry(country: string): Observable<Country> {
    return this.http.post<Country>(this.#countryUrl, { name: country }).pipe(
      tap((res) => {
        res;
      })
    );
  }
}
