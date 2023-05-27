import { Router } from 'express';
import authController from './auth/auth.controller';
const routes = Router();

routes.get('/hello', (req, res) => {
  res.send({ message: 'Welcome to bff-pattern!' });
});

routes.post('/auth', authController.validate);

export default routes;
