import { RouterConfiguration, Router } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";

export class App {
  public message = "Hello";
  public router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;

    config.title = "Coutrelia";
    config.options.pushState = true;
    config.options.root = "/";
    config.map([
      {
        route: ["", "home"],
        name: "home",
        moduleId: PLATFORM.moduleName("home"),
        title: "Home",
      },
      {
        route: "details",
        name: "details",
        moduleId: PLATFORM.moduleName("details"),
        nav: true,
        title: "Details",
      },
    ]);
  }
}
