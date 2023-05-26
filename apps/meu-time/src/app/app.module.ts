import { NgModule } from '@angular/core';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './shared/components/auth/auth.component';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
