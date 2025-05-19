import { bindable, inject } from 'aurelia-framework';
import { CountryService } from 'coutry-service';

@inject(CountryService)
export class CountryList {
    @bindable public countryData = [];

    constructor(private countryService: CountryService) {}

    public async attached() {
        this.countryData = await this.countryService.getInitialCountries();
    }
}
