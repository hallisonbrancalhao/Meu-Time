import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './pages/select/select.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  {
    path: '',
    component: SelectComponent,
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
