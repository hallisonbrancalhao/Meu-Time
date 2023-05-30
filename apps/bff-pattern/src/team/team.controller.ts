import { TeamService } from './team.service';
import { Request, Response } from 'express';

class TeamController {
  async getSquad(req: Request, res: Response) {
    return res.send(await new TeamService().getSquad(req.body));
  }
}

export default new TeamController();
