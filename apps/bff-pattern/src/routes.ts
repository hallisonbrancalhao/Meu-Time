import { Router } from 'express';
import authController from './auth/auth.controller';
import countyController from './country/county.controller';
import leagueController from './league/league.controller';
import teamController from './team/team.controller';
const routes = Router();

routes.get('/hello', (req, res) => {
  res.send({ message: 'Welcome to bff-pattern!' });
});

routes.post('/auth', authController.validate);
routes.post('/countries', countyController.search);
routes.get('/countries', countyController.getAll);
routes.get('/seasons', countyController.getSeasons);
routes.post('/leagues', leagueController.getBySeason);
routes.post('/teams', leagueController.getTeams);
routes.post('/teams/squad', teamController.getStatisctics);
routes.post('/teams/squad/goals', teamController.getGoalsByMinute);
routes.get('/teams/squad/:teamId', teamController.getSquad);

export default routes;
