import { Router } from 'express';
import authController from './auth/auth.controller';
import countyController from './country/county.controller';
const routes = Router();

routes.get('/hello', (req, res) => {
  res.send({ message: 'Welcome to bff-pattern!' });
});

routes.post('/auth', authController.validate);
routes.post('/countries', countyController.search);
routes.get('/countries', countyController.getAll);

export default routes;
