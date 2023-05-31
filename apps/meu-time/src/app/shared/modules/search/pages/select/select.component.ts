import { Component } from '@angular/core';
import { CountriesService } from '../../../../core/service/countries/countries.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  constructor(private coutriesService: CountriesService) {}

  async getCountries(value: string) {
    this.coutriesService.getCountry(value).subscribe((res) => console.log(res));
  }
}
