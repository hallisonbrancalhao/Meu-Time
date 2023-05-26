import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamComponent } from './pages/team/team.component';
import { SelectComponent } from './pages/select/select.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [SelectComponent, TeamComponent],
  imports: [CommonModule, SearchRoutingModule],
})
export class SearchModule {}
