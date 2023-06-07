import { IAuth } from './@types/auth.type';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('auth')
  validate(@Body() data: IAuth): boolean {
    return this.authService.validate(data);
  }
}
