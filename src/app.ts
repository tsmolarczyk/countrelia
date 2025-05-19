import { PLATFORM } from 'aurelia-pal';
import type { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    public message = 'Hello';
    public router: Router;

    configureRouter(config: RouterConfiguration, router: Router): void {
        this.router = router;

        config.title = 'Coutrelia';
        config.options.pushState = true;
        config.options.root = '/';
        config.map([
            {
                route: ['', 'home'],
                name: 'home',
                moduleId: PLATFORM.moduleName('home'),
                title: 'Home'
            },
            {
                route: 'grid',
                name: 'grid',
                moduleId: PLATFORM.moduleName('grid'),
                title: 'Grid'
            },
            {
                route: 'details',
                name: 'details',
                moduleId: PLATFORM.moduleName('details'),
                nav: true,
                title: 'Details'
            }
        ]);
    }
}
