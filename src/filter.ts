import { bindable } from "aurelia-framework";
import { Region, REGIONS } from "types/constants";

export class Filter {
  @bindable public onRegionChange: (region: Region) => void;

  public regions = REGIONS;
  public selectedRegion = "";
  public isOpen = false;

  private toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  private selectRegion(region: Region) {
    this.selectedRegion = region;
    this.isOpen = false;
    this.onRegionChange(region);
  }
}
