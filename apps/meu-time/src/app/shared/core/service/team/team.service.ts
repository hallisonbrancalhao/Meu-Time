import { Response } from '../../../@types/squad.dto.types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatisticsDTO } from '../../../@types/statistics.dto';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  #squadUrl = '/teams/squad';

  #baseUrl = 'http://localhost:';
  #port!: number | string | null;

  constructor(private http: HttpClient) {
    this.getApiPort();
  }

  getSquad(teamId: number): Observable<Response> {
    return this.http
      .get<Response>(`${this.#baseUrl}${this.#port}${this.#squadUrl}/${teamId}`)
      .pipe(
        tap((res) => {
          res;
        })
      );
  }

  getStatistics(data: StatisticsDTO): Observable<string> {
    return this.http
      .post(`${this.#baseUrl}${this.#port}${this.#squadUrl}`, data, {
        responseType: 'text',
      })
      .pipe(
        tap((res) => {
          return res;
        })
      );
  }

  getGoalsByMinutes(data: StatisticsDTO): Observable<object> {
    return this.http
      .post(`${this.#baseUrl}${this.#port}${this.#squadUrl}/goals`, data)
      .pipe((res) => res);
  }

  private getApiPort() {
    this.#port = localStorage.getItem('port');
  }
}
