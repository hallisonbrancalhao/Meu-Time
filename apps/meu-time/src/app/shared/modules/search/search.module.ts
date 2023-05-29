import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamComponent } from './pages/team/team.component';
import { ListComponent } from './list/list.component';
import { FindComponent } from './find/find.component';
import { HeaderComponent } from './header/header.component';
import { SelectComponent } from './pages/select/select.component';
import { SeasonsComponent } from './pages/seasons/seasons.component';
import { SearchRoutingModule } from './search-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SelectComponent,
    TeamComponent,
    HeaderComponent,
    ListComponent,
    FindComponent,
    SeasonsComponent,
  ],
  imports: [CommonModule, SearchRoutingModule, FormsModule],
})
export class SearchModule {}
