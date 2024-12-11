import { Region } from "types/constants";

export class CountryService {
  private baseUrl = "https://restcountries.com/v3.1";

  public async getCountriesByRegion(region: Region) {
    try {
      const response = await fetch(`${this.baseUrl}/region/${region}`);
      if (!response.ok) return [];
      return await response.json();
    } catch {
      return [];
    }
  }

  public async getCountriesByName(name: string) {
    try {
      const response = await fetch(`${this.baseUrl}/name/${name}`);
      if (!response.ok) return [];
      return await response.json();
    } catch {
      return [];
    }
  }

  public async getInitialCountries() {
    return this.getCountriesByRegion("Europe");
  }
}
