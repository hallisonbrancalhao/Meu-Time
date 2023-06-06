import { Route } from '@angular/router';
import { AuthGuard } from './shared/core/guards/can-active.guard';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AlreadyLoggedGuard } from './shared/core/guards/already-logged.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [AlreadyLoggedGuard],
  },
  {
    path: 'buscar',
    loadChildren: () =>
      import('./shared/modules/search/search.module').then(
        (m) => m.SearchModule
      ),
    canActivate: [AuthGuard],
  },
];
