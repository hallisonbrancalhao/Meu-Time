import { Country } from './@types/countrie.type';
import { CountryService } from './country.service';
import { DtoSearch, GetSeason } from './@types/search.type';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class CountryController {
  constructor(private countryService: CountryService) {}
  @Post('countries')
  search(@Body() value: DtoSearch): Country | void {
    return this.countryService.search(value);
  }

  @Get('countries')
  getAll(): { response: Country[] } {
    return this.countryService.getAll();
  }

  @Get('seasons')
  getSeasons(): GetSeason {
    return this.countryService.getSeasons();
  }
}
