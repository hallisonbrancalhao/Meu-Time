import { NgModule } from '@angular/core';
import { TeamComponent } from './pages/team/team.component';
import { SelectComponent } from './pages/select/select.component';
import { SeasonsComponent } from './pages/seasons/seasons.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SelectComponent,
  },
  {
    path: 'temporada/:pais',
    component: SeasonsComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
    children: [{ path: ':id', component: TeamComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
