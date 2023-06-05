import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly REST_PORT = 3333;
  private readonly MOCK_PORT = 3030;
  private authStatus = new BehaviorSubject<boolean>(false);

  #port!: number;
  #baseUrl = 'http://localhost:';

  constructor(private http: HttpClient, private router: Router) {}

  validateCredentials(value: {
    apiType: string;
    password: string;
  }): Observable<boolean> {
    this.setApiPort(value.apiType);

    return this.http
      .post<boolean>(`${this.#baseUrl}${this.#port}/auth`, {
        key: value.password,
      })
      .pipe(
        tap((res) => {
          if (res) {
            this.authorize();
            this.router.navigate(['/buscar']);
          }
          return res;
        })
      );
  }

  authorize(): void {
    this.authStatus.next(true);
    localStorage.setItem('isAuth', 'true');
  }

  unauthorize() {
    this.authStatus.next(false);
  }

  getAuthStatus = (): Observable<boolean> => this.authStatus.asObservable();

  private setApiPort(type: string) {
    this.#port = type === 'rest' ? this.REST_PORT : this.MOCK_PORT;
    localStorage.setItem('port', `${this.#port}`);
  }
}
