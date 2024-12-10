export class Filter {
  regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  selectedRegion = "";
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectRegion(region) {
    this.selectedRegion = region;
    this.isOpen = false;
  }
}
