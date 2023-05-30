import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player, Response } from '../../../@types/squad.dto.types';
import { Observable, tap } from 'rxjs';
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
      .post<string>(`${this.#squadUrl}`, {
        leagueId: data.leagueId,
        seasonId: data.seasonId,
        teamId: data.teamId,
      })
      .pipe(tap((res) => res));
  }
}
