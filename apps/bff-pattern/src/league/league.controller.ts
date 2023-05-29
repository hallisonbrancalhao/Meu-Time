import { LeagueService } from './league.service';
import { Request, Response } from 'express';

class LeagueController {
  async getBySeason(req: Request, res: Response) {
    return res.send(await new LeagueService().search(req.body));
  }
}

export default new LeagueController();
