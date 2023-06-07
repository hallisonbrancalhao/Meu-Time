import { NgModule } from '@angular/core';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './shared/components/auth/auth.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    FormsModule,
    BrowserModule,
    NgxChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
