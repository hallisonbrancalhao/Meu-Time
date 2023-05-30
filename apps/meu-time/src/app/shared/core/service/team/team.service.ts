import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player, Response } from '../../../@types/squad.dto.types';
import { Observable, map, tap } from 'rxjs';
import { StatisticsDTO } from '../../../@types/statistics.dto';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  #squadUrl = 'http://localhost:3333/teams/squad';

  constructor(private http: HttpClient) {}

  getSquad(teamId: number): Observable<Response[]> {
    return this.http.get<Response[]>(`${this.#squadUrl}/${teamId}`).pipe(
      tap((res) => {
        res;
      })
    );
  }

  getStatistics(data: StatisticsDTO): Observable<string> {
    return this.http
      .post(`${this.#squadUrl}`, data, { responseType: 'text' })
      .pipe(
        tap((res) => {
          return res;
        })
      );
  }
}
