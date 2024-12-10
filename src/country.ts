import { bindable } from "aurelia-framework";

type ICountry = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
};
export class Country {
  @bindable country: ICountry;
}
