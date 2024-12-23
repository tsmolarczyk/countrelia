import { bindable } from "aurelia-framework";

export class SearchBar {
  @bindable public onSearch: (searchQuery: string) => void;

  public handleKeyUp(event: KeyboardEvent) {
    if (
      event.key === "Enter" &&
      (event.target as HTMLInputElement).value.length > 3
    ) {
      const query = (event.target as HTMLInputElement).value;
      this.onSearch(query);
    }
  }

  public resetSearch() {
    this.onSearch("");
  }
}
