import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #authUrl = 'http://localhost:3333/auth';

  constructor(private http: HttpClient, private router: Router) {}

  validateCredentials(value: string): Observable<boolean> {
    return this.http.post<boolean>(this.#authUrl, { key: value }).pipe(
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
    return localStorage.setItem('isAuth', 'true');
  }

  unauthorize() {
    localStorage.clear();
  }

  getAuthStatus = (): boolean => !!localStorage.getItem('isAuth');
}
