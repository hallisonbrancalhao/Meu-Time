import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #isAuth: boolean;

  constructor() {
    this.#isAuth = this.getAuthStatus();
  }

  authorize() {
    if (!this.#isAuth) localStorage.setItem('isAuth', 'true');
  }

  unauthorize() {
    localStorage.clear();
  }

  getAuthStatus = (): boolean => !!localStorage.getItem('isAuth');
}
