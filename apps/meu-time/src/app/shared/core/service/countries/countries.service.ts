import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../../@types/countrie.type';
import { Observable, tap } from 'rxjs';
import { CountyDTO, SeasosnDTO } from '../../../@types/dto.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  #countryUrl = 'http://localhost:3333/countries';
  #seasonsUrl = 'http://localhost:3333/seasons';
  constructor(private http: HttpClient, private router: Router) {}

  getCountry(country: string): Observable<Country> {
    return this.http.post<Country>(this.#countryUrl, { name: country }).pipe(
      tap((res) => {
        res;
      })
    );
  }

  public getAll(): Observable<CountyDTO> {
    return this.http
      .get<CountyDTO>(this.#countryUrl)
      .pipe(tap((res) => res.response));
  }

  public getSeasons(): Observable<SeasosnDTO> {
    return this.http.get<SeasosnDTO>(this.#seasonsUrl).pipe(tap((res) => res));
  }
}
