import { Route } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

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
      import('./search/search.module').then((m) => m.SearchModule),
  },
];
