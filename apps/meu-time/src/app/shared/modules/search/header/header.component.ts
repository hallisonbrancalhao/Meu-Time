import { Component } from '@angular/core';
import { AuthService } from '../../../core/service/authorization/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMobile = false;
  constructor(private authService: AuthService) {}

  onSignOut() {
    return this.authService.unauthorize();
  }

  showMobileMenu() {
    this.showMobile = !this.showMobile;
  }
}
