import { Region } from "types/constants";

export class CountryService {
  private baseUrl = "https://restcountries.com/v3.1";

  public async getCountriesByRegion(region: Region) {
    const response = await fetch(`${this.baseUrl}/region/${region}`);
    const data = await response.json();
    return data;
  }

  //   public async getAllRegions() {
  //     const response = await fetch(`${this.baseUrl}/all?fields=region`);
  //     const data = await response.json();
  //     return data;
  //   }
}
