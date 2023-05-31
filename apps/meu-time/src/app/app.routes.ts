import { Route } from '@angular/router';
import { AuthGuard } from './shared/core/guards/can-active.guard';
import { AuthComponent } from './shared/components/auth/auth.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthComponent,
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
