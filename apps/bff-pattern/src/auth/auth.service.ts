import { IAuth } from './@types/auth.type';

export class AuthService {
  #key = '4bdea2629dmsh648bf9a51aa0838p12d1ccjsn2ff47de99fff';

  validate(data: IAuth): boolean {
    return data.key === this.#key;
  }
}
