export class CountryList {
  public countryData = [
    {
      name: "Poland",
      population: 37950802,
      region: "Europe",
      capital: "Warsaw",
      flag: "https://flagcdn.com/pl.svg",
    },
    {
      name: "Germany",
      population: 83149300,
      region: "Europe",
      capital: "Berlin",
      flag: "https://flagcdn.com/de.svg",
    },
    {
      name: "France",
      population: 67391582,
      region: "Europe",
      capital: "Paris",
      flag: "https://flagcdn.com/fr.svg",
    },
    {
      name: "Italy",
      population: 60461826,
      region: "Europe",
      capital: "Rome",
      flag: "https://flagcdn.com/it.svg",
    },
    {
      name: "Spain",
      population: 46733834,
      region: "Europe",
      capital: "Madrid",
      flag: "https://flagcdn.com/es.svg",
    },
    {
      name: "Portugal",
      population: 10196707,
      region: "Europe",
      capital: "Lisbon",
      flag: "https://flagcdn.com/pt.svg",
    },
  ];
  public countryDataa: any;

  public async attached() {
    this.countryData = await this.getEuropeanCountries();
  }

  public async getEuropeanCountries() {
    const response = await fetch(
      "https://restcountries.com/v3.1/region/europe"
    );
    const data = await response.json();
    return data;
  }
}
