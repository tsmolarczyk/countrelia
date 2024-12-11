import { Region } from "types/constants";

export class CountryService {
  private baseUrl = "https://restcountries.com/v3.1";

  public async getCountriesByRegion(region: Region) {
    const response = await fetch(`${this.baseUrl}/region/${region}`);
    return await response.json();
  }

  public async getInitialCountries() {
    return this.getCountriesByRegion("Europe");
  }
}
