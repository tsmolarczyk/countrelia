import { createGrid, GridApi, GridOptions, ModuleRegistry } from 'ag-grid-community';
import { AllEnterpriseModule } from 'ag-grid-enterprise';
import { autoinject } from 'aurelia-framework';
import { CountryService } from 'country-service';

// Register all Community and Enterprise features
ModuleRegistry.registerModules([AllEnterpriseModule]);

@autoinject()
export class Grid {
    public countryData = [];
    public api: GridApi;
    private gridOptions: GridOptions;
    private gridContainer: HTMLElement;

    constructor(private countryService: CountryService) {
        this.gridOptions = {
            columnDefs: [
                { headerName: 'Name', field: 'name.common' },
                { headerName: 'Capital', field: 'capital' },
                { headerName: 'Population', field: 'population' }
            ]
        };
    }

    public async attached() {
        this.api = createGrid(this.gridContainer, this.gridOptions);
        await this.loadData();
    }

    private async loadData() {
        this.countryData = await this.countryService.getInitialCountries();
        if (this.api) {
            this.api.setGridOption('rowData', this.countryData);
        }
    }
}
