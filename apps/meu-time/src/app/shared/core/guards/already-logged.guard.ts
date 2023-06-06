import { Injectable } from '@angular/core';
import { AuthService } from '../service/authorization/auth.service';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AlreadyLoggedGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate: CanActivateFn = () =>
    this.authService.getAuthStatus()
      ? (this.router.navigate(['/buscar']), false)
      : true;
}
