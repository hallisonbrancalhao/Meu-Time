import { Router } from 'express';
const routes = Router();

routes.get('/hello', (req, res) => {
  res.send({ message: 'Welcome to bff-pattern!' });
});

export default routes;
