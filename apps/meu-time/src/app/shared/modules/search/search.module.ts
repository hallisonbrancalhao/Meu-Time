import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamComponent } from './pages/team/team.component';
import { ListComponent } from './list/list.component';
import { FindComponent } from './find/find.component';
import { HeaderComponent } from './header/header.component';
import { SelectComponent } from './pages/select/select.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [
    SelectComponent,
    TeamComponent,
    HeaderComponent,
    ListComponent,
    FindComponent,
  ],
  imports: [CommonModule, SearchRoutingModule],
})
export class SearchModule {}
