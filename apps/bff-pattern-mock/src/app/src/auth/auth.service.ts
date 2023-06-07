import { Injectable } from '@nestjs/common';
import { IAuth } from './@types/auth.type';

@Injectable()
export class AuthService {
  #key = '123';

  validate(data: IAuth): boolean {
    return data.key === this.#key;
  }
}
