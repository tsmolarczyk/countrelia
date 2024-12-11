import { CountryService } from "./coutry.service";
import { inject } from "aurelia-framework";
import { Region } from "./types/constants";
import { CountryList } from "country-list";

@inject(CountryService)
export class Home {
  public countryData = [];
  
  constructor(private countryService: CountryService) {}

  public async handleRegionChange(region: Region) {
    console.log("home: handleRegionChange:", region);
    this.countryData = await this.countryService.getCountriesByRegion(region);
  }
}
