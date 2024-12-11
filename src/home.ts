import { inject } from "aurelia-framework";
import { CountryService } from "./coutry.service";
import { Region } from "./types/constants";

@inject(CountryService)
export class Home {
  public countryData = [];

  constructor(private countryService: CountryService) {}

  public async handleSearch(searchQuery: string) {
    console.log("home: handleSearch:", searchQuery);
    console.log(this.countryData);
    this.countryData = await this.countryService.getCountriesByName(
      searchQuery
    );
  }

  public async handleRegionChange(region: Region) {
    console.log("home: handleRegionChange:", region);
    this.countryData = await this.countryService.getCountriesByRegion(region);
  }
}
