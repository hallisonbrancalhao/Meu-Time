import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SelectComponent } from './select/select.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [SelectComponent, TeamComponent],
  imports: [CommonModule, SearchRoutingModule],
})
export class SearchModule {}
