import { CountryService } from './country.service';
import { Request, Response } from 'express';

class CountryController {
  async search(req: Request, res: Response) {
    const country = await new CountryService().search(req.body);
    return res.send(country);
  }

  async getAll(req: Request, res: Response) {
    const conties = await new CountryService().getAll();
    return res.send(conties);
  }
}

export default new CountryController();
