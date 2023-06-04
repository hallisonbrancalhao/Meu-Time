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
    path: ':pais',
    component: SeasonsComponent,
  },
  {
    path: ':pais/:temporada/:time/:liga',
    component: TeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
