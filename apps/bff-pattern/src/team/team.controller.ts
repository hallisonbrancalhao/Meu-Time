import { TeamService } from './team.service';
import { Request, Response } from 'express';

class TeamController {
  async getSquad(req: Request, res: Response) {
    return res.send(await new TeamService().getSquad(req.params.teamId));
  }

  async getStatisctics(req: Request, res: Response) {
    return res.send(await new TeamService().getStatisctics(req.body));
  }

  async getGoalsByMinute(req: Request, res: Response) {
    return res.send(await new TeamService().getGoalsByMinute(req.body));
  }
}

export default new TeamController();
