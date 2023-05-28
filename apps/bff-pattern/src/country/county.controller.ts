import { CountryService } from './country.service';
import { Request, Response } from 'express';

class CountryController {
  async search(req: Request, res: Response) {
    const country = await new CountryService().search(req.body);
    return res.json(country);
  }
}

export default new CountryController();
