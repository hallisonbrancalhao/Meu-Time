import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LeagueResponse } from '../../../@types/leagues.type';

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  #leaguesUrl = 'http://localhost:3333/leagues';

  constructor(private http: HttpClient) {}

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
}
