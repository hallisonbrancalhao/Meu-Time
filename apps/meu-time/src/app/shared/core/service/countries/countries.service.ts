import { Router } from '@angular/router';
import { Country } from '../../../@types/countrie.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CountyDTO, SeasosnDTO } from '../../../@types/dto.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  #countryUrl = '/countries';
  #seasonsUrl = '/seasons';
  #baseUrl = 'http://localhost:';
  #port!: number | string | null;

  constructor(private http: HttpClient, private router: Router) {
    this.getApiPort();
  }

  getCountry(country: string): Observable<Country> {
    return this.http
      .post<Country>(`${this.#baseUrl}${this.#port}${this.#countryUrl}`, {
        name: country,
      })
      .pipe(
        tap((res) => {
          res;
        })
      );
  }

  public getAll(): Observable<CountyDTO> {
    return this.http
      .get<CountyDTO>(`${this.#baseUrl}${this.#port}${this.#countryUrl}`)
      .pipe(tap((res) => res.response));
  }

  public getSeasons(): Observable<SeasosnDTO> {
    return this.http
      .get<SeasosnDTO>(`${this.#baseUrl}${this.#port}${this.#seasonsUrl}`)
      .pipe(tap((res) => res));
  }

  private getApiPort() {
    this.#port = localStorage.getItem('port');
  }
}
