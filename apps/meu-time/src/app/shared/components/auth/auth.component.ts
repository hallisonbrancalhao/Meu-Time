import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/authorization/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginAuthorized = false;
  show = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loginAuthorized = this.authService.getAuthStatus();
  }

  login(value: string) {
    this.authService.validateCredentials(value).subscribe((res) => {
      this.loginAuthorized = res;
    });
  }

  toggleShow() {
    this.show = !this.show;
  }
}
