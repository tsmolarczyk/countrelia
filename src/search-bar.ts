import { autoinject, bindable } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject()
export class SearchBar {
    @bindable public onSearch: (searchQuery: string) => void;

    constructor(private router: Router) {}

    public handleKeyUp(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.target as HTMLInputElement).value.length > 3) {
            const query = (event.target as HTMLInputElement).value;
            this.onSearch(query);
        }
    }

    public resetSearch() {
        this.onSearch('');
    }

    public navigateToGrid() {
        this.router.navigate('grid');
    }
}
