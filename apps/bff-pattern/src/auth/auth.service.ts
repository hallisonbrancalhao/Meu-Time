import { IAuth } from './@types/auth.type';

export class AuthService {
  #key = '123';

  validate(data: IAuth): boolean {
    return data.key === this.#key;
  }
}
