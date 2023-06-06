import { Injectable } from '@nestjs/common';
import { AuthService } from '../service/authorization/auth.service';
import { CanActivateFn, Router } from '@angular/router';

@Injectable()
export class AlreadyLoggedGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate: CanActivateFn = () =>
    this.authService.getAuthStatus()
      ? (this.router.navigate(['/buscar']), true)
      : false;
}
