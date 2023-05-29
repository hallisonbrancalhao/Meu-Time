import { Country } from './@types/countrie.type';
import { CountryService } from './country.service';
import { Request, Response } from 'express';

class CountryController {
  async search(req: Request, res: Response) {
    return res.send(await new CountryService().search(req.body));
  }

  async getAll(req: Request, res: Response) {
    const contries = await new CountryService().getAll();
    return res.send(contries);
  }

  async getSeasons(req: Request, res: Response) {
    const season = await new CountryService().getSeasons();
    return res.send(season);
  }
}

export default new CountryController();
