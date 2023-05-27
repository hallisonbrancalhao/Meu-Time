import { AuthService } from './auth.service';
import { Request, Response } from 'express';

class AuthController {
  validate(req: Request, res: Response) {
    return res.send(new AuthService().validate(req.body));
  }
}

export default new AuthController();
