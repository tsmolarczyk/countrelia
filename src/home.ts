import { CountryService } from "./coutry.service";
import { inject } from "aurelia-framework";
import { Region } from "./types/constants";
import { CountryList } from "country-list";

@inject(CountryService)
export class Home {
  public countryList: CountryList;

  constructor(private countryService: CountryService) {}

  public async handleRegionChange(region: Region) {
    console.log("Region:", region);
    this.countryList.loadCountriesByRegion(region);
  }
}
