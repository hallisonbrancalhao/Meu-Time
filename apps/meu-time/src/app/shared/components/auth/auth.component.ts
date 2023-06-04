import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/authorization/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginAuthorized = false;
  show = false;
  isSetApi = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  public authForm: FormGroup = this.formBuilder.group({
    password: [null, Validators.required],
    apiType: [null, [Validators.required]],
  });

  ngOnInit(): void {
    this.authService
      .getAuthStatus()
      .subscribe((status) => (this.loginAuthorized = status));
  }

  public submitForm() {
    this.login();
  }

  login() {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }
    this.authService
      .validateCredentials(this.authForm.value)
      .subscribe((res) => {
        if (res !== true) {
          this.authForm.setErrors({ invalid: true });
          return;
        }
        this.loginAuthorized = res;
      });
  }

  toggleShow() {
    this.show = !this.show;
  }
}
