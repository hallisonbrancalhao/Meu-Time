import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../../../@types/squad.dto.types';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  #squadUrl = 'http://localhost:3333/teams/squad';

  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  getSquad(teamId: number) {
    return this.http
      .post<Player[]>(this.#squadUrl, {
        teamId,
      })
      .pipe(
        tap((res) => {
          res;
        })
      );
  }
}
